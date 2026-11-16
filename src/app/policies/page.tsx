import { business } from "@/data/business"
import { PageShell, PageHeader, Prose, CtaRow, FormationDisclaimer } from "@/components/ui"

export default function PoliciesPage() {
  return (
    <PageShell>
      <PageHeader
        label="The Fine Print"
        title="Booking & Payment Policies"
        subtitle="These policies apply to every service and match what's on your invoice."
      />
      <div className="max-w-3xl mx-auto">
        <Prose>
          <p>
            <strong>Deposits.</strong> A deposit of {business.deposit} is required to book. Deposits are
            non-refundable once work begins. If you cancel before work begins, {business.cancelBeforeWork}.
          </p>
          <p>
            <strong>Rescheduling.</strong> You can reschedule a session once with at least 48 hours&apos; notice. A
            second reschedule, or a change with less than 48 hours&apos; notice, {business.lateReschedule}.
          </p>
          <p>
            <strong>Balance.</strong> The remaining balance is due {business.balanceDue}. Final files are released
            when the balance is paid.
          </p>
          <p>
            <strong>Retainers.</strong> Retainers are billed every 2 weeks, in advance. If a payment is more than{" "}
            {business.retainerLateDays} days late, work pauses until the account is current. To end a retainer, give{" "}
            {business.retainerNoticeDays} days&apos; written notice.
          </p>
          <p>
            <strong>Digital products.</strong> Templates and checklists are non-refundable after delivery. If a link
            doesn&apos;t work, we&apos;ll fix it.
          </p>
          <p>
            <strong>Pass-through costs.</strong> State filing fees, attorney fees and third-party providers (such as
            registered agent or virtual address services) are billed separately, at cost, or paid by you directly.
            They are not included in our service price.
          </p>
          <p>
            <strong>Accepted payment methods.</strong> {business.paymentMethods}.
          </p>
          {business.lateFee && (
            <p>
              <strong>Late payments.</strong> {business.lateFee}.
            </p>
          )}
          <p>
            Questions? Email <a href={`mailto:${business.email}`}>{business.email}</a>.
          </p>
        </Prose>
        <FormationDisclaimer className="mt-6" />
      </div>
      <CtaRow lead="call" />
    </PageShell>
  )
}
