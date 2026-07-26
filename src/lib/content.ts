/**
 * Centralised site content.
 * All French text uses typographic apostrophes.
 */

export const site = {
  name: 'Altileo',
  tagline: 'Le froid optimise, simplement.',
  email: 'contact@altileo.com',
  city: 'Paris, France',
  linkedinUrl: 'https://www.linkedin.com/company/altileo',
};

export const hero = {
  pill: 'Spécialistes du froid pour grossistes et logisticiens',
  savingsRange: '30 à 40 %',
  body:
    'On audite. On déploie capteurs et automatisation. On ajoute du stockage thermique PCM si le ROI le justifie. Économies vérifiées sur sites réels.',
  primaryCta: 'Demander un audit énergétique',
  secondaryCta: 'Voir le produit en action',
  trustSignals: [
    'Économies vérifiées',
    'Conformité Décret BACS',
    'Système opérationnel',
    'ROI sous 18 mois',
  ],
  screenshotCaption:
    'Capture du tableau de bord en production - données réelles d’un site déployé',
};

export const stats = [
  { value: '60%', body: 'de la consommation électrique d’un grossiste alimentaire vient du froid.' },
  { value: '€80 000+', body: 'facture électricité froid d’un grossiste alimentaire de 1500 m² (estimation marché sur prix réglementé 2024).' },
  { value: '2026', body: 'échéance Décret BACS : monitoring et automatisation obligatoires sur installations supérieures à 70 kW.' },
];

export const product = {
  label: 'Le produit',
  title: 'Un système complet, déployé et opérationnel.',
  body:
    'Altileo n’est pas un concept. C’est un système matériel et logiciel intégré, déployé sur sites clients, qui mesure, decide et agit en temps réel sur vos équipements frigorifiques.',
  architecture: {
    title: 'L’architecture, sans boîte noire.',
    body:
      'De la chambre froide jusqu’au tableau de bord, chaque brique est documentee. Capteurs (température, ouverture de portes, courant), boîtier de contrôle avec commande VFD du compresseur, serveur local, base de données et couche de commande prédictive.',
    pillars: [
      { number: '01', title: 'Collecte', subtitle: 'Capteurs IoT' },
      { number: '02', title: 'Decision', subtitle: 'Pilotage adaptatif' },
      { number: '03', title: 'Action', subtitle: 'Commande VFD' },
    ],
  },
  dashboard: {
    eyebrow: 'Tableau de bord temps réel',
    title: 'Vos KPIs énergétiques, accessibles 24/7.',
    body: 'Consommation actuelle, taux de stockage, températures par chambre, économies réalisées, alertes système. Web et mobile.',
  },
  systemHealth: {
    eyebrow: 'Etat du système',
    title: 'Une vue claire de chaque organe.',
    body: 'Alimentation, regulation, IoT, protection, conversion, stockage : chaque sous-système est monitore en continu, avec alertes automatiques en cas d’anomalie.',
  },
  stack:
    'Stack technique : capteurs propriétaires + boîtier de contrôle avec commande VFD, serveur local edge computing, base de données temps réel, couche de commande prédictive, et dashboard accessible web et mobile. Souveraineté française, hébergement européen.',
};

export const method = {
  label: 'La méthode',
  title: 'Cinq couches. Vous payez ce qui a un ROI prouvé.',
  body:
    'On ne vend pas un produit unique. On déploie une méthode mesuree, par étapes. Chaque couche est indépendante, chiffrée, et déployée seulement si elle est rentable sur votre site.',
  layers: [
    { number: '01', title: 'Audit instrumente', duration: '4 à 6 semaines', body: 'Mesure précise de vos consommations, températures, taux d’humidité, ouvertures de portes, cycles de dégivrage et comportement des compresseurs. On vous remet un rapport chiffré identifiant exactement ou sont vos pertes.', savings: 'Diagnostic chiffré', savingsColor: 'ink' as const, featured: false },
    { number: '02', title: 'Capteurs IoT', duration: 'Visibilité 24/7', body: 'Capteurs de température, humidité, ouverture de portes, mouvement et consommation déployés sur l’ensemble de vos zones froides. Tableau de bord en temps réel accessible web et mobile.', savings: '5 à 10 %', savingsColor: 'success' as const, featured: false },
    { number: '03', title: 'Automatisation intelligente', duration: 'Pilotage adaptatif', body: 'Modulation adaptative des compresseurs (commande VFD), des points de consigne et des cycles, en fonction des conditions réelles plutôt que de programmes fixes. Sans intervention manuelle. Sans modification de vos équipements.', savings: '10 à 15 %', savingsColor: 'success' as const, featured: false },
    { number: '04', title: 'Optimisation du dégivrage', duration: 'À la demande', body: 'Détection en temps réel de l’accumulation réelle de givre. Le dégivrage se déclenche uniquement quand il est nécessaire - fini les cycles à intervalles fixes qui gaspillent l’énergie.', savings: '5 à 10 %', savingsColor: 'success' as const, featured: false },
    { number: '05', title: 'Stockage thermique PCM', duration: 'Partenariat fabricant français', body: 'Materiaux a changement de phase (PCM/MCP) qui stockent le froid pendant les heures creuses et le restituent aux heures pleines. Decale votre consommation, lisse vos pics, allonge la vie de vos équipements.', savings: '15 à 20 %', savingsColor: 'success' as const, featured: true, badge: 'Exclusif' },
  ],
  modularNote: {
    label: 'Approche modulaire',
    body: 'on ne déploie que les couches qui ont un ROI sous 18 mois sur votre site specifique. Pas de sur-vente, pas de sur-équipement. On avance par étapes sûres : on ne déploie que lorsque le gain est clair, mesuré et prouvé.',
  },
};

export const caseStudy = {
  label: 'Pilote terrain · MIN de Rungis',
  title: 'Une chambre négative.\nDes mesures, pas des promesses.',
  body1: 'Sur une chambre froide négative de 30 m² au MIN de Rungis (consigne −21 °C, groupe triphasé ~6,5 kW), nous avons mené un test de délestage grandeur réelle le 30 mars 2026 : compresseur coupé, températures suivies par nos capteurs.',
  body2: 'Résultat : après 3 h 52 de coupure, la température à cœur de la marchandise n’a dérivé que de +0,21 °C par heure — largement dans les limites HACCP. La chambre tolère jusqu’à 6 heures de délestage par jour ; nous paramétrons à 5 h pour garder une marge confortable.',
  cta: 'Voir l’étude de cas complète',
  ctaHref: '/etude-de-cas',
  kpis: [
    { label: 'Économie annuelle', value: '2 442 €', caption: '−35 % vs contrat HC/HP actuel', color: 'success' as const },
    { label: 'Retour sur investissement', value: '~7,4 mois', caption: 'installation 1 500 €', color: 'navy' as const },
    { label: 'Dérive thermique mesurée', value: '+0,21 °C/h', caption: 'à cœur de la marchandise (test sans MCP)', color: 'ink' as const },
    { label: 'Conformité HACCP', value: '100 %', caption: '−16,97 °C max simulé', color: 'success' as const },
  ],
  note: 'Ces chiffres correspondent à un site et une configuration précis, mesurés sur 12 mois. Un audit préalable est nécessaire pour quantifier l’économie potentielle de chaque nouveau site : volumes, isolation, consommation de base et contraintes d’activité varient d’un client à l’autre.',
};

export const profiles = {
  label: 'Pour qui',
  title: 'Trois profils, un même besoin : un froid moins cher, plus fiable, conforme.',
  cards: [
    { icon: 'P', title: 'Grossistes alimentaires', body: 'MIN de Rungis, marchés de gros régionaux, distributeurs RHF, primeurs et négociants en produits frais.', tags: ['Multi-températures', 'Activité 4h-14h', 'Décret BACS applicable'] },
    { icon: 'L', title: 'Logisticiens du froid', body: 'Entrepots multi-températures, prestataires logistiques alimentaires, plateformes 3PL spécialisées.', tags: ['Forte volumétrie', 'Pression CSRD/RSE', 'F-Gas en transition'] },
    { icon: 'I', title: 'Industriels agroalimentaires', body: 'Cuisines centrales, transformation, conditionnement, sites de production avec process froid.', tags: ['Process critique', 'Décret Tertiaire', 'CEE éligibles'] },
  ],
};

