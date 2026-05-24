import React from 'react';
import { db } from '../../data/mockData';

export function MemberDetailsAdminPage({ setPage, selectedNim }) {
  const members = db.getMembers();
  const m = members.find(x => x.nim === selectedNim) || members[0];
  const loans = db.getLoans().filter(l => l.nim === m.nim);

  return (
    <main className="container-fluid py-4">
      <button className="btn btn-link text-decoration-none text-muted mb-3 p-0" onClick={() => setPage('kelola-anggota')}>
        <i className="bi bi-arrow-left me-1"></i> Kembali ke Kelola Anggota
      </button>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
        <h4 className="fw-bold mb-4">Informasi Profil Anggota (Admin)</h4>
        <div className="row g-4 text-sm text-muted">
          <div className="col-md-3 text-center">
            <div className="user-avatar rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
              {m.avatar}
            </div>
            <h5 className="fw-bold text-dark mb-1">{m.nama}</h5>
            <small>{m.nim}</small>
          </div>
          <div className="col-md-9 border-start ps-md-4">
            <div className="row mb-3">
              <div className="col-sm-6 mb-2"><strong>Email:</strong> {m.email}</div>
              <div className="col-sm-6 mb-2"><strong>Prodi:</strong> {m.prodi}</div>
              <div className="col-sm-6 mb-2"><strong>Angkatan:</strong> {m.angkatan}</div>
              <div className="col-sm-6 mb-2"><strong>Kewajiban Denda:</strong> Rp {m.dendaSirkulasi.toLocaleString()}</div>
            </div>
            <hr />
            <h6 className="fw-bold text-dark mb-3">Riwayat Transaksi Aktif</h6>
            <div className="table-responsive">
              <table className="table table-striped table-sm text-sm">
                <thead><tr><th>ID Pinjam</th><th>Buku</th><th>Tgl Pinjam</th><th>Tenggat</th></tr></thead>
                <tbody>
                  {loans.map(l => (
                    <tr key={l.id}>
                      <td>{l.id}</td><td>{l.judulBuku}</td><td>{l.tglPinjam}</td><td>{l.tglTenggat}</td>
                    </tr>
                  ))}
                  {loans.length === 0 && <tr><td colSpan="4" className="text-center text-muted">Belum ada peminjaman aktif.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MemberDetailsAdminPage;
