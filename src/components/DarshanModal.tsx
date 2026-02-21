import { X, Sun, Moon } from 'lucide-react';

interface DarshanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const weekdayDarshan = [
  '4:30am - 5:00am',
  '7:00am - 7:40am',
  '8:00am - 12:00pm',
  '12:40pm - 1:00pm',
  '4:30pm - 6:40pm',
  '7:00pm - 8:00pm',
  '8:45pm - 9:00pm',
];

const sundaySchedule = [
  { time: '4:00 PM', activity: 'Tulasi Arati' },
  { time: '4:15 PM', activity: 'Guru Puja' },
  { time: '4:30 PM', activity: 'Sandhya Arati (Gaura Arati)' },
  { time: '4:55 PM', activity: 'Nrsimhadeva Prayers' },
  { time: '5:00 PM', activity: 'Announcements' },
  { time: '5:05 PM', activity: 'Bhagavad Gita Class' },
  { time: '6:00 PM', activity: 'Prasadam Feast' },
  { time: '7:00 PM', activity: 'Sayana Arati' },
  { time: '7:45 PM', activity: 'Kirtan Ends' },
];

export default function DarshanModal({ isOpen, onClose }: DarshanModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-charcoal border border-gold/30 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gold/20">
          <h2 className="font-heading text-2xl text-gold">Darshan & Program Schedule</h2>
          <button onClick={onClose} className="text-white/60 hover:text-gold transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-8">
          {/* Weekdays */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-5 h-5 text-gold" />
              <h3 className="font-heading text-xl text-white">Weekday Darshan (Mon-Sat)</h3>
            </div>
            <p className="text-white/60 text-sm mb-4">Temple open during these hours:</p>
            <div className="space-y-2">
              {weekdayDarshan.map((time, i) => (
                <div key={i} className="py-2 px-3 bg-dark/50 rounded border-l-2 border-gold">
                  <span className="font-mono text-gold text-sm">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sunday */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Moon className="w-5 h-5 text-gold" />
              <h3 className="font-heading text-xl text-white">Sunday Program</h3>
            </div>
            <p className="text-white/60 text-sm mb-4">Weekly celebration schedule:</p>
            <div className="space-y-2">
              {sundaySchedule.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-mono text-gold text-sm">{item.time}</span>
                  <span className="text-white/80 text-sm">{item.activity}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gold/10 rounded-lg">
              <p className="text-gold text-sm font-medium">Free Prasadam Feast at 6:00 PM!</p>
              <p className="text-white/60 text-xs mt-1">All are welcome to join.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
