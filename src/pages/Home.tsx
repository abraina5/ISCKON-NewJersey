import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, ChevronRight, Heart, BookOpen, Users } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;
const heroImages = [
  `${baseUrl}images/Guranitai.jpg`,
  `${baseUrl}images/hero-background.avif`,
  `${baseUrl}images/iskcon-temple-gaura-nitai-deity-altar.jpg`,
  `${baseUrl}images/ornate-hindu-temple-interior-golden-pillar.jpg`,
];
const events = [
  { title: 'Ekadashi Observance', date: 'Every 11th day', description: 'Special fasting day with extended kirtan and spiritual programs.' },
  { title: 'Bhagavad Gita Course', date: 'Saturdays 6PM', description: 'Study the timeless wisdom of the Gita in a structured course format.' },
  { title: 'Sunday Feast Program', date: 'Sundays 5PM', description: 'Kirtan, lecture, and free vegetarian feast for all visitors.' },
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === heroIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/60 to-dark z-10" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 px-4 w-full">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="btn-primary">Support the Temple</Link>
            <Link to="/events" className="btn-secondary">View Events</Link>
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="bg-charcoal py-8 border-y border-gold/20">
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
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm mb-2">Join Us</p>
            <h2 className="font-heading text-4xl text-white">Upcoming Events</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <div key={i} className="card">
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
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img 
              src={`${baseUrl}images/legacy/operations-board-untitled.jpg`} 
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
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm mb-2">What We Offer</p>
            <h2 className="font-heading text-4xl text-white">Temple Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-white mb-3">Samskaras & Pujas</h3>
              <p className="text-white/60 text-sm">Sacred ceremonies for life's important milestones.</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-white mb-3">Sunday School</h3>
              <p className="text-white/60 text-sm">Spiritual education for children ages 3 through 12th grade.</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-white mb-3">Govinda's Catering</h3>
              <p className="text-white/60 text-sm">Delicious vegetarian cuisine for your special events.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center text-gold hover:text-gold-light transition-colors">
              Explore All Services <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 border-t border-gold/20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl text-white mb-4">Stay Connected</h3>
          <p className="text-white/60 mb-6">Subscribe to receive updates about events, festivals, and temple news.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-charcoal border border-gold/20 rounded text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
