import React from 'react';
import { db } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';

function KelolaPeminjamanPage({ setPage, setSelectedReceipt }) {
  const loans = db.getLoans();
  const activeLoans = loans.filter(l => l.tglKembali === null);

  const handleReturn = (loanId) => {
    // Return book physically in mock DB
    const allLoans = db.getLoans();
    const l = allLoans.find(x => x.id === loanId);
    if (!l) return;

    const tglToday = new Date().toISOString().split('T')[0];
    const updatedLoans = allLoans.map(x => {
      if (x.id === l.id) return { ...x, tglKembali: tglToday, status: 'kembali' };
      return x;
    });
    db.saveLoans(updatedLoans);

    const books = db.getBooks();
    const updatedBooks = books.map(b => {
      if (b.id === l.bookId) return { ...b, stok: b.stok + 1, status: 'tersedia' };
      return b;
    });
    db.saveBooks(updatedBooks);

    setSelectedReceipt(l);
    setPage('loan-details-admin');
  };

  return (
    <main className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="page-label mb-0">Manajemen Sirkulasi Buku</div>
        <button className="btn btn-lexora btn-lexora-sm rounded-3" onClick={() => setPage('add-loan')}>
          <i className="bi bi-plus-lg me-1"></i> Input Peminjaman Baru
        </button>
      </div>

      <div className="card border-0 shadow-sm rounded-4 bg-white">
        <div className="card-body p-4">
          <h6 className="fw-bold mb-3 text-dark"><i className="bi bi-arrow-left-right text-primary me-2"></i> Transaksi Aktif Perpustakaan</h6>
          <div className="table-responsive">
            <table className="table lexora-table mb-0">
              <thead><tr><th>Peminjam</th><th>Buku</th><th>Tgl Pinjam</th><th>Tenggat</th><th>Status</th><th>Aksi</th></tr></thead>
              <tbody>
                {activeLoans.map(l => (
                  <tr key={l.id}>
                    <td><strong>{l.namaAnggota}</strong><br /><small className="text-muted">{l.nim}</small></td>
                    <td>{l.judulBuku}</td>
                    <td>{l.tglPinjam}</td>
                    <td>{l.tglTenggat}</td>
                    <td><StatusBadge status={new Date(l.tglTenggat) < new Date() ? 'terlambat' : 'dipinjam'} /></td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="btn btn-lexora btn-lexora-sm rounded-2 py-1 px-2" onClick={() => handleReturn(l.id)}>Kembalikan</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default KelolaPeminjamanPage;
