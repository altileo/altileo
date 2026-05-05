import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Questions fréquentes',
  description: 'Réponses aux questions sur l’audit énergétique, le déploiement, le ROI, la conformité Décret BACS et le SAV — par les ingénieurs Altileo.',
  alternates: { canonical: '/faq' },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
