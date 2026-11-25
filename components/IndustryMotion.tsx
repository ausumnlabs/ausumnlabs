'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { Segment, StoryStep } from '@/lib/industry-stories';
import type { Dash, IndustryModule } from '@/lib/module-boards';

const pad = (n: number) => String(n).padStart(2, '0');

function useReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    setR(m.matches);
    const on = () => setR(m.matches);
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, []);
  return r;
}

export function Bubbles() {
  return (
    <div className="bubbles" aria-hidden="true">
      {Array.from({ length: 9 }, (_, i) => <span key={i} />)}
    </div>
  );
}

/* Rotating "We help ___" block with counter, progress bars and a big outlined number. */
export function WhoWeHelp({ segments, label, lead, contactHref, eyebrow = 'Who we help' }: { segments: Segment[]; label: string; lead: string; contactHref: string; eyebrow?: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const DURATION = 3200;

  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(() => setI((x) => (x + 1) % segments.length), DURATION);
    return () => clearTimeout(t);
  }, [i, paused, reduced, segments.length]);

  const s = segments[i];
  return (
    <section className="sec who" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="who-rings" aria-hidden="true"><i /><i /><i /><b /><b /><b /></div>
      <div className="who-num" aria-hidden="true">{pad(i + 1)}</div>
      <div className="wrap who-in">
        <p className="mono-eyebrow">{eyebrow}</p>
        <h2 className="who-h">
          We help <span className="who-word" key={s.who}>{s.who}.</span>
        </h2>
        <div className="who-tags">
          <span className="mono-eyebrow" style={{ margin: 0 }}>Shows up as</span>
          {s.shows.map((x) => <span className="htag" key={x}>{x}</span>)}
        </div>
        <div className="who-prog">
          <span className="mono-eyebrow" style={{ margin: 0 }}>{pad(i + 1)} / {pad(segments.length)}</span>
          <div className="who-bars" role="tablist" aria-label={`${label} types`}>
            {segments.map((x, n) => (
              <button key={x.who} type="button" role="tab" aria-selected={n === i} aria-label={x.who} className={n === i ? 'on' : n < i ? 'done' : ''} onClick={() => setI(n)}>
                <span style={n === i && !paused && !reduced ? ({ animationDuration: `${DURATION}ms` } as CSSProperties) : undefined} />
              </button>
            ))}
          </div>
        </div>
        <p className="lead" style={{ maxWidth: '46ch' }}>{lead}</p>
        <div className="who-tags">
          <span className="mono-eyebrow" style={{ margin: 0 }}>Explore</span>
          {s.explore.map((x) => <Link className="hchip" key={x} href={s.href || `${contactHref}&topic=${encodeURIComponent(x)}`}>{x} →</Link>)}
        </div>
      </div>
    </section>
  );
}

