# Template Kartu Voucher

Selain **Visual Builder** (atur warna & font lewat panel), eznom menyediakan editor **HTML Kustom**
untuk merancang kartu voucher sepenuhnya sesuai keinginan Anda — logo, tata letak, bingkai potong,
stub sobek, apa pun yang bisa dibuat dengan HTML dan CSS.

Buka router → **Hotspot → Template Kartu**

---

## Preset Siap Pakai

Anda tidak perlu mulai dari nol. Tersedia beberapa preset yang bisa langsung dipakai atau diedit
lebih lanjut:

| Preset | Deskripsi | Saran cetak |
|---|---|---|
| **Tiket Hijau** | Gaya tiket dengan header & footer hijau, logo Wi-Fi dan daun, QR di tengah. Kartu 45 mm, tinggi ±64 mm | A4 · Ukuran Kustom 46×67 mm · 4 kolom × 4 baris = **16 voucher/lembar** |
| **NRH Green** | Kartu compact hijau bersih 42×29 mm: header logo + nomor seri, badge harga, kode login berbingkai putus-putus | F4 · Ukuran Kustom 42×30 mm · 5 kolom × 10 baris = **50 voucher/lembar** |
| **NRH Business** | Kartu 42×29 mm dua kolom: kode login di kiri, harga/masa aktif/QR di kanan, header nomor seri, footer nomor CS | F4 · Ukuran Kustom 42×30 mm · 5 kolom × 10 baris = **50 voucher/lembar** |
| **Boarding Pass Style** | Kartu 67×48 mm bergaya boarding pass: header biru, area kredensial + QR di kiri, stub sobek di kanan berisi nomor seri & tanggal | F4 · Ukuran Kustom 67×49 mm · 3 kolom × 6 baris = **18 voucher/lembar** |

Memilih preset akan **membuat template baru milik Anda** yang isinya sudah terisi HTML preset
tersebut — bukan mengunci Anda ke desainnya. Setelah tersimpan, edit sebebas yang Anda mau.

::: tip Pasangkan dengan saran cetak
Angka "voucher per lembar" di kolom kanan hanya tercapai kalau Anda memilih template cetak
**Ukuran Kustom** dengan ukuran mm yang disebutkan, dan mencetak pada **skala 100%**. Lihat
[Mode Cetak Ukuran Kustom](/panduan/hotspot/voucher#mode-cetak-ukuran-kustom).
:::

---

## Membuat Template Sendiri

1. Klik **+ Buat Template** untuk mulai dari template kosong bawaan
2. Beri nama template — nama harus unik di dalam bisnis Anda
3. Tulis HTML kartu di editor; pratinjau di sebelahnya diperbarui langsung
4. Simpan

Template yang tersimpan muncul sebagai pilihan di modal **Generate Voucher** ketika Anda memilih
Desain Kartu → **HTML Kustom**.

---

## Variabel

Tulis variabel di dalam HTML; eznom menggantinya dengan data asli saat kartu dicetak.

| Variabel | Isi |
|---|---|
| `{username}` | Username voucher |
| `{password}` | Password voucher |
| `{validity}` | Masa aktif dari profil — otomatis menyertakan kuota bila profil punya batas, misal `7 hari \| 4 GB` |
| `{price}` | Harga voucher tanpa awalan `Rp` |
| `{profile}` | Nama profil hotspot |
| `{biz_name}` | Nama bisnis dari Profil Bisnis |
| `{biz_tagline}` | Tagline bisnis dari Profil Bisnis |
| `{logo}` | URL logo bisnis — pakai di dalam `<img src="{logo}">` |
| `{qrcode}` | URL gambar QR code — kosong bila QR dinonaktifkan saat generate |
| `{serial}` | Nomor urut voucher di dalam batch |
| `{date}` | Tanggal cetak |

### Blok Kondisional

Bungkus bagian yang hanya perlu tampil pada kondisi tertentu:

| Blok | Tampil ketika |
|---|---|
| `{if_logo}` … `{/if_logo}` | Bisnis punya logo |
| `{if_no_logo}` … `{/if_no_logo}` | Bisnis **belum** punya logo |
| `{if_biz_tagline}` … `{/if_biz_tagline}` | Tagline bisnis terisi |
| `{if_no_biz_tagline}` … `{/if_no_biz_tagline}` | Tagline bisnis kosong |
| `{if_user_password}` … `{/if_user_password}` | Voucher bertipe **User + Password** |
| `{if_user_only}` … `{/if_user_only}` | Voucher bertipe **Kode Tunggal** |

Contoh — logo hanya ditampilkan kalau ada:

```html
<div style="display:flex;align-items:center;gap:5px;">
  {if_logo}<img src="{logo}" alt="" style="height:14px;object-fit:contain;">{/if_logo}
  <span style="font-size:11px;font-weight:700;">{biz_name}</span>
</div>
```

Contoh — satu template melayani dua tipe voucher sekaligus:

```html
{if_user_password}
  <div>Username · Password</div>
  <div>{username}</div>
  <div>{password}</div>
{/if_user_password}
{if_user_only}
  <div>Kode Login</div>
  <div>{username}</div>
{/if_user_only}
```

---

## Batasan HTML

HTML template dibersihkan sebelum disimpan dan sebelum dirender. Yang perlu Anda ketahui:

- **JavaScript tidak dijalankan** — `<script>`, atribut `onclick`, dan sejenisnya dibuang
- **SVG inline didukung** dan aman dipakai untuk ikon/ornamen, sehingga kartu tidak perlu gambar
  eksternal
- **CSS ditulis inline** pada atribut `style` masing-masing elemen
- Jangan menaruh variabel di dalam komentar HTML (`<!-- {username} -->`) — komentar dibuang saat
  pembersihan, dan variabel di dalamnya ikut hilang

::: warning Pakai ukuran fisik (mm), bukan piksel
Untuk hasil cetak yang presisi, tentukan lebar kartu dalam milimeter (`width:45mm`). Piksel
menghasilkan ukuran yang berbeda-beda antar printer dan pengaturan skala browser.
:::

---

## Mengelola Template

Di halaman **Template Kartu** Anda bisa:

- **Edit** — buka kembali editor
- **Duplikat** — buat salinan sebagai titik awal varian baru
- **Hapus** — template yang dipakai batch lama tidak memengaruhi voucher yang sudah dicetak

Nama template harus **unik per bisnis** — nama yang sudah dipakai akan ditolak saat menyimpan.

---

## Memakai Template saat Generate

1. Buka **Hotspot → Voucher → + Generate Voucher**
2. Di bagian **Desain Kartu**, pilih **HTML Kustom**
3. Pilih template dari dropdown
4. Pilih **Template Cetak** yang sesuai (biasanya **Ukuran Kustom** dengan ukuran mm dari desain
   Anda)
5. Generate

Kombinasi ini juga bisa disimpan sebagai [Preset Pengaturan
Voucher](/panduan/hotspot/voucher#preset-pengaturan-voucher) supaya tidak perlu diatur ulang tiap
kali.
