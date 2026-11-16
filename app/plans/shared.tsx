import { SubNav } from '@/components/ui';
import { Hero } from '@/components/Hero';
import { TILES } from '@/lib/hero-tiles';

export function PlansHero({
  eyebrow = 'Bitrix24 plans and pricing',
  title = 'Flat pricing in rupees, for your whole team.',
  lead = 'One price per company, not per user, billed annually. Compare Cloud, Vibe+ and On-Premise, or answer four questions and we will suggest a starting point.'
}: { eyebrow?: string; title?: string; lead?: string }) {
  return (
    <Hero eyebrow={eyebrow} title={title} lead={lead} tiles={TILES.plans} size="sm" />
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