export const comparison = {
  label: 'La différence',
  title: 'Pourquoi Altileo plutôt qu’un intégrateur généraliste ?',
  columns: [
    { name: 'Altileo', subtitle: 'Spécialiste froid', highlighted: true },
    { name: 'Integrateurs généralistes', subtitle: 'Acteurs historiques du CVC', highlighted: false },
    { name: 'Plateformes IA tertiaires', subtitle: 'Plateformes logicielles tertiaires', highlighted: false },
  ],
  rows: [
    { criterion: 'Spécialisation froid', values: ['Exclusivement', 'Multi-domaines', 'CVC tertiaire'] },
    { criterion: 'Audit instrumente avant déploiement', values: ['Inclus', 'Devis sur cahier des charges', 'Module additionnel'] },
    { criterion: 'Stockage PCM intégré', values: ['Partenariat fabricant français', 'Non', 'Non'] },
    { criterion: 'Modularite par couche', values: ['Vous payez ce qui marché', 'Solution complète obligatoire', 'Logiciel uniquement'] },
    { criterion: 'Conformité Décret BACS', values: ['Clé en main', 'Avec configuration', 'Périmètre logiciel'] },
  ],
};

export const bacs = {
  pill: 'Décret BACS · Échéance 2026',
  title: 'Etes-vous concerné par le Décret BACS ?',
  body: 'Si vos installations frigorifiques dépassent 70 kW de puissance et sont dans un bâtiment tertiaire, le Décret BACS impose un système d’automatisation et de contrôle. Diagnostic en 3 questions, gratuit, instantané.',
  bullets: ['Résultat immédiat', 'Aucune donnée commerciale demandée pour le diagnostic', 'Reponse personnalisée selon votre situation'],
};

export const pcm = {
  pill: 'Partenariat exclusif',
  title: 'Le stockage thermique, fabriqué en France.',
  body: 'Altileo travaille en partenariat exclusif avec un fabricant français de matériaux à changement de phase (PCM/MCP). Cette collaboration nous permet de déployer du stockage thermique haute performance, fabriqué en France, à des conditions exclusives — là où la majorité du marché importe.',
  bullets: [
    { strong: 'Durée de vie 15-20 ans', body: 'contre 7-10 ans pour les batteries lithium' },
    { strong: 'Maintenance quasi-nulle', body: 'pas de cycles de recharge a gérer' },
    { strong: 'Fabrication française', body: 'éligible CEE et bonus souveraineté' },
  ],
  synergy: {
    label: 'Synergie solaire × PCM × pilotage',
    body: 'Couplée à l’autoconsommation photovoltaïque, la solution atteint son plein potentiel : l’Altileo Box stocke le froid dans les plaques PCM pendant les pics d’ensoleillement (énergie gratuite) et coupe le compresseur lors des pointes tarifaires du matin et du soir. Stockage thermique, algorithme et solaire travaillent ensemble.',
  },
};

export const team = {
  label: 'L’équipe',
  title: 'Quatre ingénieurs électriciens, passionnés de froid.',
  body: 'Pas de couches managériales. Pas de commerciaux qui ne connaissent pas la physique. Quand vous parlez a Altileo, vous parlez a l’ingénieur qui auditera et déploiera sur votre site.',
  members: [
    { name: '[Prénom Nom]', role: 'Co-fondateur · Audit et instrumentation', bio: '[Bref bio]', photo: null as string | null },
    { name: '[Prénom Nom]', role: 'Co-fondateur · Automatisation', bio: '[Bref bio]', photo: null as string | null },
    { name: '[Prénom Nom]', role: 'Co-fondateur · Stockage thermique', bio: '[Bref bio]', photo: null as string | null },
    { name: '[Prénom Nom]', role: 'Co-fondateur · Deploiement et SAV', bio: '[Bref bio]', photo: null as string | null },
  ],
};

export const finalCta = {
  title: 'On commence toujours\npar mesurer.',
  body: 'Audit instrumente de vos installations frigorifiques. Quatre semaines. Rapport chiffré complet. On avance par étapes sûres : on ne déploie que lorsque le gain est clair, mesuré et prouvé sur votre site.',
  primaryCta: 'Demander un audit énergétique',
  secondaryCta: 'Parler a un ingénieur',
  signals: ['Reponse sous 48h', 'Audit en 4 semaines', 'Sans engagement'],
};

export const competences = {
  hero: {
    pill: 'L’ingénierie derrière Altileo',
    title: 'Quand vous nous confiez vos installations, vous parlez a des ingénieurs.',
    body: 'Altileo n’est pas une coquille logicielle posée sur du matériel acheté. Notre équipe conçoit les armoires, calcule les sections de câbles, dessine les schémas, intégré l’automatisme et garantit la conformité. C’est cette profondeur technique qui rend nos déploiements cold-chain fiables et durables.',
  },
  why: {
    title: 'Pourquoi cette profondeur compte pour vous.',
    body: 'Une optimisation énergétique mal câblée detruit son propre ROI. Une armoire mal dimensionnee cree des pannes en pleine campagne. Un dégivrage mal pilote peut compromettre votre stock. Avoir des ingénieurs qui maîtrisent la chaîne complète - de la mise a la terre au pilotage prédictif - c’est ce qui separe un déploiement qui dure de celui qui revient en SAV tous les six mois.',
  },
  capabilities: [
    { icon: 'A', title: 'Audit énergétique instrumenté', body: 'Mesure précise sur site (consommation, températures, humidité, ouvertures de portes, cycles de dégivrage). Analyse des données, identification chiffrée des pertes, plan d’action priorisable par ROI.', example: 'Audit instrumenté d’un site grossiste — identification des sources principales de surconsommation et chiffrage des économies réalisables couche par couche.' },
    { icon: 'C', title: 'Conception électrique et thermique', body: 'Études électriques BT, dimensionnement, spécifications techniques d’armoires de pilotage, schémas, plans d’implantation. Conception thermique : bilans, dimensionnement, optimisation des cycles.', example: 'Conception et redlining d’un schéma d’armoire 230V/24V pour pilotage frigorifique multi-zones, avec calcul des sections câbles et coordination des protections.' },
    { icon: 'I', title: 'Instrumentation et capteurs IoT', body: 'Sélection, spécification et intégration de capteurs (température, humidité, courant, ouverture de portes). Architecture du réseau IoT, passerelles, remontée des données vers la plateforme.', example: 'Intégration de cartes d’acquisition PT100 et capteurs de courant côté primaire et secondaire, avec remontée temps réel sur dashboard.' },
    { icon: 'P', title: 'Pilotage adaptatif et automatisme', body: 'Algorithmes de modulation des compresseurs (commande VFD), points de consigne adaptatifs, optimisation des cycles de dégivrage à la demande, intégration BMS/GTB.', example: 'Commande VFD du compresseur sur la base des données temps réel des capteurs PT100, avec déclenchement à la demande des cycles de dégivrage.' },
    { icon: 'T', title: 'Stockage thermique PCM', body: 'Étude, dimensionnement et intégration de stockage par matériaux à changement de phase. Couplage avec le pilotage pour décalage de charge aux heures creuses.', example: 'Dimensionnement d’une réserve PCM pour décalage de la consommation aux heures creuses, en partenariat avec un fabricant français.' },
    { icon: 'D', title: 'Plateforme logicielle et dashboard', body: 'Dashboard web et mobile en temps réel, alertes, exports réglementaires (OPERAT), historisation des données, monitoring 24/7. Hébergement européen, propriété des données au client.', example: 'Plateforme de monitoring déployée sur un site Rungis avec accès mobile pour le gérant et le frigoriste, alertes automatiques sur dérive de température.' },
    { icon: 'O', title: 'Gestion de projet et coordination', body: 'Pilotage du projet de bout en bout, planning, coordination des intervenants techniques, supervision des travaux, mise en service. Vous avez un seul interlocuteur.', example: 'Coordination complète d’un déploiement : planning, suivi des intervenants, tests fonctionnels, mise en service, formation utilisateurs.' },
    { icon: 'R', title: 'Conseil réglementaire', body: 'Diagnostic Décret BACS, accompagnement Décret Tertiaire (reporting OPERAT), anticipation règlement F-Gas. Mise en relation avec les bons interlocuteurs si besoin.', example: 'Diagnostic BACS d’un site grossiste, plan de mise en conformité chiffré, accompagnement reporting OPERAT.' },
    { icon: 'V', title: 'Suivi de performance et SAV logiciel', body: 'Monitoring continu après déploiement, alertes sur dérive de performance, reporting mensuel, ajustements à distance, support téléphonique.', example: 'Monitoring 24/7 du site pilote depuis sa mise en service, ajustements distants des consignes selon les saisons et les volumes stockés.' },
  ],
  process: {
    title: 'Quatre étapes, du brief a l’exploitation.',
    body: 'Chaque mission suit le même processus rigoureux. Vous savez a chaque étape ce qui est livre, qui est responsable, et quand.',
    steps: [
      { number: '01', title: 'Audit & cadrage', body: 'Visite sur site, mesures, lecture des installations existantes. Note de cadrage chiffrée avec périmètre, livrables et planning.' },
      { number: '02', title: 'Etude & conception', body: 'Schemas, calculs, dimensionnement, choix matériel. Validation technique avant tout achat ou fabrication.' },
      { number: '03', title: 'Fabrication & déploiement', body: 'Armoires en interne, intégration sur site, câblage, parametrage. Tests fonctionnels avant mise en service.' },
      { number: '04', title: 'Mise en service & suivi', body: 'Mise en route, formation utilisateurs, dossier d’exploitation. Support technique et SAV sous contrat.' },
    ],
  },
  guarantees: {
    title: 'Ce sur quoi nous nous engageons.',
    body: 'On ne fait pas tout. Ce qu’on livre, on le garantit. Ce qu’on ne fait pas, on le coordonne avec des intervenants compétents et on en pilote la qualité.',
    items: [
      { label: 'On avance par étapes sûres', body: 'Le diagnostic est gratuit et l’audit chiffre précisément le potentiel de votre site. On ne déploie que lorsque le gain est clair, mesuré et prouvé — et on vous le dit franchement s’il ne l’est pas. Pas de sur-vente, pas de pari.' },
      { label: 'Méthode transparente', body: 'Mesure avant et après, données accessibles 24/7, exports possibles à tout moment. Pas de boîte noire, pas de chiffres marketing.' },
      { label: 'Documentation complète', body: 'Rapport d’audit, spécifications, schémas, notices, DOE — tout est documenté et vous appartient. Si demain vous changez de prestataire, votre site reste pleinement exploitable.' },
      { label: 'Un seul interlocuteur', body: 'Du cadrage au SAV, vous parlez aux mêmes ingénieurs. Pas de chaîne diluée, pas de renvoi de balle entre prestataires.' },
    ],
  },
  cta: {
    title: 'Une question technique précise ?',
    body: 'Decrivez votre besoin en quelques lignes. Un de nos ingénieurs vous repond sous 48 heures avec une premiere analyse - gratuite, sans engagement.',
  },
};

