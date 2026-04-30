'use client';

import { useEffect, useState } from 'react';
import type { PackageTier } from '@/lib/packages';
import { buildWhatsAppOrderUrl, site } from '@/lib/site';

type BookingModalProps = {
  pkg: PackageTier | null;
  mode: 'oneoff' | 'subscription';
  onClose: () => void;
};

export function BookingModal({ pkg, mode, onClose }: BookingModalProps) {
  const [vehicleType, setVehicleType] = useState('');
  const [postcode, setPostcode] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  useEffect(() => {
    setVehicleType('');
    setPostcode('');
    setNotes('');
    setErrors({});
  }, [pkg, mode]);

  // Lock body scroll
  useEffect(() => {
    if (pkg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [pkg]);

  // ESC closes
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (pkg) window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [pkg, onClose]);

  if (!pkg) return null;

  const isSubscription = mode === 'subscription';
  const price = isSubscription ? pkg.monthlyPrice : pkg.oneOffPrice;

  // Check if postcode prefix is in service area
  const checkServiceArea = (pc: string) => {
    const cleaned = pc.trim().toUpperCase().replace(/\s+/g, ' ');
    const prefix = cleaned.split(' ')[0];
    return site.serviceArea.includes(prefix);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [k: string]: string } = {};
    if (!vehicleType.trim()) newErrors.vehicleType = 'Please tell us what vehicle';
    if (!postcode.trim()) newErrors.postcode = 'Postcode is required so we can confirm coverage';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const inArea = checkServiceArea(postcode);

    const url = buildWhatsAppOrderUrl({
      packageName: pkg.name,
      packagePrice: price,
      vehicleType: vehicleType.trim(),
      postcode: postcode.trim().toUpperCase(),
      notes: inArea ? notes.trim() : `${notes.trim() ? notes.trim() + ' · ' : ''}(Note: postcode may be outside standard service area — please confirm)`,
      isSubscription,
    });

    window.open(url, '_blank', 'noopener,noreferrer');
    setTimeout(() => onClose(), 400);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/85 backdrop-blur-sm z-[100] animate-fadeIn"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-end md:items-center justify-center p-0 md:p-6 pointer-events-none">
        <div
          role="dialog"
          aria-labelledby="booking-title"
          aria-modal="true"
          className="bg-ink-soft w-full md:max-w-xl max-h-[92vh] overflow-y-auto pointer-events-auto shadow-2xl rounded-t-2xl md:rounded-sm border-t md:border border-gold/30 animate-slideUp"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-br from-ink to-ink-soft p-6 md:p-8 border-b border-gold/15">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M1 1l12 12M13 1L1 13" strokeLinecap="round" />
              </svg>
            </button>

            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold mb-2">
              {isSubscription ? 'Subscribe to' : 'Book one-off'}
            </div>
            <h2 id="booking-title" className="font-display text-3xl md:text-4xl text-cream italic mb-2">
              The {pkg.name} Detail
            </h2>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-gold">£{price}</span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/60">
                {isSubscription ? `per month · ${pkg.monthlyFrequency}` : 'one-off'}
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
            <p className="font-sans text-sm text-cream/70 leading-relaxed mb-2">
              Tell us a couple of details and we'll send confirmation + a secure payment link via WhatsApp.
            </p>

            <Field label="Vehicle (make, model, colour) *" error={errors.vehicleType}>
              <input
                type="text"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                placeholder="e.g. BMW X3, black"
                className={inputStyle}
              />
            </Field>

            <Field label="Postcode *" error={errors.postcode}>
              <input
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                placeholder="e.g. M20 4PE"
                className={inputStyle + ' uppercase'}
              />
              <span className="block mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/40">
                Helps us confirm we can reach you
              </span>
            </Field>

            <Field label="Notes (optional)">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any specific spots? Pet hair, scratches, schedule preferences..."
                rows={2}
                className={inputStyle + ' resize-none'}
              />
            </Field>

            {/* What happens next */}
            <div className="bg-gold/10 border border-gold/30 rounded-sm px-4 py-3 mt-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold mb-1.5">
                What happens next
              </div>
              <ol className="font-sans text-xs text-cream/85 space-y-1">
                <li>1. Tobi confirms availability via WhatsApp</li>
                <li>2. You receive a secure Stripe payment link</li>
                <li>3. After payment, choose your preferred slot on Calendly</li>
                <li>4. We arrive at your address. Done.</li>
              </ol>
            </div>

            {/* Submit */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 font-sans text-[13px] uppercase tracking-[0.18em] flex items-center justify-center gap-3 transition-colors rounded-sm font-semibold"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Continue on WhatsApp
              </button>

              <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.18em] text-cream/40 text-center">
                You'll be redirected to WhatsApp to confirm
              </p>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
      `}</style>
    </>
  );
}

const inputStyle =
  'w-full bg-ink border border-cream/20 rounded-sm px-4 py-3 font-sans text-base text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all';

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-gold/80 mb-2">
        {label}
      </span>
      {children}
      {error && (
        <span className="block mt-1.5 font-sans text-[11px] text-signal-orange">
          {error}
        </span>
      )}
    </label>
  );
}
