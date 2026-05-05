/**
 * Centralised site content.
 *
 * All French text uses typographic apostrophes (’) — U+2019.
 * This is correct French typography AND avoids the react/no-unescaped-entities rule.
 *
 * Edit this file to update copy across the site.
 * Look for "TODO" markers — those are placeholders awaiting real data.
 */

export const site = {
  name: 'Altileo',
  tagline: 'Le froid optimisé, simplement.',
  email: 'contact@altileo.com',
  city: 'Paris, France',
  // TODO: confirm or update once LinkedIn page is created
  linkedinUrl: 'https://www.linkedin.com/company/altileo',
};

export const hero = {
  pill: 'Spécialistes du froid pour grossistes et logisticiens',
  savingsRange: '30 à 40%',
  body:
    'On audite. On déploie capteurs et automatisation. On ajoute du stockage thermique PCM si le ROI le justifie. Économies vérifiées sur sites réels.',
  primaryCta: 'Demander un audit énergétique',
  secondaryCta: 'Voir le produit en action →',
  trustSignals: [
    'Économies vérifiées',
    'Conformité Décret BACS',
    'Système opérationnel',
    'ROI sous 18 mois',
  ],
  screenshotCaption:
    'Capture du tableau de bord en production — données réelles d’un site déployé',
};

export const stats = [
  {
    value: '60%',
    body:
      'de la consommation électrique d’un grossiste alimentaire vient du froid.',
  },
  {
    value: '€80 000+',
    body:
      'facture annuelle moyenne en électricité froid pour un grossiste de 1500 m² à Rungis.',
  },
  {
    value: '2026',
    body:
      'deadline Décret BACS\u00a0: monitoring et automatisation obligatoires sur installations supérieures à 70 kW.',
  },
];

export const product = {
  label: 'Le produit',
  title: 'Un système complet, déployé et opérationnel.',
  body:
    'Altileo n’est pas un concept. C’est un système matériel et logiciel intégré, déployé sur sites clients, qui mesure, décide et agit en temps réel sur vos équipements frigorifiques.',
  architecture: {
    title: 'L’architecture, sans boîte noire.',
    body:
      'De la chambre froide jusqu’au tableau de bord, chaque brique est documentée. Capteurs (température, ouverture de portes, courant), boîtier de contrôle avec commande VFD du compresseur, serveur local, base de données et couche de commande prédictive.',
    pillars: [
      { number: '01', title: 'Collecte', subtitle: 'Capteurs IoT' },
      { number: '02', title: 'Décision', subtitle: 'Pilotage adaptatif' },
      { number: '03', title: 'Action', subtitle: 'Commande VFD' },
    ],
  },
  dashboard: {
    eyebrow: 'Tableau de bord temps réel',
    title: 'Vos KPIs énergétiques, accessibles 24/7.',
    body:
      'Consommation actuelle, taux de stockage, températures par chambre, économies réalisées, alertes système. Web et mobile.',
  },
  systemHealth: {
    eyebrow: 'État du système',
    title: 'Une vue claire de chaque organe.',
    body:
      'Alimentation, régulation, IoT, protection, conversion, stockage : chaque sous-système est monitoré en continu, avec alertes automatiques en cas d’anomalie.',
  },
  stack:
    'Stack technique : capteurs propriétaires + boîtier de contrôle avec commande VFD, serveur local edge computing, base de données temps réel, couche de commande prédictive, et dashboard accessible web et mobile. Souveraineté française, hébergement européen.',
};

