# AGENTS.md

Guidance for AI coding assistants working in this repository.

## Design tokens: read before touching token values

The token layers and their rules are documented in
[docs/tokens-guidelines.md](docs/tokens-guidelines.md). Read it before
changing `src/*.css`. Non-negotiables, in short:

- Primitives are the palette; semantics are intent. In components,
  prefer a semantic token when one matches; referencing a raw ramp step
  (`--cz-color-success-600`) is fine when that exact hue is intended.
  Never hard-code colors in `semantic.css`, and never re-point single
  semantic tokens to a different ramp to "fix" a color.
- `--cz-color-brand-*` is the theme knob. Changing the brand color means
  changing the alias ramp in `primitives.css`, not the brand semantic
  tokens (see guidelines §2).
- Pinning a hue (`--cz-color-slate-*`) in a semantic token is a semantic
  claim: only for things that must outlive brand re-themes (link text,
  focus ring), with a comment saying why (§3).
- Every value change in `semantic.css` is mirrored in `fallback.css`
  and ships with a changeset.

## Conventions

- Conventional commits; changesets for releases (`npm run changeset`).
- CSS follows Prettier + ESLint (`npm run lint`); keep the existing
  tab indentation and comment style in `src/`.
- Verify color changes in Storybook (Stories → Semantic/Contrast) with
  dark mode toggled.
