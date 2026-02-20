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
[<img src="https://clientxcms.com/assets/images/logo/LogoBlueText.png" width="300" height="100"/>](https://clientxcms.com/assets/images/logo/LogoBlueText.png)
