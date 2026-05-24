import React from 'react';

function LandingPage({ setPage }) {
  return (
    <div className="landing-wrap">
      <header className="landing-hero">
        <div style={{fontSize:60,marginBottom:16}}>
          <i className="bi bi-book-half" style={{color:"#7b9fd4"}} />
        </div>
        <h1>Selamat datang di Lexora</h1>
        <p>Borrow. Read. Repeat. — Perpustakaan digital sekolahmu</p>
        <div className="d-flex gap-3 justify-content-center">
          <button className="btn" style={{background:"#fff",color:"#1e2638",fontWeight:600,padding:"10px 28px",borderRadius:10}}
            onClick={() => setPage("login")}>
            Login
          </button>
          <button className="btn" style={{border:"2px solid #fff",color:"#fff",fontWeight:600,padding:"10px 28px",borderRadius:10}}
            onClick={() => setPage("register")}>
            Daftar Sekarang
          </button>
        </div>
      </header>

      <main style={{padding:"40px 20px", maxWidth:960, margin:"0 auto"}}>
        <h4 className="text-center fw-bold mb-4" style={{color:"#1e2638"}}>Fitur Utama</h4>
        <div className="row g-3 mb-5">
          {[
            { icon:"bi-search", title:"Katalog Online", desc:"Cari dan temukan buku favoritmu dari ribuan koleksi perpustakaan." },
            { icon:"bi-bag-check", title:"Pesan Buku Online", desc:"Reservasi buku dari mana saja tanpa perlu antri di perpustakaan." },
            { icon:"bi-clock-history", title:"Riwayat Peminjaman", desc:"Pantau histori dan status peminjaman bukumu secara real-time." },
            { icon:"bi-bell", title:"Notifikasi Jatuh Tempo", desc:"Dapatkan pengingat otomatis sebelum batas pengembalian tiba." },
          ].map((f,i) => (
            <div className="col-sm-6 col-md-3" key={i}>
              <div className="stat-card text-center">
                <i className={`bi ${f.icon} stat-icon`} style={{color:"#185FA5"}} />
                <div style={{fontWeight:600,color:"#1e2638",marginBottom:6}}>{f.title}</div>
                <div style={{fontSize:12,color:"#888",lineHeight:1.6}}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-3 text-center">
          {[
            { val:"248+", lbl:"Koleksi Buku" },
            { val:"312+", lbl:"Anggota Aktif" },
            { val:"1.2k+", lbl:"Total Peminjaman" },
            { val:"24/7", lbl:"Akses Online" },
          ].map((s,i) => (
            <div className="col-6 col-md-3" key={i}>
              <div className="stat-card">
                <div className="stat-val">{s.val}</div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={{background:"#1e2638",padding:"24px",textAlign:"center"}}>
        <p style={{color:"#6b7499",fontSize:13,margin:0}}>
          © 2026 Lexora — Aplikasi Perpustakaan Online | Proyek Pemrograman Web ST084
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
