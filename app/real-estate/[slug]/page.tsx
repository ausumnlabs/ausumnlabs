import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBand, JsonLd } from '@/components/ui';
import { RE_MODULES } from '@/lib/content';
import { breadcrumbLd, pageMeta, serviceLd } from '@/lib/seo';
import { ReNav, ReSections } from '../shared';

type P = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return RE_MODULES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: P) {
  const { slug } = await params;
  const m = RE_MODULES.find((x) => x.slug === slug);
  if (!m) return {};
  return pageMeta({ title: m.seoTitle, ogTitle: m.title, description: m.seoDesc, path: `/real-estate/${m.slug}`, keywords: [`real estate CRM for ${m.label.toLowerCase()}`, 'Bitrix24 real estate', 'property CRM India'] });
}

export default async function ReModule({ params }: P) {
  const { slug } = await params;
  const m = RE_MODULES.find((x) => x.slug === slug);
  if (!m) notFound();
  const path = `/real-estate/${m.slug}`;
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Real Estate', '/real-estate'], [m.label, path]]), serviceLd({ name: m.seoTitle, serviceType: 'Real estate CRM', description: m.seoDesc, path })]} />
      <section className="sec dark tight" style={{ paddingTop: 'clamp(56px, 7vw, 96px)' }}>
        <div className="wrap stack" style={{ gap: 18 }}>
          <span className={m.first ? 'pill ember' : 'pill'}>{m.status}</span>
          <h1 className="d1" style={{ maxWidth: '17ch' }}>{m.title}</h1>
          <p className="lead">{m.text}</p>
          <div className="row btns">
            <Link className="btn primary" href="/contact?interest=real-estate">Book a property CRM demo</Link>
            <Link className="btn ghost" href="/contact?type=audit&interest=real-estate">Audit my current setup</Link>
          </div>
        </div>
      </section>
      <ReNav current={path} />
      <section className="sec">
        <div className="wrap fade">
          <div className="head"><p className="eyebrow" style={{ margin: 0 }}>What the {m.label.toLowerCase()} module covers</p><h2 className="d2">Built for how {m.label.toLowerCase()} work every day.</h2></div>
          <div className="g3">
            {m.features.map((x) => <div className="card" key={x.t}><h3 className="h4">{x.t}</h3><p className="body">{x.d}</p></div>)}
          </div>
        </div>
      </section>
      <ReSections />
      <CtaBand />
    </>
  );
}
