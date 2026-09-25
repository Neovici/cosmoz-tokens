# @neovici/cosmoz-tokens

## 4.6.0

### Minor Changes

- 8df6b54: Re-point the brand scale from Danube blue to the gray scale

  `--cz-color-brand-{25-950}` now resolve to `--cz-color-gray-{25-950}`, so
  every brand-derived semantic token (solid fills, brand text, selected
  surfaces, focus rings) turns neutral. The `--cz-danube-*` primitives stay
  available for direct use.

- c544943: Use a Slate brand scale instead of plain gray

  Adds `--cz-slate-{25-950}` primitives and maps `--cz-color-brand-{25-950}`
  onto them. Brand surfaces stay neutral but keep a cool cast, so links and
  selected states still stand apart from body text.

## 4.5.0

### Minor Changes

- 98e8288: Add `--cz-color-bg-brand-subtle`, a brand surface that text can sit on

  Brand was the only status without a tinted surface for dark mode.
  `bg-error`, `bg-warning`, `bg-success`, `bg-info` and `bg-processing` all
  resolve to their `*-950` step in dark; `bg-brand` resolves to `brand-500`, a
  mid-tone blue.

  That difference is deliberate in practice — every consumer of `bg-brand` uses
  it as a selection, highlight or hover surface, where the point is to stand out
  _from_ the canvas. A near-black tint would make those invisible. But it leaves
  nowhere to put a brand-coloured chip or callout that carries text, because
  `--cz-color-text-brand` is `brand-400` in dark and `brand-400` on `brand-500` is
  1.31:1.

  So this adds the missing one rather than changing `bg-brand`:

  |                   | light      | dark        | `text-brand` on it, dark |
  | ----------------- | ---------- | ----------- | ------------------------ |
  | `bg-brand`        | `brand-50` | `brand-500` | 1.31:1                   |
  | `bg-brand-subtle` | `brand-50` | `brand-950` | **4.81:1**               |

  Identical in light, where `bg-brand` was already the tinted surface. Use
  `bg-brand-subtle` when text sits on the surface, and `bg-brand` when the
  surface has to stand out from the page.

## 4.4.0

### Minor Changes

- 1db0c4f: Take the dark `border-*-subtle` colours down to step 800

  In dark mode every status `-subtle` border was the `500` step at full opacity,
  the same value used for `fg-*`. On a `*-950` tinted surface that reads as a
  bright ring rather than a hairline — the point of `-subtle` is that the
  background carries the status and the border only closes the shape.

  Dark now uses `800` for `border-error/info/warning/success/processing-subtle`.
  Light is unchanged at `300`.

  This also matches what consumers were hand-rolling before the tokens existed.
  Against a `color-mix(in oklab, var(--cz-color-fg-*) 40%, transparent)` over the
  tinted background, `800` lands within 8–22 per channel where `500` was 76–101
  away:

  | status     | hand-rolled mix  | old (`500`)       | new (`800`)      |
  | ---------- | ---------------- | ----------------- | ---------------- |
  | error      | `rgb(147,40,30)` | `rgb(240,68,56)`  | `rgb(145,32,24)` |
  | warning    | `rgb(146,75,9)`  | `rgb(247,144,9)`  | `rgb(147,55,13)` |
  | success    | `rgb(12,102,62)` | `rgb(23,178,106)` | `rgb(8,93,58)`   |
  | processing | `rgb(58,57,141)` | `rgb(99,102,241)` | `rgb(55,48,163)` |

  So components can drop their local colour transforms and read the token.

  Also adds the one missing member of the family, `--cz-color-border-brand-subtle`
  (`brand-300` light, `brand-800` dark), so a brand-tinted surface has a hairline
  to pair with `--cz-color-bg-brand` instead of reaching for the loud
  `--cz-color-border-brand`.

## 4.3.0

### Minor Changes

- 8fbfa41: Add border colours for the warning, success and processing statuses

  Error and info already had `--cz-color-border-error` / `--cz-color-border-info`
  (plus their `-subtle` variants), but warning, success and processing did not.
  Anything drawing a status-tinted border — badges, alert cards, highlighted table
  rows — had to mix its own colour out of the `fg-*` tokens instead, which meant
  every consumer invented a slightly different border.

  This fills in the gaps so the whole status family is symmetric:
  - `--cz-color-border-warning` / `--cz-color-border-warning-subtle`
  - `--cz-color-border-success` / `--cz-color-border-success-subtle`
  - `--cz-color-border-processing` / `--cz-color-border-processing-subtle`

  Values follow the existing error/info pattern exactly: the strong border is
  `500` in light and `400` in dark, the subtle one `300` in light and `500` in
  dark. Use `-subtle` for the hairline around a tinted surface (it is the partner
  of `--cz-color-bg-*`), and the plain one when the border itself is the signal.

## 4.2.0

### Minor Changes

- cc4c82b: Switch the body font from Inter to Geist.

  `--cz-font-body` is the default font token. Geist has a tailed `l` that
  clearly separates it from `I` — useful where Inter's bare stem confuses
  invoice numbers and article codes.

  Font files remain the consuming app's responsibility; this package ships
  tokens only.

