"use client"

import { useState } from "react"

// ============================================
// 📌 LATEST RELEASE - UPDATE THIS SECTION
// AFTER EACH NEW RELEASE
// ============================================
const latestRelease = {
  title: "Song Title Here",
  releaseDate: "2025",
  description: `Write the story of how this song came together here. 
  This is where you connect with your fans and bring them 
  into your creative world.`,
  youtubeId: "YOUTUBE_VIDEO_ID_HERE",
  streamLink: "https://",
}

// ============================================
// 📌 PORTFOLIO CATEGORIES - YOUR FILTER TABS
// ============================================
const categories = [
  "All",
  "Mixing & Mastering",
  "Collabs",
  "Music Videos",
  "Live Shows",
  "Interviews",
]

// ============================================
// 📌 PORTFOLIO ITEMS - ADD YOUR WORK HERE
// Each {} is one card on the page
// ============================================
const portfolioItems = [
  // MIXING & MASTERING EXAMPLE
  {
    id: 1,
    category: "Mixing & Mastering",
    title: "Track Title",
    artist: "Artist Name",
    date: "2025",
    description: "Short description of the work done on this project.",
    image: "/portfolio/placeholder.jpg",
    youtubeId: "",
    externalLink: "",
  },

  // COLLAB EXAMPLE
  {
    id: 2,
    category: "Collabs",
    title: "Collab Track Title",
    artist: "Featured Artist Name",
    artistSocial: "https://instagram.com/artist",
    date: "2025",
    description: "Short story about this collaboration.",
    image: "/portfolio/placeholder.jpg",
    youtubeId: "",
    externalLink: "",
  },

  // MUSIC VIDEO EXAMPLE
  {
    id: 3,
    category: "Music Videos",
    title: "Music Video Title",
    artist: "T the Pharaoh",
    date: "2025",
    description: "Short description of this video.",
    image: "",
    youtubeId: "YOUTUBE_ID_HERE",
    externalLink: "",
  },

  // LIVE SHOW EXAMPLE
  {
    id: 4,
    category: "Live Shows",
    title: "Event Name",
    artist: "T the Pharaoh",
    venue: "Venue Name",
    location: "City, State",
    date: "2025",
    description: "Short story about this performance.",
    image: "/portfolio/placeholder.jpg",
    youtubeId: "",
    externalLink: "",
  },

  // INTERVIEW EXAMPLE
  {
    id: 5,
    category: "Interviews",
    title: "Interview Title",
    publication: "Channel or Publication Name",
    location: "State",
    date: "2025",
    description: "What this interview was about.",
    image: "/portfolio/placeholder.jpg",
    youtubeId: "YOUTUBE_ID_HERE",
    externalLink: "",
  },
]

