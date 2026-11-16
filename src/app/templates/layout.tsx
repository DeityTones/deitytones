import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DIY Artist Tracker & Onboarding Templates",
  description:
    "Google Sheets and Docs templates for artists and labels. Make your own copy, no software subscription.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
