# FAQ

Pertanyaan yang sering ditanyakan tentang penggunaan eznom.

---

## Umum

### Apa itu eznom?

eznom adalah platform manajemen ISP berbasis web untuk operator RT/RW Net dan WISP. eznom membantu mengelola pelanggan PPPoE, hotspot, tagihan bulanan, dan notifikasi otomatis dari satu dasbor.

### Apakah eznom adalah RADIUS server?

Tidak. eznom bukan RADIUS server. eznom adalah panel manajemen ISP yang berkomunikasi langsung dengan MikroTik melalui **MikroTik API**. Router MikroTik tetap menangani autentikasi PPPoE-nya sendiri (menggunakan Secrets & Profiles bawaan MikroTik), dan eznom bertugas mengelola data pelanggan, tagihan, sinkronisasi status, serta aksi isolir/reconnect melalui API tersebut — tanpa menggantikan mekanisme autentikasi di router.

### Apakah eznom mendukung beberapa router?

Ya. Satu akun eznom bisa mengelola banyak router MikroTik. Setiap router dikelola secara terpisah dengan data pelanggan, tagihan, dan keuangan masing-masing.

### Router MikroTik versi berapa yang didukung?

Semua versi RouterOS yang mendukung API (v6 dan v7). Untuk REST API, diperlukan RouterOS 7.1 ke atas.

---

## Router & VPN

### Apakah saya harus membeli layanan VPN terpisah?

Tidak. Infrastruktur VPN untuk menghubungkan router MikroTik ke server eznom sudah **termasuk dalam semua paket berlangganan** — tidak perlu berlangganan layanan VPN pihak ketiga. Anda cukup mengikuti wizard konfigurasi VPN di eznom untuk mendapatkan kredensial dan menginstalnya di MikroTik.

### Mengapa router perlu terhubung via VPN?

API MikroTik biasanya hanya bisa diakses dari jaringan lokal. VPN memungkinkan server eznom berkomunikasi dengan router Anda secara aman melalui internet.

### Router saya status VPN "Terputus", apa yang harus dilakukan?

1. Pastikan konfigurasi VPN di MikroTik sudah benar sesuai panduan wizard
2. Cek apakah port VPN tidak diblokir oleh firewall ISP upstream
3. Coba restart interface VPN di MikroTik
4. Jika masih gagal, buka tiket ke tim support eznom

### Apakah sinkronisasi PPPoE berjalan otomatis?

Ya. eznom melakukan sinkronisasi status pelanggan (online/offline, IP, uptime) setiap **30 detik** secara otomatis selama VPN router terhubung.

### Bisakah saya tahu router mati tanpa membuka dasbor?

Bisa. Pasang eznom sebagai aplikasi di HP Anda, lalu aktifkan notifikasi push di **Pengaturan →
Notifikasi**. Anda akan menerima peringatan saat router terputus, saat pulih kembali, saat ada
gangguan massal PPPoE, saat pembayaran masuk, dan beberapa kejadian lain. Lihat
[Notifikasi untuk Operator](/panduan/notifikasi-operator).

### Bisakah pelanggan dipindahkan ke router lain?

Bisa, beserta kredensial, riwayat tagihan, dan lampirannya. Buka router asal →
**PPPoE → Backup & Pindah Pelanggan**. Tersedia juga mode backup ke file dan restore dari file.
Lihat [Backup & Pindah Pelanggan](/panduan/pppoe/backup-migrasi).

---

## Pelanggan & Tagihan

### Mengapa pelanggan baru saya belum punya tagihan?

Pelanggan baru yang ditambahkan lewat form seharusnya **langsung punya tagihan pertama** — form
mewajibkan pengisian periode dan nominal prorata sebelum disimpan. Kalau tagihannya belum ada,
kemungkinan pelanggan tersebut diimpor dari MikroTik (jalur yang tidak melalui form tagihan
pertama); tagihan bulanannya akan dibuat scheduler pukul 01:00 pada siklus berikutnya.

### Kenapa nominal tagihan pertama berbeda dari harga paket?

Tagihan pertama dihitung **prorata** — `harga paket × hari terpakai ÷ jumlah hari dalam bulan` —
karena pelanggan biasanya dipasang di tengah bulan. Nominalnya juga bisa ditambah **biaya
pemasangan** dan **PPN** bila profil layanannya punya PPN. Rincian per komponen bisa dilihat di
kuitansi.

### Apakah tagihan bisa di-generate ulang jika ada kesalahan?

Tidak ada tombol generate ulang karena tagihan menggunakan `insertOrIgnore` — jika tagihan bulan tersebut sudah ada, tidak akan dibuat duplikat. Untuk mengubah jumlah tagihan, edit langsung di halaman billing pelanggan.

