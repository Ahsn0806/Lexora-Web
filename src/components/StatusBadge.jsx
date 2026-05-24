import React from 'react';

function StatusBadge({ status }) {
  const map = {
    tersedia: ["status-ok", "Tersedia"],
    dipinjam: ["status-warn", "Dipinjam"],
    habis:    ["status-err", "Habis"],
    menunggu: ["status-warn", "Menunggu"],
    disetujui:["status-ok", "Disetujui"],
    ditolak:  ["status-err", "Ditolak"],
  };
  const [cls, label] = map[status] || ["status-info", status];
  return <span className={`status-badge ${cls}`} style={{position:"static",display:"inline-block"}}>{label}</span>;
}

export default StatusBadge;
