# Inventaris Barang

Inventaris mencatat stok barang lapangan per router — roll kabel, tiang, ODP, modem, router — beserta pembeliannya.

Dua hal yang membuatnya bukan sekadar catatan terpisah:

- **Pembelian otomatis masuk ke [Keuangan](/panduan/keuangan)** sebagai pengeluaran router.
- **Pemasangan di [Peta Jaringan](/panduan/peta-jaringan) memotong stok**, termasuk panjang kabel yang dihitung dari jalur yang digambar.

::: info Fitur Beta
Menu ini masih bertanda **Beta**. Datanya tetap tersimpan, tetapi tampilan dan alurnya masih mungkin berubah.
:::

---

## Membuka Inventaris

Buka router → **Manajemen → Inventaris**.

---

## Menambah Barang

Klik **+ Tambah Barang**, lalu isi:

| Field | Keterangan |
|---|---|
| **Nama Barang** | Misal `Fiber 12 core`, `Tiang beton 7m` |
| **Kategori** | Menentukan barang ini bisa dipakai objek peta jenis apa |
| **Kode** | Opsional — kode internal Anda |
| **Satuan** | Meter, pcs, batang, roll, set |
| **Cara Pelacakan** | `Jumlah saja` atau `Per unit (nomor seri)` |
| **Harga Satuan** | Dipakai menilai stok; terbarui otomatis tiap pembelian |
| **Batas Minimum** | Opsional — peringatan muncul saat stok menyentuh angka ini |

Satuan dan cara pelacakan terisi otomatis mengikuti kategori, dan tetap bisa diubah.

::: tip Kapan memilih "per unit"
Pilih untuk barang yang punya nomor seri dan perlu dilacak satuan — modem/ONT, router, OLT. Untuk kabel dan tiang, `Jumlah saja` sudah cukup.
:::

