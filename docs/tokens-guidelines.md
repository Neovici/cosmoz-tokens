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
semantic layer is missing a token — add it there instead. The one real
prohibition is on the semantic layer's internals: never introduce an
`rgb()` value there, and never point one semantic token at another.

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
