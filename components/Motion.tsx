'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

const TARGETS = [
  'main .sec .head', 'main .card', 'main .nstep', 'main .shot', 'main .flow > div', 'main .plan',
  'main .ba-row', 'main .ind-card', 'main .stat', 'main .faq details', 'main .shot-text', 'main [data-reveal]'
].join(',');

/* Site-wide scroll reveal with stagger. Content stays visible without JS. */
export function ScrollFX() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).filter(
      (el) => !el.closest('.story, .who, .ind-hero, .hero-fx') && el.getBoundingClientRect().top > window.innerHeight * 0.92
    );
    els.forEach((el) => el.classList.add('rv-item'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        io.unobserve(el);
        const sibs = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains('rv-item')) : [];
        const delay = Math.min(Math.max(sibs.indexOf(el), 0), 6) * 80;
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add('in');
        window.setTimeout(() => { el.classList.remove('rv-item', 'in'); el.style.transitionDelay = ''; }, 900 + delay);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}

/* Number that counts up when it scrolls into view. */
export function CountUp({ to, suffix = '', prefix = '' }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setN(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - t0) / 1400, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{prefix}{n.toLocaleString('en-IN')}{suffix}</span>;
}

/* Gentle 3D tilt that follows the pointer (desktop only). */
export function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1100px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg)`;
      el.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
      el.style.setProperty('--my', `${(y + 0.5) * 100}%`);
    };
    const leave = () => { el.style.transform = ''; };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); };
  }, []);
  return <div ref={ref} className={`tilt ${className}`}>{children}</div>;
}
