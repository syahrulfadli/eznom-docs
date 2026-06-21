# FAQ

Pertanyaan yang sering ditanyakan tentang penggunaan eznom.

---

## Umum

### Apa itu eznom?

eznom adalah platform manajemen ISP berbasis web untuk operator RT/RW Net dan WISP. eznom membantu mengelola pelanggan PPPoE, hotspot, tagihan bulanan, dan notifikasi otomatis dari satu dasbor.

### Apakah eznom mendukung beberapa router?

Ya. Satu akun eznom bisa mengelola banyak router MikroTik. Setiap router dikelola secara terpisah dengan data pelanggan, tagihan, dan keuangan masing-masing.

### Router MikroTik versi berapa yang didukung?

Semua versi RouterOS yang mendukung API (v6 dan v7). Untuk REST API, diperlukan RouterOS 7.1 ke atas.

---

## Router & VPN

### Mengapa router perlu terhubung via VPN?

API MikroTik biasanya hanya bisa diakses dari jaringan lokal. VPN memungkinkan server eznom berkomunikasi dengan router Anda secara aman melalui internet.

### Router saya status VPN "Terputus", apa yang harus dilakukan?

1. Pastikan konfigurasi VPN di MikroTik sudah benar sesuai panduan wizard
2. Cek apakah port VPN tidak diblokir oleh firewall ISP upstream
3. Coba restart interface VPN di MikroTik
4. Jika masih gagal, buka tiket ke tim support eznom

### Apakah sinkronisasi PPPoE berjalan otomatis?

Ya. eznom melakukan sinkronisasi status pelanggan (online/offline, IP, uptime) setiap **1 menit** secara otomatis selama VPN router terhubung.

---

## Pelanggan & Tagihan

### Mengapa pelanggan baru saya belum punya tagihan?

Tagihan di-generate setiap hari pukul 01:00. Jika pelanggan baru ditambahkan hari ini, tagihannya akan muncul keesokan harinya.

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

Untuk saat ini, template pesan sudah ditentukan oleh sistem dan tidak bisa dikustomisasi bebas. Informasi bisnis Anda (nama, alamat, telepon) akan otomatis disertakan di footer pesan.

### Notifikasi H-7 sudah dikirim tapi tidak ada H-3. Kenapa?

Pastikan **H-3 dicentang** di pengaturan notifikasi. Jika baru saja dicentang setelah H-7 sudah terkirim, notifikasi H-3 akan dikirim saat tiba 3 hari sebelum JT.

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
