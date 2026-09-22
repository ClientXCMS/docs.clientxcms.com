---
sidebar_position: 7
---
# Créer son premier service
Vous pouvez créer un service en quelques clics depuis votre espace client. Pour cela, rendez-vous sur `Espace Administation` > `Services` > `Créer`.

Dans cette étape, veuillez sélectionner le client, le produit que vous avez créé et le type de service. Puis cliquez sur suivant.
![img](/img/next_gen/services/create_step1.png)

Dans cette seconde étape, remplissez le formulaire puis cliquez sur **Nouveau** et **Créer** pour livrer un service vierge, ou choisissez l'onglet **Importer** pour rattacher un VPS ou un serveur de jeu déjà existant.

- **Nom du service** : Nom du service
- **Expiration** : Date d'expiration du service
- **Serveur** : Serveur où le service est hébergé
- **Description** : Description du service - visible par le client, non modifiable par le client
- **Notes** : Notes sur le service
- **Renouvellement maximum** : Nombre maximum de renouvellements (vide pour illimité)
- **Récurrence et devise** : Fréquence de facturation et devise

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