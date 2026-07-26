import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { site } from '@/lib/content';

const solutionLinks = [
  { label: 'Comment ça marche', href: '/comment-ca-marche' },
  { label: 'Tarification dynamique', href: '/tarification-dynamique' },
  { label: 'Maintenance prédictive', href: '/maintenance-predictive' },
];

const preuvesLinks = [
  { label: 'Étude de cas', href: '/etude-de-cas' },
  { label: 'Compétences', href: '/competences' },
  { label: 'Méthode', href: '/#methode' },
];

const entrepriseLinks = [
  { label: 'L’entreprise', href: '/entreprise' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-16">
      <Container>
        <div className="grid md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-2">
            <Logo theme="dark" />
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Le froid, piloté par la donnée. Moins de coûts. Moins de pannes. La chaîne du froid, jamais compromise.
            </p>
            <div className="mt-5 text-sm space-y-1">
              <div>{site.city}</div>
              <div>
                <a href={`mailto:${site.email}`} className="hover:text-white transition">
                  {site.email}
                </a>
              </div>
              <div>
                <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-white/50 mb-4">
              Solution
            </div>
            <ul className="space-y-2 text-sm">
              {solutionLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-white/50 mb-4">
              Preuves
            </div>
            <ul className="space-y-2 text-sm">
              {preuvesLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-white/50 mb-4">
              Entreprise
            </div>
            <ul className="space-y-2 text-sm">
              {entrepriseLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Altileo — une marque de Valtrys
          </div>
          <div className="flex gap-6">
            <a href="/legal" className="hover:text-white transition">
              Mentions légales
            </a>
            <a href="/legal" className="hover:text-white transition">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
