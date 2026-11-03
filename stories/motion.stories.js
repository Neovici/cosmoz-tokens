import { html } from 'lit-html';
import { style } from './style.js';

export default {
	title: 'Tokens/Motion',
};

const replayStagger = () => {
	const stagger = document.querySelector('.motion-stagger');
	if (!stagger) {
		return;
	}
	for (const card of stagger.children) {
		card.style.animation = 'none';
	}
	requestAnimationFrame(() => {
		for (const card of stagger.children) {
			card.style.animation = '';
		}
	});
};

const lane = (dotStyle) => html`
	<div class="motion-lane">
		<div class="motion-dot" style="${dotStyle}"></div>
	</div>
`;

export const Curves = {
	render: () => html`
		${style}
		<style>
			@keyframes motion-slide {
				from {
					transform: translateX(0);
				}
				to {
					transform: translateX(160px);
				}
			}
			.motion-lane {
				width: 200px;
				height: 32px;
				display: flex;
				align-items: center;
				background: var(--cz-color-bg-tertiary);
				border-radius: var(--cz-radius-full);
				flex: none;
			}
			.motion-dot {
				width: 20px;
				height: 20px;
				border-radius: var(--cz-radius-full);
				background: var(--cz-color-brand-500);
			}
			@media (prefers-reduced-motion: reduce) {
				.motion-dot {
					animation: none;
				}
			}
		</style>
		<div class="story-container">
			<h1 class="story-title">Curves</h1>
			<p class="story-description">
				Motion is short, decelerating, and only on transform, opacity and
				colour. Entrances still switch off under
				<code>prefers-reduced-motion</code>.
			</p>
			<div class="story-grid story-gap-4">
				<div class="story-row">
					${lane(
						'animation: motion-slide 1200ms var(--cz-ease-out) infinite alternate;',
					)}
					<span class="story-label"
						>--cz-ease-out: cubic-bezier(0.16, 1, 0.3, 1) - entrances,
						reveals</span
					>
				</div>
				<div class="story-row">
					${lane(
						'animation: motion-slide 1200ms var(--cz-ease-in-out) infinite alternate;',
					)}
					<span class="story-label"
						>--cz-ease-in-out: cubic-bezier(0.65, 0, 0.35, 1) - moves between
						two resting places</span
					>
				</div>
			</div>
		</div>
	`,
};

export const Durations = {
	render: () => html`
		${style}
		<style>
			@keyframes motion-slide {
				from {
					transform: translateX(0);
				}
				to {
					transform: translateX(160px);
				}
			}
			.motion-lane {
				width: 200px;
				height: 32px;
				display: flex;
				align-items: center;
				background: var(--cz-color-bg-tertiary);
				border-radius: var(--cz-radius-full);
				flex: none;
			}
			.motion-dot {
				width: 20px;
				height: 20px;
				border-radius: var(--cz-radius-full);
				background: var(--cz-color-brand-500);
			}
			@media (prefers-reduced-motion: reduce) {
				.motion-dot {
					animation: none;
				}
			}
		</style>
		<div class="story-container">
			<h1 class="story-title">Durations</h1>
			<p class="story-description">
				Each dot crosses its lane at its token's duration, then comes back:
				hover and press feedback (fast), small state changes (normal), entrances
				of whole surfaces (slow).
			</p>
			<div class="story-grid story-gap-4">
				<div class="story-row">
					${lane(
						'animation: motion-slide var(--cz-duration-fast) var(--cz-ease-out) infinite alternate;',
					)}
					<span class="story-label">--cz-duration-fast (150ms)</span>
				</div>
				<div class="story-row">
					${lane(
						'animation: motion-slide var(--cz-duration-normal) var(--cz-ease-out) infinite alternate;',
					)}
					<span class="story-label">--cz-duration-normal (250ms)</span>
				</div>
				<div class="story-row">
					${lane(
						'animation: motion-slide var(--cz-duration-slow) var(--cz-ease-out) infinite alternate;',
					)}
					<span class="story-label">--cz-duration-slow (600ms)</span>
				</div>
			</div>
		</div>
	`,
};

export const Stagger = {
	render: () => html`
		${style}
		<style>
			@keyframes motion-enter {
				from {
					opacity: 0;
					transform: translateY(0.5rem);
				}
			}
			.motion-card {
				width: 72px;
				height: 72px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: var(--cz-radius-lg);
				background: var(--cz-color-brand-100);
				border: 2px solid var(--cz-color-brand-500);
				font-weight: var(--cz-font-weight-semibold);
				animation: motion-enter var(--cz-duration-slow) var(--cz-ease-out)
					backwards;
				animation-delay: calc(var(--motion-i) * var(--cz-stagger));
			}
			@media (prefers-reduced-motion: reduce) {
				.motion-card {
					animation: none;
				}
			}
		</style>
		<div class="story-container">
			<h1 class="story-title">Stagger</h1>
			<p class="story-description">
				Siblings enter one after another: shared entrance animation, delayed by
				<code>calc(i * var(--cz-stagger))</code>. Like all entrances it animates
				opacity and transform only, and switches off under
				<code>prefers-reduced-motion</code>.
			</p>
			<button
				class="story-btn story-btn--secondary story-mb-6"
				@click=${replayStagger}
			>
				Replay entrance
			</button>
			<div class="story-flex story-gap-3 motion-stagger">
				<div class="motion-card" style="--motion-i: 0;">1</div>
				<div class="motion-card" style="--motion-i: 1;">2</div>
				<div class="motion-card" style="--motion-i: 2;">3</div>
			</div>
		</div>
	`,
};
