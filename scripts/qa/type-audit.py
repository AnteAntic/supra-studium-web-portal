#!/usr/bin/env python3
"""Layout/type/a11y audit for the Direction A redesign.

  python3 scripts/qa/type-audit.py            # all checks
  python3 scripts/qa/type-audit.py --report   # print numbers, never fail

Checks per routed page (dev server on http://localhost:8080):
  E2 type: no visible text < 11 px; long paragraphs >= 15 px; h1 size;
           distinct font sizes <= 14
  E3 axis: left edge of non-centred h2 takes <= 2 values at 1440
  E4 overflow: no horizontal overflow at 390 / 768 / 1440
  E6 motion: with reduced motion every <video> is paused and nothing is left
           transparent; focus outline visible on the first tab stops of Home
"""
import sys

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
    "/kontakt",
    "/ne-postoji",
]
REPORT = "--report" in sys.argv

TYPE_JS = r"""() => {
  const root = document.getElementById('root');
  const visible = e => {
    const r = e.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return false;
    const cs = getComputedStyle(e);
    return cs.visibility !== 'hidden' && cs.display !== 'none' && !e.closest('.sr-only');
  };
  const sizes = {}; const tiny = []; const smallPara = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const n = walker.currentNode; const p = n.parentElement;
    const t = n.nodeValue.replace(/\s+/g, ' ').trim();
    if (!t || !p || !visible(p) || p.closest('iframe')) continue;
    const fs = Math.round(parseFloat(getComputedStyle(p).fontSize) * 10) / 10;
    sizes[fs] = (sizes[fs] || 0) + 1;
    if (fs < 11) tiny.push(fs + 'px ' + t.slice(0, 40));
  }
  for (const e of root.querySelectorAll('p, li')) {
    if (!visible(e)) continue;
    const t = e.textContent.replace(/\s+/g, ' ').trim();
    const fs = parseFloat(getComputedStyle(e).fontSize);
    if (t.length >= 80 && fs < 15) smallPara.push(fs + 'px ' + t.slice(0, 50));
  }
  const h1 = root.querySelector('h1');
  const h2x = [...root.querySelectorAll('h2')].filter(visible).filter(e => {
    let n = e; while (n && n !== root) { if (getComputedStyle(n).textAlign === 'center') return false; n = n.parentElement; }
    return true;
  }).map(e => Math.round(e.getBoundingClientRect().left));
  const doc = document.documentElement;
  const wide = [...root.querySelectorAll('*')].filter(e => {
    const r = e.getBoundingClientRect();
    if (!(r.width > 0 && (r.right > doc.clientWidth + 1 || r.left < -1)) || getComputedStyle(e).position === 'fixed') return false;
    // Ignore anything clipped by an ancestor (bleeding media inside overflow-hidden frames, tickers).
    for (let n = e.parentElement; n && n !== document.body; n = n.parentElement) {
      const ox = getComputedStyle(n).overflowX;
      if (ox === 'hidden' || ox === 'clip' || ox === 'auto' || ox === 'scroll') return false;
    }
    return true;
  }).slice(0, 5).map(e => e.tagName + '.' + String(e.className).slice(0, 60));
  // Text cut off by a fixed-height, overflow-hidden ancestor (a larger scale can do this).
  const clipped = [...root.querySelectorAll('*')].filter(e => {
    const cs = getComputedStyle(e);
    if (!['hidden', 'clip'].includes(cs.overflowY) || !visible(e)) return false;
    if (e.scrollHeight <= e.clientHeight + 3) return false;
    if (e.closest('video, iframe') || cs.position === 'fixed') return false;
    const r = e.getBoundingClientRect();
    return [...e.querySelectorAll('p, a, li, h1, h2, h3, span, button')].some(t => {
      if (!t.textContent.trim() || !visible(t)) return false;
      const tr = t.getBoundingClientRect();
      return tr.bottom > r.bottom + 3 || tr.top < r.top - 3;
    });
  }).slice(0, 4).map(e => e.tagName + '.' + String(e.className).slice(0, 70) + ' :: ' + e.textContent.trim().slice(0, 40));
  return {
    clipped,
    sizes: Object.keys(sizes).map(Number).sort((a, b) => a - b), tiny: tiny.slice(0, 6), smallPara: smallPara.slice(0, 6),
    h1: h1 ? parseFloat(getComputedStyle(h1).fontSize) : 0, h2x: [...new Set(h2x)].sort((a, b) => a - b),
    overflowX: doc.scrollWidth - doc.clientWidth, wide,
  };
}"""

