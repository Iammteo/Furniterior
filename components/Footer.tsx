import Link from 'next/link';
import { site, buildWhatsAppGeneralUrl } from '@/lib/site';

export function Footer() {
  return (
    <footer
      className="border-t border-gold/20 py-20 relative"
      style={{ background: 'linear-gradient(180deg, #231E17 0%, #181510 100%)' }}
    >
      <div className="wrap">
        {/* Mega wordmark */}
        <div className="text-center mb-12 pb-12 border-b border-gold/15">
          <h2 className="font-display text-6xl md:text-[140px] leading-none font-light tracking-tight text-cream">
            Furniterior<span className="text-gold">.</span>
          </h2>
          <p className="font-sans italic text-base md:text-lg mt-8 text-cream/60">
            Mobile car detailing for Greater Manchester.
            <br />
            Hand-finished, properly priced, delivered to your door.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold mb-4">
              Service
            </h3>
            <ul className="space-y-2 font-sans text-cream/70 text-sm">
              <li><Link href="#packages" className="hover:text-gold transition-colors">Mini Valet · £25</Link></li>
              <li><Link href="#packages" className="hover:text-gold transition-colors">Premium Valet · £40</Link></li>
              <li><Link href="#packages" className="hover:text-gold transition-colors">Silver Full Detail · £90</Link></li>
              <li><Link href="#packages" className="hover:text-gold transition-colors">Subscriptions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold mb-4">
              Information
            </h3>
            <ul className="space-y-2 font-sans text-cream/70 text-sm">
              <li><Link href="#how" className="hover:text-gold transition-colors">How it works</Link></li>
              <li><Link href="#gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link href="#area" className="hover:text-gold transition-colors">Service area</Link></li>
              <li><Link href="#faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold mb-4">
              Contact
            </h3>
            <ul className="space-y-2 font-sans text-cream/70 text-sm">
              <li>
                <a href={buildWhatsAppGeneralUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold mb-4">
              Hours
            </h3>
            <ul className="space-y-2 font-sans text-cream/70 text-sm">
              <li>Mon – Sat</li>
              <li>8am – 6pm</li>
              <li className="pt-1 text-cream/40 text-xs">{site.region}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-cream/10">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/40">
            © {new Date().getFullYear()} {site.name} · All rights reserved
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/40 flex items-center gap-3">
            <span>Detailed daily in {site.city}</span>
            <span className="text-gold">·</span>
            <span>Built by Klavoir</span>
          </div>
        </div>
      </div>
    </footer>
  );
}