---
sidebar_position: 3
---

# Facturation

Dans **CLIENTXCMS**, la configuration de la **facturation** est le pilier de votre activité commerciale. <br/>
L'objectif est essentiel : **maîtriser tous les aspects financiers de votre boutique** pour garantir une **conformité légale parfaite** et une **gestion optimale de vos revenus**. Une configuration de facturation bien pensée simplifie la comptabilité, améliore la relation client et vous protège juridiquement.

La facturation gère automatiquement tous les aspects financiers : génération des factures, calcul des taxes, gestion des devises, et respect des réglementations.

Vous pouvez gérer la facturation depuis :

`Paramètres` > `Facturation` > `Facturation`

:::tip Astuce
Une facturation bien configurée est **la base de la confiance** avec vos clients et de votre conformité légale.
Prenez le temps de bien paramétrer chaque option selon votre contexte juridique et commercial.
:::

## Pourquoi bien configurer la facturation ?

La facturation automatisée est cruciale pour :

* **Respecter les obligations légales** en matière de TVA et de facturation
* **Automatiser la génération** des factures et la gestion comptable
* **Améliorer l'expérience client** avec des factures claires et professionnelles
* **Simplifier votre comptabilité** et faciliter les déclarations fiscales

:::tip Astuce
C'est comme avoir un comptable intégré qui travaille 24h/24 📊 — précis, fiable et toujours conforme aux réglementations.
:::

## Configuration de base

### Devise principale

**Devise** | (menu déroulant)<br />
La devise principale de votre boutique, utilisée par défaut pour tous les prix et factures.
Choisissez parmi une liste de devises internationales (EUR, USD, GBP, etc.).

:::info Note
Vous pourrez définir des devises spécifiques par produit ultérieurement pour une boutique internationale.
:::

### Adresse commerciale

**Adresse de l'espace client** | (zone de texte)<br />
L'adresse légale de votre entreprise qui apparaîtra sur toutes les factures.
Cette information est obligatoire pour la conformité légale.

