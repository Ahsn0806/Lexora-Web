// Helper to load from localStorage or fallback to default
const getStorageItem = (key, fallback) => {
  const item = localStorage.getItem(key);
  if (!item) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
  try {
    return JSON.parse(item);
  } catch (e) {
    return fallback;
  }
};

const setStorageItem = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
};

// Default Books
const DEFAULT_BOOKS = [
  { id: 1, judul: "Bumi Manusia", pengarang: "Pramoedya A. Toer", penerbit: "Lentera Dipantara", kategori: "Fiksi", stok: 3, status: "tersedia", cover: "#e8edf5", icon: "bi-book", isbn: "978-979-973-120-3", tahun: 2005, halaman: 535, rak: "A-01", deskripsi: "Roman Sejarah yang berlatar belakang kebangkitan nasional pada awal abad ke-20." },
  { id: 2, judul: "Fisika Dasar Jilid 1", pengarang: "Halliday & Resnick", penerbit: "Erlangga", kategori: "Sains", stok: 0, status: "dipinjam", cover: "#e8f3ee", icon: "bi-book", isbn: "978-979-015-188-8", tahun: 2010, halaman: 680, rak: "B-03", deskripsi: "Buku pegangan komprehensif mengenai konsep-konsep mekanika dan fisika termal." },
  { id: 3, judul: "Matematika Diskrit", pengarang: "Kenneth Rosen", penerbit: "McGraw-Hill", kategori: "Pendidikan", stok: 2, status: "tersedia", cover: "#f3ede8", icon: "bi-book", isbn: "978-007-338-309-5", tahun: 2012, halaman: 843, rak: "B-01", deskripsi: "Pengantar komprehensif ke matematika diskrit, terstruktur untuk ilmu komputer." },
  { id: 4, judul: "Laskar Pelangi", pengarang: "Andrea Hirata", penerbit: "Bentang", kategori: "Fiksi", stok: 0, status: "habis", cover: "#f0e8f3", icon: "bi-book", isbn: "978-979-122-700-1", tahun: 2005, halaman: 529, rak: "A-02", deskripsi: "Kisah persahabatan sepuluh anak sekolah di desa Belitung yang berjuang melawan kemiskinan." },
  { id: 5, judul: "Pemrograman Web", pengarang: "A. Wicaksono", penerbit: "Informatika", kategori: "Sains", stok: 4, status: "tersedia", cover: "#edf3e8", icon: "bi-book", isbn: "978-602-151-499-3", tahun: 2021, halaman: 412, rak: "C-01", deskripsi: "Panduan praktis membangun aplikasi web interaktif modern menggunakan HTML, CSS, & JS." },
  { id: 6, judul: "Kimia Organik", pengarang: "Morrison & Boyd", penerbit: "Erlangga", kategori: "Sains", stok: 1, status: "tersedia", cover: "#faeeda", icon: "bi-book", isbn: "978-020-505-838-0", tahun: 2008, halaman: 1200, rak: "C-02", deskripsi: "Studi komprehensif mengenai struktur molekul senyawa karbon dan reaksinya." },
  { id: 7, judul: "Sejarah Nusantara", pengarang: "M. Yamin", penerbit: "Balai Pustaka", kategori: "Non-Fiksi", stok: 2, status: "tersedia", cover: "#fbeaf0", icon: "bi-book", isbn: "978-979-407-111-2", tahun: 1989, halaman: 350, rak: "D-01", deskripsi: "Paparan kronologis sejarah kepulauan nusantara dari zaman kerajaan purba." },
  { id: 8, judul: "Aljabar Linear", pengarang: "Anton & Rorres", penerbit: "Wiley", kategori: "Pendidikan", stok: 0, status: "dipinjam", cover: "#e6f1fb", icon: "bi-book", isbn: "978-111-846-442-7", tahun: 2014, halaman: 580, rak: "B-02", deskripsi: "Buku ajar standar perkuliahan aljabar linier dengan penekanan pada aplikasi modern." },
  { id: 9, judul: "Naruto Vol. 1", pengarang: "Masashi Kishimoto", penerbit: "Shueisha", kategori: "Komik", stok: 3, status: "tersedia", cover: "#eeedfe", icon: "bi-book", isbn: "978-408-872-840-7", tahun: 1999, halaman: 192, rak: "E-01", deskripsi: "Awal perjalanan shinobi muda Naruto Uzumaki yang bercita-cita menjadi Hokage." },
  { id: 10, judul: "Sapiens", pengarang: "Yuval Noah Harari", penerbit: "Gramedia", kategori: "Non-Fiksi", stok: 2, status: "tersedia", cover: "#e1f5ee", icon: "bi-book", isbn: "978-602-441-020-9", tahun: 2017, halaman: 520, rak: "D-02", deskripsi: "Riwayat singkat umat manusia dari zaman purba hingga revolusi bioteknologi." }
];

