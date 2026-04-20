"use client";
import { useState } from "react";

// ============================================
// 📌 PHARAOH'S PALMS - AUDIO RATE CARD
// Update prices and services here
// ============================================
const pharaohsPalms = [
  {
    service: "Mastering Only",
    description: "Polish your final stereo mix for streaming and distribution. Includes one mastered WAV + MP3 preview.",
    price: "\$45.00",
    highlight: false,
  },
  {
    service: "Mix + Master — Basic",
    subtitle: "(3 Stems)",
    description: "Beat, lead vocal, and adlibs mixed and mastered into a release-ready track. Includes 2 revision rounds.",
    price: "\$85.00",
    highlight: false,
  },
  {
    service: "Mix + Master — Complex",
    subtitle: "(Up to ~10 Vocal Stems)",
    description: "Full vocal stack (lead, doubles, adlibs, harmonies) mixed and mastered. Great for more complex records.",
    price: "\$130.00",
    highlight: false,
  },
  {
    service: "Podcast Edit",
    subtitle: "(Per Episode)",
    description: "Clean, balanced audio with intro/outro and basic mastering for one episode up to 60 minutes.",
    price: "\$110.00",
    highlight: false,
  },
  {
    service: "Podcast Monthly Plan",
    description: "Four edited episodes per month (up to 60 minutes each) for consistent, pro-sounding podcast output.",
    price: "\$330.00",
    highlight: false,
  },
  {
    service: "Live Local Tracking",
    description: "In-person recording/engineering session for artists or groups. Minimum booking 2 hours.",
    price: "\$55.00",
    highlight: false,
  },
]

// ============================================
// 📌 PHARAOH'S SIGHT - SOCIAL/VIDEO RATE CARD
// Update prices and services here
// ============================================
const pharaohsSight = [
  {
    service: "Short-Form Pack",
    subtitle: "(4 Clips)",
    description: "Four vertical videos (Reels/TikTok/Shorts) from up to 30 minutes of raw footage. Includes basic color and captions.",
    price: "\$115.00",
    highlight: false,
  },
  {
    service: "Short-Form Pack",
    subtitle: "(10 Clips)",
    description: "Ten edited vertical videos from up to 60 minutes of raw footage. Ideal for a month of consistent content.",
    price: "\$220.00",
    highlight: false,
  },
  {
    service: "Picture Enhancing",
    subtitle: "(5 Images)",
    description: "Light retouch, color/exposure correction, and crop/straighten for up to 5 photos for social or promo use.",
    price: "\$55.00",
    highlight: false,
  },
  {
    service: "IG Profile Setup + 30-Day Plan",
    description: "Optimize your IG bio, highlights, and link-in-bio, plus a written 30-day content outline.",
    price: "\$100.00",
    highlight: false,
  },
  {
    service: "IG 30-Day Starter Growth",
    description: "6-9 posts over 30 days using your content, with basic hashtag strategy and light engagement (no bot tactics).",
    price: "\$150.00",
    highlight: false,
  },
]

