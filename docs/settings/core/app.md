---
sidebar_position: 1
---

import ThemedImage from '@theme/ThemedImage';

# Application

La configuration de l'**application** définit l'identité et le comportement global de votre **CLIENTXCMS**. C'est ici que vous personnalisez l'apparence, définissez les paramètres techniques et adaptez l'interface à votre image de marque. <br/>
L'objectif est clair : **créer une expérience cohérente et professionnelle** qui reflète votre identité tout en optimisant les performances techniques.

Chaque paramètre de l'application influence directement l'expérience utilisateur, de l'affichage du logo à la gestion des erreurs techniques.

:::tip Astuce
Une application bien configurée inspire confiance. Personnalisez chaque détail pour que vos clients reconnaissent immédiatement votre marque et bénéficient d'une expérience fluide.
:::

## Paramètres essentiels

### Identité de l'application

**Nom de l'espace client** | (texte)<br />
Le nom qui apparaît dans l'interface et les communications. Ce nom est visible dans :
- Le titre des pages du navigateur
- Les emails envoyés aux clients
- L'interface d'administration
- Les factures et documents

**URL de l'application** | (URL)<br />
L'adresse complète de votre installation ClientXCMS. Assurez-vous d'utiliser :
- HTTPS en production (obligatoire pour la sécurité)
- Un domaine stable et professionnel
- Une URL sans slash final

**Logo de l'espace client** | (image)<br />
Le logo principal affiché dans l'interface. Recommandations :
- Format : PNG ou SVG pour la transparence
- Dimensions : 200x200px minimum
- Poids : Moins de 500 Ko
- Fond transparent privilégié

**Logo texte de l'espace client** | (image)<br />
Version horizontale du logo avec texte, utilisée dans :
- La barre de navigation principale
- Les emails
- Les documents PDF

**Favicon de l'espace client** | (image)<br />
L'icône affichée dans l'onglet du navigateur. Spécifications :
- Format : ICO, PNG ou SVG
- Dimensions : 32x32px ou 64x64px
- Poids : Moins de 100 Ko

### Configuration technique

**Environnement de l'espace client** | (menu déroulant)<br />
Détermine le mode de fonctionnement :

| Environnement | Usage | Caractéristiques |
|---------------|-------|------------------|
| **Production** | Clients réels | Cache activé, erreurs masquées, performances optimisées |
| **Développement** | Tests et debug | Cache désactivé, erreurs détaillées, outils de debug |

**Mode debug** | (case à cocher)<br />
Active l'affichage détaillé des erreurs. À utiliser uniquement en développement :
- ✅ **Activé** : Affiche les erreurs techniques détaillées
- ❌ **Désactivé** : Affiche des messages d'erreur génériques

**Fuseau horaire** | (menu déroulant)<br />
Définit la référence temporelle pour :
- Les timestamps dans les logs
- La génération des factures
- Les horaires affichés aux clients
- Les tâches planifiées (cron)

**Langue par défaut** | (menu déroulant)<br />
La langue utilisée quand aucune préférence n'est définie. Impact :
- Interface pour les nouveaux visiteurs
- Emails système
- Messages d'erreur
- Documentation intégrée

## Différences entre les logos

### Logo standard
Le logo carré ou vertical, utilisé comme icône :
- Page de connexion
- Emails (en-tête)
- Favicon agrandi
- Applications mobiles

Exemple de dimensions recommandées :
- 512x512px pour une qualité optimale
- 256x256px pour un usage standard
- 128x128px minimum accepté

### Logo texte
Version horizontale incluant le nom de votre entreprise :
- Barre de navigation
- Factures PDF
- Signatures email
- Documents officiels

Exemple de dimensions recommandées :
- 300x100px pour la navigation
- 600x200px pour les documents
- Ratio 3:1 idéal

:::tip Conseil
Si vous n'avez qu'une version de logo, utilisez-la pour les deux emplacements. Le système adaptera automatiquement l'affichage selon le contexte.
:::

