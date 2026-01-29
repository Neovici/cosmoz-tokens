import { html } from 'lit-html';

// Load all tokens
import '../src/index.css';

/**
 * Shared style for all stories - loads Google Fonts and storybook-specific classes
 */
export const style = html`
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap');
		@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

		/* Container */
		.story-container {
			font-family: var(--cz-font-body);
			color: var(--cz-color-text-primary);
			background: var(--cz-color-bg-primary);
			padding: calc(var(--cz-spacing) * 6);
			min-height: 100vh;
		}

		/* Typography */
		.story-title {
			font-family: var(--cz-font-display);
			font-size: var(--cz-text-display-xs);
			line-height: var(--cz-text-display-xs-line-height);
			margin-bottom: calc(var(--cz-spacing) * 6);
			color: var(--cz-color-text-primary);
		}

		.story-section {
			margin-bottom: calc(var(--cz-spacing) * 8);
		}

		.story-section-title {
			font-size: var(--cz-text-lg);
			font-weight: var(--cz-font-weight-semibold);
			margin-bottom: calc(var(--cz-spacing) * 4);
			color: var(--cz-color-text-secondary);
		}

		.story-description {
			font-size: var(--cz-text-md);
			color: var(--cz-color-text-secondary);
			margin-bottom: calc(var(--cz-spacing) * 4);
		}

		/* Grid */
		.story-grid {
			display: grid;
			gap: calc(var(--cz-spacing) * 2);
		}

		.story-grid--auto {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		}

		.story-grid--wide {
			grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		}

		/* Row */
		.story-row {
			display: flex;
			align-items: center;
			gap: calc(var(--cz-spacing) * 3);
		}

		/* Label */
		.story-label {
			font-size: var(--cz-text-sm);
			color: var(--cz-color-text-tertiary);
			min-width: 180px;
			font-family: var(--cz-font-mono);
		}

		.story-label--small {
			min-width: auto;
		}

		/* Swatches */
		.story-swatch {
			width: 48px;
			height: 48px;
			border-radius: var(--cz-radius-md);
			border: 1px solid var(--cz-color-border-secondary);
		}

		.story-swatch--lg {
			width: 64px;
			height: 64px;
		}

		.story-swatch--shadow {
			width: 120px;
			height: 80px;
			border-radius: var(--cz-radius-lg);
			background: var(--cz-color-bg-primary);
		}

		/* Buttons */
		.story-btn {
			padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 4);
			border-radius: var(--cz-radius-md);
			cursor: pointer;
			font-family: var(--cz-font-body);
			font-size: var(--cz-text-sm);
		}

		.story-btn--secondary {
			background: var(--cz-color-bg-secondary);
			border: 1px solid var(--cz-color-border-primary);
			color: var(--cz-color-text-primary);
		}

		.story-btn--primary {
			background: var(--cz-color-bg-brand-solid);
			border: none;
			color: var(--cz-color-text-on-brand);
			font-weight: var(--cz-font-weight-semibold);
			padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
		}

		/* Card */
		.story-card {
			padding: calc(var(--cz-spacing) * 6);
			border-radius: var(--cz-radius-xl);
			background: var(--cz-color-bg-secondary);
			border: 1px solid var(--cz-color-border-secondary);
		}

		.story-card-title {
			font-size: var(--cz-text-lg);
			font-weight: var(--cz-font-weight-semibold);
			color: var(--cz-color-text-primary);
			margin-bottom: calc(var(--cz-spacing) * 2);
		}

		.story-card-text {
			font-size: var(--cz-text-md);
			color: var(--cz-color-text-secondary);
			margin-bottom: calc(var(--cz-spacing) * 4);
		}

		/* Code */
		.story-code {
			padding: calc(var(--cz-spacing) * 4);
			border-radius: var(--cz-radius-md);
			background: var(--cz-color-bg-tertiary);
			font-family: var(--cz-font-mono);
			font-size: var(--cz-text-sm);
			color: var(--cz-color-text-primary);
			overflow-x: auto;
			white-space: pre;
		}

		/* Flex container */
		.story-flex {
			display: flex;
		}

		.story-flex--wrap {
			flex-wrap: wrap;
		}

		.story-flex--col {
			flex-direction: column;
		}

		.story-gap-2 {
			gap: calc(var(--cz-spacing) * 2);
		}

		.story-gap-3 {
			gap: calc(var(--cz-spacing) * 3);
		}

		.story-gap-8 {
			gap: calc(var(--cz-spacing) * 8);
		}

		/* Margin utilities */
		.story-mb-4 {
			margin-bottom: calc(var(--cz-spacing) * 4);
		}

		.story-mb-6 {
			margin-bottom: calc(var(--cz-spacing) * 6);
		}

		.story-mt-6 {
			margin-top: calc(var(--cz-spacing) * 6);
		}

		/* Input */
		.story-input {
			padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 3.5);
			border-radius: var(--cz-radius-md);
			background: var(--cz-color-bg-primary);
			border: 1px solid var(--cz-color-border-primary);
			font-family: var(--cz-font-body);
			font-size: var(--cz-text-md);
			color: var(--cz-color-text-primary);
			outline: none;
		}

		.story-input--focus {
			box-shadow: var(--cz-focus-ring);
			border-color: var(--cz-color-border-brand);
		}

		.story-input--error {
			box-shadow: var(--cz-focus-ring-error);
			border-color: var(--cz-color-border-error);
		}

		/* Demo boxes for utilities story */
		.demo-box {
			width: 40px;
			height: 40px;
			background: var(--cz-color-bg-brand-solid);
			border-radius: var(--cz-radius-sm);
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--cz-color-text-on-brand);
			font-size: var(--cz-text-xs);
			font-weight: var(--cz-font-weight-semibold);
		}

		.demo-box--sm {
			width: 24px;
			height: 24px;
		}

		.demo-box--outline {
			background: transparent;
			border: 2px dashed var(--cz-color-border-brand);
			color: var(--cz-color-text-brand);
		}

		.demo-container {
			border: 1px dashed var(--cz-color-border-secondary);
			border-radius: var(--cz-radius-md);
			background: var(--cz-color-bg-secondary);
		}

		/* Padding utilities for stories */
		.story-p-4 {
			padding: calc(var(--cz-spacing) * 4);
		}

		.demo-text {
			max-width: 200px;
			padding: calc(var(--cz-spacing) * 2);
			background: var(--cz-color-bg-tertiary);
			border-radius: var(--cz-radius-sm);
		}
	</style>
`;
