# Ausumn Labs website

The ausumnlabs.in website, built with Next.js 15 (App Router, TypeScript). It runs on Fly.io in the Mumbai region (`bom`).

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in BITRIX24_WEBHOOK_URL
npm run dev                  # http://localhost:3000
```

## Where things live

| What | Where |
| --- | --- |
| All page copy and data (Bitrix24, AI, services, industries, plans, guides, FAQs) | `lib/content.ts` |
| Menu, footer links, phone, email, address | `lib/site.ts` |
| SEO helpers (meta tags, JSON-LD schema) | `lib/seo.ts` |
| 301 redirects from the old WordPress URLs | `lib/redirects.ts` |
| Styles (brand orange `#F89924`, grey `#58595B`) | `app/globals.css` |
| Logos | `public/brand/` |
| Website form to Bitrix24 lead | `app/api/lead/route.ts` |

To add a service page, add an entry to `SERVICES` in `lib/content.ts`. The page, sitemap and schema follow automatically. Add its menu link in `lib/site.ts`. Guides work the same way through `GUIDES`.

## SEO built in

- Each page has its own title, description, keywords and canonical URL, plus Open Graph and Twitter tags.
- Social preview images are generated at `/og?title=...`.
- JSON-LD schema: Organization, ProfessionalService (local business), WebSite, Service, BreadcrumbList, FAQPage, Article and ContactPage.
- `/sitemap.xml` and `/robots.txt` are generated from the content lists.
- Old WordPress URLs redirect permanently to the new pages, for example `/bitrix-24/` → `/bitrix24`.
- Service landing pages target Bitrix24 partner and implementation, Bitrix24 CRM, custom web development, mobile app development, AI solutions, data analytics, cloud and DevOps, and IT consulting in Bengaluru and India.

## Connect the form to Bitrix24

1. In Bitrix24, go to **Developer resources → Other → Inbound webhook**.
2. Give it the **CRM (crm)** permission and save. Copy the URL, which looks like `https://YOURPORTAL.bitrix24.in/rest/1/xxxxxxxx/`.
3. Set it as the `BITRIX24_WEBHOOK_URL` secret (see deploy steps). Each form submission creates a lead with source "Website", any UTM tags, and the page it came from.

Optional settings:

- `BITRIX24_ASSIGNED_BY_ID` gives every website lead to one user.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` add Cloudflare Turnstile spam protection. A honeypot field and a rate limit are always on.

## Deploy to Fly.io

```bash
# one time
fly auth login
fly launch --no-deploy --copy-config --name ausumnlabs-web --region bom
fly secrets set BITRIX24_WEBHOOK_URL="https://YOURPORTAL.bitrix24.in/rest/1/xxxxxxxx/"
# optional: fly secrets set BITRIX24_ASSIGNED_BY_ID=1 TURNSTILE_SECRET_KEY=...

# every release
fly deploy
```

`NEXT_PUBLIC_*` values are built into the page code. Set them under `[build.args]` in `fly.toml`, or pass them with `fly deploy --build-arg NEXT_PUBLIC_GA_ID=G-XXXX`. Do not put them in `fly secrets`.

### Point the domain at Fly

```bash
fly certs add ausumnlabs.in
fly certs add www.ausumnlabs.in
fly ips list        # note the IPv4 and IPv6
```

At your DNS provider:

- Set the `A` record for `ausumnlabs.in` to the Fly IPv4 address, and the `AAAA` record to the Fly IPv6 address.
- Set `www` as a `CNAME` to `ausumnlabs-web.fly.dev`.

Leave every other DNS record unchanged, including email (MX, SPF, DKIM) and any Bitrix24 subdomains.

Keep the WordPress site running until the new site is checked on `https://ausumnlabs-web.fly.dev`. Then switch DNS.

### After launch

1. Add the site to Google Search Console. Set `NEXT_PUBLIC_GSC_VERIFICATION`, or verify through DNS.
2. Submit `https://ausumnlabs.in/sitemap.xml` in Search Console.
3. Optionally, set `NEXT_PUBLIC_GA_ID` to turn on Google Analytics 4.
4. Update the website link on your Google Business Profile and on the Bitrix24 partner listing.

## Before going live, check

- Have someone qualified review the privacy policy and terms (`app/privacy`, `app/terms`).
- Check the list of services and technologies in `lib/content.ts`, so it matches what you deliver.
- Plan prices are Bitrix24 global US$ list prices. Update them in `PLAN_ROWS` when Bitrix24 changes them.
- Add case studies, client logos, team photos and the official Silver Partner badge once you have permission and artwork.
