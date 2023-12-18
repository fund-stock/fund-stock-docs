import {
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  normalizeClass,
  normalizeStyle,
  openBlock,
  resolveComponent,
  withCtx
} from "./chunk-LZTJCUY2.js";
import "./chunk-F3FYYIAV.js";

// node_modules/.pnpm/vue-google-adsense@2.0.0_vue-scriptx@0.2.5_vue@3.3.11/node_modules/vue-google-adsense/dist/VueGoogleAdsense.esm.min.js
var u = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
var c = { rootClass: { type: String, default: "adswrapper" }, insClass: { type: String, default: "" }, insStyle: { type: String, default: "display:block;" }, dataAdClient: { type: String, default: "" }, dataAdSlot: { type: String, default: "" }, dataAdLayoutKey: { type: String, default: "-fg+5n+6t-e7+r" }, dataAdTest: { type: String, default: "" }, dataAdFormat: { type: String, default: "auto" }, isNonPersonalizedAds: { type: String, default: "no" }, dataFullWidthResponsive: { type: String, default: "no" }, dataAdRegion: { type: String, default: "" }, isNewAdsCode: { type: String, default: "no" } };
var y = { name: "Adsense", props: c, data: function() {
  return { ADS_SCRIPT: u };
} };
var g = ["data-ad-client", "data-ad-slot", "data-ad-test", "data-ad-format", "data-ad-region", "data-full-width-responsive"];
var p = createTextVNode(" (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1; (adsbygoogle = window.adsbygoogle || []).push({}); ");
var A = createTextVNode(" (adsbygoogle = window.adsbygoogle || []).push({}); ");
y.render = function(r, u2, c2, y2, f2, v2) {
  var S2 = resolveComponent("scriptx");
  return openBlock(), createElementBlock("div", { class: normalizeClass(r.rootClass) }, ["yes" === r.isNewAdsCode ? (openBlock(), createBlock(S2, { key: 0, type: "text/javascript", async: "true", src: "".concat(f2.ADS_SCRIPT, "?client=").concat(r.dataAdClient), crossorigin: "anonymous" }, null, 8, ["src"])) : createCommentVNode("v-if", true), "no" === r.isNewAdsCode ? (openBlock(), createBlock(S2, { key: 1, type: "text/javascript", async: "true", src: f2.ADS_SCRIPT }, null, 8, ["src"])) : createCommentVNode("v-if", true), createBaseVNode("ins", { class: normalizeClass([r.insClass, "adsbygoogle"]), style: normalizeStyle(r.insStyle), "data-ad-client": r.dataAdClient, "data-ad-slot": r.dataAdSlot, "data-ad-test": r.dataAdTest, "data-ad-format": r.dataAdFormat, "data-ad-region": r.dataAdRegion, "data-full-width-responsive": "yes" === r.dataFullWidthResponsive }, null, 14, g), "yes" === r.isNonPersonalizedAds ? (openBlock(), createBlock(S2, { key: 2, type: "text/javascript" }, { default: withCtx(function() {
    return [p];
  }), _: 1 })) : createCommentVNode("v-if", true), "no" === r.isNonPersonalizedAds ? (openBlock(), createBlock(S2, { key: 3, type: "text/javascript" }, { default: withCtx(function() {
    return [A];
  }), _: 1 })) : createCommentVNode("v-if", true)], 2);
};
var f = { install: function(a, t) {
  a.component("Adsense", y);
} };
var v = function(a, t) {
  var e = Object(a);
  for (var d in t)
    Object.prototype.hasOwnProperty.call(t, d) && (e[d] = t[d]);
  return e;
};
var S = { name: "InArticleAdsense", props: v(c, { dataAdFormat: { type: String, default: "fluid" } }), data: function() {
  return { ADS_SCRIPT: u };
} };
var w = ["data-ad-format", "data-ad-client", "data-ad-slot", "data-ad-test", "data-ad-region", "data-full-width-responsive"];
var C = createTextVNode(" (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1; (adsbygoogle = window.adsbygoogle || []).push({}); ");
var m = createTextVNode(" (adsbygoogle = window.adsbygoogle || []).push({}); ");
S.render = function(r, u2, c2, y2, g2, p2) {
  var A2 = resolveComponent("scriptx");
  return openBlock(), createElementBlock("div", { class: normalizeClass(r.rootClass) }, ["yes" === r.isNewAdsCode ? (openBlock(), createBlock(A2, { key: 0, type: "text/javascript", async: "true", src: "".concat(g2.ADS_SCRIPT, "?client=").concat(r.dataAdClient), crossorigin: "anonymous" }, null, 8, ["src"])) : createCommentVNode("v-if", true), "no" === r.isNewAdsCode ? (openBlock(), createBlock(A2, { key: 1, type: "text/javascript", async: "true", src: g2.ADS_SCRIPT }, null, 8, ["src"])) : createCommentVNode("v-if", true), createBaseVNode("ins", { class: normalizeClass([r.insClass, "adsbygoogle"]), style: normalizeStyle(r.insStyle), "data-ad-layout": "in-article", "data-ad-format": r.dataAdFormat, "data-ad-client": r.dataAdClient, "data-ad-slot": r.dataAdSlot, "data-ad-test": r.dataAdTest, "data-ad-region": r.dataAdRegion, "data-full-width-responsive": "yes" === r.dataFullWidthResponsive }, null, 14, w), "yes" === r.isNonPersonalizedAds ? (openBlock(), createBlock(A2, { key: 2, type: "text/javascript" }, { default: withCtx(function() {
    return [C];
  }), _: 1 })) : createCommentVNode("v-if", true), "no" === r.isNonPersonalizedAds ? (openBlock(), createBlock(A2, { key: 3, type: "text/javascript" }, { default: withCtx(function() {
    return [m];
  }), _: 1 })) : createCommentVNode("v-if", true)], 2);
};
var b = { install: function(a, t) {
  a.component("InArticleAdsense", S);
} };
var h = { name: "InFeedAdsense", props: v(c, { dataAdFormat: { type: String, default: "fluid" } }), data: function() {
  return { ADS_SCRIPT: u };
} };
var P = ["data-ad-format", "data-ad-layout-key", "data-ad-client", "data-ad-slot", "data-ad-test", "data-ad-region", "data-full-width-responsive"];
var _ = createTextVNode(" (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1; (adsbygoogle = window.adsbygoogle || []).push({}); ");
var N = createTextVNode(" (adsbygoogle = window.adsbygoogle || []).push({}); ");
h.render = function(r, u2, c2, y2, g2, p2) {
  var A2 = resolveComponent("scriptx");
  return openBlock(), createElementBlock("div", { class: normalizeClass(r.rootClass) }, ["yes" === r.isNewAdsCode ? (openBlock(), createBlock(A2, { key: 0, type: "text/javascript", async: "true", src: "".concat(g2.ADS_SCRIPT, "?client=").concat(r.dataAdClient), crossorigin: "anonymous" }, null, 8, ["src"])) : createCommentVNode("v-if", true), "no" === r.isNewAdsCode ? (openBlock(), createBlock(A2, { key: 1, type: "text/javascript", async: "true", src: g2.ADS_SCRIPT }, null, 8, ["src"])) : createCommentVNode("v-if", true), createBaseVNode("ins", { class: normalizeClass([r.insClass, "adsbygoogle"]), style: normalizeStyle(r.insStyle), "data-ad-format": r.dataAdFormat, "data-ad-layout-key": r.dataAdLayoutKey, "data-ad-client": r.dataAdClient, "data-ad-slot": r.dataAdSlot, "data-ad-test": r.dataAdTest, "data-ad-region": r.dataAdRegion, "data-full-width-responsive": "yes" === r.dataFullWidthResponsive }, null, 14, P), "yes" === r.isNonPersonalizedAds ? (openBlock(), createBlock(A2, { key: 2, type: "text/javascript" }, { default: withCtx(function() {
    return [_];
  }), _: 1 })) : createCommentVNode("v-if", true), "no" === r.isNonPersonalizedAds ? (openBlock(), createBlock(A2, { key: 3, type: "text/javascript" }, { default: withCtx(function() {
    return [N];
  }), _: 1 })) : createCommentVNode("v-if", true)], 2);
};
var j = { Adsense: f, InArticleAdsense: b, InFeedAdsense: { install: function(a, t) {
  a.component("InFeedAdsense", h);
} }, AutoAdsense: { install: function(a, t) {
  var e = t.adClient, d = void 0 === e ? "" : e, s = t.isNewAdsCode, n = void 0 !== s && s;
  if (!d)
    return Error('AutoAdsense require "adClient" parameter');
  var o = document.head, i = document.createElement("script");
  i.type = "text/javascript", i.async = true, n ? (i.crossOrigin = "anonymous", i.src = u + "?client=" + d) : i.src = u, i.onload = function() {
    (adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: d, enable_page_level_ads: true });
  }, o.appendChild(i);
} } };
export {
  j as default
};
//# sourceMappingURL=vue-google-adsense.js.map
