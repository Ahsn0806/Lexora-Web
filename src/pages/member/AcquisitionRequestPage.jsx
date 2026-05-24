import React, { useState } from 'react';

export function AcquisitionRequestPage() {
  const [success, setSuccess] = useState(false);
  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-3">Usulan Pengadaan Buku Baru</div>
      <p className="text-muted text-sm mb-4">Ajukan saran buku baru yang belum tersedia di katalog untuk dipertimbangkan oleh pengadaan kampus.</p>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '600px' }}>
        {success ? (
          <div className="alert alert-success border-0 rounded-3 text-center">Usulan berhasil diajukan! Terima kasih.</div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSuccess(true); }}>
            <div className="mb-3"><label className="form-label text-muted fw-semibold">Judul Buku yang Diusulkan</label><input type="text" className="form-control" required /></div>
            <div className="mb-3"><label className="form-label text-muted fw-semibold">Pengarang</label><input type="text" className="form-control" required /></div>
            <div className="mb-4"><label className="form-label text-muted fw-semibold">Alasan Kebutuhan Rekomendasi</label><textarea className="form-control" rows="3" required></textarea></div>
            <button type="submit" className="btn btn-lexora w-100 py-2 rounded-3">Kirim Usulan</button>
          </form>
        )}
      </div>
    </main>
  );
}

export default AcquisitionRequestPage;
