import React from 'react';
import { db } from '../../data/mockData';

export function WishlistPage({ setPage, setSelectedBook }) {
  const books = db.getBooks();
  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-3">Daftar Keinginan (Wishlist)</div>
      <p className="text-muted text-sm mb-4">Simpan koleksi buku yang menarik minat Anda untuk dipinjam di waktu mendatang.</p>
      <div className="row g-3">
        {books.slice(4, 7).map(b => (
          <div key={b.id} className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row gap-3 align-items-center">
              <div className="rounded p-3 bg-light d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                <i className="bi bi-bookmark-heart text-danger fs-3"></i>
              </div>
              <div className="flex-grow-1 text-truncate">
                <h6 className="fw-bold text-dark mb-1 text-truncate">{b.judul}</h6>
                <small className="text-muted text-truncate d-block">{b.pengarang}</small>
              </div>
              <button className="btn btn-lexora btn-lexora-sm rounded-3 flex-shrink-0" onClick={() => { setSelectedBook(b.id); setPage('book-detail'); }}>Detail</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default WishlistPage;
