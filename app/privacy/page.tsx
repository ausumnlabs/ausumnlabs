import Link from 'next/link';
import { JsonLd, PageHero } from '@/components/ui';
import { TILES } from '@/lib/hero-tiles';
import { breadcrumbLd, pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Privacy Policy',
  description: `How ${SITE.legalName} (Ausumn Labs) collects, uses and protects personal data submitted through ausumnlabs.in.`,
  path: '/privacy'
});

export default function Privacy() {
  return (
    <>
      <JsonLd data={breadcrumbLd([['Privacy policy', '/privacy']])} />
      <PageHero eyebrow="Legal" title="Privacy policy" tiles={TILES.legal} />
      <section className="sec">
        <div className="wrap">
          <div className="prose">
            <p><strong>Last updated: 16 November 2026</strong></p>
            <p>This policy explains how {SITE.legalName} (&ldquo;Ausumn Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles personal data collected through this website. We process personal data in line with India&apos;s Digital Personal Data Protection Act, 2023 and other applicable law.</p>
            <h2>What we collect</h2>
            <ul>
              <li>Details you give us in a form, call, email or WhatsApp message: your name, phone number, email address, company, team size and your message.</li>
              <li>Basic technical data when you visit the site, such as pages viewed, referring page, device and browser type, and approximate location from your IP address.</li>
              <li>Campaign details in the page address, such as UTM tags, so we know which advertising or links brought you to us.</li>
            </ul>
            <h2>Why we use it</h2>
            <ul>
              <li>To reply to your enquiry, arrange a demo or audit, and prepare a quote.</li>
              <li>To provide services you have asked us for, and to support you afterwards.</li>
              <li>To understand how the site is used and improve it.</li>
              <li>To meet legal, tax and accounting duties.</li>
            </ul>
            <p>We do not sell your personal data. We send marketing messages only where you have agreed to receive them, and you can opt out at any time.</p>
            <h2>Where it is stored</h2>
            <p>Enquiries from this website are stored in our Bitrix24 CRM. We may also use analytics, email, messaging and hosting providers to run this site and our business. These providers process data on our behalf and may store it outside India, with safeguards in place.</p>
            <h2>How long we keep it</h2>
            <p>We keep enquiry data for as long as needed to respond and to maintain our business relationship, and then for any period required by law. You can ask us to delete it sooner.</p>
            <h2>Your rights</h2>
            <p>You can ask to access, correct or erase your personal data, withdraw consent, or raise a grievance. Write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we will respond within a reasonable time.</p>
            <h2>Cookies</h2>
            <p>This site uses only the cookies needed for it to work and, if enabled, analytics cookies that help us understand visits. You can block cookies in your browser settings.</p>
            <h2>Contact</h2>
            <p>{SITE.legalName}, {SITE.address.street}, {SITE.address.city} {SITE.address.postal}, {SITE.address.region}, India. Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call <a href={SITE.phoneHref}>{SITE.phone}</a>.</p>
            <p>See also our <Link href="/terms">terms of use</Link>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
