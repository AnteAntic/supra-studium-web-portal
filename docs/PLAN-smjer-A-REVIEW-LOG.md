# Review log — Direction A "Klinički časopis"

- Date: 2026-11-12. Host/planner/builder: Claude (Claude Code, model as selected in the host). Reviewer/inspector: Codex CLI 0.162.1 (CLI default model, no override requested).
- Plan: `docs/PLAN-smjer-A-klinicki-casopis.md`. Base commit: `c37791b`.
- Scope: visual redesign, local only. Authorization: owner asked for implementation of Direction A through the Claude/Codex loop; no deploy/commit/push.
- Limits: plan review max 5 rounds, fix rounds max 2, inspection rounds max 2. Inspection: on.
- Content baseline (captured from base commit): `/private/tmp/claude-501/-Users-ante--claude-spares-spare-X02fMx/a4ec3520-469b-4205-a11c-af586d95a8b0/scratchpad/baseline.json`.
- Run artifacts: `/private/tmp/claude-501/-Users-ante--claude-spares-spare-X02fMx/a4ec3520-469b-4205-a11c-af586d95a8b0/scratchpad/claudex/`.

## Plan review round 1 — Codex — REVISE
Result: `/private/tmp/claude-501/-Users-ante--claude-spares-spare-X02fMx/a4ec3520-469b-4205-a11c-af586d95a8b0/scratchpad/claudex/review-1/claudex-evmyrc_3/result.json` (session 01a1d1c9-948f-79f2-b1a6-72c15cb5a2af, plan sha a91cc43a…, observed model: not reported by CLI).
Summary: "The plan has concrete gaps in reduced-motion handling, typography acceptance, and content-integrity allowances."
- R1 (medium, D10/App.tsx): mount-time effect misses videos mounted on later route changes; pausing does not restore the poster. → ACCEPTED.
- R2 (medium, D3/D4/E2, CuppingPage.tsx:857): 12 px → 14 px mapping deterministically violates the ≥ 15 px long-paragraph criterion. → ACCEPTED.
- R3 (medium, D7/E1): facade thumbnails add img entries on MT/CFM routes that E1 did not allow. → ACCEPTED.
Coverage (reviewer): plan + sha, App.tsx/main.tsx, content-integrity script, autoplay video writers (HomeHero, MTHero, CourseHero, pages), ContactPage/HeroSection, Championship markup, Tailwind config. Limitations: static review only; external assets and canonical brand docs not inspected.

## Plan review round 2 — Codex — APPROVED
Result: `/private/tmp/claude-501/-Users-ante--claude-spares-spare-X02fMx/a4ec3520-469b-4205-a11c-af586d95a8b0/scratchpad/claudex/review-2/claudex-1b7b44ep/result.json` (same session, plan sha 25bad63508ea…). Summary: "The revision addresses R1–R3. No material unresolved defects were identified in this plan review." Limitations: plan only; media controller, codemod and type audit remain subject to implementation inspection; external assets and canonical brand docs not inspected.

## Build — builder: Claude (host). Pre-build commit: c37791b.
Implementation note (disclosed for inspection): the single left axis (D5) is realised by setting Tailwind `container` to a 1200 px cap with 1.5rem padding (content width = `max-w-shell` = 72rem), so sections that use the bare container share the axis with `max-w-shell mx-auto` wrappers. `cn()` is extended so tailwind-merge treats the new `text-*` scale tokens as font sizes, not colours.

### Build notes and disclosed deviations from the approved plan (for the inspector)
- D3: display token is clamp(2.125rem, 1.2rem + 3.2vw, 3.5rem) (56 px max instead of 64 px) so two-sentence hero headlines fit their measure; one extra token `text-quote` added for pull quotes.
- D4: codemod gained rule R6 (removes the y offset from simple framer-motion reveal props and the hero text scroll parallax on all scoped pages, per 02_WEB_SYSTEM §11); inline px sizes are rewritten in rem so the script is idempotent (second dry run: 0 changes).
- D5: container capped at 1200 px (content 72rem) so bare-container sections share the axis; `.shell-narrow` caps children at 50rem.
- D9: the Kontakt hero is a new `ContactHero` component rendering the same content/behaviour; the generic `ui/Hero*` files are left untouched and are no longer imported by routed pages. Old Testimonials/Newsletter/HomeChampionshipSection are archived in `_archive_code/redesign-a/`. The decorative star icons, floating dots and scroll indicator were removed.
- E1 allow-list has two entries beyond the plan: (1) `button|TEČAJEVI` on every route — the courses menu trigger is now a real button because the old `<li>` trigger was not keyboard-focusable; (2) `/kontakt` h1 — the old TextShimmer rendered the heading text twice ("KontaktKontakt"), now once.
- Not in plan, done for contrast/keyboard: Home hero and Kontakt CTA use dark text on gold; `/ne-postoji` restyled (text unchanged); tablet (768) column spans adjusted on Home; Raspored pathway blocks lost a fixed max-height that clipped links at the new scale; MT date column set to nowrap.
- `npm run build` was run locally as a proof step, so `dist/` (git-ignored) now holds the redesigned build. Nothing was deployed, committed or pushed.

