"use client"

import Link from "next/link"
import { useState } from "react"

// ============================================
// 📌 EPK CONTENT - UPDATE THIS SECTION
// WHEN YOU HAVE NEW INFO TO ADD
// ============================================

const artistInfo = {
  name: "T The Pharaoh",
  tagline: "Melodies from a deity, Make ya heart feel me",
  shortBio: `T the Pharaoh is a Cameroonian-born, Madison WI raised 
  recording artist and audio engineer with the rare ability to pull 
  inspiration from anywhere and turn it into something mystic, 
  haunting, and familiar all in one.`,
  fullBio: `T the Pharaoh is what happens when you add melodies to any 
  vibe and put them in a studio together. The Cameroonian-born, Madison 
  native is making a name for himself in his city as well as around the 
  world. Having shared stages with G Herbo, Young Joc, half of Three 6 
  Mafia and more, plus traveling Europe to film & edit music videos 
  across multiple countries by himself - T the Pharaoh is proving that 
  the world is his stage.`,
  bookingEmail: "info@yourdomain.com",
}

// ============================================
// 📌 STATS - UPDATE AS THEY GROW
// ============================================
const stats = [
  { number: "50+",  label: "Tracks Released" },
  { number: "20+",  label: "Shows Performed" },
  { number: "7",    label: "Years Active" },
  { number: "🌍",   label: "International Artist" },
]

// ============================================
// 📌 NOTABLE SHOWS - ADD MORE AS THEY HAPPEN
// ============================================
const notableShows = [
  { artist: "G Herbo",            role: "Opening Act" },
  { artist: "Young Joc",          role: "Opening Act" },
  { artist: "Three 6 Mafia",      role: "Opening Act" },
  { artist: "Gorilla Zoe",        role: "Opening Act" },
  { artist: "2 Hype Crew",        role: "Opening Act" },
]

// ============================================
// 📌 FEATURED VIDEOS
// Replace YOUTUBE_ID with your real YouTube IDs
// Example: if your URL is youtube.com/watch?v=ABC123
// then your ID is ABC123
// ============================================
const featuredVideos = [
  {
    id: 1,
    title: "Video Title Here",
    youtubeId: "YOUTUBE_ID_HERE",
    description: "Short description of this video",
  },
  {
    id: 2,
    title: "Video Title Here",
    youtubeId: "YOUTUBE_ID_HERE",
    description: "Short description of this video",
  },
]

// ============================================
// 📌 PRESS PHOTOS
// Add your photo filenames here when ready
// Photos should go in your /public/epk/ folder
// ============================================
const pressPhotos = [
  {
    id: 1,
    src: "/epk/photo1.jpg",
    alt: "T the Pharaoh Press Photo 1",
    downloadName: "TThePharaoh_PressPhoto1.jpg",
  },
  {
    id: 2,
    src: "/epk/photo2.jpg",
    alt: "T the Pharaoh Press Photo 2",
    downloadName: "TThePharaoh_PressPhoto2.jpg",
  },
  {
    id: 3,
    src: "/epk/photo3.jpg",
    alt: "T the Pharaoh Press Photo 3",
    downloadName: "TThePharaoh_PressPhoto3.jpg",
  },
]

// ============================================
// 📌 TESTIMONIALS
// Add quotes and video testimonials here
// when your contacts are ready
// ============================================
const testimonials = [
  {
    id: 1,
    type: "quote",               // "quote" or "video"
    quote: "Testimonial quote goes here...",
    author: "Name Here",
    title: "Title / Role Here",
    youtubeId: "",               // leave empty for quote type
  },
  {
    id: 2,
    type: "video",
    quote: "",                   // leave empty for video type
    author: "Name Here",
    title: "Title / Role Here",
    youtubeId: "YOUTUBE_ID_HERE",
  },
]

