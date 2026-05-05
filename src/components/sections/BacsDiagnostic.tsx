'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
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
    text: 'Vos installations sont-elles dans un bâtiment tertiaire\u00a0?',
    options: [
      { value: 'yes', label: 'Oui — entrepôt, bureaux, locaux commerciaux' },
      { value: 'industrial', label: 'Non — bâtiment industriel uniquement' },
      { value: 'mixed', label: 'Mixte (tertiaire + industriel)' },
      { value: 'unknown', label: 'Je ne sais pas', subtle: true },
    ],
  },
  {
    id: 'existing',
    text: 'Avez-vous déjà un système de monitoring ou de GTB\u00a0?',
    options: [
      { value: 'none', label: 'Aucun système en place' },
      { value: 'partial', label: 'Système partiel ou ancien' },
      { value: 'full', label: 'GTB complète et récente' },
    ],
  },
];

type VerdictStatus = 'subject' | 'borderline' | 'not-subject' | 'unclear';

interface Verdict {
  status: VerdictStatus;
  title: string;
  message: string;
}

function computeVerdict(answers: Record<string, string>): Verdict {
  const power = answers.power;
  const building = answers.building;

  if (power === 'unknown' || building === 'unknown') {
    return {
      status: 'unclear',
      title: 'Diagnostic à approfondir',
      message:
        'Sans informations précises sur la puissance et le type de bâtiment, on ne peut pas conclure. Notre audit instrumenté commence justement par ces mesures — gratuit en cas de non-conformité avérée.',
    };
  }

  if (power === 'lt70') {
    return {
      status: 'not-subject',
      title: 'Probablement non concerné',
      message:
        'Avec une puissance inférieure à 70 kW, vos installations ne sont pas assujetties au Décret BACS. Vous pouvez néanmoins réaliser des économies importantes — un audit reste pertinent.',
    };
  }

  if (building === 'industrial') {
    return {
      status: 'borderline',
      title: 'Cas particulier',
      message:
        'Les bâtiments purement industriels ne sont pas concernés par le Décret BACS, mais d’autres réglementations peuvent s’appliquer (Décret Tertiaire, F-Gas). Nos ingénieurs peuvent clarifier votre situation.',
    };
  }

  return {
    status: 'subject',
    title: 'Vous êtes assujetti au Décret BACS',
    message:
      'Avec une puissance supérieure à 70 kW dans un bâtiment tertiaire, vos installations doivent être équipées d’un système d’automatisation et de contrôle. Échéance pour le retrofit : 2027. Notre méthode couvre l’ensemble des exigences en clé en main.',
  };
}

export function BacsDiagnostic() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isComplete = step >= questions.length;
  const verdict = isComplete ? computeVerdict(answers) : null;

  function handleAnswer(value: string) {
    const q = questions[step];
    setAnswers((prev) => ({ ...prev, [q.id]: value }));
    setStep((s) => s + 1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !verdict) return;

    setSubmitting(true);
    try {
      await fetch('/api/bacs-diagnostic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, answers, verdict: verdict.status }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setEmail('');
    setSubmitted(false);
  }

  return (
    <section id="bacs" className="py-24">
      <Container>
        <div className="bg-gradient-to-br from-ink to-gray-900 rounded-3xl p-10 lg:p-14 text-white relative overflow-hidden">
          <div
            className="absolute top-6 right-6 text-4xl font-bold text-highlight"
            aria-hidden="true"
          >
            *
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center relative">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-medium mb-5">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-highlight"
                  aria-hidden="true"
                />
                {bacs.pill}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                {bacs.title}
              </h2>
              <p className="mt-5 text-white/70 leading-relaxed">{bacs.body}</p>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {bacs.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="text-highlight" aria-hidden="true">
                      ✓
                    </span>
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
                  <div className="font-semibold text-lg mb-5">
                    {questions[step].text}
                  </div>
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

              {isComplete && verdict && !submitted && (
                <div>
                  <div
                    className={cn(
                      'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4',
                      verdict.status === 'subject' &&
                        'bg-brand-deep/10 text-brand-deep',
                      verdict.status === 'not-subject' &&
                        'bg-success/15 text-success',
                      verdict.status === 'borderline' &&
                        'bg-highlight/40 text-ink',
                      verdict.status === 'unclear' && 'bg-bg text-muted',
                    )}
                  >
                    Résultat du diagnostic
                  </div>
                  <h3 className="text-xl font-bold text-ink">
                    {verdict.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {verdict.message}
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                    <label
                      htmlFor="bacs-email"
                      className="text-xs font-medium text-muted block"
                    >
                      Recevez le rapport détaillé par email (optionnel)
                    </label>
                    <input
                      id="bacs-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vous@entreprise.com"
                      className="w-full p-3 border-2 border-line rounded-xl text-sm focus:border-brand-deep outline-none"
                    />
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        disabled={!email || submitting}
                        className="flex-1"
                      >
                        {submitting ? 'Envoi…' : 'Recevoir le rapport'}
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={reset}
                      >
                        Recommencer
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {submitted && (
                <div className="text-center py-4">
                  <div className="text-3xl mb-3" aria-hidden="true">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-ink">
                    Merci, c’est noté.
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Vous recevrez le rapport détaillé sous 24h. Pour toute
                    question urgente, écrivez-nous directement.
                  </p>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={reset}
                    className="mt-6"
                  >
                    Refaire un diagnostic
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
