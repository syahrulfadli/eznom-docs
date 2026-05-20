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
| **Harga Saran** | Harga default untuk tagihan bulanan (Rp) |
| **PPN** | Persentase PPN yang ditambahkan ke tagihan (opsional, misal `11`) |

5. Klik **Simpan**

Profil akan otomatis di-sync ke PPPoE Profile di router MikroTik.

---

## Rate Limit Format

Eznom menggunakan format rate limit MikroTik standar:

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
