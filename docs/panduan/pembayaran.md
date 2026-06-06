# Pengaturan Pembayaran

Buka **Pengaturan → Pembayaran** untuk mengkonfigurasi metode pembayaran tagihan PPPoE pelanggan Anda.

Tersedia dua jenis metode yang dapat diaktifkan secara independen — salah satu, keduanya, atau keduanya sekaligus.

---

## Pembayaran Online (Payment Gateway)

Pelanggan menerima link dan dapat membayar langsung secara online. Eznom mendukung tiga pilihan payment gateway, pilih salah satu sesuai kemudahan pendaftaran dan kebutuhan pelanggan Anda.

| Gateway | Cocok untuk | Metode bayar | Tampilan |
|---|---|---|---|
| **Midtrans** | Bisnis yang butuh reputasi/brand kuat | VA, Kartu Kredit, GoPay, QRIS, dll. | Snap popup |
| **Duitku** | Usaha kecil, persyaratan mudah | VA, OVO, DANA, ShopeePay, LinkAja | POP popup di halaman Eznom |
| **Xendit** | Onboarding cepat | VA, QRIS, e-Wallet, Kartu | Payment link halaman Xendit |

### Cara Mengaktifkan

1. Buka **Pengaturan → Pembayaran**
2. Aktifkan toggle **"Aktifkan pembayaran online"**
3. Pilih gateway yang diinginkan (Midtrans / Duitku / Xendit)
4. Isi kredensial sesuai gateway yang dipilih
5. Klik **Simpan**

---

## Midtrans

### Pendaftaran

1. Daftar di [dashboard.midtrans.com](https://dashboard.midtrans.com)
2. Pilih tipe akun:
   - **Personal** — cukup KTP, limit transaksi lebih rendah
   - **Business** — butuh SIUP/NIB, limit lebih tinggi
3. Siapkan URL website, Kebijakan Privasi, dan Syarat & Ketentuan (gunakan halaman publik eznom atau website sendiri)
4. Upload KTP / SIUP / NIB
5. Isi rekening bank penerima dana
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

## Xendit

Xendit menggunakan **Payment Sessions** — pelanggan diarahkan ke halaman payment link Xendit yang menampilkan semua metode pembayaran aktif sekaligus.

### Pendaftaran

1. Daftar di [xendit.co](https://xendit.co) — onboarding tercepat, cocok untuk usaha kecil
2. Verifikasi KTP + selfie (biasanya selesai dalam 1 hari kerja)
3. Salin **Secret Key** dari `Dashboard → Settings → API Keys`
4. Aktifkan metode pembayaran di menu **Payment Channels**

### Konfigurasi Webhook

Tambahkan URL berikut di `Dashboard → Settings → Webhooks`:
- Event: **payment_session.completed**

```
https://eznom.noahresourcetech.com/xendit/webhook
```

Salin **Webhook Verification Token** dari dashboard dan isi di kolom **Webhook Token** di Eznom.

### Field yang Diisi di Eznom

| Field | Keterangan |
|---|---|
| Mode | Development atau Production |
| Secret Key | Dimulai `xnd_development_` atau `xnd_production_` |
| Webhook Token | Untuk verifikasi keaslian notifikasi (sangat disarankan diisi) |

### Testing Sandbox

1. Gunakan Secret Key mode **Development** (`xnd_development_...`)
2. Buka link pembayaran → diarahkan ke halaman Xendit
3. Pilih metode test (kartu: `4000 0000 0000 0002` / exp: bulan/tahun masa depan / CVV: `123`)
4. Untuk mensimulasikan webhook: di Xendit Dashboard → **Payment Sessions** → cari session yang baru dibuat → klik **Simulate Payment**
5. Cek log Laravel untuk konfirmasi webhook `payment_session.completed` diterima

::: tip Semua metode dalam satu halaman
Xendit menampilkan semua metode pembayaran aktif dalam satu payment link — pelanggan memilih sendiri tanpa konfigurasi tambahan di Eznom.
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
