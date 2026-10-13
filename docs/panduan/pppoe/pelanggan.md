# Kelola Pelanggan PPPoE

Halaman ini mencakup cara menambah, mengedit, dan mengelola pelanggan PPPoE secara individual maupun massal.

---

## Daftar Pelanggan

Buka router → **PPPoE → Pelanggan** untuk melihat semua pelanggan.

Kartu di atas tabel: **Total pelanggan**, **Aktif**, **Isolir**, dan **Sedang online** (dibanding
total pelanggan).

Tabel menampilkan:
- Nama & username pelanggan
- Status koneksi (🟢 Online / 🔴 Offline)
- Status akun (Aktif / Isolir / Suspend / Nonaktif)
- Profil layanan yang digunakan
- Grup pelanggan (jika diisi)
- Badge **WA** hijau bila pelanggan sudah opt-in notifikasi WhatsApp
- Label **Baru** bila pelanggan dipasang dalam **30 hari terakhir**, dan **Prabayar** untuk pelanggan prabayar
- Tombol aksi cepat

Gunakan kolom **pencarian** di atas tabel untuk menyaring berdasarkan nama atau username.

Filter lanjutan (status, koneksi, tipe pembayaran, grup, urutan) dibuka lewat tombol **Filter** yang
menampilkan modal — tampilan ini sama di desktop maupun mobile, sehingga letak filternya tidak
berubah-ubah saat Anda berpindah perangkat.

### Mengurutkan dari judul kolom

Klik **judul kolom** untuk mengurutkan tabel berdasarkan kolom itu. Klik kedua membalik arahnya,
klik ketiga kembali ke urutan bawaan. Kolom yang sedang dipakai mengurutkan ditandai panah. Hal yang
sama berlaku di tabel Billing.

### Label status berwarna

Status akun, **Prabayar**, dan **Baru** tampil sebagai strip warna kecil supaya tabel tetap ringkas:

| Warna | Arti |
|---|---|
| Biru | Aktif |
| Merah | Isolir |
| Amber | Suspend |
| Oranye | Nonaktif |
| Ungu | Prabayar |
| Hijau | Baru |

**Klik label mana pun** untuk menampilkan teksnya di semua label; klik lagi untuk kembali ke warna
saja. Pilihan ini diingat browser dan berlaku juga di tabel Billing. Arahkan kursor ke label untuk
melihat teksnya tanpa mengubah tampilan.

### Baris per halaman

Pemilih jumlah baris (**25 / 50 / 100 / 200**, default 100) ada di bar halaman di bawah tabel.
Pilihan Anda tersimpan di akun dan berlaku di semua daftar berhalaman di eznom — tidak perlu
mengaturnya ulang di tiap halaman atau setelah login ulang.

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
| **Username** | Username PPPoE. Klik **Generate Acak** untuk 12 karakter unik, atau klik ikon **=** untuk menggunakan ID Pelanggan sebagai username. Boleh mengandung **satu spasi** di antara kata (misal `budi santoso`), tetapi tidak di awal/akhir dan tidak spasi ganda |
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

## Import dari MikroTik

Kalau pelanggan sudah lama ada sebagai PPPoE Secret di MikroTik, Anda tidak perlu mengetik ulang
satu per satu. Buka menu di kanan atas halaman Pelanggan → **Import dari Mikrotik** (angka di
belakangnya = jumlah secret yang belum terdaftar di eznom). Menu ini muncul saat VPN router
terhubung.

1. Centang secret yang ingin diimpor (bisa dicari, atau **Pilih Semua**)
2. Pilih **Tipe Pembayaran** untuk seluruh pilihan
3. Atur dua sakelar yang berlaku untuk seluruh batch:
   - **Isolir Otomatis** (default menyala) — pelanggan diputus sendiri saat tagihan lewat jatuh
     tempo. Kalau dimatikan, tagihan tetap ditandai menunggak tetapi pelanggan terus online
     sampai diisolir manual.
   - **Notifikasi WhatsApp** — menandai pelanggan setuju menerima pengingat tagihan via WA. Hanya
     terkirim ke yang nomor HP-nya terisi.
4. Klik **Import N User**

Secret bertanda **EZ NOM** / **MIKHOPMAN** membawa nama, nomor HP, alamat, dan tanggal pasang dari
komentar MikroTik, dan semuanya terisi otomatis.

