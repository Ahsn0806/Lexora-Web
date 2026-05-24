import React, { useState } from 'react';
import { db } from '../../data/mockData';

export function EditBookPage({ setPage, bookId }) {
  const books = db.getBooks();
  const book = books.find(b => b.id === Number(bookId)) || books[0];
  const [judul, setJudul] = useState(book.judul);
  const [stok, setStok] = useState(book.stok);
  const [rak, setRak] = useState(book.rak);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = books.map(b => {
      if (b.id === book.id) return { ...b, judul, stok: Number(stok), rak };
      return b;
    });
    db.saveBooks(updated);
    setPage('kelola-buku');
  };

  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-4">Edit Data Buku</div>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label text-muted fw-semibold">Judul Buku</label><input type="text" className="form-control" value={judul} onChange={(e) => setJudul(e.target.value)} required /></div>
          <div className="row mb-4">
            <div className="col-md-6 mb-3 mb-md-0"><label className="form-label text-muted fw-semibold">Jumlah Stok</label><input type="number" className="form-control" value={stok} onChange={(e) => setStok(e.target.value)} required /></div>
            <div className="col-md-6"><label className="form-label text-muted fw-semibold">Lokasi Rak</label><input type="text" className="form-control" value={rak} onChange={(e) => setRak(e.target.value)} required /></div>
          </div>
          <div className="d-flex gap-2 justify-content-end">
            <button type="button" className="btn btn-light rounded-3 px-4 border" onClick={() => setPage('kelola-buku')}>Batal</button>
            <button type="submit" className="btn btn-lexora rounded-3 px-4">Simpan Perubahan</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default EditBookPage;
