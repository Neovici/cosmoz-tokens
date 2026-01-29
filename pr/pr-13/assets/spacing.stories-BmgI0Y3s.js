import{b as i}from"./iframe-Cue1cWx3.js";import{s as d}from"./style-i9VN6ZV4.js";const e={title:"Tokens/Spacing"},s=(r,n)=>i`
    <div class="story-row">
        <div
            class="story-swatch--lg"
            style="border-radius: var(${n}); background: var(--cz-color-brand-100); border: 2px solid var(--cz-color-brand-500);"
        ></div>
        <span class="story-label">${r}</span>
    </div>
`,a={render:()=>i`
        ${d}
        <div class="story-container">
            <h1 class="story-title">Border Radius</h1>
            <div class="story-section">
                <div class="story-grid story-grid--auto">
                    ${s("--cz-radius-none (0)","--cz-radius-none")}
                    ${s("--cz-radius-xxs (0.125rem / 2px)","--cz-radius-xxs")}
                    ${s("--cz-radius-xs (0.25rem / 4px)","--cz-radius-xs")}
                    ${s("--cz-radius-sm (0.375rem / 6px)","--cz-radius-sm")}
                    ${s("--cz-radius-md (0.5rem / 8px)","--cz-radius-md")}
                    ${s("--cz-radius-lg (0.625rem / 10px)","--cz-radius-lg")}
                    ${s("--cz-radius-xl (0.75rem / 12px)","--cz-radius-xl")}
                    ${s("--cz-radius-2xl (1rem / 16px)","--cz-radius-2xl")}
                    ${s("--cz-radius-3xl (1.25rem / 20px)","--cz-radius-3xl")}
                    ${s("--cz-radius-4xl (1.5rem / 24px)","--cz-radius-4xl")}
                    ${s("--cz-radius-full (9999px)","--cz-radius-full")}
                </div>
            </div>
        </div>
    `},c={render:()=>i`
        ${d}
        <div class="story-container">
            <h1 class="story-title">Spacing Unit</h1>
            <div class="story-section">
                <p class="story-description">
                    Base spacing unit:
                    <code style="font-family: var(--cz-font-mono);"
                        >--cz-spacing: 0.25rem (4px)</code
                    >
                </p>
                <p style="color: var(--cz-color-text-tertiary);">
                    Use
                    <code style="font-family: var(--cz-font-mono);"
                        >calc(var(--cz-spacing) * N)</code
                    >
                    for consistent spacing.
                </p>
                <div class="story-flex story-flex--col story-gap-2 story-mt-6">
                    ${[1,2,3,4,5,6,8,10,12,16].map(r=>i`
                            <div class="story-row">
                                <div
                                    style="height: 24px; width: calc(var(--cz-spacing) * ${r}); background: var(--cz-color-brand-500); border-radius: var(--cz-radius-xs);"
                                ></div>
                                <span class="story-label"
                                    >${r}x = ${r*.25}rem / ${r*4}px</span
                                >
                            </div>
                        `)}
                </div>
            </div>
        </div>
    `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Border Radius</h1>
            <div class="story-section">
                <div class="story-grid story-grid--auto">
                    \${radiusSwatch('--cz-radius-none (0)', '--cz-radius-none')}
                    \${radiusSwatch('--cz-radius-xxs (0.125rem / 2px)', '--cz-radius-xxs')}
                    \${radiusSwatch('--cz-radius-xs (0.25rem / 4px)', '--cz-radius-xs')}
                    \${radiusSwatch('--cz-radius-sm (0.375rem / 6px)', '--cz-radius-sm')}
                    \${radiusSwatch('--cz-radius-md (0.5rem / 8px)', '--cz-radius-md')}
                    \${radiusSwatch('--cz-radius-lg (0.625rem / 10px)', '--cz-radius-lg')}
                    \${radiusSwatch('--cz-radius-xl (0.75rem / 12px)', '--cz-radius-xl')}
                    \${radiusSwatch('--cz-radius-2xl (1rem / 16px)', '--cz-radius-2xl')}
                    \${radiusSwatch('--cz-radius-3xl (1.25rem / 20px)', '--cz-radius-3xl')}
                    \${radiusSwatch('--cz-radius-4xl (1.5rem / 24px)', '--cz-radius-4xl')}
                    \${radiusSwatch('--cz-radius-full (9999px)', '--cz-radius-full')}
                </div>
            </div>
        </div>
    \`
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Spacing Unit</h1>
            <div class="story-section">
                <p class="story-description">
                    Base spacing unit:
                    <code style="font-family: var(--cz-font-mono);"
                        >--cz-spacing: 0.25rem (4px)</code
                    >
                </p>
                <p style="color: var(--cz-color-text-tertiary);">
                    Use
                    <code style="font-family: var(--cz-font-mono);"
                        >calc(var(--cz-spacing) * N)</code
                    >
                    for consistent spacing.
                </p>
                <div class="story-flex story-flex--col story-gap-2 story-mt-6">
                    \${[1, 2, 3, 4, 5, 6, 8, 10, 12, 16].map(n => html\`
                            <div class="story-row">
                                <div
                                    style="height: 24px; width: calc(var(--cz-spacing) * \${n}); background: var(--cz-color-brand-500); border-radius: var(--cz-radius-xs);"
                                ></div>
                                <span class="story-label"
                                    >\${n}x = \${n * 0.25}rem / \${n * 4}px</span
                                >
                            </div>
                        \`)}
                </div>
            </div>
        </div>
    \`
}`,...c.parameters?.docs?.source}}};const l=["BorderRadius","SpacingUnit"];export{a as BorderRadius,c as SpacingUnit,l as __namedExportsOrder,e as default};
