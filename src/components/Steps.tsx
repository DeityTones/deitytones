import { business } from "@/data/business"

// The 5-step booking and payment flow (How It Works, Services, Contact)
export const steps = [
  {
    title: "Tell us what you need.",
    text: "Fill out the intake form. It takes about 3 minutes.",
  },
  {
    title: "Get your quote.",
    text: `We'll reply within ${business.replyDays} business days with a quote and timeline, or invite you to a short call if we need more detail.`,
  },
  {
    title: "Pay your deposit to book.",
    text: `Your date or project spot is held once the deposit is paid through ${business.paymentTool}. Then you'll pick a session time in ${business.bookingTool}.`,
  },
  {
    title: "We do the work.",
    text: `Live sessions happen over ${business.sessionLocation}. For reels and setups, we'll keep you posted and deliver to your Google Drive.`,
  },
  {
    title: "Pay the balance.",
    text: `The remaining balance is due ${business.balanceDue}. Retainers are billed every 2 weeks in advance.`,
  },
]

export default function Steps({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`grid gap-4 ${compact ? "md:grid-cols-5" : ""}`}>
      {steps.map((step, i) => (
        <li
          key={i}
          className={`bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-6 flex ${compact ? "flex-col" : "items-start"} gap-4`}
        >
          <span className="text-[#E5B868] font-bold text-2xl min-w-[32px]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>
            <span className="block text-white font-bold text-lg mb-1">{step.title}</span>
            <span className="block text-white/60 leading-relaxed">{step.text}</span>
          </span>
        </li>
      ))}
    </ol>
  )
}
