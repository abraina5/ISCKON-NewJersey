import { Shield, AlertTriangle, Users, Mail, ExternalLink, Check } from 'lucide-react';

const policyRules = [
  'All children must be supervised by an adult at all times',
  'Inform children about stranger danger and appropriate boundaries',
  'Certain areas are restricted for child safety',
  'Sunday School enrollment is encouraged for all children',
  'No running inside the temple or outside near the driveway',
  'Temple is not responsible for unattended children',
];

const teamMembers = [
  'Manasi Ganga Devi Dasi',
  'Vijayshri Yadav',
  'Anand Rasa Devi Dasi',
];

export default function ChildProtection() {
  return (
    <div>
      {/* Header */}
      <section className="bg-charcoal py-24 text-center">
        <p className="text-gold uppercase tracking-widest text-sm mb-2">Safety First</p>
        <h1 className="font-heading text-5xl text-white">Child Protection</h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto px-4">
          Ensuring a safe environment for all children at ISKCON of New Jersey.
        </p>
      </section>

      {/* Policy Rules */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
              <Shield className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h2 className="font-heading text-3xl text-white">Policy Guidelines</h2>
              <p className="text-white/60">Rules to keep our children safe</p>
            </div>
          </div>

          <div className="bg-charcoal rounded-lg p-8 border border-gold/20">
            <ul className="space-y-4">
              {policyRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/80">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-4 bg-charcoal border-y border-gold/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 p-6 bg-gold/10 rounded-lg border border-gold/30">
            <AlertTriangle className="w-6 h-6 text-gold shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-xl text-white mb-2">Important Notice</h3>
              <p className="text-white/70">
                Parents and guardians are responsible for the supervision of their children at all times 
                during temple visits. Please ensure your children are aware of temple etiquette and safety 
                guidelines. If you observe any concerning behavior, please report it immediately to our 
                Child Protection Team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Child Protection Team */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
              <Users className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h2 className="font-heading text-3xl text-white">Child Protection Team</h2>
              <p className="text-white/60">Our dedicated team members</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="card text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading text-lg text-white">{member}</h3>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="bg-charcoal rounded-lg p-6 border border-gold/20">
            <h3 className="font-heading text-xl text-gold mb-4">Contact the Team</h3>
            <a 
              href="mailto:ChildProtectionTeam@iskconofnewjersey.org" 
              className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors"
            >
              <Mail className="w-5 h-5 text-gold" />
              ChildProtectionTeam@iskconofnewjersey.org
            </a>
          </div>
        </div>
      </section>

      {/* Resource */}
      <section className="py-16 bg-charcoal border-t border-gold/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl text-white mb-4">Additional Resources</h2>
          <p className="text-white/60 mb-6">
            For more information about child protection in ISKCON temples worldwide, visit:
          </p>
          <a 
            href="https://safetemple.org" 
            target="_blank" 
            rel="noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            safetemple.org <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
