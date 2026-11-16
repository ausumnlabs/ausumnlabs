import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, CtaBand, JsonLd } from '@/components/ui';
import { AiDemo } from '@/components/interactive';
import { AI_CAPS } from '@/lib/content';
import { breadcrumbLd, pageMeta, serviceLd } from '@/lib/seo';
import { AiControl, AiNav } from '../shared';

type P = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return AI_CAPS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: P) {
  const { slug } = await params;
  const c = AI_CAPS.find((x) => x.slug === slug);
  if (!c) return {};
  return pageMeta({ title: c.seoTitle, ogTitle: c.title, description: c.seoDesc, path: `/ai/${c.slug}`, keywords: [`Bitrix24 ${c.label}`, 'Bitrix24 AI', 'Bitrix24 partner'] });
}

export default async function AiCap({ params }: P) {
  const { slug } = await params;
  const c = AI_CAPS.find((x) => x.slug === slug);
  if (!c) notFound();
  const path = `/ai/${c.slug}`;
  return (
    <>
      <JsonLd data={[breadcrumbLd([['AI', '/ai'], [c.label, path]]), serviceLd({ name: c.seoTitle, serviceType: 'AI implementation', description: c.seoDesc, path })]} />
      <section className="sec dark tight" style={{ paddingTop: 'clamp(56px, 7vw, 96px)' }}>
        <div className="wrap stack" style={{ gap: 18 }}>
          <p className="eyebrow" style={{ margin: 0 }}>Bitrix24 {c.label}</p>
          <h1 className="d1" style={{ maxWidth: '17ch' }}>{c.title}</h1>
          <p className="lead">{c.text}</p>
          <div className="row btns">
            <Link className="btn primary" href="/contact?interest=ai">See it in a live demo</Link>
          </div>
        </div>
      </section>
      <AiNav current={path} />
      <section className="sec">
        <div className="wrap g2">
          <div className="stack" style={{ gap: 18 }}>
            <span className="pill">{c.avail}</span>
            <h2 className="d2">What {c.label} does for your team.</h2>
            <Check items={c.points} />
          </div>
          <div className="ai-panel dark">
            <AiDemo items={c.asks.map((a) => ({ ask: a.a, out: a.o }))} label="Try an example" />
          </div>
        </div>
      </section>
      <AiControl />
      <CtaBand />
    </>
  );
}
