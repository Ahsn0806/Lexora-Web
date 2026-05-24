import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

// Auth & Public Pages
import LandingPage from './pages/auth/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import AboutPage from './pages/auth/AboutPage';
import ContactPage from './pages/auth/ContactPage';

// Member Pages
import DashboardMember from './pages/member/DashboardMember';
import KatalogPage from './pages/member/KatalogPage';
import AdvancedSearchPage from './pages/member/AdvancedSearchPage';
import BookDetailPage from './pages/member/BookDetailPage';
import BookReviewsPage from './pages/member/BookReviewsPage';
import WriteReviewPage from './pages/member/WriteReviewPage';
import RecommendationsPage from './pages/member/RecommendationsPage';
import WishlistPage from './pages/member/WishlistPage';
import MyBookPage from './pages/member/MyBookPage';
import BorrowingHistoryPage from './pages/member/BorrowingHistoryPage';
import PemesananPage from './pages/member/PemesananPage';
import ReservationHistoryPage from './pages/member/ReservationHistoryPage';
import NotifikasiPage from './pages/member/NotifikasiPage';
import NotificationDetailPage from './pages/member/NotificationDetailPage';
import DigitalCardPage from './pages/member/DigitalCardPage';
import FinesHistoryPage from './pages/member/FinesHistoryPage';
import FinePaymentPage from './pages/member/FinePaymentPage';
import ProfilePage from './pages/member/ProfilePage';
import EditProfilePage from './pages/member/EditProfilePage';
import ChangePasswordPage from './pages/member/ChangePasswordPage';
import AcquisitionRequestPage from './pages/member/AcquisitionRequestPage';
import FeedbackPage from './pages/member/FeedbackPage';
import HelpFAQPage from './pages/member/HelpFAQPage';
import PengumumanPage from './pages/member/PengumumanPage';

// Admin Pages
import DashboardAdmin from './pages/admin/DashboardAdmin';
import KelolaBukuPage from './pages/admin/KelolaBukuPage';
import AddBookPage from './pages/admin/AddBookPage';
import EditBookPage from './pages/admin/EditBookPage';
import BookDetailsAdminPage from './pages/admin/BookDetailsAdminPage';
import AddCategoryPage from './pages/admin/AddCategoryPage';
import KelolaAnggotaPage from './pages/admin/KelolaAnggotaPage';
import AddMemberPage from './pages/admin/AddMemberPage';
import EditMemberPage from './pages/admin/EditMemberPage';
import MemberDetailsAdminPage from './pages/admin/MemberDetailsAdminPage';
import KelolaPeminjamanPage from './pages/admin/KelolaPeminjamanPage';
import LoanDetailsAdminPage from './pages/admin/LoanDetailsAdminPage';
import AddLoanPage from './pages/admin/AddLoanPage';
import ManageFinesPage from './pages/admin/ManageFinesPage';
import LaporanPage from './pages/admin/LaporanPage';
import TransactionReportsPage from './pages/admin/TransactionReportsPage';
import ManageAnnouncementsPage from './pages/admin/ManageAnnouncementsPage';
import AddAnnouncementPage from './pages/admin/AddAnnouncementPage';
import PengaturanPage from './pages/admin/PengaturanPage';

