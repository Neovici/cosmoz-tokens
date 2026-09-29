# Token guidelines

Why the color tokens are organized the way they are, and the rules for
changing them. Three pull requests (#51, #57, #59) re-argued the same
decisions — this file exists so nobody has to re-argue them.

First, some words. A **token** is a named color, like
`--cz-color-bg-brand`. Tokens live in two groups:

## 1. Two groups, one direction

- **Raw colors** (`primitives.css`) — the paint shelf. Full scales of
  numbered colors from 25 (almost white) to 950 (almost black):
  `gray`, `slate`, `error`, `info`, and so on. Their names say what a
  color _looks like_, never where to use it.
- **Named jobs** (`semantic.css`, `fallback.css`, `shadows.css`) —
  tokens named after the thing they paint: the selected row
  (`bg-brand`), error text (`text-error`), the focus ring
  (`--cz-focus-ring`).

Every named job points at a raw color. That one-way street
(`semantic → primitive`) is what makes theming work.

Two things are never allowed inside `semantic.css` and `fallback.css`:

- actual color values (`rgb(...)` or `#...`), and
- one named-job token pointing at another.

**In components: use named jobs first — raw colors are allowed too.**
If a token exists for your job (`bg-brand`, `text-tertiary`), use it;
it carries a ready-made, checked pair of light and dark colors. If you
need one exact raw color (for example, status dot colors in a table:
`success-600`), pointing straight at the raw scale is fine — it is
meant to be used. Wrap it in `light-dark(...)` if the color must change
in dark mode (`cosmoz-button` does this). If two components end up
copying the same `light-dark(...)` pair, that means the shared token is
missing — add the token instead of the copies.

**Letting apps restyle one piece of a component.** A component can
define its own CSS property that defaults to a token. Apps can then
change colors for that one component without editing it. `cosmoz-tab-card`
does it like this:

```css
/* inside the component */
color: var(--cosmoz-tab-card-heading-color, var(--cz-color-text-primary));
```

The property name says what it is for; the default is a token. Describe
every such property in the component's docs (`@cssprop`).

## 2. The brand scale is the "brand color" switch

`--cz-color-brand-*` is not its own palette: each of its 13 steps is a
shortcut to another scale (today `slate`; before that `gray`; before
that, Danube blue). The info colors point at sky the same way. That
shortcut setup has already survived two brand changes — that is the
proof it works.

What follows from this:

- **To change the brand color, change what the shortcuts point at** — 13
  lines in `primitives.css`. Every brand-styled thing (backgrounds,
  text, borders, icons, focus ring) follows automatically.
- **Never fix one brand token by pointing it at `gray-*` or `slate-*`
  directly.** That cuts the token loose from the switch. When the brand
  color changes later, that token quietly stays behind, and someone has
  to find and fix each loose token in two files (#59 did this).
- Need a **second** accent color? Create a second family of named jobs
  (text/bg/border/fg together). Do not smuggle a second color into the
  brand tokens.

## 3. Some tokens skip the brand scale — on purpose

A few tokens must stay slate no matter what brand is: `text-brand`,
`text-brand-hover`, `border-brand`, `border-brand-subtle` and the focus
ring. Why: links and focus outlines must stay easy to tell apart from
normal text, even if the brand color is ever something neutral.

If you make a token skip the brand scale:

- Point at the real scale (`--cz-color-slate-*`), not `brand-*`, so the
  token keeps its promise even after a brand change.
- Leave a comment on the token saying what would break without it.

**Skip on purpose, not by accident.** Skipping looks the same in code
either way — the difference is the reason. Skipping for a _job_ ("links
must stay readable next to text, whatever the brand color becomes")
survives a brand change: the promise still holds. Skipping for a _color
wish_ ("this should look gray today") only works until the brand color
changes — then half the app follows the new brand and half does not.
The quick test: if your reason starts with "it looks better as…", do
not change this one token — change the brand scale instead.

## 4. Names follow a pattern

`--cz-color-<what it paints>-<situation>[-<extra>]`

- What it paints: `text` | `bg` | `border` | `fg` (`fg` = icons and
  decoration).
- Extras:
  - `-secondary` — the same thing, one step stronger (hover, nesting).
  - `-subtle` — the thin or weak version of the same situation.
  - `-solid` — a filled block; pair it with `text-on-<situation>` or
    `-white`.
  - `-hover` and `on-` — mean what they say.
- Any token that breaks the pattern gets a comment right there
  explaining itself (for example `bg-brand` is the selection highlight —
  mid-tone in dark mode so it stands out _from_ the page; and focus
  rings are drawn inside the element so nothing can clip them).

## 5. Picking the step number; light and dark

- Every named-job token is a `light-dark()` pair: one light color, one
  dark. They are chosen so both are readable. Change one half — check
  the other, and check text against its background (Stories →
  Contrast).
- Old browsers get the light colors from `fallback.css`. Every change
  in `semantic.css` must be copied there — same numbers, two files.
- Which step number to pick depends on the job, not the color:

  | Job              | Light step | Dark step |
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

  Check your change in Storybook with dark mode on and off, on plain
  gray surfaces and on filled ones.

## 6. Housekeeping

- A color scale nobody uses: delete it, or write down why it is kept.
  Never leave it half-decided (the `--cz-danube-*` scale is currently
  unused since brand moved to slate).
- Define each scale once (slate is currently written down twice with
  the same values — merge them).
- Every value change gets a changeset. Renaming or removing a published
  token breaks other apps, so that means a major version bump.

## 7. How this compares to other design systems

This is the standard setup as of 2025–2026 — the W3C Design Tokens
spec, Material 3, Shopify Polaris, GitHub Primer and Radix Colors all
use the same ideas: raw colors plus named jobs, references pointing one
way only, a scale that acts as the theme switch, and step numbers
picked by job.

Known gaps, most useful first:

1. **Component overrides are a habit, not a rule.** Other systems make
   component-specific tokens a formal third group. Cosmoz gets the same
   effect with the CSS-property pattern from section 1 — it works, it
   is just used unevenly. Use it on purpose instead of collecting
   copied `light-dark()` blocks.
2. **Nothing is checked automatically.** The token files are
   hand-maintained CSS. A machine-readable source (the W3C JSON format)
   that generates the CSS, plus automatic checks in CI (references
   point the right way, no unused scales, `semantic.css` and
   `fallback.css` in sync) would enforce sections 2 and 6 without a
   reviewer catching mistakes.
3. **Readability is checked by eye.** The Contrast story exists and the
   a11y addon is installed; the text/background pairs listed in section
   5 should be tested automatically in CI instead.
