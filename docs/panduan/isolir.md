# Halaman Isolir

Saat pelanggan PPPoE diisolir dari dasbor eznom, koneksinya secara otomatis dialihkan ke halaman khusus yang menginformasikan alasan penonaktifan dan cara menghubungi operator. WhatsApp tetap dapat diakses sehingga pelanggan dapat langsung menghubungi Anda.

---

## Cara Kerja

### 1. Assign IP Statis

Ketika pelanggan diisolir, eznom menetapkan IP statis dari subnet `172.18.39.0/24` ke PPPoE secret pelanggan. Sesi aktif di-kick agar pelanggan reconnect dan mendapatkan IP statis tersebut. Semua operasi dilakukan via MikroTik API secara otomatis.

### 2. Firewall Address-List

IP statis pelanggan yang diisolir dimasukkan ke address-list `eznom-isolated` di MikroTik. Address-list ini menjadi acuan semua rule firewall izolasi.

### 3. Aturan Firewall Otomatis

Saat ada pelanggan pertama yang diisolir, eznom secara otomatis membuat aturan firewall berikut di MikroTik:

| Jenis | Nama Rule | Fungsi |
|---|---|---|
| **Mangle** | `Bypass IP Hotspot dan ISOLIR by eznom` | Bypass hotspot marking agar traffic isolir bisa diarahkan |
| **NAT** | `Redirect Isolir PPPoE by eznom` | Redirect HTTP/HTTPS dari `eznom-isolated` ke web proxy `:8383`, kecuali traffic WhatsApp |
| **Filter** | `wa.me bypass by eznom` | Izinkan akses wa.me |
| **Filter** | `whatsapp.com bypass by eznom` | Izinkan akses whatsapp.com (via Layer7) |
| **Filter** | `allow connection established related by eznom` | Izinkan koneksi yang sudah established |
| **Filter** | `Bypass WA by eznom` | Izinkan traffic ke IP WhatsApp (dari DNS resolve) |
| **Filter** | `Drop Isolir by eznom` | Blokir semua traffic lain dari `eznom-isolated` |

Semua rule dihapus otomatis ketika tidak ada lagi pelanggan yang diisolir.

### 4. WhatsApp Tetap Aktif

eznom membuat script DNS (`eznom-wa-dns`) yang berjalan setiap jam dan saat router startup. Script ini me-resolve domain WhatsApp (`whatsapp.com`, `whatsapp.net`, `wa.me`, dll.) dan menyimpan hasilnya ke address-list `WA_eznom` dengan TTL 2 jam. IP-IP inilah yang dikecualikan dari redirect agar pelanggan tetap bisa mengakses WhatsApp.

Selain hasil resolve script tersebut, eznom juga **memanen IP WhatsApp dari DNS cache router** dan
menambahkannya ke `WA_eznom`. WhatsApp memakai banyak IP yang berputar; mengambilnya dari cache
berarti IP yang benar-benar dipakai perangkat di jaringan Anda ikut ter-whitelist, bukan hanya yang
kebetulan muncul saat script dijalankan.

### 5. Halaman Isolir di Web Proxy

Saat konfigurasi halaman isolir disimpan, eznom secara otomatis mengirim HTML halaman ke MikroTik (via `/tool/fetch`) dan menyimpannya di `webproxy/error.html`. Web proxy MikroTik berjalan di port `:8383` dan menampilkan halaman ini ke pelanggan yang mencoba browsing.

HTML yang dikirim bersifat **standalone** — semua CSS sudah tertanam di dalamnya, tidak ada dependensi eksternal, sehingga tampil dengan benar meski router tidak bisa mengakses internet.

### 6. Reconnect Pelanggan

Saat pelanggan di-unrestore (diaktifkan kembali):
- IP dihapus dari address-list `eznom-isolated`
- IP statis dihapus dari PPPoE secret (kembali ke pool DHCP)
- Sesi aktif di-kick agar pelanggan reconnect dan mendapatkan IP normal

---

## Konfigurasi Halaman Isolir

Buka **Router → Pengaturan → Halaman Isolir**.

### Tema

