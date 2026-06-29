// Furniterior - Site configuration
// Update these values when Tobi confirms; site updates everywhere.

export const site = {
  name: 'Furniterior',
  tagline: 'Mobile Car Detailing · We come to you',
  domain: 'furniterior.co.uk',
  url: 'https://furniterior.co.uk',

  // Location
  city: 'Manchester',
  region: 'Greater Manchester',
  established: '2025',

  // Contact
  whatsappNumber: '447350160774',
  whatsappDisplay: '+44 7350 160774',
  email: 'hello@furniterior.co.uk',    // TODO: replace
  instagram: 'furniterior',            // TODO: replace

  // Operating
  hours: 'Mon – Sat · 8am – 6pm',
  leadTime: 'Same-day or next-day where available',

  // Service area - postcodes covered (sample list)
  serviceArea: [
    'M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9',
    'M11', 'M12', 'M13', 'M14', 'M15', 'M16', 'M17', 'M18', 'M19',
    'M20', 'M21', 'M22', 'M23', 'M24', 'M25', 'M26', 'M27', 'M28',
    'M29', 'M30', 'M31', 'M32', 'M33', 'M34', 'M35', 'M40', 'M41',
    'M43', 'M44', 'M45', 'M46', 'M50',
    'SK4', 'SK5', 'SK6', 'SK7', 'SK8',  // Stockport edges
  ],

  // Calendly link - TODO: replace with real link
  calendlyUrl: 'https://calendly.com/furniterior/booking',
};

// ============================================================
// WhatsApp deep-link helpers
// ============================================================

export const buildWhatsAppOrderUrl = (params: {
  packageName: string;
  packagePrice: number;
  vehicleType?: string;
  postcode?: string;
  notes?: string;
  isSubscription?: boolean;
}) => {
  const { packageName, packagePrice, vehicleType, postcode, notes, isSubscription } = params;

  const lines = [
    isSubscription
      ? `Hi Furniterior - I'd like to subscribe to the ${packageName} plan (£${packagePrice}/month).`
      : `Hi Furniterior - I'd like to book the ${packageName} (£${packagePrice}).`,
    '',
  ];

  if (vehicleType) lines.push(`🚗 Vehicle: ${vehicleType}`);
  if (postcode) lines.push(`📍 Postcode: ${postcode}`);
  if (notes && notes.trim()) lines.push(`📝 Notes: ${notes.trim()}`);

  lines.push('', 'Looking forward to hearing back!');

  const message = lines.join('\n');
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const buildWhatsAppGeneralUrl = (text?: string) => {
  const defaultMessage =
    text ||
    `Hi Furniterior - I have a question about your detailing services. Could you let me know more details? Thank you!`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
};

export const buildWhatsAppEnquiryUrl = (vehicleType: string, postcode: string, notes: string) => {
  const lines = [
    `Hi Furniterior - quick enquiry:`,
    '',
  ];
  if (vehicleType) lines.push(`🚗 Vehicle: ${vehicleType}`);
  if (postcode) lines.push(`📍 Postcode: ${postcode}`);
  if (notes) lines.push(`❓ Question: ${notes}`);
  lines.push('', 'Thank you!');

  const message = lines.join('\n');
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
};