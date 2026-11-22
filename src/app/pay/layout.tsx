import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pay a Deposit",
  description: "Pay your booking deposit or buy a template from T The Pharaoh through secure Stripe checkout.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
