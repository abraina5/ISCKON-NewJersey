import { Users, Clock, DollarSign, AlertCircle, Phone, Mail, Check, X } from 'lucide-react';

const rates = [
  { item: 'Base Rate (4 hours)', price: '$400' },
  { item: 'Additional Hour', price: '$75' },
  { item: 'Kitchen Use (with approval)', price: '$50/hour' },
  { item: 'Sound System & Projector', price: '$50' },
  { item: 'Plates/Cups/Spoons', price: '$0.50/person' },
  { item: 'Security Deposit (refundable)', price: '$150' },
];

const eventsHosted = [
  'Birthday Parties',
  'Baby Showers',
  'Engagement Ceremonies',
  'Wedding Anniversaries',
  'Naming Ceremonies',
  'Religious Functions',
];

const rules = [
  { allowed: false, text: 'Alcohol' },
  { allowed: false, text: 'Caffeine' },
  { allowed: false, text: 'Non-vegetarian food' },
  { allowed: false, text: 'Eggs' },
];

export default function HallRental() {
  return (
    <div>
      {/* Header */}
      <section className="bg-charcoal py-24 text-center">
        <p className="text-gold uppercase tracking-widest text-sm mb-2">Venue</p>
        <h1 className="font-heading text-5xl text-white">Hall Rental</h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto px-4">
          Host your special events in our beautiful temple hall.
        </p>
      </section>

      {/* General Info */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-3xl text-white mb-8">General Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Capacity</h3>
                  <p className="text-white/60">Up to 200 guests</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Hours</h3>
                  <p className="text-white/60">Weekday/Saturday: Vacate by 10 PM</p>
                  <p className="text-white/60">Sunday: Vacate by 3 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Cleaning</h3>
                  <p className="text-white/60">Cleaning is the renter's responsibility</p>
                </div>
              </div>
            </div>

            {/* Not Allowed */}
            <div className="mt-8 p-6 bg-charcoal rounded-lg border border-gold/20">
              <h3 className="font-heading text-xl text-gold mb-4">Not Permitted</h3>
              <div className="grid grid-cols-2 gap-3">
                {rules.map((rule, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/70">
                    <X className="w-4 h-4 text-red-400" />
                    <span>{rule.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rates */}
          <div>
            <h2 className="font-heading text-3xl text-white mb-8">Rental Rates</h2>
            <div className="bg-charcoal rounded-lg overflow-hidden border border-gold/20">
              {rates.map((rate, i) => (
                <div key={i} className="flex justify-between items-center p-4 border-b border-white/10 last:border-0">
                  <span className="text-white/70">{rate.item}</span>
                  <span className="text-gold font-medium">{rate.price}</span>
                </div>
              ))}
            </div>

            {/* Events Hosted */}
            <div className="mt-8">
              <h3 className="font-heading text-xl text-gold mb-4">Events We Host</h3>
              <div className="grid grid-cols-2 gap-3">
                {eventsHosted.map((event, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/70">
                    <Check className="w-4 h-4 text-gold" />
                    <span>{event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Catering Note */}
            <div className="mt-8 p-6 bg-gold/10 rounded-lg border border-gold/30">
              <DollarSign className="w-8 h-8 text-gold mb-2" />
              <h3 className="font-heading text-lg text-white mb-2">Catering Available</h3>
              <p className="text-white/60 text-sm">
                Govinda's Catering can provide delicious vegetarian food for your event. Contact us for menu options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-charcoal border-t border-gold/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl text-white mb-4">Book the Hall</h2>
          <p className="text-white/60 mb-8">
            Contact us to check availability and make a reservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8622215870" className="btn-primary inline-flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" /> (862) 221-5870
            </a>
            <a href="mailto:contactus@iskconofnewjersey.org" className="btn-secondary inline-flex items-center justify-center">
              <Mail className="w-4 h-4 mr-2" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
