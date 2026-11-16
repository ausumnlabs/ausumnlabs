import { JsonLd } from '@/components/ui';
import { Backdrop } from '@/components/Hero';
import { TILES } from '@/lib/hero-tiles';
import ContactForm, { type Mode } from '@/components/ContactForm';
import { Icon, type IconName } from '@/components/Icon';
import { INTERESTS } from '@/lib/form';
import { INDUSTRIES } from '@/lib/content';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Contact Ausumn Labs: Book a Bitrix24 Demo',
  ogTitle: 'See your own sales process inside Bitrix24.',
  description: 'Book a free Bitrix24 demo or CRM audit, or talk to us about a website, mobile app or IT project. Call +91 93680 79747 or WhatsApp Ausumn Labs, Bengaluru.',
  path: '/contact',
  keywords: ['Bitrix24 demo', 'contact Bitrix24 partner Bengaluru', 'free CRM audit']
});

const INTEREST_KEYS: Record<string, string> = {
  'real-estate': 'Real estate CRM', bitrix24: 'Bitrix24 CRM setup', ai: 'AI and automation', plans: 'Plans and pricing',
  'on-premise': 'On-Premise', migration: 'Migration', web: 'Website or web app', mobile: 'Mobile app',
  data: 'Data and dashboards', cloud: 'Cloud and DevOps', consulting: 'IT consulting'
};
const PROJECT_KEYS = ['web', 'mobile', 'data', 'cloud', 'consulting'];

const COPY: Record<Mode, { badge: string; title: [string, string, string]; lead: string; get: Array<[IconName, string, string]> }> = {
  demo: {
    badge: 'Free demo · No obligation',
    title: ['See ', 'your own', ' sales process inside Bitrix24.'],
    lead: 'Tell us how you sell today. We will show you where leads slip, and how to fix it.',
    get: [
      ['chart', 'Your pipeline, mapped live', 'Your stages, sources and team, set up in Bitrix24 while we talk.'],
      ['search', 'The gaps, named', 'Where enquiries are lost: missed calls, WhatsApp, portals, follow-ups.'],
      ['file', 'A clear plan and quote', 'The right Bitrix24 plan for your team size, in rupees, and what setup involves.']
    ]
  },
  audit: {
    badge: 'Free CRM audit · No obligation',
    title: ['Find out what your CRM ', 'is missing', '.'],
    lead: 'Already on Bitrix24 or another CRM? We review your setup and tell you what to fix first.',
    get: [
      ['search', 'A review of your setup', 'Pipelines, fields, automation, integrations and user access.'],
      ['clock', 'Where time and leads are lost', 'Manual steps, missed follow-ups and reports built by hand.'],
      ['file', 'A prioritised fix list', 'What to change first, and what it takes.']
    ]
  },
  project: {
    badge: 'Websites · Apps · AI · Cloud',
    title: ['Tell us what you ', 'want to build', '.'],
    lead: 'Websites, web apps, mobile apps, AI and cloud projects, connected to your CRM from day one.',
    get: [
      ['monitor', 'A clear scope', 'Users, screens and must-haves agreed before any build starts.'],
      ['chart', 'A plan and estimate', 'Timeline, technology and cost, in writing.'],
      ['users', 'One accountable team', 'Design, build, launch and support from Bengaluru.']
    ]
  }
};

type P = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function Contact({ searchParams }: P) {
  const sp = await searchParams;
  const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) || '';
  const key = one(sp.interest);
  const type = one(sp.type);
  const mode: Mode = type === 'audit' ? 'audit' : type === 'project' || PROJECT_KEYS.includes(key) ? 'project' : 'demo';
  const interest = INTEREST_KEYS[key] || (INDUSTRIES.some((x) => x.slug === key) ? 'Bitrix24 CRM setup' : mode === 'project' ? 'Website or web app' : INTERESTS[0]);
  const plan = one(sp.plan).slice(0, 40);
  const industry = INDUSTRIES.find((x) => x.slug === key);
  const topic = one(sp.topic).slice(0, 60);
  const note = industry ? `Industry: ${industry.label}.${topic ? ` Interested in: ${topic}.` : ''}` : undefined;
  const c = COPY[mode];

  const contactLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${SITE.url}/contact`,
    mainEntity: { '@id': `${SITE.url}/#localbusiness` }
  };

  return (
    <>
      <JsonLd data={[breadcrumbLd([['Contact', '/contact']]), contactLd]} />
      <section className="sec hero-light">
        <Backdrop tiles={TILES.contact} compact />
        <div className="wrap g2 c-grid">
          <div className="stack c-left" style={{ gap: 28 }}>
            <div className="stack c-intro" style={{ gap: 18 }}>
              <span className="badge">{c.badge}</span>
              <h1 className="d1" style={{ fontSize: 'clamp(38px, 4.8vw, 64px)' }}>{c.title[0]}<span className="serif">{c.title[1]}</span>{c.title[2]}</h1>
              <p className="lead">{c.lead}</p>
            </div>
            <div className="c-why">
              <h2>What you get</h2>
              {c.get.map(([icon, t, d]) => (
                <div className="ok-row" key={t}>
                  <span className="ic" style={{ width: 40, height: 40, borderRadius: 10 }}><Icon name={icon} size={20} /></span>
                  <div><b>{t}</b><span>{d}</span></div>
                </div>
              ))}
            </div>
            <div className="row btns c-btns">
              <a className="btn wa-btn" href={SITE.whatsapp} target="_blank" rel="noopener"><Icon name="chat" size={18} />WhatsApp now</a>
              <a className="btn ghost" href={SITE.phoneHref}><Icon name="call" size={18} />{SITE.phone}</a>
            </div>
            <p className="small c-addr">
              <a href={`mailto:${SITE.email}`} style={{ color: 'var(--amber)' }}>{SITE.email}</a><br />
              {SITE.legalName}, {SITE.address.street}, {SITE.address.city} {SITE.address.postal}
            </p>
          </div>
          <div className="form-card">
            <ContactForm key={mode} initialMode={mode} initialInterest={interest} plan={plan || undefined} note={note} />
          </div>
        </div>
      </section>
      <section className="sec white tight">
        <div className="wrap">
          <div className="head"><h2 className="d2">What happens after you submit</h2></div>
          <div className="nsteps">
            <div className="nstep"><h3 className="h4">We call you</h3><p>One of our team contacts you to understand the need.</p></div>
            <div className="nstep"><h3 className="h4">We prepare</h3><p>We look at your process and current tools.</p></div>
            <div className="nstep"><h3 className="h4">You see it live</h3><p>A demo around your own workflow, online or at your office.</p></div>
            <div className="nstep"><h3 className="h4">You decide</h3><p>A clear plan and quote. No pressure.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
