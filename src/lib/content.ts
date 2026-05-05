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
  pill: 'Specialistes du froid pour grossistes et logisticiens',
  savingsRange: '30 a 40%',
  body:
    'On audite. On deploie capteurs et automatisation. On ajoute du stockage thermique PCM si le ROI le justifie. Economies verifiees sur sites reels.',
  primaryCta: 'Demander un audit energetique',
  secondaryCta: 'Voir le produit en action',
  trustSignals: [
    'Economies verifiees',
    'Conformite Decret BACS',
    'Systeme operationnel',
    'ROI sous 18 mois',
  ],
  screenshotCaption:
    'Capture du tableau de bord en production - donnees reelles d\u2019un site deploye',
};

export const stats = [
  { value: '60%', body: 'de la consommation electrique d\u2019un grossiste alimentaire vient du froid.' },
  { value: '\u20ac80 000+', body: 'facture électricité froid d’un grossiste alimentaire de 1500 m\u00b2 (estimation marché sur prix réglementé 2024).' },
  { value: '2026', body: 'deadline Decret BACS\u00a0: monitoring et automatisation obligatoires sur installations superieures a 70 kW.' },
];

export const product = {
  label: 'Le produit',
  title: 'Un systeme complet, deploye et operationnel.',
  body:
    'Altileo n\u2019est pas un concept. C\u2019est un systeme materiel et logiciel integre, deploye sur sites clients, qui mesure, decide et agit en temps reel sur vos equipements frigorifiques.',
  architecture: {
    title: 'L\u2019architecture, sans boite noire.',
    body:
      'De la chambre froide jusqu\u2019au tableau de bord, chaque brique est documentee. Capteurs (temperature, ouverture de portes, courant), boitier de controle avec commande VFD du compresseur, serveur local, base de donnees et couche de commande predictive.',
    pillars: [
      { number: '01', title: 'Collecte', subtitle: 'Capteurs IoT' },
      { number: '02', title: 'Decision', subtitle: 'Pilotage adaptatif' },
      { number: '03', title: 'Action', subtitle: 'Commande VFD' },
    ],
  },
  dashboard: {
    eyebrow: 'Tableau de bord temps reel',
    title: 'Vos KPIs energetiques, accessibles 24/7.',
    body: 'Consommation actuelle, taux de stockage, temperatures par chambre, economies realisees, alertes systeme. Web et mobile.',
  },
  systemHealth: {
    eyebrow: 'Etat du systeme',
    title: 'Une vue claire de chaque organe.',
    body: 'Alimentation, regulation, IoT, protection, conversion, stockage : chaque sous-systeme est monitore en continu, avec alertes automatiques en cas d\u2019anomalie.',
  },
  stack:
    'Stack technique : capteurs proprietaires + boitier de controle avec commande VFD, serveur local edge computing, base de donnees temps reel, couche de commande predictive, et dashboard accessible web et mobile. Souverainete francaise, hebergement europeen.',
};

