# Calon Pelanggan (Leads)

Halaman publik bisnis Anda bisa dilengkapi formulir **"Daftar Berlangganan"**. Setiap pengunjung
yang mengisi formulir itu masuk ke **inbox Calon Pelanggan** di panel eznom — lengkap dengan nama,
nomor HP, alamat, dan paket yang diminati.

Alurnya menutup celah lama: dulu calon pelanggan yang menemukan halaman publik Anda tidak punya
cara mendaftar selain menghubungi nomor WhatsApp secara manual, dan datanya tercecer di chat.

---

## Mengaktifkan Formulir Pendaftaran

1. Buka **Pengaturan → Halaman Publik**
2. Aktifkan toggle **Terima Pendaftaran Calon Pelanggan**
3. Simpan

Formulir langsung muncul di halaman beranda publik Anda (`/bisnis/{slug}`).

::: info Paket yang bisa dipilih calon pelanggan
Dropdown paket di formulir hanya menampilkan **paket PPPoE (berlangganan)** — mengikuti paket yang
Anda pilih untuk ditampilkan di **Pengaturan → Halaman Publik**. Paket hotspot sengaja tidak
ditawarkan di sini karena voucher hotspot dibeli langsung, bukan lewat pendaftaran.
:::

---

## Isi Formulir

| Field | Wajib | Keterangan |
|---|---|---|
| **Nama** | ✅ | Maks 100 karakter |
| **No. HP / WhatsApp** | ✅ | Hanya angka, `+`, `-`, spasi, dan tanda kurung |
| **Alamat** | — | Alamat calon lokasi pemasangan |
| **Paket yang diminati** | — | Dipilih dari daftar paket PPPoE Anda |
| **Pesan** | — | Catatan bebas dari calon pelanggan, maks 1.000 karakter |

::: tip Perlindungan dari spam
Formulir dilindungi dua lapis tanpa CAPTCHA yang merepotkan pengunjung: **honeypot** (kolom
tersembunyi yang hanya diisi bot) dan **rate limit 5 pengiriman per jam** per alamat IP.
:::

---

## Notifikasi Pendaftaran Baru

Begitu formulir dikirim, eznom mengirim pesan WhatsApp berisi ringkasan calon pelanggan ke
**nomor Anda** — bukan ke calon pelanggannya.

Nomor tujuan diambil dari **No. HP akun pemilik**; jika kosong, dipakai **Nomor Telepon Bisnis**
di Pengaturan → Profil Bisnis.

::: warning Butuh gateway WhatsApp aktif
Notifikasi ini dikirim lewat [WhatsApp Gateway](/panduan/notifikasi#whatsapp-gateway) Anda. Kalau
gateway belum terhubung, pendaftaran **tetap tersimpan** di inbox — hanya notifikasinya yang tidak
terkirim. Biasakan mengecek menu Calon Pelanggan secara berkala.
:::

---

## Inbox Calon Pelanggan

Buka menu **Calon Pelanggan** di sidebar akun.

### Status

| Status | Arti |
|---|---|
| **Baru** | Belum ditindaklanjuti |
| **Dihubungi** | Sudah Anda hubungi, menunggu keputusan |
| **Jadi Pelanggan** | Sudah dikonversi menjadi pelanggan PPPoE |
| **Diarsipkan** | Tidak dilanjutkan (batal, di luar area, duplikat) |

Ubah status lewat tombol di baris masing-masing. Gunakan filter status di atas tabel untuk
menyaring.

### Menghubungi Calon Pelanggan

Klik tombol **WhatsApp** pada baris calon pelanggan untuk membuka `wa.me` dengan pesan tindak
lanjut yang sudah terisi, menyebut nama dan paket yang mereka minati. Anda tinggal menyunting
seperlunya lalu kirim.

### Deteksi Duplikat

Kalau nomor HP calon pelanggan sudah terdaftar sebagai pelanggan PPPoE, eznom menandainya di
inbox — supaya pelanggan lama yang iseng mengisi formulir lagi tidak berujung jadi data ganda.

---

## Konversi Menjadi Pelanggan PPPoE

1. Di baris calon pelanggan, klik **Jadikan Pelanggan**
2. Jika Anda punya lebih dari satu router, pilih router tujuan (kalau hanya satu, langsung lompat)
3. Form **Tambah Pelanggan** terbuka dengan data yang sudah terisi:
   - Nama, No. HP, dan Alamat dari formulir pendaftaran
   - **Profil layanan** dicocokkan otomatis dari paket yang diminati — hanya sebagai saran,
     Anda tetap bisa menggantinya
4. Lengkapi sisanya (username, password, koordinat, tipe pembayaran, biaya pemasangan) lalu simpan

Setelah pelanggan tersimpan, calon pelanggan tadi otomatis berubah status menjadi
**Jadi Pelanggan** dan tertaut ke data pelanggan yang baru dibuat — jadi tidak bisa dikonversi dua
kali.

::: warning Konversi hanya untuk pemilik akun
Tombol **Jadikan Pelanggan** hanya tersedia bagi pemilik akun. Sub-pengguna — walau punya izin
modul **Calon Pelanggan** — bisa membaca, mengubah status, dan menghubungi calon pelanggan, tapi
tidak bisa mengkonversinya menjadi pelanggan PPPoE.
:::

---

## Izin Sub-Pengguna

Akses ke inbox dijaga modul izin **Calon Pelanggan** (`leads`), terpisah dari modul lain karena
berisi data pribadi prospek. Preset role bawaan (Teknisi, Keuangan, Operator Hotspot) semuanya
**tidak** diberi akses ini secara default — hanya Full Access dan custom role yang Anda atur
sendiri. Lihat [Sub-Pengguna](/panduan/pengaturan#sub-pengguna).
