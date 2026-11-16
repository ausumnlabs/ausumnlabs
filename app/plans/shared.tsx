import { SubNav } from '@/components/ui';

export function PlansHero({
  eyebrow = 'Bitrix24 plans and pricing',
  title = 'Flat pricing in rupees, for your whole team.',
  lead = 'One price per company, not per user, billed annually. Compare Cloud, Vibe+ and On-Premise, or answer four questions and we will suggest a starting point.'
}: { eyebrow?: string; title?: string; lead?: string }) {
  return (
    <section className="sec dark tight glow" style={{ paddingTop: 'clamp(56px, 7vw, 96px)' }}>
      <div className="wrap stack" style={{ gap: 18 }}>
        <p className="eyebrow" style={{ margin: 0 }}>{eyebrow}</p>
        <h1 className="d1" style={{ maxWidth: '18ch' }}>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}

export function PlansNav({ current }: { current: string }) {
  return (
    <SubNav
      label="Plan views"
      current={current}
      items={[
        { href: '/plans', label: 'Cloud and Vibe+' },
        { href: '/plans/on-premise', label: 'On-Premise' },
        { href: '/plans/compare', label: 'Compare features' },
        { href: '/plans/finder', label: 'Plan finder' }
      ]}
    />
  );
}