function App() {
  // useState untuk routing & role
  const [page, setPage]               = useState("landing");
  const [role, setRole]               = useState("member");
  const [search, setSearch]           = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // States for shared data passing between pages
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [selectedNim, setSelectedNim]       = useState(null);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  // Halaman tanpa sidebar/topbar
  const noLayout = [
    "landing", "login", "register", "forgot-password", "lupa-password", "reset-password"
  ];

  // Render halaman sesuai state (pengganti Router)
  function renderPage() {
    switch(page) {
      // Modul Autentikasi & Public
      case "landing":           return <LandingPage setPage={setPage} />;
      case "login":             return <LoginPage setPage={setPage} setRole={setRole} />;
      case "register":          return <RegisterPage setPage={setPage} />;
      case "forgot-password":   return <ForgotPasswordPage setPage={setPage} />;
      case "lupa-password":     return <ForgotPasswordPage setPage={setPage} />;
      case "reset-password":     return <ResetPasswordPage setPage={setPage} />;
      case "about":             return <AboutPage setPage={setPage} />;
      case "contact":           return <ContactPage />;

      // Modul Dashboard & Profile
      case "dashboard":         return <DashboardMember setPage={setPage} setSelectedBook={setSelectedBookId} />;
      case "dashboard-admin":   return <DashboardAdmin />;
      case "profile":           return <ProfilePage setPage={setPage} />;
      case "edit-profile":      return <EditProfilePage setPage={setPage} />;
      case "change-password":   return <ChangePasswordPage setPage={setPage} />;

      // Modul Katalog & Exploration
      case "katalog":           return <KatalogPage setSelectedBook={setSelectedBookId} setPage={setPage} />;
      case "advanced-search":   return <AdvancedSearchPage setPage={setPage} setSelectedBook={setSelectedBookId} />;
      case "book-detail":       return <BookDetailPage setPage={setPage} bookId={selectedBookId} setSelectedBook={setSelectedBookId} />;
      case "book-reviews":      return <BookReviewsPage setPage={setPage} />;
      case "write-review":      return <WriteReviewPage setPage={setPage} />;
      case "recommendations":   return <RecommendationsPage setPage={setPage} setSelectedBook={setSelectedBookId} />;
      case "wishlist":          return <WishlistPage setPage={setPage} setSelectedBook={setSelectedBookId} />;

      // Modul Sirkulasi Member
      case "my-book":           return <MyBookPage />;
      case "borrowing-history": return <BorrowingHistoryPage />;
      case "pemesanan":         return <PemesananPage />;
      case "reservation-history": return <ReservationHistoryPage />;
      
      // Modul Bantuan & Utilitas Member
      case "notifikasi":        return <NotifikasiPage />;
      case "notification-detail": return <NotificationDetailPage setPage={setPage} />;
      case "digital-card":      return <DigitalCardPage />;
      case "member-fines":      return <FinesHistoryPage setPage={setPage} />;
      case "fine-payment":      return <FinePaymentPage setPage={setPage} />;
      case "acquisition-request": return <AcquisitionRequestPage />;
      case "feedback":          return <FeedbackPage />;
      case "help-faq":          return <HelpFAQPage />;

      // Modul Admin - Core Management
      case "kelola-buku":       return <KelolaBukuPage setPage={setPage} setSelectedBook={setSelectedBookId} />;
      case "add-book":          return <AddBookPage setPage={setPage} />;
      case "edit-book":          return <EditBookPage setPage={setPage} bookId={selectedBookId} />;
      case "book-details-admin": return <BookDetailsAdminPage setPage={setPage} bookId={selectedBookId} />;
      case "kelola-kategori":    return <LaporanPage setPage={setPage} />; // Reuse LaporanPage for Category Dashboard
      case "add-category":       return <AddCategoryPage setPage={setPage} />;

      // Modul Admin - Member & Transaction Management
      case "kelola-anggota":    return <KelolaAnggotaPage setPage={setPage} setSelectedNim={setSelectedNim} />;
      case "add-member":        return <AddMemberPage setPage={setPage} />;
      case "edit-member":        return <EditMemberPage setPage={setPage} selectedNim={selectedNim} />;
      case "member-details-admin": return <MemberDetailsAdminPage setPage={setPage} selectedNim={selectedNim} />;
      case "kelola-peminjaman": return <KelolaPeminjamanPage setPage={setPage} setSelectedReceipt={setSelectedReceipt} />;
      case "loan-details-admin": return <LoanDetailsAdminPage setPage={setPage} selectedReceipt={selectedReceipt} />;
      case "add-loan":          return <AddLoanPage setPage={setPage} />;

      // Modul Admin - Finance, Reports & Announcements
      case "kelola-denda":      return <ManageFinesPage setPage={setPage} />;
      case "laporan":           return <LaporanPage setPage={setPage} />;
      case "laporan-transaksi": return <TransactionReportsPage />;
      case "pengumuman":        return <PengumumanPage setPage={setPage} />;
      case "kelola-pengumuman": return <ManageAnnouncementsPage setPage={setPage} />;
      case "add-pengumuman":    return <AddAnnouncementPage setPage={setPage} />;
      case "pengaturan":        return <PengaturanPage />;

      // Logout case
      case "logout-konfirmasi":
        setRole("member");
        setPage("landing");
        return null;

      default:
        return (
          <main className="container-fluid py-5 text-center">
            <div className="py-5">
              <i className="bi bi-exclamation-triangle text-warning" style={{ fontSize: '4rem' }}></i>
              <h1 className="fw-bold mt-3">404 - Halaman Tidak Ditemukan</h1>
              <button className="btn btn-lexora rounded-3 mt-3" onClick={() => setPage(role === "admin" ? "dashboard-admin" : "dashboard")}>Kembali ke Beranda</button>
            </div>
          </main>
        );
    }
  }

  // Conditional rendering: halaman tanpa layout
  if (noLayout.includes(page)) return renderPage();

  return (
    <>
      <Sidebar
        page={page} setPage={setPage}
        role={role}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Topbar
        search={search} setSearch={setSearch}
        role={role}
        setSidebarOpen={setSidebarOpen}
        onSearch={() => { if(page !== "katalog") setPage("katalog"); }}
      />
      <div className="main-content">
        {renderPage()}
      </div>
    </>
  );
}

export default App;
