# Token guidelines

Why the tokens are structured the way they are, and the rules that keep
future changes from mixing the layers. Motivated by PRs #51, #57 and #59,
which each re-litigated the same layering decisions.

## 1. Two layers, one direction

- **Primitives** (`primitives.css`) are the palette and the theme knobs:
  raw 25–950 ramps (`gray`, `slate`, `error`, `info`, …) plus base colors.
- **Semantics** (`semantic.css`, `fallback.css`, `shadows.css`) are intent:
  what a token is _for_ (`bg-brand`, `text-error`, `--cz-focus-ring`).
  Every semantic value references a primitive — a semantic token is a
  decision about purpose, not about paint.

The dependency goes one way: `semantic → primitive`. A semantic token
should never hard-code an `rgb()` value, and two semantic tokens should
not reference each other.

**From components, prefer semantic tokens.** When an intent token
matches the use case (`bg-brand`, `text-tertiary`, `border-error`), use
it — a semantic token is the shared, reviewed light/dark pair for that
purpose. Ramps are public API and referencing one directly is fine —
often the right call — when you need a specific raw step (status colors
in cells: `success-600`, `warning-500`), and raw steps can be wrapped in
`light-dark()` in component styles when they must adapt to dark mode
(`cosmoz-button` does this across its variants). If several components
end up re-declaring the same `light-dark()` pair, that is the signal the
semantic layer is missing a token — add it there instead.

**Component tokens** complete the picture: a component can expose its
own custom properties that default to a token, so consumers can restyle
one instance without forking the component. This is the established
pattern in cosmoz components — e.g. `cosmoz-tab-card`:

```css
/* in the component */
color: var(--cosmoz-tab-card-heading-color, var(--cz-color-text-primary));
```

The wrapper name carries the component's intent; the fallback stays a
semantic (or, deliberately, a primitive) token. Document each `@cssprop`
in the component's JSDoc like `cosmoz-tab-card` does.

The one real prohibition is on the semantic layer's internals: never
introduce an `rgb()` value there, and never point one semantic token at
another.

## 2. The brand ramp is a theme knob

`--cz-color-brand-*` is an alias ramp: each step maps 1:1 onto one source
scale (`info-*` aliases `sky-*` the same way). History: brand was Danube
blue, was re-pointed to gray in 4.6.0, then to slate. That history is the
proof this works.

Consequences:

- Re-theming brand means editing the alias lines in `primitives.css`.
  Nothing else changes; `bg-*`, `text-*`, `border-*`, `fg-*` and the
  focus ring all follow.
