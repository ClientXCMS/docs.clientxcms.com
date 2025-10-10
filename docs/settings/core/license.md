---
sidebar_position: 2
---

# Licence

La **licence** est l'élément qui authentifie et active votre installation **CLIENTXCMS**. C'est elle qui débloque les fonctionnalités, synchronise vos extensions et garantit l'accès aux mises à jour. <br/>
L'objectif est clair : **valider votre installation et débloquer tout le potentiel** de votre CMS selon l'offre souscrite.

La licence permet la synchronisation avec les serveurs ClientXCMS, l'activation des modules achetés et le respect des limites de votre forfait.

Vous pouvez gérer votre licence depuis :

`Paramètres` > `Paramètres généraux` > `Licence`

![Interface de gestion de la licence](/img/next_gen/settings/core/license/license.png)

:::tip Astuce
Une licence active et à jour est essentielle pour le bon fonctionnement de votre hébergement. Elle garantit l'accès aux dernières fonctionnalités, aux correctifs de sécurité et au support technique.
:::

## Comprendre votre licence

### Informations affichées

L'interface de licence présente plusieurs informations cruciales :

**Statut de la licence** | (indicateur)<br />
État actuel de votre licence :
- 🟢 **Active** : Licence valide et fonctionnelle
- 🟡 **Expirée** : Renouvellement nécessaire
- 🔴 **Invalide** : Problème d'activation ou de validation
- ⚪ **Suspendue** : Compte temporairement désactivé

**Type de licence** | (texte)<br />
L'offre souscrite qui détermine :
- Le nombre de clients autorisés
- Les modules disponibles
- Les fonctionnalités débloquées
- Le niveau de support inclus

**Date d'expiration** | (date)<br />
Échéance de votre licence actuelle. Important pour :
- Planifier le renouvellement
- Éviter les interruptions de service
- Maintenir l'accès aux mises à jour

**Limites d'utilisation** | (compteurs)<br />
Visualisation de votre consommation :
- Nombre de clients actifs / limite
- Services créés / maximum autorisé
- Extensions activées / disponibles

### Types de licences disponibles

| Type | Clients max | Fonctionnalités | Support | Usage recommandé |
|------|-------------|-----------------|---------|------------------|
| **Starter** | 50 | Essentielles | Community | Petits hébergeurs, tests |
| **Business** | 500 | Complètes | Standard | Hébergeurs établis |
| **Enterprise** | Illimité | Toutes + API | Prioritaire | Grandes structures |
| **Developer** | 10 | Toutes | Technique | Développement, tests |

## Activation de la licence

### Première activation

Pour activer votre licence sur une nouvelle installation :

