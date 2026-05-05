'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button, ButtonLink } from '@/components/ui/Button';
import { bacs } from '@/lib/content';
import { cn } from '@/lib/cn';

interface Question {
  id: string;
  text: string;
  options: { value: string; label: string; subtle?: boolean }[];
}

const questions: Question[] = [
  {
    id: 'power',
    text: 'Quelle est la puissance totale de vos installations frigorifiques\u00a0?',
    options: [
      { value: 'lt70', label: 'Moins de 70 kW' },
      { value: '70-290', label: 'Entre 70 et 290 kW' },
      { value: 'gt290', label: 'Plus de 290 kW' },
      { value: 'unknown', label: 'Je ne sais pas', subtle: true },
    ],
  },
  {
    id: 'building',
    text: 'Vos installations sont-elles dans un b\u00e2timent tertiaire\u00a0?',
    options: [
      { value: 'yes', label: 'Oui \u2014 entrep\u00f4t, bureaux, locaux commerciaux' },
      { value: 'industrial', label: 'Non \u2014 b\u00e2timent industriel uniquement' },
      { value: 'mixed', label: 'Mixte (tertiaire + industriel)' },
      { value: 'unknown', label: 'Je ne sais pas', subtle: true },
    ],
  },
  {
    id: 'existing',
    text: 'Avez-vous d\u00e9j\u00e0 un syst\u00e8me de monitoring ou de GTB\u00a0?',
    options: [
      { value: 'none', label: 'Aucun syst\u00e8me en place' },
      { value: 'partial', label: 'Syst\u00e8me partiel ou ancien' },
      { value: 'full', label: 'GTB compl\u00e8te et r\u00e9cente' },
    ],
  },
];

type VerdictStatus = 'subject' | 'borderline' | 'not-subject' | 'unclear';

interface Verdict {
  status: VerdictStatus;
  title: string;
  message: string;
  cta: string;
}

function computeVerdict(answers: Record<string, string>): Verdict {
  const power = answers.power;
  const building = answers.building;

  if (power === 'unknown' || building === 'unknown') {
    return {
      status: 'unclear',
      title: 'Diagnostic \u00e0 approfondir',
      message:
        'Sans informations pr\u00e9cises sur la puissance et le type de b\u00e2timent, on ne peut pas conclure. Notre audit instrument\u00e9 commence justement par ces mesures \u2014 gratuit en cas de non-conformit\u00e9 av\u00e9r\u00e9e.',
      cta: 'Demander un audit',
    };
  }

  if (power === 'lt70') {
    return {
      status: 'not-subject',
      title: 'Probablement non concern\u00e9',
      message:
        'Avec une puissance inf\u00e9rieure \u00e0 70 kW, vos installations ne sont pas assujetties au D\u00e9cret BACS. Vous pouvez n\u00e9anmoins r\u00e9aliser des \u00e9conomies importantes \u2014 un audit reste pertinent.',
      cta: 'Discuter de votre situation',
    };
  }

  if (building === 'industrial') {
    return {
      status: 'borderline',
      title: 'Cas particulier',
      message:
        'Les b\u00e2timents purement industriels ne sont pas concern\u00e9s par le D\u00e9cret BACS, mais d\u2019autres r\u00e9glementations peuvent s\u2019appliquer (D\u00e9cret Tertiaire, F-Gas). Nos ing\u00e9nieurs peuvent clarifier votre situation.',
      cta: 'Clarifier avec un ing\u00e9nieur',
    };
  }

  return {
    status: 'subject',
    title: 'Vous \u00eates assujetti au D\u00e9cret BACS',
    message:
      'Avec une puissance sup\u00e9rieure \u00e0 70 kW dans un b\u00e2timent tertiaire, vos installations doivent \u00eatre \u00e9quip\u00e9es d\u2019un syst\u00e8me d\u2019automatisation et de contr\u00f4le. \u00c9ch\u00e9ance pour le retrofit\u00a0: 2027. Notre m\u00e9thode couvre l\u2019ensemble des exigences en cl\u00e9 en main.',
    cta: 'Demander un audit BACS',
  };
}

export function BacsDiagnostic() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const isComplete = step >= questions.length;
  const verdict = isComplete ? computeVerdict(answers) : null;

  function handleAnswer(value: string) {
    const q = questions[step];
    setAnswers((prev) => ({ ...prev, [q.id]: value }));
    setStep((s) => s + 1);
  }

  function reset() {
    setStep(0);
    setAnswers({});
  }

  return (
    <section id="bacs" className="py-24">
      <Container>
        <div className="bg-gradient-to-br from-ink to-gray-900 rounded-3xl p-10 lg:p-14 text-white relative overflow-hidden">
          <div className="absolute top-6 right-6 text-4xl font-bold text-highlight" aria-hidden="true">*</div>
          <div className="grid lg:grid-cols-2 gap-10 items-center relative">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-medium mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-highlight" aria-hidden="true" />
                {bacs.pill}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{bacs.title}</h2>
              <p className="mt-5 text-white/70 leading-relaxed">{bacs.body}</p>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {bacs.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="text-highlight" aria-hidden="true">\u2713</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 text-ink">
              {!isComplete && (
                <>
                  <div className="text-xs font-semibold text-brand-deep uppercase tracking-wide mb-3">
                    Question {step + 1} / {questions.length}
                  </div>
                  <div className="font-semibold text-lg mb-5">{questions[step].text}</div>
                  <div className="space-y-2">
                    {questions[step].options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(opt.value)}
                        className={cn(
                          'w-full text-left p-4 border-2 border-line hover:border-brand-deep rounded-xl transition font-medium',
                          opt.subtle && 'text-muted',
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {isComplete && verdict && (
                <div>
                  <div
                    className={cn(
                      'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4',
                      verdict.status === 'subject' && 'bg-brand-deep/10 text-brand-deep',
                      verdict.status === 'not-subject' && 'bg-success/15 text-success',
                      verdict.status === 'borderline' && 'bg-highlight/40 text-ink',
                      verdict.status === 'unclear' && 'bg-bg text-muted',
                    )}
                  >
                    R\u00e9sultat du diagnostic
                  </div>
                  <h3 className="text-xl font-bold text-ink">{verdict.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{verdict.message}</p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-2">
                    <ButtonLink href="/contact" size="md" className="flex-1 justify-center">
                      {verdict.cta}
                    </ButtonLink>
                    <Button type="button" variant="secondary" onClick={reset}>
                      Recommencer
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
