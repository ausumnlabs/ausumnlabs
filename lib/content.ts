// All page content for the Ausumn Labs website.
// Edit copy here; pages read from these lists.

export type TD = { t: string; d: string };
const f = (t: string, d: string): TD => ({ t, d });

/* ---------------- Home ---------------- */

export const PLATFORM_GROUPS = [
  { id: 'crm', href: '/bitrix24/crm', label: 'CRM and sales', title: 'Follow every lead from first contact to payment', text: 'Keep leads, deals, estimates and payments in one pipeline, with every call and chat on the record.', points: ['Leads, deals and custom pipelines', 'Estimates, invoices and online payments', 'Sales automation and reminders', 'Mobile CRM for field teams', 'Sales reports and BI dashboards'] },
  { id: 'tasks', href: '/bitrix24/tasks', label: 'Tasks and projects', title: 'Keep delivery visible', text: 'Turn sales commitments into tracked work, with owners and deadlines your managers can see.', points: ['Kanban, Gantt and Scrum views', 'Checklists and sub-tasks', 'Time tracking and workload', 'Task reports and KPIs', 'Task automation'] },
  { id: 'collab', href: '/bitrix24/collaboration', label: 'Collaboration', title: 'Give the team one place to talk and work', text: 'Bring messages, calls, files and calendars together, connected to the customer record.', points: ['Team chat and activity feed', 'Video meetings and recording', 'Shared calendars', 'Online documents and file storage', 'Workgroups with outside users'] },
  { id: 'sites', href: '/bitrix24/sites', label: 'Sites and stores', title: 'Capture leads straight into CRM', text: 'Publish pages and forms that send every enquiry to the right person in your CRM.', points: ['Website and landing page builder', 'Web forms and site widget', 'Online store and payments', 'Social selling', 'Online marketing tools'] },
  { id: 'hr', href: '/bitrix24/hr-automation', label: 'HR and automation', title: 'Run daily operations from one workspace', text: 'Handle people, requests and approvals in the same system as your sales and projects.', points: ['Employee profiles and company structure', 'Requests and approvals', 'Expense reports and work reports', 'Knowledge base', 'Workflow automation and RPA'] },
  { id: 'contact', href: '/bitrix24/contact-center', label: 'Contact center', title: 'Answer every channel from one inbox', text: "Connect WhatsApp, calls, live chat and email so nothing depends on one person's phone.", points: ['WhatsApp and Instagram', 'Telephony and call records', 'Website live chat', 'CRM forms', 'Email'] }
];

// Examples shown in the home page strip. We can connect any tool that offers an API or webhook.
export const INTEGRATIONS = ['Bitrix24', 'WhatsApp Business', '99acres', 'MagicBricks', 'Housing.com', 'NoBroker', 'Facebook Lead Ads', 'Instagram', 'Google Ads', 'IVR and telephony', 'Email', 'Tally', 'Razorpay', 'Google Workspace', 'Microsoft 365', 'Your website'];

export const HOME_PROBLEMS: Array<{ icon: 'inbox' | 'clock' | 'file' | 'grid'; t: string; d: string; fix: string }> = [
  { icon: 'inbox', t: 'Enquiries in five places', d: 'Calls, WhatsApp, portals, email and your website each hold a different part of the story.', fix: 'One inbox, every lead with its source' },
  { icon: 'clock', t: "Follow-ups in someone's head", d: 'When a call-back is missed, nobody notices until the buyer has moved on.', fix: 'Automatic reminders and manager alerts' },
  { icon: 'file', t: 'Reports built by hand', d: 'Managers wait for spreadsheets instead of seeing the pipeline as it stands.', fix: 'Live dashboards, no spreadsheets' },
  { icon: 'grid', t: 'Too many separate tools', d: 'Sales, tasks, chat and HR sit in apps that do not share any data.', fix: 'One workspace for the whole team' }
];

export const HOME_SERVICES: Array<{ icon: 'chart' | 'chat' | 'monitor' | 'phone' | 'spark' | 'pulse'; t: string; d: string; href: string }> = [
  { icon: 'chart', t: 'Bitrix24 implementation', d: 'Pipelines, automation, migration and training through to go-live.', href: '/services/bitrix24-implementation' },
  { icon: 'chat', t: 'WhatsApp and telephony', d: 'Every call and chat recorded on the customer record.', href: '/services/whatsapp-telephony' },
  { icon: 'monitor', t: 'Websites and web apps', d: 'Fast sites whose forms feed your CRM from day one.', href: '/services/web-development' },
  { icon: 'phone', t: 'Mobile apps', d: 'Android and iOS apps for customers and field teams.', href: '/services/mobile-app-development' },
  { icon: 'spark', t: 'AI and automation', d: 'Assistants, chatbots and AI workflows on your own data.', href: '/services/ai-solutions' },
  { icon: 'pulse', t: 'Dashboards and reports', d: 'Live numbers for managers, without manual reporting.', href: '/services/data-analytics' }
];

export const HOME_DEMOS = [
  { ask: 'Summarize this lead for me', tool: 'CoPilot in CRM', out: 'Buyer wants a 2 BHK resale flat in Whitefield. Budget and loan status were discussed on the call.\nNext step: share two options and confirm a Saturday site visit.' },
  { ask: 'If a lead gets no reply in 2 hours, alert the manager', tool: 'Automation Studio', out: 'Workflow drafted:\n1. New lead is assigned to an agent\n2. Wait 2 hours for an activity\n3. If none, notify the sales manager\nReview it, adjust it, then turn it on.' },
  { ask: 'Build me a daily list of site visits for each agent', tool: 'Vibecode', out: 'App plan:\nRead site visit activities from CRM, group them by agent and date, and show one simple daily view inside Bitrix24.\nReady for your review.' }
];

export const HOME_FAQS = [
  { q: 'Should we choose Cloud or On-Premise?', a: 'Cloud is the fastest way to start. On-Premise suits businesses that need their own server, source code access or stricter data control. We help you decide based on your team and your rules.' },
  { q: 'Can you move our data from spreadsheets or another CRM?', a: 'Yes. We map your contacts, deals and history into Bitrix24, then check the result with your team before go-live.' },
  { q: 'Is Bitrix24 AI available on every plan?', a: 'AI features vary by plan. Vibe+ plans add Vibecode, unlimited AI, MCP and unlimited REST API. We will show you what each plan includes.' },
  { q: 'Can you connect Bitrix24 to the software we already use?', a: 'Yes, if the software offers an API or webhooks. That covers most property portals, telephony and IVR providers, WhatsApp providers, accounting tools, payment gateways and your own website or app.' },
  { q: 'Do you build websites and mobile apps too?', a: 'Yes. Besides Bitrix24, we build custom websites, web apps and mobile apps, and connect them to your CRM so every enquiry lands in one place.' },
  { q: 'Do you support us after go-live?', a: 'Yes. We train your team and offer ongoing support, so the system keeps improving as your business changes.' }
];

/* ---------------- Bitrix24 ---------------- */

export type B24Cat = {
  slug: string; label: string; title: string; pitch: string; features: TD[]; flowTitle: string; flow: TD[]; ai: string;
  seoTitle: string; seoDesc: string; keywords: string[];
};

