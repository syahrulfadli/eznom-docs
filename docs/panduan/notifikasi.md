# Notifikasi Otomatis

eznom mengirim notifikasi pengingat tagihan ke pelanggan secara otomatis via **WhatsApp** (Fonnte) dan/atau **Email**.

---

## Konfigurasi Awal

Buka **Pengaturan → Notifikasi**

### Channel Notifikasi

| Pilihan | Keterangan |
|---|---|
| **WhatsApp saja** | Notifikasi hanya via WA |
| **Email saja** | Notifikasi hanya via email |
| **WhatsApp & Email** | Keduanya |

### WhatsApp via Fonnte

eznom menggunakan [Fonnte](https://fonnte.com) sebagai gateway WhatsApp. Daftarkan perangkat WA Anda di Fonnte terlebih dahulu.

| Field | Keterangan |
|---|---|
| **Fonnte API Key** | Token dari dashboard Fonnte |
| **Nomor Pengirim** | Nomor WA yang terdaftar di akun Fonnte (format: 08xxx) |

Klik **Test Kirim** untuk memverifikasi konfigurasi sebelum menyimpan.

---

## Jadwal Pengingat

### Pengingat Sebelum Jatuh Tempo (H-N)

Centang hari-hari yang Anda inginkan:

```
□ H-1  □ H-2  □ H-3  □ H-5  ☑ H-7  □ H-14  □ H-30
```

Contoh: centang H-7 dan H-3 → notifikasi dikirim 7 hari sebelum JT, lalu pengingat kedua 3 hari sebelum JT. Setiap kombinasi hanya dikirim **satu kali** per tagihan.

### Pengingat Hari Jatuh Tempo (H-0)

Selalu aktif — dikirim otomatis pada hari tagihan jatuh tempo. Tidak bisa dinonaktifkan.

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
| Kirim notifikasi pengingat | Setiap hari **07:00** |
| Proses isolir otomatis | Setiap hari **08:00** |
| Generate tagihan bulanan | Setiap hari **01:00** |

---

## Isi Pesan Notifikasi

Pesan yang dikirim ke pelanggan sudah diformat otomatis, berisi:

- Salam + nama pelanggan
- Jumlah tagihan dan tanggal jatuh tempo
- Link pembayaran (jika Midtrans aktif)
- Informasi kontak bisnis Anda (dari pengaturan profil bisnis)

---

## Riwayat Notifikasi

Riwayat semua notifikasi yang pernah dikirim tersedia di:

- **Per pelanggan**: Halaman detail pelanggan → Tab **Notifikasi**
- **Per router**: Sidebar → **Log Notifikasi**
