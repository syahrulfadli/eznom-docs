# Halaman Isolir

Saat pelanggan PPPoE diisolir dari dasbor eznom, koneksinya secara otomatis dialihkan ke halaman khusus yang menginformasikan alasan penonaktifan dan cara menghubungi operator. WhatsApp tetap dapat diakses sehingga pelanggan dapat langsung menghubungi Anda.

---

## Cara Kerja

### 1. Assign IP Statis

Ketika pelanggan diisolir, eznom menetapkan IP statis dari pool isolir ke PPPoE secret pelanggan
(`remote-address`, dengan `local-address` = IP `.1` dari subnet yang sama). Pool bawaan dicoba
berurutan, dan pool berikutnya dipakai bila yang sebelumnya penuh:

1. `172.18.39.0/24`
2. `172.19.39.0/24`
3. `10.255.255.0/24`
4. `192.168.255.0/24`

Urutannya bisa diubah, atau ditambah subnet `/24` sendiri, di **Pengaturan Router → Range IP
Isolir**. Lakukan ini kalau salah satu subnet di atas sudah dipakai di jaringan Anda. Perubahan
urutan hanya berlaku untuk pelanggan yang diisolir setelahnya.

Secret yang sedang di-disable diaktifkan lagi, lalu sesi aktif di-kick agar pelanggan reconnect dan
mendapatkan IP isolir tersebut. Semua operasi dilakukan via MikroTik API secara otomatis.

### 2. Firewall Address-List

IP statis pelanggan yang diisolir dimasukkan ke address-list `eznom-isolated` di MikroTik. Address-list ini menjadi acuan semua rule firewall izolasi.

### 3. Aturan Firewall Otomatis

eznom memasang aturan berikut di MikroTik:

| Jenis | Nama Rule | Fungsi |
|---|---|---|
| **Mangle** | `Bypass IP Hotspot dan ISOLIR by eznom` | Lalu lintas web (port 80/443) pelanggan terisolir tidak ikut ditandai hotspot, supaya bisa dialihkan |
| **NAT** | `BYPASS WA FROM WEBPROXY by eznom` | Lalu lintas ke IP WhatsApp (`WA_eznom`) tidak dialihkan ke halaman isolir |
| **NAT** | `Redirect Isolir PPPoE by eznom` | Alihkan HTTP (port 80) dari `eznom-isolated` ke web proxy `:8383` |
| **Filter** | `allow established related by eznom` | Izinkan koneksi lanjutan ke WhatsApp yang sudah tersambung |
| **Filter** | `allow DNS UDP isolated by eznom` | Izinkan DNS (UDP 53) |
| **Filter** | `allow DNS TCP isolated by eznom` | Izinkan DNS (TCP 53) |
| **Filter** | `allow WA isolated by eznom` | Izinkan lalu lintas ke IP WhatsApp |
| **Filter** | `allow WA response isolated by eznom` | Izinkan balasan dari IP WhatsApp |
| **Filter** | `Drop UDP Isolir except DNS by eznom` | Blokir UDP lain dari `eznom-isolated` |
| **Filter** | `drop isolated except HTTP HTTPS by eznom` | Blokir TCP lain dari `eznom-isolated` kecuali port 80. Walau namanya menyebut HTTPS, port 443 **ikut diblokir** |

Selain itu eznom menyalakan **web proxy** di port `8383` dengan satu rule akses
(`eznom-proxy-access`) yang mengarahkan permintaan ke halaman isolir, dan mengisi address-list
`IP-BYPASS` dengan subnet pool isolir utama serta subnet hotspot yang terdeteksi.

**Kapan dipasang:** saat tes koneksi router berhasil, setiap kali ada pelanggan yang diisolir, dan
diperiksa ulang otomatis **setiap hari**. Rule yang hilang, di-disable, atau rusak dipasang ulang
sendiri.

::: info Rule tetap terpasang walau tidak ada yang diisolir
Rule isolir **tidak dihapus** ketika tidak ada lagi pelanggan terisolir. Ini normal dan aman: semua
rule hanya berlaku untuk IP di address-list `eznom-isolated`, jadi lalu lintas pelanggan lain tidak
tersentuh. Jangan hapus rule bertanda `by eznom`, karena isolir berikutnya akan gagal sampai rule
dipasang ulang.
:::

### Situs HTTPS

Hanya lalu lintas **HTTP (port 80)** yang dialihkan ke halaman isolir. Situs **HTTPS**, yaitu
sebagian besar situs dan aplikasi, diblokir dan sekadar gagal dimuat, tanpa menampilkan halaman
isolir. Pelanggan biasanya tetap melihat halaman isolir karena:

- ponsel dan laptop memeriksa koneksi lewat alamat HTTP, lalu menampilkan notifikasi
  *"Login ke jaringan"* yang membuka halaman isolir, atau
- pelanggan membuka alamat `http://` biasa, misalnya `http://neverssl.com`.

### 4. WhatsApp Tetap Aktif

eznom membuat script DNS (`eznom-wa-dns`) yang berjalan setiap jam dan saat router startup, ditambah alamat domain WhatsApp utama sebagai entri tetap. Script ini me-resolve domain WhatsApp (`whatsapp.com`, `whatsapp.net`, `wa.me`, dll.) dan menyimpan hasilnya ke address-list `WA_eznom` dengan TTL 2 jam. IP-IP inilah yang dikecualikan dari redirect agar pelanggan tetap bisa mengakses WhatsApp.

Selain hasil resolve script tersebut, eznom juga **memanen IP WhatsApp dari DNS cache router**
(script `eznom-wa-cache`, tiap 2 menit) dan menambahkannya ke `WA_eznom`. WhatsApp memakai banyak IP yang berputar; mengambilnya dari cache
berarti IP yang benar-benar dipakai perangkat di jaringan Anda ikut ter-whitelist, bukan hanya yang
kebetulan muncul saat script dijalankan.

### 5. Halaman Isolir di Web Proxy

Saat konfigurasi halaman isolir disimpan, eznom secara otomatis mengirim HTML halaman ke MikroTik (via `/tool/fetch`) dan menyimpannya di `webproxy/error.html`. Web proxy MikroTik berjalan di port `:8383` dan menampilkan halaman ini ke pelanggan yang mencoba browsing.

HTML yang dikirim bersifat **standalone** — semua CSS sudah tertanam di dalamnya, tidak ada dependensi eksternal, sehingga tampil dengan benar meski router tidak bisa mengakses internet.

### 6. Reconnect Pelanggan

Saat pelanggan disambung ulang (reconnect):
- IP dihapus dari address-list `eznom-isolated`
- `remote-address` dan `local-address` dihapus dari PPPoE secret, sehingga pelanggan kembali
  mendapat IP dari pool yang diatur di profil PPPoE-nya
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

Klik **Simpan Konfigurasi** untuk menyimpan dan langsung mengirim halaman isolir terbaru ke router.

Jika pengiriman gagal (misalnya router sedang offline), konfigurasi tetap tersimpan tetapi **tidak
dikirim ulang otomatis**. Router tetap memakai halaman lama. Begitu router kembali **Terhubung**,
buka halaman ini dan klik **Simpan Konfigurasi** sekali lagi.

::: warning Butuh policy `test` di user API
Router mengunduh halaman isolir dengan `/tool/fetch`, yang membutuhkan policy **test** di group
user API MikroTik. Tanpa itu muncul pesan *"user API MikroTik tidak memiliki policy test"*.
Tambahkan policy tersebut, lalu simpan ulang.
:::
