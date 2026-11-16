import Link from 'next/link';
import type { ReactNode } from 'react';

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export function CtaBand() {
  return (
    <section className="sec cta">
      <div className="wrap row between" style={{ gap: 32 }}>
        <div className="stack" style={{ flex: '1 1 520px', maxWidth: 760 }}>
          <h2 className="d2">See your own sales process inside Bitrix24.</h2>
          <p className="lead">Show us how you sell today. We will map it, point out the gaps and show what to fix first.</p>
        </div>
        <div className="row btns">
          <Link className="btn" href="/contact">Book a demo</Link>
          <Link className="btn alt" href="/contact?type=audit">Get a free CRM audit</Link>
        </div>
      </div>
    </section>
  );
}

export function Screen({ src, w, h, alt, caption, label, eager }: { src: string; w: number; h: number; alt: string; caption?: string; label?: string; eager?: boolean }) {
  return (
    <figure className="shot">
      <div className="shot-frame">
        <div className="shot-bar" aria-hidden="true"><i /><i /><i /><span>{label || 'ausumnlabs.bitrix24.in'}</span></div>
        <img src={src} width={w} height={h} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function PageHero({ eyebrow, title, lead, children, width = '16ch' }: { eyebrow: string; title: string; lead?: string; children?: ReactNode; width?: string }) {
  return (
    <section className="sec dark tight" style={{ paddingTop: 'clamp(56px, 7vw, 96px)' }}>
      <div className="wrap stack" style={{ gap: 18 }}>
        <p className="eyebrow" style={{ margin: 0 }}>{eyebrow}</p>
        <h1 className="d1" style={{ maxWidth: width }}>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function SubNav({ label, items, current }: { label: string; items: Array<{ href: string; label: string }>; current: string }) {
  return (
    <div className="tabbar">
      <div className="wrap">
        <nav className="tabs" aria-label={label}>
          {items.map((t) => (
            <Link key={t.href} className={t.href === current ? 'tab on' : 'tab'} href={t.href} aria-current={t.href === current ? 'page' : undefined}>
              {t.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export function Check({ items }: { items: string[] }) {
  return (
    <ul className="check">
      {items.map((x) => <li key={x}>{x}</li>)}
    </ul>
  );
}

export function Steps({ items }: { items: Array<{ t: string; d?: string }> }) {
  return (
    <div className="steps">
      {items.map((s) => (
        <div className="step" key={s.t}>
          <h3 className="h4">{s.t}</h3>
          {s.d && <p className="small">{s.d}</p>}
        </div>
      ))}
    </div>
  );
}

export function Faq({ items, openFirst = true }: { items: Array<{ q: string; a: string }>; openFirst?: boolean }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={f.q} open={openFirst && i === 0}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
