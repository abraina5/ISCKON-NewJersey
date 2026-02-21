import { useEffect, useRef } from 'react';
import { ExternalLink, Video } from 'lucide-react';

const STREAM_URL =
  'https://stream-us1-alfa.dropcam.com:443/nexus_aac/5ce0fe2e35e748fa8d816a15ca48cea9/playlist.m3u8?public=I9gstai3lQ';

const loadHlsScript = () =>
  new Promise<void>((resolve, reject) => {
    if ((window as any).Hls) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.21/dist/hls.min.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load HLS script'));
    document.head.appendChild(script);
  });

export default function Webcam() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let hls: any;

    const initPlayer = async () => {
      if (!videoRef.current) return;

      const video = videoRef.current;
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = STREAM_URL;
        return;
      }

      try {
        await loadHlsScript();
        const Hls = (window as any).Hls;
        if (Hls?.isSupported?.()) {
          hls = new Hls({ lowLatencyMode: true });
          hls.loadSource(STREAM_URL);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(() => undefined);
          });
        }
      } catch (error) {
        // If HLS.js fails to load, leave fallback link below.
      }
    };

    initPlayer();

    return () => {
      if (hls?.destroy) hls.destroy();
    };
  }, []);

  return (
    <div>
      <section className="relative py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark z-10" />
        <div className="relative z-20 max-w-3xl mx-auto px-4">
          <p className="text-gold uppercase tracking-widest text-sm mb-2">Live</p>
          <h1 className="font-heading text-5xl text-white">Temple Webcam</h1>
          <p className="text-white/70 mt-4 text-lg">
            Join the darshan livestream from anywhere. If the player does not load, use the direct link below.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-charcoal/80 rounded-2xl border border-white/10 overflow-hidden shadow-[0_24px_45px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-gold" />
                <p className="text-white font-medium">Live Stream</p>
              </div>
              <a
                href={STREAM_URL}
                target="_blank"
                rel="noreferrer"
                className="text-gold text-sm inline-flex items-center gap-2 hover:text-gold-light"
              >
                Open Stream <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="relative w-full aspect-video bg-black">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                controls
                muted
                autoPlay
                playsInline
              >
                <source src={STREAM_URL} type="application/x-mpegURL" />
              </video>
            </div>
          </div>
          <p className="text-white/50 text-sm mt-6 text-center">
            If playback is blocked by your browser, click “Open Stream” above.
          </p>
        </div>
      </section>
    </div>
  );
}
