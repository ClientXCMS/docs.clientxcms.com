---
slug: nouvelle-version-2.16
title: Nouvelle version 2.16
authors: [martindev]
tags: [release, security, privacy, billing, v2.16]
translated: true
---

# v2.16

Nous sommes heureux d'annoncer la sortie de **ClientXCMS 2.16** ! Cette mise à jour majeure renforce la sécurité et la confidentialité des comptes, tout en introduisant les accès délégués, les avoirs, des filtres avancés et de nombreuses améliorations dans les espaces client et d'administration.

![ClientXCMS version 2.16](/img/blog/versions/v2.16.png)

<!-- truncate -->

Retrouvez les principales nouveautés en images dans notre [présentation complète de ClientXCMS 2.16](/fr/blog/clientxcms-v2-16-securite-rgpd-facturation).

### Ajouts

- ➕ Ajout des invitations et des accès délégués. Les sous-utilisateurs invités peuvent accéder aux services et payer les factures selon les permissions qui leur sont accordées.
- ➕ Ajout des avoirs pour enregistrer les remboursements et créditer facilement le solde d'un client.
- ➕ Ajout des avatars de profil pour les clients, les administrateurs et les membres du staff.
- ➕ Ajout de l'authentification multifacteur (MFA) par SMS, avec prise en charge des fournisseurs Twilio et OVH SMS.
- ➕ Ajout de la gestion des appareils de confiance afin d'éviter une nouvelle vérification sur les appareils reconnus.
- ➕ Ajout de l'export des données personnelles et de la suppression du compte pour répondre aux exigences du RGPD.
- ➕ Ajout de la suppression automatique des comptes inactifs après une durée configurable (trois ans par défaut).
- ➕ Ajout de la traduction des questions de sécurité.
- ➕ Ajout d'une liste de pays autorisés à l'inscription, configurable depuis les paramètres des langues.
- ➕ Ajout de filtres par date pour les factures (paiement et échéance), les clients (inscription), les services (création), les tickets et d'autres listes.
- ➕ Ajout des accords de niveau de service (SLA) pour les départements de support, avec suivi et notifications des tickets à traiter.
- ➕ Ajout d'un comportement configurable pour chaque raison d'annulation : annulation immédiate, annulation à l'expiration du service ou traitement manuel par ticket avec un message prédéfini.
- ➕ Ajout de l'application automatique d'un code promotionnel depuis l'URL de configuration d'un produit grâce au paramètre `coupon`.
- ➕ Ajout de la possibilité d'associer des produits et des groupes à des sous-domaines.
- ➕ Ajout de badges aux groupes de produits pour rendre la boutique plus lisible.
- ➕ Ajout de la récupération périodique de l'état des services lors des livraisons et des modifications.
- ➕ Ajout d'un chargeur isolé pour les extensions afin qu'une extension défaillante ne puisse plus faire planter toute l'application.
- ➕ Développement d'une première version de la gestion des domaines. Elle n'est pas encore disponible officiellement : nous recherchons des fournisseurs souhaitant nous aider à tester les intégrations.

### Modifications

- 🔄 Refonte complète du profil client avec une interface organisée en onglets.
- 🔄 Refonte de la présentation des groupes de produits avec l'ajout de badges visuels.
- 🔄 Amélioration de la création des factures, du stockage des séquences de numérotation, des renouvellements, des remboursements et des avoirs.
- 🔄 Refonte des pages d'erreur 403 et 500 pour fournir des informations plus claires aux utilisateurs.
- 🔄 Amélioration de l'accessibilité de l'interface, notamment pour la navigation, la lisibilité et les interactions.
- 🔄 Amélioration de l'expérience utilisateur sur plusieurs écrans client et administrateur.
- 🔄 Les clients des offres Cloud ClientXCMS peuvent désormais activer un accès Plesk complet depuis **clientxcms.com > Services > Cloud > Activer Plesk** afin de gérer leur hébergement, leurs fichiers et leurs bases de données. L'activation de Plesk bloque ensuite la modification des extensions.
- 🔄 Remplacement de `ideas.clientxcms.com` par [clientxcms.com/ideas](https://clientxcms.com/ideas), désormais propulsé par le nouvel [addon Idea disponible gratuitement sur la marketplace](https://clientxcms.com/resources/idea).

### Corrections

- 🔧 Correction de plusieurs problèmes de droits d'accès et de validation des données.
- 🔧 Correction de cas limites dans les processus de facturation et de gestion des services.
- 🔧 Correction de plusieurs problèmes de stabilité dans les interfaces client et administrateur.
- 🔧 Suppression des doublons de factures de renouvellement.

### Sécurité

- 🔒 Ajout de la possibilité d'imposer l'authentification à deux facteurs par e-mail à tous les utilisateurs.
- 🔒 Ajout de l'authentification à deux facteurs par e-mail ou par SMS.
- 🔒 Ajout des appareils de confiance et renforcement des processus sensibles liés à l'authentification, aux invitations et aux points d'accès publics.
- 🔒 Mise à disposition des mêmes protections pour les comptes administrateurs et les membres du staff.
