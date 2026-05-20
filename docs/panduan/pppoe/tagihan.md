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

## Mengirim Link Pembayaran ke Pelanggan

Jika pembayaran online via Midtrans sudah dikonfigurasi:

1. Buka halaman **Detail Pelanggan**
2. Pilih tagihan yang ingin dibayar
3. Klik **Buat Link Bayar** — sistem menyiapkan halaman pembayaran untuk pelanggan
4. Klik **Kirim WA** — link dikirim otomatis ke nomor WhatsApp pelanggan

Pelanggan tinggal membuka link tersebut, memilih metode pembayaran, dan melakukan pembayaran. Status tagihan akan berubah menjadi **Lunas** secara otomatis setelah pembayaran berhasil.

---

## Konfirmasi Pembayaran Manual

Untuk pembayaran yang diterima langsung (tunai, transfer bank, atau metode lain di luar sistem):

1. Buka halaman **Detail Pelanggan**
2. Di tab **Tagihan**, klik tombol **Catat Pembayaran** pada tagihan yang bersangkutan
3. Pilih metode pembayaran (Tunai, Transfer, dll)
4. Isi nomor referensi jika ada (opsional)
5. Klik **Konfirmasi**

Status tagihan akan berubah menjadi **Lunas**.

---

## Laporan Keuangan

Buka router → **Keuangan** untuk melihat ringkasan finansial router:

- Total tagihan yang sudah diterbitkan
- Total pembayaran yang masuk
- Sisa tunggakan yang belum dibayar
- Riwayat semua transaksi dengan filter berdasarkan periode

---

## Pertanyaan Umum

**Pelanggan bilang sudah bayar tapi status masih "Belum Bayar".**
Gunakan fitur **Konfirmasi Pembayaran Manual** di atas untuk mencatat pembayaran yang diterima di luar sistem.

**Jumlah tagihan pelanggan salah.**
Jumlah tagihan diambil dari harga yang tercantum di profil layanan. Periksa dan sesuaikan harga di menu **PPPoE → Profil Layanan**.

**Pelanggan baru tidak punya tagihan.**
Tagihan dibuat otomatis setiap hari. Jika pelanggan baru saja ditambahkan, tunggulah hingga keesokan harinya.
