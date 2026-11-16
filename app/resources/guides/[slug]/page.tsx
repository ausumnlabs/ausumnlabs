import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBand, JsonLd } from '@/components/ui';
import { GUIDES } from '@/lib/content';
import { abs, breadcrumbLd, pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

type P = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: P) {
  const { slug } = await params;
  const g = GUIDES.find((x) => x.slug === slug);
  if (!g) return {};
  return pageMeta({ title: g.title, description: `${g.sum} ${g.body[0]}`.slice(0, 160), path: `/resources/guides/${g.slug}`, type: 'article' });
}

export default async function GuidePage({ params }: P) {
  const { slug } = await params;
  const g = GUIDES.find((x) => x.slug === slug);
  if (!g) notFound();
  const path = `/resources/guides/${g.slug}`;
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.title,
    description: g.sum,
    datePublished: g.date,
    dateModified: g.date,
    mainEntityOfPage: abs(path),
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@id': `${SITE.url}/#organization` },
    image: `${SITE.url}/og?title=${encodeURIComponent(g.title)}`
  };
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Resources', '/resources'], [g.title, path]]), article]} />
      <section className="sec">
        <div className="wrap">
          <article className="prose">
            <Link className="linkbtn" href="/resources">← All guides</Link>
            <span className="mono" style={{ color: 'var(--ember-ink)' }}>{g.tag} · <time dateTime={g.date}>{new Date(g.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time></span>
            <h1 className="d2">{g.title}</h1>
            {g.body.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
            <div className="row btns"><Link className="btn primary" href="/contact">Talk to us about this</Link></div>
          </article>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
