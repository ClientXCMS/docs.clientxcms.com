# Stripe (Paiements par carte)

La passerelle **Stripe** dans **CLIENTXCMS** correspond à l'**intégration de la solution de paiement américaine de référence mondiale** qui permet à vos clients de régler leurs commandes avec leur carte bancaire via l'une des plateformes les plus avancées du marché. <br/>
L'objectif est clair : **offrir l'expérience de paiement par carte la plus sophistiquée avec des outils de gestion avancés et une fiabilité éprouvée**. Un système Stripe bien configuré permet à vos clients de **payer avec une fluidité exceptionnelle** tout en vous donnant accès aux meilleurs outils d'analytics et de gestion du marché.

La passerelle Stripe peut être entièrement personnalisée : nom d'affichage, montant minimum, mode test/live, clés API, webhooks, etc.

Vous pouvez configurer Stripe depuis :

`Paramètres` > `Paramètres de la boutique` > `Stripe`

![Configuration de la passerelle Stripe](/img/next_gen/settings/store/payment_gateways/stripe/config.png)

:::tip Astuce
**Stripe** est considéré comme la **Rolls-Royce** des passerelles de paiement avec une technologie de pointe, des outils exceptionnels et une réputation mondiale inégalée.
:::

## Pourquoi choisir Stripe ?

Stripe représente l'excellence technologique dans le domaine des paiements en ligne, utilisé par des millions d'entreprises dans le monde, des startups aux plus grandes corporations internationales.

Intégrer Stripe vous permet de :

* Bénéficier de la technologie de paiement la plus avancée au monde
* Accéder aux meilleurs outils d'analytics et de reporting du marché
* Profiter d'une interface utilisateur exceptionnellement fluide
* Utiliser des fonctionnalités avancées (abonnements, paiements différés, etc.)
* Garantir une sécurité maximale avec les dernières innovations
* S'appuyer sur une infrastructure mondiale ultra-fiable

:::tip Astuce
Stripe est comme la **Ferrari des paiements** 🏎️ — performance maximale, technologie de pointe et prestige international. C'est le choix des entreprises qui ne veulent aucun compromis sur la qualité.
:::

## Fonctionnement du système

### Processus de paiement de pointe

Le paiement via Stripe suit un processus ultra-optimisé :

1. **Sélection Stripe** : Le client choisit "Paiement par carte" (Stripe)
2. **Interface premium** : Redirection vers l'interface Stripe ultra-moderne
3. **Saisie optimisée** : Formulaire intelligent avec auto-complétion
4. **Validation instantanée** : Vérification en temps réel des données
5. **3D Secure intelligent** : Authentification adaptative selon le risque
6. **Confirmation ultra-rapide** : Traitement instantané du paiement
7. **Webhooks avancés** : Notifications sécurisées et détaillées
8. **Retour seamless** : Intégration parfaite avec votre boutique

### Excellence technique Stripe

| Avantage                    | Description                                        |
|-----------------------------|----------------------------------------------------|
| **Performance mondiale**    | Infrastructure distribuée dans le monde entier    |
| **IA anti-fraude**         | Machine learning avancé pour détecter les fraudes |
| **Interface adaptative**   | UX qui s'adapte selon l'appareil et le contexte   |
| **Fiabilité 99.99%**       | Uptime exceptionnel avec redondance maximale      |

## Configuration de la passerelle

### Paramètres essentiels

**Nom de la passerelle** | (texte)<br />

Utilisez "Paiement sécurisé" ou "Carte bancaire" pour valoriser la sécurité Stripe.

**Montant minimal** | (montant)<br />

Stripe n'impose pas de minimum. Configurez selon votre stratégie (0€ ou 1€ minimum).

**Statut** | (menu déroulant)<br />

Maintenez en **"Actif"** pour offrir la meilleure expérience de paiement.

**Mode de fonctionnement** | (Test/Live)<br />

- **Mode Test** : Tests avec l'environnement sandbox Stripe
- **Mode Live** : Production avec de vraies transactions

:::info Configuration recommandée
Pour Stripe :
- **Nom** : "Paiement sécurisé" ou "Carte bancaire"
- **Montant minimal** : 1€
- **Statut** : Actif
- **Mode** : Live (après tests complets)
:::

## Récupération des identifiants API

### Accès au dashboard Stripe

Pour configurer Stripe, vous devez récupérer vos clés API depuis votre compte :

