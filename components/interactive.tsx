'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PLATFORM_GROUPS, RE_JOURNEY } from '@/lib/content';

export function PipelineDemo() {
  const [step, setStep] = useState(0);
  const names = ['New enquiry', 'Qualified', 'Site visit', 'Booked'];
  const notes = [
    'A buyer enquires on your website. The lead is created in Bitrix24 with its source.',
    'Lead assigned to an agent. CoPilot fills in budget and location from the call.',
    'Site visit booked. The agent and the buyer both get a reminder.',
    'Deal booked. The manager sees it in the pipeline straight away.'
  ];
  const others = [
    [{ t: 'Studio, Marathahalli', s: 'Rent, website' }],
    [{ t: '3 BHK, Varthur', s: 'Resale, referral' }],
    [{ t: '2 BHK, Bellandur', s: 'Rent, WhatsApp' }],
    [] as Array<{ t: string; s: string }>
  ];
  return (
    <div className="board" role="figure" aria-label="Sample property sales pipeline">
      <div className="board-top"><span>Property sales pipeline</span><span>Sample data</span></div>
      <div className="cols">
        {names.map((name, i) => (
          <div className="col" key={name}>
            <h4>{name}</h4>
            {step === i && <div className="lead-card hot"><b>2 BHK, Whitefield</b><span>Resale, new lead</span></div>}
            {others[i].map((c) => <div className="lead-card" key={c.t}><b>{c.t}</b><span>{c.s}</span></div>)}
          </div>
        ))}
      </div>
      <div className="board-foot">
        <p aria-live="polite">{notes[step]}</p>
        <button type="button" className="btn ghost small" onClick={() => setStep((step + 1) % 4)}>{step === 3 ? 'Replay' : 'Move this lead'}</button>
      </div>
    </div>
  );
}

export function PlatformExplorer() {
  const [id, setId] = useState('crm');
  const cur = PLATFORM_GROUPS.find((g) => g.id === id) || PLATFORM_GROUPS[0];
  return (
    <>
      <div className="tabs" role="tablist" aria-label="Bitrix24 product groups">
        {PLATFORM_GROUPS.map((g) => (
          <button key={g.id} type="button" role="tab" aria-selected={g.id === id} className={g.id === id ? 'tab on' : 'tab'} onClick={() => setId(g.id)}>{g.label}</button>
        ))}
      </div>
      <div className="g2 fade" key={cur.id} style={{ marginTop: 28 }} role="tabpanel">
        <div className="stack">
          <h3 className="d3">{cur.title}</h3>
          <p className="body">{cur.text}</p>
          <div><Link className="btn ghost small" href={cur.href}>Explore {cur.label}</Link></div>
        </div>
        <ul className="check">{cur.points.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
    </>
  );
}

export function AiDemo({ items, label, more }: { items: Array<{ ask: string; out: string; tool?: string }>; label?: string; more?: { href: string; label: string } }) {
  const [i, setI] = useState(0);
  const cur = items[Math.min(i, items.length - 1)];
  return (
    <div className="g2">
      <div className="stack">
        {label && <span className="mono" style={{ color: 'var(--mute-dark)' }}>{label}</span>}
        {items.map((d, n) => (
          <button key={d.ask} type="button" className={`btn ${n === i ? 'primary' : 'ghost'} choice`} aria-pressed={n === i} onClick={() => setI(n)}>{d.ask}</button>
        ))}
        {more && <Link className="linkbtn" href={more.href}>{more.label}</Link>}
      </div>
      <div className="ai-out fade" key={i} aria-live="polite">
        {cur.tool && <span className="mono" style={{ color: 'var(--amber)' }}>{cur.tool}</span>}
        <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{cur.out}</p>
        <span className="small">Sample output, for illustration</span>
      </div>
    </div>
  );
}

export function Journey() {
  const [j, setJ] = useState(0);
  return (
    <div className="stack" style={{ gap: 8 }} aria-label="How a listing becomes a booking">
      {RE_JOURNEY.map(([t], i) => (
        <button key={t} type="button" className={`btn ${i === j ? 'primary' : 'ghost'} choice`} style={{ justifyContent: 'space-between' }} aria-pressed={i === j} onClick={() => setJ(i)}>
          {t} <span className="mono">0{i + 1}</span>
        </button>
      ))}
      <div className="ai-out fade" key={j} style={{ minHeight: 96 }} aria-live="polite"><p style={{ margin: 0 }}>{RE_JOURNEY[j][1]}</p></div>
    </div>
  );
}
