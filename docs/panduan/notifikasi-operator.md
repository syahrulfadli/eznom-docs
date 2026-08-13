# Notifikasi untuk Operator (Web Push)

Halaman ini membahas notifikasi yang dikirim **ke Anda sendiri** — pemilik akun dan sub-pengguna
— bukan ke pelanggan. Untuk notifikasi tagihan ke pelanggan lihat
[Notifikasi Otomatis](/panduan/notifikasi).

Sebelum fitur ini ada, kejadian penting di jaringan Anda hanya ketahuan kalau ada yang kebetulan
sedang membuka dasbor: router mati, sesi WhatsApp kena banned, batch voucher macet, pembayaran
masuk. Web Push mengisi celah itu — notifikasi muncul di HP atau desktop meski eznom sedang
tertutup.

---

## Memasang eznom sebagai Aplikasi (PWA)

Panel eznom bisa dipasang sebagai aplikasi di HP maupun desktop, sehingga punya ikon sendiri dan
berjalan tanpa address bar browser.

| Perangkat | Cara memasang |
|---|---|
| **Android (Chrome)** | Menu ⋮ → **Install app** / **Tambahkan ke layar utama** |
| **iPhone / iPad (Safari)** | Tombol **Bagikan** → **Tambah ke Layar Utama** |
| **Desktop (Chrome/Edge)** | Ikon install di ujung kanan address bar |

::: warning iPhone wajib dipasang dulu
Di iOS, notifikasi push **hanya** bisa aktif untuk aplikasi yang sudah dipasang ke Layar Utama.
Selama eznom dibuka sebagai tab Safari biasa, tombol aktivasi notifikasi tidak akan muncul dan
halaman pengaturan menampilkan pemberitahuan bahwa browser belum mendukung. Pasang dulu, lalu
buka eznom dari ikonnya.
:::

### Pintasan Ikon Aplikasi

Setelah terpasang, tekan-tahan (atau klik kanan) ikon eznom untuk melompat langsung ke:

- **Notifikasi** — membuka riwayat notifikasi operator
- **Catat Bayar** — halaman Billing PPPoE pada router yang terakhir Anda buka
- **Voucher Hotspot** — halaman voucher pada router yang terakhir Anda buka

---

## Mengaktifkan Notifikasi di Perangkat

1. Buka **Pengaturan → Notifikasi**
2. Cari card **Notifikasi ke Perangkat Anda** (di kolom kanan)
3. Klik **Aktifkan** — browser akan meminta izin notifikasi, pilih **Izinkan**

Aktivasi berlaku **per perangkat**. HP dan laptop yang sama-sama Anda pakai perlu diaktifkan
masing-masing.

::: info Notifikasi diblokir?
Kalau Anda pernah menolak permintaan izin, browser tidak akan bertanya lagi dan card menampilkan
peringatan "Notifikasi diblokir untuk situs ini". Aktifkan manual lewat ikon gembok di address
bar → **Notifikasi** → izinkan.
:::

### Daftar Perangkat

Semua perangkat yang pernah diaktifkan tercatat di card yang sama, dengan label seperti
"Chrome di Android" beserta waktu pemakaian terakhir. Klik **Hapus** pada satu baris untuk
mencabut langganan perangkat tersebut dari sisi server — berguna kalau HP Anda hilang dan ingin
dihentikan dari perangkat lain.

::: tip Perangkat yang lama tidak dipakai berhenti dikirimi
Perangkat yang tidak dipakai membuka eznom selama lebih dari **30 hari** ditandai dan berhenti
menerima notifikasi. Cukup buka eznom dari perangkat itu untuk menghidupkannya kembali. Langganan
yang sudah menganggur **90 hari** dihapus otomatis.
:::

---

## Jenis Notifikasi

Setiap jenis punya saklar sendiri di card **Notifikasi ke Perangkat Anda**. Preferensi ini
bersifat **per pengguna**, bukan per bisnis — sub-pengguna mengatur miliknya sendiri.

