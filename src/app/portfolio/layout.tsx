import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Performances, videos and creative work by T The Pharaoh.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
