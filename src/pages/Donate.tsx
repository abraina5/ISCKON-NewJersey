import { Smartphone, Building, Heart, Check, CreditCard, Phone, ExternalLink } from 'lucide-react';

const donationMethods = [
  {
    icon: Smartphone,
    title: 'Zelle (Preferred)',
    details: 'donations@iskconparsippany.org',
    instructions: 'Use your bank app to send directly',
  },
  {
    icon: Smartphone,
    title: 'Venmo',
    details: '@ISKCONofNewJersey',
    instructions: 'Search for our handle in the Venmo app',
  },
  {
    icon: Building,
    title: 'Monthly EFT',
    details: 'Set up recurring donations',
    instructions: 'Contact Shyamkund Das: (201) 981-2426',
  },
  {
    icon: Building,
    title: 'Check',
    details: 'Make payable to "ISKCON of New Jersey"',
    instructions: 'Mail to: 100 Jacksonville Road, Towaco, NJ 07082',
  },
];

const campaigns = [
  { name: 'Sponsor a Square Foot', amount: '$251', description: 'Support temple expansion' },
  { name: 'Day at Gaura Nitai', amount: '$101/year', description: 'Sponsor deity worship for a day' },
  { name: 'Milk Sponsorship', amount: '$225/year', description: 'Provide milk for deity offerings' },
  { name: 'Sunday Feast Sponsorship', amount: 'Contact us', description: 'Sponsor prasadam for devotees' },
  { name: 'New Parsippany Temple Fund', amount: 'Any amount', description: 'Help build our new temple' },
];

export default function Donate() {
  return (
    <div>
      {/* Header */}
      <section className="bg-charcoal py-24 text-center">
        <p className="text-gold uppercase tracking-widest text-sm mb-2">Support the Mission</p>
        <h1 className="font-heading text-5xl text-white">Ways to Give</h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto px-4">
          Your generous contributions help maintain the temple, support programs, and spread Krishna consciousness.
        </p>
      </section>

      {/* Progress Banner */}
      <section className="py-8 px-4 bg-gold/10 border-y border-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-heading text-2xl mb-2">Over $4 Million Raised!</p>
          <p className="text-white/70 text-sm">Thank you for your continued support of ISKCON New Jersey.</p>
        </div>
      </section>

      {/* Golden Opportunity */}
      <section className="py-16 px-4 border-b border-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mb-6">
            <Heart className="w-10 h-10 text-gold" />
          </div>
          <h2 className="font-heading text-3xl text-gold mb-4">A Golden Opportunity</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            We are expanding our facilities to build new Sunday school classrooms and resident devotee quarters. 
            This is a rare opportunity to participate in seva that will benefit generations of devotees and visitors.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-8">
            <div className="bg-dark rounded-lg p-6 border border-gold/30">
              <p className="text-gold text-4xl font-heading mb-2">$251</p>
              <p className="text-white/60 text-sm">per square foot</p>
            </div>
            <div className="bg-dark rounded-lg p-6 border border-gold/30">
              <p className="text-gold text-4xl font-heading mb-2">4,000</p>
              <p className="text-white/60 text-sm">sq ft available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-12 text-center">How to Donate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationMethods.map((method, i) => (
              <div key={i} className="bg-charcoal rounded-lg p-6 border border-gold/20">
                <method.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-heading text-xl text-white mb-2">{method.title}</h3>
                <p className="text-gold text-sm mb-2 break-all">{method.details}</p>
                <p className="text-white/50 text-xs">{method.instructions}</p>
              </div>
            ))}
          </div>

          {/* Additional Methods */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a 
              href="https://gf.me/u/ycuhui" 
              target="_blank" 
              rel="noreferrer"
              className="bg-charcoal rounded-lg p-6 border border-gold/20 hover:border-gold/40 transition-colors flex items-center gap-4"
            >
              <ExternalLink className="w-8 h-8 text-gold" />
              <div>
                <h3 className="font-heading text-lg text-white">GoFundMe</h3>
                <p className="text-white/50 text-sm">gf.me/u/ycuhui</p>
              </div>
            </a>
            <div className="bg-charcoal rounded-lg p-6 border border-gold/20 flex items-center gap-4">
              <CreditCard className="w-8 h-8 text-gold" />
              <div>
                <h3 className="font-heading text-lg text-white">PayPal</h3>
                <p className="text-white/50 text-sm">Available - contact temple</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Campaigns */}
      <section className="py-24 px-4 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-12 text-center">Donation Campaigns</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign, i) => (
              <div key={i} className="bg-dark rounded-lg p-6 border border-gold/20">
                <h3 className="font-heading text-lg text-white mb-2">{campaign.name}</h3>
                <p className="text-gold text-2xl font-heading mb-2">{campaign.amount}</p>
                <p className="text-white/50 text-sm">{campaign.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 border-t border-gold/20">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-heading text-2xl text-white mb-8">Your Donation Supports</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              'Daily deity worship and temple maintenance',
              'Free Sunday prasadam feast for all visitors',
              'Sunday School for children ages 3-9th grade',
              'Festival celebrations throughout the year',
              'Book distribution and prasadam outreach',
              'New classroom and devotee quarters construction',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/70">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gold text-sm mt-8">
            ISKCON of New Jersey is a 501(c)(3) tax-exempt organization. All donations are 100% tax-deductible.
          </p>
        </div>
      </section>
    </div>
  );
}
