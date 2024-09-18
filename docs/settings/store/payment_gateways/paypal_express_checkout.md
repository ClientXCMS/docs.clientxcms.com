# PayPal (Express Checkout)

Parmi les passerelles de paiement disponibles pour votre espace client, PayPal Express Checkout est une solution de paiement en ligne qui permet à vos clients de payer rapidement et en toute sécurité. Cette passerelle de paiement est très simple à configurer et à utiliser.
Pour configurer PayPal Express Checkout, allez dans le menu `Paramètres` puis dans la section `Paramètres de boutique` et enfin sélectionnez PayPal Express Checkout.
![img](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/config.png)
## Processus
- Le client choisit PayPal Express Checkout comme moyen de paiement
- Le client est redirigé vers le site de PayPal pour effectuer le paiement
- Le client se connecte à son compte PayPal ou saisit ses informations de paiement
- Le client confirme le paiement
- Le client est redirigé vers votre boutique
- Vous recevez une notification de paiement
- La commande est validée
- Le client reçoit une confirmation de paiement
- Le client reçoit la commande
## Mode live et mode test
Vous pouvez configurer PayPal Express Checkout en mode live ou en mode test. En mode test, vous pouvez effectuer des paiements de test pour vérifier que tout fonctionne correctement. En mode live, les paiements sont réels et les clients peuvent payer pour de vrai.
## Configuration de PayPal Express Checkout
Vous pouvez configurer PayPal Express Checkout en allant dans le menu `Paramètres` puis dans la section `Paramètres de boutique` et enfin en sélectionnant PayPal Express Checkout.
### Récupération des identifiants PayPal
Pour configurer PayPal Express Checkout, vous aurez besoin de récupérer vos identifiants PayPal. Voici comment faire :
1. Connectez-vous à votre compte PayPal
2. Allez dans l'espace développeur
3. Choisissez l'option "Mes applications et identifiants"
4. Sélectionnez Live ou Sandbox selon le mode que vous souhaitez configurer
![img](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/app_rest.png)
5. Créez une application REST API
![img](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/create_app.png)
6. Récupérez votre Client ID et votre Secret
![img](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/keys.png)
7. Copiez ces identifiants dans les champs correspondants dans les paramètres.
![img](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/keys2.png)
8. Modifier si besoins le mode sandbox
9. Sauvegardez les paramètres
