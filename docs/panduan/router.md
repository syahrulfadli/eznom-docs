# Tambah & Konfigurasi Router

Router adalah unit utama di eznom. Setiap router MikroTik yang Anda kelola perlu didaftarkan agar pelanggan dan layanan bisa dikelola melalui platform.

---

## Menambah Router Baru

1. Dari halaman **Dasbor**, klik tombol **+ Tambah Router**
2. Ikuti wizard 3 langkah berikut:

### Langkah 1 — Informasi Dasar

| Field | Keterangan |
|---|---|
| **Nama Router** | Label yang tampil di dasbor, misal: `Router Blok A` |
| **Deskripsi** | Opsional, misal lokasi atau catatan |
| **Hostname** | Sufiks username pelanggan, misal: `rt-blok-a` → username jadi `budi@rt-blok-a` |

> **Aturan hostname:** huruf kecil, angka, tanda hubung (`-`), dan titik (`.`). Tidak boleh diawali atau diakhiri tanda hubung/titik.

### Langkah 2 — Protokol VPN

Pilih protokol VPN yang akan digunakan untuk menghubungkan server eznom ke router MikroTik Anda:

- **L2TP/IPsec** — lebih mudah dikonfigurasi, cocok untuk sebagian besar setup
- **OpenVPN** — lebih fleksibel, melewati NAT dengan lebih baik

Setelah memilih protokol, eznom akan menampilkan **konfigurasi yang perlu diterapkan di MikroTik** Anda (IP server, secret/konfigurasi).

### Langkah 3 — Pengaturan Tagihan

| Field | Keterangan |
|---|---|
| **Tanggal Jatuh Tempo** | Tanggal tiap bulan tagihan jatuh tempo (1–28) |
| **Prefix ID Pelanggan** | Awalan ID pelanggan, maksimal 4 karakter. Misal `C` → ID jadi `CA3KN7B4XQ2M` |

Klik **Simpan & Selesai** untuk menyelesaikan pendaftaran router.

---

## Pengaturan Router

Setelah router terdaftar, Anda dapat mengubah konfigurasi kapan saja melalui menu **Pengaturan** di sidebar router.

### Koneksi API MikroTik

eznom perlu terhubung ke API MikroTik untuk sinkronisasi data PPPoE.

| Field | Keterangan |
|---|---|
| **Tipe API** | `Classic API` (port 8728) atau `REST API` (RouterOS 7.1+) |
| **Host / IP VPN** | IP router di jaringan VPN, misal `10.8.0.2` |
| **Port** | Default `8728` untuk Classic, `443/80` untuk REST |
| **Username API** | User MikroTik dengan akses API, misal `eznom-api` |
| **Password API** | Password user API |

Klik **Test Koneksi** untuk memverifikasi sebelum menyimpan.

### Remote Modem Pelanggan

Fitur ini memungkinkan admin mengakses web interface modem pelanggan (webfig) dari dasbor eznom melalui tunnel VPN.

