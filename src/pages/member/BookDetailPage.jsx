import React from 'react';
import { db } from '../../data/mockData';

export function BookDetailPage({ setPage, bookId, setSelectedBook }) {
  const books = db.getBooks();
  const b = books.find(x => x.id === Number(bookId)) || books[0];

  return (
    <main className="container-fluid py-4">
      <button className="btn btn-link text-decoration-none text-muted mb-3 p-0" onClick={() => setPage('katalog')}>
        <i className="bi bi-arrow-left me-1"></i> Kembali ke Katalog
      </button>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
        <div className="row g-4">
          <div className="col-md-3 text-center">
            <div className="rounded p-5 d-flex align-items-center justify-content-center" style={{ backgroundColor: b.cover, height: '220px' }}>
              <i className="bi bi-book text-primary" style={{ fontSize: '4rem' }}></i>
            </div>
            <span className={`badge mt-3 px-3 py-2 rounded-pill ${b.stok > 0 ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}>
              {b.stok > 0 ? 'Tersedia' : 'Kosong'}
            </span>
          </div>
          <div className="col-md-9 border-start ps-md-4">
            <h3 className="fw-bold text-dark mb-1">{b.judul}</h3>
            <h5 className="text-muted fw-normal mb-3">Oleh: <span className="text-primary fw-semibold">{b.pengarang}</span></h5>
            <table className="table table-sm table-borderless text-sm mb-4" style={{ maxWidth: '400px' }}>
              <tbody>
                <tr><td className="text-muted ps-0">ISBN</td><td className="fw-semibold">{b.isbn}</td></tr>
                <tr><td className="text-muted ps-0">Penerbit</td><td className="fw-semibold">{b.penerbit}</td></tr>
                <tr><td className="text-muted ps-0">Tahun</td><td className="fw-semibold">{b.tahun}</td></tr>
                <tr><td className="text-muted ps-0">Rak</td><td className="fw-semibold"><span className="badge bg-dark">{b.rak}</span></td></tr>
              </tbody>
            </table>
            <p className="text-muted text-sm mb-4 leading-relaxed">{b.deskripsi}</p>
            <div className="d-flex gap-2">
              <button className="btn btn-lexora rounded-3 px-4" onClick={() => { setSelectedBook(b.id); setPage('pemesanan'); }} disabled={b.stok === 0}>Pesan Sekarang</button>
              <button className="btn btn-light border rounded-3 px-4" onClick={() => setPage('book-reviews')}>Lihat Ulasan</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BookDetailPage;
