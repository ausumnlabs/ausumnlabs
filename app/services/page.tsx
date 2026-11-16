import Link from 'next/link';
import { CtaBand, JsonLd, PageHero, Steps } from '@/components/ui';
import { TILES } from '@/lib/hero-tiles';
import { SERVICES } from '@/lib/content';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Services: Bitrix24, Web, Mobile, AI and IT Solutions',
  ogTitle: 'One team, from setup to everyday use.',
  description: 'Ausumn Labs services in Bengaluru: Bitrix24 implementation, migration and customization, custom web development, mobile apps, AI solutions, data analytics, cloud and IT consulting.',
  path: '/services',
  keywords: ['IT services Bengaluru', 'Bitrix24 services', 'web and mobile app development Bengaluru', 'complete IT solutions India']
});

export default function ServicesPage() {
  const groups: Array<[string, string, 'bitrix24' | 'build']> = [
    ['Bitrix24 services', 'Plan, set up, connect and support your Bitrix24.', 'bitrix24'],
    ['Development and IT services', 'Websites, apps, AI, data and cloud, built around your CRM.', 'build']
  ];
  const list = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: SERVICES.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.label, url: `${SITE.url}/services/${s.slug}` }))
  };
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Services', '/services']]), list]} />
      <PageHero eyebrow="Services" title="One team, from setup to everyday use." lead="We plan, build, connect and support your Bitrix24, and build the websites, apps and automation around it, so you never have to chase separate vendors." tiles={TILES.services} />
      {groups.map(([title, lead, g], n) => (
        <section key={g} className={n ? 'sec white line' : 'sec'}>
          <div className="wrap">
            <div className="head"><h2 className="d2">{title}</h2><p className="lead">{lead}</p></div>
            <div className="svc-grid">
              {SERVICES.filter((s) => s.group === g).map((s) => (
                <Link key={s.slug} className="card" href={`/services/${s.slug}`}>
                  <span className="pill">{s.tag}</span>
                  <h3 className="d3">{s.label}</h3>
                  <p className="body">{s.text}</p>
                  <span className="linkbtn">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="sec line">
        <div className="wrap">
          <div className="head"><p className="eyebrow" style={{ margin: 0 }}>How we work</p><h2 className="d2">The same steps, whatever we build.</h2></div>
          <Steps items={[{ t: 'Discover', d: 'We learn how you work today.' }, { t: 'Plan', d: 'Scope, timeline and quote, in writing.' }, { t: 'Build', d: 'Delivered in small steps you can review.' }, { t: 'Launch', d: 'Go live with training.' }, { t: 'Support', d: 'We stay on to improve it.' }]} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
