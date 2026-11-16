'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import { INTERESTS } from '@/lib/form';
import { SITE } from '@/lib/site';

const TEAMS = ['1 to 5', '6 to 50', '51 to 100', '101 to 250', 'More than 250'];

export type Mode = 'demo' | 'audit' | 'project';

const MODES: Array<{ id: Mode; label: string; title: string; cta: string; msg: string; placeholder: string }> = [
  { id: 'demo', label: 'CRM demo', title: 'Book your free demo', cta: 'Book my free demo', msg: 'What is not working today? (optional)', placeholder: 'e.g. Leads from 99acres and WhatsApp are not followed up on time' },
  { id: 'audit', label: 'Free CRM audit', title: 'Get a free CRM audit', cta: 'Request my free audit', msg: 'What do you use today? (optional)', placeholder: 'e.g. Bitrix24 Standard, set up 2 years ago. Agents still track leads in Excel' },
  { id: 'project', label: 'Website or app', title: 'Tell us about your project', cta: 'Discuss my project', msg: 'What do you want to build? (optional)', placeholder: 'e.g. A property listing website that sends enquiries to our CRM' }
];

type Fields = { name: string; phone: string; email: string; company: string; interest: string; team: string; msg: string };
const blank = (interest: string): Fields => ({ name: '', phone: '', email: '', company: '', interest, team: '6 to 50', msg: '' });

declare global {
  interface Window { turnstile?: { reset: (el?: string | HTMLElement) => void } }
}

export default function ContactForm({ initialMode, initialInterest, plan, note }: { initialMode: Mode; initialInterest: string; plan?: string; note?: string }) {
  const [mode, setModeRaw] = useState<Mode>(initialMode);
  const [f, setF] = useState<Fields>(() => ({ ...blank(initialInterest), msg: note || (plan ? (/CRM$/.test(plan) ? `Interested in ${plan}.` : `Interested in the ${plan} plan.`) : '') }));
  const [tried, setTried] = useState(false);
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errMsg, setErrMsg] = useState('');
  const hp = useRef<HTMLInputElement>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const cur = MODES.find((m) => m.id === mode) || MODES[0];

  const setMode = (m: Mode) => {
    setModeRaw(m);
    if (m === 'project' && !['Website or web app', 'Mobile app', 'Data and dashboards', 'Cloud and DevOps', 'IT consulting', 'AI and automation'].includes(f.interest)) setF({ ...f, interest: 'Website or web app' });
  };

  const bad = {
    name: !f.name.trim(),
    phone: f.phone.replace(/\D/g, '').length < 10,
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())
  };
  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  useEffect(() => {
    if (tried) {
      const first = (['name', 'phone', 'email'] as const).find((k) => bad[k]);
      if (first) document.getElementById(`c-${first}`)?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tried]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (bad.name || bad.phone || bad.email) { setTried(false); setTimeout(() => setTried(true), 0); return; }
    setState('sending');
    setErrMsg('');
    const form = new FormData(e.currentTarget);
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((k) => { const v = params.get(k); if (v) utm[k] = v; });
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...f,
          type: mode,
          website: hp.current?.value || '',
          token: form.get('cf-turnstile-response') || '',
          page: window.location.pathname,
          referrer: document.referrer || '',
          utm
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || 'Something went wrong');
      setState('sent');
    } catch (err) {
      setState('error');
      setErrMsg(err instanceof Error ? err.message : 'Something went wrong');
      window.turnstile?.reset();
    }
  }

  if (state === 'sent') {
    return (
      <div className="stack fade" role="status">
        <span className="pill">Request received</span>
        <h2 className="d2">Thank you, {f.name.trim().split(' ')[0]}.</h2>
        <p className="body">We will contact you shortly to arrange the next step. For anything urgent, call or WhatsApp us on {SITE.phone}.</p>
        <div className="row btns">
          <button type="button" className="btn ghost" onClick={() => { setF(blank(f.interest)); setTried(false); setState('idle'); }}>Send another request</button>
          <Link className="btn primary" href="/">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="stack" style={{ gap: 6 }}>
        <h2 className="d3">{cur.title}</h2>
        <p className="small">Takes under a minute. We never share your details.</p>
      </div>
      <div className="seg" role="group" aria-label="What do you need?">
        {MODES.map((m) => (
          <button key={m.id} type="button" className={mode === m.id ? 'tab on' : 'tab'} aria-pressed={mode === m.id} onClick={() => setMode(m.id)}>{m.label}</button>
        ))}
      </div>
      <form className="stack" onSubmit={submit} noValidate>
        <div className="g2" style={{ gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))' }}>
          <div className="field">
            <label htmlFor="c-name">Your name</label>
            <input id="c-name" name="name" autoComplete="name" placeholder="Full name" value={f.name} onChange={set('name')} aria-invalid={tried && bad.name} aria-describedby={tried && bad.name ? 'e-name' : undefined} />
            {tried && bad.name && <span className="err" id="e-name">Please add your name.</span>}
          </div>
          <div className="field">
            <label htmlFor="c-phone">Phone or WhatsApp</label>
            <input id="c-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" value={f.phone} onChange={set('phone')} aria-invalid={tried && bad.phone} aria-describedby={tried && bad.phone ? 'e-phone' : undefined} />
            {tried && bad.phone && <span className="err" id="e-phone">Please add a valid number.</span>}
          </div>
          <div className="field">
            <label htmlFor="c-email">Work email</label>
            <input id="c-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" value={f.email} onChange={set('email')} aria-invalid={tried && bad.email} aria-describedby={tried && bad.email ? 'e-email' : undefined} />
            {tried && bad.email && <span className="err" id="e-email">Please add a valid email.</span>}
          </div>
          <div className="field">
            <label htmlFor="c-company">Company</label>
            <input id="c-company" name="company" autoComplete="organization" placeholder="Company name" value={f.company} onChange={set('company')} />
          </div>
          <div className="field">
            <label htmlFor="c-interest">Interested in</label>
            <select id="c-interest" name="interest" value={f.interest} onChange={set('interest')}>
              {INTERESTS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="c-team">Team size</label>
            <select id="c-team" name="team" value={f.team} onChange={set('team')}>
              {TEAMS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="c-msg">{cur.msg}</label>
          <textarea id="c-msg" name="msg" placeholder={cur.placeholder} value={f.msg} onChange={set('msg')} />
        </div>
        <div className="hp" aria-hidden="true">
          <label htmlFor="c-website">Leave this empty</label>
          <input id="c-website" ref={hp} tabIndex={-1} autoComplete="off" />
        </div>
        {siteKey && (
          <>
            <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
            <div className="cf-turnstile" data-sitekey={siteKey} data-theme="light" />
          </>
        )}
        <button className="btn primary" type="submit" disabled={state === 'sending'} style={{ width: '100%', fontSize: 17 }}>
          {state === 'sending' ? 'Sending…' : cur.cta}
        </button>
        {state === 'error' && (
          <p className="err" role="alert">
            We could not send your request ({errMsg}). Please try again, or call or WhatsApp us on {SITE.phone}.
          </p>
        )}
        <p className="small">Used only to reply to you. See our <Link href="/privacy">privacy policy</Link>.</p>
      </form>
    </>
  );
}
