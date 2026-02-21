import { Video, Camera, Instagram, Newspaper, ExternalLink } from 'lucide-react';

const recentVideos = [
  { title: 'Initiation Ceremony 1/4/26', description: 'Sacred initiation ceremony at ISKCON NJ' },
  { title: 'Sunday Feast Class by Shriman Kratu Das Adhikari', description: 'Weekly spiritual discourse' },
  { title: 'Srimad Bhagavatam Class by HG Haripad Das', description: 'Morning class on Srimad Bhagavatam' },
  { title: 'Initiation Ceremony By Madan Gopal Das', description: 'Initiation ceremony highlights' },
];

export default function Media() {
  return (
    <div>
      {/* Header */}
      <section className="bg-charcoal py-24 text-center">
        <p className="text-gold uppercase tracking-widest text-sm mb-2">Stay Connected</p>
        <h1 className="font-heading text-5xl text-white">Media</h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto px-4">
          Watch live darshan, browse our videos, and stay updated with temple news.
        </p>
      </section>

      {/* Media Links Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Newsletter */}
          <a 
            href="http://eepurl.com/dItT-H" 
            target="_blank" 
            rel="noreferrer"
            className="card hover:border-gold/40 transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Newspaper className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-2xl text-white mb-2 group-hover:text-gold transition-colors">Newsletter</h3>
                <p className="text-white/60 mb-4">Subscribe to receive temple updates, event announcements, and spiritual articles.</p>
                <span className="text-gold text-sm inline-flex items-center">
                  Subscribe Now <ExternalLink className="w-4 h-4 ml-2" />
                </span>
              </div>
            </div>
          </a>

          {/* Webcam */}
          <div className="card">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Camera className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-2xl text-white mb-2">Live Darshan</h3>
                <p className="text-white/60 mb-4">View live darshan of Sri Sri Radha Vrindavan Chandra from anywhere in the world.</p>
                <span className="text-gold text-sm">Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <a 
            href="https://instagram.com/iskconofnewjersey" 
            target="_blank" 
            rel="noreferrer"
            className="card hover:border-gold/40 transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Instagram className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-2xl text-white mb-2 group-hover:text-gold transition-colors">Instagram Feed</h3>
                <p className="text-white/60 mb-4">Follow us for daily updates, festival photos, and behind-the-scenes moments.</p>
                <span className="text-gold text-sm inline-flex items-center">
                  @iskconofnewjersey <ExternalLink className="w-4 h-4 ml-2" />
                </span>
              </div>
            </div>
          </a>

          {/* Videos */}
          <a 
            href="https://www.youtube.com/@ISKCONofNewJersey" 
            target="_blank" 
            rel="noreferrer"
            className="card hover:border-gold/40 transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Video className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-heading text-2xl text-white mb-2 group-hover:text-gold transition-colors">YouTube Videos</h3>
                <p className="text-white/60 mb-4">Watch classes, kirtans, festivals, and ceremonies from our YouTube channel.</p>
                <span className="text-gold text-sm inline-flex items-center">
                  Visit Channel <ExternalLink className="w-4 h-4 ml-2" />
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Recent Videos */}
      <section className="py-24 px-4 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl text-white mb-12 text-center">Recent Videos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {recentVideos.map((video, i) => (
              <div key={i} className="bg-dark rounded-lg p-6 border border-gold/20">
                <div className="flex items-center gap-3 mb-2">
                  <Video className="w-5 h-5 text-gold" />
                  <h3 className="font-heading text-lg text-white">{video.title}</h3>
                </div>
                <p className="text-white/60 text-sm">{video.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="https://www.youtube.com/@ISKCONofNewJersey" 
              target="_blank" 
              rel="noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              View All Videos <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
