import { NextResponse } from 'next/server';

interface BacsBody {
  email?: string;
  answers?: Record<string, string>;
  verdict?: string;
}

interface ValidatedData {
  email: string;
  answers: Record<string, string>;
  verdict: string;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function sendNotification(data: ValidatedData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ALTILEO_LEAD_EMAIL ?? 'contact@altileo.com';

  const summary = `
    <h2>Nouveau lead diagnostic BACS</h2>
    <p><strong>Email :</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Verdict :</strong> ${escapeHtml(data.verdict)}</p>
    <h3>Réponses</h3>
    <ul>
      ${Object.entries(data.answers)
        .map(
          ([k, v]) =>
            `<li><strong>${escapeHtml(k)} :</strong> ${escapeHtml(v)}</li>`,
        )
        .join('')}
    </ul>
  `;

  if (!apiKey) {
    console.log('[bacs-diagnostic] RESEND_API_KEY not set; logging only');
    console.log('[bacs-diagnostic] payload:', data);
    return;
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Altileo <noreply@altileo.com>',
      to: [to],
      reply_to: data.email,
      subject: `BACS diagnostic — ${data.verdict}`,
      html: summary,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('[bacs-diagnostic] Resend error:', res.status, text);
  }
}

async function pingWebhook(data: ValidatedData): Promise<void> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return;

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'bacs-diagnostic',
        timestamp: new Date().toISOString(),
        ...data,
      }),
    });
  } catch (err) {
    console.error('[bacs-diagnostic] webhook failed:', err);
  }
}

export async function POST(request: Request) {
  let body: BacsBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (
    !body.email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email) ||
    !body.answers ||
    !body.verdict
  ) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const data: ValidatedData = {
    email: body.email.trim(),
    answers: body.answers,
    verdict: body.verdict,
  };

  try {
    await sendNotification(data);
    await pingWebhook(data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[bacs-diagnostic] error:', err);
    return NextResponse.json({ ok: true });
  }
}
