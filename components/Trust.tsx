export function Trust() {
  const items = [
    { icon: '🚗', label: 'We come to you' },
    { icon: '💳', label: 'Secure Stripe payment' },
    { icon: '📅', label: 'Book your own slot' },
    { icon: '⭐', label: 'Hand-finished detail' },
  ];

  return (
    <section
      className="border-y border-gold/15 py-8 md:py-12"
      style={{ background: 'linear-gradient(90deg, #231E17 0%, #2A2318 50%, #231E17 100%)' }}
    >
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-2xl shrink-0" aria-hidden>{item.icon}</div>
              <div className="font-sans text-sm md:text-base text-cream/85">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}