# Skema Pembayaran: Prabayar & Pascabayar

Setiap pelanggan PPPoE di eznom menggunakan salah satu dari dua skema pembayaran. Skema ini menentukan kapan tagihan dibuat, kapan pelanggan diharapkan membayar, dan bagaimana sistem menangani keterlambatan.

---

## Perbedaan Utama

| Aspek | Pascabayar | Prabayar |
|---|---|---|
| **Konsep** | Pakai dulu, bayar belakangan | Bayar dulu, baru bisa pakai |
| **Tagihan dibuat** | Otomatis setiap hari oleh sistem | Manual oleh admin saat pelanggan membayar |
| **Status awal tagihan** | Belum Bayar | Langsung Lunas |
| **Jatuh tempo** | Tetap per bulan (tanggal billing) | Fleksibel — ditentukan saat catat pembayaran |
| **Cocok untuk** | Pelanggan rumahan, langganan tetap | Warung, kantor kecil, pelanggan ad-hoc |

---

## Pascabayar

### Alur

```
Setiap hari (otomatis)
  → Sistem membuat tagihan bulan berjalan (status: Belum Bayar)
  → Pengingat dikirim H-N hari sebelum jatuh tempo
  
Jatuh tempo terlewat
  → Status berubah: Terlambat
  → Jika auto-isolir aktif: layanan diputus

Admin catat pembayaran
  → Status: Lunas
  → Layanan otomatis disambung kembali (jika sebelumnya terisolir)
```

### Detail

Tagihan bulanan dibuat **otomatis setiap hari pukul 01.00**. Sistem memeriksa seluruh pelanggan aktif dan membuat tagihan untuk bulan berjalan jika belum ada. Proses ini idempoten — tagihan tidak akan dibuat dobel jika sudah ada.

Tanggal jatuh tempo mengacu pada **tanggal billing** yang dikonfigurasi di pengaturan router, atau bisa di-override per pelanggan melalui **Jatuh Tempo Kustom** di detail pelanggan.

### Notifikasi Otomatis

Sistem mengirim pengingat berdasarkan pengaturan **Hari Pengingat** di Pengaturan → Notifikasi. Contoh: jika diisi `[7, 3, 1]`, pengingat dikirim 7 hari, 3 hari, dan 1 hari sebelum jatuh tempo.

Setelah jatuh tempo terlewat, sistem mengirim notifikasi tunggakan sesuai interval yang dikonfigurasi.

---

## Prabayar

### Alur

```
Admin catat pembayaran
  → Tagihan dibuat + langsung berstatus Lunas
  → Masa layanan aktif hingga tanggal yang ditentukan
  → Jika sebelumnya terisolir: otomatis disambung

Mendekati akhir masa layanan
  → Pengingat dikirim H-N hari sebelum habis

Masa layanan habis
  → Sistem membuat tagihan renewal (status: Belum Bayar)
  → Jika auto-isolir aktif dan belum ada pembayaran: layanan diputus

Admin catat pembayaran perpanjangan
  → Masa layanan diperpanjang
  → Layanan otomatis disambung kembali
```

### Detail

Pada prabayar, admin yang memulai siklus pembayaran — bukan sistem. Saat admin mencatat pembayaran, sistem membuat tagihan sekaligus mencatatnya sebagai lunas dalam satu transaksi. Tidak ada tagihan "Belum Bayar" yang menunggu di tabel.

**Masa berlaku** ditentukan admin saat mencatat pembayaran (misalnya: berlaku hingga 30 Juni 2026). Sistem memantau tanggal ini dan mengirim pengingat perpanjangan secara otomatis.

Saat masa berlaku habis, sistem otomatis membuat tagihan renewal dengan status **Belum Bayar**. Jika dalam waktu tertentu tidak ada pembayaran dan auto-isolir aktif, layanan diputus.

### Metode Pembayaran saat Catat Pembayaran Prabayar

