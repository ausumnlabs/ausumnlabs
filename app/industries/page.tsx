import Link from 'next/link';
import { CtaBand, JsonLd, PageHero } from '@/components/ui';
import { INDUSTRIES } from '@/lib/content';
import { breadcrumbLd, pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Bitrix24 CRM by Industry',
  ogTitle: 'The same platform, shaped to your trade.',
  description: 'Bitrix24 CRM set up for manufacturing, construction, healthcare, education, retail and service firms in India, with pipelines, fields and reports in your own words.',
  path: '/industries',
  keywords: ['CRM for manufacturing India', 'CRM for education', 'CRM for healthcare India', 'Bitrix24 industry solutions']
});

export default function Industries() {
  return (
    <>
      <JsonLd data={breadcrumbLd([['Industries', '/industries']])} />
      <PageHero eyebrow="Industries" title="The same platform, shaped to your trade." lead="Your pipeline, fields and reports should use your words. We set up Bitrix24 around how your industry works." />
      <section className="sec">
        <div className="wrap">
          <div className="g3">
            {INDUSTRIES.map((i) => (
              <Link key={i.slug} className="card" href={`/industries/${i.slug}`}>
                <h2 className="d3">{i.label}</h2>
                <p className="body">{i.title} {i.text}</p>
                <span className="linkbtn">Open →</span>
              </Link>
            ))}
            <Link className="card" href="/real-estate"><span className="pill ember">Our specialization</span><h2 className="d3">Real estate</h2><p className="body">Brokers, agencies and builders, from listing to booking.</p><span className="linkbtn">Open →</span></Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