### Proof run (builder, 2026-11-13)
- E1 content integrity: PASS (14/14 routes, allow-list `scripts/qa/allow-redesign-a.json`).
- E2/E3/E4/E6 `scripts/qa/type-audit.py`: PASS (13 routes × 1440/768/390; reduced motion incl. client-side navigation; focus outline on first 14 tab stops).
- E5: `npx tsc --noEmit -p tsconfig.app.json` exit 0; `npm run build` exit 0; console errors unchanged from base (pre-existing `data-lov-id` Fragment / unknown-prop warnings).
- E7: package.json unchanged; `/` makes 0 requests to youtube.com before a click (was 2 iframes); JS 1754.3 → 1739.3 kB, CSS 123.6 → 126.4 kB; new images 44–109 KB, seal 72 KB.
- E8: no rounded-2xl/rounded-full/hover:scale/TextShimmer/bg-black in hand-composed files; seal rendered 144 px (mobile) / 192 px (desktop).

## Inspection round 1 — Codex (fresh session 01a1d2c3-d19b-70a0-91e5-3243aa75cead) — REVISE
Result: `/private/tmp/claude-501/-Users-ante--claude-spares-spare-X02fMx/a4ec3520-469b-4205-a11c-af586d95a8b0/scratchpad/claudex/inspect-1/claudex-d1js0qeo/result.json`. Static inspection only (no builds/browser).
- A-01 (medium, ContactFooter.tsx): inline `outline: 'none'` on the four contact fields defeated the global focus rule; audit did not cover them. → ACCEPTED. Both inline overrides removed; audit now tabs through the contact fields (4/4 show a 2 px outline).
- A-02 (medium, main.tsx): `skipAnimations` is only read when an animation starts, so a reveal already in flight continues after the preference is switched on. → ACCEPTED. `useReducedMotionEpoch` re-keys the routed `<main>` when the preference turns on, so in-flight reveals remount in their final state; audit switches the preference during the Home hero's delayed reveal (opacities 0 → 1 within 250 ms, video held).
- A-03 (medium, allow-list): claimed `/prijava` must also gain the header button. → REJECTED with evidence: `RegistrationPage` redirects immediately to tally.so, so the captured document for that route is the external Tally form (baseline: 17 text nodes, 1 link to tally.so, button "Sljedeća stranica"); the app header is not in the capture. E1 reproduced: PASS 14/14. A note was added to the allow-list.
- A-04 (medium, type-audit.py): navigation target, direct-load video checks and reveal check were weaker than E6. → ACCEPTED. Audit now navigates /kontakt → MT (through the keyboard-accessible menu) → Home, checks paused + currentTime 0 + autoplay off on every direct load, and samples opacity twice (pending ≈ 0 or changing = fail; constant translucency is ignored).
Proof after fixes: E1 PASS (14/14); type-audit PASS; tsc 0; build 0.

## Inspection round 2 — Codex (fresh session 01a1d2cb-3e15-7391-97f3-acb0053731e2) — REVISE
Result: `/private/tmp/claude-501/-Users-ante--claude-spares-spare-X02fMx/a4ec3520-469b-4205-a11c-af586d95a8b0/scratchpad/claudex/inspect-2/claudex-mvw9t2i1/result.json`. Static inspection only. No further findings on A-01, A-03 (rejection stood unchallenged) or A-04.
- A-05 (medium, App.tsx): re-keying `<main>` on preference change remounts the routed page: clears the contact form, focus, open accordions/players and scroll. → ACCEPTED. Re-keying removed. On switch to reduced motion the controller now finishes running Web Animations in place (`document.getAnimations().forEach(a => a.finish())`), sets `skipAnimations` and holds videos; nothing is remounted.
Proof after the fix (builder): type-audit PASS, including "live switch to reduce" (hero reveals 0 → 1 within 250 ms, video held) and "live switch keeps state" (typed textarea value, focus and scroll position unchanged); E1 PASS 14/14; tsc 0; build 0; codemod dry run 0 changes.

