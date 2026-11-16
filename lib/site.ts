export const SITE = {
  name: 'Ausumn Labs',
  legalName: 'Ausumn Online Services Pvt Ltd',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://ausumnlabs.in').replace(/\/$/, ''),
  tagline: 'Bitrix24 Silver Partner and complete IT solutions, Bengaluru',
  description:
    'Ausumn Labs is a Bitrix24 Silver Partner in Bengaluru. We implement Bitrix24 CRM and AI, build custom websites and mobile apps, and deliver complete IT solutions for growing Indian businesses, with a deep focus on real estate.',
  phone: '+91 93680 79747',
  phoneHref: 'tel:+919368079747',
  phone2: '+91 98454 11072',
  phone2Href: 'tel:+919845411072',
  email: 'hello@ausumnlabs.in',
  whatsapp: 'https://wa.me/919368079747',
  address: {
    street: 'Prestige Lakeside Habitat, Varthur',
    city: 'Bengaluru',
    region: 'Karnataka',
    postal: '560087',
    country: 'IN'
  }
};

export type NavItem = { href: string; label: string; desc: string };
export type NavMenu = { id: string; label: string; href: string; items: NavItem[] };

export const NAV: NavMenu[] = [
  {
    id: 'bitrix24', label: 'Bitrix24', href: '/bitrix24',
    items: [
      { href: '/bitrix24', label: 'Platform overview', desc: 'One workspace for sales, projects, teams and service' },
      { href: '/bitrix24/crm', label: 'CRM and sales', desc: 'Leads, pipelines, estimates, payments, reports' },
      { href: '/bitrix24/tasks', label: 'Tasks and projects', desc: 'Kanban, Gantt, Scrum, workload, KPIs' },
      { href: '/bitrix24/collaboration', label: 'Collaboration', desc: 'Chat, video, calendars, documents, drive' },
      { href: '/bitrix24/sites', label: 'Sites and stores', desc: 'Websites, landing pages, forms, online store' },
      { href: '/bitrix24/hr-automation', label: 'HR and automation', desc: 'People, approvals, requests, workflows' },
      { href: '/bitrix24/contact-center', label: 'Contact center', desc: 'WhatsApp, calls, chat, email in one inbox' },
      { href: '/bitrix24/integrations', label: 'Integrations', desc: 'Telephony, Google, Microsoft, accounting, ERP' }
    ]
  },
  {
    id: 'ai', label: 'AI', href: '/ai',
    items: [
      { href: '/ai', label: 'AI overview', desc: 'What AI can do inside your Bitrix24' },
      { href: '/ai/copilot', label: 'CoPilot', desc: 'Your assistant across CRM, tasks, chat, calls' },
      { href: '/ai/automation-studio', label: 'Automation Studio', desc: 'Describe a workflow and AI creates it' },
      { href: '/ai/vibecode', label: 'Vibecode apps', desc: 'Describe an app and AI builds it' },
      { href: '/ai/agents', label: 'Bots and AI agents', desc: 'Digital helpers for repeated work' },
      { href: '/ai/mcp', label: 'MCP server', desc: 'Connect outside AI tools to your workspace' },
      { href: '/ai/vibe-plus', label: 'Vibe+ unlimited AI', desc: 'No monthly AI usage counter' }
    ]
  },
  {
    id: 'real-estate', label: 'Real Estate', href: '/real-estate',
    items: [
      { href: '/real-estate', label: 'Real estate overview', desc: 'Bitrix24 built around property sales' },
      { href: '/real-estate/brokers', label: 'Broker module', desc: 'Rent and resale inventory, buyers, tenants' },
      { href: '/real-estate/agencies', label: 'Agencies', desc: 'Teams, branches, lead routing' },
      { href: '/real-estate/builders', label: 'Builders and developers', desc: 'Projects, units, channel partners' }
    ]
  },
  {
    id: 'plans', label: 'Plans', href: '/plans',
    items: [
      { href: '/plans', label: 'Cloud and Vibe+ plans', desc: 'Compare plans and prices' },
      { href: '/plans/on-premise', label: 'On-Premise editions', desc: 'Bitrix24 on your own server' },
      { href: '/plans/compare', label: 'Compare all features', desc: 'Plan by plan feature table' },
      { href: '/plans/finder', label: 'Plan finder', desc: 'Answer four questions, get a plan' }
    ]
  },
  {
    id: 'services', label: 'Services', href: '/services',
    items: [
      { href: '/services/bitrix24-implementation', label: 'Bitrix24 implementation', desc: 'Setup from discovery to go-live' },
      { href: '/services/crm-migration', label: 'CRM migration', desc: 'Move from spreadsheets or another CRM' },
      { href: '/services/bitrix24-customization', label: 'Bitrix24 customization', desc: 'Custom fields, apps and automation' },
      { href: '/services/whatsapp-telephony', label: 'WhatsApp and telephony', desc: 'Calls and chats inside your CRM' },
      { href: '/services/web-development', label: 'Custom web development', desc: 'Websites, web apps, portals, e-commerce' },
      { href: '/services/mobile-app-development', label: 'Mobile app development', desc: 'Android and iOS apps for teams and customers' },
      { href: '/services/ai-solutions', label: 'AI solutions', desc: 'Assistants, chatbots, document AI, RAG' },
      { href: '/services/data-analytics', label: 'Data analytics and BI', desc: 'Live dashboards and automated reports' },
      { href: '/services/cloud-devops', label: 'Cloud and DevOps', desc: 'Hosting, AWS, Azure, CI/CD, security' },
      { href: '/services/it-consulting', label: 'IT consulting', desc: 'Technology roadmap and digital transformation' },
      { href: '/services/training-support', label: 'Training and support', desc: 'Adoption after go-live' },
      { href: '/services/fieldtrack', label: 'Ausumn FieldTrack', desc: 'Live location and field attendance' }
    ]
  },
  {
    id: 'industries', label: 'Industries', href: '/industries',
    items: [
      { href: '/industries/manufacturing', label: 'Manufacturing', desc: 'Dealers, orders, service visits' },
      { href: '/industries/construction', label: 'Construction', desc: 'Sites, contractors, approvals' },
      { href: '/industries/healthcare', label: 'Healthcare', desc: 'Patient enquiries, appointments, follow-ups' },
      { href: '/industries/education', label: 'Education', desc: 'Admissions, counselling, fee follow-ups' },
      { href: '/industries/retail', label: 'Retail', desc: 'Stores, orders, repeat customers' },
      { href: '/industries/professional-services', label: 'Service firms', desc: 'Clients, projects, billing' }
    ]
  },
  {
    id: 'resources', label: 'Resources', href: '/resources',
    items: [
      { href: '/resources', label: 'Blog and guides', desc: 'Plain guides on Bitrix24 and AI' },
      { href: '/resources/comparisons', label: 'Bitrix24 comparisons', desc: 'Choose the right setup' },
      { href: '/resources/updates', label: 'Release updates', desc: 'What changed in Bitrix24' },
      { href: '/resources/faq', label: 'FAQ', desc: 'Questions buyers ask first' }
    ]
  },
  {
    id: 'company', label: 'Company', href: '/about',
    items: [
      { href: '/about', label: 'About Ausumn Labs', desc: 'Who we are and how we work' },
      { href: '/about/partner', label: 'Partner credentials', desc: 'Our Bitrix24 partner status' },
      { href: '/contact', label: 'Contact', desc: 'Call, write or visit us' }
    ]
  }
];

export const FOOTER_COLS: Array<{ title: string; items: Array<[string, string]> }> = [
  { title: 'Platform', items: [['Bitrix24 CRM', '/bitrix24/crm'], ['Bitrix24 AI', '/ai'], ['Real estate CRM', '/real-estate'], ['Plans and pricing', '/plans'], ['Plan finder', '/plans/finder']] },
  { title: 'Services', items: [['Bitrix24 implementation', '/services/bitrix24-implementation'], ['Custom web development', '/services/web-development'], ['Mobile app development', '/services/mobile-app-development'], ['AI solutions', '/services/ai-solutions'], ['IT consulting', '/services/it-consulting'], ['All services', '/services']] },
  { title: 'Company', items: [['About', '/about'], ['Partner credentials', '/about/partner'], ['Guides', '/resources'], ['FAQ', '/resources/faq'], ['Privacy policy', '/privacy'], ['Terms of use', '/terms']] }
];

export const ABOUT_NAV = [
  { href: '/about', label: 'About' },
  { href: '/about/partner', label: 'Partner credentials' },
  { href: '/contact', label: 'Contact' }
];
