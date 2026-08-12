# Installed Frontend Design Skill

**Date:** 2026-08-12

## Summary

Installed the `frontend-design` skill from Anthropic's skills repo to guide distinctive, intentional UI design.

## Changes

- Ran `npx skills add https://github.com/anthropics/skills --skill frontend-design`.
- Skill copied to `.agents/skills/frontend-design/` (SKILL.md + LICENSE.txt).
- `skills-lock.json` updated by the CLI.
- No `opencode.json` change needed — `.agents/skills` is already registered via `skills.paths`.

## Notes

- The skill covers aesthetic direction, typography, and avoiding templated defaults when building new UI.
- The CLI reported: Gen Safe / Socket 0 alerts / Snyk Low Risk.
- Restart opencode to load the new skill.

## Verification

- Skill present at `.agents/skills/frontend-design/SKILL.md` with valid frontmatter (name + description).
