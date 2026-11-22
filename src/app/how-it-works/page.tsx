import Link from "next/link"
import { PageShell, PageHeader, primaryBtn, FormationDisclaimer } from "@/components/ui"
import Steps from "@/components/Steps"

export default function HowItWorksPage() {
  return (
    <PageShell>
      <PageHeader label="Booking & Payment" title="How It Works" subtitle="From first message to finished work, in five steps." />
      <div className="max-w-3xl mx-auto">
        <Steps />
        <p className="text-white/60 mt-8 leading-relaxed">
          Pass-through costs like state filing fees and attorney fees are billed separately, at cost.{" "}
          <Link href="/policies" className="text-[#E5B868] underline">See our Policies.</Link>
        </p>
        <FormationDisclaimer className="mt-6" />
        <div className="text-center mt-12">
          <Link href="/contact" className={primaryBtn}>Start Your Intake Form →</Link>
        </div>
      </div>
    </PageShell>
  )
}
