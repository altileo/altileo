import type { Metadata } from 'next';
import { Nav } from '@/components/sections/Nav';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { entreprise } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Entreprise',
  description:
    'Altileo réunit des ingénieurs spécialistes de l’énergie et du froid et une direction industrielle, basés à Paris. Notre mission, nos principes opérationnels et notre couverture sur la France.',
  keywords: ['Altileo entreprise', 'ingénieurs froid', 'spécialistes cold chain', 'efficacité énergétique France'],
  alternates: { canonical: '/entreprise' },
  openGraph: {
    title: 'Entreprise · Altileo',
    description: 'Une équipe d’ingénieurs spécialistes du froid, basés à Paris.',
    url: '/entreprise',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Entreprise', item: '/entreprise' },
  ],
};

export default function EntreprisePage() {
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
                <span className="w-1.5 h-1.5 rounded-full bg-success" aria-hidden="true" />
                {entreprise.hero.pill}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ink">
                {entreprise.hero.title}
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-muted leading-relaxed max-w-3xl">
                {entreprise.hero.body}
              </p>
            </div>
          </Container>
        </section>

        {/* Mission */}
        <section className="py-20 bg-white border-y border-line">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
                  Notre mission
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                  {entreprise.mission.title}
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg text-muted leading-relaxed">
                  {entreprise.mission.body1}
                </p>
                <p className="mt-5 text-lg text-muted leading-relaxed">
                  {entreprise.mission.body2}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {entreprise.mission.kpis.map((k) => (
                    <div key={k.label} className="bg-bg rounded-2xl border border-line p-5">
                      <div className="num text-3xl font-bold text-navy">{k.value}</div>
                      <div className="text-xs text-muted mt-2 leading-relaxed">{k.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Pourquoi le froid */}
        <section className="py-20">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
                Pourquoi le froid, pourquoi maintenant
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-ink">
                {entreprise.context.title}
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                {entreprise.context.body}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {entreprise.context.drivers.map((d) => (
                <article key={d.title} className="bg-white border border-line rounded-2xl p-7">
                  <div className="text-xs font-semibold text-brand-deep uppercase tracking-wide mb-3">{d.eyebrow}</div>
                  <h3 className="font-bold text-ink text-lg leading-snug">{d.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{d.body}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Comment on travaille */}
        <section className="py-20 bg-white border-y border-line">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
                Comment on travaille
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-ink">
                {entreprise.principles.title}
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                {entreprise.principles.body}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {entreprise.principles.items.map((p, i) => (
                <article key={p.title} className="bg-bg border border-line rounded-2xl p-7">
                  <div className="num text-3xl font-bold text-brand-deep">0{i + 1}</div>
                  <h3 className="font-bold text-ink text-lg mt-3">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{p.body}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* L'équipe (anonymous) */}
        <section className="py-20">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
                L’équipe
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-ink">
                {entreprise.team.title}
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                {entreprise.team.body1}
              </p>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                {entreprise.team.body2}
              </p>
              <p className="mt-4 text-lg text-ink font-medium leading-relaxed">
                {entreprise.team.body3}
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {entreprise.team.roles.map((r) => (
                <article key={r.title} className="bg-white rounded-2xl border border-line p-6">
                  <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center text-xl mb-4" aria-hidden="true">
                    {r.icon}
                  </div>
                  <h3 className="font-bold text-ink">{r.title}</h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{r.body}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Où nous trouver */}
        <section className="py-20 bg-white border-y border-line">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm font-semibold text-brand-deep tracking-wide uppercase mb-3">
                  Où nous trouver
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-ink">
                  {entreprise.location.title}
                </h2>
                <p className="mt-5 text-lg text-muted leading-relaxed">
                  {entreprise.location.body}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-muted">
                  {entreprise.location.zones.map((z) => (
                    <li key={z} className="flex items-center gap-2">
                      <span className="text-success" aria-hidden="true">✓</span>
                      {z}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg border border-line rounded-2xl p-8">
                <div className="text-xs font-semibold text-brand-deep uppercase tracking-wide mb-3">
                  Nous contacter
                </div>
                <div className="text-lg font-semibold text-ink">Altileo</div>
                <div className="mt-1 text-muted">Paris, France</div>
                <div className="mt-6 space-y-2 text-sm">
                  <a href="mailto:contact@altileo.com" className="flex items-center gap-2 text-brand-deep hover:underline">
                    contact@altileo.com
                  </a>
                </div>
                <div className="mt-8">
                  <ButtonLink href="/contact" size="md">
                    Discuter de votre projet
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-5xl font-bold text-brand" aria-hidden="true">*</span>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-ink mt-4">
                {entreprise.cta.title}
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                {entreprise.cta.body}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <ButtonLink href="/contact" size="lg">
                  Demander un audit
                </ButtonLink>
                <ButtonLink href="/competences" variant="secondary" size="lg">
                  Voir nos compétences
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
