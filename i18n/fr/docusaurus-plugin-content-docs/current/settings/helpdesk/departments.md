---
sidebar_position: 2
---
# Départements

Dans **CLIENTXCMS**, les **départements** constituent l'épine dorsale de l'organisation de votre centre d'aide.
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

| Département            | Utilisation                               | Expertise requise            |
| ----------------------- | ----------------------------------------- | ---------------------------- |
| 🔧**Technique**   | Problèmes serveurs, bugs, configurations | Informatique, développement |
| 💰**Facturation** | Factures, paiements, remboursements       | Comptabilité, commercial    |
| 🏢**Commercial**  | Ventes, devis, négociations              | Business, relation client    |
| 📋**Général**   | Demandes diverses, informations           | Support généraliste        |

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

**Nom** | (texte)
Le nom affiché dans l'interface client et administrateur.
Utilisez un terme clair et immédiatement compréhensible.

**Exemples de noms efficaces** :

- ✅ "Support Technique" plutôt que "Tech"
- ✅ "Facturation & Paiements" plutôt que "Compta"
- ✅ "Assistance Commerciale" plutôt que "Ventes"

**Icône** | (sélecteur d'icône)
Représentation visuelle du département pour une identification rapide.

**Description** | (texte long)
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

| Paramètre     | Description         | Exemple de valeur                      |
| -------------- | ------------------- | -------------------------------------- |
| `department` | ID du département  | `1` (Technique)                      |
| `priority`   | Priorité du ticket | `low`, `medium`, `high`          |
| `subject`    | Sujet pré-rempli   | `Problème de connexion`             |
| `content`    | Message pré-rempli | `Bonjour, j'ai un problème avec...` |
| `related_id` | Service concerné   | `123` (ID du service)                |

#### Exemples d'URLs pré-configurées

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
	<TabItem value="support_technique_with_contexte" label="Support technique avec contexte">
	```
	https://demo.clientxcms.com/client/support/create?department=1&priority=high&subject=Serveur+inaccessible
	```
    </TabItem>
    <TabItem value="billing_question" label="Question de facturation">
	```
	https://demo.clientxcms.com/client/support/create?department=2&related_id=456&subject=Question+facture
	```
    </TabItem>
    <TabItem value="commercial_request" label="Demande commerciale">
	```
	https://demo.clientxcms.com/client/support/create?department=4&content=Je+souhaiterais+un+devis+pour...
	```
	</TabItem>
</Tabs>

	Utilisez ces URLs pré-configurées pour :

	- **Dans vos e-mails** : insérer un lien direct contextuel vers la création d'un ticket pré-rempli.
	- **Sur votre site** : boutons d'aide qui ouvrent la création de ticket avec le bon département/priorité.
	- **Dans les signatures** : proposer un accès rapide au support adapté selon la nature du message.
	- **Automatisation** : appels depuis des scripts ou des notifications pour ouvrir un ticket lié à un service précis.

	Astuce : encodez correctement les paramètres (espaces, caractères spéciaux) pour garantir le bon remplissage des champs.

### Utilisation des URLs pré-configurées

- **Dans vos e-mails** : Liens directs selon le contexte
- **Sur votre site** : Boutons d'aide contextuelle
- **En signature** : Accès rapide au support
- **Dans vos FAQ** : Création de ticket ciblée

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
