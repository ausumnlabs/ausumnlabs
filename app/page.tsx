import Link from 'next/link';
import { CtaBand, Faq, JsonLd } from '@/components/ui';
import { AiDemo, PipelineDemo, PlatformExplorer } from '@/components/interactive';
import { HOME_DEMOS, HOME_FAQS } from '@/lib/content';
import { faqLd, pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = {
  ...pageMeta({
    title: 'Bitrix24 Partner in Bengaluru | CRM, Web, Mobile and IT Solutions',
    ogTitle: 'Bitrix24 and AI, built around how you sell.',
    description: SITE.description,
    path: '/',
    keywords: ['Bitrix24 partner Bengaluru', 'Bitrix24 partner India', 'Bitrix24 CRM', 'real estate CRM India', 'custom web development Bengaluru', 'mobile app development Bengaluru', 'IT solutions Bengaluru']
  }),
  title: { absolute: 'Bitrix24 Partner in Bengaluru | CRM, Web, Mobile and IT Solutions | Ausumn Labs' }
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(HOME_FAQS)} />
      <section className="sec dark hero-grid" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="g2" style={{ alignItems: 'center', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))' }}>
            <div className="stack" style={{ gap: 24 }}>
              <p className="eyebrow" style={{ margin: 0 }}>Bitrix24 Silver Partner, Bengaluru</p>
              <h1 className="d1">Bitrix24 and AI, built around how you sell.</h1>
              <p className="lead">Ausumn Labs sets up, customizes and supports Bitrix24 CRM for growing Indian businesses, with a deep focus on real estate. We also build the websites, apps and automation around it.</p>
              <div className="row btns">
                <Link className="btn primary" href="/contact">Book a demo</Link>
                <Link className="btn ghost" href="/contact?type=audit">Get a free CRM audit</Link>
              </div>
            </div>
            <PipelineDemo />
          </div>
          <div className="facts" style={{ marginTop: 'clamp(48px, 7vw, 88px)' }}>
            <div className="fact"><strong>15M+</strong><span>organizations on Bitrix24</span></div>
            <div className="fact"><strong>35+</strong><span>tools in one workspace</span></div>
            <div className="fact"><strong>850+</strong><span>apps and integrations</span></div>
            <div className="fact"><strong>Cloud or own server</strong><span>your choice of deployment</span></div>
          </div>
          <p className="small" style={{ paddingBlock: 12 }}>Platform figures published by Bitrix24.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>The problem</p>
            <h2 className="d2">Deals rarely go to a competitor first. They go quiet.</h2>
          </div>
          <div className="g4">
            <div className="card"><h3 className="h4">Enquiries in five places</h3><p className="body">Calls, WhatsApp, portals, email and your website each hold a different part of the story.</p></div>
            <div className="card"><h3 className="h4">Follow-ups in someone&apos;s head</h3><p className="body">When a call-back is missed, nobody notices until the buyer has moved on.</p></div>
            <div className="card"><h3 className="h4">Reports built by hand</h3><p className="body">Managers wait for spreadsheets instead of seeing the pipeline as it stands.</p></div>
            <div className="card"><h3 className="h4">Too many separate tools</h3><p className="body">Sales, tasks, chat and HR sit in apps that do not share any data.</p></div>
          </div>
        </div>
      </section>

      <section className="sec white line">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>One platform</p>
            <h2 className="d2">Replace the stack. Keep one source of truth.</h2>
          </div>
          <PlatformExplorer />
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>AI inside the work</p>
            <h2 className="d2">Not another chatbot. AI where your team already works.</h2>
            <p className="lead">Use CoPilot every day, describe automations in plain language, and build internal apps without a long development project.</p>
          </div>
          <AiDemo items={HOME_DEMOS} more={{ href: '/ai', label: 'See all AI features →' }} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>Our specialization</p>
            <h2 className="d2">Built by people who work in property sales.</h2>
            <p className="lead">Our real estate solution runs on our own Bitrix24 portal, with property listings flowing from our website into the CRM.</p>
          </div>
          <div className="g3">
            <Link className="card" href="/real-estate/brokers"><span className="pill ember">First module</span><h3 className="d3">Brokers</h3><p className="body">Rent and resale inventory, buyer and tenant leads, and follow-ups in one place.</p><span className="linkbtn">Open broker module →</span></Link>
            <Link className="card" href="/real-estate/agencies"><span className="pill line">Next</span><h3 className="d3">Agencies</h3><p className="body">Lead routing, team visibility and manager reporting across agents.</p><span className="linkbtn">See agency plan →</span></Link>
            <Link className="card" href="/real-estate/builders"><span className="pill line">Next</span><h3 className="d3">Builders</h3><p className="body">Project and unit sales, site visits and channel partner enquiries.</p><span className="linkbtn">See builder plan →</span></Link>
          </div>
        </div>
      </section>

      <section className="sec white line">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>Beyond Bitrix24</p>
            <h2 className="d2">Complete IT solutions from one team.</h2>
            <p className="lead">The CRM is the centre. We build and connect everything around it, so every enquiry, order and report lands in one place.</p>
          </div>
          <div className="g4">
            <Link className="card" href="/services/web-development"><h3 className="h4">Custom web development</h3><p className="body">Websites, e-commerce, portals and web apps that send leads into your CRM.</p><span className="linkbtn">Web development →</span></Link>
            <Link className="card" href="/services/mobile-app-development"><h3 className="h4">Mobile app development</h3><p className="body">Android and iOS apps for customers, sales teams and field staff.</p><span className="linkbtn">Mobile apps →</span></Link>
            <Link className="card" href="/services/ai-solutions"><h3 className="h4">AI solutions</h3><p className="body">Assistants, chatbots and document AI built on your own data.</p><span className="linkbtn">AI solutions →</span></Link>
            <Link className="card" href="/services/it-consulting"><h3 className="h4">IT consulting</h3><p className="body">A technology roadmap, integrations, data and cloud from one partner.</p><span className="linkbtn">IT consulting →</span></Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>Deployment</p>
            <h2 className="d2">Run it the way your business needs.</h2>
          </div>
          <div className="g3">
            <Link className="card" href="/plans"><h3 className="d3">Cloud</h3><p className="body">Start quickly on plans from 5 users to large teams. Bitrix24 hosts everything.</p><span className="linkbtn">Compare Cloud plans →</span></Link>
            <Link className="card" href="/ai/vibe-plus"><h3 className="d3">Vibe+</h3><p className="body">Add Vibecode, unlimited AI, MCP and unlimited REST API to Cloud.</p><span className="linkbtn">See Vibe+ →</span></Link>
            <Link className="card" href="/plans/on-premise"><h3 className="d3">On-Premise</h3><p className="body">Run on your own server or private cloud, with source code access.</p><span className="linkbtn">See On-Premise →</span></Link>
          </div>
          <div style={{ marginTop: 24 }}><Link className="btn primary" href="/plans/finder">Find my plan</Link></div>
        </div>
      </section>

      <section className="sec white line">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>How we work</p>
            <h2 className="d2">From your first call to a team that uses it.</h2>
          </div>
          <div className="steps">
            <div className="step"><h3 className="h4">Discovery</h3><p className="small">We map how you sell, serve and report today.</p></div>
            <div className="step"><h3 className="h4">Setup</h3><p className="small">Pipelines, roles, automation and integrations.</p></div>
            <div className="step"><h3 className="h4">Migration</h3><p className="small">Contacts, deals and history move across cleanly.</p></div>
            <div className="step"><h3 className="h4">Training</h3><p className="small">Live sessions for each team and role.</p></div>
            <div className="step"><h3 className="h4">Support</h3><p className="small">We stay on to fix, tune and extend.</p></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 920 }}>
          <div className="head"><h2 className="d2">Questions buyers ask first</h2></div>
          <Faq items={HOME_FAQS} />
          <div style={{ marginTop: 20 }}><Link className="linkbtn" href="/resources/faq">See all questions →</Link></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