// Default Members
const DEFAULT_MEMBERS = [
  { nim: "220101001", nama: "Farhan Syah", email: "farhan@student.univ.ac.id", prodi: "Teknik Informatika", angkatan: 2022, status: "aktif", limitPinjam: 5, dendaSirkulasi: 0, avatar: "FS", tglBergabung: "2023-09-12" },
  { nim: "220101002", nama: "Risa Amelia", email: "risa@student.univ.ac.id", prodi: "Sistem Informasi", angkatan: 2022, status: "aktif", limitPinjam: 5, dendaSirkulasi: 5000, avatar: "RA", tglBergabung: "2023-09-15" },
  { nim: "220101003", nama: "Budi Santoso", email: "budi@student.univ.ac.id", prodi: "Teknik Informatika", angkatan: 2023, status: "aktif", limitPinjam: 5, dendaSirkulasi: 0, avatar: "BS", tglBergabung: "2024-02-01" },
  { nim: "220101004", nama: "Amelia Citra", email: "amel@student.univ.ac.id", prodi: "Ilmu Komunikasi", angkatan: 2021, status: "nonaktif", limitPinjam: 0, dendaSirkulasi: 15000, avatar: "AC", tglBergabung: "2022-09-08" },
  { nim: "220101005", nama: "Dodi Hermansyah", email: "dodi@student.univ.ac.id", prodi: "Sains Data", angkatan: 2023, status: "aktif", limitPinjam: 5, dendaSirkulasi: 0, avatar: "DH", tglBergabung: "2024-02-10" }
];

// Default Categories
const DEFAULT_CATEGORIES = ["Fiksi", "Sains", "Pendidikan", "Non-Fiksi", "Komik", "Sejarah", "Teknologi"];

// Default Authors
const DEFAULT_AUTHORS = [
  { id: 1, nama: "Pramoedya A. Toer", asal: "Indonesia", tglLahir: "1925-02-06", bio: "Sastrawan legendaris Indonesia penerima Ramon Magsaysay Award." },
  { id: 2, nama: "Halliday & Resnick", asal: "Amerika Serikat", tglLahir: "1916-01-11", bio: "Penulis buku fisika legendaris yang karyanya diterjemahkan ke puluhan bahasa." },
  { id: 3, nama: "Kenneth Rosen", asal: "Amerika Serikat", tglLahir: "1947-03-24", bio: "Matematikawan dan peneliti legendaris di AT&T Bell Laboratories." },
  { id: 4, nama: "Andrea Hirata", asal: "Indonesia", tglLahir: "1967-10-24", bio: "Penulis novel Laskar Pelangi yang melambungkan nama Belitung ke mata dunia." },
  { id: 5, nama: "A. Wicaksono", asal: "Indonesia", tglLahir: "1988-07-15", bio: "Praktisi & Dosen Rekayasa Perangkat Lunak senior di Indonesia." },
  { id: 6, nama: "Yuval Noah Harari", asal: "Israel", tglLahir: "1976-02-24", bio: "Sejarawan, filsuf, dan penulis buku terlaris internasional Sapiens." }
];

// Default Publishers
const DEFAULT_PUBLISHERS = [
  { id: 1, nama: "Lentera Dipantara", alamat: "Jakarta, Indonesia", email: "info@lenteradipantara.co.id", telp: "021-489088" },
  { id: 2, nama: "Erlangga", alamat: "Jakarta, Indonesia", email: "redaksi@erlangga.co.id", telp: "021-871245" },
  { id: 3, nama: "Bentang Pustaka", alamat: "Yogyakarta, Indonesia", email: "info@bentangpustaka.com", telp: "0274-88988" },
  { id: 4, nama: "Informatika", alamat: "Bandung, Indonesia", email: "kontak@informatikabandung.com", telp: "022-25032" },
  { id: 5, nama: "Gramedia Pustaka Utama", alamat: "Jakarta, Indonesia", email: "gpu@gramedia.com", telp: "021-53650" }
];

// Default Loans
const DEFAULT_LOANS = [
  { id: 101, nim: "220101001", namaAnggota: "Farhan Syah", bookId: 1, judulBuku: "Bumi Manusia", tglPinjam: "2026-05-10", tglTenggat: "2026-05-24", tglKembali: null, denda: 0, status: "aktif" },
  { id: 102, nim: "220101002", namaAnggota: "Risa Amelia", bookId: 2, judulBuku: "Fisika Dasar Jilid 1", tglPinjam: "2026-05-02", tglTenggat: "2026-05-16", tglKembali: null, denda: 5000, status: "terlambat" },
  { id: 103, nim: "220101003", namaAnggota: "Budi Santoso", bookId: 3, judulBuku: "Matematika Diskrit", tglPinjam: "2026-04-20", tglTenggat: "2026-05-04", tglKembali: "2026-05-03", denda: 0, status: "kembali" },
  { id: 104, nim: "220101001", namaAnggota: "Farhan Syah", bookId: 5, judulBuku: "Pemrograman Web", tglPinjam: "2026-05-20", tglTenggat: "2026-06-03", tglKembali: null, denda: 0, status: "aktif" }
];

