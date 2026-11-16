import { business } from "@/data/business"
import { PageShell, PageHeader, CtaRow, FormationDisclaimer } from "@/components/ui"

const faqs: { q: string; a: string; formation?: boolean }[] = [
  {
    q: "Do I need to know spreadsheets?",
    a: "No. Your portal is a simple fill-in sheet, and we walk you through it in your onboarding session. The owner's dashboard updates itself.",
  },
  {
    q: "Do artists see each other's info?",
    a: "No. Each artist sees only their own portal. Only the owner of the label or collective sees the Master dashboard with everyone's data.",
  },
  {
    q: "What do I need to bring to onboarding?",
    a: "A laptop, your Gmail login (or we'll create one), and the files you want organized: contracts, artwork, MP3 and WAV files, and videos. You'll get a full \"What you'll need\" list after you book.",
  },
  {
    q: "Are state fees included in LLC help?",
    a: "No. State filing fees, attorney fees and registered agent or virtual address fees are separate and billed at cost. We assist with filing and coordination; we are not a law firm and don't give legal or tax advice.",
    formation: true,
  },
  {
    q: "Do you post the reels or just deliver them?",
    a: business.postsReels
      ? "We deliver finished reels to your Google Drive, ready to post, and we can also post them for you as part of a retainer."
      : "We deliver finished reels to your Google Drive, ready for you to post.",
  },
  {
    q: "How are retainers billed?",
    a: "Every 2 weeks, in advance. If a payment is late, work pauses until it's caught up.",
  },
  {
    q: "What if I need to reschedule?",
    a: "You can reschedule once with at least 48 hours' notice.",
  },
  {
    q: "Do I have to pay for software?",
    a: "No. The tracker runs on free Google tools, with no monthly subscription.",
  },
  {
    q: "Is the tracker financial or tax advice?",
    a: "No. It's a record-keeping tool. For tax or financial questions, talk to a CPA or financial advisor.",
  },
  {
    q: "How do I pay?",
    a: `${business.paymentMethods}. A deposit books your spot; see How It Works.`,
  },
]

export default function FaqPage() {
  return (
    <PageShell>
      <PageHeader label="Questions" title="Frequently Asked Questions" />
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 open:border-[#E5B868]/40 p-6"
          >
            <summary className="cursor-pointer list-none flex justify-between items-center gap-4 text-lg font-bold text-white">
              {item.q}
              <span className="text-[#E5B868] text-2xl transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="text-white/70 leading-relaxed mt-4">{item.a}</p>
            {item.formation && <FormationDisclaimer className="mt-4" />}
          </details>
        ))}
      </div>
      <CtaRow lead="call" title="Still Have Questions?" text="Book a call and we'll walk through it together." />
    </PageShell>
  )
}
