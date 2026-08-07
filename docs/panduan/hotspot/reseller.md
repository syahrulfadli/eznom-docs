# Reseller Hotspot

Reseller adalah mitra distribusi yang membeli voucher secara grosir dari Anda, kemudian menjualnya kembali ke pengguna akhir. eznom mencatat setiap batch reseller secara otomatis ke halaman Keuangan.

Ada dua cara reseller mendapatkan voucher: **(1)** Anda generate manual untuk mereka (lihat di bawah), atau **(2)** lewat **[Portal Reseller](#portal-reseller-self-service)** — reseller top up saldo & beli voucher sendiri tanpa perlu menghubungi Anda.

---

## Daftar Reseller

Buka router → **Hotspot → Reseller**

Tabel menampilkan semua reseller beserta jumlah batch yang pernah dibuat.

---

## Tambah Reseller

1. Klik **+ Tambah Reseller**
2. Isi form:

| Field | Keterangan |
|---|---|
| **Nama** | Nama reseller atau nama toko |
| **Nomor Telepon** | Nomor kontak reseller (opsional) |
| **Alamat** | Alamat reseller (opsional) |
| **Catatan** | Catatan internal, misal area distribusi |

3. Klik **Simpan**

---

## Edit & Nonaktifkan Reseller

- Klik ikon **pensil** untuk mengubah data reseller
- Klik badge **Aktif / Nonaktif** untuk mengubah status reseller

Reseller yang dinonaktifkan tidak akan muncul di dropdown saat generate batch voucher.

---

## Halaman Detail Reseller

Klik nama reseller di tabel untuk membuka halaman detailnya — satu tempat untuk melihat seluruh
riwayat hubungan Anda dengan reseller tersebut.

Bagian atas menampilkan ringkasan: **saldo aktif**, **total top up**, dan jumlah voucher/batch.
Tersedia tiga tab:

| Tab | Isi |
|---|---|
| **Mutasi Saldo** | Seluruh pergerakan saldo: top up, pembelian voucher, dan penyesuaian manual. Bisa difilter per jenis |
| **Riwayat Top Up** | Semua pengajuan top up beserta statusnya (menunggu, disetujui, ditolak) |
| **Batch Voucher** | Semua batch yang pernah dibuat untuk reseller ini, baik oleh Anda maupun lewat portal |

### Penyesuaian Saldo Manual

Tombol **Sesuaikan Saldo** memungkinkan Anda **menambah** atau **mengurangi** saldo reseller secara
manual, dengan catatan alasan. Berguna untuk koreksi kesalahan input, bonus, atau potongan
kesepakatan di luar sistem.

Setiap penyesuaian tercatat di tab **Mutasi Saldo** lengkap dengan catatannya — tidak ada perubahan
saldo yang terjadi tanpa jejak.

---

## Menyetujui Top Up Reseller

Top up yang diajukan reseller lewat portal dengan **transfer manual** perlu Anda setujui sebelum
saldonya bertambah.

Buka router → **Hotspot → Top Up Reseller**

1. Periksa pengajuan yang berstatus **Menunggu**
2. Klik **Lihat Bukti** untuk mengunduh bukti transfer yang diunggah reseller
3. Cocokkan dengan mutasi rekening Anda
4. Klik **Setujui** — saldo reseller langsung bertambah, atau
   **Tolak** — isi alasan penolakan yang akan tercatat di riwayat

::: tip Jangan biarkan menggantung
Reseller **tidak bisa membeli voucher** sampai top up-nya disetujui. Aktifkan notifikasi
[**Topup reseller menunggu approval**](/panduan/notifikasi-operator#jenis-notifikasi) supaya Anda
tahu begitu ada pengajuan masuk, bukan setelah reseller menelepon.
:::

Top up lewat **payment gateway** tidak perlu persetujuan — saldo bertambah otomatis begitu gateway
mengkonfirmasi pembayaran.

---

## Harga Khusus Reseller

Setiap profil hotspot bisa memiliki harga reseller yang berbeda dengan harga eceran. Harga ini diset di **Hotspot → Profil** pada field **Harga Reseller**.

Saat generate batch dengan reseller dipilih:
- Jika profil punya harga reseller → harga tersebut yang dicatat ke keuangan
- Jika profil belum punya harga reseller → harga eceran biasa yang digunakan, dengan peringatan di modal generate

Lihat: [Profil Hotspot — Harga Reseller](/panduan/hotspot/profil#harga-reseller)

---

## Generate Batch untuk Reseller

1. Buka **Hotspot → Voucher**
2. Klik **+ Generate Voucher**
3. Pilih **Profil** dan isi **Jumlah Voucher**
4. Di dropdown **Reseller**, pilih reseller yang membeli batch ini
5. Sebuah kotak informasi akan muncul menampilkan:
   - Harga per voucher (harga reseller atau harga eceran)
   - Total yang akan dicatat ke keuangan
6. Klik **Generate**

Batch yang dihasilkan akan dicatat ke [Keuangan](/panduan/keuangan) sebagai `Penjualan Voucher` dengan referensi ke nama reseller.

---

## Portal Reseller (Self-Service)

Portal terpisah agar reseller bisa **top up saldo dan membeli voucher sendiri**, tanpa perlu Anda generate manual. Reseller tidak butuh akun eznom.

### Mengaktifkan portal

1. Buka **Pengaturan Router → Portal Reseller**
2. Aktifkan toggle **Portal Reseller**
3. Bagikan URL portal ke reseller: `https://<domain-eznom>/reseller/<id-router>/login`

Portal default **nonaktif** — selama belum diaktifkan, alur lama (Anda generate voucher manual untuk reseller) tetap berjalan normal.

### Yang bisa dilakukan reseller

- **Dashboard stok & penjualan** — ringkasan saldo aktif, total voucher terjual, dan pendapatan bulan ini; kartu cepat per profil menampilkan stok tersisa, harga, dan margin keuntungan
- **Lihat saldo** dan riwayat transaksi lengkap
- **Top up saldo** — transfer manual (upload bukti, Anda konfirmasi) atau pembayaran online (jika gateway aktif)
- **Beli voucher** — saldo otomatis terpotong, voucher langsung dibuat & tersinkron ke MikroTik; tombol **Beli Lagi** muncul di kartu profil yang pernah dibeli untuk reorder cepat
- **Kelola & bagikan kode voucher** — cari kode, salin satu per satu, atau bagikan via WhatsApp langsung dari portal
- **Tandai voucher terjual** — centang beberapa voucher sekaligus lalu tandai terjual dalam satu aksi, sehingga reseller bisa melacak sisa stok fisiknya sendiri
- **Atur harga eceran sendiri** — reseller bisa menyimpan harga jual versinya, dan portal menghitung marginnya dari harga beli
- **Cetak voucher** — reseller memilih sendiri layout cetak: **A4 3 / 4 / 5 kolom**, **F4 5×10**, atau **F4 5×11**. Style kartu mengikuti preset cetak default Anda; voucher "kode tunggal" otomatis hanya menampilkan username
- **Beli Lagi** — tombol reorder cepat di kartu profil yang pernah dibeli

### Mengatur profil yang muncul ke reseller

Tidak semua profil otomatis muncul di portal. Di halaman **Hotspot → Profil**, setiap profil punya toggle **Tampil ke reseller**:

- **Aktif** → profil jadi pilihan beli voucher di portal (harus punya **Harga Reseller**)
- **Disembunyikan** → profil tidak muncul di portal

Profil yang dulu sudah punya Harga Reseller otomatis ditandai "Tampil ke reseller" agar perilaku lama terjaga.

### Pencatatan keuangan

Penjualan voucher lewat portal **otomatis tercatat di [Keuangan](/panduan/keuangan)** sebagai `Penjualan Voucher`, sama seperti batch yang Anda generate manual.

::: tip Kapan pendapatan dihitung
Pendapatan diakui **saat reseller membeli voucher**, bukan saat top up. Top up diperlakukan sebagai **saldo/deposit** dan belum dihitung sebagai pemasukan — supaya tidak dobel hitung. Contoh: reseller top up Rp 100.000 lalu beli voucher senilai Rp 60.000 → yang tercatat sebagai pemasukan baru Rp 60.000; sisa saldo Rp 40.000 baru jadi pemasukan setelah ditukar voucher.
:::

---

### Harga eceran & margin reseller

Portal menampilkan **Harga Eceran** — yaitu field **Harga (Rp)** pada profil hotspot, harga jual
yang Anda sarankan ke pelanggan akhir. Eznom menghitung dan menampilkan margin keuntungan reseller
secara otomatis (`Harga Eceran − Harga Reseller`), sehingga reseller tahu berapa keuntungan per
voucher tanpa perlu hitung manual.

Keduanya diisi di **Hotspot → Profil**: **Harga (Rp)** untuk harga eceran, **Harga Reseller (Rp)**
untuk harga beli reseller.

---

## Laporan Performa Reseller

Pantau performa setiap reseller di halaman **Laporan Voucher** — melihat jumlah batch, total voucher, voucher terpakai, dan pendapatan per reseller dalam periode tertentu.

Lihat: [Laporan Voucher](/panduan/hotspot/laporan)