::: tip Pelanggan impor lama yang isolir otomatisnya mati
Pilih pelanggan-pelanggan itu di daftar, lalu gunakan aksi massal **Isolir Otomatis → Nyalakan**
(lihat [Aksi Massal](#aksi-massal-bulk)).
:::

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

## Tagihan Pertama

Setiap pelanggan **baru** — prabayar maupun pascabayar — wajib punya tagihan pertama. Form
menampilkan kartu **Tagihan Pertama** otomatis begitu Anda memilih Tipe Pembayaran. Ada dua mode,
dipilih lewat sakelar **Hitung prorata**:

| Mode | Masa layanan pertama | Nominal | Tagihan berikutnya |
|---|---|---|---|
| **Bayar penuh** (default) | Sebulan dari tanggal mulai | Harga paket penuh | Setiap bulan di tanggal mulai — **Jatuh Tempo Override** pelanggan diisi otomatis dengan tanggal itu |
| **Prorata** (sakelar menyala) | Dari tanggal mulai sampai hari billing router berikutnya (atau override pelanggan) | `harga profil × hari terpakai ÷ jumlah hari dalam bulan` | Mengikuti hari billing router |

| Field | Keterangan |
|---|---|
| **Mulai Layanan** | Tanggal awal layanan. Default: tanggal pemasangan, atau hari ini |
| **Masa Layanan s.d.** | Akhir masa layanan pertama. Terisi otomatis; hanya bisa diubah di mode prorata |
| **Nominal Layanan** | Terhitung otomatis dari harga profil, tetap bisa diedit. Total bersama biaya pemasangan tampil di bawahnya |

Batas bayar tagihan pertama mengikuti skema: **pascabayar** jatuh tempo di akhir masa layanan,
**prabayar** jatuh tempo di tanggal mulai (dibayar saat pemasangan). Nominal dihitung ulang setiap
kali Anda mengubah tanggal, mode, atau profil layanan. Harga dasar yang dipakai adalah **harga
profil sudah termasuk PPN** bila profil punya PPN.

::: tip Kapan memakai prorata?
Bayar penuh paling sederhana: pelanggan membayar harga paket, dan tanggal tagihannya sama dengan
tanggal pasang. Pakai prorata kalau Anda ingin semua pelanggan ditagih di **satu tanggal yang sama**
(hari billing router) — tagihan pertama hanya menagih hari yang terpakai sampai tanggal itu.
:::

::: info Tanggal mulai 29–31
Jatuh tempo override dibatasi tanggal 1–28. Pelanggan yang mulai tanggal 29, 30, atau 31 di mode
bayar penuh mendapat masa layanan pertama sampai tanggal 28 bulan berikutnya, lalu siklusnya
setiap tanggal 28.
:::

::: warning Pilih profil layanan dulu
Kalau profil layanan belum dipilih, eznom menampilkan peringatan dan nominal awal Rp 0 — karena
harga dasarnya belum diketahui. Pilih profil lebih dulu, baru atur tanggalnya.
:::

::: info Nominal terkunci untuk sebagian sub-pengguna
Sub-pengguna **tanpa izin membuat data Keuangan** (misalnya role Teknisi) melihat field nominal
dalam keadaan terkunci — mereka bisa menambah pelanggan, tapi nominal tagihan pertamanya dipaksa
mengikuti hasil perhitungan otomatis dan tidak bisa dibulatkan manual. Perubahan nominal yang
menyimpang dari rumus dicatat di jejak audit.
:::

::: info Tagihan berikutnya selalu harga penuh
Prorata hanya berlaku di tagihan pertama pelanggan yang ditambahkan lewat form ini. Tagihan
lanjutan — dan tagihan pertama pelanggan hasil import dari MikroTik — selalu memakai harga penuh
profil.
:::

Setelah pelanggan prabayar tersimpan, eznom menampilkan prompt yang mengarahkan Anda melunasi
tagihan pertama tersebut — supaya tidak ada pelanggan prabayar yang aktif tanpa pembayaran
tercatat. Begitu lunas, tagihan masa layanan berikutnya terbit otomatis (lihat
[Sistem Billing PPPoE](/panduan/pppoe/billing#siklus-prabayar)).

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

Tombol **⋯** di ujung baris membuka menu aksi. Menu yang sama terbuka dengan **klik kanan** di
mana saja pada baris, tepat di posisi kursor (menu bawaan browser tetap muncul saat Anda klik kanan
pada link, isian, teks yang sedang diseleksi, atau sambil menahan Shift).

| Aksi | Fungsi |
|---|---|
| **Sinkronkan** | Muncul bila data pelanggan belum tersinkron ke MikroTik |
| **Suspend** / **Aktifkan Kembali** | Menghentikan sementara / mengaktifkan lagi akun pelanggan |
| **Isolir** / **Reconnect** | Putuskan layanan (walled garden redirect) / aktifkan kembali pelanggan yang diisolir |
| **Remote Modem** | Untuk pelanggan yang sedang online — lihat [Remote Perangkat](/panduan/remote-perangkat) |
| **Lihat Detail** | Buka halaman detail lengkap pelanggan |
| **Edit** | Edit data pelanggan |
| **Tambah Catatan** / **Ubah Catatan** | Catatan internal singkat tanpa membuka form edit, misal *janji bayar tgl 10*. Catatan tampil di halaman detail pelanggan |
| **Salin Username** | Menyalin username PPPoE (password sengaja tidak ikut disalin) |
| **Hubungi Pelanggan** | Telepon atau WhatsApp, bila nomor HP terisi |
| **Lihat di Google Maps** | Bila koordinat terisi |
| **Hapus** | Hapus pelanggan dari sistem dan MikroTik |

Modal edit pelanggan menyebut siapa yang menambahkan pelanggan dan siapa yang terakhir mengubahnya,
beserta waktunya.

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
| **Isolir Otomatis → Nyalakan / Matikan** | Mengubah sakelar Auto Isolir banyak pelanggan sekaligus (maksimal 100 per aksi). Hanya mengubah boleh-tidaknya pelanggan diputus otomatis nanti — pelanggan yang sedang terisolir tidak ikut disambungkan |
| **Hapus** | Hapus permanen semua pelanggan yang dipilih |

Pilihan centang **bertahan** saat Anda mengganti pencarian atau filter, jadi Anda bisa mencari
"budi", mencentang, mencari "siti", mencentang lagi, lalu menjalankan satu aksi untuk semuanya.
Bar aksi menyebut berapa pelanggan terpilih yang tidak terlihat di daftar saat ini. Pilihan baru
dikosongkan setelah aksi selesai atau saat Anda menekan **Batal**.

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
Riwayat semua tagihan beserta masa layanan, batas bayar, dan status (Lunas / Belum Bayar /
Sebagian / Terlambat). Kartu **Belum Dibayar** di atasnya menghitung sisa piutang yang sudah jatuh
tempo — tagihan prabayar berikutnya yang belum jatuh tempo tidak dihitung.

Setiap tagihan diikuti sub-baris pembayarannya — tanggal, metode, referensi, jumlah, dan siapa
yang mencatat — sehingga cicilan langsung terlihat milik tagihan yang mana. Potongan harga tampil
di bawah nominal tagihan.

### Tab Kredensial
Username, password, profil layanan, IP PPPoE, uptime sesi, dan status sinkronisasi ke MikroTik.

### Tab Live Traffic
Grafik kecepatan download/upload real-time dari sisi pelanggan (diperbarui setiap 5 detik). Memerlukan koneksi VPN router aktif.

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

### Tab Riwayat
Linimasa semua yang terjadi pada pelanggan ini, dikelompokkan per hari: perubahan data (nilai lama
→ baru), isolir/reconnect/suspend (manual, massal, maupun otomatis), tagihan terbit, dan pembayaran
— masing-masing dengan pelakunya.

Saringan di kanan atas:

| Pilihan | Isi |
|---|---|
| **Oleh Pengguna** (default) | Hanya aksi yang dilakukan orang — Anda, sub-pengguna, atau reseller |
| **Otomatis** | Hanya aksi sistem, seperti isolir terjadwal dan tagihan yang terbit sendiri |
| **Semua** | Keduanya |

---

## Backup & Pindah ke Router Lain

Pelanggan bisa dipindahkan ke router lain beserta kredensial, tagihan, dan lampirannya — atau
disimpan sebagai file backup terenkripsi. Lihat
[Backup & Pindah Pelanggan](/panduan/pppoe/backup-migrasi).
