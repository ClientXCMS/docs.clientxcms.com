---
sidebar_position: 0
---

import ThemedImage from '@theme/ThemedImage';

# Paramètres généraux

Les **paramètres généraux** constituent le socle de configuration de votre **CLIENTXCMS**. C'est ici que vous définissez l'identité de votre hébergement, configurez les fonctionnalités essentielles et personnalisez l'expérience utilisateur. <br/>
L'objectif est simple : **adapter le CMS à vos besoins spécifiques** pour offrir une plateforme professionnelle et cohérente à vos clients.

Les paramètres généraux regroupent plusieurs aspects fondamentaux : les informations de l'application, la licence, les langues, les emails et la maintenance.

Vous pouvez gérer ces paramètres depuis :

`Paramètres` > `Paramètres Généraux` > `Paramètres globaux`

<ThemedImage
  alt="Interface des paramètres généraux"
  sources={{
    light: '/img/next_gen/settings/general_settings/general_settings.png',
    dark: '/img/next_gen/settings/general_settings/general_settings_dark.png'
  }}
/>

:::tip Astuce
Des paramètres bien configurés sont la base d'un hébergement professionnel. Prenez le temps de personnaliser chaque aspect pour refléter votre identité et optimiser l'expérience de vos clients.
:::

## Vue d'ensemble

### Architecture des paramètres

Les paramètres généraux s'organisent autour de plusieurs composants :

* **[Application](./app)** : Configuration globale du CMS (nom, URL, timezone, etc.)
* **[Licence](./license)** : Gestion de votre licence ClientXCMS
* **[Langues](./locales)** : Configuration multilingue et traductions
* **[Email](./mail)** : Paramètres d'envoi des emails
* **[Maintenance](./maintenance)** : Mode maintenance et messages personnalisés

### Impact des paramètres

Les paramètres généraux affectent :
- L'apparence globale de votre plateforme
- Les communications avec vos clients
- La disponibilité des services
- L'expérience utilisateur multilingue
- La conformité légale et technique

## Configuration initiale

### Ordre de configuration recommandé

Pour une mise en place optimale, suivez cet ordre :

1. **Configuration de l'application**
   - Définir le nom et l'URL
   - Configurer la timezone
   - Paramétrer les options générales

2. **Activation de la licence**
   - Entrer votre clé de licence
   - Vérifier l'activation
   - Contrôler les limites

3. **Configuration des emails**
   - Paramétrer le serveur SMTP
   - Définir les adresses d'envoi
   - Tester l'envoi

4. **Configuration des langues**
   - Activer les langues souhaitées
   - Définir la langue par défaut
   - Personnaliser les traductions

5. **Préparation de la maintenance**
   - Créer des messages personnalisés
   - Tester le mode maintenance
   - Préparer les procédures

:::warning Important
Certains paramètres nécessitent un redémarrage des services ou une reconstruction du cache. Planifiez vos modifications importantes en dehors des heures de pointe.
:::

## Paramètres critiques

### Sécurité et performance

Certains paramètres ont un impact direct sur la sécurité et les performances :

| Paramètre | Impact | Recommandation |
|-----------|--------|----------------|
| **URL de l'application** | Sécurité HTTPS | Toujours utiliser HTTPS en production |
| **Timezone** | Logs et facturation | Définir selon votre zone géographique |
| **Configuration email** | Communications clients | Utiliser un serveur SMTP dédié |
| **Mode debug** | Sécurité | Désactiver en production |

### Conformité légale

Assurez-vous de configurer :
- Les mentions légales dans l'application
- Les emails conformes au RGPD
- Les langues selon votre marché
- Les informations de contact

## Bonnes pratiques

### Organisation

- **Documentez vos changements** : Gardez une trace des modifications
- **Testez en préproduction** : Validez avant d'appliquer en production
- **Sauvegardez** : Avant toute modification majeure
- **Planifiez** : Les changements impactants hors heures de pointe

### Maintenance régulière

- **Vérifiez la licence** : Renouvellement et limites
- **Testez les emails** : Délivrabilité mensuelle
- **Mettez à jour** : Les traductions selon les retours
- **Contrôlez** : Les logs d'erreurs régulièrement

### Optimisation

- **Cache** : Activez le cache pour les performances
- **CDN** : Utilisez un CDN pour les assets statiques
- **Compression** : Activez la compression des réponses
- **Monitoring** : Surveillez les performances

:::tip Conseil
Les paramètres généraux sont le fondement de votre installation. Une configuration soignée dès le départ vous évitera de nombreux problèmes par la suite et améliorera l'expérience de vos clients.
:::

## Cas d'usage courants

### Nouveau déploiement

1. Configurez d'abord l'application avec les bonnes URLs
2. Activez votre licence
3. Configurez les emails avant d'inviter des utilisateurs
4. Personnalisez les langues selon votre marché
5. Préparez les messages de maintenance

### Migration depuis un autre système

1. Planifiez une fenêtre de maintenance
2. Configurez les redirections d'URLs
3. Importez les traductions personnalisées
4. Testez exhaustivement les emails
5. Validez la licence pour le nouveau domaine

### Expansion internationale

1. Activez les nouvelles langues nécessaires
2. Traduisez les contenus essentiels
3. Adaptez les fuseaux horaires si nécessaire
4. Configurez des emails multilingues
5. Testez l'expérience dans chaque langue

## Dépannage fréquent

### Problèmes courants

| Problème | Cause probable | Solution |
|----------|----------------|----------|
| Emails non reçus | Configuration SMTP incorrecte | Vérifier les paramètres et logs |
| Erreurs de timezone | Mauvaise configuration | Vérifier PHP et système |
| Licence invalide | Domaine non autorisé | Contacter le support |
| Traductions manquantes | Cache non vidé | Vider le cache des traductions |

### Logs et diagnostics

Consultez les logs dans :
- `/storage/logs/` pour les erreurs applicatives
- Logs du serveur mail pour les problèmes SMTP
- Console navigateur pour les erreurs JavaScript
- Logs serveur web pour les erreurs HTTP

## Intégrations avancées

### Variables d'environnement

Certains paramètres peuvent être définis via `.env` :
- Configuration base de données
- Paramètres de cache
- Clés API externes
- Mode debug

### Hooks et événements

ClientXCMS permet d'intercepter :
- Les changements de configuration
- Les envois d'emails
- Les changements de langue
- Les activations de maintenance

### API de configuration

Utilisez l'API pour :
- Automatiser les déploiements
- Synchroniser les configurations
- Monitorer les paramètres
- Déclencher des actions

:::info À retenir
Les paramètres généraux sont le cœur de votre installation ClientXCMS. Une configuration réfléchie et une maintenance régulière garantissent une expérience optimale pour vos clients et une gestion sereine pour vous.
:::

## Ressources complémentaires

Pour approfondir la configuration de vos paramètres généraux, consultez :

import DocCardList from '@theme/DocCardList';

<DocCardList />