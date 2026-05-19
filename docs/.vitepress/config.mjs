import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dokumentasi eznom",
  description: "Dokumentasi platform eznom",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Panduan', link: '/panduan/mulai' },
      { text: 'FAQ', link: '/faq' },
    ],

    sidebar: [
      {
        text: 'Memulai',
        items: [
          { text: 'Pendahuluan', link: '/panduan/mulai' },
          { text: 'Konfigurasi Router', link: '/panduan/router' },
          { text: 'Kelola Pelanggan', link: '/panduan/pelanggan' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
