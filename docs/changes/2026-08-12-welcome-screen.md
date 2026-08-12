# Welcome Screen (Removed Boilerplate)

**Date:** 2026-08-12

## Summary

Removed all Vite boilerplate and replaced it with a clean welcome screen built with shadcn/ui components.

## Changes

- Rewrote `src/App.tsx` as a minimal welcome screen using the shadcn `Card` and `Button` components.
- Removed `src/App.css` (boilerplate demo styles).
- Removed `src/assets/` (react.svg, vite.svg, hero.png demo assets).
- Removed `public/icons.svg` (social/doc icons used only by the demo).
- Fixed `src/main.tsx` to import `./App` (no `.jsx` extension after the TS conversion).

## What remains

- `src/main.tsx` — app entry.
- `src/App.tsx` — welcome screen (Peninsula branding).
- `src/index.css` — Tailwind + shadcn theme.
- `src/components/ui/` — shadcn components.
- `src/lib/utils.ts` — `cn()` helper.

## Verification

- `pnpm exec tsc --noEmit -p tsconfig.app.json` passes.
- `pnpm lint` reports only the known shadcn warning.
- `pnpm build` succeeds.
