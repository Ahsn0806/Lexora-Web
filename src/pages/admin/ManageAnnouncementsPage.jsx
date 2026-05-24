import React from 'react';
import { db } from '../../data/mockData';

export function ManageAnnouncementsPage({ setPage }) {
  const anns = db.getAnnouncements();
  return (
    <main className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="page-label mb-0">Kelola Pengumuman Dashboard</div>
        <button className="btn btn-lexora btn-lexora-sm rounded-3" onClick={() => setPage('add-pengumuman')}>
          <i className="bi bi-plus-lg me-1"></i> Tambah Pengumuman
        </button>
      </div>
      <div className="card border-0 shadow-sm rounded-4 p-0 bg-white">
        <table className="table lexora-table mb-0">
          <thead><tr><th>Kategori</th><th>Judul Berita</th><th>Tanggal Rilis</th></tr></thead>
          <tbody>
            {anns.map(a => (
              <tr key={a.id}>
                <td><span className="badge bg-secondary rounded-pill">{a.kategori}</span></td><td><strong>{a.judul}</strong></td><td>{a.tgl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default ManageAnnouncementsPage;
