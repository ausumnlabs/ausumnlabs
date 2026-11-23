// 301 redirects from the old WordPress site (ausumnlabs.in) to the new pages.
// Next.js removes trailing slashes first, so sources are written without them.
type Redirect = { source: string; destination: string; permanent: true; has?: Array<{ type: 'host'; value: string }> };

// Send www.ausumnlabs.in to ausumnlabs.in so Google sees one version of each page.
const wwwToApex: Redirect = {
  source: '/:path*',
  has: [{ type: 'host', value: 'www.ausumnlabs.in' }],
  destination: 'https://ausumnlabs.in/:path*',
  permanent: true
};

const map: Array<[string, string]> = [
  ['/sitemap_index.xml', '/sitemap.xml'],
  ['/page-sitemap.xml', '/sitemap.xml'],
  ['/post-sitemap.xml', '/sitemap.xml'],
  ['/category-sitemap.xml', '/sitemap.xml'],
  ['/sureforms_form-sitemap.xml', '/sitemap.xml'],
  ['/bitrix-24', '/bitrix24'],
  ['/tech', '/services/web-development'],
  ['/solutions', '/services'],
  ['/process', '/services/bitrix24-implementation'],
  ['/projects', '/services'],
  ['/testimonials', '/about'],
  ['/hello-world', '/resources'],
  ['/category/:slug*', '/resources'],
  ['/blog', '/resources'],
  ['/blog/:slug*', '/resources'],
  ['/home', '/'],
  ['/contact-us', '/contact'],
  ['/about-us', '/about'],
  ['/privacy-policy', '/privacy'],
  ['/feed', '/resources'],
  // Old design-tab style links
  ['/company', '/about'],
  ['/realestate', '/real-estate'],
  ['/realestate/:slug', '/real-estate/:slug'],
  ['/plans/onprem', '/plans/on-premise'],
  ['/services/implementation', '/services/bitrix24-implementation'],
  ['/services/migration', '/services/crm-migration'],
  ['/services/customization', '/services/bitrix24-customization'],
  ['/services/comms', '/services/whatsapp-telephony'],
  ['/services/training', '/services/training-support']
];

export const legacyRedirects: Redirect[] = [
  wwwToApex,
  ...map.map(([source, destination]): Redirect => ({ source, destination, permanent: true }))
];
