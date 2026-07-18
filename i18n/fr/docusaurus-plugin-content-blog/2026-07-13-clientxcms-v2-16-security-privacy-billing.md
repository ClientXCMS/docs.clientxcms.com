---
slug: clientxcms-v2-16-securite-rgpd-facturation
title: "ClientXCMS 2.16 : sécurité, RGPD et meilleure gestion des comptes"
authors: [martindev]
tags: [release, security, privacy, billing, cloud, v2.16]
translated: true
---

**ClientXCMS 2.16** est l'une de nos mises à jour les plus importantes. Au cœur de cette version : les accès délégués avec les sous-utilisateurs et une gestion complète des avoirs, accompagnés d'un nouveau profil, d'une sécurité renforcée et de nouveaux outils de confidentialité.

![Interface d'invitation d'un sous-utilisateur et configuration des permissions déléguées](/img/blog/v2.16/invite_users.png)

<!-- truncate -->

## Sous-utilisateurs : inviter et déléguer des accès

Un client peut maintenant inviter une autre personne depuis son profil. Le destinataire reçoit l'invitation par e-mail et peut l'accepter pour accéder au compte.

Des permissions détaillées déterminent précisément ce que chaque sous-utilisateur peut faire. Il peut, par exemple, accéder à certains services ou payer des factures sans obtenir un accès illimité au compte principal.

Cette fonctionnalité majeure est idéale pour les équipes, les entreprises et les clients qui souhaitent partager leurs responsabilités techniques ou administratives en toute sécurité.

## Les avoirs pour mieux gérer les remboursements et le solde

La version 2.16 introduit les **avoirs**, une autre fonctionnalité majeure pour les équipes chargées de la facturation. Un administrateur peut créer un avoir pour un client, enregistrer correctement un remboursement et créditer le montant correspondant sur son solde.

![Liste des avoirs d'un client dans le panel d'administration](/img/blog/v2.16/customers_credit_notes.png)

Cette nouveauté garantit un meilleur suivi comptable et offre un processus bien plus clair que l'ajustement manuel du solde.

## Un profil entièrement repensé

Le profil est désormais organisé en onglets clairs afin de retrouver facilement les informations personnelles, les paramètres de sécurité, les utilisateurs invités et les outils de confidentialité. Les clients, les administrateurs et les membres du staff peuvent également ajouter un avatar à leur profil.

![Nouvelle interface du profil ClientXCMS organisée en onglets](/img/blog/v2.16/new_profile_interface.png)

Cette refonte ne se limite pas à l'aspect visuel : elle fournit une base plus lisible à toutes les nouvelles fonctionnalités de gestion du compte introduites dans la version 2.16.

## Une sécurité renforcée pour tous les comptes

Lorsque l'administrateur l'active, chaque utilisateur peut protéger son compte avec une authentification à deux facteurs par **e-mail ou SMS**. ClientXCMS prend en charge **OVH SMS et Twilio** comme fournisseurs SMS.

Les appareils de confiance rendent cette protection plus fluide : un appareil reconnu peut être mémorisé et géré directement depuis l'espace de sécurité. Les questions de sécurité sont maintenant traduisibles afin de proposer une protection cohérente dans la langue de chaque utilisateur.

![Liste des appareils de confiance dans les paramètres de sécurité du compte](/img/blog/v2.16/device%20securities.png)

Toutes ces protections sont également disponibles pour les comptes des **administrateurs et des membres du staff**, dont les accès aux informations sensibles nécessitent une sécurité renforcée.

## Pleinement compatible avec le RGPD

Le respect de la réglementation sur les données personnelles est une priorité pour nous. ClientXCMS permet désormais à chaque utilisateur de :

- exporter ses données personnelles ;
- supprimer son compte ;
- consulter les informations associées à son profil.

![Outils du profil pour exporter ses données personnelles et supprimer son compte](/img/blog/v2.16/export_profile.png)

Les administrateurs peuvent aussi supprimer automatiquement les comptes inactifs depuis **trois ans par défaut**. Cette durée est configurable depuis **Panel administrateur > Paramètres > Paramètres de sécurité**, afin que chaque organisation puisse adapter sa politique à ses obligations légales.

Ces outils rendent ClientXCMS pleinement compatible avec le RGPD et aident les administrateurs à appliquer une politique claire de conservation des données.

## Retrouver plus rapidement les factures et les données

Les factures peuvent maintenant être filtrées par date de paiement et par date d'échéance. Le même principe est disponible pour les dates d'inscription des clients, de création des services, des tickets et d'autres éléments.

