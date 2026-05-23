# Halaman Publik Bisnis

Buka **Pengaturan → Halaman Publik**

Fitur ini menghasilkan tiga halaman web yang bisa diakses siapa saja tanpa login. Halaman ini berguna untuk:

- Mendaftarkan bisnis ke **Midtrans** sebagai merchant (mereka membutuhkan URL website bisnis)
- Membagikan daftar paket ke calon pelanggan
- Menyediakan halaman Kebijakan Privasi dan Syarat & Ketentuan yang diwajibkan oleh payment gateway

---

## Halaman yang Dihasilkan

| URL | Isi |
|---|---|
| `/bisnis/{slug}` | Beranda bisnis — logo, deskripsi, daftar paket, kontak |
| `/bisnis/{slug}/privacy` | Kebijakan Privasi |
| `/bisnis/{slug}/tos` | Syarat & Ketentuan + Kebijakan Refund |

---

## Langkah Setup

### 1. Atur Slug

Slug adalah pengenal unik bisnis Anda di URL. Contoh: jika slug diisi `mywifi-jember`, URL beranda bisnis Anda adalah `/bisnis/mywifi-jember`.

- Hanya huruf kecil, angka, tanda hubung (`-`), dan garis bawah (`_`)
- Unik antar semua tenant eznom
- Tidak bisa mengandung spasi

Setelah tersimpan, URL lengkap langsung muncul dengan tombol **Salin** dan **Buka**.

### 2. Isi Deskripsi Bisnis

Teks singkat yang ditampilkan di bagian atas beranda publik. Maksimal 1.000 karakter. Contoh:

> Kami adalah penyedia internet lokal yang melayani wilayah Kecamatan Cibeunying sejak 2018. Kami menyediakan paket hotspot harian dan berlangganan bulanan dengan koneksi stabil dan harga terjangkau.

### 3. Pilih Paket yang Ditampilkan

#### Paket Hotspot
- Toggle **Paket Hotspot** mengontrol apakah seksi hotspot ditampilkan atau disembunyikan sepenuhnya
- Jika diaktifkan, pilih paket mana yang ingin ditampilkan menggunakan checkbox
- Biarkan semua checkbox kosong untuk menampilkan **semua** paket hotspot

#### Paket Berlangganan (PPPoE)
- Toggle **Paket Berlangganan** mengontrol apakah seksi PPPoE ditampilkan atau disembunyikan
- Sama seperti hotspot — pilih sebagian atau tampilkan semua

::: tip
Jika bisnis Anda hanya menyediakan hotspot, sembunyikan seksi PPPoE agar halaman lebih rapi — dan sebaliknya.
:::

---

## Informasi Bisnis di Halaman Publik

Nama, alamat, telepon, email, dan website yang tampil di halaman publik diambil dari **Pengaturan → Profil Bisnis**. Pastikan data tersebut sudah diisi terlebih dahulu.

Logo juga diambil dari Profil Bisnis dan ditampilkan di header halaman publik.

---

## Untuk Review Midtrans

Saat mendaftar sebagai merchant Midtrans, Anda akan diminta mengisi URL website bisnis dan URL kebijakan privasi. Gunakan URL dari halaman publik eznom:

| Kolom di Midtrans | URL yang Diisi |
|---|---|
| Website bisnis | `https://eznom.noahresourcetech.com.com/bisnis/{slug}` |
| Kebijakan Privasi | `https://eznom.noahresourcetech.com.com/bisnis/{slug}/privacy` |
| Syarat & Ketentuan | `https://eznom.noahresourcetech.com.com/bisnis/{slug}/tos` |

URL ini tersedia langsung di halaman pengaturan — cukup klik **Salin**, lalu paste ke form Midtrans.

Lihat juga panduan lengkap pendaftaran Midtrans di [Pengaturan Pembayaran](/panduan/pembayaran#mendaftar-ke-midtrans).
