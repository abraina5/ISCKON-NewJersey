import { Link } from 'react-router-dom';
import { Heart, Utensils, Sparkles, Hand, Car } from 'lucide-react';

const volunteerOptions = [
  {
    icon: Utensils,
    title: 'Cooking for Deities',
    description: 'Prepare offerings for the Lord with love and devotion. Learn traditional Vaishnava cooking.',
  },
  {
    icon: Sparkles,
    title: 'Floor Sweeping & Mopping',
    description: 'Keep the temple clean and sacred. A humble service that purifies the heart.',
  },
  {
    icon: Hand,
    title: 'Pot Washing',
    description: 'Assist in cleaning pots and utensils after cooking. An essential service for the kitchen.',
  },
  {
    icon: Car,
    title: 'Temple Vehicle Cleaning',
    description: 'Help keep temple vehicles clean and well cared for. A practical service to support temple outreach.',
  },
  {
    icon: Heart,
    title: 'Prasadam Serving',
    description: 'Serve sanctified food to devotees and guests during Sunday Feast and festivals.',
  },
];

export default function Volunteer() {
  return (
    <div>
      {/* Header */}
      <section className="bg-charcoal py-24 text-center">
        <p className="text-gold uppercase tracking-widest text-sm mb-2">Serve the Lord</p>
        <h1 className="font-heading text-5xl text-white">Volunteer</h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto px-4">
          Engage in devotional service and experience the joy of seva.
        </p>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 border-b border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-white/80 text-xl md:text-2xl leading-relaxed italic font-heading">
            "Whatever you do, whatever you eat, whatever you offer or give away, and whatever 
            austerities you perform - do that, O son of Kunti, as an offering to Me."
          </blockquote>
          <p className="text-gold mt-6">- Bhagavad Gita 9.27</p>
        </div>
      </section>

      {/* Volunteer Options */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-12 text-center">Ways to Serve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {volunteerOptions.map((option, i) => (
              <div key={i} className="card">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <option.icon className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-white mb-2">{option.title}</h3>
                    <p className="text-white/60">{option.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Seva */}
      <section className="py-24 px-4 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-white mb-8">Benefits of Seva</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-white font-medium mb-2">Spiritual Growth</h3>
              <p className="text-white/60 text-sm">Service to the Lord purifies the heart and advances spiritual progress.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <Hand className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-white font-medium mb-2">Community</h3>
              <p className="text-white/60 text-sm">Connect with like-minded devotees and build lasting friendships.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-white font-medium mb-2">Joy</h3>
              <p className="text-white/60 text-sm">Experience the transcendental happiness that comes from selfless service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Programs */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-8 text-center">Volunteer Programs</h2>
          <p className="text-white/60 max-w-3xl mx-auto text-center mb-12">
            Offer your time as a heartfelt gift to Sri Sri Gaura Nitai. Whether you are a student,
            a young devotee, or a working professional, your service helps the temple flourish and
            spreads Krishna consciousness in our community.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="font-heading text-xl text-white mb-3">Temple Volunteers & Youth Hours</h3>
              <p className="text-white/60">
                We welcome students and youth volunteers seeking service hours. From assisting in
                festivals to helping with prasadam and temple activities, you can earn volunteer
                hours while participating in uplifting devotional service.
              </p>
            </div>
            <div className="card">
              <h3 className="font-heading text-xl text-white mb-3">Corporate Volunteer Reimbursement</h3>
              <p className="text-white/60">
                Many companies offer volunteer reimbursement programs. If your employer supports
                matching or reimbursement for volunteer hours, we can provide confirmation of your
                service at the temple.
              </p>
            </div>
            <div className="card">
              <h3 className="font-heading text-xl text-white mb-3">Shelter Cooking Seva</h3>
              <p className="text-white/60">
                Join our shelter cooking seva to prepare and serve meals with devotion and care.
                If your family or group can support ingredients, sponsor a cooking day, or lend a
                helping hand, we would be grateful for your support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-gold/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl text-white mb-4">Ready to Serve?</h2>
          <p className="text-white/60 mb-8">
            Visit the temple or contact us to learn about volunteer opportunities.
          </p>
          <Link to="/about" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
