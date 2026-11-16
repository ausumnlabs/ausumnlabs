import { CtaBand, JsonLd } from '@/components/ui';
import { MATRIX } from '@/lib/content';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { PlansHero, PlansNav } from '../shared';

export const metadata = pageMeta({
  title: 'Compare Bitrix24 Plans: Feature Table',
  ogTitle: 'Compare Bitrix24 plan features.',
  description: 'See which Bitrix24 features start on each plan: Free, Basic, Standard, Professional and Enterprise, including pipelines, WhatsApp, automation, RPA and branches.',
  path: '/plans/compare',
  keywords: ['Bitrix24 plan comparison', 'Bitrix24 features by plan', 'Bitrix24 Basic vs Standard vs Professional']
});

const cls = (v: string) => (v === '✓' ? 'yes' : v === '—' ? 'no' : '');

export default function Compare() {
  return (
    <>
      <JsonLd data={breadcrumbLd([['Plans', '/plans'], ['Compare features', '/plans/compare']])} />
      <PlansHero eyebrow="Bitrix24 plan comparison" title="Compare plan features." lead="Each higher plan includes what is in the plan before it." />
      <PlansNav current="/plans/compare" />
      <section className="sec">
        <div className="wrap">
          <div className="tbox">
            <div role="table" aria-label="Plan features" style={{ minWidth: 760 }}>
              <div className="mrow mhead" role="row">
                {['Feature', 'Free', 'Basic', 'Standard', 'Professional', 'Enterprise'].map((h) => <span key={h} role="columnheader">{h}</span>)}
              </div>
              {MATRIX.map((r) => (
                <div className="mrow" role="row" key={r[0]}>
                  <span role="rowheader">{r[0]}</span>
                  {r.slice(1).map((v, i) => (
                    <span role="cell" key={i} className={cls(v)}>
                      {v === '✓' ? <><span aria-hidden="true">✓</span><span className="hp">Included</span></> : v === '—' ? <><span aria-hidden="true">—</span><span className="hp">Not included</span></> : v}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className="small" style={{ marginTop: 16 }}>Vibecode, unlimited REST API and unlimited Market apps come with Vibe+. Unlimited AI comes with Standard Vibe+ and above. Based on the Bitrix24 pricing page.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
