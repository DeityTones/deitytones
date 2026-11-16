import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artist Development Systems for Labels & Collectives",
  description:
    "Roster tracking, artist onboarding, reels, audio production and LLC filing assistance. See what's included and book a call.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
