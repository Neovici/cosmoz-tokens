import{b as a}from"./iframe-B6J65rLd.js";import{s as l}from"./style-qHuTw8SU.js";const g={title:"Tokens/Spacing"},r=(s,t)=>a`
    <div class="story-row">
        <div
            class="story-swatch--lg"
            style="border-radius: var(${t}); background: var(--cz-color-brand-100); border: 2px solid var(--cz-color-brand-500);"
        ></div>
        <span class="story-label">${s}</span>
    </div>
`,o={render:()=>a`
        ${l}
        <div class="story-container">
            <h1 class="story-title">Border Radius</h1>
            <div class="story-section">
                <div class="story-grid story-grid--auto">
                    ${r("--cz-radius-none (0)","--cz-radius-none")}
                    ${r("--cz-radius-xxs (0.125rem / 2px)","--cz-radius-xxs")}
                    ${r("--cz-radius-xs (0.25rem / 4px)","--cz-radius-xs")}
                    ${r("--cz-radius-sm (0.375rem / 6px)","--cz-radius-sm")}
                    ${r("--cz-radius-md (0.5rem / 8px)","--cz-radius-md")}
                    ${r("--cz-radius-lg (0.625rem / 10px)","--cz-radius-lg")}
                    ${r("--cz-radius-xl (0.75rem / 12px)","--cz-radius-xl")}
                    ${r("--cz-radius-2xl (1rem / 16px)","--cz-radius-2xl")}
                    ${r("--cz-radius-3xl (1.25rem / 20px)","--cz-radius-3xl")}
                    ${r("--cz-radius-4xl (1.5rem / 24px)","--cz-radius-4xl")}
                    ${r("--cz-radius-full (9999px)","--cz-radius-full")}
                </div>
            </div>
        </div>
    `},i={render:()=>a`
        ${l}
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
                    ${[1,2,3,4,5,6,8,10,12,16].map(s=>a`
                            <div class="story-row">
                                <div
                                    style="height: 24px; width: calc(var(--cz-spacing) * ${s}); background: var(--cz-color-brand-500); border-radius: var(--cz-radius-xs);"
                                ></div>
                                <span class="story-label"
                                    >${s}x = ${s*.25}rem / ${s*4}px</span
                                >
                            </div>
                        `)}
                </div>
            </div>
        </div>
    `},c=(s,t)=>a`
    <div class="story-row">
        <div
            style="height: var(--cz-control-height-${s}); width: 96px; background: var(--cz-color-brand-100); border: 1px solid var(--cz-color-brand-500); border-radius: var(--cz-radius-md); box-sizing: border-box;"
        ></div>
        <span class="story-label"
            >--cz-control-height-${s} (${t/16}rem / ${t}px)</span
        >
    </div>
`,e=(s,t)=>a`
    <div class="story-row">
        <div
            style="height: var(--cz-tag-height-${s}); width: 96px; background: var(--cz-color-brand-100); border: 1px solid var(--cz-color-brand-500); border-radius: var(--cz-radius-full); box-sizing: border-box;"
        ></div>
        <span class="story-label"
            >--cz-tag-height-${s} (${t/16}rem / ${t}px)</span
        >
    </div>
`,n={render:()=>a`
        ${l}
        <div class="story-container">
            <h1 class="story-title">Tag Height</h1>
            <div class="story-section">
                <p class="story-description">
                    Content ladder for controls that host tags: a control renders its tags
                    one size step below, with about 2x spacing of air. Matches the
                    rendered cosmoz-tag box per size.
                </p>
                <div class="story-flex story-flex--col story-gap-2 story-mt-6">
                    ${e("xs",20)} ${e("sm",24)} ${e("md",28)}
                    ${e("lg",32)}
                </div>
            </div>
        </div>
    `},d={render:()=>a`
        ${l}
        <div class="story-container">
            <h1 class="story-title">Control Height</h1>
            <div class="story-section">
                <p class="story-description">
                    Shared heights for buttons, inputs and other form controls, so
                    controls of the same size line up.
                </p>
                <div class="story-flex story-flex--col story-gap-2 story-mt-6">
                    ${c("sm",28)} ${c("md",32)}
                    ${c("lg",36)} ${c("xl",40)}
                </div>
            </div>
        </div>
    `};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Tag Height</h1>
            <div class="story-section">
                <p class="story-description">
                    Content ladder for controls that host tags: a control renders its tags
                    one size step below, with about 2x spacing of air. Matches the
                    rendered cosmoz-tag box per size.
                </p>
                <div class="story-flex story-flex--col story-gap-2 story-mt-6">
                    \${tagHeight('xs', 20)} \${tagHeight('sm', 24)} \${tagHeight('md', 28)}
                    \${tagHeight('lg', 32)}
                </div>
            </div>
        </div>
    \`
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Control Height</h1>
            <div class="story-section">
                <p class="story-description">
                    Shared heights for buttons, inputs and other form controls, so
                    controls of the same size line up.
                </p>
                <div class="story-flex story-flex--col story-gap-2 story-mt-6">
                    \${controlHeight('sm', 28)} \${controlHeight('md', 32)}
                    \${controlHeight('lg', 36)} \${controlHeight('xl', 40)}
                </div>
            </div>
        </div>
    \`
}`,...d.parameters?.docs?.source}}};const v=["BorderRadius","SpacingUnit","TagHeight","ControlHeight"];export{o as BorderRadius,d as ControlHeight,i as SpacingUnit,n as TagHeight,v as __namedExportsOrder,g as default};
