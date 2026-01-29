import { html } from 'lit-html';
import { style } from './style.js';

export default {
	title: 'Tokens/Typography',
};

export const FontFamilies = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Font Families</h1>

			<div class="story-section">
				<h3 class="story-section-title">Body (Inter)</h3>
				<p
					style="font-family: var(--cz-font-body); font-size: var(--cz-text-lg);"
				>
					The quick brown fox jumps over the lazy dog.
				</p>
				<p class="story-label">--cz-font-body</p>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">Display (DM Sans)</h3>
				<p
					style="font-family: var(--cz-font-display); font-size: var(--cz-text-lg);"
				>
					The quick brown fox jumps over the lazy dog.
				</p>
				<p class="story-label">--cz-font-display</p>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">Mono</h3>
				<p
					style="font-family: var(--cz-font-mono); font-size: var(--cz-text-lg);"
				>
					The quick brown fox jumps over the lazy dog.
				</p>
				<p class="story-label">--cz-font-mono</p>
			</div>
		</div>
	`,
};

export const TextSizes = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Text Sizes</h1>

			<div class="story-grid story-gap-6">
				<div class="story-row">
					<span class="story-label">--cz-text-xs (0.75rem / 12px)</span>
					<span
						style="font-size: var(--cz-text-xs); line-height: var(--cz-text-xs-line-height);"
					>
						The quick brown fox jumps over the lazy dog.
					</span>
				</div>

				<div class="story-row">
					<span class="story-label">--cz-text-sm (0.875rem / 14px)</span>
					<span
						style="font-size: var(--cz-text-sm); line-height: var(--cz-text-sm-line-height);"
					>
						The quick brown fox jumps over the lazy dog.
					</span>
				</div>

				<div class="story-row">
					<span class="story-label">--cz-text-md (1rem / 16px)</span>
					<span
						style="font-size: var(--cz-text-md); line-height: var(--cz-text-md-line-height);"
					>
						The quick brown fox jumps over the lazy dog.
					</span>
				</div>

				<div class="story-row">
					<span class="story-label">--cz-text-lg (1.125rem / 18px)</span>
					<span
						style="font-size: var(--cz-text-lg); line-height: var(--cz-text-lg-line-height);"
					>
						The quick brown fox jumps over the lazy dog.
					</span>
				</div>

				<div class="story-row">
					<span class="story-label">--cz-text-xl (1.25rem / 20px)</span>
					<span
						style="font-size: var(--cz-text-xl); line-height: var(--cz-text-xl-line-height);"
					>
						The quick brown fox jumps over the lazy dog.
					</span>
				</div>
			</div>
		</div>
	`,
};

export const DisplaySizes = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Display Sizes</h1>

			<div class="story-grid story-gap-8">
				<div>
					<p class="story-label">--cz-text-display-xs (1.5rem / 24px)</p>
					<p
						style="font-family: var(--cz-font-display); font-size: var(--cz-text-display-xs); line-height: var(--cz-text-display-xs-line-height);"
					>
						Display Extra Small
					</p>
				</div>

				<div>
					<p class="story-label">--cz-text-display-sm (1.875rem / 30px)</p>
					<p
						style="font-family: var(--cz-font-display); font-size: var(--cz-text-display-sm); line-height: var(--cz-text-display-sm-line-height);"
					>
						Display Small
					</p>
				</div>

				<div>
					<p class="story-label">--cz-text-display-md (2.25rem / 36px)</p>
					<p
						style="font-family: var(--cz-font-display); font-size: var(--cz-text-display-md); line-height: var(--cz-text-display-md-line-height); letter-spacing: var(--cz-text-display-md-letter-spacing);"
					>
						Display Medium
					</p>
				</div>

				<div>
					<p class="story-label">--cz-text-display-lg (3rem / 48px)</p>
					<p
						style="font-family: var(--cz-font-display); font-size: var(--cz-text-display-lg); line-height: var(--cz-text-display-lg-line-height); letter-spacing: var(--cz-text-display-lg-letter-spacing);"
					>
						Display Large
					</p>
				</div>

				<div>
					<p class="story-label">--cz-text-display-xl (3.75rem / 60px)</p>
					<p
						style="font-family: var(--cz-font-display); font-size: var(--cz-text-display-xl); line-height: var(--cz-text-display-xl-line-height); letter-spacing: var(--cz-text-display-xl-letter-spacing);"
					>
						Display XL
					</p>
				</div>

				<div>
					<p class="story-label">--cz-text-display-2xl (4.5rem / 72px)</p>
					<p
						style="font-family: var(--cz-font-display); font-size: var(--cz-text-display-2xl); line-height: var(--cz-text-display-2xl-line-height); letter-spacing: var(--cz-text-display-2xl-letter-spacing);"
					>
						Display 2XL
					</p>
				</div>
			</div>
		</div>
	`,
};

export const FontWeights = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Font Weights</h1>

			<div class="story-grid story-gap-4">
				<div class="story-row">
					<span class="story-label">--cz-font-weight-regular (400)</span>
					<span
						style="font-size: var(--cz-text-lg); font-weight: var(--cz-font-weight-regular);"
					>
						Regular weight text
					</span>
				</div>

				<div class="story-row">
					<span class="story-label">--cz-font-weight-medium (500)</span>
					<span
						style="font-size: var(--cz-text-lg); font-weight: var(--cz-font-weight-medium);"
					>
						Medium weight text
					</span>
				</div>

				<div class="story-row">
					<span class="story-label">--cz-font-weight-semibold (600)</span>
					<span
						style="font-size: var(--cz-text-lg); font-weight: var(--cz-font-weight-semibold);"
					>
						Semibold weight text
					</span>
				</div>

				<div class="story-row">
					<span class="story-label">--cz-font-weight-bold (700)</span>
					<span
						style="font-size: var(--cz-text-lg); font-weight: var(--cz-font-weight-bold);"
					>
						Bold weight text
					</span>
				</div>
			</div>
		</div>
	`,
};
