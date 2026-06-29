// Furniterior - Service packages data
// Single source of truth for Mini Valet / Full Valet / Full Detailing tiers.
// Update prices/features here, site updates everywhere.

export type PackageTier = {
  id: 'mini' | 'premium' | 'silver';
  name: string;
  tagline: string;
  oneOffPrice: number;
  monthlyPrice: number;
  monthlyFrequency: string;
  duration: string;
  featured?: boolean;
  quoteOnly?: boolean;
  features: string[];
  oneOffStripeLink: string;
  subscriptionStripeLink: string;
};

export const packages: PackageTier[] = [
  {
    id: 'mini',
    name: 'Mini Valet',
    tagline: 'The essential refresh',
    oneOffPrice: 30,
    monthlyPrice: 25,
    monthlyFrequency: 'every 4 weeks',
    duration: '60–90 minutes',
    features: [
      'Exterior wash',
      'Interior clean',
      'Tyre polish',
      'Full vacuum',
    ],
    oneOffStripeLink: 'https://buy.stripe.com/SAMPLE_MINI_ONEOFF',          // TODO
    subscriptionStripeLink: 'https://buy.stripe.com/SAMPLE_MINI_SUB',        // TODO
  },
  {
    id: 'premium',
    name: 'Full Valet',
    tagline: 'Most popular',
    oneOffPrice: 70,
    monthlyPrice: 65,
    monthlyFrequency: 'every 3 weeks',
    duration: '2–3 hours',
    featured: true,
    features: [
      'Full exterior wash & dry rinse',
      'Interior clean & polish',
      'Full vacuum',
      'Tyre polish',
      'Pretreatment before exterior wash',
    ],
    oneOffStripeLink: 'https://buy.stripe.com/SAMPLE_PREMIUM_ONEOFF',        // TODO
    subscriptionStripeLink: 'https://buy.stripe.com/SAMPLE_PREMIUM_SUB',      // TODO
  },
  {
    id: 'silver',
    name: 'Full Detailing',
    tagline: 'The complete package',
    quoteOnly: true,
    oneOffPrice: 0,
    monthlyPrice: 0,
    monthlyFrequency: 'every 2 weeks',
    duration: '4–5 hours',
    features: [
      'Everything in Full Valet, plus:',
      'Wheels & tyres restoration',
      'Exterior polish',
      'Engine bay clean',
      'Headlight restoration',
    ],
    oneOffStripeLink: 'https://buy.stripe.com/SAMPLE_SILVER_ONEOFF',         // TODO
    subscriptionStripeLink: 'https://buy.stripe.com/SAMPLE_SILVER_SUB',       // TODO
  },
];

export const getPackage = (id: string) => packages.find((p) => p.id === id);