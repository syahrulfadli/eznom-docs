# Kontrak Digital

Eznom mendukung kontrak berlangganan digital — pelanggan dapat membaca dan menandatangani kontrak dari ponsel tanpa perlu temu fisik.

---

## Mengaktifkan Fitur Kontrak

1. Buka **Pengaturan → Kontrak**
2. Aktifkan opsi **Wajibkan Tanda Tangan Kontrak**
3. Isi isi kontrak berlangganan di editor yang tersedia
4. Simpan

Setelah diaktifkan, pelanggan baru perlu menandatangani kontrak sebelum layanan aktif.

---

## Alur Kontrak

```
Operator tambah pelanggan
        ↓
Kirim link kontrak via WA/Email
        ↓
Pelanggan buka link → masukkan ID Pelanggan (verifikasi)
        ↓
Pelanggan baca dokumen kontrak
        ↓
Pelanggan buka link tanda tangan
        ↓
Pelanggan tanda tangan digital (draw di layar)
        ↓
Status kontrak: Ditandatangani ✓
```

---

## Mengirim Link Kontrak

Dari halaman **Detail Pelanggan**:

1. Klik **Kirim WA** atau **Kirim Email** di header halaman
2. Pilih tipe notifikasi **Link Kontrak**

Pesan yang dikirim berisi dua link:
- **📄 Link Dokumen** — pelanggan bisa membaca kontrak kapan saja
- **✍️ Link Tanda Tangan** — link bertanda tangan berlaku 7 hari, perlu diperbarui jika kedaluwarsa

---

## Verifikasi Akses Dokumen

Untuk melindungi privasi, pelanggan perlu memasukkan **ID Pelanggan** mereka sebelum bisa membaca dokumen kontrak. Jika ID tidak cocok, akses ditolak.

---

## Status Kontrak

Ditampilkan sebagai banner di halaman detail pelanggan:

| Status | Arti |
|---|---|
| 🟡 **Menunggu TTD** | Link sudah dikirim, belum ditandatangani |
| 🟢 **Sudah Ditandatangani** | Pelanggan sudah menandatangani beserta waktu & IP |

---

## Tanda Tangan Manual (Admin)

Jika pelanggan tidak bisa menandatangani secara digital (misalnya sudah tanda tangan di atas kertas):

1. Di halaman detail pelanggan, klik **Tandai Sudah TTD**
2. Status kontrak berubah menjadi ditandatangani dengan keterangan *"Manual oleh admin"*

---

## Cetak Kontrak

Dari halaman detail pelanggan, klik **Kontrak** untuk membuka dokumen kontrak dalam tampilan siap cetak yang mencantumkan:

- Kop surat bisnis (nama, alamat, telepon, email)
- Data pelanggan (nama, username, paket, tanggal pasang)
- Isi kontrak
- Tanda tangan digital (jika sudah ditandatangani)

---

## Nomor Dokumen Kontrak

Anda dapat men-generate nomor dokumen otomatis untuk setiap kontrak:

1. Di halaman detail pelanggan (banner kontrak), klik **+ Generate Nomor Dokumen**
2. Nomor akan digenerate secara unik dan tercantum di dokumen kontrak

---

## Override Per-Pelanggan

Secara default, wajib kontrak mengikuti pengaturan global. Anda bisa override per-pelanggan:

1. Di banner kontrak halaman detail, klik tombol **Ikut Global / Override: Wajib / Override: Bebas**
2. Pilih opsi yang sesuai untuk pelanggan tersebut
