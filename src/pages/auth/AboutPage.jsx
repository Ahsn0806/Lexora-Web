import React from 'react';

export function AboutPage({ setPage }) {
  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Tentang Lexora Library</h1>
        <p className="text-muted lead">Membangun Masa Depan Literasi Kampus Melalui Digitalisasi</p>
      </div>
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
            <h4 className="fw-bold mb-3"><i className="bi bi-eye text-primary me-2"></i> Visi Kami</h4>
            <p className="text-muted leading-relaxed">Menjadi pusat referensi digital dan fisik terkemuka di tingkat nasional, memfasilitasi mahasiswa dengan kemudahan akses ilmu pengetahuan secara inklusif dan efisien.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
            <h4 className="fw-bold mb-3"><i className="bi bi-bullseye text-danger me-2"></i> Misi Kami</h4>
            <p className="text-muted leading-relaxed">Kami berkomitmen untuk terus meningkatkan layanan perpustakaan dengan:</p>
            <ul className="text-muted ps-3 leading-relaxed">
              <li className="mb-2">Menyediakan katalog buku fisik dan jurnal digital berkualitas tinggi.</li>
              <li className="mb-2">Menyederhanakan alur sirkulasi buku dengan teknologi pemesanan online.</li>
              <li className="mb-2">Mendukung terwujudnya ekosistem riset yang tangguh bagi sivitas akademika.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-primary text-white text-center">
        <h4 className="fw-bold mb-2">Tertarik Menjadi Anggota?</h4>
        <p className="mb-4">Daftarkan NIM Anda hari ini dan mulailah perjalanan literasi tanpa batas.</p>
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-light rounded-3 px-4 fw-semibold text-primary" onClick={() => setPage('register')}>Daftar Akun</button>
          <button className="btn btn-outline-light rounded-3 px-4" onClick={() => setPage('login')}>Login Sekarang</button>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