![Filtres des factures par date de paiement et date d'échéance](/img/blog/v2.16/filter_invoices.png)

Que vous recherchiez une facture sur une période comptable précise ou les clients inscrits pendant une campagne, les informations utiles ne sont désormais plus qu'à quelques clics.

## Choisir les pays proposés à l'inscription

Depuis les paramètres des langues, l'administrateur peut sélectionner les pays disponibles dans le formulaire d'inscription. La liste reste ainsi pertinente pour les marchés couverts et devient plus simple à parcourir pour les clients.

![Sélection des pays proposés dans le formulaire d'inscription](/img/blog/v2.16/choice_countries.png)

Par défaut, les pays autorisés sont : **France, Belgique, Suisse, Luxembourg, Canada, États-Unis, Royaume-Uni, Allemagne, Espagne, Italie, Portugal, Pays-Bas, Irlande, Autriche, Maroc, Algérie, Tunisie, Sénégal, Côte d'Ivoire et Cameroun**.

## Appliquer automatiquement un code promotionnel depuis votre site

Un code promotionnel peut désormais être transmis dans l'URL de configuration d'un produit :

```text
https://votre-espace-client.example/store/basket/config/2?coupon=NEWGEN
```

![Paramètre d'un produit permettant l'application automatique d'un code promotionnel](/img/blog/v2.16/add_product_coupon.png)

Le code est alors automatiquement appliqué pendant la configuration. Cette option est particulièrement utile pour relier une campagne promotionnelle ou votre site vitrine directement à une offre prête à commander.

## Des règles d'annulation flexibles

Chaque raison d'annulation peut désormais déclencher l'un des trois comportements suivants :

- annuler immédiatement le service ;
- annuler le service à l'expiration de la période en cours ;
- rediriger le client vers la création d'un ticket pour un traitement manuel.

![Configuration d'une raison d'annulation avec les différentes règles disponibles](/img/blog/v2.16/cancellation_rules.png)

Pour les annulations manuelles, le paramètre `cancellation_message` permet de préremplir le ticket avec des instructions ou les informations nécessaires à votre équipe.

![Message prédéfini du ticket créé pour une demande d'annulation manuelle](/img/blog/v2.16/cancellation_message.png)

## Des groupes de produits plus visibles

Les groupes de produits peuvent maintenant afficher des badges afin de mettre en avant une catégorie populaire, nouvelle ou recommandée dans la boutique.

![Configuration du badge d'un groupe de produits](/img/blog/v2.16/store_group_badge.png)

## Un accès Plesk complet pour les offres Cloud

Les clients des offres Cloud ClientXCMS peuvent désormais activer un accès **Plesk complet** et gérer leur hébergement, leurs fichiers et leurs bases de données. Pour l'activer, rendez-vous dans **clientxcms.com > Services > Cloud > Activer Plesk**.

:::warning
L'activation de Plesk bloque la modification des extensions du service Cloud. Vérifiez les extensions sélectionnées avant de l'activer.
:::

## Gestion des domaines : recherche de fournisseurs pour les tests

Nous avons également développé une fonctionnalité de gestion des domaines, mais elle **n'est pas encore disponible officiellement**. Avant de l'ouvrir à tous, nous souhaitons la tester avec davantage de fournisseurs de domaines et valider les intégrations dans des conditions réelles.

Si vous êtes un fournisseur ou souhaitez nous aider à tester cette fonctionnalité, contactez-nous. Vos retours nous aideront à préparer une sortie officielle fiable.

## Un nouvel espace pour vos idées

L'ancienne plateforme `ideas.clientxcms.com` est remplacée par [clientxcms.com/ideas](https://clientxcms.com/ideas). Les suggestions et les demandes de fonctionnalités sont maintenant gérées directement dans ClientXCMS grâce au nouvel **addon Idea**, pour offrir une expérience plus cohérente à toute la communauté.

![Interface de l'addon Idea pour consulter et proposer des suggestions](https://cdn.clientxcms.com/ressources/addons/idea/front_index.png)

L'addon Idea est disponible **gratuitement** sur la [marketplace ClientXCMS](https://clientxcms.com/resources/idea). Vous pouvez l'installer sur votre propre site ClientXCMS afin de recueillir, organiser et suivre les suggestions de vos clients.

## Et bien plus encore

La version 2.16 apporte également les SLA pour les départements de support, la récupération de l'état des services, une meilleure isolation des extensions, des améliorations d'accessibilité, de nouvelles pages d'erreur et de nombreux correctifs de facturation et de stabilité.

Consultez le [changelog complet de ClientXCMS 2.16](/fr/blog/nouvelle-version-2.16) pour découvrir tous les détails techniques.
