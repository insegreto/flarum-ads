module.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e){t.exports=flarum.core.compat.app},,,,function(t,e,n){"use strict";function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return s}))},function(t,e){t.exports=flarum.core.compat["utils/withAttr"]},function(t,e){t.exports=flarum.core.compat["utils/Stream"]},function(t,e){t.exports=flarum.core.compat["components/Switch"]},,,function(t,e){t.exports=flarum.core.compat["components/ExtensionPage"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["utils/saveSettings"]},,function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},,function(t,e,n){"use strict";n.r(e);var s=n(0),a=n.n(s),r=n(4),o=n(10),i=n.n(o),l=(n(14),n(11)),u=n.n(l),p=n(12),d=n.n(p),c=n(6),f=n.n(c),h=n(7),g=n.n(h),v=n(5),b=n.n(v),x=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e);var s=app.data.settings;this.values={},this.settingsPrefix="flagrow.ads",this.positions=["under-header","between-posts","under-nav-items"],this.properties=["adsense-client-id"],this.settings=["adsense-enabled","start-from-post","between-n-posts","header-only-frontpage"],this.positions.forEach((function(t){return n.values[t]=f()(s[n.addPrefix(t)])})),this.properties.forEach((function(t){return n.values[t]=f()(s[n.addPrefix(t)])})),this.settings.forEach((function(t){return n.values[t]=f()(Number(s[n.addPrefix(t)]))}))},n.content=function(){var t=this;return[m("div",{className:"AdsPage"},[m("div",{className:"container"},[m("form",{onsubmit:this.onsubmit.bind(this)},m("h3",app.translator.trans("flagrow-ads.admin.settings.adsense-title")),m("fieldset",{className:"AdsPage-settings"},[g.a.component({state:this.values["adsense-enabled"]()||!1,onchange:this.values["adsense-enabled"]},app.translator.trans("flagrow-ads.admin.settings.adsense-enable"))]),this.values["adsense-enabled"]()>0?[m("fieldset",{className:"AdsPage-settings"},[m("label",app.translator.trans("flagrow-ads.admin.settings.adsense-client-id")),m("input.FormControl",{placeholder:"pub-XXXXXXXXXXXXXXXX",value:this.values["adsense-client-id"]()||"",oninput:b()("value",this.values["adsense-client-id"])})])]:null,m("h3",app.translator.trans("flagrow-ads.admin.settings.position-title")),m("fieldset",{className:"AdsPage-settings"},[m("label",{},app.translator.trans("flagrow-ads.admin.settings.start-from-post")),m("input.FormControl",{type:"number",value:this.values["start-from-post"]()||1,oninput:b()("value",this.values["start-from-post"])})]),m("fieldset",{className:"AdsPage-settings"},[m("label",{},app.translator.trans("flagrow-ads.admin.settings.between-n-posts")),m("input.FormControl",{type:"number",value:this.values["between-n-posts"]()||5,oninput:b()("value",this.values["between-n-posts"])})]),this.positions.map((function(e){return m("fieldset",{className:"AdsPage-"+e},[m("label",{},app.translator.trans("flagrow-ads.admin.positions."+e+".title")),m("textarea.FormControl",{value:t.values[e]()||null,placeholder:app.translator.trans("flagrow-ads.admin.positions."+e+".placeholder"),oninput:b()("value",t.values[e])})])})),m("fieldset",{className:"AdsPage-settings"},[g.a.component({state:this.values["header-only-frontpage"]()||!1,onchange:this.values["header-only-frontpage"]},app.translator.trans("flagrow-ads.admin.settings.header-only-frontpage"))]),u.a.component({type:"submit",className:"Button Button--primary",disabled:!this.changed()},app.translator.trans("flagrow-ads.admin.buttons.save")))])])]},n.changed=function(){var t=this,e=this.positions.some((function(e){return t.values[e]()!==app.data.settings[t.addPrefix(e)]})),n=this.properties.some((function(e){return t.values[e]()!==app.data.settings[t.addPrefix(e)]})),s=this.settings.some((function(e){return t.values[e]()!==app.data.settings[t.addPrefix(e)]}));return e||s||n},n.onsubmit=function(t){var e=this;if(t.preventDefault(),!this.loading){this.loading=!0,app.alerts.dismiss(this.successAlert);var n={};this.positions.forEach((function(t){return n[e.addPrefix(t)]=e.values[t]()})),this.properties.forEach((function(t){return n[e.addPrefix(t)]=e.values[t]()})),this.settings.forEach((function(t){return n[e.addPrefix(t)]=e.values[t]()})),d()(n).then((function(){app.alerts.show({type:"success"},app.translator.trans("core.admin.settings.saved_message"))})).catch((function(){})).then((function(){e.loading=!1,window.location.reload()}))}},n.addPrefix=function(t){return this.settingsPrefix+"."+t},e}(i.a);a.a.initializers.add("insegreto/ads",(function(){a.a.extensionData.for("insegreto-ads").registerPage(x)}))}]);
//# sourceMappingURL=admin.js.map