export const BITRIX24: B24Cat[] = [
  { slug: 'crm', label: 'CRM and sales', title: 'Every lead, deal and payment in one pipeline.', pitch: 'Capture enquiries from every channel, follow a clear sales process and see your numbers without building reports by hand.',
    features: [f('Leads and deals', 'Track each opportunity through stages built around your process.'), f('Contact center', 'Log calls, WhatsApp, chat and email against the customer.'), f('Estimates and invoices', 'Create documents from the deal and send them to the client.'), f('Payments and e-signature', 'Collect payments and get documents signed online.'), f('Marketing', 'Run email campaigns, social ads and landing pages.'), f('Analytics', 'Review funnels, performance, Sales Intelligence and BI Builder dashboards.')],
    flowTitle: 'What happens to a new enquiry', flow: [f('Captured', 'A form, call or chat creates a lead.'), f('Assigned', 'Rules send it to the right person.'), f('Followed up', 'Tasks and reminders keep it moving.'), f('Closed', 'Quote, payment and handover stay on the deal.')],
    ai: 'CoPilot transcribes calls, summarizes them and fills in deal fields for your team.',
    seoTitle: 'Bitrix24 CRM Implementation in Bengaluru', seoDesc: 'Bitrix24 CRM setup by a Silver Partner in Bengaluru: lead capture, sales pipelines, WhatsApp and calls, invoices, payments, automation and reports configured around how you sell.', keywords: ['Bitrix24 CRM', 'Bitrix24 CRM implementation', 'Bitrix24 CRM Bengaluru', 'CRM software India', 'sales pipeline CRM'] },
  { slug: 'tasks', label: 'Tasks and projects', title: 'Know who is doing what, and by when.', pitch: 'Plan work your way, track it in one place and spot delays before a client does.',
    features: [f('Kanban, Gantt and Scrum', 'Pick the view that suits each team.'), f('Checklists and sub-tasks', 'Break big jobs into clear steps.'), f('Time tracking', 'See how long work actually takes.'), f('Workload and KPIs', 'Balance work and measure task efficiency.'), f('Project collaboration', 'Keep chat, files and comments with the work.'), f('Task automation', 'Create and move tasks automatically.')],
    flowTitle: 'From a sold deal to delivered work', flow: [f('Deal won', 'A project or task set starts.'), f('Planned', 'Owners and deadlines are set.'), f('Tracked', 'Managers see progress and delays.'), f('Reported', 'Time and results are on record.')],
    ai: 'CoPilot drafts task descriptions, checklists and summaries, and turns a voice message into a task.',
    seoTitle: 'Bitrix24 Tasks and Project Management Setup', seoDesc: 'Set up Bitrix24 tasks and projects with Kanban, Gantt, Scrum, time tracking and KPIs. Configured and trained by Ausumn Labs, Bitrix24 Silver Partner.', keywords: ['Bitrix24 tasks', 'Bitrix24 project management', 'Kanban Gantt software India'] },
  { slug: 'collaboration', label: 'Collaboration', title: 'Stop switching apps to talk to your team.', pitch: 'Chat, meetings, calendars and documents live in the same workspace as your customers and projects.',
    features: [f('Chat and feed', 'Team messages and company updates in one place.'), f('Online meetings', 'Video calls with screen sharing and recording.'), f('Shared calendars', 'Company and personal calendars with open time slots.'), f('Documents and drive', 'Store, share and edit files online.'), f('Workgroups', 'Invite outside users with clear permissions.'), f('Mobile app', 'Messages, calls and notifications on the go.')],
    flowTitle: 'From a conversation to a result', flow: [f('Discuss', 'Talk in a chat or a call.'), f('Decide', 'Keep the decision and the context.'), f('Assign', 'Turn it into a task.'), f('Share', 'Files and notes stay with the team.')],
    ai: 'CoPilot Follow-Up gives a transcript, summary and suggested action items after a video call.',
    seoTitle: 'Bitrix24 Collaboration: Chat, Video, Drive', seoDesc: 'Bitrix24 chat, video meetings, calendars and documents in one workspace connected to your CRM and projects. Setup and training by Ausumn Labs.', keywords: ['Bitrix24 collaboration', 'Bitrix24 chat', 'team collaboration software India'] },
  { slug: 'sites', label: 'Sites and stores', title: 'Pages that send leads straight to sales.', pitch: 'Build websites, landing pages and stores connected directly to your CRM.',
    features: [f('Website builder', 'Templates, hosting and visual editing.'), f('Landing pages', 'Pages for campaigns with capture forms.'), f('Web forms', 'Order, registration and feedback forms.'), f('Website widget', 'Chat with visitors and take call-back requests.'), f('Online store', 'Inventory, orders, delivery and payments.'), f('Social selling', 'Sell through Facebook, Instagram, WhatsApp or Telegram.')],
    flowTitle: 'From a click to a sales task', flow: [f('Visit', 'A buyer lands on your page.'), f('Enquire', 'They use a form or chat.'), f('Enter CRM', 'A lead is created automatically.'), f('Convert', 'Sales picks it up.')],
    ai: 'CoPilot writes copy, creates images and can generate a site from a prompt.',
    seoTitle: 'Bitrix24 Sites, Landing Pages and Online Store', seoDesc: 'Bitrix24 websites, landing pages, web forms and online stores that send every enquiry straight into your CRM. Built and connected by Ausumn Labs.', keywords: ['Bitrix24 sites', 'Bitrix24 landing page', 'Bitrix24 web form'] },
  { slug: 'hr-automation', label: 'HR and automation', title: 'Run people and processes without paper.', pitch: 'Handle employee records, requests, approvals and internal updates in one place.',
    features: [f('Employee management', 'Profiles, company structure and permissions.'), f('Requests and approvals', 'Leave, purchase and expense requests with clear approvers.'), f('Work management', 'KPIs, work reports and supervisor view.'), f('Knowledge base', 'Keep policies and how-tos easy to find.'), f('Internal communication', 'Announcements, chats and polls.'), f('Workflow automation', 'Automate repeated steps with RPA and rules.')],
    flowTitle: 'A request, start to finish', flow: [f('Request', 'An employee submits a form.'), f('Route', 'It reaches the right approver.'), f('Approve', 'Decisions are recorded.'), f('Record', 'The result stays on file.')],
    ai: 'CoPilot helps draft updates and summaries, and Automation Studio builds workflows from a plain description.',
    seoTitle: 'Bitrix24 HR and Workflow Automation', seoDesc: 'Automate approvals, leave and expense requests, and employee records with Bitrix24 HR and workflow automation. Setup by Ausumn Labs, Bengaluru.', keywords: ['Bitrix24 HR', 'Bitrix24 workflow automation', 'Bitrix24 RPA', 'business process automation India'] },
  { slug: 'contact-center', label: 'Contact center', title: 'One inbox for every customer conversation.', pitch: 'Bring phone, WhatsApp, Instagram, live chat, email and forms together, and attach every conversation to the CRM.',
    features: [f('WhatsApp', 'Connect WhatsApp conversations to your CRM.'), f('Telephony', 'Call from Bitrix24 and keep call records.'), f('Live chat', 'Talk to visitors on your website.'), f('Email', 'Keep customer emails with the record.'), f('Instagram', 'Answer social enquiries from one place.'), f('CRM forms', 'Collect details and route them instantly.')],
    flowTitle: 'From a message to a tracked lead', flow: [f('Message', 'A customer contacts you.'), f('Route', 'It reaches an available agent.'), f('Reply', 'The full history is visible.'), f('Record', 'The chat stays on the CRM record.')],
    ai: 'AI agents in Open Channels and AI speech analytics can support your service team.',
    seoTitle: 'Bitrix24 Contact Center: WhatsApp and Calls in CRM', seoDesc: 'Connect WhatsApp, telephony, live chat, Instagram and email to Bitrix24 so every conversation lands on the CRM record. Setup by Ausumn Labs.', keywords: ['Bitrix24 WhatsApp integration', 'Bitrix24 contact center', 'Bitrix24 telephony India'] },
  { slug: 'integrations', label: 'Integrations', title: 'Connect the tools you already rely on.', pitch: 'Use Bitrix24 Market apps, REST API and custom work to link your telephony, messaging, accounting and business systems.',
    features: [f('WhatsApp API', 'Connect your chosen WhatsApp provider.'), f('Telephony', 'Link your calling provider or PBX.'), f('Google and Microsoft', 'Work with mail, calendars and files.'), f('Accounting and ERP', 'Sync customers, orders and invoices with systems such as Tally or SAP.'), f('Websites and portals', 'Send enquiries into CRM from your sites.'), f('Custom apps', 'Build what the Market does not offer.')],
    flowTitle: 'How we connect a system', flow: [f('Map', 'Decide what data moves and when.'), f('Build', 'Use a Market app or REST API.'), f('Test', 'Check real records end to end.'), f('Monitor', 'Keep the link healthy after launch.')],
    ai: 'With Vibecode and MCP, your systems and outside AI tools can work with Bitrix24 data under set permissions.',
    seoTitle: 'Bitrix24 Integration Services: API, ERP, Telephony', seoDesc: 'Bitrix24 REST API integrations with WhatsApp, telephony, Google, Microsoft, Tally, ERP and your website. Built, tested and monitored by Ausumn Labs.', keywords: ['Bitrix24 integration', 'Bitrix24 REST API', 'Bitrix24 Tally integration', 'Bitrix24 developer India'] }
];

/* ---------------- AI ---------------- */

export type AICap = {
  slug: string; label: string; avail: string; title: string; text: string; points: string[];
  asks: Array<{ a: string; o: string }>; seoTitle: string; seoDesc: string;
};

