export function Ticker() {
  const items = [
    'We come to you',
    'Greater Manchester',
    'From £50',
    'Hand-finished',
    'Same-day where possible',
  ];

  const looped = [...items, ...items];

  return (
    <div className="bg-gold text-ink font-mono text-[11px] uppercase tracking-[0.28em] py-2.5 overflow-hidden relative z-[5]">
      <div className="inline-flex whitespace-nowrap animate-ticker pl-[100%]">
        {looped.map((item, i) => (
          <span key={i} className="px-7 inline-flex items-center gap-3.5 font-medium">
            <span>{item}</span>
            <i className="not-italic">◆</i>
          </span>
        ))}
      </div>
    </div>
  );
}
