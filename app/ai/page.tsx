import Link from 'next/link';
import { CtaBand, JsonLd } from '@/components/ui';
import { AI_CAPS } from '@/lib/content';
import { breadcrumbLd, pageMeta, serviceLd } from '@/lib/seo';
import { AiControl, AiNav } from './shared';

const description = 'Bitrix24 AI for real business work: CoPilot, Automation Studio, Vibecode apps, AI agents, MCP and Vibe+. Ausumn Labs helps you choose, set up and adopt AI safely.';

export const metadata = pageMeta({
  title: 'Bitrix24 AI: CoPilot, Vibecode, Automation Studio',
  ogTitle: 'Describe the work. Let AI help run it.',
  description,
  path: '/ai',
  keywords: ['Bitrix24 AI', 'Bitrix24 CoPilot', 'Bitrix24 Vibecode', 'AI CRM India', 'AI business automation']
});

export default function AiPage() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([['AI', '/ai']]), serviceLd({ name: 'Bitrix24 AI setup', serviceType: 'AI implementation', description, path: '/ai' })]} />
      <section className="sec dark">
        <div className="wrap stack" style={{ gap: 22 }}>
          <p className="eyebrow" style={{ margin: 0 }}>AI for real business work</p>
          <h1 className="d1" style={{ maxWidth: '16ch' }}>Describe the work. Let AI help run it.</h1>
          <p className="lead">Bitrix24 now brings AI into sales, projects, chat, automation and custom apps. We help you choose what is useful, set it up safely and get your team using it.</p>
          <div className="row btns">
            <Link className="btn primary" href="/contact?interest=ai">See AI in a live demo</Link>
            <Link className="btn ghost" href="/ai/vibe-plus">What is Vibe+?</Link>
          </div>
        </div>
      </section>
      <AiNav current="/ai" />
      <section className="sec white">
        <div className="wrap">
          <div className="head"><p className="eyebrow" style={{ margin: 0 }}>Three levels</p><h2 className="d2">Start simple. Go as far as your business needs.</h2></div>
          <div className="g3">
            <Link className="card" href="/ai/copilot"><span className="num">Level 1</span><h3 className="d3">Everyday AI</h3><p className="body">Write, summarize, transcribe and fill in records inside the tools you already use.</p><span className="linkbtn">CoPilot →</span></Link>
            <Link className="card" href="/ai/automation-studio"><span className="num">Level 2</span><h3 className="d3">AI automation</h3><p className="body">Describe a repeated process in chat, then review the workflow AI creates.</p><span className="linkbtn">Automation Studio →</span></Link>
            <Link className="card" href="/ai/vibecode"><span className="num">Level 3</span><h3 className="d3">AI-built apps</h3><p className="body">Describe the internal tool you need and connect it to your Bitrix24 data.</p><span className="linkbtn">Vibecode →</span></Link>
          </div>
        </div>
      </section>
      <section className="sec line">
        <div className="wrap">
          <div className="head"><p className="eyebrow" style={{ margin: 0 }}>Every capability</p><h2 className="d2">What AI can do in your Bitrix24.</h2></div>
          <div className="g3">
            {AI_CAPS.map((c) => (
              <Link key={c.slug} className="card" href={`/ai/${c.slug}`}>
                <span className="pill">{c.avail}</span>
                <h3 className="d3">{c.label}</h3>
                <p className="body">{c.title}</p>
                <span className="linkbtn">Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <AiControl />
      <CtaBand />
    </>
  );
}
