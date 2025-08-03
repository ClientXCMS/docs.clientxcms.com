# Paramètres SEO

Dans **CLIENTXCMS**, l'**optimisation pour les moteurs de recherche (SEO)** constitue un levier essentiel pour **maximiser la visibilité de votre plateforme** et **attirer un trafic qualifié**. <br/>
L'objectif est stratégique : **améliorer votre positionnement dans les résultats de recherche**, **augmenter votre trafic organique** et **renforcer votre présence en ligne**. Un SEO bien configuré peut multiplier par 5 votre visibilité naturelle et réduire significativement vos coûts d'acquisition client.

Cette page permet de configurer tous les éléments techniques et structurels pour optimiser votre référencement naturel.

Vous pouvez accéder aux paramètres SEO depuis :

`Paramètres` > `Personnalisation` > `Paramètres SEO`

:::tip Astuce
Le SEO est votre **commercial numérique 24h/24**. 
Une optimisation réussie peut générer plus de trafic que toutes vos campagnes publicitaires payantes combinées.
:::

## Pourquoi optimiser le SEO ?

Un référencement efficace permet de :

* **Augmenter la visibilité** de votre plateforme sur Google et autres moteurs
* **Attirer du trafic qualifié** intéressé par vos services
* **Réduire les coûts** d'acquisition par rapport à la publicité payante
* **Renforcer la crédibilité** avec un positionnement en première page
* **Pérenniser** votre présence en ligne sur le long terme

:::tip Astuce
C'est comme avoir la meilleure vitrine 🏪 sur la rue la plus passante — mais en ligne, cette rue s'appelle Google.
:::

## Configuration de base

### Métadonnées fondamentales

**Titre du site** | (balise title)<br />
Élément le plus important pour le SEO, affiché dans l'onglet du navigateur et les résultats de recherche.

**Bonnes pratiques** :
- **Longueur optimale** : 50-60 caractères maximum
- **Mots-clés principaux** : En début de titre
- **Nom de l'entreprise** : À la fin après un séparateur
- **Unique et descriptif** : Spécifique à votre activité

**Exemples optimisés** :
```
"Hébergement Web Haute Performance | MonEntreprise"
"Solutions Cloud & VPS Professionnels | VotreMarque"
"Agence Digitale & Développement Web | NomAgence"
```

**Description de l'espace client** | (meta description)<br />
Résumé affiché sous le titre dans les résultats de recherche, crucial pour le taux de clic.

**Format recommandé** :
- **Longueur** : 150-160 caractères maximum
- **Call-to-action** : Incitation à l'action
- **Bénéfices clés** : Avantages principaux
- **Mots-clés** : Termes recherchés par vos clients

**Exemples efficaces** :
```
"Hébergement web professionnel avec 99.9% de disponibilité. Support 24/7, 
serveurs SSD et sauvegarde automatique. Essai gratuit 30 jours."
```

```
"Agence digitale spécialisée en création de sites web et e-commerce. 
+500 projets réalisés, équipe certifiée. Devis gratuit en 24h."
```

### Mots-clés stratégiques

**Mots-clés de l'espace client** | (keywords)<br />
Termes principaux définissant votre activité et recherchés par votre audience.

**Stratégie de sélection** :
- **Pertinence** : En lien direct avec vos services
- **Volume de recherche** : Suffisamment recherchés
- **Concurrence** : Accessible selon votre autorité
- **Intention** : Correspondant à vos objectifs

**Types de mots-clés** :
- **Génériques** : "hébergement web", "création site"
- **Longue traîne** : "hébergeur web français pas cher"
- **Locaux** : "agence web Lyon", "hébergement Paris"
- **Métier** : "serveur dédié", "VPS SSD"

**Exemples par secteur** :

#### Hébergeur web
```
hébergement web, serveur VPS, serveur dédié, nom de domaine, 
hébergement français, cloud hosting, backup automatique
```

#### Agence digitale
```
création site web, développement web, refonte site internet, 
e-commerce, SEO, maintenance site, agence digitale
```

#### Service B2B
```
solution SaaS, logiciel métier, digitalisation, automatisation, 
CRM, outils gestion, transformation digitale
```

## Scripts et intégrations

### Scripts Header

**Scripts dans le header** | (balises head)<br />
Code inséré avant la fermeture de la balise `</head>`, essentiel pour les configurations initiales.

**Utilisations courantes** :
- **Balises meta** supplémentaires
- **Verification sites** (Google, Bing, Pinterest)
- **Fonts personnalisées** (Google Fonts)
- **Scripts critiques** chargés en priorité

**Exemples pratiques** :

**Google Site Verification** :
```html
<meta name="google-site-verification" content="votre-code-verification" />
```

**Open Graph Facebook** :
```html
<meta property="og:title" content="Votre Titre" />
<meta property="og:description" content="Votre Description" />
<meta property="og:image" content="URL-de-votre-image" />
```

