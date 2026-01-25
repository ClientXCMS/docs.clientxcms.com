# Paramètres SEO

Dans **CLIENTXCMS**, l'**optimisation pour les moteurs de recherche (SEO)** constitue un levier essentiel pour **maximiser la visibilité de votre plateforme** et **attirer un trafic qualifié**. <br/>
L'objectif est stratégique : **améliorer votre positionnement dans les résultats de recherche**, **augmenter votre trafic organique** et **renforcer votre présence en ligne**. Un SEO bien configuré peut multiplier par 5 votre visibilité naturelle et réduire significativement vos coûts d'acquisition client.

Cette page permet de configurer tous les éléments techniques et structurels pour optimiser votre référencement naturel.

Vous pouvez accéder aux paramètres SEO depuis :

`Paramètres` > `Personnalisation` > `Paramètres SEO`


## Configuration de base

### Métadonnées fondamentales

**Titre du site** | (balise title)<br />
Élément le plus important pour le SEO, affiché dans l'onglet du navigateur et les résultats de recherche.

**Description de l'espace client** | (meta description)<br />
Résumé affiché sous le titre dans les résultats de recherche, crucial pour le taux de clic.

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

### Contrôle d'indexation

**Désactiver le référencement** | (noindex global)<br />
Option pour empêcher l'indexation complète de votre plateforme.

:::warning Attention
Désactiver le référencement supprime votre visibilité Google. À utiliser uniquement pour des sites non-publics ou en développement.
:::