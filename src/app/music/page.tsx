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
      color: "bg-[#1DB954]",
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      color: "bg-[#FA243C]",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/t-the-pharaoh",
      color: "bg-[#FF3300]",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCqcICy39GycwORST5cFPodw?sub_confirmation=1",
      color: "bg-[#FF0000]",
    },
    {
      name: "Tidal",
      url: "https://tidal.com/artist/10140234",
      color: "bg-[#111111] border border-white/20",
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
          <p className="text-center text-white/50 mb-16 text-lg">
            Preview tracks below. Stream the full songs
            on your favorite platform.
          </p>

          {/* ================================
              30-SECOND SNIPPET PLAYER
              This pulls tracks from tracks.ts
              and renders the custom player
              ================================ */}
          <div className="mb-16">
            <MusicPlayer tracks={tracks} />
          </div>

          {/* ================================
              STREAMING PROFILE LINKS
              These go to your artist profiles
              ================================ */}
          <div>
            <p className="text-[#E5B868] text-sm font-semibold
                          tracking-widest uppercase mb-2
                          text-center">
              Find Me Everywhere
            </p>
            <h2 className="text-3xl font-bold text-center
                           mb-8 text-white">
              Stream Everywhere
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {streamingPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${platform.color} w-full md:w-48
                              text-white p-6 rounded-xl
                              text-center hover:opacity-90
                              transition-all hover:scale-105
                              shadow-lg flex items-center
                              justify-center h-24`}
                >
                  <h3 className="text-xl font-bold tracking-wide">
                    {platform.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}