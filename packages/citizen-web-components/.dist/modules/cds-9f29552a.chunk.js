import { r as registerTemplate, a as registerComponent, b as registerDecorators, B as BaseLightningElement, c as buildCustomElementConstructor } from './vendor-de46247d.chunk.js';

function stylesheet(hostSelector, shadowSelector, nativeShadow) {
  return "\n" + (nativeShadow ? (":host {display: block;line-height: normal;}") : (hostSelector + " {display: block;line-height: normal;}")) + "\n*" + shadowSelector + " {box-sizing: border-box;font-family: inherit;margin: 0;padding: 0;}\nul" + shadowSelector + " {list-style: none;}\n";
}
var stylesheet0 = [stylesheet];

function stylesheet$1(hostSelector, shadowSelector, nativeShadow) {
  return "\n" + (nativeShadow ? (":host {display: inline-flex;color: var(--cds-color-meteorite);}") : (hostSelector + " {display: inline-flex;color: var(--cds-color-meteorite);}")) + "\n.button" + shadowSelector + " {all: unset;align-items: center;appearance: none;-webkit-appearance: none;border-radius: var(--cds-spacing-1);cursor: pointer;display: inline-flex;font-weight: bold;line-height: 1.25;padding: var(--cds-spacing-3) var(--cds-spacing-5);text-decoration: none;user-select: none;white-space: nowrap;}\n.button--variant" + shadowSelector + " {--dark-1: 5%;--dark-2: 15%;background-color: hsl(\n    var(--color-bg-h),\n    var(--color-bg-s),\n    var(--color-bg-l)\n  );border: 1px solid hsl(var(--color-bg-h), var(--color-bg-s), var(--color-bg-l));box-shadow: 0 1px 0\n    hsl(\n      var(--color-bg-h),\n      var(--color-bg-s),\n      calc(var(--color-bg-l) - var(--dark-2))\n    );color: var(--color);}\n.button--variant:hover:not(.button--disabled)" + shadowSelector + ",.button--variant:focus:not(.button--disabled)" + shadowSelector + ",.button--variant:active:not(.button--disabled)" + shadowSelector + " {color: var(--color);}\n.button--variant:hover:not(.button--disabled)" + shadowSelector + ",.button--variant:focus:not(.button--disabled)" + shadowSelector + " {background-color: hsl(\n    var(--color-bg-h),\n    var(--color-bg-s),\n    calc(var(--color-bg-l) - var(--dark-1))\n  );border-color: hsl(\n    var(--color-bg-h),\n    var(--color-bg-s),\n    calc(var(--color-bg-l) - var(--dark-1))\n  );}\n.button--variant:active" + shadowSelector + " {background-color: hsl(\n    var(--color-bg-h),\n    var(--color-bg-s),\n    calc(var(--color-bg-l) - var(--dark-2))\n  );border-color: hsl(\n    var(--color-bg-h),\n    var(--color-bg-s),\n    calc(var(--color-bg-l) - var(--dark-2))\n  );box-shadow: 0 1px 0\n      hsl(\n        var(--color-bg-h),\n        var(--color-bg-s),\n        calc(var(--color-bg-l) - var(--dark-2))\n      ),\n    0 0 4px hsl(var(--color-bg-h), var(--color-bg-s), var(--color-bg-l));}\n.button--disabled" + shadowSelector + " {background: var(--cds-color-fog);border-color: var(--cds-color-fog);box-shadow: 0 1px 0 var(--cds-color-fog);color: var(--cds-color-granite);cursor: not-allowed;pointer-events: none;}\n.button--neutral" + shadowSelector + " {color: var(--cds-color-brand);background-color: var(--cds-color-white);box-shadow: 0px 0px 0px 1px hsla(0, 0%, 0%, 0.05),\n    0 2px 0 hsla(0, 0%, 0%, 0.05);}\n.button--neutral:hover" + shadowSelector + ",.button--neutral:focus" + shadowSelector + " {background-color: var(--cds-color-sand);}\n.button--neutral:active" + shadowSelector + " {background-color: var(--cds-color-fog);color: var(--cds-color-meteorite);}\n.button--variant.button--brand" + shadowSelector + " {--color: var(--cds-color-white);--color-bg-h: var(--cds-color-brand-h);--color-bg-s: var(--cds-color-brand-s);--color-bg-l: var(--cds-color-brand-l);}\n.button--variant.button--success" + shadowSelector + " {--color: var(--cds-color-white);--color-bg-h: var(--cds-color-success-h);--color-bg-s: var(--cds-color-success-s);--color-bg-l: var(--cds-color-success-l);}\n.button--variant.button--destructive" + shadowSelector + " {--color: var(--cds-color-white);--color-bg-h: var(--cds-color-destructive-h);--color-bg-s: var(--cds-color-destructive-s);--color-bg-l: var(--cds-color-destructive-l);}\n";
}
var _implicitStylesheets = [stylesheet0, stylesheet$1];

