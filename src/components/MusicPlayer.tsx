"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Track } from "@/data/tracks"

// ============================================
// 📌 MUSIC PLAYER COMPONENT
// Plays 30-second snippets of your tracks
// Reads from the tracks array in tracks.ts
// ============================================

const SNIPPET_DURATION = 30 // max seconds per preview

export default function MusicPlayer({ tracks }: { tracks: Track[] }) {

  // ============================================
  // STATE VARIABLES
  // These control what the player is doing
  //
  // audioRef    → connects to the hidden <audio> element
  // currentIndex → which track is selected (0 = first)
  // isPlaying   → is audio currently playing?
  // currentTime → how many seconds into the track
  // duration    → total length (max 30 seconds)
  // ============================================
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(SNIPPET_DURATION)

  // The track object currently selected
  const currentTrack = tracks[currentIndex]

  // ============================================
  // EFFECT 1: LISTEN TO AUDIO EVENTS
  // This runs every time the track changes
  //
  // timeupdate     → fires every fraction of a second
  //                   while audio plays. We use it to
  //                   update the progress bar AND stop
  //                   at 30 seconds
  // loadedmetadata → fires when browser knows the
  //                   track length. We use it to set
  //                   the duration (capped at 30s)
  // ended          → fires when track finishes
  //                   naturally (if shorter than 30s)
  // ============================================
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
      if (audio.currentTime >= SNIPPET_DURATION) {
        audio.pause()
        audio.currentTime = 0
        setIsPlaying(false)
        setCurrentTime(0)
      }
    }

    const handleLoadedMetadata = () => {
      setDuration(Math.min(audio.duration, SNIPPET_DURATION))
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("ended", handleEnded)

    // Cleanup: remove listeners when track changes
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate)
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [currentIndex])

  // ============================================
  // EFFECT 2: RESET WHEN TRACK CHANGES
  // When user picks a new track, we need to:
  // - Stop any current playback
  // - Reset the time to 0
  // - Load the new audio file
  // ============================================
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    audio.currentTime = 0
    setCurrentTime(0)
    setIsPlaying(false)
    audio.load()
  }, [currentIndex])

  // ============================================
  // PLAY / PAUSE FUNCTION
  // Toggles between playing and pausing
  // ============================================
  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  // ============================================
  // NEXT / PREVIOUS TRACK FUNCTIONS
  // Loops around — if you're on the last track
  // and hit next, it goes back to the first
  // ============================================
  const nextTrack = () => {
    setCurrentIndex((prev) =>
      prev < tracks.length - 1 ? prev + 1 : 0
    )
  }

  const prevTrack = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : tracks.length - 1
    )
  }

  // ============================================
  // PROGRESS BAR CLICK TO SEEK
  // When user clicks on the progress bar,
  // we calculate WHERE they clicked and
  // jump to that point in the track
  // ============================================
  const handleProgressClick = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const audio = audioRef.current
    if (!audio) return
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newTime = (clickX / rect.width) * duration
    if (newTime <= SNIPPET_DURATION) {
      audio.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  // ============================================
  // FORMAT TIME HELPER
  // Turns seconds into "0:00" format
  // Example: 65 seconds → "1:05"
  // ============================================
  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60)
    const secs = Math.floor(time % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  // ============================================
  // BUILD ARTIST DISPLAY STRING
  // If there are featured artists, shows:
  // "T the Pharaoh ft. Artist1, Artist2"
  // Otherwise just shows: "T the Pharaoh"
  // ============================================
  const artistDisplay = currentTrack.featuredArtists?.length
    ? `${currentTrack.artist} ft. ${currentTrack.featuredArtists.join(", ")}`
    : currentTrack.artist

  // ============================================
  // NO TRACKS FALLBACK
  // Shows if the tracks array is empty
  // ============================================
  if (!tracks.length) {
    return (
      <div className="bg-black/40 backdrop-blur-md rounded-2xl
                      border border-white/10 p-12 text-center">
        <p className="text-white/30 tracking-widest uppercase text-sm">
          No tracks available yet
        </p>
      </div>
    )
  }

  // ============================================
  // 📌 EVERYTHING BELOW IS WHAT THE USER SEES
  // ============================================
  return (
    <div className="bg-black/40 backdrop-blur-md rounded-2xl
                    border border-white/10 shadow-2xl
                    overflow-hidden">

      {/* ================================
          HIDDEN AUDIO ELEMENT
          This is the actual audio player
          that the browser uses. Users
          never see this — they interact
          with our custom UI instead
          ================================ */}
      <audio ref={audioRef} preload="metadata">
        <source src={currentTrack.audioSrc} type="audio/mpeg" />
      </audio>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

        {/* ================================
            LEFT SIDE: ALBUM ART
            Shows cover image if available
            Shows "Coming Soon" if not
            ================================ */}
        <div className="md:col-span-1 aspect-square relative
                        bg-gradient-to-br from-[#4c4c8e]/30
                        to-black/60 overflow-hidden">
          {currentTrack.albumArt ? (
            <Image
              src={currentTrack.albumArt}
              alt={`${currentTrack.title} cover art`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col
                            items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full
                              border-2 border-[#E5B868]/30
                              flex items-center justify-center">
                <span className="text-4xl">🎵</span>
              </div>
              <div className="text-center">
                <p className="text-white/20 text-sm
                              tracking-widest uppercase">
                  Cover Art
                </p>
                <p className="text-white/10 text-xs mt-1">
                  Coming Soon
                </p>
              </div>
            </div>
          )}

          {/* 30s Preview Badge */}
          <div className="absolute top-3 right-3 px-3 py-1
                          rounded-full bg-black/70
                          border border-[#E5B868]/30">
            <p className="text-[#E5B868] text-xs font-bold
                          tracking-widest">
              30s PREVIEW
            </p>
          </div>
        </div>

        {/* ================================
            RIGHT SIDE: CONTROLS
            Track info, progress bar,
            play/pause, and streaming links
            ================================ */}
        <div className="md:col-span-2 p-6 md:p-8
                        flex flex-col justify-between">

          {/* Track Info */}
          <div className="mb-6">
            <p className="text-[#E5B868] text-xs font-semibold
                          tracking-widest uppercase mb-2">
              Now Playing • Track {currentIndex + 1} of {tracks.length}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold
                            text-white mb-1">
              {currentTrack.title}
            </h3>
            <p className="text-white/50 text-lg">
              {artistDisplay}
            </p>
            <p className="text-white/30 text-sm mt-1">
              {currentTrack.releaseYear}
            </p>
          </div>

          {/* ================================
              PROGRESS BAR
              The gold bar shows how far into
              the 30s preview you are.
              Click anywhere on it to jump
              to that point.
              ================================ */}
          <div className="mb-6">
            <div
              className="w-full h-2 bg-white/10 rounded-full
                         cursor-pointer group"
              onClick={handleProgressClick}
            >
              <div
                className="h-full bg-[#E5B868] rounded-full
                           relative transition-all duration-100"
                style={{
                  width: `${(currentTime / duration) * 100}%`,
                }}
              >
                <div className="absolute right-0 top-1/2
                                -translate-y-1/2
                                w-3 h-3 rounded-full
                                bg-[#E5B868] shadow-lg
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-200" />
              </div>
            </div>
            <div className="flex justify-between mt-2
                            text-white/40 text-xs
                            tracking-widest">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* ================================
              PLAYBACK CONTROLS
              Previous, Play/Pause, Next
              Plus streaming links on desktop
              ================================ */}
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-6">

              {/* Previous Button */}
              <button
                onClick={prevTrack}
                className="text-white/50 hover:text-[#E5B868]
                           transition-colors duration-200"
                aria-label="Previous track"
              >
                <svg className="w-6 h-6" fill="currentColor"
                     viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                </svg>
              </button>

              {/* Play / Pause Button */}
              <button
                onClick={togglePlay}
                className="w-14 h-14 rounded-full bg-[#E5B868]
                           flex items-center justify-center
                           hover:scale-110
                           transition-transform duration-200
                           shadow-lg"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <svg className="w-6 h-6 text-black"
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-black ml-1"
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Next Button */}
              <button
                onClick={nextTrack}
                className="text-white/50 hover:text-[#E5B868]
                           transition-colors duration-200"
                aria-label="Next track"
              >
                <svg className="w-6 h-6" fill="currentColor"
                     viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>

            </div>

            {/* ================================
                DESKTOP STREAMING LINKS
                Only shows if the track has
                streaming links defined
                Hidden on mobile (shown below)
                ================================ */}
            {currentTrack.streamingLinks && (
              <div className="hidden sm:flex items-center gap-3">
                <span className="text-white/30 text-xs
                                 tracking-widest uppercase mr-2">
                  Full Song:
                </span>
                {currentTrack.streamingLinks.spotify && (
                  <a
                    href={currentTrack.streamingLinks.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full text-xs
                               font-semibold border
                               border-[#1DB954]/50
                               text-[#1DB954]
                               hover:bg-[#1DB954]/10
                               transition-all duration-200"
                  >
                    Spotify
                  </a>
                )}
                {currentTrack.streamingLinks.appleMusic && (
                  <a
                    href={currentTrack.streamingLinks.appleMusic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full text-xs
                               font-semibold border
                               border-[#FA243C]/50
                               text-[#FA243C]
                               hover:bg-[#FA243C]/10
                               transition-all duration-200"
                  >
                    Apple
                  </a>
                )}
                {currentTrack.streamingLinks.youtube && (
                  <a
                    href={currentTrack.streamingLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full text-xs
                               font-semibold border
                               border-[#FF0000]/50
                               text-[#FF0000]
                               hover:bg-[#FF0000]/10
                               transition-all duration-200"
                  >
                    YouTube
                  </a>
                )}
              </div>
            )}

          </div>

          {/* ================================
              MOBILE STREAMING LINKS
              Same links but stacked for
              small screens
              ================================ */}
          {currentTrack.streamingLinks && (
            <div className="sm:hidden flex flex-wrap gap-2 mt-6">
              <span className="text-white/30 text-xs
                               tracking-widest uppercase w-full mb-1">
                Stream Full Song:
              </span>
              {currentTrack.streamingLinks.spotify && (
                <a
                  href={currentTrack.streamingLinks.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full text-xs
                             font-semibold border
                             border-[#1DB954]/50
                             text-[#1DB954]
                             hover:bg-[#1DB954]/10
                             transition-all duration-200"
                >
                  Spotify
                </a>
              )}
              {currentTrack.streamingLinks.appleMusic && (
                <a
                  href={currentTrack.streamingLinks.appleMusic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full text-xs
                             font-semibold border
                             border-[#FA243C]/50
                             text-[#FA243C]
                             hover:bg-[#FA243C]/10
                             transition-all duration-200"
                >
                  Apple
                </a>
              )}
              {currentTrack.streamingLinks.youtube && (
                <a
                  href={currentTrack.streamingLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full text-xs
                             font-semibold border
                             border-[#FF0000]/50
                             text-[#FF0000]
                             hover:bg-[#FF0000]/10
                             transition-all duration-200"
                >
                  YouTube
                </a>
              )}
            </div>
          )}

        </div>
      </div>

      {/* ================================
          TRACK LIST
          Shows all available tracks below
          the player. Click any to switch.
          Only shows if more than 1 track.
          ================================ */}
      {tracks.length > 1 && (
        <div className="border-t border-white/10">
          <div className="px-6 md:px-8 py-4">
            <p className="text-[#E5B868] text-xs font-semibold
                          tracking-widest uppercase mb-3">
              All Previews
            </p>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {tracks.map((track, index) => (
              <button
                key={track.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-full px-6 md:px-8 py-4 flex
                            items-center gap-4 text-left
                            transition-all duration-200
                            border-b border-white/5
                            last:border-b-0
                  ${currentIndex === index
                    ? "bg-[#E5B868]/10"
                    : "hover:bg-white/5"
                  }`}
              >
                {/* Track Number or Playing Indicator */}
                <div className="w-8 text-center">
                  {currentIndex === index && isPlaying ? (
                    <span className="text-[#E5B868] text-sm">♪</span>
                  ) : (
                    <span className="text-white/30 text-sm">
                      {index + 1}
                    </span>
                  )}
                </div>

                {/* Mini Album Art */}
                <div className="w-10 h-10 rounded-lg
                                overflow-hidden bg-black/40
                                flex-shrink-0 relative">
                  {track.albumArt ? (
                    <Image
                      src={track.albumArt}
                      alt={track.title}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  ) : (
                    <div className="w-full h-full flex
                                    items-center justify-center">
                      <span className="text-[#E5B868]/40 text-xs">
                        🎵
                      </span>
                    </div>
                  )}
                </div>

                {/* Track Title and Artist */}
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold truncate
                    ${currentIndex === index
                      ? "text-[#E5B868]"
                      : "text-white"
                    }`}>
                    {track.title}
                  </p>
                  <p className="text-white/40 text-sm truncate">
                    {track.featuredArtists?.length
                      ? `${track.artist} ft. ${track.featuredArtists.join(", ")}`
                      : track.artist
                    }
                  </p>
                </div>

                {/* Release Year */}
                <span className="text-white/20 text-xs
                                 tracking-widest hidden sm:block">
                  {track.releaseYear}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}