// ============================================
// 📌 TEMPLATES, BUDGET RANGES & HIDDEN SERVICES
// Launch services and their prices live in
// src/data/services.ts. This file holds template
// prices, the contact form's budget ranges, and the
// prices for services hidden at launch (packages,
// onboarding, business setup, retainers).
// "$[__]" is a placeholder: fill it in before you
// show a hidden service.
// ============================================

export const P = "$[__]"
export const N = "[__]"

// ---------- Pharaoh's Palms: audio ----------
export type RateRow = {
  service: string
  subtitle?: string
  description: string
  price: string
}

// ---------- Tiered services ----------
export type Tiered = {
  single: string
  groupSize: string
  group: string
  business: string
  deposit: string
}

const tiers = (): Tiered => ({ single: P, groupSize: N, group: P, business: P, deposit: N })

// ---------- Systems, onboarding and business setup ----------
export const trackerSetup = { startingAt: P, prices: tiers() }
export const artistOnboarding = tiers()
export const ownerOnboarding = tiers()
export const businessFormation = { startingAt: P, deposit: N }
export const retainer = { startingAt: P, maxArtists: N, reelsPerArtist: N }

// ---------- Packages (side by side) ----------
export const packages = {
  individual: { price: P, deposit: N },
  group: { price: P, deposit: N, size: N },
  label: { startingAt: P, deposit: N, reelsPerArtist: N },
}

// ---------- DIY templates ----------
export type Template = { name: string; description: string; price: string; showOnSite: boolean }

// Set showOnSite to true once a template has a price
export const allTemplates: Template[] = [
  {
    name: "Artist Portal Sheet (DIY)",
    description: "Track what you spend on every song and keep your ISRC codes in one place. A Google Sheet you copy and run yourself.",
    price: "$29",
    showOnSite: true,
  },
  {
    name: "Artist Onboarding Guide",
    description: "The \"What you'll need\" list and step-by-step setup for Google Drive, Docs and your folders.",
    price: P,
    showOnSite: false,
  },
  {
    name: "Owner & Team Onboarding Guide",
    description: "Company Drive, Master tracker and roster setup, step by step.",
    price: P,
    showOnSite: false,
  },
  {
    name: "Video Shoot Checklist",
    description: "Pre-shoot and post-shoot checklists so nothing gets missed on set.",
    price: P,
    showOnSite: false,
  },
]

export const templates = allTemplates.filter((t) => t.showOnSite)

// ---------- Contact form budget ranges ----------
export const budgetRanges = [
  "Under $100",
  "$100 to $250",
  "$250 to $500",
  "$500 and up",
]

export function tierLine(t: Tiered) {
  return `Single artist: ${t.single} | Group (up to ${t.groupSize}): ${t.group} | Business package: ${t.business} | Deposit: ${t.deposit}`
}
