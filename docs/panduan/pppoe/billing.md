# Sistem Billing PPPoE

Halaman ini menjelaskan **cara kerja billing PPPoE dari ujung ke ujung**: bagaimana tagihan
terbit, apa arti tiap status dan angka di halaman Billing, bagaimana pembayaran dicatat, kapan
pelanggan diisolir dan disambung kembali, serta apa yang dilihat pelanggan Anda. Halaman lain di
bagian PPPoE membahas tombol dan langkah spesifik; halaman ini menjelaskan **aturannya**.

Kalau Anda hanya butuh langkah praktis, lompat ke:
[Tagihan & Pembayaran](/panduan/pppoe/tagihan) ·
[Skema Pembayaran](/panduan/pppoe/skema-pembayaran) ·
[Portal Bayar Pelanggan](/panduan/pppoe/portal-pembayaran)

---

## Satu Tagihan, Tiga Tanggal

Setiap tagihan PPPoE selalu punya tiga hal yang sama, apa pun skema pembayarannya:

| | Arti | Contoh |
|---|---|---|
| **Masa layanan** | Rentang tanggal yang dibayar oleh tagihan itu | 1 Sep – 1 Okt 2026 |
| **Jatuh tempo** (batas bayar) | Tanggal terakhir pelanggan boleh membayar tanpa dianggap terlambat | Pascabayar: **1 Okt** · Prabayar: **1 Sep** |
| **Nominal** | Harga profil (sudah termasuk PPN bila ada), ditambah biaya pemasangan pada tagihan pertama | Rp 300.000 |

Perbedaan pascabayar dan prabayar **hanya** di posisi jatuh tempo:

- **Pascabayar** — pakai dulu, bayar belakangan. Jatuh tempo = **akhir** masa layanan.
- **Prabayar** — bayar dulu, layanan menyusul. Jatuh tempo = **awal** masa layanan, yang sama
  dengan tanggal masa aktif sebelumnya berakhir.

::: tip Apa yang berubah dari sebelumnya
Dulu "jatuh tempo" tagihan prabayar menunjuk **akhir** masa aktif, sehingga kata yang sama punya
dua arti dan tagihan perpanjangan prabayar baru terlihat "terlambat" sebulan setelah pelanggannya
diputus. Sekarang jatuh tempo selalu berarti **batas bayar** untuk kedua skema. Tagihan prabayar
lama sudah dikonversi otomatis; masa layanannya tidak berubah, hanya tanggal batas bayarnya yang
kini ditampilkan dengan benar.
:::

---

## Status Tagihan

| Badge | Arti | Cara dihitung |
|---|---|---|
| 🟡 **Belum Bayar** | Belum lunas, jatuh tempo belum lewat | Tanggal hari ini ≤ jatuh tempo |
| 🟠 **Sebagian** | Sudah ada uang masuk, tapi belum menutup total | Ada pembayaran tercatat, sisa > 0 |
| 🔴 **Terlambat** | Belum lunas dan jatuh tempo sudah lewat | Tanggal hari ini > jatuh tempo — **dihitung dari tanggal**, tidak menunggu proses isolir |
| 🟢 **Lunas** | Total sudah diterima (atau dipotong dengan alasan) | — |

Beberapa ketentuan yang sering ditanyakan:

- **Hari jatuh tempo itu sendiri belum terlambat.** Tagihan jatuh tempo 1 Oktober baru menjadi
  Terlambat pada 2 Oktober.
- **Masa tenggang tidak mengubah status.** Tagihan tetap "Terlambat" begitu jatuh tempo lewat;
  tenggang hanya menunda **isolir**-nya. Dengan begitu Anda melihat piutang apa adanya, sementara
  pelanggan masih diberi waktu.
- **Pelanggan suspended tidak pernah "Terlambat".** Layanannya memang tidak berjalan (misalnya
  menunggu tanda tangan kontrak), jadi tagihannya tetap masuk kelompok Belum Bayar dan bisa
  dicatat bayar, tetapi tidak ikut tawaran isolir.
