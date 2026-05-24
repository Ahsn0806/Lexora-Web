import React, { useState } from 'react';
import { db } from '../../data/mockData';

const getActiveUser = () => {
  const members = db.getMembers();
  return members[0]; // Farhan Syah
};

export function EditProfilePage({ setPage }) {
  const user = getActiveUser();
  const [nama, setNama] = useState(user.nama);
  const [email, setEmail] = useState(user.email);
  const [prodi, setProdi] = useState(user.prodi);

  const handleSave = (e) => {
    e.preventDefault();
    const members = db.getMembers();
    const updated = members.map(m => {
      if (m.nim === user.nim) return { ...m, nama, email, prodi };
      return m;
    });
    db.saveMembers(updated);
    setPage('profile');
  };

  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-4">Edit Data Profil Saya</div>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSave}>
          <div className="mb-3"><label className="form-label text-muted fw-semibold">Nama Lengkap</label><input type="text" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} required /></div>
          <div className="mb-3"><label className="form-label text-muted fw-semibold">Email Student</label><input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
          <div className="mb-4"><label className="form-label text-muted fw-semibold">Program Studi</label><input type="text" className="form-control" value={prodi} onChange={(e) => setProdi(e.target.value)} required /></div>
          <div className="d-flex gap-2 justify-content-end">
            <button type="button" className="btn btn-light rounded-3 px-4 border" onClick={() => setPage('profile')}>Batal</button>
            <button type="submit" className="btn btn-lexora rounded-3 px-4">Simpan</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default EditProfilePage;
