# T The Pharaoh — Official Site

Next.js 16 (App Router) + React 19 + Tailwind CSS v4. Every page is static; the
booking form posts to Web3Forms from the browser.

## Pages

| Route        | What it is                                    |
| ------------ | --------------------------------------------- |
| `/`          | Home: hero and services overview              |
| `/music`     | 30-second previews and streaming links        |
| `/portfolio` | Performances and videos                       |
| `/community` | Coming-soon world building page               |
| `/contact`   | Services, rates and booking form              |
| `/epk`       | Press kit (linked from the footer)            |

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Where to edit content

- Tracks: `src/data/tracks.ts`. Preview clips go in `public/music/previews/`,
  cover art in `public/music/covers/`. Only upload short previews, never full masters:
  everything in `public/` is downloadable.
- Rates and services: top of `src/app/contact/page.tsx`.
- Bio, press photos, videos: top of `src/app/epk/page.tsx`.
- Page titles and descriptions: `src/app/layout.tsx` and each route's `layout.tsx`.
- Share image: `src/app/opengraph-image.jpg` (1200×630).

## Deploy (Vercel)

1. Import this repo at vercel.com/new (framework preset: Next.js, no settings needed).
2. Add your domain under Project → Settings → Domains and follow the DNS steps.
3. Set the environment variable `NEXT_PUBLIC_SITE_URL` to `https://yourdomain.com`
   so share links, `sitemap.xml` and `robots.txt` use your domain.
