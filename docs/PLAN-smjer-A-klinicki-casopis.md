# PLAN — Direction A "Klinički časopis" (visual redesign, local only)

Status: draft for independent review. Date: 2026-11-12.
Source: owner chose Direction A in chat on 12 Nov 2026 ("Smjer A je moj izbor"), after a full review of all public routes.
Roles: planner + builder Claude (host), plan reviewer + final inspector Codex. Base commit: `c37791b` (clean tree).

## Goal

Raise the visual quality of the existing Supra Studium site (React + Vite + Tailwind) through typography, one layout axis, section rhythm and better use of existing photography — **without changing any text, URL, link target, form or SEO data**. Work stays in the local dev build (`http://localhost:8080`). No deploy, no commit, no push.

## Findings that drive the plan (measured on base commit, 1440 px and 390 px)

- F1 Type is small and flat: hero h1 ≈ 37 px on desktop, body 12–13.5 px; 30–50 % of text elements are below 13 px (Raspored 71 %); 15–30 distinct font sizes per route (`text-[10px]` ×182, `text-[13.5px]` ×61, `text-[12px]` ×65 …).
- F2 The left edge jumps between sections: wrappers are `max-w-5xl mx-auto` (×76), `max-w-3xl mx-auto` (×18), `max-w-4xl mx-auto` (×17), `max-w-2xl mx-auto` (×10), `max-w-6xl mx-auto` (×9). Home has five different left edges.
- F3 Every section repeats eyebrow + rule + Playfair h2 + hairline list; the two beige tones are nearly identical, so Home has no tonal event between hero and footer.
- F4 The Championship has no identity on Home: one more beige section, two eager YouTube iframes, three thumbnails, no official logo.
- F5 `/kontakt` is outside the system (`HeroSection`, `Testimonials`, `Newsletter`: 96 px centred headline, pill buttons, star-rating cards, floating blurred dots, `rounded-2xl`).
- F6 Motion/a11y: `prefers-reduced-motion` only covers CSS; framer-motion reveals and autoplay videos ignore it. `HomeHero` uses scroll parallax and y-translate reveals (against `SUPRA_BRAND_SYSTEM_v2/02_WEB_SYSTEM.md` §11). Hover states are inline `onMouseEnter` handlers with no focus equivalent; no global `:focus-visible` style.
- F7 Seven YouTube iframes load eagerly (Home ×2, MT interview, CFM ×2, Cupping, ATP modal is already click-to-open).

## Key decisions

- D1 **Hero headline size lock is lifted by the owner's choice.** `02_WEB_SYSTEM.md` §5 locks hero h1 at `text-2xl … md:text-[2rem]`. Direction A, as presented and chosen, replaces it with a fluid display size (D3). All other hero rules stay (mixed case, no shimmer, directional gradient, `rounded-sm` CTA, em-dash secondary CTA). Local `DESIGN.md` gets a short "Direction A" section recording the new scale; the canonical Cowork OS copy is not touched (owner's call).
- D2 **Mechanism: tokens + deterministic codemod, then manual art direction where it matters.** 11 k lines of inline-styled TSX cannot be hand-edited safely. The scale lives once in `tailwind.config.ts`; a script rewrites class tokens; Home, heroes, the Kontakt family, header and footer are then composed by hand.
- D3 **Type scale** (Tailwind `fontSize` extension, fluid via `clamp`, fonts unchanged: Playfair Display + Inter):

  | Token | Size | Used for |
  |---|---|---|
  | `text-display` | clamp(2.125rem, 1.2rem + 3.4vw, 4rem), lh 1.08 | every `h1` |
  | `text-h2` | clamp(1.75rem, 1.2rem + 2.2vw, 3rem), lh 1.12 | Playfair `h2` |
  | `text-h3` | clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem), lh 1.25 | Playfair `h3` |
  | `text-body-l` | clamp(1rem, 0.96rem + 0.2vw, 1.0625rem), lh 1.7 | primary body and leads (old 13–16 px) |
  | `text-body` | clamp(0.9375rem, 0.91rem + 0.12vw, 1rem), lh 1.7 | secondary body (old 12–12.5 px, `text-sm`) |
  | `text-body-s` | 0.875rem, lh 1.6 | short meta only: dates, prices notes, one-line remarks (assigned by hand, never to running text) |
  | `text-caption` | 0.8125rem, lh 1.5 | captions and short non-uppercase notes (old 11–11.5 px) |
  | `text-label` | 0.6875rem, lh 1.4 | uppercase eyebrows/labels (old 9–10.5 px) |

  Letter-spacing, weight, colour and leading classes already on elements are kept; only size tokens are replaced. Prices, decorative numerals and non-heading display text are not touched by the heading rule.
