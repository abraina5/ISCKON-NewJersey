import { MapPin, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;
const boardMembers = [
  { name: 'Madhupati Das', role: 'GBC Representative', image: `${baseUrl}images/leadership/madhupati-das.jpg`, description: 'Represents the Governing Body Commission locally' },
  { name: 'Nilamani Das', role: 'Temple President', image: `${baseUrl}images/leadership/nilamani-das.jpg`, description: 'Oversees all temple operations and spiritual programs' },
  { name: 'Shyamkund Das', role: 'Vice President', image: `${baseUrl}images/leadership/shyamkund-das.jpg`, description: 'Assists in management and community development' },
  { name: 'Madanagopala Das', role: 'Communications Director', image: `${baseUrl}images/leadership/madanagopala-das.jpg`, description: 'Manages outreach and temple communications' },
];

export default function About() {
  return (
    <div>
      {/* Header with Background Image */}
      <section className="relative py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/10 via-dark/20 to-dark/30 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${baseUrl}images/iskcon-temple-gaura-nitai-deity-altar.jpg)` }}
        />
        <div className="relative z-20">
          <p className="text-gold uppercase tracking-widest text-sm mb-2">Our Story</p>
          <h1 className="font-heading text-5xl text-white">About ISKCON NJ</h1>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto px-4">
            Serving the New Jersey community with devotion since 1981.
          </p>
        </div>
      </section>

      {/* Gaura Nitai Highlight */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-gold/30 shadow-lg">
            <img
              src={`${baseUrl}images/iskcon-temple-gaura-nitai-deity-altar.jpg`}
              alt="Gaura Nitai Deities"
              className="w-full h-[380px] md:h-[520px] object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-8 text-center">Our History</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-white/70 leading-relaxed mb-6">
              ISKCON of New Jersey was established in 1981 as part of the International Society for Krishna 
              Consciousness, founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada in 1966. Our 
              temple sits on a beautiful 3-acre property in Towaco, New Jersey, serving as a spiritual 
              home for thousands of devotees and visitors.
            </p>
            <p className="text-white/70 leading-relaxed mb-6">
              For over four decades, we have been dedicated to sharing the timeless wisdom of the Vedic 
              scriptures and the practice of bhakti-yoga. We distribute transcendental literature, 
              provide prasadam (sanctified vegetarian food), and offer training in the principles of 
              bhakti-yoga to all sincere seekers.
            </p>
            <p className="text-white/70 leading-relaxed">
              Today, we continue the mission of Srila Prabhupada by offering daily worship services, 
              spiritual education programs, cultural events, and community outreach. We are also embarking 
              on an exciting expansion project to build new Sunday school classrooms and resident devotee 
              quarters to better serve our growing community.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-charcoal">
        {/* Leadership Hero Banner */}
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/50 to-charcoal z-10" />
          <img
            src={`${baseUrl}images/leadership/leadershippillar.avif`}
            alt="ISKCON Temple Architecture"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <p className="text-gold uppercase tracking-widest text-sm mb-2">Our Team</p>
            <h2 className="font-heading text-4xl md:text-5xl text-white drop-shadow-lg">Leadership</h2>
            <p className="text-white/80 mt-4 max-w-2xl text-lg drop-shadow-md">
              Guided by devotion and service to the community
            </p>
          </div>
        </div>

        <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Co-GBC Zonal Secretaries */}
          <div className="mb-12">
            <h3 className="font-heading text-xl text-gold mb-6 text-center">GBC Zonal Secretaries</h3>
            <div className="max-w-3xl mx-auto">
              <div className="card overflow-hidden">
                <img 
                  src={`${baseUrl}images/leadership/co-gbc-secretaries.png`} 
                  alt="HH Devamrita Swami and HG Anuttama Dasa - Co-GBC Zonal Secretaries" 
                  className="w-full h-auto object-cover rounded-lg mb-4"
                />
                <div className="text-center">
                  <h4 className="font-heading text-lg text-white">
                    His Holiness Devamrita Swami & His Grace Anuttama Dasa
                  </h4>
                  <p className="text-gold text-sm uppercase tracking-wider mt-1">Co-GBC Zonal Secretaries</p>
                  <p className="text-white/60 text-sm mt-3">
                    Providing spiritual guidance and strategic direction for the zone
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Board of Directors */}
          <div>
            <h3 className="font-heading text-xl text-gold mb-6 text-center">Board of Directors</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {boardMembers.map((member, i) => (
                <div key={i} className="card text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold/30">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-heading text-lg text-white mb-1">{member.name}</h4>
                  <p className="text-gold text-sm uppercase tracking-wider mb-3">{member.role}</p>
                  <p className="text-white/60 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 border-y border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-gold mb-6">Our Mission</h2>
          <p className="text-white/80 text-xl leading-relaxed italic">
            "To systematically propagate spiritual knowledge to society at large and to educate all peoples 
            in the techniques of spiritual life in order to check the imbalance of values in life and to 
            achieve real unity and peace in the world."
          </p>
          <p className="text-white/50 mt-4">- His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, Founder-Acharya</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-12 text-center">Contact Us</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="card">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl text-white mb-2">Address</h3>
                    <p className="text-white/70">100 Jacksonville Road</p>
                    <p className="text-white/70">Towaco, NJ 07082</p>
                    <a 
                      href="https://maps.google.com/?q=100+Jacksonville+Road+Towaco+NJ" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gold text-sm mt-2 inline-block hover:underline"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl text-white mb-2">Temple Hours</h3>
                    <p className="text-white/70">Monday - Saturday: Multiple darshan times</p>
                    <p className="text-white/70">Sunday Program: 4:00pm - 7:45pm</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl text-white mb-2">Email</h3>
                    <p className="text-white/70">contactus@iskconofnewjersey.org</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-heading text-xl text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://facebook.com/iskconofnj" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/iskconofnewjersey" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/iskconnewjersey" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-charcoal rounded-lg overflow-hidden border border-gold/20 h-[500px]">
              <iframe
                title="ISKCON of New Jersey Map"
                src="https://www.google.com/maps?q=100+Jacksonville+Road+Towaco+NJ+07082&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
