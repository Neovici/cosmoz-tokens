import { html } from 'lit-html';
import { style } from './style.js';

export default {
	title: 'A11y/Contrast',
};

/**
 * Renders a text sample on a background to let axe-core evaluate contrast.
 */
const contrastPair = (label, textVar, bgVar, borderVar) => html`
	<div
		style="
			background: var(${bgVar});
			color: var(${textVar});
			padding: 16px 20px;
			border-radius: var(--cz-radius-md);
			border: 1px solid var(${borderVar});
			margin-bottom: 8px;
		"
	>
		<strong style="font-size: var(--cz-text-base);">${label}</strong>
		<br />
		<span style="font-size: var(--cz-text-sm); opacity: 1;">
			${textVar} on ${bgVar} with ${borderVar} border
		</span>
	</div>
`;

const toggleDarkMode = () => {
	const root = document.documentElement;
	const dark = root.style.colorScheme !== 'dark';
	root.style.colorScheme = dark ? 'dark' : 'light';
	root.classList.toggle('dark-mode', dark);
};

export const WarningSurfaces = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Warning colors</h1>
			<button
				class="story-btn story-btn--secondary story-mb-6"
				@click=${toggleDarkMode}
			>
				Toggle Dark Mode
			</button>
			<div style="display: grid; gap: 24px; max-width: 640px;">
				<div style="display: flex; align-items: center; gap: 12px;">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="var(--cz-color-fg-warning)"
						stroke-width="2"
						aria-hidden="true"
					>
						<path d="M12 3 2 21h20L12 3Z M12 9v5 M12 17v1" />
					</svg>
					<span style="color: var(--cz-color-text-primary);"
						>Review required</span
					>
				</div>
				<div
					style="background: var(--cz-color-bg-warning); color: var(--cz-color-text-warning);
					border: 1px solid var(--cz-color-border-warning-subtle); padding: 16px;
					border-radius: var(--cz-radius-md);"
				>
					<strong>Payment details need attention</strong>
					<p style="margin: 8px 0 0;">
						Review the bank account before approving this payment.
					</p>
				</div>
				<div style="display: flex; gap: 16px; align-items: center;">
					<span
						style="background: var(--cz-color-bg-warning); color: var(--cz-color-text-warning);
						border: 1px solid var(--cz-color-border-warning-subtle); border-radius: var(--cz-radius-full);
						padding: 4px 12px;"
						>Awaiting approval</span
					>
					<span
						style="background: var(--cz-color-bg-warning-solid); color: var(--cz-color-fg-white);
						border-radius: var(--cz-radius-full); padding: 4px 12px;"
						>3 overrides</span
					>
				</div>
				<div style="color: var(--cz-color-text-warning);">
					Delivered quantity is below the ordered quantity.
				</div>
				<div
					style="display: flex; gap: 12px; align-items: center; color: var(--cz-color-text-primary);"
				>
					<span
						style="width: 80px; height: 12px; border-radius: var(--cz-radius-sm);
						background: var(--cz-color-fg-warning);"
					></span>
					Due within 5 days
				</div>
			</div>
		</div>
	`,
};

export const SuccessSurfaces = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Success colors</h1>
			<button
				class="story-btn story-btn--secondary story-mb-6"
				@click=${toggleDarkMode}
			>
				Toggle Dark Mode
			</button>
			<div style="display: grid; gap: 24px; max-width: 640px;">
				<div style="display: flex; align-items: center; gap: 12px;">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="var(--cz-color-fg-success)"
						stroke-width="2"
						aria-hidden="true"
					>
						<circle cx="12" cy="12" r="9" />
						<path d="m7 12 3 3 7-7" />
					</svg>
					<span>Invoice matched</span>
				</div>
				<div
					style="background: var(--cz-color-bg-success); color: var(--cz-color-text-success);
					border: 1px solid var(--cz-color-border-success-subtle); padding: 16px;
					border-radius: var(--cz-radius-md);"
				>
					<strong>Matching complete</strong>
					<p style="margin: 8px 0 0;">
						Delivered quantity matches the ordered quantity.
					</p>
				</div>
				<div style="display: flex; gap: 16px; align-items: center;">
					<span
						style="background: var(--cz-color-bg-success); color: var(--cz-color-text-success);
						border: 1px solid var(--cz-color-border-success-subtle); border-radius: var(--cz-radius-full);
						padding: 4px 12px;"
						>Completed</span
					>
					<button
						style="background: var(--cz-color-bg-success-solid); color: var(--cz-color-fg-white);
						border: 0; border-radius: var(--cz-radius-md); padding: 8px 16px; font: inherit;"
					>
						Save matches
					</button>
				</div>
				<div style="color: var(--cz-color-text-success);">
					Delivered 10 of 10
				</div>
				<div style="display: flex; gap: 12px; align-items: center;">
					<span
						style="width: 80px; height: 12px; border-radius: var(--cz-radius-sm);
						background: var(--cz-color-fg-success);"
					></span>
					Straight through
				</div>
			</div>
		</div>
	`,
};

export const TextOnStatusBackgrounds = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Text on Status Backgrounds</h1>
			<button
				class="story-btn story-btn--secondary story-mb-6"
				@click=${toggleDarkMode}
			>
				Toggle Dark Mode
			</button>
			<div class="story-section">
				${contrastPair(
					'Error text on error bg',
					'--cz-color-text-error',
					'--cz-color-bg-error',
					'--cz-color-error-200',
				)}
				${contrastPair(
					'Warning text on warning bg',
					'--cz-color-text-warning',
					'--cz-color-bg-warning',
					'--cz-color-warning-200',
				)}
				${contrastPair(
					'Success text on success bg',
					'--cz-color-text-success',
					'--cz-color-bg-success',
					'--cz-color-success-200',
				)}
			</div>
		</div>
	`,
};

export const GlassControls = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Glass controls</h1>
			<button class="story-btn story-btn--secondary" @click=${toggleDarkMode}>
				Toggle dark mode
			</button>
			${[
				{
					kind: 'primary',
					fill: '-action',
					sheen: '--cz-glass-action-sheen',
					text: '--cz-color-text-on-glass-action',
					shadow: '--cz-shadow-glass-action',
				},
				{
					kind: 'secondary',
					fill: '',
					sheen: '--cz-glass-sheen',
					text: '--cz-color-text-primary',
					shadow: '--cz-shadow-glass',
				},
				{
					kind: 'destructive',
					fill: '-destructive',
					sheen: '--cz-glass-action-sheen',
					text: '--cz-color-text-on-action',
					shadow: '--cz-shadow-glass-action',
				},
			].map(
				({ kind, fill, sheen, text, shadow }) =>
					html` <button
						style="
					margin: 24px 8px; padding: 10px 18px;
					font: inherit; border-radius: var(--cz-radius-full);
					border: 1px solid var(--cz-color-border-glass);
					background: var(${sheen}), var(--cz-color-bg-glass${fill});
					color: var(${text}); box-shadow: var(${shadow});
					backdrop-filter: var(--cz-backdrop-filter-glass);
				"
					>
						${kind} action
					</button>`,
			)}
		</div>
	`,
};
