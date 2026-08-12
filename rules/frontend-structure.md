# Frontend Structure & Routing

## Rule

Use the established routing and folder structure when adding or modifying frontend pages.

## Details

- Routing is centralized in `src/router/index.tsx` using React Router v7 `createBrowserRouter`.
- Add new pages under `src/pages/<name>/<name>-page.tsx` as a named export (e.g. `HomePage`).
- Register new routes with the route-level `lazy()` pattern (code splitting per page) — do not use `React.lazy` variables in the router file.
- The root layout lives at `src/layouts/root-layout.tsx`; add nav items there.
- Shared/env config goes through `src/config/env.ts` (`VITE_*` vars), never `import.meta.env` directly in components.
- Use Base UI's `render` prop (not Radix-style `asChild`) when composing buttons with links.
- Verify with: `pnpm exec tsc --noEmit -p tsconfig.app.json`, `pnpm lint`, `pnpm build`.