export const entreprise = {
  hero: {
    pill: 'Basés à Paris · Spécialistes du froid',
    title: 'Une équipe d’ingénieurs spécialistes du froid.',
    body: 'Altileo est porte par quatre ingénieurs électriciens et thermiciens. Nous concevons, calculons, déployons et garantissons des systèmes d’optimisation énergétique pour la chaîne du froid - sur des sites réels, avec des économies vérifiées. Pas de promesses marketing. Pas de boîtes noires. Du travail d’ingénieur, livre proprement.',
  },
  mission: {
    title: 'Réduire définitivement le coût énergétique du froid en France.',
    body1: 'Le froid alimentaire et logistique consomme entre 7% et 10% de l’électricité française. Sur les sites que nous auditons, 30 à 40 % de cette consommation est tout simplement gaspillée - dans des cycles mal calibrés, des équipements sur-dimensionnes, des pertes par mauvais réglages, des dégivrages aux mauvais moments.',
    body2: 'Notre mission n’est pas « sauver la planete » - c’est rendre l’efficacite énergétique du froid accessible, mesurable, et bancable. Un site a la fois. Avec des chiffrés vérifiés par compteur, pas par marketing.',
    kpis: [
      { value: '30-40%', label: 'économies vérifiées sur les sites déployés' },
      { value: '< 18 mois', label: 'ROI cible avant tout déploiement' },
      { value: '100%', label: 'des couches livrees evaluees par mesure' },
      { value: 'FR', label: 'ingénierie, fabrication, hébergement' },
    ],
  },
  context: {
    title: 'Le bon marché, le bon moment.',
    body: 'Trois forces convergent en 2025-2027. Les grossistes et logisticiens du froid ont 18 mois pour s’adapter - ou subir.',
    drivers: [
      { eyebrow: 'Reglementation', title: 'Décret BACS · Décret Tertiaire', body: 'Toute installation frigorifique supérieure à 70 kW dans un bâtiment tertiaire doit être équipée d’un système d’automatisation et de contrôle. Échéance retrofit : 2027. Reporting OPERAT obligatoire dès maintenant.' },
      { eyebrow: 'Prix de l’énergie', title: 'Une facture qui ne baisse plus', body: 'Le tarif réglementé a double entre 2021 et 2024. Pour un grossiste de 1500 m², la facture froid passe de 40 a 80 k€ par an. L’efficacite n’est plus une option, c’est une condition de survie.' },
      { eyebrow: 'Gaz frigorigènes', title: 'Sortie progressive des HFC', body: 'Le règlement F-Gas impose la réduction puis l’interdiction de nombreux fluides actuels d’ici 2030. Chaque rénovation d’installation est l’occasion d’optimiser - ou de payer deux fois.' },
    ],
  },
  principles: {
    title: 'Quatre principes, simples et tenus.',
    body: 'Pas de « valeurs d’entreprise » déclamatoires. Quatre règles opérationnelles que nous appliquons a chaque mission.',
    items: [
      { title: 'On mesure avant de promettre.', body: 'Aucun engagement chiffré ne sort de notre bouche sans audit instrumente préalable. On avance par étapes sûres : on ne déploie que lorsque le gain est clair, mesuré et prouvé sur votre site — et on vous le dit franchement s’il ne l’est pas.' },
      { title: 'On conçoit en interne, on engage notre responsabilite.', body: 'Chaque schéma, chaque calcul, chaque armoire est conçu, dimensionne et valide par nos ingénieurs. Nos sous-traitants executent sous nos plans. Vous parlez a un seul interlocuteur, du cadrage au SAV.' },
      { title: 'On vend ce qui a un ROI.', body: 'Notre méthode est modulaire. On déploie uniquement les couches qui s’amortissent en moins de 18 mois sur votre site specifique. Pas de sur-vente, pas de sur-équipement.' },
      { title: 'On documente tout, en clair.', body: 'Schemas, calculs, notices d’exploitation, DOE - chaque livrable est complet et compréhensible. Si demain vous changez de prestataire, votre site reste exploitable. Pas de dépendance artificielle.' },
    ],
  },
  team: {
    title: 'Une équipe d’ingénieurs, accessible.',
    body1: 'Altileo est porté par quatre ingénieurs électriciens et thermiciens. Études électriques BT, automatisme industriel, ingénierie frigorifique, déploiement sur site.',
    body2: 'Quand vous nous écrivez, vous parlez directement à l’un des fondateurs. Pas à un commercial, pas à un junior, pas à un sous-traitant.',
    body3: 'C’est tout ce qu’il y a à savoir avant de prendre contact.',
    roles: [
      { icon: 'E', title: 'Études électriques', body: 'Schémas, dimensionnement, calculs de charge et de court-circuit. Maîtrise des normes NF C 15-100 et NF C 13-100.' },
      { icon: 'A', title: 'Automatisme & instrumentation', body: 'Capteurs IoT, contrôleurs programmables, commande VFD, passerelles, intégration BMS/GTB.' },
      { icon: 'F', title: 'Ingénierie frigorifique', body: 'Bilans thermiques, dimensionnement des groupes, optimisation des cycles, stockage PCM.' },
      { icon: 'D', title: 'Déploiement & SAV', body: 'Mise en service, formation utilisateurs, suivi de performance, intervention rapide en cas d’anomalie.' },
    ],
  },
  location: {
    title: 'Basés à Paris, intervenons partout en France.',
    body: 'Notre ancrage parisien nous met a quelques kilometres du MIN de Rungis - le plus grand marché de gros d’Europe - et au cœur de l’écosystème logistique francilien. Nous nous déplaçons sur tout le territoire pour les missions qui le justifient.',
    zones: [
      'Île-de-France - intervention sous 48h',
      'Lyon, Marseille, Lille, Bordeaux - déplacement programme',
      'France entiere - audit instrumente sur devis',
      'Suivi a distance - dashboard accessible 24/7',
    ],
  },
  cta: {
    title: 'On commence par un audit.',
    body: 'Le meilleur moyen de savoir si Altileo a sa place chez vous, c’est de mesurer. Audit instrumente en 4 semaines, rapport chiffré complet, sans engagement.',
  },
};

