# Voucher Hotspot

---

## Halaman Voucher

Buka router → **Hotspot → Voucher**

Halaman ini adalah pintu masuk semua batch voucher di router. Dari atas ke bawah:

| Bagian | Isi |
|---|---|
| **Ringkasan** | Total, Tersedia, Terpakai, dan Expired untuk seluruh router |
| **Cari voucher** | Mencari username/password di **semua batch** sekaligus — berguna saat pelanggan menyebut kode vouchernya tanpa tahu batch-nya. Klik hasilnya untuk lompat ke batch-nya dengan voucher itu sudah terfilter |
| **Batch Voucher** | Daftar batch berhalaman (jumlah baris mengikuti pilihan Anda di bar halaman), bisa dicari berdasarkan nama batch dan difilter per profil |
| **Hapus Massal** | Menghapus semua voucher **Terpakai** atau **Expired** di seluruh router — lihat [Hapus Voucher](#hapus-voucher) |

### Membaca daftar batch

Setiap baris batch menampilkan nama, profil, waktu generate dan siapa yang membuatnya (operator,
sub-pengguna, atau reseller lewat portal), template cetak, reseller (bila ada),
serta angka **tersedia / total** dengan bar kemajuan di bawahnya. Bar itu menunjukkan berapa banyak
voucher yang sudah keluar dari stok (terpakai maupun expired) — batch yang habis terjual berarti bar
penuh.

Tombol di kanan baris: **Lihat** (buka detail batch), **cetak** (pilih template, plus Export CSV),
**duplikat** (buka form generate dengan pengaturan yang sama), dan **hapus batch**.

Status pengiriman ke MikroTik juga tampil di baris ini selama batch belum selesai disinkronkan —
lihat [Sinkronisasi Voucher ke MikroTik](#sinkronisasi-voucher-ke-mikrotik).

---

## Detail Batch

Klik nama batch atau tombol **Lihat** untuk membuka halaman detail. Halaman ini punya alamat
sendiri, jadi bisa di-bookmark atau dibagikan ke operator lain.

**Bagian atas** merangkum batch: profil, harga per voucher, template, tanggal, mode pencatatan
keuangan, bar kemajuan, dan status sinkronisasi (dengan tombol **Retry** bila macet). Tombol
**Cetak**, **Duplikat**, dan **hapus** ada di sini juga.

**Kartu statistik** (Total, Tersedia, Terpakai, Expired) menghitung voucher di batch ini saja.
Klik salah satu kartu untuk memfilter tabel di bawahnya; klik lagi untuk melepas filter.

**Tabel voucher** menampilkan username, password, status, dan waktu pakai — jumlah baris per halaman
mengikuti pilihan Anda di bar halaman,
dengan kolom pencarian dan filter status. Arahkan kursor ke baris untuk menyalin kode atau mencetak
satu voucher saja.

| Status | Arti |
|---|---|
| 🔵 **Tersedia** | Belum pernah dipakai |
| 🟢 **Terpakai** | Sedang atau pernah dipakai pelanggan |
| ⚫ **Expired** | Masa berlaku habis, sudah dihapus dari MikroTik |

::: tip Tandai terjual
Pada batch dengan mode pencatatan **Saat voucher terpakai**, voucher yang masih Tersedia bisa
dicentang lalu **Tandai Terjual** — pemasukannya langsung dicatat ke Keuangan tanpa menunggu
pelanggan login. Tanda ini bisa dibatalkan selama vouchernya belum dipakai.
:::

---

## Generate Voucher

1. Klik **+ Generate Voucher**
2. Isi pengaturan:

| Field | Keterangan |
|---|---|
| **Preset** | Opsional — muat seluruh pengaturan karakter & tampilan dari preset tersimpan |
| **Profil** | Pilih profil hotspot yang sudah dibuat |
| **Jumlah** | Berapa voucher yang ingin dibuat (1–500) |
| **Reseller** | Opsional — pilih reseller yang membeli batch ini |
| **Pencatatan Keuangan** | **Satu batch langsung** (seluruh batch dicatat sebagai pemasukan saat generate) atau **Saat voucher terpakai** (dicatat bertahap mengikuti voucher yang dipakai, expired, atau ditandai terjual) |
| **Template Cetak** | Layout kartu saat dicetak (lihat tabel di bawah) |
| **Jenis Voucher** | **User + Password** (berbeda) atau **Kode Tunggal** (password sama dengan username) |
| **Desain Kartu** | **Visual Builder** (atur warna & font via panel) atau **HTML Kustom** (pakai [Template Kartu](/panduan/hotspot/template-kartu)) |
| **Panjang Username / Password** | Diatur lewat slider |
| **Charset Username / Password** | Huruf besar, huruf kecil, campuran, huruf saja, atau angka saja (min. 9 digit) |
| **QR Code** | Aktifkan untuk mencetak QR login di kartu, beserta URL dasarnya |
| **Logo / Nama Bisnis / Tagline** | Pilih elemen bisnis mana yang ikut tampil di kartu |
| **Warna Kartu** | Warna latar, teks, dan aksen kartu voucher |
| **Font Kartu & Font Teks** | Font kode voucher dan font teks lain diatur **terpisah** |
| **Ukuran Font** | Ukuran font username dan password di kartu cetak |
| **Kolom (A4)** | Jumlah kolom kartu per baris saat cetak A4 (muncul jika template A4) |
| **Lebar / Tinggi / Kertas** | Ukuran fisik kartu (mm) dan kertas (A4/F4/Letter) — muncul jika template **Ukuran Kustom** |

3. Klik **Generate** — voucher langsung dibuat, disync ke MikroTik, dan Anda diarahkan ke
   halaman [Detail Batch](#detail-batch) yang baru dibuat

### Pilihan Template Cetak

| Template | Hasil |
|---|---|
| **A4 — Grid kolom** | Grid A4 dengan jumlah kolom yang Anda tentukan |
| **Ukuran Kustom** | Anda tentukan ukuran fisik kartu, eznom mengisi kertas sebanyak yang muat |
| **Letter Compact** | 5 kolom × 9 baris |
| **F4 — 5 × 10** | 50 voucher per halaman |
| **F4 — 5 × 11** | 55 voucher per halaman |
| **Thermal 58 mm** | Struk printer thermal 58 mm |
| **Thermal 80 mm** | Struk printer thermal 80 mm |

### Jenis Voucher

| Jenis | Keterangan |
|---|---|
| **User + Password** | Username dan password berbeda, dicetak keduanya di kartu |
| **Kode Tunggal** | Password sama dengan username — pelanggan cukup mengingat satu kode. Kartu otomatis hanya menampilkan satu kode |

### Tagline di Kartu

Toggle **Tagline** menampilkan tagline bisnis Anda di kartu voucher. Isinya diambil dari
**Pengaturan → Profil Bisnis**, jadi cukup diubah di satu tempat untuk semua batch berikutnya.

### Generate untuk Reseller

Jika ada reseller yang terdaftar di router ini, dropdown **Reseller** akan muncul di form generate. Pilih reseller yang membeli batch ini.

Setelah reseller dipilih, kotak informasi akan menampilkan harga per voucher dan total yang akan dicatat ke keuangan.

Lihat: [Reseller Hotspot](/panduan/hotspot/reseller)

### Pencatatan Keuangan

Setiap batch otomatis dicatat ke halaman [Keuangan](/panduan/keuangan) sebagai transaksi penjualan
voucher, tanpa input manual. Kapan dicatatnya mengikuti mode yang dipilih saat generate:

| Mode | Pemasukan dicatat |
|---|---|
| **Satu batch langsung** | Sekaligus, saat batch di-generate |
| **Saat voucher terpakai** | Bertahap per hari — hanya voucher yang dipakai, expired, atau ditandai terjual. Harga per voucher dikunci saat generate |

Mode ini ikut tersimpan di preset. Batch mode "saat terpakai" ditandai **Catat saat terpakai** di daftar batch.

---

## Preset Pengaturan Voucher

Preset menyimpan kombinasi pengaturan **Karakter Voucher** dan **Tampilan Kartu** sebagai template bernama. Saat generate berikutnya, cukup pilih preset dan semua field terisi otomatis — Anda hanya perlu memilih profil dan jumlah voucher.

### Menyimpan Preset

1. Isi semua pengaturan karakter & tampilan sesuai kebutuhan
2. Klik **Simpan sebagai Preset** di footer modal
3. Masukkan nama preset (contoh: "Kartu Merah A4", "Thermal Harian")
4. Klik **Simpan** — preset tersimpan dan langsung muncul di dropdown

### Menggunakan Preset

Di bagian atas form generate, pilih preset dari dropdown **Preset**. Semua field karakter dan tampilan akan terisi otomatis sesuai preset yang dipilih.

Dropdown hanya muncul jika sudah ada minimal satu preset yang tersimpan.

### Preset Default

Preset yang ditandai sebagai default akan dimuat otomatis setiap kali modal generate dibuka.

- Klik **★ Default** di samping dropdown untuk menjadikan preset yang sedang dipilih sebagai default
- Tanda `★` di nama preset menandakan preset default saat ini

### Menghapus Preset

Pilih preset dari dropdown, lalu klik **Hapus** di samping tombol Default. Konfirmasi penghapusan di dialog yang muncul.

::: info Nama preset unik per bisnis
Nama preset dan nama template kartu bersifat unik di dalam bisnis Anda — bukan unik secara global.
Bisnis lain boleh memakai nama yang sama tanpa saling mengganggu.
:::

---

## Sinkronisasi Voucher ke MikroTik

Voucher dikirim ke MikroTik lewat antrean latar belakang yang **terpisah dari antrean tugas lain**,
sehingga batch besar tidak menghambat sinkronisasi PPPoE atau notifikasi.

Status pengiriman ditampilkan di baris batch dan di bagian atas halaman detail batch, lengkap dengan
tombol **Retry** untuk mengirim ulang. Kalau ada batch yang berhenti di tengah jalan,
Anda akan menerima [notifikasi operator](/panduan/notifikasi-operator) **Batch voucher berhenti** —
batch yang berhenti tidak melanjutkan sendiri dan perlu dikirim ulang setelah masalahnya beres.
Notifikasi **Batch voucher selesai dikirim** menandakan semua voucher sudah masuk ke MikroTik.

::: tip Batch tidak lagi macet permanen
Batch voucher reseller yang dulu bisa tersangkut selamanya di status "menunggu antrian" sudah
diperbaiki. Kalau Anda masih menemukan batch dalam status itu untuk waktu lama, periksa koneksi VPN
router terlebih dahulu.
:::

---

## Cetak Voucher

Cetak dilakukan **per batch**, dari ikon printer di daftar batch atau tombol **Cetak** di halaman
detail batch. Pilih template yang diinginkan — template saat generate hanyalah bawaan, batch yang
sama bisa dicetak ulang dengan template lain. Halaman cetak terbuka di jendela baru dan langsung
memanggil dialog cetak.

Untuk mencetak **satu voucher saja** (misalnya kartu pengganti), buka detail batch, arahkan kursor
ke baris voucher, lalu klik ikon printer di ujung baris.

Menu cetak juga menyediakan **Export CSV** — daftar username, password, profil, status, masa
berlaku, harga, waktu pakai, dan MAC perangkat untuk satu batch.

Setiap kartu voucher menampilkan (tergantung pengaturan saat generate):
- Logo dan nama bisnis Anda
- Tagline bisnis
- Username & password (atau kode tunggal)
- Harga dan profil/paket
- Durasi akses — otomatis menyertakan kuota bila profil punya batas, misal `7 hari | 4 GB`
- QR code login

Desain kartu bisa diganti sepenuhnya lewat [Template Kartu Voucher](/panduan/hotspot/template-kartu).

---

## Mode Cetak Ukuran Kustom

Selain template tetap (A4 grid kolom, Letter, F4, Thermal), tersedia mode **Ukuran Kustom** yang membalik cara kerja layout: alih-alih memilih "berapa kolom", Anda menentukan **ukuran fisik kartu** dan eznom mengisi kertas sebanyak yang muat secara otomatis.

### Cara pakai

1. Saat generate, pilih **Template Cetak → Ukuran Kustom**
2. Isi field yang muncul:
   - **Lebar (mm)** — lebar fisik satu voucher (20–210 mm)
   - **Tinggi (mm)** — tinggi fisik satu voucher (15–330 mm)
   - **Kertas** — A4, F4, atau Letter
3. Generate seperti biasa, lalu cetak dari menu printer di daftar batch → **Ukuran Kustom**

### Cara kerja

eznom mengisi kertas dengan kartu seukuran yang Anda tentukan, sebanyak yang muat per baris, lalu di tengahkan. Ukuran yang didesain = ukuran yang tercetak.

| Ukuran kartu | Kertas | Hasil per halaman |
|---|---|---|
| 55 × 35 mm | A4 | ± 3 kolom × 8 baris |
| 85 × 54 mm (kartu nama) | A4 | 2 kolom × 5 baris = 10 |
| 40 × 25 mm | A4 | ± 5 kolom × 11 baris |

Tinggi kartu dikunci sesuai field tinggi, sehingga garis potong tiap baris sejajar — rapi untuk dipotong massal dengan pemotong kertas.

### Pratinjau Susunan per Lembar

Begitu lebar dan tinggi diisi, modal generate langsung menampilkan hasil hitungannya:

- Berapa **kolom × baris** dan **voucher per lembar**
- Ukuran kertas dan area cetaknya (margin 8 mm, jarak antar kartu 2 mm)
- **Sisa ruang** di kanan dan bawah
- **Lebar maksimal untuk menambah satu kolom** — paling berguna kalau Anda mengincar jumlah kolom
  tertentu, misalnya "5 kolom" dan ingin tahu berapa lebar kartu yang muat

Kolom lebar dan tinggi tidak dikoreksi otomatis saat dikosongkan — Anda bebas menghapus isinya dan
mengetik ulang tanpa angka melompat balik.

::: warning Angka ini berlaku pada skala cetak 100%
Dialog cetak browser punya opsi skala ("Sesuaikan halaman" / "Fit to printable area") yang
memperkecil seluruh halaman. Kolom bisa masuk lebih banyak dari perkiraan, **tapi kartunya
tercetak lebih kecil** dari ukuran mm yang Anda minta. Pratinjau menyebutkan berapa persen skala
itu dan berapa lebar kartu yang sebenarnya tercetak. Kalau ukuran fisik kartu penting bagi Anda
(misalnya harus muat di dompet), pastikan skala di dialog cetak diset **100%**.
:::

::: tip Padukan dengan Template HTML Kustom
Mode Ukuran Kustom paling optimal dipadukan dengan [Template Kartu](/panduan/hotspot/template-kartu):
rancang desain voucher Anda, lalu set ukuran fisiknya agar pas dan hemat kertas. Setiap preset
template sudah menyertakan saran ukuran cetaknya. Field ukuran tetap tampil baik di mode Visual
Builder maupun mode HTML Kustom.
:::

---

## Hapus Voucher

Voucher **Terpakai** dan **Expired** sudah tidak punya nilai jual dan bisa dibersihkan dari eznom
maupun MikroTik. Ada tiga cakupan:

| Cakupan | Di mana |
|---|---|
| Seluruh router, per status | Halaman Voucher → **Hapus Massal** → pilih *semua expired* atau *semua terpakai* |
| Satu batch, per status | Detail batch → ikon hapus → pilih *voucher expired* atau *voucher terpakai* |
| Seluruh batch | Ikon hapus di baris batch, atau detail batch → **Hapus seluruh batch** — termasuk voucher yang masih Tersedia |

Dialog konfirmasi selalu menyebutkan jumlah voucher yang akan dihapus. Penghapusan tidak bisa
dibatalkan.

::: tip
Generate voucher dalam jumlah besar sekaligus dan simpan fisiknya. Voucher yang belum dipakai tidak memakan resource di MikroTik.
:::
