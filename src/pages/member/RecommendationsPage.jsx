import React from 'react';
import { db } from '../../data/mockData';

export function RecommendationsPage({ setPage, setSelectedBook }) {
  const books = db.getBooks();
  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-3">Rekomendasi Untuk Anda</div>
      <p className="text-muted text-sm mb-4">Saran kurasi buku pilihan terbaik yang disesuaikan secara otomatis berdasarkan minat membaca Anda.</p>
      <div className="row g-3">
        {books.slice(0, 4).map(b => (
          <div key={b.id} className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white text-center h-100">
              <div className="rounded p-4 d-flex align-items-center justify-content-center mb-3" style={{ backgroundColor: b.cover, height: '140px' }}>
                <i className="bi bi-bookmark-star text-primary fs-2"></i>
              </div>
              <h6 className="fw-bold mb-1 text-truncate text-dark">{b.judul}</h6>
              <small className="text-muted d-block mb-3 text-truncate">{b.pengarang}</small>
              <button className="btn btn-lexora btn-lexora-sm w-100 rounded-3 mt-auto" onClick={() => { setSelectedBook(b.id); setPage('book-detail'); }}>Lihat Buku</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default RecommendationsPage;
