import Image from 'next/image';

type LogoProps = {
  variant?: 'horizontal' | 'mark-only' | 'full';
  className?: string;
  invertText?: boolean;
};

export function Logo({ variant = 'horizontal', className = '', invertText = false }: LogoProps) {
  const textColor = invertText ? 'text-ink' : 'text-cream';
  const subColor = invertText ? 'text-ink-mute' : 'text-gold';

  if (variant === 'mark-only') {
    return (
      <Image
        src="/images/brand/logo-mark.png"
        alt="Furniterior"
        width={48}
        height={48}
        className={className}
        priority
      />
    );
  }

  if (variant === 'full') {
    return (
      <Image
        src="/images/brand/logo-full.png"
        alt="Furniterior"
        width={400}
        height={500}
        className={className}
        priority
      />
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/images/brand/logo-mark.png"
        alt=""
        width={36}
        height={36}
        className="shrink-0"
        priority
      />
      <div className="leading-tight">
        <div className={`font-display text-xl ${textColor}`}>Furniterior</div>
        <div className={`font-mono text-[9px] uppercase tracking-[0.28em] mt-0.5 ${subColor}`}>
          Manchester · Mobile Detail
        </div>
      </div>
    </div>
  );
}
