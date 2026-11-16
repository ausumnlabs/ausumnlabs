import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, CtaBand, JsonLd, PageHero, Steps, SubNav } from '@/components/ui';
import { INDUSTRIES } from '@/lib/content';
import { breadcrumbLd, pageMeta, serviceLd } from '@/lib/seo';

type P = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

const desc = (i: (typeof INDUSTRIES)[number]) => `Bitrix24 CRM for ${i.label.toLowerCase()} in India. ${i.text} Set up by Ausumn Labs, Bitrix24 Silver Partner in Bengaluru.`;

export async function generateMetadata({ params }: P) {
  const { slug } = await params;
  const i = INDUSTRIES.find((x) => x.slug === slug);
  if (!i) return {};
  return pageMeta({ title: `CRM for ${i.label} on Bitrix24`, ogTitle: i.title, description: desc(i), path: `/industries/${i.slug}`, keywords: [`CRM for ${i.label.toLowerCase()}`, `${i.label.toLowerCase()} CRM India`, 'Bitrix24'] });
}

export default async function IndustryPage({ params }: P) {
  const { slug } = await params;
  const i = INDUSTRIES.find((x) => x.slug === slug);
  if (!i) notFound();
  const path = `/industries/${i.slug}`;
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Industries', '/industries'], [i.label, path]]), serviceLd({ name: `CRM for ${i.label}`, serviceType: 'CRM implementation', description: desc(i), path })]} />
      <PageHero eyebrow={`Bitrix24 for ${i.label.toLowerCase()}`} title={i.title} lead={i.text} width="17ch" />
      <SubNav label="Industries" items={INDUSTRIES.map((x) => ({ href: `/industries/${x.slug}`, label: x.label }))} current={path} />
      <section className="sec">
        <div className="wrap g2">
          <div className="stack" style={{ gap: 18 }}>
            <h2 className="d2">A CRM that speaks {i.short === 'service firm' ? 'your firm’s' : i.short} language.</h2>
            <p className="lead">We set up stages, fields, automation and reports around how {i.label.toLowerCase()} businesses actually work.</p>
            <div className="row btns">
              <Link className="btn primary" href="/contact">Book a {i.short} demo</Link>
              <Link className="btn ghost" href="/bitrix24">See the platform</Link>
            </div>
          </div>
          <div className="card">
            <h3 className="h4">What we typically set up</h3>
            <Check items={i.setup} />
          </div>
        </div>
      </section>
      <section className="sec white line">
        <div className="wrap">
          <div className="head"><p className="eyebrow" style={{ margin: 0 }}>Sample pipeline</p><h2 className="d2">How deals could move.</h2></div>
          <Steps items={i.flow.map((t) => ({ t }))} />
        </div>
      </section>
      <section className="sec line">
        <div className="wrap row between">
          <div className="stack" style={{ flex: '1 1 480px' }}>
            <h2 className="d3">In real estate? We built something specific for you.</h2>
          </div>
          <Link className="btn ghost" href="/real-estate">See the real estate solution</Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
