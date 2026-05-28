# Supra Studium — Design System Reference

Source: extracted from ManualTherapySchoolPage.tsx (canonical reference), DESIGN.md, and audit of live codebase.
Last updated: 2026-05-28

---

## Typography

### Scale

| Role | Size | Weight | Tracking | Color |
|------|------|--------|----------|-------|
| Hero headline | 2rem / text-[2rem] md | font-playfair font-semibold | default | #ffffff |
| Hero subheadline | text-sm | normal | default | rgba(255,255,255,0.72) |
| Meta strip items | 11px | font-medium (500) | 0.11em | rgba(255,255,255,0.78) |
| Eyebrow label | text-[10px] | normal | 0.25–0.28em | #B89A4F |
| Facts band — field label | 9.5px | normal | 0.25em | #B89A4F |
| Facts band — value | 18px | font-medium | default | #0e0e0e |
| Facts band — detail | 12px | normal | default | #3b3b3b |
| Section heading (light bg) | text-3xl | font-playfair | default | #1F1D1A |
| Section heading (dark bg) | text-3xl | font-playfair | default | #ffffff |
| Body text (light bg) | text-sm | normal | default | #3b3b3b |
| Body text (dark bg) | text-sm | normal | default | rgba(255,255,255,0.55) |
| Observation card quote | text-sm | normal | default | #1F1D1A · font-playfair italic |
| Pricing table — item name | text-sm | font-medium | default | #ede9e3 |
| Pricing table — date | text-xs | normal | wider | rgba(237,233,227,0.38) |
| CTA button | text-[10px] | normal | 0.22em | #3D3A35 |
| Sticky bar CTA | text-[10px] | normal | 0.22em | #3D3A35 |

### Fonts

- **Playfair Display** — headings only. Never body text. Italic for observation quotes.
- **System sans (Tailwind default)** — all UI, labels, CTA, meta, body.

---

## Color Palette

### Light Surface

| Role | Value |
|------|-------|
| Page background | #F4F1EA |
| Primary text | #1F1D1A |
| Secondary text | #3b3b3b |
| Muted text | #5F5A52 |
| Brass accent (primary) | #B89A4F |
| Brass accent (muted) | #9e8a46 / #a58d4e |
| Border / separator | rgba(0,0,0,0.06–0.08) |
| Card background | #FAF8F4 |
| Observation grid gap | #e3e3e3 |

### Dark Surface

| Role | Value |
|------|-------|
| Documentary dark (metoda sections) | #0e0e0e |
| Warm off-black (kotizacija, hero bg) | #141311 |
| Row separator | #201e1a |
| Primary text | #ede9e3 |
| Secondary text | rgba(237,233,227,0.38) |
| Muted text | rgba(237,233,227,0.32) |
| Brass on dark | #9e8a46 |
| CTA gold | #c9a832 (bg) / #1F1D1A (text) |

**Rule:** Never `#000000` or `#ffffff`. Always tint. `#141311` = warm off-black for kotizacija. `#0e0e0e` = documentary dark for content sections. The contrast is intentional.

---

## Opacity System

### Hero Meta Strip

```tsx
color: 'rgba(255,255,255,0.78)'   // item text
color: 'rgba(255,255,255,0.32)'   // separator dot
textShadow: '0 1px 2px rgba(0,0,0,0.45)'  // legibility on video
fontSize: '11px'
letterSpacing: '0.11em'
fontWeight: 500
```

### Hero Video Overlay

```css
/* Left side (text zone) darker, right side atmospheric */
background: linear-gradient(100deg, rgba(0,0,0,0.78) 0%, ... , transparent 78%)
```

Never: `bg-black/50` flat overlay. Loses video atmosphere.

### Sticky Bar Background

```tsx
backgroundColor: 'rgba(250,248,244,0.94)'
backdropFilter: 'blur(10px)'
borderBottom: '1px solid rgba(0,0,0,0.06)'
```

---

## Eyebrow System

Eyebrows appear above section headings throughout all course pages. Strict format:

```tsx
<p className="text-[10px] uppercase tracking-[0.28em]" style={{ color: '#B89A4F' }}>
  {eyebrowText}
</p>
```

- Always `text-[10px]` (not text-xs = 12px)
- Always `uppercase`
- Always `tracking-[0.28em]` (some sections use 0.25em on facts band)
- Always `#B89A4F` — never white, never dark, never off-brand
- No icons, no bullets, no decorative elements before the text

---

## Spacing

### Hero

```
layout:         items-end pb-[18%] md:pb-[16%]
content:        max-w-2xl
headline → CTA gap: mb-6 md:mb-8
meta strip gap: columnGap: 14px / rowGap: 4px
```

### Section Padding

