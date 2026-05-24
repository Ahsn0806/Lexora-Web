import React from 'react';
import { useState } from 'react';

function LoginPage({ setPage, setRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) { setError("Email dan password wajib diisi."); return; }
    if (email === "admin@lexora.com") {
      setRole("admin"); setPage("dashboard-admin");
    } else {
      setRole("member"); setPage("dashboard");
    }
  }

  return (
    <div className="auth-wrap">
      {/* Kiri — Brand */}
      <div className="auth-left">
        <div style={{
          width:60, height:60, background:"#2d3a58",
          borderRadius:14, display:"flex", alignItems:"center",
          justifyContent:"center", marginBottom:16
        }}>
          <i className="bi bi-book-half" style={{fontSize:30, color:"#7b9fd4"}} />
        </div>
        <h2 style={{color:"#fff", fontWeight:700, marginBottom:6}}>Lexora</h2>
        <p style={{color:"#6b7499", fontSize:14, marginBottom:0}}>Borrow. Read. Repeat.</p>
      </div>

      {/* Kanan — Form */}
      <div className="auth-right">
        <div className="auth-box">
          <h4 style={{fontWeight:700, color:"#1e2638", marginBottom:4}}>Login in</h4>
          <p style={{fontSize:12, color:"#888", marginBottom:20}}>
            Gunakan <code>admin@lexora.com</code> untuk masuk sebagai admin.
          </p>

          {/* kondisional rendering error */}
          {error && (
            <div className="alert alert-danger py-2 px-3" style={{fontSize:13}}>
              <i className="bi bi-exclamation-circle me-2" />
              {error}
            </div>
          )}

          {/* Form dengan semantic HTML */}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold" style={{fontSize:12, color:"#555"}}>
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="email@sekolah.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold" style={{fontSize:12, color:"#555"}}>
                Password
              </label>
              <div className="input-group">
                <input
                  id="password"
                  type={showPass ? "text" : "password"}
                  className="form-control"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPass(p => !p)}
                >
                  <i className={`bi ${showPass ? "bi-eye-slash" : "bi-eye"}`} />
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-4" style={{fontSize:12}}>
              <span style={{color:"#185FA5", cursor:"pointer"}} onClick={() => setPage("lupa-password")}>
                Forgot Password?
              </span>
              <span style={{color:"#555", cursor:"pointer"}} onClick={() => setPage("register")}>
                Belum punya Akun?
              </span>
            </div>
            <button type="submit" className="btn btn-lexora w-100">
              GO
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
