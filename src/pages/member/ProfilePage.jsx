import React from 'react';
import { db } from '../../data/mockData';

const getActiveUser = () => {
  const members = db.getMembers();
  return members[0]; // Farhan Syah
};

export function ProfilePage({ setPage }) {
  const user = getActiveUser();
  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-4">Profil Detail Saya</div>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '600px' }}>
        <div className="d-flex align-items-center gap-3 mb-4">
          <div className="user-avatar bg-primary text-white fs-3" style={{ width: '60px', height: '60px' }}>{user.avatar}</div>
          <div><h5 className="fw-bold mb-1">{user.nama}</h5><small className="text-muted">NIM. {user.nim}</small></div>
        </div>
        <hr />
        <div className="mb-4 text-muted text-sm">
          <div className="mb-2"><strong>Email:</strong> {user.email}</div>
          <div className="mb-2"><strong>Program Studi:</strong> {user.prodi}</div>
          <div className="mb-2"><strong>Angkatan Kampus:</strong> {user.angkatan}</div>
          <div className="mb-2"><strong>Status Keanggotaan:</strong> <span className="badge bg-success rounded-pill">Aktif</span></div>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-lexora rounded-3 px-4" onClick={() => setPage('edit-profile')}>Edit Data</button>
          <button className="btn btn-light border rounded-3 px-4" onClick={() => setPage('change-password')}>Keamanan</button>
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
