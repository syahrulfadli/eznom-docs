import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Dokumentasi eznom',
  description: 'Panduan lengkap penggunaan platform manajemen ISP eznom',
  lang: 'id-ID',

  // Timestamp per halaman diambil dari waktu commit git terakhir file .md-nya,
  // bukan ditulis manual di frontmatter — supaya tidak pernah basi.
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    nav: [
      { text: 'Panduan', link: '/panduan/mulai' },
      { text: 'FAQ', link: '/faq' },
      { text: '🟢 Status', link: 'https://status.noahresourcetech.com', target: '_blank' },
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
          { text: 'Skema Pembayaran', link: '/panduan/pppoe/skema-pembayaran' },
          { text: 'Tagihan & Pembayaran', link: '/panduan/pppoe/tagihan' },
          { text: 'Portal Bayar Pelanggan', link: '/panduan/pppoe/portal-pembayaran' },
          { text: 'Kontrak Digital', link: '/panduan/pppoe/kontrak' },
          { text: 'Peta Pelanggan', link: '/panduan/pppoe/peta' },
          { text: 'Backup & Pindah Pelanggan', link: '/panduan/pppoe/backup-migrasi' },
        ],
      },
      {
        text: 'Hotspot',
        items: [
          { text: 'Profil Hotspot', link: '/panduan/hotspot/profil' },
          { text: 'Voucher', link: '/panduan/hotspot/voucher' },
          { text: 'Template Kartu Voucher', link: '/panduan/hotspot/template-kartu' },
          { text: 'Reseller', link: '/panduan/hotspot/reseller' },
          { text: 'Laporan Voucher', link: '/panduan/hotspot/laporan' },
        ],
      },
      {
        text: 'Penjualan',
        items: [
          { text: 'Calon Pelanggan', link: '/panduan/leads' },
          { text: 'Halaman Publik Bisnis', link: '/panduan/halaman-publik' },
        ],
      },
      {
        text: 'Keuangan',
        items: [
          { text: 'Halaman Keuangan', link: '/panduan/keuangan' },
        ],
      },
      {
        text: 'Pengaturan',
        items: [
          { text: 'Notifikasi ke Pelanggan', link: '/panduan/notifikasi' },
          { text: 'Notifikasi Operator (Push)', link: '/panduan/notifikasi-operator' },
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

    lastUpdated: {
      text: 'Terakhir diperbarui',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short',
        // Ikuti lang situs (id-ID), bukan locale browser pembaca — kalau tidak,
        // pembaca dengan browser berbahasa Inggris melihat "August 7, 2026"
        // di tengah halaman berbahasa Indonesia.
        forceLocale: true,
      },
    },

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
