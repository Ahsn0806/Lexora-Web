import React from 'react';

function Topbar({ search, setSearch, onSearch, role, setSidebarOpen }) {
  return (
    <header className="topbar">
      {/* Hamburger mobile */}
      <button
        className="btn d-md-none me-2 p-1"
        style={{color:"#555", border:"none", background:"transparent"}}
        onClick={() => setSidebarOpen(p => !p)}
      >
        <i className="bi bi-list" style={{fontSize:22}} />
      </button>

      {/* Search form — menggunakan <form> dan <input type> sesuai soal */}
      <form
        className="search-box"
        onSubmit={e => { e.preventDefault(); onSearch && onSearch(); }}
        role="search"
      >
        <i className="bi bi-search" style={{color:"#aaa", fontSize:14}} />
        <input
          type="search"
          placeholder="Mau baca apa hari ini...?"
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Cari buku"
        />
        <button type="submit" style={{border:"none",background:"transparent",color:"#aaa"}}>
          <i className="bi bi-sliders" />
        </button>
      </form>

      <div className="ms-auto d-flex align-items-center gap-2">
        <i className="bi bi-bell" style={{fontSize:18, color:"#555", cursor:"pointer"}} />
        <div className="user-avatar">{role === "admin" ? "AD" : "AR"}</div>
        <span style={{fontSize:13, color:"#555"}} className="d-none d-sm-inline">
          {role === "admin" ? "Admin" : "Anggota"}
        </span>
      </div>
    </header>
  );
}

export default Topbar;
