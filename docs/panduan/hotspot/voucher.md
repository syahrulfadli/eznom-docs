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
| **Template Cetak** | Layout kartu saat dicetak (A4 / thermal) |
| **Panjang Username** | Jumlah karakter username |
| **Panjang Password** | Jumlah karakter password |
| **Charset Username** | Karakter yang digunakan untuk username: huruf, angka, atau kombinasi |
| **Charset Password** | Karakter yang digunakan untuk password |
| **Warna Kartu** | Warna latar, teks, dan aksen kartu voucher |
| **Ukuran Font** | Ukuran font username dan password di kartu cetak |
| **Kolom (A4)** | Jumlah kolom kartu per baris saat cetak A4 |

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

## Hapus Voucher

Voucher yang sudah **Aktif** atau **Kedaluwarsa** bisa dihapus dari sistem dan MikroTik dengan mengklik ikon hapus di baris voucher.

::: tip
Generate voucher dalam jumlah besar sekaligus dan simpan fisiknya. Voucher yang belum dipakai tidak memakan resource di MikroTik.
:::
