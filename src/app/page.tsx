"use client"
import Image from "next/image";

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
            className="rounded-lg shadow-2xl mx-auto"
            priority
          />
        </div>
      </div>

      {/* ================================
          LISTEN UP MARQUEE SECTION
          ================================ */}
      <section className="relative z-20 w-full 
                          bg-[#E5DDE9] pb-16 
                          pt-16 -mt-32">

        {/* Wave Divider */}
        <div className="absolute top-0 left-0 w-full 
                        h-24 overflow-hidden -mt-24 
                        pointer-events-none">
          <svg
            className="absolute bottom-0 w-full 
                       h-full text-[#E5DDE9]"
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,80L48,90.7C96,101,192,123,288,133.3C384,144,480,144,576,133.3C672,123,768,101,864,80C960,59,1056,37,1152,42.7C1248,48,1344,80,1392,96L1440,112L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z" />
          </svg>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden whitespace-nowrap 
                        py-4 mb-8">
          <div className="animate-[marquee_25s_linear_infinite] 
                          inline-block">
            <span className="text-7xl md:text-8xl font-bold 
                             text-[#4c4c8e] tracking-tight">
              Listen up. * Listen up. * Listen up. * 
              Listen up. * Listen up. *
            </span>
            <span className="text-7xl md:text-8xl font-bold 
                             text-[#4c4c8e] tracking-tight">
              Listen up. * Listen up. * Listen up. * 
              Listen up. * Listen up. *
            </span>
          </div>
        </div>

        {/* Story + SoundCloud */}
        <div className="max-w-6xl mx-auto flex flex-col 
                        md:flex-row items-start 
                        md:space-x-12 px-6 text-gray-800">
          <div className="md:w-1/2 mb-8 md:mb-0 
                          text-lg leading-relaxed">
            <p className="max-w-md">
              It all begins with an idea. Maybe you want 
              to launch a business. Maybe you want to turn 
              a hobby into something more. Or maybe you
              have a creative project to share with the 
              world. Whichever it is, the way you tell 
              your story online can make all the difference.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col 
                          items-center md:items-end 
                          space-y-4">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&color=%234c4c8e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              className="max-w-md"
            />
            <div
              style={{ fontSize: "10px", color: "#cccccc",
                       textOverflow: "ellipsis" }}
              className="max-w-md text-gray-500"
            >
              <a href="#"
                 style={{ color: "#cccccc",
                          textDecoration: "none" }}>
                Aoki
              </a> ·
              <a href="#"
                 style={{ color: "#cccccc",
                          textDecoration: "none" }}>
                Sample Track
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          SERVICES SECTION - CLEANED UP
          No images, no old prices
          Points to /contact page
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

          {/* Service Cards - No Images, No Prices */}
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
            <a
              href="/contact"
              className="inline-block px-12 py-5 
                         rounded-full bg-[#E5B868] 
                         text-black font-bold text-lg
                         hover:scale-105 
                         transition-transform duration-200
                         shadow-lg"
            >
              View Full Rates & Book →
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}