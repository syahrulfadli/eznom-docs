# Keuangan

Halaman Keuangan per-router mencatat semua transaksi pendapatan yang terjadi di router tersebut — baik dari PPPoE maupun Hotspot.

Buka router → **Keuangan**

---

## Daftar Transaksi

Tabel menampilkan semua catatan keuangan dengan kolom:

| Kolom | Keterangan |
|---|---|
| **Tanggal** | Waktu transaksi dicatat |
| **Tipe** | Jenis transaksi (lihat di bawah) |
| **Keterangan** | Deskripsi singkat transaksi |
| **Jumlah** | Nilai transaksi |

### Tipe Transaksi

| Tipe | Sumber |
|---|---|
| **Pembayaran Tagihan** | Konfirmasi pembayaran tagihan PPPoE pelanggan |
| **Penjualan Voucher** | Generate batch voucher hotspot (langsung maupun via reseller) |

---

## Filter & Pencarian

Gunakan filter di atas tabel untuk menyaring data:

- **Periode**: Filter berdasarkan bulan dan tahun
- **Tipe**: Tampilkan hanya pembayaran tagihan atau penjualan voucher

---

## Cara Transaksi Masuk ke Keuangan

### PPPoE — Pembayaran Tagihan

Catatan masuk otomatis saat operator mengkonfirmasi pembayaran tagihan di halaman **Billing**. Nominal yang dicatat adalah nilai tagihan yang dikonfirmasi.

### Hotspot — Penjualan Voucher

Catatan masuk otomatis saat operator meng-generate batch voucher. Nominal yang dicatat:

- **Tanpa reseller**: jumlah voucher × harga profil
- **Dengan reseller**: jumlah voucher × harga reseller profil (atau harga eceran jika harga reseller belum diset)

Batch dengan harga profil = 0 tidak menghasilkan catatan keuangan.

::: tip
Untuk laporan khusus hotspot — performa per profil, pendapatan reseller, dan tren pemakaian voucher — gunakan halaman [Laporan Voucher](/panduan/hotspot/laporan).
:::
