"use client"

import MusicPlayer from "@/components/MusicPlayer"
import { tracks } from "@/data/tracks"

export default function MusicPage() {

  // ============================================
  // 📌 STREAMING PLATFORM LINKS
  // These link to your ARTIST PROFILE
  // (not individual songs — those are in tracks.ts)
  // Update URLs if your profiles change
  // ============================================
  const streamingPlatforms = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We?si=r5_j0RTDQtCZJS7trkMYkQ",
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/t-the-pharaoh",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCqcICy39GycwORST5cFPodw?sub_confirmation=1",
    },
    {
      name: "Tidal",
      url: "https://tidal.com/artist/10140234",
    },
  ]

  return (
    <main className="relative flex flex-col min-h-screen
                     text-white overflow-hidden">

      <div className="relative z-10 pt-32 pb-16 px-4 flex-grow">
        <div className="max-w-5xl mx-auto">

          {/* ================================
              PAGE HEADER
              ================================ */}
          <p className="text-[#E5B868] text-sm font-semibold
                        tracking-widest uppercase mb-2 text-center">
            T The Pharaoh
          </p>
          <h1 className="text-5xl font-bold text-center
                         text-white mb-4">
            Music
          </h1>
          <p className="text-center text-white/50 mb-6 text-lg">
            Preview tracks below. Stream the full songs
            on your favorite platform.
          </p>

          {/* ================================
              STREAMING PROFILE LINKS
              These go to your artist profiles
              ================================ */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {streamingPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full
                           border border-[#E5B868]/60
                           bg-black/50 backdrop-blur-sm
                           text-[#E5B868] text-sm font-semibold
                           tracking-wide hover:bg-[#E5B868]
                           hover:text-black transition-colors
                           duration-200"
              >
                {platform.name}
              </a>
            ))}
          </div>

          {/* ================================
              30-SECOND SNIPPET PLAYER
              This pulls tracks from tracks.ts
              and renders the custom player
              ================================ */}
          <div>
            <MusicPlayer tracks={tracks} />
          </div>

        </div>
      </div>
    </main>
  )
}