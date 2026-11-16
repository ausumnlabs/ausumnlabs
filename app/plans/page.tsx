import Link from 'next/link';
import { CtaBand, JsonLd } from '@/components/ui';
import { PlanCards } from '@/components/Plans';
import { PRICES_CHECKED } from '@/lib/content';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { PlansHero, PlansNav } from './shared';

export const metadata = pageMeta({
  title: 'Bitrix24 Price in India (₹): Cloud and Vibe+ Plans',
  ogTitle: 'Bitrix24 plans in rupees, for your whole team.',
  description: 'Bitrix24 prices in India in rupees: Basic from ₹1,910, Standard ₹4,790, Professional ₹9,590 and Enterprise ₹19,190 a month billed annually. Compare plans and get a quote from Ausumn Labs.',
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
            Bitrix24 India annual-billing list prices in rupees, shown per organization per month (not per user), as published on bitrix24.in on {PRICES_CHECKED}. GST and other taxes may apply.
            Prices are set by Bitrix24 and can change. For partner offers and a written quote, <Link href="/contact?interest=plans">ask us</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