export const method = {
  label: 'La methode',
  title: 'Cinq couches. Vous payez ce qui a un ROI prouve.',
  body:
    'On ne vend pas un produit unique. On deploie une methode mesuree, par etapes. Chaque couche est independante, chiffree, et deployee seulement si elle est rentable sur votre site.',
  layers: [
    { number: '01', title: 'Audit instrumente', duration: '4 a 6 semaines', body: 'Mesure precise de vos consommations, temperatures, taux d\u2019humidite, ouvertures de portes, cycles de degivrage et comportement des compresseurs. On vous remet un rapport chiffre identifiant exactement ou sont vos pertes.', savings: 'Diagnostic chiffre', savingsColor: 'ink' as const, featured: false },
    { number: '02', title: 'Capteurs IoT', duration: 'Visibilite 24/7', body: 'Capteurs de temperature, humidite, ouverture de portes, mouvement et consommation deployes sur l\u2019ensemble de vos zones froides. Tableau de bord en temps reel accessible web et mobile.', savings: '5 a 10%', savingsColor: 'success' as const, featured: false },
    { number: '03', title: 'Automatisation intelligente', duration: 'Pilotage adaptatif', body: 'Modulation adaptative des compresseurs (commande VFD), des points de consigne et des cycles, en fonction des conditions reelles plutot que de programmes fixes. Sans intervention manuelle. Sans modification de vos equipements.', savings: '10 a 15%', savingsColor: 'success' as const, featured: false },
    { number: '04', title: 'Optimisation du degivrage', duration: 'A la demande', body: 'Detection en temps reel de l\u2019accumulation reelle de givre. Le degivrage se declenche uniquement quand il est necessaire - fini les cycles a intervalles fixes qui gaspillent l\u2019energie.', savings: '5 a 10%', savingsColor: 'success' as const, featured: false },
    { number: '05', title: 'Stockage thermique PCM', duration: 'Partenariat fabricant francais', body: 'Materiaux a changement de phase (PCM/MCP) qui stockent le froid pendant les heures creuses et le restituent aux heures pleines. Decale votre consommation, lisse vos pics, allonge la vie de vos equipements.', savings: '15 a 20%', savingsColor: 'success' as const, featured: true, badge: 'Exclusif' },
  ],
  modularNote: {
    label: 'Approche modulaire',
    body: 'on ne deploie que les couches qui ont un ROI sous 18 mois sur votre site specifique. Pas de sur-vente, pas de sur-equipement. Si l\u2019audit ne revele pas au moins 25% d\u2019economies realisables, on vous le dit - et vous ne payez que les frais d\u2019instrumentation.',
  },
};

export const caseStudy = {
  label: 'Cas client',
  title: 'Un grossiste a Rungis.\n12 mois de mesures.',
  body1: '[A completer : nom du client] est un grossiste alimentaire installe au pavillon [A completer] de Rungis. 1500 m\u00b2 de chambres froides, multi-temperatures.',
  body2: 'Nous avons deploye les couches 1 a 5 de notre methode sur 12 mois. Mesures avant et apres verifiees par compteurs energetiques independants.',
  cta: 'Lire le cas complet',
  kpis: [
    { label: 'Economies annualisees', value: '\u20ac31 440', caption: 'verifiees sur 12 mois', color: 'navy' as const },
    { label: 'Reduction facture froid', value: '36,2%', caption: 'moyenne sur 12 mois', color: 'success' as const },
    { label: 'ROI atteint', value: '14 mois', caption: 'retour sur investissement', color: 'ink' as const },
    { label: 'Conformite BACS', value: 'OK', caption: 'livree cle en main', color: 'success' as const },
  ],
  quote: '\u00ab [A completer : citation client a valider apres signature] On savait qu\u2019on consommait trop. Altileo nous a montre exactement ou, et deploye ce qui fait economiser - sans toucher a nos equipements. \u00bb',
  quoteAuthor: '[A completer : nom, fonction]',
  quoteCompany: '[A completer : societe], Rungis',
};

export const profiles = {
  label: 'Pour qui',
  title: 'Trois profils, un meme besoin\u00a0: un froid moins cher, plus fiable, conforme.',
  cards: [
    { icon: 'P', title: 'Grossistes alimentaires', body: 'MIN de Rungis, marches de gros regionaux, distributeurs RHF, primeurs et negociants en produits frais.', tags: ['Multi-temperatures', 'Activite 4h-14h', 'Decret BACS applicable'] },
    { icon: 'L', title: 'Logisticiens du froid', body: 'Entrepots multi-temperatures, prestataires logistiques alimentaires, plateformes 3PL specialisees.', tags: ['Forte volumetrie', 'Pression CSRD/RSE', 'F-Gas en transition'] },
    { icon: 'I', title: 'Industriels agroalimentaires', body: 'Cuisines centrales, transformation, conditionnement, sites de production avec process froid.', tags: ['Process critique', 'Decret Tertiaire', 'CEE eligibles'] },
  ],
};

