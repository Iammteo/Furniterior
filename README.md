# Furniterior

Mobile car detailing website. Hand-finished service across Greater Manchester.

> **Built by Klavoir Technologies** · Next.js 14 · TypeScript · Tailwind CSS

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Structure

```
furniterior/
├── app/                  # Layout, globals, root page
├── components/           # All UI components
├── lib/
│   ├── site.ts          # Single source of truth: contact, area, etc.
│   └── packages.ts      # Single source of truth: Bronze/Silver/Gold
└── public/images/       # Logo + work photos
```

## Updating content

**Tobi's contact info, postcodes covered, Calendly link** → `lib/site.ts`

**Pricing, package features, Stripe links** → `lib/packages.ts`

Both files have placeholder sample data. Update them with real values; site updates everywhere.

## ⚠️ Before launch

These must be replaced before going live:

- [ ] WhatsApp Business number (currently `447XXXXXXXXX`)
- [ ] Email address
- [ ] Instagram handle
- [ ] Calendly URL (real booking calendar)
- [ ] Stripe Payment Links (6 needed: 3 one-off + 3 subscription)
- [ ] Real photos for gallery (currently styled placeholders)
- [ ] Real customer reviews (currently sample testimonials)
- [ ] Domain connected via Vercel

## Deploy

1. Push to GitHub
2. Import to Vercel
3. Set custom domain `furniterior.co.uk`
4. Update DNS at registrar

---

Built and maintained by Klavoir Technologies. Contact ola@klavoir.com.
