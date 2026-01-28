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
- Spacing (border radius)
- Shadows
- Semantic tokens (with dark mode support)

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

### Using utilities in web components

The utilities stylesheet provides common CSS utility classes as a `CSSStyleSheet` for use with Shadow DOM:

```js
import { component } from '@pionjs/pion';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { utilities } from '@neovici/cosmoz-tokens/utilities';
import { style } from './my-component.css.js';

const MyComponent = () => {
	return html`<div class="flex items-center gap-4 p-4">Hello World</div>`;
};

customElements.define(
	'my-component',
	component(MyComponent, {
		styleSheets: [normalize, utilities, style],
	}),
);
```

Available utility classes:

| Category | Classes                                                             |
| -------- | ------------------------------------------------------------------- |
| Display  | `flex`, `block`, `grid`, `hidden`                                   |
| Flex     | `flex-col`, `flex-wrap`, `items-center`, `items-start`, `items-end` |
| Justify  | `justify-center`, `justify-between`, `justify-start`, `justify-end` |
| Gap      | `gap-1` to `gap-8` (uses `--cz-spacing` multiplier)                 |
| Padding  | `p-1` to `p-8`, `px-*`, `py-*`                                      |
| Margin   | `m-1` to `m-8`, `mx-*`, `my-*`, `mt-*`, `mb-*`, `ml-*`, `mr-*`      |
| Sizing   | `w-full`, `h-full`                                                  |
| Text     | `text-center`, `text-left`, `text-right`, `truncate`                |
| Overflow | `overflow-hidden`, `overflow-auto`                                  |
| Cursor   | `cursor-pointer`                                                    |
| Pointer  | `pointer-events-none`                                               |

## Dark Mode

Semantic tokens automatically adapt to dark mode. Enable it by adding a class or data attribute to the root element:

```js
// Using class
document.documentElement.classList.add('dark-mode');

// Or using data attribute
document.documentElement.dataset.theme = 'dark';
```

## Token Reference

### Colors (Primitives)

| Token                         | Description                      |
| ----------------------------- | -------------------------------- |
| `--cz-color-brand-{25-950}`   | Brand color scale (indigo-based) |
| `--cz-color-gray-{25-950}`    | Gray scale                       |
| `--cz-color-error-{25-950}`   | Error/danger colors              |
| `--cz-color-warning-{25-950}` | Warning colors                   |
| `--cz-color-success-{25-950}` | Success colors                   |
| `--cz-color-white`            | Pure white                       |
| `--cz-color-black`            | Pure black                       |

### Typography

| Token                             | Description                     |
| --------------------------------- | ------------------------------- |
| `--cz-font-body`                  | Body font (Inter)               |
| `--cz-font-display`               | Display font (DM Sans)          |
| `--cz-font-mono`                  | Monospace font                  |
| `--cz-text-{xs-xl}`               | Text sizes with line heights    |
| `--cz-text-display-{xs-2xl}`      | Display sizes with line heights |
| `--cz-font-weight-{regular-bold}` | Font weights                    |

### Spacing

| Token                     | Description             |
| ------------------------- | ----------------------- |
| `--cz-spacing`            | Base spacing unit (4px) |
| `--cz-radius-{none-full}` | Border radius scale     |

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
npm run storybook

# Run tests
npm test

# Build Storybook
npm run storybook:build
```

## License

Apache-2.0
