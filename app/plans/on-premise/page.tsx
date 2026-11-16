import Link from 'next/link';
import { CtaBand, JsonLd } from '@/components/ui';
import { breadcrumbLd, pageMeta, serviceLd } from '@/lib/seo';
import { PlansHero, PlansNav } from '../shared';

const description = 'Bitrix24 On-Premise Business and Enterprise editions on your own server or private cloud. Ausumn Labs helps with edition choice, installation, setup and training in India.';

export const metadata = pageMeta({
  title: 'Bitrix24 On-Premise (Self-Hosted) in India',
  ogTitle: 'Bitrix24 on your own server.',
  description,
  path: '/plans/on-premise',
  keywords: ['Bitrix24 on-premise', 'Bitrix24 self-hosted', 'Bitrix24 on-premise price India', 'Bitrix24 installation']
});

export default function OnPrem() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([['Plans', '/plans'], ['On-Premise', '/plans/on-premise']]), serviceLd({ name: 'Bitrix24 On-Premise installation', serviceType: 'Software installation', description, path: '/plans/on-premise' })]} />
      <PlansHero eyebrow="Bitrix24 On-Premise" title="Bitrix24 on your own server." lead="For stricter security, deeper customization and internal IT rules. We help with edition choice, installation, setup and training." />
      <PlansNav current="/plans/on-premise" />
      <section className="sec">
        <div className="wrap">
          <div className="head"><h2 className="d2">Two editions to choose from.</h2></div>
          <div className="g3">
            <div className="plan"><h3 className="d3">Business</h3><div><span className="price">From $3,590</span> <span className="small">per year</span></div><p className="mono" style={{ color: 'var(--mute)' }}>From 50 users</p><ul className="check"><li>CRM, tasks, e-commerce and messenger</li><li>Video calls, documents and CoPilot</li><li>BI Builder, HR and workflow automation</li></ul><Link className="btn ghost small" style={{ marginTop: 'auto' }} href="/contact?interest=on-premise">Enquire</Link></div>
            <div className="plan"><h3 className="d3">Enterprise</h3><div><span className="price">$24,990</span> <span className="small">per year</span></div><p className="mono" style={{ color: 'var(--mute)' }}>1,000+ users</p><ul className="check"><li>Everything in Business</li><li>Multiple branches and web cluster</li><li>24/7 priority support</li><li>Microservice architecture</li></ul><Link className="btn ghost small" style={{ marginTop: 'auto' }} href="/contact?interest=on-premise">Enquire</Link></div>
            <div className="card"><h3 className="h4">What to know</h3><ul className="check"><li>Hosted on your server or private cloud</li><li>Source code access, except the mobile app and messenger</li><li>Includes 12 months of updates and support</li><li>Annual renewal is 50% of the edition price</li><li>A 30-day trial is available</li></ul></div>
          </div>
          <p className="small" style={{ marginTop: 20 }}>Global list prices in US$ as published by Bitrix24. <Link href="/contact?interest=on-premise">Ask us for an India quote</Link>, including server setup through our <Link href="/services/cloud-devops">cloud and DevOps team</Link>.</p>
        </div>
      </section>
      <section className="sec white line">
        <div className="wrap">
          <div className="head"><h2 className="d2">Cloud or On-Premise?</h2></div>
          <div className="tbox">
            <table>
              <thead><tr><th scope="col">Question</th><th scope="col">Cloud</th><th scope="col">On-Premise</th></tr></thead>
              <tbody>
                <tr><th scope="row">Where it runs</th><td>Bitrix24 servers</td><td>Your server or private cloud</td></tr>
                <tr><th scope="row">Customization</th><td>Standard setup and integrations</td><td>Source code and custom modules</td></tr>
                <tr><th scope="row">Data control</th><td>General Bitrix24 policies</td><td>Your own policies</td></tr>
                <tr><th scope="row">Best for</th><td>Most growing businesses</td><td>Stricter security or compliance</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
