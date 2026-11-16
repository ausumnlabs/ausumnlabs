import type { Metadata } from 'next';
import { SITE } from './site';

type MetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogTitle?: string;
  type?: 'website' | 'article';
};

export function pageMeta({ title, description, path, keywords, ogTitle, type = 'website' }: MetaInput): Metadata {
  const url = path === '/' ? SITE.url : `${SITE.url}${path}`;
  const og = `/og?title=${encodeURIComponent(ogTitle || title)}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: `${title} | ${SITE.name}`,
      description,
      siteName: SITE.name,
      locale: 'en_IN',
      images: [{ url: og, width: 1200, height: 630, alt: ogTitle || title }]
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${SITE.name}`, description, images: [og] }
  };
}

export const abs = (path: string) => (path === '/' ? SITE.url : `${SITE.url}${path}`);

export function breadcrumbLd(trail: Array<[string, string]>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [['Home', '/'] as [string, string]].concat(trail).map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: abs(path)
    }))
  };
}

export function faqLd(items: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };
}

export function serviceLd(opts: { name: string; description: string; path: string; serviceType: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: abs(opts.path),
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: [
      { '@type': 'City', name: 'Bengaluru' },
      { '@type': 'Country', name: 'India' }
    ]
  };
}

export function orgLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      logo: `${SITE.url}/brand/ausumn-labs.svg`,
      email: SITE.email,
      telephone: SITE.phone,
      slogan: 'Complete IT Solutions',
      description: SITE.description,
      knowsAbout: [
        'Bitrix24', 'Bitrix24 CRM', 'CRM implementation', 'Real estate CRM', 'Business process automation',
        'Custom web development', 'Mobile app development', 'Artificial intelligence', 'Data analytics', 'Cloud computing', 'IT consulting'
      ],
      contactPoint: [{ '@type': 'ContactPoint', telephone: SITE.phone, email: SITE.email, contactType: 'sales', areaServed: 'IN', availableLanguage: ['en', 'hi'] }]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${SITE.url}/#localbusiness`,
      name: `${SITE.name}: Bitrix24 Partner and IT Solutions`,
      parentOrganization: { '@id': `${SITE.url}/#organization` },
      url: SITE.url,
      image: `${SITE.url}/brand/ausumn-labs.svg`,
      telephone: SITE.phone,
      email: SITE.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postal,
        addressCountry: SITE.address.country
      },
      areaServed: [{ '@type': 'City', name: 'Bengaluru' }, { '@type': 'Country', name: 'India' }],
      priceRange: '₹₹'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { '@id': `${SITE.url}/#organization` },
      inLanguage: 'en-IN'
    }
  ];
}
