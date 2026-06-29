'use client';

import { useState } from 'react';
import { buildWhatsAppGeneralUrl } from '@/lib/site';

const faqs = [
  {
    q: 'How does the booking actually work?',
    a: 'You pick a package on the site, fill in a quick form (vehicle + postcode), and that opens WhatsApp with your details ready to go. We confirm availability, send a Stripe payment link, and once you\'ve paid you\'ll be redirected to our booking calendar to choose your slot.',
  },
  {
    q: 'Why pay before booking the slot?',
    a: 'It eliminates no-shows and lets us reserve enough time for your detail properly. Stripe is fully secure, and if anything changes we\'ll always work with you on rescheduling.',
  },
  {
    q: 'What do you need from me on the day?',
    a: 'A safe spot to park (driveway, allocated space, or street), and access to a power socket and a tap if possible. We bring everything else - water, products, lighting, the lot.',
  },
  {
    q: 'How long does each package take?',
    a: 'Bronze takes 60–90 minutes, Silver 2–3 hours, Gold 4–5 hours. Times vary slightly with vehicle size and condition. We\'ll always tell you exactly what to expect when we confirm.',
  },
  {
    q: 'What happens if it rains?',
    a: 'Light rain we can usually work through (especially interior-focused packages). Heavy rain we\'ll reschedule at no extra cost. We always check the forecast and message you in advance if we need to move things.',
  },
  {
    q: 'How do subscriptions work?',
    a: 'You get the same package each cycle (every 2-4 weeks depending on tier) at the same monthly price. Stripe handles the recurring payment. You can pause or cancel anytime from your Stripe portal - no awkward conversations needed.',
  },
  {
    q: 'Do you do larger vehicles or unusual cars?',
    a: 'Most cars, vans, and SUVs are covered. For very large vehicles, classic cars, or specialist requests, drop us a WhatsApp first - we\'ll quote a custom price.',
  },
  {
    q: 'Can I gift a detail to someone?',
    a: 'Yes - message us on WhatsApp and we\'ll set it up as a one-off booking under their name. Great for birthdays, Christmas, new-driver gifts.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-ink-soft relative">
      <div className="wrap">
        <div className="grid md:grid-cols-12 gap-8 mb-16 items-start">
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.05] text-white mb-6">
              Anything else <em className="italic text-gold">on your mind?</em>
            </h2>
            <p className="font-sans text-base text-cream/70 leading-relaxed mb-6 max-w-md">
              The most common questions we get. If your answer's not here, drop us a WhatsApp - we usually reply within the hour.
            </p>
            <a
              href={buildWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.22em] text-gold hover:text-gold-bright"
            >
              Ask on WhatsApp <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-7">
            <div className="border-t border-cream/10">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-cream/10">
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full py-5 flex items-center justify-between gap-6 text-left group"
                  >
                    <span className="font-display text-lg md:text-xl text-cream group-hover:text-gold transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center transition-transform ${
                        open === i ? 'bg-gold border-gold rotate-45' : ''
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={open === i ? '#0A0A0A' : '#C9A86A'} strokeWidth="1.5">
                        <path d="M6 1v10M1 6h10" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  {open === i && (
                    <div className="pb-6 pr-12 font-sans text-sm md:text-base text-cream/75 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
