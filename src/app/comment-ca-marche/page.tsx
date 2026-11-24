import type { Metadata } from 'next';
import Image from 'next/image';
import { Nav } from '@/components/sections/Nav';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { commentCaMarche as c } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Comment ça marche',
  description:
    'Le coffret industriel Altileo : pilotage prédictif non invasif (Danfoss, Carel, Dixell, Eliwell), liaison 4G dédiée isolée du réseau IT, triple sécurité matérielle fail-safe et option Haute Pression Flottante éligible CEE BAT-TH-134.',
  keywords: ['inertie thermique', 'délestage chambre froide', 'HP flottante', 'CEE BAT-TH-134', 'cybersécurité 4G', 'fail-safe', 'HACCP', 'Altileo Box'],
  alternates: { canonical: '/comment-ca-marche' },
  openGraph: {
    title: 'Comment ça marche · Altileo',
    description: 'Exploiter l’inertie thermique des chambres froides pour réduire la facture d’électricité du froid.',
    url: '/comment-ca-marche',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: '/' },
    { '@type': 'ListItem', position: 2, name: 'Comment ça marche', item: '/comment-ca-marche' },
  ],
};

export default function CommentCaMarchePage() {
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
                {c.hero.pill}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
                {c.hero.title}
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-muted-dark leading-relaxed max-w-3xl">
                {c.hero.body}
              </p>
            </div>
          </Container>
        </section>

        {/* Principe — blanc */}
        <section className="py-20 lg:py-24 border-b border-line">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                {c.principe.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                {c.principe.title}
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                {c.principe.body}
              </p>
            </div>
          </Container>
        </section>

        {/* Étapes 1-2-3 — blanc */}
        <section className="py-20 lg:py-24 bg-surface border-b border-line">
          <Container>
            <div className="grid md:grid-cols-3 gap-6">
              {c.etapes.map((e) => (
                <div key={e.number} className="bg-white rounded-2xl border border-line p-7">
                  <div className="num text-4xl font-bold text-brand">{e.number}</div>
                  <h3 className="mt-4 text-xl font-medium text-ink">{e.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{e.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Hardware — carbon */}
        <section className="section-carbon py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-medium text-brand tracking-wide uppercase mb-3">
                {c.hardware.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {c.hardware.title}
              </h2>
            </div>
            <div className="mt-10 bg-white rounded-2xl p-4 lg:p-6">
              <Image
                src="/screenshots/coffret-schema.png"
                alt="Plan d’organisation du coffret industriel IP65 Altileo (400 × 460 × 175 mm) et des 5 raccordements non invasifs sur site : tores de mesure, sondes HACCP, capteur haute pression, sonde extérieure et contact sec armoire froid"
                width={1596}
                height={1056}
                className="w-full block h-auto rounded-lg"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {c.hardware.items.map((item) => (
                <div key={item.title} className="bg-[#181818] rounded-2xl border border-[#333] p-6">
                  <h3 className="text-base font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-dark leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-[#181818] border border-[#333] rounded-2xl p-6 lg:p-8">
              <p className="text-muted-dark leading-relaxed">{c.hardware.install}</p>
            </div>
          </Container>
        </section>

        {/* Cloud — blanc */}
        <section className="py-20 lg:py-24 border-b border-line">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                {c.cloud.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                {c.cloud.title}
              </h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">{c.cloud.body}</p>
            </div>
          </Container>
        </section>

        {/* Sécurité — blanc */}
        <section className="py-20 lg:py-24 bg-surface border-b border-line">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                {c.securite.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                {c.securite.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {c.securite.items.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-line p-7">
                  <h3 className="text-lg font-medium text-ink">{item.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{item.body}</p>
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
                {c.cta.title}
              </h2>
              <p className="mt-6 text-lg text-muted-dark leading-relaxed">{c.cta.body}</p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <ButtonLink href="/contact" size="lg">
                  Demander un diagnostic gratuit
                </ButtonLink>
                <ButtonLink
                  href="/tarification-dynamique"
                  variant="secondaryDark"
                  size="lg"
                >
                  Découvrir la tarification dynamique
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
