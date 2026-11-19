import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How we collect, use and protect client and artist information.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
