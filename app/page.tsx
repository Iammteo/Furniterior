import { Ticker } from '@/components/Ticker';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Trust } from '@/components/Trust';
import { Packages } from '@/components/Packages';
import { HowItWorks } from '@/components/HowItWorks';
import { Gallery } from '@/components/Gallery';
import { ServiceArea } from '@/components/ServiceArea';
import { Reviews } from '@/components/Reviews';
import { FAQ } from '@/components/FAQ';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <Ticker />
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Packages />
        <HowItWorks />
        <Gallery />
        <ServiceArea />
        <Reviews />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
