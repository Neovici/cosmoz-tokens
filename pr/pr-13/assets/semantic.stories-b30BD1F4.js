import{b as r}from"./iframe-Cue1cWx3.js";import{s}from"./style-i9VN6ZV4.js";const b={title:"Tokens/Semantic"},o=d=>r`
    <div class="story-row">
        <div class="story-swatch" style="background: var(${d});"></div>
        <span class="story-label">${d}</span>
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
                    ${o("--cz-color-text-primary")}
                    ${o("--cz-color-text-secondary")}
                    ${o("--cz-color-text-tertiary")}
                    ${o("--cz-color-text-quaternary")}
                    ${o("--cz-color-text-disabled")}
                    ${o("--cz-color-text-placeholder")}
                    ${o("--cz-color-text-error")}
                    ${o("--cz-color-text-warning")}
                    ${o("--cz-color-text-success")}
                    ${o("--cz-color-text-brand")}
                    ${o("--cz-color-text-on-brand")}
                </div>
            </div>
        </div>
    `},n={render:()=>r`
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
                    ${o("--cz-color-bg-primary")}
                    ${o("--cz-color-bg-secondary")}
                    ${o("--cz-color-bg-tertiary")}
                    ${o("--cz-color-bg-quaternary")}
                    ${o("--cz-color-bg-disabled")}
                    ${o("--cz-color-bg-overlay")}
                </div>
            </div>
            <div class="story-section">
                <h3 class="story-section-title">Brand</h3>
                <div class="story-grid story-grid--wide">
                    ${o("--cz-color-bg-brand")}
                    ${o("--cz-color-bg-brand-secondary")}
                    ${o("--cz-color-bg-brand-solid")}
                    ${o("--cz-color-bg-brand-section")}
                </div>
            </div>
            <div class="story-section">
                <h3 class="story-section-title">Status</h3>
                <div class="story-grid story-grid--wide">
                    ${o("--cz-color-bg-error")}
                    ${o("--cz-color-bg-error-solid")}
                    ${o("--cz-color-bg-warning")}
                    ${o("--cz-color-bg-warning-solid")}
                    ${o("--cz-color-bg-success")}
                    ${o("--cz-color-bg-success-solid")}
                </div>
            </div>
        </div>
    `},e={render:()=>r`
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
                    ${o("--cz-color-border-primary")}
                    ${o("--cz-color-border-secondary")}
                    ${o("--cz-color-border-tertiary")}
                    ${o("--cz-color-border-disabled")}
                    ${o("--cz-color-border-error")}
                    ${o("--cz-color-border-brand")}
                </div>
            </div>
        </div>
    `},l={render:()=>r`
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
                    ${o("--cz-color-fg-primary")}
                    ${o("--cz-color-fg-secondary")}
                    ${o("--cz-color-fg-tertiary")}
                    ${o("--cz-color-fg-quaternary")}
                    ${o("--cz-color-fg-disabled")}
                    ${o("--cz-color-fg-white")} ${o("--cz-color-fg-brand")}
                    ${o("--cz-color-fg-error")}
                    ${o("--cz-color-fg-warning")}
                    ${o("--cz-color-fg-success")}
                </div>
            </div>
        </div>
    `},a={render:()=>r`
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
                    \${colorRow('--cz-color-text-primary')}
                    \${colorRow('--cz-color-text-secondary')}
                    \${colorRow('--cz-color-text-tertiary')}
                    \${colorRow('--cz-color-text-quaternary')}
                    \${colorRow('--cz-color-text-disabled')}
                    \${colorRow('--cz-color-text-placeholder')}
                    \${colorRow('--cz-color-text-error')}
                    \${colorRow('--cz-color-text-warning')}
                    \${colorRow('--cz-color-text-success')}
                    \${colorRow('--cz-color-text-brand')}
                    \${colorRow('--cz-color-text-on-brand')}
                </div>
            </div>
        </div>
    \`
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
                    \${colorRow('--cz-color-bg-primary')}
                    \${colorRow('--cz-color-bg-secondary')}
                    \${colorRow('--cz-color-bg-tertiary')}
                    \${colorRow('--cz-color-bg-quaternary')}
                    \${colorRow('--cz-color-bg-disabled')}
                    \${colorRow('--cz-color-bg-overlay')}
                </div>
            </div>
            <div class="story-section">
                <h3 class="story-section-title">Brand</h3>
                <div class="story-grid story-grid--wide">
                    \${colorRow('--cz-color-bg-brand')}
                    \${colorRow('--cz-color-bg-brand-secondary')}
                    \${colorRow('--cz-color-bg-brand-solid')}
                    \${colorRow('--cz-color-bg-brand-section')}
                </div>
            </div>
            <div class="story-section">
                <h3 class="story-section-title">Status</h3>
                <div class="story-grid story-grid--wide">
                    \${colorRow('--cz-color-bg-error')}
                    \${colorRow('--cz-color-bg-error-solid')}
                    \${colorRow('--cz-color-bg-warning')}
                    \${colorRow('--cz-color-bg-warning-solid')}
                    \${colorRow('--cz-color-bg-success')}
                    \${colorRow('--cz-color-bg-success-solid')}
                </div>
            </div>
        </div>
    \`
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
                    \${colorRow('--cz-color-border-primary')}
                    \${colorRow('--cz-color-border-secondary')}
                    \${colorRow('--cz-color-border-tertiary')}
                    \${colorRow('--cz-color-border-disabled')}
                    \${colorRow('--cz-color-border-error')}
                    \${colorRow('--cz-color-border-brand')}
                </div>
            </div>
        </div>
    \`
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
                    \${colorRow('--cz-color-fg-primary')}
                    \${colorRow('--cz-color-fg-secondary')}
                    \${colorRow('--cz-color-fg-tertiary')}
                    \${colorRow('--cz-color-fg-quaternary')}
                    \${colorRow('--cz-color-fg-disabled')}
                    \${colorRow('--cz-color-fg-white')} \${colorRow('--cz-color-fg-brand')}
                    \${colorRow('--cz-color-fg-error')}
                    \${colorRow('--cz-color-fg-warning')}
                    \${colorRow('--cz-color-fg-success')}
                </div>
            </div>
        </div>
    \`
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const g=["TextColors","BackgroundColors","BorderColors","ForegroundColors","DarkModeDemo"];export{n as BackgroundColors,e as BorderColors,a as DarkModeDemo,l as ForegroundColors,c as TextColors,g as __namedExportsOrder,b as default};
