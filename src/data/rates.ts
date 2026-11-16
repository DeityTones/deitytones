// ============================================
// 📌 RATE CARD - THE ONE PLACE PRICES LIVE
// Every price on the site comes from this file
// (Services, Packages, Templates, Home and the
// contact form). When your rate card changes,
// change it here, then update your invoices,
// payment links and booking tool to match.
// "$[__]" is a placeholder: replace each one.
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

export const pharaohsPalms: RateRow[] = [
  {
    service: "Mastering Only",
    description: "Polish your final stereo mix for streaming and distribution. Includes one mastered WAV + MP3 preview.",
    price: P,
  },
  {
    service: "Mix + Master — Basic",
    subtitle: "(3 Stems)",
    description: "Beat, lead vocal, and adlibs mixed and mastered into a release-ready track. Includes 2 revision rounds.",
    price: P,
  },
  {
    service: "Mix + Master — Complex",
    subtitle: "(Up to ~10 Vocal Stems)",
    description: "Full vocal stack (lead, doubles, adlibs, harmonies) mixed and mastered. Great for more complex records.",
    price: P,
  },
  {
    service: "Podcast Edit",
    subtitle: "(Per Episode)",
    description: "Clean, balanced audio with intro/outro and basic mastering for one episode up to 60 minutes.",
    price: P,
  },
  {
    service: "Podcast Monthly Plan",
    description: "Four edited episodes per month (up to 60 minutes each) for consistent, pro-sounding podcast output.",
    price: P,
  },
  {
    service: "Live Local Tracking",
    subtitle: "(Per Hour, 2-Hour Minimum)",
    description: "In-person recording/engineering session for artists or groups. Minimum booking 2 hours.",
    price: P,
  },
]

// ---------- Tiered services ----------
export type Tiered = {
  single: string
  groupSize: string
  group: string
  business: string
  deposit: string
}

const tiers = (): Tiered => ({ single: P, groupSize: N, group: P, business: P, deposit: N })

// ---------- Pharaoh's Sight: reels ----------
export const reelPackages: { name: string; reels: string; prices: Tiered }[] = [
  { name: "Reel Package", reels: N, prices: tiers() },
  { name: "Reel Package", reels: N, prices: tiers() },
]

export const tourRush = { days: N, addOn: P }

// Older Pharaoh's Sight items. Hidden until you decide whether they
// stay on the rate card (set showSightExtras to true to show them).
export const showSightExtras = false
export const sightExtras: RateRow[] = [
  {
    service: "Picture Enhancing",
    subtitle: "(5 Images)",
    description: "Light retouch, color/exposure correction, and crop/straighten for up to 5 photos for social or promo use.",
    price: P,
  },
  {
    service: "IG Profile Setup + 30-Day Plan",
    description: "Optimize your IG bio, highlights, and link-in-bio, plus a written 30-day content outline.",
    price: P,
  },
  {
    service: "IG 30-Day Starter Growth",
    description: "6-9 posts over 30 days using your content, with basic hashtag strategy and light engagement (no bot tactics).",
    price: P,
  },
]

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
export const templates: { name: string; description: string; price: string }[] = [
  {
    name: "Artist Development Tracker (DIY)",
    description: "The Master dashboard and artist portal templates, with a setup guide.",
    price: P,
  },
  {
    name: "Artist Onboarding Guide",
    description: "The \"What you'll need\" list and step-by-step setup for Google Drive, Docs and your folders.",
    price: P,
  },
  {
    name: "Owner & Team Onboarding Guide",
    description: "Company Drive, Master tracker and roster setup, step by step.",
    price: P,
  },
  {
    name: "Video Shoot Checklist",
    description: "Pre-shoot and post-shoot checklists so nothing gets missed on set.",
    price: P,
  },
]

// ---------- Contact form budget ranges ----------
export const budgetRanges = [
  `Under ${P}`,
  `${P} to ${P}`,
  `${P} to ${P}`,
  `${P} and up`,
]

export function tierLine(t: Tiered) {
  return `Single artist: ${t.single} | Group (up to ${t.groupSize}): ${t.group} | Business package: ${t.business} | Deposit: ${t.deposit}`
}
