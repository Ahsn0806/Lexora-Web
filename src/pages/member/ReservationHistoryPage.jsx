import React from 'react';
import { db } from '../../data/mockData';

const getActiveUser = () => {
  const members = db.getMembers();
  return members[0]; // Farhan Syah
};

export function ReservationHistoryPage() {
  const user = getActiveUser();
  const reservations = db.getReservations().filter(r => r.nim === user.nim);
  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-3">Riwayat Antrean Reservasi</div>
      <p className="text-muted text-sm mb-4">Daftar pesanan antrean buku out-of-stock perpustakaan.</p>
      <div className="card border-0 shadow-sm rounded-4 p-0 bg-white">
        <table className="table lexora-table mb-0">
          <thead><tr><th>ID</th><th>Buku</th><th>Tanggal Reservasi</th><th>Nomor Antrean</th></tr></thead>
          <tbody>
            {reservations.map(r => (
              <tr key={r.id}>
                <td>{r.id}</td><td><strong>{r.judulBuku}</strong></td><td>{r.tglPesan}</td><td><span className="badge bg-dark rounded-pill">Antrean #{r.antrean}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default ReservationHistoryPage;
