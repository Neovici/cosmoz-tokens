import{b as r}from"./iframe-KIPk5bJ_.js";import{s as c}from"./style-Bn5ULb_j.js";const g={title:"Tokens/Semantic"},o=a=>r`
    <div class="story-row">
        <div class="story-swatch" style="background: var(${a});"></div>
        <span class="story-label">${a}</span>
    </div>
`,s=()=>{document.documentElement.classList.toggle("dark-mode")},t={render:()=>r`
        ${c}
        <div class="story-container">
            <h1 class="story-title">Text Colors</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${s}
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
                    ${o("--cz-color-text-info")}
                    ${o("--cz-color-text-info-hover")}
                    ${o("--cz-color-text-on-info")}
                </div>
            </div>
        </div>
    `},n={render:()=>r`
        ${c}
        <div class="story-container">
            <h1 class="story-title">Background Colors</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${s}
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
            <div class="story-section">
                <h3 class="story-section-title">Info</h3>
                <div class="story-grid story-grid--wide">
                    ${o("--cz-color-bg-info")}
                    ${o("--cz-color-bg-info-secondary")}
                    ${o("--cz-color-bg-info-solid")}
                    ${o("--cz-color-bg-info-solid-hover")}
                </div>
            </div>
        </div>
    `},e={render:()=>r`
        ${c}
        <div class="story-container">
            <h1 class="story-title">Border Colors</h1>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${s}
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
                    ${o("--cz-color-border-info")}
                    ${o("--cz-color-border-info-subtle")}
                </div>
            </div>
        </div>
    `},l={render:()=>r`
        ${c}
        <div class="story-container">
            <h1 class="story-title">Foreground Colors</h1>
            <p class="story-description">For icons and decorative elements.</p>
            <button
                class="story-btn story-btn--secondary story-mb-6"
                @click=${s}
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
                    ${o("--cz-color-fg-success")} ${o("--cz-color-fg-info")}
                    ${o("--cz-color-fg-info-secondary")}
                </div>
            </div>
        </div>
    `},d={render:()=>r`
        ${c}
        <div class="story-container">
            <h1 class="story-title">Dark Mode Demo</h1>
            <button
                class="story-btn story-btn--primary story-mb-6"
                @click=${s}
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
    `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
                    \${colorRow('--cz-color-text-info')}
                    \${colorRow('--cz-color-text-info-hover')}
                    \${colorRow('--cz-color-text-on-info')}
                </div>
            </div>
        </div>
    \`
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
            <div class="story-section">
                <h3 class="story-section-title">Info</h3>
                <div class="story-grid story-grid--wide">
                    \${colorRow('--cz-color-bg-info')}
                    \${colorRow('--cz-color-bg-info-secondary')}
                    \${colorRow('--cz-color-bg-info-solid')}
                    \${colorRow('--cz-color-bg-info-solid-hover')}
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
                    \${colorRow('--cz-color-border-info')}
                    \${colorRow('--cz-color-border-info-subtle')}
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
                    \${colorRow('--cz-color-fg-success')} \${colorRow('--cz-color-fg-info')}
                    \${colorRow('--cz-color-fg-info-secondary')}
                </div>
            </div>
        </div>
    \`
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const b=["TextColors","BackgroundColors","BorderColors","ForegroundColors","DarkModeDemo"];export{n as BackgroundColors,e as BorderColors,d as DarkModeDemo,l as ForegroundColors,t as TextColors,b as __namedExportsOrder,g as default};
