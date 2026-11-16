import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';

let logo: string | null = null;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get('title') || 'Bitrix24 and AI, built around how you sell.').slice(0, 110);
  if (!logo) {
    const svg = await readFile(path.join(process.cwd(), 'public/brand/ausumn-labs-on-dark.svg'));
    logo = `data:image/svg+xml;base64,${svg.toString('base64')}`;
  }
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 72px', background: '#0C1410', color: '#EEF3EE' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src={logo} width={188} height={90} alt="" />
          <div style={{ display: 'flex', fontSize: 26, color: '#F89924' }}>Bitrix24 Silver Partner</div>
        </div>
        <div style={{ display: 'flex', fontSize: title.length > 60 ? 60 : 72, fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: 1000 }}>{title}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: '#A8B5AC', borderTop: '2px solid #233129', paddingTop: 24 }}>
          <span>CRM · Web · Mobile · AI · IT solutions</span>
          <span>ausumnlabs.in</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630, headers: { 'Cache-Control': 'public, max-age=86400, immutable' } }
  );
}
