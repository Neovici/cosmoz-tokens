# @neovici/cosmoz-tokens

Design tokens for Cosmoz web components, extracted from Untitled UI.

## Installation

```bash
npm install @neovici/cosmoz-tokens
```

## Usage

### Import all tokens (CSS)

```js
// Import all design tokens
import '@neovici/cosmoz-tokens';
```

This imports all token files:

- Primitives (colors)
- Typography (fonts, sizes)
- Spacing (border radius, control heights)
- Shadows
- Semantic tokens (with dark mode support)
- Glass material and button recipes

### Import specific token files

```js
// Import only what you need
import '@neovici/cosmoz-tokens/primitives.css';
import '@neovici/cosmoz-tokens/typography.css';
import '@neovici/cosmoz-tokens/spacing.css';
import '@neovici/cosmoz-tokens/shadows.css';
import '@neovici/cosmoz-tokens/semantic.css';
```

### Using normalize in web components

The normalize stylesheet provides CSS reset styles as a `CSSStyleSheet` for use with Shadow DOM:

```js
import { component } from '@pionjs/pion';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { style } from './my-component.css.js';

const MyComponent = () => {
	return html`<div>Hello World</div>`;
};

customElements.define(
	'my-component',
	component(MyComponent, {
		styleSheets: [normalize, style],
	}),
);
```

### CSS Utilities

Reusable Lit CSS template literals for common styling patterns.

#### Skeuomorphic Highlight

Adds a subtle "lit from above" inner highlight effect to buttons using a `::before` pseudo-element with a gradient mask:

```js
import { skeumorphicHighlight } from '@neovici/cosmoz-tokens/skeumorphic';

const styles = css`
	.button {
		${skeumorphicHighlight}
	}
`;
```

Customization via CSS custom properties:

- `--skeumorphic-color`: Border color (default: `rgba(255, 255, 255, 0.12)`)
- `--skeumorphic-radius`: Inner border radius (default: `calc(var(--cz-radius-md) - 1px)`)

#### Truncate

