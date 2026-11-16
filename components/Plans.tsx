'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PLAN_ROWS } from '@/lib/content';

export function PlanCards() {
  const [vibe, setVibe] = useState(false);
  const [ann, setAnn] = useState(true);
  const t = (on: boolean) => (on ? 'tab on' : 'tab');

  const cards = PLAN_ROWS.map((r) => {
    const price = (vibe ? r.vibe : r.ess)[ann ? 0 : 1];
    const points = (vibe ? ['Vibecode app builder', 'Unlimited Market apps and REST API'].concat(r.vibeExtra || []) : []).concat(r.points);
    return { key: r.key, name: vibe ? `${r.name} Vibe+` : r.name, fit: r.fit, size: r.size, price: `${r.from ? 'From ' : ''}$${price}`, per: '/org/mo', points, best: !!r.best };
  });
  const all = vibe ? cards : [{ key: 'free', name: 'Free', fit: 'Explore before you upgrade', size: 'Basic features, 5 GB', price: '$0', per: '', points: ['Basic CRM', 'Tasks, Kanban and Gantt', 'Chat and video calls'], best: false }, ...cards];

  return (
    <>
      <div className="row between" style={{ marginBottom: 24, gap: 16 }}>
        <div className="row" role="group" aria-label="Plan family">
          <button type="button" className={t(!vibe)} aria-pressed={!vibe} onClick={() => setVibe(false)}>Essentials</button>
          <button type="button" className={t(vibe)} aria-pressed={vibe} onClick={() => setVibe(true)}>Vibe+</button>
        </div>
        <div className="row" role="group" aria-label="Billing">
          <button type="button" className={t(ann)} aria-pressed={ann} onClick={() => setAnn(true)}>Billed annually</button>
          <button type="button" className={t(!ann)} aria-pressed={!ann} onClick={() => setAnn(false)}>Billed monthly</button>
        </div>
      </div>
      {vibe && ann && <p className="pill ember" style={{ margin: '0 0 20px' }}>Launch prices on 12-month Vibe+ plans end 10 December 2026</p>}
      <div className="plans-g">
        {all.map((p) => (
          <div key={p.key} className={p.best ? 'plan best' : 'plan'}>
            <h2 className="h4" style={{ fontSize: 20 }}>{p.name}</h2>
            <p className="small">{p.fit}</p>
            <div><span className="price">{p.price}</span> <span className="small">{p.per}</span></div>
            <p className="mono" style={{ color: 'var(--mute)' }}>{p.size}</p>
            <ul className="check">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
            <Link className="btn ghost small" style={{ marginTop: 'auto' }} href={`/contact?interest=plans&plan=${encodeURIComponent(p.name)}`}>Get a quote</Link>
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
  let result: { plan: string; why: string };
  if (s.host === 1) result = { plan: s.team === 3 ? 'On-Premise' : 'On-Premise Business', why: 'You need your own server, so On-Premise is the right family. We will size the edition to your users and check which AI features you need.' };
  else if (s.ai === 1) result = { plan: `${tier} Vibe+`, why: `You want custom apps or heavy AI use, so Vibe+ adds Vibecode and higher limits to the ${tier} plan.` };
  else result = { plan: tier, why: s.auto === 1 ? 'Sales automation, call tracking and RPA start at Professional.' : 'This covers your team size and needs today. You can move up as you grow.' };

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
        <span className="mono" style={{ color: 'var(--amber)' }}>Suggested start</span>
        <h3 className="d2">{result.plan}</h3>
        <p className="body">{result.why}</p>
        <div className="row btns"><Link className="btn primary" href={`/contact?interest=plans&plan=${encodeURIComponent(result.plan)}`}>Confirm this with us</Link></div>
        <p className="small">A starting point only. We confirm the fit in a short call.</p>
      </div>
    </div>
  );
}