export const method = {
  label: 'La méthode',
  title: 'Cinq couches. Vous payez ce qui a un ROI prouvé.',
  body:
    'On ne vend pas un produit unique. On déploie une méthode mesurée, par étapes. Chaque couche est indépendante, chiffrée, et déployée seulement si elle est rentable sur votre site.',
  layers: [
    {
      number: '01',
      title: 'Audit instrumenté',
      duration: '4 à 6 semaines',
      body:
        'Mesure précise de vos consommations, températures, taux d’humidité, ouvertures de portes, cycles de dégivrage et comportement des compresseurs. On vous remet un rapport chiffré identifiant exactement où sont vos pertes.',
      savings: 'Diagnostic chiffré',
      savingsColor: 'ink' as const,
      featured: false,
    },
    {
      number: '02',
      title: 'Capteurs IoT',
      duration: 'Visibilité 24/7',
      body:
        'Capteurs de température, humidité, ouverture de portes, mouvement et consommation déployés sur l’ensemble de vos zones froides. Tableau de bord en temps réel accessible web et mobile.',
      savings: '5 à 10%',
      savingsColor: 'success' as const,
      featured: false,
    },
    {
      number: '03',
      title: 'Automatisation intelligente',
      duration: 'Pilotage adaptatif',
      body:
        'Modulation adaptative des compresseurs (commande VFD), des points de consigne et des cycles, en fonction des conditions réelles plutôt que de programmes fixes. Sans intervention manuelle. Sans modification de vos équipements.',
      savings: '10 à 15%',
      savingsColor: 'success' as const,
      featured: false,
    },
    {
      number: '04',
      title: 'Optimisation du dégivrage',
      duration: 'À la demande',
      body:
        'Détection en temps réel de l’accumulation réelle de givre. Le dégivrage se déclenche uniquement quand il est nécessaire — fini les cycles à intervalles fixes qui gaspillent l’énergie.',
      savings: '5 à 10%',
      savingsColor: 'success' as const,
      featured: false,
    },
    {
      number: '05',
      title: 'Stockage thermique PCM',
      duration: 'Partenariat fabricant français',
      body:
        'Matériaux à changement de phase (PCM/MCP) qui stockent le froid pendant les heures creuses et le restituent aux heures pleines. Décale votre consommation, lisse vos pics, allonge la vie de vos équipements.',
      savings: '15 à 20%',
      savingsColor: 'success' as const,
      featured: true,
      badge: 'Exclusif',
    },
  ],
  modularNote: {
    label: 'Approche modulaire',
    body:
      'on ne déploie que les couches qui ont un ROI sous 18 mois sur votre site spécifique. Pas de sur-vente, pas de sur-équipement. Si l’audit ne révèle pas au moins 25% d’économies réalisables, on vous le dit — et vous ne payez que les frais d’instrumentation.',
  },
};

export const caseStudy = {
  label: 'Cas client',
  // The newline is rendered as <br/> in the component
  title: 'Un grossiste à Rungis.\n12 mois de mesures.',
  // TODO: replace with real Ringus details after sale signature
  body1:
    '[À compléter : nom du client] est un grossiste alimentaire installé au pavillon [À compléter : Marée / Carnés / Laitiers] de Rungis. 1500 m² de chambres froides, multi-températures.',
  body2:
    'Nous avons déployé les couches 1 à 5 de notre méthode sur 12 mois. Mesures avant et après vérifiées par compteurs énergétiques indépendants.',
  cta: 'Lire le cas complet →',
  // TODO: replace with real verified numbers from Ringus pilot
  kpis: [
    {
      label: 'Économies annualisées',
      value: '€31 440',
      caption: 'vérifiées sur 12 mois',
      color: 'navy' as const,
    },
    {
      label: 'Réduction facture froid',
      value: '36,2%',
      caption: 'moyenne sur 12 mois',
      color: 'success' as const,
    },
    {
      label: 'ROI atteint',
      value: '14 mois',
      caption: 'retour sur investissement',
      color: 'ink' as const,
    },
    {
      label: 'Conformité BACS',
      value: '✓',
      caption: 'livrée clé en main',
      color: 'success' as const,
    },
  ],
  // TODO: replace with real quote from client after they agree to be named
  quote:
    '« [À compléter : citation client à valider après signature] On savait qu’on consommait trop. Altileo nous a montré exactement où, et déployé ce qui fait économiser — sans toucher à nos équipements. »',
  quoteAuthor: '[À compléter : nom, fonction]',
  quoteCompany: '[À compléter : société], Rungis',
};

export const profiles = {
  label: 'Pour qui',
  title:
    'Trois profils, un même besoin\u00a0: un froid moins cher, plus fiable, conforme.',
  cards: [
    {
      icon: '📦',
      title: 'Grossistes alimentaires',
      body:
        'MIN de Rungis, marchés de gros régionaux, distributeurs RHF, primeurs et négociants en produits frais.',
      tags: ['Multi-températures', 'Activité 4h–14h', 'Décret BACS applicable'],
    },
    {
      icon: '🚚',
      title: 'Logisticiens du froid',
      body:
        'Entrepôts multi-températures, prestataires logistiques alimentaires, plateformes 3PL spécialisées.',
      tags: ['Forte volumétrie', 'Pression CSRD/RSE', 'F-Gas en transition'],
    },
    {
      icon: '🏭',
      title: 'Industriels agroalimentaires',
      body:
        'Cuisines centrales, transformation, conditionnement, sites de production avec process froid.',
      tags: ['Process critique', 'Décret Tertiaire', 'CEE éligibles'],
    },
  ],
};