1. **Connectez-vous** à votre [dashboard Stripe](https://dashboard.stripe.com/)
2. Accédez à la section **« Développeurs »**
3. Cliquez sur **« Clés API »**

![Section Clés API dans Stripe](/img/next_gen/settings/store/payment_gateways/stripe/apikeys.png)

### Création des clés API

4. **Créez une nouvelle clé** si nécessaire :

![Création d'une clé API Stripe](/img/next_gen/settings/store/payment_gateways/stripe/apikey.png)

### Types de clés Stripe

Stripe utilise deux types de clés pour sécuriser les intégrations :

**Clé publique** | (pk_...)<br />
- Utilisée côté client pour initialiser les paiements
- Peut être exposée publiquement en toute sécurité
- Commence par `pk_test_` (test) ou `pk_live_` (live)

**Clé secrète** | (sk_...)<br />
- Utilisée côté serveur pour les opérations critiques
- Doit rester absolument confidentielle
- Commence par `sk_test_` (test) ou `sk_live_` (live)

5. **Copiez vos clés** (publique et secrète)
6. **Collez-les** dans les champs correspondants de CLIENTXCMS

:::warning Sécurité critique
La **clé secrète Stripe** ne doit jamais être exposée publiquement. Elle donne un accès complet à votre compte et vos paiements. Stockez-la de manière ultra-sécurisée.
:::

## Configuration des webhooks

### Importance des webhooks

Les webhooks Stripe sont **essentiels** pour recevoir les notifications de paiement en temps réel et garantir la synchronisation parfaite entre Stripe et votre boutique.

### Configuration étape par étape

1. Dans votre dashboard Stripe, accédez à **« Webhooks »**
2. Cliquez sur **« Ajouter un endpoint »**

![Configuration des webhooks Stripe](/img/next_gen/settings/store/payment_gateways/stripe/webhooks.png)

3. **Configurez l'endpoint** avec les paramètres suivants :

| Paramètre           | Valeur                                    |
|---------------------|-------------------------------------------|
| **URL d'endpoint**  | `https://votre-domaine.com/gateways/stripe/notification` |
| **Description**     | Notifications de paiement CLIENTXCMS     |
| **Écouter**         | Événements de paiement                   |
| **Version API**     | 2023-10-16 (ou version recommandée)      |
| **Événements**      | `checkout.session.completed`             |

4. **Récupérez la clé secrète** du webhook :

![Secret du webhook Stripe](/img/next_gen/settings/store/payment_gateways/stripe/secret.png)

5. **Copiez cette clé secrète** dans le champ webhook de CLIENTXCMS

:::info Événements recommandés
Pour une intégration complète, ajoutez aussi :
- `payment_intent.succeeded`
- `payment_intent.payment_failed`
- `invoice.payment_succeeded` (pour les abonnements)
:::

## Modes de fonctionnement

### Mode Test (Sandbox)

Le mode test Stripe offre un environnement complet pour :
- **Tester toutes les fonctionnalités** sans argent réel
- **Simuler différents scénarios** avec des cartes de test spécialisées
- **Valider les webhooks** et intégrations
- **Former vos équipes** en toute sécurité

**Cartes de test Stripe** :
- `4242424242424242` : Visa réussie
- `4000000000000002` : Carte déclinée
- `4000002500003155` : Authentification 3D Secure requise

### Mode Live (Production)

Le mode live active toute la puissance de Stripe :
- **Vrais paiements** avec de l'argent réel
- **Analytics avancés** et rapports détaillés
- **Outils de gestion** professionnels
- **Support Stripe** premium

:::tip Conseil
Testez **exhaustivement** tous vos parcours en mode test avant la mise en production. Stripe offre des outils de simulation très avancés.
:::

## Fonctionnalités avancées

### Stripe Dashboard

Le dashboard Stripe vous donne accès à :

| Fonctionnalité              | Description                                        |
|-----------------------------|----------------------------------------------------|
| **Analytics temps réel**    | Métriques détaillées sur vos paiements           |
| **Gestion des clients**     | Base de données clients intégrée                 |
| **Détection de fraude**     | IA avancée avec scoring de risque                |
| **Rapports automatiques**   | Exports comptables et fiscaux                    |

### Outils de croissance

Stripe propose des outils uniques :
- **Stripe Radar** : Protection anti-fraude avec IA
- **Stripe Sigma** : Analytics avancés avec SQL
- **Stripe Atlas** : Création d'entreprise internationale
- **Stripe Capital** : Financement basé sur vos revenus

## Sécurité et conformité

### Standards de sécurité

Stripe respecte tous les standards les plus exigeants :
- **PCI-DSS Level 1** : Certification maximale
- **SOC 1 et SOC 2** : Audits de conformité
- **GDPR Compliant** : Conformité européenne
- **ISO 27001** : Sécurité informatique

### Technologies de protection

* **Chiffrement AES-256** pour toutes les données
* **TLS 1.2+** pour toutes les communications
* **Tokenisation** avancée des cartes
* **Machine Learning** pour la détection de fraude

## Tarification Stripe

### Structure tarifaire

Stripe propose une tarification claire :
- **Cartes européennes** : 1,4% + 0,25€
- **Cartes non-européennes** : 2,9% + 0,25€
- **American Express** : Tarifs spéciaux
- **Échecs de paiement** : Pas de frais

### Avantages tarifaires

| Avantage                | Description                                        |
|-------------------------|----------------------------------------------------|
| **Pas de frais fixes** | Uniquement des commissions sur les transactions  |
| **Tarifs dégressifs**  | Réductions selon le volume                        |
| **Pas de frais cachés** | Transparence totale sur la tarification         |
| **Facturation claire** | Rapports détaillés des frais                     |


:::tip À retenir
Stripe représente l'**excellence absolue** dans le paiement par carte avec une technologie inégalée, des outils exceptionnels et une fiabilité légendaire. C'est le choix premium pour les entreprises exigeantes.
:::