import type { Metadata } from 'next';
import { Nav } from '@/components/sections/Nav';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { competences } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Compétences techniques',
  description:
    'L’ingénierie électrique et thermique derrière chaque déploiement Altileo. Études électriques BT, schémas, armoires sur mesure, automatisme, conformité NF C 15-100, intégration BMS/GTB, stockage PCM.',
  keywords: ['ingénierie électrique', 'armoires électriques sur mesure', 'NF C 15-100', 'études électriques BT', 'automatisme industriel', 'BMS GTB'],
  alternates: { canonical: '/competences' },
  openGraph: {
    title: 'Compétences techniques · Altileo',
    description: 'L’ingénierie électrique et thermique derrière chaque déploiement Altileo.',
    url: '/competences',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Compétences', item: '/competences' },
  ],
};

export default function CompetencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Nav />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28">
          <Container>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-3 py-1 text-xs font-medium text-muted mb-6">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-success"
                  aria-hidden="true"
                />
                {competences.hero.pill}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ink">
                {competences.hero.title}
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-muted leading-relaxed max-w-3xl">
                {competences.hero.body}
              </p>
            </div>
          </Container>
        </section>

        {/* Pourquoi c'est important */}
        <section className="py-16 bg-white border-y border-line">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-ink">
                {competences.why.title}
              </h2>
              <p className="mt-5 text-muted leading-relaxed text-lg">
                {competences.why.body}
              </p>
            </div>
          </Container>
        </section>

        {/* Capabilities grid */}
        <section className="py-24">
          <Container>
            <div className="max-w-3xl mb-14">
              <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
                Nos compétences
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                Tout est fait en interne, sous notre responsabilité.
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                Vous parlez aux ingénieurs qui conçoivent, calculent et
                déploient. Pas d’intermédiaires, pas de chaîne de
                responsabilité diluée.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {competences.capabilities.map((cap) => (
                <article
                  key={cap.title}
                  className="bg-white rounded-2xl border border-line p-7 hover:shadow-card transition flex flex-col"
                >
                  <div
                    className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center text-xl mb-5"
                    aria-hidden="true"
                  >
                    {cap.icon}
                  </div>
                  <h3 className="font-bold text-ink text-lg leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted mt-3 leading-relaxed flex-1">
                    {cap.body}
                  </p>
                  <div className="mt-5 pt-5 border-t border-line">
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-brand-deep mb-1.5">
                      Exemple concret
                    </div>
                    <p className="text-xs text-muted leading-relaxed italic">
                      {cap.example}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Process */}
        <section className="py-24 bg-white border-y border-line">
          <Container>
            <div className="max-w-3xl mb-14">
              <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
                Notre processus
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                {competences.process.title}
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                {competences.process.body}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {competences.process.steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-bg rounded-2xl border border-line p-6"
                >
                  <div className="num text-3xl font-bold text-brand-deep">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-ink mt-3">{step.title}</h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Garanties */}
        <section className="py-24">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
                  Garanties techniques
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-ink">
                  {competences.guarantees.title}
                </h2>
                <p className="mt-5 text-lg text-muted leading-relaxed">
                  {competences.guarantees.body}
                </p>
              </div>
              <ul className="space-y-3">
                {competences.guarantees.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-4 bg-white border border-line rounded-xl p-5"
                  >
                    <span
                      className="text-success font-bold text-lg flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <div>
                      <div className="font-semibold text-ink">
                        {item.label}
                      </div>
                      <div className="text-sm text-muted mt-1 leading-relaxed">
                        {item.body}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white border-y border-line">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <span
                className="text-5xl font-bold text-brand"
                aria-hidden="true"
              >
                *
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-ink mt-4">
                {competences.cta.title}
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                {competences.cta.body}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <ButtonLink href="/#audit" size="lg">
                  Parler à un ingénieur
                </ButtonLink>
                <ButtonLink href="/" variant="secondary" size="lg">
                  Découvrir le produit Altileo
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
