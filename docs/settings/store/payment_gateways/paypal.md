# PayPal


Parmi les passerelles de paiement disponibles pour votre espace client, PayPal  est une solution de paiement en ligne qui permet à vos clients de payer rapidement et en toute sécurité. Cette passerelle de paiement est très simple à configurer et à utiliser.
Pour configurer PayPal, allez dans le menu `Paramètres` puis dans la section `Paramètres de boutique` et enfin sélectionnez PayPal.
![img](/img/next_gen/settings/store/payment_gateways/paypal/config.png)
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

Vous pouvez configurer PayPal en mode live ou en mode test. En mode test, vous pouvez effectuer des paiements de test pour vérifier que tout fonctionne correctement. En mode live, les paiements sont réels et les clients peuvent payer pour de vrai.

## Configuration de PayPal
Vous pouvez configurer PayPal en allant dans le menu `Paramètres` puis dans la section `Paramètres de boutique` et enfin en sélectionnant PayPal.
### Configuration de l'IPN
l'IPN ou Instant Payment Notification est un service qui permet à PayPal de communiquer avec votre site Web pour vous informer des paiements et des autres événements liés à votre compte PayPal. L'URL de notification est domain.fr/gateways/paypal/notification
1. Connectez-vous à votre compte PayPal
2. Allez dans l'onglet `Mon compte`
3. Cliquez sur `Plus d'options` dans la section `Vos outils de vente`
4. Cliquez sur `Notifications instantanées de paiement`
5. Cliquez sur `Mettre à jour`
6. Ajoutez l'URL de notification domain.fr/gateways/paypal/notification
7. Activez les notifications
8. Sauvegardez les paramètres