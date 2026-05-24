import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StatusBadge from '../../components/StatusBadge';

function LaporanPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect + Axios dari JSONPlaceholder
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => { setUsers(res.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const topBuku = [
    { judul:"Bumi Manusia", pinjam:18 },
    { judul:"Fisika Dasar Jilid 1", pinjam:14 },
    { judul:"Laskar Pelangi", pinjam:11 },
    { judul:"Matematika Diskrit", pinjam:8 },
    { judul:"Pemrograman Web", pinjam:5 },
  ];
  const maxP = Math.max(...topBuku.map(b => b.pinjam));

  return (
    <main>
      <div className="page-label">Laporan Perpustakaan</div>
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-3 h-100">
            <div className="card-body">
              <h6 className="fw-bold mb-3" style={{color:"#1e2638"}}>Buku Terpopuler (Top 5)</h6>
              {topBuku.map((b,i) => (
                <div key={i} className="rep-bar-row">
                  <div className="rep-bar-label">{b.judul}</div>
                  <div className="rep-bar-track">
                    <div className="rep-bar-fill" style={{width:`${(b.pinjam/maxP)*100}%`}} />
                  </div>
                  <div className="rep-bar-val">{b.pinjam}x</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-3 h-100">
            <div className="card-body">
              <h6 className="fw-bold mb-3" style={{color:"#1e2638"}}>Laporan Denda</h6>
              <table className="table lexora-table">
                <thead><tr><th>Anggota</th><th>Total Denda</th><th>Status</th></tr></thead>
                <tbody>
                  <tr><td>Siti M.</td><td>Rp 5.000</td><td><StatusBadge status="habis" /></td></tr>
                  <tr><td>Budi S.</td><td>Rp 3.000</td><td><StatusBadge status="habis" /></td></tr>
                  <tr><td>Andi R.</td><td>Rp 2.000</td><td><StatusBadge status="tersedia" /></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Data dari JSONPlaceholder API */}
      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body">
          <h6 className="fw-bold mb-1" style={{color:"#1e2638"}}>Data Anggota Aktif</h6>
          <p style={{fontSize:11,color:"#888",marginBottom:12}}>
            <i className="bi bi-cloud-download me-1" />
            Data diambil dari JSONPlaceholder API
          </p>

          {/* Conditional rendering loading */}
          {loading ? (
            <div className="loading-wrap" style={{minHeight:100}}>
              <div className="spinner-border spinner-border-sm" style={{color:"#1e2638"}} />
              <p style={{fontSize:12}}>Memuat data anggota dari API...</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table lexora-table">
                <thead><tr><th>#</th><th>Nama</th><th>Email</th><th>Kota</th><th>Status</th></tr></thead>
                <tbody>
                  {users.map((u,i) => (
                    <tr key={u.id}>
                      <td style={{color:"#aaa"}}>{i+1}</td>
                      <td style={{fontWeight:500}}>{u.name}</td>
                      <td style={{fontSize:12}}>{u.email}</td>
                      <td style={{fontSize:12}}>{u.address?.city}</td>
                      <td><StatusBadge status="tersedia" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default LaporanPage;