export const faqGroups = [
  {
    title: 'L’audit énergétique',
    items: [
      {
        q: 'Combien coûte un audit énergétique ?',
        a: 'L’audit instrumenté coûte entre 5 000 € et 7 000 € selon la taille du site et le nombre de zones froides. Cela inclut : visite sur site, pose des capteurs de mesure pendant 4 à 6 semaines, analyse des données, et un rapport écrit chiffré avec les pertes identifiées et les économies réalisables.\n\nSi vous déployez ensuite la méthode complète chez vous, le coût de l’audit est déduit du déploiement. Le diagnostic préalable, lui, est gratuit et sans engagement.',
      },
      {
        q: 'Combien de temps prend un audit ?',
        a: 'Quatre à six semaines au total. Une journée sur site pour la posé des capteurs, 4 semaines de mesures continues sans intervention de votre part, puis 1 à 2 semaines d’analyse et de rédaction du rapport. Vous recevez le rapport final en main propre lors d’un rendez-vous de restitution.',
      },
      {
        q: 'Qu’est-ce que je reçois à la fin de l’audit ?',
        a: 'Un rapport écrit complet contenant : le bilan énergétique détaillé par zone froide, l’identification des sources de pertes (cycles de dégivrage, mauvais réglages, surdimensionnement, ouvertures de portes), un chiffrage précis des économies réalisables couche par couche, le ROI estimé pour chaque option, et notre recommandation de déploiement. Tout est documenté, vous pouvez utiliser ce rapport avec n’importe quel autre prestataire.',
      },
      {
        q: 'Que se passe-t-il si l’audit ne révèle pas d’économies suffisantes ?',
        a: 'Le diagnostic est gratuit et sans engagement : il nous dit précisément ce que votre site peut économiser. Sur les sites froid alimentaire et logistique que nous auditons, le potentiel est presque toujours au rendez-vous. Si ce n’était pas le cas, on vous le dirait franchement et on n’irait pas plus loin — on avance par étapes sûres, on ne déploie que lorsque le gain est clair et prouvé. Vous gardez le rapport, qui peut servir d’état des lieux pour vos obligations réglementaires (Décret Tertiaire, reporting OPERAT).',
      },
    ],
  },
  {
    title: 'Le déploiement',
    items: [
      {
        q: 'Combien de temps prend un déploiement complet ?',
        a: 'Entre 3 et 6 mois selon les couches retenues. Couches 1 à 4 (audit, capteurs, automatisation, dégivrage) : 2 à 3 mois. Ajout de la couche 5 (stockage PCM) : 2 à 3 mois supplémentaires. Le déploiement est progressif : chaque couche commence à générer des économies dès sa mise en service.',
      },
      {
        q: 'Faut-il arrêter mon activité pendant l’installation ?',
        a: 'Non. Tous nos travaux sont planifiés pour ne pas interrompre votre activité. Pose des capteurs et câblage : en dehors des heures de pic, par phases. Mise en place de l’armoire de pilotage : une coupure courte planifiée à l’avance avec votre frigoriste. Stockage PCM : installé sans interruption du froid (couplage en parallèle).',
      },
      {
        q: 'Faut-il remplacer mes équipements existants ?',
        a: 'Dans 95 % des cas, non. Notre méthode est conçue pour s’intégrer aux installations existantes : groupes froids, évaporateurs, condenseurs, automates. Nous ajoutons une couche d’instrumentation et de pilotage qui optimise le fonctionnement sans remplacer le matériel sain. Si l’audit révèle qu’un équipement est en fin de vie ou surdimensionné, nous vous le disons — mais c’est votre décision.',
      },
      {
        q: 'Quels sont les risques pour mes stocks pendant l’installation ?',
        a: 'Sur notre déploiement pilote, aucune perte de chaîne du froid pendant les phases de travaux. Notre processus inclut : une analyse de risque préalable, un plan de coupure validé par votre frigoriste, des températures monitorées en continu pendant les travaux, et un protocole de secours si un équipement critique posé problème. La sécurité alimentaire reste votre responsabilité, mais nous travaillons en respectant strictement vos plans HACCP.',
      },
      {
        q: 'Comment se déroule l’installation ?',
        a: 'Quatre phases : (1) cadrage technique avec votre équipe et votre frigoriste, (2) fabrication de l’armoire en interne dans nos locaux (3 à 5 semaines), (3) intervention sur site pour posé, câblage et mise en service (3 à 5 jours), (4) période de réglage et de tuning (2 à 4 semaines avec ajustements à distance). Vous avez un seul interlocuteur pendant toute la durée du projet.',
      },
    ],
  },
  {
    title: 'Les économies et le ROI',
    items: [
      {
        q: 'Comment vérifiez-vous les économies promises ?',
        a: 'Mesure avant et après par compteurs énergétiques dédiés, installés sur les arrivées électriques de vos installations frigorifiques. Les valeurs sont enregistrées 24/7 et accessibles dans votre dashboard. La période de référence (avant) est mesurée sur 4 semaines minimum. Après déploiement, les économies sont comparées à cette baseline avec ajustement pour les conditions extérieures (température, saisonnalité, volumes). Tout est transparent.',
      },
      {
        q: 'Que se passe-t-il si les économies promises ne se réalisent pas ?',
        a: 'Notre engagement est contractuel. Si les économies réelles mesurées sur 12 mois sont inférieures de plus de 20 % à ce qui était prévu dans l’audit, nous intervenons gratuitement pour comprendre l’écart et corriger — réglages, capteurs supplémentaires, ajustement des consignes. Dans les cas extrêmes où l’écart dépasse 30 %, nous remboursons une partie du déploiement selon les conditions du contrat.',
      },
      {
        q: 'En combien de temps amortit-on l’investissement ?',
        a: 'Notre cible est systématiquement un ROI sous 18 mois sur les couches retenues. Sur les sites où nous avons déployé la méthode complète (5 couches), le ROI moyen est entre 12 et 16 mois. Les couches à ROI rapide (capteurs + automatisation, 6 à 12 mois) sont déployées en priorité. Le stockage PCM a un ROI plus long (24 à 36 mois) mais une durée de vie de 15 à 20 ans.',
      },
      {
        q: 'Qui possède les données de mes installations ?',
        a: 'Vous. Toutes les données collectées sur votre site (consommations, températures, économies) vous appartiennent. Vous y avez accès 24/7 via votre dashboard. Vous pouvez les exporter à tout moment. Nous les utilisons uniquement pour piloter votre système et pour notre R&D agrégée — jamais partagées avec un tiers, jamais vendues. Hébergement en France.',
      },
    ],
  },
  {
    title: 'La conformité réglementaire',
    items: [
      {
        q: 'Comment savoir si je suis concerné par le Décret BACS ?',
        a: 'Vous êtes concerné si vos installations frigorifiques dépassent 70 kW de puissance installée ET sont dans un bâtiment tertiaire (entrepôt, bureaux, locaux commerciaux — mais pas un bâtiment purement industriel). Échéance pour le retrofit : 2027. Notre diagnostic en 3 questions sur la page d’accueil vous donne une réponse immédiate. Si vous voulez une analyse plus précise, l’audit la fournit.',
      },
      {
        q: 'Votre solution couvre-t-elle aussi le Décret Tertiaire ?',
        a: 'Oui. Notre dashboard exporte automatiquement les consommations annuelles au format requis pour le reporting OPERAT (plateforme ADEME). Vous pouvez déclarer en quelques clics. Nous accompagnons aussi les sites qui doivent prouver leurs réductions par rapport à l’année de référence (10 %, 20 %, 30 % selon les seuils 2030/2040/2050).',
      },
      {
        q: 'Êtes-vous compatibles avec les nouvelles règles F-Gas ?',
        a: 'Notre méthode est neutre vis-à-vis du fluide frigorigène. Que vos installations utilisent du R-404A, R-134a, R-744 (CO₂) ou de l’ammoniac, notre instrumentation et notre pilotage fonctionnent. Lors de l’audit, nous identifions les équipements aux fluides en sortie de phase (R-404A notamment) et nous intégrons cette donnée dans le plan de modernisation. Cela vous permet d’anticiper plutôt que de subir.',
      },
    ],
  },
  {
    title: 'Le contrat et la maintenance',
    items: [
      {
        q: 'Quelle est la durée d’engagement ?',
        a: 'Le déploiement initial (matériel + armoire + mise en service) est un achat ferme, sans engagement de durée côté matériel. L’abonnement au pilotage et au dashboard est mensuel, résiliable avec un préavis de 3 mois. Pas de contrat verrouillé sur 5 ans, pas de pénalité cachée. Notre objectif est que vous restiez parce que ça marché, pas parce que vous êtes piégé.',
      },
      {
        q: 'Que devient le système si je ne renouvelle pas l’abonnement ?',
        a: 'Les capteurs, l’armoire de pilotage et le matériel restent installés sur votre site — ils vous appartiennent. Le pilotage automatique se réduit aux fonctions de base programmées localement. Vous perdez l’accès au dashboard cloud, au pilotage avancé et au support à distance. Vos données historiques vous sont remises avant la clôture du compte. Vous pouvez redémarrer plus tard ou changer de prestataire — votre site reste exploitable.',
      },
      {
        q: 'Quel SAV proposez-vous ?',
        a: 'Trois niveaux : (1) monitoring continu — nous détectons les anomalies souvent avant vous et vous alertons, (2) support à distance par téléphone et accès sécurisé à votre installation pour interventions logicielles, (3) objectif d’intervention sous 48h en Île-de-France, sous 5 jours ouvrés en région. Le SAV matériel est coordonné avec nos partenaires techniques. Inclus dans l’abonnement.',
      },
      {
        q: 'Que se passe-t-il si Altileo cesse son activité ?',
        a: 'Question légitime. Deux protections concrètes : (1) le matériel installé vous appartient et continue à fonctionner localement même sans la plateforme cloud, (2) notre stack technique repose sur des standards ouverts (Modbus, RS485, MQTT, Postgres) — n’importe quel intégrateur peut reprendre l’exploitation à partir de la documentation que nous vous remettons. Vos données historiques vous sont restituées à tout moment. Vous n’êtes jamais coincé.',
      },
    ],
  },
];