export const AI_CAPS: AICap[] = [
  { slug: 'copilot', label: 'CoPilot', avail: 'Cloud and On-Premise', title: 'An assistant in every part of your workspace.', text: 'CoPilot works inside chat, CRM, tasks, feed, video calls, sites and email.',
    points: ['Transcribes and summarizes client calls', 'Fills in lead and deal fields', 'Drafts tasks, checklists and messages', 'Turns voice messages into tasks', 'Gives follow-up notes after video calls'],
    asks: [{ a: "Summarize today's client call", o: 'Client asked for a revised quote and delivery by month-end.\nAction: send the updated quote and book a review call.' }, { a: 'Draft a reply to this WhatsApp enquiry', o: 'Thanks for reaching out. I can share two options that fit your budget today. Is a call at 5 pm convenient?' }],
    seoTitle: 'Bitrix24 CoPilot AI Assistant Setup', seoDesc: 'Bitrix24 CoPilot transcribes calls, fills CRM fields and drafts messages and tasks. Ausumn Labs sets it up safely and trains your team.' },
  { slug: 'automation-studio', label: 'Automation Studio', avail: 'In Bitrix24', title: 'Describe a process. Review the workflow.', text: 'Tell CoPilot what should happen, and it creates a no-code workflow you can review and adjust before it goes live.',
    points: ['Build workflows through chat', 'Review every step before launch', 'Automate approvals and reminders', 'Reduce repeated manual work'],
    asks: [{ a: 'Remind sales if a quote gets no reply in 3 days', o: 'Workflow draft:\n1. Quote is sent\n2. Wait 3 days\n3. If there is no reply, create a follow-up task\n4. Notify the deal owner' }, { a: 'Send purchase requests over a limit to the owner', o: 'Workflow draft:\n1. Employee submits a request\n2. Check the amount\n3. Above the limit, ask the owner to approve\n4. Otherwise, send it to the manager' }],
    seoTitle: 'Bitrix24 Automation Studio: AI Workflows', seoDesc: 'Describe a process in plain words and Bitrix24 Automation Studio builds the workflow. Ausumn Labs reviews, tests and launches it with you.' },
  { slug: 'vibecode', label: 'Vibecode apps', avail: 'Included with Vibe+', title: 'Your internal tool, described in plain words.', text: "Vibecode is Bitrix24's AI app builder. It helps create business apps, reports and automations connected to your workspace. Developers can also work through tools such as Claude Code and Codex.",
    points: ['Sales assistants and lead scoring boards', 'HR bots and onboarding trackers', 'Custom reports and dashboards', 'Secure hosting with central access control'],
    asks: [{ a: 'Build a daily CRM digest for each salesperson', o: 'App plan:\nRead open deals, group those closing this week, going stale or waiting on a reply, and show one morning view.' }, { a: 'Build a leave board for my team', o: 'App plan:\nShow a two-week timeline of who is out, with a request form and a note to the manager.' }],
    seoTitle: 'Bitrix24 Vibecode AI App Builder', seoDesc: 'Vibecode lets you build Bitrix24 apps by describing them. Ausumn Labs helps pick the right problem, protect your data and keep apps reliable.' },
  { slug: 'agents', label: 'Bots and AI agents', avail: 'Check by plan', title: 'Digital helpers for repeated work.', text: 'Build bots and agents that answer questions, route requests, send reminders and work with CRM data inside Bitrix24.',
    points: ['Answer staff questions from your policies', 'Route incoming requests', 'Remind teams about meetings and tasks', 'Work where your team already chats'],
    asks: [{ a: 'What is our leave policy for new joiners?', o: 'Sample bot answer, based only on your uploaded handbook, with the section it came from.' }, { a: 'Route this support request', o: 'Category: billing. Priority: high. Sent to the accounts team, with a note for review.' }],
    seoTitle: 'Bitrix24 AI Agents and Chatbots', seoDesc: 'AI agents and bots in Bitrix24 that answer questions, route requests and work with CRM data. Designed and set up by Ausumn Labs.' },
  { slug: 'mcp', label: 'MCP server', avail: 'Part of Vibe+', title: 'Connect outside AI tools to your workspace.', text: 'MCP gives tools like ChatGPT and Claude a structured, secure way to read data and take allowed actions in Bitrix24.',
    points: ['Create tasks and change their status', 'Find deals and view pipeline stages', 'Analyze won and lost amounts', 'Permission-based access'],
    asks: [{ a: 'Find open deals over a set value', o: 'The AI tool searches your CRM and lists matching deals, limited to what your permissions allow.' }, { a: 'Create a task from this conversation', o: 'Task created with an assignee and deadline, after you confirm the details.' }],
    seoTitle: 'Bitrix24 MCP Server Setup', seoDesc: 'Connect ChatGPT, Claude and other AI tools to Bitrix24 through the MCP server, with permission-based access. Setup by Ausumn Labs.' },
  { slug: 'vibe-plus', label: 'Vibe+ unlimited AI', avail: 'Cloud plans', title: 'For teams that use AI every day.', text: 'Vibe+ adds Vibecode, unlimited AI and an MCP server to Bitrix24 plans, with higher limits across the platform.',
    points: ['No monthly AI usage limits on Standard Vibe+ and above', 'Unlimited REST API', 'Unlimited Bitrix24 Market access', 'Up to 4 TB storage, 350,000 emails a month and 30 admins'],
    asks: [{ a: 'Do I need Vibe+?', o: 'Consider it if you hit AI limits, want custom apps, or need heavy integrations. Everyday users may be fine on a standard plan.' }, { a: 'Which Vibe+ plan fits us?', o: 'Use the plan finder or ask us. It depends on your team size and the features you need.' }],
    seoTitle: 'Bitrix24 Vibe+ Plans Explained', seoDesc: 'What Bitrix24 Vibe+ adds: Vibecode, unlimited AI, MCP and unlimited REST API. Find out if your team needs it, with help from Ausumn Labs.' }
];

/* ---------------- Real estate ---------------- */

export const RE_JOURNEY: Array<[string, string]> = [
  ['List the property', 'A property posted on your website appears in Bitrix24 with its details.'],
  ['Capture the enquiry', 'Website, calls and chats create a lead with its source.'],
  ['Assign and qualify', 'The right person gets the lead and records the requirement.'],
  ['Visit and negotiate', 'Reminders keep the site visit and follow-ups on track.'],
  ['Book and hand over', 'Documents and tasks stay with the deal through to closure.']
];

export type Shot = { src: string; w: number; h: number; title: string; alt: string; caption: string };

export type REModule = {
  slug: string; label: string; name: string; status: string; first: boolean; who: string;
  title: string; text: string;
  problems: Array<[string, string]>;
  features: TD[];
  pipelines: Array<{ name: string; stages: string[] }>;
  steps: TD[];
  screens: Shot[];
  faqs: Array<{ q: string; a: string }>;
  seoTitle: string; seoDesc: string; keywords: string[];
};

const shot = (name: string, w: number, h: number, title: string, alt: string, caption: string): Shot => ({ src: `/screens/${name}.webp`, w, h, title, alt, caption });

