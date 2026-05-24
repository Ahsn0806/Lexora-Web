import React from 'react';
import { db } from '../../data/mockData';

export function TransactionReportsPage() {
  const loans = db.getLoans();
  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-3">Laporan Ekspor Transaksi Sirkulasi</div>
      <p className="text-muted text-sm mb-4">Laporan rincian transaksi perpustakaan dalam format cetak tabular rapi.</p>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
        <div className="table-responsive">
          <table className="table table-bordered table-sm text-sm">
            <thead><tr><th>ID Transaksi</th><th>Nama Anggota</th><th>NIM</th><th>Judul Buku</th><th>Tgl Pinjam</th><th>Tgl Kembali</th></tr></thead>
            <tbody>
              {loans.map(l => (
                <tr key={l.id}>
                  <td>{l.id}</td><td>{l.namaAnggota}</td><td>{l.nim}</td><td>{l.judulBuku}</td><td>{l.tglPinjam}</td><td>{l.tglKembali || 'Aktif'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button className="btn btn-lexora rounded-3 px-4" onClick={() => window.print()}><i className="bi bi-download me-2"></i> Ekspor / Cetak Laporan</button>
    </main>
  );
}

export default TransactionReportsPage;
