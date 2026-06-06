# Pengaturan Pembayaran

Buka **Pengaturan → Pembayaran** untuk mengkonfigurasi metode pembayaran tagihan PPPoE pelanggan Anda.

Tersedia dua jenis metode yang dapat diaktifkan secara independen — salah satu, keduanya, atau keduanya sekaligus.

---

## Pembayaran Online (Payment Gateway)

Pelanggan menerima link dan dapat membayar langsung secara online. Eznom mendukung empat pilihan payment gateway, pilih salah satu sesuai kemudahan pendaftaran dan kebutuhan pelanggan Anda.

| Gateway | Cocok untuk | Metode bayar | Tampilan |
|---|---|---|---|
| **Duitku** | Perorangan & usaha kecil | VA, OVO, DANA, ShopeePay, LinkAja | POP popup di halaman Eznom |
| **iPaymu** | Perorangan dengan NPWP | VA, QRIS, e-Wallet | Redirect halaman iPaymu |
| **Midtrans** | Usaha yang butuh reputasi/brand kuat | VA, Kartu Kredit, GoPay, QRIS, dll. | Snap popup |
| **DOKU** | Perorangan & badan usaha | VA, QRIS, OVO, ShopeePay, DANA, Kartu | Checkout popup di halaman Eznom |

::: tip Rekomendasi untuk RT/RW net
- **Belum punya NPWP atau badan usaha** → gunakan **Duitku** (paling ringan persyaratannya)
- **Punya NPWP, belum ada badan usaha** → bisa pilih **iPaymu** atau **DOKU** sebagai alternatif
- **Punya badan usaha** → semua gateway tersedia; **DOKU** jadi pilihan solid dengan metode terlengkap
:::

### Cara Mengaktifkan

1. Buka **Pengaturan → Pembayaran**
2. Aktifkan toggle **"Aktifkan pembayaran online"**
3. Pilih gateway yang diinginkan (Midtrans / Duitku / DOKU / iPaymu)
4. Isi kredensial sesuai gateway yang dipilih
5. Klik **Simpan**

---

## Midtrans

### Pendaftaran