## Impact des environnements

### Environnement Production

Optimisé pour les performances et la sécurité :

**Avantages :**
- Cache complet activé
- Compression des assets
- Minification du code
- Logs d'erreurs uniquement

**Configuration automatique :**
- Sessions sécurisées (HTTPS only)
- Headers de sécurité renforcés
- Limitation du rate limiting
- Optimisation des requêtes DB

### Environnement Développement

Conçu pour faciliter le debug et les tests :

**Avantages :**
- Rechargement automatique
- Profiler de performances
- Logs détaillés
- Accès aux routes de debug

**Attention :**
- Performances réduites
- Informations sensibles visibles
- Cache désactivé
- Consommation mémoire accrue

:::warning Important
Ne jamais utiliser l'environnement de développement avec de vrais clients. Les informations techniques exposées peuvent compromettre la sécurité de votre installation.
:::

## Configuration avancée

### Optimisation des performances

Pour des performances optimales :

1. **Images optimisées**
   - Compressez les logos avant upload
   - Utilisez des formats modernes (WebP, AVIF)
   - Respectez les dimensions recommandées

2. **Cache navigateur**
   - Les assets sont cachés automatiquement
   - Versioning automatique lors des changements
   - Headers de cache optimisés

3. **CDN et assets**
   - Compatible avec les CDN majeurs
   - Assets statiques séparables
   - Chargement asynchrone

### Personnalisation poussée

Au-delà de l'interface, vous pouvez :

- **Thème personnalisé** : CSS custom via l'interface
- **Templates email** : Personnalisation complète
- **Pages d'erreur** : Design sur mesure
- **Favicon multi-résolution** : Pour tous les devices

## Bonnes pratiques

### Checklist de configuration

- [ ] Nom d'application professionnel et mémorable
- [ ] URL en HTTPS avec certificat valide
- [ ] Logos en haute résolution
- [ ] Favicon distinctif et visible
- [ ] Fuseau horaire correct
- [ ] Mode production activé
- [ ] Debug désactivé

### Maintenance régulière

- **Vérifiez** : Les certificats SSL mensuellement
- **Testez** : L'affichage sur différents navigateurs
- **Optimisez** : Les images si les temps de chargement augmentent
- **Mettez à jour** : Les informations selon l'évolution de votre marque

### Sécurité

- **HTTPS obligatoire** : Redirigez tout le trafic HTTP
- **Headers sécurisés** : CSP, HSTS, X-Frame-Options
- **Environnement production** : Pour tous les sites publics
- **Logs sécurisés** : Stockage hors de la racine web

:::info À retenir
La configuration de l'application est votre première impression. Un paramétrage soigné avec des visuels professionnels et des réglages techniques appropriés pose les bases d'une relation de confiance avec vos clients.
:::

## Dépannage courant

| Problème | Cause probable | Solution |
|----------|----------------|----------|
| Logo non affiché | Format non supporté ou taille excessive | Vérifier format (PNG/JPG/SVG) et taille (moins de 2MB) |
| Favicon invisible | Cache navigateur | Vider le cache ou ajouter ?v=2 à l'URL |
| Erreurs non visibles | Mode production activé | Consulter les logs serveur |
| Heures incorrectes | Mauvais fuseau horaire | Vérifier config PHP et système |

## Migration et sauvegarde

### Export de configuration

Sauvegardez régulièrement :
- Les logos et favicon
- Le fichier `.env`
- La base de données
- Les personnalisations CSS

### Import sur nouvelle instance

1. Restaurer la base de données
2. Copier les fichiers media
3. Mettre à jour le `.env`
4. Vider tous les caches
5. Tester en environnement dev d'abord

:::tip Astuce finale
Votre configuration d'application est unique. Documentez vos choix et conservez des sauvegardes des assets originaux. Cela facilitera les futures évolutions et migrations.
:::