import Link from 'next/link';
import { SubNav } from '@/components/ui';
import { RE_MODULES } from '@/lib/content';

export function ReNav({ current }: { current: string }) {
  const items = [{ href: '/real-estate', label: 'Overview' }].concat(RE_MODULES.map((m) => ({ href: `/real-estate/${m.slug}`, label: m.label })));
  return <SubNav label="Who it is for" items={items} current={current} />;
}

export function ReSections() {
  return (
    <>
      <section className="sec white line">
        <div className="wrap g2">
          <div className="stack">
            <p className="eyebrow" style={{ margin: 0 }}>Why separate modules</p>
            <h2 className="d2">A broker does not sell like a builder.</h2>
            <p className="lead">Each module has its own pipelines, fields and automation, so your team only sees what fits its work.</p>
          </div>
          <div className="board" role="figure" aria-label="Sample site visit view">
            <div className="board-top"><span>Today&apos;s site visits</span><span>Sample data</span></div>
            <div className="stack" style={{ gap: 8 }}>
              <div className="lead-card hot"><b>11:00, 2 BHK, Whitefield</b><span>Buyer confirmed. Reminder sent to the agent.</span></div>
              <div className="lead-card"><b>15:30, 3 BHK, Varthur</b><span>Owner confirmation pending.</span></div>
              <div className="lead-card"><b>18:00, Studio, Marathahalli</b><span>Tenant shortlist, second visit.</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="head"><p className="eyebrow" style={{ margin: 0 }}>AI for property teams</p><h2 className="d2">Less typing. Faster follow-up.</h2></div>
          <div className="g3">
            <div className="card"><h3 className="h4">Call notes done for you</h3><p className="body">CoPilot transcribes calls and fills in fields such as location and budget.</p></div>
            <div className="card"><h3 className="h4">Follow-up alerts</h3><p className="body">Automation flags a lead when nobody has replied in your set time.</p></div>
            <div className="card"><h3 className="h4">Custom property tools</h3><p className="body">Vibecode can build views your team needs, such as a daily visit list.</p></div>
          </div>
          <div style={{ marginTop: 24 }}><Link className="linkbtn" href="/ai">Explore AI in Bitrix24 →</Link></div>
        </div>
      </section>
    </>
  );
}
