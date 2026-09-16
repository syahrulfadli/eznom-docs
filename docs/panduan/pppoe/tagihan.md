# Tagihan & Pembayaran PPPoE

---

## Cara Kerja Tagihan

Tagihan **terbit otomatis** — Anda tidak membuatnya secara manual:

- **Pascabayar**: siklus bulanan terbit begitu masa layanannya mulai (pukul 01.00), mengikuti
  hari billing router, jatuh tempo di akhir masa layanan.
- **Prabayar**: tagihan masa layanan berikutnya terbit begitu tagihan sebelumnya lunas, jatuh
  tempo di awal masa layanan — jadi pelanggan selalu bisa bayar di muka.
- **Pelanggan baru**: tagihan pertama (prorata) dibuat bersamaan dengan data pelanggannya. Lihat
  [Tagihan Pertama (Prorata)](/panduan/pppoe/pelanggan#tagihan-pertama-prorata).

Tombol **Terbitkan Tagihan** di kanan atas hanya mempercepat proses malam itu — aman ditekan
kapan saja, yang sudah ada dilewati.

::: tip Aturan lengkapnya
Arti tiap status, cara angka piutang dihitung, isolir & tenggang, sambung ulang, dan skenario
umum dijelaskan tuntas di [Sistem Billing PPPoE](/panduan/pppoe/billing). Halaman ini fokus ke
langkah-langkah di halaman Billing.
:::

---

## Melihat Daftar Tagihan

1. Buka router yang diinginkan
2. Di sidebar, pilih **PPPoE → Billing**

Bulan yang dipilih di navigasi = **bulan jatuh tempo**. Tabel menampilkan:
- Nama & username pelanggan (badge **Prabayar** / **Baru** / **Suspended** bila relevan)
- Jumlah tagihan (dengan rincian PPN dan biaya pemasangan bila ada; sisa bila dibayar sebagian)
- **Masa layanan** — rentang tanggal yang dibayar tagihan itu
- Tanggal jatuh tempo (batas bayar)
- Status pembayaran

Klik tombol **Filter** untuk membuka modal berisi filter **Status**, **Tipe Pembayaran**,
**Grup Pelanggan**, **Urutan**, dan jumlah baris per halaman. Kolom **Pencarian** tetap di atas
tabel.

::: tip Urutan default: yang belum bayar di atas
Tabel billing secara default menampilkan tagihan **belum bayar lebih dulu**, bukan urutan nama —
karena itulah yang biasanya sedang Anda kejar. Ubah lewat filter **Urutan** kalau Anda butuh
tampilan lain.
:::

### Kartu Statistik Bisa Diklik

Empat kartu di atas tabel (Total, Sudah Bayar, Belum Bayar, Terlambat) berfungsi sebagai filter
cepat — klik satu kartu untuk menyaring tabel ke status tersebut, klik lagi untuk melepas filter.
Arahkan kursor ke kartu untuk melihat tooltip yang menjelaskan persis apa yang dihitung angkanya.

Tiga kartu pertama menghitung bulan yang sedang dilihat; kartu **Terlambat** menghitung tunggakan
dari **semua bulan** (jumlah, sisa nominal, dan jumlah pelanggan) — klik kartunya untuk melihat
seluruh tunggakan tanpa berpindah-pindah bulan.

---

## Status Tagihan

| Status | Arti |
|---|---|
| 🟡 **Belum Bayar** | Belum lunas, jatuh tempo belum lewat |
| 🟠 **Sebagian** | Sudah ada pembayaran, tapi belum menutup total — sisa tampil di baris |
| 🔴 **Terlambat** | Belum lunas dan jatuh tempo sudah lewat (dihitung dari tanggal, tidak menunggu proses isolir) |
| 🟢 **Lunas** | Total sudah diterima, atau dipotong dengan alasan tercatat |

### Cara Angka Piutang Dihitung

- **Tagihan pelanggan suspended** selalu masuk **Belum Bayar** dan bisa dicatat bayar, tetapi tidak
  pernah dihitung **Terlambat** dan tidak memicu tawaran isolir — layanannya memang tidak berjalan.
- **Tunggakan bulan-bulan lalu** tetap terhitung di kartu **Terlambat** saat Anda melihat bulan
  berjalan; tidak hilang begitu ganti bulan.
- **Tagihan prabayar berikutnya** (yang terbit otomatis setelah tagihan sebelumnya lunas) baru
  dihitung piutang pada hari batas bayarnya — sebelum itu pelanggan masih aktif normal.

---

## Rincian PPN & Biaya Pemasangan

Kalau profil layanan pelanggan punya PPN, atau pelanggan dikenai biaya pemasangan, nominal tagihan
ditampilkan **terurai** — bukan hanya satu angka total:

| Baris | Muncul ketika |
|---|---|
| Biaya layanan | Selalu |
| Biaya pemasangan | Pelanggan punya biaya pemasangan pada tagihan pertamanya |
| PPN | Profil layanan punya persentase PPN |
| **Total** | Selalu |

Rincian yang sama tampil di **kuitansi**, **invoice**, dan **modal Catat Bayar** — jadi angka yang
Anda lihat, yang dikonfirmasi, dan yang diterima pelanggan selalu konsisten.

---

## Mengirim Tagihan ke Pelanggan

Tombol **Buat & Kirim Tagihan** mengirimkan informasi tagihan sesuai metode pembayaran yang dikonfigurasi di **Pengaturan → Pembayaran**.

### Syarat

Minimal satu metode pembayaran harus aktif di halaman [Pengaturan Pembayaran](/panduan/pembayaran):
- **Pembayaran Online** (Midtrans / Duitku / DOKU / iPaymu) — pelanggan mendapat link bayar
- **Pembayaran Manual** — pelanggan mendapat informasi rekening bank

### Cara Mengirim

1. Di halaman **Billing**, cari tagihan yang ingin dikirim
2. Klik menu tiga titik (⋮) pada baris tagihan tersebut
3. Pilih **Buat & Kirim Tagihan**

Pesan tagihan dikirim ke pelanggan via WhatsApp dan/atau Email sesuai pengaturan notifikasi. Isi pesannya:

| Metode Aktif | Isi Pesan |
|---|---|
| Online saja | Nama, jumlah, jatuh tempo + **link pembayaran** gateway aktif |
| Manual saja | Nama, jumlah, jatuh tempo + **info rekening bank** |
| Keduanya | Link pembayaran + info rekening sebagai alternatif |

Informasi penting di dalam pesan (nominal, tanggal jatuh tempo, ID pelanggan, nomor rekening)
ditebalkan agar mudah ditemukan di antara teks pesan.

---

## Mencatat Pembayaran

### Catat Bayar (satu tagihan)

1. Di halaman **Billing**, klik **Catat Bayar** pada baris tagihan
2. Periksa **Jumlah Diterima** (default = sisa tagihan) dan **Tanggal Bayar** (boleh dimundurkan,
   tidak boleh maju — tanggal ini yang masuk buku kas)
3. Pilih metode: **Tunai**, **Transfer Bank**, atau **Online (QRIS, dll.)** — ketiganya berarti uang
   sudah Anda terima
4. Isi nomor referensi / catatan bila perlu, lalu **Simpan**

Status berubah **Lunas**, kuitansi dikirim ke email pelanggan (bila ada), dan konfirmasi lunas
dikirim sesuai pengaturan notifikasi. Bila pelanggan sedang diisolir, sistem menyambungkannya
kembali **hanya kalau tidak ada tunggakan lain yang lewat jatuh tempo** — toast memberi tahu
hasilnya.

::: warning Nominal lebih kecil dari sisa?
Modal meminta Anda memilih **Bayar sebagian** (tagihan tetap belum lunas, sisa terus ditagih) atau
**Potongan harga** (tagihan diturunkan, lunas, alasan wajib). Penjelasannya di
[Sistem Billing PPPoE](/panduan/pppoe/billing#nominal-lebih-kecil-dari-sisa).
:::

::: tip Bayar di muka (prabayar)
Pada tagihan prabayar, field **Sekalian bayar di muka** melunasi tagihan ini plus 2/3/6/12
periode berikutnya sekaligus, dengan metode & tanggal yang sama.
:::

### Catat Lunas borongan

Centang beberapa baris → **Catat Bayar** di bilah aksi → isi metode, tanggal, referensi → **Catat
Lunas**. Tiap tagihan dilunasi sebesar sisanya; konfirmasi ke pelanggan dikirim bertahap.

### Pembayaran online oleh pelanggan

Untuk membuat pelanggan membayar sendiri via VA / QRIS / e-wallet, jangan pakai Catat Bayar —
gunakan **Buat & Kirim Tagihan** (menu ⋮) atau arahkan pelanggan ke
[portal bayar](/panduan/pppoe/portal-pembayaran). Setelah gateway mengkonfirmasi (webhook),
tagihan otomatis **Lunas**, kuitansi dikirim, dan sambung ulang mengikuti aturan yang sama.

::: tip Link pembayaran aman
Link yang dikirim adalah link dari eznom — bukan link gateway langsung. Sesi pembayaran di gateway
baru dibuat saat pelanggan membuka link, sehingga link tidak kadaluarsa sebelum dibuka. Link yang
sama dibuka berulang memakai ulang sesi gateway yang masih berlaku. Nominal link = **sisa** tagihan.
:::

::: info Tagihan Rp 0 tidak ditawari link bayar
Tagihan bernilai nol tidak akan mendapat link pembayaran — tidak ada yang perlu dibayar, dan
gateway akan menolak transaksi bernilai nol.
:::

---

## Kirim Pesan WhatsApp Manual

Selain notifikasi otomatis, Anda bisa mengirim pesan WA ke satu pelanggan kapan saja lewat menu
tiga titik (⋮) pada baris tagihan → **Kirim WhatsApp**.

Template yang ditawarkan menyesuaikan keadaan tagihan — opsi yang tidak nyambung sengaja
disembunyikan supaya Anda tidak salah kirim:

| Keadaan tagihan | Template yang tersedia |
|---|---|
| **Belum bayar** | Tagihan + Cara Bayar · Pengingat Jatuh Tempo (H-N) · Kirim Link Invoice · Tulis Sendiri |
| Belum bayar & **sudah lewat jatuh tempo** | Ditambah: Tagihan Lewat Jatuh Tempo |
| Belum bayar & pelanggan **sedang diisolir** | Ditambah: Layanan Dinonaktifkan (Isolir) |
| **Sudah lunas** | Konfirmasi Lunas + Link Kuitansi · Kirim Link Kuitansi Saja · Tulis Sendiri |

Pesan dibuka lewat `wa.me`, jadi terkirim dari nomor WhatsApp yang Anda buka di perangkat itu —
**tidak** memakai kuota gateway WA otomatis dan tidak terpengaruh batas kirim harian.

---

## Kirim Link Kuitansi

Untuk tagihan yang sudah lunas, menu tiga titik (⋮) menyediakan **Kirim Link Kuitansi**. Pelanggan
menerima tautan ke kuitansi pembayarannya via WhatsApp dan/atau email.

Link kuitansi juga otomatis disertakan dalam notifikasi konfirmasi pembayaran lunas.

::: warning Kuitansi publik vs terverifikasi
Secara default, pelanggan perlu memasukkan **ID Pelanggan** untuk membuka kuitansi. Di
**Pengaturan Router** ada saklar yang membuat link kuitansi **terbuka untuk umum** — siapa pun yang
punya link bisa melihat tagihannya tanpa verifikasi. Nyalakan hanya kalau Anda memang menginginkan
kemudahan itu dan menerima konsekuensi privasinya.
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
Pelanggan baru seharusnya sudah punya tagihan pertama yang dibuat bersamaan dengan datanya. Kalau
belum ada, kemungkinan pelanggan tersebut dibuat lewat impor dari MikroTik (yang tidak melalui form
tagihan pertama) — tekan **Terbitkan Tagihan**, atau tunggu proses malam pukul 01.00.

**Pelanggan sudah bayar tapi masih terisolir.**
Periksa kartu **Terlambat** — kemungkinan masih ada tunggakan lain yang lewat jatuh tempo.
Pelanggan baru disambungkan setelah semua tunggakan di luar masa tenggang beres.

**Tagihan lunas tidak bisa dihapus.**
Memang disengaja: pembayaran dan catatan keuangannya menempel di tagihan itu. Koreksi lewat
halaman **Keuangan**.

**Jumlah tagihan tidak cocok dengan harga profil.**
Periksa apakah profil layanan punya **PPN** — nominal tagihan sudah termasuk PPN. Untuk tagihan
pertama, nominal juga dihitung **prorata** dari tanggal mulai ke jatuh tempo, dan bisa ditambah
**biaya pemasangan**. Rincian per komponen bisa dilihat di kuitansi.
