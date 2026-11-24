import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales et politique de confidentialité d’Altileo.',
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
            <h2 className="text-2xl font-bold text-ink mb-4">
              Éditeur du site
            </h2>

            <p className="text-muted leading-relaxed">
              Le site altileo.com est édité par <strong>VALTRYS</strong>,
              société propriétaire de la marque et du produit Altileo.
              <br />
              <br />
              <strong>Dénomination sociale :</strong> VALTRYS
              <br />
              <strong>Forme juridique :</strong> SAS
              <br />
              <strong>Siège social :</strong> 60 rue François 1er, 75008 Paris,
              France
              <br />
              <strong>RCS :</strong> Paris 999 201 296
              <br />
              <strong>Email :</strong>{' '}
              <a
                href={`mailto:${site.email}`}
                className="text-brand-deep hover:underline"
              >
                {site.email}
              </a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">
              Directeur de la publication
            </h2>

            <p className="text-muted leading-relaxed">
              Le Président de VALTRYS
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">
              Hébergement du site vitrine
            </h2>

            <p className="text-muted leading-relaxed">
              Vercel Inc.
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723
              <br />
              États-Unis
              <br />
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-deep hover:underline"
              >
                vercel.com
              </a>
              <br />
              <br />
              Les données d’exploitation issues des installations clients
              (télémétrie, températures, consommations) sont hébergées sur des
              serveurs situés en France / Union européenne.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">
              Politique de confidentialité
            </h2>

            <p className="text-muted leading-relaxed">
              Les informations transmises via les formulaires du site sont
              utilisées uniquement afin de répondre aux demandes adressées à
              VALTRYS concernant Altileo.
              <br />
              <br />
              Les données ne sont pas vendues à des tiers.
              <br />
              <br />
              Conformément à la réglementation applicable, vous pouvez demander
              l’accès, la rectification ou la suppression de vos données
              personnelles en écrivant à :
              <br />
              <br />
              <a
                href={`mailto:${site.email}`}
                className="text-brand-deep hover:underline"
              >
                {site.email}
              </a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">
              Cookies
            </h2>

            <p className="text-muted leading-relaxed">
              Le site peut utiliser des cookies ou technologies similaires
              strictement nécessaires à son fonctionnement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">
              Propriété intellectuelle
            </h2>

            <p className="text-muted leading-relaxed">
              L’ensemble des contenus présents sur ce site, notamment les
              textes, visuels, logos, schémas, éléments graphiques et contenus
              techniques, est protégé par les lois relatives à la propriété
              intellectuelle.
              <br />
              <br />
              La marque Altileo et les éléments associés sont exploités par
              VALTRYS.
              <br />
              <br />
              Toute reproduction, représentation, adaptation ou exploitation,
              totale ou partielle, sans autorisation préalable est interdite.
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
