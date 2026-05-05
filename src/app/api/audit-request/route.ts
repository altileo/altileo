import { NextResponse } from 'next/server';

interface AuditRequestBody {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  role?: string;
  message?: string;
}

interface ValidatedData {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  message: string;
}

type ValidationResult =
  | { ok: true; data: ValidatedData }
  | { ok: false; errors: string[] };

function validate(body: AuditRequestBody): ValidationResult {
  const errors: string[] = [];

  if (!body.name || body.name.trim().length < 2) {
    errors.push('Nom requis');
  }
  if (!body.company || body.company.trim().length < 2) {
    errors.push('Société requise');
  }
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push('Email invalide');
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name: body.name!.trim(),
      company: body.company!.trim(),
      email: body.email!.trim(),
      phone: (body.phone ?? '').trim(),
      role: (body.role ?? '').trim(),
      message: (body.message ?? '').trim(),
    },
  };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function sendEmail(data: ValidatedData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ALTILEO_LEAD_EMAIL ?? 'contact@altileo.com';

  if (!apiKey) {
    console.log('[audit-request] RESEND_API_KEY not set; logging only');
    console.log('[audit-request] payload:', data);
    return;
  }

  const html = `
    <h2>Nouvelle demande d'audit Altileo</h2>
    <p><strong>Nom :</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Société :</strong> ${escapeHtml(data.company)}</p>
    <p><strong>Email :</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(data.phone) || '—'}</p>
    <p><strong>Fonction :</strong> ${escapeHtml(data.role) || '—'}</p>
    <p><strong>Message :</strong></p>
    <pre style="background:#f5f5f5;padding:12px;border-radius:8px;white-space:pre-wrap;">${escapeHtml(data.message) || '—'}</pre>
  `;

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
      subject: `Demande d'audit — ${data.company}`,
      html,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error('[audit-request] Resend error:', res.status, text);
    throw new Error('Email send failed');
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
        type: 'audit-request',
        timestamp: new Date().toISOString(),
        ...data,
      }),
    });
  } catch (err) {
    console.error('[audit-request] webhook failed:', err);
  }
}

export async function POST(request: Request) {
  let body: AuditRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const result = validate(body);
  if (!result.ok) {
    return NextResponse.json(
      { error: 'Validation failed', details: result.errors },
      { status: 400 },
    );
  }

  try {
    await sendEmail(result.data);
    await pingWebhook(result.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[audit-request] error:', err);
    return NextResponse.json(
      { error: 'Internal error, please try again or email us directly' },
      { status: 500 },
    );
  }
}
