import Link from 'next/link';
import { CtaBand, JsonLd } from '@/components/ui';
import { PlanCards } from '@/components/Plans';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { PlansHero, PlansNav } from './shared';

export const metadata = pageMeta({
  title: 'Bitrix24 Pricing in India: Cloud and Vibe+ Plans',
  ogTitle: 'Flat pricing for your whole team.',
  description: 'Compare Bitrix24 Free, Basic, Standard, Professional and Enterprise plans, and the new Vibe+ plans with Vibecode and unlimited AI. Ask Ausumn Labs for INR pricing in India.',
  path: '/plans',
  keywords: ['Bitrix24 pricing India', 'Bitrix24 price', 'Bitrix24 plans', 'Bitrix24 Vibe+ price', 'Bitrix24 INR price']
});

export default function PlansPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([['Plans', '/plans']])} />
      <PlansHero />
      <PlansNav current="/plans" />
      <section className="sec">
        <div className="wrap">
          <PlanCards />
          <p className="small" style={{ marginTop: 20 }}>
            Global list prices in US$ per organization per month, as published by Bitrix24, before tax. Enterprise also comes in larger user tiers.
            For prices in Indian rupees and partner offers, <Link href="/contact?interest=plans">ask us for an India quote</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
