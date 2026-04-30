export function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Choose your detail',
      description:
        'Pick Bronze, Silver or Gold based on what your car needs. One-off or monthly subscription — both fully online.',
    },
    {
      n: '02',
      title: 'Confirm on WhatsApp',
      description:
        'Tap "Book" and your details land in our WhatsApp. We confirm availability and send a secure Stripe payment link.',
    },
    {
      n: '03',
      title: 'Pay & pick a slot',
      description:
        'Pay in seconds via Stripe. You\'re taken to our calendar to choose a date and time that works for you.',
    },
    {
      n: '04',
      title: 'We come to you',
      description:
        'We arrive at your home or workplace, set up, and detail your car start to finish. Drive away looking sharp.',
    },
  ];

  return (
    <section id="how" className="py-32 bg-ink-soft relative">
      <div className="wrap relative">
        <div className="grid md:grid-cols-12 gap-8 mb-20 items-end">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-[0.32em] text-gold">
              <span className="w-12 h-px bg-gold" />
              <span>№ 02 · How It Works</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.05] text-cream">
              Four steps. <em className="italic text-gold">No hassle.</em>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="font-sans text-base md:text-lg text-cream/70 leading-relaxed">
              Designed to be the easiest car detail you've ever booked. Pay upfront, no awkward conversations on the day.
            </p>
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-ink border border-gold/20 rounded-sm p-8 hover:border-gold/50 transition-all group"
            >
              {/* Number */}
              <div className="font-display text-6xl text-gold/30 mb-6 font-light group-hover:text-gold transition-colors">
                {step.n}
              </div>

              {/* Connector arrow on larger screens */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none" aria-hidden>
                    <path
                      d="M0 6h22M16 1l6 5-6 5"
                      stroke="#C9A86A"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              )}

              <h3 className="font-display text-xl text-cream mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-cream/65 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