- Re-pointing individual semantic tokens from `brand-*` to `gray-*` or
  `slate-*` — per token, per mode — is never the fix for "brand looks
  wrong here". It forks the ramp, and every future re-theme then has to
  be repeated per token in `semantic.css` _and_ `fallback.css` (the
  failure mode of #59).
- If the brand color itself should change, change `brand-*`.
- If a second accent hue is genuinely needed, add a separate semantic
  series defined for `text`/`bg`/`border`/`fg` together — do not mix a
  second ramp into existing `-brand` tokens.

## 3. Pinning a hue instead of `brand-*` is a semantic claim

Some tokens must keep slate no matter what brand becomes:
`text-brand(-hover)`, `border-brand(-subtle)` and the focus ring. Reason:
links and focus must stay distinguishable from body text even if brand is
ever a neutral gray.

If you pin a ramp:

- Reference the concrete scale (`--cz-color-slate-*`), not `brand-*` —
  the pin must survive a brand re-theme.
- Leave a comment on the token saying what breaks without the pin.

**Pin, not fork.** A pin and a fork both make a semantic token skip the
brand ramp; only one is legitimate. A pin encodes a purpose-level
requirement that stays coherent under re-theming: links must remain
distinguishable from body text _whatever_ brand becomes, so
`text-brand` points at slate and keeps that contract if brand turns
blue. A fork (`bg-brand → gray-50`, #59) encodes a palette-level wish —
it refuses the re-theme silently, leaving selected surfaces gray while
links and focus switch, and the one-file re-theme must then be hunted
down token by token. The test: if the reason starts with "this looks
better as", it is a fork; propose changing the ramp instead.

## 4. Naming grammar

`--cz-color-<role>-<status>[-<modifier>]`

- Role: `text` | `bg` | `border` | `fg` (`fg` = icons and decorative
  elements).
- Modifiers:
  - `-secondary` — same surface one step stronger, for hover or nesting.
  - `-subtle` — hairline/tint partner of the status surface.
  - `-solid` — filled; pair with `text-on-<status>` or `-white`.
  - `-hover` / `on-` — self-describing.
- Documented exceptions carry a comment at the token, e.g. `bg-brand` is
  the selection/highlight surface (mid-tone in dark so it stands out
  _from_ the page; chips that carry text use `-subtle`), and focus rings
  are inset so overflow cannot clip them (`shadows.css`).

## 5. Steps and modes

- `light-dark()` pairs are chosen for contrast between the two modes.
  When adjusting one mode, check the other. Text sits on its matching
  `bg-*` — keep the pairing contrast-verified (Stories → Contrast).
- Browsers without `light-dark()` get the light theme via the `@supports`
  block in `fallback.css`; every `semantic.css` value change must be
  mirrored there.
- Steps are role-first, not hue-first:

  | Role             | Light step | Dark step |
  | ---------------- | ---------- | --------- |
  | Body text        | 900        | 50        |
  | Secondary text   | 700        | 300       |
  | Tertiary text    | 600        | 400       |
  | Tinted surface   | 50         | 950       |
  | Stronger surface | 100/200    | 800/700   |
  | Signal border    | 500        | 400       |
  | Subtle border    | 300        | 800       |
  | Solid fill       | 600        | 600       |
  | Icon (mid)       | 600/500    | 500/400   |

  Verify a change with dark mode toggled in Stories → Semantic, on gray
  surfaces and on solid fills.

## 6. Hygiene

- Unused ramps: delete them or give them a documented job. Decide — do
  not leave them silently in between (the `--cz-danube-*` ramp is
  currently unused since brand moved to slate).
- One concept, one definition. Slate currently ships twice (`--cz-slate-*`
  and `--cz-color-slate-*`, identical values); consolidate.
- Every value change ships with a changeset. Breaking changes (removing
  or renaming published tokens) bump the major version.

## 7. Relation to industry practice

The model here matches the mainstream of design-token systems as of
2025–2026 — W3C/DTCG Design Tokens Format (aliasing and reference
direction are spec-level concepts), Material 3 (reference → system →
component), Shopify Polaris, GitHub Primer, Radix Colors (step
semantics), and the three-tier writeups that dominate current
architecture literature.

- **Two layers with one-way references** is the canonical alias model.
- **The brand ramp as theme knob** (§2) is how multi-brand/theming
  systems are expected to work: change the palette, everything
  downstream follows. The per-token fork (#59) is the industry-documented
  failure mode of tokens that carry both paint and purpose.
- **Naming grammar, role-first steps, documented exceptions** (§4–5)
  follow role-based naming as in Polaris/SLDS and Radix' step docs.

Known gaps, roughly in value order:

1. **Component tokens are a convention, not a tier.** Mainstream systems
   define a third tier (`--cz-button-bg-active` referencing semantics).
   Cosmoz reaches the same effect with `@cssprop` wrappers (§1) — the
   pattern works but is unevenly applied. Promote it consciously instead
   of accumulating state-level `light-dark()` blocks.
2. **No machine-readable source or CI validation.** Tokens are
   hand-maintained CSS. A DTCG JSON source that generates the CSS, plus
   CI checks (reference direction, unused ramps, `semantic.css` ↔
   `fallback.css` parity) would enforce §2 and §6 automatically instead
   of by review.
3. **Contrast is asked, not gated.** The Contrast story exists and
   `@storybook/addon-a11y` is installed; the documented text/bg pairings
   should be asserted in CI rather than checked by eye (§5).
