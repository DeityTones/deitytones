import Link from "next/link"
import { formationDisclaimer } from "@/data/business"

// ============================================
// 📌 SHARED PAGE PIECES
// Same black-and-gold look as the rest of the site
// ============================================

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex flex-col min-h-screen text-white overflow-hidden">
      <div className="relative z-10 pt-32 pb-24 px-4 flex-grow">
        <div className="max-w-6xl mx-auto">{children}</div>
      </div>
    </main>
  )
}

export function PageHeader({
  label,
  title,
  subtitle,
}: {
  label: string
  title: string
  subtitle?: React.ReactNode
}) {
  return (
    <div className="text-center mb-16">
      <p className="text-[#E5B868] text-sm font-semibold tracking-widest uppercase mb-2">
        {label}
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
      {subtitle && (
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}

export function SectionTitle({ label, title, id }: { label?: string; title: string; id?: string }) {
  return (
    <div id={id} className="mb-8 scroll-mt-32">
      {label && (
        <p className="text-[#E5B868] text-xs font-semibold tracking-widest uppercase mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
    </div>
  )
}

export function Card({
  children,
  className = "",
  highlight = false,
}: {
  children: React.ReactNode
  className?: string
  highlight?: boolean
}) {
  return (
    <div
      className={`bg-black/40 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300
        ${highlight ? "border-[#E5B868] shadow-lg" : "border-white/10 hover:border-[#E5B868]/40"} ${className}`}
    >
      {children}
    </div>
  )
}

export const primaryBtn =
  "inline-block text-center px-10 py-4 rounded-full bg-[#E5B868] text-black font-bold text-lg hover:scale-105 transition-transform duration-200"
export const secondaryBtn =
  "inline-block text-center px-10 py-4 rounded-full border border-[#E5B868]/50 text-[#E5B868] font-bold text-lg hover:bg-[#E5B868]/10 transition-all duration-200"

// Book a Call / Get a Quote, on every page
export function CtaRow({
  lead = "call",
  title = "Ready To Work Together?",
  text = "Tell us about your artists and your project. We'll reply with a quote and next steps.",
}: {
  lead?: "call" | "quote"
  title?: string
  text?: string
}) {
  const call = (
    <Link key="call" href="/contact" className={lead === "call" ? primaryBtn : secondaryBtn}>
      Book a Call →
    </Link>
  )
  const quote = (
    <Link key="quote" href="/contact?type=quote" className={lead === "quote" ? primaryBtn : secondaryBtn}>
      Get a Quote →
    </Link>
  )
  return (
    <div className="text-center py-12 px-6 mt-16 bg-black/40 backdrop-blur-sm rounded-2xl border border-[#E5B868]/10">
      <p className="text-white font-bold text-2xl mb-2">{title}</p>
      <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">{text}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {lead === "call" ? [call, quote] : [quote, call]}
      </div>
    </div>
  )
}

// Required wherever business formation is mentioned
export function FormationDisclaimer({ className = "" }: { className?: string }) {
  return (
    <div
      role="note"
      className={`rounded-xl border border-[#E5B868]/40 bg-black/50 p-5 text-sm text-white/70 leading-relaxed ${className}`}
    >
      <p className="text-[#E5B868] text-xs font-semibold tracking-widest uppercase mb-2">
        Please Note
      </p>
      {formationDisclaimer}
    </div>
  )
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-10 text-white/75 leading-relaxed space-y-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:pt-4 [&_strong]:text-white [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-[#E5B868] [&_a]:underline">
      {children}
    </div>
  )
}
