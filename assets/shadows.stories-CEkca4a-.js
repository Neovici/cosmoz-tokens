import{b as o}from"./lit-html-s0HVm7S4.js";import{s as n}from"./style-Btb-urNq.js";const b={title:"Tokens/Shadows"},r=(m,z,c="")=>o`
    <div style="display: flex; flex-direction: column; gap: 8px;">
        <div
            style="width: 120px; height: 80px; border-radius: var(--cz-radius-lg); background: var(--cz-color-bg-primary); box-shadow: var(${z}); border: 1px solid var(--cz-color-border-secondary);"
        ></div>
        <span class="story-label" style="min-width: auto;">${m}</span>
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
    `};var t,d,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,p,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var v,y,h;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(y=e.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const f=["ShadowScale","SkeumorphicShadows","FocusRings"];export{e as FocusRings,a as ShadowScale,s as SkeumorphicShadows,f as __namedExportsOrder,b as default};