**Schema.org Organization** :
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Votre Entreprise",
  "url": "https://votresite.com",
  "logo": "https://votresite.com/logo.png"
}
</script>
```

### Scripts Footer

**Scripts dans le footer** | (avant balise body)<br />
Code inséré avant la fermeture du body, optimal pour les scripts non-critiques.

**Utilisations recommandées** :
- **Google Analytics** et tracking
- **Hotjar** ou heatmaps
- **Chatbots** et support
- **Scripts tiers** non-critiques

**Exemples d'intégration** :

**Google Analytics 4** :
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Facebook Pixel** :
```html
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'VOTRE_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## Paramètres d'affichage

### Couleur principale

**Couleur principale** | (brand color)<br />
Couleur de marque utilisée pour les embeds et intégrations sociales.

**Impact sur le SEO** :
- **Embeds sociaux** : Couleur des liens partagés
- **Progressive Web App** : Couleur de thème
- **Browser UI** : Couleur de l'interface navigateur
- **Rich snippets** : Éléments mis en avant

**Format recommandé** :
- **Hexadécimal** : #1a73e8 (bleu Google)
- **Cohérence** : Aligné avec votre charte graphique
- **Contraste** : Lisible sur fond blanc et sombre
- **Accessibilité** : Respecter les ratios de contraste

### Contrôle d'indexation

**Désactiver le référencement** | (noindex global)<br />
Option pour empêcher l'indexation complète de votre plateforme.

#### Quand désactiver
- **Développement** : Site en construction ou test
- **Maintenance** : Refonte majeure en cours
- **Contenu privé** : Plateforme strictement interne
- **Duplication** : Éviter le contenu dupliqué temporaire

#### Quand garder activé
- **Production** : Site opérationnel et public
- **Acquisition** : Recherche de nouveaux clients
- **Croissance** : Développement de la visibilité
- **Concurrence** : Maintien de la position

:::warning Attention
Désactiver le référencement supprime votre visibilité Google. À utiliser uniquement pour des sites non-publics ou en développement.
:::

## Optimisation avancée

### Structured Data

**Données structurées** recommandées :
- **Organization** : Informations sur l'entreprise
- **WebSite** : Données du site principal
- **BreadcrumbList** : Fil d'Ariane
- **Review** : Avis et évaluations
- **Product** : Fiches produits (si applicable)

### Performance SEO

**Facteurs techniques** :
- **Vitesse de chargement** : Core Web Vitals
- **Mobile-first** : Responsive design optimal
- **HTTPS** : Sécurisation SSL/TLS
- **Sitemap XML** : Plan du site structuré

### Linking interne

**Stratégie de maillage** :
- **Hiérarchie logique** : Pages importantes vers spécifiques
- **Ancres optimisées** : Textes descriptifs et mots-clés
- **Profondeur réduite** : Maximum 3 clics depuis l'accueil
- **Liens contextuels** : Naturels et utiles

## Monitoring et amélioration

### Outils de suivi

**Google Search Console** :
- **Indexation** : Pages découvertes et indexées
- **Performance** : Impressions, clics, position moyenne
- **Erreurs** : Problèmes techniques à corriger
- **Améliorations** : Suggestions d'optimisation

**Google Analytics** :
- **Trafic organique** : Visiteurs depuis les moteurs
- **Comportement** : Pages vues, temps de session
- **Conversions** : Objectifs atteints depuis le SEO
- **Mots-clés** : Termes générant du trafic

### Métriques clés

**Indicateurs de performance** :
- **Positions moyennes** : Classement dans les résultats
- **CTR organique** : Taux de clic depuis Google
- **Trafic SEO** : Visiteurs depuis le référencement naturel
- **Conversions SEO** : Ventes ou leads générés

### Optimisation continue

**Actions régulières** :
- **Analyse concurrentielle** : Positionnement vs concurrents
- **Mise à jour contenu** : Fraîcheur et pertinence
- **Technical SEO** : Corrections techniques
- **Link building** : Acquisition de liens entrants

## Exemples par secteur

### Hébergeur web technique

**Configuration SEO** :
```
Titre : "Hébergement Web Pro & Serveurs VPS | MonHébergeur"
Description : "Hébergement haute performance avec support expert 24/7. 
Serveurs SSD, sauvegarde quotidienne, 99.9% uptime. Essai gratuit."
Mots-clés : hébergement web, serveur VPS, hébergement français, 
cloud hosting, serveur dédié, backup automatique
```

### Agence créative

**Configuration SEO** :
```
Titre : "Agence Web & Création Sites Internet | MonAgence"
Description : "Création de sites web sur-mesure et e-commerce. 
+300 projets, design moderne, référencement inclus. Devis gratuit 24h."
Mots-clés : création site web, agence web, développement web, 
e-commerce, refonte site, SEO, UX design
```

### Service B2B

**Configuration SEO** :
```
Titre : "Solutions Digitales B2B & Transformation | MonService"
Description : "Digitalisation d'entreprise et outils métier. 
ROI prouvé, intégration rapide, support dédié. Démo gratuite."
Mots-clés : solution SaaS, digitalisation entreprise, 
logiciel métier, automatisation, transformation digitale
```

:::tip À retenir
Le SEO est un investissement à long terme qui compound dans le temps. Chaque optimisation aujourd'hui contribue à votre visibilité de demain. Soyez patient, cohérent et mesurez vos progrès régulièrement.
:::