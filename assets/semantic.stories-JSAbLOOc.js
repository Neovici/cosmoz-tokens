import{b as o}from"./lit-html-s0HVm7S4.js";import{s as t}from"./style-Btb-urNq.js";const T={title:"Tokens/Semantic"},r=(k,R)=>o`
    <div class="story-row">
        <div
            style="width: 48px; height: 48px; border-radius: var(--cz-radius-md); background: var(${R}); border: 1px solid var(--cz-color-border-secondary);"
        ></div>
        <span class="story-label">${k}</span>
    </div>
`,c=()=>{document.documentElement.classList.toggle("dark-mode")},e={render:()=>o`
        ${t}
        <div class="story-container">
            <h1 class="story-title">Text Colors</h1>
            <button
                @click=${c}
                style="margin-bottom: 24px; padding: 8px 16px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-secondary); border: 1px solid var(--cz-color-border-primary); cursor: pointer; font-family: var(--cz-font-body); color: var(--cz-color-text-primary);"
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));"
                >
                    ${r("text-primary","--cz-color-text-primary")}
                    ${r("text-secondary","--cz-color-text-secondary")}
                    ${r("text-tertiary","--cz-color-text-tertiary")}
                    ${r("text-quaternary","--cz-color-text-quaternary")}
                    ${r("text-disabled","--cz-color-text-disabled")}
                    ${r("text-placeholder","--cz-color-text-placeholder")}
                    ${r("text-error","--cz-color-text-error")}
                    ${r("text-warning","--cz-color-text-warning")}
                    ${r("text-success","--cz-color-text-success")}
                    ${r("text-brand","--cz-color-text-brand")}
                    ${r("text-on-brand","--cz-color-text-on-brand")}
                </div>
            </div>
        </div>
    `},a={render:()=>o`
        ${t}
        <div class="story-container">
            <h1 class="story-title">Background Colors</h1>
            <button
                @click=${c}
                style="margin-bottom: 24px; padding: 8px 16px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-secondary); border: 1px solid var(--cz-color-border-primary); cursor: pointer; font-family: var(--cz-font-body); color: var(--cz-color-text-primary);"
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <h3 class="story-section-title">Base</h3>
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));"
                >
                    ${r("bg-primary","--cz-color-bg-primary")}
                    ${r("bg-secondary","--cz-color-bg-secondary")}
                    ${r("bg-tertiary","--cz-color-bg-tertiary")}
                    ${r("bg-quaternary","--cz-color-bg-quaternary")}
                    ${r("bg-disabled","--cz-color-bg-disabled")}
                    ${r("bg-overlay","--cz-color-bg-overlay")}
                </div>
            </div>
            <div class="story-section">
                <h3 class="story-section-title">Brand</h3>
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));"
                >
                    ${r("bg-brand","--cz-color-bg-brand")}
                    ${r("bg-brand-secondary","--cz-color-bg-brand-secondary")}
                    ${r("bg-brand-solid","--cz-color-bg-brand-solid")}
                    ${r("bg-brand-section","--cz-color-bg-brand-section")}
                </div>
            </div>
            <div class="story-section">
                <h3 class="story-section-title">Status</h3>
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));"
                >
                    ${r("bg-error","--cz-color-bg-error")}
                    ${r("bg-error-solid","--cz-color-bg-error-solid")}
                    ${r("bg-warning","--cz-color-bg-warning")}
                    ${r("bg-warning-solid","--cz-color-bg-warning-solid")}
                    ${r("bg-success","--cz-color-bg-success")}
                    ${r("bg-success-solid","--cz-color-bg-success-solid")}
                </div>
            </div>
        </div>
    `},n={render:()=>o`
        ${t}
        <div class="story-container">
            <h1 class="story-title">Border Colors</h1>
            <button
                @click=${c}
                style="margin-bottom: 24px; padding: 8px 16px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-secondary); border: 1px solid var(--cz-color-border-primary); cursor: pointer; font-family: var(--cz-font-body); color: var(--cz-color-text-primary);"
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));"
                >
                    ${r("border-primary","--cz-color-border-primary")}
                    ${r("border-secondary","--cz-color-border-secondary")}
                    ${r("border-tertiary","--cz-color-border-tertiary")}
                    ${r("border-disabled","--cz-color-border-disabled")}
                    ${r("border-error","--cz-color-border-error")}
                    ${r("border-brand","--cz-color-border-brand")}
                </div>
            </div>
        </div>
    `},s={render:()=>o`
        ${t}
        <div class="story-container">
            <h1 class="story-title">Foreground Colors</h1>
            <p style="margin-bottom: 16px; color: var(--cz-color-text-secondary);">
                For icons and decorative elements.
            </p>
            <button
                @click=${c}
                style="margin-bottom: 24px; padding: 8px 16px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-secondary); border: 1px solid var(--cz-color-border-primary); cursor: pointer; font-family: var(--cz-font-body); color: var(--cz-color-text-primary);"
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));"
                >
                    ${r("fg-primary","--cz-color-fg-primary")}
                    ${r("fg-secondary","--cz-color-fg-secondary")}
                    ${r("fg-tertiary","--cz-color-fg-tertiary")}
                    ${r("fg-quaternary","--cz-color-fg-quaternary")}
                    ${r("fg-disabled","--cz-color-fg-disabled")}
                    ${r("fg-white","--cz-color-fg-white")}
                    ${r("fg-brand","--cz-color-fg-brand")}
                    ${r("fg-error","--cz-color-fg-error")}
                    ${r("fg-warning","--cz-color-fg-warning")}
                    ${r("fg-success","--cz-color-fg-success")}
                </div>
            </div>
        </div>
    `},d={render:()=>o`
        ${t}
        <div class="story-container">
            <h1 class="story-title">Dark Mode Demo</h1>
            <button
                @click=${c}
                style="margin-bottom: 24px; padding: 10px 18px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-brand-solid); border: none; cursor: pointer; font-family: var(--cz-font-body); font-weight: var(--cz-font-weight-semibold); color: var(--cz-color-text-on-brand);"
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div
                    style="padding: 24px; border-radius: var(--cz-radius-xl); background: var(--cz-color-bg-secondary); border: 1px solid var(--cz-color-border-secondary);"
                >
                    <h3
                        style="font-size: var(--cz-text-lg); font-weight: var(--cz-font-weight-semibold); color: var(--cz-color-text-primary); margin-bottom: 8px;"
                    >
                        Card Title
                    </h3>
                    <p
                        style="font-size: var(--cz-text-md); color: var(--cz-color-text-secondary); margin-bottom: 16px;"
                    >
                        This is a demo card showing how semantic tokens adapt to dark mode
                        automatically.
                    </p>
                    <div style="display: flex; gap: 12px;">
                        <button
                            style="padding: 10px 18px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-brand-solid); border: none; cursor: pointer; font-family: var(--cz-font-body); font-weight: var(--cz-font-weight-semibold); color: var(--cz-color-text-on-brand);"
                        >
                            Primary
                        </button>
                        <button
                            style="padding: 10px 18px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-primary); box-shadow: var(--cz-shadow-xs-skeumorphic); border: 1px solid var(--cz-color-border-primary); cursor: pointer; font-family: var(--cz-font-body); font-weight: var(--cz-font-weight-semibold); color: var(--cz-color-text-primary);"
                        >
                            Secondary
                        </button>
                    </div>
                </div>
            </div>
            <div class="story-section" style="margin-top: 24px;">
                <h3 class="story-section-title">Usage</h3>
                <pre
                    style="padding: 16px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-tertiary); font-family: var(--cz-font-mono); font-size: var(--cz-text-sm); color: var(--cz-color-text-primary); overflow-x: auto;"
                >
// Add dark mode class to root
document.documentElement.classList.add('dark-mode');

// Or use data attribute
document.documentElement.dataset.theme = 'dark';</pre
                >
            </div>
        </div>
    `};var l,i,b;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Text Colors</h1>
            <button
                @click=\${toggleDarkMode}
                style="margin-bottom: 24px; padding: 8px 16px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-secondary); border: 1px solid var(--cz-color-border-primary); cursor: pointer; font-family: var(--cz-font-body); color: var(--cz-color-text-primary);"
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));"
                >
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
}`,...(b=(i=e.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var g,y,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Background Colors</h1>
            <button
                @click=\${toggleDarkMode}
                style="margin-bottom: 24px; padding: 8px 16px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-secondary); border: 1px solid var(--cz-color-border-primary); cursor: pointer; font-family: var(--cz-font-body); color: var(--cz-color-text-primary);"
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <h3 class="story-section-title">Base</h3>
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));"
                >
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
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));"
                >
                    \${colorRow('bg-brand', '--cz-color-bg-brand')}
                    \${colorRow('bg-brand-secondary', '--cz-color-bg-brand-secondary')}
                    \${colorRow('bg-brand-solid', '--cz-color-bg-brand-solid')}
                    \${colorRow('bg-brand-section', '--cz-color-bg-brand-section')}
                </div>
            </div>
            <div class="story-section">
                <h3 class="story-section-title">Status</h3>
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));"
                >
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
}`,...(m=(y=a.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var p,v,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Border Colors</h1>
            <button
                @click=\${toggleDarkMode}
                style="margin-bottom: 24px; padding: 8px 16px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-secondary); border: 1px solid var(--cz-color-border-primary); cursor: pointer; font-family: var(--cz-font-body); color: var(--cz-color-text-primary);"
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));"
                >
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
}`,...(u=(v=n.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var z,x,f;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Foreground Colors</h1>
            <p style="margin-bottom: 16px; color: var(--cz-color-text-secondary);">
                For icons and decorative elements.
            </p>
            <button
                @click=\${toggleDarkMode}
                style="margin-bottom: 24px; padding: 8px 16px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-secondary); border: 1px solid var(--cz-color-border-primary); cursor: pointer; font-family: var(--cz-font-body); color: var(--cz-color-text-primary);"
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));"
                >
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
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var $,w,h;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Dark Mode Demo</h1>
            <button
                @click=\${toggleDarkMode}
                style="margin-bottom: 24px; padding: 10px 18px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-brand-solid); border: none; cursor: pointer; font-family: var(--cz-font-body); font-weight: var(--cz-font-weight-semibold); color: var(--cz-color-text-on-brand);"
            >
                Toggle Dark Mode
            </button>
            <div class="story-section">
                <div
                    style="padding: 24px; border-radius: var(--cz-radius-xl); background: var(--cz-color-bg-secondary); border: 1px solid var(--cz-color-border-secondary);"
                >
                    <h3
                        style="font-size: var(--cz-text-lg); font-weight: var(--cz-font-weight-semibold); color: var(--cz-color-text-primary); margin-bottom: 8px;"
                    >
                        Card Title
                    </h3>
                    <p
                        style="font-size: var(--cz-text-md); color: var(--cz-color-text-secondary); margin-bottom: 16px;"
                    >
                        This is a demo card showing how semantic tokens adapt to dark mode
                        automatically.
                    </p>
                    <div style="display: flex; gap: 12px;">
                        <button
                            style="padding: 10px 18px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-brand-solid); border: none; cursor: pointer; font-family: var(--cz-font-body); font-weight: var(--cz-font-weight-semibold); color: var(--cz-color-text-on-brand);"
                        >
                            Primary
                        </button>
                        <button
                            style="padding: 10px 18px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-primary); box-shadow: var(--cz-shadow-xs-skeumorphic); border: 1px solid var(--cz-color-border-primary); cursor: pointer; font-family: var(--cz-font-body); font-weight: var(--cz-font-weight-semibold); color: var(--cz-color-text-primary);"
                        >
                            Secondary
                        </button>
                    </div>
                </div>
            </div>
            <div class="story-section" style="margin-top: 24px;">
                <h3 class="story-section-title">Usage</h3>
                <pre
                    style="padding: 16px; border-radius: var(--cz-radius-md); background: var(--cz-color-bg-tertiary); font-family: var(--cz-font-mono); font-size: var(--cz-text-sm); color: var(--cz-color-text-primary); overflow-x: auto;"
                >
// Add dark mode class to root
document.documentElement.classList.add('dark-mode');

// Or use data attribute
document.documentElement.dataset.theme = 'dark';</pre
                >
            </div>
        </div>
    \`
}`,...(h=(w=d.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const C=["TextColors","BackgroundColors","BorderColors","ForegroundColors","DarkModeDemo"];export{a as BackgroundColors,n as BorderColors,d as DarkModeDemo,s as ForegroundColors,e as TextColors,C as __namedExportsOrder,T as default};
