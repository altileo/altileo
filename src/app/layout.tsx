import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://altileo.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Altileo — Optimisation énergétique du froid pour grossistes et logisticiens',
    template: '%s · Altileo',
  },
  description:
    'Réduisez de 30 à 40% la facture électrique de vos installations frigorifiques. Audit instrumenté, capteurs IoT, automatisation et stockage thermique PCM. Conformité Décret BACS incluse.',
  keywords: [
    'optimisation énergétique froid',
    'chambre froide économies',
    'décret BACS',
    'décret tertiaire',
    'PCM stockage thermique',
    'monitoring frigorifique',
    'Rungis grossistes',
    'efficacité énergétique cold chain',
  ],
  authors: [{ name: 'Altileo' }],
  creator: 'Altileo',
  publisher: 'Altileo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Altileo — Le froid optimisé, simplement',
    description:
      'Réduisez de 30 à 40% la facture électrique de vos installations frigorifiques. Audit, capteurs, automatisation, stockage PCM.',
    url: SITE_URL,
    siteName: 'Altileo',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og/altileo-og.png',
        width: 1200,
        height: 630,
        alt: 'Altileo — Optimisation énergétique du froid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altileo — Le froid optimisé, simplement',
    description:
      'Réduisez de 30 à 40% la facture électrique de vos installations frigorifiques.',
    images: ['/og/altileo-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-bg text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
