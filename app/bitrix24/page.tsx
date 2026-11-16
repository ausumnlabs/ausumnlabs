import Link from 'next/link';
import { CtaBand, JsonLd } from '@/components/ui';
import { BITRIX24 } from '@/lib/content';
import { breadcrumbLd, pageMeta, serviceLd } from '@/lib/seo';
import { B24Hero, B24Nav, WhyPartner } from './shared';

const description = 'Ausumn Labs is a Bitrix24 Silver Partner in Bengaluru. We implement Bitrix24 CRM, tasks, contact center, sites, HR and automation, and train your team across India.';

export const metadata = pageMeta({
  title: 'Bitrix24 Partner in Bengaluru and India',
  ogTitle: 'One workspace for your entire business.',
  description,
  path: '/bitrix24',
  keywords: ['Bitrix24 partner India', 'Bitrix24 partner Bengaluru', 'Bitrix24 Silver Partner', 'Bitrix24 reseller India', 'Bitrix24 consultant']
});

export default function Bitrix24Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Bitrix24', '/bitrix24']]), serviceLd({ name: 'Bitrix24 implementation and support', serviceType: 'Bitrix24 partner services', description, path: '/bitrix24' })]} />
      <B24Hero />
      <B24Nav current="/bitrix24" />
      <section className="sec">
        <div className="wrap">
          <div className="head"><h2 className="d2">Choose where to start.</h2><p className="lead">Most clients begin with CRM, then add other tools as each team is ready.</p></div>
          <div className="g3">
            {BITRIX24.map((c) => (
              <Link key={c.slug} className="card" href={`/bitrix24/${c.slug}`}>
                <h3 className="d3">{c.label}</h3>
                <p className="body">{c.pitch}</p>
                <span className="linkbtn">Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <WhyPartner />
      <CtaBand />
    </>
  );
}
