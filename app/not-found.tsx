import Link from 'next/link';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="sec">
      <div className="wrap stack" style={{ gap: 20, maxWidth: 760 }}>
        <p className="eyebrow" style={{ margin: 0 }}>404</p>
        <h1 className="d1">This page has moved or does not exist.</h1>
        <p className="lead">Our website has a new home. Try one of these instead.</p>
        <div className="row btns">
          <Link className="btn primary" href="/">Go to home</Link>
          <Link className="btn ghost" href="/services">See our services</Link>
          <Link className="btn ghost" href="/contact">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
