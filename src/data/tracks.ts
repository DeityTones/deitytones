// ============================================
// 📌 SONG DATABASE
// This is the ONLY file you need to edit
// when adding new music to your site
//
// Audio files go in: /public/music/audio/
// Cover art goes in: /public/music/covers/
//
// HOW TO ADD A NEW TRACK:
// 1. Drop your audio file into /public/music/audio/
// 2. Drop cover art into /public/music/covers/ (optional)
// 3. Copy a track object below and update the fields
// 4. Save the file — it auto-appears on the Music page
// ============================================

export type Track = {
  id: number
  title: string
  artist: string
  featuredArtists?: string[]
  albumArt?: string
  audioSrc: string
  releaseYear: string
  streamingLinks?: {
    spotify?: string
    appleMusic?: string
    soundcloud?: string
    youtube?: string
    tidal?: string
  }
}

export const tracks: Track[] = [
  {
    id: 1,
    title: "Wish You Well",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/audio/wish_you_well.wav",
    releaseYear: "2024",
    streamingLinks: {
      spotify:
        "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic:
        "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 2,
    title: "Weekend In Florida",
    artist: "T the Pharaoh",
    featuredArtists: ["DirtyfaceHarry"],
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/audio/weekend_in_florida.wav",
    releaseYear: "2024",
    streamingLinks: {
      spotify:
        "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic:
        "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 3,
    title: "Roxxy",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/audio/roxxy.wav",
    releaseYear: "2024",
    streamingLinks: {
      spotify:
        "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic:
        "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
]