- D4 **Codemod** `scripts/redesign-a/codemod.py` (kept in repo as the audit trail; idempotent; `--dry-run` prints a per-file diff count). Scope: `src/pages/*.tsx` (except unrouted `SoulScanPage`, internal `LogoProcessorPage`), `src/components/home/*`, `src/components/*.tsx` that are imported by routed pages, `src/components/course/*`, `src/components/layout/*`, `src/components/ui/CourseStickyBar.tsx`. Not touched: shadcn primitives in `src/components/ui/`.
  - R1 size tokens inside `className` strings, any breakpoint prefix: px table above → token; responsive duplicates collapse to one token.
  - R2 `<h1|h2|h3 … className="…font-playfair…">`: drop all size tokens, add `text-display` / `text-h2` / `text-h3`.
  - R3 inline `style={{ fontSize: 'Npx' }}` with a plain px value: same table (9–10.5 → 11 px, 11–11.5 → 13 px, 12–12.5 → 15 px, 13–14.5 → 16 px). `rem`/`clamp()` values and ternaries are left for the manual pass.
  - R5 (review R2) **long-text promotion pass, by hand, after the codemod and before the audit**: `scripts/qa/type-audit.py --report` lists every `p`/`li` with ≥ 80 characters rendering below 15 px on any route (class-based or inline); each is promoted to `text-body` or larger in source (e.g. the payment/deadline note at `CuppingPage.tsx:857`, bonus lists, 11 px inline notes). The audit is rerun until the list is empty.
  - R4 layout wrappers: `max-w-5xl|6xl|7xl mx-auto` → `max-w-shell mx-auto` (72rem); `max-w-2xl|3xl|4xl mx-auto` → `shell-narrow` (same left edge as the shell, measure capped at 46rem, not centred). Elements whose own class list contains `text-center` are skipped and listed for manual review.
  - The script edits only string literals inside `className=`/`style=`; it never touches JSX text, `href`, `src`, `alt`, ids or data.
- D5 **Layout axis** in `src/index.css`: `.shell-narrow` utility, `max-w-shell` in Tailwind, one gutter (`px-6`, `md:px-10`). Result: one left edge per page for section headings; full-bleed media and deliberately centred blocks (hero-style manifesto lines, 404) are the listed exceptions.
- D6 **Home, composed by hand** (same sections, same order, same text):
  - Hero: larger display headline, wider measure; parallax and y-translate reveals removed (opacity only).
  - Programs: flagship as a full-width split with the large frame; the two featured programs as an asymmetric pair; the five secondary programs as a typographic index (numbered rows with a small thumbnail) instead of five equal squares.
  - Credentials + International: one axis, larger h2, federation logo at a fixed size; image trio in two fixed ratios.
  - **Championship as a dark "edition"**: background `#141311`, text `#ede9e3`, official seal (D8) at ≥ 160 px, eyebrow and rule in Championship Red `#C4161C` used as a graphic line only (not as text colour: contrast on `#141311` is < 4.5:1), heading in the same Playfair but with the seal lock-up; lead frame from the 2026 edition; the two YouTube videos as click-to-load facades (D7); the three-image strip in one ratio. This is the only dark section between hero and footer, which gives the page its tonal event and separates competition from education.
  - Results: the ten names as a two-column numbered index with large Playfair numerals.
  - Testimonials, Founder, ERPS: scale and axis only.
- D7 **`YouTubeFacade` component** (`src/components/ui/YouTubeFacade.tsx`): renders a `<button>` with the video thumbnail (`https://i.ytimg.com/vi/<id>/hqdefault.jpg`, `loading="lazy"`, explicit dimensions) and a play glyph; on click it mounts the original iframe with `autoplay=1`. `aria-label` = the iframe's existing `title` string. Applied to Home ×2, `ManualTherapySchoolPage` interview, `CrossfrictionPage` content embed. The muted background-loop iframes (CFM hero, Cupping) stay as they are (non-goal: they need a local video file).
- D8 **Assets from `/Users/ante/01_Projekti/Adria Reset summit/`** (read-only source; nothing is changed there). Copied into `public/lovable-uploads/`, converted to WebP (q80, max 1920 px long edge, EXIF orientation applied), each with explicit `width`/`height`:
  - `08_Brand/logo/championship_official_transparent.png` → `cmc-official-seal.webp` (480 px). No vector exists; `brand.md` §4a there states the raster is the master and sets the minimum web size at 120 px.
  - `07_Media/Championship_2026/foto/CMC2026_natjecanje_leda_duo_masaza_publika.jpg` → `cmc-2026-duo-masaza.webp` (lead frame).
  - `…/CMC2026_natjecanje_leda_masaza_closeup_ruke_tetovaza.jpg` → `cmc-2026-ruke-closeup.webp`.
  - `…/CMC2026_natjecanje_dvorana_panorama_suci_promatraju.jpg` → `cmc-2026-suci-dvorana.webp`.
  - Federation logo: the Adria source (`federation_logo.png`, 768 px) is the same artwork as the existing `fmtmnt-logo.png`; no better version exists, so it is not replaced.
  - Championship photos are used only in Championship contexts (Home Championship section), never to illustrate education programs.
  - `ASSET_MANIFEST.md` gets a new section listing source → destination, size, and where used.