export const faqHighlights = [
  {
    q: 'Combien coûte un audit énergétique ?',
    a: 'Entre 5 000 € et 7 000 € selon la taille du site. Si vous déployez ensuite la méthode, le coût de l’audit est déduit. Le diagnostic préalable, lui, est gratuit et sans engagement.',
  },
  {
    q: 'Que se passe-t-il si vous ne trouvez pas d’économies ?',
    a: 'Vous gardez le rapport complet, qui peut servir d’état des lieux pour vos obligations réglementaires. On avance par étapes sûres : on ne déploie que lorsque le gain est clair et prouvé.',
  },
  {
    q: 'Combien de temps avant que je sois recontacté ?',
    a: 'Sous 48 heures par un de nos ingénieurs. Pas de commercial intermédiaire, pas de chatbot. La première analyse téléphonique est gratuite et sans engagement.',
  },
  {
    q: 'Faut-il arrêter mon activité pendant l’installation ?',
    a: 'Non. Tous nos travaux sont planifiés en dehors des heures de pic, par phases. Aucune perte de chaîne du froid sur nos déploiements depuis 18 mois.',
  },
  {
    q: 'Et si je ne renouvelle pas l’abonnement ?',
    a: 'Le matériel installé vous appartient et reste sur site. Vous perdez le dashboard cloud et le support à distance, mais l’installation continue de fonctionner. Pas de verrouillage.',
  },
];

export const commentCaMarche = {
  hero: {
    pill: 'Comment ça marché',
    title: 'Votre chambre froide est une réserve de froid. On l’exploite.',
    body: 'Une fois en température, la masse des produits stockés garde le froid pendant plusieurs heures sans que le compresseur tourne. L’Altileo Box exploite cette inertie thermique pour concentrer le fonctionnement du compresseur sur les heures les moins chères — sans jamais rompre la chaîne du froid.',
  },
  principe: {
    label: 'Le principe',
    title: 'L’inertie thermique, votre volant d’énergie',
    body: 'Thermodynamiquement, une chambre froide est un stock de froid. La marchandise à cœur agit comme un volant thermique naturel : coupez le compresseur, la température ne dérive que très lentement. Sur notre pilote au MIN de Rungis, après 3 h 52 de coupure totale, la dérive n’a été que de +0,21 °C par heure. C’est cette physique, mesurée sur site, qui rend le délestage possible sans risque.',
  },
  etapes: [
    {
      number: '01',
      title: 'Mesurer',
      body: 'La Box analyse en continu la température au cœur des produits (sonde PT100, précision ±0,15 °C) et la consommation réelle du groupe (pince ampèremétrique, Modbus RS485). Tout remonte au cloud via 4G intégrée.',
    },
    {
      number: '02',
      title: 'Décider',
      body: 'Chaque jour, le moteur d’optimisation récupère les prix horaires du lendemain et calcule le profil de délestage optimal selon l’inertie modélisée de votre site. Il identifie les heures les plus chères et y programme les arrêts du groupe.',
    },
    {
      number: '03',
      title: 'Agir',
      body: 'La Box coupe et redémarre le compresseur aux moments optimaux, en dehors de vos heures d’activité. L’inertie thermique de la marchandise garantit le maintien en température pendant les phases de délestage.',
    },
  ],
  hardware: {
    label: 'Le hardware embarqué',
    title: 'Un boîtier industriel, posé sans toucher à votre installation',
    items: [
      { title: 'Automate industriel', body: 'ESP32 avec modem 4G intégré. Cerveau embarqué, connexion cellulaire autonome vers le cloud.' },
      { title: 'Compteur d’énergie', body: 'Modbus RS485 avec pince ampèremétrique. Mesure de la consommation réelle du groupe frigorifique.' },
      { title: 'Sonde température', body: 'PT100 filaire industrielle, placée au cœur des produits. Précision ±0,15 °C.' },
      { title: 'Coffret IP65', body: 'Boîtier étanche pour posé en environnement industriel, à côté du tableau électrique.' },
    ],
    install: 'Installation en une demi-journée, coffret posé hors chambre froide, sans perçage sur les zones froides. Un simple fil basse tension relie la Box au régulateur du groupe (bornes standards, ex. Danfoss). Aucune modification du circuit haute tension, compatible avec la plupart des groupes et régulateurs du marché.',
  },
  cloud: {
    label: 'Altileo Cloud',
    title: 'Le cerveau prédictif, dans le cloud',
    body: 'La Box exécute, mais c’est le cloud qui décide. Le moteur d’optimisation Altileo Cloud récupère chaque jour les prix horaires du lendemain, les croise avec l’inertie thermique modélisée de votre site et vos contraintes d’exploitation, puis calcule le profil de délestage optimal. Ce profil est injecté dans la Box, qui pilote l’installation. C’est ce qui sépare Altileo d’un simple programmateur : un algorithme qui anticipe, plutôt qu’une horloge qui répète.',
  },
  securite: {
    label: 'Les garanties de sécurité',
    title: 'La chaîne du froid, jamais compromise',
    items: [
      {
        title: 'Surveillance HACCP permanente',
        body: 'La sonde mesure la température au cœur des produits en continu. Si un seuil critique est atteint (ex. −16 °C pour un surgelé réglementé à −18 °C), la Box réveille immédiatement le compresseur — quelle que soit l’heure tarifaire — et envoie une alerte. La sécurité alimentaire prévaut toujours sur l’économie.',
      },
      {
        title: 'Bypass matériel fail-safe',
        body: 'La Box n’intercepte que le signal de commande basse tension, jamais le circuit d’alimentation. En cas de panne, de coupure ou de perte réseau, le groupe frigorifique reprend automatiquement son fonctionnement normal sous le contrôle de son régulateur d’origine. Le circuit de commande d’origine n’est jamais rompu.',
      },
    ],
  },
  cta: {
    title: 'Envie de savoir ce que votre site peut délester ?',
    body: 'Chaque installation est différente. Un diagnostic d’éligibilité mesure l’inertie de vos chambres froides et chiffré les économies réalisables — sans engagement.',
  },
};

