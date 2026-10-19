// ============================================
// 📌 SITE URL
// Set NEXT_PUBLIC_SITE_URL in Vercel to your domain
// (e.g. https://yourdomain.com). Until then, Vercel's
// production URL is used automatically.
// ============================================
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
