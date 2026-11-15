#!/usr/bin/env python3
"""Direction A codemod — type scale tokens and one layout axis.

  python3 scripts/redesign-a/codemod.py --dry-run   # report only
  python3 scripts/redesign-a/codemod.py             # apply

Idempotent. Rewrites only class tokens and plain-px inline font sizes inside
quoted string literals; never JSX text, href, src, alt, ids or data.
See docs/PLAN-smjer-A-klinicki-casopis.md (D3, D4).
"""
import glob
import re
import sys
from collections import Counter

DRY = "--dry-run" in sys.argv

FILES = sorted(
    set(glob.glob("src/pages/*.tsx"))
    - {"src/pages/SoulScanPage.tsx", "src/pages/LogoProcessorPage.tsx"}
) + sorted(glob.glob("src/components/home/*.tsx")) + [
    "src/components/CourseHero.tsx",
    "src/components/MTHero.tsx",
    "src/components/CFMHero.tsx",
    "src/components/ContactFooter.tsx",
    "src/components/ERPSAccordion.tsx",
    "src/components/course/CourseRecommendations.tsx",
    "src/components/ui/CourseStickyBar.tsx",
    "src/components/layout/GlobalHeader.tsx",
    "src/components/ui/nav-header.tsx",
]

SCALE = ("label", "caption", "body-s", "body", "body-l", "h3", "h2", "display")
BP = r"(?:(?:sm|md|lg|xl|2xl):)"
SIZE_TOKEN = re.compile(
    rf"(?<![\w:\-/\[]){BP}?text-(?:\[\d+(?:\.\d+)?(?:px|rem)\]|xs|sm|base|lg|xl|[2-7]xl|{'|'.join(SCALE)})(?![\w\-\[/])"
)
PX_TOKEN = re.compile(rf"(?<![\w:\-/\[])({BP}?)text-\[(\d+(?:\.\d+)?)px\](?![\w\-\[/])")
NAMED = re.compile(r"(?<![\w:\-/\[])text-(sm|base)(?![\w\-\[/])")
STRING = re.compile(r"(\"(?:[^\"\\\n]|\\.)*\"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)")
HEADING = re.compile(r"<(h[123])\b((?:[^>]|=>)*?)className=(\"[^\"]*\"|'[^']*')", re.S)
INLINE_PX = re.compile(r"(fontSize:\s*)(['\"])(\d+(?:\.\d+)?)px\2")
WRAP_WIDE = re.compile(r"(?<![\w:\-])(?:max-w-(?:5xl|6xl|7xl) mx-auto|mx-auto max-w-(?:5xl|6xl|7xl))(?![\w\-])")
WRAP_NARROW = re.compile(r"(?<![\w:\-])(?:max-w-(?:2xl|3xl|4xl) mx-auto|mx-auto max-w-(?:2xl|3xl|4xl))(?![\w\-])")
GUTTER = re.compile(r"(?<=px-6) (?:md|lg):px-10(?![\w\-])")

# R6: documentary reveal — opacity only (02_WEB_SYSTEM.md §11). Drops the y offset
# from simple framer-motion props and the scroll parallax on hero text blocks.
MOTION_Y = re.compile(r"((?:initial|animate|whileInView|exit)=\{\{\s*opacity:\s*[\d.]+),\s*y:\s*-?\d+(\s*\}\})")
PARALLAX_DEF = re.compile(r"^[ \t]*const\s+(y|heroY)\s*=\s*useTransform\(scrollYProgress,\s*\[0,\s*1\],\s*\[[\"']0%[\"'],\s*[\"']\d+%[\"']\]\);[ \t]*\n", re.M)
PARALLAX_USE = re.compile(r"(style=\{\{\s*opacity(?::\s*\w+)?),\s*y(?::\s*heroY)?(\s*\}\})")

stats = Counter()
manual = []


def px_to_token(px):
    if px <= 10.5:
        return "text-label"
    if px <= 11.5:
        return "text-caption"
    if px <= 12.5:
        return "text-body"
    if px <= 16:
        return "text-body-l"
    return None


def px_to_inline(px):
    """Inline sizes are written in rem so a second run cannot re-map them."""
    if px <= 10.5:
        return "0.6875rem"  # 11 px
    if px <= 11.5:
        return "0.8125rem"  # 13 px
    if px <= 12.5:
        return "0.9375rem"  # 15 px
    if px <= 14.5:
        return "1rem"  # 16 px
    return None


