import React from 'react';
import { db } from '../../data/mockData';

const getActiveUser = () => {
  const members = db.getMembers();
  return members[0]; // Farhan Syah
};

export function FinesHistoryPage({ setPage }) {
  const user = getActiveUser();
  const fines = db.getFines().filter(f => f.nim === user.nim);
  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-3">Histori Denda Anggota</div>
      <div className="card border-0 shadow-sm rounded-4 p-0 bg-white">
        <table className="table lexora-table mb-0">
          <thead><tr><th>Buku</th><th>Tanggal Tagihan</th><th>Jumlah Tagihan</th><th>Status</th><th>Aksi</th></tr></thead>
          <tbody>
            {fines.map(f => (
              <tr key={f.id}>
                <td><strong>{f.judulBuku}</strong></td><td>{f.tglDenda}</td><td>Rp {f.jumlah.toLocaleString()}</td>
                <td><span className={`badge rounded-pill ${f.status === 'lunas' ? 'bg-success' : 'bg-danger'}`}>{f.status}</span></td>
                <td>
                  {f.status !== 'lunas' ? (
                    <button className="btn btn-lexora btn-lexora-sm rounded-2 py-1" onClick={() => setPage('fine-payment')}>Bayar</button>
                  ) : <span className="text-muted text-xs">—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default FinesHistoryPage;
