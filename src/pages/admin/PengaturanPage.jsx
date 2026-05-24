import React, { useState } from 'react';

function PengaturanPage() {
  const [settings, setSettings] = useState({
    nama: "Lexora",
    denda: 1000,
    maks: 3,
    durasi: 7,
  });
  const [saved, setSaved] = useState(false);

  function setS(k,v) { setSettings(p => ({...p,[k]:v})); }

  function handleSave(e) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <main>
      <div className="page-label">Pengaturan Sistem</div>
      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body">
          {/* Conditional rendering sukses */}
          {saved && (
            <div className="alert alert-success d-flex align-items-center gap-2 mb-3" style={{fontSize:13}}>
              <i className="bi bi-check-circle-fill" /> Pengaturan berhasil disimpan!
            </div>
          )}
          <form onSubmit={handleSave}>
            <div className="set-row">
              <div>
                <div style={{fontSize:13,fontWeight:500,color:"#333"}}>Nama Perpustakaan</div>
                <div style={{fontSize:11,color:"#aaa"}}>Tampil di halaman utama</div>
              </div>
              <input type="text" className="form-control" style={{maxWidth:200,fontSize:13}}
                value={settings.nama} onChange={e => setS("nama",e.target.value)} />
            </div>
            <div className="set-row">
              <div>
                <div style={{fontSize:13,fontWeight:500,color:"#333"}}>Denda per Hari</div>
                <div style={{fontSize:11,color:"#aaa"}}>Dalam rupiah</div>
              </div>
              <input type="number" className="form-control" style={{maxWidth:120,fontSize:13}}
                value={settings.denda} onChange={e => setS("denda",Number(e.target.value))} />
            </div>
            <div className="set-row">
              <div>
                <div style={{fontSize:13,fontWeight:500,color:"#333"}}>Maks. Buku Dipinjam</div>
                <div style={{fontSize:11,color:"#aaa"}}>Per anggota</div>
              </div>
              <input type="number" className="form-control" style={{maxWidth:80,fontSize:13}}
                value={settings.maks} onChange={e => setS("maks",Number(e.target.value))} />
            </div>
            <div className="set-row">
              <div>
                <div style={{fontSize:13,fontWeight:500,color:"#333"}}>Durasi Pinjam (hari)</div>
                <div style={{fontSize:11,color:"#aaa"}}>Default batas waktu</div>
              </div>
              <input type="number" className="form-control" style={{maxWidth:80,fontSize:13}}
                value={settings.durasi} onChange={e => setS("durasi",Number(e.target.value))} />
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-lexora">
                <i className="bi bi-floppy me-1" /> Simpan Pengaturan
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default PengaturanPage;
