1. Buat project baru

mkdir eznom-docs && cd eznom-docs
npm init -y
npm install -D vitepress
2. Inisialisasi VitePress

npx vitepress init
Jawab pertanyaannya:


┌ Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs                        ← ketik: ./docs
│
◇  Site title:
│  Eznom Docs                    ← atau nama lain
│
◇  Site description:
│  Dokumentasi platform eznom
│
◇  Theme:
│  Default Theme                 ← pilih ini
│
◇  Use TypeScript for config file?
│  No
3. Jalankan dev server

npm run docs:dev
Buka http://localhost:5173 — docs langsung tampil.

Struktur folder yang terbentuk

eznom-docs/
├── docs/
│   ├── .vitepress/
│   │   └── config.js       ← konfigurasi utama (nav, sidebar, dll)
│   ├── index.md            ← halaman landing docs
│   └── api-examples.md
├── package.json
4. Konfigurasi dasar config.js

// docs/.vitepress/config.js
export default {
  title: 'Eznom Docs',
  description: 'Dokumentasi platform manajemen jaringan RT/RW net',
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
          { text: 'Konfigurasi Router', link: '/panduan/router' },
          { text: 'Kelola Pelanggan', link: '/panduan/pelanggan' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/...' }
    ],
  },
}
5. Deploy ke Cloudflare Pages (gratis)
Push folder eznom-docs ke GitHub repo baru
Buka Cloudflare Pages → Create a project
Connect ke repo GitHub
Setting build:
Build command: npm run docs:build
Output directory: docs/.vitepress/dist
Deploy — otomatis re-deploy setiap kali push ke main
Setelah setup selesai, tambah konten cukup dengan buat file .md baru di folder docs/. Mau langsung mulai atau ada bagian yang ingin disesuaikan dulu?