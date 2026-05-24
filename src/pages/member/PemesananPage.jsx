import React, { useState } from 'react';
import StatusBadge from '../../components/StatusBadge';

function PemesananPage() {
  const [filter, setFilter] = useState("Semua");
  const orders = [
    { id:1, buku:"Bumi Manusia", tgl:"10/05", status:"menunggu" },
    { id:2, buku:"Matematika Diskrit", tgl:"08/05", status:"disetujui" },
    { id:3, buku:"Fisika Dasar", tgl:"01/05", status:"ditolak" },
  ];
  const filtered = filter === "Semua" ? orders : orders.filter(o => o.status === filter.toLowerCase());

  return (
    <main>
      <div className="page-label">Pemesanan Saya</div>
      <div className="chip-row mb-3">
        {["Semua","Menunggu","Disetujui","Ditolak"].map(f => (
          <button key={f} type="button"
            className={`chip ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body">
          <table className="table lexora-table">
            <thead><tr><th>Buku</th><th>Tanggal Pesan</th><th>Status</th><th>Aksi</th></tr></thead>
            <tbody>
              {filtered.map(o => (
                <tr key={o.id}>
                  <td>{o.buku}</td>
                  <td>{o.tgl}</td>
                  <td><StatusBadge status={o.status} /></td>
                  <td>
                    {/* Conditional rendering tombol batal */}
                    {o.status === "menunggu"
                      ? <button className="btn btn-sm" style={{background:"#fce8e8",color:"#9b2626",border:"none",fontSize:11}}>Batalkan</button>
                      : <span style={{fontSize:12,color:"#aaa"}}>—</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default PemesananPage;
