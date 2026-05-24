import React, { useState } from 'react';

export function ContactPage() {
  const [nama, setNama] = useState('');
  const [pesan, setPesan] = useState('');
  const [success, setSuccess] = useState(false);

  return (
    <main className="container py-5">
      <div className="page-label mb-2">Hubungi Kami</div>
      <p className="text-muted text-sm mb-4">Punya saran pengadaan buku atau keluhan operasional? Sampaikan kepada staf kami.</p>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
            <h5 className="fw-bold mb-4 text-primary"><i className="bi bi-envelope-paper me-2"></i> Kirim Masukan</h5>
            {success ? (
              <div className="alert alert-success border-0 rounded-3 text-center">Masukan Anda berhasil dikirim! Terima kasih.</div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSuccess(true); }}>
                <div className="mb-3">
                  <label className="form-label text-muted fw-semibold">Nama Lengkap</label>
                  <input type="text" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} required />
                </div>
                <div className="mb-4">
                  <label className="form-label text-muted fw-semibold">Isi Pesan / Keluhan</label>
                  <textarea className="form-control" rows="4" value={pesan} onChange={(e) => setPesan(e.target.value)} required></textarea>
                </div>
                <button type="submit" className="btn btn-lexora w-100 py-2 rounded-3">Kirim Pesan</button>
              </form>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
            <h5 className="fw-bold mb-3 text-dark"><i className="bi bi-geo-alt-fill text-danger me-2"></i> Alamat & Jam Kerja</h5>
            <p className="text-muted text-sm mb-4">Gedung Perpustakaan Rektorat Lantai 2, Kampus Utama Universitas Lexora.<br />Jalan Pendidikan Raya No. 45, Jakarta.</p>
            <h6 className="fw-bold mb-2">Jam Pelayanan Sirkulasi:</h6>
            <table className="table table-sm table-borderless text-sm text-muted mb-4">
              <tbody>
                <tr><td className="ps-0 py-1">Senin - Jumat</td><td className="py-1">: 08:00 - 17:00 WIB</td></tr>
                <tr><td className="ps-0 py-1">Sabtu</td><td className="py-1">: 09:00 - 13:00 WIB</td></tr>
                <tr><td className="ps-0 py-1">Minggu & Hari Libur</td><td className="py-1">: Tutup Pelayanan Fisik</td></tr>
              </tbody>
            </table>
            <div className="bg-light p-3 rounded-3 text-center border text-muted">
              <i className="bi bi-telephone-fill me-2 text-primary"></i> Hotline: 021-98765432
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