// Content from the Broker CRM and Builder CRM feature sheets (Ausumn Labs, 2026).
export const RE_MODULES: REModule[] = [
  { slug: 'brokers', label: 'Brokers', name: 'Broker CRM', status: 'Live · rentals and resale', first: true, who: 'Brokers handling rentals and resale',
    title: 'Every enquiry, flat, site visit and token in one place.', text: 'Ready-made pipelines, automation and documents that run a broker’s day, so no lead goes cold and no flat gets double-booked. Built from real broker work in Bengaluru.',
    problems: [
      ['Website and portal enquiries sit unanswered for hours', 'Every enquiry becomes a deal with an agent and a 15-minute call task. The manager is alerted if nobody calls.'],
      ['Agents search WhatsApp and Excel for matching flats', 'One click shows matching flats, scored for budget, BHK, locality and type.'],
      ['Site visits are forgotten, or customers do not turn up', 'Reminders 24 hours and 2 hours before, plus a ready WhatsApp message for the customer.'],
      ['The same flat is promised to two clients', 'Property status updates itself: Available, Hold, Under Negotiation, Booked, Sold or Rented.'],
      ['Token receipts and EOIs are typed by hand', 'EOI and Token Receipt are generated at booking, with your letterhead.'],
      ['Nobody knows which flats are free in which area', 'An inventory board by city, zone and area, with photo, price and status on every flat.']
    ],
    features: [
      f('Inventory by area', 'City, then zone, then area. Pick East Bengaluru and see Varthur, Whitefield, Sarjapur Road and Bellandur as columns, with available count and typical rent and sale price.'),
      f('Property details in one tap', 'Photos, price, deposit, size, floor, furnishing, facing, map and owner, without opening the CRM card.'),
      f('Owner check in one tap', 'Call the owner or send a ready WhatsApp asking if the flat is still available. Listings not updated for 45 days are flagged.'),
      f('Smart property matching', 'Every requirement ranks your available flats with a score out of 100 and the reason for each match.'),
      f('Interested clients for a flat', 'Open any flat to see which existing clients want one like it, ranked by fit, with a WhatsApp button for each.'),
      f('Share flats on WhatsApp', 'Pick flats from the match list and send them to the client in one tap, with prices, sizes and links.'),
      f('Site visit management', 'Visits linked to customer, flat and deal, with confirmation, reminders, a feedback task and a reschedule task for no-shows.'),
      f('WhatsApp without a subscription', 'Confirmation, reminder and reschedule messages are written for the agent. One tap opens WhatsApp with the message ready.'),
      f('Website enquiry routing', 'Website enquiries become deals with the right agent, the enquired flat and Buy or Rent filled in.'),
      f('Documents', 'Expression of Interest and Token Amount Receipt generated at booking, as PDF.'),
      f('Lease renewal reminders', 'About 10.5 months after a rental closes, the agent is reminded to call tenant and landlord. Repeat brokerage instead of a lost client.'),
      f('Business overview', 'Flats available, clients searching, visits this week, feedback due, both pipelines and brokerage earned.')
    ],
    pipelines: [
      { name: 'Buyer / Tenant', stages: ['New Inquiry', 'Requirement Identified', 'Properties Shared', 'Interested', 'Site Visit Scheduled', 'Site Visit Completed', 'Offer / Negotiation', 'Booking / Token', 'Documentation', 'Payment', 'Won'] },
      { name: 'Seller / Landlord', stages: ['New Property Listed', 'Inspection & Valuation', 'Mandate', 'Agreement Signed', 'Active Marketing', 'Offer Received', 'Negotiation', 'Registration / Handover', 'Won'] }
    ],
    steps: [
      f('Enquiry arrives', 'Deal created, agent assigned, flat linked, Rent set. Call task due in 15 minutes.'),
      f('No call in 15 minutes', 'The manager gets an alert.'),
      f('Requirement identified', 'Budget, BHK and locality saved once. Task: share matching flats.'),
      f('Flats shared', 'Best 3 to 5 matches sent on WhatsApp. Follow-up task if the client is silent for 2 days.'),
      f('Interested', 'The flat goes on Hold so nobody else promises it.'),
      f('Site visit', 'Visit record, WhatsApp confirmation, reminders 24 h and 2 h before, feedback task after.'),
      f('Negotiation and token', 'Flat marked Under Negotiation, then Booked. EOI and Token Receipt generated.'),
      f('Won', 'Flat marked Rented or Sold, requirement closed as Fulfilled.')
    ],
    screens: [
      shot('broker-inventory', 1600, 1204, 'Inventory by area', 'Broker CRM inventory board showing East Bengaluru areas as columns with flats, prices and BHK', 'Inventory by area. City, then zone, then one column per area, with photo, price and BHK on every flat.'),
      shot('broker-property', 1600, 1204, 'Every detail in one tap', 'Property panel with photo gallery, price, status, WhatsApp share and owner contact', 'Tap a flat: gallery, price, status, WhatsApp share and a one-tap owner availability check.'),
      shot('broker-matching', 1600, 1462, 'Smart property matching', 'Matching flats ranked out of 100 for a client requirement, with reasons and a WhatsApp send bar', 'Matching flats for a requirement, scored out of 100 with reasons. Pick flats and send them on WhatsApp.'),
      shot('broker-interested-clients', 1600, 889, 'Who to call first', 'Clients for this flat, ranked by fit, each with a WhatsApp button', 'Interested clients for a flat: who to call first when a new listing comes in.'),
      shot('broker-overview', 1600, 1522, 'Your business every morning', 'Broker business overview with inventory status, upcoming site visits and both pipelines', 'Business overview: inventory, visits this week and both pipelines on one screen.'),
      shot('broker-automation', 1600, 839, 'Automation that runs your day', 'Bitrix24 automation rules on the Buyer / Tenant pipeline', 'Automation rules behind the Buyer / Tenant pipeline: tasks, SLA alert, records and status changes.')
    ],
    faqs: [
      { q: 'Do we need to pay for WhatsApp?', a: 'No. The CRM prepares the message and the agent sends it from their own WhatsApp in one tap. Fully automatic sending is possible later with a paid WhatsApp connector.' },
      { q: 'Can it bring leads from my website and portals?', a: 'Website enquiries come in automatically. Portals such as 99acres, MagicBricks and Housing.com can be connected through their lead emails or integrations during setup.' },
      { q: 'Will my agents use it on the phone?', a: 'Yes. Tasks, reminders, calls and WhatsApp links all work in the Bitrix24 mobile app.' },
      { q: 'Can it handle both sale and rent?', a: 'Yes. The deal type (Buy, Rent, Sell or Lease Out) decides whether a flat ends as Sold or Rented.' },
      { q: 'Is my data safe?', a: 'Your data stays in your own Bitrix24 account, with user roles and permissions.' }
    ],
    seoTitle: 'Broker CRM on Bitrix24 for Real Estate Brokers in India', seoDesc: 'Real estate broker CRM on Bitrix24: inventory by area, property matching, WhatsApp sharing, site visit reminders, EOI and token receipts, and lease renewals. Built by Ausumn Labs, Bengaluru.',
    keywords: ['real estate broker CRM', 'CRM for property brokers India', 'Bitrix24 real estate broker', 'rental CRM Bengaluru', 'property matching CRM'] },

  { slug: 'builders', label: 'Builders', name: 'Builder CRM', status: 'Live · projects and units', first: true, who: 'Builders and developers selling project by project',
    title: 'Projects, towers, units, bookings and channel partners in one place.', text: 'Live unit inventory, a sales pipeline from enquiry to handover, automatic unit status, cost sheets, booking documents and channel partner commissions, on your own Bitrix24.',
    problems: [
      ['Inventory lives in an Excel sheet that is never up to date', 'A colour-coded tower × floor grid shows every unit’s live status, from Available to Handed Over.'],
      ['The same unit is promised to two buyers', 'At Unit Selected the unit is blocked for 48 hours. Token, booking and agreement update it automatically.'],
      ['Cost sheets are worked out on a calculator', 'One-tap cost sheet per unit with base rate, floor rise, PLC, parking, GST and stamp duty, shared on WhatsApp.'],
      ['Site visits and follow-ups slip', 'The CRM creates the site visit record, a 24-hour reminder and a feedback task.'],
      ['Channel partner payouts are argued over', 'A commission record with the partner’s %, GST and total payable is created at agreement and tracked to Paid.'],
      ['Management cannot see sales value or unsold stock', 'A dashboard shows units available, booked value, unsold inventory value, pipeline and commissions.']
    ],
    features: [
      f('Projects', 'RERA number, location, towers, total units, launch and possession dates, base rate, amenities, approved banks and default partner commission.'),
      f('Units', 'Every flat, villa, plot or shop with tower, floor, configuration, carpet, built-up and super built-up area, facing, car parks and price components.'),
      f('Inventory grid', 'Tower-by-floor view of the whole project, coloured by status, with price on every unit and an Available only filter for sales calls.'),
      f('Cost sheet', 'Price breakdown for any unit with a discount box. Save the final price to the unit, or share it on WhatsApp in one tap.'),
      f('Automatic unit status', 'Unit Selected blocks the unit for 48 hours. Token, Booking, Agreement, Registration and Handover move it along; lost or cancelled deals release it.'),
      f('Site visits', 'Visit record with project, unit and time, a reminder the day before and a feedback task after.'),
      f('Stage rules', 'Visit date, unit, token, booking amount and date, agreement value and payment plan are compulsory at the right stages.'),
      f('Booking documents', 'Booking Form and Booking Amount Receipt generated at booking, numbered BD-1, BD-2 and on.'),
      f('Channel partners', 'Empanelment pipeline from Applied to Empanelled, with RERA, PAN, GSTIN, localities and commission %.'),
      f('Commissions', 'Created at agreement for partner-sourced deals with sale value, %, GST and total payable. Eligible at registration, then Invoice, Approved, Paid.'),
      f('Payment plans and loans', 'Construction-linked, down payment, subvention or flexi plans, home-loan status, amount received, registration and handover dates.'),
      f('Builder dashboard', 'Per-project KPIs, inventory grid, pipeline by stage and commission totals by status.')
    ],
    pipelines: [
      { name: 'Builder Sales', stages: ['New Lead', 'Requirement', 'Project Suggested', 'Site Visit', 'Follow-up', 'Unit Selected', 'Negotiation', 'Token', 'Booking', 'Agreement', 'Payment Plan', 'Registration', 'Handover'] },
      { name: 'Channel Partner', stages: ['Applied', 'KYC / RERA', 'Agreement', 'Empanelled'] }
    ],
    steps: [
      f('Enquiry', 'Deal in Builder Sales, call task in 15 minutes, manager alerted if nobody calls.'),
      f('Project suggested', 'Agent shares the project and 2 to 3 units with their cost sheets.'),
      f('Site visit', 'Visit record, reminder a day before, feedback task after.'),
      f('Unit selected', 'Unit blocked for 48 hours. Task to collect the token.'),
      f('Token and booking', 'Unit moves to Token Received, then Booked. Booking Form and Receipt generated.'),
      f('Agreement', 'Unit marked Agreement Signed. Partner commission created with GST.'),
      f('Payment plan and registration', 'Payment schedule and demand letter task. Unit Registered, commission Eligible.'),
      f('Handover', 'Unit Handed Over, date recorded. Cancelled bookings release the unit.')
    ],
    screens: [
      shot('builder-inventory', 1600, 1669, 'The whole project on one screen', 'Builder CRM dashboard with project KPIs and a tower by floor inventory grid coloured by unit status', 'Project KPIs and the tower × floor inventory grid. Every unit shows its status colour and price.'),
      shot('builder-cost-sheet', 1600, 1121, 'Cost sheet in ten seconds', 'Cost sheet for a 3 BHK unit with base price, floor rise, PLC, parking, GST and stamp duty', 'Cost sheet on every unit: all-inclusive price in seconds, with discount, save and share on WhatsApp.'),
      shot('builder-automation', 1600, 839, 'Automation on every stage', 'Bitrix24 automation rules on the Builder Sales pipeline', 'Automation on the Builder Sales pipeline: call task, SLA alert, site visit, unit blocked for 48 hours.')
    ],
    faqs: [
      { q: 'Can we import our price list and units?', a: 'Yes. We import your inventory sheet (tower, floor, unit, areas, rates) during setup.' },
      { q: 'Can price differ by floor or view?', a: 'Yes. Floor rise and PLC are set per unit, and the cost sheet adds them automatically.' },
      { q: 'Do channel partners get access?', a: 'By default partners are records with commission tracking. They can be given restricted access later.' },
      { q: 'Can it send demand letters?', a: 'The Payment Plan stage creates the demand letter task today. Automated demand letters can be added per payment schedule.' },
      { q: 'Is it separate from the broker CRM?', a: 'Yes. Builder CRM has its own menu, pipelines, fields and documents.' }
    ],
    seoTitle: 'Builder CRM on Bitrix24 for Real Estate Developers in India', seoDesc: 'Builder and developer CRM on Bitrix24: tower × floor unit inventory, cost sheets with GST and stamp duty, unit blocking, booking documents and channel partner commissions.',
    keywords: ['builder CRM India', 'real estate developer CRM', 'CRM for builders', 'Bitrix24 builder CRM', 'channel partner commission CRM', 'unit inventory CRM'] },

  { slug: 'agencies', label: 'Agencies', name: 'Agency CRM', status: 'For multi-agent teams', first: false, who: 'Agencies with teams of agents and branches',
    title: 'One view of every agent, lead and listing.', text: 'For agencies running several agents or branches. Builds on the Broker CRM with team pipelines, lead routing and manager reports, set up around how your agency works.',
    problems: [
      ['Leads go to whoever picks up the phone', 'Leads are shared by rule across agents, by area, project or turn.'],
      ['Each agent keeps their own list of flats', 'One shared inventory the whole team works from.'],
      ['Client conversations sit on personal phones', 'Calls and WhatsApp stay on the client record.'],
      ['Managers chase agents for updates', 'Team pipelines and reports show activity and results by agent.']
    ],
    features: [
      f('Team pipelines', 'See each agent’s pipeline and activity.'),
      f('Lead routing', 'Share leads by rule across the team.'),
      f('Shared inventory', 'Give agents one list to work from.'),
      f('Calls and WhatsApp', 'Keep client conversations on the record.'),
      f('Permissions', 'Control who can see which data.'),
      f('Manager reports', 'Review sources, activity and results by agent and branch.')
    ],
    pipelines: [],
    steps: [],
    screens: [],
    faqs: [
      { q: 'How is it different from the Broker CRM?', a: 'It includes the broker tools, plus routing, team pipelines, permissions and reports for managers.' },
      { q: 'Can each branch see only its own data?', a: 'Yes. Roles and permissions control who sees which leads, listings and reports.' }
    ],
    seoTitle: 'Real Estate Agency CRM on Bitrix24', seoDesc: 'Bitrix24 CRM for real estate agencies: team pipelines, lead routing, shared inventory, call and WhatsApp records and manager reports by agent and branch.',
    keywords: ['real estate agency CRM', 'CRM for property agencies India', 'Bitrix24 real estate agency'] }
];

