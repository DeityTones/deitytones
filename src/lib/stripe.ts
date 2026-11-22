import Stripe from "stripe"

// Server code only: never import this from a "use client" file.
//
// The key is read when a payment starts, not when the site builds,
// so the site still builds before the keys are added in Vercel.
// Use a restricted key (rk_...) with only the permissions listed in
// docs/STRIPE.md. Never put a key in this repository.
let client: Stripe | null = null

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) return null
  if (!client) client = new Stripe(key)
  return client
}

// Turn on only after a tax registration is added in Stripe
// (Dashboard → Tax → Registrations). Without one, Stripe collects
// no tax even with this on.
export const automaticTaxOn = () => process.env.STRIPE_AUTOMATIC_TAX === "on"
