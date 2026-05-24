import React, { useState } from 'react';
import { db } from '../../data/mockData';

export function EditMemberPage({ setPage, selectedNim }) {
  const members = db.getMembers();
  const m = members.find(x => x.nim === selectedNim) || members[0];
  const [nama, setNama] = useState(m.nama);
  const [email, setEmail] = useState(m.email);
  const [prodi, setProdi] = useState(m.prodi);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = members.map(x => {
      if (x.nim === m.nim) return { ...x, nama, email, prodi };
      return x;
    });
    db.saveMembers(updated);
    setPage('kelola-anggota');
  };

  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-4">Edit Data Anggota</div>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label text-muted fw-semibold">Nama Lengkap</label><input type="text" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} required /></div>
          <div className="mb-3"><label className="form-label text-muted fw-semibold">Email Student</label><input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
          <div className="mb-4"><label className="form-label text-muted fw-semibold">Program Studi</label><input type="text" className="form-control" value={prodi} onChange={(e) => setProdi(e.target.value)} required /></div>
          <div className="d-flex gap-2 justify-content-end">
            <button type="button" className="btn btn-light rounded-3 px-4 border" onClick={() => setPage('kelola-anggota')}>Batal</button>
            <button type="submit" className="btn btn-lexora rounded-3 px-4">Simpan Perubahan</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default EditMemberPage;
