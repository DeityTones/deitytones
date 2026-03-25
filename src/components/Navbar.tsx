"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full z-50 p-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 shadow-lg">
        
        {/* Logo / Brand Name */}
        <Link href="/" className="text-2xl font-bold text-[#E5B868] tracking-widest hover:scale-105 transition-transform">
          T THE PHARAOH
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest">
          <Link href="/" className="text-white hover:text-[#E5B868] transition-colors">
            HOME
          </Link>
          <Link href="/music" className="text-white hover:text-[#E5B868] transition-colors">
            MUSIC
          </Link>
          <Link href="/contact" className="text-white hover:text-[#E5B868] transition-colors">
            SERVICES
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-6 right-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col space-y-4 shadow-2xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-white text-lg font-medium hover:text-[#E5B868]">
            HOME
          </Link>
          <Link href="/music" onClick={() => setIsOpen(false)} className="text-white text-lg font-medium hover:text-[#E5B868]">
            MUSIC
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-white text-lg font-medium hover:text-[#E5B868]">
            SERVICES
          </Link>
        </div>
      )}
    </nav>
  );
}