function Card({ step, n }: { step: StoryStep; n: number }) {
  const c = step.card;
  return (
    <div className="scard" key={step.key}>
      <div className="scard-top">
        <span className="scan"><i />Step {pad(n)} · {step.label}<span className="eq" aria-hidden="true"><b /><b /><b /><b /><b /></span></span>
        <span className="small">Sample data</span>
      </div>
      <div className="scard-body">
        <span className="small" style={{ fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase' }}>{c.title}</span>
        <b className="scard-who">{c.who}</b>
        <span className="small">{c.meta}</span>
        <div className="row" style={{ gap: 6 }}>{c.chips.map((x) => <span className="htag" key={x}>{x}</span>)}</div>
        <dl className="scard-rows">
          {c.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
        <div className="scard-status"><span className="pulse" aria-hidden="true" />{c.status}</div>
      </div>
    </div>
  );
}

/* Sticky scroll story: the left visual and right text change as you scroll. */
export function ScrollStory({ steps, title, lead, eyebrow, cta, contactHref }: { steps: StoryStep[]; title: [string, string]; lead: string; eyebrow: string; cta: string; contactHref: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [a, setA] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        const p = total > 0 ? Math.min(Math.max(-r.top / total, 0), 0.9999) : 0;
        setA(Math.floor(p * steps.length));
      });
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, [steps.length]);

  const go = (n: number) => {
    const el = ref.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + (total * (n + 0.5)) / steps.length, behavior: 'smooth' });
  };

  const s = steps[a];
  return (
    <section className="story-wrap" id="journey" aria-label={title.join('')}>
      <div className="wrap story-intro">
        <p className="mono-eyebrow">{eyebrow}</p>
        <h2 className="d2">{title[0]}<span className="serif hc">{title[1]}</span></h2>
        <p className="lead">{lead}</p>
      </div>

      {/* Desktop and tablet: sticky, scroll-driven */}
      <div className="story" ref={ref} style={{ height: `${steps.length * 75 + 40}vh` }}>
        <div className="story-stick">
          <div className="wrap story-grid">
            <nav className="story-rail" aria-label="Journey steps">
              {steps.map((x, n) => (
                <button key={x.key} type="button" className={n === a ? 'on' : ''} aria-current={n === a ? 'step' : undefined} onClick={() => go(n)}>
                  <i />{x.label}
                </button>
              ))}
            </nav>
            <div className="story-visual">
              <div className="story-orbit" aria-hidden="true"><i /><i /><i /></div>
              <Card step={s} n={a + 1} />
            </div>
            <div className="story-text" key={s.key} aria-live="polite">
              <p className="mono-eyebrow hc">Step {pad(a + 1)} — {s.label}</p>
              <h3 className="d2">{s.title}</h3>
              <p className="lead">{s.text}</p>
              <div className="row" style={{ gap: 8 }}>{s.tags.map((t) => <span className="hchip static" key={t}>{t}</span>)}</div>
              <div><Link className="btn dark-btn" href={contactHref}>{cta} →</Link></div>
            </div>
          </div>
        </div>
      </div>

      {/* Phones: simple stacked steps */}
      <div className="wrap story-list">
        {steps.map((x, n) => (
          <div className="story-item" key={x.key}>
            <p className="mono-eyebrow hc">Step {pad(n + 1)} — {x.label}</p>
            <h3 className="d3">{x.title}</h3>
            <p className="body">{x.text}</p>
            <Card step={x} n={n + 1} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* Industry modules built in Bitrix24, revealed one industry per scroll step. */
function Dashboard({ m, d }: { m: IndustryModule; d: Dash }) {
  const cells = d.grid.groups.flatMap((g) => g.rows.flatMap(([, p]) => [...p]));
  const first = cells.filter((c) => c === '0').length;
  const max = Math.max(...d.pipe.rows.map(([, n]) => n));
  return (
    <div className="db" role="img" aria-label={`${m.name} demo dashboard: ${d.kpis.map(([v, l]) => `${l} ${v}`).join(', ')}`}>
      <div className="db-head">
        <div><p className="db-hello">{d.hello}</p><p className="db-sub">{d.sub}</p></div>
        <span className="db-tag">{d.tag}</span>
      </div>
      <div className="db-kpis">
        {d.kpis.map(([v, l], i) => <div className={i ? 'db-kpi' : 'db-kpi on'} key={l}><b>{v}</b><span>{l}</span></div>)}
      </div>
      <div className="db-panel">
        <div className="db-ptop"><p className="db-pt">{d.grid.title}</p><span className="db-note">{first} of {cells.length} {d.grid.legend[0][0].toLowerCase()}</span></div>
        <div className="db-legend">{d.grid.legend.map(([n, c]) => <span key={n}><i style={{ background: c }} />{n}</span>)}</div>
        <div className="db-groups">
          {d.grid.groups.map((g) => (
            <div className="db-group" key={g.name} style={{ '--nc': g.cols.length } as CSSProperties}>
              <p className="db-gname">{g.name}</p>
              <div className="db-grid">
                <span />{g.cols.map((c) => <span className="db-col" key={c}>{c}</span>)}
                {g.rows.map(([r, p]) => [
                  <span className="db-row" key={r}>{r}</span>,
                  ...[...p].map((x, j) => {
                    const [n, c] = d.grid.legend[+x];
                    return <span className="db-cell" key={r + j} style={{ background: c }}>{n}</span>;
                  })
                ])}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="db-bottom">
        <div className="db-panel">
          <p className="db-pt">{d.pipe.title}<small>Open by stage</small></p>
          {d.pipe.rows.map(([n, v]) => (
            <div className="db-bar" key={n}><span>{n}</span><i><em style={{ width: `${(v / max) * 100}%` }} /></i><b>{v}</b></div>
          ))}
        </div>
        <div className="db-panel">
          <p className="db-pt">{d.side.title}</p>
          {d.side.stats.map(([v, l]) => <div className="db-stat" key={l}><b>{v}</b><span>{l}</span></div>)}
        </div>
      </div>
    </div>
  );
}

function ModuleFrame({ m }: { m: IndustryModule }) {
  return (
    <div className="shot-frame mod-frame">
      <div className="shot-bar" aria-hidden="true"><i /><i /><i /><span>ausumnlabs.bitrix24.in · {m.name}</span></div>
      {m.shot ? (
        <img className="mod-img" src={m.shot.src} width={m.shot.w} height={m.shot.h} alt={m.shot.alt} loading="lazy" decoding="async" />
      ) : m.dash && <Dashboard m={m} d={m.dash} />}
    </div>
  );
}

function ModuleText({ m, n, total }: { m: IndustryModule; n: number; total: number }) {
  return (
    <>
      <p className="mono-eyebrow hc">{pad(n)} / {pad(total)} — {m.label}</p>
      <h3 className="d2">{m.name}</h3>
      <p className="lead">{m.text}</p>
      <div className="row" style={{ gap: 8 }}>{m.parts.map((t) => <span className="hchip static" key={t}>{t}</span>)}</div>
      <div><Link className="btn dark-btn" href={m.href}>See the {m.label.toLowerCase()} module →</Link></div>
    </>
  );
}

export function IndustryModules({ modules }: { modules: IndustryModule[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [a, setA] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        const p = total > 0 ? Math.min(Math.max(-r.top / total, 0), 0.9999) : 0;
        setA(Math.floor(p * modules.length));
      });
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, [modules.length]);

  const go = (n: number) => {
    const el = ref.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + (total * (n + 0.5)) / modules.length, behavior: 'smooth' });
  };

  const m = modules[a];
  return (
    <section className="story-wrap mods" id="modules" aria-label="Bitrix24 modules by industry">
      <div className="wrap story-intro">
        <p className="mono-eyebrow">Built and tested in Bitrix24</p>
        <h2 className="d2">A ready module for <span className="serif hc">your industry.</span></h2>
        <p className="lead">Each one is a working Bitrix24 setup with its own pipelines, fields and automation. Scroll to see them one by one.</p>
      </div>

      <div className="story" ref={ref} style={{ height: `${modules.length * 75 + 40}vh` }}>
        <div className="story-stick">
          <div className="wrap story-grid">
            <nav className="story-rail" aria-label="Industries">
              {modules.map((x, n) => (
                <button key={x.key} type="button" className={n === a ? 'on' : ''} aria-current={n === a ? 'step' : undefined} onClick={() => go(n)}>
                  <i />{x.label}
                </button>
              ))}
            </nav>
            <div className="mod-visual" key={'v' + m.key}><ModuleFrame m={m} /></div>
            <div className="story-text" key={m.key} aria-live="polite"><ModuleText m={m} n={a + 1} total={modules.length} /></div>
          </div>
        </div>
      </div>

      <div className="wrap story-list">
        {modules.map((x, n) => (
          <div className="story-item" key={x.key}>
            <ModuleText m={x} n={n + 1} total={modules.length} />
            <ModuleFrame m={x} />
          </div>
        ))}
      </div>
    </section>
  );
}
