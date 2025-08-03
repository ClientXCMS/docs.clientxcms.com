---
sidebar_position: 4
---

import ThemedImage from '@theme/ThemedImage';

# Maintenance

Dans **CLIENTXCMS**, le mode **maintenance** est un outil essentiel pour **gérer les périodes d'indisponibilité de votre plateforme**. <br/>
L'objectif est clair : **informer vos clients de manière professionnelle** lors de travaux techniques tout en **gardant le contrôle de votre système**. Une bonne gestion de la maintenance permet de maintenir la confiance de vos clients, même pendant les interruptions de service, et de garantir une communication transparente.

Le mode maintenance est particulièrement utile lors de mises à jour importantes, de migrations de données ou de résolutions de problèmes techniques.

Vous pouvez gérer la maintenance depuis :

`Paramètres` > `Paramètres généraux` > `Maintenance`

<ThemedImage
  alt="Accès à la configuration de la maintenance"
  sources={{
    light: '/img/next_gen/settings/core/maintenance/maintenance.png',
    dark: '/img/next_gen/settings/core/maintenance/maintenance_dark.png'
  }}
/>

:::tip Astuce
Le mode maintenance est votre **bouclier de protection** pendant les opérations sensibles.
Il permet de travailler sereinement tout en gardant vos clients informés de la situation.
:::

## Pourquoi utiliser le mode maintenance ?

Le mode maintenance est indispensable pour :

* **Protéger vos données** pendant les mises à jour critiques
* **Éviter les erreurs** causées par des accès pendant des modifications
* **Communiquer professionnellement** sur les interruptions de service
* **Maintenir la confiance** en montrant que les maintenances sont planifiées

:::tip Astuce
C'est comme mettre un panneau "Fermé pour travaux" sur votre boutique 🚧 — vos clients comprennent et apprécient la transparence.
:::

## Configuration du mode maintenance

### Activation et désactivation

**Activer la maintenance** | (interrupteur)<br />
Active ou désactive instantanément le mode maintenance sur votre plateforme.
Lorsqu'activé, seuls les administrateurs peuvent accéder au système.

:::warning Important
Une fois la maintenance activée, tous les utilisateurs non-administrateurs seront automatiquement déconnectés et redirigés vers la page de maintenance.
:::

### Message d'information

**Message de maintenance** | (zone de texte)<br />
Le message principal affiché sur la page de maintenance.
Expliquez brièvement la raison de l'interruption et la durée estimée.

Exemple de message efficace :
```
Nous effectuons actuellement une mise à jour importante de nos systèmes.
Notre plateforme sera de nouveau disponible dans environ 2 heures.
Merci de votre compréhension.
```

### Personnalisation visuelle

**URL de l'image de maintenance** | (URL)<br />
Ajoutez une image personnalisée pour illustrer la page de maintenance.
Peut être votre logo ou une illustration thématique.

**Icône de maintenance** | (texte)<br />
Définit l'icône affichée sur la page (utilise les classes d'icônes CSS).
Par exemple : `fas fa-tools` pour une icône d'outils.

### Options de contournement

**URL de maintenance** | (URL)<br />
Lien externe vers lequel rediriger les utilisateurs pendant la maintenance.
Utile pour diriger vers une page de statut ou un site temporaire.

**Texte du bouton de maintenance** | (texte)<br />
Le texte affiché sur le bouton de redirection.
Par exemple : "Voir le statut" ou "Plus d'informations".

## Comportement du système en maintenance

### Pour les administrateurs

✅ **Accès complet maintenu** : Les administrateurs peuvent toujours se connecter
✅ **Travail sans interruption** : Toutes les fonctionnalités restent accessibles
✅ **Indicateur visuel** : Un badge ou notification rappelle que la maintenance est active

### Pour les utilisateurs

🚫 **Accès bloqué** : Impossible de se connecter à l'espace client
🚫 **Sessions terminées** : Les utilisateurs connectés sont déconnectés
✅ **Page informative** : Affichage de la page de maintenance personnalisée

## Personnalisation avancée

### Modifier le template de maintenance

Pour une personnalisation complète, vous pouvez modifier le fichier template :

```
resources/themes/default/views/maintenance.blade.php
```

Cela permet de :
- Adapter complètement le design à votre charte graphique
- Ajouter des éléments dynamiques (compte à rebours, etc.)
- Intégrer des informations supplémentaires

### Bonnes pratiques de personnalisation

1. **Conservez la simplicité** : La page doit charger rapidement
2. **Restez informatif** : Message clair sur la durée et la raison
3. **Gardez votre identité** : Utilisez vos couleurs et votre logo
4. **Pensez mobile** : La page doit être responsive

## Exemples d'utilisation

### Maintenance planifiée

Pour une mise à jour prévue :
1. Activez la maintenance **avant** de commencer les travaux
2. Définissez un message précis avec l'heure de retour estimée
3. Effectuez vos modifications
4. Désactivez la maintenance une fois terminé

### Maintenance d'urgence

En cas de problème critique :
1. Activez immédiatement la maintenance
2. Utilisez un message générique si nécessaire
3. Mettez à jour le message avec plus de détails dès que possible
4. Communiquez sur d'autres canaux (réseaux sociaux, email)

## Aperçu de la page de maintenance

Voici à quoi ressemble la page de maintenance vue par vos utilisateurs :

<ThemedImage
  alt="Aperçu de la page de maintenance"
  sources={{
    light: '/img/next_gen/settings/core/maintenance/maintenance_home.png',
    dark: '/img/next_gen/settings/core/maintenance/maintenance_home_dark.png'
  }}
/>

La page affiche :
- Votre message personnalisé
- L'image ou icône configurée
- Le bouton de redirection (si configuré)
- Un design épuré et professionnel

## Conseils et recommandations

### Communication proactive

- **Prévenez à l'avance** : Informez vos clients des maintenances planifiées
- **Soyez précis** : Donnez des horaires clairs et respectez-les
- **Restez joignable** : Indiquez un moyen de contact pour les urgences

### Optimisation du temps

- **Heures creuses** : Planifiez les maintenances aux heures de faible activité
- **Durée minimale** : Préparez tout en amont pour réduire le temps d'arrêt
- **Tests préalables** : Testez les modifications dans un environnement de test

### Suivi post-maintenance

- **Vérifiez tout** : Assurez-vous que tout fonctionne après la maintenance
- **Communiquez la fin** : Informez vos clients que le service est rétabli
- **Surveillez** : Restez vigilant aux éventuels problèmes post-maintenance

:::tip À retenir
Le mode maintenance est un outil puissant qui, bien utilisé, renforce la confiance de vos clients. Une maintenance bien gérée et communiquée est perçue comme un signe de professionnalisme et de fiabilité.
:::