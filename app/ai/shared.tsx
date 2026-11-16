import Link from 'next/link';
import { SubNav } from '@/components/ui';
import { AI_CAPS } from '@/lib/content';

export function AiNav({ current }: { current: string }) {
  const items = [{ href: '/ai', label: 'Overview' }].concat(AI_CAPS.map((c) => ({ href: `/ai/${c.slug}`, label: c.label })));
  return <SubNav label="AI capabilities" items={items} current={current} />;
}

export function AiControl() {
  return (
    <>
      <section className="sec white line">
        <div className="wrap">
          <div className="head"><p className="eyebrow" style={{ margin: 0 }}>For your team</p><h2 className="d2">Where AI pays off first.</h2></div>
          <div className="g4">
            <div className="card"><h3 className="h4">Sales</h3><p className="body">Call summaries, CRM autofill, follow-up drafts and script checks.</p></div>
            <div className="card"><h3 className="h4">Managers</h3><p className="body">Project answers, risk flags and quick reports from your data.</p></div>
            <div className="card"><h3 className="h4">Support</h3><p className="body">AI agents in Open Channels and request routing.</p></div>
            <div className="card"><h3 className="h4">HR and admin</h3><p className="body">Policy bots, approvals and onboarding checklists.</p></div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap g2">
          <div className="stack">
            <p className="eyebrow" style={{ margin: 0 }}>Control</p>
            <h2 className="d2">AI with rules, not guesswork.</h2>
            <p className="lead">We set who can use what, which data each tool can reach and what a person must review before it goes live.</p>
            <div><Link className="linkbtn" href="/services/ai-solutions">Need AI beyond Bitrix24? See our AI solutions →</Link></div>
          </div>
          <ul className="check">
            <li>Permissions stay under your administrators&apos; control.</li>
            <li>Automations are reviewed before they go live.</li>
            <li>MCP connections follow Bitrix24 permissions.</li>
            <li>Bitrix24 states that CoPilot content is not used for model training.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
