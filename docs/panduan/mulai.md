# Pendahuluan

eznom adalah platform berbasis web untuk operator ISP skala kecil-menengah (RT/RW Net, WISP) yang membantu mengelola:

- **Pelanggan PPPoE** — tambah, edit, isolir, dan pantau status koneksi secara real-time
- **Hotspot & Voucher** — buat profil dan generate voucher massal
- **Tagihan bulanan** — otomatis generate dan terima pembayaran via Midtrans
- **Notifikasi WhatsApp & Email** — pengingat jatuh tempo dikirim otomatis
- **Kontrak digital** — pelanggan tanda tangan dari ponsel tanpa perlu temu fisik

---

## Struktur Aplikasi

eznom menggunakan konsep **Router** sebagai unit utama. Setiap router mewakili satu titik jaringan MikroTik Anda. Semua pelanggan, tagihan, hotspot, dan keuangan dikelola di bawah router masing-masing.

```
Akun eznom
└── Router A (misal: RT-Blok-Utara)
│   ├── Pelanggan PPPoE
│   ├── Profil Layanan
│   ├── Tagihan & Pembayaran
│   ├── Hotspot
│   │   ├── Profil Hotspot
│   │   └── Voucher
│   └── Keuangan
└── Router B (misal: RT-Blok-Selatan)
    └── ...
```

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
