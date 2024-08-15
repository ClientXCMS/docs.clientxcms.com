# Stripe (Carte bancaire)
Stripe est un service de paiement en ligne qui permet de payer des biens et des services en ligne. Il est très populaire et est utilisé par des millions de sites Web dans le monde entier.
Pour configurer Stripe, allez dans le menu `Paramètres` puis dans la section `Paramètres de boutique` et enfin sélectionnez Stripe.
![img](/img/next_gen/settings/store/payment_gateways/stripe/config.png)
## Processus
- Le client choisit Stripe comme moyen de paiement
- Le client est redirigé vers le site de Stripe pour effectuer le paiement
- Le client saisit ses informations de paiement
- Le client confirme le paiement
- Le client est redirigé vers votre boutique
- Vous recevez une notification de paiement
- La commande est validée
- Le client reçoit une confirmation de paiement
- Le client reçoit la commande
## Mode live et mode test
Vous pouvez configurer Stripe en mode live ou en mode test. En mode test, vous pouvez effectuer des paiements de test pour vérifier que tout fonctionne correctement. En mode live, les paiements sont réels et les clients peuvent payer pour de vrai.
## Configuration de Stripe
Vous pouvez configurer Stripe en allant dans le menu `Paramètres` puis dans la section `Paramètres de boutique` et enfin en sélectionnant Stripe.
### Récupération des identifiants Stripe
Pour configurer Stripe, vous aurez besoin de récupérer vos identifiants Stripe. Voici comment faire :
1. Connectez-vous à votre compte Stripe
2. Allez dans l'onglet Développeurs [ici](https://dashboard.stripe.com/developers)
3. Allez dans l'onglet Clés API [ici](https://dashboard.stripe.com/apikeys)

    ![img](/img/next_gen/settings/store/payment_gateways/stripe/apikeys.png)
4. Cliquer sur le bouton Créer une clé API

    ![img](/img/next_gen/settings/store/payment_gateways/stripe/apikey.png)

4. Copiez votre clé publique et votre clé secrète
5. Collez ces identifiants dans les champs correspondants dans les paramètres.
### Configuration des webhooks
Pour configurer les webhooks, vous aurez besoin de récupérer l'URL de votre site. Voici comment faire :
1. Allez dans l'onglet Webhooks [ici](https://dashboard.stripe.com/webhooks)
2. Cliquez sur le bouton Ajouter un endpoint
    ![img](/img/next_gen/settings/store/payment_gateways/stripe/webhooks.png)
3. Remplissez comme ceci :

- **URL d'endpoint** : votredomain.fr/gateways/stripe/notifications
- **Description** : Notification de paiement
- **Ecouter** : Évènements de paiement
- **Version** : 2023-10-16
- **évènements** : checkout.session.completed
4. Copier en revelant la clé secrète
    ![img](/img/next_gen/settings/store/payment_gateways/stripe/secret.png)
5. Collez cette clé dans le champ correspondant dans les paramètres.