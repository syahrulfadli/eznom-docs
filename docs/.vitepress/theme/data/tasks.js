// Daftar tugas untuk "Apa yang ingin Anda lakukan?" di beranda.
// `keywords` hanya dipakai pencarian (tidak ditampilkan) — isi dengan istilah lain yang mungkin
// diketik operator. Kalau judul bagian di halaman tujuan berubah, perbarui anchor di `link`.

export const categories = [
  { id: 'router', label: 'Router & Jaringan', icon: '📡' },
  { id: 'pppoe', label: 'PPPoE', icon: '🌐' },
  { id: 'tagihan', label: 'Tagihan & Bayar', icon: '💰' },
  { id: 'hotspot', label: 'Hotspot', icon: '📶' },
  { id: 'notifikasi', label: 'Notifikasi', icon: '🔔' },
  { id: 'penjualan', label: 'Penjualan', icon: '🧾' },
  { id: 'bisnis', label: 'Keuangan & Akun', icon: '📊' },
]

export const tasks = [
  // Router & Jaringan
  {
    category: 'router',
    title: 'Menyambungkan router MikroTik',
    desc: 'Daftarkan router dan hubungkan lewat VPN bawaan eznom.',
    link: '/panduan/router#menambah-router-baru',
    keywords: 'tambah router vpn mikrotik koneksi api l2tp ipsec openvpn',
  },
  {
    category: 'router',
    title: 'Me-remote modem pelanggan',
    desc: 'Buka web admin modem pelanggan langsung dari dasbor.',
    link: '/panduan/remote-perangkat#remote-modem-pelanggan-pppoe',
    keywords: 'remote ont onu modem winbox webfig akses jarak jauh',
  },
  {
    category: 'router',
    title: 'Backup konfigurasi router',
    desc: 'Simpan cadangan konfigurasi MikroTik secara berkala.',
    link: '/panduan/router#backup-konfigurasi-router',
    keywords: 'backup cadangan export rsc konfigurasi harian',
  },
  {
    category: 'router',
    title: 'Menggambar tiang, ODP, dan kabel',
    desc: 'Petakan topologi fisik jaringan; panjang kabel dihitung otomatis.',
    link: '/panduan/peta-jaringan#tarik-kabel',
    keywords: 'peta jaringan topologi odp odc tiang kabel feeder dropcore fiber',
  },

  // PPPoE
  {
    category: 'pppoe',
    title: 'Membuat paket internet',
    desc: 'Atur kecepatan, harga, dan PPN di profil layanan.',
    link: '/panduan/pppoe/profil#membuat-profil-baru',
    keywords: 'profil paket layanan kecepatan rate limit harga ppn bandwidth',
  },
  {
    category: 'pppoe',
    title: 'Menambah pelanggan PPPoE',
    desc: 'Daftarkan pelanggan beserta tagihan pertamanya.',
    link: '/panduan/pppoe/pelanggan',
    keywords: 'pelanggan baru secret pppoe username password pasang',
  },
  {
    category: 'pppoe',
    title: 'Memindahkan pelanggan ke router lain',
    desc: 'Bawa data pelanggan, opsional beserta riwayat tagihannya.',
    link: '/panduan/pppoe/backup-migrasi',
    keywords: 'pindah migrasi transfer backup restore router lain',
  },
  {
    category: 'pppoe',
    title: 'Mengirim kontrak untuk ditandatangani',
    desc: 'Pelanggan membaca dan tanda tangan dari ponsel.',
    link: '/panduan/pppoe/kontrak#mengirim-link-kontrak',
    keywords: 'kontrak perjanjian tanda tangan digital ttd',
  },
  {
    category: 'pppoe',
    title: 'Mengganti tampilan halaman isolir',
    desc: 'Pilih tema, logo, pesan, dan kontak saat pelanggan diisolir.',
    link: '/panduan/isolir#konfigurasi-halaman-isolir',
    keywords: 'isolir blokir halaman tema web proxy suspend',
  },

  // Tagihan & Bayar
  {
    category: 'tagihan',
    title: 'Memilih pascabayar atau prabayar',
    desc: 'Pahami beda jatuh tempo dan jadwal isolir tiap skema.',
    link: '/panduan/pppoe/skema-pembayaran#perbedaan-utama',
    keywords: 'pascabayar prabayar skema jatuh tempo postpaid prepaid',
  },
  {
    category: 'tagihan',
    title: 'Mencatat pembayaran pelanggan',
    desc: 'Lunas, sebagian, potongan, atau bayar di muka.',
    link: '/panduan/pppoe/billing#mencatat-pembayaran',
    keywords: 'catat bayar lunas sebagian cicil potongan diskon kuitansi',
  },
  {
    category: 'tagihan',
    title: 'Membatalkan pembayaran yang salah',
    desc: 'Tagihan kembali Belum Bayar, seolah tak pernah dicatat.',
    link: '/panduan/pppoe/billing#membatalkan-pembayaran',
    keywords: 'batal salah catat koreksi undo refund',
  },
  {
    category: 'tagihan',
    title: 'Mengatur isolir & masa tenggang',
    desc: 'Kapan pelanggan diputus, dan kapan disambung lagi.',
    link: '/panduan/pppoe/billing#isolir-masa-tenggang',
    keywords: 'isolir tenggang grace period putus sambung ulang telat',
  },
  {
    category: 'tagihan',
    title: 'Mengaktifkan payment gateway',
    desc: 'Midtrans, Duitku, iPaymu, DOKU, atau transfer manual.',
    link: '/panduan/pembayaran#pembayaran-online-payment-gateway',
    keywords: 'midtrans duitku ipaymu doku qris virtual account transfer bank gateway',
  },
  {
    category: 'tagihan',
    title: 'Membagikan portal bayar ke pelanggan',
    desc: 'Pelanggan cek tagihan dan bayar sendiri dengan ID-nya.',
    link: '/panduan/pppoe/portal-pembayaran#cara-membagikan-portal-ke-pelanggan',
    keywords: 'portal cek tagihan bayar sendiri link pelanggan',
  },

  // Hotspot
  {
    category: 'hotspot',
    title: 'Generate voucher massal',
    desc: 'Buat ratusan voucher sekaligus, langsung siap cetak.',
    link: '/panduan/hotspot/voucher#generate-voucher',
    keywords: 'voucher generate batch massal cetak print hotspot',
  },
  {
    category: 'hotspot',
    title: 'Mendesain kartu voucher sendiri',
    desc: 'Pakai preset atau tulis template HTML dengan variabel.',
    link: '/panduan/hotspot/template-kartu#membuat-template-sendiri',
    keywords: 'template kartu desain html voucher cetak logo',
  },
  {
    category: 'hotspot',
    title: 'Membuka portal reseller',
    desc: 'Reseller top up saldo dan beli voucher sendiri.',
    link: '/panduan/hotspot/reseller#portal-reseller-self-service',
    keywords: 'reseller agen mitra saldo top up self-service portal',
  },

  // Notifikasi
  {
    category: 'notifikasi',
    title: 'Menghubungkan WhatsApp',
    desc: 'Kirim pengingat dari nomor WhatsApp Anda sendiri.',
    link: '/panduan/notifikasi#cara-menghubungkan',
    keywords: 'whatsapp wa gateway scan qr hubungkan nomor',
  },
  {
    category: 'notifikasi',
    title: 'Menjaga nomor WhatsApp tidak diblokir',
    desc: 'Praktik aman dan batas kirim harian (warm-up).',
    link: '/panduan/notifikasi#cara-menjaga-nomor-tidak-diblokir',
    keywords: 'blokir banned spam warm-up batas kirim aman',
  },
  {
    category: 'notifikasi',
    title: 'Mengatur jadwal pengingat jatuh tempo',
    desc: 'Pilih hari H-N dan notifikasi di hari jatuh tempo.',
    link: '/panduan/notifikasi#jadwal-pengingat',
    keywords: 'pengingat reminder h-7 h-3 h-1 jatuh tempo jadwal',
  },
  {
    category: 'notifikasi',
    title: 'Dapat kabar router mati di HP',
    desc: 'Pasang eznom sebagai aplikasi dan aktifkan push.',
    link: '/panduan/notifikasi-operator#mengaktifkan-notifikasi-di-perangkat',
    keywords: 'push notifikasi hp android iphone pwa router mati down gangguan',
  },

  // Penjualan
  {
    category: 'penjualan',
    title: 'Membuat halaman publik bisnis',
    desc: 'Etalase paket, FAQ, dan kontak bisnis Anda.',
    link: '/panduan/halaman-publik#langkah-setup',
    keywords: 'halaman publik website landing etalase paket slug',
  },
  {
    category: 'penjualan',
    title: 'Menerima pendaftaran online',
    desc: 'Calon pelanggan mengisi formulir, masuk ke inbox Anda.',
    link: '/panduan/leads#mengaktifkan-formulir-pendaftaran',
    keywords: 'leads calon pelanggan formulir daftar pendaftaran',
  },
  {
    category: 'penjualan',
    title: 'Mengubah calon pelanggan jadi pelanggan',
    desc: 'Nama, kontak, foto KTP, dan koordinat ikut terisi.',
    link: '/panduan/leads#konversi-menjadi-pelanggan-pppoe',
    keywords: 'konversi jadikan pelanggan leads prospek',
  },

  // Keuangan & Akun
  {
    category: 'bisnis',
    title: 'Melihat laba & arus kas',
    desc: 'Ringkasan pemasukan, pengeluaran, dan tren bulanan.',
    link: '/panduan/keuangan#kartu-ringkasan',
    keywords: 'keuangan laba rugi profit pemasukan pengeluaran laporan',
  },
  {
    category: 'bisnis',
    title: 'Mencatat pengeluaran rutin',
    desc: 'Sewa, listrik, bandwidth — tercatat otomatis tiap bulan.',
    link: '/panduan/keuangan#pengeluaran-rutin',
    keywords: 'pengeluaran rutin biaya bulanan listrik sewa upstream',
  },
  {
    category: 'bisnis',
    title: 'Mencatat stok kabel & modem',
    desc: 'Inventaris dengan nomor seri dan potong stok otomatis.',
    link: '/panduan/inventaris#menambah-barang',
    keywords: 'inventaris stok barang gudang kabel modem nomor seri',
  },
  {
    category: 'bisnis',
    title: 'Menambah staf (sub-pengguna)',
    desc: 'Beri akses terbatas sesuai tugas masing-masing.',
    link: '/panduan/pengaturan#tambah-sub-pengguna',
    keywords: 'staf teknisi admin sub-pengguna akses izin role karyawan',
  },
]
