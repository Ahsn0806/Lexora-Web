import React, { useState } from 'react';
import { db } from '../../data/mockData';

export function AddLoanPage({ setPage }) {
  const [nim, setNim] = useState('');
  const [bookId, setBookId] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const members = db.getMembers();
    const books = db.getBooks();
    const loans = db.getLoans();

    const m = members.find(x => x.nim === nim);
    const b = books.find(x => x.id === Number(bookId));

    if (!m || !b || b.stok === 0) return;

    const tglToday = new Date().toISOString().split('T')[0];
    const tenggatDate = new Date();
    tenggatDate.setDate(tenggatDate.getDate() + 14);
    const tglTenggat = tenggatDate.toISOString().split('T')[0];

    // Add loan
    db.saveLoans([...loans, {
      id: Date.now(),
      nim: m.nim,
      namaAnggota: m.nama,
      bookId: b.id,
      judulBuku: b.judul,
      tglPinjam: tglToday,
      tglTenggat,
      tglKembali: null,
      denda: 0,
      status: 'aktif'
    }]);

    // Decrement book stock
    const updatedBooks = books.map(x => {
      if (x.id === b.id) return { ...x, stok: Math.max(0, x.stok - 1) };
      return x;
    });
    db.saveBooks(updatedBooks);

    setSuccess(true);
  };

  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-4">Input Peminjaman Baru (Manual Admin)</div>
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white" style={{ maxWidth: '600px' }}>
        {success ? (
          <div className="alert alert-success border-0 rounded-3 text-center">Transaksi berhasil diinput! <button className="btn btn-primary w-100 mt-3 rounded-3" onClick={() => setPage('kelola-peminjaman')}>Kembali ke Sirkulasi</button></div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3"><label className="form-label text-muted fw-semibold">NIM Anggota</label><input type="text" className="form-control" value={nim} onChange={(e) => setNim(e.target.value)} placeholder="Masukkan NIM..." required /></div>
            <div className="mb-4"><label className="form-label text-muted fw-semibold">ID Buku</label><input type="number" className="form-control" value={bookId} onChange={(e) => setBookId(e.target.value)} placeholder="Masukkan ID buku..." required /></div>
            <div className="d-flex gap-2 justify-content-end">
              <button type="button" className="btn btn-light rounded-3 px-4 border" onClick={() => setPage('kelola-peminjaman')}>Batal</button>
              <button type="submit" className="btn btn-lexora rounded-3 px-4">Proses Pinjam</button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

export default AddLoanPage;