Pilih salah satu dari enam tema siap pakai. Semua tema memakai **CSS murni** — tanpa gambar, font
eksternal, atau JavaScript — sehingga halaman tetap tampil sempurna meski pelanggan yang diisolir
tidak punya akses internet sama sekali, dan tetap muat di storage MikroTik yang terbatas.

| Tema | Tampilan |
|---|---|
| **Klasik** | Kartu putih dengan header merah lembut — tampilan bawaan eznom |
| **Midnight** | Gelap elegan dengan kartu kaca dan aksen biru langit |
| **Sunset** | Gradasi hangat jingga–magenta, kartu putih membulat |
| **Terminal** | Gaya konsol retro: monospace hijau fosfor di layar hitam |
| **Minimal** | Tipografi bersih, sudut tegas, rata kiri tanpa bayangan |
| **Ocean** | Gradasi biru laut dengan header bergradasi dan kartu terang |

Chip warna di sebelah nama tema menunjukkan palet yang dipakai.

::: info Sebagian tema membawa background sendiri
Tema **Midnight**, **Sunset**, **Terminal**, dan **Ocean** sudah punya latar sendiri. Memilih salah
satunya otomatis mengubah pengaturan Background ke mode **Tema**, sehingga pilihan warna solid atau
gambar tidak lagi berlaku. Tema **Klasik** dan **Minimal** tetap menghormati Background yang Anda
pilih.
:::

### Konten Halaman

| Field | Keterangan |
|---|---|
| **Judul** | Judul utama kartu, misal `Akses Internet Dinonaktifkan` |
| **Pesan** | Kalimat penjelas di bawah judul |

### Background

| Pilihan | Keterangan |
|---|---|
| **Tema** | Latar dibawa oleh tema yang dipilih (otomatis untuk tema tertentu) |
| **Warna Solid** | Pilih warna via color picker atau masukkan kode hex |
| **Gambar (URL)** | URL gambar publik sebagai background halaman |

### Logo

Upload logo bisnis (PNG, JPG, SVG, WebP — maks 2 MB). Logo tampil di bagian atas kartu. Gambar otomatis di-resize ke lebar maksimal 200 px dan dikompresi sebelum dikirim ke router.

### Informasi Kontak

| Field | Keterangan |
|---|---|
| **Label Kontak** | Teks tombol, misal `Hubungi Kami` |
| **Nomor / Kontak** | Nomor WhatsApp — otomatis dijadikan link `wa.me` |

Jika field ini kosong, nomor dari **Pengaturan Bisnis** digunakan sebagai fallback.

### Paket Layanan

Tampilkan daftar paket PPPoE yang tersedia di halaman isolir agar pelanggan mengetahui pilihan upgrade. Aktifkan toggle, lalu centang paket-paket yang ingin ditampilkan.

Urutan tampilan dapat diatur dengan tombol panah atas/bawah di bagian **Urutan Tampilan**.

Nama paket ditampilkan dengan prioritas: **Nama Group** → **Service Name** → **Nama Profile**.

### Footer

Teks di bagian bawah halaman. Default: `Powered by eznom`. Kosongkan untuk menggunakan default, atau isi dengan teks custom misal nama bisnis Anda.

### Custom CSS

CSS tambahan yang diinjeksi ke halaman isolir, di atas CSS tema yang dipilih. Gunakan ini untuk
menyesuaikan warna, font, atau tata letak sesuai identitas bisnis Anda.

::: warning Isinya disaring
Custom CSS dan URL background dibersihkan sebelum dikirim ke router. Konstruksi yang bisa
menyisipkan skrip atau memuat sumber daya eksternal ditolak — halaman isolir tampil di perangkat
pelanggan, jadi tidak boleh jadi jalan masuk kode asing.
:::

---

## Preview

Sisi kanan halaman konfigurasi menampilkan **preview** yang merender HTML persis sama dengan yang akan dikirim ke router. Preview diperbarui setiap kali Anda menyimpan konfigurasi.

---

## Kirim Ulang ke Router

Klik **Simpan Konfigurasi** untuk menyimpan dan langsung mengirim halaman isolir terbaru ke router. Jika router sedang offline, konfigurasi tetap tersimpan dan akan dikirim saat koneksi tersedia.