```
Standard section:    py-20 md:py-28 px-6
Facts band cells:    py-7 px-6 md:px-8
Kotizacija rows:     px-8 py-6
Observation cards:   px-8 py-10
Clinical blockquote: pl-8 (left border indent)
```

### Facts Band Cell Spacing

```
field label → value: mb-2
value → detail:      mt-1
cell border:         border-r border-[rgba(0,0,0,0.08)]
```

---

## Hero Structure

The hero pattern (from AkupresuraPage.tsx as pilot, applied across pages):

1. **Full-bleed video** — `position: absolute, inset-0, top: -5rem` (offsets nav)
2. **Directional overlay** — gradient left-heavy, never flat
3. **Content zone** — `items-end pb-[18%]`, `max-w-2xl`
4. **Eyebrow** — 10px brass, tracking 0.28em
5. **Headline** — Playfair semibold, ~2rem, mixed case
6. **Subheadline** — 14px, white/72 opacity
7. **Meta strip** — 11px, white/78, tracking 0.11em, separator dots at 0.32
8. **CTA row** — primary (rounded-sm, uppercase, institutional stamp) + secondary (plain, em-dash prefix)

---

## CTA Hierarchy

### Primary CTA

```tsx
className="rounded-sm uppercase tracking-wider text-xs py-3 px-8"
style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', background: 'transparent' }}
```

Never: `rounded-2xl`, `scale(1.05)` hover, price inside button text.

### Secondary CTA

```tsx
<button className="text-sm text-white/70">
  — {label}
</button>
```

Plain `<button>`, no border, em-dash prefix, lowercase or mixed case.

### Sticky Bar CTA

See `src/components/ui/CourseStickyBar.tsx`.

| Termin status | ctaText | ctaHref |
|---------------|---------|---------|
| Confirmed date | "Rezerviraj mjesto" | Tally form URL |
| Unconfirmed ("Na upit") | "Pošalji upit" | https://tally.so/r/wA5kvD |
| Sold out | soldOut={true} → "Obavijesti me" | #kontakt |

Sticky bar position: `top-[57px] md:top-20` (mobile nav = 57px, desktop = 73px).

---

## Component Patterns

### Observation Cards

```tsx
<div className="grid md:grid-cols-3 gap-px bg-[#e3e3e3]">
  <div className="bg-[#FAF8F4] px-8 py-10">
    <p className="text-sm text-[#1F1D1A] leading-relaxed font-playfair italic">
      "{quote}"
    </p>
  </div>
</div>
```

`gap-px` with a grid background creates 1px separators. No card borders.

### Clinical Blockquote

```tsx
<blockquote className="border-l border-[#a58d4e]/30 pl-8">
  <p className="text-sm text-[#3b3b3b] leading-relaxed mb-4">{context}</p>
  <p className="text-sm text-[#1F1D1A] leading-relaxed font-medium">{insight}</p>
</blockquote>
```

### Editorial Pricing Table

```tsx
<div className="space-y-px bg-[#201e1a]">
  <div className="bg-[#141311] grid grid-cols-[1fr_auto_auto_auto] gap-6 px-8 py-6 items-center">
    {/* city, date, price, PDF link */}
  </div>
</div>
```

PDF link always reads "PDF Program →" — never "PDF →", "Raspored →", or "Preuzmi".

---

## Motion

### Documentary Reveal (course pages)

```tsx
const fadeUp = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};
```

**Rule:** Opacity only on course pages. No `y` translate reveal — gives landing page character that is not Supra. Stagger: `custom={i * 0.07}` for lists, `custom={0.15}` for follow-on content.

### Hero Meta Strip

```tsx
initial={{ opacity: 0, y: 4 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 1.05, duration: 0.85, ease: 'easeOut' }}
```

Hero elements stagger: headline 0.2s, subheadline 0.65s, meta strip 1.05s.

---

## Forbidden Patterns

| Pattern | Reason |
|---------|--------|
| `rounded-2xl` on CTA | SaaS, not institutional |
| `scale(1.05)` button hover | Overemphatic |
| `bg-black/50` video overlay | Kills video atmosphere |
| Glassmorphism card | Luxury funnel, not documentary |
| `y: [16, 0]` scroll reveal | Landing page character |
| TextShimmer on headline | Overemphatic |
| Red urgency badge | Directly banned |
| Price in primary CTA button | Banned |
| Pure `#ffffff` on dark | Use `#ede9e3` |
| Pure `bg-black` / `#000000` | Use `#141311` or `#0e0e0e` |
| Gradient text (`background-clip: text`) | Decorative, meaningless |
| Side-stripe border (>1px colored) | Banned absolutely |
| Nested cards | Always wrong |
| Identical card grids (icon+heading+text) | AI slop |
