# Laporan Voucher Hotspot

Halaman laporan memberikan ringkasan performa voucher, reseller, dan pendapatan hotspot dalam satu periode.

Buka router → **Hotspot → Laporan**

---

## Filter Periode

Di pojok kanan atas, pilih **bulan** dan **tahun** yang ingin ditampilkan. Pilih **Semua bulan** untuk melihat data seluruh tahun berjalan.

---

## Ringkasan Voucher

Empat kartu di bagian atas menampilkan:

| Kartu | Keterangan |
|---|---|
| **Total Voucher** | Jumlah semua voucher yang digenerate di periode ini |
| **Terpakai** | Voucher yang sudah digunakan (beserta persentase dari total) |
| **Belum Terpakai** | Voucher yang masih tersedia |
| **Kadaluarsa** | Voucher yang masa berlakunya habis sebelum dipakai |

---

## Ringkasan Pendapatan

Tiga kartu pendapatan menampilkan:

| Kartu | Keterangan |
|---|---|
| **Total Pendapatan** | Total pendapatan dari semua penjualan voucher di periode ini |
| **Dari Reseller** | Pendapatan dari batch yang dijual ke reseller (beserta persentase) |
| **Penjualan Langsung** | Pendapatan dari batch yang dijual langsung (tanpa reseller) |

::: info
Pendapatan dihitung dari catatan di halaman **Keuangan** — batch yang dicatat saat generate. Jika ada batch yang digenerate sebelum fitur pencatatan keuangan diaktifkan, nilainya tidak akan masuk ke sini.
:::

---

## Performa per Profil

Tabel di sisi kiri menampilkan performa setiap profil hotspot:

| Kolom | Keterangan |
|---|---|
| **Profile** | Nama profil hotspot |
| **Total** | Jumlah voucher yang digenerate dengan profil ini |
| **Terpakai** | Jumlah voucher yang sudah digunakan |
| **% Pakai** | Persentase pemakaian (hijau ≥75%, kuning ≥40%, abu-abu <40%) |
| **Rata-rata Pakai** | Rata-rata waktu sejak batch digenerate sampai voucher dipakai |

---

## Reseller Aktif

Tabel di sisi kanan menampilkan reseller yang memiliki transaksi di periode ini, diurutkan berdasarkan pendapatan tertinggi:

| Kolom | Keterangan |
|---|---|
| **Reseller** | Nama reseller |
| **Batch** | Jumlah batch yang dibuat untuk reseller ini |
| **Voucher** | Total voucher yang digenerate |
| **Terpakai** | Voucher yang sudah digunakan oleh pelanggan akhir |
| **Pendapatan** | Total pendapatan dari reseller ini |

---

## 10 Batch Terakhir

Tabel di bagian bawah menampilkan 10 batch voucher terbaru di periode ini, dengan informasi:
- Nama batch
- Profil yang digunakan
- Reseller (atau "Langsung" jika tanpa reseller)
- Jumlah total, terpakai, dan sisa voucher
- Tanggal dan waktu batch digenerate
