import React from 'react';
import { STATIC_BOOKS } from '../../data/books';
import StatusBadge from '../../components/StatusBadge';

function MyBookPage() {
  const dipinjam = STATIC_BOOKS.filter(b => b.status === "dipinjam");
  return (
    <main>
      <div className="page-label">My Book</div>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-3 mb-3">
            <div className="card-body">
              <h6 className="fw-bold mb-3" style={{color:"#1e2638"}}>Sedang Dipinjam</h6>
              {dipinjam.map(b => (
                <div key={b.id} className="d-flex gap-3 align-items-center py-2 border-bottom">
                  <div style={{width:40,height:54,background:b.cover,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <i className="bi bi-book" style={{color:"#8892b0"}} />
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,fontWeight:600,color:"#1e2638"}}>{b.judul}</div>
                    <div style={{fontSize:11,color:"#888"}}>{b.pengarang}</div>
                    <div style={{fontSize:11,color:"#c47d00"}}>Kembali: 18 Mei 2026</div>
                  </div>
                  <StatusBadge status="dipinjam" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-3">
            <div className="card-body">
              <h6 className="fw-bold mb-3" style={{color:"#1e2638"}}>Denda Saya</h6>
              <div className="empty-state" style={{padding:"20px 0"}}>
                <i className="bi bi-check-circle" style={{color:"#1a6b3c",fontSize:36}} />
                <p style={{color:"#1a6b3c",marginTop:8}}>Tidak ada denda aktif</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyBookPage;
