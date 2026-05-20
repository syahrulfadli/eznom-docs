# Peta Pelanggan

Halaman peta menampilkan sebaran geografis semua pelanggan PPPoE yang memiliki data koordinat.

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
