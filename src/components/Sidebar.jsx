import React, { useState } from 'react';

function Sidebar({ page, setPage, role, sidebarOpen, setSidebarOpen }) {
  const [expanded, setExpanded] = useState({
    eksplorasi: false,
    sirkulasi: false,
    utilitas: false,
    bukuAdmin: false,
    sirkulasiAdmin: false,
    anggotaAdmin: false,
    laporanAdmin: false
  });

  const toggle = (key) => setExpanded(p => ({ ...p, [key]: !p[key] }));
  const navigate = (key) => { setPage(key); setSidebarOpen(false); };

  return (
    <>
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`} style={{ overflowY: 'auto' }}>
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon"><i className="bi bi-book-half" style={{fontSize:20, color:"#7b9fd4"}} /></div>
          <h5>Lexora</h5>
          <small>{role === "admin" ? "Admin Panel" : "Borrow. Read. Repeat."}</small>
        </div>

        <nav className="sidebar-menu px-2">
          {role === "admin" ? (
            // ==================== ADMIN PANEL ====================
            <>
              <div className="nav-item">
                <button className={`nav-link-custom ${page === "dashboard-admin" ? "active" : ""}`} onClick={() => navigate("dashboard-admin")}>
                  <i className="bi bi-speedometer2" /> Dashboard
                </button>
              </div>

              {/* Inventaris Buku */}
              <div className="nav-item">
                <button className="nav-link-custom d-flex justify-content-between align-items-center" onClick={() => toggle("bukuAdmin")}>
                  <span><i className="bi bi-journal-bookmark" /> Inventaris Buku</span>
                  <i className={`bi bi-chevron-${expanded.bukuAdmin ? 'up' : 'down'}`} style={{ fontSize: '10px' }} />
                </button>
                {expanded.bukuAdmin && (
                  <div className="ps-4 d-flex flex-column gap-1 bg-light-subtle rounded-2 p-1 mt-1">
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "kelola-buku" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("kelola-buku")}>
                      <i className="bi bi-dot"></i> Database Buku
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "add-book" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("add-book")}>
                      <i className="bi bi-dot"></i> Tambah Buku
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "add-category" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("add-category")}>
                      <i className="bi bi-dot"></i> Tambah Kategori
                    </button>
                  </div>
                )}
              </div>

              {/* Sirkulasi Sirkulasi */}
              <div className="nav-item">
                <button className="nav-link-custom d-flex justify-content-between align-items-center" onClick={() => toggle("sirkulasiAdmin")}>
                  <span><i className="bi bi-arrow-left-right" /> Sirkulasi Sirkulasi</span>
                  <i className={`bi bi-chevron-${expanded.sirkulasiAdmin ? 'up' : 'down'}`} style={{ fontSize: '10px' }} />
                </button>
                {expanded.sirkulasiAdmin && (
                  <div className="ps-4 d-flex flex-column gap-1 bg-light-subtle rounded-2 p-1 mt-1">
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "kelola-peminjaman" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("kelola-peminjaman")}>
                      <i className="bi bi-dot"></i> Sirkulasi Aktif
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "add-loan" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("add-loan")}>
                      <i className="bi bi-dot"></i> Input Peminjaman
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "kelola-denda" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("kelola-denda")}>
                      <i className="bi bi-dot"></i> Kelola Denda
                    </button>
                  </div>
                )}
              </div>

              {/* Kelola Anggota */}
              <div className="nav-item">
                <button className="nav-link-custom d-flex justify-content-between align-items-center" onClick={() => toggle("anggotaAdmin")}>
                  <span><i className="bi bi-people" /> Kelola Anggota</span>
                  <i className={`bi bi-chevron-${expanded.anggotaAdmin ? 'up' : 'down'}`} style={{ fontSize: '10px' }} />
                </button>
                {expanded.anggotaAdmin && (
                  <div className="ps-4 d-flex flex-column gap-1 bg-light-subtle rounded-2 p-1 mt-1">
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "kelola-anggota" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("kelola-anggota")}>
                      <i className="bi bi-dot"></i> Database Anggota
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "add-member" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("add-member")}>
                      <i className="bi bi-dot"></i> Tambah Anggota
                    </button>
                  </div>
                )}
              </div>

              {/* Laporan & Berita */}
              <div className="nav-item">
                <button className="nav-link-custom d-flex justify-content-between align-items-center" onClick={() => toggle("laporanAdmin")}>
                  <span><i className="bi bi-bar-chart-line" /> Laporan & Pengumuman</span>
                  <i className={`bi bi-chevron-${expanded.laporanAdmin ? 'up' : 'down'}`} style={{ fontSize: '10px' }} />
                </button>
                {expanded.laporanAdmin && (
                  <div className="ps-4 d-flex flex-column gap-1 bg-light-subtle rounded-2 p-1 mt-1">
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "laporan" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("laporan")}>
                      <i className="bi bi-dot"></i> Laporan Visual
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "laporan-transaksi" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("laporan-transaksi")}>
                      <i className="bi bi-dot"></i> Laporan Tabular
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "kelola-pengumuman" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("kelola-pengumuman")}>
                      <i className="bi bi-dot"></i> Kelola Pengumuman
                    </button>
                  </div>
                )}
              </div>

              <div className="nav-item">
                <button className={`nav-link-custom ${page === "pengaturan" ? "active" : ""}`} onClick={() => navigate("pengaturan")}>
                  <i className="bi bi-gear" /> Pengaturan Sistem
                </button>
              </div>
            </>
          ) : (
            // ==================== MEMBER PANEL ====================
            <>
              <div className="nav-item">
                <button className={`nav-link-custom ${page === "dashboard" ? "active" : ""}`} onClick={() => navigate("dashboard")}>
                  <i className="bi bi-house" /> Dashboard
                </button>
              </div>

              {/* Eksplorasi Buku */}
              <div className="nav-item">
                <button className="nav-link-custom d-flex justify-content-between align-items-center" onClick={() => toggle("eksplorasi")}>
                  <span><i className="bi bi-grid" /> Eksplorasi Buku</span>
                  <i className={`bi bi-chevron-${expanded.eksplorasi ? 'up' : 'down'}`} style={{ fontSize: '10px' }} />
                </button>
                {expanded.eksplorasi && (
                  <div className="ps-4 d-flex flex-column gap-1 bg-light-subtle rounded-2 p-1 mt-1">
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "katalog" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("katalog")}>
                      <i className="bi bi-dot"></i> Katalog Utama
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "advanced-search" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("advanced-search")}>
                      <i className="bi bi-dot"></i> Pencarian Lanjutan
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "recommendations" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("recommendations")}>
                      <i className="bi bi-dot"></i> Rekomendasi
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "wishlist" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("wishlist")}>
                      <i className="bi bi-dot"></i> Buku Favorit
                    </button>
                  </div>
                )}
              </div>

              {/* Sirkulasi Saya */}
              <div className="nav-item">
                <button className="nav-link-custom d-flex justify-content-between align-items-center" onClick={() => toggle("sirkulasi")}>
                  <span><i className="bi bi-bookmark" /> Sirkulasi Saya</span>
                  <i className={`bi bi-chevron-${expanded.sirkulasi ? 'up' : 'down'}`} style={{ fontSize: '10px' }} />
                </button>
                {expanded.sirkulasi && (
                  <div className="ps-4 d-flex flex-column gap-1 bg-light-subtle rounded-2 p-1 mt-1">
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "my-book" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("my-book")}>
                      <i className="bi bi-dot"></i> Buku Dipinjam
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "borrowing-history" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("borrowing-history")}>
                      <i className="bi bi-dot"></i> Log Sirkulasi
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "pemesanan" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("pemesanan")}>
                      <i className="bi bi-dot"></i> Antrean Reservasi
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "reservation-history" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("reservation-history")}>
                      <i className="bi bi-dot"></i> Log Reservasi
                    </button>
                  </div>
                )}
              </div>

              {/* Bantuan & Utilitas */}
              <div className="nav-item">
                <button className="nav-link-custom d-flex justify-content-between align-items-center" onClick={() => toggle("utilitas")}>
                  <span><i className="bi bi-question-circle" /> Utilitas & Bantuan</span>
                  <i className={`bi bi-chevron-${expanded.utilitas ? 'up' : 'down'}`} style={{ fontSize: '10px' }} />
                </button>
                {expanded.utilitas && (
                  <div className="ps-4 d-flex flex-column gap-1 bg-light-subtle rounded-2 p-1 mt-1">
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "digital-card" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("digital-card")}>
                      <i className="bi bi-dot"></i> Kartu Digital
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "member-fines" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("member-fines")}>
                      <i className="bi bi-dot"></i> Tagihan Denda
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "acquisition-request" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("acquisition-request")}>
                      <i className="bi bi-dot"></i> Usulan Buku
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "feedback" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("feedback")}>
                      <i className="bi bi-dot"></i> Kritik & Saran
                    </button>
                    <button className={`btn btn-sm btn-link text-start text-decoration-none text-muted ${page === "help-faq" ? "fw-bold text-primary" : ""}`} onClick={() => navigate("help-faq")}>
                      <i className="bi bi-dot"></i> FAQ Perpustakaan
                    </button>
                  </div>
                )}
              </div>

              <div className="nav-item">
                <button className={`nav-link-custom ${page === "profile" ? "active" : ""}`} onClick={() => navigate("profile")}>
                  <i className="bi bi-person" /> Profil Saya
                </button>
              </div>

              <div className="nav-item">
                <button className={`nav-link-custom ${page === "about" ? "active" : ""}`} onClick={() => navigate("about")}>
                  <i className="bi bi-info-circle" /> Tentang Kami
                </button>
              </div>

              <div className="nav-item">
                <button className={`nav-link-custom ${page === "contact" ? "active" : ""}`} onClick={() => navigate("contact")}>
                  <i className="bi bi-chat-dots" /> Hubungi Kami
                </button>
              </div>
            </>
          )}
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-link-custom text-danger fw-semibold" onClick={() => navigate("logout-konfirmasi")}>
            <i className="bi bi-box-arrow-left" /> Keluar Sesi
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
