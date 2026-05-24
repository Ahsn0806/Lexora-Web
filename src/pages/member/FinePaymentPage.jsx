import React, { useState } from 'react';
import { db } from '../../data/mockData';

const getActiveUser = () => {
  const members = db.getMembers();
  return members[0]; // Farhan Syah
};

export function FinePaymentPage({ setPage }) {
  const user = getActiveUser();
  const [success, setSuccess] = useState(false);

  const handlePay = () => {
    // Pay fines in mock db
    const fines = db.getFines();
    const updatedFines = fines.map(f => {
      if (f.nim === user.nim) return { ...f, status: 'lunas' };
      return f;
    });
    db.saveFines(updatedFines);

    const members = db.getMembers();
    const updatedMembers = members.map(m => {
      if (m.nim === user.nim) return { ...m, dendaSirkulasi: 0 };
      return m;
    });
    db.saveMembers(updatedMembers);

    setSuccess(true);
  };

  return (
    <main className="container-fluid py-4 d-flex justify-content-center">
      <div className="card border-0 shadow-lg rounded-4 p-5 text-center bg-white" style={{ maxWidth: '450px', width: '100%' }}>
        {success ? (
          <div>
            <div className="d-inline-flex bg-success-subtle text-success rounded-circle p-3 mb-3"><i className="bi bi-shield-check fs-1"></i></div>
            <h4 className="fw-bold mb-2">Pembayaran Berhasil!</h4>
            <p className="text-muted text-sm mb-4">Tagihan denda keterlambatan buku Anda telah dilunasi dan diverifikasi secara otomatis.</p>
            <button className="btn btn-lexora w-100 rounded-3 py-2" onClick={() => setPage('member-fines')}>Lihat Histori Denda</button>
          </div>
        ) : (
          <div>
            <div className="d-inline-flex bg-danger-subtle text-danger rounded-circle p-3 mb-3"><i className="bi bi-wallet2 fs-1"></i></div>
            <h4 className="fw-bold mb-2">Simulasi Pelunasan Kas Denda</h4>
            <p className="text-muted text-sm mb-4">Total kewajiban tagihan denda Anda saat ini adalah:<br /><strong className="text-danger fs-3">Rp {user.dendaSirkulasi.toLocaleString()}</strong></p>
            <div className="alert alert-light text-start text-xs border mb-4">Pilih Saluran Pembayaran:<br /><strong>Virtual Account BNI / Mandiri / ShopeePay</strong></div>
            <div className="d-grid gap-2">
              <button className="btn btn-lexora py-2 rounded-3" onClick={handlePay}>Bayar Sekarang (Simulasi)</button>
              <button className="btn btn-light py-2 rounded-3 border text-secondary" onClick={() => setPage('member-fines')}>Batal</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default FinePaymentPage;
