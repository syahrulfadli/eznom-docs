# Portal Pembayaran Mandiri Pelanggan

Portal pembayaran adalah halaman web publik yang bisa diakses pelanggan PPPoE **tanpa perlu login** ke sistem eznom. Pelanggan cukup memasukkan ID Pelanggan mereka untuk melihat tagihan dan langsung membayar.

URL portal per bisnis:

```
https://eznom.noahresourcetech.com/bisnis/{slug}/bayar
```

Ganti `{slug}` dengan slug bisnis Anda. URL lengkap ini bisa ditemukan dan disalin dari **Pengaturan → Halaman Publik**.

---

## Prasyarat

Sebelum portal bisa digunakan oleh pelanggan, pastikan minimal salah satu metode pembayaran sudah dikonfigurasi di **Pengaturan → Pembayaran**:

| Yang Dikonfigurasi | Apa yang Muncul di Portal |
|---|---|
| Payment gateway aktif | Tombol **Bayar Sekarang** yang membuka halaman pembayaran |
| Transfer manual aktif | Tombol **WhatsApp** dengan pesan pra-isi ke nomor bisnis Anda + info rekening |
| Keduanya aktif | Kedua tombol muncul sekaligus |
| Tidak ada yang aktif | Tagihan tampil tapi tidak ada tombol bayar — pelanggan diminta menghubungi ISP |

::: tip Nomor WhatsApp
Nomor WhatsApp yang digunakan untuk tombol transfer manual diambil dari **Pengaturan → Profil Bisnis → Nomor Telepon Bisnis**. Pastikan sudah diisi dengan nomor aktif.
:::

---

## Alur Penggunaan oleh Pelanggan

### 1. Masukkan ID Pelanggan

Pelanggan membuka URL portal dan memasukkan ID Pelanggan mereka. ID ini tertera pada kartu langganan atau bisa diberikan langsung oleh admin ISP saat pemasangan.

![Halaman lookup ID pelanggan]

### 2. Informasi yang Ditampilkan

Setelah ID ditemukan, portal menampilkan:

- **Nama pelanggan** dan username PPPoE
- **Nomor telepon** (disamarkan — hanya 4 digit depan dan 4 digit belakang yang tampil, contoh: `6283*******7315`)
- **Alamat** pemasangan (jika diisi)
- **Nama paket** layanan
- **Jenis pembayaran**: Prabayar atau Pascabayar

---

## Prabayar vs Pascabayar

Portal menampilkan informasi yang berbeda tergantung skema pembayaran pelanggan.

### Pascabayar

Menampilkan semua tagihan bulanan yang **belum dibayar** beserta:
- Periode tagihan (contoh: Juni 2026)
- Jumlah tagihan
- Tanggal jatuh tempo
- Badge status: **Belum Dibayar** atau **Jatuh Tempo**

Setiap tagihan memiliki tombol pembayaran sendiri — pelanggan dapat membayar tagihan bulan tertentu secara terpisah jika ada beberapa tunggakan.

### Prabayar

Konteksnya adalah **perpanjangan masa aktif**, bukan tagihan bulanan reguler.

| Kondisi | Yang Ditampilkan |
|---|---|
| Ada tagihan perpanjangan pending | ⚠️ Warning "Layanan berakhir [tgl]" + kartu perpanjangan dengan tombol bayar |
| Tidak ada tagihan pending | ✅ "Layanan aktif s.d. [tgl]" + tombol WhatsApp untuk hubungi ISP jika ingin perpanjang lebih awal |

Badge pada kartu prabayar menggunakan label **"Perlu Diperpanjang"** — tidak ada istilah "jatuh tempo" yang tidak relevan untuk skema prabayar.

---

## Cara Membagikan Portal ke Pelanggan

Beberapa cara yang direkomendasikan:

**Saat pemasangan**
- Cetak atau kirim URL portal beserta ID Pelanggan via WhatsApp saat teknisi selesai memasang

**Di notifikasi tagihan**
- Tambahkan URL portal di pesan WhatsApp/email tagihan bulanan agar pelanggan bisa langsung mengaksesnya

**Di media sosial / grup WhatsApp**
- Bagikan link portal bisnis di grup pelanggan dengan pesan seperti:
  > "Cek tagihan dan bayar internet Anda secara mandiri di: `https://eznom.noahresourcetech.com/bisnis/nama-bisnis-anda/bayar` — masukkan ID Pelanggan Anda"

**Di halaman beranda publik**
- Link **Bayar Tagihan** sudah otomatis muncul di navbar halaman publik bisnis Anda (`/bisnis/{slug}`) — pelanggan yang mengunjungi beranda bisa langsung menemukannya

---

## Keamanan

- **ID Pelanggan** adalah pengenal unik 12 karakter acak (contoh: `A3KP2X8MNQRT`) — tidak mudah ditebak
- **Nomor telepon** selalu disamarkan di portal — hanya pemilik akun yang mengenali nomornya
- **Link bayar gateway** berlaku selama 7 hari sejak dibuka — setelah itu pelanggan perlu membuka portal lagi untuk mendapatkan link baru
- Portal tidak menampilkan password PPPoE pelanggan

---

## Pertanyaan Umum

**Pelanggan tidak tahu ID Pelanggannya.**
ID Pelanggan bisa dilihat di halaman detail pelanggan di panel ISP (PPPoE → Pelanggan → klik nama pelanggan). Kirimkan via WhatsApp ke pelanggan yang bersangkutan.

**Pelanggan memasukkan ID yang benar tapi muncul "Tidak Ditemukan".**
Pastikan pelanggan memasukkan ID persis seperti yang tertera — huruf besar, tanpa spasi. ID bersifat case-insensitive (sistem mengubah ke huruf besar otomatis) namun spasi di awal/akhir bisa jadi penyebab.

**Tombol bayar tidak muncul meski sudah ada tagihan.**
Periksa apakah metode pembayaran sudah dikonfigurasi di **Pengaturan → Pembayaran**. Jika belum ada satu pun yang aktif, portal hanya menampilkan tagihan tanpa opsi pembayaran.

**Tagihan sudah lunas tapi masih muncul di portal.**
Tagihan yang sudah lunas tidak ditampilkan — portal hanya menampilkan tagihan dengan status *belum dibayar* atau *jatuh tempo*. Jika muncul sesudah pembayaran dikonfirmasi, minta pelanggan refresh halaman.
