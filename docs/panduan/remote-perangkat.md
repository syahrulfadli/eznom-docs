# Remote Perangkat

Fitur **Remote Perangkat** memungkinkan admin mengakses web interface perangkat jaringan — seperti OLT, switch terkelola, atau modem — langsung dari dasbor eznom, tanpa perlu VPN terpisah atau akses langsung ke lokasi fisik.

Tersedia **dua mode akses**: lewat tunnel NAT MikroTik (bisa dari mana saja) atau langsung ke IP perangkat (hanya dari jaringan lokal, tapi lebih stabil). Mode dipilih di halaman Remote Perangkat maupun di dialog Remote Modem pelanggan.

---

## Dua Mode Akses

| | **VPN Tunnel** | **IP Lokal** |
|---|---|---|
| Cara kerja | eznom membuat aturan dst-nat sementara di MikroTik; Anda membuka IP VPN router | Browser Anda langsung membuka IP perangkat — MikroTik tidak disentuh sama sekali |
| Bisa dipakai dari luar jaringan lokal | ✅ Ya | ❌ Tidak |
| Perlu **Port Dst-nat Remote** | ✅ Ya | ❌ Tidak |
| Perlu router terhubung VPN | ✅ Ya | ❌ Tidak |
| Sesi bersamaan | Hanya **satu** per router | **Tak terbatas** |
| Perlu dihentikan setelah selesai | ✅ Ya | ❌ Tidak ada yang perlu dihentikan |
| Kestabilan | Mengikuti kualitas VPN | Sekencang jaringan lokal Anda |

::: warning Syarat mutlak mode IP Lokal
Mode ini hanya berhasil bila **komputer/HP Anda berada di jaringan lokal yang sama dengan MikroTik**
— misalnya Anda sedang di kantor/NOC dan gateway perangkat Anda adalah MikroTik itu sendiri.

Kalau Anda di luar jaringan tersebut (dari rumah, dari data seluler), tab yang terbuka hanya akan
*timeout*. eznom tidak bisa memeriksa posisi Anda dari sisi server, jadi modenya harus Anda pilih
sendiri.
:::

### Memilih mode

- **Halaman Remote Perangkat** — sakelar **VPN Tunnel / IP Lokal** ada di kanan atas, bersebelahan dengan tombol *+ Tambah Perangkat*.
- **Remote Modem pelanggan PPPoE** — pilihan **Mode Akses** ada di bagian atas dialog, lengkap dengan pratinjau URL yang akan dibuka.

::: tip Pilihan mode diingat per perangkat Anda, bukan per router
Mode terakhir yang Anda pilih disimpan di browser Anda sendiri (per router), bukan di pengaturan
router. Alasannya: yang menentukan mode IP Lokal bisa jalan adalah **lokasi Anda**, bukan
properti routernya.

Jadi teknisi yang bekerja dari NOC bisa selalu memakai IP Lokal, sementara admin yang memantau dari
rumah tetap memakai VPN Tunnel — pada router yang sama, tanpa saling mengubah setelan.
:::

---

## Prasyarat

**Untuk kedua mode**, IP perangkat yang akan diremote harus benar dan port web interface-nya terbuka.

**Khusus mode VPN Tunnel**:

1. **Port Dst-nat Remote** sudah dikonfigurasi di **Pengaturan Router → Remote Modem Pelanggan**.  
   Port ini adalah port CHR yang diteruskan ke MikroTik, lalu MikroTik meneruskannya ke perangkat target.
2. Router dalam keadaan **terhubung** ke VPN.
3. IP perangkat **bisa dijangkau dari MikroTik**.

**Khusus mode IP Lokal**: perangkat Anda harus bisa menjangkau IP tujuan secara langsung — lihat kotak peringatan di atas.

