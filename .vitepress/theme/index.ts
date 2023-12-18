// .vitepress/theme/index.js
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import AdComponent from "./AdComponent.vue";

// 引入 谷歌广告组件
import ScriptX from "vue-script-xx";
import Ads from "vue-google-adsense";
// 引入 谷歌广告组件

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "doc-before": () => h(AdComponent),
    });
  },
  // 引入 谷歌广告
  enhanceApp({ app, router, siteData }) {
    app.use(ScriptX);
    app.use(Ads.Adsense);
    app.use(Ads.InArticleAdsense);
    app.use(Ads.InFeedAdsense);
  },
};
