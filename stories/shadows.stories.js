import { html } from 'lit-html';
import { style } from './style.js';

export default {
	title: 'Tokens/Shadows',
};

const shadowSwatch = (name, cssVar, description = '') => html`
	<div class="story-flex story-flex--col story-gap-2">
		<div class="story-swatch--shadow" style="box-shadow: var(${cssVar});"></div>
		<span class="story-label story-label--small">${name}</span>
		${description
			? html`<span
					style="font-size: var(--cz-text-xs); color: var(--cz-color-text-tertiary);"
				>
					${description}
				</span>`
			: ''}
	</div>
`;

export const ShadowScale = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Shadow Scale</h1>
			<div class="story-section">
				<div class="story-flex story-flex--wrap story-gap-8">
					${shadowSwatch('--cz-shadow-xs', '--cz-shadow-xs', 'Subtle')}
					${shadowSwatch('--cz-shadow-sm', '--cz-shadow-sm', 'Small')}
					${shadowSwatch('--cz-shadow-md', '--cz-shadow-md', 'Medium')}
					${shadowSwatch('--cz-shadow-lg', '--cz-shadow-lg', 'Large')}
					${shadowSwatch('--cz-shadow-xl', '--cz-shadow-xl', 'X-Large')}
					${shadowSwatch('--cz-shadow-2xl', '--cz-shadow-2xl', '2X-Large')}
					${shadowSwatch('--cz-shadow-3xl', '--cz-shadow-3xl', '3X-Large')}
				</div>
			</div>
		</div>
	`,
};

export const SkeumorphicShadows = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Skeumorphic Shadows</h1>
			<p class="story-description">
				Special shadows for buttons and interactive elements with inset effects.
			</p>
			<div class="story-section">
				<div class="story-flex story-flex--wrap story-gap-8">
					<div class="story-flex story-flex--col story-gap-2">
						<button
							class="story-btn story-btn--secondary"
							style="box-shadow: var(--cz-shadow-skeumorphic);"
						>
							Skeumorphic
						</button>
						<span class="story-label story-label--small"
							>--cz-shadow-skeumorphic</span
						>
					</div>
					<div class="story-flex story-flex--col story-gap-2">
						<button
							class="story-btn story-btn--secondary"
							style="box-shadow: var(--cz-shadow-xs-skeumorphic);"
						>
							XS + Skeumorphic
						</button>
						<span class="story-label story-label--small"
							>--cz-shadow-xs-skeumorphic</span
						>
					</div>
				</div>
			</div>
		</div>
	`,
};

export const FocusRings = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Focus Rings</h1>
			<p class="story-description">
				Accessible focus indicators for interactive elements.
			</p>
			<div class="story-section">
				<div class="story-flex story-flex--wrap story-gap-8">
					<div class="story-flex story-flex--col story-gap-2">
						<input
							type="text"
							placeholder="Brand focus"
							class="story-input story-input--focus"
						/>
						<span class="story-label story-label--small">--cz-focus-ring</span>
					</div>
					<div class="story-flex story-flex--col story-gap-2">
						<input
							type="text"
							placeholder="Error focus"
							class="story-input story-input--error"
						/>
						<span class="story-label story-label--small"
							>--cz-focus-ring-error</span
						>
					</div>
				</div>
			</div>
		</div>
	`,
};
