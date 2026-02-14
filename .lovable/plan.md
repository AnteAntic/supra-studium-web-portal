

## Fix Mobile Scroll Flickering

### Problem
When scrolling on mobile, elements like text boxes, images, and CTA buttons flicker. This is caused by two main issues:

1. **`background-attachment: fixed`** -- This CSS property is notoriously broken on mobile browsers (iOS Safari, Chrome Android). Mobile browsers handle fixed backgrounds differently, causing repaints and visual glitches during scroll.

2. **Duplicate React instances** -- Vite may bundle separate copies of React from different dependencies, causing hooks to malfunction and trigger unnecessary re-renders.

### Solution

#### 1. Remove `background-attachment: fixed` on mobile (4 files)
Replace all `backgroundAttachment: "fixed"` with responsive behavior that only applies on desktop. On mobile, the background will simply scroll normally (no visual difference to the user, but eliminates flickering).

**Files to update:**
- `src/pages/LomiLomiPage.tsx` (2 occurrences)
- `src/pages/CalabashCertificationPage.tsx` (2 occurrences)
- `src/pages/CrossfrictionPage.tsx` (1 occurrence)
- `src/pages/RasporedPage.tsx` (1 occurrence)

For each, change the inline `backgroundAttachment: "fixed"` to use a CSS class that only applies `background-attachment: fixed` on `md:` screens and above (via Tailwind), or remove it entirely and use `bg-scroll` on mobile.

#### 2. Add React deduplication in Vite config (1 file)
**File: `vite.config.ts`**
Add `resolve.dedupe: ["react", "react-dom", "react/jsx-runtime"]` to prevent multiple React instances from being bundled, which can cause hooks to misfire and trigger flickering re-renders.

#### 3. Add GPU acceleration hints to animated elements
Add `will-change: transform` and `transform: translateZ(0)` (hardware acceleration) to the hero parallax containers in `AppleHeroSection.tsx` and `HeroSection.tsx` to ensure smooth compositing on mobile GPUs.

### Summary of Changes
- **`vite.config.ts`** -- Add `dedupe` for React
- **`src/pages/LomiLomiPage.tsx`** -- Remove fixed background on mobile
- **`src/pages/CalabashCertificationPage.tsx`** -- Remove fixed background on mobile
- **`src/pages/CrossfrictionPage.tsx`** -- Remove fixed background on mobile
- **`src/pages/RasporedPage.tsx`** -- Remove fixed background on mobile
- **`src/components/ui/AppleHeroSection.tsx`** -- Add GPU acceleration hints
- **`src/components/ui/HeroSection.tsx`** -- Add GPU acceleration hints

