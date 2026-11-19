"use client";
import Link from "next/link";
import { useState } from "react";
import { business } from "@/data/business";

// ============================================
// 📌 MENU LINKS - edit the order or labels here
// ============================================
const links = [
  { href: "/", label: "HOME" },
  { href: "/music", label: "MUSIC" },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/services", label: "SERVICES" },
  { href: "/community", label: "COMMUNITY" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full z-50 p-6">
      <div className="max-w-6xl mx-auto flex justify-between 
                      items-center bg-black/40 backdrop-blur-md 
                      px-8 py-4 rounded-2xl border border-white/10 
                      shadow-lg">

        {/* Logo / Brand Name */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#E5B868] 
                     tracking-widest hover:scale-105 
                     transition-transform uppercase"
        >
          {business.brandName}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm 
                        font-medium tracking-widest">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-[#E5B868] 
                         transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-[#E5B868] text-black 
                       font-bold hover:scale-105 transition-transform"
          >
            BOOK
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-6 right-6 
                        bg-black/90 backdrop-blur-xl 
                        border border-white/10 rounded-2xl p-6 
                        flex flex-col space-y-4 shadow-2xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-medium 
                         hover:text-[#E5B868]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-center px-5 py-3 rounded-full bg-[#E5B868] 
                       text-black font-bold"
          >
            BOOK A CALL
          </Link>
        </div>
      )}
    </nav>
  );
}
