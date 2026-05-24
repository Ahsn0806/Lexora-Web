import React, { useState } from 'react';

function NotifikasiPage() {
  const [notifs, setNotifs] = useState([
    { id:1, type:"danger", text:"Jatuh tempo! Fisika Dasar Jilid 1 harus dikembalikan hari ini.", time:"2 jam lalu", read:false },
    { id:2, type:"warning", text:"Pengingat: Bumi Manusia jatuh tempo dalam 3 hari.", time:"1 hari lalu", read:false },
    { id:3, type:"info", text:"Pesanan Matematika Diskrit telah disetujui oleh admin.", time:"3 hari lalu", read:true },
    { id:4, type:"success", text:"Buku Laskar Pelangi berhasil dikembalikan.", time:"5 hari lalu", read:true },
  ]);
  const colors = { danger:"#e24b4a", warning:"#c47d00", info:"#185FA5", success:"#1a6b3c" };

  function tandaiSemua() {
    setNotifs(p => p.map(n => ({...n, read:true})));
  }

  return (
    <main>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="page-label" style={{marginBottom:0}}>Notifikasi</div>
        <button className="btn btn-sm btn-outline-secondary" onClick={tandaiSemua} style={{fontSize:12}}>
          Tandai semua dibaca
        </button>
      </div>
      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body">
          {notifs.map(n => (
            <div key={n.id} className="notif-item">
              <div className="notif-dot" style={{background:colors[n.type]}} />
              <div>
                <div className={n.read ? "notif-read" : "notif-unread"} style={{fontSize:13}}>
                  {n.text}
                </div>
                <div className="notif-time">{n.time}</div>
              </div>
              {/* Conditional rendering badge belum dibaca */}
              {!n.read && (
                <span className="badge rounded-pill ms-auto" style={{background:"#e24b4a",fontSize:9}}>Baru</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default NotifikasiPage;
