import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { hero } from '@/lib/content';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="pt-20 pb-12 lg:pt-28 lg:pb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-3 py-1 text-xs font-medium text-muted mb-6">
            <span
              className="w-1.5 h-1.5 rounded-full bg-success"
              aria-hidden="true"
            />
            {hero.pill}
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-ink">
            Réduisez de{' '}
            <span className="num text-highlight bg-navy px-3 py-1 rounded-lg inline-block">
              {hero.savingsRange}
            </span>{' '}
            la facture électrique de vos installations frigorifiques.
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-muted leading-relaxed max-w-3xl">
            On audite. On déploie capteurs et automatisation. On ajoute du
            stockage thermique PCM si le ROI le justifie.{' '}
            <span className="text-ink font-medium">
              Économies vérifiées sur sites réels.
            </span>
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <ButtonLink href="/contact" size="lg">
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#produit" variant="secondary" size="lg">
              {hero.secondaryCta}
            </ButtonLink>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted">
            {hero.trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-success"
                  aria-hidden="true"
                />
                {signal}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container className="pb-20">
        <div className="relative">
          <div
            className="absolute -inset-8 bg-gradient-to-br from-brand/5 via-bg to-highlight/10 rounded-3xl blur-2xl -z-10"
            aria-hidden="true"
          />
          <div className="screen-frame">
            <Image
              src="/screenshots/dashboard.png"
              alt="Tableau de bord Altileo en production montrant la consommation actuelle, le stockage énergétique, la température moyenne et les économies réalisées en temps réel"
              width={2000}
              height={1100}
              priority
              className="w-full block h-auto"
              sizes="(max-width: 1024px) 100vw, 1280px"
            />
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted">
            <span
              className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"
              aria-hidden="true"
            />
            {hero.screenshotCaption}
          </div>
        </div>
      </Container>
    </section>
  );
}
