# Profil Layanan PPPoE

Profil layanan mendefinisikan **paket internet** yang bisa Anda tawarkan ke pelanggan — kecepatan, harga, dan konfigurasi MikroTik terkait.

---

## Membuat Profil Baru

1. Buka router yang diinginkan
2. Di sidebar, pilih **PPPoE → Profil Layanan**
3. Klik **+ Tambah Profil**
4. Isi form berikut:

| Field | Keterangan |
|---|---|
| **Nama Profil** | Nama profil di MikroTik, misal `10Mbps` |
| **Nama Layanan** | Nama paket yang tampil ke pelanggan, misal `Paket Silver 10 Mbps` |
| **Upload Max** | Batas kecepatan upload, misal `10M` |
| **Download Max** | Batas kecepatan download, misal `10M` |
| **Harga Saran** | Harga default untuk tagihan bulanan (Rp). Tidak boleh 0 |
| **PPN** | Persentase PPN yang ditambahkan ke tagihan (opsional, misal `11`) |

5. Klik **Simpan**

Profil akan otomatis di-sync ke PPPoE Profile di router MikroTik.

::: warning Harga tidak boleh 0
Profil dengan harga 0 ditolak saat disimpan. Harga inilah yang jadi dasar tagihan bulanan dan
perhitungan prorata — profil berharga 0 menghasilkan tagihan kosong yang membingungkan di
laporan keuangan.
:::

---

## PPN

Kalau field **PPN** diisi (misal `11`), nilainya diterapkan ke seluruh perhitungan yang memakai
harga profil ini:

- **Tagihan bulanan** — nominal yang dibuat sistem sudah termasuk PPN
- **Perhitungan prorata** tagihan pertama pelanggan baru
- **Kuitansi & invoice** — menampilkan rincian terpisah: harga layanan, PPN, dan total
- **Modal Catat Bayar** — menampilkan rincian yang sama sebelum Anda mengkonfirmasi

Kosongkan field PPN jika Anda tidak memungut PPN — tidak ada baris PPN yang ditampilkan di
dokumen mana pun.

---

## Grup Profil

Kalau paket layanan Anda banyak, kelompokkan lewat router → **PPPoE → Group Profil**. Grup dipakai
untuk merapikan daftar profil dan sebagai nama paket yang ditampilkan di
[Halaman Isolir](/panduan/isolir#paket-layanan).

---

## Sinkronisasi ke MikroTik

Profil baru dikirim ke router segera setelah disimpan. Status sinkronisasi ditampilkan di baris
profil.

::: warning Profil yang belum tersinkron tidak bisa dipakai
Pelanggan **tidak bisa** ditugaskan ke profil yang belum berhasil terkirim ke MikroTik. Kalau
profil masih berstatus gagal/menunggu, perbaiki koneksi router lebih dulu — kalau tidak, secret
pelanggan akan mengacu ke profile yang tidak ada di router.
:::

### Tarik dari MikroTik

Tombol **Tarik dari MikroTik** mengimpor profil yang sudah ada di router ke eznom. Profil yang
diimpor langsung ditandai tersinkron, termasuk profil yang sebelumnya belum pernah dikirim dari
eznom.

Rate limit dibaca dengan urutan MikroTik yang benar (`upload/download`) sehingga kecepatan naik
dan turun tidak tertukar.

---

## Rate Limit Format

eznom menggunakan format rate limit MikroTik standar:

```
upload/download
```

Contoh:
- `5M/10M` → upload 5 Mbps, download 10 Mbps
- `10M/10M` → simetris 10 Mbps
- `1M/2M` → upload 1 Mbps, download 2 Mbps

---

## Edit & Hapus Profil

- Klik ikon **pensil** di baris profil untuk mengedit
- Klik ikon **hapus** untuk menghapus profil

::: warning
Profil yang sedang digunakan pelanggan aktif tidak bisa dihapus. Pindahkan pelanggan ke profil lain terlebih dahulu.
:::
