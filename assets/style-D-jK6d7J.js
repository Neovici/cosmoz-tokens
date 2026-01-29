import{b as l}from"./iframe-BS0TWTfn.js";let i,p=0;function u(){return p++}const h=Symbol("haunted.hook"),g=Symbol("haunted.effects"),f=Symbol("haunted.layoutEffects"),b="haunted.context";Promise.resolve().then.bind(Promise.resolve());const v=(...t)=>{const r=new CSSStyleSheet;return r.replaceSync(t.join("")),r},y=(t,...r)=>t.flatMap((e,a)=>[e,r[a]||""]).join(""),m=y;class o{id;state;constructor(r,e){this.id=r,this.state=e}}function z(t,...r){let e=u(),a=i[h],s=a.get(e);return s||(s=new t(e,i,...r),a.set(e,s)),s.update(...r)}function c(t){return z.bind(null,t)}function n(t){return c(class extends o{callback;lastValues;values;_teardown;constructor(r,e,a,s){super(r,e),t(e,this)}update(r,e){this.callback=r,this.values=e}call(){const r=!this.values||this.hasChanged();this.lastValues=this.values,r&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(r){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),r&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((r,e)=>this.lastValues[e]!==r)}})}function d(t,r){t[g].push(r)}n(d);const x=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode;c(class extends o{Context;value;_ranEffect;_unsubscribe;constructor(t,r,e){super(t,r),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,d(r,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const r={Context:t,callback:this._updater};x(this.state.host).dispatchEvent(new CustomEvent(b,{detail:r,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:a=null,value:s}=r;this.value=a?s:t.defaultValue,this._unsubscribe=a}teardown(){this._unsubscribe&&this._unsubscribe()}});c(class extends o{value;values;constructor(t,r,e,a){super(t,r),this.value=e(),this.values=a}update(t,r){return this.hasChanged(r)&&(this.values=r,this.value=t()),this.value}hasChanged(t=[]){return t.some((r,e)=>this.values[e]!==r)}});function w(t,r){t[f].push(r)}n(w);c(class extends o{args;constructor(t,r,e){super(t,r),this.updater=this.updater.bind(this),typeof e=="function"&&(e=e()),this.makeArgs(e)}update(){return this.args}updater(t){const[r]=this.args;typeof t=="function"&&(t=t(r)),!Object.is(r,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});c(class extends o{reducer;currentState;constructor(t,r,e,a,s){super(t,r),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(a):a}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const k=/([A-Z])/gu;c(class extends o{property;eventName;constructor(t,r,e,a){if(super(t,r),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=e,this.eventName=e.replace(k,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof a=="function"&&(a=a()),a!=null&&this.updateProp(a))}update(t,r){return[this.state.host[this.property],this.updater]}updater(t){const r=this.state.host[this.property];typeof t=="function"&&(t=t(r)),!Object.is(r,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const r=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(r),r}});c(class extends o{update(){return this.state.host}});const _=m`
	/* Flexbox */
	.flex {
		display: flex;
	}
	.flex-col {
		display: flex;
		flex-direction: column;
	}
	.flex-wrap {
		flex-wrap: wrap;
	}
	.items-center {
		align-items: center;
	}
	.items-start {
		align-items: flex-start;
	}
	.items-end {
		align-items: flex-end;
	}
	.justify-center {
		justify-content: center;
	}
	.justify-between {
		justify-content: space-between;
	}
	.justify-end {
		justify-content: flex-end;
	}

	/* Gap (using --cz-spacing: 4px) */
	.gap-0 {
		gap: 0;
	}
	.gap-1 {
		gap: calc(var(--cz-spacing) * 1);
	}
	.gap-2 {
		gap: calc(var(--cz-spacing) * 2);
	}
	.gap-3 {
		gap: calc(var(--cz-spacing) * 3);
	}
	.gap-4 {
		gap: calc(var(--cz-spacing) * 4);
	}
	.gap-5 {
		gap: calc(var(--cz-spacing) * 5);
	}
	.gap-6 {
		gap: calc(var(--cz-spacing) * 6);
	}
	.gap-8 {
		gap: calc(var(--cz-spacing) * 8);
	}

	/* Display */
	.hidden {
		display: none;
	}
	.block {
		display: block;
	}
	.grid {
		display: grid;
	}

	/* Sizing */
	.w-full {
		width: 100%;
	}
	.h-full {
		height: 100%;
	}

	/* Position */
	.relative {
		position: relative;
	}
	.absolute {
		position: absolute;
	}

	/* Text */
	.truncate {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;v(_);const E=l`
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap');
		@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

		/* Container */
		.story-container {
			font-family: var(--cz-font-body);
			color: var(--cz-color-text-primary);
			background: var(--cz-color-bg-primary);
			padding: calc(var(--cz-spacing) * 6);
			min-height: 100vh;
		}

		/* Typography */
		.story-title {
			font-family: var(--cz-font-display);
			font-size: var(--cz-text-display-xs);
			line-height: var(--cz-text-display-xs-line-height);
			margin-bottom: calc(var(--cz-spacing) * 6);
			color: var(--cz-color-text-primary);
		}

		.story-section {
			margin-bottom: calc(var(--cz-spacing) * 8);
		}

		.story-section-title {
			font-size: var(--cz-text-lg);
			font-weight: var(--cz-font-weight-semibold);
			margin-bottom: calc(var(--cz-spacing) * 4);
			color: var(--cz-color-text-secondary);
		}

		.story-description {
			font-size: var(--cz-text-md);
			color: var(--cz-color-text-secondary);
			margin-bottom: calc(var(--cz-spacing) * 4);
		}

		/* Grid */
		.story-grid {
			display: grid;
			gap: calc(var(--cz-spacing) * 2);
		}

		.story-grid--auto {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		}

		.story-grid--wide {
			grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		}

		/* Row */
		.story-row {
			display: flex;
			align-items: center;
			gap: calc(var(--cz-spacing) * 3);
		}

		/* Label */
		.story-label {
			font-size: var(--cz-text-sm);
			color: var(--cz-color-text-tertiary);
			min-width: 180px;
			font-family: var(--cz-font-mono);
		}

		.story-label--small {
			min-width: auto;
		}

		/* Swatches */
		.story-swatch {
			width: 48px;
			height: 48px;
			border-radius: var(--cz-radius-md);
			border: 1px solid var(--cz-color-border-secondary);
		}

		.story-swatch--lg {
			width: 64px;
			height: 64px;
		}

		.story-swatch--shadow {
			width: 120px;
			height: 80px;
			border-radius: var(--cz-radius-lg);
			background: var(--cz-color-bg-primary);
		}

		/* Buttons */
		.story-btn {
			padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 4);
			border-radius: var(--cz-radius-md);
			cursor: pointer;
			font-family: var(--cz-font-body);
			font-size: var(--cz-text-sm);
		}

		.story-btn--secondary {
			background: var(--cz-color-bg-secondary);
			border: 1px solid var(--cz-color-border-primary);
			color: var(--cz-color-text-primary);
		}

		.story-btn--primary {
			background: var(--cz-color-bg-brand-solid);
			border: none;
			color: var(--cz-color-text-on-brand);
			font-weight: var(--cz-font-weight-semibold);
			padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
		}

		/* Card */
		.story-card {
			padding: calc(var(--cz-spacing) * 6);
			border-radius: var(--cz-radius-xl);
			background: var(--cz-color-bg-secondary);
			border: 1px solid var(--cz-color-border-secondary);
		}

		.story-card-title {
			font-size: var(--cz-text-lg);
			font-weight: var(--cz-font-weight-semibold);
			color: var(--cz-color-text-primary);
			margin-bottom: calc(var(--cz-spacing) * 2);
		}

		.story-card-text {
			font-size: var(--cz-text-md);
			color: var(--cz-color-text-secondary);
			margin-bottom: calc(var(--cz-spacing) * 4);
		}

		/* Code */
		.story-code {
			padding: calc(var(--cz-spacing) * 4);
			border-radius: var(--cz-radius-md);
			background: var(--cz-color-bg-tertiary);
			font-family: var(--cz-font-mono);
			font-size: var(--cz-text-sm);
			color: var(--cz-color-text-primary);
			overflow-x: auto;
			white-space: pre;
		}

		/* Flex container */
		.story-flex {
			display: flex;
		}

		.story-flex--wrap {
			flex-wrap: wrap;
		}

		.story-flex--col {
			flex-direction: column;
		}

		.story-gap-2 {
			gap: calc(var(--cz-spacing) * 2);
		}

		.story-gap-3 {
			gap: calc(var(--cz-spacing) * 3);
		}

		.story-gap-8 {
			gap: calc(var(--cz-spacing) * 8);
		}

		/* Margin utilities */
		.story-mb-4 {
			margin-bottom: calc(var(--cz-spacing) * 4);
		}

		.story-mb-6 {
			margin-bottom: calc(var(--cz-spacing) * 6);
		}

		.story-mt-6 {
			margin-top: calc(var(--cz-spacing) * 6);
		}

		/* Input */
		.story-input {
			padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 3.5);
			border-radius: var(--cz-radius-md);
			background: var(--cz-color-bg-primary);
			border: 1px solid var(--cz-color-border-primary);
			font-family: var(--cz-font-body);
			font-size: var(--cz-text-md);
			color: var(--cz-color-text-primary);
			outline: none;
		}

		.story-input--focus {
			box-shadow: var(--cz-focus-ring);
			border-color: var(--cz-color-border-brand);
		}

		.story-input--error {
			box-shadow: var(--cz-focus-ring-error);
			border-color: var(--cz-color-border-error);
		}

		/* Demo boxes for utilities story */
		.demo-box {
			width: 40px;
			height: 40px;
			background: var(--cz-color-bg-brand-solid);
			border-radius: var(--cz-radius-sm);
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--cz-color-text-on-brand);
			font-size: var(--cz-text-xs);
			font-weight: var(--cz-font-weight-semibold);
		}

		.demo-box--sm {
			width: 24px;
			height: 24px;
		}

		.demo-box--outline {
			background: transparent;
			border: 2px dashed var(--cz-color-border-brand);
			color: var(--cz-color-text-brand);
		}

		.demo-container {
			border: 1px dashed var(--cz-color-border-secondary);
			border-radius: var(--cz-radius-md);
			background: var(--cz-color-bg-secondary);
		}

		/* Padding utilities for stories */
		.story-p-4 {
			padding: calc(var(--cz-spacing) * 4);
		}

		.demo-text {
			max-width: 200px;
			padding: calc(var(--cz-spacing) * 2);
			background: var(--cz-color-bg-tertiary);
			border-radius: var(--cz-radius-sm);
		}
	</style>
`;export{E as s,_ as u};
