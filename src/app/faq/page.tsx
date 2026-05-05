'use client';

import { useState } from 'react';
import { Nav } from '@/components/sections/Nav';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { faqGroups } from '@/lib/content';
import { cn } from '@/lib/cn';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-brand-deep transition"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-ink text-base lg:text-lg pr-4">
          {question}
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
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <>
      <Nav />
      <main>
        <section className="py-16 lg:py-24">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-5xl font-bold text-highlight" aria-hidden="true">*</span>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-ink mt-4">
                  Questions fréquentes.
                </h1>
                <p className="mt-6 text-lg lg:text-xl text-muted leading-relaxed">
                  Les questions que les gérants, frigoristes et responsables maintenance nous posent à chaque rendez-vous. Si la vôtre n’est pas ici, écrivez-nous — on répond sous 48h.
                </p>
              </div>

              <div className="space-y-12">
                {faqGroups.map((group) => (
                  <div key={group.title}>
                    <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-4">
                      {group.title}
                    </div>
                    <div>
                      {group.items.map((item, idx) => {
                        const id = `${group.title}-${idx}`;
                        return (
                          <FaqItem
                            key={id}
                            question={item.q}
                            answer={item.a}
                            isOpen={openId === id}
                            onToggle={() => toggle(id)}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-20 bg-white border border-line rounded-2xl p-8 lg:p-10 text-center">
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-ink">
                  Une autre question ?
                </h2>
                <p className="mt-3 text-muted leading-relaxed max-w-xl mx-auto">
                  Si votre situation ne rentre pas dans ces cases, écrivez-nous directement. Un de nos ingénieurs vous répond sous 48h.
                </p>
                <div className="mt-6">
                  <ButtonLink href="/contact" size="lg">
                    Nous contacter
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
