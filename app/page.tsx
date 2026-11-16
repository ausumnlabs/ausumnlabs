import Link from 'next/link';
import { CtaBand, Faq, JsonLd } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { AiDemo, PipelineDemo, PlatformExplorer } from '@/components/interactive';
import { ScrollStory, WhoWeHelp } from '@/components/IndustryMotion';
import { CountUp, Tilt } from '@/components/Motion';
import { HOME_SEGMENTS, HOME_STORY } from '@/lib/industry-stories';
import type { CSSProperties } from 'react';

const ORANGE = { '--hc': '#D97706', '--hc-soft': '#FEEBD3', '--hc-ink': '#92400E', '--hc2': '#F89924' } as CSSProperties;
import { GUIDES, HOME_DEMOS, HOME_FAQS, HOME_PROBLEMS, HOME_SERVICES, INTEGRATIONS, ONPREM_INR, PLAN_ROWS, RE_JOURNEY, RE_MODULES, inr } from '@/lib/content';
import { faqLd, pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = {
  ...pageMeta({
    title: 'Bitrix24 Partner in Bengaluru | CRM, Web, Mobile and IT Solutions',
    ogTitle: 'Never lose a lead to a missed follow-up again.',
    description: SITE.description,
    path: '/',
    keywords: ['Bitrix24 partner Bengaluru', 'Bitrix24 partner India', 'Bitrix24 CRM', 'Bitrix24 price India', 'real estate CRM India', 'custom web development Bengaluru', 'mobile app development Bengaluru', 'IT solutions Bengaluru']
  }),
  title: { absolute: 'Bitrix24 Partner in Bengaluru | CRM, Web, Mobile and IT Solutions | Ausumn Labs' }
};

export default function Home() {
  const cloudFrom = inr(PLAN_ROWS[0].inr[0]);
  return (
    <>
      <JsonLd data={faqLd(HOME_FAQS)} />

      <section className="sec dark hero-fx">
        <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
        <div className="grid-floor" aria-hidden="true" />
        <div className="stars" aria-hidden="true">{Array.from({ length: 18 }, (_, n) => <i key={n} />)}</div>
        <div className="wrap g2" style={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div className="stack hero-in" style={{ gap: 24 }}>
            <span className="badge"><span style={{ color: 'var(--amber)', display: 'inline-flex' }}><Icon name="award" size={16} /></span>Bitrix24 Silver Partner · Bengaluru</span>
            <h1 className="d1 hero-h">Never lose a lead to a <span className="serif nowrap shimmer">missed follow-up</span> again.</h1>
            <p className="lead">We set up Bitrix24 CRM so every call, WhatsApp and portal enquiry lands in one place, gets assigned and gets followed up. Built for growing Indian businesses, with a deep focus on real estate.</p>
            <div className="row btns">
              <Link className="btn primary" href="/contact">Book a free demo</Link>
              <a className="btn wa-btn" href={SITE.whatsapp} target="_blank" rel="noopener"><Icon name="chat" size={18} />WhatsApp us</a>
            </div>
            <div className="ticks">
              <span><Icon name="check" size={18} stroke={2.4} />Setup, training and support</span>
              <span><Icon name="check" size={18} stroke={2.4} />Prices in rupees</span>
              <span><Icon name="check" size={18} stroke={2.4} />Cloud or your own server</span>
            </div>
          </div>
          <Tilt className="glow-frame"><PipelineDemo /></Tilt>
        </div>
      </section>

      <section className="dark" style={{ background: 'var(--ink)', borderTop: '1px solid var(--ink3)', paddingBlock: 44 }} aria-label="Enquiry sources we connect">
        <div className="wrap stack" style={{ gap: 20, alignItems: 'center' }}>
          <p className="small" style={{ textAlign: 'center' }}>Any tool with an API or webhook, connected to <span className="serif" style={{ fontSize: 19 }}>one CRM</span>. For example:</p>
          <div className="mq" style={{ width: '100%' }}>
            <div className="mq-t">
              {INTEGRATIONS.map((x) => <span className="mq-i" key={x}>{x}</span>)}
              {INTEGRATIONS.map((x) => <span className="mq-i" key={x + '-2'} aria-hidden="true">{x}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band dark" aria-label="Bitrix24 platform figures">
        <div className="wrap">
          <div className="stats">
            <div className="stat"><b><CountUp to={15} suffix="M+" /></b><span>organisations run on Bitrix24</span></div>
            <div className="stat"><b><CountUp to={35} suffix="+" /></b><span>tools in one workspace</span></div>
            <div className="stat"><b><CountUp to={850} suffix="+" /></b><span>apps and integrations</span></div>
            <div className="stat"><b><CountUp to={PLAN_ROWS[0].inr[0]} prefix="₹" /></b><span>a month for Cloud, billed annually</span></div>
          </div>
          <p className="small" style={{ marginTop: 14 }}>Platform figures and prices published by Bitrix24.</p>
        </div>
      </section>

      <section className="sec warm">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>What we solve</p>
            <h2 className="d2">Deals rarely go to a competitor first. They <span className="serif" style={{ color: 'var(--ember-ink)' }}>go quiet.</span></h2>
            <p className="lead">These are the four problems we fix in almost every business we meet.</p>
          </div>
          <div className="g4">
            {HOME_PROBLEMS.map((p) => (
              <div className="card" key={p.t}>
                <span className="ic"><Icon name={p.icon} /></span>
                <h3 className="h4">{p.t}</h3>
                <p className="body">{p.d}</p>
                <p className="fix"><Icon name="check" size={16} stroke={2.4} />{p.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={ORANGE}>
        <WhoWeHelp segments={HOME_SEGMENTS} label="Industry" eyebrow="Industries we serve" lead="One platform, set up for how your industry sells. Pick yours to see the full journey, step by step." contactHref="/contact?x=1" />
        <ScrollStory steps={HOME_STORY} title={['Now, let’s follow ', 'one lead.']} lead="From the first enquiry to the dashboard, here is what Bitrix24 does at every step, once we set it up for you." eyebrow="How it works" cta="Book a free demo" contactHref="/contact" />
      </div>

      <section className="sec white">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>One platform</p>
            <h2 className="d2">Replace the stack. Keep <span className="serif">one source of truth.</span></h2>
            <p className="lead">Bitrix24 brings 35+ tools into one workspace, used by over 15 million organizations.</p>
          </div>
          <PlatformExplorer />
        </div>
      </section>

      <section className="sec dark glow">
        <div className="wrap">
          <div className="g2" style={{ alignItems: 'end', marginBottom: 'clamp(32px, 4vw, 48px)' }}>
            <div className="stack" style={{ gap: 14 }}>
              <p className="eyebrow" style={{ margin: 0 }}>Our own real estate modules</p>
              <h2 className="d2">A real estate CRM built by people who <span className="serif">sell property.</span></h2>
            </div>
            <p className="lead">We built Broker, Builder and Agency CRM modules on Bitrix24 from daily work with brokers, builders and buyers. Live inventory, smart matching, site visits, documents and payouts, set up on your own Bitrix24.</p>
          </div>
          <div className="g3">
            {RE_MODULES.map((m) => (
              <Link key={m.slug} className={m.slug === 'brokers' ? 'card mod hl' : 'card mod'} href={`/real-estate/${m.slug}`}>
                {m.screens[0] ? <img src={m.screens[0].src} width={m.screens[0].w} height={m.screens[0].h} alt="" loading="lazy" /> : <span className="mod-ph"><Icon name="users" size={56} stroke={1.5} /></span>}
                <div>
                  <span className={m.first ? 'pill ember' : 'pill'}>{m.status}</span>
                  <h3 className="d3">{m.name}</h3>
                  <p className="body">{m.who}.</p>
                  <span className="linkbtn" style={{ marginTop: 'auto' }}>Explore {m.name} →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="flow" style={{ marginTop: 24 }}>
            {RE_JOURNEY.map(([t, d], i) => (
              <div key={t}><i>0{i + 1}</i><b>{t}</b><span>{d}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>One team, everything around your CRM</p>
            <h2 className="d2">CRM at the centre. We build and <span className="serif" style={{ color: 'var(--ember-ink)' }}>connect the rest.</span></h2>
          </div>
          <div className="g3">
            {HOME_SERVICES.map((s) => (
              <Link className="card svc" href={s.href} key={s.t}>
                <span className="ic g"><Icon name={s.icon} /></span>
                <div><h3 className="h4">{s.t}</h3><p className="body">{s.d}</p></div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 24 }}><Link className="linkbtn" href="/services">See all services →</Link></div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>AI inside the work</p>
            <h2 className="d2">Not another chatbot. AI where your team <span className="serif">already works.</span></h2>
            <p className="lead">Use CoPilot every day, describe automations in plain language, and build internal apps without a long development project.</p>
          </div>
          <AiDemo items={HOME_DEMOS} more={{ href: '/ai', label: 'See all AI features →' }} />
        </div>
      </section>

      <section className="sec mint">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>Plans in rupees</p>
            <h2 className="d2">Run it the way your business needs.</h2>
            <p className="lead">Bitrix24 is priced per company, not per user. We help you pick the right plan for your team size and needs.</p>
          </div>
          <div className="g3">
            <Link className="card" href="/plans"><span className="ic g"><Icon name="cloud" /></span><h3 className="d3">Cloud</h3><p className="body">Start quickly, from 5 users to large teams. Bitrix24 hosts everything.</p><p className="h4" style={{ marginTop: 'auto' }}>From {cloudFrom}<span className="small"> /month, billed annually</span></p></Link>
            <Link className="card" href="/ai/vibe-plus"><span className="ic g"><Icon name="spark" /></span><h3 className="d3">Vibe+</h3><p className="body">Adds Vibecode, unlimited AI, MCP and unlimited REST API to Cloud.</p><p className="h4" style={{ marginTop: 'auto' }}>India price on request</p></Link>
            <Link className="card" href="/plans/on-premise"><span className="ic g"><Icon name="lock" /></span><h3 className="d3">On-Premise</h3><p className="body">Run on your own server or private cloud, with source code access.</p><p className="h4" style={{ marginTop: 'auto' }}>From {inr(ONPREM_INR.business)}<span className="small"> /year</span></p></Link>
          </div>
          <div className="row btns" style={{ marginTop: 24 }}>
            <Link className="btn primary" href="/plans">Compare plans</Link>
            <Link className="btn ghost" href="/plans/finder">Find my plan</Link>
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>How we work</p>
            <h2 className="d2">From your first call to a team that <span className="serif" style={{ color: 'var(--ember-ink)' }}>uses it.</span></h2>
          </div>
          <div className="nsteps">
            <div className="nstep"><h3 className="h4">Discovery</h3><p>We map how you sell, serve and report today.</p></div>
            <div className="nstep"><h3 className="h4">Setup</h3><p>Pipelines, roles, automation and integrations.</p></div>
            <div className="nstep"><h3 className="h4">Migration</h3><p>Contacts, deals and history move across cleanly.</p></div>
            <div className="nstep"><h3 className="h4">Training</h3><p>Live sessions for each team and role.</p></div>
            <div className="nstep"><h3 className="h4">Support</h3><p>We stay on to fix, tune and extend.</p></div>
          </div>
        </div>
      </section>

      <section className="sec warm">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>Guides</p>
            <h2 className="d2">Clear answers <span className="serif" style={{ color: 'var(--ember-ink)' }}>before you buy.</span></h2>
          </div>
          <div className="g3">
            {GUIDES.map((g) => (
              <Link key={g.slug} className="card" href={`/resources/guides/${g.slug}`}>
                <span className="pill">{g.tag}</span>
                <h3 className="h4" style={{ fontSize: 20 }}>{g.title}</h3>
                <p className="body">{g.sum}</p>
                <span className="linkbtn" style={{ marginTop: 'auto' }}>Read guide →</span>
              </Link>
            ))}
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
