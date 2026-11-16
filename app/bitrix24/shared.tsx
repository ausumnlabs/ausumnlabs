import Link from 'next/link';
import { SubNav } from '@/components/ui';
import { BITRIX24 } from '@/lib/content';
import { Hero } from '@/components/Hero';
import { TILES } from '@/lib/hero-tiles';

export function B24Hero({
  eyebrow = 'Bitrix24 Silver Partner, Bengaluru',
  title = 'One workspace for your entire business.',
  lead = 'CRM, projects, communication, websites, HR and automation in one platform. We configure Bitrix24 around your process and train your team to use it.'
}: { eyebrow?: string; title?: string; lead?: string }) {
  return (
    <Hero eyebrow={eyebrow} title={title} lead={lead} tiles={TILES.bitrix24}
      actions={<><Link className="btn primary" href="/contact">Book a demo</Link><Link className="btn ghost" href="/plans">See plans</Link></>} />
  );
}

export function B24Nav({ current }: { current: string }) {
  const items = [{ href: '/bitrix24', label: 'Overview' }].concat(BITRIX24.map((c) => ({ href: `/bitrix24/${c.slug}`, label: c.label })));
  return <SubNav label="Bitrix24 categories" items={items} current={current} />;
}

export function WhyPartner() {
  return (
    <section className="sec line">
      <div className="wrap">
        <div className="head"><p className="eyebrow" style={{ margin: 0 }}>Why a partner</p><h2 className="d2">Buying Bitrix24 is easy. Getting a team to use it is the work.</h2></div>
        <div className="g4">
          <div className="card"><h3 className="h4">We map first</h3><p className="body">We study how your team works before changing anything.</p></div>
          <div className="card"><h3 className="h4">We configure for you</h3><p className="body">Pipelines, roles, fields and automation match your process.</p></div>
          <div className="card"><h3 className="h4">We connect your tools</h3><p className="body">Phone, WhatsApp, website and other systems feed one record.</p></div>
          <div className="card"><h3 className="h4">We train your people</h3><p className="body">Each role learns the screens and habits it needs.</p></div>
        </div>
        <div style={{ marginTop: 24 }}><Link className="linkbtn" href="/services">See our services →</Link></div>
      </div>
    </section>
  );
}
