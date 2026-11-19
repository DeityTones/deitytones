import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How Booking Works: Quote, Deposit, Done",
  description:
    "From intake form to quote, deposit, session and final delivery. See how booking and payment work.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
