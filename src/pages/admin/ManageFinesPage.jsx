import React from 'react';
import { db } from '../../data/mockData';

export function ManageFinesPage({ setPage }) {
  const fines = db.getFines();
  const handleVerify = (id) => {
    const updated = fines.map(f => {
      if (f.id === id) return { ...f, status: 'lunas' };
      return f;
    });
    db.saveFines(updated);
    setPage('kelola-denda'); // force refresh
  };

  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-3">Kelola Kas Denda Perpustakaan</div>
      <div className="card border-0 shadow-sm rounded-4 p-0 bg-white">
        <table className="table lexora-table mb-0">
          <thead><tr><th>ID</th><th>Anggota</th><th>Buku</th><th>Tagihan</th><th>Status</th><th>Aksi</th></tr></thead>
          <tbody>
            {fines.map(f => (
              <tr key={f.id}>
                <td>{f.id}</td><td><strong>{f.namaAnggota}</strong></td><td>{f.judulBuku}</td><td>Rp {f.jumlah.toLocaleString()}</td>
                <td><span className={`badge rounded-pill ${f.status === 'lunas' ? 'bg-success' : 'bg-danger'}`}>{f.status}</span></td>
                <td>
                  {f.status !== 'lunas' ? (
                    <button className="btn btn-lexora btn-lexora-sm rounded-2 py-1" onClick={() => handleVerify(f.id)}>Verifikasi Lunas</button>
                  ) : <span className="text-muted">—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default ManageFinesPage;
