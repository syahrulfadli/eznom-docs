# Peta Jaringan

Peta Jaringan menggambarkan **topologi fisik** router: tiang, perangkat, dan tarikan kabel sampai ke rumah pelanggan.

Berbeda dari [Peta Pelanggan](/panduan/pppoe/peta) yang hanya menunjukkan sebaran titik pelanggan, peta ini menyimpan hubungan antar objek — kabel mana menyambung ke tiang mana — sehingga bisa dipakai menelusuri jalur saat terjadi gangguan.

::: info Fitur Beta
Menu ini masih bertanda **Beta**. Data yang sudah Anda gambar tetap tersimpan, tetapi tampilan dan alurnya masih mungkin berubah.
:::

---

## Membuka Peta

Buka router → **Peta Jaringan** di sidebar.

---

## Jenis Objek

| Objek | Keterangan |
|---|---|
| **Tiang** | Tiang tempat kabel disangga. Bisa menampung objek lain di dalamnya |
| **OLT** | Perangkat OLT |
| **ODC** | Optical Distribution Cabinet |
| **ODP** | Optical Distribution Point |
| **Router Mikrotik** | Bisa ditautkan ke router yang sudah terdaftar di eznom |
| **Modem / ONT** | Perangkat di sisi pelanggan |
| **Titik Pelanggan** | Dibuat otomatis saat kabel drop ditarik ke seorang pelanggan |

### Objek di dalam objek

ODP bisa dipasang **di dalam** tiang, dan modem bisa dipasang di dalam ODP atau di titik pelanggan — persis seperti di lapangan.

Objek yang menempel tidak digambar sebagai pin tersendiri karena posisinya menumpang induknya; keberadaannya ditandai **angka kecil di pojok pin induk**, dan daftarnya muncul di panel detail saat pin itu diklik.

---

## Tiga Mode

Tombol mode ada di kiri atas peta.

### Lihat

Mode baca. Klik objek untuk melihat detail, klik kabel untuk melihat panjang dan jenisnya. Objek **tidak bisa digeser** di mode ini, supaya tarikan tangan saat menggulir peta tidak diam-diam memindahkan tiang.

### Ubah Objek

1. Pilih jenis objek di panel yang muncul.
2. **Klik di peta** untuk menaruh objek baru.
3. **Geser pin** yang sudah ada untuk memindahkannya — posisi tersimpan otomatis.

Mode ini bertahan setelah satu objek dibuat, jadi memetakan belasan tiang berturut-turut tidak perlu menekan tombol mode berulang kali.

::: tip Menggulir peta di mode ini
Tombol kiri mouse sepenuhnya dipakai untuk objek, jadi peta digulir dengan **klik kanan lalu geser**. Ada pengingat di bawah peta selama mode ini aktif.
:::

### Tarik Kabel

1. Klik objek **awal**.
2. Klik di peta untuk menambah **titik belok** mengikuti jalur kabel sebenarnya.
3. Klik objek **tujuan** untuk mengakhiri.

Panjang kabel dihitung otomatis dari jalur yang digambar dan ditampilkan sambil menggambar. Tekan **Esc** untuk membatalkan.

Ujung kabel boleh berupa titik pelanggan langsung dari layer pelanggan — objek titiknya dibuat otomatis.

---

## Layer

Panel **Layer** di kanan atas menyalakan dan mematikan tampilan per jenis objek, per jenis kabel, dan per status. Angka di sebelah kanan tiap baris menunjukkan jumlah objek atau total panjang kabel.

Pilihan layer tersimpan di browser Anda per router, jadi tidak perlu diatur ulang tiap membuka halaman.

### Layer Pelanggan PPPoE

Titik pelanggan dibaca **langsung dari data PPPoE**, bukan disalin. Artinya:

- Warna titiknya mengikuti status pelanggan saat itu (online, offline, isolir)
- Memperbaiki koordinat pelanggan di halaman Pelanggan otomatis memindahkan titiknya di peta ini

---

## Status Objek

| Status | Arti |
|---|---|
| **Aktif** | Sudah terpasang dan berfungsi |
| **Rencana** | Belum dipasang — digambar lebih dulu untuk perencanaan |
| **Rusak** | Terpasang tetapi tidak berfungsi |

Status bukan sekadar label: kalau objeknya ditautkan ke barang inventaris, status inilah yang menentukan kapan stok terpotong. Lihat [Inventaris Barang](/panduan/inventaris#potong-stok-otomatis-dari-peta).

---

## Posisi yang Mengikuti Objek Lain

Objek yang ditautkan ke pelanggan PPPoE, atau yang dipasang di dalam objek lain, **tidak menyimpan koordinat sendiri** — posisinya menumpang.

Akibatnya, memperbaiki titik pelanggan di halaman Pelanggan ikut memindahkan modemnya di peta ini. Kalau titik modem memang berbeda dari titik rumah, geser saja pinnya; setelah itu ia punya koordinat sendiri. Tombol **Ikutkan posisi induk** di panel detail mengembalikannya jadi menumpang lagi.

---

## Menghapus Objek

Objek yang **masih tersambung kabel tidak bisa dihapus** — hapus kabelnya lebih dulu. Aturan ini juga berlaku kalau yang tersambung adalah objek di dalamnya, supaya menghapus satu tiang tidak diam-diam menghapus tarikan yang menempel di ODP-nya.

Kalau objeknya memakai barang dari inventaris, saat menghapus akan muncul pilihan **kembali ke gudang** atau **terbuang / rusak**.

---

## Hak Akses

Modul ini memakai izin **Peta Jaringan** pada pengaturan sub-pengguna:

| Izin | Yang bisa dilakukan |
|---|---|
| Baca | Melihat peta dan detail objek |
| Tambah | Menaruh objek baru dan menarik kabel |
| Ubah | Menggeser dan menyunting objek |
| Hapus | Menghapus objek dan kabel |

Preset role **Teknisi** sudah mendapat baca, tambah, dan ubah.
