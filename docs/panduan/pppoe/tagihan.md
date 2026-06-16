# Tagihan & Pembayaran PPPoE

---

## Cara Kerja Tagihan Bulanan

Tagihan untuk setiap pelanggan aktif dibuat **otomatis oleh sistem setiap hari** berdasarkan profil layanan yang terpasang. Anda tidak perlu membuat tagihan secara manual.

Jika pelanggan baru ditambahkan hari ini, tagihannya akan muncul keesokan harinya.

---

## Melihat Daftar Tagihan

1. Buka router yang diinginkan
2. Di sidebar, pilih **PPPoE → Billing**

Tabel menampilkan semua tagihan dengan informasi:
- Nama & username pelanggan
- Periode tagihan
- Jumlah tagihan
- Tanggal jatuh tempo
- Status pembayaran

Gunakan filter **Status** dan kolom **Pencarian** di atas tabel untuk mempersempit tampilan.

---

## Status Tagihan

| Status | Arti |
|---|---|
| 🟡 **Belum Bayar** | Tagihan aktif, belum melewati tanggal jatuh tempo |
| 🔴 **Terlambat** | Tagihan belum dibayar dan sudah melewati jatuh tempo |
| 🟢 **Lunas** | Tagihan sudah dikonfirmasi pembayarannya |

---

## Mengirim Tagihan ke Pelanggan

Tombol **Buat & Kirim Tagihan** mengirimkan informasi tagihan sesuai metode pembayaran yang dikonfigurasi di **Pengaturan → Pembayaran**.

### Syarat

Minimal satu metode pembayaran harus aktif di halaman [Pengaturan Pembayaran](/panduan/pembayaran):
- **Pembayaran Online** (Midtrans) — pelanggan mendapat link bayar
- **Pembayaran Manual** — pelanggan mendapat informasi rekening bank

### Cara Mengirim

1. Di halaman **Billing**, cari tagihan yang ingin dikirim
2. Klik menu tiga titik (⋮) pada baris tagihan tersebut
3. Pilih **Buat & Kirim Tagihan**

Pesan tagihan dikirim ke pelanggan via WhatsApp dan/atau Email sesuai pengaturan notifikasi. Isi pesannya:

| Metode Aktif | Isi Pesan |
|---|---|
| Online saja | Nama, jumlah, jatuh tempo + **link pembayaran Midtrans** |
| Manual saja | Nama, jumlah, jatuh tempo + **info rekening bank** |
| Keduanya | Link pembayaran Midtrans + info rekening sebagai alternatif |

---

## Mencatat Pembayaran

### Pembayaran Manual (Tunai / Transfer)

Untuk pembayaran yang diterima langsung (tunai, transfer bank, atau metode lain di luar sistem):

1. Di halaman **Billing**, klik menu tiga titik (⋮) pada baris tagihan
2. Pilih **Catat Bayar**
3. Pilih metode pembayaran manual (Tunai, Transfer Bank, dll.)
4. Isi nomor referensi jika ada (opsional)
5. Klik **Simpan**

Status tagihan langsung berubah menjadi **Lunas**. Jika pelanggan sebelumnya terisolir, layanan otomatis disambung kembali. Kuitansi dikirim ke email pelanggan jika notifikasi email aktif.

### Pembayaran Online (Payment Gateway)

Untuk tagihan yang akan dibayar pelanggan via transfer VA, QRIS, atau e-wallet:

1. Di halaman **Billing**, klik menu tiga titik (⋮) pada baris tagihan
2. Pilih **Catat Bayar**
3. Pilih metode **Online (Payment Gateway)**
4. Klik **Simpan**

Sistem akan mengirim **link pembayaran** ke pelanggan via WhatsApp dan/atau Email. Pelanggan membuka link dan menyelesaikan pembayaran. Setelah gateway mengkonfirmasi (webhook), tagihan otomatis menjadi **Lunas** dan kuitansi dikirim ke email pelanggan.

::: tip Link pembayaran aman
Link yang dikirim adalah link dari eznom — bukan link gateway langsung. Sesi pembayaran di gateway baru dibuat saat pelanggan membuka link, sehingga link tidak kadaluarsa sebelum dibuka.
:::

---

## Laporan Keuangan

Buka router → **Keuangan** untuk melihat ringkasan finansial router:

- Total tagihan yang sudah diterbitkan
- Total pembayaran yang masuk
- Sisa tunggakan yang belum dibayar
- Riwayat semua transaksi dengan filter berdasarkan periode

---

## Laporan Pelanggan

Buka router → **PPPoE → Laporan** untuk melihat ringkasan status pelanggan:

- Jumlah pelanggan aktif, online, terisolir
- Jumlah dan total nilai tunggakan
- Distribusi pelanggan per profil layanan
- Daftar pelanggan dengan tunggakan aktif

---

## Pertanyaan Umum

**Pelanggan bilang sudah bayar (manual/tunai) tapi status masih "Belum Bayar".**
Gunakan fitur **Catat Bayar** di menu tiga titik (⋮) pada baris tagihan untuk mencatat pembayaran manual.

**Sudah pilih metode online, tapi tagihan belum berubah jadi Lunas.**
Tagihan online baru berubah Lunas setelah pelanggan menyelesaikan pembayaran di gateway dan sistem menerima konfirmasi (webhook). Pastikan pelanggan sudah membuka link pembayaran dan menyelesaikannya.

**Tombol "Buat & Kirim Tagihan" muncul pesan error.**
Pastikan minimal satu metode pembayaran sudah diaktifkan di **Pengaturan → Pembayaran**.

**Jumlah tagihan pelanggan salah.**
Jumlah tagihan diambil dari harga yang tercantum di profil layanan. Periksa dan sesuaikan harga di menu **PPPoE → Profil Layanan**.

**Pelanggan baru tidak punya tagihan.**
Tagihan dibuat otomatis setiap hari. Jika pelanggan baru saja ditambahkan, tunggulah hingga keesokan harinya.