1. Daftar di [dashboard.midtrans.com](https://dashboard.midtrans.com)
2. Pilih tipe akun:
   - **Personal** — cukup KTP, metode pembayaran yang tersedia lebih terbatas
   - **Business** — butuh SIUP/NIB, akses semua metode (VA bank, kartu kredit, dll.)
3. **Website wajib** — Midtrans memerlukan URL website beserta halaman Kebijakan Privasi dan Syarat & Ketentuan. Gunakan halaman publik Eznom atau website sendiri
4. Upload KTP / SIUP / NIB
5. Isi rekening bank penerima dana (nama rekening harus sesuai tipe akun)
6. Setelah diverifikasi (1–3 hari kerja), salin **Server Key** dari `Settings → Access Keys`

::: warning PKS
Midtrans terkadang meminta **Perjanjian Kerja Sama (PKS)** dengan ISP induk saat proses review bisnis kecil. Siapkan salinannya agar proses tidak terhenti.
:::

### Konfigurasi Webhook

Daftarkan URL berikut di Midtrans Dashboard → **Settings → Payment → Payment Notification URL**:

```
https://eznom.noahresourcetech.com/midtrans/webhook
```

### Field yang Diisi di Eznom

| Field | Keterangan |
|---|---|
| Mode | Sandbox (testing) atau Production (live) |
| Server Key | Dimulai `SB-Mid-server-` (sandbox) atau `Mid-server-` (production) |
| Client Key | Opsional — untuk Snap popup |

### Testing Sandbox

1. Aktifkan mode **Sandbox** di Pengaturan
2. Gunakan kartu test Midtrans: `4811 1111 1111 1114` / exp: `01/39` / CVV: `123` / OTP: `112233`
3. Untuk VA: buka link pembayaran, pilih Bank Transfer, catat nomor VA, konfirmasi pembayaran di Midtrans Simulator ([simulator.sandbox.midtrans.com](https://simulator.sandbox.midtrans.com))

---

## Duitku

Duitku menggunakan **POP Widget** — popup muncul langsung di halaman Eznom tanpa redirect ke situs Duitku.

### Pendaftaran

1. Daftar di [duitku.com](https://duitku.com) — persyaratan lebih ringan dari Midtrans
2. Buat **Project** di dashboard
3. Salin **Merchant Code** dan **API Key** dari detail project
4. Aktifkan metode pembayaran yang diinginkan di menu **Channel Pembayaran**

### Konfigurasi Webhook

Isi **Callback URL** di detail project Duitku:

```
https://eznom.noahresourcetech.com/duitku/webhook
```

### Field yang Diisi di Eznom

| Field | Keterangan |
|---|---|
| Mode | Sandbox atau Production |
| Merchant Code | Kode unik project (contoh: `D1234`) |
| API Key | Secret key untuk tanda tangan request |
| Metode Pembayaran | Metode utama yang ditampilkan di POP (OVO, BCA VA, dll.) |

### Testing Sandbox

1. Daftar akun sandbox di [sandbox.duitku.com](https://sandbox.duitku.com)
2. Buat project sandbox → salin **Merchant Code** dan **API Key** sandbox
3. Aktifkan mode **Sandbox** di Eznom
4. Buka link pembayaran dari billing pelanggan → popup POP terbuka
5. Gunakan metode test yang tersedia di popup sandbox (OVO test, VA test, dll.)
6. Setelah simulasi berhasil, cek log Laravel (`storage/logs/laravel.log`) untuk konfirmasi webhook diterima

::: tip
Jika popup tidak terbuka, pastikan browser tidak memblokir popup. Jika masih gagal, gunakan tombol **"Coba via Browser"** sebagai fallback ke halaman Duitku.
:::

---

## iPaymu

iPaymu menggunakan **redirect payment** — pelanggan diarahkan ke halaman pembayaran iPaymu yang menampilkan berbagai metode (VA, QRIS, e-wallet) lalu kembali ke Eznom setelah selesai.

::: warning Wajib NPWP + batas transaksi
iPaymu **mewajibkan NPWP** saat pendaftaran. Tanpa NPWP, gunakan Duitku sebagai alternatif.
Akun tanpa upgrade ke Premium dibatasi: **Rp 2 juta / transaksi**, **Rp 5 juta / bulan**.
Untuk ISP aktif, pastikan mengajukan upgrade akun setelah terdaftar.
:::

### Pendaftaran

1. Daftar di [ipaymu.com](https://ipaymu.com)
2. Siapkan dokumen:
   - KTP dan NPWP (wajib)
   - Foto selfie memegang KTP
   - Rekening koran / buku tabungan (3 bulan terakhir)
   - URL website atau akun media sosial dengan minimal **5 produk/postingan**
3. Lengkapi profil bisnis di dashboard iPaymu
4. Tunggu verifikasi (1–3 hari kerja)
5. Salin **VA Number** dan **API Key** dari menu **Integrasi → API** di dashboard

### Konfigurasi Webhook

Isi **Notify URL** di dashboard iPaymu (menu **Integrasi → Notifikasi**):

```
https://eznom.noahresourcetech.com/ipaymu/webhook
```

### Field yang Diisi di Eznom

| Field | Keterangan |
|---|---|
| Mode | Sandbox atau Production |
| VA Number | Nomor VA akun iPaymu Anda |
| API Key | Secret key dari menu Integrasi |

### Testing Sandbox

1. Daftar akun sandbox di [sandbox.ipaymu.com](https://sandbox.ipaymu.com)
2. Salin **VA Number** dan **API Key** sandbox
3. Aktifkan mode **Sandbox** di Eznom
4. Buka link pembayaran dari billing pelanggan → diarahkan ke halaman iPaymu sandbox
5. Pilih metode pembayaran test yang tersedia dan selesaikan simulasi
6. Cek log Laravel (`storage/logs/laravel.log`) untuk konfirmasi webhook `berhasil` diterima

---

## DOKU

DOKU menggunakan **DOKU Checkout** — popup muncul langsung di halaman Eznom (mirip Midtrans Snap) menggunakan DOKU JS SDK (`loadJokulCheckout`). Pelanggan memilih metode pembayaran di dalam popup tanpa meninggalkan halaman.

::: tip Tersedia untuk perorangan & badan usaha
DOKU menerima pendaftaran **Personal** (KTP + selfie, tanpa NPWP) maupun **Corporate** (badan usaha). Akun bisa langsung menerima pembayaran setelah aktivasi — dana baru dicairkan setelah verifikasi (48 jam).
:::

### Pendaftaran

1. Daftar di [dashboard.doku.com/bo/register](https://dashboard.doku.com/bo/register)
2. Pilih tipe akun:
   - **Personal** — cukup KTP + selfie + foto bukti usaha (tanpa NPWP, tanpa badan usaha). Limit sebelum verifikasi: 5 transaksi / Rp 1 juta
   - **Corporate** — butuh NIB, Akta Pendirian, SK Kemenkumham, dan NPWP. Limit sebelum verifikasi: 5 transaksi / Rp 10 juta
3. Lengkapi profil bisnis: nama brand, lini bisnis (**Internet Service Provider**), estimasi volume transaksi, dan rekening bank penerima dana
4. Upload dokumen sesuai tipe akun
5. Setelah aktivasi (verifikasi maks 48 jam), buka **Back Office → Settings → API Keys**
6. Salin **Client ID** dan **Secret Key** — tersedia versi Sandbox dan Production secara terpisah

### Konfigurasi Notification URL

Isi **Notification URL** di `DOKU Back Office → Checkout Settings`:

```
https://eznom.noahresourcetech.com/doku/webhook
```

### Field yang Diisi di Eznom

| Field | Keterangan |
|---|---|
| Mode | Sandbox (testing) atau Production (live) |
| Client ID | Dari Back Office → Settings → API Keys (contoh: `MCH-0001-xxxxxxxxxxxxxxx`) |
| Secret Key | Digunakan untuk HMAC signature setiap request |

::: warning Sandbox dan Production terpisah
Client ID dan Secret Key berbeda antara mode Sandbox dan Production. Pastikan menggunakan pasangan yang sesuai dengan mode yang dipilih.
:::

### Testing Sandbox

1. Daftar akun sandbox di [sandbox.doku.com/bo/sandbox-registration](https://sandbox.doku.com/bo/sandbox-registration) (tidak perlu OTP)
2. Salin **Client ID** dan **Secret Key** sandbox
3. Aktifkan mode **Sandbox** di Eznom
4. Buka link pembayaran dari billing pelanggan → popup DOKU Checkout terbuka di atas halaman
5. Pilih metode test yang tersedia dan selesaikan simulasi pembayaran
6. Cek log Laravel (`storage/logs/laravel.log`) untuk konfirmasi webhook `transaction.status = SUCCESS` diterima

::: tip Semua metode dalam satu popup
DOKU Checkout menampilkan semua metode aktif dalam satu popup — VA bank utama (BCA, Mandiri, BRI, BNI, dll.), QRIS, OVO, ShopeePay, DANA, LinkAja, kartu kredit, dan Alfamart/Indomaret.
:::

---

## Pembayaran Manual / Transfer Rekening

Pelanggan melakukan transfer bank dan mengkonfirmasi ke Anda. Informasi rekening dikirimkan otomatis saat admin menekan tombol **Buat & Kirim Tagihan**.

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

| Konfigurasi | Isi Pesan yang Dikirim |
|---|---|
| Online saja | Link pembayaran gateway |
| Manual saja | Informasi rekening bank |
| Keduanya aktif | Link gateway + rekening bank sebagai alternatif |
| Keduanya nonaktif | ❌ Error — tidak bisa mengirim tagihan |

::: warning
Jika kedua metode dinonaktifkan, tombol akan menampilkan error. Aktifkan minimal satu metode.
:::
