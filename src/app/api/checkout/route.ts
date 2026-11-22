import { NextResponse, type NextRequest } from "next/server"
import type Stripe from "stripe"
import { automaticTaxOn, getStripe } from "@/lib/stripe"
import { findTemplate, money, quoteService } from "@/lib/pricing"
import { DEPOSIT_PERCENT } from "@/data/shop"

// Starts a Stripe Checkout payment from the forms on /pay.
// Prices are always worked out here on the server from
// src/data/services.ts and src/data/shop.ts, never taken
// from the browser.

export const runtime = "nodejs"

const back = (req: NextRequest, error: string) =>
  NextResponse.redirect(new URL(`/pay?error=${error}`, req.nextUrl.origin), 303)

export async function POST(req: NextRequest) {
  const stripe = getStripe()
  if (!stripe) return back(req, "not-configured")

  const form = await req.formData()
  const kind = String(form.get("kind") ?? "")
  const item = String(form.get("item") ?? "")
  const origin = req.nextUrl.origin
  const taxOn = automaticTaxOn()

  let params: Stripe.Checkout.SessionCreateParams

  if (kind === "service") {
    const quote = quoteService(item, Number(form.get("qty")), form.get("addon") === "on")
    if (!quote) return back(req, "invalid")
    const { service, qty, addOn } = quote
    const unit = qty === 1 ? service.checkout.unit : `${service.checkout.unit}s`
    const what = `${service.name}, ${qty} ${unit}${addOn ? " + Light Master" : ""}`

    params = {
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: quote.dueNowCents,
            tax_behavior: "exclusive",
            product_data: {
              name: quote.payInFull ? what : `Deposit (${DEPOSIT_PERCENT}%): ${what}`,
              description: quote.payInFull
                ? "Paid in full."
                : `Project total ${money(quote.totalCents)}. Balance of ${money(quote.balanceCents)} is due before final files are delivered.`,
            },
          },
        },
      ],
      // Saves the client in Stripe so the balance invoice goes to the same record
      customer_creation: "always",
      custom_text: {
        submit: {
          message: quote.payInFull
            ? "After paying, you'll pick your start time on the next page."
            : "Deposits are non-refundable once work begins. The balance is due before final files are delivered.",
        },
      },
      metadata: {
        kind: "service",
        item: service.id,
        qty: String(qty),
        add_on: addOn ? "light-master" : "",
        total_cents: String(quote.totalCents),
        paid_now_cents: String(quote.dueNowCents),
        balance_cents: String(quote.balanceCents),
      },
      integration_identifier: "deitytones_deposit_kzqwhrnb",
    }
  } else if (kind === "template") {
    const t = findTemplate(item)
    if (!t) return back(req, "invalid")
    params = {
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: t.priceCents,
            tax_behavior: "exclusive",
            product_data: { name: t.name, description: t.description },
          },
        },
      ],
      custom_text: {
        submit: { message: "Digital templates are delivered right after payment and are non-refundable after delivery." },
      },
      metadata: { kind: "template", item: t.id },
      integration_identifier: "deitytones_template_pvlxcfmo",
    }
  } else {
    return back(req, "invalid")
  }

  params.success_url = `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`
  params.cancel_url = `${origin}/pay?canceled=1`
  params.payment_intent_data = { metadata: params.metadata }
  if (taxOn) {
    params.automatic_tax = { enabled: true }
    // A full US address lets Stripe work out the right state and local tax
    params.billing_address_collection = "required"
  }

  try {
    const session = await stripe.checkout.sessions.create(params)
    if (!session.url) return back(req, "stripe")
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    console.error("[stripe] checkout session failed", err)
    return back(req, "stripe")
  }
}