::: info Hanya untuk mode VPN Tunnel
Ketiga field di bawah dipakai oleh mode **VPN Tunnel**. Mode **IP Lokal** — yang membuka IP
perangkat atau IP PPPoE pelanggan secara langsung dari jaringan lokal — tidak membutuhkannya sama
sekali, jadi remote tetap bisa dipakai walau bagian ini dikosongkan. Lihat
[Remote Perangkat](/panduan/remote-perangkat#dua-mode-akses).
:::

| Field | Keterangan |
|---|---|
| **Port VPN Remote Tunnel** | Port yang dibuka di browser admin, misal `1639` |
| **Dst-Port NAT** | Port NAT di MikroTik: `22` (SSH) atau `80` (HTTP/OpenVPN) |
| **Interface VPN** | Nama interface VPN MikroTik. Kosongkan hanya jika Anda paham risikonya |

::: warning Keamanan
Jika interface VPN dikosongkan, NAT rule berlaku untuk semua interface termasuk jalur publik. Selalu isi nama interface VPN yang spesifik.
:::

### Tagihan Otomatis

| Field | Keterangan |
|---|---|
| **Tanggal Jatuh Tempo** | Tanggal tiap bulan tagihan jatuh tempo (1–28) |
| **Grace Period** | Berapa hari setelah jatuh tempo sebelum pelanggan diisolir otomatis |
| **Prefix ID Pelanggan** | Awalan ID pelanggan, maksimal **4 karakter**. Default `C`. Preview ID lengkap tampil langsung saat Anda mengetik |

### Isolir Otomatis

Saklar **Isolir otomatis saat tagihan jatuh tempo** mengendalikan apakah sistem boleh memutus
layanan pelanggan di router ini secara otomatis.

Jika dinonaktifkan, pelanggan yang melewati jatuh tempo **tidak** diisolir — tapi tagihannya tetap
berubah ke status *overdue* dan billing berjalan normal. Isolir manual dari halaman pelanggan tetap
bisa dilakukan kapan saja.

### Notifikasi WhatsApp Default

Atur apakah pelanggan baru di router ini langsung dianggap setuju menerima notifikasi WhatsApp
secara default — lihat [Mengubah Default untuk Pelanggan Baru](/panduan/notifikasi#mengubah-default-untuk-pelanggan-baru).

### Link Kuitansi

Saklar yang menentukan apakah link kuitansi bisa dibuka **tanpa verifikasi ID Pelanggan**.

::: warning
Kalau diaktifkan, siapa pun yang memegang link kuitansi bisa melihat isi tagihannya. Aktifkan hanya
kalau kemudahan itu memang Anda inginkan.
:::

### Portal Reseller

Aktifkan agar reseller bisa top up saldo dan membeli voucher sendiri lewat portal terpisah. Default
**nonaktif**. Lihat [Portal Reseller](/panduan/hotspot/reseller#portal-reseller-self-service).

### Range IP Isolir

Urutan pool IP yang dipakai saat pelanggan diisolir, dengan mekanisme fallback bila pool teratas
habis. Anda bisa menambahkan pool kustom dan mengatur urutan prioritasnya dengan tombol panah.

### Backup Konfigurasi Router

eznom mengambil backup konfigurasi MikroTik Anda **setiap hari pukul 02:00**, atau kapan saja
lewat tombol **Backup Sekarang**. Setiap backup berisi dua berkas:

| Format | Isi | Kapan dipakai |
|---|---|---|
| **.rsc** | Export konfigurasi dalam bentuk teks | Memindahkan konfigurasi ke router lain, atau membaca/menyalin sebagian perintah |
| **.backup** | Backup biner RouterOS — termasuk password user sistem dan sertifikat yang tidak ikut di `.rsc` | Memulihkan router yang **sama model dan versi RouterOS-nya** (Winbox → Files → Restore) |

Daftar backup menampilkan satu baris per backup dengan tautan **Unduh .rsc** dan **Unduh .backup**;
7 backup teratas tampil, sisanya lewat **Tampilkan semua**. Retensinya bertingkat: **7 backup
terbaru**, ditambah **1 per minggu selama 4 minggu**, dan **1 per bulan selama 6 bulan**.

::: warning Butuh SSH dan policy yang cukup
Backup dilakukan lewat SSH: aktifkan **IP → Services → ssh** di MikroTik dan isi **Port NAT SSH
(CHR)**. Grup user API butuh policy `ssh`, `read`, `sensitive` untuk `.rsc`, ditambah `ftp` dan
`policy` untuk `.backup` — grup bawaan `write` tidak memilikinya.

Kalau policy untuk `.backup` kurang, backup tetap tersimpan sebagai `.rsc` saja, dan barisnya
diberi keterangan **.backup butuh policy** (arahkan kursor untuk membaca pesan asli dari RouterOS).
:::

::: danger Berkas backup memuat password
Export diambil lengkap dengan password user PPPoE, hotspot, dan admin router. Di server, berkas
disimpan terenkripsi; hasil unduhan di komputer Anda **tidak**. Perlakukan seperti kata sandi —
jangan dibagikan atau ditinggal di folder unduhan.
:::

---

## Dashboard Akun (Daftar Router)

Halaman pertama setelah login menampilkan semua router Anda:

- **Kepala halaman** — sisa hari langganan dan kuota router yang terpakai.
- **Ringkasan** — jumlah router, pelanggan online, pelanggan isolir, dan tagihan telat dari semua
  router.
- **Perlu perhatian** — router yang terputus atau masih pending setup naik ke bagian ini, terpisah
  dari daftar utama.
- **Kartu router** — pelanggan online/total, isolir, tagihan telat, sisa voucher, jenis board,
  kapan terakhir aktif, uptime, dan pintasan langsung ke **Pelanggan**, **Tagihan**, dan
  **Voucher** router itu.
- **Uptime 30 hari** — satu bar per hari; arahkan kursor ke bar untuk melihat tanggal dan persen
  hari itu. Persentasenya sama dengan kartu uptime di dasbor router.

Kalau Anda punya 4 router atau lebih, muncul toolbar berisi pencarian (nama, deskripsi, board),
filter status (Semua / Terhubung / Terputus / Pending), dan pilihan tampilan **kartu** atau
**daftar**. Ringkasan di atas tetap menghitung semua router; filter hanya menyaring daftar.

Router dari tenant lain tempat Anda menjadi sub-pengguna dikelompokkan per nama tenant dengan
badge **Sub-User**. Halaman diperbarui sendiri setiap 30 detik.

---

## Dasbor Router

Dasbor router menampilkan ringkasan kondisi jaringan secara real-time:

- **Status Pelanggan** — offline, isolir, dan suspend dalam satu kartu tiga kolom. Klik **Semua →**
  untuk membuka daftar pelanggan yang sudah terfilter ke status tersebut
- **Perlu Tindakan — Billing** — tagihan yang perlu ditindaklanjuti
- **Trafik interface** — grafik upload/download per interface MikroTik
- **Uptime** — riwayat ketersambungan router
- **Tren Keuangan** — grafik pemasukan & pengeluaran (6/12/24 bulan, lihat [Keuangan](/panduan/keuangan#tren-keuangan))
- **Peta sebaran** — preview lokasi pelanggan yang sudah memiliki koordinat

Tombol **Kustomisasi** mengatur kartu mana yang tampil.

### Status Bar Router

Bar di bagian bawah layar (di HP: ketuk untuk membuka panelnya) menampilkan:

| Item | Keterangan |
|---|---|
| **Koneksi & sync** | Status VPN dan sinkronisasi terakhir |
| **Isolir otomatis** | **Aktif** (hijau), **Dijeda** (kuning — sakelar router menyala tetapi otomasi akun sedang dijeda), atau **Nonaktif** (oranye). Klik untuk langsung ke pengaturan [Isolir Otomatis](#isolir-otomatis) |
| **Jaga layar** | Ikon cangkir kopi — lihat [Layar Tetap Menyala](/panduan/notifikasi-operator#layar-tetap-menyala-wake-lock) |
| **Peringatan** | Chip yang membuka daftar peringatan akun, misal WhatsApp gateway terputus atau langganan hampir habis |
| **Lonceng** | Riwayat notifikasi — lihat [Notifikasi Operator](/panduan/notifikasi-operator#lonceng-riwayat-notifikasi) |

::: info Peringatan akun cukup satu baris
Peringatan tingkat akun tampil sebagai satu baris di atas konten — hanya yang paling penting,
ditambah "+N" bila ada lainnya. Daftar lengkapnya dibuka dari chip peringatan. Peringatan yang
Anda sembunyikan bisa ditampilkan lagi dari panel itu; peringatan kritis muncul kembali setelah
12 jam.
:::

---

## Monitor Interface

Buka router → **Monitor Interface** untuk memantau trafik secara langsung.

- **Total Traffic Router** — grafik utama dihitung dari interface **WAN**, bukan jumlah semua
  interface (paket yang sama lewat WAN, bridge, port LAN, dan sesi PPPoE akan terhitung berkali-kali).
  WAN ditebak otomatis dari default route; kalau tebakannya keliru, pilih sendiri lewat tombol
  **Atur WAN**.
- **Ringkasan** — Download WAN, Upload WAN, jumlah Sesi PPPoE, dan **Port Putus** (port WAN atau port
  yang pernah tersambung sejak router menyala tetapi kini tanpa link; port yang tidak pernah dipakai
  tidak dihitung).
- **Pemakai Terbesar** — sesi PPPoE dengan trafik tertinggi dalam 5 detik terakhir, lengkap dengan
  nama pelanggan dan tautan ke detailnya.
- **Tabel interface** — cari berdasarkan nama, comment, pelanggan, atau username, dan saring dengan
  chip **WAN / Fisik / Virtual / Tidak aktif / Pelanggan PPPoE**. Klik sebuah interface untuk
  menampilkan grafiknya sendiri.

Satuan menyesuaikan otomatis (bps/Kbps/Mbps/Gbps). Grafik muncul setelah dua titik data (±10 detik).

::: tip RX dan TX dibaca dari sisi router
Di interface WAN, RX = download dan TX = upload. Di sesi pelanggan PPPoE kebalikannya: RX adalah
upload pelanggan, TX adalah download-nya. Grafik Live Traffic di detail pelanggan sudah ditampilkan
dari sisi pelanggan.
:::

### Filter Interface Tersimpan

Router dengan banyak interface membuat grafik trafik jadi sesak. Centang interface yang ingin
ditampilkan lalu simpan sebagai **filter default** — pilihan itu tersimpan **per pengguna per
router** dan berlaku konsisten di **Dasbor Router** maupun **Monitor Interface**, sehingga tidak
perlu diatur ulang setiap membuka halaman.

### Sidebar Router

Grup menu **PPPoE** dan **Hotspot** di sidebar router bisa dilipat. Kondisi terbuka/tertutupnya
diingat saat Anda berpindah halaman, jadi tidak kembali terbuka semua setiap navigasi.

Sidebar yang diciutkan melebar sementara saat kursor diarahkan ke atasnya, menimpa konten tanpa
menggeser tata letak. **Dashboard Akun** selalu ada tepat di bawah kolom **Cari fitur…**, jadi
jalan keluar dari router selalu terlihat. Lihat juga
[Pencarian Fitur](/panduan/mulai#pencarian-fitur-ctrl-k).

---

## Status VPN Router

Status koneksi VPN ditampilkan di setiap router:

| Status | Arti |
|---|---|
| 🟢 **Terhubung** | VPN aktif, sinkronisasi real-time tersedia |
| 🔴 **Terputus** | VPN tidak aktif, sinkronisasi dan isolir otomatis tidak berjalan |
| 🟡 **Pending** | Router baru didaftarkan, menunggu koneksi pertama |

Sinkronisasi status pelanggan berjalan **setiap 30 detik** selama VPN terhubung.

::: tip Diberitahu saat router mati
Aktifkan notifikasi **Router terputus** dan **Router kembali online** supaya Anda tahu tanpa harus
membuka dasbor. Putus sebentar yang pulih sendiri dalam 2 menit tidak dikabarkan, dan router yang
putus-nyambung terus diringkas menjadi satu kabar "tidak stabil". Lihat
[Notifikasi untuk Operator](/panduan/notifikasi-operator#router-putus-nyambung).
:::
