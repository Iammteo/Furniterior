'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Derive whether the nav bar itself should look solid:
  // solid when scrolled OR when the mobile menu is open
  const solidNav = scrolled || mobileOpen;

  return (
    <nav
      className={`fixed top-[38px] left-0 right-0 z-50 transition-all duration-300 ${
        solidNav
          ? 'border-b border-gold/15 py-3'
          : 'py-5'
      }`}
      style={{
        background: solidNav ? 'rgba(24, 21, 16, 0.98)' : 'transparent',
        backdropFilter: solidNav ? 'blur(12px)' : 'none',
      }}
    >
      <div className="wrap flex items-center justify-between">
        <Link href="/" aria-label="Furniterior home">
          <Logo />
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-sans text-[12px] uppercase tracking-[0.18em] text-cream/85">
          <li><Link href="#packages" className="hover:text-gold transition-colors">Packages</Link></li>
          <li><Link href="#how" className="hover:text-gold transition-colors">How it works</Link></li>
          <li><Link href="#gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
          <li><Link href="#area" className="hover:text-gold transition-colors">Area</Link></li>
          <li><Link href="#faq" className="hover:text-gold transition-colors">FAQ</Link></li>
        </ul>

        <Link
          href="#packages"
          className="hidden md:flex bg-gold text-ink px-5 py-2.5 font-sans text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-gold-bright transition-colors items-center gap-2"
        >
          Book Now <span aria-hidden>→</span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu drawer — always fully opaque */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 border-t border-gold/20 py-6"
          style={{ background: 'rgba(24, 21, 16, 0.99)', backdropFilter: 'blur(16px)' }}
        >
          <ul className="wrap flex flex-col gap-5 font-sans text-sm uppercase tracking-[0.18em] text-cream/85">
            <li><Link href="#packages" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-gold">Packages</Link></li>
            <li><Link href="#how" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-gold">How it works</Link></li>
            <li><Link href="#gallery" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-gold">Gallery</Link></li>
            <li><Link href="#area" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-gold">Area</Link></li>
            <li><Link href="#faq" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-gold">FAQ</Link></li>
            <li className="pt-2 border-t border-gold/15">
              <Link
                href="#packages"
                onClick={() => setMobileOpen(false)}
                className="inline-flex bg-gold text-ink px-5 py-3 font-medium tracking-[0.2em] hover:bg-gold-bright"
              >
                Book Now →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}