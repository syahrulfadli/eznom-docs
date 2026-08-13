# Notifikasi Otomatis

eznom mengirim notifikasi ke pelanggan PPPoE secara otomatis via **WhatsApp** dan/atau **Email** — mulai dari pengingat tagihan, notifikasi jatuh tempo, hingga konfirmasi pembayaran lunas.

::: info Ketersediaan Fitur
Notifikasi via **WhatsApp** hanya tersedia untuk paket yang menyertakan fitur **WhatsApp Gateway**. Jika paket Anda tidak mencakup fitur ini, hanya pilihan **Email** yang tersedia.
:::

::: tip Notifikasi untuk Anda sendiri
Halaman ini hanya membahas notifikasi **ke pelanggan**. Untuk peringatan yang dikirim **ke Anda**
(router mati, gateway WA terputus, pembayaran masuk, batch voucher macet), lihat
[Notifikasi untuk Operator](/panduan/notifikasi-operator). Keduanya diatur di halaman
**Pengaturan → Notifikasi** yang sama, di kolom yang berbeda.
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

### Cara Menjaga Nomor Tidak Diblokir

Selain hal-hal yang sudah dikerjakan sistem, sebagian besar risiko sebenarnya ditentukan oleh
**bagaimana nomor itu dipakai sehari-hari**. Ini dirangkum dari pemakaian nyata operator yang
nomornya bertahan, dan tersedia juga di halaman **Pengaturan Notifikasi** dalam bentuk panduan
yang bisa dibuka-tutup.

#### 1. Bangun percakapan dua arah sebelum sistem mengirim apa pun

Ini yang paling menentukan. Pesan otomatis ke nomor yang belum pernah berkomunikasi dengan Anda
jauh lebih mudah terbaca sebagai spam — apalagi kalau penerimanya sampai menekan **Block** atau
**Report**, karena laporan dari penerima adalah sinyal terkuat yang dipakai WhatsApp.

Praktik yang terbukti bertahan:

1. Biarkan calon pelanggan **menghubungi Anda lebih dulu**, bukan sebaliknya.
2. Balas percakapannya seperti biasa.
3. **Simpan nomornya di kontak HP** sebelum nomor itu masuk ke data pelanggan.

Dengan begitu, saat tagihan pertama dikirim sistem, kedua nomor sudah saling kenal dan sudah
punya riwayat percakapan.

#### 2. Pakai pesan pembuka registrasi

Arahkan calon pelanggan menghubungi WhatsApp Anda untuk mendaftar, lalu balas dengan format
seperti ini. Selain merapikan data yang masuk, cara ini memastikan percakapan dimulai dari sisi
mereka:

```text
Terima kasih telah menghubungi kami dan mempercayakan akses layanan internet Anda
kepada kami. Mohon informasikan data berikut untuk Registrasi Pemasangan Baru:

Nama Lengkap:
Nomor WhatsApp:
Alamat Rumah:
Alamat Email:

Mohon juga bagikan share location posisi rumahnya.
```

::: tip Sekalian jadi sumber data pelanggan
Data yang masuk lewat format ini persis yang dibutuhkan saat menambah pelanggan PPPoE, termasuk
share location yang bisa langsung dipakai sebagai koordinat di [Peta Pelanggan](/panduan/pppoe/peta).
:::

#### 3. Jaga nomor tetap "hidup" secara wajar

Nomor yang hanya dipakai mengirim otomatis tanpa pernah dibuka manusia lebih mudah dicurigai
sistem deteksi WhatsApp dibanding nomor yang juga dipakai normal. Sesekali buka WhatsApp di HP
yang nomornya terhubung dan baca pesan masuk seperti biasa — jangan biarkan linked device ini
pasif total.

### Batas Kirim Harian (Warm-up)

Selain dijeda bertahap, ada juga **batas jumlah kirim per hari** yang naik otomatis seiring umur
koneksi nomor Anda — nomor yang baru saja di-link lalu langsung kirim banyak pesan adalah pola
yang paling mudah dicurigai WhatsApp sebagai bot.

