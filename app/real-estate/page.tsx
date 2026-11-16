import Link from 'next/link';
import { CtaBand, JsonLd } from '@/components/ui';
import { Journey } from '@/components/interactive';
import { RE_MODULES } from '@/lib/content';
import { breadcrumbLd, pageMeta, serviceLd } from '@/lib/seo';
import { ReNav, ReSections } from './shared';

const description = 'Real estate CRM on Bitrix24 for India: property inventory, website-to-CRM listings, buyer and tenant leads, site visits and bookings for brokers, agencies and builders.';

export const metadata = pageMeta({
  title: 'Real Estate CRM on Bitrix24 for India',
  ogTitle: 'From listing to booking, in one system.',
  description,
  path: '/real-estate',
  keywords: ['real estate CRM India', 'real estate CRM Bengaluru', 'Bitrix24 real estate', 'CRM for real estate brokers', 'property CRM']
});

export default function RealEstate() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Real Estate', '/real-estate']]), serviceLd({ name: 'Real estate CRM on Bitrix24', serviceType: 'Real estate CRM implementation', description, path: '/real-estate' })]} />
      <section className="sec dark">
        <div className="wrap g2" style={{ alignItems: 'center' }}>
          <div className="stack" style={{ gap: 22 }}>
            <p className="eyebrow" style={{ margin: 0 }}>Real estate CRM on Bitrix24</p>
            <h1 className="d1">From listing to booking, in one system.</h1>
            <p className="lead">A Bitrix24 solution for how property is sold in India, shaped by daily work with brokers, agents and buyers.</p>
            <div className="row btns">
              <Link className="btn primary" href="/contact?interest=real-estate">Book a property CRM demo</Link>
              <Link className="btn ghost" href="/contact?type=audit&interest=real-estate">Audit my current setup</Link>
            </div>
          </div>
          <Journey />
        </div>
      </section>
      <ReNav current="/real-estate" />
      <section className="sec">
        <div className="wrap">
          <div className="head"><h2 className="d2">One solution, three modules.</h2><p className="lead">We start with brokers, because that is where our own work began.</p></div>
          <div className="g3">
            {RE_MODULES.map((m) => (
              <Link key={m.slug} className="card" href={`/real-estate/${m.slug}`}>
                <span className={m.first ? 'pill ember' : 'pill line'}>{m.status}</span>
                <h3 className="d3">{m.label}</h3>
                <p className="body">{m.text}</p>
                <span className="linkbtn">Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ReSections />
      <CtaBand />
    </>
  );
}