### Pelanggan saya mengeluh sudah bayar tapi status masih Belum Bayar. Apa yang harus dilakukan?

Jika pembayaran dilakukan di luar sistem (tunai/transfer), gunakan fitur **Catat Pembayaran Manual** di halaman detail tagihan atau detail pelanggan.

### Apakah tagihan bisa dikonfigurasi per-pelanggan?

Ya. Anda bisa mengatur **tanggal jatuh tempo khusus** per-pelanggan yang akan override pengaturan tanggal JT di level router.

---

## Notifikasi

### Notifikasi WhatsApp tidak terkirim, apa penyebabnya?

1. Cek status di **Pengaturan → Notifikasi**, card **WhatsApp Gateway** — harus **Terhubung**.
   Kalau status **Belum Terhubung** atau **Menunggu Scan**, hubungkan/scan ulang nomor WA Anda.
2. Pastikan pelanggan yang dimaksud sudah mengaktifkan toggle **Notifikasi WhatsApp** di data
   pelanggannya — tanpa ini, sistem tidak akan mengirim WA ke pelanggan tersebut sama sekali.
3. Pastikan nomor pelanggan diisi dengan format yang valid (08xxx atau +62xxx)
4. Cek **Tab Notifikasi** di detail pelanggan untuk melihat pesan error spesifik
5. Kalau nomor WA Anda tiba-tiba logout sendiri dari WhatsApp di HP (bukan Anda yang putuskan
   manual), kemungkinan nomor tersebut diblokir WhatsApp — lihat peringatan risiko di halaman
   Pengaturan → Notifikasi. Anda perlu menghubungkan nomor lain.

### Bisa ganti isi pesan notifikasi?

Template pesan otomatis ditentukan oleh sistem dan tidak bisa dikustomisasi bebas. Informasi bisnis Anda (nama, alamat, telepon) otomatis disertakan di footer pesan.

