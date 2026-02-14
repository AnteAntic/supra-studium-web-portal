

## Scroll to Top on Navigation

### Problem
When navigating between pages, the browser keeps the scroll position from the previous page, so new pages appear scrolled to the middle instead of starting from the top (hero section).

### Solution
Add a `ScrollToTop` component that listens for route changes and automatically scrolls the window to the top every time a new page opens. This will work on all pages, on both mobile and desktop.

### Technical Details

**New file: `src/components/ScrollToTop.tsx`**
- A small React component using `useEffect` and `useLocation` from `react-router-dom`
- Every time the URL path changes, it calls `window.scrollTo(0, 0)` to scroll to the very top
- Renders nothing visually (returns `null`)

**Modified file: `src/App.tsx`**
- Import and place `<ScrollToTop />` inside the `<BrowserRouter>` wrapper, before the routes
- This ensures it activates on every single route change across the entire app

No other files need to be changed. This is a standard React Router pattern that guarantees every page starts from the top.

