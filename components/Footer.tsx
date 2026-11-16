import Link from 'next/link';
import { FOOTER_COLS, SITE } from '@/lib/site';

export default function Footer() {
  return (
    <>
      <footer className="foot">
        <div className="wrap">
          <div className="foot-g">
            <div>
              <Link className="logo" href="/" aria-label="Ausumn Labs home">
                <img src="/brand/ausumn-labs-on-dark.svg" alt="Ausumn Labs" width={125} height={60} />
              </Link>
              <p className="small" style={{ color: 'var(--mute-dark)', marginTop: 8, maxWidth: '32ch' }}>
                Bitrix24 Silver Partner and complete IT solutions, Bengaluru. {SITE.legalName}.
              </p>
            </div>
            {FOOTER_COLS.map((c) => (
              <div key={c.title}>
                <h3>{c.title}</h3>
                {c.items.map(([label, href]) => (
                  <Link key={href} className="foot-b" href={href}>{label}</Link>
                ))}
              </div>
            ))}
            <div>
              <h3>Talk to us</h3>
              <a className="foot-b" href={SITE.phoneHref}>{SITE.phone}</a>
              <a className="foot-b" href={SITE.phone2Href}>{SITE.phone2}</a>
              <a className="foot-b" href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <address className="small" style={{ fontStyle: 'normal', color: 'var(--mute-dark)', marginTop: 8 }}>
                {SITE.address.street}, {SITE.address.city} {SITE.address.postal}
              </address>
            </div>
          </div>
          <div className="foot-end">
            <span>© {new Date().getFullYear()} {SITE.legalName}</span>
            <span>Bitrix24 is a trademark of its owner.</span>
          </div>
        </div>
      </footer>
      <a className="wa" href={SITE.whatsapp} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 20l1.4-4.2A8 8 0 1 1 8.3 18.7L4 20z" />
        </svg>
        <span>WhatsApp</span>
      </a>
    </>
  );
}
