import React, { useState } from 'react';

export function ResetPasswordPage({ setPage }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 border-0 rounded-4" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <i className="bi bi-key-fill text-warning" style={{ fontSize: '3rem' }}></i>
          <h3 className="mt-2 fw-bold text-dark">Reset Password</h3>
          <p className="text-muted text-sm">Buat kata sandi baru untuk akun Anda.</p>
        </div>
        {success ? (
          <div className="alert alert-success text-center border-0 rounded-3 p-3">
            <i className="bi bi-check-circle-fill me-2 fs-5"></i>
            Password berhasil diperbarui!
            <button className="btn btn-warning text-white w-100 mt-4 rounded-3 fw-bold" onClick={() => setPage('login')}>
              Login Sekarang
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSuccess(true); }}>
            <div className="mb-3">
              <label className="form-label text-muted fw-semibold">Password Baru</label>
              <input type="password" className="form-control" placeholder="Min. 6 karakter" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label className="form-label text-muted fw-semibold">Konfirmasi Password</label>
              <input type="password" className="form-control" placeholder="Ulangi password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-lexora w-100 rounded-3 py-2">Perbarui Password</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ResetPasswordPage;
