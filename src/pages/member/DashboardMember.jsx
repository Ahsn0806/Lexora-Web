import React from 'react';
import { STATIC_BOOKS } from '../../data/books';
import StatusBadge from '../../components/StatusBadge';

function DashboardMember({ setPage }) {
  const sedangDipinjam = STATIC_BOOKS.filter(b => b.status === "dipinjam").slice(0,2);

  return (
    <main>
      <div className="page-label">Dashboard Anggota</div>

      {/* Stat cards */}
      <div className="row g-3 mb-4">
        {[
          { icon:"bi-book-half", color:"#185FA5", val:2, lbl:"Sedang Dipinjam" },
          { icon:"bi-clock",     color:"#c47d00", val:1, lbl:"Jatuh Tempo" },
          { icon:"bi-clock-history", color:"#1a7a4a", val:14, lbl:"Total Riwayat" },
          { icon:"bi-receipt",   color:"#9b2626", val:"Rp 0", lbl:"Denda Aktif" },
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

      <div className="row g-3">
        {/* Sedang dipinjam */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-3 h-100">
            <div className="card-body d-flex flex-column">
              <h6 className="fw-bold mb-3" style={{color:"#1e2638"}}>
                <i className="bi bi-book-half me-2 text-primary" />Sedang Dipinjam
              </h6>
              <div className="flex-grow-1 d-flex flex-column justify-content-center">
                {sedangDipinjam.length === 0 ? (
                  <div className="empty-state py-3">
                    <i className="bi bi-inbox text-muted" />
                    <p className="mb-0">Tidak ada buku yang dipinjam</p>
                  </div>
                ) : sedangDipinjam.map(b => (
                  <div key={b.id} className="d-flex gap-3 align-items-center py-2 border-bottom">
                    <div style={{width:40,height:54,background:b.cover,borderRadius:6,
                      display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <i className="bi bi-book" style={{color:"#8892b0"}} />
                    </div>
                    <div className="flex-grow-1">
                      <div style={{fontSize:13,fontWeight:600,color:"#1e2638"}}>{b.judul}</div>
                      <div style={{fontSize:11,color:"#888"}}>{b.pengarang}</div>
                      <div style={{fontSize:11,color:"#c47d00"}}>Kembali: 18 Mei 2026</div>
                    </div>
                    <StatusBadge status="dipinjam" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Riwayat */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-3 h-100">
            <div className="card-body d-flex flex-column">
              <h6 className="fw-bold mb-3" style={{color:"#1e2638"}}>
                <i className="bi bi-clock-history me-2 text-success" />Riwayat Peminjaman
              </h6>
              <div className="flex-grow-1">
                <table className="table lexora-table mb-0">
                  <thead>
                    <tr><th>Judul</th><th>Tgl Kembali</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Laskar Pelangi</td><td>01/04</td><td><StatusBadge status="tersedia" /></td></tr>
                    <tr><td>Mat. Diskrit</td><td>10/03</td><td><StatusBadge status="tersedia" /></td></tr>
                    <tr><td>Kimia Organik</td><td>15/02</td><td><StatusBadge status="dipinjam" /></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardMember;
