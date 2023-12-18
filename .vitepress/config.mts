import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: '/', // 设置站点根路径
  outDir: './docs', // 打包输出目录
  title: "FundStockDocs",
  description: "A FundStockProject Docs",
  head: [
    [
      "script",
      {
        "data-ad-client": "3085911356698359", 
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],
  ],
  themeConfig: {
    logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
  
    sidebar: sidebarGuide(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fund-stock/fund-stock' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    lastUpdated: '最近更新时间 ',
  }
})



function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/markdown/about', activeMatch: '/markdown/' },
    { text: 'Design', link: '/markdown/design' },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/fund-stock/fund-stock/commits/main/'
        }
      ]
    }
  ]
}

/* prettier-ignore */
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '披荆斩棘',
      items: [
        { text: 'Let\'s go', link: '/markdown/index' },
        { text: '第一天', link: '/markdown/day/2023-12-15.md' },
      ]
    }
  ]
}
