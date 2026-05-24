import React, { useState } from 'react';

export function FeedbackPage() {
  const [success, setSuccess] = useState(false);
  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-3">Masukan & Kritik Saran</div>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '600px' }}>
        {success ? (
          <div className="alert alert-success border-0 rounded-3 text-center">Pesan masukan Anda dikirim!</div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSuccess(true); }}>
            <div className="mb-4"><label className="form-label text-muted fw-semibold">Uraian Kritik, Saran, atau Keluhan Fasilitas Perpustakaan</label><textarea className="form-control" rows="5" required></textarea></div>
            <button type="submit" className="btn btn-lexora w-100 py-2 rounded-3">Kirim Sekarang</button>
          </form>
        )}
      </div>
    </main>
  );
}

export default FeedbackPage;
