// ============================================
// 📌 BUSINESS DETAILS - FILL THESE IN BEFORE LAUNCH
// Every page reads from this file. Anything in
// [brackets] shows on the site exactly as typed,
// so replace it before the site goes live.
// ============================================

export const business = {
  // Legal name as registered with the state, and the name people see
  legalName: "Deity Tones LLC",
  brandName: "T The Pharaoh",

  // The third service line, next to Pharaoh's Palms and Pharaoh's Sight
  systemsBrand: "[Systems brand name]",

  // Public address; forwards to the main inbox (pt@tthepharaoh.net)
  email: "booking@tthepharaoh.net",
  mailingAddress: "[Business mailing address]",

  // Booking and payments
  paymentTool: "Stripe",
  bookingTool: "Cal.com",
  paymentMethods: "Credit or debit card, through Stripe",
  // Optional direct links. Leave "" to hide the buttons.
  bookingUrl: "",
  templatesCheckoutUrl: "/pay#templates",

  // Policies
  deposit: "50%", // paid upfront to book
  cancelBeforeWork: "your deposit becomes a credit toward a booking within 60 days",
  lateReschedule: "forfeits the deposit",
  balanceDue: "before final files are delivered",
  // Retainers aren't offered at launch. Set to true (and fill in the
  // days below) to show retainer terms on Policies, Terms and the FAQ.
  offersRetainers: false,
  retainerLateDays: "[__]",
  retainerNoticeDays: "[__]",
  lateFee: "", // e.g. "a late fee of $25 after 7 days". Leave "" to hide.
  replyDays: "1–2",
  sessionLocation: "video call: the FaceTime link in your calendar invite, or Google Meet or Zoom if you prefer",

  // Reels: set to true if you post reels to clients' accounts
  postsReels: false,

  // Sales tax note on templates (pick one after your CPA confirms)
  // TODO: confirm with your CPA
  taxNote: "Sales tax is added at checkout where required.",

  // Legal pages: Policies, the Privacy Policy and Terms stay hidden (404, no links)
  // until your attorney has reviewed them and the mailing address is in.
  legalPagesReady: false,
  legalLastUpdated: "November 22, 2026",
  liabilityMonths: "3",

  // Social proof: keep false until Nu Town / A.D.A. gives written permission
  showTestimonials: false,
}

// Shown wherever business formation is mentioned. Do not edit
// without checking with your attorney.
export const formationDisclaimer =
  "We provide business filing assistance and coordination. We are not a law firm and do not provide legal or tax advice. Operating agreements are reviewed by a licensed attorney, who bills the client directly. Clients should consult an attorney or CPA for legal or tax questions."

export const siteDisclaimer =
  "We are not a law firm, accounting firm or financial advisor. Nothing on this site is legal, tax or financial advice."
