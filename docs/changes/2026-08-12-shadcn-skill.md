# Installed shadcn/ui Skill

**Date:** 2026-08-12

## Summary

Installed the official `shadcn` skill from the shadcn-ui/ui repo to guide shadcn/ui component work.

## Changes

- Ran `npx skills add https://github.com/shadcn-ui/ui --skill shadcn`.
- Skill files copied to `.agents/skills/shadcn/` (SKILL.md + rules: base-vs-radix, chat, composition, forms, icons, styling; plus cli.md, customization.md, mcp.md, registry.md, evals, agents).
- `skills-lock.json` updated by the CLI with the new skill entry.
- No `opencode.json` change needed — `.agents/skills` is already registered via `skills.paths`.

## Notes

- The skill's frontmatter allows `pnpm dlx shadcn@latest *` (matches this project's pnpm setup).
- The CLI reported: Gen Safe / Socket 0 alerts / Snyk Med Risk.
- Restart opencode to load the new skill.

## Verification

- Skill present at `.agents/skills/shadcn/SKILL.md` with valid frontmatter (name + description).
