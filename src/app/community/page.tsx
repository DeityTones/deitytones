<<<<<<< HEAD
"use client"

import Image from "next/image"

// ============================================
// 📌 WEEKLY ARTIST SPOTLIGHT
// Update this object every week
// ============================================
const weeklySpotlight = {
  artistName: "T the Pharaoh",
  socialHandle: "@lnxpr_ah",
  socialLink: "https://instagram.com/lnxpr_ah",
  yourWords: `T the Pharaoh builds worlds out of melody, memory, and movement. 
  From recording and engineering to visuals and live performance, the work is rooted in feeling first and polish second.`,
  embedType: "soundcloud",
  embedSrc: "",
  youtubeId: "",
  week: "Week of March 2025",
}

// ============================================
// 📌 LATEST INSTAGRAM POST
// To update:
// 1. Go to your Instagram post
// 2. Click the three dots (...)
// 3. Click "Embed"
// 4. Copy the src URL from the iframe code
// 5. Paste it as the value of embedUrl below
// ============================================
const instagramPost = {
  embedUrl: "https://www.instagram.com/p/PLACEHOLDER/embed",
  caption: "Latest from the feed",
}

// ============================================
// 📌 THIS IS THE ACTUAL PAGE COMPONENT
// ============================================
=======
import Link from "next/link"
import Image from "next/image"

>>>>>>> dc3714c (simplyify community page)
export default function CommunityPage() {
  return (
    <main className="min-h-screen text-white">
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/community/Scrolls1.jpg"
            alt="World of T The Pharaoh"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-16">
          <p className="text-[#E5B868] text-sm font-semibold tracking-widest uppercase mb-6">
            Enter The Temple
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            World Building In Process
          </h1>

          <p className="max-w-2xl mx-auto text-white/70 text-lg md:text-xl leading-relaxed mb-12">
            The domain of T The Pharaoh is still being built... Stories, exclusive drops, 
            and new frequencies are on the way. Until the time comes,
            explore the music, the works, and the vision...
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/music"
              className="px-8 py-4 rounded-full bg-[#E5B868] text-black font-bold hover:scale-105 transition-transform duration-200"
            >
              Explore Music
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-full border border-[#E5B868]/50 text-[#E5B868] font-bold hover:bg-[#E5B868]/10 transition-all duration-200"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:border-[#E5B868]/50 hover:text-[#E5B868] transition-all duration-200"
            >
              Book Services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#E5B868] text-sm font-semibold tracking-widest uppercase mb-2 text-center">
            What’s Coming
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            The World Ahead
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#E5B868]/40 transition-all duration-300">
              <p className="text-[#E5B868] text-xs font-semibold tracking-widest uppercase mb-4">
                The Story
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">
                Lore & Origin
              </h3>
              <p className="text-white/60 leading-relaxed">
                The mythology, origin, and frequency behind T The Pharaoh.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#E5B868]/40 transition-all duration-300">
              <p className="text-[#E5B868] text-xs font-semibold tracking-widest uppercase mb-4">
                Exclusive Drops
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">
                New Frequencies
              </h3>
              <p className="text-white/60 leading-relaxed">
                Special releases, visual moments, and deeper experiences still
                in the making.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#E5B868]/40 transition-all duration-300">
              <p className="text-[#E5B868] text-xs font-semibold tracking-widest uppercase mb-4">
                Temple Access
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">
                Community Portal
              </h3>
              <p className="text-white/60 leading-relaxed">
                A future space for those tapped into the vision, the music, and
                the world being built.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
