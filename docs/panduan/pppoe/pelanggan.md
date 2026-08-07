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
- Grup pelanggan (jika diisi)
- Badge **WA** hijau bila pelanggan sudah opt-in notifikasi WhatsApp
- Badge **Baru** bila pelanggan dipasang dalam **30 hari terakhir**
- Tombol aksi cepat

Gunakan kolom **pencarian** di atas tabel untuk menyaring berdasarkan nama atau username.

Filter lanjutan (status, grup, urutan) dibuka lewat tombol **Filter** yang menampilkan modal —
tampilan ini sama di desktop maupun mobile, sehingga letak filternya tidak berubah-ubah saat Anda
berpindah perangkat.

---

## Menambah Pelanggan

1. Klik **+ Tambah Pelanggan**
2. Isi form:

### Identitas

| Field | Keterangan |
|---|---|
| **Nama Pelanggan** | Nama lengkap |
| **ID Pelanggan** | 12 karakter huruf kapital & angka, di-generate otomatis dengan **prefix router** di depan |
| **No. HP / WhatsApp** | Digunakan untuk notifikasi WA |
| **Email** | Opsional — digunakan untuk notifikasi email dan pengiriman kuitansi |
| **Alamat** | Alamat pemasangan |
| **Tipe Pelanggan** | Rumahan (default), Bisnis, Kantor Kecil, Kantor, Instansi Pemerintah, Reseller, Subnet, Masjid, Musholla, Gereja, Sekolah, Universitas, atau Kampus |
| **Grup Pelanggan** | Opsional — lihat [Grup Pelanggan](#grup-pelanggan) |

::: info Format ID Pelanggan
ID Pelanggan selalu **12 karakter alfanumerik tanpa tanda hubung**, diawali prefix yang Anda atur
di **Pengaturan Router → Prefix ID Pelanggan** (default `C`, maksimal 4 karakter). Contoh: prefix
`C` → `CA3KN7B4XQ2M`. Preview prefix tampil langsung di form saat Anda mengetiknya di pengaturan
router.
:::

::: tip Email kini opsional
Email pelanggan **tidak lagi wajib**. Kalau dikosongkan, pelanggan tersebut hanya menerima
notifikasi via WhatsApp (bila opt-in aktif) dan tidak menerima kuitansi email.
:::

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
| **Notifikasi WhatsApp** | Aktifkan jika pelanggan menyetujui menerima pesan WA dari Anda. Wajib aktif agar notifikasi tagihan terkirim ke nomor HP pelanggan ini |
| **Tipe Pembayaran** | **Prabayar** atau **Pascabayar** — wajib dipilih, tidak ada default. Lihat [Skema Pembayaran](/panduan/pppoe/skema-pembayaran) |
| **Biaya Pemasangan** | Biaya instalasi sekali bayar, ditagihkan bersama tagihan pertama |

3. Klik **Simpan** — pelanggan akan otomatis disync ke PPPoE Secret di MikroTik

---

## Biaya Pemasangan

Biaya instalasi sekali bayar yang ditagihkan **bersama tagihan pertama** pelanggan, baik prabayar
maupun pascabayar.

Nilainya dikunci ke **kelipatan Rp 500** — ketikan manual otomatis dibulatkan ke kelipatan terdekat
begitu Anda selesai mengetik. Ini mencegah nominal ganjil seperti Rp 150.237 masuk ke tagihan.

Di halaman **Billing** dan **kuitansi**, biaya pemasangan ditampilkan sebagai **baris terpisah**
dari biaya layanan — jadi pelanggan bisa melihat mana yang biaya bulanan dan mana yang biaya
instalasi sekali bayar.

---

## Tagihan Pertama (Prorata)

Setiap pelanggan **baru** — prabayar maupun pascabayar — wajib punya tagihan pertama. Form
menampilkan bagian ini otomatis begitu Anda memilih Tipe Pembayaran.

| Field | Keterangan |
|---|---|
| **Mulai Periode** | Tanggal awal layanan. Default: tanggal pemasangan, atau hari ini |
| **Jatuh Tempo Pertama** | Default mengikuti hari billing router (atau jatuh tempo override pelanggan). Kalau tanggalnya sudah lewat, otomatis maju ke bulan berikutnya |
| **Nominal Layanan** | Dihitung prorata otomatis: `harga profil × hari terpakai ÷ jumlah hari dalam bulan` |

Nominal prorata dihitung ulang setiap kali Anda mengubah tanggal mulai, jatuh tempo, atau profil
layanan. Harga dasar yang dipakai adalah **harga profil sudah termasuk PPN** bila profil punya PPN.

::: warning Pilih profil layanan dulu
Kalau profil layanan belum dipilih, eznom menampilkan peringatan dan tidak bisa menghitung prorata
— karena harga dasarnya belum diketahui. Pilih profil lebih dulu, baru atur tanggalnya.
:::

::: info Nominal prorata terkunci untuk sebagian sub-pengguna
Sub-pengguna **tanpa izin membuat data Keuangan** (misalnya role Teknisi) melihat field nominal
dalam keadaan terkunci — mereka bisa menambah pelanggan, tapi nominal tagihan pertamanya dipaksa
mengikuti hasil rumus prorata dan tidak bisa dibulatkan manual. Perubahan nominal yang menyimpang
dari rumus dicatat di jejak audit.
:::

Setelah pelanggan prabayar tersimpan, eznom menampilkan prompt yang mengarahkan Anda melunasi
tagihan pertama tersebut — supaya tidak ada pelanggan prabayar yang aktif tanpa pembayaran
tercatat.

---

## Grup Pelanggan

Grup memudahkan menyaring pelanggan per wilayah, per ODP, atau per kategori apa pun yang Anda
gunakan.

Buka router → **PPPoE → Group Pelanggan**

1. Klik **+ Tambah Group**, isi **Nama** dan pilih **Warna** penanda
2. Simpan
3. Kelola anggotanya lewat tombol anggota pada baris grup, atau pilih grup langsung di form
   tambah/edit pelanggan

Grup dipakai sebagai filter di halaman **Pelanggan** dan **Billing**, dan ikut terbawa saat
[memindahkan pelanggan antar router](/panduan/pppoe/backup-migrasi).

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
| **Reconnect** | Aktifkan kembali semua pelanggan terisolir yang dipilih |
| **Suspend** | Suspend akun pelanggan yang dipilih |
| **Hapus** | Hapus permanen semua pelanggan yang dipilih |

::: danger
Aksi massal **Hapus** tidak dapat dibatalkan. Semua data pelanggan termasuk riwayat tagihan akan terhapus permanen.
:::

::: tip Pemilihan tidak lagi memanggil server tiap klik
Mencentang kotak dikerjakan sepenuhnya di browser. Memilih 200 pelanggan tidak lagi menghasilkan
200 permintaan ke server, sehingga daftar tetap responsif walau pelanggannya banyak.

Aksi massal isolir/suspend/reconnect ke banyak pelanggan sekaligus juga diproses di latar
belakang, jadi tidak lagi menyebabkan halaman timeout pada batch besar.
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

Foto yang diunggah **dikompresi otomatis** sebelum disimpan: sisi terpanjang diperkecil ke maksimal
1920 px lalu dire-encode. Foto langsung dari kamera HP yang biasanya 5–10 MB menyusut drastis tanpa
Anda perlu mengecilkannya manual. Indikator progres tampil selama proses unggah dan kompresi
berlangsung.

::: info Kalau unggah foto gagal
Kompresi berjalan di server **setelah** file terkirim. Kalau foto besar gagal terunggah, batasnya
ada di konfigurasi server (`upload_max_filesize` PHP dan `client_max_body_size` Nginx), bukan di
eznom. Hubungi administrator instance Anda untuk menaikkannya.
:::

### Tab Notifikasi
Riwayat semua notifikasi WA/Email yang pernah dikirim ke pelanggan.

---

## Backup & Pindah ke Router Lain

Pelanggan bisa dipindahkan ke router lain beserta kredensial, tagihan, dan lampirannya — atau
disimpan sebagai file backup terenkripsi. Lihat
[Backup & Pindah Pelanggan](/panduan/pppoe/backup-migrasi).
