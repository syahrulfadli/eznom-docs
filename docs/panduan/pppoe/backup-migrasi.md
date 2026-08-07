# Backup & Pindah Pelanggan

Halaman ini memindahkan data pelanggan PPPoE **beserta kredensialnya** dari satu router ke router
lain, atau menyimpannya sebagai file backup terenkripsi.

Berguna saat Anda memecah satu router yang sudah terlalu padat menjadi dua, mengganti perangkat
MikroTik, atau memindahkan satu blok pelanggan ke titik jaringan lain — tanpa harus mengetik ulang
ratusan username dan password.

Buka router → **PPPoE → Backup & Pindah Pelanggan**

---

## Tiga Mode

| Mode | Yang terjadi |
|---|---|
| **Pindah ke router lain** | Data pindah ke router tujuan, lalu **dihapus** dari router ini |
| **Backup ke file** | Unduh file terenkripsi. **Tidak ada data yang dihapus** |
| **Restore dari file** | Masukkan pelanggan dari file backup ke router yang sedang dibuka |

---

## 1. Pilih Pelanggan

Cari berdasarkan nama, username, atau nomor pelanggan, lalu centang pelanggan yang ingin dibawa.
Tersedia tombol **Pilih Semua** dan **Hapus Pilihan**.

Ringkasan pilihan (jumlah pelanggan, periode tagihan, pembayaran, lampiran, dan berapa tagihan
yang masih belum lunas) tampil mengikuti apa yang Anda centang.

---

## 2. Data yang Dibawa

Data pelanggan inti **selalu ikut**: nama, username, **password**, kontak, alamat, koordinat, tipe
pembayaran, tanggal pemasangan, biaya pemasangan, nomor pelanggan, status kontrak, dan opt-in
WhatsApp.

Sisanya bisa dipilih:

| Opsi | Keterangan |
|---|---|
| **Riwayat tagihan & pembayaran** | Seluruh periode tagihan beserta pembayarannya |
| **Lampiran & tanda tangan kontrak** | File KTP/foto instalasi + file tanda tangan kontrak |
| **Buat profil & group yang belum ada di tujuan** | Profil layanan dan grup dicocokkan **berdasarkan nama**; yang belum ada dibuatkan di router tujuan |

::: danger Data yang tidak dicentang akan hilang saat mode Pindah
Pada mode **Pindah**, data yang tidak Anda centang **tidak diselamatkan ke mana pun** — data itu
ikut terhapus bersama baris pelanggan di router asal. Kalau riwayat tagihan tidak dicentang,
riwayat itu hilang permanen, bukan tertinggal di router lama.

Pada mode **Backup ke file**, tidak ada yang dihapus — mencentang lebih sedikit hanya membuat
file backup-nya lebih ringkas.
:::

::: warning Profil harus cocok nama
Kalau opsi "Buat profil & group" dimatikan **dan** nama profilnya belum ada di router tujuan,
pelanggan tetap masuk tapi **tanpa profil layanan** — sehingga tidak bisa disinkronkan ke MikroTik
dan tidak punya harga untuk tagihan. Perbaiki dengan menyetel profilnya manual setelah pindah.
:::

---

## 3. Router Tujuan (mode Pindah)

Pilih router tujuan dari daftar router lain milik Anda, lalu tentukan dua opsi:

| Opsi | Keterangan |
|---|---|
| **Hapus secret PPPoE di router asal** | Sesi aktif diputus dan secret dihapus dari MikroTik lama. Kalau dimatikan, pelanggan **masih bisa login** ke router lama sampai Anda hapus manual |
| **Langsung buat secret di MikroTik tujuan** | Pelanggan langsung dipush ke router baru. Kalau dimatikan, data ada di eznom tapi belum ada di MikroTik |

### Yang Dihapus dari Router Asal

Sebelum menekan tombol, halaman menampilkan daftar merah berisi konsekuensi persisnya. Yang perlu
Anda sadari:

- Baris pelanggan beserta kredensialnya dihapus dari router asal
- **Riwayat notifikasi WA/email tidak ikut pindah** — tetap tercatat di router asal tanpa tautan
  ke pelanggan
- **Log aktivitas per pelanggan** (isolir, perubahan data) tidak ikut pindah
- Laporan keuangan router asal tetap mencatat nominal pemasukan lama, tetapi label paket layanan
  pada baris tersebut menjadi kosong

Anda harus mencentang pernyataan "Saya paham data di atas akan dihapus" di dialog konfirmasi
sebelum proses berjalan. **Tindakan ini tidak bisa dibatalkan.**

---

## Backup ke File

1. Pilih mode **Backup ke file**
2. Centang pelanggan dan cakupan data
3. Klik **Unduh Backup**

File `.json` yang dihasilkan **terenkripsi dengan kunci instance eznom Anda**. Konsekuensinya:

::: warning File backup hanya bisa direstore di eznom yang sama
Password pelanggan tersimpan di dalam file dalam bentuk terenkripsi. File yang bocor tidak
membocorkan kredensial pelanggan — tapi juga berarti file itu **tidak bisa** direstore ke instance
eznom lain. Ini disengaja.
:::

Lampiran ikut ditempelkan ke dalam file. File berukuran lebih dari 10 MB dilewati, dan total
lampiran yang ditempel dibatasi 60 MB per backup — jumlah yang dilewati dilaporkan di hasil.

---

## Restore dari File

1. Buka router **tujuan**, masuk ke **PPPoE → Backup & Pindah Pelanggan**
2. Pilih mode **Restore dari file**
3. Unggah file `.json` hasil backup — pratinjau isinya muncul sebelum Anda mengeksekusi
4. Pilih cakupan yang ingin dipulihkan (tagihan, lampiran, profil & grup, push ke MikroTik)
5. Jalankan restore

Pelanggan **ditambahkan** ke router yang sedang dibuka. Tidak ada data yang dihapus dari mana pun.

---

## Membaca Laporan Hasil

Setelah proses selesai, halaman menampilkan laporan:

| Baris | Arti |
|---|---|
| **Dibuat** | Jumlah pelanggan yang berhasil masuk ke router tujuan |
| **Dilewati** | Pelanggan yang **username-nya sudah ada** di router tujuan — tidak ditimpa, tidak dibuat ganda |
| **Profil dibuat** | Profil layanan baru yang dibuatkan di router tujuan |
| **Group dibuat** | Grup pelanggan/profil baru yang dibuatkan |
| **Periode tagihan / Pembayaran / Lampiran** | Jumlah baris turunan yang ikut terbawa |
| **Peringatan** | Misalnya lampiran yang tidak ditemukan di storage sehingga dilewati |

::: info Bentrok username tidak menimpa data
Kalau username pelanggan sudah dipakai di router tujuan, barisnya **dilewati** dan dicatat di
laporan. Pada mode Pindah, pelanggan yang dilewati **tidak dihapus** dari router asal — jadi
datanya tidak akan hilang di tengah jalan.
:::

---

## Izin Akses

Halaman ini mengikuti izin modul **PPPoE Pelanggan**. Sub-pengguna tanpa izin tersebut tidak bisa
membukanya. Mengingat sifatnya yang merusak (mode Pindah menghapus data permanen), pertimbangkan
untuk hanya memberi akses ini kepada orang yang Anda percaya penuh.
