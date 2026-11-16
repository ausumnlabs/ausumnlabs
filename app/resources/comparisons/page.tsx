import Link from 'next/link';
import { CtaBand, JsonLd } from '@/components/ui';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { ResHero, ResNav } from '../shared';

export const metadata = pageMeta({
  title: 'Bitrix24 Comparisons: Cloud vs On-Premise, Essentials vs Vibe+',
  ogTitle: 'Choose the right Bitrix24 setup.',
  description: 'Compare Bitrix24 Cloud and On-Premise, Essentials and Vibe+, and each plan feature by feature, to choose the right setup for your business.',
  path: '/resources/comparisons',
  keywords: ['Bitrix24 cloud vs on-premise', 'Bitrix24 Vibe+ vs Essentials', 'Bitrix24 comparison']
});

export default function Comparisons() {
  return (
    <>
      <JsonLd data={breadcrumbLd([['Resources', '/resources'], ['Comparisons', '/resources/comparisons']])} />
      <ResHero />
      <ResNav current="/resources/comparisons" />
      <section className="sec">
        <div className="wrap">
          <div className="head"><h2 className="d2">Choose the right setup</h2></div>
          <div className="g3">
            <Link className="card" href="/plans/on-premise"><h3 className="d3">Cloud vs On-Premise</h3><p className="body">Where it runs, who controls it and which one suits you.</p><span className="linkbtn">Compare →</span></Link>
            <Link className="card" href="/plans"><h3 className="d3">Essentials vs Vibe+</h3><p className="body">When to pay for Vibecode, unlimited AI and unlimited API.</p><span className="linkbtn">Compare →</span></Link>
            <Link className="card" href="/plans/compare"><h3 className="d3">Plan by plan</h3><p className="body">See which features start on each Bitrix24 plan.</p><span className="linkbtn">Compare →</span></Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