export const comparison = {
  label: 'La difference',
  title: 'Pourquoi Altileo plutot qu\u2019un integrateur generaliste\u00a0?',
  columns: [
    { name: 'Altileo', subtitle: 'Specialiste froid', highlighted: true },
    { name: 'Integrateurs generalistes', subtitle: 'Acteurs historiques du CVC', highlighted: false },
    { name: 'Plateformes IA tertiaires', subtitle: 'Plateformes logicielles tertiaires', highlighted: false },
  ],
  rows: [
    { criterion: 'Specialisation froid', values: ['Exclusivement', 'Multi-domaines', 'CVC tertiaire'] },
    { criterion: 'Audit instrumente avant deploiement', values: ['Inclus', 'Devis sur cahier des charges', 'Module additionnel'] },
    { criterion: 'Stockage PCM integre', values: ['Partenariat fabricant français', 'Non', 'Non'] },
    { criterion: 'Modularite par couche', values: ['Vous payez ce qui marche', 'Solution complete obligatoire', 'Logiciel uniquement'] },
    { criterion: 'Conformite Decret BACS', values: ['Clé en main', 'Avec configuration', 'Perimetre logiciel'] },
  ],
};

export const bacs = {
  pill: 'Decret BACS \u00b7 Echeance 2026',
  title: 'Etes-vous concerne par le Decret BACS\u00a0?',
  body: 'Si vos installations frigorifiques depassent 70 kW de puissance et sont dans un batiment tertiaire, le Decret BACS impose un systeme d\u2019automatisation et de controle. Diagnostic en 3 questions, gratuit, instantane.',
  bullets: ['Resultat immediat', 'Aucune donnee commerciale demandee pour le diagnostic', 'Reponse personnalisee selon votre situation'],
};

export const pcm = {
  pill: 'Partenariat exclusif',
  title: 'Le stockage thermique, fabriqué en France.',
  body: 'Altileo travaille en partenariat exclusif avec un fabricant français de matériaux à changement de phase (PCM/MCP). Cette collaboration nous permet de déployer du stockage thermique haute performance, fabriqué en France, à des conditions exclusives — là où la majorité du marché importe.',
  bullets: [
    { strong: 'Duree de vie 15-20 ans', body: 'contre 7-10 ans pour les batteries lithium' },
    { strong: 'Maintenance quasi-nulle', body: 'pas de cycles de recharge a gerer' },
    { strong: 'Fabrication francaise', body: 'eligible CEE et bonus souverainete' },
  ],
};

export const team = {
  label: 'L\u2019equipe',
  title: 'Quatre ingenieurs electriciens, passionnes de froid.',
  body: 'Pas de couches manageriales. Pas de commerciaux qui ne connaissent pas la physique. Quand vous parlez a Altileo, vous parlez a l\u2019ingenieur qui auditera et deploiera sur votre site.',
  members: [
    { name: '[Prenom Nom]', role: 'Co-fondateur \u00b7 Audit et instrumentation', bio: '[Bref bio]', photo: null as string | null },
    { name: '[Prenom Nom]', role: 'Co-fondateur \u00b7 Automatisation', bio: '[Bref bio]', photo: null as string | null },
    { name: '[Prenom Nom]', role: 'Co-fondateur \u00b7 Stockage thermique', bio: '[Bref bio]', photo: null as string | null },
    { name: '[Prenom Nom]', role: 'Co-fondateur \u00b7 Deploiement et SAV', bio: '[Bref bio]', photo: null as string | null },
  ],
};

export const finalCta = {
  title: 'On commence toujours\npar mesurer.',
  body: 'Audit instrumente de vos installations frigorifiques. Quatre semaines. Rapport chiffre complet. Si on n\u2019identifie pas au moins 25% d\u2019economies realisables, vous ne payez que les frais d\u2019instrumentation.',
  primaryCta: 'Demander un audit energetique',
  secondaryCta: 'Parler a un ingenieur',
  signals: ['Reponse sous 48h', 'Audit en 4 semaines', 'Sans engagement'],
};

