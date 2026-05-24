import React, { useState } from 'react';

export function ForgotPasswordPage({ setPage }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 border-0 rounded-4" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <i className="bi bi-shield-lock-fill text-primary" style={{ fontSize: '3rem' }}></i>
          <h3 className="mt-2 fw-bold text-dark">Lupa Password?</h3>
          <p className="text-muted text-sm">Masukkan email Anda untuk menerima tautan reset password.</p>
        </div>
        {submitted ? (
          <div className="alert alert-success text-center border-0 rounded-3 p-3">
            <i className="bi bi-envelope-check-fill me-2 fs-5"></i>
            Link berhasil dikirim ke <strong>{email}</strong>.
            <button className="btn btn-primary w-100 mt-4 rounded-3" onClick={() => setPage('login')}>
              Kembali ke Login
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div className="mb-3">
              <label className="form-label text-muted fw-semibold">Email Student</label>
              <input type="email" className="form-control bg-light" placeholder="nim@student.univ.ac.id" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-lexora w-100 rounded-3 py-2 mb-3">Kirim Link Reset</button>
            <div className="text-center">
              <button type="button" className="btn btn-link text-decoration-none text-sm fw-semibold" onClick={() => setPage('login')}>
                <i className="bi bi-arrow-left me-1"></i> Kembali ke Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
