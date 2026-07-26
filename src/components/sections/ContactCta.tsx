import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

export function ContactCta() {
  return (
    <section className="section-carbon py-24" aria-labelledby="contact-title">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-5xl font-bold text-brand" aria-hidden="true">*</span>
          <h2 id="contact-title" className="text-4xl lg:text-6xl font-bold tracking-tight text-white mt-4">
            On commence toujours<br />par mesurer.
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-muted-dark leading-relaxed">
            Audit instrumenté de vos installations frigorifiques. Quatre semaines.
            Rapport chiffré complet. On avance par étapes sûres : on ne déploie
            que lorsque le gain est clair, mesuré et prouvé sur votre site.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink href="/contact" size="lg">
              Demander un audit énergétique
            </ButtonLink>
            <ButtonLink
              href="/competences"
              variant="secondaryDark"
              size="lg"
            >
              Voir nos compétences
            </ButtonLink>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 justify-center text-sm text-muted-dark">
            <div className="flex items-center gap-2"><span className="text-success" aria-hidden="true">✓</span> Réponse sous 48h</div>
            <div className="flex items-center gap-2"><span className="text-success" aria-hidden="true">✓</span> Audit en 4 semaines</div>
            <div className="flex items-center gap-2"><span className="text-success" aria-hidden="true">✓</span> Sans engagement</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
