import React, { useState } from 'react';
import { db } from '../../data/mockData';

export function AddCategoryPage({ setPage }) {
  const [kategori, setKategori] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const categories = db.getCategories();
    db.saveCategories([...categories, kategori]);
    setPage('kelola-kategori');
  };
  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-4">Tambah Kategori Buku Baru</div>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '500px' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label text-muted fw-semibold">Nama Kategori / Genre</label>
            <input type="text" className="form-control rounded-3" value={kategori} onChange={(e) => setKategori(e.target.value)} required />
          </div>
          <div className="d-flex gap-2 justify-content-end">
            <button type="button" className="btn btn-light rounded-3 px-4 border" onClick={() => setPage('kelola-kategori')}>Batal</button>
            <button type="submit" className="btn btn-lexora rounded-3 px-4">Simpan Kategori</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AddCategoryPage;
