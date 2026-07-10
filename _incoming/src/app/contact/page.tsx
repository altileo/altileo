'use client';

import { useState } from 'react';
import { Nav } from '@/components/sections/Nav';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { faqHighlights } from '@/lib/content';
import { cn } from '@/lib/cn';

const ACCESS_KEY = 'c97a95c9-1e42-42f2-b2f9-9323baaa5280';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', ACCESS_KEY);
    formData.append('subject', 'Nouvelle demande Altileo');
    formData.append('from_name', 'Altileo Site');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Une erreur est survenue. Réessayez ou écrivez directement à contact@altileo.com');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Connexion impossible. Veuillez réessayer ou nous écrire directement.');
    }
  }

  return (
    <>
      <Nav />
      <main>
        <section className="py-16 lg:py-24">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-5xl font-bold text-brand" aria-hidden="true">*</span>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-ink mt-4">
                  Parlons de vos installations.
                </h1>
                <p className="mt-6 text-lg lg:text-xl text-muted leading-relaxed">
                  Décrivez votre besoin en quelques lignes. Un de nos ingénieurs
                  vous répond sous 48 heures avec une première analyse —
                  gratuite, sans engagement.
                </p>
              </div>

              {status === 'success' ? (
                <div className="bg-bg border border-line rounded-2xl p-10 text-center">
                  <div className="text-5xl mb-4" aria-hidden="true">✓</div>
                  <h2 className="text-2xl font-bold text-ink">Demande reçue.</h2>
                  <p className="mt-3 text-muted leading-relaxed max-w-lg mx-auto">
                    Un de nos ingénieurs vous recontactera sous 48 heures.
                    À très bientôt.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-brand-deep font-semibold hover:underline text-sm"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="bg-bg border border-line rounded-2xl p-6 lg:p-10"
                >
                  {/* Web3Forms honeypot for spam protection */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    aria-hidden="true"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-xs font-medium text-muted block mb-1">
                        Nom complet *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full p-3 border-2 border-line rounded-xl text-sm focus:border-brand-deep outline-none bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="text-xs font-medium text-muted block mb-1">
                        Société *
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        className="w-full p-3 border-2 border-line rounded-xl text-sm focus:border-brand-deep outline-none bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs font-medium text-muted block mb-1">
                        Email professionnel *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full p-3 border-2 border-line rounded-xl text-sm focus:border-brand-deep outline-none bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-xs font-medium text-muted block mb-1">
                        Téléphone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full p-3 border-2 border-line rounded-xl text-sm focus:border-brand-deep outline-none bg-white"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="role" className="text-xs font-medium text-muted block mb-1">
                        Votre fonction
                      </label>
                      <input
                        id="role"
                        name="role"
                        type="text"
                        placeholder="Gérant, Responsable maintenance, DAF…"
                        className="w-full p-3 border-2 border-line rounded-xl text-sm focus:border-brand-deep outline-none bg-white"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="text-xs font-medium text-muted block mb-1">
                        Votre besoin *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Surface des chambres froides, type d’activité, problématiques actuelles…"
                        className="w-full p-3 border-2 border-line rounded-xl text-sm focus:border-brand-deep outline-none bg-white resize-none"
                      />
                    </div>
                  </div>

                  {status === 'error' && errorMsg && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                      {errorMsg}
                    </div>
                  )}

                  <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                    <p className="text-xs text-muted">
                      En envoyant ce formulaire, vous acceptez d’être recontacté par notre équipe sous 48h.
                    </p>
                    <Button type="submit" size="lg" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Envoi en cours…' : 'Envoyer la demande'}
                    </Button>
                  </div>
                </form>
              )}

              <div className="mt-10 grid sm:grid-cols-3 gap-6 text-sm text-center">
                <div className="flex items-center gap-2 justify-center text-muted">
                  <span className="text-success" aria-hidden="true">✓</span>
                  Réponse sous 48h
                </div>
                <div className="flex items-center gap-2 justify-center text-muted">
                  <span className="text-success" aria-hidden="true">✓</span>
                  Sans engagement
                </div>
                <div className="flex items-center gap-2 justify-center text-muted">
                  <span className="text-success" aria-hidden="true">✓</span>
                  Gratuit
                </div>
              </div>

              <p className="mt-10 text-center text-sm text-muted">
                Préférez l’email ?{' '}
                <a href="mailto:contact@altileo.com" className="text-brand-deep font-semibold hover:underline">
                  contact@altileo.com
                </a>
              </p>
            </div>
          </Container>
        </section>
        {}
        <section className="py-16 lg:py-24 bg-white border-t border-line">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="mb-10">
                <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
                  Avant de nous écrire
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                  Questions fréquentes.
                </h2>
              </div>
              <div>
                {faqHighlights.map((item, idx) => {
                  const isOpen = openFaqId === idx;
                  return (
                    <div key={idx} className="border-b border-line">
                      <button
                        type="button"
                        onClick={() => setOpenFaqId(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-brand-deep transition"
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-ink text-base lg:text-lg pr-4">
                          {item.q}
                        </span>
                        <span
                          className={cn(
                            'flex-shrink-0 w-8 h-8 rounded-full bg-bg flex items-center justify-center transition-transform',
                            isOpen && 'rotate-45',
                          )}
                          aria-hidden="true"
                        >
                          <svg className="w-4 h-4 text-brand-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                        </span>
                      </button>
                      {isOpen && (
                        <div className="pb-6 pr-12 text-muted leading-relaxed whitespace-pre-line">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-10 text-center">
                <Link href="/faq" className="text-brand-deep font-semibold hover:underline">
                  Voir toutes les questions fréquentes →
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
