import Link from 'next/link';
import { Backdrop } from '@/components/Hero';
import { TILES } from '@/lib/hero-tiles';
import type { CSSProperties } from 'react';
import { CtaBand, JsonLd } from '@/components/ui';
import { Bubbles } from '@/components/IndustryMotion';
import { INDUSTRIES } from '@/lib/content';
import { INDUSTRY_STORIES } from '@/lib/industry-stories';
import { breadcrumbLd, pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Bitrix24 CRM by Industry',
  ogTitle: 'The same platform, shaped to your trade.',
  description: 'Bitrix24 CRM set up for healthcare, manufacturing, construction, education, retail, service firms and real estate in India, with pipelines, fields and reports in your own words.',
  path: '/industries',
  keywords: ['CRM for healthcare India', 'CRM for manufacturing India', 'CRM for education', 'CRM for retail', 'Bitrix24 industry solutions']
});

export default function Industries() {
  return (
    <div className="ind">
      <JsonLd data={breadcrumbLd([['Industries', '/industries']])} />
      <section className="ind-hero">
        <Bubbles />
        <Backdrop tiles={TILES.home} />
        <div className="wrap">
          <span className="ind-pill">Industries · Bitrix24 CRM set up for your trade</span>
          <h1 className="ind-h1">The same platform, <span className="grad">shaped to your trade.</span></h1>
          <p className="lead">Your pipeline, fields and reports should use your words. Pick your industry and follow one customer through the CRM.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="ind-grid">
            <Link className="ind-card" href="/real-estate" style={{ '--hc': '#F89924', '--hc-soft': '#FEEBD3', '--hc-ink': '#A65700' } as CSSProperties}>
              <span className="ind-no">00</span>
              <span className="pill ember">Our own modules</span>
              <h2 className="d3">Real estate</h2>
              <p className="body">Broker, Builder and Agency CRM, built by us on Bitrix24.</p>
              <span className="ind-go">Explore →</span>
            </Link>
            {INDUSTRIES.map((i, n) => {
              const st = INDUSTRY_STORIES[i.slug];
              const vars = st ? ({ '--hc': st.accent, '--hc-soft': st.soft, '--hc-ink': st.ink } as CSSProperties) : undefined;
              return (
                <Link key={i.slug} className="ind-card" href={`/industries/${i.slug}`} style={vars}>
                  <span className="ind-no">{String(n + 1).padStart(2, '0')}</span>
                  <h2 className="d3">{i.label}</h2>
                  <p className="body">{i.title}</p>
                  {st && <div className="row" style={{ gap: 6 }}>{st.segments.slice(0, 3).map((s) => <span className="htag" key={s.who}>{s.who}</span>)}</div>}
                  <span className="ind-go">Follow the journey →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
