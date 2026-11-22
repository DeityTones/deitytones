"use client"
import { useState } from "react"
import { minQty, money, payableServices, quoteService, type PayableService } from "@/lib/pricing"
import { visibleTemplates } from "@/data/shop"

const button =
  "w-full mt-6 px-8 py-3 rounded-full bg-[#E5B868] text-black font-bold hover:scale-[1.02] transition-transform duration-200 disabled:opacity-50"
const card = "flex flex-col bg-black/40 backdrop-blur-sm rounded-2xl p-7 border border-white/10"

function ServiceForm({ service }: { service: PayableService }) {
  const c = service.checkout
  const [qty, setQty] = useState(minQty(service))
  const [addOn, setAddOn] = useState(false)
  const [sending, setSending] = useState(false)
  const quote = quoteService(service.id, qty, addOn)

  return (
    <form action="/api/checkout" method="POST" onSubmit={() => setSending(true)} className={card}>
      <input type="hidden" name="kind" value="service" />
      <input type="hidden" name="item" value={service.id} />
      <h3 className="text-2xl font-bold text-white mb-1">{service.name}</h3>
      <p className="text-white/50 text-sm mb-5">
        {service.price} {service.priceNote}
      </p>

      {c.maxQty > 1 && (
        <label className="text-white/80 text-sm font-semibold">
          Number of {c.unit}s
          <input
            type="number"
            name="qty"
            min={minQty(service)}
            max={c.maxQty}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="mt-2 w-full rounded-lg bg-black/60 border border-white/20 px-4 py-2 text-white"
          />
        </label>
      )}
      {c.maxQty === 1 && <input type="hidden" name="qty" value="1" />}

      {c.addOn && (
        <label className="flex gap-3 items-start text-white/70 text-sm mt-4">
          <input type="checkbox" name="addon" checked={addOn} onChange={(e) => setAddOn(e.target.checked)} className="mt-1" />
          {c.addOn.label}
        </label>
      )}

      <div className="mt-auto pt-5 border-t border-white/10 mt-6 text-sm text-white/60 space-y-1">
        {quote ? (
          <>
            <p>Project total: <span className="text-white">{money(quote.totalCents)}</span></p>
            {!quote.payInFull && (
              <p>Balance later: <span className="text-white">{money(quote.balanceCents)}</span>, due before final files</p>
            )}
            <p className="text-[#E5B868] font-bold text-2xl pt-2">
              {quote.payInFull ? "Pay" : "Deposit"} today: {money(quote.dueNowCents)}
            </p>
          </>
        ) : (
          <p>Enter {minQty(service)} to {c.maxQty} {c.unit}s.</p>
        )}
      </div>

      <button type="submit" disabled={!quote || sending} className={button}>
        {sending ? "Opening secure checkout…" : quote?.payInFull ? "Pay Now" : "Pay Deposit"}
      </button>
    </form>
  )
}

export default function PayForms() {
  return (
    <>
      <section className="mb-16">
        <p className="text-[#E5B868] text-xs font-semibold tracking-widest uppercase mb-5">Book a Service</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {payableServices.map((s) => (
            <ServiceForm key={s.id} service={s} />
          ))}
        </div>
        <p className="text-white/50 text-sm mt-6">
          Long-form editing and custom projects are quoted first. Once you approve the quote, we&apos;ll email you a
          secure Stripe invoice for the deposit.
        </p>
      </section>

      {visibleTemplates.length > 0 && (
        <section id="templates" className="mb-16 scroll-mt-28">
          <p className="text-[#E5B868] text-xs font-semibold tracking-widest uppercase mb-5">Templates</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTemplates.map((t) => (
              <form key={t.id} action="/api/checkout" method="POST" className={card}>
                <input type="hidden" name="kind" value="template" />
                <input type="hidden" name="item" value={t.id} />
                <h3 className="text-2xl font-bold text-white mb-2">{t.name}</h3>
                <p className="text-white/60 leading-relaxed flex-grow">{t.description}</p>
                <p className="text-[#E5B868] font-bold text-2xl mt-6">{money(t.priceCents)}</p>
                <button type="submit" className={button}>Buy Template</button>
              </form>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
