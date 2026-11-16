import Link from 'next/link';
import { CtaBand, JsonLd, PageHero, SubNav } from '@/components/ui';
import { TILES } from '@/lib/hero-tiles';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { ABOUT_NAV as aboutNav } from '@/lib/site';

export const metadata = pageMeta({
  title: 'About Ausumn Labs, Bengaluru',
  ogTitle: 'Built around how Indian businesses really sell.',
  description: 'Ausumn Labs (Ausumn Online Services Pvt Ltd) is a Bengaluru technology company and Bitrix24 Silver Partner offering CRM, web, mobile, AI and complete IT solutions.',
  path: '/about',
  keywords: ['Ausumn Labs', 'Ausumn Online Services', 'IT company Bengaluru', 'Bitrix24 partner Bengaluru']
});

export default function About() {
  return (
    <>
      <JsonLd data={breadcrumbLd([['About', '/about']])} />
      <PageHero eyebrow="About us" title="Built around how Indian businesses really sell." tiles={TILES.about} />
      <SubNav label="Company" items={aboutNav} current="/about" />
      <section className="sec">
        <div className="wrap g2">
          <div className="stack" style={{ gap: 18 }}>
            <h2 className="d2">Software is the easy part. Your process comes first.</h2>
            <p className="lead">Ausumn Labs is a Bengaluru technology company and Bitrix24 Silver Partner. Bitrix24 is our main focus, and real estate is where we go deepest.</p>
            <p className="body">Other partners could not deliver the complete real estate solution we wanted, so we started building our own, on our own portal, beginning with brokers.</p>
            <p className="body">Around the CRM, we build what growing businesses need: websites and web apps, mobile apps, AI and automation, dashboards and cloud hosting. One team, accountable for the whole picture.</p>
          </div>
          <div className="card">
            <h3 className="h4">What you can expect</h3>
            <ul className="check">
              <li>We start with your business, not with software.</li>
              <li>One team owns the work from start to finish.</li>
              <li>You get clear updates at each stage.</li>
              <li>We stay on after go-live.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec white line">
        <div className="wrap">
          <div className="head"><p className="eyebrow" style={{ margin: 0 }}>What we do</p><h2 className="d2">Complete IT solutions, centred on your CRM.</h2></div>
          <div className="g4">
            <Link className="card" href="/bitrix24"><h3 className="h4">Bitrix24 CRM</h3><p className="body">Implementation, migration, customization and support.</p></Link>
            <Link className="card" href="/services/web-development"><h3 className="h4">Web and mobile</h3><p className="body">Websites, web apps and Android and iOS apps.</p></Link>
            <Link className="card" href="/services/ai-solutions"><h3 className="h4">AI and data</h3><p className="body">Assistants, automation, dashboards and reports.</p></Link>
            <Link className="card" href="/services/it-consulting"><h3 className="h4">IT consulting</h3><p className="body">Roadmaps, integrations, cloud and ongoing support.</p></Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