![Affichage de l'adresse sur les factures](/img/next_gen/settings/store/billing/address.png)

Incluez :
- Nom de l'entreprise
- Adresse complète
- Code postal et ville
- Pays
- Numéro SIRET/TVA si applicable

## Configuration des taxes

### Mode de taxe

CLIENTXCMS propose deux modes de gestion des prix :

**Exclusif** | Mode hors taxes<br />
Les prix affichés dans la boutique **n'incluent pas** la TVA.
La taxe est ajoutée lors du calcul final au panier.

**Inclusif** | Mode toutes taxes comprises<br />
Les prix affichés incluent déjà la TVA.
Le prix affiché est le prix final payé par le client.

:::tip Conseil
Le mode **inclusif** est généralement préféré pour le B2C car il évite les surprises au client, tandis que le mode **exclusif** est courant en B2B.
:::

### Gestion de la TVA

**Activation de la TVA** | (interrupteur)<br />
Active ou désactive la gestion de la TVA sur votre boutique.

**Taux de TVA par défaut** | (pourcentage)<br />
Le taux appliqué par défaut si aucun taux spécifique n'est défini.

#### Modes de calcul de la TVA

**Taux fixe** | Taux unique<br />
Un seul taux de TVA appliqué à tous les clients et produits.
Idéal pour une activité locale ou un pays unique.

**Taux variable** | Selon la localisation<br />
Le taux de TVA varie selon le pays du client.
Essentiel pour la vente internationale et la conformité européenne.

:::warning Important - Réglementation européenne
Selon la législation européenne, pour les ventes B2C :
- **Jusqu'à 10 000€** de ventes totales dans l'UE : TVA française
- **Au-delà de 10 000€** : TVA du pays du client
:::

### TVA personnalisée par client

Pour des cas spécifiques, vous pouvez personnaliser la TVA :

| Métadonnée | Valeur | Effet |
|------------|--------|-------|
| `vat_percent` | `0` à `100` | Taux de TVA personnalisé |
| `vat_disabled` | `true` | Désactive la TVA pour ce client |

## Modes de facturation

### Types de factures

**Facture classique** | Mode standard<br />
Les clients reçoivent directement une facture définitive après paiement.
Adapté à la plupart des cas d'usage.

**Facture proforma** | Mode pro<br />
Les clients reçoivent d'abord une facture proforma (devis), puis une facture définitive après paiement.
Idéal pour les commandes importantes ou les processus d'achat complexes.

### Numérotation des factures

**Préfixe de facture** | (texte)<br />
Personnalisez le préfixe de vos numéros de facture.
Par exemple : `INV-` donnera `INV-2024-08-0001`

![Exemple de préfixe de facture](/img/next_gen/settings/store/billing/invoice_prefix.png)

:::tip Bonnes pratiques
- Utilisez un préfixe court et reconnaissable
- Incluez l'année pour faciliter l'archivage
- Respectez une logique cohérente dans le temps
:::

## Conditions commerciales

### Conditions générales de vente

**CGV** | (zone de texte ou lien)<br />
Définissez vos conditions générales de vente qui seront présentées lors du processus de commande.
Les clients devront les accepter avant de pouvoir finaliser leur achat.

![Affichage des CGV lors du paiement](/img/next_gen/settings/store/billing/cgv.png)

### Termes et conditions des factures

**Mentions légales** | (zone de texte)<br />
Ajoutez des mentions spécifiques qui apparaîtront sur toutes vos factures.
Par exemple : "TVA non applicable", "Auto-entrepreneur", "Dispensé d'immatriculation".

![Affichage des termes sur les factures](/img/next_gen/settings/store/billing/invoice_terms.png)

## Sécurité et validation

### Confirmation de compte

**Forcer la confirmation pour commander** | (case à cocher)<br />
Oblige les clients à valider leur adresse e-mail avant de pouvoir effectuer un achat.
Recommandé pour réduire les commandes frauduleuses.

## Gestion automatisée

### Actions sur les factures impayées

**Délai d'action** | (nombre de jours)<br />
Définit après combien de jours les factures impayées sont traitées automatiquement.

**Actions disponibles** :
- **Annuler la facture** : Marque la facture comme annulée
- **Supprimer la facture** : Supprime définitivement la facture

Utiliser `0` désactive cette fonctionnalité.

:::warning Attention
La suppression automatique des factures peut impacter votre comptabilité. Préférez l'annulation pour conserver l'historique.
:::

## Notifications et intégrations

### Webhooks de paiement

**URL du webhook** | (URL)<br />
Configurez une URL qui sera appelée automatiquement à chaque paiement réussi.
Idéal pour intégrer avec Discord, Slack ou vos propres systèmes.

#### Configuration d'un webhook Discord

1. Accédez aux paramètres de votre serveur Discord
2. Section `Intégrations` → `Créer une intégration`
3. Nommez votre webhook et sélectionnez le canal
4. Copiez l'URL générée
5. Collez-la dans le champ webhook de ClientXCMS

![Exemple de notification Discord](https://cdn.clientxcms.com/ressources/docs/order.png)

Les webhooks permettent de :
- Recevoir des notifications en temps réel
- Synchroniser avec des outils externes
- Automatiser des processus post-vente

## Gestion des upgrades

### Améliorations de services

**Frais de configuration sur upgrade** | (case à cocher)<br />
Applique les frais d'installation configurés lors d'une amélioration de service.
Utile pour facturer les coûts de migration ou de reconfiguration.

**Délai minimum pour renouvellement forcé** | (nombre de jours)<br />
Force le renouvellement du service lors d'un upgrade si moins de X jours restent avant expiration.
Évite les calculs de facturation complexes sur de courtes périodes.

## Exemples de configuration

### Configuration micro-entreprise (France)

```
Mode de taxe : Inclusif
TVA : Désactivée
Termes facture : "TVA non applicable, art. 293 B du CGI"
Préfixe : "ME-"
```

### Configuration société soumise à TVA

```
Mode de taxe : Exclusif
TVA : Activée (20%)
Mode TVA : Taux variable (UE)
Préfixe : "FACT-"
```

### Configuration boutique internationale

```
Devise : EUR
Mode de taxe : Inclusif
TVA : Taux variable
Webhook : Configuré pour Slack
```

## Bonnes pratiques

### Conformité légale

1. **Vérifiez régulièrement** les taux de TVA en vigueur
2. **Documentez vos choix** de configuration pour les audits
3. **Testez les factures** avec différents profils clients
4. **Sauvegardez** vos paramètres avant modifications

### Optimisation commerciale

1. **Mode inclusif** pour réduire l'abandon de panier
2. **CGV claires** pour éviter les litiges
3. **Webhooks configurés** pour un suivi temps réel
4. **Préfixes cohérents** pour faciliter la comptabilité

:::tip À retenir
La facturation est le cœur financier de votre activité. Une configuration rigoureuse vous fait gagner du temps, évite les erreurs et renforce la confiance de vos clients. Investissez le temps nécessaire pour bien la paramétrer dès le début.
:::
