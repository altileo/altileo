import type { Metadata } from 'next';
import { Nav } from '@/components/sections/Nav';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { CaseStudyChart } from '@/components/sections/CaseStudyChart';
import { etudeDeCas as e } from '@/lib/content';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Étude de cas · Pilote frigorifique au MIN de Rungis',
  description:
    'Résultats mesurés sur 12 mois d’un pilote Altileo sur une chambre froide négative au MIN de Rungis : 2 442 € d’économie annuelle (−35 %), ROI ~7,4 mois, 9 085 kWh économisés, conformité HACCP 100 %. Simulation sur prix Spot réels 2025.',
  keywords: ['étude de cas', 'pilote frigorifique', 'délestage', 'économies froid', 'Rungis', 'prix Spot', 'HACCP', 'MCP'],
  alternates: { canonical: '/etude-de-cas' },
  openGraph: {
    title: 'Étude de cas pilote · Altileo',
    description: '12 mois de données mesurées sur une chambre froide négative. 35 % d’économies, ROI 7,4 mois, HACCP 100 %.',
    url: '/etude-de-cas',
    type: 'article',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Étude de cas', item: '/etude-de-cas' },
  ],
};

const kpiColor: Record<'success' | 'white' | 'brand', string> = {
  success: 'text-success',
  white: 'text-white',
  brand: 'text-brand',
};

export default function EtudeDeCasPage() {
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
                {e.hero.pill}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
                {e.hero.title}
              </h1>
              <p className="mt-6 text-lg text-muted-dark leading-relaxed max-w-3xl">
                {e.hero.body}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {e.hero.kpis.map((k) => (
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

        {/* Le site — blanc */}
        <section className="py-20 lg:py-24 border-b border-line">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                  {e.site.label}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                  {e.site.title}
                </h2>
                <p className="mt-5 text-lg text-muted leading-relaxed">{e.site.body}</p>
                <div className="mt-6 bg-surface border-l-2 border-brand rounded-none p-5">
                  <p className="text-sm text-muted leading-relaxed">
                    <strong className="text-ink">Contrainte d’exploitation — </strong>
                    {e.site.contrainte}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl border border-line overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {e.site.specs.map((s, i) => (
                        <tr key={s.param} className={i % 2 ? 'bg-surface/50' : ''}>
                          <td className="px-5 py-3 text-muted font-medium border-b border-line align-top w-1/2">
                            {s.param}
                          </td>
                          <td className="px-5 py-3 text-ink border-b border-line align-top">
                            {s.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Les tests — carbon */}
        <section className="section-carbon py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-medium text-brand tracking-wide uppercase mb-3">
                {e.tests.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {e.tests.title}
              </h2>
              <p className="mt-5 text-lg text-muted-dark leading-relaxed">{e.tests.body}</p>
            </div>
            <div className="bg-[#181818] rounded-2xl border border-[#333] overflow-x-auto">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-muted-dark">
                    <th className="px-5 py-4 text-left font-medium">Test</th>
                    <th className="px-5 py-4 text-left font-medium">Date</th>
                    <th className="px-5 py-4 text-left font-medium">Durée</th>
                    <th className="px-5 py-4 text-left font-medium">Pente cœur (T2)</th>
                    <th className="px-5 py-4 text-left font-medium">Pente air (T1)</th>
                    <th className="px-5 py-4 text-left font-medium">Autonomie (−16 °C)</th>
                  </tr>
                </thead>
                <tbody>
                  {e.tests.rows.map((r, i) => (
                    <tr key={r.test} className={i === 1 ? 'bg-brand/5' : ''}>
                      <td className="px-5 py-4 text-white font-medium border-t border-[#333]">{r.test}</td>
                      <td className="px-5 py-4 text-muted-dark border-t border-[#333] num">{r.date}</td>
                      <td className="px-5 py-4 text-muted-dark border-t border-[#333] num">{r.duree}</td>
                      <td className="px-5 py-4 border-t border-[#333] num text-white">{r.coeur}</td>
                      <td className="px-5 py-4 text-muted-dark border-t border-[#333] num">{r.air}</td>
                      <td className="px-5 py-4 border-t border-[#333] num text-brand font-medium">{r.autonomie}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-[#181818] border border-[#333] rounded-2xl p-6 lg:p-8">
              <span className="text-2xl font-bold text-brand" aria-hidden="true">*</span>
              <p className="mt-2 text-muted-dark leading-relaxed">{e.tests.focus}</p>
            </div>
          </Container>
        </section>

        {/* Scénarios + résumé — blanc */}
        <section className="py-20 lg:py-24 bg-surface border-b border-line">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                {e.simulation.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                {e.simulation.title}
              </h2>
            </div>
            <div className="grid lg:grid-cols-12 gap-8">
              {/* paramètres */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl border border-line overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {e.simulation.params.map((p) => (
                        <tr key={p.param}>
                          <td className="px-5 py-3 text-muted font-medium border-b border-line align-top w-1/2">
                            {p.param}
                          </td>
                          <td className="px-5 py-3 text-ink border-b border-line align-top num">
                            {p.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* résumé annuel — 4 scénarios */}
              <div className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-4">
                  {e.simulation.scenarios.map((s) => (
                    <div
                      key={s.name}
                      className={cn(
                        'rounded-2xl p-6 bg-white',
                        s.featured ? 'border-2 border-brand' : 'border border-line',
                      )}
                    >
                      <div className="text-sm font-medium text-ink">{s.name}</div>
                      <div className="num text-3xl font-bold text-ink mt-3">{s.facture}</div>
                      <div className="flex items-center gap-3 mt-2 text-sm">
                        <span className={cn('num font-medium', s.featured ? 'text-success' : 'text-muted')}>
                          {s.eco}
                        </span>
                        <span className="num text-muted">{s.vs}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Graphique interactif — carbon */}
        <section className="section-carbon py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-medium text-brand tracking-wide uppercase mb-3">
                Comparaison mensuelle
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Les 4 scénarios, mois par mois
              </h2>
              <p className="mt-5 text-lg text-muted-dark leading-relaxed">
                Le délestage Altileo (bleu) est le scénario le plus économique chaque mois de l’année, quel que soit le contrat.
              </p>
            </div>
            <CaseStudyChart />
          </Container>
        </section>

        {/* Analyse — blanc */}
        <section className="py-20 lg:py-24 border-b border-line">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                {e.analyse.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                {e.analyse.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {e.analyse.items.map((item, i) => (
                <div key={item.title} className="bg-white rounded-2xl border border-line p-7">
                  <div className="num text-3xl font-bold text-brand">0{i + 1}</div>
                  <h3 className="mt-4 text-lg font-medium text-ink">{item.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Sécurité & validation — carbon */}
        <section className="section-carbon py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-medium text-brand tracking-wide uppercase mb-3">
                {e.securite.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {e.securite.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {e.securite.items.map((item) => (
                <div key={item.title} className="bg-[#181818] rounded-2xl border border-[#333] p-7">
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-3 text-muted-dark leading-relaxed text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA — blanc (rupture de rythme pour finir clair et actionnable) */}
        <section className="py-20 lg:py-24 bg-surface">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-5xl font-bold text-brand" aria-hidden="true">*</span>
              <h2 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight text-ink">
                {e.cta.title}
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">{e.cta.body}</p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <ButtonLink href="/contact" size="lg">
                  Demander un diagnostic gratuit
                </ButtonLink>
                <ButtonLink href="/comment-ca-marche" variant="secondary" size="lg">
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