MOTION_JS = r"""async () => {
  const root = document.getElementById('root');
  const sample = () => [...root.querySelectorAll('*')].map(e => {
    const r = e.getBoundingClientRect();
    return (r.width === 0 || r.height === 0) ? null : parseFloat(getComputedStyle(e).opacity);
  });
  const els = [...root.querySelectorAll('*')];
  const first = sample();
  await new Promise(r => setTimeout(r, 700));
  const second = sample();
  // A reveal that is still pending sits at ~0; one that is running changes between samples.
  // Deliberately translucent decoration is constant and above 0.
  const pending = [], moving = [];
  els.forEach((e, i) => {
    if (first[i] === null || second[i] === null) return;
    if (e.closest('[aria-hidden="true"], [inert]')) return;  // deliberately hidden UI, not a pending reveal
    const label = e.tagName + ' ' + second[i] + ' ' + e.textContent.trim().slice(0, 40);
    if (second[i] < 0.02 && e.textContent.trim().length > 20) pending.push(label);
    if (Math.abs(first[i] - second[i]) > 0.01) moving.push(label);
  });
  const videos = [...document.querySelectorAll('video')];
  return {
    videos: videos.length,
    notHeld: videos.filter(v => !v.paused || v.currentTime !== 0 || v.autoplay).length,
    pending: pending.slice(0, 5), moving: moving.slice(0, 5),
  };
}"""


def scroll_through(page):
    height = page.evaluate("document.documentElement.scrollHeight")
    y = 0
    while y < height:
        page.evaluate(f"window.scrollTo(0,{y})")
        page.wait_for_timeout(110)
        y += 700
    page.evaluate("window.scrollTo(0,0)")
    page.wait_for_timeout(500)


failures = []


def fail(msg):
    failures.append(msg)
    print("   FAIL", msg)


