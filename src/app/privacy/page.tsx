import { business } from "@/data/business"
import { PageShell, PageHeader, Prose } from "@/components/ui"

// ============================================
// 📌 WORKING DRAFT - HAVE AN ATTORNEY REVIEW
// BEFORE LAUNCH. You hold other people's income
// and expense records, so retention, breach
// notice and minors need a professional look.
// ============================================

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader label="Legal" title="Privacy Policy" subtitle={`Last updated: ${business.legalLastUpdated}`} />
      <div className="max-w-3xl mx-auto">
        <Prose>
          <p>
            {business.legalName} (&quot;we,&quot; &quot;us&quot;), doing business as {business.brandName}, respects your
            privacy. This policy explains what we collect, why, who can see it, and how we protect it.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li><strong>Contact details:</strong> name, email, phone, and how you heard about us, when you fill out our form or book a service.</li>
            <li><strong>Project details:</strong> your role, number of artists, services, platforms, timeline and budget range.</li>
            <li><strong>Catalog data:</strong> song titles, release dates, collaborators, ISRC codes and PRO registration status, entered in artist portals.</li>
            <li><strong>Income and expense records:</strong> spending and earnings per artist and per song, entered in artist portals.</li>
            <li><strong>Business formation details:</strong> information needed to help with an LLC filing or EIN application, such as business name, address and member names.</li>
            <li><strong>Files you share with us:</strong> footage, artwork, audio and documents.</li>
            <li><strong>Payment details:</strong> handled by {business.paymentTool}. We don&apos;t store full card numbers.</li>
            <li><strong>Basic site data:</strong> our hosting provider keeps standard server logs, such as pages requested, browser type and IP address.</li>
          </ul>

          <h2>Why we use it</h2>
          <p>
            To answer your inquiry, quote and book your work, deliver services, send invoices and receipts, keep tracker
            records up to date, and meet legal and tax record-keeping duties. We don&apos;t sell your information or use
            it for ads.
          </p>

          <h2>Who can see it</h2>
          <ul>
            <li><strong>Artists</strong> see only their own portal and data.</li>
            <li><strong>The label or collective owner</strong> sees the Master dashboard for the artists on their roster.</li>
            <li><strong>We</strong> see the data we need to set up and maintain your system.</li>
            <li>
              <strong>Service providers</strong> who help us run the business: Google (Drive and Sheets), Web3Forms (form
              delivery), {business.paymentTool}, {business.bookingTool}, our website host, and, for business formation,
              the attorney and state agencies involved, only with your OK.
            </li>
            <li><strong>Authorities</strong>, if the law requires it.</li>
          </ul>

          <h2>How we protect it</h2>
          <p>
            Portals are private Google files shared only with the right people. We use strong passwords and two-step
            verification on our accounts, limit who has access, and remove access when a project or retainer ends. No
            system is perfectly secure, and we&apos;ll tell you promptly if something goes wrong.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Inquiries: [__] months. Client records and invoices: [__] years. Tracker data: until you ask us to remove our
            access or the engagement ends.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask to see, correct or delete your information, or to remove our access to your portal, by emailing{" "}
            <a href={`mailto:${business.email}`}>{business.email}</a>. Your portal and Drive files stay yours.
          </p>

          <h2>Minors</h2>
          <p>If any artist is under 18, a parent or guardian must agree before we set up their portal.</p>

          <h2>Contact</h2>
          <p>
            {business.legalName}, {business.mailingAddress},{" "}
            <a href={`mailto:${business.email}`}>{business.email}</a>.
          </p>
        </Prose>
      </div>
    </PageShell>
  )
}
