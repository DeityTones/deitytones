import PayForms from "@/components/PayForms"

const errors: Record<string, string> = {
  "not-configured": "Online payments aren't switched on yet. Please email booking@tthepharaoh.net and we'll send you an invoice.",
  invalid: "That option isn't available. Please check the details and try again.",
  stripe: "We couldn't open checkout just now. Please try again in a minute, or email booking@tthepharaoh.net.",
}

export default async function PayPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; canceled?: string }>
}) {
  const { error, canceled } = await searchParams
  const notice = error ? errors[error] ?? errors.stripe : canceled ? "Checkout was canceled. You weren't charged." : ""

  return (
    <main className="relative flex flex-col min-h-screen text-white overflow-hidden">
      <div className="relative z-10 pt-32 pb-16 px-4 flex-grow">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#E5B868] text-sm font-semibold tracking-widest uppercase mb-2 text-center">
            Secure Payments
          </p>
          <h1 className="text-5xl font-bold text-center text-white mb-4">Pay a Deposit</h1>
          <p className="text-center text-white/50 mb-12 text-lg max-w-2xl mx-auto">
            A 50% deposit books your spot (the Artist Portal is paid in full). The balance is invoiced before final
            files are delivered. Card payments are handled by Stripe; we never see your card number.
          </p>

          {notice && (
            <p role="status" className="mb-10 text-center rounded-2xl border border-[#E5B868]/40 bg-black/50 p-4 text-white/80">
              {notice}
            </p>
          )}

          <PayForms />
        </div>
      </div>
    </main>
  )
}
