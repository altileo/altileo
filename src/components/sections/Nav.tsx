'use client';

import { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { ButtonLink } from '@/components/ui/Button';

type NavLink = { label: string; href: string };
type NavGroup = { label: string; items: NavLink[] };

const navGroups: NavGroup[] = [
  {
    label: 'Solution',
    items: [
      { label: 'Comment ça marche', href: '/comment-ca-marche' },
      { label: 'Tarification dynamique', href: '/tarification-dynamique' },
      { label: 'Maintenance prédictive', href: '/maintenance-predictive' },
      { label: 'Notre offre', href: '/notre-offre' },
    ],
  },
  {
    label: 'Secteurs',
    items: [
      { label: 'Grossistes alimentaires', href: '/secteurs/grossistes' },
      { label: 'Logisticiens du froid', href: '/secteurs/logisticiens' },
      { label: 'Industriels agroalimentaires', href: '/secteurs/agroalimentaire' },
      { label: 'GMS & supermarchés', href: '/secteurs/gms' },
    ],
  },
  {
    label: 'Preuves',
    items: [
      { label: 'Étude de cas', href: '/etude-de-cas' },
      { label: 'Compétences', href: '/competences' },
    ],
  },
  {
    label: 'Entreprise',
    items: [
      { label: 'L’entreprise', href: '/entreprise' },
      { label: 'Questions fréquentes', href: '/faq' },
      { label: 'Méthode', href: '/#methode' },
    ],
  },
];

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Nav() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close menus on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-line">
      <Container className="h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav
          ref={navRef}
          className="hidden md:flex items-center gap-2 text-sm font-medium text-ink"
          aria-label="Navigation principale"
        >
          {navGroups.map((group) => (
            <div key={group.label} className="relative">
              <button
                type="button"
                onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md hover:text-brand-deep hover:bg-surface transition"
                aria-expanded={openGroup === group.label}
                aria-haspopup="true"
              >
                {group.label}
                <ChevronDown className={openGroup === group.label ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {openGroup === group.label && (
                <div className="absolute left-0 top-full mt-1 min-w-[220px] bg-white border border-line rounded-xl shadow-card py-2">
                  {group.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-ink hover:text-brand-deep hover:bg-surface transition"
                      onClick={() => setOpenGroup(null)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <ButtonLink href="/contact" size="md">
            Contact
          </ButtonLink>
        </div>

        {/* Mobile burger button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-md text-ink hover:bg-surface transition"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden fixed left-0 right-0 top-16 bottom-0 z-40 bg-white overflow-y-auto">
          <nav className="px-6 py-6" aria-label="Navigation mobile">
            {navGroups.map((group) => (
              <div key={group.label} className="mb-6">
                <div className="text-xs font-medium uppercase tracking-wide text-muted mb-2">
                  {group.label}
                </div>
                <div className="flex flex-col">
                  {group.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="py-3 text-lg text-ink hover:text-brand-deep border-b border-line transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <ButtonLink href="/contact" size="lg" className="w-full mt-2">
              Contact
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
