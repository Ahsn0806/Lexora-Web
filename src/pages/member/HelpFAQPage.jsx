import React from 'react';

export function HelpFAQPage() {
  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-3">Bantuan & FAQ Pengguna</div>
      <div className="d-flex flex-column gap-3 text-sm text-muted leading-relaxed" style={{ maxWidth: '800px' }}>
        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
          <h6 className="fw-bold text-dark mb-2">Bagaimana cara meminjam buku fisik di Lexora?</h6>
          <p className="mb-0">Cari buku melalui Katalog, klik detail buku, lalu isi Form Pemesanan Buku. Struk digital peminjaman akan terbit. Tunjukkan kartu anggota digital di loket sirkulasi perpustakaan rektorat lantai 2 untuk serah terima buku fisik.</p>
        </div>
        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
          <h6 className="fw-bold text-dark mb-2">Berapa batas hari durasi pengembalian?</h6>
          <p className="mb-0">Maksimal durasi peminjaman standar adalah 14 hari sejak buku diterima. Keterlambatan melewati tenggat waktu dikenakan sanksi denda administrasi Rp 1.000 per hari.</p>
        </div>
      </div>
    </main>
  );
}

export default HelpFAQPage;
