import { services, type CheckoutPricing, type Service } from "@/data/services"
import { DEPOSIT_PERCENT, shopTemplates } from "@/data/shop"

// Shared by the /pay page (to show totals) and the checkout API
// (to charge). The API always recalculates on the server, so a
// visitor can't change what they pay.

export type PayableService = Service & { checkout: CheckoutPricing }

export const payableServices = services.filter(
  (s): s is PayableService => s.showOnSite && !!s.checkout,
)

export type ServiceQuote = {
  service: PayableService
  qty: number
  addOn: boolean
  totalCents: number
  dueNowCents: number
  balanceCents: number
  payInFull: boolean
}

export const minQty = (s: PayableService) => s.checkout.base?.qty ?? 1

export function quoteService(serviceId: string, qtyIn: number, addOnIn: boolean): ServiceQuote | null {
  const service = payableServices.find((s) => s.id === serviceId)
  if (!service) return null
  const c = service.checkout
  const qty = Math.floor(qtyIn)
  if (!Number.isFinite(qty) || qty < minQty(service) || qty > c.maxQty) return null
  const addOn = !!c.addOn && addOnIn

  let totalCents: number
  if (c.base) {
    totalCents = c.base.cents + (qty - c.base.qty) * c.unitCents
  } else {
    const unit = c.bulk && qty >= c.bulk.minQty ? c.bulk.unitCents : c.unitCents
    totalCents = qty * unit
  }
  if (addOn && c.addOn) totalCents += qty * c.addOn.unitCents

  const payInFull = !!c.payInFull
  const dueNowCents = payInFull ? totalCents : Math.round((totalCents * DEPOSIT_PERCENT) / 100)
  return { service, qty, addOn, totalCents, dueNowCents, balanceCents: totalCents - dueNowCents, payInFull }
}

export function findTemplate(id: string) {
  return shopTemplates.find((t) => t.id === id && t.showOnSite) ?? null
}

export const money = (cents: number) =>
  `$${(cents / 100).toFixed(cents % 100 === 0 ? 0 : 2)}`
