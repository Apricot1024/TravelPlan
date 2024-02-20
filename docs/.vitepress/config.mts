import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Travel Plan",
  description: "Info Publish & Update",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '门票情况', link: '/tickets' }
    ],

    sidebar: [
      {
        text: '每日计划',
        items: [
          { text: '20240223', link: '/20240223' },
          { text: '20240224', link: '/20240224' },
          { text: '20240225', link: '/20240225' }
        ]
      },
      {
        text: '备选计划',
        items: [
          { text: '没去的', link: '/noplaces' },
          { text: '没吃的', link: '/nomeals' }
        ]
      },
      {
        text: '门票情况',
        items: [
          { text: '购票进度', link: '/tickets' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
