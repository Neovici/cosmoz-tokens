import { html } from 'lit-html';
import { style } from './style.js';

export default {
	title: 'Tokens/Colors',
};

const colorSwatch = (cssVar) => html`
	<div class="story-row">
		<div class="story-swatch" style="background: var(${cssVar});"></div>
		<span class="story-label">${cssVar}</span>
	</div>
`;

const colorScale = (prefix, label) => html`
	<div class="story-section">
		<h3 class="story-section-title">${label}</h3>
		<div class="story-grid story-grid--auto">
			${colorSwatch(`${prefix}-25`)} ${colorSwatch(`${prefix}-50`)}
			${colorSwatch(`${prefix}-100`)} ${colorSwatch(`${prefix}-200`)}
			${colorSwatch(`${prefix}-300`)} ${colorSwatch(`${prefix}-400`)}
			${colorSwatch(`${prefix}-500`)} ${colorSwatch(`${prefix}-600`)}
			${colorSwatch(`${prefix}-700`)} ${colorSwatch(`${prefix}-800`)}
			${colorSwatch(`${prefix}-900`)} ${colorSwatch(`${prefix}-950`)}
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
				<div class="story-grid story-grid--auto">
					${colorSwatch('--cz-color-white')} ${colorSwatch('--cz-color-black')}
					${colorSwatch('--cz-color-alpha-white')}
					${colorSwatch('--cz-color-alpha-black')}
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
