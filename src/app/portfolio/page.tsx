"use client"

import { useState } from "react"
import Image from "next/image"

// ============================================
// 📌 LATEST RELEASE - UPDATE AFTER EACH DROP
// ============================================
const latestRelease = {
  title: "Song Title Here",
  releaseDate: "2025",
  description: `Write the story of how this song came 
  together here. This is where you connect with your 
  fans and bring them into your creative world.`,
  youtubeId: "YOUTUBE_VIDEO_ID_HERE",
  streamLink: "https://",
}

// ============================================
// 📌 PORTFOLIO CATEGORIES
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
// 📌 PORTFOLIO ITEMS
// ============================================
const portfolioItems = [
  // ✅ G HERBO LIVE SHOW
  {
    id: 1,
    category: "Live Shows",
    title: "Show with G Herbo",
    artist: "T the Pharaoh",
    venue: "Waukegan, IL",
    location: "Waukegan, IL",
    date: "February 28, 2026",
    // Card caption - your words
    description: `"In this game--its Levels to this 
    & I'm up another 1"`,
    // Modal story - your words
    story: `What's meant for you, will always find you. 
    You just have to believe and will it.`,
    // Main photo for the card thumbnail
    image: "/portfolio/gherbo_show.jpg",
    // Main video (Pt 2) shows in modal
    youtubeId: "JUOoZCUEYxY",
    // Pt 1 shows as "Also Watch" button
    alsoWatchId: "Zhjoa9lNnKY",
    alsoWatchLabel: "Watch Recap Pt 1",
    externalLink: "",
  },
]

