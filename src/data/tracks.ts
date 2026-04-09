// ============================================
// 📌 SONG DATABASE
// This is the ONLY file you need to edit
// when adding new music to your site
//
// Audio files go in: /public/music/audio/
// Cover art goes in: /public/music/covers/
//
// HOW TO ADD A NEW TRACK:
// 1. Drop your .mp3 snippet into /public/music/audio/
// 2. Drop cover art into /public/music/covers/ (optional)
// 3. Copy a track object below and update the fields
// 4. Save the file — it auto-appears on the Music page
// ============================================

// This defines the SHAPE of a track
// Think of it like a template that every track must follow
export type Track = {
  id: number
  title: string
  artist: string
  featuredArtists?: string[]    // optional
  albumArt?: string             // optional
  audioSrc: string
  releaseYear: string
  streamingLinks?: {            // optional
    spotify?: string
    appleMusic?: string
    soundcloud?: string
    youtube?: string
    tidal?: string
  }
}

// ============================================
// 📌 YOUR TRACKS
// Add, remove, or edit tracks in this array
// ============================================
export const tracks: Track[] = [
  {
    id: 1,
    title: "Operation Ocean",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/operation_ocean.jpg",
    audioSrc: "/music/audio/operation_ocean.mp3",
    releaseYear: "2025",
    streamingLinks: {
      spotify:
        "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic:
        "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
      youtube: "https://www.youtube.com/watch?v=JVqeH0WlvMI",
    },
  },
  {
    id: 2,
    title: "Different Cities",
    artist: "T the Pharaoh",
    // No albumArt here — player will show "Coming Soon"
    audioSrc: "/music/audio/different_cities.mp3",
    releaseYear: "2025",
    streamingLinks: {
      spotify:
        "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      youtube: "https://www.youtube.com/watch?v=tGOAGo9ja08",
    },
  },

  // ============================================
  // 📌 COPY THIS TEMPLATE TO ADD A NEW TRACK
  // Uncomment it (remove the /* and */) and fill in
  // ============================================
  /*
  {
    id: 3,
    title: "Your Track Name",
    artist: "T the Pharaoh",
    featuredArtists: ["Featured Artist Name"],
    albumArt: "/music/covers/your_cover.jpg",
    audioSrc: "/music/audio/your_track.mp3",
    releaseYear: "2025",
    streamingLinks: {
      spotify: "https://...",
      appleMusic: "https://...",
      soundcloud: "https://...",
      youtube: "https://...",
    },
  },
  */
]