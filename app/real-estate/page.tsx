import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { TILES } from '@/lib/hero-tiles';
import { CtaBand, Faq, JsonLd, Screen } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { RE_MODULES } from '@/lib/content';
import { breadcrumbLd, faqLd, pageMeta, serviceLd } from '@/lib/seo';
import { ReNav, WhyUs } from './shared';

const description = 'Real estate CRM on Bitrix24 for India, built by Ausumn Labs: Broker CRM for rentals and resale, Builder CRM for projects and units, and Agency CRM for multi-agent teams.';

export const metadata = pageMeta({
  title: 'Real Estate CRM on Bitrix24 for Brokers, Builders and Agencies',
  ogTitle: 'Real estate CRM, built for how property is sold in India.',
  description,
  path: '/real-estate',
  keywords: ['real estate CRM India', 'real estate CRM Bengaluru', 'Bitrix24 real estate', 'CRM for real estate brokers', 'builder CRM India', 'property CRM']
});

const broker = RE_MODULES.find((m) => m.slug === 'brokers')!;
const builder = RE_MODULES.find((m) => m.slug === 'builders')!;

const COMPARE: Array<[string, string, string, string]> = [
  ['Who it is for', 'Brokers, rentals and resale', 'Builders and developers', 'Agencies with many agents'],
  ['Inventory', 'Flats by city, zone and area', 'Units by tower and floor', 'One shared inventory'],
  ['Matching', 'Flats scored for each client', 'Units suggested per project', 'Broker matching for every agent'],
  ['Pricing tools', 'Rent, deposit, sale price', 'Cost sheet with GST and stamp duty', 'As Broker CRM'],
  ['Documents', 'EOI and Token Receipt', 'Booking Form and Receipt', 'As Broker CRM'],
  ['Partners and payouts', 'Brokerage on won deals', 'Channel partner commissions', 'Reports by agent and branch']
];

const FAQS = [
  { q: 'Is this a separate product or Bitrix24?', a: 'It runs inside Bitrix24. We set up the modules on your own Bitrix24 account, so you also get Bitrix24 tasks, chat, telephony and the mobile app.' },
  { q: 'Can I use more than one module?', a: 'Yes. Each module has its own menu, pipelines and fields, so a business that brokers and builds can run both without mixing data.' },
  { q: 'Can you import our current listings or inventory?', a: 'Yes. We import your listings or inventory sheet during setup and check it with your team.' },
  { q: 'Which Bitrix24 plan do we need?', a: 'It depends on your team size and the automation you need. We recommend a plan in the demo, with prices in rupees.' }
];

export default function RealEstate() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Real Estate', '/real-estate']]), serviceLd({ name: 'Real estate CRM on Bitrix24', serviceType: 'Real estate CRM implementation', description, path: '/real-estate' }), faqLd(FAQS)]} />
      <Hero eyebrow="Real estate CRM on Bitrix24" title={['Built for how property is ', 'sold in India.']} lead="Our own real estate modules on Bitrix24, built from daily work with brokers, builders and buyers. Live inventory, smart matching, site visits, WhatsApp, documents and payouts in one system." tiles={TILES.realEstate}
        actions={<><Link className="btn primary" href="/contact?interest=real-estate">Book a 20-minute demo</Link><Link className="btn ghost" href="#modules">See the modules</Link></>}
        visual={<Screen {...broker.screens[0]} caption={undefined} eager />} />
      <ReNav current="/real-estate" />

      <section className="sec" id="modules">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ margin: 0 }}>Three modules</p>
            <h2 className="d2">Pick the module that <span className="serif" style={{ color: 'var(--ember-ink)' }}>sells like you do.</span></h2>
            <p className="lead">A broker does not sell like a builder. Each module has its own pipelines, fields, automation and documents.</p>
          </div>
          <div className="g3">
            {RE_MODULES.map((m) => (
              <Link key={m.slug} className={m.first ? 'card mod' : 'card mod'} href={`/real-estate/${m.slug}`}>
                {m.screens[0] ? <img src={m.screens[0].src} width={m.screens[0].w} height={m.screens[0].h} alt="" loading="lazy" /> : <span className="mod-ph"><Icon name="users" size={56} stroke={1.5} /></span>}
                <div>
                  <span className={m.first ? 'pill ember' : 'pill'}>{m.status}</span>
                  <h3 className="d3">{m.name}</h3>
                  <p className="body">{m.text}</p>
                  <span className="linkbtn" style={{ marginTop: 'auto' }}>Explore {m.name} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="wrap">
          <div className="shot-row">
            <div className="shot-text">
              <p className="eyebrow" style={{ margin: 0 }}>Broker CRM</p>
              <h2 className="d2">The right flat for every client, <span className="serif" style={{ color: 'var(--ember-ink)' }}>in one second.</span></h2>
              <p className="lead">Every requirement ranks your own flats out of 100, with the reason for each match. Pick the best and send them on WhatsApp in one tap.</p>
              <ul className="check"><li>15-minute call task and manager alert on every enquiry</li><li>Flat goes on Hold the moment a client is interested</li><li>Visit reminders and a ready WhatsApp confirmation</li><li>EOI and Token Receipt generated with your letterhead</li></ul>
              <div><Link className="btn primary" href="/real-estate/brokers">See Broker CRM</Link></div>
            </div>
            <Screen {...broker.screens[2]} caption={undefined} />
          </div>
          <div className="shot-row flip">
            <div className="shot-text">
              <p className="eyebrow" style={{ margin: 0 }}>Builder CRM</p>
              <h2 className="d2">Your whole project <span className="serif" style={{ color: 'var(--ember-ink)' }}>on one screen.</span></h2>
              <p className="lead">A tower × floor grid that updates itself as deals move, so no unit is promised twice. Cost sheets, booking documents and partner commissions included.</p>
              <ul className="check"><li>Unit blocked for 48 hours when a buyer selects it</li><li>All-inclusive cost sheet with GST and stamp duty, shared on WhatsApp</li><li>Booking Form and Receipt numbered BD-1, BD-2 and on</li><li>Channel partner commission created with GST at agreement</li></ul>
              <div><Link className="btn primary" href="/real-estate/builders">See Builder CRM</Link></div>
            </div>
            <Screen {...builder.screens[0]} caption={undefined} />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head"><p className="eyebrow" style={{ margin: 0 }}>Compare</p><h2 className="d2">Which module fits?</h2></div>
          <div className="tbox">
            <table>
              <thead><tr><th scope="col"> </th><th scope="col">Broker CRM</th><th scope="col">Builder CRM</th><th scope="col">Agency CRM</th></tr></thead>
              <tbody>
                {COMPARE.map(([k, a, b, c]) => <tr key={k}><th scope="row">{k}</th><td>{a}</td><td>{b}</td><td>{c}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <WhyUs />

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 920 }}>
          <div className="head"><h2 className="d2">Common questions</h2></div>
          <Faq items={FAQS} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
