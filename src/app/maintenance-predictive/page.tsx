import type { Metadata } from 'next';
import { Nav } from '@/components/sections/Nav';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { maintenancePredictive as m } from '@/lib/content';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Maintenance prédictive du froid',
  description:
    'La maintenance prédictive Altileo : l’Altileo Box mesure en continu pressions, surchauffe, sous-refroidissement et consommation pour détecter la défaillance avant la panne. Condenseur encrassé, fuite de fluide, usure compresseur, dérive du COP — anticipés. Conformité F-Gas simplifiée.',
  keywords: ['maintenance prédictive', 'froid', 'chambre froide', 'F-Gas', 'détection de fuite', 'panne compresseur', 'condenseur encrassé', 'COP'],
  alternates: { canonical: '/maintenance-predictive' },
  openGraph: {
    title: 'Maintenance prédictive du froid · Altileo',
    description: 'Vos données voient la panne venir avant qu’elle n’arrive. Anticipez au lieu de subir.',
    url: '/maintenance-predictive',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Maintenance prédictive', item: '/maintenance-predictive' },
  ],
};

const kpiColor: Record<'success' | 'white' | 'brand', string> = {
  success: 'text-success',
  white: 'text-white',
  brand: 'text-brand',
};

export default function MaintenancePredictivePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Nav />
      <main>
        {/* Hero — carbon + KPIs */}
        <section className="section-carbon py-20 lg:py-24">
          <Container>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-3 py-1 text-xs font-medium text-muted-dark mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" aria-hidden="true" />
                {m.hero.pill}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
                {m.hero.title}
              </h1>
              <p className="mt-6 text-lg text-muted-dark leading-relaxed max-w-3xl">
                {m.hero.body}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {m.hero.kpis.map((k) => (
                <div key={k.label} className="bg-[#181818] rounded-2xl border border-[#333] p-6">
                  <div className="text-xs font-medium text-muted-dark uppercase tracking-wide">
                    {k.label}
                  </div>
                  <div className={cn('num text-3xl lg:text-4xl font-bold mt-2', kpiColor[k.color])}>
                    {k.value}
                  </div>
                  <div className="text-xs text-muted-dark mt-1">{k.caption}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Le problème — blanc */}
        <section className="py-20 lg:py-24 border-b border-line">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                  {m.probleme.label}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                  {m.probleme.title}
                </h2>
                <p className="mt-5 text-lg text-muted leading-relaxed">{m.probleme.body}</p>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-4">
                {m.probleme.points.map((p) => (
                  <div key={p.strong} className="bg-surface rounded-2xl border border-line p-6">
                    <div className="text-ink font-medium">{p.strong}</div>
                    <p className="mt-1 text-muted leading-relaxed text-sm">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Ce qu'on détecte — carbon */}
        <section className="section-carbon py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-medium text-brand tracking-wide uppercase mb-3">
                {m.detection.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {m.detection.title}
              </h2>
              <p className="mt-5 text-lg text-muted-dark leading-relaxed">{m.detection.body}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {m.detection.items.map((item) => (
                <div key={item.title} className="bg-[#181818] rounded-2xl border border-[#333] p-6">
                  <h3 className="text-base font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-dark leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* F-Gas — blanc */}
        <section className="py-20 lg:py-24 bg-surface border-b border-line">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                  {m.fgas.label}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                  {m.fgas.title}
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg text-muted leading-relaxed">{m.fgas.body}</p>
                <p className="mt-4 text-lg text-ink leading-relaxed font-medium">{m.fgas.body2}</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Positionnement — carbon */}
        <section className="section-carbon py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-medium text-brand tracking-wide uppercase mb-3">
                {m.positionnement.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {m.positionnement.title}
              </h2>
              <p className="mt-5 text-lg text-muted-dark leading-relaxed">{m.positionnement.body}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {m.positionnement.options.map((o) => (
                <div key={o.title} className="bg-[#181818] rounded-2xl border border-[#333] p-7">
                  <h3 className="text-lg font-medium text-white">{o.title}</h3>
                  <p className="mt-3 text-muted-dark leading-relaxed">{o.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Comment ça marche — blanc */}
        <section className="py-20 lg:py-24 border-b border-line">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                {m.commentCaMarche.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                {m.commentCaMarche.title}
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">{m.commentCaMarche.body}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {m.commentCaMarche.steps.map((s) => (
                <div key={s.number} className="bg-surface rounded-2xl border border-line p-7">
                  <div className="num text-3xl font-bold text-brand">{s.number}</div>
                  <h3 className="mt-4 text-lg font-medium text-ink">{s.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed text-sm">{s.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA — carbon */}
        <section className="section-carbon py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-5xl font-bold text-brand" aria-hidden="true">*</span>
              <h2 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight text-white">
                {m.cta.title}
              </h2>
              <p className="mt-6 text-lg text-muted-dark leading-relaxed">{m.cta.body}</p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <ButtonLink href="/contact" size="lg">
                  Demander un diagnostic gratuit
                </ButtonLink>
                <ButtonLink href="/comment-ca-marche" variant="secondaryDark" size="lg">
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