function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    s: api_slot,
    h: api_element
  } = $api;
  return [api_element("button", {
    className: $cmp.className,
    attrs: {
      "type": $cmp.type
    },
    props: {
      "disabled": $cmp.disabled
    },
    key: 1
  }, [api_slot("", {
    key: 0
  }, [], $slotset)])];
}

var _tmpl = registerTemplate(tmpl);
tmpl.slots = [""];
tmpl.stylesheets = [];

if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
tmpl.stylesheetTokens = {
  hostAttribute: "cds-button_button-host",
  shadowAttribute: "cds-button_button"
};

var Button = registerComponent(registerDecorators(class extends BaseLightningElement {
  constructor(...args) {
    super(...args);
    this.disabled = null;
    this.type = null;
    this.variant = "neutral";
  }

  get className() {
    return [createVariantClassName(this.variant), this.disabled !== null && this.disabled !== false ? "button--disabled" : false].filter(Boolean).join(" ");
  }

  renderedCallback() {
    reflectAttributes(this);
  }

}, {
  publicProps: {
    disabled: {
      config: 0
    },
    type: {
      config: 0
    },
    variant: {
      config: 0
    }
  }
}), {
  tmpl: _tmpl
});
function createVariantClassName(variant) {
  return `button button--${variant} ${variant !== "neutral" ? "button--variant" : ""}`;
}
function reflectAttributes(element) {
  let {
    host
  } = element.template;
  let button = element.template.querySelector(".button");

  for (let attr of Array.from(host.attributes)) {
    if (/^class|^data|host]/.test(attr.name)) continue; // @ts-ignore

    if (typeof element[attr.name] === "undefined") host.removeAttribute(attr.name);
    button.setAttribute(attr.name, attr.value);
  }
}

customElements.define("cds-button", buildCustomElementConstructor(Button));

