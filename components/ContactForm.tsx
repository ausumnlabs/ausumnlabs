'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import { INTERESTS } from '@/lib/form';

const TEAMS = ['1 to 5', '6 to 50', '51 to 100', '101 to 250', 'More than 250'];

type Fields = { name: string; phone: string; email: string; company: string; interest: string; team: string; msg: string };
const blank = (interest: string): Fields => ({ name: '', phone: '', email: '', company: '', interest, team: '6 to 50', msg: '' });

declare global {
  interface Window { turnstile?: { reset: (el?: string | HTMLElement) => void } }
}

export default function ContactForm({ initialMode, initialInterest, plan }: { initialMode: 'demo' | 'audit'; initialInterest: string; plan?: string }) {
  const [mode, setMode] = useState<'demo' | 'audit'>(initialMode);
  const [f, setF] = useState<Fields>(() => ({ ...blank(initialInterest), msg: plan ? `Interested in the ${plan} plan.` : '' }));
  const [tried, setTried] = useState(false);
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errMsg, setErrMsg] = useState('');
  const hp = useRef<HTMLInputElement>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const isDemo = mode === 'demo';
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
        <p className="body">We will contact you shortly to arrange the next step. For anything urgent, call or WhatsApp us on +91 93680 79747.</p>
        <div className="row btns">
          <button type="button" className="btn ghost" onClick={() => { setF(blank(f.interest)); setTried(false); setState('idle'); }}>Send another request</button>
          <Link className="btn primary" href="/">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="row" role="group" aria-label="What do you need?">
        <button type="button" className={isDemo ? 'tab on' : 'tab'} aria-pressed={isDemo} onClick={() => setMode('demo')}>Book a demo</button>
        <button type="button" className={isDemo ? 'tab' : 'tab on'} aria-pressed={!isDemo} onClick={() => setMode('audit')}>Free CRM audit</button>
      </div>
      <form className="stack" onSubmit={submit} noValidate>
        <div className="g2" style={{ gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))' }}>
          <div className="field">
            <label htmlFor="c-name">Your name</label>
            <input id="c-name" name="name" autoComplete="name" value={f.name} onChange={set('name')} aria-invalid={tried && bad.name} aria-describedby={tried && bad.name ? 'e-name' : undefined} />
            {tried && bad.name && <span className="err" id="e-name">Please add your name.</span>}
          </div>
          <div className="field">
            <label htmlFor="c-phone">Phone or WhatsApp</label>
            <input id="c-phone" name="phone" type="tel" autoComplete="tel" value={f.phone} onChange={set('phone')} aria-invalid={tried && bad.phone} aria-describedby={tried && bad.phone ? 'e-phone' : undefined} />
            {tried && bad.phone && <span className="err" id="e-phone">Please add a valid number.</span>}
          </div>
          <div className="field">
            <label htmlFor="c-email">Work email</label>
            <input id="c-email" name="email" type="email" autoComplete="email" value={f.email} onChange={set('email')} aria-invalid={tried && bad.email} aria-describedby={tried && bad.email ? 'e-email' : undefined} />
            {tried && bad.email && <span className="err" id="e-email">Please add a valid email.</span>}
          </div>
          <div className="field">
            <label htmlFor="c-company">Company</label>
            <input id="c-company" name="company" autoComplete="organization" value={f.company} onChange={set('company')} />
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
          <label htmlFor="c-msg">What should we know? (optional)</label>
          <textarea id="c-msg" name="msg" value={f.msg} onChange={set('msg')} />
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
        <button className="btn primary" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : isDemo ? 'Request my demo' : 'Request my free audit'}
        </button>
        {state === 'error' && (
          <p className="err" role="alert">
            We could not send your request ({errMsg}). Please try again, or call or WhatsApp us on +91 93680 79747.
          </p>
        )}
        <p className="small">We use your details only to reply to this request. See our <Link href="/privacy">privacy policy</Link>.</p>
      </form>
    </>
  );
}
