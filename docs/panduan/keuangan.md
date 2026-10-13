# Keuangan

Halaman Keuangan per-router mencatat semua uang yang masuk dan keluar di router tersebut — pembayaran
tagihan PPPoE, penjualan voucher Hotspot, pembelian stok, pengeluaran lain, dan modal usaha.

Buka router → **Keuangan**

---

## Kartu Ringkasan

Bagian atas halaman menampilkan angka untuk bulan yang sedang dilihat (pindah bulan lewat pemilih
bulan):

| Kartu | Isi |
|---|---|
| **Pemasukan** | Tagihan PPPoE yang dibayar, penjualan voucher, dan pemasukan manual bulan ini |
| **Pengeluaran** | Semua pengeluaran bulan ini (manual, rutin, pembelian stok) |
| **Net Bulan Ini** | Pemasukan − Pengeluaran bulan ini. Merah bila defisit |
| **Net Total** | Akumulasi net sejak transaksi pertama router ini sampai akhir bulan yang dilihat |

Tiga kartu pertama menyebut selisihnya terhadap bulan lalu. **Net Total** tidak terpengaruh filter
jenis, kategori, maupun pencarian — ini angka buku, bukan jumlah baris yang sedang tampil.

Di bawahnya bisa muncul dua kartu tambahan:

