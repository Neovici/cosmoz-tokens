import{b as i}from"./iframe-BS0TWTfn.js";import{s as d}from"./style-D-jK6d7J.js";const l={title:"Tokens/Spacing"},s=(r,n)=>i`
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
                    ${s("--cz-radius-none (0px)","--cz-radius-none")}
                    ${s("--cz-radius-xxs (2px)","--cz-radius-xxs")}
                    ${s("--cz-radius-xs (4px)","--cz-radius-xs")}
                    ${s("--cz-radius-sm (6px)","--cz-radius-sm")}
                    ${s("--cz-radius-md (8px)","--cz-radius-md")}
                    ${s("--cz-radius-lg (10px)","--cz-radius-lg")}
                    ${s("--cz-radius-xl (12px)","--cz-radius-xl")}
                    ${s("--cz-radius-2xl (16px)","--cz-radius-2xl")}
                    ${s("--cz-radius-3xl (20px)","--cz-radius-3xl")}
                    ${s("--cz-radius-4xl (24px)","--cz-radius-4xl")}
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
                        >--cz-spacing: 4px</code
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
                                <span class="story-label">${r}x = ${r*4}px</span>
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
                    \${radiusSwatch('--cz-radius-none (0px)', '--cz-radius-none')}
                    \${radiusSwatch('--cz-radius-xxs (2px)', '--cz-radius-xxs')}
                    \${radiusSwatch('--cz-radius-xs (4px)', '--cz-radius-xs')}
                    \${radiusSwatch('--cz-radius-sm (6px)', '--cz-radius-sm')}
                    \${radiusSwatch('--cz-radius-md (8px)', '--cz-radius-md')}
                    \${radiusSwatch('--cz-radius-lg (10px)', '--cz-radius-lg')}
                    \${radiusSwatch('--cz-radius-xl (12px)', '--cz-radius-xl')}
                    \${radiusSwatch('--cz-radius-2xl (16px)', '--cz-radius-2xl')}
                    \${radiusSwatch('--cz-radius-3xl (20px)', '--cz-radius-3xl')}
                    \${radiusSwatch('--cz-radius-4xl (24px)', '--cz-radius-4xl')}
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
                        >--cz-spacing: 4px</code
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
                                <span class="story-label">\${n}x = \${n * 4}px</span>
                            </div>
                        \`)}
                </div>
            </div>
        </div>
    \`
}`,...c.parameters?.docs?.source}}};const e=["BorderRadius","SpacingUnit"];export{a as BorderRadius,c as SpacingUnit,e as __namedExportsOrder,l as default};