// ============================================
// 📌 SERVICE TABS
// ============================================
const serviceTabs = [
  { id: "palms", label: "Pharaoh's Palms", subtitle: "Audio Services" },
  // { id: "sight", label: "Pharaoh's Sight", subtitle: "Social & Video" },
  // ☝️ Uncomment this line when ready to launch Pharaoh's Sight
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("palms")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "c618d949-9583-4a44-97d8-76f44d51e2d7")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
      }
    } catch (error) {
      console.log("Error:", error)
    }
  };

  return (
    <main className="relative flex flex-col min-h-screen 
                     text-white overflow-hidden">

      <div className="relative z-10 pt-32 pb-16 px-4 flex-grow">
        <div className="max-w-6xl mx-auto">

          {/* ================================
              PAGE TITLE
              ================================ */}
          <p className="text-[#E5B868] text-sm font-semibold 
                        tracking-widest uppercase mb-2 text-center">
            Work With The Pharaoh
          </p>
          <h1 className="text-5xl font-bold text-center 
                         text-white mb-4">
            Services & Rates
          </h1>
          <p className="text-center text-white/50 mb-16 text-lg">
            Professional quality. Honest pricing. 
            Built for artists who take their craft seriously.
          </p>

          {/* ================================
              RATE CARD TABS
              ================================ */}
          <div className="mb-12">

            {/* Tab Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 
                            justify-center mb-12">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-5 rounded-2xl text-left
                              border transition-all duration-300
                    ${activeTab === tab.id
                      ? "bg-[#E5B868]/10 border-[#E5B868] shadow-lg"
                      : "bg-black/40 border-white/10 hover:border-[#E5B868]/50"
                    }`}
                >
                  <p className={`text-lg font-bold tracking-wide
                                 transition-colors duration-300
                    ${activeTab === tab.id
                      ? "text-[#E5B868]"
                      : "text-white/70"
                    }`}>
                    {tab.label}
                  </p>
                  <p className={`text-sm tracking-widest uppercase
                                 transition-colors duration-300
                    ${activeTab === tab.id
                      ? "text-white/60"
                      : "text-white/30"
                    }`}>
                    {tab.subtitle}
                  </p>
                </button>
              ))}
            </div>

            {/* ================================
                PHARAOH'S PALMS - AUDIO TABLE
                ================================ */}
            {activeTab === "palms" && (
              <div className="animate-fadeIn">

                {/* Brand Header */}
                <div className="bg-black/60 backdrop-blur-sm 
                                rounded-t-2xl border border-[#E5B868]/20
                                border-b-0 p-8">
                  <p className="text-[#E5B868] text-xs font-semibold 
                                 tracking-widest uppercase mb-1">
                    Audio Production
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold 
                                  text-white mb-2">
                    Pharaoh's Palms
                  </h2>
                  <p className="text-white/40 text-sm">
                    Founder: T the Pharaoh
                  </p>
                </div>

                {/* Table Header */}
                <div className="hidden md:grid md:grid-cols-12 
                                gap-4 px-8 py-4
                                bg-[#E5B868]/10 
                                border-x border-[#E5B868]/20">
                  <div className="col-span-3">
                    <p className="text-[#E5B868] text-xs font-bold 
                                   tracking-widest uppercase">
                      Service
                    </p>
                  </div>
                  <div className="col-span-7">
                    <p className="text-[#E5B868] text-xs font-bold 
                                   tracking-widest uppercase">
                      Description
                    </p>
                  </div>
                  <div className="col-span-2 text-right">
                    <p className="text-[#E5B868] text-xs font-bold 
                                   tracking-widest uppercase">
                      Rate (USD)
                    </p>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="border border-[#E5B868]/20 
                                border-t-0 rounded-b-2xl 
                                overflow-hidden">
                  {pharaohsPalms.map((item, index) => (
                    <div
                      key={index}
                      className={`grid grid-cols-1 md:grid-cols-12 
                                  gap-4 px-8 py-6
                                  border-b border-white/5
                                  transition-all duration-200
                                  hover:bg-[#E5B868]/5
                                  last:border-b-0
                                  ${index % 2 === 0
                                    ? "bg-black/40"
                                    : "bg-black/20"
                                  }`}
                    >
                      {/* Service Name */}
                      <div className="md:col-span-3">
                        <p className="text-white font-bold text-lg">
                          {item.service}
                        </p>
                        {item.subtitle && (
                          <p className="text-white/40 text-sm mt-1">
                            {item.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Description */}
                      <div className="md:col-span-7">
                        <p className="text-white/60 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="md:col-span-2 
                                      md:text-right
                                      flex md:block 
                                      items-center gap-2">
                        <p className="text-[#E5B868] font-bold 
                                       text-xl">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* ================================
                PHARAOH'S SIGHT - SOCIAL TABLE
                ================================ */}
            {activeTab === "sight" && (
              <div className="animate-fadeIn">

                {/* Brand Header */}
                <div className="bg-black/60 backdrop-blur-sm 
                                rounded-t-2xl border border-[#E5B868]/20
                                border-b-0 p-8">
                  <p className="text-[#E5B868] text-xs font-semibold 
                                 tracking-widest uppercase mb-1">
                    Social Media & Video
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold 
                                  text-white mb-2">
                    Pharaoh's Sight
                  </h2>
                  <p className="text-white/40 text-sm">
                    Founder: T the Pharaoh
                  </p>
                </div>

                {/* Table Header */}
                <div className="hidden md:grid md:grid-cols-12 
                                gap-4 px-8 py-4
                                bg-[#E5B868]/10
                                border-x border-[#E5B868]/20">
                  <div className="col-span-3">
                    <p className="text-[#E5B868] text-xs font-bold 
                                   tracking-widest uppercase">
                      Service
                    </p>
                  </div>
                  <div className="col-span-7">
                    <p className="text-[#E5B868] text-xs font-bold 
                                   tracking-widest uppercase">
                      Description
                    </p>
                  </div>
                  <div className="col-span-2 text-right">
                    <p className="text-[#E5B868] text-xs font-bold 
                                   tracking-widest uppercase">
                      Rate (USD)
                    </p>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="border border-[#E5B868]/20 
                                border-t-0 rounded-b-2xl 
                                overflow-hidden">
                  {pharaohsSight.map((item, index) => (
                    <div
                      key={index}
                      className={`grid grid-cols-1 md:grid-cols-12 
                                  gap-4 px-8 py-6
                                  border-b border-white/5
                                  transition-all duration-200
                                  hover:bg-[#E5B868]/5
                                  last:border-b-0
                                  ${index % 2 === 0
                                    ? "bg-black/40"
                                    : "bg-black/20"
                                  }`}
                    >
                      {/* Service Name */}
                      <div className="md:col-span-3">
                        <p className="text-white font-bold text-lg">
                          {item.service}
                        </p>
                        {item.subtitle && (
                          <p className="text-white/40 text-sm mt-1">
                            {item.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Description */}
                      <div className="md:col-span-7">
                        <p className="text-white/60 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="md:col-span-2 
                                      md:text-right
                                      flex md:block 
                                      items-center gap-2">
                        <p className="text-[#E5B868] font-bold 
                                       text-xl">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

          </div>

          {/* ================================
              CUSTOM PACKAGE CTA
              ================================ */}
          <div className="text-center py-12 mb-16
                          bg-black/40 backdrop-blur-sm
                          rounded-2xl border border-[#E5B868]/10">
            <p className="text-white/60 text-lg mb-2">
              Don't see what you need?
            </p>
            <p className="text-white font-bold text-2xl mb-6">
              Let's talk and see what we can do.
            </p>
            <button
              onClick={() => {
                document.getElementById('booking-form')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-10 py-4 rounded-full 
                         bg-[#E5B868] text-black 
                         font-bold text-lg
                         hover:scale-105 
                         transition-transform duration-200"
            >
              Get In Touch →
            </button>
          </div>

          {/* ================================
              BOOKING FORM SECTION
              ================================ */}
          <div id="booking-form" 
               className="grid md:grid-cols-2 gap-12">

            {/* Contact Form */}
            {submitted ? (
              <div className="md:col-span-2 bg-green-900/30 
                              border border-green-500 p-8
                              rounded-xl text-center 
                              max-w-2xl mx-auto 
                              backdrop-blur-md">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Thank You!
                </h3>
                <p className="text-lg text-gray-200">
                  We'll get back to you within 24 hours 
                  to discuss your project.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-8 py-3 bg-[#4c4c8e] 
                             text-white rounded-full 
                             hover:bg-[#3b3b6e] 
                             transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                {/* Form */}
                <div className="bg-black/40 backdrop-blur-md p-8 
                                rounded-2xl border border-white/10 
                                shadow-2xl">
                  <p className="text-[#E5B868] text-xs font-semibold 
                                 tracking-widest uppercase mb-2">
                    Ready To Book?
                  </p>
                  <h2 className="text-2xl font-bold mb-6 text-white">
                    Send Inquiry
                  </h2>
                  <form onSubmit={handleSubmit} 
                        className="space-y-6">

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium 
                                        mb-2 text-gray-200">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white/5 
                                   border border-white/10 rounded-lg 
                                   text-white placeholder-gray-500
                                   focus:outline-none 
                                   focus:ring-2 
                                   focus:ring-[#E5B868]"
                        placeholder="Your Name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium 
                                        mb-2 text-gray-200">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/5 
                                   border border-white/10 rounded-lg 
                                   text-white placeholder-gray-500
                                   focus:outline-none 
                                   focus:ring-2 
                                   focus:ring-[#E5B868]"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-sm font-medium 
                                        mb-2 text-gray-200">
                        Service Type
                      </label>
                      <select
                        name="service"
                        className="w-full px-4 py-3 bg-white/5 
                                   border border-white/10 rounded-lg 
                                   text-white focus:outline-none
                                   focus:ring-2 
                                   focus:ring-[#E5B868] 
                                   appearance-none"
                      >
                                              <optgroup label="Pharaoh's Palms - Audio">
                          <option value="mastering" 
                                  className="text-black">
                            Mastering Only — \\$45
                          </option>
                          <option value="mix-master-basic" 
                                  className="text-black">
                            Mix + Master Basic — \\$85
                          </option>
                          <option value="mix-master-complex" 
                                  className="text-black">
                            Mix + Master Complex — \\$130
                          </option>
                          <option value="podcast-episode" 
                                  className="text-black">
                            Podcast Edit (Per Episode) — \\$110
                          </option>
                          <option value="podcast-monthly" 
                                  className="text-black">
                            Podcast Monthly Plan — \\$330
                          </option>
                          <option value="live-tracking" 
                                  className="text-black">
                            Live Local Tracking — \\$55
                          </option>
                        </optgroup>
                        {/*
                        <optgroup label="Pharaoh's Sight - Social & Video">
                          <option value="short-form-4" 
                                  className="text-black">
                            Short-Form Pack 4 Clips — \\$115
                          </option>
                          <option value="short-form-10" 
                                  className="text-black">
                            Short-Form Pack 10 Clips — \\$220
                          </option>
                          <option value="picture-enhancing" 
                                  className="text-black">
                            Picture Enhancing 5 Images — \\$55
                          </option>
                          <option value="ig-setup" 
                                  className="text-black">
                            IG Profile Setup + 30-Day Plan — \\$100
                          </option>
                          <option value="ig-growth" 
                                  className="text-black">
                            IG 30-Day Starter Growth — \\$150
                          </option>
                          <option value="custom" 
                                  className="text-black">
                            Custom Package
                          </option>
                        </optgroup>
                        */}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium 
                                        mb-2 text-gray-200">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 
                                   border border-white/10 rounded-lg 
                                   text-white placeholder-gray-500
                                   focus:outline-none 
                                   focus:ring-2 
                                   focus:ring-[#E5B868]"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-[#E5B868] text-black 
                                 font-bold py-4 rounded-lg 
                                 hover:bg-[#d4a756] 
                                 transition-colors text-lg mt-4"
                    >
                      Submit Inquiry
                    </button>

                  </form>
                </div>

                {/* Booking Process */}
                <div className="space-y-6">
                  <div className="bg-black/40 backdrop-blur-md p-8 
                                  rounded-2xl border border-white/10 
                                  shadow-2xl">
                    <p className="text-[#E5B868] text-xs font-semibold 
                                   tracking-widest uppercase mb-2">
                      How It Works
                    </p>
                    <h3 className="text-2xl font-bold mb-6 text-white">
                      Booking Process
                    </h3>
                    <ol className="space-y-4 text-gray-300 text-lg">
                      <li className="flex items-start gap-4 
                                     pb-4 border-b border-white/10">
                        <span className="text-[#E5B868] font-bold 
                                          text-xl min-w-[24px]">
                          01
                        </span>
                        <span>Submit inquiry form</span>
                      </li>
                      <li className="flex items-start gap-4 
                                     pb-4 border-b border-white/10">
                        <span className="text-[#E5B868] font-bold 
                                          text-xl min-w-[24px]">
                          02
                        </span>
                        <span>We'll schedule a discovery call</span>
                      </li>
                      <li className="flex items-start gap-4 
                                     pb-4 border-b border-white/10">
                        <span className="text-[#E5B868] font-bold 
                                          text-xl min-w-[24px]">
                          03
                        </span>
                        <span>Receive custom quote & timeline</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-[#E5B868] font-bold 
                                          text-xl min-w-[24px]">
                          04
                        </span>
                        <span>50% deposit to secure booking</span>
                      </li>
                    </ol>
                  </div>

                  {/* Direct Contact */}
                  <div className="bg-black/40 backdrop-blur-md p-8 
                                  rounded-2xl border border-white/10 
                                  shadow-2xl">
                    <p className="text-[#E5B868] text-xs font-semibold 
                                   tracking-widest uppercase mb-2">
                      Prefer Direct Contact?
                    </p>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      Reach Out Directly
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Email:{" "}
                      <span className="text-[#E5B868]">
                        info@yourdomain.com
                      </span>
                    </p>
                    <p className="text-gray-400 mt-2">
                      Typical response time: 24 hours
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}