import React, { useState } from 'react';

export function WriteReviewPage({ setPage }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [success, setSuccess] = useState(false);

  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-4">Tulis Ulasan Buku</div>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '600px' }}>
        {success ? (
          <div className="alert alert-success text-center border-0 rounded-3 p-3">
            <i className="bi bi-check-circle me-1"></i> Ulasan berhasil diterbitkan!
            <button className="btn btn-primary w-100 mt-3 rounded-3" onClick={() => setPage('book-reviews')}>Kembali ke Ulasan</button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSuccess(true); }}>
            <div className="mb-3">
              <label className="form-label text-muted fw-semibold">Beri Rating Bintang</label>
              <select className="form-select" value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                <option value={5}>⭐⭐⭐⭐⭐ (Sempurna)</option>
                <option value={4}>⭐⭐⭐⭐ (Sangat Baik)</option>
                <option value={3}>⭐⭐⭐ (Cukup)</option>
                <option value={2}>⭐⭐ (Buruk)</option>
                <option value={1}>⭐ (Sangat Buruk)</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="form-label text-muted fw-semibold">Ulasan Komentar Anda</label>
              <textarea className="form-control" rows="4" value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
            </div>
            <button type="submit" className="btn btn-lexora py-2 rounded-3 w-100">Kirim Ulasan</button>
          </form>
        )}
      </div>
    </main>
  );
}

export default WriteReviewPage;
