---
sidebar_position: 3
---
# Facturation
Vous pouvez configurer les paramètres de facturation de votre boutique en ligne. Pour ce faire, allez dans le menu `Paramètres` puis dans la section `Facturation` et enfin dans `Facturation`.
Vous retrouverez ici tous les paramètres de facturation.
### Configuration des conditions de paiement
Vous pouvez définir des des conditions générales de vente de votre boutique. Il sera demandé à l'utilisateur de les confirmer avant une commande. Elle sera affichée sur la page de paiement comme ceci.
![img](/img/next_gen/settings/store/billing/cgv.png)
### Mode de taxe
ClientXCMS permet de configurer plusieurs modes de taxe pour votre boutique. Vous pouvez choisir entre les modes suivants :
- **Exclusif** : Les prix affichés dans la boutique n'incluent pas la taxe. La taxe sera ajoutée au prix lors du paiement.
- **Inclusif** : Les prix affichés dans la boutique incluent la taxe. Le prix affiché est le prix final.
### Devise
Vous pouvez configurer la devise de votre boutique. Vous pouvez choisir parmi une liste de devises prédéfinies. Vous pourrez par la suite définir plusieurs devises pour votre boutique sur les produits
### Adresse de l'espace client
Vous pouvez définir l'adresse de l'espace client. Cette adresse sera affichée sur les factures comme ceci
![img](/img/next_gen/settings/store/billing/address.png)
### Termes et conditions de la facture
Vous pouvez définir des termes et conditions de la facture (par exemple TVA non applicable). Ils seront affichés sur la facture comme ceci

![img](/img/next_gen/settings/store/billing/invoice_terms.png)

## Mode de facturation
Vous pouvez configurer le mode de facturation de votre boutique. Vous pouvez choisir entre les modes suivants :
- **Facture** : Les clients recevrons une facture classique
- **Proforma** : Les clients recevrons une facture proforma puis une facture classique une fois le paiement effectué
## Taux de TVA
Vous pouvez définir un taux de TVA par défaut pour votre boutique. Ce taux sera utilisé pour les factures si le taux de TVA n'est pas défini pour un client. Vous pouvez choisir entre deux modes suivants :
- **Taux fixe** : Un taux de TVA unique pour tous les clients & produits
- **Taux variable** : Un taux de TVA défini par le pays du client.

Selon la législation européenne, en cas de vente à un client particulier, vous devez facturer la TVA française jusqu'à 10 000 € de vente totales dans l'UE. Au-delà de ce montant, vous devez facturer la TVA du pays du client. 
## Prefixe de facture
Vous pouvez définir un préfixe pour les factures. Par exemple, si vous définissez le préfixe à `INV-`, les factures seront nommées `INV-2024-08-0001`, `INV-2024-08-0001`, etc.

![img](/img/next_gen/settings/store/billing/invoice_prefix.png)
## Activation de la TVA
Vous pouvez activer la TVA pour votre boutique. Vous pouvez définir un taux de TVA personalisé pour chaque client ou la possiblité de ne pas appliquer la TVA pour certains clients.
Pour ceci, vous devez rajouter une métadonnée `vat_percent` avec le pourcentage allant de 0 à 100% ou la metadonnée `vat_disabled` à `true` pour désactiver simplement pour un client.
## Forcer la confirmation pour commander
Vous pouvez forcer la confirmation pour commander. Les clients devront confirmer leur compte avant de pouvoir payer.
## Actions sur les factures en attente
Vous pouvez définir des actions sur les factures en attente après X jours. Vous pouvez choisir entre les actions suivantes :
- Annuler la facture
- Supprimer la facture
Cela permet de gérer les factures en attente automatiquement. Vous pouvez utiliser 0 pour désactiver cette fonctionnalité.
## Webhook de paiement
Vous pouvez configurer un webhook de paiement pour votre boutique. Vous pouvez définir une URL de webhook qui sera appelée lorsqu'une commande est payée.
Vous pouvez créer un webhook depuis discord ou un autre service. Voici un pour créer un webhook sur discord.
- Allez dans les paramètres de votre serveur
- Allez dans la section `Intégrations`
- Cliquez sur `Créer une intégration`
- Donnez un nom à votre webhook
- Copiez l'URL du webhook
- Collez l'URL dans le champ `URL du webhook`
- Cliquez sur `Enregistrer`

Voici un aperçu d'un webhook discord : 

![img](https://cdn.clientxcms.com/ressources/docs/order.png)