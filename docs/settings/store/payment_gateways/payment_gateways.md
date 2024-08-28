# Passerelle de paiement
Vous pouvez configurer plusieurs passerelles de paiement pour votre espace client. Cette page répertorie toutes les passerelles de paiement disponibles pour votre espace client et les configurations possible sur ces paserelles.
## Passerelles de paiement disponibles
- [Virement bancaire](./bank_transfert)
- [Paypal](./paypal)
- [Stripe](./stripe)
- [PayPal Express Checkout](./paypal_express_checkout)
- [Balance](./balance)
## Configuration des passerelles de paiement
Vous pouvez configurer vos passerelles de paiement en allant dans le menu `Paramètres` puis dans la section `Paramètres de boutique` et enfin selectionnez la passerelle de paiement que vous souhaitez configurer.

Dans chaque passerelle, vous pouvez modifier ces paramètres : 
- **Nom** : Le nom de la passerelle de paiement.
- **Montant minimum** : Le montant minimum pour utiliser cette passerelle de paiement.
- **Statut** : Le statut de la passerelle de paiement  [(Voir ici pour plus d'informations)](./#statut-des-passerelles-de-paiement)

![img](/img/next_gen/settings/store/payment_gateways/balance/config.png)
Voici un exemple de configuration de la passerelle de paiement Balance.

Pour chaque passerelle de paiement, des champs supplémentaires peuvent être configurés. Pour plus d'informations sur la configuration d'une passerelle de paiement, veuillez consulter la documentation de la passerelle de paiement concernée.
## Statut des passerelles de paiement
Les status permettent de définir l'état de la passerelle de paiement.
- Disponible : Visible et disponible pour les clients
- Non référencé : Visible uniquement par les administrateurs
- Caché : Invisible
## Modifier la passerelle de paiement d'une facture
Vous pouvez modifier la passerelle de paiement d'une facture en allant dans la section `Factures` puis en selection la facture que vous souhaitez modifier. Vous pouvez ensuite modifier la passerelle de paiement de la facture et sauvegarder.
![img](/img/next_gen/settings/store/payment_gateways/invoice.png)

## Abonnement
A l'heure actuelle, il n'est pas possible de configurer une passerelle de paiement pour les abonnements. Cependant, vous pouvez configurer une passerelle de paiement pour les produits et services.