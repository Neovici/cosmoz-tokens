---
'@neovici/cosmoz-tokens': patch
---

Bring back the black in dark mode and cool the dark grays

- Dark surfaces go back to the 4.8 layering: `bg-primary` is gray-950 and
  `bg-secondary` gray-900 (`-hover` gray-800, `-subtle` gray-900). Cards
  separate from the page by their border, as before.
- Gray 500–950 lean cool instead of lavender, about halfway between the
  graphite scale and the old blue-gray. 700–950 are also slightly darker;
  500 and 600 keep their lightness, so button contrast is unchanged. 25–400
  are unchanged.
