import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Dokumentasi eznom',
  description: 'Panduan lengkap penggunaan platform manajemen ISP eznom',
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
        ],
      },
      {
        text: 'Router',
        items: [
          { text: 'Tambah & Konfigurasi', link: '/panduan/router' },
          { text: 'Remote Perangkat', link: '/panduan/remote-perangkat' },
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
          { text: 'Pengaturan Pembayaran', link: '/panduan/pembayaran' },
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
      { icon: 'github', link: 'https://github.com/syahrulfadli' },
    ],

    footer: {
      message: 'Dokumentasi eznom',
      copyright: 'Copyright © 2026 eznom',
    },

    search: {
      provider: 'local',
    },
  },
})
