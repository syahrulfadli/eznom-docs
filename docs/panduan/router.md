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
| **Prefix ID Pelanggan** | Awalan ID pelanggan, misal `C` → ID jadi `CA3KN7B...` |

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

---

## Dasbor Router

Dasbor router menampilkan ringkasan kondisi jaringan secara real-time:

- **Status pelanggan** — jumlah online, offline, isolir, suspended
- **Trafik interface** — grafik upload/download per interface MikroTik
- **Peta sebaran** — preview lokasi pelanggan yang sudah memiliki koordinat
- **Keuangan ringkas** — total tagihan, lunas, dan tunggakan bulan ini

---

## Status VPN Router

Status koneksi VPN ditampilkan di setiap router:

| Status | Arti |
|---|---|
| 🟢 **Terhubung** | VPN aktif, sinkronisasi real-time tersedia |
| 🔴 **Terputus** | VPN tidak aktif, sinkronisasi dan isolir otomatis tidak berjalan |
| 🟡 **Pending** | Router baru didaftarkan, menunggu koneksi pertama |
