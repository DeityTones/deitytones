import Link from "next/link"

// One service: who it's for, what's included, what's not, price, CTA
export default function ServiceBlock({
  id,
  label,
  title,
  who,
  included,
  notIncluded,
  prices,
  children,
  cta = "call",
}: {
  id: string
  label: string
  title: string
  who: string
  included: React.ReactNode[]
  notIncluded: string
  prices: { name: string; value: string }[]
  children?: React.ReactNode
  cta?: "call" | "quote"
}) {
  return (
    <article
      id={id}
      className="scroll-mt-32 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#E5B868]/40 transition-all duration-300 p-6 md:p-10"
    >
      <p className="text-[#E5B868] text-xs font-semibold tracking-widest uppercase mb-2">{label}</p>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5 text-white/70 leading-relaxed">
          <div>
            <p className="text-white font-semibold mb-1">Who it&apos;s for</p>
            <p>{who}</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">What&apos;s included</p>
            <ul className="list-disc pl-5 space-y-1">
              {included.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Not included</p>
            <p>{notIncluded}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-[#E5B868]/20 bg-black/40 divide-y divide-white/5">
            {prices.map((p, i) => (
              <div key={i} className="p-4">
                <p className="text-white font-semibold">{p.name}</p>
                <p className="text-[#E5B868] font-bold mt-1 break-words">{p.value}</p>
              </div>
            ))}
          </div>
          {children}
          <Link
            href={cta === "quote" ? "/contact?type=quote" : "/contact"}
            className="self-start px-8 py-3 rounded-full bg-[#E5B868] text-black font-bold hover:scale-105 transition-transform duration-200"
          >
            {cta === "quote" ? "Get a Quote →" : "Book a Call →"}
          </Link>
        </div>
      </div>
    </article>
  )
}
