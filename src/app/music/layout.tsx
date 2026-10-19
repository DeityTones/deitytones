import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Music",
  description: "Preview and stream music by T The Pharaoh on Spotify, Apple Music, SoundCloud, YouTube and Tidal.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
