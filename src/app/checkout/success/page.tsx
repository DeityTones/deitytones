import type { Metadata } from "next"
import Link from "next/link"
import { CONSULT_BOOKING_URL } from "@/components/ConsultCalendar"
import { getStripe } from "@/lib/stripe"
import { findTemplate, money } from "@/lib/pricing"

export const metadata: Metadata = {
  title: "Payment Received",
  robots: { index: false, follow: false },
}

const box = "bg-black/50 backdrop-blur-sm rounded-2xl border border-[#E5B868]/30 p-8 space-y-4 text-white/70 leading-relaxed"
const gold = "inline-block px-8 py-3 rounded-full bg-[#E5B868] text-black font-bold hover:scale-105 transition-transform duration-200"

async function loadSession(id: string | undefined) {
  const stripe = getStripe()
  if (!stripe || !id || !id.startsWith("cs_")) return null
  try {
    return await stripe.checkout.sessions.retrieve(id)
  } catch {
    return null
  }
}

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams
  const session = await loadSession(session_id)
  const paid = session && session.payment_status !== "unpaid"
  const meta = session?.metadata ?? {}

  let body: React.ReactNode
  if (!session) {
    body = (
      <p>
        We couldn&apos;t find that payment. If you were charged, email{" "}
        <a href="mailto:booking@tthepharaoh.net" className="text-[#E5B868] underline">booking@tthepharaoh.net</a> and
        we&apos;ll sort it out.
      </p>
    )
  } else if (!paid) {
    body = <p>Your payment is processing. Your bank can take a few days to confirm it; Stripe will email your receipt once it clears.</p>
  } else if (meta.kind === "template") {
    const t = findTemplate(meta.item ?? "")
    const link = t ? process.env[t.deliveryEnv] : undefined
    body = (
      <>
        <p>Thank you! Your receipt is on its way to {session.customer_details?.email ?? "your email"}.</p>
        {link ? (
          <>
            <p>
              Open your template below and choose <strong className="text-white">File → Make a copy</strong>. The copy
              saves to your own Google Drive. Bookmark this page or save the copy now.
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer" className={gold}>Open {t?.name}</a>
          </>
        ) : (
          <p>We&apos;ll email your template link within one business day.</p>
        )}
      </>
    )
  } else {
    const balance = Number(meta.balance_cents ?? 0)
    body = (
      <>
        <p>Thank you! Your payment is confirmed and your receipt is on its way to {session.customer_details?.email ?? "your email"}.</p>
        {balance > 0 && (
          <p>The remaining {money(balance)} will be sent as a Stripe invoice before your final files are delivered.</p>
        )}
        {CONSULT_BOOKING_URL && (
          <>
            <p>Next, pick a time for your session:</p>
            <a href={CONSULT_BOOKING_URL} target="_blank" rel="noopener noreferrer" className={gold}>Pick a Session Time</a>
          </>
        )}
      </>
    )
  }

  return (
    <main className="relative flex flex-col min-h-screen text-white overflow-hidden">
      <div className="relative z-10 pt-32 pb-16 px-4 flex-grow">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-white mb-10">
            {paid ? "Payment Received" : "Almost There"}
          </h1>
          <div className={box}>{body}</div>
          <p className="text-center mt-8">
            <Link href="/" className="text-[#E5B868] underline">Back to home</Link>
          </p>
        </div>
      </div>
    </main>
  )
}
