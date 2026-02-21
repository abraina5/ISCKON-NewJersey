import { Link } from 'react-router-dom';
import { Heart, Utensils, Phone, Mail, Leaf } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

const samskaras = [
  { name: 'Vivah (Marriage)', inTemple: '$501', outside: '$601' },
  { name: 'Simantonnayana (Baby Shower)', inTemple: '$201', outside: '$251' },
  { name: 'Namakarana (Name giving)', inTemple: '$151', outside: '$201' },
  { name: 'Annaprasana (First food)', inTemple: '$151', outside: '$201' },
  { name: 'Vidyaramba', inTemple: '$201', outside: '$301' },
  { name: 'Mundana (Hair cutting)', inTemple: '$151', outside: '$201' },
  { name: 'Upanayanam (Sacred Thread)', inTemple: '$251', outside: '$301' },
  { name: 'Griha Pravesh', inTemple: '-', outside: '$351' },
  { name: 'Car Puja', inTemple: '$51', outside: '-' },
  { name: 'Birthday Puja', inTemple: '$151', outside: '-' },
  { name: 'Marriage Anniversary', inTemple: '$108', outside: '-' },
  { name: 'Nrsimha Homa', inTemple: '$108', outside: '$151' },
  { name: 'Vastu Puja', inTemple: '-', outside: '$201' },
];

const templeAarti = [
  { name: 'Mangal Aarti', price: '$151' },
  { name: 'RajBhog Aarti', price: '$151' },
  { name: 'Uthana Aarti', price: '$51' },
  { name: 'Sandhya Aarti', price: '$108' },
  { name: 'Shayana Aarti', price: '$51' },
];

const templeBhog = [
  { name: 'Mangal Bhog', price: '$108' },
  { name: 'RajBhog Bhog', price: '$108' },
  { name: 'Uthana Bhog', price: '$51' },
  { name: 'Sandhya Bhog', price: '$108' },
];

const otherServices = [
  { name: 'Puja Thali', price: '$21' },
  { name: 'Tulsi Archana', price: '$108' },
  { name: 'Pushpa Archana', price: '$51' },
  { name: 'Full Day Seva', price: '$501' },
  { name: 'Ekadasi Seva', price: '$108' },
  { name: 'Sunday Feast Sponsorship', price: '$351' },
];

const appetizers = [
  { name: 'Samosa', small: '$65 (35 pcs)', large: '$110 (60 pcs)' },
  { name: 'Khaman', small: '$65 (40 pcs)', large: '$105 (70 pcs)' },
  { name: 'Vada Pav', small: '$65 (35 pcs)', large: '$120 (60 pcs)' },
  { name: 'Dahi Vada', small: '$65 (35 pcs)', large: '$110 (65 pcs)' },
  { name: 'Aloo Bonda', small: '$65 (35 pcs)', large: '$105 (65 pcs)' },
  { name: 'Idli', small: '$65 (35 pcs)', large: '$105 (60 pcs)' },
  { name: 'Veg Cutlet', small: '$75 (35 pcs)', large: '$135 (65 pcs)' },
  { name: 'Dabeli', small: '$65 (35 pcs)', large: '$120 (65 pcs)' },
];

