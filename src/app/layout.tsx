import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://altileo.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Altileo — Optimisation énergétique du froid pour grossistes et logisticiens',
    template: '%s · Altileo',
  },
  description:
    'Réduisez jusqu’à 35 % la facture électrique de vos installations frigorifiques (15 à 20 % en contrat actuel, jusqu’à 35 % en Bloc + Spot). Audit gratuit, pilotage prédictif, option HP flottante CEE BAT-TH-134 et stockage thermique Altileo Shield.',
  keywords: [
    'optimisation énergétique froid',
    'chambre froide économies',
    'décret BACS',
    'décret tertiaire',
    'PCM stockage thermique',
    'monitoring frigorifique',
    'Rungis grossistes',
    'efficacité énergétique cold chain',
    'audit énergétique froid',
  ],
  authors: [{ name: 'Altileo' }],
  creator: 'Altileo',
  publisher: 'Altileo',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: 'Altileo — Le froid optimisé, simplement',
    description:
      'Réduisez jusqu’à 35 % la facture électrique de vos installations frigorifiques (15 à 20 % en contrat actuel, jusqu’à 35 % en Bloc + Spot). Audit gratuit.',
    url: SITE_URL,
    siteName: 'Altileo',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og/altileo-og.svg',
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
      'Réduisez jusqu’à 35 % la facture électrique de vos installations frigorifiques.',
    images: ['/og/altileo-og.svg'],
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
  alternates: { canonical: '/' },
  // verification: {
  //   google: 'YOUR-GOOGLE-VERIFICATION-CODE',
  //   other: { 'msvalidate.01': 'YOUR-BING-CODE' },
  // },
};

// Organization JSON-LD
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Altileo',
  url: SITE_URL,
  logo: `${SITE_URL}/og/altileo-og.svg`,
  description:
    'Spécialistes de l’optimisation énergétique du froid pour grossistes alimentaires, logisticiens et industriels agroalimentaires.',
  email: 'contact@altileo.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressCountry: 'FR',
  },
  areaServed: { '@type': 'Country', name: 'France' },
  sameAs: ['https://www.linkedin.com/company/altileo'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#111111" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-bg text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
