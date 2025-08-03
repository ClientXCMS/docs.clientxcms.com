---
sidebar_position: 2
---

# Départements

Dans **CLIENTXCMS**, les **départements** constituent l'épine dorsale de l'organisation de votre centre d'aide. <br/>
L'objectif est organisationnel : **structurer le support par spécialités**, **orienter efficacement les demandes** et **optimiser l'expertise de chaque équipe**. Une organisation départementale bien pensée accélère les résolutions, améliore la qualité des réponses et permet une montée en compétences ciblée.

Les départements permettent de catégoriser automatiquement les tickets selon leur nature et de les diriger vers les bonnes équipes.

Vous pouvez gérer les départements depuis :

`Paramètres` > `Centre d'aide` > `Départements`

![Interface de gestion des départements](/img/next_gen/settings/helpdesk/departments/index_admin.png)

:::tip Astuce
Des départements bien organisés transforment le chaos des demandes en **flux de travail structuré**. 
Chaque client est dirigé vers l'expert le plus qualifié pour son problème.
:::

## Pourquoi organiser en départements ?

La structuration départementale est essentielle pour :

* **Spécialiser les équipes** selon leurs compétences
* **Accélérer les résolutions** grâce à l'expertise ciblée
* **Améliorer la satisfaction** avec des réponses plus précises
* **Optimiser la charge** de travail entre les équipes
* **Faciliter le suivi** des métriques par domaine

:::tip Astuce
C'est comme organiser un hôpital en services spécialisés 🏥 — cardiologie, pédiatrie, urgences... chaque patient va au bon endroit du premier coup.
:::

## Départements par défaut

### Configuration initiale

CLIENTXCMS propose une structure départementale standard pour démarrer rapidement :

| Département | Utilisation | Expertise requise |
|-------------|-------------|-------------------|
| 🔧 **Technique** | Problèmes serveurs, bugs, configurations | Informatique, développement |
| 💰 **Facturation** | Factures, paiements, remboursements | Comptabilité, commercial |
| 🏢 **Commercial** | Ventes, devis, négociations | Business, relation client |
| 📋 **Général** | Demandes diverses, informations | Support généraliste |

### Adaptation à votre activité

Ces départements par défaut peuvent être :
- **Modifiés** : Changement de nom, icône, description
- **Supprimés** : Si non pertinents pour votre activité
- **Complétés** : Ajout de départements spécifiques

**Exemples d'adaptations** :

#### Hébergeur web
- 🔧 **Technique** : Serveurs, DNS, SSL
- 💰 **Facturation** : Paiements, renouvellements
- 🚀 **Migration** : Transferts de sites
- 📈 **Commercial** : Nouvelles offres

#### Agence de développement
- 💻 **Développement** : Bugs, nouvelles fonctionnalités
- 🎨 **Design** : Interface, UX/UI
- 📋 **Projet** : Planning, spécifications
- 💰 **Facturation** : Devis, paiements

## Création d'un département

### Processus de création

Pour ajouter un nouveau département :

1. Cliquez sur **"Créer"** en haut à droite
2. Remplissez les informations du département
3. Configurez l'apparence visuelle
4. Sauvegardez la configuration

