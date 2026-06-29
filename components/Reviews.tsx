// SAMPLE testimonials - replace with real reviews before launch.

export function Reviews() {
  const reviews = [
    {
      text: 'Tobi turned up exactly on time, did the Gold detail on my Range Rover, and my wife thought I\'d bought a new car. Worth every penny.',
      author: 'James W.',
      meta: 'Didsbury · Gold detail',
      stars: 5,
    },
    {
      text: 'Subscription has been brilliant - fortnightly Silver wash means my car stays sharp without me lifting a finger. Great service, professional.',
      author: 'Priya M.',
      meta: 'Salford · Silver subscription',
      stars: 5,
    },
    {
      text: 'Quick reply on WhatsApp, paid in seconds, slot booked. Mobile detailing the way it should be done. Will recommend.',
      author: 'Connor T.',
      meta: 'Stockport · Bronze refresh',
      stars: 5,
    },
  ];

  return (
    <section className="py-32 bg-ink relative">
      <div className="wrap">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight text-white max-w-3xl mx-auto">
            Words from the <em className="italic text-gold">drivers seat.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="relative bg-ink-soft border border-gold/20 rounded-sm p-8 md:p-10 hover:border-gold/50 transition-all flex flex-col"
            >
              <div className="font-display text-7xl leading-none text-gold/30 absolute top-4 left-6 select-none" aria-hidden>
                "
              </div>

              <div className="relative flex gap-1 mb-6 mt-2">
                {Array.from({ length: r.stars }).map((_, idx) => (
                  <svg key={idx} width="14" height="14" viewBox="0 0 14 14" fill="#C9A86A" aria-hidden>
                    <path d="M7 0.5l1.7 4.5h4.8l-3.9 2.9 1.5 4.6L7 9.5l-4.1 3 1.5-4.6L0.5 5h4.8L7 0.5z" />
                  </svg>
                ))}
              </div>

              <blockquote className="relative flex-1">
                <p className="font-sans text-base leading-relaxed text-cream/85 italic mb-8">
                  {r.text}
                </p>
              </blockquote>

              <footer className="relative pt-6 border-t border-cream/10">
                <div className="font-display text-base text-cream not-italic">{r.author}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold/70 mt-1">
                  {r.meta}
                </div>
              </footer>
            </article>
          ))}
        </div>

        <p className="text-center mt-12 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/40">
          Sample reviews shown · Real customer reviews will replace these
        </p>
      </div>
    </section>
  );
}
