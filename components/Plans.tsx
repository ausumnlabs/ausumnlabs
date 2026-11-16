'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ENTERPRISE_TIERS, PLAN_ROWS, inr } from '@/lib/content';

type Card = { key: string; name: string; fit: string; size: string; price: string; per: string; save?: string; points: string[]; best: boolean; tiers?: boolean };

export function PlanCards() {
  const [vibe, setVibe] = useState(false);
  const [tier, setTier] = useState(0);
  const t = (on: boolean) => (on ? 'tab on' : 'tab');
  const ent = ENTERPRISE_TIERS[tier];

  const cards: Card[] = PLAN_ROWS.map((r) => {
    const a = r.tiers ? ent[2] : r.inr[0];
    const size = r.tiers ? `${ent[0].toLocaleString('en-IN')} users, ${ent[1]}` : r.size;
    const points = (vibe ? ['Vibecode app builder', 'Unlimited Market apps and REST API'].concat(r.vibeExtra || []) : []).concat(r.points);
    return {
      key: r.key,
      name: vibe ? `${r.name} Vibe+` : r.name,
      fit: r.fit,
      size,
      price: vibe ? 'On request' : inr(a),
      per: vibe ? '' : '/month',
      save: vibe ? undefined : `${inr(a * 12)} billed yearly`,
      points,
      best: !!r.best,
      tiers: r.tiers
    };
  });
  const all: Card[] = vibe ? cards : [{ key: 'free', name: 'Free', fit: 'Explore before you upgrade', size: '1–2 users, 5 GB', price: '₹0', per: '', points: ['Basic CRM', 'Tasks, Kanban and Gantt', 'Chat and video calls'], best: false }, ...cards];

  return (
    <>
      <div className="row between" style={{ marginBottom: 24, gap: 16 }}>
        <div className="seg" role="group" aria-label="Plan family">
          <button type="button" className={t(!vibe)} aria-pressed={!vibe} onClick={() => setVibe(false)}>Essentials</button>
          <button type="button" className={t(vibe)} aria-pressed={vibe} onClick={() => setVibe(true)}>Vibe+ with AI</button>
        </div>
        {!vibe && <span className="pill">Annual billing · price per company, not per user</span>}
      </div>
      {vibe && (
        <p className="notice">
          Bitrix24 does not list Vibe+ prices in rupees yet. We will quote your India price, including the launch offer on 12-month Vibe+ plans that runs until 10 December 2026.
        </p>
      )}
      <div className="plans-g">
        {all.map((p) => (
          <div key={p.key} className={p.best ? 'plan best' : 'plan'}>
            {p.best && <span className="plan-flag">Most popular</span>}
            <h2 className="h4" style={{ fontSize: 20 }}>{p.name}</h2>
            <p className="small">{p.fit}</p>
            <div className="price-row"><span className="price">{p.price}</span>{p.per && <span className="small">{p.per}</span>}</div>
            <span className="small">{p.save || (p.key === 'free' ? 'Free forever' : 'Ask us for an India quote')}</span>
            {p.tiers && !vibe ? (
              <div className="field">
                <label htmlFor="ent-tier" className="small" style={{ fontWeight: 600 }}>Users</label>
                <select id="ent-tier" value={tier} onChange={(e) => setTier(Number(e.target.value))}>
                  {ENTERPRISE_TIERS.map((x, i) => <option key={x[0]} value={i}>{x[0].toLocaleString('en-IN')} users, {x[1]}</option>)}
                </select>
              </div>
            ) : (
              <p className="small" style={{ fontWeight: 600, color: 'var(--text)' }}>{p.size}</p>
            )}
            <ul className="check">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
            <Link className={p.best ? 'btn primary small' : 'btn ghost small'} style={{ marginTop: 'auto' }} href={`/contact?interest=plans&plan=${encodeURIComponent(p.name)}`}>Get a quote</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export function PlanFinder() {
  const [s, set] = useState({ team: 1, auto: 0, ai: 0, host: 0 });
  type K = keyof typeof s;
  const quiz: Array<[K, string, string[]]> = [
    ['team', 'How many people will use it?', ['Up to 5', 'Up to 50', 'Up to 100', '250 or more']],
    ['auto', 'Do you need sales automation, call tracking or RPA?', ['Not yet', 'Yes']],
    ['ai', 'Do you want custom apps or heavy AI use?', ['No', 'Yes']],
    ['host', 'Must it run on your own server?', ['No, Cloud is fine', 'Yes']]
  ];
  let tier = ['Basic', 'Standard', 'Professional', 'Enterprise'][s.team];
  if (s.auto === 1 && (tier === 'Basic' || tier === 'Standard')) tier = 'Professional';
  const row = PLAN_ROWS.find((r) => r.name === tier);
  let result: { plan: string; why: string; price?: string };
  if (s.host === 1) result = { plan: s.team === 3 ? 'On-Premise Enterprise' : 'On-Premise Business', why: 'You need your own server, so On-Premise is the right family. We will size the edition to your users and check which AI features you need.' };
  else if (s.ai === 1) result = { plan: `${tier} Vibe+`, why: `You want custom apps or heavy AI use, so Vibe+ adds Vibecode and higher limits to the ${tier} plan.` };
  else result = { plan: tier, why: s.auto === 1 ? 'Sales automation, call tracking and RPA start at Professional.' : 'This covers your team size and needs today. You can move up as you grow.', price: row ? `${inr(row.inr[0])}/month, billed annually` : undefined };

  return (
    <div className="g2">
      <div className="stack" style={{ gap: 22 }}>
        <h2 className="d2">Find your starting plan.</h2>
        {quiz.map(([key, q, opts]) => (
          <fieldset className="fieldset" key={key}>
            <legend className="h4">{q}</legend>
            <div className="opts">
              {opts.map((l, i) => (
                <button key={l} type="button" className={s[key] === i ? 'opt on' : 'opt'} aria-pressed={s[key] === i} onClick={() => set({ ...s, [key]: i })}>{l}</button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      <div className="result dark" aria-live="polite">
        <span className="eyebrow" style={{ margin: 0 }}>Suggested start</span>
        <h3 className="d2">{result.plan}</h3>
        {result.price && <p className="d3" style={{ color: 'var(--amber)' }}>{result.price}</p>}
        <p className="body">{result.why}</p>
        <div className="row btns"><Link className="btn primary" href={`/contact?interest=plans&plan=${encodeURIComponent(result.plan)}`}>Confirm this with us</Link></div>
        <p className="small">A starting point only. We confirm the fit in a short call.</p>
      </div>
    </div>
  );
}