- ddf307c: Add `--cz-shadow-pressed-3d` and `--cz-shadow-pressed-3d-solid`, an inset
  top shadow that gives buttons a pressed-in feel.

  Shade colors follow the theme via `light-dark()` tokens
  (`--cz-color-pressed-shade(-strong)`); `fallback.css` carries static light
  values for older browsers.

## 4.1.0

### Minor Changes

- 4abed37: Add semantic colors for the "processing" state.

  Every other status color — error, warning, success — has a set of semantic
  colors that switch automatically between light and dark. Processing did not,
  so components showing a processing state had to reach into the raw indigo
  scale, which is fixed and always returns light values. That made processing
  badges and chips render light colors on dark backgrounds.

  Adds the same six colors processing was missing, built on the indigo scale and
  matching the other statuses exactly:
  - `--cz-color-text-processing`
  - `--cz-color-bg-processing`, `--cz-color-bg-processing-secondary`, `--cz-color-bg-processing-solid`
  - `--cz-color-fg-processing`, `--cz-color-fg-processing-secondary`

## 4.0.0

### Major Changes

- d034a58: BREAKING feat: adopt light-dark() for semantic tokens

  Semantic color tokens now resolve their dark values via `light-dark()`
  instead of a `:root[data-theme='dark']` / `.dark-mode` override block.
  Dark mode follows the CSS `color-scheme` of the consuming document —
  set it on the root to get dark values:

  ```css
  /* CSS */
  :root {
  	color-scheme: dark; /* or: light dark to follow the OS */
  }
  ```

  ```js
  // or from JS
  document.documentElement.style.colorScheme = 'light dark';
  ```

  The `data-theme='dark'` attribute and `.dark-mode` class no longer flip
  these tokens — documents relying on them must migrate to `color-scheme`
  or they will silently get light values. Components are unaffected: they
  are `var()` consumers and never reference the theme attribute.

  Browsers without `light-dark()` support (Chrome < 123, Firefox < 120,
  Safari < 17.5) fall back to the frozen light theme via a
  `@supports not (color: light-dark(red, blue))` block.

  Adds `--cz-color-focus-ring(-error|-info)` and
  `--cz-color-skeumorphic-ring/-highlight` color tokens; the shadow and
  focus-ring tokens are assembled from them (light-dark() only accepts
  colors). This supersedes #34 — a pressed pair can be expressed the same
  way without extra per-state override blocks.

## 3.5.2

### Patch Changes

- 05dd6d2: Give the skeumorphic tokens dark-theme values. The ring is near-black, so on a
  dark surface it disappeared and the `::before` highlight was left acting as the
  border — doubling up with any border the consumer drew itself.

## 3.5.1

### Patch Changes

- 464cc12: Use inset box-shadows for input focus rings to prevent overflow

## 3.5.0

### Minor Changes

- 29aa353: Add full Tailwind v3 color palette as primitives and info semantic tokens

  Adds 15 color scales (25–950) mirroring the Tailwind v3 palette:
  slate, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose.

  Adds `info` semantic tokens (text, background, border, foreground) with light/dark mode support, based on the sky color scale.

### Patch Changes

- 4878b51: Migrate from semantic-release to changesets

## [3.4.0](https://github.com/Neovici/cosmoz-tokens/compare/v3.3.2...v3.4.0) (2026-03-26)

### Features

