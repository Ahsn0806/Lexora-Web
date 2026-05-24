import React from 'react';
import StatusBadge from '../../components/StatusBadge';

function DashboardAdmin() {
  return (
    <main>
      <div className="page-label">Dashboard Admin</div>
      <div className="row g-3 mb-4">
        {[
          { icon:"bi-journal-bookmark", color:"#185FA5", val:248, lbl:"Total Buku" },
          { icon:"bi-people",           color:"#1a7a4a", val:312, lbl:"Total Anggota" },
          { icon:"bi-book-half",        color:"#c47d00", val:47,  lbl:"Sedang Dipinjam" },
          { icon:"bi-receipt",          color:"#9b2626", val:8,   lbl:"Denda Belum Bayar" },
        ].map((s,i) => (
          <div className="col-6 col-md-3" key={i}>
            <div className="stat-card h-100 d-flex flex-column justify-content-between">
              <div>
                <i className={`bi ${s.icon} stat-icon`} style={{color:s.color}} />
                <div className="stat-val">{s.val}</div>
              </div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body">
          <h6 className="fw-bold mb-3" style={{color:"#1e2638"}}>
            <i className="bi bi-clock-history me-2" />Peminjaman Terbaru
          </h6>
          <table className="table lexora-table">
            <thead><tr><th>Anggota</th><th>Judul Buku</th><th>Tgl Pinjam</th><th>Jatuh Tempo</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>Andi R.</td><td>Bumi Manusia</td><td>04/05</td><td>18/05</td><td><StatusBadge status="tersedia" /></td></tr>
              <tr><td>Siti M.</td><td>Fisika Dasar</td><td>01/05</td><td>12/05</td><td><StatusBadge status="dipinjam" /></td></tr>
              <tr><td>Budi S.</td><td>Laskar Pelangi</td><td>28/04</td><td>09/05</td><td><StatusBadge status="habis" /></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default DashboardAdmin;
