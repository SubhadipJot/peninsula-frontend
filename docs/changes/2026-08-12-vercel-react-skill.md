# Installed Vercel React Best Practices Skill

**Date:** 2026-08-12

## Summary

Installed the `vercel-react-best-practices` skill from the Vercel Labs `agent-skills` repo to guide React/Next.js performance work.

## Changes

- Ran `npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices`.
- Skill files were copied to `.agents/skills/vercel-react-best-practices/` (SKILL.md + 70 rule files in `rules/`, plus `AGENTS.md` and `metadata.json`).
- Since opencode only auto-loads `.agents/skills` from the home directory (not project-level), created `opencode.json` registering the project skill path:

  ```json
  {
    "$schema": "https://opencode.ai/config.json",
    "skills": { "paths": [".agents/skills"] }
  }
  ```

- The `npx skills` CLI (v1.5.22) reported the skill as Safe / 0 alerts / Low risk.

## Note

- opencode config is loaded once at startup. Restart opencode for the skill to be picked up.
- The skill applies when writing/reviewing/refactoring React components, data fetching, bundle optimization, or performance work.

## Verification

- Skill present at `.agents/skills/vercel-react-best-practices/SKILL.md` with valid frontmatter (name + description).
