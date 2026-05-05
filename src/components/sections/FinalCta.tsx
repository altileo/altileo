'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { finalCta } from '@/lib/content';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  message: string;
}

const initial: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  role: '',
  message: '',
};

export function FinalCta() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch('/api/audit-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error('Le formulaire n’a pas pu être envoyé.');
      }

      setSubmitted(true);
      setForm(initial);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Une erreur est survenue. Réessayez ou écrivez-nous directement.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  const titleLines = finalCta.title.split('\n');

  return (
    <section
      id="audit"
      className="py-24 bg-white border-y border-line"
      aria-labelledby="audit-title"
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <span
              className="text-5xl font-bold text-highlight"
              aria-hidden="true"
            >
              *
            </span>
            <h2
              id="audit-title"
              className="text-4xl lg:text-6xl font-bold tracking-tight text-ink mt-4"
            >
              {titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              {finalCta.body}
            </p>
          </div>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="mt-12 bg-bg border border-line rounded-2xl p-6 lg:p-10"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-muted block mb-1"
                  >
                    Nom complet *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className="w-full p-3 border-2 border-line rounded-xl text-sm focus:border-brand-deep outline-none bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="text-xs font-medium text-muted block mb-1"
                  >
                    Société *
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => update('company', e.target.value)}
                    className="w-full p-3 border-2 border-line rounded-xl text-sm focus:border-brand-deep outline-none bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-muted block mb-1"
                  >
                    Email professionnel *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full p-3 border-2 border-line rounded-xl text-sm focus:border-brand-deep outline-none bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="text-xs font-medium text-muted block mb-1"
                  >
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full p-3 border-2 border-line rounded-xl text-sm focus:border-brand-deep outline-none bg-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="role"
                    className="text-xs font-medium text-muted block mb-1"
                  >
                    Votre fonction
                  </label>
                  <input
                    id="role"
                    type="text"
                    placeholder="Gérant, Responsable maintenance, DAF…"
                    value={form.role}
                    onChange={(e) => update('role', e.target.value)}
                    className="w-full p-3 border-2 border-line rounded-xl text-sm focus:border-brand-deep outline-none bg-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-muted block mb-1"
                  >
                    Décrivez brièvement vos installations
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Surface des chambres froides, type d’activité, problématiques actuelles…"
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full p-3 border-2 border-line rounded-xl text-sm focus:border-brand-deep outline-none bg-white resize-none"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                  {error}
                </div>
              )}

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <p className="text-xs text-muted">
                  En envoyant ce formulaire, vous acceptez d’être recontacté par
                  notre équipe sous 48h.
                </p>
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? 'Envoi en cours…' : finalCta.primaryCta}
                </Button>
              </div>
            </form>
          ) : (
            <div className="mt-12 bg-bg border border-line rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4" aria-hidden="true">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-ink">Demande reçue.</h3>
              <p className="mt-3 text-muted leading-relaxed max-w-lg mx-auto">
                Un de nos ingénieurs vous recontactera sous 48 heures pour
                planifier l’audit. À très bientôt.
              </p>
            </div>
          )}

          {!submitted && (
            <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm">
              {finalCta.signals.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-2 justify-center text-muted"
                >
                  <span className="text-success" aria-hidden="true">
                    ✓
                  </span>
                  {s}
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
