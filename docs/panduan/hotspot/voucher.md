# Voucher Hotspot

---

## Melihat Daftar Voucher

Buka router → **Hotspot → Voucher**

Tabel menampilkan semua voucher dengan status:

| Status | Arti |
|---|---|
| 🟡 **Belum dipakai** | Voucher siap digunakan |
| 🟢 **Aktif** | Voucher sedang digunakan |
| ⚫ **Kedaluwarsa** | Masa berlaku habis |

---

## Generate Voucher

1. Klik **+ Generate Voucher**
2. Isi pengaturan:

| Field | Keterangan |
|---|---|
| **Profil** | Pilih profil hotspot yang sudah dibuat |
| **Jumlah** | Berapa voucher yang ingin dibuat (1–500) |
| **Template Cetak** | Layout kartu saat dicetak: template tetap (A4, Letter Compact, F4, Thermal) atau **Ukuran Kustom** (tentukan sendiri ukuran kartu) |
| **Panjang Username** | Jumlah karakter username |
| **Panjang Password** | Jumlah karakter password |
| **Charset Username** | Karakter yang digunakan untuk username: huruf, angka, atau kombinasi |
| **Charset Password** | Karakter yang digunakan untuk password |
| **Warna Kartu** | Warna latar, teks, dan aksen kartu voucher |
| **Ukuran Font** | Ukuran font username dan password di kartu cetak |
| **Kolom (A4)** | Jumlah kolom kartu per baris saat cetak A4 (muncul jika template A4) |
| **Lebar / Tinggi / Kertas** | Ukuran fisik kartu (mm) dan kertas (A4/F4/Letter) — muncul jika template **Ukuran Kustom** |

3. Klik **Generate** — voucher langsung dibuat dan disync ke MikroTik

### Generate untuk Reseller

Jika ada reseller yang terdaftar di router ini, dropdown **Reseller** akan muncul di form generate. Pilih reseller yang membeli batch ini.

Setelah reseller dipilih, kotak informasi akan menampilkan harga per voucher dan total yang akan dicatat ke keuangan.

Lihat: [Reseller Hotspot](/panduan/hotspot/reseller)

### Pencatatan Keuangan

Setiap batch yang di-generate otomatis dicatat ke halaman [Keuangan](/panduan/keuangan) sebagai transaksi penjualan voucher. Tidak perlu input manual.

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

---

## Cetak Voucher

1. Centang voucher yang ingin dicetak, atau centang semua
2. Klik **Cetak** — halaman cetak terbuka dengan tampilan kartu voucher yang siap dicetak

Setiap kartu voucher menampilkan:
- Nama bisnis Anda
- Username & password
- Profil/paket
- Durasi akses

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

::: tip Padukan dengan Template HTML Kustom
Mode Ukuran Kustom paling optimal dipadukan dengan template HTML kustom: rancang desain voucher Anda, lalu set ukuran fisiknya agar pas dan hemat kertas. Field ukuran tetap tampil baik di mode tampilan visual maupun mode template HTML.
:::

---

## Hapus Voucher

Voucher yang sudah **Aktif** atau **Kedaluwarsa** bisa dihapus dari sistem dan MikroTik dengan mengklik ikon hapus di baris voucher.

::: tip
Generate voucher dalam jumlah besar sekaligus dan simpan fisiknya. Voucher yang belum dipakai tidak memakan resource di MikroTik.
:::
