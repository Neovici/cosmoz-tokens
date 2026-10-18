import{b as o}from"./iframe-Dl4Ezfdz.js";import{s as l}from"./style-BIyXNgIJ.js";const u={title:"A11y/Contrast"},i=(r,n,s,t)=>o`
    <div
        style="
            background: var(${s});
            color: var(${n});
            padding: 16px 20px;
            border-radius: var(--cz-radius-md);
            border: 1px solid var(${t});
            margin-bottom: 8px;
        "
    >
        <strong style="font-size: var(--cz-text-base);">${r}</strong>
        <br />
        <span style="font-size: var(--cz-text-sm); opacity: 1;">
            ${n} on ${s} with ${t} border
        </span>
    </div>
`,d=()=>{const r=document.documentElement,n=r.style.colorScheme!=="dark";r.style.colorScheme=n?"dark":"light",r.classList.toggle("dark-mode",n)},a={render:()=>o`
        ${l}
        <div class="story-container">
            <h1 class="story-title">Warning colors</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${d}
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
    `},e={render:()=>o`
        ${l}
        <div class="story-container">
            <h1 class="story-title">Text on Status Backgrounds</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${d}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                ${i("Error text on error bg","--cz-color-text-error","--cz-color-bg-error","--cz-color-error-200")}
                ${i("Warning text on warning bg","--cz-color-text-warning","--cz-color-bg-warning","--cz-color-warning-200")}
                ${i("Success text on success bg","--cz-color-text-success","--cz-color-bg-success","--cz-color-success-200")}
            </div>
        </div>
    `},c={render:()=>o`
        ${l}
        <div class="story-container">
            <h1 class="story-title">Glass controls</h1>
            <button class="story-btn story-btn--secondary" @click=${d}>
                Toggle dark mode
            </button>
            ${[{kind:"primary",fill:"-action",sheen:"--cz-glass-action-sheen",text:"--cz-color-text-on-glass-action",shadow:"--cz-shadow-glass-action"},{kind:"secondary",fill:"",sheen:"--cz-glass-sheen",text:"--cz-color-text-primary",shadow:"--cz-shadow-glass"},{kind:"destructive",fill:"-destructive",sheen:"--cz-glass-action-sheen",text:"--cz-color-text-on-action",shadow:"--cz-shadow-glass-action"}].map(({kind:r,fill:n,sheen:s,text:t,shadow:g})=>o` <button
                        style="
                    margin: 24px 8px; padding: 10px 18px;
                    font: inherit; border-radius: var(--cz-radius-full);
                    border: 1px solid var(--cz-color-border-glass);
                    background: var(${s}), var(--cz-color-bg-glass${n});
                    color: var(${t}); box-shadow: var(${g});
                    backdrop-filter: var(--cz-backdrop-filter-glass);
                "
                    >
                        ${r} action
                    </button>`)}
        </div>
    `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const b=["WarningSurfaces","TextOnStatusBackgrounds","GlassControls"];export{c as GlassControls,e as TextOnStatusBackgrounds,a as WarningSurfaces,b as __namedExportsOrder,u as default};
