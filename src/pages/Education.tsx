import { Link } from 'react-router-dom';
import { BookOpen, Users, Clock, Calendar, ChevronRight, ExternalLink } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;
const classes = [
  { name: 'Gopal', ages: 'Ages 3-Kindergarten', description: 'Introduction to Krishna consciousness through stories and activities' },
  { name: 'Kishore', ages: 'Grades 1-3', description: 'Building foundational knowledge of Vedic culture and values' },
  { name: 'Madhava', ages: 'Grades 4-6', description: 'Deeper study of scriptures and spiritual practices' },
  { name: 'Govinda', ages: 'Grades 7-9', description: 'Advanced topics and youth engagement programs' },
];

const fees = [
  { type: 'Early Bird', price: '$141' },
  { type: 'Regular', price: '$151' },
  { type: 'Late Registration', price: '$181' },
];

export default function Education() {
  return (
    <div>
      {/* Header */}
      <section className="bg-charcoal py-24 text-center">
        <p className="text-gold uppercase tracking-widest text-sm mb-2">Learn & Grow</p>
        <h1 className="font-heading text-5xl text-white">Spiritual Education</h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto px-4">
          Programs for all ages to deepen understanding of Vedic wisdom and Krishna consciousness.
        </p>
      </section>

      {/* Sunday School */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Sunday School Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src={`${baseUrl}images/legacy/sunday-school-balika.jpeg`} 
              alt="Sunday School Children" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gold uppercase tracking-widest text-sm mb-2">For Children</p>
              <h2 className="font-heading text-4xl text-white mb-6">Sunday School</h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Our Sunday School program provides spiritual education for children from ages 3 through 9th grade. 
                Students learn about Krishna, the Bhagavad Gita, Vedic culture, Sanskrit, and moral values through 
                engaging activities, stories, and interactive lessons.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Every Sunday</p>
                    <p className="text-white/60 text-sm">5:00 PM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Season</p>
                    <p className="text-white/60 text-sm">October - June</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-medium">2025-2026 Session Start</p>
                    <p className="text-white/60 text-sm">October 5th, 2025</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://tinyurl.com/SSchool2025" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary inline-flex items-center"
              >
                Register Now <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="space-y-6">
              {/* Classes */}
              <div className="card">
                <h3 className="font-heading text-xl text-gold mb-4">Classes by Age Group</h3>
                <div className="space-y-4">
                  {classes.map((cls, i) => (
                    <div key={i} className="pb-4 border-b border-white/10 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-white font-medium">{cls.name}</span>
                        <span className="text-gold text-sm">{cls.ages}</span>
                      </div>
                      <p className="text-white/50 text-sm">{cls.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fees */}
              <div className="card">
                <h3 className="font-heading text-xl text-gold mb-4">Registration Fees</h3>
                <div className="space-y-3">
                  {fees.map((fee, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/70">{fee.type}</span>
                      <span className="text-gold font-medium">{fee.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adult Education */}
      <section className="py-24 px-4 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm mb-2">For Adults</p>
            <h2 className="font-heading text-4xl text-white">Courses & Classes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <BookOpen className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-heading text-xl text-white mb-3">Bhagavad Gita 10-Week Course</h3>
              <p className="text-white/60 mb-4 text-sm">
                Systematic study of the Gita with verse-by-verse analysis and practical application.
              </p>
              <div className="flex items-center gap-2 text-gold text-sm">
                <Calendar className="w-4 h-4" />
                <span>Starting Feb 5, 2026 - 8:00-9:00 PM</span>
              </div>
            </div>
            <div className="card">
              <BookOpen className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-heading text-xl text-white mb-3">Srimad Bhagavatam</h3>
              <p className="text-white/60 mb-4 text-sm">
                Daily morning class exploring the beautiful pastimes of Lord Krishna.
              </p>
              <div className="flex items-center gap-2 text-gold text-sm">
                <Calendar className="w-4 h-4" />
                <span>Daily 8:30 AM</span>
              </div>
            </div>
            <div className="card">
              <BookOpen className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-heading text-xl text-white mb-3">Bhakti Shastri</h3>
              <p className="text-white/60 mb-4 text-sm">
                In-depth study program covering foundational texts of Gaudiya Vaishnavism.
              </p>
              <div className="flex items-center gap-2 text-gold text-sm">
                <Calendar className="w-4 h-4" />
                <span>Contact for schedule</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