def dedupe(chunk):
    """Drop a breakpoint-prefixed scale token when the same base token is present."""
    for name in SCALE:
        if re.search(rf"(?<![\w:\-])text-{name}(?![\w\-])", chunk):
            chunk = re.sub(rf" ?(?<![\w\-]){BP}text-{name}(?![\w\-])", "", chunk)
    return re.sub(r"(?<=\S)  +(?=\S)", " ", chunk)


def rewrite_string(match, path):
    chunk = match.group(0)
    if "text-" not in chunk and "max-w-" not in chunk and "px-10" not in chunk:
        return chunk
    orig = chunk

    def px_sub(m):
        token = px_to_token(float(m.group(2)))
        if token is None:
            return m.group(0)
        stats["R1 px token"] += 1
        return m.group(1) + token

    chunk = PX_TOKEN.sub(px_sub, chunk)

    def named_sub(m):
        stats["R1 named token"] += 1
        return "text-body" if m.group(1) == "sm" else "text-body-l"

    chunk = NAMED.sub(named_sub, chunk)
    chunk = dedupe(chunk)

    if "text-center" not in chunk:
        chunk, n = WRAP_NARROW.subn("shell-narrow", chunk)
        stats["R4 narrow wrapper"] += n
    elif WRAP_NARROW.search(chunk):
        manual.append(f"{path}: centred narrow wrapper kept: {chunk[:90]}")
    chunk, n = WRAP_WIDE.subn("max-w-shell mx-auto", chunk)
    stats["R4 wide wrapper"] += n
    chunk, n = GUTTER.subn("", chunk)
    stats["R4 gutter"] += n
    return chunk if chunk != orig else orig


def rewrite_heading(match, path):
    tag, attrs, cls = match.group(1), match.group(2), match.group(3)
    target = {"h1": "text-display", "h2": "text-h2", "h3": "text-h3"}[tag]
    quote, body = cls[0], cls[1:-1]
    if tag != "h1" and "font-playfair" not in body:
        return match.group(0)
    if re.search(rf"(?<![\w:\-]){target}(?![\w\-])", body) and len(SIZE_TOKEN.findall(body)) == 1:
        return match.group(0)
    new = SIZE_TOKEN.sub("", body)
    new = re.sub(r"\s+", " ", new).strip() + " " + target
    stats[f"R2 {tag}"] += 1
    return f"<{tag}{attrs}className={quote}{new}{quote}"


def inline_sub(m):
    size = px_to_inline(float(m.group(3)))
    if size is None:
        return m.group(0)
    stats["R3 inline px"] += 1
    return f"{m.group(1)}{m.group(2)}{size}{m.group(2)}"


for path in FILES:
    src = open(path, encoding="utf-8").read()
    out = STRING.sub(lambda m: rewrite_string(m, path), src)
    out = HEADING.sub(lambda m: rewrite_heading(m, path), out)
    out = INLINE_PX.sub(inline_sub, out)
    out, n = MOTION_Y.subn(r"\1\2", out)
    stats["R6 y reveal removed"] += n
    if PARALLAX_DEF.search(out) and PARALLAX_USE.search(out):
        out, n1 = PARALLAX_DEF.subn("", out)
        out, n2 = PARALLAX_USE.subn(r"\1\2", out)
        stats["R6 hero parallax removed"] += n2
    for m in re.finditer(r"<(h[123])\b(?:[^>]|=>)*?>", out, re.S):
        tag_src = m.group(0)
        if "className={" in tag_src or ("fontSize" in tag_src and "clamp" in tag_src) or "className" not in tag_src:
            line = out[: m.start()].count("\n") + 1
            manual.append(f"{path}:{line}: <{m.group(1)}> needs manual size ({tag_src[:70].strip()}…)")
    if out != src:
        stats["files changed"] += 1
        if not DRY:
            open(path, "w", encoding="utf-8").write(out)

print("DRY RUN" if DRY else "APPLIED")
for key, value in sorted(stats.items()):
    print(f"  {key:22} {value}")
print(f"manual review ({len(manual)}):")
for item in manual:
    print("  ", item)
