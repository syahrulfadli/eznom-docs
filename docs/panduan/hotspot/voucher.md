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
| **Panjang Username** | Jumlah karakter username (default 6–8) |
| **Panjang Password** | Jumlah karakter password (default 6–8) |
| **Charset Username** | Karakter yang digunakan untuk username: huruf, angka, atau kombinasi |
| **Charset Password** | Karakter yang digunakan untuk password |

3. Klik **Generate** — voucher langsung dibuat dan disync ke MikroTik

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
