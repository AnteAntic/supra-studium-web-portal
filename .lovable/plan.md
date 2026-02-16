

## Match Mobile Card Style to Desktop

The mobile cards currently have heavy dark overlays (`from-black/60 via-black/50 to-black/40` plus `backdrop-blur-sm` plus an extra `from-black/40` inner glow), making them much darker than the desktop version. The desktop uses a subtle gold top light + vignette edge overlay and a glassmorphism text panel.

### Changes (1 file: `src/components/WhySupraCard.tsx`)

**Remove the two mobile-only dark overlays** (lines 26 and 29) and replace them with the same gold top light + vignette overlay used on desktop (currently hidden on mobile via `hidden md:block`).

**Replace the mobile plain text block** (lines 51-56) with the same glassmorphism panel used on desktop (`backdrop-blur-md bg-white/10 border border-white/10 rounded-lg`), just slightly smaller padding/font for mobile.

Specifically:
- Remove `md:hidden` dark overlay divs (lines 26, 29)
- Change the desktop overlay div (line 33) from `hidden md:block` to always visible (remove those classes)
- Change the desktop glass panel (line 43) from `hidden md:block` to always visible
- Remove the mobile-only content div (lines 51-56) since the glass panel will now serve both
- Adjust glass panel text sizes: `text-lg md:text-xl` for title, keep `text-sm` for description

No changes to the horizontal slider, section layout, or text content.

