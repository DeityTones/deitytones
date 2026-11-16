import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

const routes = [
  "",
  "/music",
  "/portfolio",
  "/services",
  "/templates",
  "/how-it-works",
  "/contact",
  "/faq",
  "/policies",
  "/community",
  "/epk",
  "/privacy",
  "/terms",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