- update color contrast for status tokens ([#25](https://github.com/Neovici/cosmoz-tokens/issues/25)) ([edfad61](https://github.com/Neovici/cosmoz-tokens/commit/edfad61e0f8c5e2e2e0f2c4f1e5e2e0f2c4f1e5e))

## [3.3.2](https://github.com/Neovici/cosmoz-tokens/compare/v3.3.1...v3.3.2) (2026-03-17)

### Bug Fixes

- revert text on brand change ([d570b06](https://github.com/Neovici/cosmoz-tokens/commit/d570b066568584a69bfa7f07646fbf3021456a3f))

## [3.3.1](https://github.com/Neovici/cosmoz-tokens/compare/v3.3.0...v3.3.1) (2026-03-17)

### Bug Fixes

- set brand semantics keeping the complementary colors ([cc3c801](https://github.com/Neovici/cosmoz-tokens/commit/cc3c8018a1696c7652f2773a1ab2d5096c786c06))

## [3.3.0](https://github.com/Neovici/cosmoz-tokens/compare/v3.2.1...v3.3.0) (2026-02-23)

### Features

- add Danube color scheme as default brand palette ([#24](https://github.com/Neovici/cosmoz-tokens/issues/24)) ([cd69d5f](https://github.com/Neovici/cosmoz-tokens/commit/cd69d5ff72a164f9bfb520acbbbf738f57f6993b))

## [3.2.1](https://github.com/Neovici/cosmoz-tokens/compare/v3.2.0...v3.2.1) (2026-02-03)

### Bug Fixes

- use targeted element resets instead of \* selector in normalize ([#18](https://github.com/Neovici/cosmoz-tokens/issues/18)) ([c3306fc](https://github.com/Neovici/cosmoz-tokens/commit/c3306fc521d5e74f53aa82592630fe10b02d47fc))

## [3.2.0](https://github.com/Neovici/cosmoz-tokens/compare/v3.1.1...v3.2.0) (2026-01-30)

### Features

- add truncate CSS utility for text ellipsis ([#15](https://github.com/Neovici/cosmoz-tokens/issues/15)) ([0882727](https://github.com/Neovici/cosmoz-tokens/commit/0882727e4998fdcddfa3987c37dc4767884a8831))

## [3.1.1](https://github.com/Neovici/cosmoz-tokens/compare/v3.1.0...v3.1.1) (2026-01-30)

### Bug Fixes

- rename skeumorphic.css.ts to .css.js ([#16](https://github.com/Neovici/cosmoz-tokens/issues/16)) ([02df63a](https://github.com/Neovici/cosmoz-tokens/commit/02df63a34b42f0566bdbddd8ad8d60c52cd99dfe))

## [3.1.0](https://github.com/Neovici/cosmoz-tokens/compare/v3.0.0...v3.1.0) (2026-01-30)

### Features

- add skeumorphicHighlight CSS utility for inner button highlight ([#14](https://github.com/Neovici/cosmoz-tokens/issues/14)) ([cd01101](https://github.com/Neovici/cosmoz-tokens/commit/cd011013a8c14e4f6ab03331c224432ab61abd44))

## [3.0.0](https://github.com/Neovici/cosmoz-tokens/compare/v2.1.0...v3.0.0) (2026-01-30)

### ⚠ BREAKING CHANGES

- --cz-text-md renamed to --cz-text-base

- fix(storybook): prevent swatches from shrinking in flex containers

- fix(storybook): remove min-width from story-label for better layout

- fix(storybook): add missing line-height to all typography classes

- fix(storybook): reset margin on card title

### Features

- use rem units for typography and spacing for better accessibility ([#13](https://github.com/Neovici/cosmoz-tokens/issues/13)) ([6d2409f](https://github.com/Neovici/cosmoz-tokens/commit/6d2409f36323b62e074879bae19c99366e1d661c))

## [2.1.0](https://github.com/Neovici/cosmoz-tokens/compare/v2.0.1...v2.1.0) (2026-01-29)

### Features

- add vanilla HTML demo ([#11](https://github.com/Neovici/cosmoz-tokens/issues/11)) ([5dcb4f2](https://github.com/Neovici/cosmoz-tokens/commit/5dcb4f2300eeb3b590983d0f9a2907878ff41f47))

## [2.0.1](https://github.com/Neovici/cosmoz-tokens/compare/v2.0.0...v2.0.1) (2026-01-29)

### Bug Fixes

- **storybook:** display full CSS variable names for easy lookup ([#12](https://github.com/Neovici/cosmoz-tokens/issues/12)) ([e7076a3](https://github.com/Neovici/cosmoz-tokens/commit/e7076a346cfff7c87cd2548bbc304ed68971dec2))

## [2.0.0](https://github.com/Neovici/cosmoz-tokens/compare/v1.2.0...v2.0.0) (2026-01-29)

### ⚠ BREAKING CHANGES

- The utilities export has been removed from @neovici/cosmoz-tokens.
  Web components should use CSS custom properties (tokens) directly in component styles
  for margins, padding, colors, etc. rather than utility classes.

### Features

- remove utilities module ([#10](https://github.com/Neovici/cosmoz-tokens/issues/10)) ([b296655](https://github.com/Neovici/cosmoz-tokens/commit/b29665591f1679f14e9cf48a27cea84924605a63))

## [1.2.0](https://github.com/Neovici/cosmoz-tokens/compare/v1.1.0...v1.2.0) (2026-01-29)

### Features

- add TypeScript type declarations for normalize and utilities ([#9](https://github.com/Neovici/cosmoz-tokens/issues/9)) ([46ed05f](https://github.com/Neovici/cosmoz-tokens/commit/46ed05f72dd792df8253ed4ae8e3b16ebc2aedbd))

## [1.1.0](https://github.com/Neovici/cosmoz-tokens/compare/v1.0.0...v1.1.0) (2026-01-29)

### Features

- add utilities CSS stylesheet ([#7](https://github.com/Neovici/cosmoz-tokens/issues/7)) ([e5dd287](https://github.com/Neovici/cosmoz-tokens/commit/e5dd287a4d7d50baede62999849f02d4660a4ff6))

## 1.0.0 (2026-01-28)

### Features

- initial cosmoz-tokens package ([9f0ca8c](https://github.com/Neovici/cosmoz-tokens/commit/9f0ca8ce59ebd198bc40d9859ef311344956b798))

### Bug Fixes

- update devDependencies to match cosmoz-component ([#6](https://github.com/Neovici/cosmoz-tokens/issues/6)) ([328b87e](https://github.com/Neovici/cosmoz-tokens/commit/328b87e04bc6b5fab622eee3e5829ce8ec63cf95))
