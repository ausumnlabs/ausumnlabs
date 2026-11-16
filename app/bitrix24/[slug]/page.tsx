import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBand, JsonLd, Steps } from '@/components/ui';
import { BITRIX24 } from '@/lib/content';
import { breadcrumbLd, pageMeta, serviceLd } from '@/lib/seo';
import { B24Hero, B24Nav, WhyPartner } from '../shared';

type P = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BITRIX24.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: P) {
  const { slug } = await params;
  const c = BITRIX24.find((x) => x.slug === slug);
  if (!c) return {};
  return pageMeta({ title: c.seoTitle, ogTitle: c.title, description: c.seoDesc, path: `/bitrix24/${c.slug}`, keywords: c.keywords });
}

export default async function B24Category({ params }: P) {
  const { slug } = await params;
  const c = BITRIX24.find((x) => x.slug === slug);
  if (!c) notFound();
  const path = `/bitrix24/${c.slug}`;
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Bitrix24', '/bitrix24'], [c.label, path]]), serviceLd({ name: c.seoTitle, serviceType: `Bitrix24 ${c.label}`, description: c.seoDesc, path })]} />
      <B24Hero eyebrow={`Bitrix24 ${c.label}`} title={c.title} lead={c.pitch} />
      <B24Nav current={path} />
      <section className="sec">
        <div className="wrap fade">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>What is included</p>
            <h2 className="d2">{c.label} features we set up for you.</h2>
          </div>
          <div className="g3">
            {c.features.map((x) => <div className="card" key={x.t}><h3 className="h4">{x.t}</h3><p className="body">{x.d}</p></div>)}
          </div>
        </div>
      </section>
      <section className="sec white line">
        <div className="wrap">
          <div className="head"><p className="eyebrow" style={{ margin: 0 }}>In daily work</p><h2 className="d2">{c.flowTitle}</h2></div>
          <Steps items={c.flow} />
        </div>
      </section>
      <section className="sec dark">
        <div className="wrap g2" style={{ alignItems: 'center' }}>
          <div className="stack">
            <p className="eyebrow" style={{ margin: 0 }}>AI inside {c.label}</p>
            <h2 className="d3">{c.ai}</h2>
          </div>
          <div className="row btns">
            <Link className="btn primary" href="/contact">See it in a demo</Link>
            <Link className="btn ghost" href="/ai">Explore AI</Link>
          </div>
        </div>
      </section>
      <WhyPartner />
      <CtaBand />
    </>
  );
}
