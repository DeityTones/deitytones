import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

const routes = ["", "/music", "/portfolio", "/community", "/contact", "/epk"]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