/* ---------------- Industries ---------------- */

export type Industry = { slug: string; label: string; short: string; title: string; text: string; setup: string[]; flow: string[] };

export const INDUSTRIES: Industry[] = [
  { slug: 'manufacturing', label: 'Manufacturing', short: 'manufacturing', title: 'From dealer enquiry to dispatch.', text: 'Keep plant, supplier and dealer conversations on one record, so sales and operations see the same order.', setup: ['Dealer and distributor pipeline', 'Quotes and product catalog', 'Order follow-ups', 'Service requests', 'Team tasks across departments'], flow: ['Enquiry', 'Quotation', 'Negotiation', 'Order', 'Dispatch'] },
  { slug: 'construction', label: 'Construction', short: 'construction', title: 'Keep sites, teams and approvals in step.', text: 'Track client work, contractors and internal approvals without chasing updates on phone calls.', setup: ['Project tracking by site', 'Contractor and vendor records', 'Approval workflows', 'Documents and drawings storage', 'Field updates through mobile'], flow: ['Lead', 'Estimate', 'Contract', 'Execution', 'Handover'] },
  { slug: 'healthcare', label: 'Healthcare', short: 'healthcare', title: 'Follow up with every patient enquiry.', text: 'Bring calls, WhatsApp and website enquiries together so patients get a timely reply.', setup: ['Enquiry and appointment pipeline', 'Booking and reminders', 'Call and chat records', 'Team roles and access limits', 'Follow-up tasks'], flow: ['Enquiry', 'Appointment', 'Visit', 'Follow-up'] },
  { slug: 'education', label: 'Education', short: 'education', title: 'Turn enquiries into admissions.', text: 'Give counsellors one view of each student, from first enquiry through to fee follow-up.', setup: ['Admissions pipeline', 'Counsellor assignment', 'WhatsApp and call follow-ups', 'Campaign source tracking', 'Fee reminders'], flow: ['Enquiry', 'Counselling', 'Application', 'Admission'] },
  { slug: 'retail', label: 'Retail', short: 'retail', title: 'Know your customers across every store.', text: 'Connect online and store orders, customer history and repeat sales in one system.', setup: ['Online store and CRM', 'Inventory and catalog', 'Customer history', 'Marketing campaigns', 'Multi-branch reporting'], flow: ['Visit', 'Order', 'Delivery', 'Repeat sale'] },
  { slug: 'professional-services', label: 'Service firms', short: 'service firm', title: 'Win clients and deliver on time.', text: 'Run sales, projects and billing in one place, without losing the client context between teams.', setup: ['Client pipeline', 'Project and task templates', 'Time tracking', 'Invoices and estimates', 'Client communication history'], flow: ['Lead', 'Proposal', 'Project', 'Invoice', 'Renewal'] }
];

/* ---------------- Services ---------------- */

export type Service = {
  slug: string; group: 'bitrix24' | 'build';
  label: string; tag: string; eyebrow: string; title: string; text: string; cta: string;
  items: string[]; flowTitle: string; flow: TD[];
  about?: string[]; tech?: string[]; faqs?: Array<{ q: string; a: string }>;
  seoTitle: string; seoDesc: string; keywords: string[]; serviceType: string;
};

