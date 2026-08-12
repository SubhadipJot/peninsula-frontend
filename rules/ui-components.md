# UI Components (shadcn/ui)

## Rule

Use shadcn/ui for all UI components. Do not hand-roll components that shadcn already provides.

## Details

- Add components with `pnpm dlx shadcn@latest add <component>` (Base UI / Nova preset, `style: base-nova`).
- Components live in `src/components/ui/`, the `cn()` helper in `src/lib/utils.ts`.
- Import components via the `@/` alias, e.g. `import { Button } from "@/components/ui/button"`.
- Import shared UI code via `@/lib/...`.
- The theme tokens are defined in `src/index.css` (Tailwind v4 `@theme`). Adjust colors/spacing there, not by overriding classes.
- Do not create a literal `@/` directory; the alias resolves to `./src`.
