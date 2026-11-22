import { business } from "@/data/business"

// ============================================
// 📌 SOCIAL PROOF
// Hidden until business.showTestimonials is true.
// Only turn it on after Nu Town / A.D.A. gives
// written permission. Blur names, song titles,
// emails and every dollar amount in screenshots.
// ============================================
const testimonial = {
  quote: "[Quote from Nu Town / A.D.A., 1 to 3 sentences, in their words.]",
  name: "[Name]",
  title: "[Title]",
  company: "[Nu Town / A.D.A. (Artist Development Agency LLC)]",
  // Add a line like "A.D.A. is a current client" if they get any discount or benefit
  disclosure: "",
}

export default function Testimonials() {
  if (!business.showTestimonials) return null
  return (
    <section className="mt-20">
      <p className="text-[#E5B868] text-sm font-semibold tracking-widest uppercase mb-2 text-center">
        Trusted By Labels & Collectives
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <figure className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <blockquote className="text-xl text-white leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</blockquote>
          <figcaption className="mt-6 text-white/60">
            {testimonial.name}, {testimonial.title}, {testimonial.company}
            {testimonial.disclosure && <span className="block text-xs mt-2">{testimonial.disclosure}</span>}
          </figcaption>
        </figure>
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <p className="text-white font-bold text-xl mb-4">Before & after: the Master dashboard</p>
          {/* Replace these boxes with <Image> screenshots (names and numbers blurred) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video rounded-lg border border-dashed border-white/20 flex items-center justify-center text-white/40 text-sm text-center p-2">
              [Before: scattered files]
            </div>
            <div className="aspect-video rounded-lg border border-dashed border-[#E5B868]/40 flex items-center justify-center text-white/40 text-sm text-center p-2">
              [After: Master dashboard]
            </div>
          </div>
          <p className="text-white/50 text-sm mt-4">
            One roster, one dashboard. Names and numbers blurred for privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