![Formulaire de création d'un département](/img/next_gen/settings/helpdesk/departments/create.png)

### Configuration du département

**Nom** | (texte)<br />
Le nom affiché dans l'interface client et administrateur.
Utilisez un terme clair et immédiatement compréhensible.

**Exemples de noms efficaces** :
- ✅ "Support Technique" plutôt que "Tech"
- ✅ "Facturation & Paiements" plutôt que "Compta"
- ✅ "Assistance Commerciale" plutôt que "Ventes"

**Icône** | (sélecteur d'icône)<br />
Représentation visuelle du département pour une identification rapide.

**Icônes recommandées** :
- 🔧 Technique : `fas fa-cogs`, `fas fa-wrench`
- 💰 Facturation : `fas fa-dollar-sign`, `fas fa-credit-card`
- 🏢 Commercial : `fas fa-handshake`, `fas fa-chart-line`
- 📋 Général : `fas fa-question-circle`, `fas fa-info-circle`

**Description** | (texte long)<br />
Explication détaillée du type de demandes traitées par ce département.
Aide les clients à choisir le bon département.

**Exemple de description pour "Support Technique"** :
```
Problèmes techniques, pannes serveur, configurations, erreurs de site, 
questions DNS, certificats SSL, performances et optimisations.
```

## Interface client

### Sélection de département

Lors de la création d'un ticket, les clients voient tous les départements disponibles :

![Sélection de département côté client](/img/next_gen/settings/helpdesk/departments/departments.png)

L'affichage comprend :
- **Icône** du département
- **Nom** descriptif
- **Description** d'aide au choix

### Pré-sélection automatique

Vous pouvez diriger automatiquement les clients vers un département via des paramètres URL :

#### Paramètres disponibles

| Paramètre | Description | Exemple de valeur |
|-----------|-------------|-------------------|
| `department` | ID du département | `1` (Technique) |
| `priority` | Priorité du ticket | `low`, `medium`, `high` |
| `subject` | Sujet pré-rempli | `Problème de connexion` |
| `content` | Message pré-rempli | `Bonjour, j'ai un problème avec...` |
| `related_id` | Service concerné | `123` (ID du service) |

#### Exemples d'URLs pré-configurées

**Support technique avec contexte** :
```
https://demo.clientxcms.com/client/support/create?department=1&priority=high&subject=Serveur+inaccessible
```

**Facturation avec service lié** :
```
https://demo.clientxcms.com/client/support/create?department=2&related_id=456&subject=Question+facture
```

**Demande commerciale** :
```
https://demo.clientxcms.com/client/support/create?department=4&content=Je+souhaiterais+un+devis+pour...
```

### Utilisation des URLs pré-configurées

**Dans vos e-mails** : Liens directs selon le contexte
**Sur votre site** : Boutons d'aide contextuelle
**En signature** : Accès rapide au support
**Dans vos FAQ** : Création de ticket ciblée

## Gestion des départements

### Modification d'un département

Pour éditer un département existant :

1. Cliquez sur **"Afficher"** dans la liste
2. Modifiez les informations nécessaires
3. Adaptez les traductions si besoin
4. Sauvegardez les modifications

![Interface de modification d'un département](/img/next_gen/settings/helpdesk/departments/edit.png)

### Traductions multilingues

Chaque département peut être traduit dans toutes les langues activées :
- **Nom** spécifique par langue
- **Description** adaptée culturellement
- **Cohérence** avec la terminologie locale

**Accès aux traductions** : Icône à droite de chaque champ

### Suppression de départements

**Conditions de suppression** :
- Aucun ticket ouvert ou fermé associé
- Aucune règle d'automatisation référençant ce département
- Confirmation explicite de l'action

**Alternative à la suppression** :
Plutôt que supprimer, considérez :
- **Désactivation temporaire** : Masquer sans supprimer
- **Fusion** : Rediriger vers un autre département
- **Archivage** : Conserver pour l'historique

:::warning Attention
La suppression d'un département est **irréversible**. Tous les liens et références seront brisés. Privilégiez la désactivation temporaire.
:::

## Stratégies d'organisation

### Selon la taille d'équipe

#### Petite équipe (1-3 personnes)
```
- Général (tout type de demande)
- Technique (problèmes spécialisés)
```

#### Équipe moyenne (4-10 personnes)
```
- Technique (serveurs, bugs)
- Commercial (ventes, devis)  
- Facturation (paiements, comptes)
- Général (divers)
```

#### Grande organisation (10+ personnes)
```
- Support N1 (premiers contacts)
- Support N2 (problèmes complexes)
- Facturation (comptabilité)
- Commercial (ventes)
- Projets (développements spécifiques)
- Urgences (disponibilité 24/7)
```

### Selon le type d'activité

#### Hébergeur
```
- Infrastructure (serveurs, réseau)
- Applications (sites, e-mails)
- Sécurité (SSL, sauvegardes)
- Commercial (nouvelles offres)
```

#### SaaS/Logiciel
```
- Bugs (dysfonctionnements)
- Fonctionnalités (demandes d'évolution)
- Intégrations (API, webhooks)
- Formation (aide à l'utilisation)
```

### Optimisation continue

#### Métriques à surveiller
- **Volume** par département
- **Temps de résolution** moyen
- **Taux de satisfaction** par équipe
- **Transferts** entre départements

#### Ajustements réguliers
- **Répartition** selon les compétences
- **Fusion** des départements peu actifs
- **Division** des départements surchargés
- **Formation** croisée des équipes

## Automatisation avancée

### Routage intelligent

Configurez des règles pour diriger automatiquement les tickets :
- **Mots-clés** dans le sujet → Département technique
- **Services spécifiques** → Équipe dédiée
- **Heures ouvrables** → Support standard vs urgences
- **Langue client** → Équipe multilingue

### Escalade automatique

Définissez des processus d'escalade :
- **Délai dépassé** → Niveau supérieur
- **Mot-clé urgent** → Équipe prioritaire
- **Client VIP** → Support premium
- **Complexité élevée** → Experts spécialisés

:::tip À retenir
L'organisation en départements doit évoluer avec votre activité. Commencez simple, observez les flux de tickets, et adaptez progressivement. Une bonne organisation départementale peut diviser par deux votre temps de résolution moyen.
:::