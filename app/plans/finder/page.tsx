import { CtaBand, JsonLd } from '@/components/ui';
import { PlanFinder } from '@/components/Plans';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { PlansHero, PlansNav } from '../shared';

export const metadata = pageMeta({
  title: 'Bitrix24 Plan Finder',
  ogTitle: 'Find your starting Bitrix24 plan.',
  description: 'Answer four questions about team size, automation, AI and hosting, and get a suggested Bitrix24 plan to start from.',
  path: '/plans/finder',
  keywords: ['which Bitrix24 plan', 'Bitrix24 plan finder']
});

export default function Finder() {
  return (
    <>
      <JsonLd data={breadcrumbLd([['Plans', '/plans'], ['Plan finder', '/plans/finder']])} />
      <PlansHero eyebrow="Bitrix24 plan finder" title="Which Bitrix24 plan fits you?" lead="Answer four questions and we will suggest a starting point. We confirm the fit in a short call." />
      <PlansNav current="/plans/finder" />
      <section className="sec">
        <div className="wrap"><PlanFinder /></div>
      </section>
      <CtaBand />
    </>
  );
}
