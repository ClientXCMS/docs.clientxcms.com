# PayPal Express Checkout

La passerelle **PayPal Express Checkout** dans **CLIENTXCMS** correspond à la **version moderne et optimisée de l'intégration PayPal** utilisant l'API REST pour offrir une expérience de paiement fluide et sécurisée à vos clients. <br/>
L'objectif est clair : **proposer la solution PayPal la plus avancée avec une interface utilisateur optimisée et des fonctionnalités étendues**. Un système PayPal Express Checkout bien configuré permet à vos clients de **payer en quelques clics avec une expérience premium** tout en vous offrant plus de contrôle et de flexibilité.

La passerelle PayPal Express Checkout peut être entièrement personnalisée : nom d'affichage, montant minimum, mode sandbox/live, identifiants API, etc.

Vous pouvez configurer PayPal Express Checkout depuis :

`Paramètres` > `Paramètres de la boutique` > `PayPal Express Checkout`

![Configuration de PayPal Express Checkout](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/config.png)

:::tip Astuce
**PayPal Express Checkout** offre une expérience utilisateur **supérieure à PayPal standard** avec des temps de chargement réduits et une interface plus moderne qui améliore les conversions.
:::

## Pourquoi choisir PayPal Express Checkout ?

PayPal Express Checkout représente l'évolution moderne de PayPal, utilisant les dernières technologies REST API pour une intégration plus performante et flexible que PayPal classique.

Adopter PayPal Express Checkout vous permet de :

* Offrir l'expérience PayPal la plus moderne et rapide
* Bénéficier d'une interface utilisateur optimisée
* Accéder aux dernières fonctionnalités PayPal
* Profiter d'une intégration plus stable et sécurisée
* Réduire les abandons de panier grâce à un processus plus fluide
* Obtenir des rapports et analytics plus détaillés

:::tip Astuce
PayPal Express Checkout est comme la **version premium** de PayPal 🚀 — même confiance, mais avec une technologie de pointe qui booste vos performances de conversion.
:::

## Fonctionnement du système

### Processus de paiement optimisé

Le paiement via PayPal Express Checkout suit un processus moderne et rapide :

1. **Sélection Express Checkout** : Le client choisit "PayPal Express Checkout"
2. **Redirection ultra-rapide** : Interface PayPal optimisée qui se charge instantanément
3. **Authentification fluide** : Connexion PayPal ou saisie carte simplifiée
4. **Validation express** : Confirmation en un clic avec aperçu détaillé
5. **Retour instantané** : Redirection immédiate vers votre boutique
6. **Notification API** : Confirmation sécurisée via l'API REST
7. **Traitement automatique** : Validation et activation instantanées
8. **Confirmation premium** : Notifications client enrichies

### Avantages techniques de l'Express Checkout

| Avantage                  | Description                                        |
|---------------------------|----------------------------------------------------|
| **Performance supérieure** | API REST plus rapide que l'ancien système        |
| **Interface moderne**     | Design PayPal optimisé pour mobile et desktop    |
| **Sécurité renforcée**    | Protocoles de sécurité dernière génération       |
| **Fiabilité maximale**    | Système de failover et haute disponibilité       |

## Configuration de la passerelle

### Paramètres essentiels

**Nom de la passerelle** | (texte)<br />

Utilisez "PayPal Express" ou "PayPal" pour une identification claire de cette version premium.

**Montant minimal** | (montant)<br />

Aucune restriction PayPal. Configurez 0.50€ pour accepter tous les montants.

**Statut** | (menu déroulant)<br />

Maintenez en **"Actif"** pour offrir la meilleure expérience PayPal à vos clients.

**Mode de fonctionnement** | (Sandbox/Live)<br />

- **Sandbox** : Tests avec identifiants de développement
- **Live** : Production avec identifiants réels

:::info Configuration recommandée
Pour PayPal Express Checkout :
- **Nom** : "PayPal Express" ou "PayPal"
- **Montant minimal** : 0.50€
- **Statut** : Actif
- **Mode** : Live (après tests complets)
:::

## Récupération des identifiants API

### Accès à l'espace développeur PayPal

Pour configurer PayPal Express Checkout, vous devez récupérer vos identifiants API REST :

1. **Connectez-vous** à votre compte PayPal Business
2. Accédez à **l'espace développeur** PayPal
3. Sélectionnez **« Mes applications et identifiants »**
4. Choisissez **Live** ou **Sandbox** selon vos besoins

![Accès aux applications REST](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/app_rest.png)

### Création d'une application REST

5. Cliquez sur **« Créer une application »**
6. Configurez votre application :
   - **Nom** : Nom de votre boutique
   - **Type** : Marchand
   - **Fonctionnalités** : Express Checkout

