# AGENTS.md

## Project context
- Stack: Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS.
- Deployment target: Vercel.
- Source layout:
  - `app/` route segments and page/layout entries.
  - `components/` reusable UI building blocks.
  - `hooks/` shared React hooks.
  - `constants.ts` centralized static content/config.
  - `public/` static assets.

## Core engineering principles
- Keep code DRY: extract repeated UI logic, class combinations, and data transforms into small helpers/hooks/components.
- Follow SOLID, adapted for frontend:
  - Single Responsibility: components/hooks should each have one clear concern.
  - Open/Closed: extend via composition and props, avoid editing stable primitives for one-off needs.
  - Liskov Substitution: keep component contracts predictable and compatible.
  - Interface Segregation: prefer focused prop types over large "do everything" interfaces.
  - Dependency Inversion: depend on abstractions (typed props, helper functions), not hard-coded side effects.
- Prefer clarity over cleverness; optimize readability first.
- Keep changes minimal and local to the requested scope.

## Next.js and React guidelines
- Default to Server Components in `app/`; add `"use client"` only when browser APIs, state, or effects are required.
- Keep route files (`app/**/page.tsx`) slim by composing from `components/`.
- Use `next/link` for internal navigation; use semantic HTML and accessible labels/roles.
- Avoid unnecessary client-side effects; if required, clean up listeners/subscriptions.
- Place metadata in route/layout `metadata` exports where relevant.

## TypeScript and code style
- Maintain strict typing; avoid `any` unless documented and justified.
- Reuse shared types/interfaces for repeated shapes.
- Keep function/component signatures small and explicit.
- Prefer immutable patterns and pure helpers for data shaping.
- Match existing style conventions in touched files; do not reformat unrelated code.

## Tailwind and styling
- Reuse existing design tokens from `tailwind.config.ts` (colors, fonts, animations).
- Avoid duplicated long class strings by extracting reusable UI primitives when repetition appears.
- Preserve responsive behavior across breakpoints (`lg`, `2xl`, etc.) used by existing components.

## Vercel and runtime constraints
- Ensure changes are compatible with Vercel defaults for Next.js:
  - No assumptions about long-lived server state.
  - Avoid filesystem writes at runtime.
  - Prefer environment-variable driven configuration for deploy-specific values.
- Keep bundle impact in mind; avoid adding heavy dependencies without strong justification.

## Quality gates before finishing
- Run checks after meaningful code changes:
  - `yarn lint`
  - `yarn build` (for route/runtime safety)
- If a command cannot be run locally, document what remains and why.
- Include concise notes on what changed, why, and any follow-up needed.

## Change safety rules
- Do not modify unrelated files.
- Do not remove existing behavior unless requested or clearly broken.
- Preserve backward compatibility for existing routes and navigation links.
- Prefer additive/refactoring-safe changes over broad rewrites.
