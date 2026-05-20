import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Dokumentasi Eznom',
  description: 'Panduan lengkap penggunaan platform manajemen ISP Eznom',
  lang: 'id-ID',

  themeConfig: {
    nav: [
      { text: 'Panduan', link: '/panduan/mulai' },
      { text: 'FAQ', link: '/faq' },
    ],

    sidebar: [
      {
        text: 'Memulai',
        items: [
          { text: 'Pendahuluan', link: '/panduan/mulai' },
          { text: 'Tambah Router', link: '/panduan/router' },
        ],
      },
      {
        text: 'PPPoE',
        items: [
          { text: 'Profil Layanan', link: '/panduan/pppoe/profil' },
          { text: 'Kelola Pelanggan', link: '/panduan/pppoe/pelanggan' },
          { text: 'Tagihan & Pembayaran', link: '/panduan/pppoe/tagihan' },
          { text: 'Kontrak Digital', link: '/panduan/pppoe/kontrak' },
          { text: 'Peta Pelanggan', link: '/panduan/pppoe/peta' },
        ],
      },
      {
        text: 'Hotspot',
        items: [
          { text: 'Profil Hotspot', link: '/panduan/hotspot/profil' },
          { text: 'Voucher', link: '/panduan/hotspot/voucher' },
        ],
      },
      {
        text: 'Pengaturan',
        items: [
          { text: 'Notifikasi Otomatis', link: '/panduan/notifikasi' },
          { text: 'Halaman Isolir', link: '/panduan/isolir' },
          { text: 'Profil Bisnis & Akun', link: '/panduan/pengaturan' },
        ],
      },
      {
        text: 'Lainnya',
        items: [
          { text: 'FAQ', link: '/faq' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eznom' },
    ],

    footer: {
      message: 'Dokumentasi Eznom',
      copyright: 'Copyright © 2025 Eznom',
    },

    search: {
      provider: 'local',
    },
  },
})
