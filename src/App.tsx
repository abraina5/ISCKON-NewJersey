import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Services from './pages/Services';
import Education from './pages/Education';
import Donate from './pages/Donate';
import About from './pages/About';
import Media from './pages/Media';
import HallRental from './pages/HallRental';
import Volunteer from './pages/Volunteer';
import EkadashiCalendar from './pages/EkadashiCalendar';
import ChildProtection from './pages/ChildProtection';
import GuestRegistration from './pages/GuestRegistration';
import EReimbursements from './pages/EReimbursements';
import FinancialReports from './pages/FinancialReports';
import Webcam from './pages/Webcam';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="ekadashi-calendar" element={<EkadashiCalendar />} />
          <Route path="media" element={<Media />} />
          <Route path="services" element={<Services />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="hall-rental" element={<HallRental />} />
          <Route path="education" element={<Education />} />
          <Route path="child-protection" element={<ChildProtection />} />
          <Route path="donate" element={<Donate />} />
          <Route path="about" element={<About />} />
          <Route path="guest-registration" element={<GuestRegistration />} />
          <Route path="e-reimbursements" element={<EReimbursements />} />
          <Route path="financial-reports" element={<FinancialReports />} />
          <Route path="webcam" element={<Webcam />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
