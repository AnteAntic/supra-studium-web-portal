# Supra Studium — Media Guidelines

Source: DESIGN.md image direction section + image optimization audit (2026-05-28).
Last updated: 2026-05-28

---

## Image Export Sizes

### Hero Video Background

- Format: `.mp4` (H.264 or H.265)
- Resolution: 1920×1080 minimum
- Target file size: under 8MB for web delivery
- Mute: always `muted autoPlay loop playsInline`
- No audio track needed (all hero videos are atmospheric background only)

### Hero Fallback Image (poster)

- Format: `.jpg` or `.webp`
- Resolution: 1920×1080
- Target size: under 300KB (webp preferred)
- Use `poster` attribute on `<video>` tag

### Full-Bleed Section Images (intermezzo strips)

- Aspect ratio: no fixed ratio — `h-[55vh]` container
- Width: at least 1600px wide
- Format: `.jpg` (acceptable) or `.webp` (preferred)
- Target size: under 500KB

### Instructor Portrait

- Aspect ratio: `aspect-[4/5]`
- Width: 800px minimum (displayed at ~400px in 2-col layout)
- Format: `.jpg` or `.webp`
- Target size: under 400KB

### Documentary Grid Images (3-column)

- Aspect ratio: `aspect-[3/4]`
- Width: 600px minimum
- Format: `.jpg` or `.webp`
- Target size: under 250KB each

---

## Current File Size Audit (2026-05-28)

Files requiring compression before production:

| File | Current Size | Priority |
|------|-------------|----------|
| mt-stosic-anatomija.jpg | 3.4 MB | Critical |
| mt-parovi-rada.jpg | 3.4 MB | Critical |
| feel-heal-festival.jpg | 3.0 MB | Critical |
| cal-awudi-razgovor-narancasta.jpeg | 2.7 MB | Critical |
| lomi-*.jpg (series, 6 files) | 1.5–1.8 MB each | Significant |
| cal-procedural.mp4 | 6.2 MB | Significant (video) |
| logo-sharp.png / logo-sharp-2.png / logo-sharp-back.png | ~606 KB each | Duplicate — audit before removing |

**WebP adoption:** 7 of 232 image files are .webp. All hero fallbacks and new images should be exported as .webp.

**Recommended compression targets:**
- JPEG/PNG → compress to 70–80% quality (use ImageOptim, Squoosh, or `sharp` CLI)
- Convert JPEGs used in hero `poster` attributes to `.webp`
- Logos: consolidate to one version, export as SVG if possible

---

## Image Treatment

### Standard Treatment

```css
filter: grayscale(8%);   /* subtle desaturation, not B&W */
```

Applied consistently across all documentary/editorial images to create visual cohesion between different cameras and photographers.

### Instructor Portrait Treatment

```tsx
style={{
  filter: 'grayscale(8%)',
  objectPosition: '[adjusted per image to focus on face]',
  transform: 'scale(1.08)',     /* range: 1.08–1.12 */
  transformOrigin: 'center top'
}}
```

Scale is applied inside `overflow-hidden` containers. Never exceed 1.12 — beyond that, compression artifacts become visible.

### Forbidden Image Treatments

| Treatment | Reason |
|-----------|--------|
| `filter: brightness(1.1) saturate(1.2)` | Too warm/wellness aesthetic |
| Dramatic vignette overlay on static images | Theatrical, not clinical |
| Stock photo aesthetic (blue gloves, staged hospital settings) | Off-brand |
| `filter: grayscale(100%)` full black-and-white | Too editorial/fashion, not documentary |

### Allowed Image Content

- Real educational situations: pairs working, demonstrations, anatomical visualisations
- Natural lighting of clinical/educational spaces
- Instructor in active teaching context, not posed portraits
- Hands-on palpation and technique demonstrations

---

## Video Overlay Rules

### Hero Video Overlay

**Correct pattern (directional gradient):**

```css
background: linear-gradient(
  100deg,
  rgba(0,0,0,0.78) 0%,
  rgba(0,0,0,0.52) 35%,
  rgba(0,0,0,0.18) 62%,
  transparent 78%
)
```

Left side is darker (text zone). Right side remains atmospheric (video visible). Never a flat overlay.

**Forbidden:**

```css
background: rgba(0,0,0,0.5);       /* flat — loses video depth */
background: rgba(0,0,0,0.7);       /* too dark — kills atmosphere */
background-color: black;            /* absolute ban */
```

### Section Background Videos

No overlay required if video is used as pure atmosphere (no text on top). If text is placed over a section video, use the same directional gradient approach.

---

## Video Compression Settings

For `public/videos/` assets:

| Parameter | Value |
|-----------|-------|
| Codec | H.264 (broad compatibility) or H.265 (smaller, modern browsers) |
| Resolution | 1920×1080 max (1280×720 acceptable for background loops) |
| Frame rate | 24fps or 25fps (cinematic feel, reduces file size vs 30/60fps) |
| Bitrate | 2–4 Mbps for 1080p background loops |
| Audio | Remove entirely (muted background video) |
| Target size | Under 8MB per file |

**Tool recommendation:** HandBrake (GUI) or `ffmpeg`:

```bash
# Compress to H.264, 3Mbps, no audio
ffmpeg -i input.mp4 -c:v libx264 -b:v 3M -an output.mp4

# Convert to H.265 for even smaller size
ffmpeg -i input.mp4 -c:v libx265 -b:v 2M -an output.mp4
```

---

## Deploy Notes

- `public/lovable-uploads/` and `public/videos/` are excluded from `deploy-quick.sh`
- Only run full `deploy.sh` when new images or videos have been added
- For single new files, use direct FTP upload (see CLAUDE.md deploy section)
- Never re-upload the entire `lovable-uploads/` folder on routine deploys

---

## Logo Usage

| File | Use |
|------|-----|
| logo-sharp.png | Primary logo — nav, header |
| logo-sharp-2.png | Duplicate — audit if same as above |
| logo-sharp-back.png | Version with background — check usage |

Action needed: consolidate to one logo file. Export SVG version for nav (sharpest at all DPI, zero file size overhead). Current PNG logos are ~606KB each — excessive for a logo.