![Création d'application REST](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/create_app.png)

### Récupération des clés

7. Une fois créée, récupérez vos identifiants :
   - **Client ID** : Identifiant public de votre application
   - **Client Secret** : Clé secrète (à garder confidentielle)

![Récupération des identifiants](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/keys.png)

### Configuration dans CLIENTXCMS

8. Copiez ces identifiants dans les champs correspondants :

![Configuration des clés dans CLIENTXCMS](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/keys2.png)

9. **Sélectionnez le mode** (Sandbox/Live) correspondant
10. **Sauvegardez** la configuration

:::warning Sécurité
Gardez votre **Client Secret** confidentiel. Ne le partagez jamais et stockez-le de manière sécurisée. Renouvelez-le régulièrement pour maintenir la sécurité.
:::

## Modes de fonctionnement

### Mode Sandbox (Test)

Le mode Sandbox vous permet de :
- **Tester l'intégration** sans transactions réelles
- **Valider le processus** complet de paiement
- **Simuler différents scénarios** (succès, échec, remboursements)
- **Former votre équipe** sans risque financier

**Configuration requise** :
- Compte développeur PayPal
- Identifiants Sandbox (Client ID et Secret de test)

### Mode Live (Production)

Le mode Live active :
- **Vrais paiements** avec transactions réelles
- **Accès complet** aux outils PayPal
- **Rapports détaillés** et analytics
- **Protection vendeur** PayPal

**Configuration requise** :
- Compte PayPal Business vérifié
- Identifiants Live (Client ID et Secret de production)

:::tip Conseil
Testez **exhaustivement en mode Sandbox** avant le passage en Live. Vérifiez tous les scénarios : paiements réussis, échoués, remboursements.
:::

## Gestion avancée

### Avantages de l'API REST

L'intégration Express Checkout via API REST offre :

| Fonctionnalité            | Avantage                                           |
|---------------------------|-----------------------------------------------------|
| **Webhooks avancés**      | Notifications en temps réel plus fiables          |
| **Gestion des erreurs**   | Messages d'erreur détaillés et exploitables       |
| **Rapports enrichis**     | Analytics et métriques avancées                   |
| **Personnalisation**      | Plus d'options de customisation de l'expérience   |

### Monitoring et analytics

Avec PayPal Express Checkout, vous bénéficiez de :
- **Tableaux de bord enrichis** dans votre compte PayPal
- **Rapports de conversion** détaillés
- **Analyse des abandons** de panier
- **Métriques de performance** en temps réel

## Différences avec PayPal Standard

### Comparaison technique

| Aspect                    | PayPal Standard | PayPal Express Checkout |
|---------------------------|----------------|-------------------------|
| **Technologie**           | IPN classique  | API REST moderne        |
| **Performance**           | Standard       | Optimisée               |
| **Interface utilisateur** | Basique        | Premium                 |
| **Fonctionnalités**       | Limitées       | Étendues                |
| **Maintenance**           | Manuelle       | Automatisée             |

### Quand choisir Express Checkout ?

Privilégiez Express Checkout si :
- Vous voulez la **meilleure expérience utilisateur**
- Vous recherchez des **performances optimales**
- Vous souhaitez accéder aux **dernières fonctionnalités**
- Vous voulez des **rapports détaillés**

## Résolution des problèmes

### Problèmes courants

| Problème                        | Solution                                    |
|---------------------------------|---------------------------------------------|
| **Identifiants invalides**     | Vérifier Client ID et Secret               |
| **Mode incorrect**              | Vérifier correspondance Sandbox/Live       |
| **Webhooks non reçus**         | Contrôler la configuration des notifications |
| **Paiements non validés**      | Vérifier les logs d'API                    |

### Diagnostic

Pour diagnostiquer un problème :
1. **Vérifiez les logs** CLIENTXCMS
2. **Consultez les rapports** PayPal
3. **Testez en mode Sandbox** si nécessaire
4. **Contactez le support** PayPal développeurs

## Sécurité et bonnes pratiques

### Sécurisation de l'intégration

* **Stockage sécurisé** des identifiants API
* **Validation systématique** des webhooks
* **Monitoring** des transactions suspectes
* **Mise à jour régulière** des identifiants

### Optimisation des performances

* **Cache intelligent** des tokens d'authentification
* **Gestion des erreurs** proactive
* **Monitoring** des temps de réponse

* **Tests réguliers** de l'intégration

:::tip À retenir
PayPal Express Checkout représente le **futur de l'intégration PayPal** avec des performances supérieures et une expérience utilisateur premium. C'est l'option recommandée pour maximiser vos conversions PayPal.
:::
