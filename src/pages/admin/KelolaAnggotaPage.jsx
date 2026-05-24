import React, { useState } from 'react';
import { db } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';

function KelolaAnggotaPage({ setPage, setSelectedNim }) {
  const members = db.getMembers();
  const [filter, setFilter] = useState("Semua");

  const filtered = filter === "Semua" ? members : members.filter(m => m.status === filter.toLowerCase());

  return (
    <main className="container-fluid py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="page-label" style={{marginBottom:0}}>Kelola Anggota</div>
        <button className="btn btn-lexora btn-lexora-sm rounded-3" onClick={() => setPage('add-member')}>
          <i className="bi bi-person-plus me-1" /> Tambah Anggota
        </button>
      </div>
      <div className="chip-row mb-3">
        {["Semua","Aktif","Nonaktif"].map(f => (
          <button key={f} type="button"
            className={`chip ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table lexora-table mb-0">
              <thead><tr><th>Nama</th><th>Email</th><th>NIM</th><th>Status</th><th>Aksi</th></tr></thead>
              <tbody>
                {filtered.map(m => (
                  <tr key={m.nim}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="user-avatar" style={{width:28,height:28,fontSize:11, background: '#cbd5e1', color: '#334155'}}>
                          {m.avatar}
                        </div>
                        <span style={{fontWeight:500}}>{m.nama}</span>
                      </div>
                    </td>
                    <td style={{fontSize:12}}>{m.email}</td>
                    <td style={{fontSize:12}}>{m.nim}</td>
                    <td><StatusBadge status={m.status === "aktif" ? "tersedia" : "habis"} /></td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm p-0" style={{color:"#185FA5",background:"none",border:"none"}} onClick={() => { setSelectedNim(m.nim); setPage('member-details-admin'); }} title="Detail Profil">
                          <i className="bi bi-eye" style={{fontSize:15}} />
                        </button>
                        <button className="btn btn-sm p-0" style={{color:"#555",background:"none",border:"none"}} onClick={() => { setSelectedNim(m.nim); setPage('edit-member'); }} title="Edit Profil">
                          <i className="bi bi-pencil-square" style={{fontSize:15}} />
                        </button>
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

export default KelolaAnggotaPage;
