# Notifikasi Otomatis

eznom mengirim notifikasi ke pelanggan PPPoE secara otomatis via **WhatsApp** dan/atau **Email** — mulai dari pengingat tagihan, notifikasi jatuh tempo, hingga konfirmasi pembayaran lunas.

::: info Ketersediaan Fitur
Notifikasi via **WhatsApp** hanya tersedia untuk paket yang menyertakan fitur **WhatsApp Gateway**. Jika paket Anda tidak mencakup fitur ini, hanya pilihan **Email** yang tersedia.
:::

---

## Konfigurasi Awal

Buka **Pengaturan → Notifikasi**

### Channel Notifikasi

| Pilihan | Keterangan |
|---|---|
| **WhatsApp saja** | Notifikasi hanya via WA |
| **Email saja** | Notifikasi hanya via email |
| **WhatsApp & Email** | Keduanya |

### WhatsApp Gateway

eznom menggunakan gateway WhatsApp terpusat berbasis **Meta Cloud API**. Tidak diperlukan konfigurasi API key per akun — Anda cukup mengaktifkan channel WhatsApp dan sistem siap digunakan.

Status gateway ditampilkan di bagian **WhatsApp Gateway** pada halaman pengaturan notifikasi:

| Status | Arti |
|---|---|
| 🟢 **Aktif** | Gateway siap mengirim notifikasi |
| 🟡 **Belum aktif** | Gateway sedang dalam konfigurasi — hubungi tim eznom jika mendesak |

---

## Jadwal Pengingat

### Pengingat Sebelum Jatuh Tempo (H-N)

Centang hari-hari yang Anda inginkan:

```
□ H-1  □ H-2  □ H-3  □ H-5  ☑ H-7  □ H-14  □ H-30
```

Contoh: centang H-7 dan H-3 → notifikasi dikirim 7 hari sebelum JT, lalu pengingat kedua 3 hari sebelum JT. Setiap kombinasi hanya dikirim **satu kali** per tagihan.

Isi pesan H-N: nama ISP, nama pelanggan, nama paket, tanggal jatuh tempo, nominal tagihan.

### Notifikasi Hari Jatuh Tempo (H-0)

Dikirim otomatis pada hari tagihan jatuh tempo. Tidak bisa dinonaktifkan.

Isi pesan menyesuaikan metode pembayaran yang aktif di **Pengaturan → Pembayaran**:

| Kondisi | Isi Pesan |
|---|---|
| **Midtrans aktif** | Nama ISP, nama & ID pelanggan, paket, tanggal JT, nominal, **link bayar** (berlaku 30 hari) |
| **Transfer manual** | Nama ISP, nama & ID pelanggan, paket, tanggal JT, nominal, **nama bank + nomor rekening + atas nama** + nomor WA admin |

::: tip Link Bayar H-0
Link bayar bersifat **signed** (dilindungi tanda tangan kriptografis) — hanya berlaku 30 hari dan tidak bisa dimanipulasi. Setiap kali pelanggan klik link, sistem otomatis membuat sesi pembayaran Midtrans baru, sehingga token Midtrans tidak pernah kedaluwarsa di tengah jalan.
:::

---

## Konfirmasi Pembayaran Lunas

Dikirim otomatis setelah tagihan dikonfirmasi lunas. Tidak perlu konfigurasi tambahan — selalu aktif jika channel notifikasi diaktifkan.

### Pemicu

| Pemicu | Keterangan |
|---|---|
| **Midtrans webhook** | Pelanggan bayar online — sistem Midtrans mengirim konfirmasi ke eznom |
| **Admin catat bayar manual** | Admin klik "Catat Bayar" di halaman Billing |
| **Admin catat bayar prabayar** | Admin klik "Catat Tagihan Prabayar" untuk pelanggan prabayar |

### Isi Pesan

- Nama ISP
- Nama & ID pelanggan
- Nama paket
- Periode tagihan (misal: Mei 2026)
- Nominal yang dibayar
- Tanggal konfirmasi

---

## Grace Period Isolir

Tentukan berapa hari setelah jatuh tempo sebelum pelanggan otomatis diisolir:

| Nilai | Efek |
|---|---|
| **0** | Isolir langsung pada hari H jatuh tempo (perilaku default) |
| **3** | Pelanggan diberi waktu 3 hari setelah JT sebelum diisolir |
| **7** | Grace period 7 hari |

::: info
Isolir otomatis hanya berlaku untuk pelanggan yang memiliki opsi **Auto Isolir** diaktifkan di data pelanggan.
:::

---

## Notifikasi Tunggakan Berulang

Kirim pengingat secara berkala ke pelanggan yang sudah melewati jatuh tempo dan belum membayar:

| Nilai | Efek |
|---|---|
| **0** | Nonaktif — tidak ada pengingat tunggakan otomatis |
| **3** | Kirim ulang setiap 3 hari selama masih belum bayar |
| **7** | Kirim ulang setiap 7 hari |

---

## Jadwal Eksekusi Otomatis

| Proses | Waktu |
|---|---|
| Kirim notifikasi pengingat H-N + H-0 | Setiap hari **07:00** |
| Proses isolir otomatis | Setiap hari **08:00** |
| Generate tagihan bulanan | Setiap hari **01:00** |

---

## Ringkasan Semua Notifikasi

| Event | Channel | Pemicu |
|---|---|---|
| Pengingat H-N sebelum jatuh tempo | WA + Email | Scheduler 07:00 |
| Jatuh tempo hari ini (H-0) | WA + Email | Scheduler 07:00 |
| Konfirmasi tagihan lunas | WA + Email | Midtrans webhook / admin catat bayar / admin prabayar |
| Kirim link bayar (admin) | WA + Email | Admin klik "Buat & Kirim Tagihan" |

::: tip
Semua notifikasi mengikuti channel yang dipilih di **Pengaturan → Notifikasi**. Jika channel **Email** aktif, email hanya dikirim jika alamat email pelanggan tersimpan di data pelanggan.
:::

---

## Riwayat Notifikasi

Riwayat semua notifikasi yang pernah dikirim tersedia di:

- **Per pelanggan**: Halaman detail pelanggan → Tab **Notifikasi**
- **Per router**: Sidebar → **Log Notifikasi**
