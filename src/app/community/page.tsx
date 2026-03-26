"use client"

import Link from "next/link"
import Image from "next/image"

// ============================================
// 📌 WEEKLY ARTIST SPOTLIGHT
// Update this object every week
// ============================================
const weeklySpotlight = {
  artistName: "Artist Name Here",
  socialHandle: "@artisthandle",
  socialLink: "https://instagram.com/artisthandle",
  yourWords: `Write your personal note about this artist here. 
  Why do you fw their music? What makes them special? 
  Keep it real and keep it you.`,
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
export default function CommunityPage() {
  return (
    <main className="min-h-screen text-white"
      style={{ backgroundColor: "#0A0A0A" }}>

      {/* ================================
          SECTION 1: HERO
          Scrolls1.jpg as background
          ================================ */}
      <section className="relative min-h-screen flex items-center 
                          justify-center overflow-hidden">

        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/community/Scrolls1.jpg"
            alt="Pharaoh's Odyssey"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay so text is readable */}
          <div className="absolute inset-0 
                          bg-gradient-to-b 
                          from-black/70 
                          via-black/50 
                          to-[#0A0A0A]" />

          {/* Subtle red tint overlay */}
          <div className="absolute inset-0 
                          bg-[#8B0000]/10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto 
                        px-6 pt-32 pb-20 text-center">

          {/* Small label */}
          <p className="text-[#E5B868] text-sm font-semibold 
                        tracking-widest uppercase mb-6
                        drop-shadow-lg">
            Welcome To The World
          </p>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl 
                         font-bold mb-4 tracking-tight 
                         leading-none drop-shadow-2xl">
            <span className="text-white">
              Ryoiki Tenkai:
            </span>
            <br />
            <span className="text-[#E5B868]">
              Pharaoh's Odyssey
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/60 text-xl md:text-2xl 
                        italic mt-6 mb-12 tracking-wide
                        drop-shadow-lg">
            A melodic journey
          </p>

          {/* Decorative gold line */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-24 bg-[#E5B868]/40" />
            <div className="w-2 h-2 rounded-full bg-[#E5B868]" />
            <div className="h-px w-24 bg-[#E5B868]/40" />
          </div>

          {/* Intro Statement Card */}
          <div className="max-w-2xl mx-auto 
                          bg-black/50 backdrop-blur-md
                          rounded-2xl p-8
                          border border-[#E5B868]/20
                          shadow-2xl">
            <p className="text-white/80 text-lg leading-relaxed">
              This is more than music. This is a world built 
              for those who feel everything deeply. Welcome to 
              the Pharaoh's Odyssey — where every melody tells 
              a story and every story finds its people.
            </p>
          </div>

          {/* Scroll down indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 
                          text-white/30 text-xs tracking-widest 
                          uppercase animate-bounce">
            <span>Scroll</span>
            <span>↓</span>
          </div>

        </div>
      </section>

      {/* ================================
          RED/GOLD DIVIDER
          ================================ */}
      <div className="relative w-full h-1 my-0">
        <div className="absolute inset-0 
                        bg-gradient-to-r 
                        from-transparent 
                        via-[#8B0000] 
                        to-transparent" />
      </div>

      {/* ================================
          SECTION 2: LATEST INSTAGRAM POST
          "The Weight of the Crown"
          ================================ */}
      <section className="px-6 py-20"
               style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-6xl mx-auto">

          {/* Section Label */}
          <p className="text-[#E5B868] text-sm font-semibold 
                        tracking-widest uppercase mb-2">
            Latest Drop
          </p>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold 
                         text-white mb-4">
            The Weight of the Crown
          </h2>

          {/* Decorative line */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-16 bg-[#8B0000]/60" />
            <div className="w-1.5 h-1.5 rounded-full 
                            bg-[#8B0000]" />
            <div className="h-px flex-1 bg-white/5" />
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 
                          gap-12 items-start">

            {/* Left: Instagram Embed */}
            <div className="w-full">
              <div className="bg-black/60 backdrop-blur-sm 
                              rounded-2xl overflow-hidden
                              border border-[#8B0000]/30
                              shadow-2xl p-4">

                {instagramPost.embedUrl.includes("PLACEHOLDER") ? (

                  // Placeholder until real post is added
                  <div className="aspect-square w-full 
                                  bg-black/80 rounded-xl
                                  flex flex-col items-center 
                                  justify-center gap-6 p-8
                                  border border-white/5">
                    <div className="w-20 h-20 rounded-full 
                                    border-2 border-[#E5B868]/30
                                    flex items-center 
                                    justify-center">
                      <span className="text-3xl">📸</span>
                    </div>
                    <div className="text-center">
                      <p className="text-white/20 text-sm 
                                    tracking-widest uppercase 
                                    mb-2">
                        Latest Post
                      </p>
                      <p className="text-white/10 text-xs">
                        Instagram embed coming soon
                      </p>
                    </div>
                    {/* Instagram link button */}
                    <a
                      href="https://www.instagram.com/t_the_pharaoh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full 
                                 border border-[#E5B868]/30
                                 text-[#E5B868] text-sm
                                 hover:bg-[#E5B868]/10
                                 transition-all duration-200
                                 tracking-widest uppercase"
                    >
                      Follow On Instagram
                    </a>
                  </div>

                ) : (

                  // Real Instagram embed
                  <iframe
                    src={instagramPost.embedUrl}
                    className="w-full aspect-square rounded-xl"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                  />
                )}
              </div>
            </div>

            {/* Right: Context + Links */}
            <div className="flex flex-col gap-8">

              {/* Caption card */}
              <div className="bg-black/40 backdrop-blur-sm 
                              rounded-2xl p-8
                              border border-[#E5B868]/10">
                <p className="text-[#E5B868] text-xs 
                               tracking-widest uppercase mb-4">
                  From The Pharaoh
                </p>
                <p className="text-white/70 text-lg 
                               leading-relaxed italic">
                  "{instagramPost.caption}"
                </p>
              </div>

              {/* Social links */}
              <div className="bg-black/40 backdrop-blur-sm 
                              rounded-2xl p-8
                              border border-[#8B0000]/20">
                <p className="text-[#E5B868] text-xs 
                               tracking-widest uppercase mb-6">
                  Follow The Journey
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://www.instagram.com/t_the_pharaoh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between
                               px-6 py-4 rounded-xl
                               bg-[#8B0000]/20 
                               border border-[#8B0000]/30
                               hover:bg-[#8B0000]/30
                               transition-all duration-200"
                  >
                    <span className="text-white font-semibold 
                                     tracking-widest uppercase 
                                     text-sm">
                      Instagram
                    </span>
                    <span className="text-[#E5B868]">↗</span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCqcICy39GycwORST5cFPodw?sub_confirmation=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between
                               px-6 py-4 rounded-xl
                               bg-[#8B0000]/20
                               border border-[#8B0000]/30
                               hover:bg-[#8B0000]/30
                               transition-all duration-200"
                  >
                    <span className="text-white font-semibold 
                                     tracking-widest uppercase 
                                     text-sm">
                      YouTube
                    </span>
                    <span className="text-[#E5B868]">↗</span>
                  </a>
                  <a
                    href="https://soundcloud.com/t-the-pharaoh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between
                               px-6 py-4 rounded-xl
                               bg-[#8B0000]/20
                               border border-[#8B0000]/30
                               hover:bg-[#8B0000]/30
                               transition-all duration-200"
                  >
                    <span className="text-white font-semibold 
                                     tracking-widest uppercase 
                                     text-sm">
                      SoundCloud
                    </span>
                    <span className="text-[#E5B868]">↗</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================================
          RED/GOLD DIVIDER
          ================================ */}
      <div className="relative w-full h-px">
        <div className="absolute inset-0 
                        bg-gradient-to-r 
                        from-transparent 
                        via-[#E5B868]/30 
                        to-transparent" />
      </div>

      {/* ================================
          SECTION 3: WEEKLY ARTIST SPOTLIGHT
          ================================ */}
      <section className="px-6 py-20"
               style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-6xl mx-auto">

          {/* Section Label */}
          <p className="text-[#E5B868] text-sm font-semibold 
                        tracking-widest uppercase mb-2">
            {weeklySpotlight.week}
          </p>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold 
                         text-white mb-4">
            Artist Spotlight
          </h2>

          {/* Decorative line */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-16 bg-[#8B0000]/60" />
            <div className="w-1.5 h-1.5 rounded-full 
                            bg-[#8B0000]" />
            <div className="h-px flex-1 bg-white/5" />
          </div>

          {/* Spotlight Card */}
          <div className="bg-black/60 backdrop-blur-sm 
                          rounded-2xl overflow-hidden
                          border border-[#E5B868]/20
                          shadow-2xl">

            {/* Card Header */}
            <div className="p-8 border-b border-white/5
                            bg-gradient-to-r 
                            from-[#8B0000]/20 
                            to-transparent">
              <div className="flex flex-col md:flex-row 
                              md:items-center 
                              justify-between gap-4">

                {/* Artist Info */}
                <div>
                  {/* Format Label */}
                  <p className="text-white/40 text-xs 
                                 tracking-widest uppercase mb-1">
                    The Highlight Artist For This Week
                  </p>
                  <h3 className="text-3xl md:text-4xl 
                                  font-bold text-[#E5B868]">
                    {weeklySpotlight.artistName}
                  </h3>
                  {/* Social Handle */}
                  <a
                    href={weeklySpotlight.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 text-sm 
                               hover:text-[#E5B868] 
                               transition-colors duration-200
                               mt-1 inline-block"
                  >
                    {weeklySpotlight.socialHandle}
                  </a>
                </div>

                {/* Visit Profile Button */}
                <a
                  href={weeklySpotlight.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                             px-6 py-3 rounded-full
                             border border-[#E5B868]/40
                             text-[#E5B868] text-sm
                             font-semibold tracking-widest 
                             uppercase
                             hover:bg-[#E5B868]/10
                             transition-all duration-200
                             w-fit"
                >
                  Visit Profile ↗
                </a>

              </div>
            </div>

            {/* Card Body */}
            <div className="p-8 grid grid-cols-1 
                            md:grid-cols-2 gap-8">

              {/* Left: Pharaoh's Words */}
              <div className="flex flex-col gap-6">
                <div>
                  {/* Format Label */}
                  <p className="text-[#E5B868] text-xs 
                                 tracking-widest uppercase mb-4">
                    Why You Should Take A Listen
                  </p>
                  {/* Quote styling for personal note */}
                  <div className="relative pl-6 
                                  border-l-2 border-[#8B0000]">
                    <p className="text-white/70 text-lg 
                                   leading-relaxed italic">
                      "{weeklySpotlight.yourWords}"
                    </p>
                    <p className="text-[#E5B868] text-sm 
                                   mt-4 font-semibold">
                      — T The Pharaoh
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Embedded Player */}
              <div>
                <p className="text-[#E5B868] text-xs 
                               tracking-widest uppercase mb-4">
                  Take A Listen
                </p>

                {/* Player Container */}
                <div className="bg-black/40 rounded-xl 
                                border border-white/10 
                                overflow-hidden">

                  {/* SoundCloud Embed */}
                  {weeklySpotlight.embedType === "soundcloud" && (
                    weeklySpotlight.embedSrc ? (
                      <iframe
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={weeklySpotlight.embedSrc}
                      />
                    ) : (
                      // Placeholder
                      <div className="h-[166px] flex items-center 
                                      justify-center">
                        <p className="text-white/20 text-sm 
                                      tracking-widest uppercase">
                          Player Coming Soon
                        </p>
                      </div>
                    )
                  )}

                  {/* YouTube Embed */}
                  {weeklySpotlight.embedType === "youtube" && (
                    weeklySpotlight.youtubeId ? (
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${weeklySpotlight.youtubeId}`}
                          title={weeklySpotlight.artistName}
                          allow="accelerometer; autoplay; 
                                 clipboard-write; encrypted-media; 
                                 gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video flex 
                                      items-center justify-center">
                        <p className="text-white/20 text-sm 
                                      tracking-widest uppercase">
                          Player Coming Soon
                        </p>
                      </div>
                    )
                  )}

                  {/* Spotify Embed */}
                  {weeklySpotlight.embedType === "spotify" && (
                    weeklySpotlight.embedSrc ? (
                      <iframe
                        src={weeklySpotlight.embedSrc}
                        width="100%"
                        height="166"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; 
                               encrypted-media; fullscreen; 
                               picture-in-picture"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-[166px] flex items-center 
                                      justify-center">
                        <p className="text-white/20 text-sm 
                                      tracking-widest uppercase">
                          Player Coming Soon
                        </p>
                      </div>
                    )
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          RED/GOLD DIVIDER
          ================================ */}
      <div className="relative w-full h-px">
        <div className="absolute inset-0 
                        bg-gradient-to-r 
                        from-transparent 
                        via-[#8B0000]/40 
                        to-transparent" />
      </div>

      {/* ================================
          SECTION 4: LIVE STREAMS
          Housing built - activates later
          ================================ */}
      <section className="px-6 py-20"
               style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-6xl mx-auto">

          {/* Section Label */}
          <p className="text-[#E5B868] text-sm font-semibold 
                        tracking-widest uppercase mb-2">
            Live Streams
          </p>

          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold 
                         text-white mb-4">
            Mystic Eyes
          </h2>

          {/* Decorative line */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-16 bg-[#8B0000]/60" />
            <div className="w-1.5 h-1.5 rounded-full 
                            bg-[#8B0000]" />
            <div className="h-px flex-1 bg-white/5" />
          </div>

          {/* Coming Soon Card */}
          <div className="relative rounded-2xl overflow-hidden
                          border border-[#E5B868]/20
                          bg-black/60 backdrop-blur-sm">

            {/* Purple whisper gradient top */}
            <div className="absolute inset-0 
                            bg-gradient-to-br
                            from-[#4B0082]/10 
                            via-transparent 
                            to-[#8B0000]/10
                            pointer-events-none" />

            <div className="relative z-10 p-12 md:p-20 
                            text-center">

              {/* Animated pulse circle */}
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full 
                                bg-[#8B0000]/20 
                                animate-ping" />
                <div className="relative w-24 h-24 rounded-full 
                                bg-black/60 backdrop-blur-sm
                                border border-[#E5B868]/30
                                flex items-center justify-center">
                  <span className="text-4xl">🔴</span>
                </div>
              </div>

              {/* Coming Soon Message */}
              <p className="text-[#E5B868] text-sm font-semibold 
                             tracking-widest uppercase mb-4">
                Coming Soon
              </p>
              <h3 className="text-3xl md:text-4xl font-bold 
                              text-white mb-6">
                Mystic Eyes coming soon,
                <br />
                <span className="text-[#E5B868]">
                  stay tuned
                </span>
              </h3>
              <p className="text-white/40 text-lg max-w-xl 
                             mx-auto leading-relaxed">
                Live performances, studio sessions, and 
                behind the scenes moments — 
                streaming directly to you.
              </p>

              {/* Follow CTA */}
              <div className="mt-10 flex flex-col sm:flex-row 
                              gap-4 justify-center">
                <a
                  href="https://www.instagram.com/t_the_pharaoh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full 
                             bg-[#8B0000] text-white 
                             font-bold tracking-widest 
                             uppercase text-sm
                             hover:bg-[#8B0000]/80
                             transition-all duration-200
                             hover:scale-105"
                >
                  Follow On Instagram
                </a>
                <a
                  href="https://www.youtube.com/channel/UCqcICy39GycwORST5cFPodw?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full 
                             border border-[#E5B868]/40
                             text-[#E5B868] font-bold 
                             tracking-widest uppercase text-sm
                             hover:bg-[#E5B868]/10
                             transition-all duration-200
                             hover:scale-105"
                >
                  Subscribe On YouTube
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================================
          FINAL DIVIDER
          ================================ */}
      <div className="relative w-full h-px mb-0">
        <div className="absolute inset-0 
                        bg-gradient-to-r 
                        from-transparent 
                        via-[#E5B868]/20 
                        to-transparent" />
      </div>

    </main>
  )
}