::: tip Fiber feeder dan dropcore dicatat sebagai dua barang
Keduanya kategori **Kabel**, tetapi harga per meternya jauh berbeda. Buat `Fiber feeder 12 core` dan `Fiber dropcore` sebagai barang terpisah supaya nilai stok dan pengeluarannya tidak bercampur; saat menarik kabel di [Peta Jaringan](/panduan/peta-jaringan#feeder-dan-dropcore), pilih yang sesuai di **Ambil dari stok**.
:::

---

## Mencatat Pembelian

Pada baris barang, klik tombol bertanda **Catat pembelian**, lalu isi jumlah dan harga satuan. Total pengeluarannya terlihat sebelum disimpan.

Saat disimpan, dua hal terjadi sekaligus:

1. Stok barang bertambah.
2. Muncul entri pengeluaran di **Keuangan** dengan keterangan otomatis, misal *"Pembelian stok: 300 m Fiber 12 core"*.

::: warning Membatalkan pembelian
Entri pengeluaran itu **tidak bisa dihapus dari halaman Keuangan**. Batalkan dari riwayat mutasi di halaman Inventaris supaya stoknya ikut dikoreksi — kalau dihapus dari Keuangan saja, stok akan menyisakan barang yang uangnya sudah hilang dari catatan.
:::

---

## Riwayat Mutasi

Tombol **Riwayat mutasi** pada tiap barang membuka seluruh riwayat perubahan stoknya: pembelian, pemasangan, pembongkaran, kerusakan, dan penyesuaian — lengkap dengan siapa yang melakukannya.

Riwayat ini tidak pernah diubah. Koreksi dilakukan dengan mutasi baru, sehingga angka stok selalu bisa dibuktikan dari riwayatnya.

### Menyesuaikan stok

Tombol **Sesuaikan stok** dipakai setelah opname gudang. Isi jumlah yang **seharusnya**; selisihnya yang tercatat di riwayat, bukan menimpa angka lama diam-diam.

---

## Unit Ber-Nomor Seri

Untuk barang dengan pelacakan **per unit**, tombol **Kelola unit** membuka daftar unitnya.

### Mendaftarkan unit

Masukkan nomor seri **satu per baris**, isi harga per unit, lalu **Daftarkan Unit**.

- Nomor seri yang **sudah terdaftar dilewati**, sisanya tetap tersimpan — satu label dobel tidak membatalkan puluhan lainnya. Yang dilewati ditampilkan agar bisa Anda cek.
- Matikan **Catat sebagai pembelian** untuk mendata barang yang sudah lama Anda miliki: stok tetap bertambah, tanpa memunculkan pengeluaran baru di Keuangan.

### Memindai dengan kamera

Tombol **Pindai dengan Kamera** membuka kamera belakang perangkat dan mengisi kotak nomor seri langsung dari barcode atau QR di label perangkat.

Kamera tetap terbuka setelah satu kode terbaca, jadi belasan unit bisa dipindai berturut-turut tanpa menutup-buka apa pun. Nomor yang sudah ada di daftar tidak ditambahkan dua kali.

::: warning Kamera hanya jalan di HTTPS
Browser menolak membuka kamera di halaman yang tidak memakai HTTPS — termasuk saat aplikasi diakses lewat alamat IP lokal. Nomor seri selalu bisa diketik manual, dan di iPhone jalur manual inilah yang dipakai kalau pemindaian tidak tersedia.
:::

::: tip Label perangkat biasanya punya beberapa barcode
Nomor seri, MAC, dan GPON SN sering berjejer berdekatan. Hasil pindai sengaja **tidak langsung disimpan** — periksa dulu isinya di kotak nomor seri sebelum menekan Daftarkan Unit.
:::

### Status unit

| Status | Arti |
|---|---|
| **Di gudang** | Siap dipasang |
| **Terpasang** | Sedang dipakai di sebuah objek Peta Jaringan |
| **Rusak** | Keluar dari stok, tetapi tetap tercatat |

Unit yang sedang terpasang tidak bisa dihapus — lepas dulu dari objeknya di peta.

---

## Potong Stok Otomatis dari Peta

Di form objek dan form kabel Peta Jaringan ada pilihan **Ambil dari stok**. Setelah ditautkan, stok mengikuti keadaan objeknya:

| Kejadian di peta | Efek ke stok |
|---|---|
| Objek disimpan dengan status **Rencana** | Tidak ada — barangnya belum menyentuh lapangan |
| Status berubah **Rencana → Aktif** | Stok terpotong (kabel sebanyak panjangnya, objek titik 1 unit) |
| Status berubah **Aktif → Rencana** | Stok dikembalikan — batal pasang |
| Status berubah menjadi **Rusak** | Tidak ada — barangnya masih terpasang di lapangan |
| Ujung kabel digeser sehingga **memanjang** | Hanya selisihnya yang terpotong |
| Ujung kabel digeser sehingga **memendek** | Stok tidak bertambah; selisihnya dicatat terbuang, karena kabel yang sudah dipotong tidak bisa disambung balik ke roll |
| Barang yang dipakai **diganti** | Barang lama dikembalikan, barang baru dipotong |
| Objek **dihapus** | Anda ditanya: kembali ke gudang, atau terbuang |

Tautan stok bersifat opsional. Objek yang tidak ditautkan tidak menghasilkan mutasi apa pun, jadi objek yang sudah terlanjur digambar sebelum inventaris dipakai tetap aman.

---

## Stok Menipis dan Stok Minus

Halaman menampilkan daftar **barang mana** yang perlu ditindaklanjuti, lengkap dengan tautan langsung ke form pembelian.

| Keadaan | Arti |
|---|---|
| **Menipis** (kuning) | Stok menyentuh batas minimum yang Anda tetapkan |
| **Minus** (merah) | Pemakaian melebihi stok tercatat — pertanda **ada pembelian yang belum dicatat** |

Stok sengaja **boleh minus**. Memblokir pemasangan hanya karena nota belanja belum sempat diinput akan membuat teknisi berhenti mencatat sama sekali; angka minus lebih berguna sebagai penanda daripada larangan.

Saat stok menembus batas minimum, operator menerima notifikasi **Stok barang menipis** (lihat [Notifikasi Operator](/panduan/notifikasi-operator)). Notifikasinya dikirim **sekali per penembusan** — memasang dua puluh objek dari stok yang sudah tipis tidak akan mengirim dua puluh notifikasi. Kabar berikutnya baru dikirim setelah stok naik di atas batas lalu menembus lagi.

---

## Menghapus Barang

Barang yang **sudah punya riwayat mutasi tidak bisa dihapus** — menghapusnya ikut membuang jejak pengeluaran yang sudah masuk laporan keuangan. Nonaktifkan saja lewat **Edit**: barangnya hilang dari pilihan, catatan lamanya tetap utuh.

---

## Hak Akses

Modul ini memakai izin **Inventaris Barang** pada pengaturan sub-pengguna:

| Izin | Yang bisa dilakukan |
|---|---|
| Baca | Melihat stok, unit, dan riwayat |
| Tambah | Mencatat pembelian dan mendaftarkan unit |
| Ubah | Menyunting barang, menyesuaikan stok, mengubah status unit |
| Hapus | Menghapus barang dan membatalkan pembelian |

Preset role **Teknisi** mendapat baca, tambah, dan ubah; **Keuangan** mendapat semuanya.
