# AI Orchestration Workflow — Supra Studium Web Portal

## Purpose

Eliminates manual copy-paste between ChatGPT and Claude Code.

You edit `AI_STATUS.md` to describe the next task, run one command, and get a ready-to-use Claude Code prompt in `NEXT_CLAUDE_PROMPT.md`. You review it, then paste it into Claude Code.

**Human is always in the loop.** The script never executes Claude Code automatically.

---

## System Files

| File | Role | Edit? |
|------|------|-------|
| `AI_WORKFLOW.md` | This file — how the system works | Rarely |
| `AI_STATUS.md` | **Current project state + next task** | Yes, before each session |
| `BRAND_SYSTEM.md` | Distilled brand/language/UI rules | When brand rules change |
| `CLAUDE.md` | Full project brief (stack, deploy, design direction) | As needed |
| `scripts/orchestrator.js` | The script that calls OpenAI | Rarely |
| `NEXT_CLAUDE_PROMPT.md` | Output — the generated Claude Code prompt | Read-only (regenerated each run) |
| `.env` | Your API key (never commit this) | Once at setup |

---

## Setup (first time only)

### 1. Copy the env template and add your key

```bash
cp .env.example .env
# Then edit .env and replace sk-... with your real OpenAI API key
```

### 2. Install script dependencies

```bash
npm install
```

The `openai` and `dotenv` packages are already added to `devDependencies`.

---

## Usage

### Step 1 — Update AI_STATUS.md

Open `AI_STATUS.md` and set the `## Next Task` section. Be specific:
- Which page/component
- What aspect (hero, copy, layout, a specific section)
- Any constraints or context

### Step 2 — Run the orchestrator

```bash
node scripts/orchestrator.js
```

Or override / supplement the next task inline:

```bash
node scripts/orchestrator.js --task "Redesign CuppingPage hero — same direction as AkupresuraPage but cupping-specific imagery and copy"
```

The `--task` flag adds to (or replaces) the task from AI_STATUS.md.

### Step 3 — Review NEXT_CLAUDE_PROMPT.md

Open the file, read the generated prompt. If it looks good, paste it directly into Claude Code.

If it's off-brand or missing context, either:
- Update AI_STATUS.md with more detail and re-run
- Edit NEXT_CLAUDE_PROMPT.md manually before pasting

### Step 4 — Paste into Claude Code

Paste the prompt into your Claude Code session. Claude Code will implement the change.

---

## What the script sends to GPT-4o

Three context files are concatenated and sent as context:

1. **CLAUDE.md** — project brief, design direction, forbidden UI elements
2. **BRAND_SYSTEM.md** — brand philosophy, three voices, claim certainty, cadence library
3. **AI_STATUS.md** — current project state and the next task

GPT-4o is instructed to output **only** a Claude Code prompt — no meta-commentary, no explanation. The prompt should be specific enough that Claude Code can implement it without further clarification.

---

## Updating BRAND_SYSTEM.md

If the brand rules change (new writing rules, UI decisions, page structure updates):

1. Update the source: `~/Library/Mobile Documents/com~apple~CloudDocs/Cowork OS/SUPRA_LANGUAGE_SYSTEM_v2.md`
2. Manually update `BRAND_SYSTEM.md` in this project to reflect the changes

The orchestrator reads `BRAND_SYSTEM.md` locally — no iCloud dependency at runtime.

---

## File Lifecycle

```
You edit AI_STATUS.md
        ↓
node scripts/orchestrator.js
        ↓
GPT-4o reads: CLAUDE.md + BRAND_SYSTEM.md + AI_STATUS.md
        ↓
Generates: Claude Code prompt
        ↓
Saved to: NEXT_CLAUDE_PROMPT.md
        ↓
You review → paste into Claude Code
        ↓
Claude Code implements the change
        ↓
You update AI_STATUS.md (mark done, set next task)
        ↓
Repeat
```
