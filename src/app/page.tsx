"use client"
import Image from "next/image";
import Link from "next/link";

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
          T The Pharaoh
        </p>

        <h1 className="text-5xl font-bold 
                       text-[#4c4c8e] mb-8 
                       drop-shadow-md">
          Discover the Future of Multi Media
        </h1>

        <div className="w-full max-w-3xl mb-20">
          <Image
            src="/t_hero_edit.png"
            alt="T the Pharaoh hero image"
            width={768}
            height={432}
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
            Professional quality. Honest pricing. 
            Built for artists who take their 
            craft seriously.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 
                          gap-6 mb-16">

            {/* Card 1 - Audio */}
            <div className="bg-black/40 backdrop-blur-sm 
                            rounded-2xl p-8
                            border border-white/10
                            hover:border-[#E5B868]/40
                            transition-all duration-300
                            group">
              <p className="text-[#E5B868] text-xs 
                             font-semibold tracking-widest 
                             uppercase mb-4">
                Pharaoh's Palms
              </p>
              <h3 className="text-2xl font-bold text-white 
                              mb-4 group-hover:text-[#E5B868]
                              transition-colors duration-300">
                Audio Production
              </h3>
              <p className="text-white/50 leading-relaxed">
                Recording, mixing, mastering, and podcast 
                production. From single tracks to full 
                project packages.
              </p>
            </div>

            {/* Card 2 - Video */}
            <div className="bg-black/40 backdrop-blur-sm 
                            rounded-2xl p-8
                            border border-white/10
                            hover:border-[#E5B868]/40
                            transition-all duration-300
                            group">
              <p className="text-[#E5B868] text-xs 
                             font-semibold tracking-widest 
                             uppercase mb-4">
                Pharaoh's Sight
              </p>
              <h3 className="text-2xl font-bold text-white 
                              mb-4 group-hover:text-[#E5B868]
                              transition-colors duration-300">
                Video & Content
              </h3>
              <p className="text-white/50 leading-relaxed">
                Short-form content, video editing, picture 
                enhancing, and social media strategy for 
                artists and brands.
              </p>
            </div>

            {/* Card 3 - Custom */}
            <div className="bg-black/40 backdrop-blur-sm 
                            rounded-2xl p-8
                            border border-white/10
                            hover:border-[#E5B868]/40
                            transition-all duration-300
                            group">
              <p className="text-[#E5B868] text-xs 
                             font-semibold tracking-widest 
                             uppercase mb-4">
                Custom
              </p>
              <h3 className="text-2xl font-bold text-white 
                              mb-4 group-hover:text-[#E5B868]
                              transition-colors duration-300">
                Let's Build It
              </h3>
              <p className="text-white/50 leading-relaxed">
                Don't see exactly what you need? 
                Let's talk and see what we can do.
              </p>
            </div>

          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block px-12 py-5 
                         rounded-full bg-[#E5B868] 
                         text-black font-bold text-lg
                         hover:scale-105 
                         transition-transform duration-200
                         shadow-lg"
            >
              View Full Rates & Book →
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}