import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Press Kit",
  description: "Electronic press kit for T The Pharaoh: bio, press photos, videos and booking.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