function stylesheet$2(hostSelector, shadowSelector, nativeShadow) {
  return "\n" + (nativeShadow ? (":host {--cds-color-architect-light-h: 252;--cds-color-architect-light-s: 100%;--cds-color-architect-light-l: 99%;--cds-color-architect-light: hsl(\n    var(--cds-color-architect-light-h),\n    var(--cds-color-architect-light-s),\n    var(--cds-color-architect-light-l)\n  );--cds-color-architect-dark-h: 180;--cds-color-architect-dark-s: 100%;--cds-color-architect-dark-l: 16%;--cds-color-architect-dark: hsl(\n    var(--cds-color-architect-dark-h),\n    var(--cds-color-architect-dark-s),\n    var(--cds-color-architect-dark-l)\n  );--cds-color-commerce-dark-h: 115;--cds-color-commerce-dark-s: 27%;--cds-color-commerce-dark-l: 32%;--cds-color-commerce-dark: hsl(\n    var(--cds-color-commerce-dark-h),\n    var(--cds-color-commerce-dark-s),\n    var(--cds-color-commerce-dark-l)\n  );--cds-color-commerce-light-h: 105;--cds-color-commerce-light-s: 25%;--cds-color-commerce-light-l: 97%;--cds-color-commerce-light: hsl(\n    var(--cds-color-commerce-light-h),\n    var(--cds-color-commerce-light-s),\n    var(--cds-color-commerce-light-l)\n  );--cds-color-developer-dark-h: 226;--cds-color-developer-dark-s: 98%;--cds-color-developer-dark-l: 21%;--cds-color-developer-dark: hsl(\n    var(--cds-color-developer-dark-h),\n    var(--cds-color-developer-dark-s),\n    var(--cds-color-developer-dark-l)\n  );--cds-color-developer-light-h: 210;--cds-color-developer-light-s: 50%;--cds-color-developer-light-l: 96%;--cds-color-developer-light: hsl(\n    var(--cds-color-developer-light-h),\n    var(--cds-color-developer-light-s),\n    var(--cds-color-developer-light-l)\n  );--cds-color-trailblazer-dark-h: 64;--cds-color-trailblazer-dark-s: 44%;--cds-color-trailblazer-dark-l: 34%;--cds-color-trailblazer-dark: hsl(\n    var(--cds-color-trailblazer-dark-h),\n    var(--cds-color-trailblazer-dark-s),\n    var(--cds-color-trailblazer-dark-l)\n  );--cds-color-trailblazer-light-h: 45;--cds-color-trailblazer-light-s: 22%;--cds-color-trailblazer-light-l: 93%;--cds-color-trailblazer-light: hsl(\n    var(--cds-color-trailblazer-light-h),\n    var(--cds-color-trailblazer-light-s),\n    var(--cds-color-trailblazer-light-l)\n  );--cds-color-admin-dark-h: 90;--cds-color-admin-dark-s: 57%;--cds-color-admin-dark-l: 32%;--cds-color-admin-dark: hsl(\n    var(--cds-color-admin-dark-h),\n    var(--cds-color-admin-dark-s),\n    var(--cds-color-admin-dark-l)\n  );--cds-color-admin-light-h: 185;--cds-color-admin-light-s: 58%;--cds-color-admin-light-l: 96%;--cds-color-admin-light: hsl(\n    var(--cds-color-admin-light-h),\n    var(--cds-color-admin-light-s),\n    var(--cds-color-admin-light-l)\n  );--cds-color-starter-dark-h: 196;--cds-color-starter-dark-s: 72%;--cds-color-starter-dark-l: 31%;--cds-color-starter-dark: hsl(\n    var(--cds-color-starter-dark-h),\n    var(--cds-color-starter-dark-s),\n    var(--cds-color-starter-dark-l)\n  );--cds-color-starter-light-h: 192;--cds-color-starter-light-s: 56%;--cds-color-starter-light-l: 96%;--cds-color-starter-light: hsl(\n    var(--cds-color-starter-light-h),\n    var(--cds-color-starter-light-s),\n    var(--cds-color-starter-light-l)\n  );--cds-color-salesforce-dark-h: 194;--cds-color-salesforce-dark-s: 100%;--cds-color-salesforce-dark-l: 15%;--cds-color-salesforce-dark: hsl(\n    var(--cds-color-salesforce-dark-h),\n    var(--cds-color-salesforce-dark-s),\n    var(--cds-color-salesforce-dark-l)\n  );--cds-color-salesforce-light-h: 196;--cds-color-salesforce-light-s: 100%;--cds-color-salesforce-light-l: 98%;--cds-color-salesforce-light: hsl(\n    var(--cds-color-salesforce-light-h),\n    var(--cds-color-salesforce-light-s),\n    var(--cds-color-salesforce-light-l)\n  );--cds-color-azure-h: 220;--cds-color-azure-s: 53%;--cds-color-azure-l: 45%;--cds-color-azure: hsl(\n    var(--cds-color-azure-h),\n    var(--cds-color-azure-s),\n    var(--cds-color-azure-l)\n  );--cds-color-black-h: 0;--cds-color-black-s: 0%;--cds-color-black-l: 12%;--cds-color-black: hsl(\n    var(--cds-color-black-h),\n    var(--cds-color-black-s),\n    var(--cds-color-black-l)\n  );--cds-color-calypso-h: 198;--cds-color-calypso-s: 54%;--cds-color-calypso-l: 36%;--cds-color-calypso: hsl(\n    var(--cds-color-calypso-h),\n    var(--cds-color-calypso-s),\n    var(--cds-color-calypso-l)\n  );--cds-color-evergreen-h: 153;--cds-color-evergreen-s: 94%;--cds-color-evergreen-l: 26%;--cds-color-evergreen: hsl(\n    var(--cds-color-evergreen-h),\n    var(--cds-color-evergreen-s),\n    var(--cds-color-evergreen-l)\n  );--cds-color-fire-h: 21;--cds-color-fire-s: 97%;--cds-color-fire-l: 52%;--cds-color-fire: hsl(\n    var(--cds-color-fire-h),\n    var(--cds-color-fire-s),\n    var(--cds-color-fire-l)\n  );--cds-color-fog-h: 0;--cds-color-fog-s: 0%;--cds-color-fog-l: 89%;--cds-color-fog: hsl(\n    var(--cds-color-fog-h),\n    var(--cds-color-fog-s),\n    var(--cds-color-fog-l)\n  );--cds-color-granite-h: 0;--cds-color-granite-s: 0%;--cds-color-granite-l: 68%;--cds-color-granite: hsl(\n    var(--cds-color-granite-h),\n    var(--cds-color-granite-s),\n    var(--cds-color-granite-l)\n  );--cds-color-ice-h: 216;--cds-color-ice-s: 23%;--cds-color-ice-l: 74%;--cds-color-ice: hsl(\n    var(--cds-color-ice-h),\n    var(--cds-color-ice-s),\n    var(--cds-color-ice-l)\n  );--cds-color-lochinvar-h: 176;--cds-color-lochinvar-s: 54%;--cds-color-lochinvar-l: 36%;--cds-color-lochinvar: hsl(\n    var(--cds-color-lochinvar-h),\n    var(--cds-color-lochinvar-s),\n    var(--cds-color-lochinvar-l)\n  );--cds-color-meteorite-h: 0;--cds-color-meteorite-s: 0%;--cds-color-meteorite-l: 35%;--cds-color-meteorite: hsl(\n    var(--cds-color-meteorite-h),\n    var(--cds-color-meteorite-s),\n    var(--cds-color-meteorite-l)\n  );--cds-color-midnight-h: 216;--cds-color-midnight-s: 61%;--cds-color-midnight-l: 22%;--cds-color-midnight: hsl(\n    var(--cds-color-midnight-h),\n    var(--cds-color-midnight-s),\n    var(--cds-color-midnight-l)\n  );--cds-color-ocean-h: 208;--cds-color-ocean-s: 100%;--cds-color-ocean-l: 41%;--cds-color-ocean: hsl(\n    var(--cds-color-ocean-h),\n    var(--cds-color-ocean-s),\n    var(--cds-color-ocean-l)\n  );--cds-color-ruby-h: 2;--cds-color-ruby-s: 58%;--cds-color-ruby-l: 48%;--cds-color-ruby: hsl(\n    var(--cds-color-ruby-h),\n    var(--cds-color-ruby-s),\n    var(--cds-color-ruby-l)\n  );--cds-color-sand-h: 0;--cds-color-sand-s: 0%;--cds-color-sand-l: 96%;--cds-color-sand: hsl(\n    var(--cds-color-sand-h),\n    var(--cds-color-sand-s),\n    var(--cds-color-sand-l)\n  );--cds-color-sunshine-h: 39;--cds-color-sunshine-s: 98%;--cds-color-sunshine-l: 58%;--cds-color-sunshine: hsl(\n    var(--cds-color-sunshine-h),\n    var(--cds-color-sunshine-s),\n    var(--cds-color-sunshine-l)\n  );--cds-color-white-h: 0;--cds-color-white-s: 0%;--cds-color-white-l: 100%;--cds-color-white: hsl(\n    var(--cds-color-white-h),\n    var(--cds-color-white-s),\n    var(--cds-color-white-l)\n  );--cds-color-theme-dark-h: 216;--cds-color-theme-dark-s: 61%;--cds-color-theme-dark-l: 22%;--cds-color-theme-dark: hsl(\n    var(--cds-color-theme-dark-h),\n    var(--cds-color-theme-dark-s),\n    var(--cds-color-theme-dark-l)\n  );--cds-color-theme-light-h: 0;--cds-color-theme-light-s: 0%;--cds-color-theme-light-l: 96%;--cds-color-theme-light: hsl(\n    var(--cds-color-theme-light-h),\n    var(--cds-color-theme-light-s),\n    var(--cds-color-theme-light-l)\n  );--cds-color-brand-h: 208;--cds-color-brand-s: 100%;--cds-color-brand-l: 41%;--cds-color-brand: hsl(\n    var(--cds-color-brand-h),\n    var(--cds-color-brand-s),\n    var(--cds-color-brand-l)\n  );--cds-color-success-h: 153;--cds-color-success-s: 94%;--cds-color-success-l: 26%;--cds-color-success: hsl(\n    var(--cds-color-success-h),\n    var(--cds-color-success-s),\n    var(--cds-color-success-l)\n  );--cds-color-destructive-h: 2;--cds-color-destructive-s: 58%;--cds-color-destructive-l: 48%;--cds-color-destructive: hsl(\n    var(--cds-color-destructive-h),\n    var(--cds-color-destructive-s),\n    var(--cds-color-destructive-l)\n  );--cds-color-important-h: 21;--cds-color-important-s: 97%;--cds-color-important-l: 52%;--cds-color-important: hsl(\n    var(--cds-color-important-h),\n    var(--cds-color-important-s),\n    var(--cds-color-important-l)\n  );--cds-font-size-xs: 12px;--cds-font-size-sm: 14px;--cds-font-size-md: 16px;--cds-font-size-lg: 18px;--cds-font-size-xl: 20px;--cds-font-size-2xl: 24px;--cds-font-size-3xl: 28px;--cds-font-size-4xl: 32px;--cds-font-size-5xl: 36px;--cds-font-size-6xl: 40px;--cds-font-size-7xl: 44px;--cds-font-size-8xl: 48px;--cds-radius-none: 0px;--cds-radius-sm: 2px;--cds-radius-md: 4px;--cds-radius-lg: 8px;--cds-radius-xl: 12px;--cds-radius-full: 15984px;--cds-shadow-xs: 0 0 0 1px rgba(0, 0, 0, 0.04);--cds-shadow-sm: 0 1px 3px 1px rgba(0, 0, 0, 0.06);--cds-shadow-md: 0 3px 7px 1px rgba(0, 0, 0, 0.08);--cds-shadow-lg: 0 4px 14px 1px rgba(0, 0, 0, 0.1);--cds-spacing-0: 0px;--cds-spacing-1: 4px;--cds-spacing-2: 8px;--cds-spacing-3: 12px;--cds-spacing-4: 16px;--cds-spacing-5: 20px;--cds-spacing-6: 24px;--cds-spacing-8: 32px;--cds-spacing-10: 40px;--cds-spacing-12: 48px;--cds-spacing-16: 64px;--cds-spacing-20: 80px;--cds-spacing-24: 96px;--cds-spacing-32: 128px;--cds-spacing-40: 160px;--cds-spacing-48: 192px;--cds-spacing-px: 16px;--cds-line-height-none: 16px;--cds-line-height-tight: 18px;--cds-line-height-snug: 20.4px;--cds-line-height-normal: 24px;--cds-line-height-relaxed: 26px;--cds-line-height-loose: 32px;}") : (hostSelector + " {--cds-color-architect-light-h: 252;--cds-color-architect-light-s: 100%;--cds-color-architect-light-l: 99%;--cds-color-architect-light: hsl(\n    var(--cds-color-architect-light-h),\n    var(--cds-color-architect-light-s),\n    var(--cds-color-architect-light-l)\n  );--cds-color-architect-dark-h: 180;--cds-color-architect-dark-s: 100%;--cds-color-architect-dark-l: 16%;--cds-color-architect-dark: hsl(\n    var(--cds-color-architect-dark-h),\n    var(--cds-color-architect-dark-s),\n    var(--cds-color-architect-dark-l)\n  );--cds-color-commerce-dark-h: 115;--cds-color-commerce-dark-s: 27%;--cds-color-commerce-dark-l: 32%;--cds-color-commerce-dark: hsl(\n    var(--cds-color-commerce-dark-h),\n    var(--cds-color-commerce-dark-s),\n    var(--cds-color-commerce-dark-l)\n  );--cds-color-commerce-light-h: 105;--cds-color-commerce-light-s: 25%;--cds-color-commerce-light-l: 97%;--cds-color-commerce-light: hsl(\n    var(--cds-color-commerce-light-h),\n    var(--cds-color-commerce-light-s),\n    var(--cds-color-commerce-light-l)\n  );--cds-color-developer-dark-h: 226;--cds-color-developer-dark-s: 98%;--cds-color-developer-dark-l: 21%;--cds-color-developer-dark: hsl(\n    var(--cds-color-developer-dark-h),\n    var(--cds-color-developer-dark-s),\n    var(--cds-color-developer-dark-l)\n  );--cds-color-developer-light-h: 210;--cds-color-developer-light-s: 50%;--cds-color-developer-light-l: 96%;--cds-color-developer-light: hsl(\n    var(--cds-color-developer-light-h),\n    var(--cds-color-developer-light-s),\n    var(--cds-color-developer-light-l)\n  );--cds-color-trailblazer-dark-h: 64;--cds-color-trailblazer-dark-s: 44%;--cds-color-trailblazer-dark-l: 34%;--cds-color-trailblazer-dark: hsl(\n    var(--cds-color-trailblazer-dark-h),\n    var(--cds-color-trailblazer-dark-s),\n    var(--cds-color-trailblazer-dark-l)\n  );--cds-color-trailblazer-light-h: 45;--cds-color-trailblazer-light-s: 22%;--cds-color-trailblazer-light-l: 93%;--cds-color-trailblazer-light: hsl(\n    var(--cds-color-trailblazer-light-h),\n    var(--cds-color-trailblazer-light-s),\n    var(--cds-color-trailblazer-light-l)\n  );--cds-color-admin-dark-h: 90;--cds-color-admin-dark-s: 57%;--cds-color-admin-dark-l: 32%;--cds-color-admin-dark: hsl(\n    var(--cds-color-admin-dark-h),\n    var(--cds-color-admin-dark-s),\n    var(--cds-color-admin-dark-l)\n  );--cds-color-admin-light-h: 185;--cds-color-admin-light-s: 58%;--cds-color-admin-light-l: 96%;--cds-color-admin-light: hsl(\n    var(--cds-color-admin-light-h),\n    var(--cds-color-admin-light-s),\n    var(--cds-color-admin-light-l)\n  );--cds-color-starter-dark-h: 196;--cds-color-starter-dark-s: 72%;--cds-color-starter-dark-l: 31%;--cds-color-starter-dark: hsl(\n    var(--cds-color-starter-dark-h),\n    var(--cds-color-starter-dark-s),\n    var(--cds-color-starter-dark-l)\n  );--cds-color-starter-light-h: 192;--cds-color-starter-light-s: 56%;--cds-color-starter-light-l: 96%;--cds-color-starter-light: hsl(\n    var(--cds-color-starter-light-h),\n    var(--cds-color-starter-light-s),\n    var(--cds-color-starter-light-l)\n  );--cds-color-salesforce-dark-h: 194;--cds-color-salesforce-dark-s: 100%;--cds-color-salesforce-dark-l: 15%;--cds-color-salesforce-dark: hsl(\n    var(--cds-color-salesforce-dark-h),\n    var(--cds-color-salesforce-dark-s),\n    var(--cds-color-salesforce-dark-l)\n  );--cds-color-salesforce-light-h: 196;--cds-color-salesforce-light-s: 100%;--cds-color-salesforce-light-l: 98%;--cds-color-salesforce-light: hsl(\n    var(--cds-color-salesforce-light-h),\n    var(--cds-color-salesforce-light-s),\n    var(--cds-color-salesforce-light-l)\n  );--cds-color-azure-h: 220;--cds-color-azure-s: 53%;--cds-color-azure-l: 45%;--cds-color-azure: hsl(\n    var(--cds-color-azure-h),\n    var(--cds-color-azure-s),\n    var(--cds-color-azure-l)\n  );--cds-color-black-h: 0;--cds-color-black-s: 0%;--cds-color-black-l: 12%;--cds-color-black: hsl(\n    var(--cds-color-black-h),\n    var(--cds-color-black-s),\n    var(--cds-color-black-l)\n  );--cds-color-calypso-h: 198;--cds-color-calypso-s: 54%;--cds-color-calypso-l: 36%;--cds-color-calypso: hsl(\n    var(--cds-color-calypso-h),\n    var(--cds-color-calypso-s),\n    var(--cds-color-calypso-l)\n  );--cds-color-evergreen-h: 153;--cds-color-evergreen-s: 94%;--cds-color-evergreen-l: 26%;--cds-color-evergreen: hsl(\n    var(--cds-color-evergreen-h),\n    var(--cds-color-evergreen-s),\n    var(--cds-color-evergreen-l)\n  );--cds-color-fire-h: 21;--cds-color-fire-s: 97%;--cds-color-fire-l: 52%;--cds-color-fire: hsl(\n    var(--cds-color-fire-h),\n    var(--cds-color-fire-s),\n    var(--cds-color-fire-l)\n  );--cds-color-fog-h: 0;--cds-color-fog-s: 0%;--cds-color-fog-l: 89%;--cds-color-fog: hsl(\n    var(--cds-color-fog-h),\n    var(--cds-color-fog-s),\n    var(--cds-color-fog-l)\n  );--cds-color-granite-h: 0;--cds-color-granite-s: 0%;--cds-color-granite-l: 68%;--cds-color-granite: hsl(\n    var(--cds-color-granite-h),\n    var(--cds-color-granite-s),\n    var(--cds-color-granite-l)\n  );--cds-color-ice-h: 216;--cds-color-ice-s: 23%;--cds-color-ice-l: 74%;--cds-color-ice: hsl(\n    var(--cds-color-ice-h),\n    var(--cds-color-ice-s),\n    var(--cds-color-ice-l)\n  );--cds-color-lochinvar-h: 176;--cds-color-lochinvar-s: 54%;--cds-color-lochinvar-l: 36%;--cds-color-lochinvar: hsl(\n    var(--cds-color-lochinvar-h),\n    var(--cds-color-lochinvar-s),\n    var(--cds-color-lochinvar-l)\n  );--cds-color-meteorite-h: 0;--cds-color-meteorite-s: 0%;--cds-color-meteorite-l: 35%;--cds-color-meteorite: hsl(\n    var(--cds-color-meteorite-h),\n    var(--cds-color-meteorite-s),\n    var(--cds-color-meteorite-l)\n  );--cds-color-midnight-h: 216;--cds-color-midnight-s: 61%;--cds-color-midnight-l: 22%;--cds-color-midnight: hsl(\n    var(--cds-color-midnight-h),\n    var(--cds-color-midnight-s),\n    var(--cds-color-midnight-l)\n  );--cds-color-ocean-h: 208;--cds-color-ocean-s: 100%;--cds-color-ocean-l: 41%;--cds-color-ocean: hsl(\n    var(--cds-color-ocean-h),\n    var(--cds-color-ocean-s),\n    var(--cds-color-ocean-l)\n  );--cds-color-ruby-h: 2;--cds-color-ruby-s: 58%;--cds-color-ruby-l: 48%;--cds-color-ruby: hsl(\n    var(--cds-color-ruby-h),\n    var(--cds-color-ruby-s),\n    var(--cds-color-ruby-l)\n  );--cds-color-sand-h: 0;--cds-color-sand-s: 0%;--cds-color-sand-l: 96%;--cds-color-sand: hsl(\n    var(--cds-color-sand-h),\n    var(--cds-color-sand-s),\n    var(--cds-color-sand-l)\n  );--cds-color-sunshine-h: 39;--cds-color-sunshine-s: 98%;--cds-color-sunshine-l: 58%;--cds-color-sunshine: hsl(\n    var(--cds-color-sunshine-h),\n    var(--cds-color-sunshine-s),\n    var(--cds-color-sunshine-l)\n  );--cds-color-white-h: 0;--cds-color-white-s: 0%;--cds-color-white-l: 100%;--cds-color-white: hsl(\n    var(--cds-color-white-h),\n    var(--cds-color-white-s),\n    var(--cds-color-white-l)\n  );--cds-color-theme-dark-h: 216;--cds-color-theme-dark-s: 61%;--cds-color-theme-dark-l: 22%;--cds-color-theme-dark: hsl(\n    var(--cds-color-theme-dark-h),\n    var(--cds-color-theme-dark-s),\n    var(--cds-color-theme-dark-l)\n  );--cds-color-theme-light-h: 0;--cds-color-theme-light-s: 0%;--cds-color-theme-light-l: 96%;--cds-color-theme-light: hsl(\n    var(--cds-color-theme-light-h),\n    var(--cds-color-theme-light-s),\n    var(--cds-color-theme-light-l)\n  );--cds-color-brand-h: 208;--cds-color-brand-s: 100%;--cds-color-brand-l: 41%;--cds-color-brand: hsl(\n    var(--cds-color-brand-h),\n    var(--cds-color-brand-s),\n    var(--cds-color-brand-l)\n  );--cds-color-success-h: 153;--cds-color-success-s: 94%;--cds-color-success-l: 26%;--cds-color-success: hsl(\n    var(--cds-color-success-h),\n    var(--cds-color-success-s),\n    var(--cds-color-success-l)\n  );--cds-color-destructive-h: 2;--cds-color-destructive-s: 58%;--cds-color-destructive-l: 48%;--cds-color-destructive: hsl(\n    var(--cds-color-destructive-h),\n    var(--cds-color-destructive-s),\n    var(--cds-color-destructive-l)\n  );--cds-color-important-h: 21;--cds-color-important-s: 97%;--cds-color-important-l: 52%;--cds-color-important: hsl(\n    var(--cds-color-important-h),\n    var(--cds-color-important-s),\n    var(--cds-color-important-l)\n  );--cds-font-size-xs: 12px;--cds-font-size-sm: 14px;--cds-font-size-md: 16px;--cds-font-size-lg: 18px;--cds-font-size-xl: 20px;--cds-font-size-2xl: 24px;--cds-font-size-3xl: 28px;--cds-font-size-4xl: 32px;--cds-font-size-5xl: 36px;--cds-font-size-6xl: 40px;--cds-font-size-7xl: 44px;--cds-font-size-8xl: 48px;--cds-radius-none: 0px;--cds-radius-sm: 2px;--cds-radius-md: 4px;--cds-radius-lg: 8px;--cds-radius-xl: 12px;--cds-radius-full: 15984px;--cds-shadow-xs: 0 0 0 1px rgba(0, 0, 0, 0.04);--cds-shadow-sm: 0 1px 3px 1px rgba(0, 0, 0, 0.06);--cds-shadow-md: 0 3px 7px 1px rgba(0, 0, 0, 0.08);--cds-shadow-lg: 0 4px 14px 1px rgba(0, 0, 0, 0.1);--cds-spacing-0: 0px;--cds-spacing-1: 4px;--cds-spacing-2: 8px;--cds-spacing-3: 12px;--cds-spacing-4: 16px;--cds-spacing-5: 20px;--cds-spacing-6: 24px;--cds-spacing-8: 32px;--cds-spacing-10: 40px;--cds-spacing-12: 48px;--cds-spacing-16: 64px;--cds-spacing-20: 80px;--cds-spacing-24: 96px;--cds-spacing-32: 128px;--cds-spacing-40: 160px;--cds-spacing-48: 192px;--cds-spacing-px: 16px;--cds-line-height-none: 16px;--cds-line-height-tight: 18px;--cds-line-height-snug: 20.4px;--cds-line-height-normal: 24px;--cds-line-height-relaxed: 26px;--cds-line-height-loose: 32px;}")) + "\n\n" + (nativeShadow ? (":host {font-family: \"Salesforce Sans\";font-size: var(--cds-font-md);}") : (hostSelector + " {font-family: \"Salesforce Sans\";font-size: var(--cds-font-md);}")) + "\n";
}
var _implicitStylesheets$1 = [stylesheet$2];

