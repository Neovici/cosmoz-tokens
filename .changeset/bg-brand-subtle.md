---
'@neovici/cosmoz-tokens': minor
---

Add `--cz-color-bg-brand-subtle`, a brand surface that text can sit on

Brand was the only status without a tinted surface for dark mode.
`bg-error`, `bg-warning`, `bg-success`, `bg-info` and `bg-processing` all
resolve to their `*-950` step in dark; `bg-brand` resolves to `brand-500`, a
mid-tone blue.

That difference is deliberate in practice — every consumer of `bg-brand` uses
it as a selection, highlight or hover surface, where the point is to stand out
*from* the canvas. A near-black tint would make those invisible. But it leaves
nowhere to put a brand-coloured chip or callout that carries text, because
`--cz-color-text-brand` is `brand-400` in dark and `brand-400` on `brand-500` is
1.31:1.

So this adds the missing one rather than changing `bg-brand`:

| | light | dark | `text-brand` on it, dark |
| --- | --- | --- | --- |
| `bg-brand` | `brand-50` | `brand-500` | 1.31:1 |
| `bg-brand-subtle` | `brand-50` | `brand-950` | **4.81:1** |

Identical in light, where `bg-brand` was already the tinted surface. Use
`bg-brand-subtle` when text sits on the surface, and `bg-brand` when the
surface has to stand out from the page.