::: warning Port Dst-nat Remote belum dikonfigurasi
Jika port belum diatur, mode **VPN Tunnel** tidak bisa dipilih (tombolnya redup) dan halaman
menampilkan peringatan. Mode **IP Lokal** tetap bisa dipakai — ia memang tidak membutuhkan port ini.
:::

---

## Menambah Perangkat

1. Buka menu **Remote Perangkat** di sidebar router.
2. Klik tombol **+ Tambah Perangkat**.
3. Isi formulir berikut:

| Field | Keterangan |
|---|---|
| **Nama Perangkat** | Label identifikasi, misal: `OLT ZTE`, `Switch Gedung B` |
| **Tipe Perangkat** | OLT, Modem, Switch, Access Point, atau Lainnya — menentukan ikon di tabel |
| **IP Address** | IP perangkat, misal `192.168.1.1` |
| **Protokol** | `http` atau `https` — menentukan skema URL yang dibuka di browser |
| **Port** | Port web interface perangkat (default: `80`) |
| **Deskripsi** | Opsional — lokasi atau catatan tambahan |

4. Klik **Tambah Perangkat** untuk menyimpan.

::: info Protokol adalah field tersendiri
Sebelumnya eznom menebak http/https dari nomor port — perangkat yang menyajikan HTTPS di port
non-standar (atau HTTP di port 443) berakhir dengan URL yang salah. Sekarang protokol dipilih
eksplisit, jadi kombinasi apa pun bisa dilayani dengan benar.
:::

---

## Memulai Remote

1. Pastikan sakelar mode di kanan atas sudah sesuai (**VPN Tunnel** atau **IP Lokal**).
2. Temukan perangkat di tabel, lalu klik tombol **Remote** (mode tunnel) atau **Langsung** (mode IP lokal).
3. Tab baru terbuka di browser Anda, mengarah ke web interface perangkat.

Yang berbeda antar mode:

**Mode VPN Tunnel** — eznom membuat aturan NAT di MikroTik lebih dulu, lalu status perangkat di tabel berubah menjadi **Aktif** (lencana biru) dan banner hijau muncul di atas halaman.

**Mode IP Lokal** — tidak ada aturan NAT yang dibuat dan tidak ada status **Aktif** yang tercatat. Di kolom IP Address, alamat lengkap yang akan dibuka (`http://192.168.1.1:8080`) ditampilkan sebagai baris kedua supaya bisa dicek sebelum diklik.

::: info Satu remote tunnel dalam satu waktu — IP Lokal tidak dibatasi
Pada mode **VPN Tunnel**, hanya satu perangkat yang bisa diremote bersamaan per router, karena
aturan NAT-nya cuma satu. Tombol Remote pada perangkat lain dinonaktifkan selama ada tunnel aktif.
Jika sebelumnya sedang remote modem pelanggan PPPoE, remote itu dihentikan otomatis saat memulai
remote perangkat, dan sebaliknya.

Pada mode **IP Lokal** tidak ada batasan itu — silakan buka OLT, switch, dan beberapa modem
sekaligus di beberapa tab.
:::

---

## Remote Modem Pelanggan PPPoE

Selain perangkat yang terdaftar di halaman ini, Anda juga bisa meremote modem pelanggan PPPoE
langsung dari daftar pelanggan.

Klik aksi **Remote Modem** pada baris pelanggan. Sebuah dialog muncul untuk memilih **mode akses**
dan mengkonfirmasi **port** serta **protokol** (http/https):

| Bagian dialog | Keterangan |
|---|---|
| **Mode Akses** | `VPN Tunnel` atau `IP Lokal`. Opsi Tunnel redup bila Port Dst-nat Remote belum diatur |
| **URL yang akan dibuka** | Pratinjau alamat lengkap, ikut berubah saat Anda mengganti mode, port, atau protokol |
| **Protokol** & **Port Modem** | Diisi dari data pelanggan (default port `80`, protokol `http`) |

Perubahan port dan protokol **disimpan ke data pelanggan** untuk remote berikutnya — berlaku di
kedua mode.