- **Saldo Kas** — hanya tampil kalau router punya catatan [modal usaha](#modal-usaha). Isinya Net
  Total + setoran modal − penarikan modal: uang yang seharusnya ada di kas.
- **Saldo Titipan Reseller** — saldo dompet reseller yang belum ditukar voucher. Ini kewajiban,
  bukan pendapatan (lihat [di bawah](#top-up-reseller-bukan-pendapatan)).

---

## Tren Keuangan

Grafik pemasukan dan pengeluaran per bulan, berakhir di bulan yang sedang dilihat. Grafik yang sama
juga ada di dashboard router.

- **Rentang 6 / 12 / 24 bulan.** Pilihannya diingat dan dipakai bersama di dashboard router.
- **Batang atau garis**, plus tombol **vs tahun lalu** untuk menampilkan pemasukan di bulan yang sama
  tahun lalu (untuk rentang ≤ 12 bulan, bila datanya ada).
- **Ringkasan rentang**: total pemasukan, pengeluaran, laba bersih, dan rata-rata pemasukan per bulan
  beserta perubahannya dibanding periode sebelumnya.

::: tip Bulan berjalan ditandai "Berjalan"
Bulan yang belum selesai selalu terlihat pendek di grafik. Supaya tidak terbaca sebagai penurunan,
bulan itu ditandai **Berjalan** dan tidak ikut dihitung dalam rata-rata. Grafik juga baru dimulai
dari bulan transaksi pertama — router baru tidak menampilkan belasan bulan Rp 0.
:::

Di bawah grafik ada **Rincian Kategori**: total dan jumlah transaksi tiap kategori bulan ini.

---

## Daftar Transaksi

| Kolom | Keterangan |
|---|---|
| **Tanggal** | Tanggal transaksi |
| **Keterangan** | Deskripsi, ikon 📎 bila ada [bukti](#bukti-transaksi), dan *oleh* siapa transaksi dicatat (*Sistem* untuk catatan otomatis) |
| **Jenis Transaksi** | Pemasukan (hijau), Pengeluaran (merah), atau Modal Usaha (ungu) |
| **Kategori** | Badge berwarna, lihat tabel di bawah |
| **Metode** | Tunai, Transfer Bank, QRIS, Pembayaran Online, atau `–` bila tidak dicatat |
| **Jumlah** | Nilai transaksi |
| **Net Bulan Ini** | Net berjalan sejak awal bulan sampai baris ini — seperti kolom saldo di mutasi rekening |
| **Net Total** | Net berjalan sejak transaksi pertama router sampai baris ini |

### Kategori

| Jenis | Kategori |
|---|---|
| **Pemasukan otomatis** | PPPoE (pembayaran tagihan), Voucher Hotspot (penjualan voucher) |
| **Pemasukan manual** | Biaya Pemasangan, Penjualan Perangkat, Jasa & Perbaikan, Pemasukan Lain |
| **Pengeluaran** | Operasional, Bandwidth / Upstream, Gaji / Honor / Upah, Peralatan & Inventaris, Perawatan & Perbaikan, Administrasi & Pajak, Lainnya |
| **Modal Usaha** | Setoran Modal, Penarikan Modal |

Pembelian stok dari [Inventaris](/panduan/inventaris) otomatis berkategori **Peralatan & Inventaris**.

### Filter & Pencarian

- **Jenis** — Pemasukan, Pengeluaran, atau Modal Usaha
- **Kategori** — satu kategori tertentu
- **Cari keterangan**

---

## Menambah Catatan Manual

Klik **Tambah Catatan**, lalu pilih jenisnya: **Pengeluaran**, **Pemasukan**, atau **Modal**.

| Field | Keterangan |
|---|---|
| **Kategori** | Pilih salah satu chip berwarna — warnanya sama dengan badge di tabel |
| **Jumlah (Rp)** | Nominal |
| **Keterangan** | Misal *Biaya listrik server* |
| **Metode Pembayaran** | Opsional — Tunai, Transfer Bank, atau QRIS |
| **Tanggal** | Tanggal transaksi |
| **Bukti** | Opsional — foto atau PDF nota, maksimal 5 MB |

### Mengubah dan menghapus

Gunakan tombol pensil dan tempat sampah di ujung baris. Yang bisa diubah tergantung asal catatannya:

| Asal catatan | Yang bisa diubah |
|---|---|
| Dicatat manual | Semuanya |
| Otomatis dari sistem (tagihan PPPoE, voucher) | Jumlah dan bukti |
| Pembelian stok dari Inventaris | Metode pembayaran dan bukti saja; tidak bisa dihapus dari sini |

### Bukti transaksi

Foto struk, nota, atau bukti transfer bisa dilampirkan di setiap catatan. Catatan yang punya bukti
diberi ikon 📎 di kolom Keterangan — klik untuk membukanya di tab baru. Bukti ikut terhapus saat
catatannya dihapus.

---

## Modal Usaha

Uang pribadi yang Anda masukkan ke usaha (misal untuk membeli OLT) dan uang yang Anda ambil keluar
bukan pendapatan maupun biaya. Kalau dicatat sebagai Pemasukan atau Pengeluaran, laba bulan itu jadi
terlihat melonjak atau anjlok padahal usahanya tidak berubah.

Catat dengan jenis **Modal**:

- **Setoran Modal** — uang masuk dari pemilik
- **Penarikan Modal** — uang yang diambil pemilik untuk keperluan pribadi

Keduanya **tidak** dihitung di Pemasukan, Pengeluaran, Net Bulan Ini, maupun Net Total. Pengaruhnya
hanya ke kartu **Saldo Kas**.

---

## Pengeluaran Rutin

Biaya tetap yang keluar tiap bulan — listrik tower, sewa lahan, bandwidth upstream — tidak perlu
diketik ulang setiap bulan.

Buka **Keuangan → Pengeluaran Rutin**, lalu tambahkan:

| Field | Keterangan |
|---|---|
| **Keterangan** | Misal *Sewa lahan tower* |
| **Kategori** | Kategori pengeluaran |
| **Nominal per Bulan** | |
| **Metode Pembayaran** | Opsional |
| **Tanggal Tiap Bulan** | Tanggal catatannya dibuat |
| **Mulai / Berakhir** | Kosongkan *Berakhir* bila tanpa batas |

Setiap hari pukul 02:05 sistem membuat catatan pengeluaran untuk template yang jatuh tempo hari itu,
lengkap dengan kategori dan metode pembayarannya.

---

## Export

Tombol **Export** membuka menu yang menyebut periodenya dengan jelas:

| Pilihan | Isi |
|---|---|
| **Bulan yang dilihat · Excel** | Semua transaksi bulan itu |
| **Bulan yang dilihat · PDF** | Ringkasan, rincian per kategori, dan semua transaksi |
| **Tahun itu · Excel** | Rekap per bulan + semua transaksi setahun |
| **Tahun itu · PDF** | Ringkasan, rincian per kategori, dan rekap per bulan |

Excel memuat kolom Jenis Transaksi, Kategori, Metode, Net Bulan, Net Total, dan *Dicatat Oleh*.
Laporan PDF memakai kop berisi nama usaha, kontak, dan logo dari [Profil Bisnis](/panduan/pengaturan),
plus nomor halaman.

::: info Export mengikuti filter
Kalau filter jenis, kategori, atau pencarian sedang aktif, menu Export menyebutnya, dan hasil
export hanya berisi transaksi yang cocok. Kop PDF juga mencantumkan filter tersebut.
:::

---

## Cara Transaksi Masuk ke Keuangan

### PPPoE — Pembayaran Tagihan

Catatan masuk otomatis saat pembayaran tagihan dicatat di halaman **Billing** atau dikonfirmasi
gateway. Nominal yang dicatat adalah **uang yang benar-benar diterima** — pembayaran sebagian
tercatat sebesar yang diterima (sisanya tetap piutang di Billing), potongan harga tercatat sebesar
nominal setelah potongan. Tanggal transaksi mengikuti **Tanggal Bayar** yang diisi operator, bukan
tanggal ia mengetiknya. Metode pembayaran dan bukti yang dilampirkan saat Catat Bayar ikut terbawa.

Kalau pembayaran itu [dibatalkan](/panduan/pppoe/tagihan#membatalkan-pembayaran) di Billing, catatan
keuangannya ikut terhapus.

### Hotspot — Penjualan Voucher

Catatan masuk otomatis saat operator meng-generate batch voucher. Nominal yang dicatat:

- **Tanpa reseller**: jumlah voucher × harga profil
- **Dengan reseller**: jumlah voucher × harga reseller profil (atau harga eceran jika harga reseller belum diset)

Batch dengan harga profil = 0 tidak menghasilkan catatan keuangan.

### Inventaris — Pembelian Stok

Setiap pembelian yang dicatat di halaman [Inventaris](/panduan/inventaris#mencatat-pembelian) langsung
muncul di sini sebagai pengeluaran pada **tanggal beli** di nota, dengan keterangan otomatis seperti
*"Pembelian stok: 300 m Fiber 12 core"*, beserta metode pembayaran dan bukti notanya.

::: warning Jumlah dan tanggalnya dikunci di halaman Keuangan
Nominalnya turunan dari jumlah × harga di Inventaris, dan menghapusnya di sini akan meninggalkan stok
yang uangnya sudah hilang dari catatan. Metode pembayaran dan bukti boleh dikoreksi dari sini; untuk
membatalkan pembeliannya, gunakan Riwayat Keluar-Masuk di halaman Inventaris supaya stoknya ikut
dikoreksi.
:::

### Top Up Reseller Bukan Pendapatan

Top up saldo reseller **tidak** dicatat sebagai pemasukan — itu deposit. Pendapatan baru diakui
saat reseller menukar saldonya menjadi voucher, supaya tidak ada penghitungan ganda. Lihat
[Portal Reseller](/panduan/hotspot/reseller#pencatatan-keuangan).

---

## Insight Bisnis

Selain daftar transaksi, tersedia halaman **Insight Bisnis** per router yang menyajikan ringkasan
analitik: indikator kinerja utama, tren pendapatan, dan komposisi pelanggan.

Buka router → **Insight Bisnis**

::: info Izin terpisah
Akses ke Insight Bisnis dikontrol modul izin **Insight Bisnis** yang terpisah dari modul
**Keuangan** — sehingga Anda bisa memberi seseorang gambaran besar bisnis tanpa memberinya akses ke
catatan transaksi per baris, atau sebaliknya.
:::

---

::: tip
Untuk laporan khusus hotspot — performa per profil, pendapatan reseller, dan tren pemakaian voucher — gunakan halaman [Laporan Voucher](/panduan/hotspot/laporan).
:::
