---
sidebar_position: 7
---
# Créer son premier service
Vous pouvez créer un service en quelques clics depuis votre espace client. Pour cela, rendez-vous sur `Espace Administation` > `Services` > `Créer`.

Dans cette étape, veuillez sélectionner le client, le produit que vous avez créé et le type de service. Puis cliquez sur suivant.
![img](/img/next_gen/services/create_step1.png)

Dans cette seconde étape, vous pouvez remplir le formulaire et choisir selon le type de module, les VPS ou serveurs de jeux déjà existants que vous avez sur votre serveur. Puis cliquez sur importer

- **Nom du service** : Nom du service
- **Expiration** : Date d'expiration du service
- **Description** : Description du service - visible par le client, non modifiable par le client
- **Prix** : Prix du service
- **Prix initial** : Prix initial du service
- **Serveur** : Serveur où le service est hébergé
- **Recurrence** : Cycle de facturation
- **Notes** : Notes sur le service
- **Renouvellement maximum** : Nombre maximum de renouvellements (vide pour illimité)

![img](/img/next_gen/services/create_service.png)

:::info
La création ne crée pas de facture, il faudra passer par une commande sur votre compte client pour générer une facture.
:::

## Problème de livraison

Si vous avez un problème de livraison de service, rendez-vous sur `Espace Administation` > `Paramètres` > `Historique` et recherchez le fichier 'services-delivery.log'. Vous pouvez également consulter la page du module d'approvisionnement pour plus d'informations.
![img](/img/next_gen/services/delivery_log.png)

Par exemple, dans ce cas de figure, le service n'a pas pu être livré, car le pterodactyl n'a plus d'allocation disponible. Plus d'informations sur la configuration du module Pterodactyl [ici](../extensions/modules/Pterodactyl.md#erreurs-courantes).

## Aperçu d'un service
Voici un aperçu d'un service.
![img](/img/next_gen/services/show_service.png)