export const comparison = {
  label: 'La différence',
  title: 'Pourquoi Altileo plutôt qu’un intégrateur généraliste\u00a0?',
  columns: [
    { name: 'Altileo', subtitle: 'Spécialiste froid', highlighted: true },
    {
      name: 'Intégrateurs généralistes',
      subtitle: 'Schneider, Trane, Carrier',
      highlighted: false,
    },
    {
      name: 'Plateformes IA tertiaires',
      subtitle: 'BeeBryte, Hive Optimal',
      highlighted: false,
    },
  ],
  rows: [
    {
      criterion: 'Spécialisation froid',
      values: ['✓ Exclusivement', '⚠ Multi-domaines', '⚠ CVC tertiaire'],
    },
    {
      criterion: 'Audit instrumenté avant déploiement',
      values: ['✓ Inclus', '✗ Devis sur cahier des charges', '⚠ Souvent absent'],
    },
    {
      criterion: 'Stockage PCM intégré',
      values: ['✓ Partenariat exclusif FR', '✗', '✗'],
    },
    {
      criterion: 'Modularité par couche',
      values: [
        '✓ Vous payez ce qui marche',
        '✗ Solution complète obligatoire',
        '⚠ Logiciel uniquement',
      ],
    },
    {
      criterion: 'Conformité Décret BACS',
      values: ['✓ Clé en main', '✓ Avec configuration', '⚠ Périmètre logiciel'],
    },
  ],
};

export const bacs = {
  pill: 'Décret BACS · Échéance 2026',
  title: 'Êtes-vous concerné par le Décret BACS\u00a0?',
  body:
    'Si vos installations frigorifiques dépassent 70 kW de puissance et sont dans un bâtiment tertiaire, le Décret BACS impose un système d’automatisation et de contrôle. Diagnostic en 3 questions, gratuit, instantané.',
  bullets: [
    'Résultat immédiat',
    'Aucune donnée commerciale demandée pour le diagnostic',
    'Réponse personnalisée selon votre situation',
  ],
};

export const pcm = {
  pill: 'Partenariat exclusif',
  title: 'Le stockage thermique, fabriqué en France.',
  // TODO: replace with real PCM manufacturer name once permission is obtained
  body:
    'Altileo travaille en partenariat exclusif avec [À compléter : nom du fabricant], fabricant français de matériaux à changement de phase (PCM/MCP). Cette collaboration nous permet de déployer du stockage thermique haute performance, made in France, à des conditions exclusives — là où nos concurrents revendent des solutions importées.',
  bullets: [
    {
      strong: 'Durée de vie 15–20 ans',
      body: 'contre 7–10 ans pour les batteries lithium',
    },
    {
      strong: 'Maintenance quasi-nulle',
      body: 'pas de cycles de recharge à gérer',
    },
    {
      strong: 'Fabrication française',
      body: 'éligible CEE et bonus souveraineté',
    },
  ],
};

export const team = {
  label: 'L’équipe',
  title: 'Quatre ingénieurs électriciens, passionnés de froid.',
  body:
    'Pas de couches managériales. Pas de commerciaux qui ne connaissent pas la physique. Quand vous parlez à Altileo, vous parlez à l’ingénieur qui auditera et déploiera sur votre site.',
  // TODO: replace placeholders with real founder names, roles, bios, photos
  members: [
    {
      name: '[Prénom Nom]',
      role: 'Co-fondateur · Audit et instrumentation',
      bio: '[Bref bio · 2 lignes max · spécialisation technique]',
      photo: null as string | null,
    },
    {
      name: '[Prénom Nom]',
      role: 'Co-fondateur · Automatisation',
      bio: '[Bref bio · 2 lignes max · spécialisation technique]',
      photo: null as string | null,
    },
    {
      name: '[Prénom Nom]',
      role: 'Co-fondateur · Stockage thermique',
      bio: '[Bref bio · 2 lignes max · spécialisation technique]',
      photo: null as string | null,
    },
    {
      name: '[Prénom Nom]',
      role: 'Co-fondateur · Déploiement et SAV',
      bio: '[Bref bio · 2 lignes max · spécialisation technique]',
      photo: null as string | null,
    },
  ],
};

export const finalCta = {
  title: 'On commence toujours\npar mesurer.',
  body:
    'Audit instrumenté de vos installations frigorifiques. Quatre semaines. Rapport chiffré complet. Si on n’identifie pas au moins 25% d’économies réalisables, vous ne payez que les frais d’instrumentation.',
  primaryCta: 'Demander un audit énergétique',
  secondaryCta: 'Parler à un ingénieur',
  signals: ['Réponse sous 48h', 'Audit en 4 semaines', 'Sans engagement'],
};
