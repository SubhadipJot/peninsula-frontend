# Package Management

## Rule

Use **pnpm** as the package manager for this project. Do not use npm.

## Details

- Install dependencies with `pnpm install` (uses `pnpm-lock.yaml`).
- Run scripts with `pnpm <script>` (e.g. `pnpm dev`, `pnpm build`).
- Do not create or keep `package-lock.json` / `node_modules` produced by npm.
- The `pnpm-lock.yaml` file is the source of truth for dependency versions.
