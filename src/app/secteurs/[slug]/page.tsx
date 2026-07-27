import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/sections/Nav';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { secteurs, secteursList } from '@/lib/content';
import { cn } from '@/lib/cn';

type Params = { slug: string };

export function generateStaticParams() {
  return secteursList.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const s = secteurs[params.slug as keyof typeof secteurs];
  if (!s) return {};
  return {
    title: `Optimisation du froid — ${s.nav}`,
    description: `${s.title} ${s.intro}`.slice(0, 180),
    alternates: { canonical: `/secteurs/${s.slug}` },
    openGraph: {
      title: `${s.nav} · Altileo`,
      description: s.title,
      url: `/secteurs/${s.slug}`,
      type: 'website',
    },
  };
}

const kpiColor: Record<'success' | 'white' | 'brand', string> = {
  success: 'text-success',
  white: 'text-white',
  brand: 'text-brand',
};

export default function SecteurPage({ params }: { params: Params }) {
  const s = secteurs[params.slug as keyof typeof secteurs];
  if (!s) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Secteurs', item: '/secteurs' },
      { '@type': 'ListItem', position: 3, name: s.nav, item: `/secteurs/${s.slug}` },
    ],
  };

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
                {s.tag}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
                {s.title}
              </h1>
              <p className="mt-6 text-lg text-muted-dark leading-relaxed max-w-3xl">
                {s.intro}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {s.kpis.map((k) => (
                <div key={k.l} className="bg-[#181818] rounded-2xl border border-[#333] p-6">
                  <div className={cn('num text-4xl font-bold', kpiColor[k.c])}>{k.v}</div>
                  <div className="text-sm text-muted-dark mt-2">{k.l}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Ce que ça change — blanc */}
        <section className="py-20 lg:py-24 border-b border-line">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="text-sm font-medium text-brand-deep tracking-wide uppercase mb-3">
                Ce que ça change pour vous
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                Concret, mesuré, adapté à votre exploitation
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {s.points.map((p) => (
                <div key={p.t} className="bg-surface rounded-2xl border border-line p-7">
                  <h3 className="text-lg font-medium text-ink">{p.t}</h3>
                  <p className="mt-3 text-muted leading-relaxed text-sm">{p.b}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Preuve — carbon */}
        <section className="section-carbon py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl">
              <span className="text-4xl font-bold text-brand" aria-hidden="true">*</span>
              <p className="mt-4 text-xl lg:text-2xl text-white leading-relaxed font-medium">
                {s.proof}
              </p>
              <a
                href={s.proofLink.href}
                className="inline-flex items-center gap-2 mt-6 text-brand font-medium hover:gap-3 transition-all"
              >
                {s.proofLink.label} &rarr;
              </a>
            </div>
          </Container>
        </section>

        {/* CTA — blanc */}
        <section className="py-20 lg:py-24 bg-surface">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-ink">
                On commence par un diagnostic gratuit.
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                On étudie vos installations, on chiffre vos économies, et vous décidez ensuite — en connaissance de cause.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <ButtonLink href="/contact" size="lg">
                  Demander un diagnostic gratuit
                </ButtonLink>
                <ButtonLink href="/notre-offre" variant="secondary" size="lg">
                  Voir notre offre
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
