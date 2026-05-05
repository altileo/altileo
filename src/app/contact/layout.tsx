import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Demandez un audit ou parlez à un ingénieur Altileo. Réponse sous 48 heures.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
