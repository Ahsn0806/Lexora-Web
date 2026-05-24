import React, { useState } from 'react';
import { db } from '../../data/mockData';

export function AddBookPage({ setPage }) {
  const [judul, setJudul] = useState('');
  const [pengarang, setPengarang] = useState('');
  const [penerbit, setPenerbit] = useState('');
  const [kategori, setKategori] = useState('Fiksi');
  const [stok, setStok] = useState(1);
  const [rak, setRak] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const books = db.getBooks();
    const newBook = {
      id: Date.now(),
      judul, pengarang, penerbit, kategori,
      stok: Number(stok), status: 'tersedia',
      cover: '#e8edf5', icon: 'bi-book',
      isbn: '978-' + Math.floor(Math.random() * 1000000000),
      tahun: 2026, halaman: 320, rak, deskripsi
    };
    db.saveBooks([...books, newBook]);
    setPage('kelola-buku');
  };

  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-4">Tambah Buku Baru (Database)</div>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label text-muted fw-semibold">Judul Buku</label><input type="text" className="form-control" value={judul} onChange={(e) => setJudul(e.target.value)} required /></div>
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0"><label className="form-label text-muted fw-semibold">Pengarang</label><input type="text" className="form-control" value={pengarang} onChange={(e) => setPengarang(e.target.value)} required /></div>
            <div className="col-md-6"><label className="form-label text-muted fw-semibold">Penerbit</label><input type="text" className="form-control" value={penerbit} onChange={(e) => setPenerbit(e.target.value)} required /></div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0"><label className="form-label text-muted fw-semibold">Kategori</label><input type="text" className="form-control" value={kategori} onChange={(e) => setKategori(e.target.value)} required /></div>
            <div className="col-md-3 mb-3 mb-md-0"><label className="form-label text-muted fw-semibold">Stok</label><input type="number" className="form-control" value={stok} onChange={(e) => setStok(e.target.value)} required /></div>
            <div className="col-md-3"><label className="form-label text-muted fw-semibold">Rak</label><input type="text" className="form-control" value={rak} onChange={(e) => setRak(e.target.value)} required /></div>
          </div>
          <div className="mb-4"><label className="form-label text-muted fw-semibold">Sinopsis Buku</label><textarea className="form-control" rows="3" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} required></textarea></div>
          <div className="d-flex gap-2 justify-content-end">
            <button type="button" className="btn btn-light rounded-3 px-4 border" onClick={() => setPage('kelola-buku')}>Batal</button>
            <button type="submit" className="btn btn-lexora rounded-3 px-4">Simpan Buku</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AddBookPage;
