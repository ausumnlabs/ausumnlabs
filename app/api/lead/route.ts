import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Simple in-memory rate limit: 5 requests per IP per 10 minutes, per machine.
const hits = new Map<string, number[]>();
const WINDOW = 10 * 60 * 1000;
const LIMIT = 5;

function limited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) for (const [k, v] of hits) if (now - v[v.length - 1] > WINDOW) hits.delete(k);
  return list.length > LIMIT;
}

const str = (v: unknown, max = 500) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  const body = new URLSearchParams({ secret, response: token, remoteip: ip });
  const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const data = (await r.json().catch(() => ({}))) as { success?: boolean };
  return !!data.success;
}

export async function POST(req: Request) {
  const ip = (req.headers.get('fly-client-ip') || req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (limited(ip)) return NextResponse.json({ ok: false, error: 'Too many requests. Please try again later.' }, { status: 429 });

  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success.
  if (str(b.website)) return NextResponse.json({ ok: true });

  const name = str(b.name, 120);
  const phone = str(b.phone, 40);
  const email = str(b.email, 160);
  const company = str(b.company, 160);
  const interest = str(b.interest, 80);
  const team = str(b.team, 40);
  const msg = str(b.msg, 3000);
  const type = b.type === 'audit' || b.type === 'project' ? b.type : 'demo';
  const page = str(b.page, 200);
  const referrer = str(b.referrer, 300);
  const utm = (b.utm && typeof b.utm === 'object' ? b.utm : {}) as Record<string, unknown>;

  if (!name || phone.replace(/\D/g, '').length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'Please check your name, phone and email' }, { status: 422 });
  }

  if (!(await verifyTurnstile(str(b.token, 4000), ip))) {
    return NextResponse.json({ ok: false, error: 'Spam check failed' }, { status: 403 });
  }

  const hook = process.env.BITRIX24_WEBHOOK_URL;
  if (!hook) {
    console.error('[lead] BITRIX24_WEBHOOK_URL is not set. Lead not saved:', { name, phone, email, interest });
    return NextResponse.json({ ok: false, error: 'Form is not connected yet' }, { status: 503 });
  }

  const label = type === 'audit' ? 'Free CRM audit' : type === 'project' ? 'Project enquiry' : 'Demo request';
  const comments = [
    `Request: ${label}`,
    `Interested in: ${interest || '-'}`,
    `Team size: ${team || '-'}`,
    msg ? `Message: ${msg}` : '',
    page ? `Page: ${page}` : '',
    referrer ? `Referrer: ${referrer}` : ''
  ].filter(Boolean).join('\n');

  const fields: Record<string, unknown> = {
    TITLE: `Website: ${label}, ${interest || 'General'}, ${company || name}`,
    NAME: name,
    COMPANY_TITLE: company,
    PHONE: [{ VALUE: phone, VALUE_TYPE: 'WORK' }],
    EMAIL: [{ VALUE: email, VALUE_TYPE: 'WORK' }],
    COMMENTS: comments.replace(/</g, '&lt;').replace(/\n/g, '<br>'),
    SOURCE_ID: 'WEB',
    SOURCE_DESCRIPTION: `ausumnlabs.in ${page || ''}`.trim(),
    UTM_SOURCE: str(utm.utm_source, 120),
    UTM_MEDIUM: str(utm.utm_medium, 120),
    UTM_CAMPAIGN: str(utm.utm_campaign, 120),
    UTM_CONTENT: str(utm.utm_content, 120),
    UTM_TERM: str(utm.utm_term, 120)
  };
  const assignee = process.env.BITRIX24_ASSIGNED_BY_ID;
  if (assignee) fields.ASSIGNED_BY_ID = Number(assignee);

  try {
    // Keep only https://<portal>/rest/<user>/<token>/ so a pasted example method (e.g. /profile.json) is ignored.
    const base = hook.trim().match(/^https?:\/\/[^/]+\/rest\/\d+\/[^/?#]+/)?.[0] ?? hook.trim().replace(/\/+$/, '');
    const url = `${base}/crm.lead.add.json`;
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields, params: { REGISTER_SONET_EVENT: 'Y' } }),
      signal: AbortSignal.timeout(10000)
    });
    const data = (await r.json().catch(() => ({}))) as { result?: number; error?: string; error_description?: string };
    if (!r.ok || !data.result) {
      console.error('[lead] Bitrix24 error', r.status, data.error, data.error_description);
      return NextResponse.json({ ok: false, error: 'Could not save your request' }, { status: 502 });
    }
    return NextResponse.json({ ok: true, id: data.result });
  } catch (e) {
    console.error('[lead] Bitrix24 request failed', e);
    return NextResponse.json({ ok: false, error: 'Could not reach our CRM' }, { status: 502 });
  }
}
