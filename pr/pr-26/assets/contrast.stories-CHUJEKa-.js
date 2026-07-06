import{b as n}from"./iframe-I8H1cjWY.js";import{s as a}from"./style-Dt9nmzzS.js";const g={title:"A11y/Contrast"},o=(e,t,s,c)=>n`
    <div
        style="
            background: var(${s});
            color: var(${t});
            padding: 16px 20px;
            border-radius: var(--cz-radius-md);
            border: 1px solid var(${c});
            margin-bottom: 8px;
        "
    >
        <strong style="font-size: var(--cz-text-base);">${e}</strong>
        <br />
        <span style="font-size: var(--cz-text-sm); opacity: 1;">
            ${t} on ${s} with ${c} border
        </span>
    </div>
`,i=()=>{document.documentElement.classList.toggle("dark-mode")},r={render:()=>n`
        ${a}
        <div class="story-container">
            <h1 class="story-title">Text on Status Backgrounds</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${i}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                ${o("Error text on error bg","--cz-color-text-error","--cz-color-bg-error","--cz-color-error-200")}
                ${o("Warning text on warning bg","--cz-color-text-warning","--cz-color-bg-warning","--cz-color-warning-200")}
                ${o("Success text on success bg","--cz-color-text-success","--cz-color-bg-success","--cz-color-success-200")}
            </div>
        </div>
    `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const u=["TextOnStatusBackgrounds"];export{r as TextOnStatusBackgrounds,u as __namedExportsOrder,g as default};
