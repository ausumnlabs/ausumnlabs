import { PageHero, SubNav } from '@/components/ui';

export function ResHero() {
  return <PageHero eyebrow="Resources" title="Clear answers before you buy." lead="Plain guides, honest comparisons and the latest Bitrix24 changes." width="15ch" />;
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
