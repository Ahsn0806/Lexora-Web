import React from 'react';
import { db } from '../../data/mockData';

const getActiveUser = () => {
  const members = db.getMembers();
  return members[0]; // Farhan Syah
};

export function DigitalCardPage() {
  const user = getActiveUser();
  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-3">Kartu Digital Mahasiswa</div>
      <p className="text-muted text-sm mb-4">Gunakan QR Code / Barcode digital ini untuk melakukan pemindaian fisik di loket sirkulasi kampus.</p>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white text-center" style={{ maxWidth: '400px' }}>
        <div className="card border-0 p-4 rounded-4 shadow-sm text-white text-start mb-3" style={{ background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }}>
          <h5 className="fw-bold mb-4">LEXORA DIGITAL CARD</h5>
          <h6 className="mb-1">{user.nama}</h6>
          <div className="text-xs mb-3">{user.nim}</div>
          <div className="text-xxs" style={{ opacity: 0.8 }}>Status: Mahasiswa Aktif</div>
        </div>
        <div className="bg-light p-3 rounded shadow-sm d-inline-block mx-auto mb-3">
          <div className="d-flex gap-1 justify-content-center align-items-center">
            {[2,3,1,4,2,3,1,2,4,1,3,2,1].map((w,i) => (
              <div key={i} className="bg-dark" style={{ width: `${w}px`, height: '40px' }}></div>
            ))}
          </div>
        </div>
        <small className="text-muted d-block">ID Pemindaian: NIM{user.nim}</small>
      </div>
    </main>
  );
}

export default DigitalCardPage;
