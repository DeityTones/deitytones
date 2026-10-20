// ============================================
// 📌 CONSULT BOOKING CALENDAR
// Paste your scheduling link below to turn this on.
// Works with Calendly (https://calendly.com/your-name/consult)
// or Cal.com (https://cal.com/your-name/consult).
// Leave it empty and the section stays hidden.
// ============================================
export const CONSULT_BOOKING_URL: string = ""

// Adds each provider's embed settings so the calendar
// matches the site's dark and gold colors
const getEmbedUrl = (link: string) => {
  const url = new URL(link)

  if (url.hostname.endsWith("calendly.com")) {
    url.searchParams.set("hide_gdpr_banner", "1")
    url.searchParams.set("background_color", "111116")
    url.searchParams.set("text_color", "ffffff")
    url.searchParams.set("primary_color", "e5b868")
  } else if (url.hostname.endsWith("cal.com")) {
    url.searchParams.set("embed", "true")
    url.searchParams.set("theme", "dark")
  }

  return url.toString()
}

export default function ConsultCalendar() {
  if (!CONSULT_BOOKING_URL) return null

  return (
    <section id="consult" className="mb-16 scroll-mt-28">
      <div className="text-center mb-8">
        <p className="text-[#E5B868] text-sm font-semibold
                      tracking-widest uppercase mb-2">
          Consultation
        </p>
        <h2 className="text-4xl font-bold text-white mb-3">
          Book A Call
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          Pick an open time below to talk through your project.
        </p>
      </div>

      <div className="bg-black/40 backdrop-blur-md rounded-2xl
                      border border-[#E5B868]/20 overflow-hidden
                      shadow-2xl">
        <iframe
          src={getEmbedUrl(CONSULT_BOOKING_URL)}
          title="Book a consultation with T The Pharaoh"
          className="w-full h-[700px] md:h-[680px]"
          loading="lazy"
        />
      </div>

      <p className="text-center text-white/40 text-sm mt-4">
        Calendar not loading?{" "}
        <a
          href={CONSULT_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E5B868] hover:underline"
        >
          Open it in a new tab
        </a>
      </p>
    </section>
  )
}
