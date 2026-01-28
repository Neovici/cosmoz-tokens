import{b as i}from"./iframe-CYXJaHdM.js";import{s as n}from"./style-BTaPFGKl.js";const e={title:"Tokens/Spacing"},s=(a,d)=>i`
    <div class="story-row">
        <div
            style="width: 64px; height: 64px; border-radius: var(${d}); background: var(--cz-color-brand-100); border: 2px solid var(--cz-color-brand-500);"
        ></div>
        <span class="story-label">${a}</span>
    </div>
`,r={render:()=>i`
        ${n}
        <div class="story-container">
            <h1 class="story-title">Border Radius</h1>
            <div class="story-section">
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));"
                >
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
        ${n}
        <div class="story-container">
            <h1 class="story-title">Spacing Unit</h1>
            <div class="story-section">
                <p style="margin-bottom: 16px; color: var(--cz-color-text-secondary);">
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
                <div
                    style="margin-top: 24px; display: flex; flex-direction: column; gap: 8px;"
                >
                    ${[1,2,3,4,5,6,8,10,12,16].map(a=>i`
                            <div class="story-row">
                                <div
                                    style="height: 24px; width: calc(var(--cz-spacing) * ${a}); background: var(--cz-color-brand-500); border-radius: var(--cz-radius-xs);"
                                ></div>
                                <span class="story-label">${a}x = ${a*4}px</span>
                            </div>
                        `)}
                </div>
            </div>
        </div>
    `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Border Radius</h1>
            <div class="story-section">
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));"
                >
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
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Spacing Unit</h1>
            <div class="story-section">
                <p style="margin-bottom: 16px; color: var(--cz-color-text-secondary);">
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
                <div
                    style="margin-top: 24px; display: flex; flex-direction: column; gap: 8px;"
                >
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
}`,...c.parameters?.docs?.source}}};const l=["BorderRadius","SpacingUnit"];export{r as BorderRadius,c as SpacingUnit,l as __namedExportsOrder,e as default};
