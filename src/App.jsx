import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import StaffPage from './pages/StaffPage'
import AcademicsPage from './pages/AcademicsPage'
import ProgramDetailPage from './pages/ProgramDetailPage'
import BookingPage from './pages/BookingPage'
import OwnerDetailPage from './pages/OwnerDetailPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/academics/:programId" element={<ProgramDetailPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/owners/:ownerId" element={<OwnerDetailPage />} />
      </Routes>
    </>
  )
}

export default App

