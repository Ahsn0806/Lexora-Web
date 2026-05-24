import React, { useState } from 'react';

function PengumumanPage() {
  const [detail, setDetail] = useState(null);
  const anns = [
    { id:1, pin:true, judul:"Perpustakaan tutup 17 Mei 2026", isi:"Dalam rangka Hari Raya Waisak, perpustakaan Lexora tidak beroperasi pada tanggal 17 Mei 2026. Kami mohon maaf atas ketidaknyamanan ini.", tgl:"10 Mei 2026" },
    { id:2, pin:false, judul:"Koleksi buku baru telah tiba", isi:"Kami dengan bangga mengumumkan kedatangan 24 judul buku baru di kategori Sains dan Fiksi. Segera cek katalog untuk melihat koleksi terbaru kami.", tgl:"5 Mei 2026" },
    { id:3, pin:false, judul:"Sistem peminjaman online aktif", isi:"Mulai hari ini anggota dapat melakukan pemesanan buku secara online melalui menu Pemesenan tanpa perlu datang langsung ke perpustakaan.", tgl:"1 Mei 2026" },
  ];

  if (detail) return (
    <main>
      <button className="btn btn-sm btn-outline-secondary mb-3" onClick={() => setDetail(null)}>
        <i className="bi bi-arrow-left me-1" /> Kembali
      </button>
      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body p-4">
          <h5 style={{fontWeight:700, color:"#1e2638"}}>{detail.judul}</h5>
          <p style={{fontSize:12, color:"#aaa", marginBottom:16}}>
            <i className="bi bi-calendar3 me-1" />{detail.tgl} · Admin Lexora
          </p>
          <p style={{fontSize:14, color:"#444", lineHeight:1.8}}>{detail.isi}</p>
        </div>
      </div>
    </main>
  );

  return (
    <main>
      <div className="page-label">Pengumuman</div>
      {anns.map(a => (
        <div key={a.id} className="ann-card" onClick={() => setDetail(a)} style={{cursor:"pointer"}}>
          <div className="ann-pin" style={{background: a.pin ? "#1e2638" : "#e2e5ed"}} />
          <div style={{flex:1}}>
            <div style={{fontSize:13, fontWeight:600, color:"#1e2638", marginBottom:4}}>{a.judul}</div>
            <div style={{fontSize:12, color:"#888", lineHeight:1.5, marginBottom:6}}>
              {a.isi.substring(0, 80)}...
            </div>
            <div style={{fontSize:11, color:"#aaa"}}>
              {a.pin && <><i className="bi bi-pin-angle me-1" />Disematkan · </>}{a.tgl}
            </div>
          </div>
          <i className="bi bi-chevron-right" style={{color:"#ccc", alignSelf:"center"}} />
        </div>
      ))}
    </main>
  );
}

export default PengumumanPage;
