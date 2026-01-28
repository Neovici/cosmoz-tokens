import{b as r}from"./iframe-VcrTb-bN.js";import{s}from"./style-sG1rYyyS.js";const g={title:"Tokens/Semantic"},o=(l,i)=>r`
    <div class="story-row">
        <div class="story-swatch" style="background: var(${i});"></div>
        <span class="story-label">${l}</span>
    </div>
`,t=()=>{document.documentElement.classList.toggle("dark-mode")},c={render:()=>r`
        ${s}
        <div class="story-container">
            <h1 class="story-title">Text Colors</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${t}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div class="story-grid story-grid--wide">
                    ${o("text-primary","--cz-color-text-primary")}
                    ${o("text-secondary","--cz-color-text-secondary")}
                    ${o("text-tertiary","--cz-color-text-tertiary")}
                    ${o("text-quaternary","--cz-color-text-quaternary")}
                    ${o("text-disabled","--cz-color-text-disabled")}
                    ${o("text-placeholder","--cz-color-text-placeholder")}
                    ${o("text-error","--cz-color-text-error")}
                    ${o("text-warning","--cz-color-text-warning")}
                    ${o("text-success","--cz-color-text-success")}
                    ${o("text-brand","--cz-color-text-brand")}
                    ${o("text-on-brand","--cz-color-text-on-brand")}
                </div>
            </div>
        </div>
    `},e={render:()=>r`
        ${s}
        <div class="story-container">
            <h1 class="story-title">Background Colors</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${t}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <h3 class="story-section-title">Base</h3>
                <div class="story-grid story-grid--wide">
                    ${o("bg-primary","--cz-color-bg-primary")}
                    ${o("bg-secondary","--cz-color-bg-secondary")}
                    ${o("bg-tertiary","--cz-color-bg-tertiary")}
                    ${o("bg-quaternary","--cz-color-bg-quaternary")}
                    ${o("bg-disabled","--cz-color-bg-disabled")}
                    ${o("bg-overlay","--cz-color-bg-overlay")}
                </div>
            </div>
            <div class="story-section">
                <h3 class="story-section-title">Brand</h3>
                <div class="story-grid story-grid--wide">
                    ${o("bg-brand","--cz-color-bg-brand")}
                    ${o("bg-brand-secondary","--cz-color-bg-brand-secondary")}
                    ${o("bg-brand-solid","--cz-color-bg-brand-solid")}
                    ${o("bg-brand-section","--cz-color-bg-brand-section")}
                </div>
            </div>
            <div class="story-section">
                <h3 class="story-section-title">Status</h3>
                <div class="story-grid story-grid--wide">
                    ${o("bg-error","--cz-color-bg-error")}
                    ${o("bg-error-solid","--cz-color-bg-error-solid")}
                    ${o("bg-warning","--cz-color-bg-warning")}
                    ${o("bg-warning-solid","--cz-color-bg-warning-solid")}
                    ${o("bg-success","--cz-color-bg-success")}
                    ${o("bg-success-solid","--cz-color-bg-success-solid")}
                </div>
            </div>
        </div>
    `},n={render:()=>r`
        ${s}
        <div class="story-container">
            <h1 class="story-title">Border Colors</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${t}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div class="story-grid story-grid--wide">
                    ${o("border-primary","--cz-color-border-primary")}
                    ${o("border-secondary","--cz-color-border-secondary")}
                    ${o("border-tertiary","--cz-color-border-tertiary")}
                    ${o("border-disabled","--cz-color-border-disabled")}
                    ${o("border-error","--cz-color-border-error")}
                    ${o("border-brand","--cz-color-border-brand")}
                </div>
            </div>
        </div>
    `},a={render:()=>r`
        ${s}
        <div class="story-container">
            <h1 class="story-title">Foreground Colors</h1>
            <p class="story-description">For icons and decorative elements.</p>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${t}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div class="story-grid story-grid--wide">
                    ${o("fg-primary","--cz-color-fg-primary")}
                    ${o("fg-secondary","--cz-color-fg-secondary")}
                    ${o("fg-tertiary","--cz-color-fg-tertiary")}
                    ${o("fg-quaternary","--cz-color-fg-quaternary")}
                    ${o("fg-disabled","--cz-color-fg-disabled")}
                    ${o("fg-white","--cz-color-fg-white")}
                    ${o("fg-brand","--cz-color-fg-brand")}
                    ${o("fg-error","--cz-color-fg-error")}
                    ${o("fg-warning","--cz-color-fg-warning")}
                    ${o("fg-success","--cz-color-fg-success")}
                </div>
            </div>
        </div>
    `},d={render:()=>r`
        ${s}
        <div class="story-container">
            <h1 class="story-title">Dark Mode Demo</h1>
            <button
                class="story-btn story-btn--primary story-mb-6"
                @click=${t}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div class="story-card">
                    <h3 class="story-card-title">Card Title</h3>
                    <p class="story-card-text">
                        This is a demo card showing how semantic tokens adapt to dark mode
                        automatically.
                    </p>
                    <div class="story-flex story-gap-3">
                        <button class="story-btn story-btn--primary">Primary</button>
                        <button class="story-btn story-btn--secondary">Secondary</button>
                    </div>
                </div>
            </div>
            <div class="story-section story-mt-6">
                <h3 class="story-section-title">Usage</h3>
                <pre class="story-code">
// Add dark mode class to root
document.documentElement.classList.add('dark-mode');

// Or use data attribute
document.documentElement.dataset.theme = 'dark';</pre
                >
            </div>
        </div>
    `};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Text Colors</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=\${toggleDarkMode}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div class="story-grid story-grid--wide">
                    \${colorRow('text-primary', '--cz-color-text-primary')}
                    \${colorRow('text-secondary', '--cz-color-text-secondary')}
                    \${colorRow('text-tertiary', '--cz-color-text-tertiary')}
                    \${colorRow('text-quaternary', '--cz-color-text-quaternary')}
                    \${colorRow('text-disabled', '--cz-color-text-disabled')}
                    \${colorRow('text-placeholder', '--cz-color-text-placeholder')}
                    \${colorRow('text-error', '--cz-color-text-error')}
                    \${colorRow('text-warning', '--cz-color-text-warning')}
                    \${colorRow('text-success', '--cz-color-text-success')}
                    \${colorRow('text-brand', '--cz-color-text-brand')}
                    \${colorRow('text-on-brand', '--cz-color-text-on-brand')}
                </div>
            </div>
        </div>
    \`
}`,...c.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Background Colors</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=\${toggleDarkMode}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <h3 class="story-section-title">Base</h3>
                <div class="story-grid story-grid--wide">
                    \${colorRow('bg-primary', '--cz-color-bg-primary')}
                    \${colorRow('bg-secondary', '--cz-color-bg-secondary')}
                    \${colorRow('bg-tertiary', '--cz-color-bg-tertiary')}
                    \${colorRow('bg-quaternary', '--cz-color-bg-quaternary')}
                    \${colorRow('bg-disabled', '--cz-color-bg-disabled')}
                    \${colorRow('bg-overlay', '--cz-color-bg-overlay')}
                </div>
            </div>
            <div class="story-section">
                <h3 class="story-section-title">Brand</h3>
                <div class="story-grid story-grid--wide">
                    \${colorRow('bg-brand', '--cz-color-bg-brand')}
                    \${colorRow('bg-brand-secondary', '--cz-color-bg-brand-secondary')}
                    \${colorRow('bg-brand-solid', '--cz-color-bg-brand-solid')}
                    \${colorRow('bg-brand-section', '--cz-color-bg-brand-section')}
                </div>
            </div>
            <div class="story-section">
                <h3 class="story-section-title">Status</h3>
                <div class="story-grid story-grid--wide">
                    \${colorRow('bg-error', '--cz-color-bg-error')}
                    \${colorRow('bg-error-solid', '--cz-color-bg-error-solid')}
                    \${colorRow('bg-warning', '--cz-color-bg-warning')}
                    \${colorRow('bg-warning-solid', '--cz-color-bg-warning-solid')}
                    \${colorRow('bg-success', '--cz-color-bg-success')}
                    \${colorRow('bg-success-solid', '--cz-color-bg-success-solid')}
                </div>
            </div>
        </div>
    \`
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Border Colors</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=\${toggleDarkMode}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div class="story-grid story-grid--wide">
                    \${colorRow('border-primary', '--cz-color-border-primary')}
                    \${colorRow('border-secondary', '--cz-color-border-secondary')}
                    \${colorRow('border-tertiary', '--cz-color-border-tertiary')}
                    \${colorRow('border-disabled', '--cz-color-border-disabled')}
                    \${colorRow('border-error', '--cz-color-border-error')}
                    \${colorRow('border-brand', '--cz-color-border-brand')}
                </div>
            </div>
        </div>
    \`
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Foreground Colors</h1>
            <p class="story-description">For icons and decorative elements.</p>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=\${toggleDarkMode}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div class="story-grid story-grid--wide">
                    \${colorRow('fg-primary', '--cz-color-fg-primary')}
                    \${colorRow('fg-secondary', '--cz-color-fg-secondary')}
                    \${colorRow('fg-tertiary', '--cz-color-fg-tertiary')}
                    \${colorRow('fg-quaternary', '--cz-color-fg-quaternary')}
                    \${colorRow('fg-disabled', '--cz-color-fg-disabled')}
                    \${colorRow('fg-white', '--cz-color-fg-white')}
                    \${colorRow('fg-brand', '--cz-color-fg-brand')}
                    \${colorRow('fg-error', '--cz-color-fg-error')}
                    \${colorRow('fg-warning', '--cz-color-fg-warning')}
                    \${colorRow('fg-success', '--cz-color-fg-success')}
                </div>
            </div>
        </div>
    \`
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Dark Mode Demo</h1>
            <button
                class="story-btn story-btn--primary story-mb-6"
                @click=\${toggleDarkMode}
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div class="story-card">
                    <h3 class="story-card-title">Card Title</h3>
                    <p class="story-card-text">
                        This is a demo card showing how semantic tokens adapt to dark mode
                        automatically.
                    </p>
                    <div class="story-flex story-gap-3">
                        <button class="story-btn story-btn--primary">Primary</button>
                        <button class="story-btn story-btn--secondary">Secondary</button>
                    </div>
                </div>
            </div>
            <div class="story-section story-mt-6">
                <h3 class="story-section-title">Usage</h3>
                <pre class="story-code">
// Add dark mode class to root
document.documentElement.classList.add('dark-mode');

// Or use data attribute
document.documentElement.dataset.theme = 'dark';</pre
                >
            </div>
        </div>
    \`
}`,...d.parameters?.docs?.source}}};const $=["TextColors","BackgroundColors","BorderColors","ForegroundColors","DarkModeDemo"];export{e as BackgroundColors,n as BorderColors,d as DarkModeDemo,a as ForegroundColors,c as TextColors,$ as __namedExportsOrder,g as default};
