import Link from 'next/link';
import { JsonLd, PageHero } from '@/components/ui';
import { TILES } from '@/lib/hero-tiles';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Terms of Use',
  description: `Terms for using the ${SITE.name} website, ausumnlabs.in.`,
  path: '/terms'
});

export default function Terms() {
  return (
    <>
      <JsonLd data={breadcrumbLd([['Terms of use', '/terms']])} />
      <PageHero eyebrow="Legal" title="Terms of use" tiles={TILES.legal} />
      <section className="sec">
        <div className="wrap">
          <div className="prose">
            <p><strong>Last updated: 16 November 2026</strong></p>
            <p>These terms apply to your use of ausumnlabs.in, run by {SITE.legalName} (&ldquo;Ausumn Labs&rdquo;). By using the site, you agree to them.</p>
            <h2>Information on this site</h2>
            <p>We aim to keep the content accurate, but it is for general information only. Bitrix24 plans, features and prices are set by Bitrix24 and can change at any time. Prices shown are list prices published by Bitrix24 and are not a quote. Our services are provided under a separate written proposal or agreement.</p>
            <h2>Sample content</h2>
            <p>Demos, sample pipelines and AI outputs on this site are illustrations. They do not describe any real customer or transaction.</p>
            <h2>Trademarks</h2>
            <p>Bitrix24 is a trademark of its owner. Other product names are the property of their owners. Ausumn Labs is an independent Bitrix24 partner.</p>
            <h2>Acceptable use</h2>
            <p>Do not misuse the site, including by sending spam through our forms, trying to gain unauthorized access or disrupting the service.</p>
            <h2>Links</h2>
            <p>We are not responsible for the content of websites we link to.</p>
            <h2>Liability</h2>
            <p>To the extent the law allows, we are not liable for any loss arising from use of this site or reliance on its content.</p>
            <h2>Governing law</h2>
            <p>These terms are governed by the laws of India, and the courts of Bengaluru, Karnataka have jurisdiction.</p>
            <h2>Contact</h2>
            <p>Questions about these terms: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. See also our <Link href="/privacy">privacy policy</Link>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
