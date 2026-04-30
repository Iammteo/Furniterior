// Furniterior — Service packages data
// Single source of truth for Bronze / Silver / Gold tiers.
// Update prices/features here, site updates everywhere.

export type PackageTier = {
  id: 'bronze' | 'silver' | 'gold';
  name: string;
  tagline: string;
  oneOffPrice: number;
  monthlyPrice: number;
  monthlyFrequency: string; // e.g. "every 2 weeks"
  duration: string; // approx time on site
  featured?: boolean;
  features: string[];
  // Stripe Payment Links — replace with real links from Tobi's Stripe
  oneOffStripeLink: string;
  subscriptionStripeLink: string;
};

export const packages: PackageTier[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    tagline: 'The essential refresh',
    oneOffPrice: 50,
    monthlyPrice: 50,
    monthlyFrequency: 'every 4 weeks',
    duration: '60–90 minutes',
    features: [
      'Hand wash with pH-neutral shampoo',
      'Wheel clean & tyre dressing',
      'Streak-free window finish (exterior)',
      'Quick-dry leather chamois',
      'Door shuts wiped down',
    ],
    oneOffStripeLink: 'https://buy.stripe.com/SAMPLE_BRONZE_ONEOFF',          // TODO
    subscriptionStripeLink: 'https://buy.stripe.com/SAMPLE_BRONZE_SUB',        // TODO
  },
  {
    id: 'silver',
    name: 'Silver',
    tagline: 'Most popular',
    oneOffPrice: 90,
    monthlyPrice: 90,
    monthlyFrequency: 'every 3 weeks',
    duration: '2–3 hours',
    featured: true,
    features: [
      'Everything in Bronze, plus:',
      'Full interior vacuum & detail',
      'Dashboard, console & door panels',
      'Interior windows cleaned',
      'Boot & seat cracks vacuumed',
      'Tyre & arch decontamination',
    ],
    oneOffStripeLink: 'https://buy.stripe.com/SAMPLE_SILVER_ONEOFF',           // TODO
    subscriptionStripeLink: 'https://buy.stripe.com/SAMPLE_SILVER_SUB',         // TODO
  },
  {
    id: 'gold',
    name: 'Gold',
    tagline: 'The full detail',
    oneOffPrice: 130,
    monthlyPrice: 130,
    monthlyFrequency: 'every 2 weeks',
    duration: '4–5 hours',
    features: [
      'Everything in Silver, plus:',
      'Hand-applied wax (3 months protection)',
      'Leather conditioning treatment',
      'Engine bay clean & dress',
      'Headlight clarity restoration',
      'Plastic & trim restoration',
      'Premium fragrance finish',
    ],
    oneOffStripeLink: 'https://buy.stripe.com/SAMPLE_GOLD_ONEOFF',             // TODO
    subscriptionStripeLink: 'https://buy.stripe.com/SAMPLE_GOLD_SUB',           // TODO
  },
];

export const getPackage = (id: string) => packages.find((p) => p.id === id);
