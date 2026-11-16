// Floating category cards shown behind each page's hero headline.
import type { IconName } from '@/components/Icon';

export type Tone = 'indigo' | 'teal' | 'mint' | 'orange' | 'rose' | 'amber' | 'violet' | 'blue' | 'hc';
export type Tile = { icon: IconName; label: string; tone: Tone };

const t = (icon: IconName, label: string, tone: Tone): Tile => ({ icon, label, tone });

export const TILES: Record<string, Tile[]> = {
  home: [
    t('building', 'Real estate', 'orange'), t('medical', 'Healthcare', 'teal'), t('factory', 'Manufacturing', 'blue'), t('cap', 'Education', 'violet'),
    t('bag', 'Retail', 'rose'), t('helmet', 'Construction', 'amber'), t('briefcase', 'Service firms', 'indigo'), t('spark', 'AI and automation', 'mint')
  ],
  realEstate: [
    t('building', 'Flats and villas', 'orange'), t('pin', 'Site visits', 'teal'), t('file', 'Token receipts', 'indigo'), t('grid', 'Unit inventory', 'blue'),
    t('rupee', 'Cost sheets', 'amber'), t('users', 'Channel partners', 'violet'), t('chat', 'WhatsApp shares', 'mint'), t('search', 'Smart matching', 'rose')
  ],
  bitrix24: [
    t('chart', 'CRM and sales', 'orange'), t('grid', 'Tasks and projects', 'blue'), t('chat', 'Chat and video', 'teal'), t('monitor', 'Sites and stores', 'indigo'),
    t('users', 'HR and automation', 'violet'), t('call', 'Contact center', 'mint'), t('code', 'Integrations', 'amber'), t('spark', 'CoPilot AI', 'rose')
  ],
  ai: [
    t('spark', 'CoPilot', 'violet'), t('bot', 'AI agents', 'teal'), t('code', 'Vibecode apps', 'indigo'), t('grid', 'Automation Studio', 'orange'),
    t('server', 'MCP server', 'blue'), t('chat', 'Call summaries', 'mint'), t('file', 'Document AI', 'amber'), t('chart', 'Unlimited AI', 'rose')
  ],
  plans: [
    t('cloud', 'Cloud', 'blue'), t('spark', 'Vibe+', 'violet'), t('server', 'On-Premise', 'teal'), t('rupee', 'Prices in ₹', 'orange'),
    t('users', 'Per company', 'mint'), t('calendar', 'Billed annually', 'amber'), t('lock', 'Your data', 'indigo'), t('chart', 'Up to 10,000 users', 'rose')
  ],
  services: [
    t('chart', 'Implementation', 'orange'), t('file', 'CRM migration', 'blue'), t('code', 'Customization', 'indigo'), t('chat', 'WhatsApp and calls', 'mint'),
    t('monitor', 'Websites', 'teal'), t('phone', 'Mobile apps', 'violet'), t('spark', 'AI solutions', 'rose'), t('cloud', 'Cloud and DevOps', 'amber')
  ],
  about: [
    t('pin', 'Bengaluru', 'orange'), t('award', 'Silver Partner', 'amber'), t('building', 'Real estate', 'teal'), t('monitor', 'Web and apps', 'blue'),
    t('spark', 'AI', 'violet'), t('users', 'One team', 'mint'), t('heart', 'Support after go-live', 'rose'), t('briefcase', 'Every industry', 'indigo')
  ],
  resources: [
    t('book', 'Guides', 'orange'), t('search', 'Comparisons', 'blue'), t('spark', 'Release updates', 'violet'), t('chat', 'FAQ', 'teal'),
    t('cloud', 'Cloud or own server', 'mint'), t('code', 'Vibecode', 'indigo'), t('rupee', 'Pricing', 'amber'), t('file', 'How-tos', 'rose')
  ],
  contact: [
    t('calendar', 'Free demo', 'orange'), t('search', 'CRM audit', 'blue'), t('chat', 'WhatsApp', 'mint'), t('call', 'Call us', 'teal'),
    t('monitor', 'Website or app', 'indigo'), t('mail', 'Email', 'violet'), t('pin', 'Bengaluru', 'amber'), t('users', 'Real people', 'rose')
  ],
  legal: [t('lock', 'Privacy', 'teal'), t('file', 'Terms', 'indigo'), t('users', 'Your data', 'orange'), t('mail', 'Contact us', 'mint')]
};

// Industry pages: business types from the page's own segments, in the industry's accent colour.
export const INDUSTRY_ICONS: Record<string, IconName[]> = {
  healthcare: ['medical', 'heart', 'calendar', 'file', 'chat', 'users'],
  manufacturing: ['factory', 'truck', 'file', 'chart', 'users', 'grid'],
  construction: ['helmet', 'building', 'file', 'grid', 'truck', 'briefcase'],
  education: ['cap', 'building', 'book', 'monitor', 'pin', 'users'],
  retail: ['bag', 'users', 'building', 'heart', 'phone', 'grid'],
  'professional-services': ['briefcase', 'file', 'chart', 'code', 'search', 'users']
};
