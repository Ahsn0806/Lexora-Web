import React from 'react';

export function NotificationDetailPage({ setPage }) {
  return (
    <main className="container-fluid py-4">
      <button className="btn btn-link text-decoration-none text-muted mb-3 p-0" onClick={() => setPage('notifikasi')}>
        <i className="bi bi-arrow-left me-1"></i> Kembali ke Notifikasi
      </button>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '700px' }}>
        <h5 className="fw-bold text-dark mb-1">Pengingat: Tenggat Pengembalian Mendekati Batas</h5>
        <small className="text-muted d-block mb-3">Dikirim pada: 2026-05-24 | Sistem Sirkulasi</small>
        <hr />
        <p className="text-muted leading-relaxed text-sm">Yth. Anggota Perpustakaan,<br /><br />Diberitahukan bahwa buku sirkulasi aktif Anda berjudul <strong>"Bumi Manusia"</strong> akan segera memasuki masa jatuh tempo pengembalian pada tanggal <strong>2026-05-28</strong>. Harap segera lakukan pengembalian fisik ke loket perpustakaan rektorat lantai 2 untuk menghindari sanksi denda Rp 1.000 / hari.<br /><br />Salam literasi,<br />Sistem Administrasi Sirkulasi Lexora</p>
      </div>
    </main>
  );
}

export default NotificationDetailPage;
