# Peta Pelanggan

Halaman peta menampilkan sebaran geografis semua pelanggan PPPoE yang memiliki data koordinat.

::: tip Beda dengan Peta Jaringan
Halaman ini fokus pada **pelanggan**: siapa di mana, dan bagaimana statusnya sekarang. Untuk
menggambar **infrastruktur** — tiang, ODP, dan tarikan kabel yang menghubungkannya — gunakan
[Peta Jaringan](/panduan/peta-jaringan). Titik pelanggan di sini ikut tampil di sana sebagai layer
tersendiri, jadi koordinat cukup diisi sekali di halaman Pelanggan.
:::

---

## Membuka Peta

Buka router → **PPPoE → Peta Pelanggan**

---

## Fitur Peta

### Warna Marker

| Warna | Status |
|---|---|
| 🟢 Hijau | Online |
| 🔴 Merah | Offline |
| 🟠 Oranye | Isolir |
| ⚫ Abu-abu | Suspended |

### Popup Informasi

Klik marker untuk melihat:
- Nama pelanggan
- Status (dengan indikator warna)
- Profil layanan
- Nomor telepon
- **Lihat Detail** — link ke halaman detail pelanggan
- **📍 Google Maps** — buka koordinat di Google Maps

### Citra Satelit

Tombol bergambar bola dunia di kanan atas menukar latar peta menjadi **citra satelit**, lengkap
dengan nama jalan di atasnya. Berguna untuk memastikan titik pelanggan benar-benar jatuh di rumah
yang dimaksud, bukan di tengah jalan. Pilihannya diingat browser Anda per router.

### Auto-Refresh

Peta memperbarui status marker secara otomatis setiap **30 detik** tanpa perlu reload halaman.

### Mode Gelap

Peta otomatis menggunakan tile gelap (CartoDB Dark) saat aplikasi dalam mode gelap.

---

## Menambah Koordinat Pelanggan

Koordinat harus diisi saat menambah atau mengedit data pelanggan:

1. Buka **Edit Pelanggan**
2. Scroll ke bagian **Lokasi**
3. Isi **Latitude** dan **Longitude**, atau klik **Pin di Peta** untuk memilih lokasi secara visual
4. Simpan

Pelanggan tanpa koordinat tidak akan tampil di peta.

---

## Statistik Peta

Di atas peta, tersedia chip statistik:

- **Total pelanggan** — semua pelanggan di router ini
- **Tampil di peta** — yang memiliki koordinat
- **Aktif / Isolir / Suspended** — breakdown per status