| Umur koneksi | Batas per hari |
|---|---|
| Hari 1–3 | 20 pesan |
| Hari 4–7 | 50 pesan |
| Hari 8–14 | 100 pesan |
| Hari 15 ke atas | 200 pesan |

Progress bar di card **WhatsApp Gateway** menunjukkan pemakaian hari ini terhadap batas tersebut
(reset tiap hari). Kalau batas tercapai, pesan yang tersisa hari itu **tidak terkirim** — bukan
ditunda otomatis ke besok, jadi periksa progress bar kalau ada pelanggan yang merasa belum
menerima notifikasi padahal sudah seharusnya.

::: info Kapan Hitungan Umur Koneksi Dimulai Ulang
Hitungan **tidak** reset kalau koneksi sempat putus sebentar lalu otomatis tersambung lagi
(gangguan jaringan biasa). Hitungan **reset ke hari ke-1** hanya kalau nomor benar-benar
ter-logout/diputus permanen dan Anda scan QR ulang — termasuk kalau nomor Anda diblokir
WhatsApp dan Anda menghubungkan nomor baru.
:::

### Pemberitahuan Otomatis Saat Terputus

Kalau koneksi WhatsApp Anda terputus secara **tidak terduga** (bukan karena Anda klik "Putuskan
Koneksi" sendiri), eznom otomatis mengirim **email** ke alamat akun Anda — supaya Anda tidak
baru sadar berhari-hari kemudian setelah pelanggan komplain tidak menerima notifikasi.

Isi email berbeda sesuai sebabnya: kalau kemungkinan terblokir WhatsApp, email menyarankan
menghubungkan nomor **lain** (karena nomor yang sama biasanya tidak akan berhasil terhubung
lagi); kalau sebab lain (misal ditautkan ke perangkat lain), email menyebutkan Anda bisa
menghubungkan ulang nomor yang sama.

**Memutuskan koneksi:** klik **Putuskan Koneksi** di card yang sama jika ingin berhenti
menggunakan nomor tersebut (misal mau ganti nomor). Setelah diputuskan, perlu scan QR ulang
dengan nomor (baru atau sama) untuk menghubungkan kembali.

::: tip Jaga Nomor Tetap "Hidup" Secara Wajar
Nomor yang hanya dipakai mengirim otomatis tanpa pernah dibuka manusia lebih mudah dicurigai
sistem deteksi WhatsApp dibanding nomor yang juga dipakai normal. Sesekali buka WhatsApp di HP
yang nomornya terhubung, baca pesan masuk seperti biasa — jangan biarkan nomor itu pasif total.
:::

---

## Pengiriman Email

Card **Penggunaan Email** muncul di **Pengaturan → Notifikasi** ketika channel notifikasi
mencakup email.

### Batas Harian Email Platform

Secara default email dikirim lewat server email platform yang dipakai bersama semua tenant. Untuk
menjaga reputasi pengiriman (supaya email eznom tidak masuk folder spam bagi semua orang), ada
batas **200 email per hari per akun**.

Progress bar menunjukkan pemakaian hari ini terhadap batas tersebut dan reset setiap hari.

::: warning Yang melebihi batas tidak terkirim
Pesan yang melewati batas **tidak dikirim** dan **tidak dicoba ulang otomatis** keesokan harinya.
Kegagalannya tercatat di **Log Notifikasi** dengan keterangan batas harian tercapai. Kalau Anda
rutin menyentuh batas ini, gunakan server email sendiri (di bawah).
:::

### Server Email Sendiri (BYO SMTP)

Anda bisa mengirim email notifikasi lewat server email milik Anda sendiri — dengan begitu email
keluar atas nama domain Anda dan **tidak ada batas harian dari eznom** (yang berlaku hanya kuota
provider email Anda).

1. Buka **Pengaturan → Notifikasi**, cari card **Server Email Sendiri (SMTP)**
2. Pilih **Preset** untuk mengisi host & port otomatis: Gmail / Google Workspace, Zoho Mail,
   Outlook / Microsoft 365, atau **Custom** untuk mengisi manual
3. Lengkapi kredensial:

| Field | Keterangan |
|---|---|
| **Host SMTP** | Alamat server, misal `smtp.gmail.com` |
| **Port** | `587` untuk TLS, `465` untuk SSL |
| **Enkripsi** | TLS (port 587), SSL (port 465), atau tanpa enkripsi |
| **Username** | Biasanya alamat email lengkap |
| **Password** | Untuk Gmail/Microsoft gunakan **App Password**, bukan password akun |
| **Email Pengirim** | Alamat yang tampil sebagai pengirim |
| **Nama Pengirim** | Nama bisnis yang tampil di inbox pelanggan |

4. Simpan, lalu jalankan **Tes Koneksi** — SMTP baru dipakai setelah berhasil diverifikasi

::: info Hanya pemilik akun utama
Card SMTP hanya tampil untuk pemilik akun. Sub-pengguna tidak bisa melihat atau mengubah
kredensial server email. Password disimpan write-only — setelah tersimpan, isinya tidak pernah
dikirim balik ke browser, hanya ditandai "sudah tersimpan".
:::

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
□ H-1  □ H-2  □ H-3  □ H-5  ☑ H-7
```

Contoh: centang H-7 dan H-3 → notifikasi dikirim 7 hari sebelum JT, lalu pengingat kedua 3 hari sebelum JT. Setiap kombinasi hanya dikirim **satu kali** per tagihan.

::: warning Minimal 1, maksimal 2 hari pengingat
Pilihan yang tersedia hanya **H-1, H-2, H-3, H-5, dan H-7**, dan Anda hanya bisa mencentang
**maksimal 2** di antaranya. Batas ini mengikuti kebijakan WhatsApp Business — mengirim terlalu
banyak pengingat untuk satu tagihan yang sama mudah dianggap spam dan berujung nomor Anda
diblokir. Minimal 1 hari harus dicentang; pengaturan tidak bisa disimpan dengan semua kotak
kosong.
:::

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
| Proses isolir otomatis | **Setiap jam** |
| Generate tagihan bulanan | Setiap hari **01:00** |
| Sinkronisasi status pelanggan dari MikroTik | Setiap **30 detik** |

::: info Isolir kini berjalan tiap jam, notifikasinya tidak
Sebelumnya isolir otomatis hanya dievaluasi sekali sehari pukul 08:00 — pelanggan yang lewat
jatuh tempo di siang hari baru terputus keesokan paginya. Sekarang evaluasi berjalan **setiap
jam**, jadi tindakannya jauh lebih dekat ke waktu jatuh temponya.

Notifikasi isolir ke pelanggan **tidak** ikut jadi tiap jam. Pesan hanya dikirim di jendela
**08:00–21:00**; kalau isolir terjadi di luar jam itu, notifikasinya ditunda ke pukul 08:00
berikutnya. Pelanggan tidak akan dibangunkan pukul 3 pagi oleh pesan penagihan.
:::

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
| Pelanggan diisolir otomatis | WA | Scan tiap jam, pesan dikirim dalam jendela 08:00–21:00 (bertahap) |
| Tunggakan berulang | WA + Email | Scheduler 07:00, sesuai interval yang diset (bertahap) |
| Konfirmasi tagihan lunas | WA + Email | Midtrans webhook / admin catat bayar / admin catat-bayar prabayar (borongan → bertahap) |
| Kirim link bayar (admin) | WA + Email | Admin klik "Buat & Kirim Tagihan" |
| Kirim link kuitansi (admin) | WA + Email | Admin klik "Kirim Link Kuitansi" di baris tagihan lunas |
| Pesan WA manual per pelanggan | WA | Admin pilih template di baris tagihan — lihat [Tagihan & Pembayaran](/panduan/pppoe/tagihan#kirim-pesan-whatsapp-manual) |

::: tip
Semua notifikasi WA hanya dikirim ke pelanggan yang telah mengaktifkan **Notifikasi WhatsApp** di data pelanggan. Notifikasi Email mengikuti channel yang dipilih di **Pengaturan → Notifikasi** dan hanya dikirim jika alamat email pelanggan tersimpan.
:::

---

## Riwayat Notifikasi

Riwayat semua notifikasi yang pernah dikirim tersedia di:

- **Per pelanggan**: Halaman detail pelanggan → Tab **Notifikasi**
- **Per router**: Sidebar → **Log Notifikasi**
