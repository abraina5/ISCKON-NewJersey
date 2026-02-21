import { UserPlus, Mail, Phone, ClipboardList } from 'lucide-react';

export default function GuestRegistration() {
  return (
    <div>
      {/* Header */}
      <section className="bg-charcoal py-24 text-center">
        <p className="text-gold uppercase tracking-widest text-sm mb-2">Welcome</p>
        <h1 className="font-heading text-5xl text-white">Guest Registration</h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto px-4">
          Register for temple events, programs, and special celebrations.
        </p>
      </section>

      {/* Registration Info */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="card mb-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <UserPlus className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h2 className="font-heading text-2xl text-white mb-4">Register for Events & Programs</h2>
                <p className="text-white/70 mb-4">
                  We welcome all guests to participate in our temple programs, festivals, and spiritual events. 
                  Registration helps us prepare adequately and ensure a wonderful experience for everyone.
                </p>
                <p className="text-white/70">
                  To register for upcoming events or programs, please contact the temple directly via email or phone.
                </p>
              </div>
            </div>
          </div>

          {/* What to Register For */}
          <div className="bg-charcoal rounded-lg p-8 border border-gold/20 mb-8">
            <h3 className="font-heading text-xl text-gold mb-4 flex items-center gap-2">
              <ClipboardList className="w-5 h-5" />
              Registration Available For
            </h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                Sunday Feast Programs
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                Festival Celebrations (Janmashtami, Gaura Purnima, etc.)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                Bhagavad Gita Courses
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                Sunday School Enrollment
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                Volunteer Programs
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                Special Retreats and Workshops
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-gold/10 rounded-lg p-8 border border-gold/30">
            <h3 className="font-heading text-xl text-white mb-6">Contact Us to Register</h3>
            <div className="space-y-4">
              <a href="mailto:contactus@iskconofnewjersey.org" className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors">
                <Mail className="w-5 h-5 text-gold" />
                contactus@iskconofnewjersey.org
              </a>
              <a href="tel:8622215870" className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors">
                <Phone className="w-5 h-5 text-gold" />
                (862) 221-5870
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
