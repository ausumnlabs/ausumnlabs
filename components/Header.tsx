'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV } from '@/lib/site';

export default function Header() {
  const path = usePathname() || '/';
  const [menu, setMenu] = useState('');
  const [mob, setMob] = useState(false);
  const [mobOpen, setMobOpen] = useState('');

  useEffect(() => {
    setMenu('');
    setMob(false);
  }, [path]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMenu(''); setMob(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const section = (href: string, id: string) =>
    path === href || path.startsWith(href + '/') || (id === 'company' && (path === '/about' || path.startsWith('/about/')));

  const active = NAV.find((m) => m.id === menu);

  return (
    <header className="bar" onMouseLeave={() => setMenu('')}>
      <a className="skip" href="#main">Skip to content</a>
      <div className="wrap bar-in">
        <Link className="logo" href="/" aria-label="Ausumn Labs home">
          <img src="/brand/ausumn-labs-on-dark.svg" alt="Ausumn Labs" width={100} height={48} />
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((m) => (
            <button
              key={m.id}
              type="button"
              className={menu === m.id || section(m.href, m.id) ? 'nav-b on' : 'nav-b'}
              aria-expanded={menu === m.id}
              aria-controls="mega"
              onMouseEnter={() => setMenu(m.id)}
              onClick={() => setMenu(menu === m.id ? '' : m.id)}
            >
              {m.label}
            </button>
          ))}
        </nav>
        <div className="row bar-cta dark">
          <Link className="btn primary small" href="/contact">Book a demo</Link>
        </div>
        <button className="burger" type="button" onClick={() => setMob(!mob)} aria-label={mob ? 'Close menu' : 'Open menu'} aria-expanded={mob}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {mob ? <path d="M5 5l12 12M17 5L5 17" /> : <path d="M3 6h16M3 11h16M3 16h16" />}
          </svg>
        </button>
      </div>
      {active && (
        <div className="mega fade" id="mega">
          <div className="wrap">
            <div className="mega-g">
              {active.items.map((i) => (
                <Link key={i.href + i.label} className="mega-i" href={i.href} onClick={() => setMenu('')}>
                  <b>{i.label}</b>
                  <span>{i.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={mob ? 'mob open' : 'mob'}>
        <div className="wrap">
          {NAV.map((m) => {
            const open = mobOpen === m.id;
            return (
              <div key={m.id}>
                <button className="mob-t" type="button" onClick={() => setMobOpen(open ? '' : m.id)} aria-expanded={open}>
                  {m.label} <span aria-hidden="true">{open ? '−' : '+'}</span>
                </button>
                {open && (
                  <div>
                    {m.items.map((i) => (
                      <Link key={i.href + i.label} className="mob-s" href={i.href}>{i.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="row dark" style={{ paddingTop: 16 }}>
            <Link className="btn primary" href="/contact">Book a demo</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