export const SERVICES: Service[] = [
  { slug: 'bitrix24-implementation', group: 'bitrix24', label: 'Bitrix24 implementation', tag: 'Most requested', eyebrow: 'Bitrix24 implementation partner', title: 'A Bitrix24 setup that matches how you work.', text: 'We start with your process, then configure Bitrix24 around it and take your team through to go-live.', cta: 'Plan my implementation',
    items: ['Process discovery and plan choice', 'Pipelines, fields and user roles', 'Automation and reminders', 'Dashboards and reports', 'Go-live support'],
    flowTitle: 'From first call to go-live', flow: [f('Discover', 'Map your process and gaps.'), f('Configure', 'Build the agreed setup.'), f('Test', 'Run real scenarios with your team.'), f('Launch', 'Go live with support at hand.')],
    about: ['Buying Bitrix24 takes minutes. Getting a whole team to use it every day is the real work. As a Bitrix24 Silver Partner in Bengaluru, Ausumn Labs plans, configures and launches Bitrix24 CRM, tasks, contact center and automation around the way your business already sells and delivers.', 'We work with businesses across India, running discovery, setup and training in person in Bengaluru or online.'],
    faqs: [{ q: 'How long does a Bitrix24 implementation take?', a: 'It depends on your pipelines, integrations and data. We share a timeline after discovery.' }, { q: 'Do you help us choose the right Bitrix24 plan?', a: 'Yes. Plan choice is part of discovery. We compare Cloud, Vibe+ and On-Premise against your team size and needs.' }, { q: 'Can you implement Bitrix24 outside Bengaluru?', a: 'Yes. We can run discovery, setup and training online for teams anywhere in India.' }],
    seoTitle: 'Bitrix24 Implementation Partner in Bengaluru, India', seoDesc: 'Bitrix24 Silver Partner for CRM implementation in Bengaluru and across India: discovery, pipelines, automation, integrations, data migration, training and go-live support.', keywords: ['Bitrix24 partner India', 'Bitrix24 partner Bengaluru', 'Bitrix24 implementation', 'Bitrix24 consultant', 'Bitrix24 Silver Partner'], serviceType: 'Bitrix24 CRM implementation' },
  { slug: 'crm-migration', group: 'bitrix24', label: 'CRM migration', tag: 'Move safely', eyebrow: 'Data migration', title: 'Bring your history with you.', text: 'Move contacts, companies, deals and tasks from spreadsheets or another CRM, such as Zoho, HubSpot or Salesforce, into a clean Bitrix24 structure.', cta: 'Discuss my migration',
    items: ['Data audit and clean-up', 'Field mapping', 'Duplicate handling', 'Test import', 'Final check with your team'],
    flowTitle: 'How we move your data', flow: [f('Audit', 'See what you have.'), f('Map', 'Match it to new fields.'), f('Test', 'Import a sample first.'), f('Move', 'Complete the final import.')],
    seoTitle: 'Migrate to Bitrix24 from Excel, Zoho, HubSpot or Salesforce', seoDesc: 'Move contacts, deals and history to Bitrix24 from spreadsheets, Zoho CRM, HubSpot or Salesforce with an audit, field mapping and test import first.', keywords: ['Bitrix24 migration', 'Zoho to Bitrix24', 'HubSpot to Bitrix24', 'CRM data migration India'], serviceType: 'CRM data migration' },
  { slug: 'bitrix24-customization', group: 'bitrix24', label: 'Bitrix24 customization', tag: 'Built for you', eyebrow: 'Bitrix24 development', title: 'When standard setup is not enough.', text: 'We build custom fields, smart processes, workflows, REST API apps and AI-built tools for your needs.', cta: 'Tell us what you need',
    items: ['Smart processes and custom records', 'Business process automation', 'REST API apps', 'Vibecode tools', 'Website and portal connections'],
    flowTitle: 'From need to working tool', flow: [f('Scope', 'Agree what it must do.'), f('Build', 'Create it in small steps.'), f('Review', 'Test with real users.'), f('Support', 'Maintain and improve it.')],
    seoTitle: 'Bitrix24 Customization and App Development', seoDesc: 'Custom Bitrix24 development: smart processes, business process automation, REST API apps, Vibecode tools and portal integrations by Ausumn Labs.', keywords: ['Bitrix24 customization', 'Bitrix24 developer', 'Bitrix24 REST API development', 'Bitrix24 smart process'], serviceType: 'Bitrix24 customization' },
  { slug: 'whatsapp-telephony', group: 'bitrix24', label: 'WhatsApp and telephony', tag: 'Connected channels', eyebrow: 'Integrations', title: 'Every call and chat on the CRM record.', text: 'Connect WhatsApp and your phone system to Bitrix24, so conversations do not stay on personal phones.', cta: 'Connect my channels',
    items: ['WhatsApp connection', 'Telephony or PBX connection', 'Call records in CRM', 'Routing rules', 'Team templates and reminders'],
    flowTitle: 'How we connect your channels', flow: [f('Choose', 'Pick the right provider.'), f('Connect', 'Link it to Bitrix24.'), f('Route', 'Set who gets what.'), f('Train', 'Show the team how to use it.')],
    seoTitle: 'Bitrix24 WhatsApp and Telephony Integration', seoDesc: 'Connect WhatsApp Business and your telephony or PBX to Bitrix24 CRM so every call and chat is recorded, routed and followed up.', keywords: ['Bitrix24 WhatsApp integration', 'Bitrix24 telephony integration', 'WhatsApp CRM India'], serviceType: 'CRM telephony and WhatsApp integration' },
  { slug: 'web-development', group: 'build', label: 'Custom web development', tag: 'Web development', eyebrow: 'Custom web development, Bengaluru', title: 'Websites and web apps that bring in business.', text: 'We design and build fast business websites, e-commerce stores, customer portals and web applications, and connect every form to your CRM.', cta: 'Discuss my website',
    items: ['Business websites and landing pages', 'Custom web applications and portals', 'E-commerce on Shopify, WooCommerce or custom builds', 'CRM, payment and API integrations', 'Technical SEO and speed', 'Domain, hosting, SSL and email setup'],
    flowTitle: 'How we build your site', flow: [f('Plan', 'Goals, pages and content.'), f('Design', 'Layouts you review before build.'), f('Build', 'Code, connect and test.'), f('Launch', 'Go live, measure and improve.')],
    about: ['A website should do more than look good. It should load fast, rank in search and send every enquiry to the right person. Ausumn Labs builds websites and web applications for businesses in Bengaluru and across India, from company sites and landing pages to portals, dashboards and online stores.', 'Because we are also a Bitrix24 partner, we connect your site to your CRM from day one, so leads, orders and chats never sit in an inbox.'],
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'ASP.NET Core', 'Python and FastAPI', 'WordPress', 'Shopify', 'WooCommerce', 'PostgreSQL', 'MySQL', 'MongoDB', 'Razorpay', 'Stripe'],
    faqs: [{ q: 'Do you build custom websites or only WordPress?', a: 'Both. We build on WordPress, Shopify and WooCommerce when they fit, and custom sites and web apps with Next.js, React, Node.js or .NET when you need more control.' }, { q: 'Can my website send leads straight into Bitrix24?', a: 'Yes. We connect your forms and chat to Bitrix24, so each enquiry becomes a lead with its source.' }, { q: 'Do you handle hosting and maintenance?', a: 'Yes. We can set up domain, hosting, SSL and email, and look after updates after launch.' }],
    seoTitle: 'Custom Web Development Company in Bengaluru', seoDesc: 'Custom website and web app development in Bengaluru: business websites, e-commerce, portals and web applications built with Next.js, React, Node.js and WordPress, connected to your CRM.', keywords: ['custom web development Bengaluru', 'web development company Bangalore', 'website development India', 'Next.js development', 'e-commerce website development'], serviceType: 'Web development' },
  { slug: 'mobile-app-development', group: 'build', label: 'Mobile app development', tag: 'Mobile apps', eyebrow: 'Mobile app development, Bengaluru', title: 'Mobile apps for your customers and your field teams.', text: 'We build Android and iOS apps for customers, sales teams and staff on the move, connected to your CRM and business systems.', cta: 'Discuss my app',
    items: ['Android and iOS apps', 'Cross-platform apps with React Native', 'Field team apps with location and attendance', 'CRM, payment and API integrations', 'Play Store and App Store publishing', 'Maintenance and updates'],
    flowTitle: 'How we build your app', flow: [f('Scope', 'Users, screens and must-haves.'), f('Prototype', 'Clickable screens to review.'), f('Build', 'Develop and test on real devices.'), f('Release', 'Publish, monitor and improve.')],
    about: ['Ausumn Labs builds mobile apps that solve a clear business problem: a customer app that takes bookings, a sales app that works offline, or a field app that records visits and attendance. We build our own Bitrix24 app, Ausumn FieldTrack, so we know how to connect mobile apps to CRM data properly.'],
    tech: ['React Native', 'TypeScript', 'Node.js', 'Firebase', 'Supabase', 'REST and GraphQL APIs', 'Bitrix24 REST API'],
    faqs: [{ q: 'Do you build for both Android and iOS?', a: 'Yes. We usually build one cross-platform app with React Native, which runs on both Android and iOS.' }, { q: 'Can the app connect to our CRM?', a: 'Yes. We connect apps to Bitrix24 and other systems through their APIs, so data stays in one place.' }],
    seoTitle: 'Mobile App Development Company in Bengaluru', seoDesc: 'Android and iOS app development in Bengaluru: customer apps, sales and field team apps, built with React Native and connected to your CRM and business systems.', keywords: ['mobile app development Bengaluru', 'app development company Bangalore', 'React Native development India', 'Android app development', 'iOS app development'], serviceType: 'Mobile application development' },
  { slug: 'ai-solutions', group: 'build', label: 'AI solutions', tag: 'AI and automation', eyebrow: 'AI development and automation', title: 'Practical AI for real business work.', text: 'We build AI assistants, chatbots, document processing and forecasting tools on top of your own data, with clear rules on what the AI can see and do.', cta: 'Discuss an AI project',
    items: ['AI assistants and chatbots, including WhatsApp', 'Document and invoice processing', 'Knowledge bots on your own documents (RAG)', 'Forecasting and predictive models', 'Workflow automation with Make, Zapier or custom code', 'Bitrix24 CoPilot, Vibecode and MCP setup'],
    flowTitle: 'How we deliver AI', flow: [f('Find', 'Pick one costly, repeated task.'), f('Prove', 'Test on your real data.'), f('Build', 'Add controls and reviews.'), f('Run', 'Measure, monitor and improve.')],
    about: ['Most AI projects fail because they start with the technology instead of the problem. We start with one repeated, costly task, prove that AI can do it reliably on your data, then build it into the tools your team already uses.'],
    tech: ['OpenAI API', 'Claude API', 'LangChain', 'Vector databases (Pinecone, Chroma)', 'Python', 'TensorFlow', 'Make', 'Zapier', 'Bitrix24 CoPilot and MCP'],
    faqs: [{ q: 'Is our data safe with AI tools?', a: 'We design each solution so the AI only reaches the data it needs, and a person reviews important actions. We also review your data rules during setup.' }, { q: 'Can AI work inside Bitrix24?', a: 'Yes. Bitrix24 includes CoPilot, Automation Studio and Vibecode, and MCP lets outside AI tools work with your Bitrix24 data under set permissions.' }],
    seoTitle: 'AI Solutions and Automation Company in Bengaluru', seoDesc: 'AI development in Bengaluru: AI assistants, WhatsApp chatbots, document processing, RAG knowledge bots and workflow automation built on your data with OpenAI and Claude.', keywords: ['AI solutions Bengaluru', 'AI development company India', 'AI chatbot development', 'business automation India', 'RAG development'], serviceType: 'Artificial intelligence solutions' },
  { slug: 'data-analytics', group: 'build', label: 'Data analytics and BI', tag: 'Data and BI', eyebrow: 'Data analytics and business intelligence', title: 'See your numbers without building reports by hand.', text: 'We bring data from your CRM, accounts and other systems into live dashboards and automated reports your managers can trust.', cta: 'Discuss my reporting',
    items: ['Live management dashboards', 'Automated daily and weekly reports', 'Data pipelines from CRM, ERP and spreadsheets', 'Data warehouse setup', 'Alerts when numbers move unexpectedly', 'Bitrix24 BI Builder setup'],
    flowTitle: 'How we build your reporting', flow: [f('Ask', 'Agree the questions that matter.'), f('Connect', 'Pull data from each source.'), f('Model', 'Clean and join it once.'), f('Share', 'Dashboards and scheduled reports.')],
    tech: ['Power BI', 'Tableau', 'Metabase', 'Bitrix24 BI Builder', 'Python', 'PostgreSQL', 'BigQuery'],
    seoTitle: 'Data Analytics and Power BI Dashboards, Bengaluru', seoDesc: 'Business intelligence services in Bengaluru: Power BI, Tableau and Metabase dashboards, automated reports and data pipelines from your CRM and ERP.', keywords: ['data analytics services Bengaluru', 'Power BI consultant India', 'business intelligence dashboards', 'Bitrix24 BI Builder'], serviceType: 'Data analytics and business intelligence' },
  { slug: 'cloud-devops', group: 'build', label: 'Cloud and DevOps', tag: 'Cloud and DevOps', eyebrow: 'Cloud, hosting and DevOps', title: 'Reliable hosting and releases you do not worry about.', text: 'We set up and run cloud hosting, deployments and security for your websites, apps and On-Premise Bitrix24.', cta: 'Discuss my infrastructure',
    items: ['AWS and Microsoft Azure setup', 'Docker and Kubernetes deployments', 'CI/CD with GitHub Actions or GitLab CI', 'SSL, Cloudflare and security hardening', 'Backups and monitoring', 'On-Premise Bitrix24 server setup'],
    flowTitle: 'How we run your infrastructure', flow: [f('Review', 'Check what runs where today.'), f('Design', 'Plan cost, security and uptime.'), f('Migrate', 'Move with no surprises.'), f('Operate', 'Monitor, patch and back up.')],
    tech: ['AWS', 'Microsoft Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'GitLab CI', 'Nginx', 'Ubuntu Linux', 'Cloudflare', "Let's Encrypt"],
    seoTitle: 'Cloud and DevOps Services in Bengaluru', seoDesc: 'Cloud hosting and DevOps in Bengaluru: AWS and Azure setup, Docker, Kubernetes, CI/CD pipelines, security, backups and On-Premise Bitrix24 servers.', keywords: ['cloud services Bengaluru', 'DevOps services India', 'AWS consultant Bengaluru', 'Bitrix24 on-premise installation'], serviceType: 'Cloud computing and DevOps' },
  { slug: 'it-consulting', group: 'build', label: 'IT consulting', tag: 'Complete IT solutions', eyebrow: 'IT consulting and digital transformation', title: 'One technology partner for the whole business.', text: 'We help you decide what to build, buy and connect, then deliver it: CRM, websites, apps, automation, data and cloud from one accountable team.', cta: 'Talk to a consultant',
    items: ['Technology and digital transformation roadmap', 'Software selection: CRM, ERP and business tools', 'Systems integration with Tally, SAP, Google Workspace and Microsoft 365', 'Process automation', 'Vendor and project management', 'Annual support and maintenance'],
    flowTitle: 'How we work with you', flow: [f('Assess', 'Review tools, data and pain points.'), f('Prioritize', 'Agree what to fix first.'), f('Deliver', 'Build and connect in phases.'), f('Support', 'Keep it running and improving.')],
    about: ['Growing businesses often end up with a website from one vendor, a CRM from another and spreadsheets holding everything together. Ausumn Labs gives you one team that understands the whole picture, from Bitrix24 and integrations to web, mobile, data and cloud.'],
    seoTitle: 'IT Consulting and Complete IT Solutions, Bengaluru', seoDesc: 'IT consulting and digital transformation for growing businesses in Bengaluru and India: technology roadmap, CRM and ERP selection, integrations, automation and ongoing IT support.', keywords: ['IT consulting Bengaluru', 'IT solutions company Bangalore', 'digital transformation services India', 'IT services for small business India'], serviceType: 'IT consulting' },
  { slug: 'training-support', group: 'bitrix24', label: 'Training and support', tag: 'After go-live', eyebrow: 'Bitrix24 training and support', title: 'Adoption is where the value comes from.', text: 'We train each role, then stay on to answer questions, tune workflows and add what you need next.', cta: 'Ask about support',
    items: ['Role-based live training', 'Recorded walkthroughs', 'Admin handover', 'Ongoing helpdesk', 'Regular improvements'],
    flowTitle: 'How we keep it working', flow: [f('Train', 'Teach each team its daily work.'), f('Review', 'See how the system is used.'), f('Improve', 'Fix what slows people down.'), f('Extend', 'Add new tools when ready.')],
    seoTitle: 'Bitrix24 Training and Support in India', seoDesc: 'Bitrix24 training for every role, admin handover and ongoing support from Ausumn Labs, Bitrix24 Silver Partner in Bengaluru.', keywords: ['Bitrix24 training', 'Bitrix24 support India', 'Bitrix24 helpdesk'], serviceType: 'Bitrix24 training and support' },
  { slug: 'fieldtrack', group: 'bitrix24', label: 'Ausumn FieldTrack', tag: 'Our Bitrix24 app, in development', eyebrow: 'Ausumn FieldTrack', title: 'Live location and attendance for field teams.', text: 'FieldTrack is our own Bitrix24 app for any business with staff on the move. Admins install it, and employees work from the Bitrix24 app.', cta: 'Join the early list',
    items: ['Live location on a manager map', 'GPS attendance', 'Full-day tracking through an Android companion app', 'One-tap link from Bitrix24', 'Built for any industry with field staff'],
    flowTitle: 'How it will work', flow: [f('Install', 'An admin adds the app to Bitrix24.'), f('Link', 'Staff pair the app with one tap.'), f('Track', 'Managers see the team live.'), f('Report', 'Attendance stays on record.')],
    seoTitle: 'Ausumn FieldTrack: Field Staff Tracking for Bitrix24', seoDesc: 'Ausumn FieldTrack is a Bitrix24 app for live location, GPS attendance and full-day tracking of field staff. Join the early list.', keywords: ['Bitrix24 field tracking', 'field staff tracking app India', 'GPS attendance app'], serviceType: 'Field workforce tracking software' }
];

