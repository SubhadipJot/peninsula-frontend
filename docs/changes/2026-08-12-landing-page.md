# Dark Mode Landing Page with Agent Network Animation

**Date:** 2026-08-12

## Summary

Replaced the placeholder welcome screen with a distinctive dark-mode landing page featuring a live agent-network animation as its signature element.

## Design decisions (per the `frontend-design` skill)

- **Subject**: Peninsula as an AI job-hunting assistant. The page's single job: show that a team of agents searches, matches, tailors, and applies for you.
- **Signature**: a full-bleed SVG node-graph animation — six agent nodes (search → match → tailor → apply → track → report) with glowing message pulses traveling along dashed edges. Everything else is kept quiet and disciplined.
- **Process-focused copy**: headline "Agents that search, match, and apply for you", a mono-script eyebrow badge, and a live cycling status feed showing agents "scanning 40+ career pages", "scored 5 roles…", etc.
- **Palette**: near-black violet-tinted dark background with an electric violet (`#8B5CF6`) accent.
- **Type**: Geist for display/body; added Geist Mono for the "agent console" labels and status feed.

## Changes

- Added `@fontsource-variable/geist-mono`; imported it and added `--font-mono` to the theme.
- Customized the `.dark` palette in `index.css` (violet-tinted oklch tokens).
- `main.tsx` now adds `dark` to `<html>` (app defaults to dark mode).
- New `src/layouts/landing-layout.tsx` — minimal landing header (brand + Login button), used only for `/`.
- New `src/pages/home/agent-network.tsx` — the signature SVG animation (SMIL `animateMotion` pulses + animated dashed edges, no JS needed for motion).
- Rewrote `src/pages/home/home-page.tsx` — full-bleed animation background, headline, CTA buttons (Login + "See how it works"), and the cycling `StatusFeed`.
- Router updated: `/` uses `LandingLayout`; `/jobs`, `/applications`, and `*` keep `RootLayout`.

## Notes

- The Login button is decorative (no action) per the brief.
- Motion uses SMIL `animateMotion`, which is hardware-friendly and requires no JS.
- Route-based code splitting is preserved: `home-page` is its own chunk.

## Verification

- `pnpm exec tsc --noEmit -p tsconfig.app.json` passes.
- `pnpm lint` reports only the known shadcn `buttonVariants` warning.
- `pnpm build` succeeds; `home-page-*.js` chunk emitted; Geist Mono fonts included.
- Preview server serves `/` with the landing page.
