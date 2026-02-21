import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, ChevronRight, ChevronLeft, Heart, BookOpen, Users } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;
const heroImages = [
  `${baseUrl}images/iskcon-temple-gaura-nitai-deity-altar.jpg`,
  `${baseUrl}images/hero-background.avif`,
  `${baseUrl}images/temple-interior.avif`,
  `${baseUrl}images/ornate-hindu-temple-interior-golden-pillar.jpg`,
];
const events = [
  { title: 'Vijaya Ekadasi', date: 'Feb 12, 2026', description: 'Recently observed with fasting, kirtan, and temple-wide devotional programs.' },
  { title: 'Amalaki Vrata Ekadashi', date: 'Feb 27, 2026', description: 'Auspicious Ekadashi observance with special darshan and devotional focus.' },
  { title: 'Gaura Purnima', date: 'Mar 03, 2026', description: 'Grand appearance day celebration of Sri Chaitanya Mahaprabhu with kirtan and feast.' },
  { title: 'Papamocani Ekadasi', date: 'Mar 14, 2026', description: 'Sacred Ekadashi dedicated to purification through prayer, fasting, and remembrance.' },
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const showNextHero = () => setHeroIndex((current) => (current + 1) % heroImages.length);
  const showPrevHero = () => setHeroIndex((current) => (current - 1 + heroImages.length) % heroImages.length);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    heroImages.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  return (
    <div className="bg-[#e9e1d4]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <Link
          to="/about"
          aria-label="Learn about ISKCON New Jersey"
          className="absolute inset-0 z-10 cursor-pointer"
        />
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="Temple view"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === heroIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-black/65 z-10" />
        <button
          type="button"
          onClick={showPrevHero}
          aria-label="Previous image"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/85 text-black hover:bg-white transition-all duration-200 ease-out hover:scale-105 flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={showNextHero}
          aria-label="Next image"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/85 text-black hover:bg-white transition-all duration-200 ease-out hover:scale-105 flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 px-4 w-full">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="btn-primary">Support the Temple</Link>
            <Link to="/events" className="btn-secondary">View Events</Link>
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="bg-[#d4c7b4] py-8 border-y border-[#b9a98d] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Clock className="w-8 h-8 text-gold" />
            <div>
              <p className="text-white/60 text-sm">Daily Darshan</p>
              <p className="text-white">4:30am - 1pm & 4pm - 8:30pm</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <MapPin className="w-8 h-8 text-gold" />
            <div>
              <p className="text-white/60 text-sm">Location</p>
              <p className="text-white">100 Jacksonville Road, Towaco, NJ</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <Calendar className="w-8 h-8 text-gold" />
            <div>
              <p className="text-white/60 text-sm">Sunday Feast</p>
              <p className="text-white">Every Sunday at 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-4 bg-[#f2ece2] border-y border-[#cbbca4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm mb-2">Join Us</p>
            <h2 className="font-heading text-4xl text-white">Upcoming Events</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <div key={i} className="card bg-[#fff9f0]/90 border-black/10">
                <p className="text-gold text-sm uppercase tracking-wider mb-2">{event.date}</p>
                <h3 className="font-heading text-2xl text-white mb-4">{event.title}</h3>
                <p className="text-white/60">{event.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/events" className="inline-flex items-center text-gold hover:text-gold-light transition-colors">
              View All Events <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* New Temple Project */}
      <section className="py-24 bg-[#ddd1bf] border-y border-[#bea98a]">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img 
              src={`${baseUrl}images/temple-interior.avif`} 
              alt="Temple Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
          </div>
          <div>
            <p className="text-gold uppercase tracking-widest text-sm mb-2">Golden Opportunity</p>
            <h2 className="font-heading text-4xl text-white mb-6">New Temple Project</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              We are embarking on an exciting journey to build a magnificent new temple on our 3-acre property. 
              This new spiritual home will serve the growing community of devotees in New Jersey and provide 
              expanded facilities for worship, education, and cultural programs.
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              Join us in this sacred endeavor. Sponsor a square foot of the new temple for just $251 
              and become a part of history.
            </p>
            <Link to="/donate" className="btn-primary inline-flex items-center">
              <Heart className="w-4 h-4 mr-2" /> Sponsor Now
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-[#e6d8c5] border-y border-[#c2ae90]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm mb-2">What We Offer</p>
            <h2 className="font-heading text-4xl text-white">Temple Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/services" className="card text-center bg-[#f7efe3]/90 border-black/10 block">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-white mb-3">Samskaras & Pujas</h3>
              <p className="text-white/60 text-sm">Sacred ceremonies for life's important milestones.</p>
            </Link>
            <Link to="/education" className="card text-center bg-[#f7efe3]/90 border-black/10 block">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-white mb-3">Sunday School</h3>
              <p className="text-white/60 text-sm">Spiritual education for children ages 3 through 12th grade.</p>
            </Link>
            <Link to="/services#catering" className="card text-center bg-[#f7efe3]/90 border-black/10 block">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-white mb-3">Govinda's Catering</h3>
              <p className="text-white/60 text-sm">Delicious vegetarian cuisine for your special events.</p>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center text-gold hover:text-gold-light transition-colors">
              Explore All Services <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#ccb99b] border-t border-[#ad9778]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl text-white mb-4">Stay Connected</h3>
          <p className="text-white/60 mb-6">Subscribe to receive updates about events, festivals, and temple news.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-[#f5ecdf] border border-[#bca78a] rounded text-black placeholder:text-black/50 focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