Untuk pesan yang perlu disesuaikan, gunakan **Kirim WhatsApp** manual dari baris tagihan — tersedia beberapa template siap pakai plus opsi **Tulis Sendiri**. Lihat [Kirim Pesan WhatsApp Manual](/panduan/pppoe/tagihan#kirim-pesan-whatsapp-manual).

### Notifikasi H-7 sudah dikirim tapi tidak ada H-3. Kenapa?

Pastikan **H-3 dicentang** di pengaturan notifikasi. Jika baru saja dicentang setelah H-7 sudah terkirim, notifikasi H-3 akan dikirim saat tiba 3 hari sebelum JT.

### Kenapa saya hanya bisa memilih 2 hari pengingat?

Batas itu mengikuti kebijakan WhatsApp Business. Mengirim terlalu banyak pengingat untuk satu tagihan yang sama mudah dianggap spam dan berujung nomor WhatsApp Anda diblokir. Pilihan yang tersedia adalah H-1, H-2, H-3, H-5, dan H-7 — maksimal 2 di antaranya.

### Notifikasi email pelanggan berhenti terkirim di tengah hari. Kenapa?

Kemungkinan Anda menyentuh **batas 200 email per hari** untuk pengiriman lewat server email platform. Pesan yang melewati batas tidak terkirim dan tidak dicoba ulang otomatis — kegagalannya tercatat di Log Notifikasi. Cek progress bar di **Pengaturan → Notifikasi**, dan pertimbangkan memakai [server email sendiri](/panduan/notifikasi#server-email-sendiri-byo-smtp) yang bebas dari batas ini.

### Jam berapa pelanggan diisolir otomatis?

Evaluasi isolir berjalan **setiap jam**, bukan sekali sehari seperti sebelumnya. Namun notifikasi isolir ke pelanggan hanya dikirim dalam jendela **08:00–21:00** — isolir yang terjadi di luar jam itu tetap dieksekusi, pemberitahuannya saja yang ditunda ke pukul 08:00 berikutnya.

---

## Payment Gateway

### Apakah eznom menyediakan payment gateway sendiri?

Tidak. eznom tidak memiliki payment gateway sendiri. eznom berfungsi sebagai **jembatan integrasi** (driver) yang menghubungkan sistem tagihan Anda dengan payment gateway pilihan: **Midtrans**, **Duitku**, **iPaymu**, dan **DOKU**. Anda tetap perlu mendaftar dan mendapatkan akun merchant sendiri di gateway yang dipilih, lalu mengisikan API key-nya di pengaturan eznom.

### Payment gateway mana yang direkomendasikan?

Tergantung kebutuhan:

- **Duitku** — direkomendasikan untuk operator perorangan, proses pendaftaran mudah dan tidak memerlukan badan usaha resmi.
- **Midtrans** — pilihan populer dengan metode pembayaran yang lengkap, cocok jika sudah punya akun merchant.
- **iPaymu & DOKU** — alternatif lain yang juga didukung penuh oleh eznom.

---

## Kontrak

### Link tanda tangan sudah kedaluwarsa. Bagaimana mengirim ulang?

Klik **Kirim Link** di banner kontrak halaman detail pelanggan. Link baru berlaku 7 hari.

### Pelanggan tidak bisa membuka dokumen kontrak.

Pastikan pelanggan memasukkan **ID Pelanggan** yang tepat di halaman verifikasi. ID Pelanggan bisa dilihat di halaman detail pelanggan (Tab Kredensial).

---

## Hotspot

### Voucher yang di-generate tidak muncul di MikroTik.

Pastikan koneksi VPN router aktif (status 🟢 Terhubung) saat generate voucher. Jika VPN terputus, voucher tersimpan di database eznom tetapi tidak tersync ke MikroTik.

### Berapa maksimum voucher yang bisa di-generate sekaligus?

500 voucher per sesi generate.

### Bisakah desain kartu voucher diubah sepenuhnya?

Bisa. Selain Visual Builder (warna & font lewat panel), tersedia editor **HTML Kustom** dengan
empat preset siap pakai dan variabel seperti `{username}`, `{price}`, `{qrcode}`, dan
`{biz_tagline}`. Lihat [Template Kartu Voucher](/panduan/hotspot/template-kartu).

### Bisakah reseller membeli voucher sendiri tanpa saya generate manual?

Bisa. Aktifkan **Portal Reseller** di Pengaturan Router, lalu bagikan URL portalnya. Reseller top up
saldo (transfer manual yang Anda setujui, atau pembayaran online), lalu membeli voucher sendiri —
voucher langsung dibuat dan tersinkron ke MikroTik. Lihat
[Portal Reseller](/panduan/hotspot/reseller#portal-reseller-self-service).

---

## Calon Pelanggan

### Bagaimana calon pelanggan bisa mendaftar sendiri?

Aktifkan **Terima Pendaftaran Calon Pelanggan** di **Pengaturan → Halaman Publik**. Formulir muncul
di beranda publik bisnis Anda, dan setiap pendaftaran masuk ke menu **Calon Pelanggan** disertai
notifikasi WhatsApp ke nomor Anda. Lihat [Calon Pelanggan](/panduan/leads).

### Kenapa tombol "Jadikan Pelanggan" tidak muncul untuk staf saya?

Konversi calon pelanggan menjadi pelanggan PPPoE hanya bisa dilakukan **pemilik akun**.
Sub-pengguna dengan izin modul Calon Pelanggan tetap bisa membaca, mengubah status, dan menghubungi
calon pelanggan.

---

## Peta Jaringan & Inventaris

### Kenapa objek di Peta Jaringan tidak bisa saya geser?

Objek hanya bisa digeser di mode **Tambah Objek**. Di mode Lihat pin sengaja dikunci supaya tarikan
tangan saat menggulir peta tidak diam-diam memindahkan tiang.

### Kenapa citra satelit terlihat kabur saat zoom paling dalam?

Citra beresolusi asli tersedia sampai tingkat tertentu saja, dan di pedesaan lebih dangkal daripada
di kota. Dua tingkat zoom terakhir dihasilkan dengan memperbesar citra yang ada supaya posisinya
tetap presisi — alternatifnya tile kosong bertuliskan "Map data not yet available".

### Saya sudah pasang tiang di peta, kenapa stok tidak berkurang?

Ada dua kemungkinan. Objeknya belum ditautkan ke barang lewat pilihan **Ambil dari stok**, atau
statusnya masih **Rencana** — stok baru terpotong ketika statusnya menjadi **Aktif**. Lihat
[tabel lengkapnya](/panduan/inventaris#potong-stok-otomatis-dari-peta).

### Kenapa stok barang saya minus?

Barangnya sudah dipakai di lapangan tetapi pembeliannya belum dicatat. eznom sengaja tidak
memblokir pemasangan gara-gara nota belum diinput — angka minus itu penandanya, tinggal catat
pembeliannya dan stok kembali benar.

### Tombol pindai kamera tidak berfungsi.

Browser hanya mengizinkan kamera di halaman **HTTPS**. Kalau eznom diakses lewat alamat IP lokal,
kamera memang akan ditolak. Nomor seri selalu bisa diketik manual, satu per baris.

### Modem sudah saya pasang di peta, tapi posisinya salah.

Objek yang ditautkan ke pelanggan mengikuti koordinat pelanggan itu. Perbaiki koordinatnya di
halaman **Kelola Pelanggan**, dan modemnya ikut berpindah. Kalau titik modem memang berbeda dari
titik rumah, geser saja pinnya di mode Ubah Objek.
