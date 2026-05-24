import React, { useState } from 'react';
import { db } from '../../data/mockData';

export function AddMemberPage({ setPage }) {
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [email, setEmail] = useState('');
  const [prodi, setProdi] = useState('');
  const [angkatan, setAngkatan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const members = db.getMembers();
    db.saveMembers([...members, {
      nim, nama, email, prodi, angkatan: Number(angkatan),
      status: 'aktif', limitPinjam: 5, dendaSirkulasi: 0,
      avatar: nama.split(" ").map(x=>x[0]).join("").substring(0,2).toUpperCase(),
      tglBergabung: new Date().toISOString().split('T')[0]
    }]);
    setPage('kelola-anggota');
  };

  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-4">Tambah Anggota Baru</div>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label text-muted fw-semibold">Nama Lengkap</label><input type="text" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} required /></div>
          <div className="mb-3"><label className="form-label text-muted fw-semibold">NIM</label><input type="text" className="form-control" value={nim} onChange={(e) => setNim(e.target.value)} required /></div>
          <div className="mb-3"><label className="form-label text-muted fw-semibold">Email Student</label><input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
          <div className="row mb-4">
            <div className="col-md-6 mb-3 mb-md-0"><label className="form-label text-muted fw-semibold">Prodi</label><input type="text" className="form-control" value={prodi} onChange={(e) => setProdi(e.target.value)} required /></div>
            <div className="col-md-6"><label className="form-label text-muted fw-semibold">Angkatan</label><input type="number" className="form-control" value={angkatan} onChange={(e) => setAngkatan(e.target.value)} required /></div>
          </div>
          <div className="d-flex gap-2 justify-content-end">
            <button type="button" className="btn btn-light rounded-3 px-4 border" onClick={() => setPage('kelola-anggota')}>Batal</button>
            <button type="submit" className="btn btn-lexora rounded-3 px-4">Simpan</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AddMemberPage;