**Inspection budget (2 rounds) is used. The A-05 fix (`src/components/ReducedMotionMedia.tsx`, `src/App.tsx`, `scripts/qa/type-audit.py`) has NOT been independently inspected by Codex.** Everything else in the diff was covered by inspection rounds 1–2 (static review; Codex did not run builds or browser checks).

Final state: uncommitted working tree on `main` at c37791b. No commit, push or deploy.

## Inspection round 3 — Codex (fresh session 01a1d453-8bb8-74d1-b005-c4061b1361a7) — REVISE
Run at the owner's request ("Da, pokreni", 2026-11-15) beyond the 2-round budget. Result: `/private/tmp/claude-501/-Users-ante--claude-spares-spare-X02fMx/a4ec3520-469b-4205-a11c-af586d95a8b0/scratchpad/claudex/inspect-3/claudex-zd1vd595/result.json`. Static inspection only. A-05 fix (no remount) not challenged.
- A-06 (medium, ReducedMotionMedia.tsx): `document.getAnimations()` only finishes Web Animations; framer-motion runs `y`/`scaleX` in JavaScript, so a hero rule (scaleX) or a Lomi/Kalabaš reveal (y: 16 → 0) kept running after a live switch to reduced motion. → ACCEPTED, reproduced first (MT, Lomi, Kalabaš: hero rule still mid-scale 0.58–0.90 after the switch). Fix: the controller also completes every motion value's running animation via framer-motion's `visualElementStore` (`value.animation.complete()`), still without remounting. Lomi/Kalabaš `fadeIn` variants reduced to opacity only (D10 / §11). Audit extended: live switch on all 13 routes, two samples 500 ms apart, opacity + transform of every element must be unchanged and the hero opaque.
- Test-only corrections during this round: the hero selector in the new audit step first matched a below-the-fold section on /kontakt, then crashed on /ne-postoji (no `<section>`); fixed to "first section, else main".
- E1: /prijava full-text differs only because the external Tally page changed its embedded buildId; visible texts identical. Allow-list note added.
Proof after the fix (builder): type-audit PASS (incl. live switch 13/13 with 0 moving elements, state kept on live switch, client-nav video hold, contact-field focus); E1 PASS 14/14; tsc 0; build 0.

**The A-06 fix (`ReducedMotionMedia.tsx`, Lomi/Kalabaš `fadeIn`, audit additions) has NOT been independently inspected.** Working tree uncommitted on `main` at c37791b. No commit, push or deploy.

## Mobile flicker fix (owner report 2026-11-16: "na mobitelu stranica malo titra ponekad")
Measured against the base commit (c37791b served on :8081) and the redesign with a mobile emulation probe. The causes are pre-existing (present in base) and tied to the mobile browser bar collapsing/expanding while scrolling:
- Course sticky bar used `window.scrollY > window.innerHeight * 0.9`, re-evaluated on every scroll. `innerHeight` changes with the browser bar, so near the threshold the bar unmounted and re-mounted with a slide-in animation. Probe (scroll position just past the threshold, browser bar toggling 6×): base 7 pop-in/out, redesign 0. Fix: threshold measured once (re-measured only on width change / rotation), 48 px hysteresis band, the bar stays mounted and slides with a CSS transform; when hidden it is `aria-hidden` and `inert`. On desktop the location list now wraps (`flex-wrap`, per-item nowrap): the 3D Stretching bar overflowed at 768 px when visible (pre-existing, surfaced once the bar stayed in the DOM).
- Header switched light/clear at exactly 50 px; an elastic bounce near the top flipped it repeatedly (probe: base 8 flips, redesign 2 = the intended down/up). Fix: hysteresis (on above 64 px, off below 24 px), passive listener.
- Heroes used `min-h-screen` (100vh); on browsers where vh follows the browser bar, everything below the hero jumped. Fix: `.min-h-hero` = `min-height:100vh; min-height:100svh` (stable small viewport, vh fallback) on all 11 hero sections and the 404; CFM YouTube cover width uses svh. Limitation: Playwright cannot emulate the browser bar separately from the viewport, so this part is not provable in emulation; it should be checked on a real phone.
- `backdrop-filter` blur removed from the fixed header, sticky bar and back-to-top button (repaint flicker over autoplay video on iOS); backgrounds are now near-opaque solid colour (0.985), visually equivalent.
Proof: type-audit PASS (audit now ignores aria-hidden/inert UI in the reveal check); visible sticky bar fits at 390/768/1440 on all 8 course pages; E1 PASS 14/14; tsc 0.