export const tarifDynamique = {
  hero: {
    pill: 'Marché de l’électricité',
    title: 'La tarification dynamique : une nouvelle façon de payer votre électricité.',
    body: 'Le marché de l’électricité s’ouvre. Depuis 2026, la tarification dynamique — un prix qui suit heure par heure le marché de gros — devient accessible aux professionnels français. Pour un site capable de décaler sa consommation, c’est un levier d’économies inédit. Vos chambres froides, elles, sont naturellement flexibles.',
  },
  contexte: {
    label: 'Ce qui change',
    title: 'Le cadre réglementaire s’ouvre en 2026',
    body: 'Historiquement marginale en France, la tarification dynamique change de statut. Depuis juillet 2026, seules les offres indexées directement sur les prix de gros sont considérées comme dynamiques, et les grands fournisseurs (plus de 200 000 clients) ont désormais l’obligation d’en proposer. Résultat : un marché qui s’élargit, avec de plus en plus d’offres exposées au prix réel de l’électricité. Cette bascule est déjà la norme en Europe du Nord.',
  },
  mecanisme: {
    label: 'Comment ça marché',
    title: 'Le prix se fixe chaque jour, heure par heure',
    body: 'Chaque jour avant midi, producteurs et fournisseurs soumettent offres et besoins pour le lendemain. La bourse européenne calcule un prix d’équilibre pour chacune des 24 heures : c’est le marché « day-ahead ». Les sources les moins chères (nucléaire, renouvelables) sont mobilisées en premier ; quand le vent souffle et que le soleil brille, les prix plongent, parfois jusqu’à devenir négatifs. Les pointes, elles, se concentrent le matin et le soir.',
    stat1Value: '~159 €/MWh',
    stat1Caption: 'écart typique entre l’heure la moins chère et la plus chère d’une même journée (données marché juillet 2026)',
    stat2Value: 'chaque jour',
    stat2Caption: 'cet écart se répète, ce qui rend le décalage de consommation économiquement intéressant',
  },
  scenarios: {
    label: 'Deux scénarios pour vos chambres froides',
    title: 'Vous choisissez le contrat. Altileo pilote la flexibilité.',
    body: 'Altileo ne vend pas d’électricité et ne vous impose aucun fournisseur : vous restez libre de votre contrat. Notre rôle est technique — piloter vos groupes frigorifiques pour concentrer la consommation aux bonnes heures. Selon le contrat que vous choisissez, le gain diffère.',
    items: [
      {
        tag: 'Scénario 1',
        title: 'Vous gardez votre contrat HP/HC',
        value: '~20%',
        body: 'Vous conservez votre contrat réglementé actuel. L’Altileo Box concentre le délestage sur les heures pleines les plus chères. Économie mesurée sur notre pilote : environ 20 % sur la facture d’électricité du froid.',
      },
      {
        tag: 'Scénario 2',
        title: 'Vous passez à un contrat dynamique',
        value: '~30%',
        body: 'Vous souscrivez une offre indexée au marché (le choix du fournisseur vous appartient). L’algorithme exploite la volatilité horaire : délestage aux pointes, consommation aux creux. Économie estimée : jusqu’à ~30 % sur la facture.',
        featured: true,
      },
    ],
  },
  flexibilite: {
    label: 'Pourquoi le froid est idéal',
    title: 'La tarification dynamique récompense la flexibilité. Le froid en a à revendre.',
    body: 'Une offre dynamique sans flexibilité n’a que peu d’intérêt : un site qui consomme de façon constante 24 h/24 subit les pointes sans pouvoir les éviter. C’est justement là qu’Altileo intervient. Grâce à l’inertie thermique de vos chambres froides, on peut couper le compresseur pendant les heures chères et le relancer pendant les heures bon marché, sans jamais rompre la chaîne du froid. Votre flexibilité devient une source d’économies.',
    caveat: 'La tarification dynamique expose au marché : sans pilotage, le risque existe autant que l’opportunité. C’est pourquoi un audit préalable de votre courbe de charge est indispensable avant de basculer — pour vérifier que le gain est réel sur votre site précis.',
  },
  cta: {
    title: 'Votre site est-il éligible à la tarification dynamique ?',
    body: 'Notre diagnostic étudie votre courbe de charge, l’inertie de vos chambres et vos contraintes d’exploitation, puis chiffré l’économie réalisable selon chaque scénario — avant tout engagement.',
  },
};