Pada mode **IP Lokal**, yang dibuka adalah **IP remote address PPPoE** pelanggan itu sendiri,
misalnya `http://10.10.0.25:80`. Karena IP tersebut dirutekan oleh MikroTik, perangkat Anda harus
berada di jaringan lokal yang sama dengan router.

::: tip Kenapa port dan protokol ditanyakan dulu
Modem pelanggan tidak seragam — sebagian menyajikan webfig di port 80, sebagian di 443 dengan
HTTPS, sebagian lagi di port lain. Menanyakan sebelum tab dibuka mencegah tab baru terbuka ke
alamat yang salah lalu harus diulang dari awal.
:::

::: info Menu Remote Modem selalu tersedia untuk pelanggan online
Dulu aksi ini disembunyikan bila Port Dst-nat Remote belum dikonfigurasi. Sekarang menunya tetap
muncul selama pelanggan **online** dan **IP PPPoE-nya sudah tersinkronisasi**, karena mode IP Lokal
tidak membutuhkan port tersebut.
:::

### Banner status aktif

Selama remote **tunnel** berjalan, banner muncul di bagian atas halaman yang menampilkan:
- Nama perangkat atau pelanggan yang sedang diremote
- Link langsung ke web interface, lengkap dengan tombol salin
- Lama sesi berjalan — berubah oranye dengan peringatan jika sudah lebih dari 30 menit
- Tombol **Hentikan Remote**

Mode IP Lokal tidak memunculkan banner ini karena memang tidak ada sesi yang tercatat di server.

---

## Menghentikan Remote

Bagian ini hanya berlaku untuk mode **VPN Tunnel**. Ada tiga cara menghentikan remote yang aktif:

- Klik **Hentikan Remote** di banner status atas halaman
- Klik **Stop** di kolom aksi baris perangkat yang aktif
- Memulai remote perangkat lain (remote sebelumnya dihentikan otomatis)

Saat dihentikan, aturan NAT di MikroTik dihapus otomatis.

::: tip Mode IP Lokal tidak perlu dihentikan
Tidak ada aturan NAT yang dibuat, jadi cukup tutup tab-nya. Ini juga berarti tidak ada risiko
"lupa mematikan remote" yang meninggalkan aturan NAT menganga di router.
:::

---

## Mengedit & Menghapus Perangkat

- **Edit**: Klik ikon pensil di baris perangkat. Modal edit akan terbuka dengan data yang sudah terisi.
- **Hapus**: Klik ikon tempat sampah, lalu konfirmasi di dialog yang muncul.  
  Jika perangkat sedang diremote lewat tunnel saat dihapus, remote akan dihentikan otomatis sebelum data dihapus.

---

## Cara Kerja Teknis

**Mode VPN Tunnel** — tiga lompatan, dua di antaranya aturan NAT:

```
Browser admin (di mana saja)
    │
    ▼
CHR public IP : webfig_port   ← DST-NAT di CHR
    │
    ▼
MikroTik : nat_dst_port (6931)   ← DST-NAT di MikroTik (dibuat oleh eznom)
    │
    ▼
IP perangkat : port (misal 192.168.1.1:80)
```

eznom menggunakan API MikroTik untuk membuat dan menghapus aturan NAT (bertanda `eznom-remote`)
secara dinamis setiap kali remote dimulai atau dihentikan.

**Mode IP Lokal** — satu lompatan, tanpa aturan NAT sama sekali:

```
Browser admin (harus di jaringan lokal yang sama dengan MikroTik)
    │
    ▼
IP perangkat : port                      (misal 192.168.1.1:8080)
IP remote address PPPoE : port modem     (misal 10.10.0.25:80)
```

Karena eznom tidak menghubungi router sama sekali di mode ini, remote tetap bisa dipakai walau VPN
router sedang putus — selama perangkat targetnya sendiri masih hidup dan terjangkau dari posisi Anda.
