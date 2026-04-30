import { buildWhatsAppGeneralUrl } from '@/lib/site';

export function ContactCTA() {
  return (
    <section className="py-32 bg-ink relative">
      <div className="wrap">
        <div className="relative bg-gradient-to-br from-ink-soft via-ink to-ink-soft border border-gold/30 rounded-sm p-10 md:p-20 overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent opacity-50" />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.32em] text-gold">
              <span>Ready when you are</span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight text-cream mb-8">
              Let's get your car <em className="italic text-gold">looking right.</em>
            </h2>

            <p className="font-sans text-lg text-cream/70 leading-relaxed mb-10 max-w-xl mx-auto">
              Pick a package, message us on WhatsApp, or scroll back up to check your postcode. We'll handle the rest.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#packages"
                className="bg-gold text-ink px-8 py-4 font-sans text-[13px] uppercase tracking-[0.18em] font-semibold hover:bg-gold-bright transition-all flex items-center gap-2 shadow-lg shadow-gold/20"
              >
                See packages <span aria-hidden>→</span>
              </a>
              <a
                href={buildWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold/40 text-gold px-8 py-4 font-sans text-[13px] uppercase tracking-[0.18em] hover:bg-gold hover:text-ink transition-all flex items-center gap-2"
              >
                Quick chat? <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
