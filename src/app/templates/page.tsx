import Link from "next/link"
import { business } from "@/data/business"
import { templates } from "@/data/rates"
import { PageShell, PageHeader, Card, CtaRow } from "@/components/ui"

export default function TemplatesPage() {
  const buyHref = business.templatesCheckoutUrl || "/contact"
  return (
    <PageShell>
      <PageHeader
        label="Templates & Checklists"
        title="Build It Yourself."
        subtitle="The same systems we set up for labels and collectives, ready for you to copy and run on free Google tools."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {templates.map((t) => (
          <Card key={t.name} className="flex flex-col">
            <h2 className="text-2xl font-bold text-white mb-2">{t.name}</h2>
            <p className="text-white/60 leading-relaxed flex-grow">{t.description}</p>
            <p className="text-[#E5B868] font-bold text-2xl mt-6 mb-4">{t.price}</p>
            <a
              href={buyHref}
              className="self-start px-8 py-3 rounded-full bg-[#E5B868] text-black font-bold hover:scale-105 transition-transform duration-200"
            >
              Get the Template
            </a>
          </Card>
        ))}
        <Card className="flex items-center justify-center">
          <p className="text-white/50 text-xl font-semibold">More coming soon.</p>
        </Card>
      </div>

      <p className="text-white/50 text-sm mt-6">Prices in USD. {business.taxNote}</p>

      <div className="mt-12 bg-black/50 backdrop-blur-sm rounded-2xl border border-[#E5B868]/30 p-8 space-y-4 text-white/70 leading-relaxed">
        <h2 className="text-2xl font-bold text-white">How delivery works</h2>
        <p>
          After checkout, you&apos;ll get an email with a link to each template. Click the link and choose{" "}
          <strong className="text-white">Make a copy</strong>. The copy saves to your own Google Drive, and it&apos;s
          yours to use and edit. You&apos;ll need a free Google account. We can&apos;t see or change your copy.
        </p>
        <p>
          <strong className="text-white">All sales are final.</strong> Because templates are delivered instantly as
          digital files, they can&apos;t be refunded after delivery. If a link doesn&apos;t work, email us at{" "}
          <a href={`mailto:${business.email}`} className="text-[#E5B868] underline">{business.email}</a> and we&apos;ll fix it.
        </p>
        <p>
          <strong className="text-white">License:</strong> For use by you and your own business or roster. Templates
          can&apos;t be resold, shared publicly or redistributed.
          {business.legalPagesReady && (
            <>
              {" "}See our <Link href="/terms" className="text-[#E5B868] underline">Terms</Link>.
            </>
          )}
        </p>
      </div>

      <CtaRow
        lead="call"
        title="Want Us To Set It Up For You?"
        text="We'll build your Master dashboard and artist portals and walk your team through them."
      />
    </PageShell>
  )
}