## Inspection round 4 — Codex (fresh session 01a1e173-e515-7ed3-8783-c529d9a6cee6) — REVISE
Owner: "Pokreni četvrtu Codex inspekciju i ako sve štima objavi" (2026-11-16). Result: `/private/tmp/claude-501/-Users-ante--claude-spares-spare-X02fMx/a4ec3520-469b-4205-a11c-af586d95a8b0/scratchpad/claudex/inspect-4/claudex-lwiudqk9/result.json`. Static. A-06 and the flicker fix not challenged.
- A-07 (medium, nav-header.tsx): dropdown items suppressed the focus outline (`focus:outline-none` + inline `outline = 'none'` on focus). → ACCEPTED. Both removed; items get a 2 px brass focus-visible outline. Audit opens the menu by keyboard and walks all 8 items (8/8 with outline).
- A-08 (medium, GlobalHeader.tsx): the expanded mobile menu could extend below short viewports with no way to scroll. → ACCEPTED, reproduced (390×520: KONTAKT unreachable, pre-existing in base too; redesign panel 602 px vs base 576 px). Panel limited to `calc(100svh - 4.5rem)` with vertical scroll. Audit: all 12 entries reachable at 600/520/460 px.
Quality Gate (builder): Lighthouse on production builds (vite preview), base → redesign: Home mobile perf 57→58, LCP 11.8→10.7 s, CLS 0.017→0; Home desktop perf 72→88, LCP 4.0→1.9 s, BP 96→100; ATP mobile perf 66→62 (LCP 6.5 vs 6.6 s, within run variance), ATP desktop 92→92; a11y/SEO unchanged (96/100, 93/100). type-audit PASS, E1 PASS 14/14, tsc 0.

## Inspection round 5 — Codex (fresh session 01a1e17e-24d8-7cc2-9568-3a312ec72fd6) — REVISE
Result: `/private/tmp/claude-501/-Users-ante--claude-spares-spare-X02fMx/a4ec3520-469b-4205-a11c-af586d95a8b0/scratchpad/claudex/inspect-5/claudex-0x211954/result.json`. Static. A-07/A-08 fixes not challenged.
- A-09 (medium, ContactHero.tsx): hero text absolutely positioned and bottom-aligned inside an overflow-hidden section; on short screens the heading is clipped. → ACCEPTED and widened: a probe across all 13 routes at 390×460, 390×600, 844×390 (phone landscape) and 1024×600 found hero text under the header or clipped in 25 cases (base: 19 — pre-existing pattern, made worse by the larger type), incl. MT and CFM at 390×600. Fix on all 12 heroes + 404: the text layer is now in normal flow (`relative z-10`), its container uses `min-h-hero pt-28 md:pt-32` instead of `h-full`, so the section grows with its content; background media and gradients stay absolutely positioned. Contact hero heights in svh. After: 0 cases. Normal-size rendering checked visually (1440×900, 390×844): unchanged. The short-screen hero check is now part of `type-audit.py`.
Proof: type-audit PASS (all checks incl. short screens), E1 PASS 14/14, tsc 0, build 0.

## Inspection round 6 — Codex (fresh session 01a1e18d-ae39-7e82-acec-05e6317b2586) — REVISE
Result: `/private/tmp/claude-501/-Users-ante--claude-spares-spare-X02fMx/a4ec3520-469b-4205-a11c-af586d95a8b0/scratchpad/claudex/inspect-6/claudex-3loenfog/result.json`. Static. A-09 fix (heroes in normal flow) not challenged.
- A-10 (medium, YouTubeFacade.tsx): keyboard activation removed the focused button and focus fell back to the document. → ACCEPTED. Focus is moved into the mounted iframe (ref + effect). Audit activates the Home facade with Enter: focus lands on IFRAME "Day 1 Recap".
Proof: type-audit PASS, E1 PASS 14/14, tsc 0, build 0.

## Inspection round 7 — Codex (fresh session 01a1e196-48d2-78a0-bcbb-0f60a0918660) — APPROVED
Result: `/private/tmp/claude-501/-Users-ante--claude-spares-spare-X02fMx/a4ec3520-469b-4205-a11c-af586d95a8b0/scratchpad/claudex/inspect-7/claudex-dx5qzxb5/result.json`. "No material unresolved defects identified in the static review." Limitations stated by the reviewer: static only; responsive rendering, real-device flicker, network and external YouTube/Tally behaviour not verified by the reviewer (the builder's browser checks above cover rendering in emulation; real-device flicker remains to be confirmed on a phone).
Release: owner authorised publishing on approval (2026-11-16). Live backup before deploy: `~/Downloads/backups/supra-live_2026-11-16_00-15_pre-smjer-A/` (live matched c37791b). Deploy path: new images uploaded first, then `deploy-quick.sh` (no server-side deletion; `deploy.sh` not used because its `mirror --delete` would remove server-only files such as `.well-known/`).
