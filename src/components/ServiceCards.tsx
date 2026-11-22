import { serviceGroups, visibleServices, type Service } from "@/data/services"

// Renders every service with showOnSite: true from src/data/services.ts,
// grouped under its brand heading.
export default function ServiceCards() {
  const groups = (Object.keys(serviceGroups) as Service["group"][])
    .map((g) => ({ id: g, label: serviceGroups[g], items: visibleServices.filter((s) => s.group === g) }))
    .filter((g) => g.items.length > 0)

  return (
    <div className="space-y-14">
      {groups.map((group) => (
        <section key={group.id} id={group.id} className="scroll-mt-32">
          <p className="text-[#E5B868] text-xs font-semibold
                        tracking-widest uppercase mb-5">
            {group.label}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.items.map((s) => (
              <article
                key={s.id}
                className="flex flex-col bg-black/40 backdrop-blur-sm
                           rounded-2xl p-7 border border-white/10
                           hover:border-[#E5B868]/40
                           transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  {s.name}
                </h3>
                <p className="text-[#E5B868] font-bold text-3xl">
                  {s.price}
                </p>
                {s.priceNote && (
                  <p className="text-white/50 text-sm mt-1 mb-4">
                    {s.priceNote}
                  </p>
                )}
                <p className="text-white/70 leading-relaxed mb-4">
                  {s.description}
                </p>
                <ul className="text-white/60 text-sm space-y-2 mb-6">
                  {s.includes.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-[#E5B868]" aria-hidden="true">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-4 border-t border-white/10
                              text-white/50 text-sm">
                  <span className="text-white/80 font-semibold">Turnaround: </span>
                  {s.turnaround}
                </p>
                {s.checkout && (
                  <a
                    href={`/pay#${s.id}`}
                    className="mt-5 text-center px-8 py-3 rounded-full bg-[#E5B868]
                               text-black font-bold hover:scale-[1.02]
                               transition-transform duration-200"
                  >
                    {s.checkout.payInFull ? "Buy Now" : "Pay Deposit"}
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}

      <p className="text-center text-white/50 text-sm max-w-2xl mx-auto">
        50% deposit to book (Artist Portal is paid in full).
        Final files are delivered once the balance is paid.
      </p>
    </div>
  )
}
