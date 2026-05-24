import React from 'react';

export function BookReviewsPage({ setPage }) {
  const reviews = [
    { id: 1, user: "Andi Rahmad", rating: 5, comment: "Buku yang sangat luar biasa! Isinya sangat mencerahkan dan memberi pemahaman mendalam.", tgl: "2026-05-12" },
    { id: 2, user: "Risa Amelia", rating: 4, comment: "Penjelasan konsep fisika di buku ini sangat praktis, namun perlu dibaca perlahan agar paham.", tgl: "2026-05-18" }
  ];

  return (
    <main className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="page-label mb-0">Ulasan & Review Pembaca</div>
        <button className="btn btn-lexora btn-lexora-sm rounded-3" onClick={() => setPage('write-review')}>
          Tulis Ulasan Saya
        </button>
      </div>
      <div className="d-flex flex-column gap-3">
        {reviews.map(r => (
          <div key={r.id} className="card border-0 shadow-sm rounded-4 p-4 bg-white">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="fw-bold text-dark">{r.user}</span>
              <span className="text-warning">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
            </div>
            <p className="text-muted text-sm mb-1">"{r.comment}"</p>
            <small className="text-muted text-xxs">{r.tgl}</small>
          </div>
        ))}
      </div>
    </main>
  );
}

export default BookReviewsPage;
