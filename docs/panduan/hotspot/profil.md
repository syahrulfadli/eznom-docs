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
| **Satuan Validitas** | `jam`, `hari`, `minggu`, atau **`unlimited`** |
| **Batas Kuota** | Batas data (MB/GB). Kosongkan untuk tidak terbatas |
| **Rate Limit Upload** | Batas kecepatan upload, misal `2M` |
| **Rate Limit Download** | Batas kecepatan download, misal `5M` |
| **Harga (Rp)** | Harga jual voucher eceran |
| **Harga Reseller (Rp)** | Harga khusus reseller — kosongkan jika sama dengan harga eceran |
| **PPN** | Persentase PPN jika dikenakan |

4. Klik **Simpan** — profil akan di-sync ke Hotspot User Profile di MikroTik

::: warning Nama profil harus unik
Nama profil yang sudah dipakai akan ditolak dengan pesan validasi yang jelas, bukan menghasilkan
error server.
:::

---

## Validitas Unlimited

Pilih satuan validitas **Unlimited** untuk profil yang tidak punya batas masa aktif — voucher
berlaku sampai dihapus atau kuotanya habis. Kolom angka validitas dinonaktifkan saat opsi ini
dipilih.

Secara teknis, eznom menyetel `session-timeout=0` di MikroTik dan **mengosongkan on-login script**
profil tersebut. Sebaliknya, mengubah profil unlimited menjadi punya masa aktif akan
**memasang ulang on-login script** yang menghitung mundur validitas — Anda tidak perlu mengedit
script di router secara manual.

---

## Contoh Profil Umum

| Nama | Validitas | Rate Limit | Harga |
|---|---|---|---|
| Paket 1 Jam | 1 jam | 2M/5M | Rp 2.000 |
| Paket Harian | 1 hari | 5M/10M | Rp 5.000 |
| Paket Mingguan | 1 minggu | 5M/10M | Rp 25.000 |
| Paket Bulanan | 30 hari | 10M/20M | Rp 75.000 |
| Paket Warung | Unlimited | 5M/10M | Rp 150.000 |

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

### Tampil ke Reseller

Di daftar profil ada toggle **Tampil ke reseller** untuk tiap profil. Ini menentukan apakah profil muncul sebagai pilihan beli voucher di [Portal Reseller](/panduan/hotspot/reseller#portal-reseller-self-service):

- **Aktif** → profil jadi opsi di portal (pastikan **Harga Reseller** sudah diisi)
- **Disembunyikan** → profil tidak muncul di portal

Profil yang sudah punya Harga Reseller otomatis ditandai "Tampil ke reseller" agar perilaku lama terjaga. Toggle ini tidak memengaruhi generate manual oleh operator.