- D9 **Kontakt family into the system** (`ContactPage` composition unchanged; `HeroSection`-based hero, `Testimonials`, `Newsletter` restyled): left-aligned hero with the directional gradient, `rounded-sm` CTAs, flat quotes separated by hairlines instead of shadowed rounded cards, no floating blurred dots, no decorative star icons, flat newsletter block. All strings stay byte-identical (including the Brevo placeholder and the subscriber figures — flagged to the owner as a content decision, not changed here). `HeroSection` is used only by `ContactPage` (to be confirmed by grep before editing; if used elsewhere, a `variant` prop is added instead).
- D10 **Accessibility and motion** (global):
  - `:focus-visible` outline (2 px, brass `#B89A4F` on light, `#d4af37` on dark sections via a `.on-dark` scope or `currentColor` fallback, 3 px offset) for `a`, `button`, `input`, `textarea`, `select`, `summary`, `[tabindex]`. No `outline: none` without replacement.
  - "Press" state: `.press` utility — on `:active` the hairline under a row/CTA becomes brass and the background gains one tone; the same visual is used for `:focus-visible`. Inline `onMouseEnter` colour handlers in hand-composed components are replaced by CSS `:hover`/`:focus-visible`.
  - Reduced motion: `MotionGlobalConfig.skipAnimations = true` when `prefers-reduced-motion: reduce` (set once in `src/main.tsx`, updated on media-query change) so framer-motion content appears without animation; video playback is handled by one persistent component `ReducedMotionMedia` mounted in `App.tsx` above the router outlet (review R1): it holds a `matchMedia` listener and a `MutationObserver` on `document.body`, so it applies to every `<video autoplay>` whenever it is mounted (initial load and client-side route changes) and whenever the preference changes. Under the preference it removes `autoplay`, calls `pause()` and `load()` so the element returns to its `poster` (videos without a poster show their first frame via `preload="metadata"`; the Calabash intermezzo gets no new poster asset in this round); when the preference is lifted it restores autoplay and calls `play()`. Ticker CSS is already handled.
  - Only opacity reveals in hand-composed components; no `scale` hover on buttons; no new autoplay motion.
- D11 **Course pages** (`ManualTherapySchool`, `Crossfriction`, `Akupresura`, `Cupping`, `LomiLomi`, `Calabash`, `ThreeDStretching`, `KlinickaPropedeutika`), `Raspored`, `OUcilistu`: codemod (D4) + shared heroes by hand (`CourseHero`, `MTHero`, `CFMHero`, inline heroes) + a visual pass at 1440/768/390 fixing anything the larger scale breaks (overflowing rows, cramped grids, hero measure). No section is added, removed or reordered.

## Non-goals

Text, links, forms, Tally embed internals, routes, SEO tags, JSON-LD, sitemap; new sections/CTAs/social proof; new npm dependencies; replacing the YouTube background loops on CFM/Cupping (needs a local video from the owner); replacing education photos on MT/3D Stretching/Propedeutika (no better education material exists in the supplied folder); the unrouted `SoulScanPage` and internal `/logo-processor`; deploy, commit, push.

## Risks

- R-1 A larger scale can overflow fixed-height or fixed-width rows (facts band, pricing rows, sticky bar). Mitigation: overflow audit at three widths (E4) plus visual pass.
- R-2 Codemod false positives. Mitigation: dry-run report reviewed before applying; content integrity check (E1) proves no text/link/attribute changed; git diff is the rollback.
- R-3 `shell-narrow` turns centred narrow columns into left-aligned ones; blocks that were designed centred may look unbalanced. Mitigation: `text-center` wrappers are skipped and reviewed by hand.
- R-4 `MotionGlobalConfig` import path differs by framer-motion version (12.16.0 here). Mitigation: verify the export at build; fallback is `<MotionConfig reducedMotion="user">` plus a CSS rule forcing `opacity: 1` for `[style*="opacity"]` under reduced motion is **not** acceptable (too broad) — instead a `MotionConfig` with `transition={{ duration: 0 }}` under the preference.