export const competences = {
  hero: {
    pill: 'L\u2019ingenierie derriere Altileo',
    title: 'Quand vous nous confiez vos installations, vous parlez a des ingenieurs.',
    body: 'Altileo n\u2019est pas une coquille logicielle posee sur du materiel achete. Notre equipe concoit les armoires, calcule les sections de cables, dessine les schemas, integre l\u2019automatisme et garantit la conformite. C\u2019est cette profondeur technique qui rend nos deploiements cold-chain fiables et durables.',
  },
  why: {
    title: 'Pourquoi cette profondeur compte pour vous.',
    body: 'Une optimisation energetique mal cablee detruit son propre ROI. Une armoire mal dimensionnee cree des pannes en pleine campagne. Un degivrage mal pilote peut compromettre votre stock. Avoir des ingenieurs qui maitrisent la chaine complete - de la mise a la terre au pilotage predictif - c\u2019est ce qui separe un deploiement qui dure de celui qui revient en SAV tous les six mois.',
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
    title: 'Quatre etapes, du brief a l\u2019exploitation.',
    body: 'Chaque mission suit le meme processus rigoureux. Vous savez a chaque etape ce qui est livre, qui est responsable, et quand.',
    steps: [
      { number: '01', title: 'Audit & cadrage', body: 'Visite sur site, mesures, lecture des installations existantes. Note de cadrage chiffree avec perimetre, livrables et planning.' },
      { number: '02', title: 'Etude & conception', body: 'Schemas, calculs, dimensionnement, choix materiel. Validation technique avant tout achat ou fabrication.' },
      { number: '03', title: 'Fabrication & deploiement', body: 'Armoires en interne, integration sur site, cablage, parametrage. Tests fonctionnels avant mise en service.' },
      { number: '04', title: 'Mise en service & suivi', body: 'Mise en route, formation utilisateurs, dossier d\u2019exploitation. Support technique et SAV sous contrat.' },
    ],
  },
  guarantees: {
    title: 'Ce sur quoi nous nous engageons.',
    body: 'On ne fait pas tout. Ce qu’on livre, on le garantit. Ce qu’on ne fait pas, on le coordonne avec des intervenants compétents et on en pilote la qualité.',
    items: [
      { label: 'Engagement sur le résultat', body: 'Si l’audit ne révèle pas au moins 25% d’économies réalisables, vous payez uniquement les frais d’instrumentation. Si le déploiement réel dévie de plus de 20% de la trajectoire visée sur 12 mois, on intervient gratuitement pour comprendre et corriger.' },
      { label: 'Méthode trans-parente', body: 'Mesure avant et après, données accessibles 24/7, exports possibles à tout moment. Pas de boîte noire, pas de chiffres marketing.' },
      { label: 'Documentation complète', body: 'Rapport d’audit, spécifications, schémas, notices, DOE — tout est documenté et vous appartient. Si demain vous changez de prestataire, votre site reste pleinement exploitable.' },
      { label: 'Un seul interlocuteur', body: 'Du cadrage au SAV, vous parlez aux mêmes ingénieurs. Pas de chaine diluée, pas de renvoi de balle entre prestataires.' },
    ],
  },
  cta: {
    title: 'Une question technique precise\u00a0?',
    body: 'Decrivez votre besoin en quelques lignes. Un de nos ingenieurs vous repond sous 48 heures avec une premiere analyse - gratuite, sans engagement.',
  },
};