- **Tagihan prabayar berikutnya tidak dihitung sebagai piutang** sampai hari batas bayarnya —
  sebelum itu pelanggan masih aktif normal dan belum berutang apa pun. Lihat
  [Siklus Prabayar](#siklus-prabayar).

---

## Bagaimana Tagihan Terbit

Anda **tidak perlu membuat tagihan secara manual**. Sistem menerbitkannya sendiri, dan hanya
menyisakan satu pekerjaan untuk Anda: mencatat pembayaran.

### Tagihan pertama (pelanggan baru)

Saat pelanggan baru disimpan, form mewajibkan **tagihan pertama** dengan tanggal mulai layanan,
tanggal akhir masa layanan, dan nominal prorata (bisa diedit). Biaya pemasangan, bila ada, ikut di
tagihan ini. Lihat [Tagihan Pertama (Prorata)](/panduan/pppoe/pelanggan#tagihan-pertama-prorata).

- Pascabayar: jatuh tempo = akhir masa layanan yang Anda isi.
- Prabayar: jatuh tempo = tanggal mulai (dibayar saat pemasangan). Setelah tersimpan, eznom
  langsung mengarahkan Anda untuk mencatat pembayarannya.

### Siklus Pascabayar

Setiap malam pukul 01.00, sistem menerbitkan tagihan untuk siklus yang **masa layanannya sudah
mulai**. Siklus mengikuti **hari billing** router (atau jatuh tempo override per pelanggan):

```
Hari billing = 1

Masa layanan 1 Agu – 1 Sep  →  terbit 1 Agustus, jatuh tempo 1 September
Masa layanan 1 Sep – 1 Okt  →  terbit 1 September, jatuh tempo 1 Oktober
```

Karena tagihan sudah ada sejak awal masa layanan, pengingat H-7/H-3/H-1 dan email invoice punya
tagihan untuk dirujuk — jauh sebelum jatuh tempo.

Sistem otomatis **melewati** siklus yang tidak boleh ditagihkan:

- pelanggan belum berlangganan pada siklus itu (baru dipasang di tengah/akhir siklus — tagihan
  pertamanya yang prorata sudah menutupi hari-hari tersebut);
- siklus sudah tercakup tagihan lain (misalnya tagihan pertama yang sengaja dibuat menjangkau dua
  siklus);
- profil layanan pelanggan belum punya harga.

::: info Email invoice pascabayar
Pelanggan pascabayar yang punya alamat email menerima **invoice** setiap pagi pukul 08.30 untuk
tagihan yang baru terbit dan belum jatuh tempo. Tunggakan lama tidak dikirimi invoice — itu urusan
[notifikasi tunggakan](/panduan/notifikasi#notifikasi-tunggakan-berulang).
:::

### Siklus Prabayar

Pelanggan prabayar **selalu punya tepat satu tagihan belum lunas**: tagihan untuk masa layanan
berikutnya. Tagihan itu terbit **otomatis begitu tagihan sebelumnya lunas**, sehingga pelanggan
bisa membayar di muka kapan saja — lewat Anda maupun lewat portal.

```
Masa aktif 1 Sep – 1 Okt LUNAS
   └─ langsung terbit: masa layanan 1 Okt – 1 Nov, bayar sebelum 1 Okt

Dibayar 20 Sep (di muka)   → masa aktif berlanjut mulus sampai 1 Nov
Belum dibayar sampai 1 Okt → mulai 2 Okt "Terlambat"; diisolir setelah masa tenggang
```

Masa layanan berikutnya dihitung dari **akhir masa lunas terakhir** sampai **hari billing
berikutnya**, dengan nominal harga profil saat tagihan terbit. Kalau jendelanya tidak tepat satu
siklus (misalnya setelah pergeseran karena bayar terlambat), nominalnya **prorata** — jendela
yang terlalu pendek (kurang dari seminggu) digabung ke siklus berikutnya supaya pelanggan tidak
ditagih dua kali dalam seminggu.

#### Bayar terlambat setelah diputus

Kalau layanan **sudah diputus** dan pelanggan baru membayar setelah masa layanan seharusnya
mulai, masa layanan **digeser ke tanggal pembayaran** dengan durasi tetap:

```
Tagihan: 1 Okt – 1 Nov, bayar sebelum 1 Okt. Diputus 2 Okt.
Dibayar 10 Okt → masa aktif menjadi 10 Okt – 10 Nov, langsung tersambung.
Tagihan berikutnya: 10 Nov – 1 Des (prorata), lalu kembali normal 1 Des – 1 Jan.
```

Pelanggan tidak membayar hari-hari tanpa layanan, dan tidak mendapat hari gratis. Tanggal jatuh
tempo yang lama tetap tersimpan, jadi riwayat "terlambat berapa hari" tetap jujur.

Pelanggan yang **tidak** diputus (Auto-Isolir dimatikan) tetap membayar siklus yang ia nikmati —
masa layanannya tidak digeser.

::: warning Prabayar tanpa harga profil
Pelanggan prabayar yang profilnya belum punya harga tidak bisa dibuatkan tagihan. Kalau masa
aktifnya sudah habis, ia tetap **diputus** (tanpa notifikasi tagihan) supaya tidak berjalan gratis.
Isi harga profil, lalu tekan **Terbitkan Tagihan**.
:::

### Tombol "Terbitkan Tagihan"

Tombol di kanan atas halaman Billing menjalankan **persis** apa yang cron malam lakukan — siklus
pascabayar yang sudah mulai dan tagihan prabayar berikutnya yang belum ada. Gunakan setelah
menambah banyak pelanggan atau memperbaiki harga profil, kalau tidak ingin menunggu sampai malam.
Aman ditekan berulang: yang sudah ada dilewati.

---

## Halaman Billing

### Navigasi bulan

Bulan yang dipilih = **bulan jatuh tempo**. "Tagihan September" berarti semua tagihan yang harus
dibayar pada bulan September — untuk pascabayar itu masa layanan Agustus, untuk prabayar masa
layanan September. Kolom **Masa Layanan** di tabel selalu menunjukkan rentang tanggal yang
sebenarnya, jadi tidak perlu menghafal.

### Kartu statistik

| Kartu | Cakupan | Isi |
|---|---|---|
| **Total Tagihan** | Bulan yang dipilih | Jumlah tagihan & nominalnya |
| **Sudah Bayar** | Bulan yang dipilih | Jumlah lunas & **uang yang benar-benar diterima** (bisa berbeda dari nominal bila ada potongan) |
| **Belum Bayar** | Bulan yang dipilih | Belum lunas & belum lewat jatuh tempo (+ tagihan pelanggan suspended) |
| **Terlambat** | **Semua bulan** | Belum lunas & lewat jatuh tempo, sisa nominalnya, dan jumlah pelanggannya |

Kartu **Terlambat** sengaja lintas bulan: tunggakan adalah fakta router, bukan fakta bulan.
Berpindah bulan tidak akan membuat tunggakan lama "hilang".

Setiap kartu bisa diklik untuk menyaring tabel. Klik **Terlambat** menampilkan semua tunggakan
dari bulan mana pun; klik lagi untuk melepas filter.

### Tabel

Tiap baris menampilkan pelanggan, ID, profil, nominal (dengan rincian PPN & pemasangan bila ada),
**masa layanan**, jatuh tempo, status, dan aksi. Baris yang dibayar sebagian menampilkan "Dibayar
Rp X · sisa Rp Y". Pelanggan prabayar ditandai badge **Prabayar**; pelanggan yang dipasang dalam
30 hari terakhir ditandai **Baru**.

Urutan default: Terlambat → Belum Bayar → Lunas, lalu jatuh tempo terdekat. Ubah lewat **Filter**.

---

## Mencatat Pembayaran

Klik **Catat Bayar** pada baris tagihan. Modal menampilkan rincian tagihan (layanan, PPN,
pemasangan, total, dan **sisa** bila sebelumnya sudah ada pembayaran sebagian) beserta field:

| Field | Keterangan |
|---|---|
| **Jumlah Diterima** | Default = sisa tagihan. Tidak boleh melebihi sisa |
| **Tanggal Bayar** | Default hari ini. Boleh dimundurkan (uang diterima kemarin), tidak boleh maju. Tanggal ini yang masuk ke buku kas |
| **Sekalian bayar di muka** | Hanya prabayar — lihat di bawah |
| **Metode** | Tunai · Transfer Bank · Online (QRIS dll.) — semuanya berarti *uang sudah Anda terima*. Untuk **mengirim link bayar** ke pelanggan, gunakan **Buat & Kirim Tagihan** di menu ⋮ |
| **Nomor Referensi / Catatan** | Opsional; ikut tercetak di kuitansi |

### Nominal lebih kecil dari sisa

Kalau Anda mengetik nominal yang lebih kecil dari sisa, modal meminta Anda memilih artinya —
karena secara administrasi keduanya berbeda:

| Pilihan | Yang terjadi |
|---|---|
| **Bayar sebagian** | Uang dicatat. Tagihan **tetap belum lunas** (badge Sebagian), sisanya terus ditagih dan tetap dihitung piutang. Pelanggan yang sedang diisolir **belum** disambungkan. |
| **Potongan harga** | Nominal tagihan diturunkan menjadi total yang diterima, tagihan **lunas**. Alasan potongan **wajib** diisi dan tercatat di jejak audit. |

::: tip Kenapa harus memilih?
Dulu nominal berapa pun langsung membuat tagihan "Lunas", dan selisihnya lenyap tanpa jejak — tidak
tercatat sebagai piutang maupun potongan. Sekarang laporan keuangan Anda menunjukkan uang yang
benar-benar diterima, dan sisa piutang tetap terlihat.
:::

### Bayar di muka (prabayar)

Pada tagihan prabayar, pilih **2 / 3 / 6 / 12 periode** untuk melunasi tagihan ini sekaligus
periode-periode berikutnya. Tiap periode diterbitkan dari akhir masa layanan sebelumnya dengan
harga profil saat itu, dan langsung dicatat lunas dengan metode, referensi, dan tanggal yang sama.
Masa aktif pelanggan maju sejauh periode yang dibayar; pengingat baru dikirim menjelang akhir
periode terjauh.

### Setelah tersimpan

- Status berubah, kuitansi dikirim ke email pelanggan (bila ada), dan konfirmasi lunas dikirim
  via WhatsApp/Email sesuai pengaturan notifikasi.
- Kalau pelanggan sedang **diisolir**, sistem mencoba menyambungkan kembali — dan memberi tahu
  Anda hasilnya. Lihat [Sambung Ulang](#sambung-ulang-setelah-bayar).

### Catat lunas borongan

Centang beberapa baris → **Catat Lunas**. Setiap tagihan dilunasi sebesar sisanya dengan metode,
tanggal, dan referensi yang sama. Konfirmasi lunas ke pelanggan dikirim **bertahap** (jeda 5 detik
per pelanggan) agar nomor WhatsApp Anda aman. Sambung ulang diputuskan per pelanggan setelah
semua tagihannya di batch itu diproses.

---

## Isolir & Masa Tenggang

Setiap jam, sistem memeriksa tagihan yang **belum lunas dan jatuh temponya lewat lebih dari masa
tenggang**. Pelanggan yang memenuhi syarat diisolir, tagihannya ditandai, dan pelanggan diberi tahu
(pesan hanya dikirim pada 08.00–21.00; isolir di luar jam itu tetap dieksekusi, pemberitahuannya
ditunda).

**Masa tenggang** diatur di **Pengaturan Router** (menang) atau **Pengaturan → Notifikasi** (fallback
untuk semua router), dan berlaku untuk **prabayar maupun pascabayar**. Dengan tenggang 3 hari,
tagihan jatuh tempo 1 Oktober baru memicu isolir pada 5 Oktober. Untuk prabayar itu berarti
pelanggan masih mendapat layanan 3 hari setelah masa aktifnya habis — kalau Anda ingin prabayar
diputus tepat waktu, set tenggang router tersebut ke 0.

Isolir otomatis hanya berlaku bila **Auto-Isolir** aktif di data pelanggan **dan** di pengaturan
router. Pelanggan yang tidak memenuhi syarat tetap ditandai terlambat, hanya tidak diputus.

::: warning Tombol "Isolir Semua Yang Terlambat"
Tombol ini adalah **aksi manual** Anda: mengisolir semua tagihan terlambat dari bulan mana pun
**tanpa menunggu masa tenggang dan tanpa melihat setelan Auto-Isolir per pelanggan** (pelanggan
suspended tetap dikecualikan). Pakailah dengan sadar.
:::

Detail teknis pemutusan di router (IP isolir, firewall, halaman isolir) ada di
[Halaman Isolir](/panduan/isolir).

---

## Sambung Ulang Setelah Bayar

Pelanggan yang diisolir disambungkan kembali **hanya bila tidak ada lagi tagihan yang memenuhi
syarat isolir** — apa pun jalurnya (Catat Bayar, borongan, pembayaran online via gateway).

Artinya: pelanggan dengan tunggakan Juli dan Agustus yang hanya melunasi Agustus **tetap
terisolir**, dan Anda diberi tahu: *"Pelanggan BELUM disambungkan: masih ada tunggakan lain yang
lewat jatuh tempo."* Tunggakan yang masih di dalam masa tenggang tidak menahan sambungan.

::: info Kenapa begitu?
Dulu satu pembayaran apa pun langsung menyambungkan, lalu pemeriksaan isolir sejam kemudian
memutusnya lagi — lengkap dengan pesan "Anda diisolir" kedua. Pelanggan bingung, dan Anda tidak
pernah tahu. Sekarang keputusannya jelas di depan, dan [portal pelanggan](#portal-pelanggan)
mengarahkan pembayaran ke tunggakan tertua lebih dulu.
:::

---

## Mengubah & Menghapus Tagihan

- **Ubah jatuh tempo** (per baris atau borongan) — memindahkan batas bayar. Untuk prabayar, masa
  layanan tidak ikut bergeser.
- **Hapus tagihan** — hanya untuk tagihan yang **belum lunas**. Tagihan lunas tidak bisa dihapus
  karena pembayaran dan catatan keuangannya menempel padanya; untuk prabayar, periode lunas juga
  bukti masa aktif. Kalau ada kesalahan pada tagihan lunas, catat koreksinya di **Keuangan**.
- **Tagihan prabayar berikutnya yang dihapus** akan diterbitkan ulang oleh sistem (dengan harga
  profil saat itu) — ini cara termudah memperbarui nominal setelah harga profil berubah.

---

## Notifikasi ke Pelanggan

Semua notifikasi tagihan mengacu pada **jatuh tempo** yang sama untuk kedua skema; hanya kata-katanya
yang berbeda. Rincian pengaturannya ada di [Notifikasi ke Pelanggan](/panduan/notifikasi).

| Kapan | Pascabayar | Prabayar |
|---|---|---|
| H-N sebelum jatuh tempo | "Tagihan … akan jatuh tempo pada …" | "Masa aktif … akan berakhir pada … Perpanjang untuk masa layanan …" |
| Hari jatuh tempo | Link bayar / info rekening | Link bayar / info rekening |
| Setelah jatuh tempo | Tunggakan berkala (bila diaktifkan) | Tunggakan berkala (bila diaktifkan) |
| Saat diisolir | Pemberitahuan isolir | Pemberitahuan isolir |
| Saat lunas | Konfirmasi + link kuitansi | Konfirmasi + link kuitansi |
| Saat terbit (email) | Invoice pagi hari | — |

Template pesan bisa menyebut masa layanan lewat placeholder `{service_period}`.

---

## Portal Pelanggan

Di [portal bayar](/panduan/pppoe/portal-pembayaran), pelanggan melihat masa aktif (prabayar),
semua tagihan belum lunas dengan masa layanan dan batas bayarnya, dan tombol bayar **hanya pada
tagihan tertua** — tagihan berikutnya baru bisa dibayar setelah yang lama lunas. Ini mencegah
pelanggan melunasi tagihan baru sambil menyisakan tunggakan lama yang tetap membuatnya terisolir.

Pelanggan prabayar tidak perlu menunggu jendela H-N untuk "membuat order" — tagihan berikutnya
selalu sudah ada, jadi bayar di muka tinggal klik.

---

## Skenario yang Sering Terjadi

**Pelanggan pascabayar baru dipasang 10 September, hari billing 1.**
Tagihan pertama: 10 Sep – 1 Okt (prorata), jatuh tempo 1 Okt. Sistem *tidak* menerbitkan tagihan
September penuh untuknya. Tagihan berikutnya (1 Okt – 1 Nov) terbit 1 Oktober.

**Pelanggan prabayar bayar tanggal 20 untuk masa aktif sampai tanggal 1.**
Begitu tercatat lunas, tagihan 1 – 1 bulan berikutnya langsung terbit. Ia bisa membayarnya kapan
saja; pengingat dikirim H-N sebelum tanggal 1.

**Pelanggan menunggak dua bulan, bayar satu bulan.**
Tagihan yang dibayar lunas; pelanggan tetap terisolir sampai tunggakan satunya beres. Toast
memberi tahu Anda alasannya.

**Pelanggan bayar Rp 250.000 dari tagihan Rp 300.000.**
Pilih *bayar sebagian* (sisa Rp 50.000 tetap ditagih) atau *potongan harga* (tagihan menjadi
Rp 250.000, lunas, alasan tercatat).

**Harga profil naik.**
Tagihan yang sudah terbit tidak berubah. Tagihan prabayar berikutnya yang belum dibayar bisa
dihapus agar terbit ulang dengan harga baru; tagihan pascabayar siklus berikutnya otomatis memakai
harga baru.

**Angka kartu Terlambat lebih besar dari jumlah baris di tabel.**
Kartu menghitung semua bulan, tabel hanya bulan yang dipilih. Klik kartunya untuk melihat semuanya.
