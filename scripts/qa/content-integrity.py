#!/usr/bin/env python3
"""Content integrity check for visual-only changes.

Captures, per public route, everything a redesign must NOT change:
visible text nodes, link targets, form fields, headings and <head> SEO data.

  python3 scripts/qa/content-integrity.py capture BASELINE.json
  python3 scripts/qa/content-integrity.py compare BASELINE.json [ALLOW.json]

Needs the dev server on http://localhost:8080 and Python Playwright.
ALLOW.json (optional) lists deliberate, documented deltas:
  {"<route>": {"<field>": {"added": [...], "removed": [...]}}}
Exit code 0 = identical apart from allowed deltas.
"""
import json
import sys
from collections import Counter

from playwright.sync_api import sync_playwright

BASE = "http://localhost:8080"
ROUTES = [
    "/",
    "/skola-manualne-terapije",
    "/crossfriction-funkcionalna-masaza",
    "/akupresura-trigger-point",
    "/cupping-terapija",
    "/lomi-lomi",
    "/calabash-certifikacija",
    "/3d-advanced-therapeutic-stretching",
    "/klinicka-propedeutika",
    "/raspored",
    "/o-ucilistu",
    "/prijava",
    "/kontakt",
    "/ne-postoji",
]

EXTRACT = r"""() => {
  const norm = s => (s || '').replace(/\s+/g, ' ').trim();
  const root = document.getElementById('root') || document.body;
  const texts = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const n = walker.currentNode;
    const p = n.parentElement;
    if (!p || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(p.tagName)) continue;
    const t = norm(n.nodeValue);
    if (t) texts.push(t);
  }
  const q = (sel, fn) => [...root.querySelectorAll(sel)].map(fn);
  return {
    texts,
    fullText: norm(root.textContent).replace(/\s/g, ''),
    headings: q('h1,h2,h3,h4', e => e.tagName + '|' + norm(e.textContent)),
    links: q('a[href]', e => e.getAttribute('href') + '|' + (e.getAttribute('target') || '') + '|' + norm(e.textContent)),
    buttons: q('button', e => (e.getAttribute('type') || '') + '|' + norm(e.textContent)),
    forms: q('form', e => (e.getAttribute('action') || '') + '|' + (e.getAttribute('method') || '')),
    fields: q('input,textarea,select', e => e.tagName + '|' + (e.getAttribute('name') || '') + '|' + (e.getAttribute('type') || '') + '|' + (e.required ? 'required' : '') + '|' + (e.getAttribute('placeholder') || '')),
    images: q('img', e => (e.getAttribute('src') || '') + '|' + (e.getAttribute('alt') || '')),
    iframes: q('iframe', e => (e.getAttribute('src') || '') + '|' + (e.getAttribute('title') || '')),
    videos: q('video', e => [...e.querySelectorAll('source')].map(s => s.getAttribute('src')).join(',') + '|' + (e.getAttribute('poster') || '')),
    landmarks: q('header,nav,main,section,footer,article,aside', e => e.tagName).join(','),
    ids: q('[id]', e => e.id).filter(i => !/^(radix-|:r)/.test(i)),
    head: {
      title: document.title,
      meta: [...document.head.querySelectorAll('meta[name],meta[property]')].map(m => (m.getAttribute('name') || m.getAttribute('property')) + '=' + (m.getAttribute('content') || '')).sort(),
      canonical: [...document.head.querySelectorAll('link[rel=canonical]')].map(l => l.getAttribute('href')),
      jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')].map(s => norm(s.textContent)).sort(),
    },
  };
}"""


def capture():
    out = {}
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        for route in ROUTES:
            page.goto(BASE + route, wait_until="load")
            page.wait_for_timeout(2500)
            height = page.evaluate("document.documentElement.scrollHeight")
            y = 0
            while y < height:
                page.evaluate(f"window.scrollTo(0,{y})")
                page.wait_for_timeout(120)
                y += 700
            page.wait_for_timeout(400)
            out[route] = page.evaluate(EXTRACT)
        browser.close()
    return out


def diff_list(a, b):
    ca, cb = Counter(a), Counter(b)
    return sorted((cb - ca).elements()), sorted((ca - cb).elements())


def compare(base, now, allow):
    failures = 0
    for route in ROUTES:
        b, n = base[route], now[route]
        route_allow = allow.get(route, {})
        problems = []
        for field in ["texts", "headings", "links", "buttons", "forms", "fields", "images", "iframes", "videos", "ids"]:
            added, removed = diff_list(b[field], n[field])
            ok = route_allow.get(field, {})
            added = [x for x in added if x not in ok.get("added", [])]
            removed = [x for x in removed if x not in ok.get("removed", [])]
            if added or removed:
                problems.append((field, added, removed))
        if b["fullText"] != n["fullText"] and not route_allow.get("fullText"):
            if not any(p[0] == "texts" for p in problems):
                problems.append(("fullText", ["(concatenated text differs)"], []))
        for key in ["title", "meta", "canonical", "jsonld"]:
            if b["head"][key] != n["head"][key]:
                problems.append(("head." + key, [str(n["head"][key])[:300]], [str(b["head"][key])[:300]]))
        if b["landmarks"] != n["landmarks"] and not route_allow.get("landmarks"):
            problems.append(("landmarks", [n["landmarks"]], [b["landmarks"]]))
        if problems:
            failures += 1
            print(f"FAIL {route}")
            for field, added, removed in problems:
                for x in added[:12]:
                    print(f"   + [{field}] {x[:200]}")
                for x in removed[:12]:
                    print(f"   - [{field}] {x[:200]}")
        else:
            print(f"OK   {route}  ({len(n['texts'])} text nodes, {len(n['links'])} links)")
    return failures


if __name__ == "__main__":
    mode = sys.argv[1]
    if mode == "capture":
        data = capture()
        json.dump(data, open(sys.argv[2], "w"), ensure_ascii=False, indent=1)
        print("captured", len(data), "routes ->", sys.argv[2])
    elif mode == "compare":
        base = json.load(open(sys.argv[2]))
        allow = json.load(open(sys.argv[3])) if len(sys.argv) > 3 else {}
        failures = compare(base, capture(), allow)
        print("RESULT:", "PASS" if failures == 0 else f"FAIL ({failures} routes)")
        sys.exit(1 if failures else 0)
