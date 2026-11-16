import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { TILES } from '@/lib/hero-tiles';
import { notFound } from 'next/navigation';
import { CtaBand, Faq, JsonLd, Screen } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { RE_MODULES } from '@/lib/content';
import { breadcrumbLd, faqLd, pageMeta, serviceLd } from '@/lib/seo';
import { ReNav, WhyUs } from '../shared';

type P = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return RE_MODULES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: P) {
  const { slug } = await params;
  const m = RE_MODULES.find((x) => x.slug === slug);
  if (!m) return {};
  return pageMeta({ title: m.seoTitle, ogTitle: m.title, description: m.seoDesc, path: `/real-estate/${m.slug}`, keywords: m.keywords });
}

export default async function ReModule({ params }: P) {
  const { slug } = await params;
  const m = RE_MODULES.find((x) => x.slug === slug);
  if (!m) notFound();
  const path = `/real-estate/${m.slug}`;
  const [hero, ...rest] = m.screens;
  const demo = `/contact?interest=real-estate&plan=${encodeURIComponent(m.name)}`;

  return (
    <>
      <JsonLd data={[breadcrumbLd([['Real Estate', '/real-estate'], [m.name, path]]), serviceLd({ name: m.seoTitle, serviceType: 'Real estate CRM', description: m.seoDesc, path }), faqLd(m.faqs)]} />
      <Hero eyebrow={`${m.name} · ${m.status}`} title={m.title} lead={m.text} tiles={TILES.realEstate}
        actions={<><Link className="btn primary" href={demo}>Book a 20-minute demo</Link><Link className="btn ghost" href="/contact?type=audit&interest=real-estate">Audit my current setup</Link></>}
        note={<span>For {m.who.toLowerCase()}. Set up on your own Bitrix24.</span>}
        visual={hero ? <Screen {...hero} caption={undefined} eager /> : undefined} />
      <ReNav current={path} />

      <section className="sec warm">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>The problems it solves</p>
            <h2 className="d2">What happens today, and what happens with <span className="serif" style={{ color: 'var(--ember-ink)' }}>{m.name}.</span></h2>
          </div>
          <div className="ba">
            <div className="ba-head"><span>Today</span><span>With {m.name}</span></div>
            {m.problems.map(([a, b]) => (
              <div className="ba-row" key={a}>
                <div><span style={{ color: '#B3541E', display: 'inline-flex' }}><Icon name="clock" size={18} /></span>{a}</div>
                <div><span style={{ color: 'var(--pine)', display: 'inline-flex' }}><Icon name="check" size={18} stroke={2.4} /></span>{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {rest.length > 0 && (
        <section className="sec white">
          <div className="wrap">
            <div className="head">
              <p className="eyebrow" style={{ margin: 0 }}>See it in action</p>
              <h2 className="d2">Real screens from <span className="serif" style={{ color: 'var(--ember-ink)' }}>our own Bitrix24.</span></h2>
              <p className="lead">{m.slug === 'builders' ? 'Demo project Ausumn Greens (80 units). Deal and commission figures are sample data.' : 'Listings are from our own property website. Client names are sample data.'}</p>
            </div>
            {[hero, ...rest].map((s, i) => (
              <div className={i % 2 ? 'shot-row flip' : 'shot-row'} key={s.src}>
                <Screen {...s} caption={undefined} />
                <div className="shot-text">
                  <span className="pill ember">0{i + 1}</span>
                  <h3 className="d3">{s.title}</h3>
                  <p className="body">{s.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>What&apos;s inside</p>
            <h2 className="d2">Everything a {m.label.toLowerCase().replace(/s$/, '')} team needs, ready to use.</h2>
          </div>
          <div className="g3">
            {m.features.map((x) => (
              <div className="card" key={x.t}>
                <span className="ic g" style={{ width: 40, height: 40, borderRadius: 10 }}><Icon name="check" size={20} stroke={2.4} /></span>
                <h3 className="h4">{x.t}</h3>
                <p className="body">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {m.pipelines.length > 0 && (
        <section className="sec mint">
          <div className="wrap">
            <div className="head">
              <p className="eyebrow" style={{ margin: 0 }}>Pipelines</p>
              <h2 className="d2">Stages in your team&apos;s own words.</h2>
            </div>
            <div className="stack" style={{ gap: 28 }}>
              {m.pipelines.map((p) => (
                <div className="stack" key={p.name} style={{ gap: 12 }}>
                  <h3 className="h4">{p.name}</h3>
                  <div className="stages">{p.stages.map((s) => <span key={s}>{s}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {m.steps.length > 0 && (
        <section className="sec dark">
          <div className="wrap">
            <div className="head">
              <p className="eyebrow" style={{ margin: 0 }}>Start to finish</p>
              <h2 className="d2">What the CRM does <span className="serif">at every step.</span></h2>
            </div>
            <div className="flow">
              {m.steps.map((s, i) => <div key={s.t}><i>{String(i + 1).padStart(2, '0')}</i><b>{s.t}</b><span>{s.d}</span></div>)}
            </div>
          </div>
        </section>
      )}

      <WhyUs />

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 920 }}>
          <div className="head"><h2 className="d2">Common questions</h2></div>
          <Faq items={m.faqs} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
