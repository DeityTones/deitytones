import Link from "next/link"
import { business } from "@/data/business"
import {
  trackerSetup,
  artistOnboarding,
  ownerOnboarding,
  businessFormation,
  retainer,
  packages,
  tierLine,
} from "@/data/rates"
import ServiceCards from "@/components/ServiceCards"
import { PageShell, PageHeader, SectionTitle, Card, CtaRow, FormationDisclaimer } from "@/components/ui"
import ServiceBlock from "@/components/ServiceBlock"

// Packages and the systems/onboarding/business services are hidden at
// launch. Set this to true to show them again when bigger artists,
// labels or businesses come to you. Their prices live in src/data/rates.ts.
const showBusinessServices = false
import Steps from "@/components/Steps"
import Testimonials from "@/components/Testimonials"

const lines = [
  { href: "#audio", label: "Pharaoh's Palms", subtitle: "Audio" },
  { href: "#artist", label: "Artist Tools", subtitle: "Artist Portal" },
  { href: "#video", label: "Pharaoh's Sight", subtitle: "Video & Photo" },
]

const packageCards = [
  {
    name: "Individual Artist",
    bestFor: "One artist getting organized",
    onboarding: "1-on-1 artist session",
    tracker: "Personal portal",
    reels: "Add-on",
    price: packages.individual.price,
    deposit: packages.individual.deposit,
    cta: "call" as const,
  },
  {
    name: "Group",
    bestFor: `A duo, band or crew of up to ${packages.group.size}`,
    onboarding: "Group artist session",
    tracker: "Portal per member",
    reels: "Add-on",
    price: packages.group.price,
    deposit: packages.group.deposit,
    cta: "call" as const,
  },
  {
    name: "Label & Collective",
    bestFor: "Labels and collectives with a roster",
    onboarding: "Owner/team session + each artist connected",
    tracker: "Master dashboard + a portal per artist",
    reels: `${packages.label.reelsPerArtist} reels per artist per period`,
    price: `Starting at ${packages.label.startingAt}`,
    deposit: packages.label.deposit,
    cta: "quote" as const,
    highlight: true,
  },
]

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        label="Work With The Pharaoh"
        title="Services & Rates"
        subtitle="Professional quality. Honest pricing. Built for solo artists and duos who take their craft seriously. Pick a service below, or book a call and we'll help you choose."
      />

      {/* Service lines (jump links, styled like the old tabs) */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
        {lines.map((line) => (
          <a
            key={line.href}
            href={line.href}
            className="px-8 py-5 rounded-2xl text-left border bg-black/40 border-white/10 hover:border-[#E5B868]/50 transition-all duration-300"
          >
            <p className="text-lg font-bold tracking-wide text-[#E5B868]">{line.label}</p>
            <p className="text-sm tracking-widest uppercase text-white/50">{line.subtitle}</p>
          </a>
        ))}
      </div>

      {/* ================================
          HOW IT WORKS
          ================================ */}
      <section className="mb-24">
        <SectionTitle label="How It Works" title="From First Message To Finished Work" />
        <Steps compact />
        <p className="text-white/50 mt-4">
          Pass-through costs like state filing fees and attorney fees are billed separately, at cost.{" "}
          <Link href="/policies" className="text-[#E5B868] underline">See our Policies.</Link>
        </p>
      </section>

      {/* ================================
          LAUNCH SERVICES
          Edit prices or show/hide services in src/data/services.ts
          ================================ */}
      <section className="mb-24">
        <ServiceCards />
      </section>

      {showBusinessServices && (
        <>
      {/* ================================
          PACKAGES
          ================================ */}
      <section className="mb-24">
        <SectionTitle label="Packages" title="Pick Your Starting Point" id="packages" />
        <div className="grid md:grid-cols-3 gap-6">
          {packageCards.map((pkg) => (
            <Card key={pkg.name} highlight={pkg.highlight} className="flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
              <dl className="space-y-3 text-white/70 flex-grow">
                <div><dt className="text-white/40 text-xs uppercase tracking-widest">Best for</dt><dd>{pkg.bestFor}</dd></div>
                <div><dt className="text-white/40 text-xs uppercase tracking-widest">Onboarding</dt><dd>{pkg.onboarding}</dd></div>
                <div><dt className="text-white/40 text-xs uppercase tracking-widest">Tracker</dt><dd>{pkg.tracker}</dd></div>
                <div><dt className="text-white/40 text-xs uppercase tracking-widest">Reels</dt><dd>{pkg.reels}</dd></div>
              </dl>
              <p className="text-[#E5B868] font-bold text-2xl mt-6">{pkg.price}</p>
              <p className="text-white/50 text-sm mb-6">Deposit: {pkg.deposit}</p>
              <Link
                href={pkg.cta === "quote" ? "/contact?type=quote" : "/contact"}
                className="text-center px-8 py-3 rounded-full bg-[#E5B868] text-black font-bold hover:scale-105 transition-transform duration-200"
              >
                {pkg.cta === "quote" ? "Get a Quote →" : "Book a Call →"}
              </Link>
            </Card>
          ))}
        </div>
        <p className="text-white/60 text-center mt-6">
          Business formation assistance can be added to any package. State and attorney fees are separate.
        </p>
        <FormationDisclaimer className="mt-6 max-w-3xl mx-auto" />
      </section>

      {/* ================================
          SYSTEMS, ONBOARDING, BUSINESS SETUP
          ================================ */}
      <section id="systems" className="mb-12 scroll-mt-32 space-y-6">
        <SectionTitle label="Systems & Setup" title={business.systemsBrand} />

        <ServiceBlock
          id="tracker"
          label={business.systemsBrand}
          title="Artist Development Tracker"
          who="Labels, collectives and managers with 2 or more artists who need one clear picture of the whole roster."
          included={[
            "An owner Master dashboard in Google Sheets that pulls live data from each artist's private portal",
            "Per artist and per song: songs released, collaborations, ISRC and PRO registration status, spending and earnings",
            "Automatic to-do flags, like \"missing ISRC\" or \"not PRO registered\"",
            "A private portal for each artist. Artists see only their own portal; the owner sees everyone.",
            "Runs on free Google tools. No monthly software subscription.",
          ]}
          notIncluded="Registering songs with a PRO or getting ISRCs for you, accounting, bookkeeping, or tax, legal or financial advice. The tracker is a record-keeping tool."
          prices={[
            { name: "Done-for-you setup", value: `Starting at ${trackerSetup.startingAt}` },
            { name: "Tracker Setup", value: tierLine(trackerSetup.prices) },
          ]}
          cta="quote"
        >
          <p className="text-white/60">
            Prefer to set it up yourself?{" "}
            <Link href="/templates" className="text-[#E5B868] underline">Get the templates →</Link>
          </p>
        </ServiceBlock>

        <ServiceBlock
          id="onboarding"
          label={business.systemsBrand}
          title="Onboarding Sessions"
          who="Artists getting organized for the first time, and owners or teams bringing a roster into one system."
          included={[
            <><strong className="text-white">Artist onboarding (about 2 hours):</strong> Google account, Drive and Docs set up; organized folders for Contracts &amp; Licenses, Artwork, MP3 &amp; WAV, Collaborations and Videos; sharing set up with your label or collective; and your portal filled in together.</>,
            <><strong className="text-white">Owner and team onboarding (about 2 hours):</strong> company Drive set up, the Master tracker, your roster, and connecting each artist.</>,
            "A \"What you'll need\" list before we start and step-by-step guides to keep.",
            "Book 1-on-1, as a group, or as a business package.",
          ]}
          notIncluded="Creating content, uploading your catalog to distributors, or registering with PROs on your behalf."
          prices={[
            { name: "Artist Onboarding", value: tierLine(artistOnboarding) },
            { name: "Owner/Team Onboarding", value: tierLine(ownerOnboarding) },
          ]}
        />

        <ServiceBlock
          id="business-formation"
          label={business.systemsBrand}
          title="Business Formation Assistance"
          who="Artists, collectives and creative teams ready to form an LLC in Wisconsin who want a guide through the steps."
          included={[
            "Business name availability check",
            "Help with your Wisconsin LLC filing",
            "EIN application, completed together with you",
            "Guidance on registered agent and virtual address options",
            "Coordination of your operating agreement with a licensed attorney, who reviews it and bills you directly",
            "A compliance calendar and organized business documents",
          ]}
          notIncluded="State filing fees, attorney fees, registered agent or virtual address service fees (all billed separately at cost), legal advice, tax advice or tax filing."
          prices={[
            {
              name: "Business Formation Assistance",
              value: `Starting at ${businessFormation.startingAt} plus state and attorney fees | Deposit: ${businessFormation.deposit}`,
            },
          ]}
          cta="quote"
        >
          <FormationDisclaimer />
        </ServiceBlock>

        <ServiceBlock
          id="retainers"
          label={business.systemsBrand}
          title="Social Media & Maintenance Retainers"
          who="Labels and collectives that want reels for each artist and an up-to-date tracker without managing it themselves."
          included={[
            `${retainer.reelsPerArtist} reels per artist per billing period`,
            "Tracker upkeep: new releases, collaborations, flags cleared",
            "Billed every 2 weeks, in advance",
          ]}
          notIncluded="Paid ads, filming, and legal, tax or financial advice."
          prices={[
            {
              name: "Retainer",
              value: `Starting at ${retainer.startingAt} every 2 weeks for up to ${retainer.maxArtists} artists | Deposit: first period paid in advance`,
            },
          ]}
          cta="quote"
        />

        <Card>
          <p className="text-[#E5B868] text-xs font-semibold tracking-widest uppercase mb-2">DIY</p>
          <h3 className="text-2xl font-bold text-white mb-2">Checklists & Templates</h3>
          <p className="text-white/60 mb-4">Video shoot checklist (pre and post), onboarding guides and more.</p>
          <Link href="/templates" className="text-[#E5B868] font-bold underline">See all templates →</Link>
        </Card>
      </section>

        </>
      )}

      <Testimonials />

      <CtaRow lead="call" />
    </PageShell>
  )
}
