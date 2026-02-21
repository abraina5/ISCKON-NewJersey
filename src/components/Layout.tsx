import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Clock, MapPin, Mail, Phone, Facebook, Instagram, Twitter, ChevronDown, ExternalLink } from 'lucide-react';
import DarshanModal from './DarshanModal';

const baseUrl = import.meta.env.BASE_URL;

const navItems = [
  { name: 'Home', path: '/' },
  { 
    name: 'Events', 
    path: '/events',
    submenu: [
      { name: 'All Events', path: '/events' },
      { name: 'Ekadashi Calendar', path: '/ekadashi-calendar' },
    ]
  },
  { 
    name: 'Media', 
    path: '/media',
    submenu: [
      { name: 'All Media', path: '/media' },
      { name: 'Webcam', path: '/webcam' },
      { name: 'Newsletter', path: 'http://eepurl.com/dItT-H', external: true },
      { name: 'Instagram Feed', path: 'https://instagram.com/iskconofnewjersey', external: true },
      { name: 'Videos', path: 'https://www.youtube.com/@ISKCONofNewJersey', external: true },
    ]
  },
  { 
    name: 'Services', 
    path: '/services',
    submenu: [
      { name: 'Puja/Samskaras', path: '/services' },
      { name: 'Yoga', path: '/services#yoga' },
      { name: 'Volunteer', path: '/volunteer' },
      { name: "Govinda's Catering", path: '/services#catering' },
      { name: 'Vehicle Registration', path: 'https://iskcon-towaco.github.io/vehicle/', external: true },
      { name: 'Hall Rental', path: '/hall-rental' },
    ]
  },
  { 
    name: 'Sunday School', 
    path: '/education',
    submenu: [
      { name: 'Sunday School', path: '/education' },
      { name: 'Child Protection', path: '/child-protection' },
    ]
  },
  { 
    name: 'About', 
    path: '/about',
    submenu: [
      { name: 'About Us', path: '/about' },
      { name: 'Guest Registration', path: '/guest-registration' },
      { name: 'e-Reimbursements', path: '/e-reimbursements' },
      { name: 'Financial Reports', path: '/financial-reports' },
    ]
  },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darshanOpen, setDarshanOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.site-content section');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    sections.forEach((section, index) => {
      section.classList.add('reveal-section');
      section.classList.remove('is-visible');
      section.style.setProperty('--reveal-delay', `${Math.min(index * 70, 280)}ms`);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Top Banner - New Temple Promo */}
      <div className="bg-gold/10 border-b border-gold/30 py-2 px-4 text-center">
        <a 
          href="http://www.iskconparsippany.org" 
          target="_blank" 
          rel="noreferrer"
          className="text-sm text-white/80 hover:text-gold transition-colors inline-flex items-center gap-2"
        >
          <span className="text-gold font-medium">New Temple in Parsippany!</span>
          <span className="hidden sm:inline">- It will offer you and your family fresh air of spirituality</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-white rounded-md p-1.5">
                <img 
                  src={`${baseUrl}images/legacy/logo-iskcon-nj.jpg`} 
                  alt="ISKCON Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-gold font-heading text-lg leading-tight">ISKCON</p>
                <p className="text-white/70 text-xs tracking-wider">New Jersey</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-6">
              {navItems.map((item) => (
                <div 
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`uppercase text-xs tracking-widest transition-all duration-200 ease-out hover:-translate-y-0.5 flex items-center gap-1 py-2 ${
                      location.pathname === item.path ? 'text-gold' : 'text-white/80 hover:text-gold'
                    }`}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="w-3 h-3" />}
                  </Link>
                  
                  {/* Dropdown */}
                  {item.submenu && openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 w-48 bg-charcoal border border-gold/20 rounded-lg shadow-xl py-2 z-50">
                      {item.submenu.map((sub) => (
                        sub.external ? (
                          <a
                            key={sub.path}
                            href={sub.path}
                            target="_blank"
                            rel="noreferrer"
                            className="block px-4 py-2 text-sm text-white/70 hover:text-gold hover:bg-gold/5 transition-all duration-200 ease-out hover:pl-5 flex items-center justify-between"
                          >
                            {sub.name}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block px-4 py-2 text-sm text-white/70 hover:text-gold hover:bg-gold/5 transition-all duration-200 ease-out hover:pl-5"
                          >
                            {sub.name}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <a 
                href="http://eepurl.com/dItT-H" 
                target="_blank" 
                rel="noreferrer"
                className="btn-secondary text-xs py-2 px-3"
              >
                Join Mailing List
              </a>
              <button onClick={() => setDarshanOpen(true)} className="btn-secondary text-xs py-2 px-3">
                <Clock className="w-4 h-4 inline mr-1" />
                Darshan
              </button>
              <Link to="/donate" className="btn-primary text-xs py-2 px-4">Give</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="xl:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="xl:hidden bg-charcoal border-t border-gold/20 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block text-lg text-white/80 hover:text-gold py-2"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((sub) => (
                        sub.external ? (
                          <a
                            key={sub.path}
                            href={sub.path}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setMobileOpen(false)}
                            className="block text-sm text-white/50 hover:text-gold py-1 flex items-center gap-2"
                          >
                            {sub.name}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setMobileOpen(false)}
                            className="block text-sm text-white/50 hover:text-gold py-1"
                          >
                            {sub.name}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <a 
                  href="http://eepurl.com/dItT-H" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-secondary block text-center"
                >
                  Join Mailing List
                </a>
                <button onClick={() => { setDarshanOpen(true); setMobileOpen(false); }} className="btn-secondary w-full">
                  Darshan Times
                </button>
                <Link to="/donate" onClick={() => setMobileOpen(false)} className="btn-primary block text-center">
                  Give
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="site-content">
        <Outlet />
      </main>

      {/* New Temple Promo Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-gold/20 to-gold/5 border-y border-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-heading text-2xl text-white mb-3">New Temple in Parsippany</h3>
          <p className="text-white/70 mb-6">It will offer you and your family fresh air of spirituality</p>
          <a 
            href="http://www.iskconparsippany.org" 
            target="_blank" 
            rel="noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Learn More <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark border-t border-gold/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div>
              <h4 className="font-heading text-xl text-gold mb-4">ISKCON of New Jersey</h4>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. Serving the community since 1981.
              </p>
              <div className="flex gap-4">
                <a href="https://facebook.com/iskconofnj" target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/iskconofnewjersey" target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/iskconnewjersey" target="_blank" rel="noreferrer" className="text-white/60 hover:text-gold">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-xl text-gold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white/60 hover:text-gold text-sm">Home</Link></li>
                <li><Link to="/events" className="text-white/60 hover:text-gold text-sm">Events</Link></li>
                <li><Link to="/services" className="text-white/60 hover:text-gold text-sm">Services</Link></li>
                <li><Link to="/education" className="text-white/60 hover:text-gold text-sm">Sunday School</Link></li>
                <li><Link to="/donate" className="text-white/60 hover:text-gold text-sm">Donate</Link></li>
                <li><Link to="/about" className="text-white/60 hover:text-gold text-sm">About</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading text-xl text-gold mb-4">Services</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><Link to="/services" className="hover:text-gold">Samskaras & Pujas</Link></li>
                <li><Link to="/education" className="hover:text-gold">Sunday School</Link></li>
                <li><Link to="/services" className="hover:text-gold">Govinda's Catering</Link></li>
                <li><Link to="/hall-rental" className="hover:text-gold">Hall Rental</Link></li>
                <li><Link to="/volunteer" className="hover:text-gold">Volunteer</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading text-xl text-gold mb-4">Contact</h4>
              <div className="space-y-3 text-white/60 text-sm">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-gold shrink-0" />
                  100 Jacksonville Road, Towaco, NJ 07082
                </p>
                <a href="mailto:contactus@iskconofnewjersey.org" className="flex items-center gap-2 hover:text-gold">
                  <Mail className="w-4 h-4 text-gold" />
                  contactus@iskconofnewjersey.org
                </a>
                <a href="tel:8622215870" className="flex items-center gap-2 hover:text-gold">
                  <Phone className="w-4 h-4 text-gold" />
                  (862) 221-5870
                </a>
              </div>
            </div>
          </div>

          <div className="gold-divider my-12" />
          
          <p className="text-center text-white/40 text-sm">
            &copy; {new Date().getFullYear()} ISKCON of New Jersey. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Darshan Modal */}
      <DarshanModal isOpen={darshanOpen} onClose={() => setDarshanOpen(false)} />
    </div>
  );
}
