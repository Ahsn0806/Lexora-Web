import React from 'react';

export function LoanDetailsAdminPage({ setPage, selectedReceipt }) {
  const l = selectedReceipt || { id: 'N/A', namaAnggota: 'Anggota', nim: '—', judulBuku: 'Buku', tglPinjam: '2026-05-24', tglTenggat: '2026-06-07' };
  return (
    <main className="container-fluid py-4">
      <button className="btn btn-link text-decoration-none text-muted mb-3 p-0" onClick={() => setPage('kelola-peminjaman')}>
        <i className="bi bi-arrow-left me-1"></i> Kembali ke Kelola Sirkulasi
      </button>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '500px' }}>
        <h5 className="fw-bold mb-4 text-dark"><i className="bi bi-file-earmark-text text-primary me-2"></i> Rincian Struk Sirkulasi</h5>
        <div className="mb-2"><strong>ID Sirkulasi:</strong> {l.id}</div>
        <div className="mb-2"><strong>Nama Anggota:</strong> {l.namaAnggota} ({l.nim})</div>
        <div className="mb-2"><strong>Judul Buku:</strong> {l.judulBuku}</div>
        <div className="mb-2"><strong>Tanggal Peminjaman:</strong> {l.tglPinjam}</div>
        <div className="mb-4"><strong>Batas Tenggat Kembali:</strong> <span className="text-danger fw-bold">{l.tglTenggat}</span></div>
        <button className="btn btn-lexora rounded-3 w-100 py-2" onClick={() => window.print()}>Cetak Salinan Struk</button>
      </div>
    </main>
  );
}

export default LoanDetailsAdminPage;
