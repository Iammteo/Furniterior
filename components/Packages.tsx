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
      <section id="packages" className="py-32 relative" style={{ background: 'linear-gradient(180deg, #181510 0%, #231E17 100%)' }}>
        <div className="wrap">
          {/* Header */}
          <div className="grid md:grid-cols-12 gap-8 mb-20 items-end">
            <div className="md:col-span-7">
              <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.05] text-white">
                Three tiers, <em className="italic text-gold">one standard.</em>
              </h2>
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
          <p className="text-center mt-12 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/50">
            Subscriptions can be paused or cancelled anytime
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
      className={`relative rounded-sm p-8 md:p-10 flex flex-col transition-all hover:border-gold ${
        pkg.featured
          ? 'border-2 border-gold shadow-2xl shadow-gold/15 md:scale-105 md:-translate-y-2'
          : 'border border-gold/25 hover:border-gold/60'
      }`}
      style={{
        background: pkg.featured
          ? 'linear-gradient(145deg, #2A2318 0%, #1E1A12 60%, #2A2318 100%)'
          : 'linear-gradient(145deg, #231E17 0%, #1A1610 100%)',
      }}
    >
      {pkg.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-ink px-5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] font-semibold rounded-sm shadow-lg">
          {pkg.tagline}
        </div>
      )}

      {/* Tier name */}
      <div className="mb-6 pb-6 border-b border-gold/20">
        <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold/80 mb-2">
          Service {pkg.id === 'mini' ? 'One' : pkg.id === 'premium' ? 'Two' : 'Three'}
        </div>
        <div className="font-display text-3xl md:text-4xl text-cream italic mb-1 leading-tight">
          {pkg.name}
        </div>
        {!pkg.featured && (
          <div className="font-sans italic text-sm text-cream/55">{pkg.tagline}</div>
        )}
      </div>

      {/* Price */}
      <div className="mb-7">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-display text-5xl md:text-6xl text-gold font-light">£{pkg.oneOffPrice}</span>
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
                stroke="#D4A853"
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
      <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/45 flex items-center gap-2">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <circle cx="6" cy="6" r="5" stroke="#7A7060" strokeWidth="1" />
          <path d="M6 3v3l2 1" stroke="#7A7060" strokeWidth="1" strokeLinecap="round" />
        </svg>
        On-site · {pkg.duration}
      </div>

      {/* Two CTAs */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => onBook('oneoff')}
          className={`w-full py-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-semibold transition-all flex items-center justify-center gap-2 rounded-sm ${
            pkg.featured
              ? 'bg-gold text-ink hover:bg-gold-bright shadow-lg shadow-gold/20'
              : 'bg-gold/20 text-gold border border-gold/40 hover:bg-gold hover:text-ink'
          }`}
        >
          Book one-off · £{pkg.oneOffPrice}
        </button>
        <button
          type="button"
          onClick={() => onBook('subscription')}
          className="w-full text-cream/55 hover:text-gold py-2 font-sans text-[11px] uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2"
        >
          Or subscribe · £{pkg.monthlyPrice}/mo →
        </button>
      </div>
    </article>
  );
}