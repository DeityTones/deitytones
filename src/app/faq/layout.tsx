import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ: Tracker, Onboarding, Reels & Billing",
  description:
    "Answers on spreadsheets, artist privacy, onboarding prep, reels and payments.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
