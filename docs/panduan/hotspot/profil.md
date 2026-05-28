# Profil Hotspot

Profil hotspot mendefinisikan batasan yang berlaku untuk voucher yang dibuat — durasi akses, batas kuota, dan kecepatan.

---

## Membuat Profil Hotspot

1. Buka router → **Hotspot → Profil**
2. Klik **+ Tambah Profil**
3. Isi form:

| Field | Keterangan |
|---|---|
| **Nama Profil** | Nama profil di MikroTik, misal `1jam` atau `sehari` |
| **Nama Layanan** | Nama yang tampil kepada pengguna, misal `Paket 1 Jam` |
| **Validitas** | Durasi akses voucher |
| **Satuan Validitas** | `menit`, `jam`, atau `hari` |
| **Batas Kuota** | Batas data (MB/GB). Kosongkan untuk tidak terbatas |
| **Rate Limit Upload** | Batas kecepatan upload, misal `2M` |
| **Rate Limit Download** | Batas kecepatan download, misal `5M` |
| **Harga (Rp)** | Harga jual voucher eceran |
| **Harga Reseller (Rp)** | Harga khusus reseller — kosongkan jika sama dengan harga eceran |
| **PPN** | Persentase PPN jika dikenakan |

4. Klik **Simpan** — profil akan di-sync ke Hotspot User Profile di MikroTik

---

## Contoh Profil Umum

| Nama | Validitas | Rate Limit | Harga |
|---|---|---|---|
| Paket 1 Jam | 60 menit | 2M/5M | Rp 2.000 |
| Paket Harian | 1 hari | 5M/10M | Rp 5.000 |
| Paket Mingguan | 7 hari | 5M/10M | Rp 25.000 |
| Paket Bulanan | 30 hari | 10M/20M | Rp 75.000 |

---

## Edit & Hapus Profil

Klik ikon **pensil** atau **hapus** di baris profil.

::: warning
Menghapus profil akan menghapusnya dari MikroTik juga. Voucher yang sudah dibuat dengan profil ini tidak terpengaruh, namun tidak bisa membuat voucher baru dengan profil yang sudah dihapus.
:::

---

## Harga Reseller

Setiap profil bisa memiliki **harga reseller** yang berbeda dengan harga eceran. Harga ini digunakan otomatis saat generate batch voucher dengan reseller dipilih.

- Isi field **Harga Reseller** di form edit profil
- Kosongkan jika tidak ada perbedaan harga untuk reseller

Saat generate batch:
- Reseller dipilih + harga reseller ada → dicatat ke keuangan dengan harga reseller
- Reseller dipilih + harga reseller kosong → dicatat dengan harga eceran (ada peringatan di modal)
