import Link from 'next/link';
import { buildWhatsAppGeneralUrl } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-40 pb-24 bg-ink overflow-hidden grain">
      {/* Background gradient pulse */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[70vw] h-[70vw] bg-gradient-radial from-gold/[0.08] via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-gradient-radial from-signal-orange/[0.05] via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="wrap relative grid md:grid-cols-12 gap-8 md:gap-12 items-center min-h-[70vh]">
        {/* Left: copy (7 cols) */}
        <div className="md:col-span-7 animate-fadeUp">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 font-mono text-[11px] uppercase tracking-[0.32em] text-gold">
            <span className="w-2 h-2 rounded-full bg-gold animate-shimmer" />
            <span className="w-12 h-px bg-gold/40" />
            <span>Mobile Detailing · Greater Manchester</span>
          </div>

          {/* Big headline */}
          <h1 className="font-display text-[64px] md:text-[88px] leading-[0.95] tracking-tight font-light mb-8 text-cream">
            Your car,
            <br />
            <em className="italic text-gold font-normal">restored</em>
            <br />
            at your door.
          </h1>

          <div className="w-full max-w-lg pt-6 border-t border-gold/20">
            <p className="font-sans text-lg leading-relaxed text-cream/80">
              Hand-finished mobile car detailing across Greater Manchester. From a quick refresh to a full concours-quality detail — we drive to you.{' '}
              <span className="text-gold-pale italic">Book online, pay secure, pick your slot.</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="#packages"
              className="bg-gold text-ink px-8 py-4 font-sans text-[13px] uppercase tracking-[0.18em] font-semibold hover:bg-gold-bright transition-all flex items-center gap-2 shadow-lg shadow-gold/20"
            >
              See packages <span aria-hidden>→</span>
            </Link>
            <a
              href={buildWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/40 text-gold px-8 py-4 font-sans text-[13px] uppercase tracking-[0.18em] hover:bg-gold hover:text-ink transition-all flex items-center gap-2"
            >
              Quick question? <span aria-hidden>→</span>
            </a>
          </div>

          {/* Quick stats row */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 mt-14 pt-8 border-t border-gold/15 max-w-xl">
            <Stat label="Starting from" value="£50" />
            <Stat label="Same-day where" value="possible" />
            <Stat label="Postcodes covered" value="40+" />
          </div>
        </div>

        {/* Right: visual element (5 cols) */}
        <div className="md:col-span-5 relative animate-fadeUp" style={{ animationDelay: '0.4s' }}>
          {/* Editorial card with logo + glow */}
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            {/* Subtle gold frame */}
            <div className="absolute -inset-3 border border-gold/20 rounded-sm" />
            <div className="absolute -inset-1.5 border border-gold/10 rounded-sm" />

            {/* Card content */}
            <div className="relative w-full h-full bg-gradient-to-br from-ink-soft via-ink to-ink-soft border border-gold/30 rounded-sm flex flex-col items-center justify-center p-12 overflow-hidden">
              {/* Glow behind logo */}
              <div className="absolute inset-0 bg-gradient-radial from-signal-orange/10 via-transparent to-transparent rounded-full blur-2xl" />

              {/* Logo */}
              <div className="relative mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/brand/logo-mark.png"
                  alt="Furniterior"
                  className="w-40 h-40 object-contain"
                />
              </div>

              {/* Tagline beneath */}
              <div className="relative text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold mb-3">
                  Est. 2025
                </div>
                <div className="font-display text-3xl text-cream italic">
                  Furniterior
                </div>
                <div className="gold-rule w-16 mx-auto my-4" />
                <div className="font-sans text-xs uppercase tracking-[0.22em] text-cream/60">
                  Mobile Car Detailing
                </div>
              </div>

              {/* Corner detail */}
              <div className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.2em] text-gold/60">
                MCR · UK
              </div>
              <div className="absolute bottom-3 left-3 font-mono text-[9px] tracking-[0.2em] text-gold/60">
                №01
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 font-mono text-[10px] uppercase tracking-[0.32em] text-cream/40 flex items-center gap-2">
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