export const entreprise = {
  hero: {
    pill: 'Bases a Paris \u00b7 Specialistes du froid',
    title: 'Une equipe d\u2019ingenieurs specialistes du froid.',
    body: 'Altileo est porte par quatre ingenieurs electriciens et thermiciens. Nous concevons, calculons, deployons et garantissons des systemes d\u2019optimisation energetique pour la chaine du froid - sur des sites reels, avec des economies verifiees. Pas de promesses marketing. Pas de boites noires. Du travail d\u2019ingenieur, livre proprement.',
  },
  mission: {
    title: 'Reduire definitivement le cout energetique du froid en France.',
    body1: 'Le froid alimentaire et logistique consomme entre 7% et 10% de l\u2019electricite francaise. Sur les sites que nous auditons, 30 a 40% de cette consommation est tout simplement gaspillee - dans des cycles mal calibres, des equipements sur-dimensionnes, des pertes par mauvais reglages, des degivrages aux mauvais moments.',
    body2: 'Notre mission n\u2019est pas \u00ab sauver la planete \u00bb - c\u2019est rendre l\u2019efficacite energetique du froid accessible, mesurable, et bancable. Un site a la fois. Avec des chiffres verifies par compteur, pas par marketing.',
    kpis: [
      { value: '30-40%', label: 'economies verifiees sur les sites deployes' },
      { value: '< 18 mois', label: 'ROI cible avant tout deploiement' },
      { value: '100%', label: 'des couches livrees evaluees par mesure' },
      { value: 'FR', label: 'ingenierie, fabrication, hebergement' },
    ],
  },
  context: {
    title: 'Le bon marche, le bon moment.',
    body: 'Trois forces convergent en 2025-2027. Les grossistes et logisticiens du froid ont 18 mois pour s\u2019adapter - ou subir.',
    drivers: [
      { eyebrow: 'Reglementation', title: 'Decret BACS \u00b7 Decret Tertiaire', body: 'Toute installation frigorifique superieure a 70 kW dans un batiment tertiaire doit etre equipee d\u2019un systeme d\u2019automatisation et de controle. Echeance retrofit\u00a0: 2027. Reporting OPERAT obligatoire des maintenant.' },
      { eyebrow: 'Prix de l\u2019energie', title: 'Une facture qui ne baisse plus', body: 'Le tarif reglemente a double entre 2021 et 2024. Pour un grossiste de 1500 m\u00b2, la facture froid passe de 40 a 80 k\u20ac par an. L\u2019efficacite n\u2019est plus une option, c\u2019est une condition de survie.' },
      { eyebrow: 'Gaz frigorigenes', title: 'Sortie progressive des HFC', body: 'Le reglement F-Gas impose la reduction puis l\u2019interdiction de nombreux fluides actuels d\u2019ici 2030. Chaque renovation d\u2019installation est l\u2019occasion d\u2019optimiser - ou de payer deux fois.' },
    ],
  },
  principles: {
    title: 'Quatre principes, simples et tenus.',
    body: 'Pas de \u00ab valeurs d\u2019entreprise \u00bb declamatoires. Quatre regles operationnelles que nous appliquons a chaque mission.',
    items: [
      { title: 'On mesure avant de promettre.', body: 'Aucun engagement chiffre ne sort de notre bouche sans audit instrumente prealable. Si vos installations ne permettent pas au moins 25% d\u2019economies realistes, on vous le dit - et vous ne payez que les frais d\u2019instrumentation.' },
      { title: 'On concoit en interne, on engage notre responsabilite.', body: 'Chaque schema, chaque calcul, chaque armoire est concu, dimensionne et valide par nos ingenieurs. Nos sous-traitants executent sous nos plans. Vous parlez a un seul interlocuteur, du cadrage au SAV.' },
      { title: 'On vend ce qui a un ROI.', body: 'Notre methode est modulaire. On deploie uniquement les couches qui s\u2019amortissent en moins de 18 mois sur votre site specifique. Pas de sur-vente, pas de sur-equipement.' },
      { title: 'On documente tout, en clair.', body: 'Schemas, calculs, notices d\u2019exploitation, DOE - chaque livrable est complet et comprehensible. Si demain vous changez de prestataire, votre site reste exploitable. Pas de dependance artificielle.' },
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
    title: 'Bases a Paris, intervenons partout en France.',
    body: 'Notre ancrage parisien nous met a quelques kilometres du MIN de Rungis - le plus grand marche de gros d\u2019Europe - et au coeur de l\u2019ecosysteme logistique francilien. Nous nous deplacons sur tout le territoire pour les missions qui le justifient.',
    zones: [
      'Ile-de-France - intervention sous 48h',
      'Lyon, Marseille, Lille, Bordeaux - deplacement programme',
      'France entiere - audit instrumente sur devis',
      'Suivi a distance - dashboard accessible 24/7',
    ],
  },
  cta: {
    title: 'On commence par un audit.',
    body: 'Le meilleur moyen de savoir si Altileo a sa place chez vous, c\u2019est de mesurer. Audit instrumente en 4 semaines, rapport chiffre complet, sans engagement.',
  },
};

export const faqGroups = [
  {
    title: 'L’audit énergétique',
    items: [
      {
        q: 'Combien coûte un audit énergétique ?',
        a: 'L’audit instrumenté coûte entre 5 000 € et 7 000 € selon la taille du site et le nombre de zones froides. Cela inclut : visite sur site, pose des capteurs de mesure pendant 4 à 6 semaines, analyse des données, et un rapport écrit chiffré avec les pertes identifiées et les économies réalisables.\n\nSi nous ne trouvons pas au moins 25 % d’économies réalisables sur votre site, vous ne payez que les frais d’instrumentation (environ 1 500 €). Si nous dépliquons ensuite la méthode complète chez vous, le coût de l’audit est déduit du déploiement.',
      },
      {
        q: 'Combien de temps prend un audit ?',
        a: 'Quatre à six semaines au total. Une journée sur site pour la pose des capteurs, 4 semaines de mesures continues sans intervention de votre part, puis 1 à 2 semaines d’analyse et de rédaction du rapport. Vous recevez le rapport final en main propre lors d’un rendez-vous de restitution.',
      },
      {
        q: 'Qu’est-ce que je reçois à la fin de l’audit ?',
        a: 'Un rapport écrit complet contenant : le bilan énergétique détaillé par zone froide, l’identification des sources de pertes (cycles de dégivrage, mauvais réglages, surdimensionnement, ouvertures de portes), un chiffrage précis des économies réalisables couche par couche, le ROI estimé pour chaque option, et notre recommandation de déploiement. Tout est documenté, vous pouvez utiliser ce rapport avec n’importe quel autre prestataire.',
      },
      {
        q: 'Que se passe-t-il si l’audit ne révèle pas d’économies suffisantes ?',
        a: 'C’est rare — sur les sites froid alimentaire et logistique que nous auditons, les économies réalisables dépassent presque toujours 25 %. Si toutefois ce seuil n’est pas atteint, vous ne payez que les frais d’instrumentation. Vous gardez le rapport, qui peut servir d’état des lieux pour vos obligations réglementaires (Décret Tertiaire, reporting OPERAT).',
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
        a: 'Sur notre déploiement pilote, aucune perte de chaîne du froid pendant les phases de travaux. Notre processus inclut : une analyse de risque préalable, un plan de coupure validé par votre frigoriste, des températures monitorées en continu pendant les travaux, et un protocole de secours si un équipement critique pose problème. La sécurité alimentaire reste votre responsabilité, mais nous travaillons en respectant strictement vos plans HACCP.',
      },
      {
        q: 'Comment se déroule l’installation ?',
        a: 'Quatre phases : (1) cadrage technique avec votre équipe et votre frigoriste, (2) fabrication de l’armoire en interne dans nos locaux (3 à 5 semaines), (3) intervention sur site pour pose, câblage et mise en service (3 à 5 jours), (4) période de réglage et de tuning (2 à 4 semaines avec ajustements à distance). Vous avez un seul interlocuteur pendant toute la durée du projet.',
      },
    ],
  },
  {
    title: 'Les économies et le ROI',
    items: [
      {
        q: 'Comment vérifiez-vous les économies promises ?',
        a: 'Mesure avant et après par compteurs énergétiques dédiés, installés sur les arrivées électriques de vos installations frigorifiques. Les valeurs sont enregistrées 24/7 et accessibles dans votre dashboard. La période de référence (avant) est mesurée sur 4 semaines minimum. Après déploiement, les économies sont comparées à cette baseline avec ajustement pour les conditions extérieures (température, saisonnalité, volumes). Tout est trans-parent.',
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
        a: 'Le déploiement initial (matériel + armoire + mise en service) est un achat ferme, sans engagement de durée côté matériel. L’abonnement au pilotage et au dashboard est mensuel, résiliable avec un préavis de 3 mois. Pas de contrat verrouillé sur 5 ans, pas de pénalité cachée. Notre objectif est que vous restiez parce que ça marche, pas parce que vous êtes piégé.',
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
    a: 'Entre 5 000 € et 7 000 € selon la taille du site. Si nous ne trouvons pas 25 % d’économies réalisables, vous ne payez que les frais d’instrumentation (~1 500 €). Si vous dépliquez ensuite la méthode, le coût de l’audit est déduit.',
  },
  {
    q: 'Que se passe-t-il si vous ne trouvez pas d’économies ?',
    a: 'Vous ne payez que les frais d’instrumentation. Vous gardez le rapport, qui peut servir d’état des lieux pour vos obligations réglementaires.',
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