| Notifikasi | Default | Keterangan |
|---|---|---|
| **Gateway WhatsApp terputus** | Aktif | Sesi WA logout atau kena banned. Selama ini terjadi, semua notifikasi tagihan ke pelanggan berhenti terkirim |
| **Router terputus** | Aktif | Router kehilangan koneksi ke eznom. Dibatasi satu notifikasi per router tiap 10 menit agar router tidak stabil tidak membanjiri |
| **Router kembali online** | Aktif | Router yang tadinya terputus sudah pulih. Tidak pernah ditahan cooldown |
| **Pembayaran pelanggan masuk** | Aktif | Setiap tagihan PPPoE yang lunas, baik dicatat manual maupun via payment gateway |
| **Topup reseller menunggu approval** | Aktif | Reseller tidak bisa membeli voucher sampai topup-nya Anda setujui |
| **Batch voucher selesai dikirim** | Aktif | Semua voucher dalam satu batch sudah masuk ke MikroTik |
| **Batch voucher berhenti** | Aktif | Pengiriman batch berhenti di tengah jalan dan tidak melanjutkan sendiri |
| **Banyak pelanggan tumbang bersamaan** | Aktif | Lima pelanggan atau lebih di satu router putus dalam satu siklus sync (30 detik) |
| **Gangguan massal pulih** | Aktif | Router yang tadinya kena gangguan massal sudah kembali normal |
| **Pelanggan offline berkepanjangan** | Aktif | Rangkuman tiap 2 jam untuk pelanggan yang offline lebih dari 6 jam — biasanya modem rusak atau kabel putus |
| **Stok barang menipis** | Aktif | Stok sebuah barang menyentuh batas minimum yang ditetapkan di [Inventaris](/panduan/inventaris). Dikirim sekali per penembusan batas, bukan tiap pemakaian |
| **Ringkasan isolir otomatis** | **Nonaktif** | Satu rangkuman tiap kali isolir otomatis berjalan dan ada pelanggan terisolir. Default mati karena isolir berjalan tiap jam |

::: info Kenapa pelanggan tumbang satu-satu tidak dikabarkan
Satu pelanggan offline biasanya cuma modem yang dimatikan penghuninya — bukan gangguan. Yang
dikabarkan adalah pola yang menandakan masalah nyata: banyak pelanggan tumbang bersamaan, atau
satu pelanggan yang offline berjam-jam.
:::

### Sub-pengguna hanya menerima yang relevan

Sub-pengguna hanya menerima notifikasi untuk modul yang boleh ia baca. Teknisi yang tidak punya
izin Keuangan tidak akan menerima notifikasi pembayaran masuk, meskipun saklarnya aktif. Lihat
[izin sub-pengguna](/panduan/pengaturan#sub-pengguna).

---

## Membisukan Router Tertentu

Kalau Anda mengelola banyak router, satu router yang sedang bermasalah bisa membanjiri notifikasi.

Di card **Notifikasi ke Perangkat Anda**, bagian **Router yang dipantau**, matikan saklar router
yang ingin dibisukan. Notifikasi dari router tersebut berhenti dikirim ke perangkat Anda, tetapi
tetap tercatat di riwayat.

Daftar router ini mencakup **semua bisnis tempat Anda punya akses** — termasuk bisnis lain tempat
Anda terdaftar sebagai sub-pengguna. Jadi router milik akun master tetap bisa dibisukan tanpa
perlu berpindah konteks akun lebih dahulu.

---

## Lonceng & Riwayat Notifikasi

Riwayat notifikasi operator tersedia di **ikon lonceng**:

- **Di dasbor akun** — lonceng ada di sidebar
- **Di dalam router** — lonceng ada di status bar bawah, bersama indikator koneksi dan sync

Klik lonceng untuk membuka panel riwayat tanpa berpindah halaman. Tersedia filter:

| Filter | Pilihan |
|---|---|
| **Status** | Semua / Belum dibaca |
| **Jenis** | Per jenis notifikasi |
| **Cakupan** | Semua router / Router ini saja |

Saat Anda sedang berada di dalam sebuah router, cakupan default-nya adalah **router ini saja** —
orang yang sedang menangani satu router tidak sedang mencari kabar dari router di kota sebelah.

::: info Angka di lonceng tetap total semua router
Badge angka pada lonceng sengaja menghitung **seluruh router**, bukan hanya router yang sedang
dibuka. Kalau ikut tersaring, orang yang seharian menangani Router A tidak akan pernah tahu
Router B mati. Karena itu badge bisa menunjukkan angka lebih besar dari jumlah baris yang tampil
— selisihnya ditampilkan sebagai keterangan di dalam panel.
:::

### Membuka notifikasi dari HP

Mengetuk notifikasi di HP akan membuka eznom langsung ke halaman yang bersangkutan. Kalau
notifikasi itu berasal dari bisnis lain (misalnya Anda sub-pengguna di bisnis rekan), eznom
otomatis memindahkan konteks akun ke bisnis tersebut lebih dulu, sehingga Anda tidak mendarat di
halaman kosong atau kena "akses ditolak".

---

## Layar Tetap Menyala (Wake Lock)

Di **Dasbor Router** tersedia saklar untuk menahan layar agar tidak mati. Berguna saat Anda
memantau grafik trafik atau proses sync di lapangan sambil mengerjakan hal lain di perangkat.

Saklar hanya muncul di browser yang mendukungnya, dan otomatis lepas ketika Anda meninggalkan
halaman.
