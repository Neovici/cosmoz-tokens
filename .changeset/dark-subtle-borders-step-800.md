---
'@neovici/cosmoz-tokens': minor
---

Take the dark `border-*-subtle` colours down to step 800

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

| status | hand-rolled mix | old (`500`) | new (`800`) |
| --- | --- | --- | --- |
| error | `rgb(147,40,30)` | `rgb(240,68,56)` | `rgb(145,32,24)` |
| warning | `rgb(146,75,9)` | `rgb(247,144,9)` | `rgb(147,55,13)` |
| success | `rgb(12,102,62)` | `rgb(23,178,106)` | `rgb(8,93,58)` |
| processing | `rgb(58,57,141)` | `rgb(99,102,241)` | `rgb(55,48,163)` |

So components can drop their local colour transforms and read the token.

Also adds the one missing member of the family, `--cz-color-border-brand-subtle`
(`brand-300` light, `brand-800` dark), so a brand-tinted surface has a hairline
to pair with `--cz-color-bg-brand` instead of reaching for the loud
`--cz-color-border-brand`.
