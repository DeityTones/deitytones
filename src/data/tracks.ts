// ============================================
// 📌 SONG DATABASE
// Audio files go in: /public/music/audio/
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
  {
    id: 1,
    title: "Wish You Well",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/audio/wish_you_well.wav",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
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
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
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
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 4,
    title: "Kintuunge",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/audio/kintuunge.wav",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 5,
    title: "Star Power",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/audio/star_power.wav",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 6,
    title: "Opposition",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/audio/opposition.wav",
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
    audioSrc: "/music/audio/kingdom_come.wav",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 8,
    title: "In The Morning",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/audio/in_the_morning.wav",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 9,
    title: "Catch Up",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/pharaoh_files_2.jpg",
    audioSrc: "/music/audio/catch_up.wav",
    releaseYear: "2024",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 10,
    title: "Candy Flip",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/counter_heart.jpg",
    audioSrc: "/music/audio/candy_flip_fobeats.wav",
    releaseYear: "2020",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 11,
    title: "Shadow Games",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/counter_heart.jpg",
    audioSrc: "/music/audio/shadow_games_prodzeke.wav",
    releaseYear: "2020",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 12,
    title: "Siren",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/counter_heart.jpg",
    audioSrc: "/music/audio/siren_prodzeke.wav",
    releaseYear: "2020",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 13,
    title: "Replay",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/counter_heart.jpg",
    audioSrc: "/music/audio/replay_prodzeke.wav",
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
    audioSrc: "/music/audio/waikiki_prodzeke.wav",
    releaseYear: "2020",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
  {
    id: 15,
    title: "Wild'n",
    artist: "T the Pharaoh",
    albumArt: "/music/covers/wild_n.jpg",
    audioSrc: "/music/audio/wild_n.wav",
    releaseYear: "2019",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We",
      appleMusic: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671",
      soundcloud: "https://soundcloud.com/t-the-pharaoh",
    },
  },
]