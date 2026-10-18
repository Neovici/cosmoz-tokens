import{b as a}from"./iframe-DAJv0cwZ.js";import{s as l}from"./style-CKfOXqb2.js";const u={title:"A11y/Contrast"},e=(o,s,r,t)=>a`
    <div
        style="
            background: var(${r});
            color: var(${s});
            padding: 16px 20px;
            border-radius: var(--cz-radius-md);
            border: 1px solid var(${t});
            margin-bottom: 8px;
        "
    >
        <strong style="font-size: var(--cz-text-base);">${o}</strong>
        <br />
        <span style="font-size: var(--cz-text-sm); opacity: 1;">
            ${s} on ${r} with ${t} border
        </span>
    </div>
`,i=()=>{const o=document.documentElement,s=o.style.colorScheme!=="dark";o.style.colorScheme=s?"dark":"light",o.classList.toggle("dark-mode",s)},n={render:()=>a`
        ${l}
        <div class="story-container">
            <h1 class="story-title">Text on Status Backgrounds</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${i}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                ${e("Error text on error bg","--cz-color-text-error","--cz-color-bg-error","--cz-color-error-200")}
                ${e("Warning text on warning bg","--cz-color-text-warning","--cz-color-bg-warning","--cz-color-warning-200")}
                ${e("Success text on success bg","--cz-color-text-success","--cz-color-bg-success","--cz-color-success-200")}
            </div>
        </div>
    `},c={render:()=>a`
        ${l}
        <div class="story-container">
            <h1 class="story-title">Glass controls</h1>
            <button class="story-btn story-btn--secondary" @click=${i}>
                Toggle dark mode
            </button>
            ${[{kind:"primary",fill:"-action",sheen:"--cz-glass-action-sheen",text:"--cz-color-text-on-glass-action",shadow:"--cz-shadow-glass-action"},{kind:"secondary",fill:"",sheen:"--cz-glass-sheen",text:"--cz-color-text-primary",shadow:"--cz-shadow-glass"},{kind:"destructive",fill:"-destructive",sheen:"--cz-glass-action-sheen",text:"--cz-color-text-on-action",shadow:"--cz-shadow-glass-action"}].map(({kind:o,fill:s,sheen:r,text:t,shadow:d})=>a` <button
                        style="
                    margin: 24px 8px; padding: 10px 18px;
                    font: inherit; border-radius: var(--cz-radius-full);
                    border: 1px solid var(--cz-color-border-glass);
                    background: var(${r}), var(--cz-color-bg-glass${s});
                    color: var(${t}); box-shadow: var(${d});
                    backdrop-filter: var(--cz-backdrop-filter-glass);
                "
                    >
                        ${o} action
                    </button>`)}
        </div>
    `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const x=["TextOnStatusBackgrounds","GlassControls"];export{c as GlassControls,n as TextOnStatusBackgrounds,x as __namedExportsOrder,u as default};
