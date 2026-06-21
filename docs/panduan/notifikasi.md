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

Berbeda dari gateway terpusat sebelumnya, eznom sekarang menghubungkan **nomor WhatsApp Anda
sendiri** (BYO — Bring Your Own number) untuk mengirim notifikasi ke pelanggan. Anda yang
menentukan nomor mana yang dipakai, bukan eznom.

#### Cara Menghubungkan

1. Buka **Pengaturan → Notifikasi**, scroll ke card **WhatsApp Gateway**.
2. Klik **Hubungkan Nomor WhatsApp**.
3. Buka WhatsApp di HP yang nomornya ingin dipakai → **Linked Devices** → **Link a Device**.
4. Scan QR yang muncul di layar eznom.
5. Status berubah ke **Terhubung** secara otomatis begitu QR berhasil di-scan (tidak perlu refresh).

Status gateway ditampilkan di card yang sama:

| Status | Arti |
|---|---|
| 🟢 **Terhubung** | Nomor siap mengirim notifikasi — nomor yang terhubung ditampilkan di card |
| 🟡 **Menunggu Scan** | QR sudah dibuat, belum di-scan — QR otomatis diperbarui tiap ~20–60 detik jika belum di-scan |
| ⚪ **Belum Terhubung** | Belum ada nomor yang dihubungkan, atau sudah diputuskan |

::: danger Risiko: Nomor Bisa Diblokir WhatsApp
Cara menghubungkan ini **tidak resmi** (bukan WhatsApp Business API), sehingga melanggar
Ketentuan Layanan WhatsApp. WhatsApp bisa memblokir nomor yang Anda hubungkan sewaktu-waktu tanpa
pemberitahuan, dan **tidak ada jalur komplain resmi** ke WhatsApp/Meta karena ini bukan channel
resmi mereka. Jika terblokir, nomor tersebut tidak bisa dipakai lagi sama sekali — perlu
menghubungkan nomor lain dari awal.

**Saran:** jangan gunakan nomor WhatsApp utama bisnis Anda (yang dipakai untuk komunikasi
penting/CS pelanggan). Gunakan nomor cadangan atau nomor baru khusus untuk notifikasi otomatis
ini, supaya jika terjadi pemblokiran, operasional utama bisnis Anda tidak terganggu.
:::

::: tip Mitigasi: Pengiriman Otomatis Dijeda Bertahap
Untuk mengecilkan risiko di atas, sistem **tidak** mengirim notifikasi massal (pengingat tagihan
harian ke banyak pelanggan, aksi isolir borongan, atau catat-bayar prabayar borongan) sekaligus
dalam hitungan detik. Setiap pesan diberi jeda sekitar **5 detik** dari pesan sebelumnya — jadi
pengiriman ke 50 pelanggan tersebar ±4 menit, bukan dalam sekejap. Ini berjalan otomatis, tidak
perlu diatur.
:::

**Memutuskan koneksi:** klik **Putuskan Koneksi** di card yang sama jika ingin berhenti
menggunakan nomor tersebut (misal mau ganti nomor). Setelah diputuskan, perlu scan QR ulang
dengan nomor (baru atau sama) untuk menghubungkan kembali.

---

## Persetujuan Pelanggan (Opt-in WhatsApp)

Notifikasi hanya boleh dikirim ke nomor pelanggan yang telah memberikan **persetujuan eksplisit**
— ini berlaku terlepas dari channel WA yang dipakai, dan juga melindungi nomor WA Anda sendiri
dari laporan spam oleh pelanggan yang tidak menyangka menerima pesan otomatis.

### Cara Mengaktifkan

Buka form **Tambah / Edit Pelanggan** → aktifkan toggle **Notifikasi WhatsApp**.

Pelanggan yang sudah opt-in ditandai badge hijau **WA** di kolom nomor HP pada tabel pelanggan.

### Dampak

| Kondisi | Perilaku Sistem |
|---|---|
| `Notifikasi WhatsApp` **aktif** | Semua notifikasi WA (pengingat, JT, isolir, konfirmasi bayar) dikirim ke pelanggan ini |
| `Notifikasi WhatsApp` **nonaktif** | Tidak ada WA yang dikirim, meskipun channel notifikasi di pengaturan = WhatsApp |