const mainDishes = [
  { name: 'Channa Masala', small: '$70', large: '-' },
  { name: 'Palak Paneer', small: '$65', large: '$140' },
  { name: 'Shahi Paneer', small: '$65', large: '$140' },
  { name: 'Malai Kofta', small: '$75', large: '-' },
  { name: 'Veg Biryani', small: '$65', large: '$125' },
  { name: 'Jeera Rice', small: '$55', large: '-' },
  { name: 'Pav Bhaji', small: '$70', large: '$135' },
  { name: 'Daal', small: '-', large: '$110' },
  { name: 'Veg Manchurian', small: '-', large: '$150' },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-charcoal py-24 text-center">
        <p className="text-gold uppercase tracking-widest text-sm mb-2">How We Serve</p>
        <h1 className="font-heading text-5xl text-white">Temple Services</h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto px-4">
          Sacred ceremonies, catering services, and spiritual programs for your needs.
        </p>
      </section>

      {/* Samskaras Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
              <Heart className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h2 className="font-heading text-3xl text-white">Samskaras & Pujas</h2>
              <p className="text-white/60">Sacred Vedic ceremonies for life's milestones</p>
            </div>
          </div>

          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={`${baseUrl}images/legacy/samskaras-gurugram1.jpeg`}
              alt="Samskaras and temple services"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Samskaras Table */}
          <div className="bg-charcoal rounded-lg overflow-hidden mb-8">
            <div className="grid grid-cols-3 bg-gold/20 p-4 text-sm font-medium">
              <span className="text-gold">Service</span>
              <span className="text-gold text-center">In Temple</span>
              <span className="text-gold text-center">Outside</span>
            </div>
            {samskaras.map((item, i) => (
              <div key={i} className="grid grid-cols-3 p-4 border-b border-white/10 last:border-0 text-sm">
                <span className="text-white/80">{item.name}</span>
                <span className="text-white/60 text-center">{item.inTemple}</span>
                <span className="text-white/60 text-center">{item.outside}</span>
              </div>
            ))}
          </div>

          {/* Temple Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-charcoal rounded-lg p-6 border border-gold/20">
              <h3 className="font-heading text-xl text-gold mb-4">Aarti Services</h3>
              {templeAarti.map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-white/10 last:border-0 text-sm">
                  <span className="text-white/70">{item.name}</span>
                  <span className="text-gold">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="bg-charcoal rounded-lg p-6 border border-gold/20">
              <h3 className="font-heading text-xl text-gold mb-4">Bhog Services</h3>
              {templeBhog.map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-white/10 last:border-0 text-sm">
                  <span className="text-white/70">{item.name}</span>
                  <span className="text-gold">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="bg-charcoal rounded-lg p-6 border border-gold/20">
              <h3 className="font-heading text-xl text-gold mb-4">Other Services</h3>
              {otherServices.map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-white/10 last:border-0 text-sm">
                  <span className="text-white/70">{item.name}</span>
                  <span className="text-gold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Note */}
          <div className="bg-dark rounded-lg p-6 border border-gold/30">
            <p className="text-white/70 text-sm mb-4">
              <span className="text-gold font-medium">Note:</span> Additional $50 for locations more than 15 miles from temple.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="mailto:samskaras@iskconparsippany.org" className="flex items-center gap-2 text-gold hover:text-gold-light">
                <Mail className="w-4 h-4" /> samskaras@iskconparsippany.org
              </a>
              <a href="tel:4082034535" className="flex items-center gap-2 text-gold hover:text-gold-light">
                <Phone className="w-4 h-4" /> Trpti Radha DD: (408) 203-4535
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Section */}
      <section id="yoga" className="py-24 px-4 bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
              <Leaf className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h2 className="font-heading text-3xl text-white">Sunday Morning Yoga</h2>
              <p className="text-white/60">Align body, breath, and devotion in a calm temple setting</p>
            </div>
          </div>

          <div className="mb-8 rounded-2xl overflow-hidden border border-gold/20">
            <img
              src={`${baseUrl}images/legacy/nepali-thali.webp`}
              alt="Nepali thali"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          <div className="bg-dark rounded-lg p-6 border border-gold/30">
            <p className="text-white/70 leading-relaxed mb-6">
              Join us for a gentle, all-levels yoga session designed to support mindfulness, flexibility,
              and inner balance. Our practice blends traditional postures with guided breathing and a
              peaceful atmosphere rooted in bhakti, making it a welcoming space for newcomers and
              experienced practitioners alike.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-gold">
                <span className="font-medium">Occurs:</span>
                <span className="text-white/70">Every Sunday at 10:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-gold">
                <span className="font-medium">Location:</span>
                <span className="text-white/70">ISKCON of New Jersey Temple Hall</span>
              </div>
              <div className="flex items-center gap-2 text-gold">
                <span className="font-medium">Note:</span>
                <span className="text-white/70">Sessions are held based on demand, so please contact the temple if you are interested.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Govinda's Catering Section */}
      <section id="catering" className="py-24 px-4 bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
              <Utensils className="w-7 h-7 text-gold" />
            </div>
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center overflow-hidden">
              <img
                src={`${baseUrl}images/legacy/nepali-thali.webp`}
                alt="Nepali thali"
                className="w-10 h-10 object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl text-white">Govinda's Catering</h2>
              <p className="text-white/60">Authentic vegetarian cuisine for all occasions</p>
            </div>
          </div>

          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={`${baseUrl}images/legacy/catering-0f137d2a.jpg`}
              alt="Govinda's vegetarian catering"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Appetizers */}
          <div className="mb-8">
            <h3 className="font-heading text-xl text-gold mb-4">Appetizers</h3>
            <div className="bg-dark rounded-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gold/20 p-4 text-sm font-medium">
                <span className="text-gold">Item</span>
                <span className="text-gold text-center">Small (15-20)</span>
                <span className="text-gold text-center">Large (36-40)</span>
              </div>
              {appetizers.map((item, i) => (
                <div key={i} className="grid grid-cols-3 p-4 border-b border-white/10 last:border-0 text-sm">
                  <span className="text-white/80">{item.name}</span>
                  <span className="text-white/60 text-center">{item.small}</span>
                  <span className="text-white/60 text-center">{item.large}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Dishes */}
          <div className="mb-8">
            <h3 className="font-heading text-xl text-gold mb-4">Main Dishes</h3>
            <div className="bg-dark rounded-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gold/20 p-4 text-sm font-medium">
                <span className="text-gold">Item</span>
                <span className="text-gold text-center">Small</span>
                <span className="text-gold text-center">Large</span>
              </div>
              {mainDishes.map((item, i) => (
                <div key={i} className="grid grid-cols-3 p-4 border-b border-white/10 last:border-0 text-sm">
                  <span className="text-white/80">{item.name}</span>
                  <span className="text-white/60 text-center">{item.small}</span>
                  <span className="text-white/60 text-center">{item.large}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Catering Notes */}
          <div className="bg-dark rounded-lg p-6 border border-gold/30">
            <p className="text-white/70 text-sm">
              <span className="text-gold font-medium">Please Note:</span> Minimum 2 trays required. Catering is NOT available on Sundays. Call for vegan options.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 border-t border-gold/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl text-white mb-4">Ready to Book a Service?</h2>
          <p className="text-white/60 mb-8">
            Contact us to learn more about our services or to schedule a ceremony.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8622215870" className="btn-primary inline-flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" /> (862) 221-5870
            </a>
            <Link to="/about" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
