import React from 'react';
import { db } from '../../data/mockData';

const getActiveUser = () => {
  const members = db.getMembers();
  return members[0]; // Farhan Syah
};

export function BorrowingHistoryPage() {
  const user = getActiveUser();
  const loans = db.getLoans().filter(l => l.nim === user.nim);
  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-3">Riwayat Transaksi Peminjaman</div>
      <p className="text-muted text-sm mb-4">Log kompresif seluruh aktivitas sirkulasi penyerahan & pengembalian buku Anda.</p>
      <div className="card border-0 shadow-sm rounded-4 p-0 bg-white">
        <table className="table lexora-table mb-0">
          <thead><tr><th>ID</th><th>Buku</th><th>Tanggal Pinjam</th><th>Pengembalian Aktual</th><th>Status</th></tr></thead>
          <tbody>
            {loans.map(l => (
              <tr key={l.id}>
                <td>{l.id}</td><td><strong>{l.judulBuku}</strong></td><td>{l.tglPinjam}</td><td>{l.tglKembali || '—'}</td>
                <td><span className={`badge rounded-pill ${l.status === 'kembali' ? 'bg-success' : 'bg-warning'}`}>{l.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default BorrowingHistoryPage;
