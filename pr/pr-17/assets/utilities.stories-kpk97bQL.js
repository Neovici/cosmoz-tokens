import{b as o}from"./iframe-CA73oCEd.js";import{s as e}from"./style-CppJuvHU.js";const l={title:"Tokens/Utilities"},s={render:()=>o`
        ${e}
        <style>
            .demo-btn {
                padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
                border-radius: var(--cz-radius-md);
                border: none;
                cursor: pointer;
                font-family: var(--cz-font-body);
                font-size: var(--cz-text-sm);
                line-height: var(--cz-text-sm-line-height);
                font-weight: var(--cz-font-weight-semibold);
                color: var(--cz-color-text-on-brand);
            }

            .demo-btn--primary {
                background: var(--cz-color-bg-brand-solid);
            }

            .demo-btn--error {
                background: var(--cz-color-bg-error-solid);
            }

            .demo-btn--success {
                background: var(--cz-color-bg-success-solid);
            }

            .demo-btn--dark {
                background: var(--cz-color-gray-900);
            }

            /* Skeuomorphic highlight effect */
            .demo-btn--highlight {
                position: relative;
            }

            .demo-btn--highlight::before {
                content: '';
                position: absolute;
                inset: 1px;
                border: 1px solid var(--skeumorphic-color, rgba(255, 255, 255, 0.12));
                border-radius: var(
                    --skeumorphic-radius,
                    calc(var(--cz-radius-md) - 1px)
                );
                pointer-events: none;
                mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
                -webkit-mask-image: linear-gradient(
                    to bottom,
                    black 0%,
                    transparent 100%
                );
            }
        </style>
        <div class="story-container">
            <h1 class="story-title">Skeuomorphic Highlight</h1>
            <p class="story-description">
                A subtle "lit from above" inner highlight effect for buttons. Uses a
                ::before pseudo-element with a gradient mask to create depth.
            </p>

            <div class="story-section">
                <h3 class="story-section-title">Comparison</h3>
                <div class="story-flex story-gap-8 story-mb-6">
                    <div class="story-flex story-flex--col story-gap-2">
                        <button class="demo-btn demo-btn--primary">
                            Without Highlight
                        </button>
                        <span class="story-label story-label--small">Standard button</span>
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <button class="demo-btn demo-btn--primary demo-btn--highlight">
                            With Highlight
                        </button>
                        <span class="story-label story-label--small"
                            >+ skeumorphicHighlight</span
                        >
                    </div>
                </div>
            </div>

            <div class="story-section">
                <h3 class="story-section-title">On Different Backgrounds</h3>
                <div class="story-flex story-flex--wrap story-gap-8 story-mb-6">
                    <div class="story-flex story-flex--col story-gap-2">
                        <button class="demo-btn demo-btn--primary demo-btn--highlight">
                            Primary
                        </button>
                        <span class="story-label story-label--small">Brand</span>
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <button class="demo-btn demo-btn--error demo-btn--highlight">
                            Destructive
                        </button>
                        <span class="story-label story-label--small">Error</span>
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <button class="demo-btn demo-btn--success demo-btn--highlight">
                            Success
                        </button>
                        <span class="story-label story-label--small">Success</span>
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <button class="demo-btn demo-btn--dark demo-btn--highlight">
                            Dark
                        </button>
                        <span class="story-label story-label--small">Gray 900</span>
                    </div>
                </div>
            </div>

            <div class="story-section">
                <h3 class="story-section-title">Customization</h3>
                <p class="story-description">
                    Use CSS custom properties to adjust the effect.
                </p>
                <div class="story-flex story-flex--wrap story-gap-8 story-mb-6">
                    <div class="story-flex story-flex--col story-gap-2">
                        <button
                            class="demo-btn demo-btn--primary demo-btn--highlight"
                            style="--skeumorphic-color: rgba(255, 255, 255, 0.3);"
                        >
                            Stronger
                        </button>
                        <span class="story-label story-label--small"
                            >--skeumorphic-color: rgba(255, 255, 255, 0.3)</span
                        >
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <button
                            class="demo-btn demo-btn--primary demo-btn--highlight"
                            style="--skeumorphic-radius: var(--cz-radius-full);"
                        >
                            Pill Shape
                        </button>
                        <span class="story-label story-label--small"
                            >--skeumorphic-radius: var(--cz-radius-full)</span
                        >
                    </div>
                </div>
            </div>

            <div class="story-section">
                <h3 class="story-section-title">Usage</h3>
                <pre class="story-code">
import { skeumorphicHighlight } from '@neovici/cosmoz-tokens/skeumorphic';

const styles = css\`
  .button {
    \${skeumorphicHighlight}
  }
\`;</pre
                >
            </div>
        </div>
    `},t={render:()=>o`
        ${e}
        <style>
            .demo-truncate {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .demo-text-box {
                padding: calc(var(--cz-spacing) * 3);
                background: var(--cz-color-bg-secondary);
                border: 1px solid var(--cz-color-border-secondary);
                border-radius: var(--cz-radius-md);
                font-size: var(--cz-text-sm);
                line-height: var(--cz-text-sm-line-height);
                color: var(--cz-color-text-primary);
            }
        </style>
        <div class="story-container">
            <h1 class="story-title">Truncate</h1>
            <p class="story-description">
                Prevents text from wrapping and adds an ellipsis (...) when text
                overflows. Equivalent to Tailwind's <code>truncate</code> utility.
            </p>

            <div class="story-section">
                <h3 class="story-section-title">Basic Usage</h3>
                <div class="story-flex story-flex--col story-gap-3 story-mb-6">
                    <div class="story-flex story-flex--col story-gap-2">
                        <div class="demo-text-box" style="max-width: 300px;">
                            <div class="demo-truncate">
                                This is a very long text that will be truncated with an ellipsis
                                when it overflows the container.
                            </div>
                        </div>
                        <span class="story-label story-label--small"
                            >max-width: 300px + truncate</span
                        >
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <div class="demo-text-box" style="max-width: 200px;">
                            <div class="demo-truncate">
                                This is a very long text that will be truncated with an ellipsis
                                when it overflows the container.
                            </div>
                        </div>
                        <span class="story-label story-label--small"
                            >max-width: 200px + truncate</span
                        >
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <div class="demo-text-box" style="max-width: 100px;">
                            <div class="demo-truncate">
                                This is a very long text that will be truncated with an ellipsis
                                when it overflows the container.
                            </div>
                        </div>
                        <span class="story-label story-label--small"
                            >max-width: 100px + truncate</span
                        >
                    </div>
                </div>
            </div>

            <div class="story-section">
                <h3 class="story-section-title">Comparison</h3>
                <div class="story-flex story-flex--col story-gap-3 story-mb-6">
                    <div class="story-flex story-flex--col story-gap-2">
                        <div class="demo-text-box" style="max-width: 250px;">
                            This is a very long text without truncation that will wrap to
                            multiple lines.
                        </div>
                        <span class="story-label story-label--small">Without truncate</span>
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <div class="demo-text-box" style="max-width: 250px;">
                            <div class="demo-truncate">
                                This is a very long text with truncation that will show an
                                ellipsis instead of wrapping.
                            </div>
                        </div>
                        <span class="story-label story-label--small">With truncate</span>
                    </div>
                </div>
            </div>

            <div class="story-section">
                <h3 class="story-section-title">Usage</h3>
                <pre class="story-code">
import { truncate } from '@neovici/cosmoz-tokens/truncate';

const styles = css\`
  .label {
    \${truncate}
  }
\`;</pre
                >
            </div>

            <div class="story-section">
                <h3 class="story-section-title">CSS Applied</h3>
                <pre class="story-code">
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;</pre
                >
            </div>
        </div>
    `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <style>
            .demo-btn {
                padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
                border-radius: var(--cz-radius-md);
                border: none;
                cursor: pointer;
                font-family: var(--cz-font-body);
                font-size: var(--cz-text-sm);
                line-height: var(--cz-text-sm-line-height);
                font-weight: var(--cz-font-weight-semibold);
                color: var(--cz-color-text-on-brand);
            }

            .demo-btn--primary {
                background: var(--cz-color-bg-brand-solid);
            }

            .demo-btn--error {
                background: var(--cz-color-bg-error-solid);
            }

            .demo-btn--success {
                background: var(--cz-color-bg-success-solid);
            }

            .demo-btn--dark {
                background: var(--cz-color-gray-900);
            }

            /* Skeuomorphic highlight effect */
            .demo-btn--highlight {
                position: relative;
            }

            .demo-btn--highlight::before {
                content: '';
                position: absolute;
                inset: 1px;
                border: 1px solid var(--skeumorphic-color, rgba(255, 255, 255, 0.12));
                border-radius: var(
                    --skeumorphic-radius,
                    calc(var(--cz-radius-md) - 1px)
                );
                pointer-events: none;
                mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
                -webkit-mask-image: linear-gradient(
                    to bottom,
                    black 0%,
                    transparent 100%
                );
            }
        </style>
        <div class="story-container">
            <h1 class="story-title">Skeuomorphic Highlight</h1>
            <p class="story-description">
                A subtle "lit from above" inner highlight effect for buttons. Uses a
                ::before pseudo-element with a gradient mask to create depth.
            </p>

            <div class="story-section">
                <h3 class="story-section-title">Comparison</h3>
                <div class="story-flex story-gap-8 story-mb-6">
                    <div class="story-flex story-flex--col story-gap-2">
                        <button class="demo-btn demo-btn--primary">
                            Without Highlight
                        </button>
                        <span class="story-label story-label--small">Standard button</span>
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <button class="demo-btn demo-btn--primary demo-btn--highlight">
                            With Highlight
                        </button>
                        <span class="story-label story-label--small"
                            >+ skeumorphicHighlight</span
                        >
                    </div>
                </div>
            </div>

            <div class="story-section">
                <h3 class="story-section-title">On Different Backgrounds</h3>
                <div class="story-flex story-flex--wrap story-gap-8 story-mb-6">
                    <div class="story-flex story-flex--col story-gap-2">
                        <button class="demo-btn demo-btn--primary demo-btn--highlight">
                            Primary
                        </button>
                        <span class="story-label story-label--small">Brand</span>
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <button class="demo-btn demo-btn--error demo-btn--highlight">
                            Destructive
                        </button>
                        <span class="story-label story-label--small">Error</span>
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <button class="demo-btn demo-btn--success demo-btn--highlight">
                            Success
                        </button>
                        <span class="story-label story-label--small">Success</span>
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <button class="demo-btn demo-btn--dark demo-btn--highlight">
                            Dark
                        </button>
                        <span class="story-label story-label--small">Gray 900</span>
                    </div>
                </div>
            </div>

            <div class="story-section">
                <h3 class="story-section-title">Customization</h3>
                <p class="story-description">
                    Use CSS custom properties to adjust the effect.
                </p>
                <div class="story-flex story-flex--wrap story-gap-8 story-mb-6">
                    <div class="story-flex story-flex--col story-gap-2">
                        <button
                            class="demo-btn demo-btn--primary demo-btn--highlight"
                            style="--skeumorphic-color: rgba(255, 255, 255, 0.3);"
                        >
                            Stronger
                        </button>
                        <span class="story-label story-label--small"
                            >--skeumorphic-color: rgba(255, 255, 255, 0.3)</span
                        >
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <button
                            class="demo-btn demo-btn--primary demo-btn--highlight"
                            style="--skeumorphic-radius: var(--cz-radius-full);"
                        >
                            Pill Shape
                        </button>
                        <span class="story-label story-label--small"
                            >--skeumorphic-radius: var(--cz-radius-full)</span
                        >
                    </div>
                </div>
            </div>

            <div class="story-section">
                <h3 class="story-section-title">Usage</h3>
                <pre class="story-code">
import { skeumorphicHighlight } from '@neovici/cosmoz-tokens/skeumorphic';

const styles = css\\\`
  .button {
    \\\${skeumorphicHighlight}
  }
\\\`;</pre
                >
            </div>
        </div>
    \`
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <style>
            .demo-truncate {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .demo-text-box {
                padding: calc(var(--cz-spacing) * 3);
                background: var(--cz-color-bg-secondary);
                border: 1px solid var(--cz-color-border-secondary);
                border-radius: var(--cz-radius-md);
                font-size: var(--cz-text-sm);
                line-height: var(--cz-text-sm-line-height);
                color: var(--cz-color-text-primary);
            }
        </style>
        <div class="story-container">
            <h1 class="story-title">Truncate</h1>
            <p class="story-description">
                Prevents text from wrapping and adds an ellipsis (...) when text
                overflows. Equivalent to Tailwind's <code>truncate</code> utility.
            </p>

            <div class="story-section">
                <h3 class="story-section-title">Basic Usage</h3>
                <div class="story-flex story-flex--col story-gap-3 story-mb-6">
                    <div class="story-flex story-flex--col story-gap-2">
                        <div class="demo-text-box" style="max-width: 300px;">
                            <div class="demo-truncate">
                                This is a very long text that will be truncated with an ellipsis
                                when it overflows the container.
                            </div>
                        </div>
                        <span class="story-label story-label--small"
                            >max-width: 300px + truncate</span
                        >
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <div class="demo-text-box" style="max-width: 200px;">
                            <div class="demo-truncate">
                                This is a very long text that will be truncated with an ellipsis
                                when it overflows the container.
                            </div>
                        </div>
                        <span class="story-label story-label--small"
                            >max-width: 200px + truncate</span
                        >
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <div class="demo-text-box" style="max-width: 100px;">
                            <div class="demo-truncate">
                                This is a very long text that will be truncated with an ellipsis
                                when it overflows the container.
                            </div>
                        </div>
                        <span class="story-label story-label--small"
                            >max-width: 100px + truncate</span
                        >
                    </div>
                </div>
            </div>

            <div class="story-section">
                <h3 class="story-section-title">Comparison</h3>
                <div class="story-flex story-flex--col story-gap-3 story-mb-6">
                    <div class="story-flex story-flex--col story-gap-2">
                        <div class="demo-text-box" style="max-width: 250px;">
                            This is a very long text without truncation that will wrap to
                            multiple lines.
                        </div>
                        <span class="story-label story-label--small">Without truncate</span>
                    </div>
                    <div class="story-flex story-flex--col story-gap-2">
                        <div class="demo-text-box" style="max-width: 250px;">
                            <div class="demo-truncate">
                                This is a very long text with truncation that will show an
                                ellipsis instead of wrapping.
                            </div>
                        </div>
                        <span class="story-label story-label--small">With truncate</span>
                    </div>
                </div>
            </div>

            <div class="story-section">
                <h3 class="story-section-title">Usage</h3>
                <pre class="story-code">
import { truncate } from '@neovici/cosmoz-tokens/truncate';

const styles = css\\\`
  .label {
    \\\${truncate}
  }
\\\`;</pre
                >
            </div>

            <div class="story-section">
                <h3 class="story-section-title">CSS Applied</h3>
                <pre class="story-code">
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;</pre
                >
            </div>
        </div>
    \`
}`,...t.parameters?.docs?.source}}};const a=["SkeumorphicHighlight","Truncate"];export{s as SkeumorphicHighlight,t as Truncate,a as __namedExportsOrder,l as default};
