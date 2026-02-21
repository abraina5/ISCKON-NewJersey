import { Calendar, Moon, Sun, Info } from 'lucide-react';

const upcomingEkadashis = [
  { name: 'Vijaya Ekadasi', date: 'February 12, 2026', month: 'Feb' },
  { name: 'Amalaki Vrata Ekadashi', date: 'February 27, 2026', month: 'Feb' },
];

export default function EkadashiCalendar() {
  return (
    <div>
      {/* Header */}
      <section className="bg-charcoal py-24 text-center">
        <p className="text-gold uppercase tracking-widest text-sm mb-2">Sacred Days</p>
        <h1 className="font-heading text-5xl text-white">Ekadashi Calendar</h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto px-4">
          Observe the auspicious Ekadashi fasting days for spiritual advancement.
        </p>
      </section>

      {/* About Ekadashi */}
      <section className="py-16 px-4 border-b border-gold/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 p-6 bg-gold/10 rounded-lg border border-gold/30">
            <Info className="w-6 h-6 text-gold shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-xl text-white mb-2">What is Ekadashi?</h3>
              <p className="text-white/70 leading-relaxed">
                Ekadashi is the eleventh day of both the waxing and waning lunar cycles. It is considered 
                highly auspicious for spiritual practices. Devotees observe fasting and increase their 
                devotional activities on this day. Fasting from grains and beans helps control the senses 
                and directs the mind toward spiritual contemplation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Ekadashis */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-12 text-center">Upcoming Ekadashis</h2>
          <div className="space-y-6">
            {upcomingEkadashis.map((ekadashi, i) => (
              <div key={i} className="card flex items-center gap-6">
                <div className="w-20 h-20 rounded-lg bg-gold/10 flex flex-col items-center justify-center shrink-0">
                  <Moon className="w-6 h-6 text-gold mb-1" />
                  <span className="text-gold text-sm font-medium">{ekadashi.month}</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white mb-1">{ekadashi.name}</h3>
                  <p className="text-white/60 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold" />
                    {ekadashi.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fasting Guidelines */}
      <section className="py-24 px-4 bg-charcoal">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-8 text-center">Fasting Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark rounded-lg p-6 border border-gold/20">
              <Sun className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-heading text-xl text-white mb-3">What to Avoid</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  All grains (rice, wheat, oats, etc.)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Beans and legumes
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Certain spices (hing, mustard seeds)
                </li>
              </ul>
            </div>
            <div className="bg-dark rounded-lg p-6 border border-gold/20">
              <Moon className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-heading text-xl text-white mb-3">What You Can Eat</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Fruits and fruit juices
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Nuts (except peanuts)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Potatoes, sweet potatoes
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Milk and milk products
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-white/50 text-sm mt-8">
            Break fast the next day after sunrise. Check with temple for exact times.
          </p>
        </div>
      </section>
    </div>
  );
}