Saat admin mencatat pembayaran prabayar, terdapat dua jalur berdasarkan metode yang dipilih:

| Metode | Alur |
|---|---|
| **Tunai / Transfer / Manual** | Tagihan langsung dibuat & berstatus **Lunas**; kuitansi dikirim ke pelanggan; layanan disambung jika sebelumnya terisolir |
| **Online (Payment Gateway)** | Tagihan dibuat dengan status **Belum Bayar**; **link pembayaran** dikirim ke pelanggan via WhatsApp/Email; tagihan baru menjadi **Lunas** setelah pelanggan menyelesaikan pembayaran di gateway (webhook) |

::: tip Link pembayaran prabayar
Link yang dikirim adalah link aman dari eznom (`/billing/pay/...`), bukan link gateway langsung. Sesi gateway baru dibuat saat pelanggan membuka link — bukan saat admin mencatat. Setelah gateway mengkonfirmasi pembayaran, eznom otomatis mengirim **kuitansi/invoice** ke email pelanggan.
:::

::: warning Masa berlaku & metode online
Saat memilih metode online, field **"Berlaku Sampai Periode Berikutnya"** tidak tersedia — masa berlaku baru ditentukan setelah pembayaran dikonfirmasi oleh gateway, bukan saat admin membuat tagihan.
:::

---

## Isolasi & Reconnect

Keduanya menggunakan mekanisme isolasi yang sama.

### Kondisi Isolasi

Layanan diputus jika:
- **Pascabayar**: tagihan melewati jatuh tempo + grace period
- **Prabayar**: masa berlaku habis + tidak ada pembayaran perpanjangan

Isolasi hanya terjadi jika **Auto-Isolir** diaktifkan pada pelanggan. Jika nonaktif, sistem menandai status terlambat/expired tapi tidak memutus layanan.

### Grace Period

Di **Pengaturan → Notifikasi**, ada pengaturan **Grace Period Isolasi** (hari). Contoh: jika diisi `2`, sistem menunggu 2 hari setelah jatuh tempo sebelum benar-benar mengisolasi.

### Reconnect Otomatis

Setiap kali pembayaran dikonfirmasi (baik manual oleh admin maupun otomatis via Midtrans), jika pelanggan sedang dalam status **Terisolir**, sistem langsung menyambung kembali layanannya ke MikroTik tanpa perlu tindakan tambahan.

---

## Mengatur Skema Pelanggan

Skema pembayaran dipilih saat menambah atau mengedit pelanggan.

1. Buka **PPPoE → Pelanggan**
2. Klik **+ Tambah Pelanggan** atau edit pelanggan yang ada
3. Di field **Tipe Pembayaran**, pilih **Pascabayar** atau **Prabayar**

Skema bisa diubah kapan saja. Perubahan berlaku mulai siklus tagihan berikutnya.

---

## Mencatat Pembayaran Prabayar

Berbeda dari pascabayar, pembayaran prabayar dicatat dari tab khusus di halaman Billing.

1. Buka **PPPoE → Billing**
2. Pilih tab **Prabayar**
3. Klik **+ Catat Pembayaran**
4. Pilih pelanggan, isi nominal, tanggal berlaku hingga, dan metode pembayaran
5. Klik **Simpan**

Sistem otomatis membuat tagihan + mencatat pembayaran sekaligus, dan menyambung kembali layanan jika pelanggan sedang terisolir.

---

## Ringkasan Jadwal Otomatis

| Waktu | Proses |
|---|---|
| Setiap menit | Sinkronisasi status online/offline dari MikroTik |
| 01.00 setiap hari | Generate tagihan bulanan pascabayar |
| 07.00 setiap hari | Kirim notifikasi pengingat & tunggakan |
| 08.00 setiap hari | Evaluasi isolasi — putus layanan yang overdue/expired |
| Setiap 5 menit | Retry sinkronisasi MikroTik yang gagal |
