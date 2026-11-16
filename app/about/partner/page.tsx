import Link from 'next/link';
import { CtaBand, JsonLd, PageHero, SubNav } from '@/components/ui';
import { TILES } from '@/lib/hero-tiles';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { ABOUT_NAV as aboutNav } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Bitrix24 Silver Partner Credentials',
  ogTitle: 'Why you can trust our Bitrix24 work.',
  description: 'Ausumn Labs is a certified Bitrix24 Silver Partner in Bengaluru, helping businesses plan, deploy, configure, customize, integrate and train teams on Bitrix24.',
  path: '/about/partner',
  keywords: ['Bitrix24 Silver Partner', 'certified Bitrix24 partner India', 'Bitrix24 partner Bengaluru']
});

export default function Partner() {
  return (
    <>
      <JsonLd data={breadcrumbLd([['About', '/about'], ['Partner credentials', '/about/partner']])} />
      <PageHero eyebrow="Partner credentials" title="Why you can trust our Bitrix24 work." tiles={TILES.about} />
      <SubNav label="Company" items={aboutNav} current="/about/partner" />
      <section className="sec">
        <div className="wrap g2">
          <div className="stack" style={{ gap: 18 }}>
            <span className="pill ember">Bitrix24 Silver Partner</span>
            <h2 className="d2">A certified partner, close to your team.</h2>
            <p className="lead">Bitrix24 partners help businesses plan, deploy, configure, customize, integrate and train employees. We do all of this from Bengaluru, in person or online.</p>
            <div className="row btns"><Link className="btn primary" href="/contact">Talk to our team</Link></div>
          </div>
          <div className="card">
            <h3 className="h4">What our partner status means for you</h3>
            <ul className="check">
              <li>Help with Bitrix24 licences, upgrades and renewals</li>
              <li>Help choosing between Cloud, Vibe+ and On-Premise</li>
              <li>Local implementation, training and support</li>
              <li>One accountable team for setup and integrations</li>
            </ul>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