/* ---------------- Resources ---------------- */

export type Guide = { slug: string; tag: string; title: string; sum: string; body: string[]; date: string };

export const GUIDES: Guide[] = [
  { slug: 'what-is-bitrix24-vibe-plus', tag: 'AI', date: '2026-09-15', title: 'What is Bitrix24 Vibe+?', sum: 'A plain guide to the new plan family and who needs it.', body: ['Vibe+ is a family of Bitrix24 Cloud plans for businesses that want more from AI, automation and customization.', 'It adds three main things on top of the existing plans: Vibecode for building apps, unlimited AI on the higher tiers, and an MCP server for connecting outside AI tools.', 'Limits also rise across the platform, with up to 4 TB of storage, up to 350,000 emails a month, up to 30 admins, and unlimited REST API and Market access.', 'If your team mainly uses Bitrix24 for daily work, a standard plan may be enough. If you hit AI limits or want custom apps, Vibe+ is worth a look.'] },
  { slug: 'vibecode-explained', tag: 'AI', date: '2026-07-10', title: 'Vibecode explained for business owners', sum: 'How to build an internal app by describing it.', body: ['Vibecode is an AI app builder for Bitrix24. You describe what you need, AI writes the code, and Vibecode hosts it and connects it to your workspace.', 'Teams use it for things like sales digests, lead scoring boards, HR policy bots and onboarding trackers.', 'You do not need coding skills to begin. Developers can also use tools such as Claude Code and Codex.', 'A partner still helps with what matters most: choosing the right problem, protecting data and keeping apps reliable.'] },
  { slug: 'bitrix24-cloud-vs-on-premise', tag: 'Deployment', date: '2026-06-20', title: 'Cloud or On-Premise: how to decide', sum: 'The four questions that usually settle it.', body: ['Start with Cloud if you want to go live quickly and do not need your own infrastructure.', 'Choose On-Premise if your policies require your own server, or you need source code access and deep customization.', 'On-Premise starts from 50 users on the Business edition. Annual renewal is 50% of the edition price, and you will need people to run the server.', 'Check AI needs early. Vibe+ is sold as Cloud plans, so confirm any AI feature you depend on before choosing On-Premise.'] }
];

