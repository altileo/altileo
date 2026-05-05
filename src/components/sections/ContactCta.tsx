import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

export function ContactCta() {
  return (
    <section className="py-24 bg-white border-y border-line" aria-labelledby="contact-title">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-5xl font-bold text-highlight" aria-hidden="true">*</span>
          <h2 id="contact-title" className="text-4xl lg:text-6xl font-bold tracking-tight text-ink mt-4">
            On commence toujours<br />par mesurer.
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-muted leading-relaxed">
            Audit instrumenté de vos installations frigorifiques. Quatre semaines.
            Rapport chiffré complet. Si on n’identifie pas au moins 25% d’économies
            réalisables, vous ne payez que les frais d’instrumentation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink href="/contact" size="lg">
              Demander un audit énergétique
            </ButtonLink>
            <ButtonLink href="/competences" variant="secondary" size="lg">
              Voir nos compétences
            </ButtonLink>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 justify-center text-sm text-muted">
            <div className="flex items-center gap-2"><span className="text-success" aria-hidden="true">✓</span> Réponse sous 48h</div>
            <div className="flex items-center gap-2"><span className="text-success" aria-hidden="true">✓</span> Audit en 4 semaines</div>
            <div className="flex items-center gap-2"><span className="text-success" aria-hidden="true">✓</span> Sans engagement</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
