# AI Status — Supra Studium Web Portal

> Edit this file before each session to brief the orchestrator on what to do next.
> Run: `node scripts/orchestrator.js`

---

## Current Design Direction

Editorial clinical documentary. Not a funnel. Not an info-product.

Mental model: **klinički institut / dokumentarna edukacija**, ne **premium online course**.

Hero pilot: `AkupresuraPage.tsx` — fully redesigned. Use it as the reference for all other pages.

---

## Page Status

| Page | File | Status |
|------|------|--------|
| Akupresura & Trigger Point | `src/pages/AkupresuraPage.tsx` | ✅ Hero redesigned — reference page |
| Manualna terapija | `src/pages/ManualTherapySchoolPage.tsx` | ⏳ Awaiting redesign |
| Crossfriction | `src/pages/CrossfrictionPage.tsx` | ⏳ Awaiting redesign |
| Cupping | `src/pages/CuppingPage.tsx` | ⏳ Awaiting redesign |
| Lomi Lomi | `src/pages/LomiLomiPage.tsx` | ⏳ Awaiting redesign |
| O učilištu | `src/pages/OUcilistuPage.tsx` | ⏳ Awaiting redesign |
| Raspored | `src/pages/RasporedPage.tsx` | ⏳ Awaiting redesign |

---

## Next Task

<!-- Edit this section before running the orchestrator -->

**Priority:** Redesign `ManualTherapySchoolPage.tsx`

**Details:**
- Apply the same editorial/clinical direction as AkupresuraPage
- Hero: video-backed, left-side text zone with gradient overlay, content anchored bottom-left
- Headline should reflect manual therapy's clinical positioning (not "learn techniques", but "learn when and why")
- Remove any sales-funnel language, urgency elements, or glassmorphism
- Follow the ideal page structure from CLAUDE.md (observation → clinical snapshots → method → program days → instructor → pricing → FAQ → CTA)
- Tone: Glas 1 (terapeut-edukator) for most content, Glas 3 for pricing/FAQ section

**Reference:** `src/pages/AkupresuraPage.tsx` — use this as the design template

---

## Recent Decisions

- Hero overlay: `linear-gradient(100deg, rgba(0,0,0,0.78) 0%, ..., transparent 78%)` — left dark (text), right atmospheric (video)
- CTA primary: `rounded-sm uppercase tracking-wider text-xs` — institutional, not SaaS
- CTA secondary: plain `<button>` with em-dash prefix `— Pogledaj video`
- No `rounded-2xl`, no `scale-105` hover, no full black overlays
- Testimonials on ATP page are placeholders — replace with real quotes before deploy

---

## Notes for the Orchestrator

When generating a Claude Code prompt for this project:
- Reference specific file paths (e.g., `src/pages/ManualTherapySchoolPage.tsx`)
- Reference `src/pages/AkupresuraPage.tsx` as the design reference when relevant
- Specify which sections need what content mode (MODE A = edukativni, MODE B = pre-enrollment, etc.)
- Be explicit about forbidden UI elements (no urgency badges, no rounded-2xl CTAs, etc.)
- The prompt should be complete enough for Claude Code to implement without clarification
