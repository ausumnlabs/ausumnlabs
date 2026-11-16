import { JsonLd } from '@/components/ui';
import ContactForm from '@/components/ContactForm';
import { INTERESTS } from '@/lib/form';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Contact Ausumn Labs: Book a Bitrix24 Demo',
  ogTitle: 'See Bitrix24 around your own process.',
  description: 'Book a Bitrix24 demo or a free CRM audit, or talk to us about a website, mobile app or IT project. Call +91 93680 79747 or WhatsApp Ausumn Labs, Bengaluru.',
  path: '/contact',
  keywords: ['Bitrix24 demo', 'contact Bitrix24 partner Bengaluru', 'free CRM audit']
});

const INTEREST_KEYS: Record<string, string> = {
  'real-estate': 'Real estate CRM', bitrix24: 'Bitrix24 CRM setup', ai: 'AI and automation', plans: 'Plans and pricing',
  'on-premise': 'On-Premise', migration: 'Migration', web: 'Website or web app', mobile: 'Mobile app',
  data: 'Data and dashboards', cloud: 'Cloud and DevOps', consulting: 'IT consulting'
};

type P = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function Contact({ searchParams }: P) {
  const sp = await searchParams;
  const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) || '';
  const mode = one(sp.type) === 'audit' ? 'audit' : 'demo';
  const interest = INTEREST_KEYS[one(sp.interest)] || INTERESTS[0];
  const plan = one(sp.plan).slice(0, 40);
  const isDemo = mode === 'demo';

  const contactLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${SITE.url}/contact`,
    mainEntity: { '@id': `${SITE.url}/#localbusiness` }
  };

  return (
    <>
      <JsonLd data={[breadcrumbLd([['Contact', '/contact']]), contactLd]} />
      <section className="sec">
        <div className="wrap g2">
          <div className="stack" style={{ gap: 22 }}>
            <p className="eyebrow" style={{ margin: 0 }}>Talk to Ausumn Labs</p>
            <h1 className="d1">{isDemo ? 'See Bitrix24 around your own process.' : 'Find out what your CRM is missing.'}</h1>
            <p className="lead">{isDemo ? 'Tell us how you sell today, and we will tailor the demo. Planning a website, app or IT project? Use the same form.' : 'We will review your setup, or your plans, and point out what to fix first.'}</p>
            <div className="stack" style={{ gap: 2 }}>
              <a className="btn ghost" style={{ justifyContent: 'flex-start' }} href={SITE.phoneHref}>Call {SITE.phone}</a>
            </div>
            <div className="row">
              <a className="linkbtn" href={SITE.whatsapp} target="_blank" rel="noopener">WhatsApp us →</a>
              <a className="linkbtn" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <address className="small" style={{ fontStyle: 'normal' }}>{SITE.legalName}<br />{SITE.address.street}, {SITE.address.city} {SITE.address.postal}</address>
          </div>
          <div className="card" style={{ padding: 'clamp(22px, 3vw, 36px)' }}>
            <ContactForm initialMode={mode} initialInterest={interest} plan={plan || undefined} />
          </div>
        </div>
      </section>
      <section className="sec white line tight">
        <div className="wrap">
          <div className="steps">
            <div className="step"><h2 className="h4">We reply</h2><p className="small">One of our team contacts you to understand the need.</p></div>
            <div className="step"><h2 className="h4">We review</h2><p className="small">We look at your process and current tools.</p></div>
            <div className="step"><h2 className="h4">We show</h2><p className="small">You see a demo around your own workflow.</p></div>
            <div className="step"><h2 className="h4">You decide</h2><p className="small">You get a clear plan and quote.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
