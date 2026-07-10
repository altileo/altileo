import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { ButtonLink } from '@/components/ui/Button';

const navItems = [
  { label: 'Comment ça marche', href: '/comment-ca-marche' },
  { label: 'Tarification dynamique', href: '/tarification-dynamique' },
  { label: 'Méthode', href: '/#methode' },
  { label: 'Compétences', href: '/competences' },
  { label: 'Entreprise', href: '/entreprise' },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-bg/90 backdrop-blur border-b border-line">
      <Container className="h-16 flex items-center justify-between">
        <Logo />
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-ink"
          aria-label="Navigation principale"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-brand-deep transition">
              {item.label}
            </a>
          ))}
        </nav>
        <ButtonLink href="/contact" size="md">
          Contact
        </ButtonLink>
      </Container>
    </header>
  );
}
