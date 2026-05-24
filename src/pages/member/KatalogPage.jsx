import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../../data/mockData';
import StatusBadge from '../../components/StatusBadge';

function KatalogPage({ setPage, setSelectedBook }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [kategori, setKategori] = useState("Semua");
  const [sort, setSort] = useState("Terbaru");

  const KATEGORI = ["Semua","Fiksi","Sains","Pendidikan","Non-Fiksi","Komik"];
  const COVERS = ["#e8edf5","#e8f3ee","#f3ede8","#f0e8f3","#edf3e8","#faeeda","#fbeaf0","#e6f1fb","#eeedfe","#e1f5ee"];

  useEffect(() => {
    setLoading(true);
    axios.get("https://openlibrary.org/subjects/fantasy.json?limit=12")
      .then(res => {
        const fetched = res.data.works.map((item, i) => {
          return {
            id: 200 + i,
            judul: item.title,
            pengarang: item.authors && item.authors.length > 0 ? item.authors[0].name : "Unknown Author",
            penerbit: "Open Library",
            kategori: ["Fiksi","Sains","Pendidikan","Non-Fiksi","Komik"][i % 5],
            stok: Math.floor(Math.random() * 5) + 1,
            status: "tersedia",
            cover: COVERS[i % COVERS.length],
            icon: "bi-book",
            isbn: '978-' + Math.floor(Math.random() * 1000000000),
            tahun: item.first_publish_year || 2018,
            halaman: 320,
            rak: "F-0" + (i % 5 + 1),
            deskripsi: `Karya sastra fantasi luar biasa dari penulis kelas dunia yang diakuisisi untuk koleksi global Lexora.`,
          };
        });
        setBooks([...db.getBooks(), ...fetched]);
        setLoading(false);
      })
      .catch(err => {
        setError("Gagal memuat data tambahan API.");
        setBooks(db.getBooks());
        setLoading(false);
      });
  }, []);

  const filtered = books
    .filter(b => {
      const q = keyword.toLowerCase();
      const matchK = kategori === "Semua" || b.kategori === kategori;
      const matchQ = b.judul.toLowerCase().includes(q) || b.pengarang.toLowerCase().includes(q);
      return matchK && matchQ;
    })
    .sort((a,b) => {
      if (sort === "A-Z") return a.judul.localeCompare(b.judul);
      if (sort === "Terpopuler") return b.stok - a.stok;
      return b.id - a.id;
    });

  if (loading) return (
    <div className="loading-wrap">
      <div className="spinner-border text-primary" style={{width:36, height:36}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-2">Memuat katalog digital perpustakaan...</p>
    </div>
  );

  return (
    <main className="container-fluid py-4">
      <div className="page-label mb-2">Explore — Katalog Buku</div>
      <p className="text-muted text-sm mb-4">Temukan ribuan referensi buku sains, sastra, pendidikan, dan komik terbaru di Lexora.</p>

      {error && (
        <div className="alert alert-warning border-0 rounded-3 text-sm py-2 mb-3">
          <i className="bi bi-info-circle me-1" /> Memuat database lokal.
        </div>
      )}

      <form className="mb-4" onSubmit={e => e.preventDefault()}>
        <div className="row g-2 align-items-center">
          <div className="col">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search" style={{color:"#aaa"}} />
              </span>
              <input
                type="search"
                className="form-control border-start-0 rounded-end-3"
                placeholder="Cari judul buku atau pengarang..."
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
              />
            </div>
          </div>
          <div className="col-auto">
            <select
              className="form-select rounded-3"
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              <option>Terbaru</option>
              <option>A-Z</option>
              <option>Terpopuler</option>
            </select>
          </div>
        </div>
        <div className="chip-row mt-3">
          {KATEGORI.map(k => (
            <button
              key={k} type="button"
              className={`chip ${kategori === k ? "active" : ""}`}
              onClick={() => setKategori(k)}
            >
              {k}
            </button>
          ))}
        </div>
      </form>

      <div style={{fontSize:12, color:"#888", marginBottom:12}}>
        Menampilkan <strong style={{color:"#333"}}>{filtered.length} buku</strong>
        {keyword && <> untuk kata kunci "<em>{keyword}</em>"</>}
      </div>

      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3">
        {filtered.map(b => (
          <div className="col" key={b.id}>
            <div className="book-card h-100 p-3 bg-white shadow-sm border-0 rounded-4" style={{ cursor: 'pointer' }} onClick={() => { setSelectedBook(b.id); setPage('book-detail'); }}>
              <div className="book-cover rounded-3 py-4 d-flex align-items-center justify-content-center mb-3" style={{background:b.cover, height: '140px'}}>
                <i className={`bi ${b.icon || 'bi-book'} text-primary`} style={{ fontSize: '3rem' }}></i>
              </div>
              <div className="book-info p-0">
                <div className="book-title fw-bold text-dark text-truncate mb-1" style={{ fontSize: '14px' }}>{b.judul}</div>
                <div className="book-author text-muted text-xs text-truncate mb-3">{b.pengarang}</div>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="badge text-xs" style={{background:"#edf0f7", color:"#3a4a7a"}}>
                    {b.kategori}
                  </span>
                  <span className={`text-xxs px-2 py-1 rounded-pill ${b.stok > 0 ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`} style={{ fontSize: '10px' }}>
                    {b.stok > 0 ? 'Tersedia' : 'Kosong'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default KatalogPage;
