import { html } from 'lit-html';
import { style, utilitiesCSS } from './style.js';

export default {
	title: 'Tokens/Utilities',
};

// Inject utilities CSS for Light DOM storybook demos
const utilitiesStyle = html`<style>
	${utilitiesCSS}
</style>`;

export const Flexbox = {
	render: () => html`
		${style} ${utilitiesStyle}
		<div class="story-container">
			<h1 class="story-title">Flexbox Utilities</h1>

			<div class="story-section">
				<h3 class="story-section-title">.flex .items-center .gap-4</h3>
				<div class="demo-container p-4">
					<div class="flex items-center gap-4">
						<div class="demo-box">1</div>
						<div class="demo-box">2</div>
						<div class="demo-box">3</div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.flex .justify-between</h3>
				<div class="demo-container p-4">
					<div class="flex justify-between">
						<div class="demo-box">1</div>
						<div class="demo-box">2</div>
						<div class="demo-box">3</div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.flex .justify-center</h3>
				<div class="demo-container p-4">
					<div class="flex justify-center gap-4">
						<div class="demo-box">1</div>
						<div class="demo-box">2</div>
						<div class="demo-box">3</div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.flex-col .items-start .gap-2</h3>
				<div class="demo-container p-4">
					<div class="flex-col items-start gap-2">
						<div class="demo-box">1</div>
						<div class="demo-box">2</div>
						<div class="demo-box">3</div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.flex .flex-wrap .gap-2</h3>
				<div class="demo-container p-4" style="max-width: 200px;">
					<div class="flex flex-wrap gap-2">
						<div class="demo-box--sm demo-box">1</div>
						<div class="demo-box--sm demo-box">2</div>
						<div class="demo-box--sm demo-box">3</div>
						<div class="demo-box--sm demo-box">4</div>
						<div class="demo-box--sm demo-box">5</div>
						<div class="demo-box--sm demo-box">6</div>
					</div>
				</div>
			</div>
		</div>
	`,
};

export const Gap = {
	render: () => html`
		${style} ${utilitiesStyle}
		<div class="story-container">
			<h1 class="story-title">Gap Utilities</h1>
			<p class="story-description">
				Gap utilities use the <code>--cz-spacing</code> variable (4px) as a
				multiplier.
			</p>

			<div class="story-section">
				<h3 class="story-section-title">.gap-1 (4px)</h3>
				<div class="demo-container p-4">
					<div class="flex gap-1">
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.gap-2 (8px)</h3>
				<div class="demo-container p-4">
					<div class="flex gap-2">
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.gap-4 (16px)</h3>
				<div class="demo-container p-4">
					<div class="flex gap-4">
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.gap-6 (24px)</h3>
				<div class="demo-container p-4">
					<div class="flex gap-6">
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.gap-8 (32px)</h3>
				<div class="demo-container p-4">
					<div class="flex gap-8">
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
					</div>
				</div>
			</div>
		</div>
	`,
};

export const Padding = {
	render: () => html`
		${style} ${utilitiesStyle}
		<div class="story-container">
			<h1 class="story-title">Padding Utilities</h1>
			<p class="story-description">
				The dashed border shows the container edge. The colored box shows
				content.
			</p>

			<div class="story-section">
				<h3 class="story-section-title">.p-2 (8px)</h3>
				<div class="demo-container p-2">
					<div class="demo-box w-full" style="width: 100%; height: 24px;"></div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.p-4 (16px)</h3>
				<div class="demo-container p-4">
					<div class="demo-box w-full" style="width: 100%; height: 24px;"></div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.p-6 (24px)</h3>
				<div class="demo-container p-6">
					<div class="demo-box w-full" style="width: 100%; height: 24px;"></div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">
					.px-4 .py-2 (horizontal 16px, vertical 8px)
				</h3>
				<div class="demo-container px-4 py-2">
					<div class="demo-box w-full" style="width: 100%; height: 24px;"></div>
				</div>
			</div>
		</div>
	`,
};

export const Margin = {
	render: () => html`
		${style} ${utilitiesStyle}
		<div class="story-container">
			<h1 class="story-title">Margin Utilities</h1>
			<p class="story-description">
				The dashed border shows the container. Margin pushes the box away from
				edges.
			</p>

			<div class="story-section">
				<h3 class="story-section-title">.mb-4 (margin-bottom: 16px)</h3>
				<div class="demo-container" style="display: inline-block;">
					<div class="demo-box mb-4">1</div>
					<div class="demo-box">2</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.mt-6 (margin-top: 24px)</h3>
				<div class="demo-container" style="display: inline-block;">
					<div class="demo-box">1</div>
					<div class="demo-box mt-6">2</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.m-0 (reset margin)</h3>
				<div class="demo-container p-4">
					<p class="m-0" style="background: var(--cz-color-bg-tertiary);">
						Paragraph with margin reset
					</p>
				</div>
			</div>
		</div>
	`,
};

export const Text = {
	render: () => html`
		${style} ${utilitiesStyle}
		<div class="story-container">
			<h1 class="story-title">Text Utilities</h1>

			<div class="story-section">
				<h3 class="story-section-title">.text-left</h3>
				<div class="demo-text text-left">Left aligned text</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.text-center</h3>
				<div class="demo-text text-center">Center aligned text</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.text-right</h3>
				<div class="demo-text text-right">Right aligned text</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.truncate</h3>
				<div class="demo-text truncate">
					This is a very long text that will be truncated with an ellipsis when
					it overflows the container
				</div>
			</div>
		</div>
	`,
};

export const Layout = {
	render: () => html`
		${style} ${utilitiesStyle}
		<div class="story-container">
			<h1 class="story-title">Layout Utilities</h1>

			<div class="story-section">
				<h3 class="story-section-title">.w-full</h3>
				<div class="demo-container p-4" style="max-width: 300px;">
					<div class="demo-box w-full" style="height: 40px;">100% width</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.hidden</h3>
				<div class="demo-container p-4">
					<div class="flex gap-2">
						<div class="demo-box">Visible</div>
						<div class="demo-box hidden">Hidden</div>
						<div class="demo-box">Visible</div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.block / .inline-block</h3>
				<div class="demo-container p-4">
					<span class="demo-box--outline demo-box block mb-2"
						>.block (full width)</span
					>
					<span class="demo-box--outline demo-box inline-block"
						>.inline-block</span
					>
					<span class="demo-box--outline demo-box inline-block"
						>.inline-block</span
					>
				</div>
			</div>
		</div>
	`,
};

export const Misc = {
	render: () => html`
		${style} ${utilitiesStyle}
		<div class="story-container">
			<h1 class="story-title">Miscellaneous Utilities</h1>

			<div class="story-section">
				<h3 class="story-section-title">.cursor-pointer</h3>
				<div class="demo-container p-4">
					<div class="demo-box cursor-pointer">Hover me</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.cursor-not-allowed</h3>
				<div class="demo-container p-4">
					<div class="demo-box cursor-not-allowed">Disabled</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.overflow-auto</h3>
				<div
					class="demo-container overflow-auto p-4"
					style="max-width: 200px; max-height: 100px;"
				>
					<div style="width: 300px; height: 150px;">
						This content is larger than its container, so scrollbars appear.
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.pointer-events-none</h3>
				<div class="demo-container p-4">
					<button class="story-btn story-btn--primary pointer-events-none">
						Can't click me
					</button>
				</div>
			</div>
		</div>
	`,
};
