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

eznom bisa mengambil backup konfigurasi MikroTik Anda — otomatis **mingguan**, atau kapan saja
lewat tombol **Backup Sekarang**. File hasilnya bisa diunduh dari daftar backup di halaman yang
sama.

::: warning Butuh SSH aktif di MikroTik
Backup dilakukan lewat SSH, jadi layanan SSH harus aktif di router dan user API Anda perlu punya
akses SSH. Perhatikan juga bahwa format `.rsc` tidak menyimpan seluruh isi konfigurasi biner —
baca keterangan lengkap di halaman pengaturan sebelum mengandalkannya sebagai satu-satunya backup.
:::

---

## Dasbor Router

Dasbor router menampilkan ringkasan kondisi jaringan secara real-time:

- **Status pelanggan** — jumlah online, offline, isolir, suspended. Klik **Semua →** pada kartu
  status untuk membuka daftar pelanggan yang sudah terfilter ke status tersebut
- **Trafik interface** — grafik upload/download per interface MikroTik
- **Peta sebaran** — preview lokasi pelanggan yang sudah memiliki koordinat
- **Keuangan ringkas** — total tagihan, lunas, dan tunggakan bulan ini
- **Saklar layar tetap menyala** — lihat [Wake Lock](/panduan/notifikasi-operator#layar-tetap-menyala-wake-lock)
- **Lonceng notifikasi** di status bar bawah — lihat [Notifikasi Operator](/panduan/notifikasi-operator#lonceng-riwayat-notifikasi)

### Filter Interface Tersimpan

Router dengan banyak interface membuat grafik trafik jadi sesak. Centang interface yang ingin
ditampilkan lalu simpan sebagai **filter default** — pilihan itu tersimpan **per pengguna per
router** dan berlaku konsisten di **Dasbor Router** maupun **Monitor Interface**, sehingga tidak
perlu diatur ulang setiap membuka halaman.

### Sidebar Router

Grup menu **PPPoE** dan **Hotspot** di sidebar router bisa dilipat. Kondisi terbuka/tertutupnya
diingat saat Anda berpindah halaman, jadi tidak kembali terbuka semua setiap navigasi.

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
membuka dasbor. Lihat [Notifikasi untuk Operator](/panduan/notifikasi-operator).
:::
