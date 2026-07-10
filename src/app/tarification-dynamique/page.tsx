import type { Metadata } from 'next';
import { Nav } from '@/components/sections/Nav';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { tarifDynamique as t } from '@/lib/content';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Tarification dynamique de l’électricité',
  description:
    'La tarification dynamique devient accessible aux professionnels en France. Un prix indexé heure par heure sur le marché de gros récompense la flexibilité — et vos chambres froides sont naturellement flexibles. Deux scénarios d’économies avec le pilotage Altileo.',
  keywords: ['tarification dynamique', 'prix spot électricité', 'marché day-ahead', 'flexibilité électrique', 'délestage froid', 'offre indexée'],
  alternates: { canonical: '/tarification-dynamique' },
  openGraph: {
    title: 'Tarification dynamique · Altileo',
    description: 'Transformer la flexibilité de vos chambres froides en économies sur le marché de l’électricité.',
    url: '/tarification-dynamique',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Tarification dynamique', item: '/tarification-dynamique' },
  ],
};

export default function TarificationDynamiquePage() {
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
                {t.hero.pill}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
                {t.hero.title}
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-muted-dark leading-relaxed max-w-3xl">
                {t.hero.body}
              </p>
            </div>
          </Container>
        </section>

        {/* Contexte — blanc */}
        <section className="py-20 lg:py-24 border-b border-line">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                {t.contexte.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                {t.contexte.title}
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">{t.contexte.body}</p>
            </div>
          </Container>
        </section>

        {/* Mécanisme — carbon, avec stats */}
        <section className="section-carbon py-20 lg:py-24">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <div className="text-sm font-medium text-brand tracking-wide uppercase mb-3">
                  {t.mecanisme.label}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  {t.mecanisme.title}
                </h2>
                <p className="mt-5 text-lg text-muted-dark leading-relaxed">
                  {t.mecanisme.body}
                </p>
              </div>
              <div className="lg:col-span-6 grid gap-4">
                <div className="bg-[#181818] rounded-2xl border border-[#333] p-7">
                  <div className="num text-4xl lg:text-5xl font-bold text-brand">
                    {t.mecanisme.stat1Value}
                  </div>
                  <p className="mt-2 text-sm text-muted-dark leading-relaxed">
                    {t.mecanisme.stat1Caption}
                  </p>
                </div>
                <div className="bg-[#181818] rounded-2xl border border-[#333] p-7">
                  <div className="num text-4xl lg:text-5xl font-bold text-white">
                    {t.mecanisme.stat2Value}
                  </div>
                  <p className="mt-2 text-sm text-muted-dark leading-relaxed">
                    {t.mecanisme.stat2Caption}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Scénarios — blanc */}
        <section className="py-20 lg:py-24 bg-surface border-b border-line">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                {t.scenarios.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                {t.scenarios.title}
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">{t.scenarios.body}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {t.scenarios.items.map((s) => (
                <div
                  key={s.tag}
                  className={cn(
                    'bg-white rounded-2xl p-7 lg:p-8',
                    s.featured ? 'border-2 border-brand' : 'border border-line',
                  )}
                >
                  <div className="inline-flex items-center gap-2 bg-frost text-brand-deep text-xs font-medium uppercase tracking-wide px-3 py-1 rounded-full">
                    {s.tag}
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-ink">{s.title}</h3>
                  <div className="num text-5xl font-bold text-brand mt-4">{s.value}</div>
                  <p className="mt-3 text-muted leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Flexibilité — blanc */}
        <section className="py-20 lg:py-24 border-b border-line">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                {t.flexibilite.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                {t.flexibilite.title}
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">{t.flexibilite.body}</p>
              <div className="mt-6 bg-surface border-l-2 border-warning rounded-none p-5">
                <p className="text-sm text-muted leading-relaxed">
                  <strong className="text-ink">À noter — </strong>
                  {t.flexibilite.caveat}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA — carbon */}
        <section className="section-carbon py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-5xl font-bold text-brand" aria-hidden="true">*</span>
              <h2 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight text-white">
                {t.cta.title}
              </h2>
              <p className="mt-6 text-lg text-muted-dark leading-relaxed">{t.cta.body}</p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <ButtonLink href="/contact" size="lg">
                  Demander un diagnostic gratuit
                </ButtonLink>
                <ButtonLink
                  href="/comment-ca-marche"
                  variant="secondary"
                  size="lg"
                  className="bg-transparent hover:bg-white/10 text-white border-white/30"
                >
                  Comment ça marche
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
