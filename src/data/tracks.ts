// ============================================
// 📌 SONG DATABASE
// Preview clips (30s MP3s, never full masters) go in: /public/music/previews/
// Cover art goes in: /public/music/covers/
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

  // ============================================
  // 📌 PHARAOH FILES 2 (2024) — Album Order
  // ============================================
  {
    id: 1,
    title: "Sights",
    artist: "T the Pharaoh",
    featuredArtists: ["Deuce"],
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/previews/sights.mp3",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 2,
    title: "Catch Up",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/previews/catch_up.mp3",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 3,
    title: "Weekend In Florida",
    artist: "T the Pharaoh",
    featuredArtists: ["DirtyfaceHarry"],
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/previews/weekend_in_florida.mp3",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 4,
    title: "In The Morning",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/previews/in_the_morning.mp3",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 5,
    title: "Follow The Leader",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/previews/follow_the_leader.mp3",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 6,
    title: "Roxxy",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/previews/roxxy.mp3",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 7,
    title: "Kingdom Come",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/previews/kingdom_come.mp3",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 8,
    title: "Opposition",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/previews/opposition.mp3",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 9,
    title: "Kingtuunge",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/previews/kingtuunge.mp3",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 10,
    title: "Wish You Well",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/previews/wish_you_well.mp3",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 11,
    title: "Star Power",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/previews/star_power.mp3",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 12,
    title: "187",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/previews/187r.mp3",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },

  // ============================================
  // 📌 COUNTER HEART EP (2020) — Album Order
  // ============================================
  {
    id: 13,
    title: "Replay",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/counter_heart.jpg",
    audioSrc: "/music/previews/replay_prodzeke.mp3",
    releaseYear: "2020",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 14,
    title: "Waikiki",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/counter_heart.jpg",
    audioSrc: "/music/previews/waikiki_prodzeke.mp3",
    releaseYear: "2020",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 15,
    title: "Siren",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/counter_heart.jpg",
    audioSrc: "/music/previews/siren_prodzeke.mp3",
    releaseYear: "2020",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 16,
    title: "Candy Flip",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/counter_heart.jpg",
    audioSrc: "/music/previews/candy_flip_fobeats.mp3",
    releaseYear: "2020",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 17,
    title: "Shadow Games",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/counter_heart.jpg",
    audioSrc: "/music/previews/shadow_games_prodzeke.mp3",
    releaseYear: "2020",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },

  // ============================================
  // 📌 SINGLES
  // ============================================
  {
    id: 18,
    title: "Wild'n",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/wild_n.jpg",
    audioSrc: "/music/previews/wild_n.mp3",
    releaseYear: "2019",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
]