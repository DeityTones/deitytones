// ============================================
// 📌 SERVICES & RATES - THE ONE PLACE PRICES LIVE
// The Services page cards and the contact form's
// "Service Type" list both read from this file.
//
// To show or hide a service, flip `showOnSite`.
// Hidden services stay here so they're easy to
// bring back when bigger artists or businesses
// come to you. Internal notes (deposits, reasons,
// on-site recording terms) live in Notion:
// "Launch Lineup · Pricing Playbook".
// ============================================

export type Service = {
  id: string
  name: string
  group: "audio" | "artist" | "video"
  price: string
  priceNote?: string
  description: string
  includes: string[]
  turnaround: string
  showOnSite: boolean
}

export const serviceGroups: Record<Service["group"], string> = {
  audio: "Pharaoh's Palms · Audio",
  artist: "Artist Tools",
  video: "Pharaoh's Sight · Video & Photo",
}

export const services: Service[] = [
  // ---------- Launch lineup (shown on the site) ----------
  {
    id: "mixing",
    name: "Mixing",
    group: "audio",
    price: "$150",
    priceNote: "per song · $135 each for 3+ songs",
    description: "Your vocals and beat balanced, cleaned up and made to hit, ready for release.",
    includes: [
      "Up to 40 tracks/stems per song",
      "2 rounds of changes (extra rounds $25 each)",
      "WAV + MP3 of the final mix",
    ],
    turnaround: "5–7 days",
    showOnSite: true,
  },
  {
    id: "light-master",
    name: "Light Master",
    group: "audio",
    price: "$40",
    priceNote: "per song · $25 when added to a mix",
    description: "A light, streaming-ready master so your song sits at the right loudness on every platform.",
    includes: [
      "Loudness and polish for streaming",
      "1 round of changes",
      "Streaming-ready WAV",
    ],
    turnaround: "2–3 days",
    showOnSite: true,
  },
  {
    id: "artist-portal",
    name: "Artist Portal + Profile Claim",
    group: "artist",
    price: "$49",
    priceNote: "Portal sheet only: $29",
    description: "Track what you spend on every song and keep your ISRC codes in one place, plus we claim your artist profiles for you.",
    includes: [
      "Artist Portal Google Sheet (spending + ISRC codes per song)",
      "Spotify for Artists and Apple Music for Artists claims",
      "Requires at least one release already live",
    ],
    turnaround: "Portal right away · profile access usually 1–7 days (set by Spotify and Apple)",
    showOnSite: true,
  },
  {
    id: "short-form",
    name: "Short-form Video",
    group: "video",
    price: "$85",
    priceNote: "per reel · 3 for $225",
    description: "Reels, TikToks and Shorts cut from your footage to promote your music.",
    includes: [
      "Up to 60 seconds per video",
      "Captions and basic color",
      "1 round of changes",
    ],
    turnaround: "3–5 days per reel",
    showOnSite: true,
  },
  {
    id: "long-form",
    name: "Long-form Editing",
    group: "video",
    price: "$15–20",
    priceNote: "per finished minute · $150 minimum · quote first",
    description: "Vlogs and video podcasts, priced by the length of the final video so you know the cost upfront.",
    includes: [
      "$15/min: cuts, basic captions, intro and outro",
      "$20/min: b-roll, graphics, multiple cameras",
      "Raw footage up to 3x the final length",
      "1 round of changes",
    ],
    turnaround: "7–10 days, confirmed in your quote",
    showOnSite: true,
  },
  {
    id: "photo-editing",
    name: "Basic Photo Editing",
    group: "video",
    price: "$35",
    priceNote: "for 3 photos · $10 each additional photo",
    description: "Clean, consistent photos for covers, promo and social.",
    includes: [
      "Color and exposure correction",
      "Cleanup, crop and straighten",
      "1 round of changes",
      "Retouching and compositing not included",
    ],
    turnaround: "3–5 days",
    showOnSite: true,
  },

  // ---------- Hidden (quote only / bigger clients) ----------
  // Prices and terms for these live in Notion (The Menu · Services).
  {
    id: "on-site-recording",
    name: "On-site Recording Session",
    group: "audio",
    price: "$50",
    priceNote: "per hour · 2-hour minimum",
    description: "Recording at your location with your gear. Mixing billed separately per song.",
    includes: [],
    turnaround: "Scheduled per booking",
    showOnSite: false,
  },
]

export const visibleServices = services.filter((s) => s.showOnSite)
