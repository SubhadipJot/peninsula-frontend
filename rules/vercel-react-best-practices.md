# Vercel React Best Practices Skill

## Rule

Follow the `vercel-react-best-practices` skill when writing, reviewing, or refactoring React code.

## Details

- Skill location: `.agents/skills/vercel-react-best-practices/` (registered via `skills.paths` in `opencode.json`).
- Apply its rules to all React/Next.js work: data fetching (async-*), bundle size (bundle-*), server perf (server-*), re-render optimization (rerender-*), rendering (rendering-*), and JS perf (js-*).
- Categories are prioritized by impact (waterfalls and bundle size are CRITICAL).
- Do not re-verify the skill install with `npx skills add` unless the skill needs updating; just reference the existing files.
