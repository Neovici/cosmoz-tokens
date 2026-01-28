import{b as c}from"./lit-html-s0HVm7S4.js";import{s as a}from"./style-Btb-urNq.js";const A={title:"Tokens/Colors"},r=(o,d)=>c`
    <div class="story-row">
        <div
            style="width: 48px; height: 48px; border-radius: var(--cz-radius-md); background: var(${d}); border: 1px solid var(--cz-color-border-secondary);"
        ></div>
        <span class="story-label">${o}</span>
    </div>
`,s=(o,d)=>c`
    <div class="story-section">
        <h3 class="story-section-title">${d}</h3>
        <div
            class="story-grid"
            style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));"
        >
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
    `},e={render:()=>c`
        ${a}
        <div class="story-container">
            <h1 class="story-title">Gray Colors</h1>
            ${s("--cz-color-gray","Gray")}
        </div>
    `},t={render:()=>c`
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
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));"
                >
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
    `};var $,y,h;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Brand Colors</h1>
            \${colorScale('--cz-color-brand', 'Brand (Indigo-based)')}
        </div>
    \`
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var m,v,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Gray Colors</h1>
            \${colorScale('--cz-color-gray', 'Gray')}
        </div>
    \`
}`,...(u=(v=e.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var p,z,S;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Status Colors</h1>
            \${colorScale('--cz-color-error', 'Error')}
            \${colorScale('--cz-color-warning', 'Warning')}
            \${colorScale('--cz-color-success', 'Success')}
        </div>
    \`
}`,...(S=(z=t.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var g,C,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div class="story-container">
            <h1 class="story-title">Base Colors</h1>
            <div class="story-section">
                <div
                    class="story-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));"
                >
                    \${colorSwatch('white', '--cz-color-white')}
                    \${colorSwatch('black', '--cz-color-black')}
                    \${colorSwatch('alpha-white', '--cz-color-alpha-white')}
                    \${colorSwatch('alpha-black', '--cz-color-alpha-black')}
                </div>
            </div>
        </div>
    \`
}`,...(b=(C=n.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var w,B,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(B=i.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const W=["BrandColors","GrayColors","StatusColors","BaseColors","AllColors"];export{i as AllColors,n as BaseColors,l as BrandColors,e as GrayColors,t as StatusColors,W as __namedExportsOrder,A as default};
