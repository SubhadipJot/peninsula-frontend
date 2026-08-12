# Switched Package Manager to pnpm

**Date:** 2026-08-12

## Summary

Switched the project from npm to pnpm as the package manager.

## Changes

- Removed `node_modules` and `package-lock.json`.
- Installed all dependencies with `pnpm install` (pnpm v11.20.0).
- Created `pnpm-lock.yaml` (this replaces `package-lock.json` going forward).

## Commands

Use `pnpm` instead of `npm` for all package operations:

- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm <script>`

## Verification

- `pnpm install` completed successfully.
- Dependencies are hard-linked from the content-addressable pnpm store.
