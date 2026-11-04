import{b as o}from"./iframe-BazZbZbV.js";import{s as i}from"./style-CpWv2HgS.js";const m={title:"Tokens/Motion"},c=()=>{const n=document.querySelector(".motion-stagger");if(n){for(const s of n.children)s.style.animation="none";requestAnimationFrame(()=>{for(const s of n.children)s.style.animation=""})}},a=n=>o`
    <div class="motion-lane">
        <div class="motion-dot" style="${n}"></div>
    </div>
`,e={render:()=>o`
        ${i}
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
                    ${a("animation: motion-slide 1200ms var(--cz-ease-out) infinite alternate;")}
                    <span class="story-label"
                        >--cz-ease-out: cubic-bezier(0.16, 1, 0.3, 1) - entrances,
                        reveals</span
                    >
                </div>
                <div class="story-row">
                    ${a("animation: motion-slide 1200ms var(--cz-ease-in-out) infinite alternate;")}
                    <span class="story-label"
                        >--cz-ease-in-out: cubic-bezier(0.65, 0, 0.35, 1) - moves between
                        two resting places</span
                    >
                </div>
            </div>
        </div>
    `},r={render:()=>o`
        ${i}
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
                    ${a("animation: motion-slide var(--cz-duration-fast) var(--cz-ease-out) infinite alternate;")}
                    <span class="story-label">--cz-duration-fast (150ms)</span>
                </div>
                <div class="story-row">
                    ${a("animation: motion-slide var(--cz-duration-normal) var(--cz-ease-out) infinite alternate;")}
                    <span class="story-label">--cz-duration-normal (250ms)</span>
                </div>
                <div class="story-row">
                    ${a("animation: motion-slide var(--cz-duration-slow) var(--cz-ease-out) infinite alternate;")}
                    <span class="story-label">--cz-duration-slow (600ms)</span>
                </div>
            </div>
        </div>
    `},t={render:()=>o`
        ${i}
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
                @click=${c}
            >
                Replay entrance
            </button>
            <div class="story-flex story-gap-3 motion-stagger">
                <div class="motion-card" style="--motion-i: 0;">1</div>
                <div class="motion-card" style="--motion-i: 1;">2</div>
                <div class="motion-card" style="--motion-i: 2;">3</div>
            </div>
        </div>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
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
                    \${lane('animation: motion-slide 1200ms var(--cz-ease-out) infinite alternate;')}
                    <span class="story-label"
                        >--cz-ease-out: cubic-bezier(0.16, 1, 0.3, 1) - entrances,
                        reveals</span
                    >
                </div>
                <div class="story-row">
                    \${lane('animation: motion-slide 1200ms var(--cz-ease-in-out) infinite alternate;')}
                    <span class="story-label"
                        >--cz-ease-in-out: cubic-bezier(0.65, 0, 0.35, 1) - moves between
                        two resting places</span
                    >
                </div>
            </div>
        </div>
    \`
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
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
                    \${lane('animation: motion-slide var(--cz-duration-fast) var(--cz-ease-out) infinite alternate;')}
                    <span class="story-label">--cz-duration-fast (150ms)</span>
                </div>
                <div class="story-row">
                    \${lane('animation: motion-slide var(--cz-duration-normal) var(--cz-ease-out) infinite alternate;')}
                    <span class="story-label">--cz-duration-normal (250ms)</span>
                </div>
                <div class="story-row">
                    \${lane('animation: motion-slide var(--cz-duration-slow) var(--cz-ease-out) infinite alternate;')}
                    <span class="story-label">--cz-duration-slow (600ms)</span>
                </div>
            </div>
        </div>
    \`
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
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
                @click=\${replayStagger}
            >
                Replay entrance
            </button>
            <div class="story-flex story-gap-3 motion-stagger">
                <div class="motion-card" style="--motion-i: 0;">1</div>
                <div class="motion-card" style="--motion-i: 1;">2</div>
                <div class="motion-card" style="--motion-i: 2;">3</div>
            </div>
        </div>
    \`
}`,...t.parameters?.docs?.source}}};const u=["Curves","Durations","Stagger"];export{e as Curves,r as Durations,t as Stagger,u as __namedExportsOrder,m as default};