// ============================================
// 📌 THIS IS THE ACTUAL PAGE COMPONENT
// ============================================
export default function EPKPage() {
  const [bioExpanded, setBioExpanded] = useState(false)

  return (
    <main className="min-h-screen text-white">

      {/* ================================
          SECTION 1: HERO
          ================================ */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* EPK Label */}
          <p className="text-[#E5B868] text-sm font-semibold tracking-widest 
                        uppercase mb-4">
            Electronic Press Kit
          </p>

          {/* Artist Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 
                         text-white tracking-tight">
            {artistInfo.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-[#E5B868] italic mb-12 
                        max-w-2xl">
            "{artistInfo.tagline}"
          </p>

          {/* ================================
              STATS BAR
              ================================ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-black/40 backdrop-blur-sm rounded-xl 
                           border border-[#E5B868]/20 p-6 text-center
                           hover:border-[#E5B868]/50 transition-all duration-300"
              >
                <p className="text-4xl font-bold text-[#E5B868] mb-2">
                  {stat.number}
                </p>
                <p className="text-white/60 text-sm tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Hero Press Photo Placeholder */}
          <div className="w-full aspect-video md:aspect-[21/9] 
                          rounded-2xl overflow-hidden 
                          border border-[#E5B868]/20
                          bg-black/40 backdrop-blur-sm
                          flex items-center justify-center">
            {/* 
              Replace this div with an Image component 
              when your hero press photo is ready:

              <Image
                src="/epk/hero.jpg"
                alt="T the Pharaoh"
                fill
                className="object-cover object-top"
              />
            */}
            <p className="text-white/20 tracking-widest uppercase text-sm">
              Hero Press Photo — Coming Soon
            </p>
          </div>

        </div>
      </section>

      {/* ================================
          GOLD DIVIDER
          ================================ */}
      <div className="w-full h-px bg-[#E5B868]/20 my-4" />

      {/* ================================
          SECTION 2: BIO
          ================================ */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left: Short Bio */}
          <div>
            <p className="text-[#E5B868] text-sm font-semibold 
                          tracking-widest uppercase mb-4">
              The Artist
            </p>
            <p className="text-white/80 text-xl leading-relaxed">
              {artistInfo.shortBio}
            </p>

            {/* Notable Shows */}
            <div className="mt-10">
              <p className="text-[#E5B868] text-sm font-semibold 
                            tracking-widest uppercase mb-4">
                Notable Performances
              </p>
              <div className="space-y-3">
                {notableShows.map((show) => (
                  <div
                    key={show.artist}
                    className="flex items-center justify-between 
                               py-3 border-b border-white/10"
                  >
                    <span className="text-white font-semibold">
                      {show.artist}
                    </span>
                    <span className="text-[#E5B868] text-sm 
                                     tracking-widest uppercase">
                      {show.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Full Bio */}
          <div>
            <p className="text-[#E5B868] text-sm font-semibold 
                          tracking-widest uppercase mb-4">
              Full Bio
            </p>

            {/* Bio text - expands on click */}
            <div className={`text-white/70 text-lg leading-relaxed 
                            transition-all duration-500
                            ${!bioExpanded 
                              ? "line-clamp-6" 
                              : ""}`}>
              {artistInfo.fullBio}
            </div>

            {/* Read More / Less Toggle */}
            <button
              onClick={() => setBioExpanded(!bioExpanded)}
              className="mt-4 text-[#E5B868] text-sm font-semibold 
                         tracking-widest uppercase hover:text-white 
                         transition-colors duration-200"
            >
              {bioExpanded ? "Read Less ↑" : "Read Full Bio ↓"}
            </button>

            {/* International Note */}
            <div className="mt-10 p-6 rounded-xl bg-black/40 
                            backdrop-blur-sm border border-[#E5B868]/20">
              <p className="text-[#E5B868] text-sm font-semibold 
                            tracking-widest uppercase mb-2">
                International Reach
              </p>
              <p className="text-white/70 leading-relaxed">
                Traveled across Europe to independently film 
                and edit music videos — demonstrating a rare 
                level of artistic vision and self-sufficiency 
                in the modern music landscape.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================================
          GOLD DIVIDER
          ================================ */}
      <div className="w-full h-px bg-[#E5B868]/20 my-4" />

      {/* ================================
          SECTION 3: FEATURED VIDEOS
          ================================ */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">

          <p className="text-[#E5B868] text-sm font-semibold 
                        tracking-widest uppercase mb-2">
            Featured Videos
          </p>
          <h2 className="text-4xl font-bold text-white mb-12">
            Watch The Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredVideos.map((video) => (
              <div key={video.id}>

                {/* Video Embed */}
                <div className="aspect-video w-full rounded-xl 
                                overflow-hidden border border-[#E5B868]/20">
                  {video.youtubeId === "YOUTUBE_ID_HERE" ? (

                    // Placeholder until real ID is added
                    <div className="w-full h-full bg-black/60 
                                    flex items-center justify-center">
                      <p className="text-white/20 text-sm tracking-widest uppercase">
                        Video Coming Soon
                      </p>
                    </div>

                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; 
                             encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  )}
                </div>

                {/* Video Info */}
                <div className="mt-4">
                  <h3 className="text-white font-bold text-xl">
                    {video.title}
                  </h3>
                  <p className="text-white/50 text-sm mt-1">
                    {video.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          GOLD DIVIDER
          ================================ */}
      <div className="w-full h-px bg-[#E5B868]/20 my-4" />

      {/* ================================
          SECTION 4: PRESS PHOTOS
          ================================ */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">

          <p className="text-[#E5B868] text-sm font-semibold 
                        tracking-widest uppercase mb-2">
            Press Photos
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Media Assets
          </h2>
          <p className="text-white/50 text-sm mb-12">
            Click any photo to download high resolution version
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 
                          lg:grid-cols-3 gap-6">
            {pressPhotos.map((photo) => (
              <a
                key={photo.id}
                href={photo.src}
                download={photo.downloadName}
                className="group relative aspect-square rounded-xl 
                           overflow-hidden border border-white/10
                           hover:border-[#E5B868]/50 
                           transition-all duration-300
                           bg-black/40 flex items-center justify-center"
              >
                {/* 
                  Placeholder shown until photos are uploaded
                  Replace with Image component when photos are ready
                */}
                <p className="text-white/20 text-sm tracking-widest uppercase">
                  Photo {photo.id} — Coming Soon
                </p>

                {/* Download hover overlay */}
                <div className="absolute inset-0 bg-black/60 
                                opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300
                                flex items-center justify-center">
                  <span className="text-[#E5B868] font-semibold 
                                   tracking-widest uppercase text-sm">
                    ↓ Download
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          GOLD DIVIDER
          ================================ */}
      <div className="w-full h-px bg-[#E5B868]/20 my-4" />

      {/* ================================
          SECTION 5: TESTIMONIALS
          Housing built - content coming later
          ================================ */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">

          <p className="text-[#E5B868] text-sm font-semibold 
                        tracking-widest uppercase mb-2">
            What People Are Saying
          </p>
          <h2 className="text-4xl font-bold text-white mb-12">
            Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-black/40 backdrop-blur-sm rounded-xl 
                           border border-white/10 p-6
                           hover:border-[#E5B868]/30 
                           transition-all duration-300"
              >
                {testimonial.type === "quote" ? (

                  // Written Quote Card
                  <div>
                    <span className="text-[#E5B868] text-4xl 
                                     font-serif leading-none">
                      "
                    </span>
                    <p className="text-white/70 text-lg leading-relaxed 
                                  mt-2 mb-6 italic">
                      {testimonial.quote || "Testimonial coming soon..."}
                    </p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white font-bold">
                        {testimonial.author}
                      </p>
                      <p className="text-[#E5B868] text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>

                ) : (

                  // Video Testimonial Card
                  <div>
                    {testimonial.youtubeId === "YOUTUBE_ID_HERE" ? (
                      <div className="aspect-video w-full rounded-lg 
                                      bg-black/60 flex items-center 
                                      justify-center mb-4">
                        <p className="text-white/20 text-sm 
                                      tracking-widest uppercase">
                          Video Testimonial Coming Soon
                        </p>
                      </div>
                    ) : (
                      <div className="aspect-video w-full rounded-lg 
                                      overflow-hidden mb-4">
                        <iframe
                          src={`https://www.youtube.com/embed/${testimonial.youtubeId}`}
                          title={`${testimonial.author} Testimonial`}
                          allow="accelerometer; autoplay; clipboard-write; 
                                 encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    )}
                    <p className="text-white font-bold">
                      {testimonial.author}
                    </p>
                    <p className="text-[#E5B868] text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          GOLD DIVIDER
          ================================ */}
      <div className="w-full h-px bg-[#E5B868]/20 my-4" />

      {/* ================================
          SECTION 6: BOOKING / CONTACT
          ================================ */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-[#E5B868] text-sm font-semibold 
                        tracking-widest uppercase mb-4">
            Work Together
          </p>
          <h2 className="text-5xl font-bold text-white mb-6">
            Book T The Pharaoh
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            For booking, features, press inquiries, 
            and collaboration opportunities.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 
                          justify-center items-center">

            {/* Email Button */}
            <a
              href={`mailto:${artistInfo.bookingEmail}`}
              className="px-10 py-4 rounded-full bg-[#E5B868] 
                         text-black font-bold text-lg
                         hover:scale-105 transition-transform duration-200"
            >
              Email For Booking
            </a>

            {/* Services Page Button */}
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full border border-[#E5B868]/50 
                         text-[#E5B868] font-bold text-lg
                         hover:bg-[#E5B868]/10 transition-all duration-200"
            >
              View Services →
            </Link>

          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-8 
                          text-white/40 text-sm tracking-widest uppercase">
            <a
              href="https://www.instagram.com/t_the_pharaoh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E5B868] transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCqcICy39GycwORST5cFPodw?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E5B868] transition-colors duration-200"
            >
              YouTube
            </a>
            <a
              href="https://soundcloud.com/t-the-pharaoh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E5B868] transition-colors duration-200"
            >
              SoundCloud
            </a>
          </div>

        </div>
      </section>

    </main>
  )
}