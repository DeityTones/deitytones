import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services & Booking",
  description: "Mixing, mastering, podcast editing and recording rates from Pharaoh's Palms. Book a session with T The Pharaoh.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
