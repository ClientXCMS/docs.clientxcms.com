# Stancer (Paiements par carte)

La passerelle **Stancer** dans **CLIENTXCMS** correspond à une **solution de paiement par carte bancaire moderne et française** qui permet à vos clients de régler leurs commandes de manière sécurisée avec leur carte Visa, Mastercard ou autres. <br/>
L'objectif est clair : **offrir une alternative européenne performante aux géants américains avec des tarifs compétitifs et une conformité RGPD native**. Un système Stancer bien configuré permet à vos clients de **payer rapidement par carte** tout en vous garantissant des frais réduits et un service client français.

La passerelle Stancer peut être entièrement personnalisée : nom d'affichage, montant minimum, mode test/live, clés d'API, etc.

Vous pouvez configurer Stancer depuis :

`Paramètres` > `Paramètres de la boutique` > `Stancer`

![Configuration de la passerelle Stancer](/img/next_gen/settings/store/payment_gateways/stancer/config.png)

:::tip Astuce
**Stancer** est une solution **française et européenne** qui offre des tarifs souvent plus attractifs que les solutions américaines, avec un support client réactif et une conformité RGPD exemplaire.
:::

## Pourquoi choisir Stancer ?

Stancer représente la nouvelle génération des passerelles de paiement européennes, conçue spécifiquement pour répondre aux besoins des entreprises françaises et européennes avec une approche moderne et transparente.

Adopter Stancer vous permet de :

* Bénéficier de tarifs compétitifs et transparents
* Profiter d'un support client français et réactif
* Respecter nativement la réglementation RGPD
* Accéder à une technologie de pointe développée en Europe
* Réduire vos coûts de transaction comparé aux géants américains
* Soutenir l'écosystème technologique européen

:::tip Astuce
Stancer est comme le **champion européen** du paiement par carte 🇫🇷 — performance internationale avec des valeurs et un service à la française, idéal pour les entreprises soucieuses de leurs données et coûts.
:::

## Fonctionnement du système

### Processus de paiement optimisé

Le paiement via Stancer suit un processus sécurisé et fluide :

1. **Sélection Stancer** : Le client choisit "Paiement par carte" (Stancer)
2. **Redirection sécurisée** : Le client est dirigé vers l'interface Stancer
3. **Saisie des données** : Formulaire de carte bancaire sécurisé et optimisé
4. **Validation 3D Secure** : Authentification forte selon les exigences DSP2
5. **Confirmation instantanée** : Validation du paiement en temps réel
6. **Retour automatique** : Redirection immédiate vers votre boutique
7. **Notification webhook** : Confirmation sécurisée via l'API Stancer
8. **Traitement automatique** : Validation et activation des services

### Avantages de la solution Stancer

| Avantage                | Description                                        |
|-------------------------|----------------------------------------------------|
| **Tarifs transparents** | Pas de frais cachés, tarification claire         |
| **Support français**    | Équipe support basée en France et réactive       |
| **Conformité RGPD**     | Respect natif de la réglementation européenne    |
| **Technologies modernes** | API REST, webhooks, interface mobile-first     |

## Configuration de la passerelle

### Paramètres essentiels

**Nom de la passerelle** | (texte)<br />

Utilisez "Paiement par carte" ou "Carte bancaire" pour une identification claire par vos clients.

**Montant minimal** | (montant)<br />

Stancer n'impose pas de minimum. Configurez selon vos besoins (souvent 1€ pour éviter les micro-paiements).

**Statut** | (menu déroulant)<br />

Maintenez en **"Actif"** pour offrir cette alternative de paiement européenne.

**Mode de fonctionnement** | (Test/Live)<br />

- **Mode Test** : Tests avec des cartes fictives
- **Mode Live** : Production avec de vraies transactions

:::info Configuration recommandée
Pour Stancer :
- **Nom** : "Paiement par carte" ou "Carte bancaire"
- **Montant minimal** : 1€ (ou selon vos besoins)
- **Statut** : Actif
- **Mode** : Live (après tests)
:::

## Récupération des clés API

### Accès au dashboard Stancer

Pour configurer Stancer, vous devez récupérer vos clés d'API depuis votre compte :

1. **Connectez-vous** à votre compte Stancer
2. Accédez à votre **dashboard de gestion**
3. Rendez-vous dans la section **« Développeur »**
4. Consultez la page des **clés d'API**

![Dashboard Stancer - Section développeur](/img/next_gen/settings/store/payment_gateways/stancer/dashboard.png)

### Types de clés

Stancer utilise deux types de clés pour sécuriser les transactions :

**Clé publique** | (pk_...)<br />
- Utilisée côté client pour initialiser les paiements
- Peut être exposée publiquement sans risque
- Nécessaire pour l'affichage du formulaire de paiement

