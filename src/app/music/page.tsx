"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function MusicPage() {
  // We will update these links with your real ones later!
  const streamingPlatforms = [
    { name: "Spotify", url: "https://open.spotify.com/artist/57qZ07QsIzWERPqqFp50We?si=r5_j0RTDQtCZJS7trkMYkQ", color: "bg-[#1DB954]" },
    { name: "Apple Music", url: "https://music.apple.com/ng/artist/t-the-pharaoh/1417699671", color: "bg-[#FA243C]" },
    { name: "SoundCloud", url: "https://soundcloud.com/t-the-pharaoh", color: "bg-[#FF3300]" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UCqcICy39GycwORST5cFPodw?sub_confirmation=1", color: "bg-[#FF0000]" },
    { name: "Tidal", url: "https://tidal.com/artist/10140234", color: "bg-[#111111] border border-white/20" },
  ];

  return (
    <main className="relative flex flex-col min-h-screen text-white overflow-hidden bg-black">
      {/* Background to match your theme */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/Ancient_Egypt.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <Navbar />
      
      <div className="relative z-10 pt-32 pb-16 px-4 flex-grow">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-[#E5B868] mb-4">Music</h1>
          <p className="text-center text-gray-300 mb-16 text-lg">Stream my latest releases across all major platforms.</p>
          
          {/* Featured Player Section */}
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white">Latest Release</h2>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              
              {/* Album Art Placeholder */}
              <div className="md:col-span-1 w-full aspect-square bg-gradient-to-br from-[#4c4c8e] to-black rounded-xl border border-white/20 flex items-center justify-center shadow-lg relative overflow-hidden">
                <span className="text-white/50 font-bold tracking-widest">ALBUM ART</span>
              </div>
              
              {/* SoundCloud Embed */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-[#E5B868] mb-2">Track Title Goes Here</h3>
                <p className="text-gray-300 mb-6">Produced & Mixed by DeityTones</p>
                
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <iframe 
                    width="100%" 
                    height="166" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&color=%234c4c8e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    className="rounded-md"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
          
          {/* Streaming Links */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Stream Everywhere</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {streamingPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${platform.color} w-full md:w-48 text-white p-6 rounded-xl text-center hover:opacity-90 transition-all hover:scale-105 shadow-lg flex items-center justify-center h-24`}
                >
                  <h3 className="text-xl font-bold tracking-wide">{platform.name}</h3>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}