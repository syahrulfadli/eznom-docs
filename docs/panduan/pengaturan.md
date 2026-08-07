# Profil Bisnis & Akun

---

## Profil Bisnis

Buka **Pengaturan → Profil Bisnis**

Informasi ini digunakan di berbagai tempat: kop surat kontrak, invoice, halaman tanda tangan, footer email notifikasi, dan **halaman publik bisnis** (logo, nama, alamat, kontak).

| Field | Wajib | Digunakan di |
|---|---|---|
| **Nama Bisnis** | ✅ | Kop surat, header invoice, email, kartu voucher |
| **Tagline Bisnis** | — | Kartu voucher (variabel `{biz_tagline}`), halaman publik |
| **Alamat Bisnis** | — | Kop surat, invoice, footer email |
| **Nomor Telepon** | — | Kop surat, invoice, halaman verifikasi kontrak, tombol WhatsApp di halaman publik & portal bayar, notifikasi calon pelanggan |
| **Email Bisnis** | — | Kop surat, invoice |
| **Alamat Website** | — | Kop surat kontrak |
| **Logo** | — | Invoice, halaman tanda tangan kontrak, kartu voucher, header halaman publik, pratinjau link di media sosial |
| **Tanda Tangan Admin** | — | Tampil di halaman kontrak sebagai tanda tangan pihak operator |

::: tip Halaman Publik
Untuk mengatur URL slug, deskripsi bisnis, dan paket yang ditampilkan ke calon pelanggan, buka **Pengaturan → Halaman Publik**. Lihat [Halaman Publik Bisnis](/panduan/halaman-publik).
:::

### Mengganti Logo

1. Di bagian **Logo**, klik **Pilih File** dan pilih gambar (PNG, JPG, SVG — maks 2 MB)
2. Preview akan tampil setelah file dipilih
3. Klik **Simpan Profil**

### Mengganti Tanda Tangan Admin

1. Di area tanda tangan, gambar tanda tangan baru menggunakan mouse atau jari (di layar sentuh)
2. Klik **Hapus** jika ingin menggambar ulang
3. Klik **Simpan Profil**

---

## Sub-Pengguna

Sub-pengguna memungkinkan Anda memberikan akses terbatas ke staf atau teknisi tanpa membagikan kredensial akun utama.

Buka **Pengaturan → Sub-Pengguna**

### Tambah Sub-Pengguna

1. Klik **+ Tambah Sub-Pengguna**
2. Isi:

| Field | Keterangan |
|---|---|
| **Email** | Alamat email untuk login |
| **Nama Tampilan** | Nama yang ditampilkan di dasbor |
| **Password** | Password login sub-pengguna |

3. Pilih **Role** — preset izin siap pakai, atau **Custom** untuk mengatur sendiri:

| Role | Cocok untuk |
|---|---|
| **Teknisi** | Petugas lapangan — bisa lihat & tambah pelanggan PPPoE, remote perangkat, monitor interface. **Tanpa** akses keuangan, tagihan, dan pengaturan |
| **Keuangan** | Penagihan & pembukuan — akses penuh Tagihan, Keuangan, Insight Bisnis, dan persetujuan top up reseller. **Tanpa** akses teknis |
| **Operator Hotspot** | Pengelola voucher — akses penuh Voucher, Hotspot User, dan Reseller. **Tanpa** akses PPPoE dan keuangan |
| **Full Access** | Semua modul, setara pemilik akun kecuali hal yang memang khusus pemilik |
| **Custom** | Anda tentukan sendiri per modul |

4. Atur **izin akses** per modul. Setiap modul punya empat tingkat: **Lihat**, **Tambah**,
   **Edit**, dan **Hapus**:

| Modul | Mengontrol akses ke |
|---|---|
| **Calon Pelanggan** | Inbox [Calon Pelanggan](/panduan/leads) — data pribadi prospek |
| **PPPoE Pelanggan** | Daftar & detail pelanggan, peta, grup pelanggan, backup & pindah pelanggan |
| **PPPoE Profil** | Profil layanan dan grup profil |
| **Tagihan** | Halaman Billing, catat bayar, kirim tagihan |
| **Hotspot Voucher** | Voucher, batch, laporan voucher, template kartu |
| **Hotspot Profil** | Profil hotspot |
| **Hotspot User** | Daftar pengguna hotspot aktif |
| **Hotspot Reseller** | Data reseller dan halaman detailnya |
| **Top Up Reseller** | Persetujuan/penolakan pengajuan top up reseller |
| **Keuangan** | Halaman Keuangan router |
| **Insight Bisnis** | Halaman analitik & insight per router |
| **Remote Perangkat** | Remote Perangkat dan remote modem pelanggan |
| **Monitor Interface** | Grafik trafik interface |
| **Halaman Isolir** | Konfigurasi halaman isolir |
| **Log Notifikasi** | Riwayat notifikasi ke pelanggan |
| **Info VPN** | Kredensial dan status VPN router |
| **Pengaturan Router** | Pengaturan router dan backup konfigurasi |

5. Klik **Simpan**

Sub-pengguna dapat login dengan email dan password yang ditetapkan. Mereka tidak bisa melihat atau mengubah pengaturan di luar izin yang diberikan.

::: info Yang tetap khusus pemilik akun
Beberapa hal tidak bisa didelegasikan ke sub-pengguna berapa pun izinnya:

- **Kredensial WhatsApp Gateway** — card-nya disembunyikan sepenuhnya dari sub-pengguna
- **Server Email Sendiri (SMTP)** — hanya pemilik akun
- **Konversi calon pelanggan menjadi pelanggan PPPoE**
- **Mengedit nominal prorata** tagihan pertama, kecuali sub-pengguna punya izin **Tambah** pada
  modul Keuangan
:::

::: warning Langganan sub-pengguna mengikuti akun master
Akses sub-pengguna ke modul PPPoE/Hotspot ditentukan oleh **paket langganan akun master**, bukan
langganan pribadi sub-pengguna itu. Kalau langganan akun master kedaluwarsa, akses sub-pengguna
ikut terblokir meskipun ia punya langganan aktif sendiri.
:::

### Edit & Hapus Sub-Pengguna

Klik ikon **pensil** untuk mengubah izin atau data, atau ikon **hapus** untuk menonaktifkan akses.

---

## Log Audit

Buka **Pengaturan → Log Audit** untuk melihat jejak perubahan data di akun Anda — siapa mengubah
apa dan kapan.

Setiap entri menampilkan **selisih field** yang berubah (nilai sebelum → sesudah), bukan sekadar
"data diubah". Untuk pemeriksaan yang lebih dalam, tersedia blok **JSON sebelum/sesudah** yang bisa
dibuka di bawah masing-masing entri.

Cakupannya meliputi perubahan pada **pelanggan PPPoE**, **profil layanan**, **periode tagihan**,
**catatan keuangan**, **batch voucher**, **router**, dan **pengaturan bisnis** — termasuk aksi yang
dilakukan oleh sub-pengguna Anda.

::: info Berguna saat ada yang tidak beres
Log audit adalah tempat pertama yang perlu diperiksa ketika nominal tagihan berubah tanpa
penjelasan, pelanggan berpindah profil, atau pengaturan router tiba-tiba berbeda. Nominal tagihan
pertama yang diubah menyimpang dari rumus prorata juga tercatat di sini.
:::

---

## Langganan eznom

Buka **Pengaturan → Langganan** untuk melihat status langganan Anda ke platform eznom, termasuk:

- Paket yang aktif
- Tanggal kedaluwarsa
- Riwayat pembayaran langganan