**Clé privée** | (sk_...)<br />
- Utilisée côté serveur pour les opérations sensibles
- Doit rester confidentielle et sécurisée
- Permet la validation des paiements et webhooks

### Configuration dans CLIENTXCMS

3. **Copiez la clé publique** dans le champ correspondant
4. **Copiez la clé privée** dans le champ secret
5. **Sélectionnez le mode** (Test/Live) approprié
6. **Sauvegardez** la configuration

:::warning Sécurité
La **clé privée** doit rester absolument confidentielle. Ne la partagez jamais et stockez-la de manière sécurisée. Renouvelez-la en cas de suspicion de compromission.
:::

## Modes de fonctionnement

### Mode Test

Le mode test Stancer permet de :
- **Tester l'intégration** avec des cartes de test
- **Valider les webhooks** et notifications
- **Simuler différents scénarios** (succès, échec, fraude)
- **Former votre équipe** sans impact financier

**Cartes de test disponibles** :
- `4000000000000002` : Carte valide pour tests de succès
- `4000000000000069` : Carte pour simuler des échecs
- Autres cartes spécialisées selon les scénarios

### Mode Live

Le mode live active :
- **Vrais paiements** avec de l'argent réel
- **Accès complet** aux outils de gestion Stancer
- **Rapports détaillés** et analytics
- **Support client** français dédié

:::tip Conseil
Utilisez les **cartes de test Stancer** pour valider tous vos scénarios avant le passage en production. Testez particulièrement les cas d'échec et les remboursements.
:::

## Avantages techniques

### API moderne et performante

Stancer propose une intégration technique de qualité :

| Fonctionnalité          | Avantage                                           |
|-------------------------|-----------------------------------------------------|
| **API REST moderne**    | Intégration simple et standard                     |
| **Webhooks fiables**    | Notifications temps réel sécurisées               |
| **Documentation claire** | Guides détaillés et exemples de code             |
| **SDKs multiples**      | Librairies pour tous les langages populaires      |

### Sécurité et conformité

Stancer respecte tous les standards de sécurité :
- **Certification PCI-DSS Niveau 1**
- **Conformité DSP2** et 3D Secure 2.0
- **Chiffrement AES-256** pour toutes les données
- **Tokenisation** des cartes bancaires
- **Détection de fraude** en temps réel

## Tarification Stancer

### Structure tarifaire

Stancer propose une tarification simple et transparente :
- **Cartes européennes** : Tarifs préférentiels
- **Cartes internationales** : Tarifs standard
- **Pas de frais cachés** : Transparence totale
- **Volume élevé** : Tarifs dégressifs négociables

### Comparaison coûts

| Aspect                    | Stancer      | Concurrents US |
|---------------------------|--------------|----------------|
| **Transparence**          | Totale       | Variable       |
| **Support**               | Français     | International  |
| **Conformité RGPD**       | Native       | Adaptée        |
| **Tarifs européens**      | Optimisés    | Standard       |

## Fonctionnalités avancées

### Gestion des paiements

Depuis votre dashboard Stancer :
- **Suivi en temps réel** de toutes les transactions
- **Gestion des remboursements** en un clic
- **Rapports détaillés** et exports
- **Détection de fraude** avec scoring

### Outils de réconciliation

* **Exports automatiques** vers vos outils comptables
* **Webhooks détaillés** pour l'intégration système
* **API de réconciliation** pour les grands volumes
* **Rapports personnalisés** selon vos besoins

## Support et assistance

### Support client français

Stancer propose :
- **Équipe support** basée en France
- **Temps de réponse** optimisés
- **Documentation** en français
- **Accompagnement** à l'intégration

### Ressources disponibles

* **Centre d'aide** complet en ligne
* **Documentation technique** détaillée
* **Exemples de code** prêts à l'emploi
* **Communauté développeurs** active

## Résolution des problèmes

### Problèmes courants

| Problème                     | Solution                                    |
|------------------------------|---------------------------------------------|
| **Clés invalides**           | Vérifier la correspondance test/live        |
| **Webhooks non reçus**       | Contrôler l'URL et la configuration        |
| **Paiements rejetés**        | Vérifier les limites et paramètres compte  |
| **3D Secure échoue**         | Valider la configuration DSP2              |

### Diagnostic et logs

Pour résoudre un problème :
1. **Consultez les logs** CLIENTXCMS
2. **Vérifiez le dashboard** Stancer
3. **Testez en mode sandbox** si nécessaire
4. **Contactez le support** Stancer

:::tip À retenir
Stancer représente l'**excellence française** dans le paiement par carte avec des tarifs compétitifs, un support réactif et une conformité RGPD native. C'est le choix idéal pour les entreprises européennes soucieuses de leurs coûts et de leurs données.
:::