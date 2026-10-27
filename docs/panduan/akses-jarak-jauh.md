# Akses Jarak Jauh

Router yang terhubung lewat VPN eznom bisa dijangkau dari internet melalui beberapa **port NAT di
server VPN eznom**. Halaman **Akses Jarak Jauh** (sidebar router → **Pengaturan → Akses Jarak Jauh**)
menampilkan port-port itu dan siapa saja yang boleh memakainya, serta tempat membuka dan menutup
akses Winbox.

Halaman ini hanya ada untuk router yang memakai **VPN eznom** (L2TP/OpenVPN yang dibuat wizard).
Router dengan tunnel sendiri tidak punya port NAT di server eznom.

---

## Kenapa port perlu dibatasi

Port NAT yang terbuka untuk semua IP bisa ditemukan oleh pemindai di internet, lalu dicoba
password-nya berulang kali. Satu tebakan yang benar memberi kendali penuh atas router beserta
seluruh pelanggannya.

Pembatasan **Available From** di **IP → Services** MikroTik tidak bisa menolong di sini: semua
koneksi lewat NAT tiba di router dengan alamat server VPN eznom, jadi router tidak bisa membedakan
Anda dari penyerang. Karena itu pembatasannya dilakukan di server VPN eznom, lewat halaman ini.

---

## Empat port per router

| Port | Dipakai untuk | Siapa yang boleh |
|---|---|---|
| **API MikroTik** | Sinkronisasi dan semua aksi di panel eznom | **Hanya server eznom** — tidak bisa dibuka |
| **SSH** | Backup konfigurasi harian | **Hanya server eznom** — tidak bisa dibuka |
| **Winbox** | Anda sendiri me-remote router lewat Winbox (tidak dipakai eznom) | Tertutup; Anda yang membukanya |
| **Remote Modem** | [Remote Perangkat](/panduan/remote-perangkat) dan Remote Modem pelanggan mode VPN Tunnel | Dibuka otomatis saat remote dimulai |

Setiap baris menampilkan alamat port publiknya, misal `203.0.113.10:10082 → :8291`, beserta
statusnya:

| Status | Arti |
|---|---|
| **Hanya server eznom** | API/SSH sudah dikunci ke server eznom |
| **Tertutup** | Tidak ada IP yang diizinkan |
| **Terbuka untuk 114.122.10.20** | Hanya IP itu yang bisa terhubung, sampai waktu yang tertera |
| **Terbuka untuk semua IP** | Siapa pun bisa terhubung, sampai waktu yang tertera |
| **Semua IP · tanpa batas waktu** | Port lama yang belum pernah dibatasi — lihat [Router lama](#router-lama) |

---

## Membuka akses Winbox

1. Klik **Buka Akses** di baris Winbox.
2. Pilih **Izinkan akses dari**:
   - **IP tertentu** (disarankan) — kolom IP terisi otomatis dengan IP perangkat yang sedang Anda
     pakai. Kalau Winbox akan dijalankan dari perangkat atau jaringan lain, ganti dengan IP-nya
     (cek di [ipinfo.io](https://ipinfo.io)).
   - **Semua IP** — siapa pun di internet bisa mencoba login. Paling lama **24 jam**.
3. Pilih **Durasi**: 1 jam, 6 jam, 24 jam, 7 hari, atau **Selalu terbuka** (hanya untuk IP tertentu).
4. Klik **Buka Akses**, lalu sambungkan Winbox ke alamat yang tertera di baris Winbox.

Saat waktunya habis, akses tertutup sendiri — tidak perlu diingat-ingat, dan tetap tertutup walau
panel eznom sedang tidak bisa dibuka.

::: warning Selalu terbuka hanya untuk IP statis
IP internet rumah atau kantor biasanya berganti sewaktu-waktu, dan IP lama Anda bisa jatuh ke
pelanggan lain penyedia internet Anda. Pilih **Selalu terbuka** hanya untuk IP yang memang statis.
:::

::: info Terhubung lewat IPv6
Port Winbox memakai IPv4. Kalau browser Anda terhubung lewat IPv6, kolom IP tidak bisa diisi
otomatis — isi IPv4 perangkat yang akan menjalankan Winbox.
:::

Untuk mengganti IP atau durasi, klik **Ubah**. Untuk menutup sebelum waktunya, klik **Tutup**.
Menutup akses hanya menolak koneksi baru: sesi Winbox yang sedang berjalan tetap tersambung sampai
Anda keluar.

---

## Port Remote Modem

Port ini tidak perlu dibuka manual. Saat Anda memulai remote mode **VPN Tunnel** dari
[Remote Perangkat](/panduan/remote-perangkat) atau Remote Modem pelanggan, eznom membukanya untuk
**IP Anda saja selama 2 jam**, dan menutupnya lagi saat remote dihentikan.

Kalau Anda terhubung lewat IPv6, port dibuka untuk semua IP selama sesi itu, karena IPv4 Anda tidak
bisa diketahui.

Tombol **Tutup** di baris Remote Modem bisa dipakai untuk menutup port yang masih terbuka.

---

## Router lama

Router yang didaftarkan sebelum fitur ini ada mungkin masih punya port Winbox yang **terbuka untuk
semua IP tanpa batas waktu**. eznom tidak menutupnya sepihak supaya akses Anda tidak tiba-tiba
putus. Sebagai gantinya:

- Halaman ini menampilkan peringatan kuning di atas, dan barisnya berstatus **Semua IP · tanpa
  batas waktu**.
- Peringatan akun **"Port Winbox router … terbuka untuk semua IP"** muncul di panel, dengan tombol
  **Atur akses** yang langsung membuka halaman ini.

Tutup port itu, atau buka ulang khusus untuk IP Anda.

---

## Izin sub-pengguna & catatan

Halaman ini dikontrol modul izin **Akses Jarak Jauh**, terpisah dari **Remote Perangkat**:

| Izin | Yang bisa dilakukan |
|---|---|
| **Lihat** | Melihat port dan statusnya |
| **Edit** | Membuka, mengubah, dan menutup akses |

Role **Teknisi** hanya mendapat izin **Lihat**; **Full Access** mendapat semuanya. Lihat
[Sub-Pengguna](/panduan/pengaturan#sub-pengguna).

Setiap buka dan tutup — siapa, untuk IP mana, dan sampai kapan — tercatat di [Log Audit](/panduan/pengaturan#log-audit).

---

## Pertanyaan Umum

**Winbox tidak bisa tersambung padahal akses sudah dibuka.**
Pastikan IP yang diizinkan sama dengan IP internet perangkat yang menjalankan Winbox (cek di
[ipinfo.io](https://ipinfo.io) dari perangkat itu). IP yang terisi otomatis adalah IP perangkat
tempat Anda membuka panel eznom — bisa berbeda bila Winbox dijalankan dari komputer atau jaringan
lain.

**Aplikasi lain (misal Mikhmon) perlu port API router saya.**
Port API dikunci untuk server eznom dan tidak bisa dibuka dari halaman ini, jadi aplikasi lain
tidak bisa memakainya dari internet. Jalankan aplikasi itu dari jaringan lokal router.

**Apakah membatasi port ini membuat router saya aman sepenuhnya?**
Tidak. Tetap gunakan user khusus untuk eznom dan password yang kuat — lihat
[Koneksi API MikroTik](/panduan/router#koneksi-api-mikrotik).
