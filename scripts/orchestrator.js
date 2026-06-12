#!/usr/bin/env node
/**
 * Supra Studium — AI Orchestrator (Phase 1)
 *
 * Reads project context files, calls GPT-4o, saves a ready-to-use
 * Claude Code prompt to NEXT_CLAUDE_PROMPT.md.
 *
 * Usage:
 *   node scripts/orchestrator.js
 *   node scripts/orchestrator.js --task "Redesign CuppingPage hero"
 *
 * Never executes Claude Code automatically. Human reviews output first.
 */

import 'dotenv/config';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ─── Config ───────────────────────────────────────────────────────────────────

const CONTEXT_FILES = [
  { path: 'CLAUDE.md', label: 'PROJECT BRIEF (CLAUDE.md)' },
  { path: 'SUPRA_BRAND_SYSTEM_v2/01_SHARED_CORE.md', label: 'BRAND SYSTEM — SOURCE OF TRUTH (01_SHARED_CORE.md)' },
  { path: 'AI_STATUS.md', label: 'CURRENT STATUS & NEXT TASK (AI_STATUS.md)' },
];

const OUTPUT_FILE = 'NEXT_CLAUDE_PROMPT.md';
const MODEL = 'gpt-4o';
const MAX_TOKENS = 2000;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function readContextFile(relativePath, label) {
  const fullPath = resolve(ROOT, relativePath);
  if (!existsSync(fullPath)) {
    console.warn(`  ⚠ Missing: ${relativePath} — skipping`);
    return null;
  }
  const content = readFileSync(fullPath, 'utf-8').trim();
  return `\n\n${'─'.repeat(60)}\n## ${label}\n${'─'.repeat(60)}\n\n${content}`;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const taskIdx = args.indexOf('--task');
  if (taskIdx !== -1 && args[taskIdx + 1]) {
    return args[taskIdx + 1];
  }
  return null;
}

// ─── System prompt ────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are a senior prompt engineer specializing in Claude Code prompts for the Supra Studium web portal redesign.

Your job: read the provided project context (brief, brand system, current status) and generate a single, complete, actionable Claude Code prompt.

RULES FOR THE PROMPT YOU GENERATE:
- Output ONLY the Claude Code prompt itself. No preamble, no explanation, no "Here is the prompt:", no meta-commentary.
- The prompt must be self-contained — Claude Code has no prior context from this conversation.
- Reference specific file paths (e.g., src/pages/ManualTherapySchoolPage.tsx).
- Reference AkupresuraPage.tsx as the design reference when doing a page redesign.
- Explicitly name forbidden UI elements (no urgency badges, no rounded-2xl CTAs, no scale-105 hover effects, no glassmorphism, no full black overlays).
- Specify the exact design direction: editorial clinical documentary, not a sales funnel.
- Include brand writing rules inline — Claude Code must know the voice (Glas 1/2/3), claim certainty rules, and CTA philosophy.
- Be specific about layout decisions (overlay gradient, headline sizing, CTA styling) using the patterns established in AkupresuraPage.tsx.
- The prompt should be complete enough for Claude Code to implement without asking for clarification.
- Write in English (Claude Code works in English even though the UI copy is in Croatian).`;

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  // Validate API key
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'sk-...') {
    console.error(`
Error: OPENAI_API_KEY is not set.

Setup:
  1. cp .env.example .env
  2. Edit .env and add your real OpenAI API key
  3. Run this script again
`);
    process.exit(1);
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  console.log('\nSupra Studium — AI Orchestrator');
  console.log('─'.repeat(40));

  // Build context block
  console.log('\nReading context files...');
  let contextBlock = '';
  for (const { path, label } of CONTEXT_FILES) {
    const content = readContextFile(path, label);
    if (content) {
      contextBlock += content;
      console.log(`  ✓ ${path}`);
    }
  }

  if (!contextBlock.trim()) {
    console.error('\nError: No context files could be read. Aborting.');
    process.exit(1);
  }

  // Check for inline --task override
  const inlineTask = parseArgs();
  let taskInstruction = '';

  if (inlineTask) {
    taskInstruction = `\n\n${'─'.repeat(60)}\n## INLINE TASK OVERRIDE (--task flag)\n${'─'.repeat(60)}\n\n${inlineTask}`;
    console.log(`\nTask override: "${inlineTask}"`);
  }

  const userMessage = `Here is the project context:\n${contextBlock}${taskInstruction}\n\nGenerate the Claude Code prompt now.`;

  // Call OpenAI
  console.log(`\nCalling ${MODEL}...`);
  let generatedPrompt;
  try {
    const response = await client.chat.completions.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userMessage },
      ],
    });

    generatedPrompt = response.choices?.[0]?.message?.content?.trim();

    if (!generatedPrompt) {
      console.error('\nError: OpenAI returned an empty response.');
      process.exit(1);
    }
  } catch (err) {
    console.error('\nOpenAI API error:');
    console.error(err.message || err);
    process.exit(1);
  }

  // Write output
  const outputPath = resolve(ROOT, OUTPUT_FILE);
  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);
  const outputContent = `# Next Claude Code Prompt
> Generated: ${timestamp}
> Model: ${MODEL}
> Edit AI_STATUS.md to change the task, then re-run: \`node scripts/orchestrator.js\`

---

${generatedPrompt}
`;

  writeFileSync(outputPath, outputContent, 'utf-8');

  console.log(`\n✓ Prompt saved to ${OUTPUT_FILE}`);
  console.log('\nNext step: review the file, then paste the prompt into Claude Code.');
  console.log('─'.repeat(40) + '\n');
}

main();
