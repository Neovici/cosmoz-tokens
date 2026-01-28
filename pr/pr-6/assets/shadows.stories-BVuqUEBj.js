import{b as o}from"./iframe-CYXJaHdM.js";import{s as n}from"./style-BTaPFGKl.js";const p={title:"Tokens/Shadows"},r=(t,d,c="")=>o`
    <div style="display: flex; flex-direction: column; gap: 8px;">
        <div
            style="width: 120px; height: 80px; border-radius: var(--cz-radius-lg); background: var(--cz-color-bg-primary); box-shadow: var(${d}); border: 1px solid var(--cz-color-border-secondary);"
        ></div>
        <span class="story-label" style="min-width: auto;">${t}</span>
        ${c?o`<span
                    style="font-size: var(--cz-text-xs); color: var(--cz-color-text-tertiary);"
                    >${c}</span
                >`:""}
    </div>
`,a={render:()=>o`
        ${n}
        <div class="story-container">
            <h1 class="story-title">Shadow Scale</h1>
            <div class="story-section">
                <div style="display: flex; flex-wrap: wrap; gap: 32px;">
                    ${r("--cz-shadow-xs","--cz-shadow-xs","Subtle")}
                    ${r("--cz-shadow-sm","--cz-shadow-sm","Small")}
                    ${r("--cz-shadow-md","--cz-shadow-md","Medium")}
                    ${r("--cz-shadow-lg","--cz-shadow-lg","Large")}
                    ${r("--cz-shadow-xl","--cz-shadow-xl","X-Large")}
                    ${r("--cz-shadow-2xl","--cz-shadow-2xl","2X-Large")}
                    ${r("--cz-shadow-3xl","--cz-shadow-3xl","3X-Large")}
                </div>
            </div>
        </div>
    `},s={render:()=>o`
        ${n}
        <div class="story-container">
            <h1 class="story-title">Skeumorphic Shadows</h1>
            <p style="margin-bottom: 24px; color: var(--cz-color-text-secondary);">
                Special shadows for buttons and interactive elements with inset effects.
            </p>
            <div class="story-section">
                <div style="display: flex; flex-wrap: wrap; gap: 32px;">
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <button
                            style="
                                padding: 10px 18px;
                                border-radius: var(--cz-radius-md);
                                background: var(--cz-color-bg-primary);
                                box-shadow: var(--cz-shadow-skeumorphic);
                                border: 1px solid var(--cz-color-border-primary);
                                font-family: var(--cz-font-body);
                                font-size: var(--cz-text-sm);
                                font-weight: var(--cz-font-weight-semibold);
                                color: var(--cz-color-text-primary);
                                cursor: pointer;
                            "
                        >
                            Skeumorphic
                        </button>
                        <span class="story-label">--cz-shadow-skeumorphic</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <button
                            style="
                                padding: 10px 18px;
                                border-radius: var(--cz-radius-md);
                                background: var(--cz-color-bg-primary);
                                box-shadow: var(--cz-shadow-xs-skeumorphic);
                                border: 1px solid var(--cz-color-border-primary);
                                font-family: var(--cz-font-body);
                                font-size: var(--cz-text-sm);
                                font-weight: var(--cz-font-weight-semibold);
                                color: var(--cz-color-text-primary);
                                cursor: pointer;
                            "
                        >
                            XS + Skeumorphic
                        </button>
                        <span class="story-label">--cz-shadow-xs-skeumorphic</span>
                    </div>
                </div>
            </div>
        </div>
    `},e={render:()=>o`
        ${n}
        <div class="story-container">
            <h1 class="story-title">Focus Rings</h1>
            <p style="margin-bottom: 24px; color: var(--cz-color-text-secondary);">
                Accessible focus indicators for interactive elements.
            </p>
            <div class="story-section">
                <div style="display: flex; flex-wrap: wrap; gap: 32px;">
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <input
                            type="text"
                            placeholder="Brand focus"
                            style="
                                padding: 10px 14px;
                                border-radius: var(--cz-radius-md);
                                background: var(--cz-color-bg-primary);
                                box-shadow: var(--cz-focus-ring);
                                border: 1px solid var(--cz-color-border-brand);
                                font-family: var(--cz-font-body);
                                font-size: var(--cz-text-md);
                                color: var(--cz-color-text-primary);
                                outline: none;
                            "
                        />
                        <span class="story-label">--cz-focus-ring</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <input
                            type="text"
                            placeholder="Error focus"
                            style="
                                padding: 10px 14px;
                                border-radius: var(--cz-radius-md);
                                background: var(--cz-color-bg-primary);
                                box-shadow: var(--cz-focus-ring-error);
                                border: 1px solid var(--cz-color-border-error);
                                font-family: var(--cz-font-body);
                                font-size: var(--cz-text-md);
                                color: var(--cz-color-text-primary);
                                outline: none;
                            "
                        />
                        <span class="story-label">--cz-focus-ring-error</span>
                    </div>
                </div>
            </div>
        </div>
    `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Shadow Scale</h1>
            <div class="story-section">
                <div style="display: flex; flex-wrap: wrap; gap: 32px;">
                    \${shadowSwatch('--cz-shadow-xs', '--cz-shadow-xs', 'Subtle')}
                    \${shadowSwatch('--cz-shadow-sm', '--cz-shadow-sm', 'Small')}
                    \${shadowSwatch('--cz-shadow-md', '--cz-shadow-md', 'Medium')}
                    \${shadowSwatch('--cz-shadow-lg', '--cz-shadow-lg', 'Large')}
                    \${shadowSwatch('--cz-shadow-xl', '--cz-shadow-xl', 'X-Large')}
                    \${shadowSwatch('--cz-shadow-2xl', '--cz-shadow-2xl', '2X-Large')}
                    \${shadowSwatch('--cz-shadow-3xl', '--cz-shadow-3xl', '3X-Large')}
                </div>
            </div>
        </div>
    \`
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Skeumorphic Shadows</h1>
            <p style="margin-bottom: 24px; color: var(--cz-color-text-secondary);">
                Special shadows for buttons and interactive elements with inset effects.
            </p>
            <div class="story-section">
                <div style="display: flex; flex-wrap: wrap; gap: 32px;">
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <button
                            style="
                                padding: 10px 18px;
                                border-radius: var(--cz-radius-md);
                                background: var(--cz-color-bg-primary);
                                box-shadow: var(--cz-shadow-skeumorphic);
                                border: 1px solid var(--cz-color-border-primary);
                                font-family: var(--cz-font-body);
                                font-size: var(--cz-text-sm);
                                font-weight: var(--cz-font-weight-semibold);
                                color: var(--cz-color-text-primary);
                                cursor: pointer;
                            "
                        >
                            Skeumorphic
                        </button>
                        <span class="story-label">--cz-shadow-skeumorphic</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <button
                            style="
                                padding: 10px 18px;
                                border-radius: var(--cz-radius-md);
                                background: var(--cz-color-bg-primary);
                                box-shadow: var(--cz-shadow-xs-skeumorphic);
                                border: 1px solid var(--cz-color-border-primary);
                                font-family: var(--cz-font-body);
                                font-size: var(--cz-text-sm);
                                font-weight: var(--cz-font-weight-semibold);
                                color: var(--cz-color-text-primary);
                                cursor: pointer;
                            "
                        >
                            XS + Skeumorphic
                        </button>
                        <span class="story-label">--cz-shadow-xs-skeumorphic</span>
                    </div>
                </div>
            </div>
        </div>
    \`
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Focus Rings</h1>
            <p style="margin-bottom: 24px; color: var(--cz-color-text-secondary);">
                Accessible focus indicators for interactive elements.
            </p>
            <div class="story-section">
                <div style="display: flex; flex-wrap: wrap; gap: 32px;">
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <input
                            type="text"
                            placeholder="Brand focus"
                            style="
                                padding: 10px 14px;
                                border-radius: var(--cz-radius-md);
                                background: var(--cz-color-bg-primary);
                                box-shadow: var(--cz-focus-ring);
                                border: 1px solid var(--cz-color-border-brand);
                                font-family: var(--cz-font-body);
                                font-size: var(--cz-text-md);
                                color: var(--cz-color-text-primary);
                                outline: none;
                            "
                        />
                        <span class="story-label">--cz-focus-ring</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <input
                            type="text"
                            placeholder="Error focus"
                            style="
                                padding: 10px 14px;
                                border-radius: var(--cz-radius-md);
                                background: var(--cz-color-bg-primary);
                                box-shadow: var(--cz-focus-ring-error);
                                border: 1px solid var(--cz-color-border-error);
                                font-family: var(--cz-font-body);
                                font-size: var(--cz-text-md);
                                color: var(--cz-color-text-primary);
                                outline: none;
                            "
                        />
                        <span class="story-label">--cz-focus-ring-error</span>
                    </div>
                </div>
            </div>
        </div>
    \`
}`,...e.parameters?.docs?.source}}};const x=["ShadowScale","SkeumorphicShadows","FocusRings"];export{e as FocusRings,a as ShadowScale,s as SkeumorphicShadows,x as __namedExportsOrder,p as default};
