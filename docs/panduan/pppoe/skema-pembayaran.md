# Skema Pembayaran: Prabayar & Pascabayar

Setiap pelanggan PPPoE di eznom menggunakan salah satu dari dua skema pembayaran. Keduanya memakai
**aturan tagihan yang sama** — masa layanan, jatuh tempo (batas bayar), status, isolir, dan
sambung ulang — dan hanya berbeda di **kapan** pelanggan diharapkan membayar. Aturan lengkapnya
ada di [Sistem Billing PPPoE](/panduan/pppoe/billing); halaman ini merangkum perbedaannya.

---

## Perbedaan Utama

| Aspek | Pascabayar | Prabayar |
|---|---|---|
| **Konsep** | Pakai dulu, bayar belakangan | Bayar dulu, baru pakai |
| **Jatuh tempo** | **Akhir** masa layanan | **Awal** masa layanan (= saat masa aktif sebelumnya habis) |
| **Tagihan terbit** | Otomatis saat masa layanan mulai (pukul 01.00) | Otomatis begitu tagihan sebelumnya lunas |
| **Status awal tagihan** | Belum Bayar | Belum Bayar — belum dihitung piutang sampai hari batas bayar |
| **Bayar di muka** | Tidak umum | Kapan saja — lewat Catat Bayar (2/3/6/12 periode) atau portal |
| **Cocok untuk** | Pelanggan rumahan, langganan tetap | Warung, kantor kecil, pelanggan yang ingin kendali penuh |

---

## Pascabayar

```
Masa layanan mulai (hari billing)
  → Tagihan terbit (status: Belum Bayar), invoice email dikirim pagi harinya
  → Pengingat H-N sebelum jatuh tempo, lalu H-0

Jatuh tempo lewat
  → Status: Terlambat
  → Lewat masa tenggang & Auto-Isolir aktif: layanan diputus

Pembayaran tercatat / dikonfirmasi gateway
  → Status: Lunas
  → Disambung kembali bila tidak ada tunggakan lain di luar tenggang
```

Jatuh tempo mengikuti **hari billing** router, atau **Jatuh Tempo Override** per pelanggan.
Tagihan terbit sejak masa layanan mulai — jadi untuk hari billing 1, tagihan yang jatuh tempo
1 Oktober sudah ada sejak 1 September, dan pengingat H-7 benar-benar terkirim pada 24 September.

---

## Prabayar

```
Tagihan sebelumnya lunas
  → Tagihan masa layanan berikutnya langsung terbit
    (mulai = akhir masa lunas, bayar sebelum tanggal itu)
  → Pengingat H-N "masa aktif akan berakhir", lalu H-0

Masa aktif habis & belum dibayar
  → Status: Terlambat
  → Lewat masa tenggang & Auto-Isolir aktif: layanan diputus

Pembayaran tercatat / dikonfirmasi gateway
  → Lunas, disambung kembali
  → Bila sempat diputus: masa layanan digeser mulai tanggal bayar (durasi tetap)
  → Tagihan berikutnya langsung terbit lagi
```

::: tip Tidak ada lagi "Tambah & Bayar"
Dulu Anda membuat tagihan prabayar sendiri lewat modal khusus, memilih tanggal berlaku, dan
memastikan tidak dobel. Sekarang tagihan berikutnya **selalu sudah ada**; Anda tinggal mencatat
pembayarannya seperti tagihan lain. Bayar beberapa periode sekaligus lewat field **Sekalian bayar
di muka** di modal Catat Bayar.
:::

::: info Bayar terlambat setelah diputus
Kalau layanan sudah diputus dan pelanggan baru membayar beberapa hari kemudian, masa layanannya
**digeser ke tanggal bayar** dengan durasi tetap — ia tidak membayar hari-hari tanpa layanan dan
tidak mendapat hari gratis. Tagihan berikutnya berjalan sampai hari billing agar siklusnya kembali
rapi, dengan harga penuh profil. Pelanggan yang tidak diputus (Auto-Isolir mati) tetap membayar siklus yang
ia nikmati.
:::

---

## Isolir & Sambung Ulang

Keduanya memakai mekanisme yang sama, dievaluasi **setiap jam**:

- **Diputus** bila ada tagihan belum lunas yang jatuh temponya lewat lebih dari **masa tenggang**
  (Pengaturan Router, atau Pengaturan → Notifikasi sebagai fallback). Tenggang berlaku untuk
  prabayar maupun pascabayar; set 0 kalau prabayar harus diputus tepat waktu.
- Hanya bila **Auto-Isolir** aktif di pelanggan dan di router. Kalau tidak, status tetap Terlambat
  tanpa pemutusan.
- **Disambung kembali** setelah pembayaran hanya bila **tidak ada lagi** tagihan yang memenuhi
  syarat isolir — melunasi satu dari dua tunggakan belum menyambungkan, dan Anda diberi tahu.

Detail: [Isolir & Masa Tenggang](/panduan/pppoe/billing#isolir-masa-tenggang) dan
[Sambung Ulang](/panduan/pppoe/billing#sambung-ulang-setelah-bayar).

---

## Mengatur Skema Pelanggan

Skema dipilih saat menambah atau mengedit pelanggan: **PPPoE → Pelanggan → Tambah/Edit → Tipe
Pembayaran**. Tidak ada nilai default — form menolak disimpan sampai Anda memilih, supaya tidak
ada pelanggan yang diam-diam masuk ke skema yang salah.

Untuk pelanggan baru, form juga meminta **tagihan pertama** (mulai layanan, masa layanan s.d.,
nominal) — defaultnya bayar penuh sebulan dari tanggal mulai, atau prorata sampai hari billing bila
sakelar **Hitung prorata** dinyalakan. Pada prabayar, jatuh tempo tagihan pertama = tanggal mulai, dan eznom langsung
mengarahkan Anda mencatat pembayarannya setelah pelanggan tersimpan. Lihat
[Tagihan Pertama](/panduan/pppoe/pelanggan#tagihan-pertama).

Skema bisa diubah kapan saja; berlaku mulai tagihan berikutnya.

---

## Ringkasan Jadwal Otomatis

| Waktu | Proses |
|---|---|
| Setiap 30 detik | Sinkronisasi status online/offline dari MikroTik |
| Setiap menit | Sinkronisasi voucher hotspot dari MikroTik |
| 01.00 setiap hari | Terbitkan tagihan: siklus pascabayar yang sudah mulai + tagihan prabayar berikutnya yang belum ada |
| 07.00 setiap hari | Kirim pengingat H-N, H-0, dan tunggakan berkala |
| 08.30 setiap hari | Email invoice untuk tagihan pascabayar yang baru terbit |
| **Setiap jam** | Evaluasi isolir — putus yang lewat jatuh tempo + tenggang |
| Setiap 5 menit | Retry sinkronisasi MikroTik yang gagal |
| Setiap 2 jam | Deteksi pelanggan yang offline berkepanjangan |

::: info Notifikasi isolir hanya pada jam manusiawi
Isolir dieksekusi tiap jam, tetapi pesan ke pelanggan hanya dikirim pada **08.00–21.00**; isolir
di luar jam itu tetap berjalan, pemberitahuannya ditunda ke pukul 08.00 berikutnya.
:::
