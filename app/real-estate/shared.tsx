import { SubNav } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { RE_MODULES } from '@/lib/content';

export function ReNav({ current }: { current: string }) {
  const items = [{ href: '/real-estate', label: 'Overview' }].concat(RE_MODULES.map((m) => ({ href: `/real-estate/${m.slug}`, label: m.name })));
  return <SubNav label="Real estate modules" items={items} current={current} />;
}

const WHY: Array<['award' | 'users' | 'file' | 'grid', string, string]> = [
  ['award', 'Bitrix24 Silver Partner', 'Focused on real estate, built from real broker and builder work in Bengaluru.'],
  ['users', 'Set up on your own Bitrix24', 'Your projects, listings, pipelines, team and letterhead. Your data stays in your account.'],
  ['file', 'Your data imported', 'We import your listings or inventory sheet and train your sales, CRM and accounts teams.'],
  ['grid', 'Separate modules', 'Broker, builder and agency modules each have their own menu, pipelines, fields and documents.']
];

export function WhyUs() {
  return (
    <section className="sec white">
      <div className="wrap">
        <div className="head">
          <p className="eyebrow" style={{ margin: 0 }}>Why Ausumn Labs</p>
          <h2 className="d2">Built by a partner that <span className="serif" style={{ color: 'var(--ember-ink)' }}>works in property.</span></h2>
        </div>
        <div className="g4">
          {WHY.map(([icon, t, d]) => (
            <div className="card" key={t}>
              <span className="ic"><Icon name={icon} /></span>
              <h3 className="h4">{t}</h3>
              <p className="body">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
