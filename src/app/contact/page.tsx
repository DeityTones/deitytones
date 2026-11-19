"use client";
import { useState } from "react";
import ConsultCalendar, { CONSULT_BOOKING_URL } from "@/components/ConsultCalendar";
import ServiceCards from "@/components/ServiceCards";
import { services, serviceGroups } from "@/data/services";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "f79f7d1b-7a24-450d-842a-b63ad90d6391")

    setSending(true)
    setError("")
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError("Your inquiry didn't go through. Please try again or email us directly.")
      }
    } catch (error) {
      console.log("Error:", error)
      setError("Your inquiry didn't go through. Please check your connection and try again, or email us directly.")
    } finally {
      setSending(false)
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
              SERVICE CARDS
              Edit prices or show/hide services in
              src/data/services.ts
              ================================ */}
          <div className="mb-16">
            <ServiceCards />
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
            {CONSULT_BOOKING_URL && (
              <button
                onClick={() => {
                  document.getElementById('consult')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="ml-0 sm:ml-4 mt-4 sm:mt-0 px-10 py-4
                           rounded-full border border-[#E5B868]/50
                           text-[#E5B868] font-bold text-lg
                           hover:bg-[#E5B868]/10
                           transition-all duration-200"
              >
                Book A Call →
              </button>
            )}
          </div>

          {/* ================================
              CONSULT BOOKING CALENDAR
              Turn on in src/components/ConsultCalendar.tsx
              ================================ */}
          <ConsultCalendar />

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

                    {/* Spam trap: hidden from people, Web3Forms rejects submissions that tick it */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

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
                        {(Object.keys(serviceGroups) as (keyof typeof serviceGroups)[]).map((g) => {
                          const items = services.filter((sv) => sv.showOnSite && sv.group === g)
                          if (items.length === 0) return null
                          return (
                            <optgroup key={g} label={serviceGroups[g]}>
                              {items.map((sv) => (
                                <option key={sv.id} value={sv.id} className="text-black">
                                  {sv.name} — {sv.price}
                                </option>
                              ))}
                            </optgroup>
                          )
                        })}
                        <option value="custom" className="text-black">
                          Something else / custom
                        </option>
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
                    {error && (
                      <p role="alert" className="text-red-300 text-sm">
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-[#E5B868] text-black 
                                 font-bold py-4 rounded-lg 
                                 hover:bg-[#d4a756] 
                                 transition-colors text-lg mt-4
                                 disabled:opacity-60 disabled:cursor-wait"
                    >
                      {sending ? "Sending..." : "Submit Inquiry"}
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
                      <a href="mailto:booking@tthepharaoh.net"
                         className="text-[#E5B868] hover:underline break-words">
                        booking@tthepharaoh.net
                      </a>
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
