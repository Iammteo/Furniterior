export function Gallery() {
  // Placeholder gallery - to be replaced with Tobi's real before/after photos
  // Each card uses a CSS gradient + label as a stand-in until photos arrive
  const items = [
    { title: 'Mercedes E-Class', detail: 'Gold detail · Full exterior + interior', tall: true },
    { title: 'Audi A4', detail: 'Silver detail · Engine bay restoration', tall: false },
    { title: 'BMW X3', detail: 'Bronze refresh · Pre-event polish', tall: false },
    { title: 'Range Rover', detail: 'Gold detail · Pet hair removal', tall: false },
    { title: 'Porsche Cayenne', detail: 'Gold detail · Headlight restoration', tall: true },
    { title: 'VW Golf', detail: 'Silver detail · Interior deep clean', tall: false },
  ];

  return (
    <section id="gallery" className="py-32 bg-ink relative">
      <div className="wrap relative">
        <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-7">
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.05] text-white">
              Hand-finished, <em className="italic text-gold">every time.</em>
            </h2>
          </div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((item, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${
                item.tall ? 'aspect-[3/4] md:row-span-2' : 'aspect-square'
              }`}
            >
              {/* Placeholder gradient - replace with real photos */}
              <PhotoPlaceholder index={i} />

              {/* Caption */}
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/90 via-ink/60 to-transparent">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold mb-1">
                  Plate {String(i + 1).padStart(2, '0')}
                </div>
                <div className="font-display italic text-base md:text-lg text-cream leading-tight">
                  {item.title}
                </div>
                <div className="font-sans text-xs text-cream/70 mt-0.5">
                  {item.detail}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// Placeholder visual using gradients + iconography
function PhotoPlaceholder({ index }: { index: number }) {
  const palettes = [
    'from-ink-soft via-ink to-signal-wine/20',
    'from-ink via-ink-soft to-gold/15',
    'from-signal-wine/30 via-ink to-ink-soft',
    'from-ink-soft via-ink to-signal-orange/15',
    'from-ink via-ink-soft to-gold/10',
    'from-signal-wine/20 via-ink-soft to-ink',
  ];
  const palette = palettes[index % palettes.length];

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${palette}`}>
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 30%, rgba(201, 168, 106, 0.15) 0%, transparent 50%)',
        }}
      />
      {/* Car silhouette icon */}
      <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="text-gold/20">
          <path
            d="M10 40 L15 25 Q18 22 22 22 L58 22 Q62 22 65 25 L70 40 M10 40 L8 40 Q5 40 5 43 L5 48 L10 48 M10 40 L70 40 M70 40 L72 40 Q75 40 75 43 L75 48 L70 48 M15 48 Q15 53 20 53 Q25 53 25 48 M55 48 Q55 53 60 53 Q65 53 65 48 M22 22 L25 12 Q26 10 28 10 L52 10 Q54 10 55 12 L58 22"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