function tmpl$1($api, $cmp, $slotset, $ctx) {
  const {
    s: api_slot
  } = $api;
  return [api_slot("", {
    key: 0
  }, [], $slotset)];
}

var _tmpl$1 = registerTemplate(tmpl$1);
tmpl$1.slots = [""];
tmpl$1.stylesheets = [];

if (_implicitStylesheets$1) {
  tmpl$1.stylesheets.push.apply(tmpl$1.stylesheets, _implicitStylesheets$1);
}
tmpl$1.stylesheetTokens = {
  hostAttribute: "cds-themeProvider_themeProvider-host",
  shadowAttribute: "cds-themeProvider_themeProvider"
};

const ASSETS_URL =  String(import.meta.url).replace(/\/modules.*/, "");

var ThemeProvider = registerComponent(registerDecorators(class extends BaseLightningElement {
  constructor(...args) {
    super(...args);
    this.fonts = false;
  }

  connectedCallback() {
    if (this.fonts) appendStyleSheet(`${ASSETS_URL}/css/cds.css`);
  }

}, {
  publicProps: {
    fonts: {
      config: 0
    }
  }
}), {
  tmpl: _tmpl$1
});

function appendStyleSheet(href) {
  let exists = Array.from(document.querySelectorAll("link")).some(n => n.href === href);
  if (exists) return;
  document.head.appendChild((() => {
    let element = document.createElement("link");
    element.href = href;
    element.rel = "stylesheet";
    element.type = "text/css";
    return element;
  })());
}

customElements.define("cds-theme-provider", buildCustomElementConstructor(ThemeProvider));

export { Button as B, ThemeProvider as T };
//# sourceMappingURL=cds-9f29552a.chunk.js.map
