import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import Testimonials from "@/components/Testimonials";
import { primaryBtn, secondaryBtn, FormationDisclaimer } from "@/components/ui";

// ============================================
// 📌 HOME SERVICE CARDS
// ============================================
const serviceCards = [
  {
    label: "Pharaoh's Palms",
    title: "Audio Production",
    text: "Recording, mixing, mastering and podcast production. From single tracks to full project packages.",
    href: "/services#audio",
  },
  {
    label: "Pharaoh's Sight",
    title: "Reels & Short-Form",
    text: "Your live shows and music videos, reframed into vertical reels for Instagram, TikTok and Shorts. Captions, text and synced audio included.",
    href: "/services#reels",
  },
  {
    label: business.systemsBrand,
    title: "Artist Development Systems",
    text: "A Master dashboard for labels and collectives: every artist's releases, ISRC and PRO status, spending and earnings in one place. Built on free Google tools.",
    href: "/services#tracker",
  },
  {
    label: "Onboarding & Business Setup",
    title: "Get Organized",
    text: "Two-hour guided sessions to get artists and teams organized, plus LLC filing assistance and coordination.",
    href: "/services#onboarding",
  },
];

export default function HomePage() {
  return (
    <main className="relative flex flex-col 
                     min-h-screen text-white 
                     overflow-hidden">

      {/* ================================
          HERO SECTION
          ================================ */}
      <div className="relative z-10 flex flex-col 
                      flex-grow items-center
                      justify-center text-center 
                      px-4 pt-48 pb-32">

        {/* Hero Label */}
        <p className="text-[#E5B868] text-sm font-semibold
                      tracking-widest uppercase mb-6">
          
        </p>

       <h1 className="text-5xl font-bold 
               text-white mb-6 
               drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
  Step Into The Domain of T The Pharaoh
</h1>

<p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
  Music, visuals, and creative services shaped by vision, emotion, and frequency.
</p>

        <div className="w-full max-w-3xl mb-20">
          <Image
            src="/t_hero_edit.png"
            alt="T the Pharaoh hero image"
            width={1792}
            height={2400}
            sizes="(max-width: 768px) 100vw, 768px"
            className="rounded-lg shadow-2xl mx-auto w-full h-auto"
            priority
          />
        </div>

        {/* Hero CTA Buttons */}
        <div className="flex flex-col sm:flex-row 
                        gap-4 justify-center">
          <Link
            href="/music"
            className="px-10 py-4 rounded-full 
                       bg-[#E5B868] text-black 
                       font-bold text-lg
                       hover:scale-105 
                       transition-transform duration-200"
          >
            Listen Now
          </Link>
          <Link
            href="/portfolio"
            className="px-10 py-4 rounded-full 
                       border border-[#E5B868]/50
                       text-[#E5B868] font-bold text-lg
                       hover:bg-[#E5B868]/10
                       transition-all duration-200"
          >
            View The Work →
          </Link>
        </div>

      </div>

      {/* ================================
          SERVICES SECTION
          ================================ */}
      <section className="relative z-30 py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Label */}
          <p className="text-[#E5B868] text-sm font-semibold 
                        tracking-widest uppercase mb-2 
                        text-center">
            Work With The Pharaoh
          </p>

          {/* Section Title */}
          <h2 className="text-5xl font-bold text-white 
                         text-center mb-4">
            Services
          </h2>

          {/* Subtitle */}
          <p className="text-white/50 text-center text-lg 
                        mb-16 max-w-xl mx-auto">
            Professional quality. Clear pricing. 
            Built for artists, collectives and labels 
            who take their craft seriously.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 
                          gap-6 mb-16 max-w-4xl mx-auto">
            {serviceCards.map((card) => (
              <Link
                key={card.label}
                href={card.href}
                className="bg-black/40 backdrop-blur-sm 
                           rounded-2xl p-8
                           border border-white/10
                           hover:border-[#E5B868]/40
                           transition-all duration-300
                           group"
              >
                <p className="text-[#E5B868] text-xs 
                               font-semibold tracking-widest 
                               uppercase mb-4">
                  {card.label}
                </p>
                <h3 className="text-2xl font-bold text-white 
                                mb-4 group-hover:text-[#E5B868]
                                transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {card.text}
                </p>
              </Link>
            ))}
          </div>

          <FormationDisclaimer className="max-w-4xl mx-auto -mt-8 mb-16" />

          <Testimonials />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <Link href="/contact" className={primaryBtn}>
              Book a Call →
            </Link>
            <Link href="/services" className={secondaryBtn}>
              View Services & Rates →
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}