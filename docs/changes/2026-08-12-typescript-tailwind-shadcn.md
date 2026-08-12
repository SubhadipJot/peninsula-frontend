# TypeScript + Tailwind + shadcn/ui Setup

**Date:** 2026-08-12

## Summary

Converted the project to TypeScript, added Tailwind CSS v4, and installed shadcn/ui (Base UI / Nova preset).

## Changes

### TypeScript conversion

- Installed `typescript` and `@types/node`.
- Added `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` (project references layout).
- Converted `src/main.jsx` -> `src/main.tsx` and `src/App.jsx` -> `src/App.tsx`; updated `index.html` entry.
- Replaced `vite.config.js` with `vite.config.ts`.
- Added `src/vite-env.d.ts` for Vite asset typings.
- Added `@/*` -> `./src/*` path alias in tsconfig and vite config.
- Fixed `main.tsx` null-safety for the root element.

### Tailwind CSS v4

- Installed `tailwindcss` and `@tailwindcss/vite`.
- Registered the Tailwind plugin in `vite.config.ts`.
- Replaced `src/index.css` with Tailwind + shadcn theme (Geist font, oklch color tokens, dark mode variant).

### shadcn/ui

- Ran `shadcn init -t vite -b base -p nova`.
- Created `components.json`.
- Installed `@base-ui/react`, `class-variance-authority`, `clsx`, `lucide-react`, `tailwind-merge`, `tw-animate-css`, `@fontsource-variable/geist`, `shadcn`.
- Added `src/lib/utils.ts` (the `cn()` helper).
- Added components: `src/components/ui/button.tsx`, `src/components/ui/card.tsx`.

### Notes / gotchas

- The shadcn CLI initially wrote files into a literal `@/` directory because the root `tsconfig.json` had no `paths`. Fixed by adding `paths` to the root tsconfig and moving files to `src/components/ui` and `src/lib`.
- TypeScript 7 removed `baseUrl`; paths work standalone.
- Add new components with `pnpm dlx shadcn@latest add <component>`.

## Verification

- `pnpm exec tsc --noEmit -p tsconfig.app.json` passes.
- `pnpm build` succeeds.
- `pnpm lint` reports only the known shadcn `only-export-components` warning.