// Default Reservations
const DEFAULT_RESERVATIONS = [
  { id: 201, nim: "220101002", namaAnggota: "Risa Amelia", bookId: 4, judulBuku: "Laskar Pelangi", tglPesan: "2026-05-22", antrean: 1, status: "menunggu" },
  { id: 202, nim: "220101005", namaAnggota: "Dodi Hermansyah", bookId: 2, judulBuku: "Fisika Dasar Jilid 1", tglPesan: "2026-05-23", antrean: 2, status: "dikonfirmasi" }
];

// Default Fines
const DEFAULT_FINES = [
  { id: 301, nim: "220101002", namaAnggota: "Risa Amelia", judulBuku: "Fisika Dasar Jilid 1", jumlah: 5000, status: "belum-bayar", tglDenda: "2026-05-17" },
  { id: 302, nim: "220101004", namaAnggota: "Amelia Citra", judulBuku: "Aljabar Linear", jumlah: 15000, status: "belum-bayar", tglDenda: "2026-05-05" },
  { id: 303, nim: "220101001", namaAnggota: "Farhan Syah", judulBuku: "Sejarah Nusantara", jumlah: 2000, status: "lunas", tglDenda: "2026-04-12" }
];

// Default Announcements
const DEFAULT_ANNOUNCEMENTS = [
  { id: 1, judul: "Libur Hari Raya Waisak 2026", isi: "Diberitahukan kepada seluruh anggota perpustakaan Lexora, bahwa pelayanan operasional perpustakaan akan diliburkan sementara pada tanggal 27-28 Mei 2026. Peminjaman online tetap aktif namun pengembalian ditoleransi tanpa denda pada hari libur tersebut.", tgl: "2026-05-24", kategori: "Pengumuman Resmi" },
  { id: 2, judul: "Pengadaan Buku Referensi Teknik & Komputer", isi: "Perpustakaan baru saja mendatangkan 150+ buku referensi sains komputer dan pemrograman terbaru di Rak C. Silakan kunjungi halaman katalog 'Buku Terbaru' untuk mengecek daftarnya dan melakukan reservasi langsung.", tgl: "2026-05-18", kategori: "Koleksi Baru" },
  { id: 3, judul: "Sosialisasi Program Literasi Kampus Sem. II", isi: "Yuk ikuti webinar bedah buku 'Sapiens' bersama narasumber dosen sejarah pada hari Jumat ini pukul 14:00 WIB via Zoom. Dapatkan e-certificate dan voucher souvenir perpustakaan!", tgl: "2026-05-12", kategori: "Acara" }
];

// Default Settings
const DEFAULT_SETTINGS = {
  namaPerpustakaan: "Perpustakaan Universitas Lexora",
  dendaPerHari: 1000,
  maxHariPinjam: 14,
  limitPinjamBuku: 5,
  jamBuka: "08:00 - 17:00",
  alamat: "Jl. Pendidikan Raya No. 45, Gedung Rektorat Lt. 2",
  kontak: "info@lexora.univ.ac.id | 021-98765432"
};

// Database class to interact with localStorage
export const db = {
  getBooks: () => getStorageItem("lexora_books", DEFAULT_BOOKS),
  saveBooks: (books) => setStorageItem("lexora_books", books),
  
  getMembers: () => getStorageItem("lexora_members", DEFAULT_MEMBERS),
  saveMembers: (members) => setStorageItem("lexora_members", members),
  
  getCategories: () => getStorageItem("lexora_categories", DEFAULT_CATEGORIES),
  saveCategories: (cats) => setStorageItem("lexora_categories", cats),
  
  getAuthors: () => getStorageItem("lexora_authors", DEFAULT_AUTHORS),
  saveAuthors: (authors) => setStorageItem("lexora_authors", authors),
  
  getPublishers: () => getStorageItem("lexora_publishers", DEFAULT_PUBLISHERS),
  savePublishers: (pubs) => setStorageItem("lexora_publishers", pubs),
  
  getLoans: () => getStorageItem("lexora_loans", DEFAULT_LOANS),
  saveLoans: (loans) => setStorageItem("lexora_loans", loans),
  
  getReservations: () => getStorageItem("lexora_reservations", DEFAULT_RESERVATIONS),
  saveReservations: (res) => setStorageItem("lexora_reservations", res),
  
  getFines: () => getStorageItem("lexora_fines", DEFAULT_FINES),
  saveFines: (fines) => setStorageItem("lexora_fines", fines),
  
  getAnnouncements: () => getStorageItem("lexora_announcements", DEFAULT_ANNOUNCEMENTS),
  saveAnnouncements: (anns) => setStorageItem("lexora_announcements", anns),
  
  getSettings: () => getStorageItem("lexora_settings", DEFAULT_SETTINGS),
  saveSettings: (settings) => setStorageItem("lexora_settings", settings)
};