export const etudeDeCas = {
  hero: {
    pill: 'Étude de cas pilote · MIN de Rungis',
    title: 'Un entrepôt frigorifique négatif, piloté pendant 12 mois.',
    body: 'Un négociant grossiste en fruits et légumes au Marché International de Rungis a confié à Altileo le pilotage de sa chambre froide négative — le cas le plus exigeant en sécurité sanitaire et en consommation. Données mesurées sur site pendant 12 mois, simulation sur prix Spot réels 2025.',
    kpis: [
      { label: 'Économie annuelle', value: '2 442 €', caption: '−35 % vs contrat HC/HP actuel', color: 'success' as const },
      { label: 'Retour sur investissement', value: '~7,4 mois', caption: 'installation 1 500 €', color: 'white' as const },
      { label: 'Énergie économisée', value: '9 085 kWh', caption: '0,45 t CO₂/an évitée', color: 'brand' as const },
      { label: 'Conformité HACCP', value: '100 %', caption: '−16,97 °C max simulé', color: 'success' as const },
    ],
  },
  site: {
    label: 'Le site',
    title: 'La chambre la plus exigeante du site',
    body: 'Le pilote a été déployé sur la chambre froide négative (−18 °C, 75 m³) : congélation de surgelés, le cas le plus critique en sécurité sanitaire comme en consommation électrique.',
    specs: [
      { param: 'Type', value: 'Congélation (négatif surgelés)' },
      { param: 'Consigne', value: '−18 °C (plage −18 °C à −21 °C)' },
      { param: 'Volume utile', value: '~75 m³ (30 m², hauteur 2,5 m)' },
      { param: 'Groupe froid', value: 'Triphasé 400 V / 32 A, ~6,5 kW (cos φ = 0,92)' },
      { param: 'Régulateur', value: 'Danfoss AK-CC 210 (coffret PEGO)' },
      { param: 'Limite HACCP', value: '−15 °C (Règlement CE 853/2004)' },
      { param: 'Limite contractuelle Altileo', value: '−16 °C (marge de sécurité de 1 °C)' },
    ],
    contrainte: 'Le site travaille de 02h à 12h (portes ouvertes). Le délestage Altileo ne s’active que de 12h à 02h — portes fermées, inertie thermique maximale.',
  },
  tests: {
    label: 'Les deux tests de délestage',
    title: 'Mesuré sur le terrain : Smart vs Shield',
    body: 'Deux tests approfondis ont mesuré le comportement thermique de la chambre, avec et sans matériaux à changement de phase (MCP).',
    rows: [
      { test: 'Smart (sans MCP)', date: '30/03', duree: '6h 55m', coeur: '+0,21 °C/h', air: '+0,80 °C/h', autonomie: '9,5 h' },
      { test: 'Shield (94 kg MCP)', date: '27/03', duree: '3h 21m', coeur: '−0,18 °C/h (fusion)', air: '+0,21 °C/h', autonomie: '13,0 h' },
    ],
    focus: 'Pour cette étude, nous retenons l’offre Altileo Shield (Smart + 94 kg de MCP Coolerbox) : la configuration la plus efficace et résiliente pour ce site. Elle garantit un refroidissement actif pendant les 4 premières heures de délestage (−0,18 °C/h) et débloque jusqu’à 10 h de délestage continu — une nuit complète.',
  },
  simulation: {
    label: 'Paramètres de la simulation',
    title: 'Une simulation sur l’année 2025 complète',
    params: [
      { param: 'Données de consommation', value: 'Mesures réelles IoT (12 mois, 82 992 points)' },
      { param: 'Prix Spot', value: 'Historique réel 2025 (Nord Pool)' },
      { param: 'Prix Spot moyen annuel', value: '61,1 €/MWh' },
      { param: 'Délestage', value: '5 heures / jour' },
      { param: 'Rattrapage thermique', value: '10 %' },
      { param: 'Bonus COP nuit', value: '10 %' },
      { param: 'Marge de sécurité', value: '10 %' },
      { param: 'Abonnement SaaS Altileo', value: '240 € HT / an (20 €/mois)' },
    ],
    scenarios: [
      { name: 'HC/HP classique (sans rien)', facture: '6 920 €', eco: '—', vs: '—', featured: false },
      { name: 'HC/HP avec Altileo', facture: '5 548 €', eco: '~20 %', vs: '−1 372 €', featured: false },
      { name: 'Spot sans Altileo', facture: '5 692 €', eco: '18 %', vs: '−1 228 €', featured: false },
      { name: 'Spot + Altileo', facture: '4 478 €', eco: '35 %', vs: '−2 442 €', featured: true },
    ],
  },
  monthly: [
    { mois: 'Jan', hchp: 700, hchpAlt: 561, spot: 675, spotAlt: 517 },
    { mois: 'Fév', hchp: 632, hchpAlt: 507, spot: 687, spotAlt: 533 },
    { mois: 'Mar', hchp: 558, hchpAlt: 448, spot: 451, spotAlt: 340 },
    { mois: 'Avr', hchp: 476, hchpAlt: 392, spot: 367, spotAlt: 271 },
    { mois: 'Mai', hchp: 544, hchpAlt: 447, spot: 321, spotAlt: 233 },
    { mois: 'Juin', hchp: 564, hchpAlt: 449, spot: 429, spotAlt: 296 },
    { mois: 'Juil', hchp: 576, hchpAlt: 475, spot: 518, spotAlt: 388 },
    { mois: 'Août', hchp: 564, hchpAlt: 436, spot: 487, spotAlt: 341 },
    { mois: 'Sep', hchp: 494, hchpAlt: 386, spot: 349, spotAlt: 254 },
    { mois: 'Oct', hchp: 561, hchpAlt: 462, spot: 500, spotAlt: 377 },
    { mois: 'Nov', hchp: 651, hchpAlt: 517, spot: 457, spotAlt: 345 },
    { mois: 'Déc', hchp: 599, hchpAlt: 468, spot: 451, spotAlt: 346 },
  ],
  analyse: {
    label: 'Analyse de la performance',
    title: 'Trois enseignements clés',
    items: [
      {
        title: 'Une assurance anti-risque en période de tension',
        body: 'En février 2025, le prix Spot moyen atteint 122,7 €/MWh. Le Spot seul (687 €) devient plus cher que le contrat réglementé (632 €). Grâce au délestage Altileo, la facture tombe à 533 € : le client reste gagnant même en période de crise.',
      },
      {
        title: 'En été, le Spot est naturellement avantageux',
        body: 'En mai (19,4 €/MWh en moyenne), le Spot seul fait déjà gagner 41 % vs HC/HP. Altileo ajoute encore 87 €/mois d’économies grâce au délestage ciblé sur les pics intra-journaliers.',
      },
      {
        title: 'Rentable chaque mois de l’année',
        body: 'Les gains mensuels vont de 87 € (mai) à 158 € (janvier), soit 121 €/mois par chambre en moyenne. Le délestage Altileo est positif tous les mois, sans exception.',
      },
    ],
  },
  securite: {
    label: 'Sécurité & validation',
    title: 'La chaîne du froid, garantie et validée',
    items: [
      {
        title: 'Conformité HACCP 100 %',
        body: 'Température maximale simulée : −16,97 °C, pour une limite réglementaire à −15 °C. La sécurité sanitaire est maintenue en permanence, avec une marge contractuelle d’un degré.',
      },
      {
        title: 'Sécurité matérielle fail-safe',
        body: 'En cas de coupure de courant ou de panne de la Box, le relais mécanique Normally Closed (NC) retombe instantanément : la chambre repasse à 100 % sous le contrôle de son régulateur d’origine. Garantie constructeur préservée intégralement.',
      },
      {
        title: 'Validation bureau d’études',
        body: 'Installation validée par le bureau d’études Rivacold France (Danfoss AK-CC 210, bornes 18-19, Main Switch DI1). Un montage conforme et documenté, prêt à répliquer.',
      },
    ],
  },
  cta: {
    title: 'Ces résultats sont propres à ce site. Quels seraient les vôtres ?',
    body: 'Chaque installation est différente. Notre diagnostic mesure l’inertie de vos chambres, votre courbe de charge et vos contraintes, puis chiffre l’économie réalisable — sans engagement.',
  },
};