1. **Obtenez votre clé**
   - Connectez-vous sur [clientxcms.com](https://clientxcms.com)
   - Accédez à votre espace client
   - Copiez la clé de licence

2. **Entrez la clé**
   - Collez la clé dans le champ prévu
   - Vérifiez l'absence d'espaces
   - Validez l'activation

3. **Vérification automatique**
   - Connexion aux serveurs ClientXCMS
   - Validation du domaine
   - Téléchargement des extensions

### Validation du domaine

La licence est liée à votre domaine pour des raisons de sécurité :

**Domaines autorisés :**
- Domaine principal (exemple.com)
- Sous-domaines (*.exemple.com)
- Domaines de développement déclarés

**Changement de domaine :**
1. Connectez-vous à votre espace client
2. Modifiez le domaine autorisé
3. Réactivez la licence
4. Attendez la propagation (5-10 minutes)

:::warning Important
Un changement de domaine nécessite une validation manuelle si effectué plus de 3 fois par mois. Ceci pour éviter les abus et protéger votre licence.
:::

## Gestion des extensions

### Synchronisation automatique

La licence synchronise automatiquement :
- Les modules achetés
- Les thèmes premium
- Les plugins additionnels
- Les mises à jour disponibles

### Activation manuelle

Pour activer une nouvelle extension :

1. **Achat sur la marketplace**
   - Sélectionnez l'extension
   - Procédez au paiement
   - Extension ajoutée à votre compte

2. **Synchronisation**
   - Cliquez sur "Forcer l'actualisation"
   - Attendez la synchronisation
   - L'extension apparaît dans la liste

3. **Installation**
   - Accédez aux extensions
   - Installez le nouveau module
   - Configurez selon vos besoins

## Mise à niveau de licence

### Pourquoi upgrader ?

Passez à une licence supérieure pour :
- Augmenter le nombre de clients
- Débloquer des fonctionnalités
- Obtenir un meilleur support
- Supprimer les limitations

### Processus d'upgrade

1. **Évaluation des besoins**
   - Analysez votre usage actuel
   - Anticipez votre croissance
   - Identifiez les fonctionnalités manquantes

2. **Calcul du coût**
   - Différence entre les offres
   - Prorata temporel appliqué
   - Pas de pénalité d'upgrade

3. **Application immédiate**
   - Paiement de la différence
   - Activation instantanée
   - Conservation des données

:::tip Économie
L'upgrade est toujours au prorata. Si vous upgradez à mi-parcours de votre période de facturation, vous ne payez que la différence pour la période restante.
:::

## Renouvellement

### Notifications automatiques

Le système vous prévient :
- 30 jours avant expiration (email)
- 15 jours avant (email + dashboard)
- 7 jours avant (alertes quotidiennes)
- Jour J (notifications urgentes)

### Conséquences de l'expiration

**Licence expirée depuis :**

| Durée | Impact | Actions possibles |
|-------|--------|-------------------|
| 0-7 jours | Avertissements uniquement | Fonctionnement normal, renouvellement simple |
| 8-30 jours | Limitations activées | Pas de nouveaux clients, renouvellement requis |
| 31-60 jours | Mode lecture seule | Consultation uniquement, données préservées |
| 60+ jours | Accès administrateur bloqué | Contact support nécessaire |

### Processus de renouvellement

1. **Renouvellement automatique** (recommandé)
   - Carte bancaire enregistrée
   - Prélèvement à l'échéance
   - Continuité de service garantie

2. **Renouvellement manuel**
   - Notification de rappel
   - Paiement via espace client
   - Activation immédiate

## Résolution des problèmes

### Erreurs courantes

| Erreur | Cause | Solution |
|--------|-------|----------|
| "Licence invalide" | Clé incorrecte ou domaine non autorisé | Vérifier la clé et le domaine dans l'espace client |
| "Limite atteinte" | Dépassement du nombre de clients | Upgrader la licence ou archiver des clients |
| "Synchronisation échouée" | Problème de connexion | Vérifier pare-feu et connexion internet |
| "Extension non disponible" | Non incluse dans l'offre | Vérifier compatibilité ou acheter séparément |

### Forcer l'actualisation

Utilisez cette fonction quand :
- Une extension achetée n'apparaît pas
- Les limites affichées sont incorrectes
- Après un changement de domaine
- Suite à un upgrade de licence

**Processus :**
1. Cliquez sur "Forcer l'actualisation"
2. Patientez pendant la synchronisation
3. Vérifiez les changements
4. Videz le cache si nécessaire

### Logs de licence

Consultez l'historique :
- Activations et désactivations
- Changements de domaine
- Upgrades et downgrades
- Tentatives de connexion échouées

## Bonnes pratiques

### Sécurité de la licence

- **Ne partagez jamais** votre clé de licence
- **Protégez l'accès** à l'interface d'administration
- **Surveillez** les activations suspectes
- **Documentez** les changements de domaine

### Optimisation de l'usage

- **Monitorer** régulièrement vos limites
- **Archiver** les clients inactifs
- **Planifier** les upgrades selon la croissance
- **Profiter** des offres de renouvellement anticipé

### Continuité de service

- **Activez** le renouvellement automatique
- **Maintenez** vos informations de paiement à jour
- **Surveillez** les emails de notification
- **Gardez** une marge sur vos limites

:::info À retenir
Votre licence est le cœur de votre installation ClientXCMS. Une gestion proactive garantit un fonctionnement optimal, l'accès aux dernières innovations et la tranquillité d'esprit pour vous concentrer sur votre activité.
:::

## Support et assistance

### Canaux disponibles

Selon votre licence :

**Community (Starter)**
- Forum communautaire
- Documentation en ligne
- FAQ et tutoriels

**Standard (Business)**
- Tickets de support
- Délai de réponse : 24-48h
- Assistance technique

**Prioritaire (Enterprise)**
- Support téléphonique
- Délai de réponse : 2-4h
- Gestionnaire de compte dédié

### Informations à fournir

Pour toute demande :
- Numéro de licence
- Domaine concerné
- Version de ClientXCMS
- Description détaillée du problème
- Captures d'écran si pertinent

:::tip Conseil final
Une licence bien gérée est transparente au quotidien. Configurez les alertes, le renouvellement automatique et oubliez-la pour vous concentrer sur votre croissance.
:::