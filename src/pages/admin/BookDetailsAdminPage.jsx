import React from 'react';
import { db } from '../../data/mockData';

export function BookDetailsAdminPage({ setPage, bookId }) {
  const books = db.getBooks();
  const b = books.find(x => x.id === Number(bookId)) || books[0];

  return (
    <main className="container-fluid py-4">
      <button className="btn btn-link text-decoration-none text-muted mb-3 p-0" onClick={() => setPage('kelola-buku')}>
        <i className="bi bi-arrow-left me-1"></i> Kembali ke Kelola Buku
      </button>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
        <h4 className="fw-bold mb-4">Spesifikasi Internal Buku (Admin)</h4>
        <div className="row g-4 text-sm text-muted">
          <div className="col-md-3 text-center">
            <div className="rounded p-4 bg-light d-flex align-items-center justify-content-center shadow-sm" style={{ height: '180px' }}>
              <i className="bi bi-book text-primary fs-1"></i>
            </div>
            <h5 className="fw-bold mt-2 text-dark">{b.judul}</h5>
          </div>
          <div className="col-md-9 border-start ps-md-4">
            <div className="row mb-3">
              <div className="col-sm-6 mb-2"><strong>Pengarang:</strong> {b.pengarang}</div>
              <div className="col-sm-6 mb-2"><strong>Penerbit:</strong> {b.penerbit}</div>
              <div className="col-sm-6 mb-2"><strong>Genre:</strong> {b.kategori}</div>
              <div className="col-sm-6 mb-2"><strong>Jumlah Stok:</strong> {b.stok} unit</div>
              <div className="col-sm-6 mb-2"><strong>Kode Rak:</strong> {b.rak}</div>
              <div className="col-sm-6 mb-2"><strong>Halaman:</strong> {b.halaman || '280'} lembar</div>
            </div>
            <hr />
            <h6 className="fw-bold text-dark mb-2">Metadata Ringkas</h6>
            <p className="text-xs text-muted mb-0">{b.deskripsi}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BookDetailsAdminPage;
