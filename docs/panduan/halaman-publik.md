# Halaman Publik Bisnis

Buka **Pengaturan → Halaman Publik**

Fitur ini menghasilkan beberapa halaman web yang bisa diakses siapa saja tanpa login. Halaman ini berguna untuk:

- Menjadi **etalase pemasaran** bisnis internet Anda — paket, keunggulan, area layanan, dan FAQ
- Menerima **pendaftaran calon pelanggan** langsung dari web
- Menyediakan **portal bayar mandiri** bagi pelanggan PPPoE Anda
- Mendaftarkan bisnis ke payment gateway sebagai merchant (mereka membutuhkan URL website bisnis)
- Menyediakan halaman Kebijakan Privasi dan Syarat & Ketentuan yang diwajibkan oleh payment gateway

---

## Halaman yang Dihasilkan

| URL | Isi |
|---|---|
| `/bisnis/{slug}` | Beranda bisnis — logo, tagline, keunggulan, daftar paket, FAQ, kontak, dan formulir pendaftaran |
| `/bisnis/{slug}/bayar` | [Portal pembayaran mandiri](/panduan/pppoe/portal-pembayaran) — pelanggan PPPoE cek tagihan & bayar dengan ID Pelanggan |
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

### 2. Isi Konten Pemasaran

| Field | Keterangan |
|---|---|
| **Tagline** | Kalimat singkat di bawah nama bisnis, maks 160 karakter. Contoh: *"Internet cepat & stabil untuk rumah dan usaha Anda"* |
| **Deskripsi Bisnis** | Paragraf perkenalan, maks 1.000 karakter |
| **Warna Aksen** | Biru, Hijau, Ungu, Merah, Kuning, atau Langit — mewarnai tombol, badge, dan aksen di seluruh halaman |

### 3. Info Operasional & Media Sosial

Hanya field yang diisi yang akan tampil di halaman publik.

| Field | Contoh |
|---|---|
| **Area Layanan** | `Kec. Cibeunying & sekitarnya` |
| **Jam Operasional** | `Setiap hari, 08.00 – 21.00 WIB` |
| **Instagram** | Username atau URL profil |
| **Facebook** | Username atau URL halaman |
| **TikTok** | Username atau URL profil |

### 4. Keunggulan & FAQ

**Keunggulan** — hingga **6 poin**, masing-masing berisi judul dan penjelasan singkat. Contoh:
*"Teknisi lokal"* → *"Gangguan ditangani hari itu juga, tidak perlu antre call center."*

**FAQ** — hingga **10 pertanyaan** beserta jawabannya, ditampilkan sebagai akordeon di bagian bawah
halaman. Gunakan untuk menjawab pertanyaan yang paling sering masuk lewat WhatsApp, supaya calon
pelanggan tidak perlu bertanya lebih dulu.

Tambah dan hapus item lewat tombol di masing-masing bagian.

### 5. Pilih Paket yang Ditampilkan

#### Paket Hotspot
- Toggle **Paket Hotspot** mengontrol apakah seksi hotspot ditampilkan atau disembunyikan sepenuhnya
- Jika diaktifkan, pilih paket mana yang ingin ditampilkan menggunakan checkbox
- Biarkan semua checkbox kosong untuk menampilkan **semua** paket hotspot

#### Paket Berlangganan (PPPoE)
- Toggle **Paket Berlangganan** mengontrol apakah seksi PPPoE ditampilkan atau disembunyikan
- Sama seperti hotspot — pilih sebagian atau tampilkan semua

#### Paket Unggulan

Pilih **satu paket unggulan** untuk masing-masing kategori. Paket unggulan ditandai secara visual
di halaman publik sebagai paket yang Anda rekomendasikan — berguna untuk mengarahkan calon
pelanggan ke paket dengan margin terbaik.

::: tip
Jika bisnis Anda hanya menyediakan hotspot, sembunyikan seksi PPPoE agar halaman lebih rapi — dan sebaliknya.
:::

### 6. Terima Pendaftaran Calon Pelanggan

Aktifkan toggle **Terima Pendaftaran Calon Pelanggan** untuk menampilkan formulir "Daftar
Berlangganan" di halaman beranda. Setiap pendaftaran masuk ke inbox
[Calon Pelanggan](/panduan/leads), dan Anda mendapat notifikasi WhatsApp.

---

## Tombol WhatsApp per Paket

Setiap kartu paket di halaman publik punya tombol WhatsApp dengan **pesan yang sudah terisi**
menyebutkan nama paket tersebut. Calon pelanggan yang mengklik dari kartu "Paket Silver 10 Mbps"
langsung mengirim pesan yang menyebutkan paket itu — Anda tidak perlu bertanya balik paket mana
yang dimaksud.

Nomor tujuan diambil dari **Pengaturan → Profil Bisnis → Nomor Telepon**.

---

## Tampilan di Media Sosial

Saat link halaman publik Anda dibagikan di WhatsApp, Facebook, atau X/Twitter, pratinjaunya
menampilkan nama bisnis, deskripsi, dan **logo Anda** sebagai gambar — bukan kartu kosong. Metadata
OpenGraph dan Twitter Card, beserta favicon halaman, dihasilkan otomatis dari Profil Bisnis.

::: tip Isi logo terlebih dahulu
Pratinjau ini bergantung pada logo di **Pengaturan → Profil Bisnis**. Tanpa logo, link yang
dibagikan tampil polos tanpa gambar.
:::

---

## Mode Gelap

Halaman publik dan portal pembayaran punya tombol mode gelap sendiri, terpisah dari panel operator.
Pengunjung bisa memilih tampilan yang nyaman tanpa perlu login.

---

## Informasi Bisnis di Halaman Publik

Nama, alamat, telepon, email, dan website yang tampil di halaman publik diambil dari **Pengaturan → Profil Bisnis**. Pastikan data tersebut sudah diisi terlebih dahulu.

Logo juga diambil dari Profil Bisnis dan ditampilkan di header halaman publik.

---

## Untuk Review Midtrans

Saat mendaftar sebagai merchant Midtrans, Anda akan diminta mengisi URL website bisnis dan URL kebijakan privasi. Gunakan URL dari halaman publik eznom:

| Kolom di Midtrans | URL yang Diisi |
|---|---|
| Website bisnis | `https://eznom.noahresourcetech.com/bisnis/{slug}` |
| Kebijakan Privasi | `https://eznom.noahresourcetech.com/bisnis/{slug}/privacy` |
| Syarat & Ketentuan | `https://eznom.noahresourcetech.com/bisnis/{slug}/tos` |

URL ini tersedia langsung di halaman pengaturan — cukup klik **Salin**, lalu paste ke form Midtrans.

Lihat juga panduan lengkap pendaftaran Midtrans di [Pengaturan Pembayaran](/panduan/pembayaran#midtrans).

Gateway lain (Duitku, iPaymu, DOKU) juga meminta URL website beserta halaman kebijakan — pakai URL
yang sama.
