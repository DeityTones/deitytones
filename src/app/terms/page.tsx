import Link from "next/link"
import { business, formationDisclaimer } from "@/data/business"
import { PageShell, PageHeader, Prose } from "@/components/ui"

// ============================================
// 📌 WORKING DRAFT - HAVE AN ATTORNEY REVIEW
// BEFORE LAUNCH (liability cap, license terms,
// governing law, deposits).
// ============================================

export default function TermsPage() {
  return (
    <PageShell>
      <PageHeader label="Legal" title="Terms of Service" subtitle={`Last updated: ${business.legalLastUpdated}`} />
      <div className="max-w-3xl mx-auto">
        <Prose>
          <p>
            These terms apply when you use this site, buy a template or book a service from {business.legalName}, doing
            business as {business.brandName}.
          </p>
          <p>
            <strong>1. Services.</strong> We provide the services described on our site and in your quote. Your quote or
            invoice sets the scope, price and timeline.
          </p>
          <p>
            <strong>2. Payment.</strong> Deposits, balances, retainers, rescheduling and refunds follow our{" "}
            <Link href="/policies">Policies</Link> page, which is part of these terms.
          </p>
          <p>
            <strong>3. Our templates and systems.</strong> The Artist Development Tracker, Master dashboard, artist
            portals, onboarding guides, checklists and all templates are owned by {business.legalName}. When you pay, you
            get a non-exclusive, non-transferable license to use them for your own business and roster. You may not
            resell, sublicense, publish or share them, or use them to offer competing services.
          </p>
          <p>
            <strong>4. Your content.</strong> You keep ownership of your music, footage, artwork, data and documents. You
            confirm you have the rights to everything you give us, including music and footage used in reels. You let us
            use it only to do the work. We may show finished work in our portfolio unless you tell us not to.
          </p>
          <p>
            <strong>5. Record-keeping only.</strong> Our tracking tools organize information you provide. They are for
            record-keeping only and are not financial, tax, accounting or legal advice. You&apos;re responsible for
            checking the accuracy of your records and for your own registrations, filings and taxes.
          </p>
          <p>
            <strong>6. Business formation assistance.</strong> {formationDisclaimer}
          </p>
          <p>
            <strong>7. Platforms.</strong> Results on Instagram, TikTok, YouTube or any other platform aren&apos;t
            guaranteed. We&apos;re not responsible for platform rules, takedowns or account actions.
          </p>
          <p>
            <strong>8. Limits of liability.</strong> To the extent the law allows, our total liability for any claim is
            limited to the amount you paid us for the service in question in the {business.liabilityMonths} months before
            the claim. We&apos;re not liable for lost profits, lost data or indirect damages. Services and templates are
            provided &quot;as is.&quot;
          </p>
          <p>
            <strong>9. Ending work.</strong> Either side may end a retainer with {business.retainerNoticeDays} days&apos;
            written notice. Work already done is billed.
          </p>
          <p>
            <strong>10. Governing law.</strong> These terms are governed by the laws of the State of Wisconsin.
          </p>
          <p>
            <strong>11. Changes.</strong> We may update these terms; the date above shows the latest version.
          </p>
          <p>
            <strong>Contact:</strong> <a href={`mailto:${business.email}`}>{business.email}</a>.
          </p>
        </Prose>
      </div>
    </PageShell>
  )
}
