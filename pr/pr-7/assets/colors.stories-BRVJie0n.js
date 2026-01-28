import{b as c}from"./iframe-VcrTb-bN.js";import{s as a}from"./style-sG1rYyyS.js";const h={title:"Tokens/Colors"},r=(o,d)=>c`
    <div class="story-row">
        <div class="story-swatch" style="background: var(${d});"></div>
        <span class="story-label">${o}</span>
    </div>
`,s=(o,d)=>c`
    <div class="story-section">
        <h3 class="story-section-title">${d}</h3>
        <div class="story-grid story-grid--auto">
            ${r("25",`${o}-25`)} ${r("50",`${o}-50`)}
            ${r("100",`${o}-100`)}
            ${r("200",`${o}-200`)}
            ${r("300",`${o}-300`)}
            ${r("400",`${o}-400`)}
            ${r("500",`${o}-500`)}
            ${r("600",`${o}-600`)}
            ${r("700",`${o}-700`)}
            ${r("800",`${o}-800`)}
            ${r("900",`${o}-900`)}
            ${r("950",`${o}-950`)}
        </div>
    </div>
`,l={render:()=>c`
        ${a}
        <div class="story-container">
            <h1 class="story-title">Brand Colors</h1>
            ${s("--cz-color-brand","Brand (Indigo-based)")}
        </div>
    `},t={render:()=>c`
        ${a}
        <div class="story-container">
            <h1 class="story-title">Gray Colors</h1>
            ${s("--cz-color-gray","Gray")}
        </div>
    `},e={render:()=>c`
        ${a}
        <div class="story-container">
            <h1 class="story-title">Status Colors</h1>
            ${s("--cz-color-error","Error")}
            ${s("--cz-color-warning","Warning")}
            ${s("--cz-color-success","Success")}
        </div>
    `},n={render:()=>c`
        ${a}
        <div class="story-container">
            <h1 class="story-title">Base Colors</h1>
            <div class="story-section">
                <div class="story-grid story-grid--auto">
                    ${r("white","--cz-color-white")}
                    ${r("black","--cz-color-black")}
                    ${r("alpha-white","--cz-color-alpha-white")}
                    ${r("alpha-black","--cz-color-alpha-black")}
                </div>
            </div>
        </div>
    `},i={render:()=>c`
        ${a}
        <div class="story-container">
            <h1 class="story-title">All Primitive Colors</h1>
            ${s("--cz-color-brand","Brand")}
            ${s("--cz-color-gray","Gray")}
            ${s("--cz-color-error","Error")}
            ${s("--cz-color-warning","Warning")}
            ${s("--cz-color-success","Success")}
        </div>
    `};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Brand Colors</h1>
            \${colorScale('--cz-color-brand', 'Brand (Indigo-based)')}
        </div>
    \`
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Gray Colors</h1>
            \${colorScale('--cz-color-gray', 'Gray')}
        </div>
    \`
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Status Colors</h1>
            \${colorScale('--cz-color-error', 'Error')}
            \${colorScale('--cz-color-warning', 'Warning')}
            \${colorScale('--cz-color-success', 'Success')}
        </div>
    \`
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Base Colors</h1>
            <div class="story-section">
                <div class="story-grid story-grid--auto">
                    \${colorSwatch('white', '--cz-color-white')}
                    \${colorSwatch('black', '--cz-color-black')}
                    \${colorSwatch('alpha-white', '--cz-color-alpha-white')}
                    \${colorSwatch('alpha-black', '--cz-color-alpha-black')}
                </div>
            </div>
        </div>
    \`
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">All Primitive Colors</h1>
            \${colorScale('--cz-color-brand', 'Brand')}
            \${colorScale('--cz-color-gray', 'Gray')}
            \${colorScale('--cz-color-error', 'Error')}
            \${colorScale('--cz-color-warning', 'Warning')}
            \${colorScale('--cz-color-success', 'Success')}
        </div>
    \`
}`,...i.parameters?.docs?.source}}};const v=["BrandColors","GrayColors","StatusColors","BaseColors","AllColors"];export{i as AllColors,n as BaseColors,l as BrandColors,t as GrayColors,e as StatusColors,v as __namedExportsOrder,h as default};