export const maintenancePredictive = {
  hero: {
    pill: 'Maintenance prédictive',
    title: 'Vos données voient la panne venir. Avant qu’elle n’arrive.',
    body: 'L’Altileo Box mesure en continu le comportement de votre installation frigorifique — pressions, surchauffe, sous-refroidissement, consommation, températures. Notre moteur d’analyse identifie le composant qui se dégrade avant qu’il ne lâche, et déclenche l’intervention au bon moment. Vous ne subissez plus la panne : vous la programmez.',
    kpis: [
      { label: 'Pannes évitées', value: '8–12 k€', caption: 'économies annuelles vs maintenance curative', color: 'success' as const },
      { label: 'Capacité restaurée', value: '10–15 %', caption: 'de condensation récupérée par entretien ciblé', color: 'brand' as const },
      { label: 'Conformité F-Gas', value: 'Simplifiée', caption: 'surveillance permanente, fréquence de contrôle réduite', color: 'white' as const },
    ],
  },
  probleme: {
    label: 'Le vrai coût de la panne',
    title: 'La maintenance curative est la plus chère de toutes',
    body: 'On intervient après la panne. Le compresseur s’arrête, la chambre monte en température, la marchandise est menacée. Intervention en urgence majorée de 50 à 100 %, perte de denrées, rupture HACCP. Le pire scénario, et pourtant le plus répandu.',
    points: [
      { strong: 'Surcoût d’urgence', body: 'une intervention non planifiée coûte 50 à 100 % de plus qu’une visite programmée.' },
      { strong: 'Perte de marchandise', body: 'une chambre qui dérive de −18 °C à +8 °C en quelques heures, c’est un stock entier menacé.' },
      { strong: 'Dégradation silencieuse', body: 'un condenseur encrassé fait grimper la consommation de 18 à 31 % et mène à la panne compresseur en 14 à 19 mois.' },
    ],
  },
  detection: {
    label: 'Ce que nous détectons',
    title: 'Chaque panne laisse une signature. Nous la lisons.',
    body: 'Les défaillances frigorifiques ne surgissent pas de nulle part : elles s’annoncent dans les données, des jours ou des semaines à l’avance. L’Altileo Box instrumente le circuit et l’ambiance, et l’algorithme croise ces signaux pour isoler la cause.',
    items: [
      { title: 'Condenseur encrassé', body: 'La haute pression monte tandis que le sous-refroidissement chute — la signature caractéristique de l’encrassement. Détecté tôt, un simple nettoyage restaure 10 à 15 % de capacité.' },
      { title: 'Fuite de fluide frigorigène', body: 'Surchauffe élevée et sous-refroidissement dégradé trahissent un manque de charge. On alerte avant que la performance ne s’effondre — et avant la sanction F-Gas.' },
      { title: 'Usure du compresseur', body: 'L’égalisation trop rapide des pressions révèle des clapets fuyards. On anticipe le remplacement au lieu de le subir en pleine nuit.' },
      { title: 'Défaut de dégivrage', body: 'Un évaporateur givré force le compresseur en dépression et fait exploser la consommation. Le cycle de dégivrage est surveillé en continu.' },
      { title: 'Dérive du COP', body: 'La consommation par degré de froid produit augmente : le signal le plus précoce d’une installation qui se fatigue, toutes causes confondues.' },
      { title: 'Joints et portes', body: 'Une perte thermique anormale à portes fermées pointe un joint défaillant — une réparation à 50 € qui évite des mois de surconsommation.' },
    ],
  },
  fgas: {
    label: 'Le levier réglementaire',
    title: 'La conformité F-Gas, transformée en avantage',
    body: 'Le règlement F-Gas (UE 517/2014, actualisé par 2024/573) impose des contrôles d’étanchéité réguliers sur tout circuit contenant des fluides fluorés. Le non-respect expose l’exploitant à des amendes administratives pouvant atteindre 15 000 €, et toute fuite doit être réparée sous 30 jours.',
    body2: 'La surveillance permanente de l’Altileo Box répond directement à cette exigence. Un système de détection continu permet de diviser par deux la fréquence des contrôles obligatoires, documente automatiquement l’historique, et alerte à la première anomalie. La conformité cesse d’être une corvée : elle devient un sous-produit du pilotage.',
  },
  positionnement: {
    label: 'Notre positionnement',
    title: 'Nous rendons votre maintenance intelligente. Vous gardez la main.',
    body: 'Altileo est la couche d’intelligence : nous mesurons, nous analysons, nous alertons, nous diagnostiquons. Pour l’intervention, deux options — au choix du client.',
    options: [
      { title: 'Avec votre frigoriste', body: 'Nous transmettons le diagnostic précis à votre prestataire habituel : quel composant, quelle urgence, quelle action. Il intervient plus vite, mieux ciblé, sans diagnostic à l’aveugle.' },
      { title: 'Avec nos équipes partenaires', body: 'Vous n’avez pas de prestataire, ou vous préférez déléguer ? Nous coordonnons l’intervention avec des frigoristes certifiés que nous connaissons et en qui nous avons confiance.' },
    ],
  },
  commentCaMarche: {
    label: 'Comment ça marche',
    title: 'La même Box. Aucune installation supplémentaire.',
    body: 'La maintenance prédictive n’exige pas de nouveau chantier : elle s’appuie sur l’instrumentation Altileo déjà en place, enrichie des capteurs de circuit (pressions, surchauffe, sous-refroidissement). Vous recevez alertes en temps réel et rapport mensuel de l’état de santé de vos installations.',
    steps: [
      { number: '01', title: 'Mesurer', body: 'Capteurs de circuit et d’ambiance : pressions HP/BP, surchauffe, sous-refroidissement, consommation, températures, ouverture de portes.' },
      { number: '02', title: 'Analyser', body: 'L’algorithme croise les signaux, compare aux signatures de défaillance connues et isole la cause racine de toute dérive.' },
      { number: '03', title: 'Alerter', body: 'Alerte immédiate en cas d’anomalie, avec diagnostic du composant concerné et niveau d’urgence. Rapport de santé mensuel.' },
    ],
  },
  cta: {
    title: 'Arrêtez de subir vos pannes. Programmez-les.',
    body: 'Notre diagnostic évalue l’état de vos installations et le potentiel de la maintenance prédictive sur votre site — sans engagement.',
  },
};

export const notreOffre = {
  hero: {
    pill: 'Notre offre',
    title: 'Le matériel se rembourse tout seul. Le reste, c’est du gain.',
    body: 'Vous payez l’installation une fois — elle se rembourse en 3 à 5 ans grâce à vos économies. Ensuite, un abonnement mensuel toujours bien plus petit que ce que vous économisez. C’est aussi simple que ça.',
  },
  parcours: {
    label: 'Comment ça se passe',
    title: 'Vous savez tout avant de vous engager',
    steps: [
      { number: '01', title: 'Diagnostic gratuit', body: 'On étudie vos installations et on vous dit si le froid chez vous a un vrai potentiel d’économies. Sans engagement, sans frais.' },
      { number: '02', title: 'Audit chiffré', body: 'On mesure précisément. On vous annonce combien vous allez économiser, et combien vous allez payer — les deux chiffres, noir sur blanc, avant toute décision.' },
      { number: '03', title: 'Installation', body: 'Pose du boîtier en une demi-journée, sans toucher à vos équipements, sans couper le froid. On calibre, on met en route.' },
      { number: '04', title: 'Vous suivez vos économies', body: 'Le système travaille tout seul. Vous voyez vos euros économisés chaque mois sur votre tableau de bord. Rapport mensuel automatique.' },
    ],
  },
  paiement: {
    label: 'Deux façons de payer',
    title: 'Vous achetez, ou vous étalez. À vous de choisir.',
    body: 'Le résultat est le même : vous gagnez plus que vous ne payez. La différence, c’est simplement comment vous réglez le matériel.',
    options: [
      {
        title: 'Vous achetez le matériel',
        body: 'Un seul paiement au départ. Il se rembourse en 3 à 5 ans par vos économies. Ensuite, vous ne payez plus que l’abonnement mensuel.',
        tag: 'Le plus rentable sur la durée',
      },
      {
        title: 'Vous étalez tout',
        body: 'Pas d’achat au départ. Le matériel est intégré dans votre mensualité, avec l’abonnement. Une seule facture par mois, et vous économisez dès le premier jour.',
        tag: 'Zéro investissement initial',
      },
    ],
  },
  abonnement: {
    label: 'L’abonnement mensuel',
    title: 'Toujours une fraction de vos économies',
    body: 'Votre abonnement dépend de la taille de votre installation — plus elle est grande, plus les économies sont importantes, et l’abonnement suit. Il est fixé lors de l’audit, une bonne fois pour toutes.',
    body2: 'La règle est simple : vous gardez toujours la grande majorité de vos économies. Si vous ne gagniez pas nettement plus que ce que vous payez, le modèle n’aurait aucun sens — ni pour vous, ni pour nous.',
  },
  garantie: {
    label: 'Notre garantie',
    title: 'Si ça ne vaut pas le coup pour vous, on ne le fait pas',
    body: 'On ne vous vend rien à l’aveugle. Le diagnostic est gratuit, et l’audit nous dit précisément ce que votre site peut économiser. Si le potentiel n’est pas au rendez-vous, on vous le dit franchement — et on ne va pas plus loin. On avance par étapes sûres, et on ne déploie que lorsque le gain est clair, mesuré, et largement supérieur à ce que vous paierez.',
  },
  cta: {
    title: 'Commençons par mesurer. Le reste suit.',
    body: 'Demandez votre diagnostic gratuit. On étudie vos installations, on chiffre vos économies, et vous décidez ensuite — en connaissance de cause.',
  },
};
