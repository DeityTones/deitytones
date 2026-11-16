import type { Metadata } from "next"
import { business } from "@/data/business"

export const metadata: Metadata = {
  title: "Book a Call or Get a Quote",
  description: `Tell us about your artists and project. We'll reply with a quote and next steps within ${business.replyDays} business days.`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
