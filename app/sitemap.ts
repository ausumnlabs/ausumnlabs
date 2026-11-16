import type { MetadataRoute } from 'next';
import { AI_CAPS, BITRIX24, GUIDES, INDUSTRIES, RE_MODULES, SERVICES } from '@/lib/content';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'monthly') => ({
    url: path === '/' ? SITE.url : `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority
  });
  return [
    u('/', 1, 'weekly'),
    u('/bitrix24', 0.9),
    ...BITRIX24.map((c) => u(`/bitrix24/${c.slug}`, c.slug === 'crm' ? 0.9 : 0.7)),
    u('/ai', 0.8),
    ...AI_CAPS.map((c) => u(`/ai/${c.slug}`, 0.6)),
    u('/real-estate', 0.9),
    ...RE_MODULES.map((m) => u(`/real-estate/${m.slug}`, 0.7)),
    u('/plans', 0.8, 'weekly'),
    u('/plans/on-premise', 0.6),
    u('/plans/compare', 0.6),
    u('/plans/finder', 0.5),
    u('/services', 0.8),
    ...SERVICES.map((s) => u(`/services/${s.slug}`, s.group === 'build' || s.slug === 'bitrix24-implementation' ? 0.9 : 0.7)),
    u('/industries', 0.6),
    ...INDUSTRIES.map((i) => u(`/industries/${i.slug}`, 0.6)),
    u('/resources', 0.6, 'weekly'),
    ...GUIDES.map((g) => ({ ...u(`/resources/guides/${g.slug}`, 0.6), lastModified: new Date(g.date) })),
    u('/resources/comparisons', 0.5),
    u('/resources/updates', 0.5, 'weekly'),
    u('/resources/faq', 0.6),
    u('/about', 0.6),
    u('/about/partner', 0.5),
    u('/contact', 0.8),
    u('/privacy', 0.2, 'yearly'),
    u('/terms', 0.2, 'yearly')
  ];
}
