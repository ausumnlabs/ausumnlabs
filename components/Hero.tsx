import type { ReactNode } from 'react';
import { Icon } from '@/components/Icon';
import type { Tile } from '@/lib/hero-tiles';

/* Floating category cards behind a hero. Decorative only. */
export function Backdrop({ tiles, compact = false }: { tiles: Tile[]; compact?: boolean }) {
  return (
    <div className={compact ? 'bd bd-compact' : 'bd'} aria-hidden="true">
      <div className="bd-orbit"><i /><i /></div>
      {tiles.slice(0, 8).map((x, n) => (
        <span key={x.label} className={`bd-t tone-${x.tone}`} style={{ ['--n' as string]: n }}>
          <i><Icon name={x.icon} size={18} /></i>
          <span>{x.label}</span>
        </span>
      ))}
    </div>
  );
}

type Title = string | [string, string, string?];

/* Plain titles get the gradient on their last word or two, e.g. "One workspace for your [entire business]." */
function autoSplit(s: string): [string, string, string] {
  const m = s.match(/^(.*?)([.!?:]*)$/);
  const body = m ? m[1] : s;
  const end = m ? m[2] : '';
  const words = body.split(' ');
  if (words.length < 3) return ['', body, end];
  const k = words.length > 5 ? 2 : 1;
  return [words.slice(0, -k).join(' ') + ' ', words.slice(-k).join(' '), end];
}

function renderTitle(title: Title) {
  const [a, b, c] = typeof title === 'string' ? autoSplit(title) : title;
  return <>{a}<span className="serif">{b}</span>{c}</>;
}

/* Light page hero: eyebrow pill, rising headline with a gradient word, lead, actions and floating category cards.
   With `visual`, it becomes a two-column hero (text left, visual right). */
export function Hero({ eyebrow, title, lead, actions, tiles = [], visual, note, size = 'md' }: {
  eyebrow?: string; title: Title; lead?: string; actions?: ReactNode; tiles?: Tile[]; visual?: ReactNode; note?: ReactNode; size?: 'md' | 'sm';
}) {
  const split = !!visual;
  return (
    <section className={`hero2 ${split ? 'hero2-split' : 'hero2-center'} ${size === 'sm' ? 'hero2-sm' : ''}`}>
      <div className="hx-aura" aria-hidden="true"><i /><i /><i /></div>
      <div className="hx-dots" aria-hidden="true" />
      {tiles.length > 0 && <Backdrop tiles={tiles} compact={split} />}
      <div className="wrap hero2-in">
        <div className="hero2-text">
          {eyebrow && <span className="hx-pill"><i />{eyebrow}</span>}
          <h1 className="hx-h1 hero2-h1"><span className="ln"><span>{renderTitle(title)}</span></span></h1>
          {lead && <p className="hx-lead">{lead}</p>}
          {actions && <div className="hx-cta">{actions}</div>}
          {note && <div className="hx-trust">{note}</div>}
        </div>
        {visual && <div className="hero2-visual">{visual}</div>}
      </div>
    </section>
  );
}
