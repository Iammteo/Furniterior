'use client';

import { useState } from 'react';
import { packages, type PackageTier } from '@/lib/packages';
import { BookingModal } from './BookingModal';

export function Packages() {
  const [activePackage, setActivePackage] = useState<PackageTier | null>(null);
  const [modalMode, setModalMode] = useState<'oneoff' | 'subscription'>('oneoff');

  const openBooking = (pkg: PackageTier, mode: 'oneoff' | 'subscription') => {
    setActivePackage(pkg);
    setModalMode(mode);
  };

  return (
    <>
      <section id="packages" className="py-32 bg-ink relative">
        <div className="wrap">
          {/* Header */}
          <div className="grid md:grid-cols-12 gap-8 mb-20 items-end">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.32em] text-gold">
                <span className="w-12 h-px bg-gold" />
                <span>№ 01 · Choose Your Package</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.05] text-cream">
                Three tiers, <em className="italic text-gold">one standard.</em>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="font-sans text-base md:text-lg text-cream/70 leading-relaxed">
                Whether you need a quick refresh or a full concours-quality detail, every package is hand-finished by us — to the same standard.
              </p>
            </div>
          </div>

          {/* Three package cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onBook={(mode) => openBooking(pkg, mode)}
              />
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center mt-12 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/40">
            Subscriptions can be paused or cancelled anytime · Pay securely via Stripe
          </p>
        </div>
      </section>

      {/* Booking modal */}
      <BookingModal
        pkg={activePackage}
        mode={modalMode}
        onClose={() => setActivePackage(null)}
      />
    </>
  );
}

function PackageCard({
  pkg,
  onBook,
}: {
  pkg: PackageTier;
  onBook: (mode: 'oneoff' | 'subscription') => void;
}) {
  return (
    <article
      className={`relative bg-ink-soft border ${
        pkg.featured ? 'border-gold' : 'border-gold/20'
      } rounded-sm p-8 md:p-10 flex flex-col transition-all hover:border-gold ${
        pkg.featured ? 'md:scale-105 md:-translate-y-2 shadow-2xl shadow-gold/10' : ''
      }`}
    >
      {pkg.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ink px-4 py-1 font-mono text-[10px] uppercase tracking-[0.22em] font-semibold">
          {pkg.tagline}
        </div>
      )}

      {/* Tier name */}
      <div className="mb-6 pb-6 border-b border-gold/15">
        <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold mb-2">
          The {pkg.name} Detail
        </div>
        <div className="font-display text-4xl md:text-5xl text-cream italic mb-2">
          {pkg.name}
        </div>
        {!pkg.featured && (
          <div className="font-sans italic text-sm text-cream/60">{pkg.tagline}</div>
        )}
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-display text-5xl md:text-6xl text-gold">£{pkg.oneOffPrice}</span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/50">
            one-off
          </span>
        </div>
        <div className="font-sans text-sm text-cream/60">
          or <span className="text-gold-pale font-medium">£{pkg.monthlyPrice}/month</span>{' '}
          <span className="text-cream/40">{pkg.monthlyFrequency}</span>
        </div>
      </div>

      {/* Features list */}
      <ul className="space-y-3 mb-8 flex-1">
        {pkg.features.map((feat, i) => (
          <li key={i} className="flex gap-3 font-sans text-sm text-cream/85">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="shrink-0 mt-0.5"
              aria-hidden
            >
              <path
                d="M3 8.5L6.5 12L13 4.5"
                stroke="#C9A86A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      {/* Duration tag */}
      <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/50 flex items-center gap-2">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <circle cx="6" cy="6" r="5" stroke="#5A5A5A" strokeWidth="1" />
          <path d="M6 3v3l2 1" stroke="#5A5A5A" strokeWidth="1" strokeLinecap="round" />
        </svg>
        On-site · {pkg.duration}
      </div>

      {/* Two CTAs */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => onBook('oneoff')}
          className={`w-full ${
            pkg.featured
              ? 'bg-gold text-ink hover:bg-gold-bright'
              : 'bg-gold/15 text-gold border border-gold/40 hover:bg-gold hover:text-ink'
          } py-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-semibold transition-all flex items-center justify-center gap-2`}
        >
          Book one-off · £{pkg.oneOffPrice}
        </button>
        <button
          type="button"
          onClick={() => onBook('subscription')}
          className="w-full text-cream/60 hover:text-gold py-2 font-sans text-[11px] uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2"
        >
          Or subscribe · £{pkg.monthlyPrice}/mo →
        </button>
      </div>
    </article>
  );
}
