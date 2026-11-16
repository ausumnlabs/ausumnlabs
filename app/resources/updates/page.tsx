import { CtaBand, JsonLd } from '@/components/ui';
import { UPDATES } from '@/lib/content';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { ResHero, ResNav } from '../shared';

export const metadata = pageMeta({
  title: 'Bitrix24 Release Updates 2026',
  ogTitle: 'What changed in Bitrix24.',
  description: 'What changed in Bitrix24 in 2026, including Vibe+ plans, Vibecode, AI agents and Automation Studio, and what it means for your business.',
  path: '/resources/updates',
  keywords: ['Bitrix24 updates 2026', 'Bitrix24 new features', 'Bitrix24 Vibe release']
});

export default function Updates() {
  return (
    <>
      <JsonLd data={breadcrumbLd([['Resources', '/resources'], ['Release updates', '/resources/updates']])} />
      <ResHero />
      <ResNav current="/resources/updates" />
      <section className="sec">
        <div className="wrap">
          <div className="head"><h2 className="d2">Release updates</h2><p className="lead">What changed in Bitrix24, and what it means for you.</p></div>
          <div className="stack">
            {UPDATES.map((u) => (
              <div className="card" key={u.title}><span className="num">{u.date}</span><h3 className="h4">{u.title}</h3><p className="body">{u.text}</p></div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
