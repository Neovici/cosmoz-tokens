import{b as l}from"./iframe-I8H1cjWY.js";import{s as e}from"./style-Dt9nmzzS.js";const h={title:"Tokens/Colors"},r=c=>l`
    <div class="story-row">
        <div class="story-swatch" style="background: var(${c});"></div>
        <span class="story-label">${c}</span>
    </div>
`,o=(c,m)=>l`
    <div class="story-section">
        <h3 class="story-section-title">${m}</h3>
        <div class="story-grid story-grid--auto">
            ${r(`${c}-25`)} ${r(`${c}-50`)}
            ${r(`${c}-100`)} ${r(`${c}-200`)}
            ${r(`${c}-300`)} ${r(`${c}-400`)}
            ${r(`${c}-500`)} ${r(`${c}-600`)}
            ${r(`${c}-700`)} ${r(`${c}-800`)}
            ${r(`${c}-900`)} ${r(`${c}-950`)}
        </div>
    </div>
`,s={render:()=>l`
        ${e}
        <div class="story-container">
            <h1 class="story-title">Brand Colors</h1>
            ${o("--cz-color-brand","Brand (Indigo-based)")}
        </div>
    `},a={render:()=>l`
        ${e}
        <div class="story-container">
            <h1 class="story-title">Gray Colors</h1>
            ${o("--cz-color-gray","Gray")}
        </div>
    `},n={render:()=>l`
        ${e}
        <div class="story-container">
            <h1 class="story-title">Status Colors</h1>
            ${o("--cz-color-error","Error")}
            ${o("--cz-color-warning","Warning")}
            ${o("--cz-color-success","Success")}
            ${o("--cz-color-sky","Info")}
        </div>
    `},t={render:()=>l`
        ${e}
        <div class="story-container">
            <h1 class="story-title">Base Colors</h1>
            <div class="story-section">
                <div class="story-grid story-grid--auto">
                    ${r("--cz-color-white")} ${r("--cz-color-black")}
                    ${r("--cz-color-alpha-white")}
                    ${r("--cz-color-alpha-black")}
                </div>
            </div>
        </div>
    `},i={render:()=>l`
        ${e}
        <div class="story-container">
            <h1 class="story-title">Neutral Colors</h1>
            ${o("--cz-color-slate","Slate")}
        </div>
    `},$={render:()=>l`
        ${e}
        <div class="story-container">
            <h1 class="story-title">Warm Colors</h1>
            ${o("--cz-color-orange","Orange")}
            ${o("--cz-color-amber","Amber")}
            ${o("--cz-color-yellow","Yellow")}
            ${o("--cz-color-lime","Lime")}
            ${o("--cz-color-rose","Rose")}
        </div>
    `},d={render:()=>l`
        ${e}
        <div class="story-container">
            <h1 class="story-title">Cool Colors</h1>
            ${o("--cz-color-green","Green")}
            ${o("--cz-color-emerald","Emerald")}
            ${o("--cz-color-teal","Teal")}
            ${o("--cz-color-cyan","Cyan")}
            ${o("--cz-color-sky","Sky")}
            ${o("--cz-color-blue","Blue")}
        </div>
    `},z={render:()=>l`
        ${e}
        <div class="story-container">
            <h1 class="story-title">Purple Colors</h1>
            ${o("--cz-color-indigo","Indigo")}
            ${o("--cz-color-violet","Violet")}
            ${o("--cz-color-purple","Purple")}
            ${o("--cz-color-fuchsia","Fuchsia")}
            ${o("--cz-color-pink","Pink")}
        </div>
    `},y={render:()=>l`
        ${e}
        <div class="story-container">
            <h1 class="story-title">All Primitive Colors</h1>
            ${o("--cz-color-brand","Brand")}
            ${o("--cz-color-gray","Gray")}
            ${o("--cz-color-error","Error")}
            ${o("--cz-color-warning","Warning")}
            ${o("--cz-color-success","Success")}
            ${o("--cz-color-sky","Info")}
            ${o("--cz-color-orange","Orange")}
            ${o("--cz-color-amber","Amber")}
            ${o("--cz-color-yellow","Yellow")}
            ${o("--cz-color-lime","Lime")}
            ${o("--cz-color-green","Green")}
            ${o("--cz-color-emerald","Emerald")}
            ${o("--cz-color-teal","Teal")}
            ${o("--cz-color-cyan","Cyan")}
            ${o("--cz-color-sky","Sky")}
            ${o("--cz-color-blue","Blue")}
            ${o("--cz-color-indigo","Indigo")}
            ${o("--cz-color-violet","Violet")}
            ${o("--cz-color-purple","Purple")}
            ${o("--cz-color-fuchsia","Fuchsia")}
            ${o("--cz-color-pink","Pink")}
            ${o("--cz-color-rose","Rose")}
        </div>
    `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Brand Colors</h1>
            \${colorScale('--cz-color-brand', 'Brand (Indigo-based)')}
        </div>
    \`
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Gray Colors</h1>
            \${colorScale('--cz-color-gray', 'Gray')}
        </div>
    \`
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Status Colors</h1>
            \${colorScale('--cz-color-error', 'Error')}
            \${colorScale('--cz-color-warning', 'Warning')}
            \${colorScale('--cz-color-success', 'Success')}
            \${colorScale('--cz-color-sky', 'Info')}
        </div>
    \`
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Base Colors</h1>
            <div class="story-section">
                <div class="story-grid story-grid--auto">
                    \${colorSwatch('--cz-color-white')} \${colorSwatch('--cz-color-black')}
                    \${colorSwatch('--cz-color-alpha-white')}
                    \${colorSwatch('--cz-color-alpha-black')}
                </div>
            </div>
        </div>
    \`
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Neutral Colors</h1>
            \${colorScale('--cz-color-slate', 'Slate')}
        </div>
    \`
}`,...i.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Warm Colors</h1>
            \${colorScale('--cz-color-orange', 'Orange')}
            \${colorScale('--cz-color-amber', 'Amber')}
            \${colorScale('--cz-color-yellow', 'Yellow')}
            \${colorScale('--cz-color-lime', 'Lime')}
            \${colorScale('--cz-color-rose', 'Rose')}
        </div>
    \`
}`,...$.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Cool Colors</h1>
            \${colorScale('--cz-color-green', 'Green')}
            \${colorScale('--cz-color-emerald', 'Emerald')}
            \${colorScale('--cz-color-teal', 'Teal')}
            \${colorScale('--cz-color-cyan', 'Cyan')}
            \${colorScale('--cz-color-sky', 'Sky')}
            \${colorScale('--cz-color-blue', 'Blue')}
        </div>
    \`
}`,...d.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Purple Colors</h1>
            \${colorScale('--cz-color-indigo', 'Indigo')}
            \${colorScale('--cz-color-violet', 'Violet')}
            \${colorScale('--cz-color-purple', 'Purple')}
            \${colorScale('--cz-color-fuchsia', 'Fuchsia')}
            \${colorScale('--cz-color-pink', 'Pink')}
        </div>
    \`
}`,...z.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">All Primitive Colors</h1>
            \${colorScale('--cz-color-brand', 'Brand')}
            \${colorScale('--cz-color-gray', 'Gray')}
            \${colorScale('--cz-color-error', 'Error')}
            \${colorScale('--cz-color-warning', 'Warning')}
            \${colorScale('--cz-color-success', 'Success')}
            \${colorScale('--cz-color-sky', 'Info')}
            \${colorScale('--cz-color-orange', 'Orange')}
            \${colorScale('--cz-color-amber', 'Amber')}
            \${colorScale('--cz-color-yellow', 'Yellow')}
            \${colorScale('--cz-color-lime', 'Lime')}
            \${colorScale('--cz-color-green', 'Green')}
            \${colorScale('--cz-color-emerald', 'Emerald')}
            \${colorScale('--cz-color-teal', 'Teal')}
            \${colorScale('--cz-color-cyan', 'Cyan')}
            \${colorScale('--cz-color-sky', 'Sky')}
            \${colorScale('--cz-color-blue', 'Blue')}
            \${colorScale('--cz-color-indigo', 'Indigo')}
            \${colorScale('--cz-color-violet', 'Violet')}
            \${colorScale('--cz-color-purple', 'Purple')}
            \${colorScale('--cz-color-fuchsia', 'Fuchsia')}
            \${colorScale('--cz-color-pink', 'Pink')}
            \${colorScale('--cz-color-rose', 'Rose')}
        </div>
    \`
}`,...y.parameters?.docs?.source}}};const v=["BrandColors","GrayColors","StatusColors","BaseColors","NeutralColors","WarmColors","CoolColors","PurpleColors","AllColors"];export{y as AllColors,t as BaseColors,s as BrandColors,d as CoolColors,a as GrayColors,i as NeutralColors,z as PurpleColors,n as StatusColors,$ as WarmColors,v as __namedExportsOrder,h as default};