## Acceptance criteria and proof

Dev server running on `http://localhost:8080`. Baseline captured from `c37791b` before any edit: `<scratchpad>/baseline.json` (14 routes, compare PASS against itself).

- E1 **Content integrity.** `python3 scripts/qa/content-integrity.py compare <baseline.json> scripts/qa/allow-redesign-a.json` → `RESULT: PASS`. The allow-list may contain only exact entries of these kinds: (a) per facade on `/`, `/skola-manualne-terapije`, `/crossfriction-funkcionalna-masaza`: the original `iframe` entry removed, one `button` entry with empty text added, and one `img` entry `https://i.ytimg.com/vi/<id>/hqdefault.jpg|` (empty alt) added (review R3); (b) image `src|alt` entries added/removed in the Home Championship section, including the new seal. Text nodes, headings, links, form fields, ids, `<head>` title/meta/canonical/JSON-LD and landmark sequence must be identical on all 14 routes.
- E2 **Type audit.** `python3 scripts/qa/type-audit.py` (new; Playwright; 1440 and 390) → for every routed page: no visible text element below 11 px; paragraphs (`p`, `li`) with ≥ 80 characters render at ≥ 15 px on 1440 and ≥ 15 px on 390; `h1` ≥ 56 px at 1440 and ≥ 32 px at 390; distinct font sizes per route ≤ 14. `/prijava` (third-party Tally iframe) is excluded.
- E3 **Axis.** Same script: at 1440 the left x of every `h2` that is not inside a `text-center` block takes at most 2 distinct values per route (main axis; second column of a split layout).
- E4 **No horizontal overflow** at 390, 768 and 1440 on all 14 routes (`scrollWidth - clientWidth == 0`), and no element wider than the viewport.
- E5 **Build.** `npx tsc --noEmit -p tsconfig.app.json` exit 0; `npm run build` exit 0; no new console errors compared with base (existing `data-lov-id` Fragment warnings are pre-existing).
- E6 **Motion/a11y.** Playwright with `reduced_motion="reduce"`: every `video` is paused on direct load **and after client-side navigation** (load `/kontakt`, click the header link to `/skola-manualne-terapije` and to `/`, check the newly mounted hero videos are paused with `currentTime == 0`); after scrolling through the page no element under `#root` has computed `opacity < 1` because of a pending reveal. With default motion: Tab from the top of Home reaches header links, hero CTAs and the first program link in DOM order, and each focused element has a visible outline (computed `outline-style != none` and width ≥ 2 px).
- E7 **Performance guard.** No new entries in `package.json`. On `/` no request to `youtube.com`/`youtube-nocookie.com` before a click. New images each ≤ 260 KB; seal ≤ 80 KB. `dist/assets` JS+CSS total reported before/after (expected: CSS up slightly, JS flat).
- E8 **Brand guard.** `grep` in touched files: no `rounded-2xl`/`rounded-full` on CTAs, no `hover:scale`, no `bg-black`, no new emoji, no `TextShimmer`. Championship section: seal rendered ≥ 120 px wide at 390 and 1440.
- E9 **Visual check** (manual, by the builder, screenshots of all routes at 1440/768/390) and final Codex inspection of the diff against `c37791b`.

## Out of this round (reported to the owner, not built)

Local hero videos for CFM/Cupping; stronger education photos for MT, 3D Stretching, Propedeutika; vector Championship seal; content decisions on `/kontakt` (Brevo placeholder, subscriber figures); official competition name on Home differs from the new official name ("Official Croatian Massage Championship") — text is locked, so it is only reported.

## Review round 1 dispositions (Codex, REVISE)

- R1 reduced-motion video control missed route changes and poster state → ACCEPTED (D10: persistent `ReducedMotionMedia` with MutationObserver + `load()`; E6 covers client-side navigation).
- R2 12 px → 14 px mapping contradicts the ≥ 15 px paragraph criterion → ACCEPTED (D3 table shifted up one tier: 12–12.5 px → `text-body`, 13–16 px → `text-body-l`; `text-body-s` reserved for short meta by hand; new R5 manual promotion pass driven by the audit report).
- R3 facade thumbnails on MT and CFM routes were not allowed by E1 → ACCEPTED (E1 allow-list names the exact `i.ytimg.com` image entry per facade on all three routes).
