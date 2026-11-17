"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { budgetRanges } from "@/data/rates";
import { visibleServices } from "@/data/services";
import Steps from "@/components/Steps";
import { FormationDisclaimer } from "@/components/ui";

// ============================================
// 📌 INTAKE FORM OPTIONS - edit the choices here
// Prices live in src/data/rates.ts, not in this form.
// ============================================
const roles = ["Solo artist", "Group or band", "Label or collective", "Manager", "Other"]
const artistCounts = ["1", "2–5", "6–10", "11+"]
const services = [
  ...visibleServices.map((s) => s.name),
  "Something else / not sure yet",
]
const platforms = ["Instagram", "TikTok", "YouTube Shorts", "Other"]
const timelines = ["ASAP", "Within 2 weeks", "Within a month", "Just planning"]
const sources = ["Instagram", "TikTok", "Referral", "A.D.A. / Nu Town", "Google", "Other"]

const inputClass =
  "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E5B868]"
const labelClass = "block text-sm font-medium mb-2 text-gray-200"

function Select({ name, label, options, required = false }: { name: string; label: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}{required && " *"}
      </label>
      <select id={name} name={name} required={required} defaultValue="" className={`${inputClass} appearance-none`}>
        <option value="" disabled className="text-black">Choose one</option>
        {options.map((o) => (
          <option key={o} value={o} className="text-black">{o}</option>
        ))}
      </select>
    </div>
  )
}

function Checkboxes({ name, legend, options, required = false }: { name: string; legend: string; options: string[]; required?: boolean }) {
  return (
    <fieldset>
      <legend className={labelClass}>{legend}{required && " *"}</legend>
      <div className="grid sm:grid-cols-2 gap-2">
        {options.map((o) => (
          <label key={o} className="flex items-center gap-3 text-white/80 text-sm">
            <input type="checkbox" name={name} value={o} className="accent-[#E5B868] w-4 h-4" />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")
  const [requestType, setRequestType] = useState("Book a call")

  // /contact?type=quote opens the form on "Get a quote"
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("type") === "quote") {
      setRequestType("Get a quote")
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    // At least one service must be picked
    const picked = formData.getAll("services")
    if (picked.length === 0) {
      setError("Please pick at least one service you're interested in.")
      return
    }
    // Send checkbox groups as one readable line each
    for (const field of ["services", "platforms"]) {
      const values = formData.getAll(field).join(", ")
      formData.delete(field)
      formData.set(field, values || "(none)")
    }
    formData.set("subject", `New ${requestType.toLowerCase()} request from ${formData.get("name")}`)
    formData.append("access_key", "c618d949-9583-4a44-97d8-76f44d51e2d7")

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
          <h1 className="text-4xl md:text-5xl font-bold text-center 
                         text-white mb-4">
            Book a Call or Get a Quote
          </h1>
          <p className="text-center text-white/60 mb-4 text-lg">
            Tell us about you and your project. We&apos;ll reply with a quote and next steps.
          </p>
          <p className="text-center mb-16">
            <Link href="/services" className="text-[#E5B868] underline">
              See services & rates →
            </Link>
          </p>

          {/* ================================
              BOOKING FORM SECTION
              ================================ */}
          <div id="booking-form" 
               className="grid md:grid-cols-2 gap-12">

            {submitted ? (
              <div className="md:col-span-2 bg-green-900/30 
                              border border-green-500 p-8
                              rounded-xl text-center 
                              max-w-2xl mx-auto 
                              backdrop-blur-md">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Got It.
                </h2>
                <p className="text-lg text-gray-200">
                  We&apos;ll reply within {business.replyDays} business days with next steps.
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
                <div className="bg-black/40 backdrop-blur-md p-6 md:p-8 
                                rounded-2xl border border-white/10 
                                shadow-2xl">
                  <p className="text-[#E5B868] text-xs font-semibold 
                                 tracking-widest uppercase mb-2">
                    Intake Form
                  </p>
                  <h2 className="text-2xl font-bold mb-6 text-white">
                    Tell Us About Your Project
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Spam trap: hidden from people, Web3Forms rejects submissions that tick it */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Book a call or get a quote */}
                    <fieldset>
                      <legend className={labelClass}>I&apos;d like to *</legend>
                      <div className="flex gap-3">
                        {["Book a call", "Get a quote"].map((option) => (
                          <label
                            key={option}
                            className={`flex-1 text-center cursor-pointer px-4 py-3 rounded-lg border transition-colors
                              ${requestType === option ? "border-[#E5B868] bg-[#E5B868]/10 text-[#E5B868]" : "border-white/10 text-white/70"}`}
                          >
                            <input
                              type="radio"
                              name="request_type"
                              value={option}
                              checked={requestType === option}
                              onChange={() => setRequestType(option)}
                              className="sr-only"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div>
                      <label htmlFor="name" className={labelClass}>Name *</label>
                      <input id="name" type="text" name="name" required autoComplete="name" className={inputClass} placeholder="Your name" />
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>Email *</label>
                      <input id="email" type="email" name="email" required autoComplete="email" className={inputClass} placeholder="you@email.com" />
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone</label>
                      <input id="phone" type="tel" name="phone" autoComplete="tel" className={inputClass} placeholder="(optional)" />
                    </div>

                    <Select name="role" label="I am a…" options={roles} required />
                    <Select name="number_of_artists" label="Number of artists" options={artistCounts} required />
                    <Checkboxes name="services" legend="Services interested in" options={services} required />
                    <Checkboxes name="platforms" legend="Platforms (for reels)" options={platforms} />
                    <Select name="timeline" label="Timeline" options={timelines} required />
                    <Select name="budget" label="Budget range" options={budgetRanges} />
                    <Select name="heard_about" label="How did you hear about us?" options={sources} />

                    <div>
                      <label htmlFor="message" className={labelClass}>Tell us about your project</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className={inputClass}
                        placeholder="Release dates, tour dates, links"
                      />
                    </div>

                    <label className="flex items-start gap-3 text-sm text-white/80">
                      <input type="checkbox" name="consent" value="Yes" required className="accent-[#E5B868] w-4 h-4 mt-0.5" />
                      <span>
                        I agree to be contacted about my inquiry and have read the{" "}
                        <Link href="/privacy" className="text-[#E5B868] underline">Privacy Policy</Link>. *
                      </span>
                    </label>

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
                      {sending ? "Sending..." : "Send My Inquiry"}
                    </button>
                    <p className="text-xs text-white/50">
                      Please don&apos;t send passwords, bank details or Social Security numbers through this form.
                    </p>

                  </form>
                </div>

                {/* Booking Process */}
                <div className="space-y-6">
                  <div>
                    <p className="text-[#E5B868] text-xs font-semibold 
                                   tracking-widest uppercase mb-2">
                      How It Works
                    </p>
                    <h2 className="text-2xl font-bold mb-6 text-white">
                      Booking & Payment
                    </h2>
                    <Steps />
                    <p className="text-white/50 text-sm mt-4">
                      Deposit to book: {business.deposit}.{" "}
                      <Link href="/policies" className="text-[#E5B868] underline">See our Policies.</Link>
                    </p>
                  </div>

                  <FormationDisclaimer />

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
                    <p className="text-gray-300 text-lg break-words">
                      Email:{" "}
                      <a href={`mailto:${business.email}`} className="text-[#E5B868]">
                        {business.email}
                      </a>
                    </p>
                    <p className="text-gray-400 mt-2">
                      Typical response time: {business.replyDays} business days
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
