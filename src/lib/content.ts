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
  { value: '\u20ac80 000+', body: 'facture annuelle moyenne en electricite froid pour un grossiste de 1500 m\u00b2 a Rungis.' },
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
    { name: 'Integrateurs generalistes', subtitle: 'Schneider, Trane, Carrier', highlighted: false },
    { name: 'Plateformes IA tertiaires', subtitle: 'BeeBryte, Hive Optimal', highlighted: false },
  ],
  rows: [
    { criterion: 'Specialisation froid', values: ['OK Exclusivement', 'Multi-domaines', 'CVC tertiaire'] },
    { criterion: 'Audit instrumente avant deploiement', values: ['OK Inclus', 'Devis sur cahier des charges', 'Souvent absent'] },
    { criterion: 'Stockage PCM integre', values: ['OK Partenariat exclusif FR', 'Non', 'Non'] },
    { criterion: 'Modularite par couche', values: ['OK Vous payez ce qui marche', 'Solution complete obligatoire', 'Logiciel uniquement'] },
    { criterion: 'Conformite Decret BACS', values: ['OK Cle en main', 'OK Avec configuration', 'Perimetre logiciel'] },
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
  title: 'Le stockage thermique, fabrique en France.',
  body: 'Altileo travaille en partenariat exclusif avec [A completer : nom du fabricant], fabricant francais de materiaux a changement de phase (PCM/MCP). Cette collaboration nous permet de deployer du stockage thermique haute performance, made in France, a des conditions exclusives.',
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
    { icon: 'E', title: 'Etudes electriques BT industrielles', body: 'Conception, dimensionnement, calcul de charges et verification court-circuit. Schemas unifilaires et de principe, bilans de puissance, plans d\u2019implantation.', example: 'Conception et redlining d\u2019un schema d\u2019armoire 230V/24V pour pilotage frigorifique multi-zones, avec calcul des sections cables et coordination des protections.' },
    { icon: 'A', title: 'Armoires electriques sur mesure', body: 'Conception et fabrication d\u2019armoires de pilotage adaptees a vos installations. Integration des automates, des modules d\u2019acquisition et des departs moteurs.', example: 'Armoire de pilotage VFD avec acquisition PT100 et bus RS485 pour remontee des capteurs de chambre froide vers le serveur Altileo.' },
    { icon: 'C', title: 'Mise en conformite electrique', body: 'Audit de conformite aux normes NF C 15-100 et NF C 13-100. Identification des ecarts, plan de remise a niveau, suivi de levee de reserves.', example: 'Diagnostic d\u2019un site grossiste : reperage des defauts de mise a la terre, absence de PE sur certaines arrivees, propositions de mise en conformite chiffrees.' },
    { icon: 'I', title: 'Instrumentation et automatisme', body: 'Capteurs temperature, humidite, courant, ouverture de portes. Controleurs programmables, commande VFD des compresseurs, passerelles IoT.', example: 'Integration d\u2019une carte d\u2019acquisition PT100 et capteurs de courant cote primaire et secondaire transformateur, avec remontee temps reel sur dashboard.' },
    { icon: 'T', title: 'Etudes thermiques et frigorifiques', body: 'Bilans thermiques de chambres froides, dimensionnement des groupes, etude des cycles de degivrage, optimisation des consignes.', example: 'Bilan thermique multi-zones d\u2019un grossiste alimentaire - identification de 18% de surconsommation liee a des cycles de degivrage non optimises.' },
    { icon: 'B', title: 'Integration BMS / GTB', body: 'Mise en place d\u2019un systeme d\u2019automatisation et de controle conforme au Decret BACS. Pilotage centralise, reporting OPERAT pour le Decret Tertiaire.', example: 'Architecture GTB pour un site tertiaire avec installation frigorifique > 70 kW, livree cle en main avec attestation de conformite BACS.' },
    { icon: 'S', title: 'Stockage thermique PCM', body: 'Etude, dimensionnement et deploiement de stockage par materiaux a changement de phase. Integration au systeme de pilotage pour decalage de charge.', example: 'Dimensionnement d\u2019une reserve de stockage PCM pour decalage de la consommation aux heures creuses, en partenariat avec un fabricant francais.' },
    { icon: 'D', title: 'Schemas et documentation', body: 'Schemas electriques, plans d\u2019implantation, dossiers d\u2019armoire, notices d\u2019exploitation. Livrables conformes aux exigences industrielles et au DOE.', example: 'Dossier complet d\u2019armoire avec schema de principe, schema de cablage, liste de materiel et notice d\u2019exploitation pour le mainteneur du site.' },
    { icon: 'M', title: 'Mise en service et SAV', body: 'Mise en service sur site, parametrage, tests fonctionnels, formation des utilisateurs. Support a distance et intervention sur site en cas d\u2019anomalie.', example: 'Mise en service d\u2019un systeme complet capteurs + armoire + dashboard sur un site Rungis, formation du gerant et du frigoriste mainteneur.' },
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
    title: 'On engage notre responsabilite, pas celle d\u2019un sous-traitant anonyme.',
    body: 'Tout ce que nous livrons est concu, calcule et valide par nos ingenieurs. Vous avez un seul interlocuteur pour la conception, la realisation, et le suivi.',
    items: [
      { label: 'Conformite aux normes', body: 'NF C 15-100, NF C 13-100, exigences Decret BACS et Decret Tertiaire respectees sur chaque livrable.' },
      { label: 'Documentation complete', body: 'Schemas, plans, notes de calcul, notices d\u2019exploitation et DOE livres systematiquement.' },
      { label: 'Garantie sur le materiel', body: 'Garantie constructeur sur tout le materiel installe, plus garantie de bonne execution sur la conception.' },
      { label: 'Un seul interlocuteur', body: 'Vous parlez aux memes ingenieurs pendant l\u2019etude, la realisation et le SAV. Pas de chaine diluee, pas de renvoi de balle.' },
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
