# Charte graphique Altileo

**Système « Frost & Carbon »**
Version 1.0 — Document de référence pour l'ensemble des supports : site web, présentations, documents, plaquettes et publications.

> Ce document fixe les règles d'utilisation de l'identité visuelle Altileo. Il s'adresse à toute personne qui produit un support à la marque : équipe interne, développeur, graphiste, imprimeur. En cas de doute, on applique la règle la plus sobre.

---

## Sommaire

1. [Notre marque](#1--notre-marque)
2. [Le logo](#2--le-logo)
3. [Les couleurs](#3--les-couleurs)
4. [La typographie](#4--la-typographie)
5. [La mise en page et la grille](#5--la-mise-en-page-et-la-grille)
6. [Les composants récurrents](#6--les-composants-récurrents)
7. [Le rythme des sections (blanc / carbon)](#7--le-rythme-des-sections-blanc--carbon)
8. [L'iconographie et l'imagerie](#8--liconographie-et-limagerie)
9. [Le ton éditorial](#9--le-ton-éditorial)
10. [Déclinaison — Site web](#10--déclinaison--site-web)
11. [Déclinaison — Présentations (PowerPoint / slides)](#11--déclinaison--présentations-powerpoint--slides)
12. [Déclinaison — Documents & plaquettes](#12--déclinaison--documents--plaquettes)
13. [Déclinaison — Publications & réseaux](#13--déclinaison--publications--réseaux)
14. [Tokens Tailwind & CSS](#14--tokens-tailwind--css)
15. [Les interdits (à ne jamais faire)](#15--les-interdits-à-ne-jamais-faire)

---

## 1 — Notre marque

### Positionnement

Altileo pilote la flexibilité thermique des installations frigorifiques pour réduire la facture d'électricité du froid de 30 à 40 %. Nous sommes des **ingénieurs spécialistes du froid**, pas une couche marketing posée sur du matériel acheté.

La marque doit dégager trois choses, dans cet ordre :

1. **La preuve.** Nos chiffres sont mesurés sur site, pas promis. L'identité met les données en avant.
2. **Le sérieux institutionnel.** Nos interlocuteurs sont des grossistes, des logisticiens et des industriels. Le visuel doit inspirer la confiance d'un partenaire durable.
3. **La modernité sobre.** On est une entreprise technologique française, actuelle, mais jamais tape-à-l'œil.

### La personnalité en un mot

**Un instrument de mesure.** Précis, fiable, lisible, froid au sens propre. Tout choix visuel se juge à cette aune : « est-ce que ça ressemble à un tableau de bord de supervision, net et crédible ? »

### Le principe directeur : « Frost & Carbon »

Notre système repose sur un contraste unique et assumé :

- **Le blanc (Frost)** structure la majorité des supports : respiration, clarté, sobriété institutionnelle.
- **Le carbon (le noir profond)** est réservé aux moments de preuve : chiffres clés, tableau de bord, données du pilote. Sur fond carbon, un chiffre se lit comme sur un terminal de supervision.
- **Le teal glacier (l'accent)** relie le tout et rappelle le froid — c'est la couleur de l'astérisque, notre signe.

On ne mélange pas ces registres au hasard : le blanc explique, le carbon prouve, le teal signale.

### Ce qui nous distingue visuellement

La quasi-totalité du secteur cleantech / énergie utilise du blanc doux + teal ou vert. En assumant des **bandeaux carbon pleine largeur** pour mettre en scène la donnée, Altileo se démarque immédiatement : plus premium, plus technique, plus crédible.

---

## 2 — Le logo

### Construction

Le logo est un **logotype** : le mot `altileo` en minuscules, suivi immédiatement d'un **astérisque** `*`.

```
altileo*
```

L'astérisque n'est pas décoratif : c'est un **clin d'œil au flocon de neige** et la marque de notre spécialisation dans le froid. Il est toujours présent, toujours dans la couleur d'accent (ou en highlight sur fond sombre — voir plus bas).

### Anatomie

| Élément | Règle |
|---|---|
| Le mot | `altileo`, tout en minuscules, jamais capitalisé, jamais « Altileo » dans le logo |
| La graisse | Bold (700) |
| L'interlettrage | Serré (`tracking-tight`, ≈ −0,02em) |
| L'astérisque | Même famille, aligné sur la ligne de base du mot, légèrement remonté (`-translate-y-1`) |
| L'espace mot/astérisque | Très réduit — l'astérisque « touche » presque le `o` (gap ≈ 4px à taille courante) |

> Note : dans le corps de texte rédactionnel, la société s'écrit **Altileo** (avec majuscule). La minuscule stricte `altileo*` est réservée au **logo**.

### Versions couleur

Le logo existe en deux versions selon le fond :

**Sur fond clair (blanc, frost, surface) :**
- Mot `altileo` → carbon `#111111`
- Astérisque `*` → teal glacier `#00A4B4`

**Sur fond sombre (carbon) :**
- Mot `altileo` → blanc `#FFFFFF`
- Astérisque `*` → teal glacier `#00A4B4` (ou highlight `#FFD66B` pour un accent chaud ponctuel, voir §3)

**Versions monochromes (impression 1 couleur, fax, gravure) :**
- Tout carbon `#111111` sur fond clair
- Tout blanc `#FFFFFF` sur fond sombre
- L'astérisque reste présent, dans la même couleur que le mot

### L'icône seule (favicon, avatar, app)

Un carré à coins arrondis (`rx = 6` sur 32px) fond **carbon `#111111`**, avec l'astérisque centré en teal `#00A4B4`. C'est la seule situation où l'astérisque apparaît sans le mot.

> Le favicon historique utilisait un fond navy `#0A2540` et un astérisque highlight `#FFD66B`. À mettre à jour vers carbon + teal pour s'aligner sur le nouveau système.

### Zone de protection

Autour du logo, on réserve une marge vide au moins égale à **la hauteur du mot `altileo`** (hauteur des minuscules, la « hauteur d'x » en pratique on prend la cap-height). Aucun texte, trait, image ou bord ne pénètre cette zone.

```
┌───────────────────────────────┐
│         (marge = X)           │
│   ┌───────────────────┐       │
│ X │   altileo*        │  X    │
│   └───────────────────┘       │
│         (marge = X)           │
└───────────────────────────────┘
X = hauteur du logotype
```

### Taille minimale

| Support | Taille mini |
|---|---|
| Web / écran | 96 px de large |
| Impression | 22 mm de large |
| Icône seule | 16 px (favicon) |

En dessous, l'astérisque devient illisible : ne pas descendre plus bas.

### Do / Don't logo

**À faire :**
- Toujours conserver l'astérisque.
- Toujours respecter la zone de protection.
- Utiliser la version couleur adaptée au fond.

**À ne jamais faire :**
- Ne pas mettre de majuscule (`Altileo*` dans le logo → interdit).
- Ne pas changer la couleur de l'astérisque (autre que teal ou highlight validés).
- Ne pas étirer, incliner, ajouter d'ombre, de contour ou de dégradé.
- Ne pas remplacer l'astérisque par un autre symbole (flocon dessiné, étoile, etc.).
- Ne pas coller le logo sur un fond photo chargé sans réserve de contraste.

---

## 3 — Les couleurs

La palette est **restreinte et à rôles clairs**. Six couleurs principales, pas une de plus. Chaque couleur a une fonction ; on ne les utilise pas de façon décorative.

### Palette principale

| Nom | Rôle | HEX | RGB | CMJN | Pantone (appro.) |
|---|---|---|---|---|---|
| **Blanc / Frost** | Fond principal | `#FFFFFF` | 255, 255, 255 | 0, 0, 0, 0 | — |
| **Carbon** | Fond de preuve, bandeaux | `#111111` | 17, 17, 17 | 0, 0, 0, 93 | Black 6 C |
| **Teal glacier** | Accent, astérisque, liens, CTA | `#00A4B4` | 0, 164, 180 | 78, 8, 27, 0 | 320 C |
| **Surface** | Cartes claires, séparations douces | `#F5F5F5` | 245, 245, 245 | 0, 0, 0, 4 | — |
| **Frost tint** | Fond de pastille/tag d'accent | `#D4F0F0` | 212, 240, 240 | 15, 0, 4, 0 | 317 C |
| **Highlight** | Éclat de donnée, **usage rare** | `#FFD66B` | 255, 214, 107 | 1, 15, 66, 0 | 1215 C |

### Couleurs de texte

| Nom | Usage | HEX | RGB |
|---|---|---|---|
| **Ink** | Texte sur fond clair | `#111111` | 17, 17, 17 |
| **Muted (clair)** | Texte secondaire sur fond clair | `#555555` | 85, 85, 85 |
| **Blanc** | Texte sur fond carbon | `#FFFFFF` | 255, 255, 255 |
| **Muted (sombre)** | Texte secondaire sur fond carbon | `#999999` | 153, 153, 153 |

### Couleurs fonctionnelles (états)

Réservées aux interfaces (dashboard, alertes, statuts). Jamais décoratives.

| Nom | Usage | HEX | RGB |
|---|---|---|---|
| **Succès** | Économies, conformité, positif | `#2A9D6E` | 42, 157, 110 |
| **Alerte** | Dérive, seuil approché | `#E0A83D` | 224, 168, 61 |
| **Danger** | Hors seuil, panne | `#D14343` | 209, 67, 67 |
| **Ligne** | Bordures, filets fins | `#E5E5E5` | 229, 229, 229 |

### Règles d'usage couleur

**Le teal est un accent, pas un aplat de fond.** On l'utilise pour : l'astérisque, les liens, les boutons primaires, les chiffres clés ponctuels, les traits de soulignement. On ne peint jamais une section entière en teal.

**Le highlight `#FFD66B` est exceptionnel.** Il sert **au maximum à un élément par page** — typiquement le chiffre-héros (« 30 à 40 % »). Deux jaunes sur une même page = erreur. En cas de doute, ne pas l'utiliser.

**Le contraste texte/fond est non négociable** (accessibilité WCAG AA minimum) :
- Sur fond blanc : texte ink `#111111` ✓ / muted `#555555` ✓
- Sur fond carbon : texte blanc `#FFFFFF` ✓ / muted `#999999` ✓ (à réserver aux légendes, pas au corps long)
- Teal `#00A4B4` sur blanc : OK pour texte de titre/lien de taille ≥ 18px ou en gras ; pour du petit texte, foncer légèrement ou préférer l'ink.

**Sur une pastille/tag colorée, le texte prend la teinte foncée de la même famille**, jamais du noir générique. Ex. : tag sur frost tint `#D4F0F0` → texte teal profond `#0E7C8C`.

### Répartition indicative (règle des proportions)

Sur un support type, viser environ :

- **70 % blanc / frost** (respiration, fonds clairs)
- **20 % carbon** (bandeaux de preuve)
- **8 % teal** (accents, liens, CTA)
- **2 % highlight + fonctionnelles** (éclats ponctuels, états)

---

## 4 — La typographie

### Familles

Le système typographique repose sur **deux familles**, plus une réservée aux chiffres.

| Rôle | Famille | Fallback | Où |
|---|---|---|---|
| **Titres & corps** | **Inter** | `system-ui, -apple-system, sans-serif` | Tout le texte courant, titres, corps, boutons |
| **Chiffres & données** | **JetBrains Mono** (ou Geist Mono) | `ui-monospace, monospace` | Chiffres clés, stats, dashboard, tableaux de données, labels techniques |

> **Pourquoi une mono pour les chiffres ?** La monospace apporte stabilité, rigueur et crédibilité technique — c'est un code fort du secteur industriel et de la data. Nos chiffres mesurés méritent une typo qui « ressemble » à un instrument. Les chiffres alignés (tabular) facilitent aussi la lecture en colonnes.

Le site actuel utilise **Geist Sans + Geist Mono**, qui sont un choix parfaitement valable et déjà intégré. **Inter + JetBrains Mono** est l'alternative de référence si l'on veut une base 100 % libre et ultra-répandue. Les deux couples sont validés ; **ne pas les mélanger entre eux** (soit Geist, soit Inter, pas un titre Geist et un corps Inter).

### Poids autorisés

On se limite à **trois poids**, pour rester net :

| Poids | Valeur | Usage |
|---|---|---|
| Regular | 400 | Corps de texte, légendes |
| Medium | 500 | Sous-titres, labels, boutons |
| Bold | 700 | Titres, chiffres-héros, logo |

On évite les graisses intermédiaires multiples (600, 800…) qui brouillent la hiérarchie.

### Échelle typographique

Échelle de référence (desktop). En responsive, réduire proportionnellement.

| Style | Taille | Poids | Interligne | Interlettrage | Usage |
|---|---|---|---|---|---|
| Display | 56–72 px | 700 | 1,05 | −0,02em | Titre héros |
| H1 | 40–48 px | 700 | 1,1 | −0,02em | Titre de page |
| H2 | 28–32 px | 700 | 1,15 | −0,01em | Titre de section |
| H3 | 20–22 px | 500 | 1,25 | 0 | Sous-section |
| Corps large | 18–20 px | 400 | 1,6 | 0 | Chapô, intro |
| Corps | 16 px | 400 | 1,6 | 0 | Texte courant |
| Petit | 13–14 px | 400 | 1,5 | 0 | Légendes, notes |
| Label / eyebrow | 12 px | 500 | 1,4 | +0,08em, MAJUSCULES | Sur-titres de section |
| Donnée (mono) | variable | 500/700 | 1,1 | −0,02em | Chiffres clés |

### Règles typographiques

- **Casse phrase partout** pour les titres (« Réduisez votre facture », pas « Réduisez Votre Facture »). Les MAJUSCULES sont réservées aux petits labels/eyebrows.
- **Chiffres toujours en mono** dès qu'ils sont une donnée mise en avant (pourcentages, températures, euros, kW). Le texte courant qui contient un chiffre isolé reste en Inter.
- **Chiffres tabulaires** activés (`font-variant-numeric: tabular-nums`) dans les tableaux et le dashboard.
- **Typographie française** : espaces insécables avant `: ; ! ?` et `%` ; guillemets français `« »` ; apostrophes typographiques `'`.
- Pas de justification (`text-align: justify`) — toujours en drapeau (aligné à gauche).
- Longueur de ligne confortable : 60–75 caractères pour le corps.

### Do / Don't typo

**À faire :**
- Réserver la mono aux chiffres et données.
- Garder trois poids maximum.
- Casse phrase pour les titres.

**À ne pas faire :**
- Ne pas écrire des paragraphes entiers en mono.
- Ne pas mélanger Geist et Inter dans le même support.
- Ne pas utiliser de titres tout en majuscules (sauf micro-labels).
- Ne pas centrer de longs paragraphes.

---

## 5 — La mise en page et la grille

### Grille

- **Grille 12 colonnes**, gouttières 24 px.
- **Largeur de contenu max** : 1200 px (conteneur centré). Le texte long ne dépasse pas ~720 px de large.
- **Marges latérales** : 24 px (mobile) → 48–80 px (desktop).

### Rythme vertical

- Espacements en multiples de **8 px** (8, 16, 24, 32, 48, 64, 96).
- Padding vertical de section généreux : **96 px** desktop, **56 px** mobile.
- Les bandeaux carbon utilisent le même rythme que les sections claires — la couleur change, pas la structure.

### Rayons et bordures

| Élément | Rayon | Bordure |
|---|---|---|
| Boutons, champs, tags | 6 px | — |
| Cartes | 12 px | `0,5px solid #E5E5E5` |
| Grande image / cadre dashboard | 12 px | `0,5px solid #E5E5E5` |
| Accents bord unique (border-left) | **0 px** (pas d'arrondi sur un seul côté) | — |

### Ombres

Discrètes, fonctionnelles, jamais dramatiques.

```css
--shadow-soft: 0 1px 3px rgba(17,17,17,.04), 0 4px 12px rgba(17,17,17,.04);
--shadow-card: 0 2px 6px rgba(17,17,17,.05), 0 8px 24px rgba(17,17,17,.05);
```

Pas de glow, pas de néon, pas d'ombre colorée forte. Sur fond carbon, on n'utilise pas d'ombre : on sépare par la couleur et le filet.

---

## 6 — Les composants récurrents

### Boutons

**Bouton primaire (CTA)**
- Fond teal `#00A4B4`, texte blanc, poids 500, rayon 6px, padding `12px 24px`.
- Hover : teal foncé `#0E7C8C`.
- Sur fond carbon : identique (le teal ressort très bien sur noir).

**Bouton secondaire**
- Fond transparent, bordure `0,5px` ink (`#111111` sur clair / `#FFFFFF` sur carbon), texte de la même couleur.
- Hover : fond `#F5F5F5` (clair) / `rgba(255,255,255,.08)` (carbon).

**Règle :** un seul bouton primaire par vue/section. Le reste est secondaire.

### Pastille / eyebrow (sur-titre de section)

Petit label 12px, MAJUSCULES, interlettrage +0,08em, en muted ou teal. Optionnellement dans une pastille arrondie sur frost tint `#D4F0F0` avec texte teal profond.

### Carte

- Fond blanc `#FFFFFF`, bordure `0,5px #E5E5E5`, rayon 12px, padding `24px`.
- Sur fond carbon : fond `#1A1A1A` ou `#181818`, bordure `0,5px #333333`, texte blanc.

### Carte-métrique (chiffre clé)

Le composant signature d'Altileo. Structure :

```
[label 13px muted]
[CHIFFRE en mono, 32–48px, 700]
[légende 12px muted]
```

Sur fond carbon, le chiffre en teal ou blanc ; le label et la légende en muted sombre. C'est le composant à privilégier pour toute donnée du pilote.

### Tableau de données

- En-tête en label 12px MAJUSCULES muted.
- Chiffres en mono tabulaire.
- Lignes séparées par un filet `0,5px #E5E5E5`.
- Pas de fond zébré coloré ; au besoin, alternance blanc / `#FAFAFA` très légère.
- Colonne « verdict »/statut : utiliser les couleurs fonctionnelles (succès/alerte/danger).

### Filet de séparation

Un simple trait `0,5px` en couleur ligne. Pas de séparateurs décoratifs, pas de vagues, pas d'icônes séparatrices.

---

## 7 — Le rythme des sections (blanc / carbon)

C'est le cœur du système « Frost & Carbon ». Les sections **alternent** pour créer un rythme et mettre en scène la preuve. Règle simple : **le blanc explique, le carbon prouve.**

### Rythme type d'une page d'accueil

| Ordre | Section | Fond | Pourquoi |
|---|---|---|---|
| 1 | Héros | **Carbon** | Ouverture forte, chiffres qui claquent, effet « terminal » |
| 2 | Profils clients | Blanc | Respiration, lisibilité |
| 3 | Chiffres marché (stats) | **Carbon** | Donnée = preuve = fond sombre |
| 4 | Comment ça marche | Blanc | Pédagogie, schéma clair |
| 5 | Cas pilote (Rungis) | **Carbon** | Notre atout n°1 : données mesurées mises en scène |
| 6 | Produit / Altileo Cloud | Blanc | Explication produit |
| 7 | Méthode (5 couches) | Blanc | Contenu structuré |
| 8 | PCM + synergie solaire | **Carbon** | Vision, différenciation |
| 9 | Comparatif | Blanc | Tableau lisible |
| 10 | Diagnostic BACS | Blanc | Outil interactif |
| 11 | CTA final | **Carbon** | Clôture forte, appel à l'action |

### Règles du rythme

- **Ne jamais enchaîner deux bandeaux carbon** sans une section claire entre eux (sauf transition maîtrisée héros → stats, à valider au cas par cas).
- La **transition** entre blanc et carbon est **franche** : pas de dégradé de l'un vers l'autre.
- Sur carbon, on garde **exactement la même grille** et les mêmes espacements que sur blanc.
- Les images de dashboard sont particulièrement à l'aise sur carbon (le cadre se fond dans le fond sombre).

---

## 8 — L'iconographie et l'imagerie

### Icônes

- Style **outline** (trait), fin et régulier, jamais plein/rempli.
- Jeu de référence : **Tabler Icons** ou **Lucide** (déjà présent : `lucide-react`).
- Épaisseur de trait constante (1,5–2px).
- Couleur : ink sur clair, blanc sur carbon, teal pour accentuer.
- Taille : 20–24px inline, 32px max en décoratif.
- **Pas d'emoji** dans les supports de marque.

### Photographie

Quand on utilise des photos (installations, chambres froides, terrain) :

- **Vraies installations**, pas de banques d'images génériques « corporate souriant ».
- Registre : industriel, propre, factuel. Lumière neutre à froide.
- Cadrage net, sujet clair (armoire électrique, sonde, compresseur, entrepôt).
- Éviter les teintes chaudes saturées qui contredisent l'univers du froid.
- On peut désaturer légèrement pour cohérence.

### Schémas techniques

- Trait fin, fond blanc ou carbon, accents teal.
- Légendes en mono pour les valeurs (températures, puissances).
- Style « note technique » : sobre, annoté, crédible (cf. schéma d'installation existant).

### Motif / signe

L'astérisque peut servir de **motif discret** (filigrane très léger, ou ponctuation graphique en fin de section). Usage parcimonieux : c'est une signature, pas un papier peint.

---

## 9 — Le ton éditorial

La voix Altileo est celle d'un **ingénieur qui parle clair** : précis, direct, sans esbroufe, respectueux de l'intelligence du lecteur.

### Principes

- **On mesure avant de promettre.** On préfère un chiffre vérifié à un superlatif. « 20 % d'économie mesurée sur le pilote » plutôt que « des économies massives ».
- **Phrases courtes, verbes d'action.** « On audite. On déploie. On mesure. »
- **Pas de jargon marketing vide** : bannir « solution innovante disruptive », « révolutionnaire », « leader ». On dit ce que le produit fait.
- **Honnêteté sur les limites.** « Le résultat dépend de votre site ; un audit est nécessaire pour chiffrer. » La transparence est un argument de vente.
- **Français soigné.** Typographie française correcte (voir §4), pas d'anglicismes inutiles quand un mot français existe.

### Vocabulaire de marque

| On dit | On évite |
|---|---|
| pilotage intelligent, délestage | « IA magique », « smart » à toutes les sauces |
| économies mesurées / vérifiées | « économies garanties » sans nuance |
| inertie thermique, flexibilité | jargon obscur non expliqué |
| chambre froide, groupe frigorifique | termes approximatifs |
| audit d'éligibilité, diagnostic | « étude gratuite » vague |

### Traitement des chiffres

- Toujours contextualiser un chiffre (sur quoi, mesuré comment).
- Les fourchettes sont honnêtes : « 30 à 40 % » assume la variabilité par site.
- Un chiffre-clé = un composant carte-métrique, pas noyé dans le texte.

---

## 10 — Déclinaison — Site web

### Base

- Fond global : **blanc `#FFFFFF`** (et non plus le fond teinté `#F4FAFA` historique).
- Sections alternées blanc / carbon selon le rythme du §7.
- Conteneur centré 1200px, grille 12 colonnes.

### Navigation

- Barre sticky, fond blanc translucide (`bg-white/90` + `backdrop-blur`), filet bas `0,5px #E5E5E5`.
- Logo à gauche (version claire), liens au centre/droite en ink 14px medium, hover teal.
- CTA « Contact » à droite en bouton (secondaire ou primaire selon la page).
- Sur les sections carbon, la nav reste claire (elle est sticky au-dessus du contenu).

### Héros (carbon)

- Fond carbon `#111111`.
- Titre display blanc, avec le chiffre-clé mis en valeur (surlignage carbon plus foncé ou éclat highlight `#FFD66B` — **le seul endroit** où le highlight est recommandé).
- Chapô en muted sombre `#999999`.
- Boutons : primaire teal + secondaire bordure blanche.
- Signaux de confiance en ligne (puces teal + texte muted).
- Capture de dashboard en dessous, cadre `0,5px #333`.

### Boutons, cartes, tableaux

- Voir §6. Sur le site, respecter les tokens Tailwind du §14.

### Accessibilité

- Contraste AA minimum sur tous les textes.
- Focus visible : `outline: 2px solid #0E7C8C; outline-offset: 2px`.
- Cibles tactiles ≥ 44px.
- Images avec `alt` décrivant l'installation.

### Performance (rappel)

- Objectif LCP < 2,5 s, page complète < 5 s. Le blanc-forward et les assets légers y aident : pas de vidéos lourdes en héros, images optimisées.

---

## 11 — Déclinaison — Présentations (PowerPoint / slides)

### Format & gabarit

- **Format 16:9**, 1920 × 1080 px.
- Deux familles de slides : **claires** (contenu, explication) et **carbon** (données, ouverture, transition, clôture).

### Slide de titre / ouverture

- Fond **carbon `#111111`**.
- Logo `altileo*` en haut à gauche (version sombre : mot blanc, astérisque teal).
- Titre display blanc, casse phrase.
- Sous-titre en muted sombre.
- Filet ou astérisque discret en signature.

### Slide de contenu (claire)

- Fond blanc `#FFFFFF`.
- Eyebrow 12px MAJ teal en haut, puis H2 carbon.
- Corps en Inter 18–20px, ink.
- Marges généreuses : ne pas remplir la diapo bord à bord.
- Un seul message par slide.

### Slide de données (carbon)

- Fond carbon.
- Cartes-métriques : chiffre en **mono** teal ou blanc, très grand (60–120px), label et légende muted.
- Idéal pour les résultats du pilote (−0,21 °C/h, 3h52, 20 %, 30 %…).
- Tableaux : lignes séparées par filet `0,5px #333`, chiffres mono tabulaires.

### Règles slides

- **Palette identique** au web (mêmes HEX).
- **Trois poids** de police max.
- Pas d'animation gadget ; transitions simples (fondu/coupe).
- Pied de page discret : `altileo* — [titre] · contact@altileo.com` en 11px muted.
- Numérotation en mono en bas à droite.

### Gabarit de couleurs slides (à charger dans le thème PPT)

| Rôle thème | HEX |
|---|---|
| Arrière-plan 1 (clair) | `#FFFFFF` |
| Arrière-plan 2 (sombre) | `#111111` |
| Texte 1 | `#111111` |
| Texte 2 | `#FFFFFF` |
| Accent 1 | `#00A4B4` |
| Accent 2 | `#FFD66B` |
| Accent 3 (succès) | `#2A9D6E` |
| Neutre clair | `#F5F5F5` |

---

## 12 — Déclinaison — Documents & plaquettes

Concerne : notes techniques, fiches commerciales, propositions client, mémorandums, plaquettes produit (type « Altileo Box »).

### Structure de page (A4)

- Marges : 20 mm.
- En-tête : logo `altileo*` en haut à gauche + éventuel eyebrow de rubrique (« NOTE TECHNIQUE », « FICHE PRODUIT ») en 11px MAJ muted à droite.
- Pied de page : `Altileo — [type de document] · contact@altileo.com · altileo.com`, filet fin au-dessus, 9–10px muted. Pagination en mono `1/3`.

### Registres de page

Comme le web, les documents peuvent utiliser des **encadrés carbon** pour les blocs de preuve (résultats mesurés, garanties de sécurité) au milieu de pages majoritairement blanches. Cf. la plaquette « Altileo Box » qui alterne déjà panneaux sombres et sections claires.

### Titres & hiérarchie

- Titre de document : H1 40px carbon (ou blanc sur bandeau carbon de couverture).
- Titres de section numérotés (`1.`, `2.`…) en H2, éventuellement avec l'accent teal sur le numéro.
- Corps 11–12px (impression) en Inter, interligne confortable.

### Tableaux & données

- Mêmes règles que §6 : mono tabulaire, filets fins, colonne verdict en couleurs fonctionnelles.
- Le tableau d'extrapolation HACCP (durée / réchauffement / verdict) est un modèle de référence : sobre, chiffré, colonne « CONFORME » en succès.

### Couverture de proposition client

- Fond carbon ou blanc selon l'effet voulu ; logo, titre, nom du client, mention « Document confidentiel », date en mono.
- Registre institutionnel : peu d'éléments, beaucoup d'air.

### Impression

- Utiliser les valeurs **CMJN** du §3 pour tout ce qui part en imprimerie.
- Carbon en impression : préférer un **noir riche** (`C60 M50 J50 N100`) pour un aplat profond, sauf contrainte imprimeur.
- Prévoir la version monochrome du logo pour les impressions 1 couleur.

---

## 13 — Déclinaison — Publications & réseaux

Concerne : LinkedIn (principal), visuels d'articles, posts, bannières.

### Principes

- **LinkedIn est le canal principal** (audience B2B : grossistes, logisticiens, industriels).
- Registre : sobre, factuel, orienté preuve et pédagogie — pas de « growth hacking » criard.

### Gabarits

| Support | Dimensions |
|---|---|
| Post carré | 1080 × 1080 px |
| Post portrait | 1080 × 1350 px |
| Bannière LinkedIn (page) | 1128 × 191 px |
| Image d'article / OG | 1200 × 630 px |
| Story / vertical | 1080 × 1920 px |

### Style des visuels

- **Un chiffre ou un message par visuel.** Ex. : « −0,21 °C/h : la dérive mesurée sur 4 h de coupure. »
- Fond carbon pour les visuels de donnée (le plus reconnaissable), blanc pour les visuels pédagogiques.
- Logo `altileo*` toujours présent (coin), astérisque teal.
- Chiffre en mono, énorme. Contexte en Inter.
- Palette stricte : carbon, blanc, teal, + highlight sur un seul chiffre max.

### Cohérence de fil

- Alterner visuels carbon et blanc dans le fil crée le même rythme « Frost & Carbon » reconnaissable.
- Gabarit de légende : phrase courte + donnée + éventuel lien vers le diagnostic.

### Ton des publications

- Voir §9. On partage des enseignements chiffrés, des explications (inertie thermique, marché Spot, décret BACS), des retours de terrain — jamais de contenu purement promotionnel.

---

## 14 — Tokens Tailwind & CSS

### `tailwind.config.ts` — palette

```ts
colors: {
  // Fonds
  bg:        '#FFFFFF',   // fond principal (blanc-forward)
  carbon:    '#111111',   // bandeaux de preuve
  surface:   '#F5F5F5',   // cartes claires / séparations douces

  // Texte
  ink:       '#111111',   // texte sur clair
  muted:     '#555555',   // secondaire sur clair
  'muted-dark': '#999999',// secondaire sur carbon

  // Accent
  brand: {
    DEFAULT: '#00A4B4',   // teal glacier
    deep:    '#0E7C8C',   // hover / texte teal sur clair
    dark:    '#0A6470',   // teal très foncé
  },
  frost:     '#D4F0F0',   // tint d'accent (pastilles)
  highlight: '#FFD66B',   // éclat rare (chiffre héros)

  // Fonctionnelles
  success:   '#2A9D6E',
  warning:   '#E0A83D',
  danger:    '#D14343',
  line:      '#E5E5E5',
},
```

### `tailwind.config.ts` — typographie & ombres

```ts
fontFamily: {
  sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
  mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
  // (ou conserver Geist Sans / Geist Mono — un seul couple à la fois)
},
boxShadow: {
  soft: '0 1px 3px rgba(17,17,17,.04), 0 4px 12px rgba(17,17,17,.04)',
  card: '0 2px 6px rgba(17,17,17,.05), 0 8px 24px rgba(17,17,17,.05)',
  cta:  '0 1px 2px rgba(0,164,180,.2), 0 4px 12px rgba(0,164,180,.15)',
},
borderRadius: {
  DEFAULT: '6px',   // boutons, champs, tags
  card:    '12px',  // cartes, cadres
},
```

### Variables CSS (`globals.css`)

```css
:root {
  /* Fonds */
  --bg: #FFFFFF;
  --carbon: #111111;
  --surface: #F5F5F5;
  /* Texte */
  --ink: #111111;
  --muted: #555555;
  --muted-dark: #999999;
  /* Accent */
  --brand: #00A4B4;
  --brand-deep: #0E7C8C;
  --frost: #D4F0F0;
  --highlight: #FFD66B;
  /* Fonctionnel */
  --success: #2A9D6E;
  --warning: #E0A83D;
  --danger: #D14343;
  --line: #E5E5E5;
}

body {
  background-color: var(--bg);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
}

/* Chiffres/données en mono tabulaire */
.num {
  font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}

/* Focus accessible */
*:focus-visible {
  outline: 2px solid var(--brand-deep);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Section carbon : classe utilitaire de bandeau sombre */
.section-carbon {
  background: var(--carbon);
  color: #FFFFFF;
}
.section-carbon .muted { color: var(--muted-dark); }
.section-carbon .card {
  background: #181818;
  border: 0.5px solid #333333;
}
```

### Correspondance ancien → nouveau système

| Rôle | Ancien | Nouveau |
|---|---|---|
| Fond principal | `#F4FAFA` (teinté) | `#FFFFFF` (blanc pur) |
| Accent | `#2DB8C9` | `#00A4B4` (teal glacier) |
| Fond sombre | `#0A2540` (navy) | `#111111` (carbon) |
| Astérisque favicon | `#FFD66B` sur navy | `#00A4B4` sur carbon |
| Surface carte | `#FFFFFF` | `#FFFFFF` (inchangé) |

---

## 15 — Les interdits (à ne jamais faire)

Une charte tient autant par ses interdits que par ses règles. Ces points sont non négociables.

**Logo**
- ❌ Retirer, remplacer ou recolorer l'astérisque hors teal/highlight validés.
- ❌ Écrire `Altileo*` (majuscule) dans le logo.
- ❌ Déformer, incliner, ombrer, contourer le logo.

**Couleur**
- ❌ Ajouter des couleurs hors palette (§3). Six couleurs principales, point.
- ❌ Peindre une section entière en teal (le teal est un accent).
- ❌ Utiliser le highlight `#FFD66B` plus d'une fois par page/visuel.
- ❌ Revenir au fond teinté `#F4FAFA` ou au navy `#0A2540` (ancien système).
- ❌ Enchaîner deux bandeaux carbon sans respiration claire entre eux.

**Typographie**
- ❌ Paragraphes entiers en monospace.
- ❌ Mélanger Geist et Inter dans un même support.
- ❌ Titres tout en majuscules (hors micro-labels).
- ❌ Plus de trois poids de police.
- ❌ Texte justifié.

**Mise en page**
- ❌ Arrondir un seul côté d'un bloc (border-left arrondi).
- ❌ Ombres colorées fortes, glow, néon, dégradés de fond.
- ❌ Remplir un support bord à bord sans marges.
- ❌ Emoji dans les supports de marque.

**Éditorial**
- ❌ Superlatifs marketing non chiffrés (« révolutionnaire », « leader mondial »).
- ❌ Chiffre avancé sans contexte de mesure.
- ❌ Anglicismes quand un mot français existe.

---

*Charte graphique Altileo — Système « Frost & Carbon » — v1.0.*
*Toute question ou cas non couvert : appliquer la règle la plus sobre, ou contacter l'équipe. contact@altileo.com*