::: warning Catatan Kepatuhan
Mengirim pesan WhatsApp tanpa persetujuan pelanggan melanggar Ketentuan Layanan WhatsApp dan dapat mengakibatkan nomor yang Anda hubungkan diblokir. Pastikan Anda mendapatkan persetujuan pelanggan sebelum mengaktifkan opsi ini — misalnya melalui formulir pendaftaran, kontrak berlangganan, atau konfirmasi lisan yang tercatat.
:::

### Mengubah Default untuk Pelanggan Baru

Secara default, pelanggan baru selalu dimulai dengan toggle **Notifikasi WhatsApp nonaktif** —
admin harus mengaktifkannya manual satu-per-satu setelah pelanggan menyetujui. Kalau proses
pendaftaran Anda **sudah** mengumpulkan persetujuan pelanggan secara konsisten (misal lewat
formulir pendaftaran atau klausul kontrak), Anda bisa mengubah nilai default ini per router.

Buka **Router → Pengaturan**, cari card **"Notifikasi WhatsApp"**, aktifkan toggle **"Aktifkan
opt-in WhatsApp secara default untuk pelanggan baru"**.

::: danger Bukan Pengganti Persetujuan Sungguhan
Opsi ini hanya mengubah **nilai default** saat pelanggan baru dibuat — bukan persetujuan
sungguhan dari pelanggan tersebut. Hanya aktifkan kalau proses pendaftaran Anda benar-benar
mengumpulkan persetujuan tiap pelanggan, bukan sekadar untuk menghindari toggle manual.
Mengaktifkan opsi ini tanpa persetujuan nyata sama saja dengan melanggar Ketentuan Layanan
WhatsApp seperti dijelaskan di atas — risikonya tetap nomor WhatsApp Anda yang diblokir.
:::

Berlaku untuk pelanggan baru yang ditambah lewat form **maupun** yang diimpor dari MikroTik.
**Pelanggan yang sudah ada tidak terpengaruh** — perubahan default ini tidak retroaktif.

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
| **7** | Kirim ulang setiap 7 hari selama masih belum bayar |
| **14** | Kirim ulang setiap 14 hari |

::: info Minimum 7 Hari
Sesuai kebijakan WhatsApp Business, interval pengingat tunggakan ditetapkan **minimal 7 hari**. Nilai 1–6 tidak dapat disimpan.
:::

---

## Jadwal Eksekusi Otomatis

| Proses | Waktu |
|---|---|
| Kirim notifikasi pengingat H-N + H-0 | Setiap hari **07:00** |
| Proses isolir otomatis | Setiap hari **08:00** |
| Generate tagihan bulanan | Setiap hari **01:00** |

Setiap kali sistem mengirim notifikasi WA ke **banyak** pelanggan sekaligus (pengingat harian,
isolir otomatis, tunggakan berulang, atau aksi borongan seperti catat-bayar prabayar massal),
pesan dijeda **bertahap** (selang 5 detik per pelanggan) supaya tidak terkirim sekaligus dalam
hitungan detik dari satu nomor — lihat kotak "Mitigasi" di bagian WhatsApp Gateway di atas.
Notifikasi tetap akan terkirim, hanya dengan jeda beberapa detik hingga beberapa menit dari waktu
prosesnya dimulai, tergantung jumlah pelanggan dalam batch tersebut.

---

## Ringkasan Semua Notifikasi

| Event | Channel | Pemicu |
|---|---|---|
| Pengingat H-N sebelum jatuh tempo | WA + Email | Scheduler 07:00 (bertahap) |
| Jatuh tempo hari ini (H-0) | WA + Email | Scheduler 07:00 (bertahap) |
| Pelanggan diisolir otomatis | WA | Scheduler 08:00 (bertahap) |
| Tunggakan berulang | WA + Email | Scheduler 07:00, sesuai interval yang diset (bertahap) |
| Konfirmasi tagihan lunas | WA + Email | Midtrans webhook / admin catat bayar / admin catat-bayar prabayar (borongan → bertahap) |
| Kirim link bayar (admin) | WA + Email | Admin klik "Buat & Kirim Tagihan" |

::: tip
Semua notifikasi WA hanya dikirim ke pelanggan yang telah mengaktifkan **Notifikasi WhatsApp** di data pelanggan. Notifikasi Email mengikuti channel yang dipilih di **Pengaturan → Notifikasi** dan hanya dikirim jika alamat email pelanggan tersimpan.
:::

---

## Riwayat Notifikasi

Riwayat semua notifikasi yang pernah dikirim tersedia di:

- **Per pelanggan**: Halaman detail pelanggan → Tab **Notifikasi**
- **Per router**: Sidebar → **Log Notifikasi**
