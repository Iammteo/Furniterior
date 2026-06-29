import Link from 'next/link';
import { buildWhatsAppGeneralUrl } from '@/lib/site';

export function Hero() {
  return (
    <section
      className="relative min-h-screen pt-40 pb-24 overflow-hidden"
      style={{ background: '#181510' }}
    >
      {/* === BACKGROUND PHOTO === */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Lighter overlay - photo is more visible, especially on the right */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(110deg, rgba(18,14,8,0.82) 0%, rgba(18,14,8,0.60) 45%, rgba(18,14,8,0.30) 100%)',
        }}
      />
      {/* Subtle warm gold glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 80%, rgba(212,168,83,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="wrap relative z-10 grid md:grid-cols-12 gap-8 md:gap-12 items-center min-h-[70vh]">
        {/* Left: copy (7 cols) */}
        <div className="md:col-span-7 animate-fadeUp">
          {/* Big headline */}
          <h1 className="font-display text-[64px] md:text-[88px] leading-[0.95] tracking-tight font-light mb-8 text-white">
            Your car,
            <br />
            <em className="italic text-gold font-normal">restored</em>
            <br />
            at your door.
          </h1>

          <div className="w-full max-w-lg pt-6 border-t border-gold/20">
            <p className="font-sans text-lg leading-relaxed text-cream/80">
              Hand-finished mobile car detailing across Greater Manchester. From a quick refresh to a full concours-quality detail - we drive to you.{' '}
              <span className="text-gold-pale italic">Book online, pay secure, pick your slot.</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="#packages"
              className="bg-gold text-ink px-8 py-4 font-sans text-[13px] uppercase tracking-[0.18em] font-semibold hover:bg-gold-bright transition-all flex items-center gap-2 shadow-lg shadow-gold/25"
            >
              See packages <span aria-hidden>→</span>
            </Link>
            <a
              href={buildWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/40 text-gold px-8 py-4 font-sans text-[13px] uppercase tracking-[0.18em] hover:bg-gold hover:text-ink transition-all flex items-center gap-2"
              style={{ background: 'rgba(24,21,16,0.35)' }}
            >
              Quick question? <span aria-hidden>→</span>
            </a>
          </div>

          {/* Quick stats row */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 mt-14 pt-8 border-t border-gold/15 max-w-xl">
            <Stat label="Starting from" value="£35" />
            <Stat label="Availability" value="Same day" />
            <Stat label="Postcodes covered" value="40+" />
          </div>
        </div>

        {/* Right col - photo shows through the lighter overlay */}
        <div className="hidden md:block md:col-span-5" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 z-10 font-mono text-[10px] uppercase tracking-[0.32em] text-cream/40 flex items-center gap-2">
        Scroll <span className="w-8 h-px bg-cream/30" />
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/50 mb-1.5">
        {label}
      </div>
      <div className="font-display text-2xl text-gold">{value}</div>
    </div>
  );
}