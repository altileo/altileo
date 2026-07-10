import type { Metadata } from 'next';
import { faqGroups } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Questions fréquentes',
  description:
    'Réponses aux questions sur l’audit énergétique, le déploiement, le ROI, la conformité Décret BACS et le SAV — par les ingénieurs Altileo.',
  keywords: ['FAQ Altileo', 'audit énergétique froid', 'Décret BACS questions', 'ROI optimisation chambre froide'],
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Questions fréquentes · Altileo',
    description: 'Tout ce que les gérants demandent sur l’audit énergétique, le déploiement et la conformité.',
    url: '/faq',
    type: 'website',
  },
};

// Build FAQPage JSON-LD from content
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  ),
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
