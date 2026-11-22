import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Booking & Payment Policies",
  description:
    "Deposits, rescheduling, digital product refunds and pass-through fees.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
