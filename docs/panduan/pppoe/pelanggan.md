# Kelola Pelanggan PPPoE

Halaman ini mencakup cara menambah, mengedit, dan mengelola pelanggan PPPoE secara individual maupun massal.

---

## Daftar Pelanggan

Buka router → **PPPoE → Pelanggan** untuk melihat semua pelanggan.

Tabel menampilkan:
- Nama & username pelanggan
- Status koneksi (🟢 Online / 🔴 Offline)
- Status akun (Aktif / Isolir / Suspended)
- Profil layanan yang digunakan
- Tombol aksi cepat

Gunakan kolom **pencarian** di atas tabel untuk menyaring berdasarkan nama atau username.

---

## Menambah Pelanggan

1. Klik **+ Tambah Pelanggan**
2. Isi form:

### Identitas

| Field | Keterangan |
|---|---|
| **Nama Pelanggan** | Nama lengkap |
| **ID Pelanggan** | 12 karakter huruf kapital & angka, di-generate otomatis |
| **No. HP / WhatsApp** | Digunakan untuk notifikasi WA |
| **Email** | Digunakan untuk notifikasi email |
| **Alamat** | Alamat pemasangan |

### Kredensial PPPoE

| Field | Keterangan |
|---|---|
| **Username** | Username PPPoE. Klik **Generate Acak** untuk 12 karakter unik, atau klik ikon **=** untuk menggunakan ID Pelanggan sebagai username |
| **Password** | Password PPPoE |
| **Profil Layanan** | Pilih dari profil yang sudah dibuat |

### Lokasi

| Field | Keterangan |
|---|---|
| **Latitude** | Koordinat lintang lokasi pelanggan |
| **Longitude** | Koordinat bujur lokasi pelanggan |

Klik **Pin di Peta** untuk memilih lokasi secara visual dari peta interaktif.

### Pengaturan Lanjutan

| Field | Keterangan |
|---|---|
| **Port Modem** | Port fisik ODP/OLT untuk referensi teknisi |
| **Tanggal Pemasangan** | Tanggal instalasi |
| **Jatuh Tempo Override** | Ubah tanggal JT khusus untuk pelanggan ini (default mengikuti router) |
| **Auto Isolir** | Aktifkan agar pelanggan otomatis diisolir saat tagihan lewat jatuh tempo |

3. Klik **Simpan** — pelanggan akan otomatis disync ke PPPoE Secret di MikroTik

---

## Aksi Cepat per Pelanggan

Dari baris tabel, tersedia aksi:

| Aksi | Fungsi |
|---|---|
| **Detail** | Buka halaman detail lengkap pelanggan |
| **Edit** | Edit data pelanggan |
| **Isolir** | Putuskan layanan pelanggan (walled garden redirect) |
| **Reconnect** | Aktifkan kembali pelanggan yang sedang diisolir |
| **Hapus** | Hapus pelanggan dari sistem dan MikroTik |

---

## Aksi Massal (Bulk)

Untuk mengelola banyak pelanggan sekaligus:

1. Centang kotak di sebelah kiri nama pelanggan
2. Centang kotak di header tabel untuk memilih semua pelanggan di halaman ini
3. Bar aksi massal akan muncul di bagian bawah layar

Aksi yang tersedia:

| Aksi | Fungsi |
|---|---|
| **Isolir** | Isolir semua pelanggan yang dipilih |
| **Suspend** | Suspend akun pelanggan yang dipilih |
| **Hapus** | Hapus permanen semua pelanggan yang dipilih |

::: danger
Aksi massal **Hapus** tidak dapat dibatalkan. Semua data pelanggan termasuk riwayat tagihan akan terhapus permanen.
:::

---

## Halaman Detail Pelanggan

Klik nama pelanggan atau tombol **Detail** untuk membuka halaman detail yang berisi:

### Tab Tagihan
Riwayat semua tagihan bulanan beserta status (Lunas / Belum Bayar / Terlambat).

### Tab Pembayaran
Riwayat semua transaksi pembayaran yang sudah dikonfirmasi.

### Tab Kredensial
Username, password, profil layanan, IP PPPoE, uptime sesi, dan status sinkronisasi ke MikroTik.

### Tab Live Traffic
Grafik kecepatan upload/download real-time (diperbarui setiap 5 detik). Memerlukan koneksi VPN router aktif.

### Tab Lokasi
Peta interaktif menampilkan lokasi pelanggan berdasarkan koordinat yang tersimpan. Tersedia tombol **Buka di Google Maps** untuk navigasi langsung.

### Tab Lampiran
Upload dan kelola dokumen terkait pelanggan (foto instalasi, KTP, dll).

### Tab Notifikasi
Riwayat semua notifikasi WA/Email yang pernah dikirim ke pelanggan.
