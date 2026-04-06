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
	document.documentElement.classList.toggle('dark-mode');
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
