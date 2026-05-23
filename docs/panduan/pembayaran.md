# Pengaturan Pembayaran

Buka **Pengaturan → Pembayaran** untuk mengkonfigurasi metode pembayaran tagihan PPPoE untuk pelanggan Anda.

Tersedia dua metode yang dapat diaktifkan secara independen — salah satu, keduanya, atau keduanya sekaligus.

---

## Mendaftar ke Midtrans

Sebelum bisa menggunakan pembayaran online, Anda perlu mendaftar dan mendapatkan API key dari Midtrans. Panduan registrasi juga tersedia langsung di halaman **Pengaturan → Pembayaran**.

### Langkah Pendaftaran

**1. Daftar akun Midtrans**

Buka [dashboard.midtrans.com](https://dashboard.midtrans.com) dan klik **Register**.

- **Personal** — cocok untuk yang baru mulai. Cukup dengan KTP. Limit transaksi lebih rendah.
- **Business** — direkomendasikan jika sudah punya banyak pelanggan. Membutuhkan dokumen usaha (SIUP/NIB) dan memiliki limit transaksi yang jauh lebih tinggi.

**2. Siapkan halaman website bisnis**

Midtrans membutuhkan URL website bisnis, Kebijakan Privasi, dan Syarat & Ketentuan saat proses review. Pilih salah satu cara:

- **Gunakan halaman publik eznom** — Atur slug di **Pengaturan → Halaman Publik**. Eznom otomatis menyediakan ketiga URL yang dibutuhkan. Lihat panduan [Halaman Publik](/panduan/halaman-publik).
- **Gunakan website sendiri** — Pastikan website Anda sudah memiliki halaman Kebijakan Privasi dan Syarat & Ketentuan. Halaman Syarat & Ketentuan sebaiknya menyertakan kebijakan refund agar lolos review Midtrans.

**3. Lengkapi profil bisnis di Midtrans**

Isi di dashboard Midtrans:
- Nama bisnis, nomor telepon, email bisnis
- Kategori usaha: pilih **"Internet Service Provider"** atau **"Utilities & Telecom"**
- URL website, Kebijakan Privasi, dan Syarat & Ketentuan — gunakan URL dari halaman publik eznom

**4. Upload dokumen legalitas**

Midtrans meminta setidaknya salah satu:
- KTP pemilik usaha
- SIUP / NIB
- Akta perusahaan

Siapkan scan atau foto yang jelas (format JPG/PNG, maks 5 MB).

**5. Isi informasi rekening bank**

Tambahkan rekening bank penerima dana. Nama pemilik rekening harus sesuai dengan nama bisnis atau pemilik yang terdaftar di KTP.

**6. Aktifkan mode Production**

Setelah akun diverifikasi (biasanya 1–3 hari kerja), Midtrans akan mengirim email konfirmasi. Buka **Settings → Access Keys** di dashboard Midtrans, salin **Server Key** dan **Client Key** Production, lalu tempel di kolom di halaman **Pengaturan → Pembayaran**.

::: tip Sandbox dulu
Gunakan mode Sandbox untuk testing sebelum Production. Transaksi Sandbox tidak menggunakan uang nyata.
:::

---

## Pembayaran Online (Midtrans)

Pelanggan menerima link pembayaran dan dapat membayar langsung via kartu kredit, transfer bank virtual account, e-wallet, dan metode lain yang tersedia di Midtrans.

### Cara Mengaktifkan

1. Buka **Pengaturan → Pembayaran**
2. Aktifkan toggle **"Aktifkan pembayaran online"**
3. Isi **Server Key** dari akun Midtrans Anda
4. Atur mode: **Sandbox** untuk testing, **Production** untuk transaksi nyata
5. Klik **Simpan**

### Konfigurasi Webhook

Agar status tagihan diperbarui otomatis setelah pelanggan membayar, daftarkan URL ini di Midtrans Dashboard → **Settings → Payment → Payment Notification URL**:

```
https://eznom.noahresourcetech.com.com/midtrans/webhook
```

---

## Pembayaran Manual / Transfer Rekening

Pelanggan melakukan transfer bank dan mengkonfirmasi ke Anda. Informasi rekening dikirimkan otomatis ke pelanggan saat admin menekan tombol **Buat & Kirim Tagihan**.

### Cara Mengaktifkan

1. Buka **Pengaturan → Pembayaran**
2. Aktifkan toggle **"Aktifkan pembayaran manual"**
3. Isi informasi rekening:

| Field | Contoh |
|---|---|
| **Nama Bank** | BCA, BRI, Mandiri, BNI |
| **Nomor Rekening** | 1234567890 |
| **Nama Pemilik Rekening** | Sesuai buku tabungan |

4. Klik **Simpan**

---

## Perilaku Tombol "Buat & Kirim Tagihan"

Tombol ini di halaman **Billing PPPoE** menyesuaikan isi pesan yang dikirim berdasarkan konfigurasi di halaman ini:

| Konfigurasi | Isi Pesan yang Dikirim |
|---|---|
| Online saja | Link pembayaran Midtrans |
| Manual saja | Informasi rekening bank untuk transfer |
| Keduanya aktif | Link pembayaran Midtrans + informasi rekening sebagai alternatif |
| Keduanya nonaktif | ❌ Error — tidak bisa mengirim tagihan |

::: warning
Jika kedua metode dinonaktifkan, tombol "Buat & Kirim Tagihan" akan menampilkan pesan error. Aktifkan minimal satu metode agar pengiriman tagihan berfungsi.
:::
