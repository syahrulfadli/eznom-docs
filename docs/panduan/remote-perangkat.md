# Remote Perangkat

Fitur **Remote Perangkat** memungkinkan admin mengakses web interface perangkat jaringan — seperti OLT, switch terkelola, atau modem — langsung dari dasbor eznom, tanpa perlu VPN terpisah atau akses langsung ke lokasi fisik.

Akses berjalan melalui tunnel NAT MikroTik: eznom membuat aturan forwarding sementara di router yang mengarahkan port tertentu ke IP dan port perangkat target.

---

## Prasyarat

Sebelum menggunakan fitur ini, pastikan:

1. **Port Dst-nat Remote** sudah dikonfigurasi di **Pengaturan Router → Remote Modem Pelanggan**.  
   Port ini adalah port CHR yang diteruskan ke MikroTik, lalu MikroTik meneruskannya ke perangkat target.
2. Router dalam keadaan **terhubung** ke VPN.
3. IP perangkat yang akan diremote **bisa dijangkau dari MikroTik** (berada di jaringan lokal yang sama dengan router).

::: warning Port Dst-nat Remote belum dikonfigurasi
Jika port belum diatur, halaman akan menampilkan peringatan dan tombol Remote tidak akan berfungsi. Atur terlebih dahulu di **Pengaturan Router**.
:::

---

## Menambah Perangkat

1. Buka menu **Remote Perangkat** di sidebar router.
2. Klik tombol **+ Tambah Perangkat**.
3. Isi formulir berikut:

| Field | Keterangan |
|---|---|
| **Nama Perangkat** | Label identifikasi, misal: `OLT ZTE`, `Switch Gedung B` |
| **IP Address** | IP perangkat yang bisa dijangkau dari MikroTik, misal `192.168.1.1` |
| **Port** | Port web interface perangkat (default: `80`) |
| **Deskripsi** | Opsional — lokasi atau catatan tambahan |

4. Klik **Tambah Perangkat** untuk menyimpan.

---

## Memulai Remote

1. Temukan perangkat di tabel, lalu klik tombol **Remote** (ikon layar komputer).
2. eznom akan membuat aturan NAT di MikroTik secara otomatis, lalu **membuka tab baru** di browser Anda yang langsung mengarah ke web interface perangkat.
3. Status perangkat di tabel berubah menjadi **Aktif** (lencana hijau).

::: info Satu remote aktif dalam satu waktu
Hanya satu perangkat yang bisa diremote secara bersamaan per router. Tombol Remote pada perangkat lain akan dinonaktifkan selama ada remote yang aktif.

Jika sebelumnya sedang remote modem pelanggan PPPoE, remote tersebut akan dihentikan otomatis saat memulai remote perangkat, dan sebaliknya.
:::

### Banner status aktif

Selama remote berjalan, banner hijau muncul di bagian atas halaman yang menampilkan:
- Nama perangkat yang sedang diremote
- Link langsung ke web interface perangkat
- Tombol **Hentikan Remote**

---

## Menghentikan Remote

Ada tiga cara menghentikan remote yang sedang aktif:

- Klik **Hentikan Remote** di banner status atas halaman
- Klik **Stop** di kolom aksi baris perangkat yang aktif
- Memulai remote perangkat lain (remote sebelumnya dihentikan otomatis)

Saat dihentikan, aturan NAT di MikroTik dihapus otomatis.

---

## Mengedit & Menghapus Perangkat

- **Edit**: Klik ikon pensil di baris perangkat. Modal edit akan terbuka dengan data yang sudah terisi.
- **Hapus**: Klik ikon tempat sampah, lalu konfirmasi di dialog yang muncul.  
  Jika perangkat sedang diremote saat dihapus, remote akan dihentikan otomatis sebelum data dihapus.

---

## Cara Kerja Teknis

```
Browser admin
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

eznom menggunakan API MikroTik untuk membuat dan menghapus aturan NAT secara dinamis setiap kali remote dimulai atau dihentikan.
