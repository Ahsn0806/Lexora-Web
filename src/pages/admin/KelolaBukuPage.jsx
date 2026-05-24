import React, { useState } from 'react';
import { db } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';

function KelolaBukuPage({ setPage, setSelectedBook }) {
  const books = db.getBooks();
  const [search, setSearch] = useState("");

  const filtered = books.filter(b =>
    b.judul.toLowerCase().includes(search.toLowerCase()) ||
    b.pengarang.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container-fluid py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="page-label" style={{marginBottom:0}}>Kelola Buku</div>
        <button className="btn btn-lexora btn-lexora-sm rounded-3" onClick={() => setPage('add-book')}>
          <i className="bi bi-plus-lg me-1" /> Tambah Buku
        </button>
      </div>

      <div className="mb-3">
        <input type="search" className="form-control rounded-3" placeholder="Cari buku..."
          value={search} onChange={e => setSearch(e.target.value)} style={{maxWidth:320}} />
      </div>

      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table lexora-table mb-0">
              <thead>
                <tr><th>#</th><th>Judul</th><th>Pengarang</th><th>Kategori</th><th>Stok</th><th>Status</th><th>Aksi</th></tr>
              </thead>
              <tbody>
                {filtered.map((b,i) => (
                  <tr key={b.id}>
                    <td style={{color:"#aaa"}}>{i+1}</td>
                    <td style={{fontWeight:500}}>{b.judul}</td>
                    <td>{b.pengarang}</td>
                    <td><span className="badge" style={{background:"#edf0f7",color:"#3a4a7a",fontSize:10}}>{b.kategori}</span></td>
                    <td>{b.stok}</td>
                    <td><StatusBadge status={b.stok > 0 ? 'tersedia' : 'habis'} /></td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm p-0" style={{color:"#185FA5",background:"none",border:"none"}}
                          onClick={() => { setSelectedBook(b.id); setPage('book-details-admin'); }} title="Detail Spesifikasi">
                          <i className="bi bi-eye" style={{fontSize:15}} />
                        </button>
                        <button className="btn btn-sm p-0" style={{color:"#555",background:"none",border:"none"}}
                          onClick={() => { setSelectedBook(b.id); setPage('edit-book'); }} title="Edit Buku">
                          <i className="bi bi-pencil-square" style={{fontSize:15}} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default KelolaBukuPage;