export const UPDATES = [
  { date: '1 Sept to 10 Dec 2026', title: 'Vibe+ launch offer', text: 'Discounted 12-month prices on Vibe+ Cloud plans. Renewals return to regular prices.' },
  { date: 'Aug 2026', title: 'Vibe+ plans announced', text: 'Bitrix24 introduced plans with Vibecode, unlimited AI, MCP and higher limits.' },
  { date: 'June 2026', title: 'Vibecode, AI projects and Check-in 2.0', text: 'Bitrix24 described no-code app building, AI in projects, Open Sync and AI agents.' },
  { date: 'Spring 2026', title: 'Bitrix24 Vibe release', text: 'CoPilot became more context-aware, and Automation Studio brought no-code workflow creation.' }
];

export const FAQS = [
  { q: 'How much does Bitrix24 cost?', a: "Plans are flat-rate per organization rather than per user, within each plan's user limit. See the Plans page, or ask us for an India quote." },
  { q: 'How long does implementation take?', a: 'It depends on your pipelines, integrations and data. We share a timeline after discovery.' },
  { q: 'Can you migrate from spreadsheets or another CRM?', a: 'Yes. We audit, map and test your data before the final move.' },
  { q: 'Do you work outside Bengaluru?', a: 'Yes. We are based in Bengaluru and can run discovery, setup and training online for teams anywhere in India.' },
  { q: 'Can Bitrix24 connect to WhatsApp and our phone system?', a: 'Yes. WhatsApp and telephony integrations are available, and we help you choose the right connection.' },
  { q: 'Is our data used to train AI?', a: 'Bitrix24 states that CoPilot content is not used for training. We can review your data rules during setup.' },
  { q: 'Can we run Bitrix24 on our own server?', a: 'Yes, with the On-Premise editions. It suits teams with stricter security or customization needs.' },
  { q: 'Do you also build websites and mobile apps?', a: 'Yes. We build custom websites, web apps and Android and iOS apps, and connect them to Bitrix24 or your other systems.' },
  { q: 'What support do you offer after go-live?', a: 'We offer training and ongoing support. Tell us what your team needs, and we will suggest the right level.' }
];

/* ---------------- Plans ---------------- */

// Bitrix24 India list prices in INR per organization per month: [billed annually, billed monthly].
// Source: bitrix24.in/prices (checked 16 Nov 2026). Taxes such as GST may apply.
export const PRICES_CHECKED = '16 November 2026';

export const PLAN_ROWS = [
  { key: 'basic', name: 'Basic', fit: 'Small teams getting started', size: '5 users, 24 GB', inr: [1910, 2990], points: ['Sales pipelines and recurring deals', 'Online payments', 'WhatsApp and telephony integration'] },
  { key: 'standard', name: 'Standard', fit: 'Mid-sized businesses', size: '50 users, 100 GB', inr: [4790, 6890], points: ['Unlimited leads, invoices, estimates', 'E-signature and WhatsApp marketing', 'Unlimited projects and boards'], vibeExtra: ['Unlimited AI'] },
  { key: 'professional', name: 'Professional', fit: 'Companies scaling on automation', size: '100 users, 1 TB', inr: [9590, 13790], points: ['Sales automation and call tracking', 'Email marketing and booking', 'RPA, HR and analytics tools'], vibeExtra: ['Unlimited AI'], best: true },
  { key: 'enterprise', name: 'Enterprise', fit: 'Large and multi-branch teams', size: '250 users, 3 TB', inr: [19190, 27590], points: ['Unlimited branches', 'Active Directory, login history', 'Custom branding, priority support'], vibeExtra: ['Priority AI processing'], tiers: true }
];

// Enterprise user tiers: [users, storage, billed annually, billed monthly] in INR per month.
export const ENTERPRISE_TIERS: Array<[number, string, number, number]> = [
  [250, '3 TB', 19190, 27590], [500, '5 TB', 28790, 41390], [1000, '6 TB', 47990, 68990], [2000, '8 TB', 95990, 137990],
  [3000, '10 TB', 143990, 206990], [4000, '12 TB', 191990, 275990], [5000, '15 TB', 239990, 344990], [6000, '18 TB', 287990, 413990],
  [7000, '21 TB', 335990, 482990], [8000, '24 TB', 383990, 551990], [9000, '27 TB', 431990, 620990], [10000, '30 TB', 479990, 689990]
];

// On-Premise list prices in INR per year (bitrix24.in, checked 16 Nov 2026).
export const ONPREM_INR = { business: 299990, enterprise: 2099990 };

export const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;

const Y = '✓', N = '—';
export const MATRIX: string[][] = [
  ['Included users', '1–2', '5', '50', '100', '250+'], ['Storage', '5 GB', '24 GB', '100 GB', '1 TB', '3 TB+'],
  ['Tasks, Kanban, Gantt', Y, Y, Y, Y, Y], ['Chat and video calls', Y, Y, Y, Y, Y],
  ['Sales pipelines', N, Y, Y, Y, Y], ['Online payments', N, Y, Y, Y, Y], ['WhatsApp integration', N, Y, Y, Y, Y], ['Telephony integration', N, Y, Y, Y, Y],
  ['Unlimited leads', N, N, Y, Y, Y], ['Invoices and estimates', N, N, Y, Y, Y], ['E-signature', N, N, Y, Y, Y], ['WhatsApp marketing', N, N, Y, Y, Y],
  ['Sales automation', N, N, N, Y, Y], ['Call tracking', N, N, N, Y, Y], ['Email marketing', N, N, N, Y, Y], ['RPA', N, N, N, Y, Y], ['HR management tools', N, N, N, Y, Y],
  ['Unlimited branches', N, N, N, N, Y], ['Active Directory', N, N, N, N, Y], ['Custom branding', N, N, N, N, Y]
];

