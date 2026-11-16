// 301 redirects from the old WordPress site (ausumnlabs.in) to the new pages.
// Next.js removes trailing slashes first, so sources are written without them.
type Redirect = { source: string; destination: string; permanent: true };

const map: Array<[string, string]> = [
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

export const legacyRedirects: Redirect[] = map.map(([source, destination]) => ({
  source,
  destination,
  permanent: true
}));
