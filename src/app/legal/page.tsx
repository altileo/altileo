import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales et politique de confidentialité d’Altileo.',
  robots: { index: false, follow: true },
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
              <strong className="text-ink">Altileo</strong>
              <br />
              Adresse : [À compléter]
              <br />
              SIREN : [À compléter]
              <br />
              Email :{' '}
              <a
                href={`mailto:${site.email}`}
                className="text-brand-deep hover:underline"
              >
                {site.email}
              </a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">
              Hébergement
            </h2>
            <p className="text-muted leading-relaxed">
              Ce site est hébergé par Vercel Inc.
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, USA
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">
              Données personnelles
            </h2>
            <p className="text-muted leading-relaxed">
              Les données collectées via les formulaires de contact et le
              diagnostic BACS sont utilisées uniquement pour répondre à vos
              demandes. Elles ne sont ni revendues ni partagées avec des tiers.
              Conformément au RGPD, vous disposez d’un droit d’accès, de
              rectification et de suppression. Pour exercer ces droits, écrivez
              à{' '}
              <a
                href={`mailto:${site.email}`}
                className="text-brand-deep hover:underline"
              >
                {site.email}
              </a>
              .
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mt-8 mb-4">Cookies</h2>
            <p className="text-muted leading-relaxed">
              Ce site n’utilise pas de cookies de suivi publicitaire. Seuls des
              cookies techniques strictement nécessaires au fonctionnement du
              site peuvent être déposés.
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
