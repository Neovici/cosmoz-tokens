import{b as e}from"./iframe-PdqJe8zs.js";import{s as a}from"./style-DgtGvq3R.js";const g={title:"A11y/Contrast"},s=(o,r,c,n)=>e`
    <div
        style="
            background: var(${c});
            color: var(${r});
            padding: 16px 20px;
            border-radius: var(--cz-radius-md);
            border: 1px solid var(${n});
            margin-bottom: 8px;
        "
    >
        <strong style="font-size: var(--cz-text-base);">${o}</strong>
        <br />
        <span style="font-size: var(--cz-text-sm); opacity: 1;">
            ${r} on ${c} with ${n} border
        </span>
    </div>
`,l=()=>{const o=document.documentElement,r=o.style.colorScheme!=="dark";o.style.colorScheme=r?"dark":"light",o.classList.toggle("dark-mode",r)},t={render:()=>e`
        ${a}
        <div class="story-container">
            <h1 class="story-title">Text on Status Backgrounds</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${l}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                ${s("Error text on error bg","--cz-color-text-error","--cz-color-bg-error","--cz-color-error-200")}
                ${s("Warning text on warning bg","--cz-color-text-warning","--cz-color-bg-warning","--cz-color-warning-200")}
                ${s("Success text on success bg","--cz-color-text-success","--cz-color-bg-success","--cz-color-success-200")}
            </div>
        </div>
    `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const u=["TextOnStatusBackgrounds"];export{t as TextOnStatusBackgrounds,u as __namedExportsOrder,g as default};