with sync_playwright() as pw:
    browser = pw.chromium.launch()
    for width, height in [(1440, 900), (768, 1024), (390, 844)]:
        ctx = browser.new_context(viewport={"width": width, "height": height})
        page = ctx.new_page()
        for route in ROUTES:
            page.goto(BASE + route, wait_until="load")
            page.wait_for_timeout(1500)
            scroll_through(page)
            m = page.evaluate(TYPE_JS)
            print(f"{width:5} {route:40} sizes={len(m['sizes']):2} min={m['sizes'][0] if m['sizes'] else 0} h1={m['h1']:.0f} h2x={m['h2x']} overflow={m['overflowX']}")
            if m["clipped"]:
                fail(f"E4 clipped text {route} @{width}: {m['clipped']}")
            if m["overflowX"] != 0 or m["wide"]:
                fail(f"E4 overflow {route} @{width}: {m['overflowX']} {m['wide']}")
            if width != 768:
                if m["tiny"]:
                    fail(f"E2 text <11px {route} @{width}: {m['tiny']}")
                if m["smallPara"]:
                    fail(f"E2 paragraph <15px {route} @{width}: {m['smallPara']}")
                if len(m["sizes"]) > 14:
                    fail(f"E2 distinct sizes {route} @{width}: {len(m['sizes'])} {m['sizes']}")
                if route != "/ne-postoji":
                    need = 56 if width == 1440 else 32
                    if m["h1"] < need:
                        fail(f"E2 h1 {route} @{width}: {m['h1']} < {need}")
            if width == 1440 and len(m["h2x"]) > 2:
                fail(f"E3 axis {route}: h2 left edges {m['h2x']}")
        ctx.close()

    ctx = browser.new_context(viewport={"width": 1440, "height": 900}, reduced_motion="reduce")
    page = ctx.new_page()
    for route in ROUTES:
        page.goto(BASE + route, wait_until="load")
        page.wait_for_timeout(1500)
        scroll_through(page)
        m = page.evaluate(MOTION_JS)
        print(f"reduced-motion {route:40} videos not held {m['notHeld']}/{m['videos']} pending {len(m['pending'])} moving {len(m['moving'])}")
        if m["notHeld"]:
            fail(f"E6 video not held (paused, currentTime 0, autoplay off) under reduced motion {route}")
        if m["pending"] or m["moving"]:
            fail(f"E6 reveal not settled {route}: pending {m['pending']} moving {m['moving']}")

    # Client-side navigation: videos mounted after the first load must be held too.
    VIDEO_STATE = "() => [...document.querySelectorAll('video')].map(v => ({paused: v.paused, t: v.currentTime, auto: v.autoplay}))"
    page.goto(BASE + "/kontakt", wait_until="load")
    page.wait_for_timeout(1500)
    for href in ["/skola-manualne-terapije", "/"]:
        if href == "/":
            page.locator('header a[href="/"]').first.click()
        else:
            page.get_by_role("button", name="TEČAJEVI").click()
            page.get_by_role("menuitem", name="Škola manualne terapije").click()
        page.wait_for_timeout(2500)
        state = page.evaluate(VIDEO_STATE)
        ok = page.url.endswith(href) and bool(state) and all(v["paused"] and v["t"] == 0 and not v["auto"] for v in state)
        print(f"reduced-motion client nav -> {href:26} {state} {'ok' if ok else 'FAIL'}")
        if not ok:
            fail(f"E6 video not held after client-side navigation to {href}: {page.url} {state}")
    ctx.close()

    # Live preference change while delayed hero reveals are still pending.
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    page.goto(BASE + "/", wait_until="commit")
    page.wait_for_selector("h1")
    before = page.evaluate("() => [...document.querySelectorAll('section:first-of-type [style*=\"opacity\"]')].map(e => parseFloat(getComputedStyle(e).opacity))")
    page.emulate_media(reduced_motion="reduce")
    page.wait_for_timeout(250)
    after = page.evaluate("() => [...document.querySelectorAll('section:first-of-type h1, section:first-of-type p, section:first-of-type a')].map(e => { let o = 1; for (let n = e; n && n.id !== 'root'; n = n.parentElement) o *= parseFloat(getComputedStyle(n).opacity); return o; })")
    state = page.evaluate(VIDEO_STATE)
    ok = bool(after) and all(o > 0.99 for o in after) and all(v["paused"] and not v["auto"] for v in state) and any(o < 0.99 for o in before)
    print(f"live switch to reduce: hero opacities before {before} after {after} videos {state} {'ok' if ok else 'FAIL'}")
    if not ok:
        fail(f"E6 live preference switch did not settle reveals: before {before} after {after} {state}")
    ctx.close()

    # Live preference change on every routed page: after the switch nothing may keep animating,
    # including JavaScript-driven transforms (hero rule scaleX, sticky bar y, modal scale).
    SAMPLE = """() => [...document.querySelectorAll('#root *')].map(e => { const r = e.getBoundingClientRect();
      if (!r.width && !r.height) return ''; const cs = getComputedStyle(e); return cs.opacity + '|' + cs.transform; })"""
    HERO_HIDDEN = """() => [...(document.querySelector('#root section') || document.querySelector('main')).querySelectorAll('h1, p')].filter(e => {
      let o = 1; for (let n = e; n && n.id !== 'root'; n = n.parentElement) o *= parseFloat(getComputedStyle(n).opacity); return o < 0.99; }).length"""
    for route in ROUTES:
        ctx = browser.new_context(viewport={"width": 1440, "height": 900})
        page = ctx.new_page()
        page.goto(BASE + route, wait_until="commit")
        page.wait_for_selector("h1")
        page.emulate_media(reduced_motion="reduce")
        page.wait_for_timeout(200)
        first = page.evaluate(SAMPLE)
        page.wait_for_timeout(500)
        second = page.evaluate(SAMPLE)
        moving = sum(1 for x, y in zip(first, second) if x != y) + abs(len(first) - len(second))
        hidden = page.evaluate(HERO_HIDDEN)
        print(f"live switch {route:40} still moving {moving} hero not opaque {hidden}")
        if moving or hidden:
            fail(f"E6 live switch left animations running on {route}: moving {moving}, hero not opaque {hidden}")
        ctx.close()

    # Live preference change must not cost the visitor anything: typed text, focus and scroll stay.
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    page.goto(BASE + "/", wait_until="load")
    page.wait_for_timeout(1200)
    field = page.locator("#kontakt textarea").first
    field.scroll_into_view_if_needed()
    field.fill("Poruka u tijeku")
    field.focus()
    scroll_before = page.evaluate("window.scrollY")
    page.emulate_media(reduced_motion="reduce")
    page.wait_for_timeout(400)
    kept = page.evaluate("() => ({ value: document.querySelector('#kontakt textarea').value, focused: document.activeElement === document.querySelector('#kontakt textarea'), y: window.scrollY })")
    ok = kept["value"] == "Poruka u tijeku" and kept["focused"] and abs(kept["y"] - scroll_before) < 2
    print(f"live switch keeps state: {kept} scroll before {scroll_before} {'ok' if ok else 'FAIL'}")
    if not ok:
        fail(f"E6 live preference switch lost user state: {kept}")
    ctx.close()

    # Keyboard: open the courses dropdown and walk every item; each needs a visible 2 px outline.
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    page.goto(BASE + "/skola-manualne-terapije", wait_until="load")
    page.wait_for_timeout(1200)
    page.get_by_role("button", name="TEČAJEVI").focus()
    page.keyboard.press("Enter")
    page.wait_for_timeout(400)
    items = page.evaluate("document.querySelectorAll('[role=menuitem]').length")
    seen = set()
    for i in range(items):
        if i:
            page.keyboard.press("ArrowDown")
            page.wait_for_timeout(120)
        info = page.evaluate(r"""() => { const e = document.activeElement; const cs = getComputedStyle(e);
          return { text: e.textContent.trim(), role: e.getAttribute('role'), style: cs.outlineStyle, width: parseFloat(cs.outlineWidth) }; }""")
        seen.add(info["text"])
        ok = info["role"] == "menuitem" and info["style"] != "none" and info["width"] >= 2
        if not ok:
            fail(f"E6 dropdown item without visible focus: {info}")
    print(f"dropdown keyboard: {items} items, {len(seen)} focused, all with 2px outline" if len(seen) == items == 8 else f"dropdown keyboard: items {items} seen {len(seen)}")
    if not (items == 8 and len(seen) == 8):
        fail(f"E6 dropdown keyboard traversal reached {len(seen)}/{items} items")
    ctx.close()

    # Mobile menu on short screens: every entry (8 courses + 4 main links) must be reachable.
    for h in (600, 520, 460):
        ctx = browser.new_context(viewport={"width": 390, "height": h}, is_mobile=True, has_touch=True)
        page = ctx.new_page()
        page.goto(BASE + "/", wait_until="load")
        page.wait_for_timeout(1000)
        page.get_by_role("button", name="Open Menu").click()
        page.wait_for_timeout(300)
        page.locator("header button:visible", has_text="TEČAJEVI").first.click()
        page.wait_for_timeout(300)
        panel = page.locator("header div.overflow-y-auto")
        entries = panel.locator("a, button")
        n = entries.count()
        unreachable = []
        for i in range(n):
            el = entries.nth(i)
            el.scroll_into_view_if_needed(timeout=2000)
            box = el.bounding_box()
            if not box or box["y"] < 0 or box["y"] + box["height"] > h + 1:
                unreachable.append(el.inner_text().strip()[:24])
        print(f"mobile menu {h}px: {n} entries, unreachable {unreachable}")
        if n != 12 or unreachable:
            fail(f"E4 mobile menu at {h}px: {n} entries, unreachable {unreachable}")
        ctx.close()

    # Video facade activated by keyboard: focus must move into the mounted player.
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    page.goto(BASE + "/", wait_until="load")
    page.wait_for_timeout(1200)
    btn = page.locator('button[aria-label="Day 1 Recap"]')
    btn.scroll_into_view_if_needed()
    btn.focus()
    page.keyboard.press("Enter")
    page.wait_for_timeout(800)
    active = page.evaluate("() => { const e = document.activeElement; return e.tagName + '|' + (e.getAttribute('title') || ''); }")
    print(f"facade keyboard activation -> focus on {active}")
    if active != "IFRAME|Day 1 Recap":
        fail(f"E6 focus not moved into the player after keyboard activation: {active}")
    ctx.close()

    # Short screens (small phones, phone in landscape): hero text must stay below the header and inside the hero.
    HERO_CLIP = """() => { const sec = document.querySelector('#root section') || document.querySelector('main > div > div');
      const s = sec.getBoundingClientRect(); const hdr = document.querySelector('header').getBoundingClientRect().bottom;
      return [...sec.querySelectorAll('h1, p, a, button')].filter(e => e.offsetParent && !e.closest('.sr-only') && e.textContent.trim())
        .filter(e => { const r = e.getBoundingClientRect(); return r.top < Math.max(s.top, 0) + hdr - 2 || r.bottom > s.bottom + 1; })
        .map(e => e.tagName + ':' + e.textContent.trim().slice(0, 22)); }"""
    for w, h in ((390, 460), (390, 600), (844, 390), (1024, 600)):
        ctx = browser.new_context(viewport={"width": w, "height": h}, is_mobile=w < 900, has_touch=w < 900)
        page = ctx.new_page()
        for route in ROUTES:
            page.goto(BASE + route, wait_until="load")
            page.wait_for_timeout(1500)
            clipped = page.evaluate(HERO_CLIP)
            if clipped:
                fail(f"E4 hero text clipped or under header {route} @{w}x{h}: {clipped[:3]}")
        print(f"short screen {w}x{h}: hero check done")
        ctx.close()

    # Keyboard focus on the shared contact form fields (footer on every page).
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    page.goto(BASE + "/", wait_until="load")
    page.wait_for_timeout(1200)
    page.locator("#kontakt input, #kontakt textarea").first.scroll_into_view_if_needed()
    page.locator("footer a, #kontakt a").first.focus()
    seen = 0
    for _ in range(12):
        page.keyboard.press("Tab")
        info = page.evaluate(r"""() => { const e = document.activeElement; const cs = getComputedStyle(e);
          return { tag: e.tagName, name: e.getAttribute('name') || e.getAttribute('placeholder') || '', style: cs.outlineStyle, width: parseFloat(cs.outlineWidth) }; }""")
        if info["tag"] in ("INPUT", "TEXTAREA"):
            seen += 1
            ok = info["style"] != "none" and info["width"] >= 2
            print(f"focus {info['tag']:8} {info['name']:20} outline={info['style']} {info['width']}px {'ok' if ok else 'MISSING'}")
            if not ok:
                fail(f"E6 focus outline missing on contact field {info['name']}")
    if seen < 4:
        fail(f"E6 contact fields reached by Tab: {seen} (expected 4)")
    ctx.close()

    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    page.goto(BASE + "/", wait_until="load")
    page.wait_for_timeout(1500)
    stops = []
    for _ in range(14):
        page.keyboard.press("Tab")
        page.wait_for_timeout(60)
        stops.append(page.evaluate(r"""() => { const e = document.activeElement; const cs = getComputedStyle(e);
          return { tag: e.tagName, text: (e.textContent || e.getAttribute('aria-label') || '').trim().slice(0, 30),
                   style: cs.outlineStyle, width: parseFloat(cs.outlineWidth) }; }"""))
    for s in stops:
        ok = s["style"] != "none" and s["width"] >= 2
        print(f"focus {s['tag']:7} {s['text']:32} outline={s['style']} {s['width']}px {'ok' if ok else 'MISSING'}")
        if not ok and s["tag"] != "BODY":
            fail(f"E6 focus outline missing on {s['tag']} '{s['text']}'")
    ctx.close()
    browser.close()

print("RESULT:", "PASS" if not failures else f"FAIL ({len(failures)})")
sys.exit(0 if (REPORT or not failures) else 1)
