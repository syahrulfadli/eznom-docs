# Tagihan & Pembayaran PPPoE

---

## Cara Kerja Tagihan Bulanan

Tagihan untuk setiap pelanggan aktif dibuat **otomatis oleh sistem setiap hari pukul 01.00**
berdasarkan profil layanan yang terpasang. Anda tidak perlu membuat tagihan bulanan secara manual.

::: info Pelanggan baru langsung punya tagihan pertama
Sejak form pelanggan mewajibkan **Tagihan Pertama (prorata)**, pelanggan baru **tidak lagi**
menunggu sampai besok untuk punya tagihan — tagihan pertamanya dibuat bersamaan dengan data
pelanggannya. Lihat [Tagihan Pertama (Prorata)](/panduan/pppoe/pelanggan#tagihan-pertama-prorata).

Tagihan bulanan berikutnya barulah dibuat oleh scheduler harian.
:::

---

## Melihat Daftar Tagihan

1. Buka router yang diinginkan
2. Di sidebar, pilih **PPPoE → Billing**

Tabel menampilkan semua tagihan dengan informasi:
- Nama & username pelanggan
- Periode tagihan
- Jumlah tagihan (dengan rincian PPN dan biaya pemasangan bila ada)
- Tanggal jatuh tempo
- Status pembayaran
- Badge **Suspended** bila akun pelanggannya sedang disuspend

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

---

## Status Tagihan

| Status | Arti |
|---|---|
| 🟡 **Belum Bayar** | Tagihan aktif, belum melewati tanggal jatuh tempo |
| 🔴 **Terlambat** | Tagihan belum dibayar dan sudah melewati jatuh tempo |
| 🟢 **Lunas** | Tagihan sudah dikonfirmasi pembayarannya |

### Cara Angka Piutang Dihitung

Beberapa perilaku yang sering ditanyakan:

- **Tagihan pelanggan suspended tetap dihitung** sebagai belum bayar dan tetap bisa dicatat
  pembayarannya — tapi **tidak dihitung sebagai piutang**, karena layanannya memang sedang tidak
  berjalan.
- **Piutang prabayar yang telat bayar dari bulan lalu tetap tampil** di bulan berjalan, tidak
  hilang begitu ganti bulan.
- **Order prabayar yang masih menunggu pembayaran gateway** tidak dihitung sebagai piutang —
  itu penawaran, bukan tagihan yang sudah jatuh tempo.

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

Saat pelanggan membuka link, eznom menampilkan **halaman status** terlebih dahulu (berisi ringkasan
tagihan dan tombol bayar), bukan langsung melempar ke gateway. Kalau pelanggan membuka link yang
sama berulang kali, **sesi gateway yang sudah ada dipakai ulang** selama masih berlaku — tidak
membuat transaksi baru setiap klik.
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
tagihan pertama) — tagihan bulanannya akan muncul pada siklus scheduler berikutnya pukul 01.00.

**Jumlah tagihan tidak cocok dengan harga profil.**
Periksa apakah profil layanan punya **PPN** — nominal tagihan sudah termasuk PPN. Untuk tagihan
pertama, nominal juga dihitung **prorata** dari tanggal mulai ke jatuh tempo, dan bisa ditambah
**biaya pemasangan**. Rincian per komponen bisa dilihat di kuitansi.
