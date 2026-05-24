import React, { useState } from 'react';
import { db } from '../../data/mockData';

export function AdvancedSearchPage({ setPage, setSelectedBook }) {
  const books = db.getBooks();
  const [judul, setJudul] = useState('');
  const [pengarang, setPengarang] = useState('');
  const [isbn, setIsbn] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = books.filter(b => {
      const matchJ = !judul || b.judul.toLowerCase().includes(judul.toLowerCase());
      const matchP = !pengarang || b.pengarang.toLowerCase().includes(pengarang.toLowerCase());
      const matchI = !isbn || b.isbn.includes(isbn);
      return matchJ && matchP && matchI;
    });
    setResults(filtered);
    setSearched(true);
  };

  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-3">Pencarian Buku Lanjutan</div>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4" style={{ maxWidth: '700px' }}>
        <form onSubmit={handleSearch}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label text-muted fw-semibold">Judul Buku</label>
              <input type="text" className="form-control" value={judul} onChange={(e) => setJudul(e.target.value)} placeholder="Kata kunci judul..." />
            </div>
            <div className="col-md-6">
              <label className="form-label text-muted fw-semibold">Nama Pengarang</label>
              <input type="text" className="form-control" value={pengarang} onChange={(e) => setPengarang(e.target.value)} placeholder="Nama penulis..." />
            </div>
            <div className="col-md-6">
              <label className="form-label text-muted fw-semibold">Kode ISBN</label>
              <input type="text" className="form-control" value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder="978-..." />
            </div>
          </div>
          <button type="submit" className="btn btn-lexora mt-4 rounded-3 px-4"><i className="bi bi-search me-2"></i> Cari Buku</button>
        </form>
      </div>

      {searched && (
        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
          <h5 className="fw-bold mb-3 text-dark">Hasil Pencarian ({results.length})</h5>
          <div className="row g-3">
            {results.map(b => (
              <div key={b.id} className="col-md-4 col-lg-3">
                <div className="card border-0 p-3 bg-light rounded-4 text-center h-100" style={{ cursor: 'pointer' }} onClick={() => { setSelectedBook(b.id); setPage('book-detail'); }}>
                  <i className="bi bi-book text-primary fs-1 mb-2"></i>
                  <h6 className="fw-bold mb-1 text-truncate">{b.judul}</h6>
                  <small className="text-muted text-truncate d-block">{b.pengarang}</small>
                </div>
              </div>
            ))}
            {results.length === 0 && <div className="text-center text-muted py-4">Buku tidak ditemukan.</div>}
          </div>
        </div>
      )}
    </main>
  );
}

export default AdvancedSearchPage;
