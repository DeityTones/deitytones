# Stripe setup: deposits, invoices and sales tax

This site takes payments three ways:

| What | How | Code? |
| --- | --- | --- |
| Deposits for fixed-price services (50%, Artist Portal paid in full) | `/pay` → Stripe Checkout | Yes, in this repo |
| Digital templates | `/pay#templates` → Stripe Checkout → link shown after payment | Yes, in this repo |
| Balances, and deposits for quoted work (long-form, custom) | Stripe Invoicing, sent from the Stripe Dashboard | No code |
| Sales tax | Stripe Tax, on Checkout and invoices | Switch only |

**Never paste a secret or restricted key into chat, email, GitHub or any file in this repo.** Keys go only in Vercel's environment variables.

## 1. Test mode first

1. In the Stripe Dashboard, switch to a **sandbox** (top left account menu → Sandboxes → create one), or use Test mode.
2. Developers → API keys → **Create restricted key**. Name it `tthepharaoh.net website`. Give it **Checkout Sessions: Write** and leave everything else as None. If a test payment later fails with a message naming another permission, add only that one.
3. Copy the key (starts with `rk_test_`).

## 2. Add keys to Vercel

Vercel → the project → Settings → Environment Variables. Add each one for **Preview** only while testing:

| Name | Value |
| --- | --- |
| `STRIPE_SECRET_KEY` | the `rk_test_...` key |
| `STRIPE_WEBHOOK_SECRET` | from step 3 (`whsec_...`) |
| `STRIPE_AUTOMATIC_TAX` | `off` for now |
| `TEMPLATE_URL_ARTIST_PORTAL_SHEET` | the Google Sheet "Make a copy" link |

Redeploy the preview after adding them.

## 3. Webhook

Stripe Dashboard → Developers → Webhooks → **Add destination**:

- URL: `https://<preview-or-live-domain>/api/stripe/webhook`
- Events: `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `checkout.session.async_payment_failed`, `invoice.paid`, `charge.dispute.created`

Copy its signing secret into `STRIPE_WEBHOOK_SECRET`. Vercel locks preview sites by default (Settings → Deployment Protection → Vercel Authentication), which also blocks Stripe: turn it off while testing on a preview and back on afterwards. Paid orders show in Vercel → Logs (search `[stripe]`). Webhooks are required: Stripe sends them even when a client closes the tab before the thank-you page.

## 4. Test a payment

On the preview site open `/pay`, pick a service, and pay with card `4242 4242 4242 4242`, any future date, any CVC and ZIP. Check: the thank-you page, the payment in Stripe → Payments, the customer in Stripe → Customers, and a `[stripe] paid` line in Vercel Logs.

## 5. Balance invoices (no code)

Stripe Dashboard → Invoices → **Create invoice** → pick the client (the deposit saved them as a customer) → add a line like "Mixing balance, 4 songs" for the balance shown in the payment's metadata (`balance_cents`) → Send. The client pays by card on Stripe's invoice page. Set your logo and colors once under Settings → Branding, and a footer under Settings → Invoicing.

## 6. Sales tax (after your CPA confirms)

1. Stripe → Tax → Settings: add your business address and choose a **default product tax code** for what you sell. Pick it from Stripe's list (<https://docs.stripe.com/tax/tax-codes>) with your CPA. Digital templates and online services may need different codes.
2. Prices on the site are shown **before tax** and tax is added at checkout (`tax_behavior: exclusive`).
3. Stripe → Tax → Registrations: add each state where you're registered to collect tax. **With no registration, Stripe collects $0 tax even when tax is on.**
4. Set `STRIPE_AUTOMATIC_TAX` to `on` in Vercel and redeploy. Checkout then asks for the client's billing address. Turn on automatic tax on each invoice too.

## 7. Go live

Repeat steps 1–3 in live mode (key starts with `rk_live_`), put the live values on the **Production** environment in Vercel, add a live webhook for `https://tthepharaoh.net/api/stripe/webhook`, and redeploy. Run through Stripe's go-live checklist: <https://docs.stripe.com/get-started/checklist/go-live>.

## Where things live in the code

- Prices: `src/data/services.ts` (`checkout` on each service, amounts in cents)
- Deposit size and templates: `src/data/shop.ts`
- Price math: `src/lib/pricing.ts`
- Starts checkout: `src/app/api/checkout/route.ts`
- Webhook: `src/app/api/stripe/webhook/route.ts`
- Thank-you page: `src/app/checkout/success/page.tsx`
