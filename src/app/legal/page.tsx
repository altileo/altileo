import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales et politique de confidentialité d’Altileo (Valtrys).',
  robots: { index: false, follow: true },
  alternates: { canonical: '/legal' },
};

export default function LegalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-line">
        <Container className="h-16 flex items-center">
          <Logo />
        </Container>
      </header>
      <main className="flex-1 py-16">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink mb-8">
            Mentions légales
          </h1>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">
              Éditeur du site
            </h2>
            <p className="text-muted leading-relaxed">
              Le site altileo.com est édité par <strong className="text-ink">Valtrys</strong>, société propriétaire de la marque et du produit Altileo.
              <br /><br />
              <strong className="text-ink">Dénomination sociale :</strong> Valtrys
              <br />
              <strong className="text-ink">Forme juridique :</strong> [À compléter]
              <br />
              <strong className="text-ink">Siège social :</strong> [Adresse à compléter]
              <br />
              <strong className="text-ink">SIRET :</strong> [À compléter]
              <br />
              <strong className="text-ink">RCS :</strong> [À compléter]
              <br />
              <strong className="text-ink">TVA intracommunautaire :</strong> [À compléter]
              <br />
              <strong className="text-ink">Email :</strong>{' '}
              <a href={`mailto:${site.email}`} className="text-brand-deep hover:underline">
                {site.email}
              </a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">Directeur de la publication</h2>
            <p className="text-muted leading-relaxed">[À compléter : Prénom Nom, fonction]</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">Hébergement</h2>
            <p className="text-muted leading-relaxed">
              Ce site est hébergé par Vercel Inc.
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, USA
              <br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-deep hover:underline">vercel.com</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">Données personnelles (RGPD)</h2>
            <p className="text-muted leading-relaxed">
              Les données collectées via les formulaires de contact sont utilisées uniquement pour répondre à vos demandes commerciales et techniques. Elles ne sont ni revendues, ni partagées avec des tiers à des fins marketing.
              <br /><br />
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition aux données vous concernant.
              <br /><br />
              Pour exercer ces droits :{' '}
              <a href={`mailto:${site.email}`} className="text-brand-deep hover:underline">{site.email}</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">Cookies</h2>
            <p className="text-muted leading-relaxed">
              Ce site n’utilise pas de cookies de suivi publicitaire ni d’outils d’analyse comportementale. Seuls des cookies strictement nécessaires au fonctionnement du site peuvent être déposés, conformément aux recommandations de la CNIL.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">Propriété intellectuelle</h2>
            <p className="text-muted leading-relaxed">
              L’ensemble des contenus présents sur ce site (textes, images, schémas, marque Altileo, logo) est la propriété exclusive de Valtrys ou de ses partenaires. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite.
            </p>
          </section>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-deep font-semibold mt-8 hover:gap-3 transition-all"
          >
            ← Retour à l’accueil
          </Link>
        </Container>
      </main>
    </div>
  );
}
