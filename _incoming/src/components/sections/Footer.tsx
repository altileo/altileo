import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { site } from '@/lib/content';

const methodLinks = [
  { label: 'Audit instrumenté', href: '/#methode' },
  { label: 'Capteurs IoT', href: '/#methode' },
  { label: 'Automatisation', href: '/#methode' },
  { label: 'Dégivrage', href: '/#methode' },
  { label: 'Stockage PCM', href: '/#methode' },
];

const altileoLinks = [
  { label: 'Entreprise', href: '/entreprise' },
  { label: 'Compétences', href: '/competences' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-16">
      <Container>
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-1">
            <Logo theme="dark" />
            <p className="mt-4 text-sm leading-relaxed">
              Spécialistes de l\u2019optimisation énergétique du froid. Audit, capteurs, automatisation, stockage PCM.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-white/50 mb-4">
              Méthode
            </div>
            <ul className="space-y-2 text-sm">
              {methodLinks.map((l) => (
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
              Altileo
            </div>
            <ul className="space-y-2 text-sm">
              {altileoLinks.map((l) => (
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
              Contact
            </div>
            <ul className="space-y-2 text-sm">
              <li>{site.city}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white transition">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>
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
