import React from 'react';
import { useState } from 'react';

function RegisterPage({ setPage }) {
  const [form, setForm] = useState({ nama:"", email:"", telp:"", alamat:"", password:"", konfirmasi:"" });
  const [success, setSuccess] = useState(false);

  function set(k, v) { setForm(p => ({...p, [k]:v})); }

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setPage("login"), 2000);
  }

  return (
    <div className="auth-wrap">
      <div className="auth-left">
        <div style={{width:60,height:60,background:"#2d3a58",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
          <i className="bi bi-book-half" style={{fontSize:30,color:"#7b9fd4"}} />
        </div>
        <h2 style={{color:"#fff",fontWeight:700,marginBottom:6}}>Lexora</h2>
        <p style={{color:"#6b7499",fontSize:14}}>Borrow. Read. Repeat.</p>
      </div>
      <div className="auth-right">
        <div className="auth-box">
          <h4 style={{fontWeight:700,color:"#1e2638",marginBottom:4}}>Daftar Akun Baru</h4>
          <p style={{fontSize:12,color:"#888",marginBottom:20}}>Isi data diri untuk membuat akun.</p>

          {/* Conditional rendering sukses */}
          {success ? (
            <div className="text-center py-4">
              <i className="bi bi-check-circle-fill" style={{fontSize:48,color:"#1a6b3c"}} />
              <p className="mt-3 fw-semibold" style={{color:"#1e2638"}}>Pendaftaran berhasil!</p>
              <p style={{fontSize:12,color:"#888"}}>Mengalihkan ke halaman login...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="row g-2 mb-2">
                <div className="col-6">
                  <label className="form-label fw-semibold" style={{fontSize:12,color:"#555"}}>Nama Lengkap</label>
                  <input type="text" className="form-control form-control-sm" placeholder="Nama kamu"
                    value={form.nama} onChange={e => set("nama", e.target.value)} required />
                </div>
                <div className="col-6">
                  <label className="form-label fw-semibold" style={{fontSize:12,color:"#555"}}>No. Telp</label>
                  <input type="tel" className="form-control form-control-sm" placeholder="08xx"
                    value={form.telp} onChange={e => set("telp", e.target.value)} />
                </div>
              </div>
              <div className="mb-2">
                <label className="form-label fw-semibold" style={{fontSize:12,color:"#555"}}>Email</label>
                <input type="email" className="form-control form-control-sm" placeholder="email@sekolah.com"
                  value={form.email} onChange={e => set("email", e.target.value)} required />
              </div>
              <div className="mb-2">
                <label className="form-label fw-semibold" style={{fontSize:12,color:"#555"}}>Alamat</label>
                <input type="text" className="form-control form-control-sm" placeholder="Alamat lengkap"
                  value={form.alamat} onChange={e => set("alamat", e.target.value)} />
              </div>
              <div className="row g-2 mb-3">
                <div className="col-6">
                  <label className="form-label fw-semibold" style={{fontSize:12,color:"#555"}}>Password</label>
                  <input type="password" className="form-control form-control-sm" placeholder="••••••••"
                    value={form.password} onChange={e => set("password", e.target.value)} required />
                </div>
                <div className="col-6">
                  <label className="form-label fw-semibold" style={{fontSize:12,color:"#555"}}>Konfirmasi</label>
                  <input type="password" className="form-control form-control-sm" placeholder="••••••••"
                    value={form.konfirmasi} onChange={e => set("konfirmasi", e.target.value)} required />
                </div>
              </div>
              <button type="submit" className="btn btn-lexora w-100 mb-2">Daftar Sekarang</button>
              <div className="text-center" style={{fontSize:12,color:"#888"}}>
                Sudah punya akun?{" "}
                <span style={{color:"#185FA5",cursor:"pointer"}} onClick={() => setPage("login")}>Login</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
