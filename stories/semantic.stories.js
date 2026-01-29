import { html } from 'lit-html';
import { style } from './style.js';

export default {
	title: 'Tokens/Semantic',
};

const colorRow = (cssVar) => html`
	<div class="story-row">
		<div class="story-swatch" style="background: var(${cssVar});"></div>
		<span class="story-label">${cssVar}</span>
	</div>
`;

const toggleDarkMode = () => {
	document.documentElement.classList.toggle('dark-mode');
};

export const TextColors = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Text Colors</h1>
			<button
				class="story-btn story-btn--secondary story-mb-6"
				@click=${toggleDarkMode}
			>
				Toggle Dark Mode
			</button>
			<div class="story-section">
				<div class="story-grid story-grid--wide">
					${colorRow('--cz-color-text-primary')}
					${colorRow('--cz-color-text-secondary')}
					${colorRow('--cz-color-text-tertiary')}
					${colorRow('--cz-color-text-quaternary')}
					${colorRow('--cz-color-text-disabled')}
					${colorRow('--cz-color-text-placeholder')}
					${colorRow('--cz-color-text-error')}
					${colorRow('--cz-color-text-warning')}
					${colorRow('--cz-color-text-success')}
					${colorRow('--cz-color-text-brand')}
					${colorRow('--cz-color-text-on-brand')}
				</div>
			</div>
		</div>
	`,
};

export const BackgroundColors = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Background Colors</h1>
			<button
				class="story-btn story-btn--secondary story-mb-6"
				@click=${toggleDarkMode}
			>
				Toggle Dark Mode
			</button>
			<div class="story-section">
				<h3 class="story-section-title">Base</h3>
				<div class="story-grid story-grid--wide">
					${colorRow('--cz-color-bg-primary')}
					${colorRow('--cz-color-bg-secondary')}
					${colorRow('--cz-color-bg-tertiary')}
					${colorRow('--cz-color-bg-quaternary')}
					${colorRow('--cz-color-bg-disabled')}
					${colorRow('--cz-color-bg-overlay')}
				</div>
			</div>
			<div class="story-section">
				<h3 class="story-section-title">Brand</h3>
				<div class="story-grid story-grid--wide">
					${colorRow('--cz-color-bg-brand')}
					${colorRow('--cz-color-bg-brand-secondary')}
					${colorRow('--cz-color-bg-brand-solid')}
					${colorRow('--cz-color-bg-brand-section')}
				</div>
			</div>
			<div class="story-section">
				<h3 class="story-section-title">Status</h3>
				<div class="story-grid story-grid--wide">
					${colorRow('--cz-color-bg-error')}
					${colorRow('--cz-color-bg-error-solid')}
					${colorRow('--cz-color-bg-warning')}
					${colorRow('--cz-color-bg-warning-solid')}
					${colorRow('--cz-color-bg-success')}
					${colorRow('--cz-color-bg-success-solid')}
				</div>
			</div>
		</div>
	`,
};

export const BorderColors = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Border Colors</h1>
			<button
				class="story-btn story-btn--secondary story-mb-6"
				@click=${toggleDarkMode}
			>
				Toggle Dark Mode
			</button>
			<div class="story-section">
				<div class="story-grid story-grid--wide">
					${colorRow('--cz-color-border-primary')}
					${colorRow('--cz-color-border-secondary')}
					${colorRow('--cz-color-border-tertiary')}
					${colorRow('--cz-color-border-disabled')}
					${colorRow('--cz-color-border-error')}
					${colorRow('--cz-color-border-brand')}
				</div>
			</div>
		</div>
	`,
};

export const ForegroundColors = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Foreground Colors</h1>
			<p class="story-description">For icons and decorative elements.</p>
			<button
				class="story-btn story-btn--secondary story-mb-6"
				@click=${toggleDarkMode}
			>
				Toggle Dark Mode
			</button>
			<div class="story-section">
				<div class="story-grid story-grid--wide">
					${colorRow('--cz-color-fg-primary')}
					${colorRow('--cz-color-fg-secondary')}
					${colorRow('--cz-color-fg-tertiary')}
					${colorRow('--cz-color-fg-quaternary')}
					${colorRow('--cz-color-fg-disabled')}
					${colorRow('--cz-color-fg-white')} ${colorRow('--cz-color-fg-brand')}
					${colorRow('--cz-color-fg-error')}
					${colorRow('--cz-color-fg-warning')}
					${colorRow('--cz-color-fg-success')}
				</div>
			</div>
		</div>
	`,
};

export const DarkModeDemo = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Dark Mode Demo</h1>
			<button
				class="story-btn story-btn--primary story-mb-6"
				@click=${toggleDarkMode}
			>
				Toggle Dark Mode
			</button>
			<div class="story-section">
				<div class="story-card">
					<h3 class="story-card-title">Card Title</h3>
					<p class="story-card-text">
						This is a demo card showing how semantic tokens adapt to dark mode
						automatically.
					</p>
					<div class="story-flex story-gap-3">
						<button class="story-btn story-btn--primary">Primary</button>
						<button class="story-btn story-btn--secondary">Secondary</button>
					</div>
				</div>
			</div>
			<div class="story-section story-mt-6">
				<h3 class="story-section-title">Usage</h3>
				<pre class="story-code">
// Add dark mode class to root
document.documentElement.classList.add('dark-mode');

// Or use data attribute
document.documentElement.dataset.theme = 'dark';</pre
				>
			</div>
		</div>
	`,
};
