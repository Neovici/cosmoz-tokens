/**
 * Cosmoz Design Tokens - Utilities
 * Reusable utility classes for web component shadow DOMs.
 * Uses --cz-spacing for consistent spacing scale.
 */

import { css, sheet } from '@pionjs/pion';

export const utilities = sheet(css`
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

	/* Gap (using --cz-spacing) */
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
	.gap-6 {
		gap: calc(var(--cz-spacing) * 6);
	}
	.gap-8 {
		gap: calc(var(--cz-spacing) * 8);
	}

	/* Margin */
	.m-0 {
		margin: 0;
	}
	.mb-1 {
		margin-bottom: calc(var(--cz-spacing) * 1);
	}
	.mb-2 {
		margin-bottom: calc(var(--cz-spacing) * 2);
	}
	.mb-3 {
		margin-bottom: calc(var(--cz-spacing) * 3);
	}
	.mb-4 {
		margin-bottom: calc(var(--cz-spacing) * 4);
	}
	.mb-6 {
		margin-bottom: calc(var(--cz-spacing) * 6);
	}
	.mb-8 {
		margin-bottom: calc(var(--cz-spacing) * 8);
	}
	.mt-4 {
		margin-top: calc(var(--cz-spacing) * 4);
	}
	.mt-6 {
		margin-top: calc(var(--cz-spacing) * 6);
	}

	/* Padding */
	.p-2 {
		padding: calc(var(--cz-spacing) * 2);
	}
	.p-4 {
		padding: calc(var(--cz-spacing) * 4);
	}
	.p-6 {
		padding: calc(var(--cz-spacing) * 6);
	}
	.px-4 {
		padding-left: calc(var(--cz-spacing) * 4);
		padding-right: calc(var(--cz-spacing) * 4);
	}
	.py-2 {
		padding-top: calc(var(--cz-spacing) * 2);
		padding-bottom: calc(var(--cz-spacing) * 2);
	}
	.py-3 {
		padding-top: calc(var(--cz-spacing) * 3);
		padding-bottom: calc(var(--cz-spacing) * 3);
	}

	/* Display */
	.hidden {
		display: none;
	}
	.block {
		display: block;
	}
	.inline {
		display: inline;
	}
	.inline-block {
		display: inline-block;
	}
	.grid {
		display: grid;
	}

	/* Width/Height */
	.w-full {
		width: 100%;
	}
	.h-full {
		height: 100%;
	}
	.min-h-screen {
		min-height: 100vh;
	}

	/* Text */
	.text-center {
		text-align: center;
	}
	.text-left {
		text-align: left;
	}
	.text-right {
		text-align: right;
	}
	.truncate {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/* Overflow */
	.overflow-hidden {
		overflow: hidden;
	}
	.overflow-auto {
		overflow: auto;
	}
	.overflow-x-auto {
		overflow-x: auto;
	}

	/* Cursor */
	.cursor-pointer {
		cursor: pointer;
	}
	.cursor-not-allowed {
		cursor: not-allowed;
	}

	/* Pointer events */
	.pointer-events-none {
		pointer-events: none;
	}
`);
