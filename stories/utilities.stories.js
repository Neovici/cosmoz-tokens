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
			<p class="story-description">
				Layout primitives for flexbox-based designs.
			</p>

			<div class="story-section">
				<h3 class="story-section-title">.flex .items-center .gap-4</h3>
				<div class="demo-container story-p-4">
					<div class="flex items-center gap-4">
						<div class="demo-box">1</div>
						<div class="demo-box">2</div>
						<div class="demo-box">3</div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.flex .justify-between</h3>
				<div class="demo-container story-p-4">
					<div class="flex justify-between">
						<div class="demo-box">1</div>
						<div class="demo-box">2</div>
						<div class="demo-box">3</div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.flex .justify-center</h3>
				<div class="demo-container story-p-4">
					<div class="flex justify-center gap-4">
						<div class="demo-box">1</div>
						<div class="demo-box">2</div>
						<div class="demo-box">3</div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.flex .justify-end</h3>
				<div class="demo-container story-p-4">
					<div class="flex justify-end gap-4">
						<div class="demo-box">1</div>
						<div class="demo-box">2</div>
						<div class="demo-box">3</div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.flex-col .items-start .gap-2</h3>
				<div class="demo-container story-p-4">
					<div class="flex-col items-start gap-2">
						<div class="demo-box">1</div>
						<div class="demo-box">2</div>
						<div class="demo-box">3</div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.flex-col .items-end .gap-2</h3>
				<div class="demo-container story-p-4">
					<div class="flex-col items-end gap-2">
						<div class="demo-box">1</div>
						<div class="demo-box">2</div>
						<div class="demo-box">3</div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.flex .flex-wrap .gap-2</h3>
				<div class="demo-container story-p-4" style="max-width: 200px;">
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
				Gap utilities use <code>--cz-spacing</code> (4px) as a multiplier.
			</p>

			<div class="story-section">
				<h3 class="story-section-title">.gap-0 (0px)</h3>
				<div class="demo-container story-p-4">
					<div class="flex gap-0">
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.gap-1 (4px)</h3>
				<div class="demo-container story-p-4">
					<div class="flex gap-1">
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.gap-2 (8px)</h3>
				<div class="demo-container story-p-4">
					<div class="flex gap-2">
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.gap-3 (12px)</h3>
				<div class="demo-container story-p-4">
					<div class="flex gap-3">
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.gap-4 (16px)</h3>
				<div class="demo-container story-p-4">
					<div class="flex gap-4">
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.gap-5 (20px)</h3>
				<div class="demo-container story-p-4">
					<div class="flex gap-5">
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.gap-6 (24px)</h3>
				<div class="demo-container story-p-4">
					<div class="flex gap-6">
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
						<div class="demo-box--sm demo-box"></div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.gap-8 (32px)</h3>
				<div class="demo-container story-p-4">
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

export const Layout = {
	render: () => html`
		${style} ${utilitiesStyle}
		<div class="story-container">
			<h1 class="story-title">Layout Utilities</h1>
			<p class="story-description">
				Display, sizing, position, and text utilities.
			</p>

			<div class="story-section">
				<h3 class="story-section-title">.hidden</h3>
				<div class="demo-container story-p-4">
					<div class="flex gap-2">
						<div class="demo-box">Visible</div>
						<div class="demo-box hidden">Hidden</div>
						<div class="demo-box">Visible</div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.block</h3>
				<div class="demo-container story-p-4">
					<span class="demo-box--outline demo-box block">
						span with .block (full width)
					</span>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.grid</h3>
				<div class="demo-container story-p-4">
					<div
						class="grid gap-2"
						style="grid-template-columns: repeat(3, 1fr);"
					>
						<div class="demo-box">1</div>
						<div class="demo-box">2</div>
						<div class="demo-box">3</div>
					</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.w-full</h3>
				<div class="demo-container story-p-4" style="max-width: 300px;">
					<div class="demo-box w-full" style="height: 40px;">100% width</div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.h-full</h3>
				<div class="demo-container story-p-4" style="height: 100px;">
					<div class="demo-box h-full" style="width: 40px;"></div>
				</div>
			</div>

			<div class="story-section">
				<h3 class="story-section-title">.relative + .absolute</h3>
				<div class="demo-container story-p-4">
					<div class="relative" style="height: 100px;">
						<div class="demo-box">Relative parent</div>
						<div
							class="demo-box--sm demo-box absolute"
							style="top: 8px; right: 8px;"
						>
							Abs
						</div>
					</div>
				</div>
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
