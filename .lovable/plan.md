

## "Back to Top" Button on All Content Pages

### What This Does
Adds a small floating arrow button in the bottom-right corner of the screen that appears when you scroll down. Tapping/clicking it smoothly scrolls you back to the top of the page. It will be subtle and unobtrusive, especially useful on mobile where pages require a lot of scrolling.

### How It Works
- The button is **hidden** when you're near the top of the page
- It **appears** after scrolling down ~300px
- Clicking it **smoothly scrolls** back to the top
- It uses a small **up arrow** icon with a slight background so it's visible but not distracting
- Works on both **mobile and desktop**

### Pages That Will Have It
The button will be added **globally** via `App.tsx` so it appears on every page automatically. This is the cleanest approach -- pages with little content won't trigger the scroll threshold, so the button simply won't appear on short pages (like NotFound or ContactPage).

### Technical Details

**New file: `src/components/BackToTopButton.tsx`**
- A floating button component using `framer-motion` for smooth fade in/out
- Uses `lucide-react` `ChevronUp` or `ArrowUp` icon
- Listens to `window.scrollY` to show/hide (threshold ~300px)
- Positioned `fixed bottom-6 right-6` with a small semi-transparent background
- Slightly smaller on mobile for less visual clutter
- `z-40` so it sits above content but below modals/header

**Modified file: `src/App.tsx`**
- Import and place `<BackToTopButton />` inside the `<BrowserRouter>` wrapper alongside `<ScrollToTop />`
- One instance serves all pages

