import Link from 'next/link';
import { CtaBand, JsonLd } from '@/components/ui';
import { GUIDES } from '@/lib/content';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { ResHero, ResNav } from './shared';

export const metadata = pageMeta({
  title: 'Bitrix24 Guides and Blog',
  ogTitle: 'Clear answers before you buy.',
  description: 'Plain guides on Bitrix24, Vibe+, Vibecode, AI and choosing between Cloud and On-Premise, from Ausumn Labs, Bitrix24 Silver Partner in Bengaluru.',
  path: '/resources',
  keywords: ['Bitrix24 guide', 'Bitrix24 blog', 'Bitrix24 Vibe+', 'Bitrix24 Vibecode']
});

export default function Resources() {
  return (
    <>
      <JsonLd data={breadcrumbLd([['Resources', '/resources']])} />
      <ResHero />
      <ResNav current="/resources" />
      <section className="sec">
        <div className="wrap">
          <div className="head"><h2 className="d2">Blog and guides</h2></div>
          <div className="g3">
            {GUIDES.map((g) => (
              <Link key={g.slug} className="card" href={`/resources/guides/${g.slug}`}>
                <span className="num">{g.tag}</span>
                <h3 className="d3">{g.title}</h3>
                <p className="body">{g.sum}</p>
                <span className="linkbtn">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
