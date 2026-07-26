import type { Metadata } from 'next';
import { Nav } from '@/components/sections/Nav';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { notreOffre as o } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Notre offre',
  description:
    'Un modèle simple : le matériel se rembourse en 3 à 5 ans grâce à vos économies, puis un abonnement mensuel toujours plus petit que ce que vous économisez. Diagnostic gratuit, audit chiffré, deux façons de payer. Moins de 25 % d’économies identifiées ? Vous ne payez que l’instrumentation.',
  keywords: ['offre', 'tarifs', 'abonnement', 'froid', 'audit', 'économies', 'financement'],
  alternates: { canonical: '/notre-offre' },
  openGraph: {
    title: 'Notre offre · Altileo',
    description: 'Le matériel se rembourse tout seul. Ensuite, un abonnement toujours plus petit que vos économies.',
    url: '/notre-offre',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Notre offre', item: '/notre-offre' },
  ],
};

export default function NotreOffrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Nav />
      <main>
        {/* Hero — carbon */}
        <section className="section-carbon py-20 lg:py-28">
          <Container>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-3 py-1 text-xs font-medium text-muted-dark mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" aria-hidden="true" />
                {o.hero.pill}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
                {o.hero.title}
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-muted-dark leading-relaxed max-w-3xl">
                {o.hero.body}
              </p>
              <div className="mt-10">
                <ButtonLink href="/contact" size="lg">
                  Demander un diagnostic gratuit
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>

        {/* Le parcours — blanc */}
        <section className="py-20 lg:py-24 border-b border-line">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                {o.parcours.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                {o.parcours.title}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {o.parcours.steps.map((s) => (
                <div key={s.number} className="bg-surface rounded-2xl border border-line p-6">
                  <div className="num text-3xl font-bold text-brand">{s.number}</div>
                  <h3 className="mt-3 text-lg font-medium text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Deux façons de payer — carbon */}
        <section className="section-carbon py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-medium text-brand tracking-wide uppercase mb-3">
                {o.paiement.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {o.paiement.title}
              </h2>
              <p className="mt-5 text-lg text-muted-dark leading-relaxed">{o.paiement.body}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {o.paiement.options.map((opt) => (
                <div key={opt.title} className="bg-[#181818] rounded-2xl border border-[#333] p-7">
                  <div className="inline-flex items-center gap-2 bg-brand/10 text-brand text-xs font-medium uppercase tracking-wide px-3 py-1 rounded-full">
                    {opt.tag}
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-white">{opt.title}</h3>
                  <p className="mt-3 text-muted-dark leading-relaxed">{opt.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* L'abonnement — blanc */}
        <section className="py-20 lg:py-24 bg-surface border-b border-line">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                  {o.abonnement.label}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                  {o.abonnement.title}
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg text-muted leading-relaxed">{o.abonnement.body}</p>
                <p className="mt-4 text-lg text-ink leading-relaxed font-medium">{o.abonnement.body2}</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Garantie — carbon */}
        <section className="section-carbon py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-medium text-brand tracking-wide uppercase mb-3">
                {o.garantie.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {o.garantie.title}
              </h2>
              <p className="mt-5 text-lg text-muted-dark leading-relaxed">{o.garantie.body}</p>
            </div>
          </Container>
        </section>

        {/* CTA — blanc */}
        <section className="py-20 lg:py-24 bg-surface">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-5xl font-bold text-brand" aria-hidden="true">*</span>
              <h2 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight text-ink">
                {o.cta.title}
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">{o.cta.body}</p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <ButtonLink href="/contact" size="lg">
                  Demander un diagnostic gratuit
                </ButtonLink>
                <ButtonLink href="/etude-de-cas" variant="secondary" size="lg">
                  Voir l’étude de cas
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
