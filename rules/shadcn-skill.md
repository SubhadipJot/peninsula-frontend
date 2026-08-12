# shadcn/ui Skill

## Rule

Follow the official `shadcn` skill when adding, fixing, debugging, styling, or composing shadcn/ui components.

## Details

- Skill location: `.agents/skills/shadcn/` (registered via `skills.paths` in `opencode.json`).
- Run shadcn CLI commands with `pnpm dlx shadcn@latest <command>` (this project's package runner).
- Follow its principles: use existing components first (`shadcn search`), compose rather than reinvent, use built-in variants, and use semantic colors (`bg-primary`, `text-muted-foreground`) over raw values.
