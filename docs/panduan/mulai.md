# Pendahuluan

eznom adalah platform berbasis web untuk operator ISP skala kecil-menengah (RT/RW Net, WISP) yang membantu mengelola:

- **Pelanggan PPPoE** — tambah, edit, isolir, dan pantau status koneksi secara real-time
- **Hotspot & Voucher** — buat profil, generate voucher massal, dan rancang kartunya sendiri
- **Tagihan bulanan** — otomatis generate dan terima pembayaran via payment gateway
- **Notifikasi WhatsApp & Email** — pengingat jatuh tempo dikirim otomatis ke pelanggan
- **Notifikasi ke operator** — router mati, pembayaran masuk, dan gangguan massal dikabarkan ke HP Anda
- **Kontrak digital** — pelanggan tanda tangan dari ponsel tanpa perlu temu fisik
- **Halaman publik & calon pelanggan** — etalase paket sekaligus formulir pendaftaran online
- **Reseller hotspot** — portal self-service agar reseller top up dan beli voucher sendiri

---

## Struktur Aplikasi

eznom menggunakan konsep **Router** sebagai unit utama. Setiap router mewakili satu titik jaringan MikroTik Anda. Semua pelanggan, tagihan, hotspot, dan keuangan dikelola di bawah router masing-masing.

```
Akun eznom
├── Pengaturan bisnis (profil, notifikasi, pembayaran, halaman publik)
├── Calon Pelanggan (inbox pendaftaran dari halaman publik)
├── Sub-Pengguna
└── Router A (misal: RT-Blok-Utara)
│   ├── Pelanggan PPPoE  ── Profil Layanan ── Grup Pelanggan
│   ├── Tagihan & Pembayaran
│   ├── Hotspot
│   │   ├── Profil Hotspot
│   │   ├── Voucher & Template Kartu
│   │   └── Reseller
│   ├── Keuangan & Insight Bisnis
│   └── Pengaturan Router (VPN, isolir, portal reseller, backup)
└── Router B (misal: RT-Blok-Selatan)
    └── ...
```

Pengaturan **bisnis** (profil, notifikasi, pembayaran, halaman publik, sub-pengguna) berlaku untuk
seluruh akun. Pengaturan **router** (jatuh tempo, prefix ID, isolir, portal reseller) berlaku hanya
untuk router tersebut.

---

## Login

1. Buka URL aplikasi eznom Anda
2. Masukkan **email** dan **password** akun operator
3. Klik **Masuk**

Setelah login, Anda akan diarahkan ke **Dasbor** yang menampilkan daftar router yang terdaftar.

---

## Langkah Pertama

Ikuti urutan ini untuk memulai menggunakan eznom:

1. [Tambah router →](/panduan/router) — daftarkan router MikroTik Anda dan sambungkan via VPN
2. [Buat profil layanan →](/panduan/pppoe/profil) — definisikan paket internet (kecepatan & harga)
3. [Tambah pelanggan →](/panduan/pppoe/pelanggan) — daftarkan pelanggan PPPoE
4. [Atur notifikasi →](/panduan/notifikasi) — konfigurasi WhatsApp gateway untuk pengingat otomatis
5. [Atur pembayaran →](/panduan/pembayaran) — aktifkan payment gateway dan/atau transfer manual
6. [Aktifkan notifikasi operator →](/panduan/notifikasi-operator) — pasang eznom sebagai aplikasi
   agar peringatan router mati sampai ke HP Anda

---

## Pasang sebagai Aplikasi

Panel eznom bisa dipasang di HP maupun desktop sebagai aplikasi tersendiri, lengkap dengan ikon,
pintasan cepat, dan notifikasi push. Lihat
[Memasang eznom sebagai Aplikasi](/panduan/notifikasi-operator#memasang-eznom-sebagai-aplikasi-pwa).
