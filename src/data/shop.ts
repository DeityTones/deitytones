// ============================================
// 📌 ONLINE PAYMENTS SETTINGS
// Deposit size and the digital templates sold
// through Stripe Checkout on /pay.
// Service prices live in src/data/services.ts.
// ============================================

// Share of the total paid upfront to book a service
export const DEPOSIT_PERCENT = 50

export type ShopTemplate = {
  id: string
  name: string
  description: string
  priceCents: number // 2900 = $29.00
  // Name of the Vercel environment variable that holds this template's
  // "Make a copy" link. The link is shown only after a verified payment,
  // so it never appears in the site's public code.
  deliveryEnv: string
  showOnSite: boolean
}

export const shopTemplates: ShopTemplate[] = [
  {
    id: "artist-portal-sheet",
    name: "Artist Portal Sheet (DIY)",
    description:
      "Track what you spend on every song and keep your ISRC codes in one place. A Google Sheet you copy and run yourself.",
    priceCents: 2900,
    deliveryEnv: "TEMPLATE_URL_ARTIST_PORTAL_SHEET",
    showOnSite: true,
  },
]

export const visibleTemplates = shopTemplates.filter((t) => t.showOnSite)
