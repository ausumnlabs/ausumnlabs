import { PageHero, SubNav } from '@/components/ui';
import { TILES } from '@/lib/hero-tiles';

export function ResHero() {
  return <PageHero eyebrow="Resources" title="Clear answers before you buy." lead="Plain guides, honest comparisons and the latest Bitrix24 changes." tiles={TILES.resources} />;
}

export function ResNav({ current }: { current: string }) {
  return (
    <SubNav
      label="Resources"
      current={current}
      items={[
        { href: '/resources', label: 'Blog and guides' },
        { href: '/resources/comparisons', label: 'Comparisons' },
        { href: '/resources/updates', label: 'Release updates' },
        { href: '/resources/faq', label: 'FAQ' }
      ]}
    />
  );
}
