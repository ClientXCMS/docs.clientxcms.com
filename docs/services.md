---
sidebar_position: 3
---

# Services

Les services sont les produits que vous vendez à vos clients. Ils peuvent être des serveurs de jeux, des serveurs vocaux, des serveurs web, des VPS, des hébergements web, etc. Les services sont liés à un client et souvent reliés à un **serveur**. Il permet d'avoir un panel de gestion avancé pour vos clients et pour vous.
Ces services peuvent être livrés manuellement ou automatiquement, selon vos besoins. Ils peuvent être renouvelés par le client ou l'administrateur.

Pour les gérer, rendez-vous dans l'onglet `Services` de l'administration.

## Coté client
Le client peut voir ses services depuis son espace client, il peut voir les détails de son service, le gérer, le renouveler, ou l'annuler. 
Un tableau est disponible sur la page principale de l'espace client pour voir les services actifs, ansi qu'une page dédiée pour voir tous les services.
![img](/img/next_gen/services/front.png)
## Administration
### Liste des services
La liste des services est disponible sur `Espace Administration` > `Services`. Vous pouvez voir les services actifs, suspendus, expirés, terminés et annulés.
![img](/img/next_gen/services/admin_list.png)
#### Actions de masse
Vous pouvez effectuer des actions de masse sur les services, comme les suspendre, les annuler, les terminer, les supprimer, les renouveler, les unsuspendre, ajouter des jours, ou les soustraire.
### Filtre
Vous pouvez filtrer les services par un ou plusieurs filtres ou rechercher un service spécifique via le nom du client, identifiant, nom de service ou produit.
![img](/img/next_gen/services/admin_filter.png)
### Importation de service
Il est disponible d'importer des services déjà existants sur votre serveur, pour cela rendez-vous sur `Espace Administration` > `Services` > `Créer`.

![img](/img/next_gen/services/create_step1.png)

Dans cette étape, veuillez sélectionner le client, le produit et le type de service. Puis cliquez sur suivant.
Le type du produit être le même que le type du produit que vous avez déjà créé dans les produits.

![img](/img/next_gen/services/create_import.png)

Dans cette seconde étape, vous pouvez remplir le formulaire et choisir selon le type de module, les VPS ou serveurs de jeux déjà existants que vous avez sur votre serveur. Puis cliquez sur importer

- **Nom du service** : Nom du service
- **Expiration** : Date d'expiration du service
- **Prix** : Prix du service
- **Prix initial** : Prix initial du service
- **Serveur** : Serveur où le service est hébergé
- **Recurrence** : Cycle de facturation
- **Notes** : Notes sur le service
- **Renouvellement maximum** : Nombre maximum de renouvellement (vide pour illimité)
## Création de service
Il est disponible de créer un service depuis CLIENTXCMS, Pour y accéder : `Espace Administration` > `Services` > `Créer`

Dans cette étape, veuillez sélectionner le client, le produit et le type de service. Puis cliquez sur suivant.
Le type du produit être le même que le type du produit que vous avez déjà créé dans les produits.

Vous pouvez également sélectionner aucun produit pour créer un service personnalisé en choisissant que le type et le client.
![img](/img/next_gen/services/create_step1.png)

Dans cette seconde étape, vous pouvez remplir le formulaire et choisir selon le type de module, les VPS ou serveurs de jeux déjà existants que vous avez sur votre serveur. Puis cliquez sur importer

- **Nom du service** : Nom du service
- **Expiration** : Date d'expiration du service
- **Prix** : Prix du service
- **Prix initial** : Prix initial du service
- **Serveur** : Serveur où le service est hébergé
- **Recurrence** : Cycle de facturation
- **Notes** : Notes sur le service
- **Renouvellement maximum** : Nombre maximum de renouvellement (vide pour illimité)

![img](/img/next_gen/services/create_service.png)

:::info
La création et l'importation de service ne créent pas de facture, il faudra passer par une commande pour générer une facture.
:::
## Détails d'un service
Vous pouvez voir les détails d'un service en cliquant sur le bouton "Afficher" sur la page des services. Celle-ci comporte beaucoup d'informations sur le service, le client, les renouvellements. Cela permets d'avoir une vue d'ensemble sur le service.
![img](/img/next_gen/services/show_service.png)
### Edition
Vous pouvez modifier les détails du service en modifiant les champs puis en cliquant sur le bouton d'édition.
![img](/img/next_gen/services/edit_service.png)

- **Nom du service** : Nom du service
- **Expiration** : Date d'expiration du service
- **Prix** : Prix du service
- **Prix initial** : Prix initial du service
- **Serveur** : Serveur où le service est hébergé
- **Recurrence** : Cycle de facturation
- **Notes** : Notes sur le service
- **Renouvellement maximum** : Nombre maximum de renouvellement (vide pour illimité)
- **Etat** : Etat du service
- **Type de service** : Type de service
:::info
Nous conseillons de pas modifier le statut du service, via l'édition. Il est préférable de passer par les actions. Il est uniquement là en cas de besoin majeur
:::
### Actions
![img](/img/next_gen/services/actions.png)
##### Terminer
Le service sera supprimé du serveur, l'état du service sera défini en en tant que terminé.
##### Suspendre/Unsuspend
Vous pouvez suspendre ou unsuspendre un service. En cas de suspension, le service sera suspendu du serveur, l'état du service sera défini en en tant que suspendu. En cas d'unsuspend, le service sera réactivé sur le serveur et l'état du service sera redéfini en tant que en ligne.
Vous pouvez ajouter une raison ou notifié le client.
##### Renouvellement
Permet de voir les renouvellements du service ainsi que de renouveler le service sur un cycle de facturation.
Vous pouvez également rajouter le renouvellement sur une facture existante.
##### Fiche client
Redirige vers la fiche client du client lié au service
#### Metadonnées
Permet de voir les métadonnées du service et de les modifier. Cela affiche également les données de la commande.
#### Annulation
Permet d'annuler le service ou de voir les détails de l'annulation.
Il y a deux types d'annulation :
- Annulation à la fin du cycle : Le service sera annulé à la fin du cycle de facturation
- Annulation immédiate : Le service sera annulé immédiatement
#### Relivrer
Permet de relivrer le service. Il va forcer la suppression du service et le recréer.
### Sous page
![img](/img/next_gen/services/tab.png)

Il peut avoir que le module de livraison dispose de plusieurs onglets pour mieux organiser les informations.
### Panel
![img](/img/next_gen/services/panel.png)

Le panel est disponible pour les services qui ont un panel de gestion. Il permet de voir les informations du services ou de le réinstaller.
### Cycle de facturation
Les cycles de facturation permettent de définir la période de facturation pour un produit. Voici les cycles de facturation disponibles :
- Mensuel
- Trimestriel
- Semestriel
- Annuel
- Biannuel
- Triennal
- Hebdomadaire

### Metadonnées
-------------
| Clé | Valeur | Description |
| --- | ------ | ----------- |
| `max_renewals_in_current_month` | nbr | L imite le nombre de renouvellement pour le mois courant |
| `max_renewals_in_current_week`  | 1 | Nombre de renouvellements maximum par semaine                   |
| `max_renewals` | 1 | Nombre de renouvellements maximum |
| `disable_notify_expiration` | true | Désactive les notifications d'expiration |
-------------