import { html } from 'lit-html';
import { style } from './style.js';

export default {
	title: 'Tokens/Surface',
};

const toggleDarkMode = () => {
	const root = document.documentElement;
	const dark = root.style.colorScheme !== 'dark';
	root.style.colorScheme = dark ? 'dark' : 'light';
	root.classList.toggle('dark-mode', dark);
};

const raisedMaterial = [
	'background: var(--cz-color-bg-raised);',
	'box-shadow: var(--cz-shadow-raised);',
	'backdrop-filter: var(--cz-backdrop-filter-raised);',
	'border-radius: var(--cz-radius-lg);',
	'padding: calc(var(--cz-spacing) * 4);',
].join(' ');

const opaqueFill =
	'--cz-color-bg-raised: light-dark(var(--cz-color-white), var(--cz-color-gray-900)); --cz-backdrop-filter-raised: none;';

export const RaisedSurface = {
	render: () => html`
		${style}
		<div class="story-container">
			<h1 class="story-title">Raised Surface</h1>
			<p class="story-description">
				Cards and panels lifted off the page canvas: a translucent fill blurs
				whatever sits behind it, a hairline edge and a lit top edge draw the
				shape, and a long soft drop lifts it. The canvas carries a faint brand
				light from above; the shell frames the view panel. Without
				<code>backdrop-filter</code> support, under
				<code>prefers-reduced-transparency</code> and in forced colours the
				material falls back to opaque surfaces (see the second card).
			</p>
			<button
				class="story-btn story-btn--secondary story-mb-6"
				@click=${toggleDarkMode}
			>
				Toggle Dark Mode
			</button>
			<div class="story-section">
				<h3 class="story-section-title">Shell, canvas and raised card</h3>
				<div
					class="story-p-4"
					style="background: var(--cz-color-bg-shell); border-radius: var(--cz-radius-xl);"
				>
					<div
						class="story-p-4"
						style="background-color: var(--cz-color-bg-canvas); background-image: var(--cz-canvas-light); border-radius: var(--cz-radius-lg);"
					>
						<div
							class="story-grid"
							style="grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));"
						>
							<div style="${raisedMaterial}">
								<p class="story-card-title" style="margin: 0;">
									Raised material
								</p>
								<p class="story-card-text" style="margin-bottom: 0;">
									Translucent fill blurring the canvas light behind it.
								</p>
							</div>
							<div style="${opaqueFill} ${raisedMaterial}">
								<p class="story-card-title" style="margin: 0;">
									Reduced transparency
								</p>
								<p class="story-card-text" style="margin-bottom: 0;">
									What
									<code>prefers-reduced-transparency: reduce</code> resolves to:
									opaque fill, no blur.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="story-flex story-flex--col story-gap-2 story-mt-6">
					<span class="story-label">--cz-color-bg-shell: app frame</span>
					<span class="story-label"
						>--cz-color-bg-canvas + --cz-canvas-light: view panel</span
					>
					<span class="story-label"
						>--cz-color-bg-raised + --cz-shadow-raised +
						--cz-backdrop-filter-raised: card</span
					>
				</div>
			</div>
			<div class="story-section story-mt-6">
				<h3 class="story-section-title">Usage</h3>
				<pre class="story-code">
.card {
	background: var(--cz-color-bg-raised);
	backdrop-filter: var(--cz-backdrop-filter-raised);
	box-shadow: var(--cz-shadow-raised);
	border-radius: var(--cz-radius-lg);
}</pre
				>
			</div>
		</div>
	`,
};