Truncate text with ellipsis (equivalent to Tailwind's `truncate`):

```js
import { truncate } from '@neovici/cosmoz-tokens/truncate';

const styles = css`
	.label {
		${truncate}
	}
`;
```

## Dark Mode

Semantic tokens automatically adapt to dark mode. Enable it by adding a class or data attribute to the root element:

```js
// Using class
document.documentElement.classList.add('dark-mode');

// Or using data attribute
document.documentElement.dataset.theme = 'dark';
```

## Design principles

The tokens have two layers — primitives (the palette) and semantics (the
intent) — and the brand ramp doubles as the theme knob. The reasoning and
the rules for changing tokens are documented in
[docs/tokens-guidelines.md](docs/tokens-guidelines.md); read it before
re-pointing or re-theming anything.

## Token Reference

### Colors (Primitives)

| Token                         | Description              |
| ----------------------------- | ------------------------ |
| `--cz-color-brand-{25-950}`   | Brand color scale (gray) |
| `--cz-color-gray-{25-950}`    | Gray scale               |
| `--cz-color-slate-{25-950}`   | Slate scale              |
| `--cz-color-error-{25-950}`   | Error/danger colors      |
| `--cz-color-warning-{25-950}` | Warning colors           |
| `--cz-color-success-{25-950}` | Success colors           |
| `--cz-color-white`            | Pure white               |
| `--cz-color-black`            | Pure black               |

### Typography

| Token                             | Description                     |
| --------------------------------- | ------------------------------- |
| `--cz-font-body`                  | Body font (Geist)               |
| `--cz-font-display`               | Display font (DM Sans)          |
| `--cz-font-mono`                  | Monospace font                  |
| `--cz-text-{xs-xl}`               | Text sizes with line heights    |
| `--cz-text-display-{xs-2xl}`      | Display sizes with line heights |
| `--cz-font-weight-{regular-bold}` | Font weights                    |

### Spacing

| Token                         | Description                     |
| ----------------------------- | ------------------------------- |
| `--cz-spacing`                | Base spacing unit (4px)         |
| `--cz-radius-{none-full}`     | Border radius scale             |
| `--cz-control-height-{sm-xl}` | Control heights (28/32/36/40px) |

### Shadows

| Token                        | Description            |
| ---------------------------- | ---------------------- |
| `--cz-shadow-{xs-3xl}`       | Shadow scale           |
| `--cz-shadow-skeumorphic`    | Button inset shadow    |
| `--cz-shadow-xs-skeumorphic` | Combined shadow        |
| `--cz-focus-ring`            | Focus ring for inputs  |
| `--cz-focus-ring-error`      | Error state focus ring |

### Semantic Colors

| Token                 | Description            |
| --------------------- | ---------------------- |
| `--cz-color-text-*`   | Text colors            |
| `--cz-color-bg-*`     | Background colors      |
| `--cz-color-border-*` | Border colors          |
| `--cz-color-fg-*`     | Foreground/icon colors |

## Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook:start

# Build Storybook
npm run storybook:build
```

## License

Apache-2.0

## Glass material

The main stylesheet includes a shared glass material and separate button
recipes. Other components can reuse the material without adopting button
states, action colors, sizing or border radii. No element receives the effect
until its own styles use these tokens.

| Material token               | Purpose                                               |
| ---------------------------- | ----------------------------------------------------- |
| `--cz-color-bg-glass`        | Translucent fill, opaque when transparency is reduced |
| `--cz-color-border-glass`    | Fine surface edge                                     |
| `--cz-color-glass-highlight` | Top highlight color                                   |
| `--cz-color-glass-shade`     | Bottom shade color                                    |
| `--cz-glass-sheen`           | Surface highlight gradient                            |
| `--cz-shadow-glass`          | Inset top edge                                        |
| `--cz-backdrop-filter-glass` | Backdrop blur and saturation                          |

Components choose their own text color, geometry and interaction states:

```css
.surface {
	background: var(--cz-glass-sheen), var(--cz-color-bg-glass);
	border: 1px solid var(--cz-color-border-glass);
	box-shadow: var(--cz-shadow-glass);
	backdrop-filter: var(--cz-backdrop-filter-glass);
	color: var(--cz-color-text-primary);
	border-radius: var(--cz-radius-lg);
}
```

To load only the material, import `@neovici/cosmoz-tokens/glass` alongside the
primitives. The example above also needs the semantic and spacing tokens, all
included by the main stylesheet. The material does not define hover, pressed,
destructive or disabled states. Those remain in `src/button-glass.css`.

The shared material uses `Canvas` and `CanvasText` in forced colors, with no
sheen, shadow or blur. Components remain responsible for readable text,
appropriate system colors and visible focus. Check contrast against the actual
backdrop when applying glass to a new component; the button contrast guarantees
do not cover arbitrary surfaces or content.

## Glass buttons

The button recipes preserve the existing token names. Use `--cz-glass-sheen`
with `--cz-color-bg-glass` for secondary buttons, and `--cz-glass-action-sheen`
with `--cz-color-bg-glass-action` for primary buttons. Primary buttons use a
pale fill with dark labels in light mode and a deeper smoked fill with light
labels in dark mode. Pair them with `--cz-color-text-on-glass-action`.
Destructive fills use white text. Each fill has a matching `-hover` token.

Secondary buttons use `--cz-color-border-glass` and `--cz-shadow-glass`.

Held buttons use `--cz-color-bg-glass-pressed`,
`--cz-color-bg-glass-action-pressed`, or
`--cz-color-bg-glass-destructive-pressed` with `--cz-shadow-glass-pressed`.
Remove the sheen while pressed so the surface reads as inset.

Primary buttons use `--cz-color-border-glass-action` and
`--cz-shadow-glass-action`. Action fills retain AA label contrast over white
and black backdrops.

Apply `--cz-backdrop-filter-glass` to glass surfaces. It resolves to `none`
without backdrop-filter support and for reduced transparency. Reduced
transparency also restores opaque fills. Forced colors remove the material
effects; components must retain a system-colored border and visible focus
outline.
