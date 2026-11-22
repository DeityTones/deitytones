import { NextResponse, type NextRequest } from "next/server"
import type Stripe from "stripe"
import { getStripe } from "@/lib/stripe"

// Stripe calls this address when a payment finishes, even if the
// client closes the tab before the thank-you page loads.
// Add it in Stripe: Developers → Webhooks → Add destination,
// URL https://tthepharaoh.net/api/stripe/webhook, with the events
// listed in docs/STRIPE.md.
//
// For now each paid order is written to the Vercel logs (Project →
// Logs, search "[stripe]") and Stripe emails you its own payment
// notice. Automatic emails to clients can be added here later.

export const runtime = "nodejs"

function logOrder(label: string, session: Stripe.Checkout.Session) {
  console.log(
    `[stripe] ${label}`,
    JSON.stringify({
      session: session.id,
      email: session.customer_details?.email,
      name: session.customer_details?.name,
      amount: session.amount_total,
      tax: session.total_details?.amount_tax,
      ...session.metadata,
    }),
  )
}

export async function POST(req: NextRequest) {
  const stripe = getStripe()
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  const signature = req.headers.get("stripe-signature")
  if (!stripe || !secret) return new NextResponse("Not configured", { status: 500 })
  if (!signature) return new NextResponse("Missing signature", { status: 400 })

  let event: Stripe.Event
  try {
    // The raw body is needed to check the signature, so read it as text
    event = stripe.webhooks.constructEvent(await req.text(), signature, secret)
  } catch {
    return new NextResponse("Bad signature", { status: 400 })
  }

  switch (event.type) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_succeeded": {
      const session = event.data.object
      // Some bank payment methods finish later: wait for the money
      if (session.payment_status !== "unpaid") logOrder("paid", session)
      else logOrder("awaiting payment", session)
      break
    }
    case "checkout.session.async_payment_failed":
      logOrder("payment failed", event.data.object)
      break
    case "invoice.paid": {
      const invoice = event.data.object
      console.log(
        "[stripe] invoice paid",
        JSON.stringify({ invoice: invoice.id, number: invoice.number, email: invoice.customer_email, amount: invoice.amount_paid }),
      )
      break
    }
    case "charge.dispute.created":
      console.warn("[stripe] dispute opened", event.data.object.id)
      break
  }

  return NextResponse.json({ received: true })
}
