import{b as s}from"./iframe-Bk8gVLud.js";import{s as d}from"./style-B7Oo1hoh.js";const b={title:"A11y/Contrast"},g=(r,o,n,e)=>s`
    <div
        style="
            background: var(${n});
            color: var(${o});
            padding: 16px 20px;
            border-radius: var(--cz-radius-md);
            border: 1px solid var(${e});
            margin-bottom: 8px;
        "
    >
        <strong style="font-size: var(--cz-text-base);">${r}</strong>
        <br />
        <span style="font-size: var(--cz-text-sm); opacity: 1;">
            ${o} on ${n} with ${e} border
        </span>
    </div>
`,l=()=>{const r=document.documentElement,o=r.style.colorScheme!=="dark";r.style.colorScheme=o?"dark":"light",r.classList.toggle("dark-mode",o)},t={render:()=>s`
        ${d}
        <div class="story-container">
            <h1 class="story-title">Warning colors</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${l}
            >
                Toggle Dark Mode
            </button>
            <div style="display: grid; gap: 24px; max-width: 640px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--cz-color-fg-warning)"
                        stroke-width="2"
                        aria-hidden="true"
                    >
                        <path d="M12 3 2 21h20L12 3Z M12 9v5 M12 17v1" />
                    </svg>
                    <span style="color: var(--cz-color-text-primary);"
                        >Review required</span
                    >
                </div>
                <div
                    style="background: var(--cz-color-bg-warning); color: var(--cz-color-text-warning);
                    border: 1px solid var(--cz-color-border-warning-subtle); padding: 16px;
                    border-radius: var(--cz-radius-md);"
                >
                    <strong>Payment details need attention</strong>
                    <p style="margin: 8px 0 0;">
                        Review the bank account before approving this payment.
                    </p>
                </div>
                <div style="display: flex; gap: 16px; align-items: center;">
                    <span
                        style="background: var(--cz-color-bg-warning); color: var(--cz-color-text-warning);
                        border: 1px solid var(--cz-color-border-warning-subtle); border-radius: var(--cz-radius-full);
                        padding: 4px 12px;"
                        >Awaiting approval</span
                    >
                    <span
                        style="background: var(--cz-color-bg-warning-solid); color: var(--cz-color-fg-white);
                        border-radius: var(--cz-radius-full); padding: 4px 12px;"
                        >3 overrides</span
                    >
                </div>
                <div style="color: var(--cz-color-text-warning);">
                    Delivered quantity is below the ordered quantity.
                </div>
                <div
                    style="display: flex; gap: 12px; align-items: center; color: var(--cz-color-text-primary);"
                >
                    <span
                        style="width: 80px; height: 12px; border-radius: var(--cz-radius-sm);
                        background: var(--cz-color-fg-warning);"
                    ></span>
                    Due within 5 days
                </div>
            </div>
        </div>
    `},a={render:()=>s`
        ${d}
        <div class="story-container">
            <h1 class="story-title">Success colors</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${l}
            >
                Toggle Dark Mode
            </button>
            <div style="display: grid; gap: 24px; max-width: 640px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--cz-color-fg-success)"
                        stroke-width="2"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="9" />
                        <path d="m7 12 3 3 7-7" />
                    </svg>
                    <span>Invoice matched</span>
                </div>
                <div
                    style="background: var(--cz-color-bg-success); color: var(--cz-color-text-success);
                    border: 1px solid var(--cz-color-border-success-subtle); padding: 16px;
                    border-radius: var(--cz-radius-md);"
                >
                    <strong>Matching complete</strong>
                    <p style="margin: 8px 0 0;">
                        Delivered quantity matches the ordered quantity.
                    </p>
                </div>
                <div style="display: flex; gap: 16px; align-items: center;">
                    <span
                        style="background: var(--cz-color-bg-success); color: var(--cz-color-text-success);
                        border: 1px solid var(--cz-color-border-success-subtle); border-radius: var(--cz-radius-full);
                        padding: 4px 12px;"
                        >Completed</span
                    >
                    <button
                        style="background: var(--cz-color-bg-success-solid); color: var(--cz-color-fg-white);
                        border: 0; border-radius: var(--cz-radius-md); padding: 8px 16px; font: inherit;"
                    >
                        Save matches
                    </button>
                </div>
                <div style="color: var(--cz-color-text-success);">
                    Delivered 10 of 10
                </div>
                <div style="display: flex; gap: 12px; align-items: center;">
                    <span
                        style="width: 80px; height: 12px; border-radius: var(--cz-radius-sm);
                        background: var(--cz-color-fg-success);"
                    ></span>
                    Straight through
                </div>
            </div>
        </div>
    `},c={render:()=>s`
        ${d}
        <div class="story-container">
            <h1 class="story-title">Text on Status Backgrounds</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${l}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                ${g("Error text on error bg","--cz-color-text-error","--cz-color-bg-error","--cz-color-error-200")}
                ${g("Warning text on warning bg","--cz-color-text-warning","--cz-color-bg-warning","--cz-color-warning-200")}
                ${g("Success text on success bg","--cz-color-text-success","--cz-color-bg-success","--cz-color-success-200")}
            </div>
        </div>
    `},i={render:()=>s`
        ${d}
        <div class="story-container">
            <h1 class="story-title">Glass controls</h1>
            <button class="story-btn story-btn--secondary" @click=${l}>
                Toggle dark mode
            </button>
            ${[{kind:"primary",fill:"-action",sheen:"--cz-glass-action-sheen",text:"--cz-color-text-on-glass-action",shadow:"--cz-shadow-glass-action"},{kind:"secondary",fill:"",sheen:"--cz-glass-sheen",text:"--cz-color-text-primary",shadow:"--cz-shadow-glass"},{kind:"destructive",fill:"-destructive",sheen:"--cz-glass-action-sheen",text:"--cz-color-text-on-action",shadow:"--cz-shadow-glass-action"}].map(({kind:r,fill:o,sheen:n,text:e,shadow:p})=>s` <button
                        style="
                    margin: 24px 8px; padding: 10px 18px;
                    font: inherit; border-radius: var(--cz-radius-full);
                    border: 1px solid var(--cz-color-border-glass);
                    background: var(${n}), var(--cz-color-bg-glass${o});
                    color: var(${e}); box-shadow: var(${p});
                    backdrop-filter: var(--cz-backdrop-filter-glass);
                "
                    >
                        ${r} action
                    </button>`)}
        </div>
    `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Warning colors</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=\${toggleDarkMode}
            >
                Toggle Dark Mode
            </button>
            <div style="display: grid; gap: 24px; max-width: 640px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--cz-color-fg-warning)"
                        stroke-width="2"
                        aria-hidden="true"
                    >
                        <path d="M12 3 2 21h20L12 3Z M12 9v5 M12 17v1" />
                    </svg>
                    <span style="color: var(--cz-color-text-primary);"
                        >Review required</span
                    >
                </div>
                <div
                    style="background: var(--cz-color-bg-warning); color: var(--cz-color-text-warning);
                    border: 1px solid var(--cz-color-border-warning-subtle); padding: 16px;
                    border-radius: var(--cz-radius-md);"
                >
                    <strong>Payment details need attention</strong>
                    <p style="margin: 8px 0 0;">
                        Review the bank account before approving this payment.
                    </p>
                </div>
                <div style="display: flex; gap: 16px; align-items: center;">
                    <span
                        style="background: var(--cz-color-bg-warning); color: var(--cz-color-text-warning);
                        border: 1px solid var(--cz-color-border-warning-subtle); border-radius: var(--cz-radius-full);
                        padding: 4px 12px;"
                        >Awaiting approval</span
                    >
                    <span
                        style="background: var(--cz-color-bg-warning-solid); color: var(--cz-color-fg-white);
                        border-radius: var(--cz-radius-full); padding: 4px 12px;"
                        >3 overrides</span
                    >
                </div>
                <div style="color: var(--cz-color-text-warning);">
                    Delivered quantity is below the ordered quantity.
                </div>
                <div
                    style="display: flex; gap: 12px; align-items: center; color: var(--cz-color-text-primary);"
                >
                    <span
                        style="width: 80px; height: 12px; border-radius: var(--cz-radius-sm);
                        background: var(--cz-color-fg-warning);"
                    ></span>
                    Due within 5 days
                </div>
            </div>
        </div>
    \`
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Success colors</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=\${toggleDarkMode}
            >
                Toggle Dark Mode
            </button>
            <div style="display: grid; gap: 24px; max-width: 640px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--cz-color-fg-success)"
                        stroke-width="2"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="9" />
                        <path d="m7 12 3 3 7-7" />
                    </svg>
                    <span>Invoice matched</span>
                </div>
                <div
                    style="background: var(--cz-color-bg-success); color: var(--cz-color-text-success);
                    border: 1px solid var(--cz-color-border-success-subtle); padding: 16px;
                    border-radius: var(--cz-radius-md);"
                >
                    <strong>Matching complete</strong>
                    <p style="margin: 8px 0 0;">
                        Delivered quantity matches the ordered quantity.
                    </p>
                </div>
                <div style="display: flex; gap: 16px; align-items: center;">
                    <span
                        style="background: var(--cz-color-bg-success); color: var(--cz-color-text-success);
                        border: 1px solid var(--cz-color-border-success-subtle); border-radius: var(--cz-radius-full);
                        padding: 4px 12px;"
                        >Completed</span
                    >
                    <button
                        style="background: var(--cz-color-bg-success-solid); color: var(--cz-color-fg-white);
                        border: 0; border-radius: var(--cz-radius-md); padding: 8px 16px; font: inherit;"
                    >
                        Save matches
                    </button>
                </div>
                <div style="color: var(--cz-color-text-success);">
                    Delivered 10 of 10
                </div>
                <div style="display: flex; gap: 12px; align-items: center;">
                    <span
                        style="width: 80px; height: 12px; border-radius: var(--cz-radius-sm);
                        background: var(--cz-color-fg-success);"
                    ></span>
                    Straight through
                </div>
            </div>
        </div>
    \`
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Text on Status Backgrounds</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=\${toggleDarkMode}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                \${contrastPair('Error text on error bg', '--cz-color-text-error', '--cz-color-bg-error', '--cz-color-error-200')}
                \${contrastPair('Warning text on warning bg', '--cz-color-text-warning', '--cz-color-bg-warning', '--cz-color-warning-200')}
                \${contrastPair('Success text on success bg', '--cz-color-text-success', '--cz-color-bg-success', '--cz-color-success-200')}
            </div>
        </div>
    \`
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Glass controls</h1>
            <button class="story-btn story-btn--secondary" @click=\${toggleDarkMode}>
                Toggle dark mode
            </button>
            \${[{
    kind: 'primary',
    fill: '-action',
    sheen: '--cz-glass-action-sheen',
    text: '--cz-color-text-on-glass-action',
    shadow: '--cz-shadow-glass-action'
  }, {
    kind: 'secondary',
    fill: '',
    sheen: '--cz-glass-sheen',
    text: '--cz-color-text-primary',
    shadow: '--cz-shadow-glass'
  }, {
    kind: 'destructive',
    fill: '-destructive',
    sheen: '--cz-glass-action-sheen',
    text: '--cz-color-text-on-action',
    shadow: '--cz-shadow-glass-action'
  }].map(({
    kind,
    fill,
    sheen,
    text,
    shadow
  }) => html\` <button
                        style="
                    margin: 24px 8px; padding: 10px 18px;
                    font: inherit; border-radius: var(--cz-radius-full);
                    border: 1px solid var(--cz-color-border-glass);
                    background: var(\${sheen}), var(--cz-color-bg-glass\${fill});
                    color: var(\${text}); box-shadow: var(\${shadow});
                    backdrop-filter: var(--cz-backdrop-filter-glass);
                "
                    >
                        \${kind} action
                    </button>\`)}
        </div>
    \`
}`,...i.parameters?.docs?.source}}};const x=["WarningSurfaces","SuccessSurfaces","TextOnStatusBackgrounds","GlassControls"];export{i as GlassControls,a as SuccessSurfaces,c as TextOnStatusBackgrounds,t as WarningSurfaces,x as __namedExportsOrder,b as default};
