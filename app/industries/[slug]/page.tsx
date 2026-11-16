import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, CtaBand, JsonLd, PageHero, Steps, SubNav } from '@/components/ui';
import { Bubbles, ScrollStory, WhoWeHelp } from '@/components/IndustryMotion';
import { Icon } from '@/components/Icon';
import { INDUSTRIES } from '@/lib/content';
import { INDUSTRY_STORIES } from '@/lib/industry-stories';
import { breadcrumbLd, pageMeta, serviceLd } from '@/lib/seo';
import type { CSSProperties } from 'react';

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
  const st = INDUSTRY_STORIES[i.slug];
  const contactHref = `/contact?interest=${i.slug}`;
  const ld = [breadcrumbLd([['Industries', '/industries'], [i.label, path]]), serviceLd({ name: `CRM for ${i.label}`, serviceType: 'CRM implementation', description: desc(i), path })];

  if (st) {
    const vars = { '--hc': st.accent, '--hc-soft': st.soft, '--hc-ink': st.ink, ...(st.accent2 ? { '--hc2': st.accent2 } : {}) } as CSSProperties;
    return (
      <div className="ind" style={vars}>
        <JsonLd data={ld} />
        <section className="ind-hero">
          <Bubbles />
          <div className="wrap">
            <span className="ind-pill">{st.hero.eyebrow}</span>
            <h1 className="ind-h1">{st.hero.title[0]}<span className="grad">{st.hero.title[1]}</span>{st.hero.title[2]}</h1>
            <p className="lead">{st.hero.lead}</p>
            <div className="row btns" style={{ justifyContent: 'center' }}>
              <Link className="btn dark-btn" href={contactHref}>{st.cta} →</Link>
              <Link className="btn soft-btn" href="#journey">How it works</Link>
            </div>
            <span className="scroll-cue" aria-hidden="true">SCROLL</span>
          </div>
        </section>
        <SubNav label="Industries" items={INDUSTRIES.map((x) => ({ href: `/industries/${x.slug}`, label: x.label }))} current={path} />
        <WhoWeHelp segments={st.segments} label={i.label} lead={st.whoLead} contactHref={contactHref} />
        <ScrollStory steps={st.steps} title={st.storyTitle} lead={st.storyLead} eyebrow={st.storyEyebrow} cta={st.cta} contactHref={contactHref} />
        <section className="sec white">
          <div className="wrap g2">
            <div className="stack" style={{ gap: 18 }}>
              <p className="mono-eyebrow">What we set up</p>
              <h2 className="d2">A CRM that speaks <span className="serif hc">{i.short}.</span></h2>
              <p className="lead">Stages, fields, automation and reports around how your {i.short} team works, on your own Bitrix24.</p>
              <p className="fit-note"><span className="hc" style={{ display: 'inline-flex', marginTop: 2 }}><Icon name="lock" size={18} /></span>{st.fit}</p>
            </div>
            <div className="card">
              <h3 className="h4">Typical setup</h3>
              <Check items={i.setup} />
              <Link className="btn dark-btn" style={{ marginTop: 8, alignSelf: 'flex-start' }} href={contactHref}>{st.cta} →</Link>
            </div>
          </div>
        </section>
        <CtaBand />
      </div>
    );
  }

  return (
    <>
      <JsonLd data={ld} />
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
