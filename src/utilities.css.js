/**
 * Cosmoz Design Tokens - Utilities
 *
 * Minimal layout primitives for web component shadow DOMs.
 * Uses --cz-spacing for consistent spacing scale.
 *
 * Philosophy: This is intentionally a minimal set. Web components have scoped CSS,
 * so you don't need utility classes for everything. Use CSS custom properties
 * (tokens) directly in your component styles for margins, padding, colors, etc.
 */

import { css, sheet } from '@pionjs/pion';

/**
 * Raw CSS for utilities - can be used in Light DOM contexts
 * @example
 * import { utilitiesCSS } from '@neovici/cosmoz-tokens/utilities';
 * html`<style>${utilitiesCSS}</style>`;
 */
export const utilitiesCSS = css`
	/* Flexbox */
	.flex {
		display: flex;
	}
	.flex-col {
		display: flex;
		flex-direction: column;
	}
	.flex-wrap {
		flex-wrap: wrap;
	}
	.items-center {
		align-items: center;
	}
	.items-start {
		align-items: flex-start;
	}
	.items-end {
		align-items: flex-end;
	}
	.justify-center {
		justify-content: center;
	}
	.justify-between {
		justify-content: space-between;
	}
	.justify-end {
		justify-content: flex-end;
	}

	/* Gap (using --cz-spacing: 4px) */
	.gap-0 {
		gap: 0;
	}
	.gap-1 {
		gap: calc(var(--cz-spacing) * 1);
	}
	.gap-2 {
		gap: calc(var(--cz-spacing) * 2);
	}
	.gap-3 {
		gap: calc(var(--cz-spacing) * 3);
	}
	.gap-4 {
		gap: calc(var(--cz-spacing) * 4);
	}
	.gap-5 {
		gap: calc(var(--cz-spacing) * 5);
	}
	.gap-6 {
		gap: calc(var(--cz-spacing) * 6);
	}
	.gap-8 {
		gap: calc(var(--cz-spacing) * 8);
	}

	/* Display */
	.hidden {
		display: none;
	}
	.block {
		display: block;
	}
	.grid {
		display: grid;
	}

	/* Sizing */
	.w-full {
		width: 100%;
	}
	.h-full {
		height: 100%;
	}

	/* Position */
	.relative {
		position: relative;
	}
	.absolute {
		position: absolute;
	}

	/* Text */
	.truncate {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

/**
 * CSSStyleSheet for utilities - use with Shadow DOM components
 * @example
 * import { utilities } from '@neovici/cosmoz-tokens/utilities';
 * customElements.define('my-el', component(MyEl, { styleSheets: [utilities] }));
 */
export const utilities = sheet(utilitiesCSS);
