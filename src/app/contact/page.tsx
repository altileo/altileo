'use client';

import { useState } from 'react';
import { Nav } from '@/components/sections/Nav';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import { faqHighlights } from '@/lib/content';
import { cn } from '@/lib/cn';

const EMAIL = 'contact@altileo.com';
const PHONE_DISPLAY = '+33 7 56 75 63 02';
const PHONE_E164 = '+33756756302';
const WHATSAPP = '33756756302';

export default function ContactPage() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

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
                  Écrivez-nous ou appelez-nous directement. Un de nos ingénieurs
                  vous répond sous 48 heures.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <a
                  href={`mailto:${EMAIL}`}
                  className="bg-white border border-line rounded-2xl p-6 hover:border-brand transition block"
                >
                  <div className="text-xs font-medium text-muted uppercase tracking-wide">Email</div>
                  <div className="mt-2 text-lg font-medium text-ink break-words">{EMAIL}</div>
                  <div className="mt-3 text-sm text-brand-deep font-medium">Nous écrire &rarr;</div>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-line rounded-2xl p-6 hover:border-brand transition block"
                >
                  <div className="text-xs font-medium text-muted uppercase tracking-wide">WhatsApp</div>
                  <div className="mt-2 text-lg font-medium text-ink">{PHONE_DISPLAY}</div>
                  <div className="mt-3 text-sm text-brand-deep font-medium">Démarrer la discussion &rarr;</div>
                </a>

                <a
                  href={`tel:${PHONE_E164}`}
                  className="bg-white border border-line rounded-2xl p-6 hover:border-brand transition block"
                >
                  <div className="text-xs font-medium text-muted uppercase tracking-wide">Téléphone</div>
                  <div className="mt-2 text-lg font-medium text-ink">{PHONE_DISPLAY}</div>
                  <div className="mt-3 text-sm text-brand-deep font-medium">Nous appeler &rarr;</div>
                </a>
              </div>

              <div className="mt-8 bg-surface border border-line rounded-2xl p-6">
                <h2 className="text-base font-medium text-ink">Ce qui nous aide à vous répondre vite</h2>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  <li>· Votre activité et la localisation du site</li>
                  <li>· Le nombre et le type de chambres froides (positif / négatif)</li>
                  <li>· Votre consommation annuelle ou une facture récente</li>
                  <li>· Vos horaires d’activité</li>
                </ul>
              </div>


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
                  Étude de potentiel sans frais
                </div>
              </div>

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
