import { CtaBand, Faq, JsonLd } from '@/components/ui';
import { FAQS } from '@/lib/content';
import { breadcrumbLd, faqLd, pageMeta } from '@/lib/seo';
import { ResHero, ResNav } from '../shared';

export const metadata = pageMeta({
  title: 'Bitrix24 FAQ: Pricing, Setup, AI and Support',
  ogTitle: 'Frequently asked questions.',
  description: 'Answers to common questions about Bitrix24 pricing, implementation time, migration, WhatsApp, AI, On-Premise and support in India.',
  path: '/resources/faq',
  keywords: ['Bitrix24 FAQ', 'Bitrix24 cost India', 'Bitrix24 implementation time']
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Resources', '/resources'], ['FAQ', '/resources/faq']]), faqLd(FAQS)]} />
      <ResHero />
      <ResNav current="/resources/faq" />
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 920 }}>
          <div className="head"><h2 className="d2">Frequently asked questions</h2></div>
          <Faq items={FAQS} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
