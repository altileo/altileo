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

export const competences = {
  hero: {
    pill: 'L’ingénierie derrière Altileo',
    title:
      'Quand vous nous confiez vos installations, vous parlez à des ingénieurs.',
    body:
      'Altileo n’est pas une coquille logicielle posée sur du matériel acheté. Notre équipe conçoit les armoires, calcule les sections de câbles, dessine les schémas, intègre l’automatisme et garantit la conformité. C’est cette profondeur technique qui rend nos déploiements cold-chain fiables et durables.',
  },
  why: {
    title: 'Pourquoi cette profondeur compte pour vous.',
    body:
      'Une optimisation énergétique mal câblée détruit son propre ROI. Une armoire mal dimensionnée crée des pannes en pleine campagne. Un dégivrage mal piloté peut compromettre votre stock. Avoir des ingénieurs qui maîtrisent la chaîne complète — de la mise à la terre au pilotage prédictif — c’est ce qui sépare un déploiement qui dure de celui qui revient en SAV tous les six mois.',
  },
  capabilities: [
    {
      icon: '⚡',
      title: 'Études électriques BT industrielles',
      body:
        'Conception, dimensionnement, calcul de charges et vérification court-circuit. Schémas unifilaires et de principe, bilans de puissance, plans d’implantation.',
      example:
        'Conception et redlining d’un schéma d’armoire 230V/24V pour pilotage frigorifique multi-zones, avec calcul des sections câbles et coordination des protections.',
    },
    {
      icon: '🔧',
      title: 'Armoires électriques sur mesure',
      body:
        'Conception et fabrication d’armoires de pilotage adaptées à vos installations. Intégration des automates, des modules d’acquisition et des départs moteurs.',
      example:
        'Armoire de pilotage VFD avec acquisition PT100 et bus RS485 pour remontée des capteurs de chambre froide vers le serveur Altileo.',
    },
    {
      icon: '✓',
      title: 'Mise en conformité électrique',
      body:
        'Audit de conformité aux normes NF C 15-100 et NF C 13-100. Identification des écarts, plan de remise à niveau, suivi de levée de réserves.',
      example:
        'Diagnostic d’un site grossiste : repérage des défauts de mise à la terre, absence de PE sur certaines arrivées, propositions de mise en conformité chiffrées.',
    },
    {
      icon: '🤖',
      title: 'Instrumentation et automatisme',
      body:
        'Capteurs température, humidité, courant, ouverture de portes. Contrôleurs programmables, commande VFD des compresseurs, passerelles IoT.',
      example:
        'Intégration d’une carte d’acquisition PT100 et capteurs de courant côté primaire et secondaire transformateur, avec remontée temps réel sur dashboard.',
    },
    {
      icon: '❄',
      title: 'Études thermiques et frigorifiques',
      body:
        'Bilans thermiques de chambres froides, dimensionnement des groupes, étude des cycles de dégivrage, optimisation des consignes.',
      example:
        'Bilan thermique multi-zones d’un grossiste alimentaire — identification de 18% de surconsommation liée à des cycles de dégivrage non optimisés.',
    },
    {
      icon: '📊',
      title: 'Intégration BMS / GTB',
      body:
        'Mise en place d’un système d’automatisation et de contrôle conforme au Décret BACS. Pilotage centralisé, reporting OPERAT pour le Décret Tertiaire.',
      example:
        'Architecture GTB pour un site tertiaire avec installation frigorifique > 70 kW, livrée clé en main avec attestation de conformité BACS.',
    },
    {
      icon: '🔋',
      title: 'Stockage thermique PCM',
      body:
        'Étude, dimensionnement et déploiement de stockage par matériaux à changement de phase. Intégration au système de pilotage pour décalage de charge.',
      example:
        'Dimensionnement d’une réserve de stockage PCM pour décalage de la consommation aux heures creuses, en partenariat avec un fabricant français.',
    },
    {
      icon: '📐',
      title: 'Schémas et documentation',
      body:
        'Schémas électriques, plans d’implantation, dossiers d’armoire, notices d’exploitation. Livrables conformes aux exigences industrielles et au DOE.',
      example:
        'Dossier complet d’armoire avec schéma de principe, schéma de câblage, liste de matériel et notice d’exploitation pour le mainteneur du site.',
    },
    {
      icon: '🛠',
      title: 'Mise en service et SAV',
      body:
        'Mise en service sur site, paramétrage, tests fonctionnels, formation des utilisateurs. Support à distance et intervention sur site en cas d’anomalie.',
      example:
        'Mise en service d’un système complet capteurs + armoire + dashboard sur un site Rungis, formation du gérant et du frigoriste mainteneur.',
    },
  ],
  process: {
    title: 'Quatre étapes, du brief à l’exploitation.',
    body:
      'Chaque mission suit le même processus rigoureux. Vous savez à chaque étape ce qui est livré, qui est responsable, et quand.',
    steps: [
      {
        number: '01',
        title: 'Audit & cadrage',
        body:
          'Visite sur site, mesures, lecture des installations existantes. Note de cadrage chiffrée avec périmètre, livrables et planning.',
      },
      {
        number: '02',
        title: 'Étude & conception',
        body:
          'Schémas, calculs, dimensionnement, choix matériel. Validation technique avant tout achat ou fabrication.',
      },
      {
        number: '03',
        title: 'Fabrication & déploiement',
        body:
          'Armoires en interne, intégration sur site, câblage, paramétrage. Tests fonctionnels avant mise en service.',
      },
      {
        number: '04',
        title: 'Mise en service & suivi',
        body:
          'Mise en route, formation utilisateurs, dossier d’exploitation. Support technique et SAV sous contrat.',
      },
    ],
  },
  guarantees: {
    title: 'On engage notre responsabilité, pas celle d’un sous-traitant anonyme.',
    body:
      'Tout ce que nous livrons est conçu, calculé et validé par nos ingénieurs. Vous avez un seul interlocuteur pour la conception, la réalisation, et le suivi.',
    items: [
      {
        label: 'Conformité aux normes',
        body:
          'NF C 15-100, NF C 13-100, exigences Décret BACS et Décret Tertiaire respectées sur chaque livrable.',
      },
      {
        label: 'Documentation complète',
        body:
          'Schémas, plans, notes de calcul, notices d’exploitation et DOE livrés systématiquement.',
      },
      {
        label: 'Garantie sur le matériel',
        body:
          'Garantie constructeur sur tout le matériel installé, plus garantie de bonne exécution sur la conception.',
      },
      {
        label: 'Un seul interlocuteur',
        body:
          'Vous parlez aux mêmes ingénieurs pendant l’étude, la réalisation et le SAV. Pas de chaîne diluée, pas de renvoi de balle.',
      },
    ],
  },
  cta: {
    title: 'Une question technique précise ?',
    body:
      'Décrivez votre besoin en quelques lignes. Un de nos ingénieurs vous répond sous 48 heures avec une première analyse — gratuite, sans engagement.',
  },
};
