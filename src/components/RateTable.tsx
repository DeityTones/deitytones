import type { RateRow } from "@/data/rates"

// Black-and-gold rate table (moved here from the old Services & Rates page)
export default function RateTable({
  label,
  title,
  rows,
}: {
  label: string
  title: string
  rows: RateRow[]
}) {
  return (
    <div>
      <div className="bg-black/60 backdrop-blur-sm rounded-t-2xl border border-[#E5B868]/20 border-b-0 p-8">
        <p className="text-[#E5B868] text-xs font-semibold tracking-widest uppercase mb-1">{label}</p>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/40 text-sm">Founder: T the Pharaoh</p>
      </div>

      <div className="hidden md:grid md:grid-cols-12 gap-4 px-8 py-4 bg-[#E5B868]/10 border-x border-[#E5B868]/20">
        <div className="col-span-3">
          <p className="text-[#E5B868] text-xs font-bold tracking-widest uppercase">Service</p>
        </div>
        <div className="col-span-7">
          <p className="text-[#E5B868] text-xs font-bold tracking-widest uppercase">Description</p>
        </div>
        <div className="col-span-2 text-right">
          <p className="text-[#E5B868] text-xs font-bold tracking-widest uppercase">Rate (USD)</p>
        </div>
      </div>

      <div className="border border-[#E5B868]/20 border-t-0 rounded-b-2xl overflow-hidden">
        {rows.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-12 gap-4 px-8 py-6 border-b border-white/5
                        transition-all duration-200 hover:bg-[#E5B868]/5 last:border-b-0
                        ${index % 2 === 0 ? "bg-black/40" : "bg-black/20"}`}
          >
            <div className="md:col-span-3">
              <p className="text-white font-bold text-lg">{item.service}</p>
              {item.subtitle && <p className="text-white/40 text-sm mt-1">{item.subtitle}</p>}
            </div>
            <div className="md:col-span-7">
              <p className="text-white/60 leading-relaxed">{item.description}</p>
            </div>
            <div className="md:col-span-2 md:text-right">
              <p className="text-[#E5B868] font-bold text-xl">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
