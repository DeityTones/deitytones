import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for services, templates, licensing and use of this site.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
