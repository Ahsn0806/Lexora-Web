import React, { useState } from 'react';

export function ChangePasswordPage({ setPage }) {
  const [success, setSuccess] = useState(false);
  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-4">Ganti Password Akun</div>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '500px' }}>
        {success ? (
          <div className="alert alert-success border-0 rounded-3 text-center"><i className="bi bi-check-circle me-1"></i> Keamanan akun Anda berhasil diperbarui!</div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSuccess(true); }}>
            <div className="mb-3"><label className="form-label text-muted fw-semibold">Password Saat Ini</label><input type="password" className="form-control" required /></div>
            <div className="mb-4"><label className="form-label text-muted fw-semibold">Password Baru</label><input type="password" className="form-control" required /></div>
            <div className="d-flex gap-2 justify-content-end">
              <button type="button" className="btn btn-light rounded-3 px-4 border" onClick={() => setPage('profile')}>Batal</button>
              <button type="submit" className="btn btn-lexora rounded-3 px-4">Perbarui</button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

export default ChangePasswordPage;
