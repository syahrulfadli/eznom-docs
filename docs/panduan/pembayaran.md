# Pengaturan Pembayaran

Buka **Pengaturan → Pembayaran** untuk mengkonfigurasi metode pembayaran tagihan PPPoE untuk pelanggan Anda.

Tersedia dua metode yang dapat diaktifkan secara independen — salah satu, keduanya, atau keduanya sekaligus.

---

## Pembayaran Online (Midtrans)

Pelanggan menerima link pembayaran dan dapat membayar langsung via kartu kredit, transfer bank virtual account, e-wallet, dan metode lain yang tersedia di Midtrans.

### Cara Mengaktifkan

1. Buka **Pengaturan → Pembayaran**
2. Aktifkan toggle **"Aktifkan pembayaran online"**
3. Isi **Server Key** dari akun Midtrans Anda
4. Atur mode: **Sandbox** untuk testing, **Production** untuk transaksi nyata
5. Klik **Simpan**

### Mendapatkan API Key Midtrans

1. Login ke [Midtrans Dashboard](https://dashboard.midtrans.com)
2. Buka **Settings → Access Keys**
3. Salin **Server Key** (dan **Client Key** jika diperlukan)

::: tip Sandbox vs Production
Gunakan Sandbox saat masih testing — transaksi tidak menggunakan uang nyata. Aktifkan Production hanya saat siap menerima pembayaran sungguhan.
:::

### Konfigurasi Webhook

Agar status tagihan diperbarui otomatis setelah pelanggan membayar, daftarkan URL ini di Midtrans Dashboard → **Settings → Payment → Payment Notification URL**:

```
https://yourdomain.com/midtrans/webhook
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
