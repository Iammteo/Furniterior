import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Furniterior — Mobile Car Detailing · Manchester',
  description:
    'Premium mobile car detailing across Greater Manchester. We come to you. Bronze · Silver · Gold packages from £50.',
  keywords: [
    'mobile car detailing Manchester',
    'car valet Manchester',
    'mobile car wash',
    'car detailing service',
    'Furniterior',
  ],
  icons: {
    icon: '/images/brand/favicon.png',
    apple: '/images/brand/favicon.png',
  },
  openGraph: {
    title: 'Furniterior — Mobile Car Detailing · Manchester',
    description: 'Premium mobile car detailing. We come to you. From £50.',
    type: 'website',
    locale: 'en_GB',
    url: 'https://furniterior.co.uk',
    siteName: 'Furniterior',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