// ============================================
// 📌 THIS IS THE ACTUAL PAGE COMPONENT
// Everything below builds what fans see
// ============================================
export default function PortfolioPage() {
  // These are the page's "memory" - they track
  // what the user is currently doing
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

  // This filters the cards based on what tab/dropdown is selected
  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <main className="min-h-screen text-white">

      {/* ================================
          SECTION 1: LATEST RELEASE HERO
          ================================ */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Gold label above section */}
          <p className="text-[#E5B868] text-sm font-semibold tracking-widest uppercase mb-2">
            Latest Release
          </p>

          {/* Section Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-12">
            {latestRelease.title}
          </h1>

          {/* Two column layout: Video left, Story right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* YouTube Embed */}
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-[#E5B868]/30">
              <iframe
                src={`https://www.youtube.com/embed/${latestRelease.youtubeId}`}
                title={latestRelease.title}
                allow="accelerometer; autoplay; clipboard-write; 
                       encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Story Text */}
            <div className="flex flex-col gap-6">
              <p className="text-white/60 text-sm tracking-widest uppercase">
                {latestRelease.releaseDate}
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                {latestRelease.description}
              </p>
              <a
                href={latestRelease.streamLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit px-8 py-3 rounded-full 
                           bg-[#E5B868] text-black font-bold 
                           hover:scale-105 transition-transform duration-200"
              >
                Stream Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          GOLD DIVIDER LINE
          ================================ */}
      <div className="w-full h-px bg-[#E5B868]/20 my-4" />

      {/* ================================
          SECTION 2: FILTER BAR
          Desktop = Tabs | Mobile = Dropdown
          ================================ */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">

          <p className="text-[#E5B868] text-sm font-semibold tracking-widest uppercase mb-6">
            The Work
          </p>

          {/* DESKTOP TABS - hidden on mobile */}
          <div className="hidden md:flex gap-3 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold 
                            border transition-all duration-200
                  ${activeCategory === cat
                    ? "bg-[#E5B868] text-black border-[#E5B868]"
                    : "bg-transparent text-white/70 border-white/20 hover:border-[#E5B868] hover:text-[#E5B868]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* MOBILE DROPDOWN - hidden on desktop */}
          <div className="md:hidden mb-10">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/60 
                         border border-white/20 text-white 
                         focus:border-[#E5B868] focus:outline-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-black">
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* ================================
              SECTION 3: PORTFOLIO GRID
              ================================ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer rounded-xl overflow-hidden 
                           border border-white/10 bg-black/40 backdrop-blur-sm
                           hover:border-[#E5B868]/50 transition-all duration-300
                           hover:scale-105"
              >
                {/* Card Thumbnail */}
                <div className="aspect-video bg-black/60 relative overflow-hidden">
                  {item.youtubeId ? (
                    // If it has a YouTube ID show the YouTube thumbnail
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover 
                                 group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    // If no YouTube ID show a placeholder
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[#E5B868]/40 text-4xl">🎵</span>
                    </div>
                  )}

                  {/* Category Tag on the card */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full 
                                   bg-black/70 text-[#E5B868] text-xs font-semibold
                                   border border-[#E5B868]/30">
                    {item.category}
                  </span>
                </div>

                {/* Card Info */}
                <div className="p-4">
                  <h3 className="font-bold text-white text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-2">
                    {item.artist} • {item.date}
                  </p>
                  <p className="text-white/60 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          SECTION 4: MODAL (POPUP)
          Only appears when a card is clicked
          ================================ */}
      {selectedItem && (
        // Dark overlay behind the modal
        <div
          className="fixed inset-0 z-50 flex items-center justify-center 
                     bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedItem(null)} // clicking outside closes it
        >
          {/* Modal Box - stop clicks from closing when clicking inside */}
          <div
            className="relative w-full max-w-3xl bg-[#111116] rounded-2xl 
                       border border-[#E5B868]/30 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center 
                         justify-center rounded-full bg-black/60 text-white/70
                         hover:text-[#E5B868] transition-colors duration-200"
            >
              ✕
            </button>

            {/* YouTube Embed inside Modal */}
            {selectedItem.youtubeId && (
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedItem.youtubeId}?autoplay=1`}
                  title={selectedItem.title}
                  allow="accelerometer; autoplay; clipboard-write; 
                         encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}

            {/* Modal Content */}
            <div className="p-6">
              {/* Category tag */}
              <span className="text-[#E5B868] text-xs font-semibold 
                               tracking-widest uppercase">
                {selectedItem.category}
              </span>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white mt-2 mb-1">
                {selectedItem.title}
              </h2>

              {/* Artist + Date */}
              <p className="text-white/50 text-sm mb-4">
                {selectedItem.artist} • {selectedItem.date}
              </p>

              {/* Description/Story */}
              <p className="text-white/70 leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              {/* Bottom row of buttons */}
              <div className="flex gap-4 flex-wrap">
                {/* External YouTube link if available */}
                {selectedItem.youtubeId && (
                  <a
                    href={`https://www.youtube.com/watch?v=${selectedItem.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full border border-[#E5B868]/50 
                               text-[#E5B868] text-sm hover:bg-[#E5B868]/10 
                               transition-colors duration-200"
                  >
                    Watch on YouTube ↗
                  </a>
                )}

                {/* Artist social link for Collabs */}
                {selectedItem.artistSocial && (
                  <a
                    href={selectedItem.artistSocial}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full border border-white/20 
                               text-white/60 text-sm hover:border-white/40 
                               transition-colors duration-200"
                  >
                    Artist Profile ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}