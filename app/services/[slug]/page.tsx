import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, CtaBand, Faq, JsonLd, Steps, SubNav } from '@/components/ui';
import { SERVICES } from '@/lib/content';
import { breadcrumbLd, faqLd, pageMeta, serviceLd } from '@/lib/seo';

type P = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: P) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMeta({ title: s.seoTitle, ogTitle: s.title, description: s.seoDesc, path: `/services/${s.slug}`, keywords: s.keywords });
}

const interestFor: Record<string, string> = {
  'web-development': 'web', 'mobile-app-development': 'mobile', 'ai-solutions': 'ai', 'data-analytics': 'data',
  'cloud-devops': 'cloud', 'it-consulting': 'consulting', 'crm-migration': 'migration'
};

export default async function ServicePage({ params }: P) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();
  const path = `/services/${s.slug}`;
  const siblings = SERVICES.filter((x) => x.group === s.group);
  const others = SERVICES.filter((x) => x.group !== s.group).slice(0, 3);
  const ld: unknown[] = [breadcrumbLd([['Services', '/services'], [s.label, path]]), serviceLd({ name: s.seoTitle, serviceType: s.serviceType, description: s.seoDesc, path })];
  if (s.faqs?.length) ld.push(faqLd(s.faqs));
  const contactHref = `/contact?interest=${interestFor[s.slug] || 'bitrix24'}`;

  return (
    <>
      <JsonLd data={ld} />
      <section className="sec dark tight" style={{ paddingTop: 'clamp(56px, 7vw, 96px)' }}>
        <div className="wrap stack" style={{ gap: 18 }}>
          <p className="eyebrow" style={{ margin: 0 }}>{s.eyebrow}</p>
          <h1 className="d1" style={{ maxWidth: '17ch' }}>{s.title}</h1>
          <p className="lead">{s.text}</p>
          <div className="row btns">
            <Link className="btn primary" href={contactHref}>{s.cta}</Link>
            <a className="btn ghost" href="https://wa.me/919368079747" target="_blank" rel="noopener">WhatsApp us</a>
          </div>
        </div>
      </section>
      <SubNav label={s.group === 'bitrix24' ? 'Bitrix24 services' : 'Development and IT services'} items={siblings.map((x) => ({ href: `/services/${x.slug}`, label: x.label }))} current={path} />
      <section className="sec">
        <div className="wrap g2">
          <div className="stack" style={{ gap: 18 }}>
            <span className="pill">{s.tag}</span>
            <h2 className="d2">{s.label} with Ausumn Labs</h2>
            {(s.about || [s.text]).map((p) => <p className="body" style={{ fontSize: 18 }} key={p.slice(0, 24)}>{p}</p>)}
          </div>
          <div className="card">
            <h3 className="h4">What is included</h3>
            <Check items={s.items} />
          </div>
        </div>
      </section>
      <section className="sec white line">
        <div className="wrap">
          <div className="head"><p className="eyebrow" style={{ margin: 0 }}>How it runs</p><h2 className="d2">{s.flowTitle}</h2></div>
          <Steps items={s.flow} />
        </div>
      </section>
      {s.tech && (
        <section className="sec line tight">
          <div className="wrap stack">
            <h2 className="d3">Technologies we use</h2>
            <div className="tech">{s.tech.map((t) => <span className="pill line" key={t}>{t}</span>)}</div>
          </div>
        </section>
      )}
      {s.faqs && (
        <section className="sec line">
          <div className="wrap" style={{ maxWidth: 920 }}>
            <div className="head"><h2 className="d2">Questions about {s.label.toLowerCase()}</h2></div>
            <Faq items={s.faqs} />
          </div>
        </section>
      )}
      <section className="sec white line">
        <div className="wrap">
          <div className="head"><h2 className="d2">{s.group === 'bitrix24' ? 'We also build around your CRM' : 'Connected to your Bitrix24'}</h2></div>
          <div className="g3">
            {others.map((o) => (
              <Link key={o.slug} className="card" href={`/services/${o.slug}`}>
                <h3 className="h4">{o.label}</h3>
                <p className="body">{o.text}</p>
                <span className="linkbtn">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