// ============================================
// 📌 PAGE COMPONENT
// ============================================
export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<
    typeof portfolioItems[0] | null
  >(null)

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeCategory
        )

  return (
    <main className="min-h-screen text-white">

      {/* ================================
          SECTION 1: LATEST RELEASE HERO
          ================================ */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-[#E5B868] text-sm font-semibold 
                        tracking-widest uppercase mb-2">
            Latest Release
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-12">
            {latestRelease.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 
                          gap-12 items-center">

            {/* YouTube Embed */}
            <div className="aspect-video w-full rounded-xl 
                            overflow-hidden 
                            border border-[#E5B868]/30">
              {latestRelease.youtubeId === 
               "YOUTUBE_VIDEO_ID_HERE" ? (
                <div className="w-full h-full bg-black/60 
                                flex items-center 
                                justify-center">
                  <p className="text-white/20 text-sm 
                                tracking-widest uppercase">
                    Video Coming Soon
                  </p>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${latestRelease.youtubeId}`}
                  title={latestRelease.title}
                  allow="accelerometer; autoplay; 
                         clipboard-write; encrypted-media; 
                         gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>

            {/* Story Text */}
            <div className="flex flex-col gap-6">
              <p className="text-white/60 text-sm 
                             tracking-widest uppercase">
                {latestRelease.releaseDate}
              </p>
              <p className="text-white/80 text-lg 
                             leading-relaxed">
                {latestRelease.description}
              </p>
              <a
                href={latestRelease.streamLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit px-8 py-3 
                           rounded-full bg-[#E5B868] 
                           text-black font-bold
                           hover:scale-105 
                           transition-transform duration-200"
              >
                Stream Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="w-full h-px bg-[#E5B868]/20 my-4" />

      {/* ================================
          SECTION 2: FILTER BAR
          ================================ */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">

          <p className="text-[#E5B868] text-sm font-semibold 
                        tracking-widest uppercase mb-6">
            The Work
          </p>

          {/* Desktop Tabs */}
          <div className="hidden md:flex gap-3 
                          flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm 
                            font-semibold border 
                            transition-all duration-200
                  ${activeCategory === cat
                    ? "bg-[#E5B868] text-black border-[#E5B868]"
                    : "bg-transparent text-white/70 border-white/20 hover:border-[#E5B868] hover:text-[#E5B868]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden mb-10">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl 
                         bg-black/60 border border-white/20 
                         text-white focus:border-[#E5B868] 
                         focus:outline-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} 
                        className="bg-black">
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* ================================
              SECTION 3: PORTFOLIO GRID
              ================================ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 
                          lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer rounded-xl 
                           overflow-hidden border border-white/10 
                           bg-black/40 backdrop-blur-sm
                           hover:border-[#E5B868]/50 
                           transition-all duration-300
                           hover:scale-105"
              >
                {/* Card Thumbnail */}
                <div className="aspect-video bg-black/60 
                                relative overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top
                                 group-hover:scale-110 
                                 transition-transform 
                                 duration-500"
                    />
                  ) : item.youtubeId ? (
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover
                                 group-hover:scale-110 
                                 transition-transform 
                                 duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex 
                                    items-center justify-center">
                      <span className="text-[#E5B868]/40 
                                       text-4xl">
                        🎵
                      </span>
                    </div>
                  )}

                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 
                                   px-3 py-1 rounded-full
                                   bg-black/70 text-[#E5B868] 
                                   text-xs font-semibold
                                   border border-[#E5B868]/30">
                    {item.category}
                  </span>

                  {/* Play overlay on hover */}
                  <div className="absolute inset-0 
                                  bg-black/40 opacity-0
                                  group-hover:opacity-100
                                  transition-opacity duration-300
                                  flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full
                                    bg-[#E5B868] flex items-center
                                    justify-center">
                      <span className="text-black text-xl 
                                       ml-1">
                        ▶
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4">
                  <h3 className="font-bold text-white 
                                  text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-2">
                    {item.venue 
                      ? `${item.venue} • ${item.date}`
                      : `${item.artist} • ${item.date}`
                    }
                  </p>
                  <p className="text-white/60 text-sm 
                                 line-clamp-2 italic">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/20 text-lg 
                             tracking-widest uppercase">
                More content coming soon
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ================================
          SECTION 4: MODAL
          ================================ */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center 
                     justify-center bg-black/80 
                     backdrop-blur-sm p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-3xl 
                       bg-[#111116] rounded-2xl
                       border border-[#E5B868]/30 
                       overflow-hidden
                       max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 
                         w-8 h-8 flex items-center 
                         justify-center rounded-full 
                         bg-black/60 text-white/70
                         hover:text-[#E5B868] 
                         transition-colors duration-200"
            >
              ✕
            </button>

          {/* Cinematic Thumbnail + Play Button */}
{selectedItem.youtubeId && (
  <div className="relative aspect-video w-full 
                  overflow-hidden group/video">

    {/* YouTube Thumbnail as background */}
    <img
      src={`https://img.youtube.com/vi/${selectedItem.youtubeId}/maxresdefault.jpg`}
      alt={selectedItem.title}
      className="w-full h-full object-cover"
      onError={(e) => {
        // Falls back to hqdefault if maxres not available
        e.currentTarget.src = `https://img.youtube.com/vi/${selectedItem.youtubeId}/hqdefault.jpg`
      }}
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40
                    group-hover/video:bg-black/20
                    transition-all duration-300" />

    {/* Centered Play Button */}
    <a
      href={`https://www.youtube.com/shorts/${selectedItem.youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 flex items-center 
                 justify-center"
    >
      <div className="flex flex-col items-center gap-4">

        {/* Play Circle */}
        <div className="w-20 h-20 rounded-full
                        bg-[#E5B868] flex items-center
                        justify-center shadow-2xl
                        group-hover/video:scale-110
                        transition-transform duration-300">
          <span className="text-black text-3xl ml-2">
            ▶
          </span>
        </div>

        {/* Watch Label */}
        <span className="text-white font-bold 
                         tracking-widest uppercase 
                         text-sm px-6 py-2 rounded-full
                         bg-black/60 backdrop-blur-sm
                         border border-white/20">
          Watch On YouTube
        </span>

      </div>
    </a>

  </div>
)}

            {/* Modal Content */}
            <div className="p-6">

              {/* Category Tag */}
              <span className="text-[#E5B868] text-xs 
                               font-semibold tracking-widest 
                               uppercase">
                {selectedItem.category}
              </span>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white 
                              mt-2 mb-1">
                {selectedItem.title}
              </h2>

              {/* Location + Date */}
              <p className="text-white/50 text-sm mb-6">
                {selectedItem.venue 
                  ? `${selectedItem.venue} • ${selectedItem.date}`
                  : `${selectedItem.artist} • ${selectedItem.date}`
                }
              </p>

              {/* Photo with G Herbo */}
              {selectedItem.image && (
                <div className="w-full rounded-xl 
                                overflow-hidden mb-6
                                border border-white/10">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    width={800}
                    height={600}
                    className="w-full object-cover"
                  />
                </div>
              )}

              {/* Story Text */}
              {selectedItem.story && (
                <div className="mb-6 pl-4 
                                border-l-2 border-[#E5B868]">
                  <p className="text-white/70 text-lg 
                                 leading-relaxed italic">
                    "{selectedItem.story}"
                  </p>
                  <p className="text-[#E5B868] text-sm 
                                 mt-3 font-semibold">
                    — T The Pharaoh
                  </p>
                </div>
              )}

              {/* Card Description */}
              <p className="text-white/60 leading-relaxed 
                             mb-6 italic">
                {selectedItem.description}
              </p>

              {/* Bottom Buttons */}
              <div className="flex gap-4 flex-wrap">

                {/* Watch on YouTube */}
                {selectedItem.youtubeId && (
                  <a
                    href={`https://www.youtube.com/shorts/${selectedItem.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full 
                               border border-[#E5B868]/50
                               text-[#E5B868] text-sm 
                               hover:bg-[#E5B868]/10
                               transition-colors duration-200"
                  >
                    Watch Recap Pt 2 ↗
                  </a>
                )}

                {/* Also Watch Pt 1 */}
                {selectedItem.alsoWatchId && (
                  <a
                    href={`https://www.youtube.com/shorts/${selectedItem.alsoWatchId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full 
                               border border-white/20
                               text-white/60 text-sm 
                               hover:border-[#E5B868]/50
                               hover:text-[#E5B868]
                               transition-all duration-200"
                  >
                    {selectedItem.alsoWatchLabel} ↗
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