---
sidebar_position: 4
---
# Factures
Les factures permettent de gérer les paiements des clients. Elles se créent automatiquement lorsqu'un client achète un produit ou un service. Vous pouvez également créer des factures manuellement.
## Gestion des factures
Vous pouvez afficher et gérer les factures dans la section "Factures" du menu d'administration.
![img](/img/next_gen/invoices/admin_index.png)
### Filtrage
Vous pouvez filtrer les facture par statut. Les statuts disponibles sont:
- **Toutes**: Affiche toutes les factures
- **Payées**: Affiche les factures payées
- **En attente**: Affiche les factures en attente de paiement
- **Annulées**: Affiche les factures annulées
- **Remboursées**: Affiche les factures remboursées
- **Brouillon**: Affiche les factures en brouillon
- **Echoué**: Affiche les factures échoués
![img](/img/next_gen/invoices/filter.png)
### Recherche
Vous pouvez rechercher une facture par son identifiant unique, le nom du client ou l'id externe de la facture.

### Actions de masses
Vous pouvez effectuer des actions de masse sur les factures. Les actions disponibles sont:
- **Supprimer**: Supprime les factures sélectionnées
- **Marquer comme payé**: Marque les factures sélectionnées comme payées
- **Marquer comme annulé**: Marque les factures sélectionnées comme annulées
- **Marquer comme remboursé**: Marque les factures sélectionnées comme remboursées
- **Marquer comme échoué**: Marque les factures sélectionnées comme échouées

### Exportation
Cette fonctionnalité sera disponible dans des versions futures.
## Création et édition de facture
Lors de la création d'une facture, la facture est en état de brouillon. Vous pouvez ajouter des produits, des réductions et des renouvellements de service à la facture. Une fois que la facture est prête, vous pouvez la marquer comme en attente.

Pour modifier une facture en attente vous pouvez cliquer sur le bouton "Editer la facture" sur la page de la facture.

Une fois vos modifications effectuées, vous pouvez valider la facture avec le bouton "Valider la facture".
### Brouillon
![img](/img/next_gen/invoices/draft.png)
Vous pouvez retrouver la liste des articles, les modifier ou les supprimer. Vous pouvez également ajouter des articles à la facture.

#### Ajouter un article
Vous pouvez ajouter un article à la facture selectionnant un produit ou un renouvellement d'un service du client.

![img](/img/next_gen/invoices/add_product.png)

Vous pouvez configurer l'article en modifiant la quantité, le prix unitaire, la description et les données supplémentaires de l'article.

#### Ajouter une réduction

Si vous avez configuré des réductions, vous pouvez les ajouter lors de la l'édition d'un l'article.

![img](/img/next_gen/invoices/edit_product.png)

Cela permet de réduire le montant de la facture selon la réduction appliquée.

### Modifier des informations de la facture
![img](/img/next_gen/invoices/edit.png)

**ID externe**: L'identifiant externe de la facture. Cela permet de lier la facture à la paserelle de paiement.

**Notes**: Les notes de la facture. Cela peut être utilisé pour ajouter des informations supplémentaires sur la facture. Les notes ne sont pas visibles par le client.

**Etat**: L'état de la facture. Vous pouvez changer l'état en modifiant le champ.

**Moyen de paiement**: Le moyen de paiement utilisé pour la facture. (PayPal, Stripe, etc.)

**Date de paiement**: La date de paiement de la facture. Cela permet de savoir quand la facture a été payée.

**Date d'échéance**: La date d'échéance de la facture. Cela permet de savoir quand la facture doit être payée.

**Frais de transaction**: Les frais de transaction de la facture. Cela permet de savoir combien de frais de transaction ont été appliqués à la facture par la passerelle de paiement.

**TVA**: Le montant de TVA de la facture. Cela permet de savoir combien de TVA a été appliquée à la facture.

**Devise**: La devise de la facture. Cela permet de savoir dans quelle devise la facture a été payée.

## Détails de facture
Vous pouvez voir les détails d'une facture en cliquant sur le bouton "Afficher" sur la page des factures. Celle-ci comporte beaucoup d'informations sur la facture, le client, les paiements. Cela permets d'avoir une vue d'ensemble sur la facture.
![img](/img/next_gen/invoices/show.png)

### Notifier le client

Vous pouvez notifier le client par email en cliquant sur le bouton "Notifier le client". Cela enverra un email au client avec les détails de la facture.
Cela enverra aussi le PDF de la facture en pièce jointe.

### Payer la facture
![img](/img/next_gen/invoices/pay.png)

Si le client à définit un moyen de paiement, vous pouvez payer la facture en cliquant sur le bouton "Payer". Cela tentra de prélever le montant de la facture sur le moyen de paiement du client.

### Lien de la facture
Vous pouvez copier le lien de la facture en cliquant sur le bouton presse papier. Cela copiera le lien de la facture dans le presse-papier.

### Livrer une facture

Vous pouvez livrer les produits de la facture en cliquant sur le bouton "Livrer". Cela livrera les produits de la facture au client. Cette action devrait être automatique mais peut être faite manuellement si nécessaire.

## Etat disponibles
Les factures peuvent avoir plusieurs états. Les états disponibles sont:
- **Brouillon**: La facture est en cours de création
- **En attente**: La facture est en attente de paiement
- **Payé**: La facture a été payée
- **Annulé**: La facture a été annulée
- **Remboursé**: La facture a été remboursée
- **Echoué**: La facture a échouée

## Principe d'abonnement

CLIENTXCMS utilise un système d'abonnement différents des passerelles de paiement. Les abonnements sont gérés par CLIENTXCMS et non par la passerelle de paiement. Cela permet de gérer les abonnements de manière plus flexible et de ne pas être dépendant de la passerelle de paiement par exemple pour les modifications d'abonnement ou les changements de date d'expiration.

### Processus

- Le client achète un service
- Une facture est créée et payée
- Le client ajoute une méthode de paiement à son compte
- Le client active l'abonnement sur son service
- Lorsque la date de prélèvement arrive selon la date d'expiration, CLIENTXCMS crée une facture pour le renouvellement de l'abonnement
- CLIENTXCMS tente de prélever le montant de la facture sur la méthode de paiement du client
- Si le paiement est réussi, la facture est marquée comme payée et le service est renouvelé
- Si le paiement échoue, le client reçoit un email pour l'informer de l'échec du paiement
- Le paiment est réessayé chaque jour pendant 7 jours (configurable)
- Si le paiement échoue après 7 jours, la facture est marquée comme échouée et le service est suspendu classiquement

