import React, { useState } from 'react';
import { db } from '../../data/mockData';

export function AddAnnouncementPage({ setPage }) {
  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState('Pengumuman Resmi');
  const [isi, setIsi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const anns = db.getAnnouncements();
    db.saveAnnouncements([...anns, { id: Date.now(), judul, isi, kategori, tgl: new Date().toISOString().split('T')[0] }]);
    setPage('kelola-pengumuman');
  };

  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-4">Buat Pengumuman Baru</div>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label text-muted fw-semibold">Judul Pengumuman</label><input type="text" className="form-control" value={judul} onChange={(e) => setJudul(e.target.value)} required /></div>
          <div className="mb-3">
            <label className="form-label text-muted fw-semibold">Kategori Berita</label>
            <select className="form-select" value={kategori} onChange={(e) => setKategori(e.target.value)}>
              <option value="Pengumuman Resmi">Pengumuman Resmi</option>
              <option value="Koleksi Baru">Koleksi Baru</option>
              <option value="Acara">Acara</option>
            </select>
          </div>
          <div className="mb-4"><label className="form-label text-muted fw-semibold">Isi Pengumuman</label><textarea className="form-control" rows="4" value={isi} onChange={(e) => setIsi(e.target.value)} required></textarea></div>
          <div className="d-flex gap-2 justify-content-end">
            <button type="button" className="btn btn-light rounded-3 px-4 border" onClick={() => setPage('kelola-pengumuman')}>Batal</button>
            <button type="submit" className="btn btn-lexora rounded-3 px-4">Kirim</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AddAnnouncementPage;
