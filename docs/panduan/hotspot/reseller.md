# Reseller Hotspot

Reseller adalah mitra distribusi yang membeli voucher secara grosir dari Anda, kemudian menjualnya kembali ke pengguna akhir. eznom mencatat setiap batch reseller secara otomatis ke halaman Keuangan.

---

## Daftar Reseller

Buka router → **Hotspot → Reseller**

Tabel menampilkan semua reseller beserta jumlah batch yang pernah dibuat.

---

## Tambah Reseller

1. Klik **+ Tambah Reseller**
2. Isi form:

| Field | Keterangan |
|---|---|
| **Nama** | Nama reseller atau nama toko |
| **Nomor Telepon** | Nomor kontak reseller (opsional) |
| **Alamat** | Alamat reseller (opsional) |
| **Catatan** | Catatan internal, misal area distribusi |

3. Klik **Simpan**

---

## Edit & Nonaktifkan Reseller

- Klik ikon **pensil** untuk mengubah data reseller
- Klik badge **Aktif / Nonaktif** untuk mengubah status reseller

Reseller yang dinonaktifkan tidak akan muncul di dropdown saat generate batch voucher.

---

## Harga Khusus Reseller

Setiap profil hotspot bisa memiliki harga reseller yang berbeda dengan harga eceran. Harga ini diset di **Hotspot → Profil** pada field **Harga Reseller**.

Saat generate batch dengan reseller dipilih:
- Jika profil punya harga reseller → harga tersebut yang dicatat ke keuangan
- Jika profil belum punya harga reseller → harga eceran biasa yang digunakan, dengan peringatan di modal generate

Lihat: [Profil Hotspot — Harga Reseller](/panduan/hotspot/profil#harga-reseller)

---

## Generate Batch untuk Reseller

1. Buka **Hotspot → Voucher**
2. Klik **+ Generate Voucher**
3. Pilih **Profil** dan isi **Jumlah Voucher**
4. Di dropdown **Reseller**, pilih reseller yang membeli batch ini
5. Sebuah kotak informasi akan muncul menampilkan:
   - Harga per voucher (harga reseller atau harga eceran)
   - Total yang akan dicatat ke keuangan
6. Klik **Generate**

Batch yang dihasilkan akan dicatat ke [Keuangan](/panduan/keuangan) sebagai `Penjualan Voucher` dengan referensi ke nama reseller.

---

## Laporan Performa Reseller

Pantau performa setiap reseller di halaman **Laporan Voucher** — melihat jumlah batch, total voucher, voucher terpakai, dan pendapatan per reseller dalam periode tertentu.

Lihat: [Laporan Voucher](/panduan/hotspot/laporan)
