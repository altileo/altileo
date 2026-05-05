import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-line">
        <Container className="h-16 flex items-center">
          <Logo />
        </Container>
      </header>
      <main className="flex-1 flex items-center justify-center py-16">
        <Container className="text-center max-w-lg">
          <span
            className="text-6xl font-bold text-highlight"
            aria-hidden="true"
          >
            *
          </span>
          <h1 className="num text-7xl font-bold text-navy mt-4">404</h1>
          <p className="text-xl text-ink font-semibold mt-4">
            Cette page n’existe pas.
          </p>
          <p className="text-muted mt-3 leading-relaxed">
            La page que vous cherchez a peut-être été déplacée, ou n’a jamais
            existé.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-8 bg-brand-deep hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg shadow-cta transition"
          >
            Retour à l’accueil
          </Link>
        </Container>
      </main>
    </div>
  );
}
