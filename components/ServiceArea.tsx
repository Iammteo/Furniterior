'use client';

import { useState } from 'react';
import { site, buildWhatsAppGeneralUrl } from '@/lib/site';

export function ServiceArea() {
  const [checkPostcode, setCheckPostcode] = useState('');
  const [checkResult, setCheckResult] = useState<'in' | 'out' | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = checkPostcode.trim().toUpperCase().replace(/\s+/g, ' ');
    const prefix = cleaned.split(' ')[0];
    if (!prefix) {
      setCheckResult(null);
      return;
    }
    setCheckResult(site.serviceArea.includes(prefix) ? 'in' : 'out');
  };

  return (
    <section
      id="area"
      className="py-32 relative"
      style={{ background: 'linear-gradient(180deg, #231E17 0%, #2A2318 100%)' }}
    >
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: copy + checker */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.32em] text-gold">
              <span className="w-12 h-px bg-gold" />
              <span>№ 04 · Service Area</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] text-cream mb-8">
              We cover most of <em className="italic text-gold">Greater Manchester.</em>
            </h2>

            <p className="font-sans text-lg text-cream/70 leading-relaxed mb-8">
              Quick check below to see if your postcode's covered. If you're just outside, message us — we often go further for full Silver details.
            </p>

            {/* Postcode checker */}
            <form
              onSubmit={handleCheck}
              className="border border-gold/20 rounded-sm p-5 md:p-6"
              style={{ background: 'linear-gradient(145deg, #1E1A12 0%, #181510 100%)' }}
            >
              <label className="block">
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-gold mb-3">
                  Check your postcode
                </span>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={checkPostcode}
                    onChange={(e) => {
                      setCheckPostcode(e.target.value.toUpperCase());
                      setCheckResult(null);
                    }}
                    placeholder="e.g. M20 4PE"
                    className="flex-1 border border-cream/15 rounded-sm px-4 py-3 font-sans text-base text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all uppercase"
                    style={{ background: '#231E17' }}
                  />
                  <button
                    type="submit"
                    className="bg-gold text-ink px-5 py-3 font-sans text-[12px] uppercase tracking-[0.18em] font-semibold hover:bg-gold-bright transition-colors rounded-sm"
                  >
                    Check
                  </button>
                </div>
              </label>

              {/* Result */}
              {checkResult === 'in' && (
                <div className="mt-4 bg-gold/15 border border-gold/40 rounded-sm px-4 py-3 text-cream">
                  <div className="flex items-start gap-3">
                    <span className="text-gold text-xl shrink-0" aria-hidden>✓</span>
                    <div>
                      <div className="font-sans text-sm font-medium text-gold mb-0.5">You're covered</div>
                      <div className="font-sans text-xs text-cream/75">
                        Scroll up to pick a package and book.
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {checkResult === 'out' && (
                <div className="mt-4 bg-signal-orange/15 border border-signal-orange/40 rounded-sm px-4 py-3">
                  <div className="flex items-start gap-3">
                    <span className="text-signal-orange text-xl shrink-0" aria-hidden>!</span>
                    <div>
                      <div className="font-sans text-sm font-medium text-signal-orange mb-0.5">
                        Outside our standard area
                      </div>
                      <div className="font-sans text-xs text-cream/75 mb-2">
                        Doesn't mean we can't reach you — message us and we'll let you know.
                      </div>
                      <a
                        href={buildWhatsAppGeneralUrl(`Hi Furniterior — my postcode is ${checkPostcode}, can you reach me?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold hover:text-gold-bright"
                      >
                        Ask on WhatsApp →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Right: postcode list */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold mb-4">
              Postcodes covered
            </div>
            <div
              className="border border-gold/15 rounded-sm p-5 md:p-6"
              style={{ background: 'linear-gradient(145deg, #1E1A12 0%, #181510 100%)' }}
            >
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                {site.serviceArea.map((pc) => (
                  <span
                    key={pc}
                    className="font-mono text-xs text-cream/85 border border-cream/10 rounded-sm py-1.5 px-2 text-center hover:border-gold/40 transition-colors"
                    style={{ background: '#231E17' }}
                  >
                    {pc}
                  </span>
                ))}
              </div>
              <p className="mt-5 pt-5 border-t border-cream/10 font-sans text-xs text-cream/55 leading-relaxed">
                Don't see yours? Use the checker — sometimes nearby postcodes work too. We've travelled as far as Stockport, Bolton and Bury for full Silver details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}