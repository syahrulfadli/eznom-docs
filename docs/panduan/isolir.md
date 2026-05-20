# Halaman Isolir

Saat pelanggan diisolir, koneksinya dialihkan ke halaman khusus yang menginformasikan alasan penonaktifan dan cara menghubungi operator.

---

## Konfigurasi Halaman Isolir

Buka router → **Pengaturan → Halaman Isolir**

### Konten Halaman

| Field | Keterangan |
|---|---|
| **Judul** | Judul utama halaman, misal `Akses Internet Dinonaktifkan` |
| **Pesan** | Pesan penjelas, misal `Layanan Anda dinonaktifkan karena tagihan belum dibayar.` |

### Background

Pilih salah satu:
- **Warna Solid** — pilih warna menggunakan color picker atau masukkan kode hex
- **Gambar (URL)** — masukkan URL gambar publik sebagai background

### Logo

Upload logo bisnis Anda (PNG, JPG, SVG, WebP — maks 2 MB). Logo tampil di bagian atas kartu isolir.

### Informasi Kontak

| Field | Keterangan |
|---|---|
| **Label Kontak** | Teks tombol, misal `Hubungi Kami` |
| **Nomor / Kontak** | Nomor WhatsApp (otomatis dijadikan link `wa.me`) |

---

## Live Preview

Sisi kanan halaman konfigurasi menampilkan **preview real-time** tampilan halaman isolir saat Anda mengubah pengaturan.

---

## URL Halaman Isolir

URL halaman isolir pelanggan ditampilkan di bagian bawah panel preview:

```
https://eznom.noahresourcetech.om/isolir/{router-uuid}/{customer-id}
```

URL ini otomatis diisi ke konfigurasi walled garden MikroTik saat pelanggan diisolir dari sistem eznom.

---

## Informasi yang Tampil ke Pelanggan

Kartu di halaman isolir menampilkan:

- Logo bisnis (jika diupload)
- Judul & pesan
- Nama dan username pelanggan (untuk memastikan pelanggan tahu akun siapa yang terkena)
- Tombol kontak menuju WhatsApp operator
