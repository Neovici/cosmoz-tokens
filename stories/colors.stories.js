import { html } from 'lit-html';
import { style } from './style.js';

export default {
	title: 'Tokens/Colors',
};

const colorSwatch = (name, cssVar) => html`
	<div class="story-row">
		<div
			style="width: 48px; height: 48px; border-radius: var(--cz-radius-md); background: var(${cssVar}); border: 1px solid var(--cz-color-border-secondary);"
		></div>
		<span class="story-label">${name}</span>
	</div>
`;

const colorScale = (prefix, label) => html`
	<div class="story-section">
		<h3 class="story-section-title">${label}</h3>
		<div
			class="story-grid"
			style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));"
		>
			${colorSwatch('25', `${prefix}-25`)} ${colorSwatch('50', `${prefix}-50`)}
			${colorSwatch('100', `${prefix}-100`)}
			${colorSwatch('200', `${prefix}-200`)}
			${colorSwatch('300', `${prefix}-300`)}
			${colorSwatch('400', `${prefix}-400`)}
			${colorSwatch('500', `${prefix}-500`)}
			${colorSwatch('600', `${prefix}-600`)}
			${colorSwatch('700', `${prefix}-700`)}
			${colorSwatch('800', `${prefix}-800`)}
			${colorSwatch('900', `${prefix}-900`)}
			${colorSwatch('950', `${prefix}-950`)}
		</div>
	</div>
`;

export const BrandColors = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Brand Colors</h1>
			${colorScale('--cz-color-brand', 'Brand (Indigo-based)')}
		</div>
	`,
};

export const GrayColors = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Gray Colors</h1>
			${colorScale('--cz-color-gray', 'Gray')}
		</div>
	`,
};

export const StatusColors = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Status Colors</h1>
			${colorScale('--cz-color-error', 'Error')}
			${colorScale('--cz-color-warning', 'Warning')}
			${colorScale('--cz-color-success', 'Success')}
		</div>
	`,
};

export const BaseColors = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Base Colors</h1>
			<div class="story-section">
				<div
					class="story-grid"
					style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));"
				>
					${colorSwatch('white', '--cz-color-white')}
					${colorSwatch('black', '--cz-color-black')}
					${colorSwatch('alpha-white', '--cz-color-alpha-white')}
					${colorSwatch('alpha-black', '--cz-color-alpha-black')}
				</div>
			</div>
		</div>
	`,
};

export const AllColors = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">All Primitive Colors</h1>
			${colorScale('--cz-color-brand', 'Brand')}
			${colorScale('--cz-color-gray', 'Gray')}
			${colorScale('--cz-color-error', 'Error')}
			${colorScale('--cz-color-warning', 'Warning')}
			${colorScale('--cz-color-success', 'Success')}
		</div>
	`,
};
