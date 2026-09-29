---
slug: nouvelle-version-2.17
title: Nouvelle version 2.17
authors: [martindev]
tags: [release, domains, e-invoicing, security, passkeys, v2.17]
---
# v2.17

Nous sommes heureux de vous annoncer la sortie de la version **2.17** de ClientXCMS !

![Version 2.17](/img/blog/versions/v2.17.png)

<!-- truncate -->

Découvrez les nouveautés principales et les captures dans notre [présentation complète de ClientXCMS 2.17](/fr/blog/clientxcms-v2-17-domaines-securite-facturation).

### Ajouts
- ➕ Ajout de la journalisation systématique et d'un indicateur de santé pour les tâches planifiées (Cron Scheduler), incluant la durée d'exécution et la capture des erreurs.
- ➕ Ajout de la surveillance en temps réel des files d'attente et des workers (Worker Heartbeat) avec alertes et interface dédiée dans la sécurité.
- ➕ Ajout d'un composant modal d'édition riche et multilingue pour les descriptions de produits, avec aperçu en direct.
- ➕ Ajout de la possibilité d'annuler les livraisons de services en attente directement depuis la liste d'administration.

- ➕ Lancement officiel de la **gestion des noms de domaine** avec recherche progressive, vérification de disponibilité en temps réel et mise en cache des résultats.
- ➕ Ajout du [module **OpenProvider**](/fr/extensions/modules/openprovider) avec prise en charge de la production et de la sandbox, importation automatique des TLD, tarification groupée fixe ou en pourcentage et configuration DNS réutilisable.
- ➕ Ajout du filtrage et de la sélection pendant l'importation des catalogues des registrars.
- ➕ Ajout des serveurs de noms et des enregistrements DNS par défaut pour les extensions.
- ➕ Ajout de l'authentification sans mot de passe avec **Passkeys et WebAuthn**.
- ➕ Ajout de **Factur-X et de l'e-reporting**, avec un provider local, des intégrations pour [Qonto](/fr/extensions/addons/qonto-einvoicing) et [Pennylane](/fr/extensions/addons/pennylane), et externalisation de **Chorus Pro** dans un addon dédié. Inclut les exports comptables des factures et la sélection normalisée des pays de facturation.
- ➕ Ajout de [**Business Lookup France**](/fr/extensions/addons/business-lookup-fr) pour remplir automatiquement les informations d'une entreprise à partir de sa raison sociale, de son SIREN ou de son SIRET.
- ➕ Ajout de [**EU VAT Check**](/fr/extensions/addons/vat-check-eu) pour vérifier les numéros de TVA européens avec VIES et une durée de cache configurable.
- ➕ Ajout de l'identité fiscale du vendeur, du régime de TVA, du fuseau fiscal, de la date d'activation et des providers principal et public.
- ➕ Ajout d'un historique des transmissions électroniques et des statuts retournés par les providers.
- ➕ Ajout du paiement des factures en plusieurs échéances avec débit atomique du solde client et conservation précise de la TVA.
- ➕ Ajout d'une **politique globale et configurable de mot de passe** : paramétrage de la longueur, complexité et refus des mots de passe compromis (Pwned) depuis l'administration, avec validation stricte et indicateur frontend.
- ➕ Ajout d'un moteur fermé pour les modèles d'e-mails, avec migration automatique et assainissement strict du contenu.
- ➕ Ajout de la vérification d'intégrité des extensions avec sommes SHA-256, signatures et extraction confinée.
- ➕ Ajout du choix entre une navigation d'administration verticale ou horizontale.
- ➕ Ajout des actions groupées et harmonisation des icônes Bootstrap sur les cartes de services.
- ➕ Ajout de contrôles du cycle de vie des services pour activer ou désactiver la suspension, la résiliation et le renouvellement automatiques.
- ➕ Ajout de [l&#39;addon de newsletter **Brevo**](/fr/extensions/addons/brevo),
- ➕ Ajout de variables CSS dynamiques pour la couleur principale du thème, permettant de modifier instantanément la palette depuis l'administration.
- ➕ Ajout d'un pipeline i18n automatisé utilisant le français comme source de vérité, avec synchronisation DeepL/Azure.
- ➕ Ajout du support des assets JPG/JPEG dans les règles de bundling Vite.

### Modifications
- 🔄 Standardisation des codes de retour des commandes console (0 pour succès, 1 pour échec).
- 🔄 Uniformisation des noms de routes et répertoires de vues de l'administration en kebab-case.
- 🔄 Amélioration du `ThemeManager` avec une meilleure gestion des métadonnées des thèmes et réorganisation du `ThemeSeeder`.

- 🔄 Refonte de la navigation mobile sous forme de panneau latéral accessible.
- 🔄 Harmonisation des boutons, des contrastes et de la palette de couleurs.
- 🔄 Amélioration de la conformité RGPD des exports de données et de la suppression des comptes.
- 🔄 Amélioration du filtrage des journaux d'audit et suppression des jetons sensibles avant leur transmission à Sentry.
- 🔄 Exclusion des identifiants serveur et mots de passe de l'historique des e-mails.
- 🔄 Amélioration de la validation des prix et des associations entre produits domaine et TLD.
- 🔄 Correction des limites d'utilisation des coupons et validation stricte des options configurables.
- 🔄 Téléchargement des traductions depuis l'hébergement brut afin d'éviter les limites de l'API GitHub.
- 🔄 Exécution des migrations des thèmes depuis leur véritable répertoire.
- 🔄 Mise à jour de Vite, Browserslist, Maatwebsite Excel et Tiptap.
- 🔄 Amélioration de l'Updater d'extensions : nettoyage automatique des fichiers obsolètes, résolution exacte des versions locales, et auto-enregistrement des extensions non répertoriées.
- 🔄 Amélioration de l'édition des sections de thème : réparation de l'accordéon, barre d'action flottante, et conformité ARIA/contrastes.
- 🔄 Refonte de la bascule du Dark Mode : déplacement de la classe `dark` sur la balise `<html>` et correction de la synchronisation de l'icône.

### Corrections
- 🔧 Correction des abus de codes promo via une protection anti-course : les commandes en attente réservent désormais temporairement le quota d'utilisation du coupon.
- 🔧 Correction du repliement des tarifs additionnels dans l'administration (qui ne pouvait plus être refermé après ouverture).
- 🔧 Correction du gestionnaire d'erreurs pour empêcher la transformation des erreurs de validation en pages 500 en production.
- 🔧 Correction de la réinitialisation de l'état de livraison lors du renouvellement des services et calcul exact du tarif de renouvellement des domaines.

- 🔧 Correction du test de connexion des serveurs et protection des identifiants enregistrés.
- 🔧 Correction de la génération des numéros de téléphone dans les tests.

### Sécurité
- 🔒 **Sécurisation des identifiants serveurs** : masquage des mots de passe dans le DOM HTML de l'administration et obligation de les ressaisir lors du changement d'hôte ou d'IP.
- 🔒 **Sécurisation des webhooks de paiement et immuabilité des factures** : validation stricte du montant payé, de la devise et du statut (Stripe, Mollie, PayPal IPN), avec impossibilité de réouvrir ou marquer payée une facture déjà clôturée.
- 🔒 **Durcissement de l'API Client** : accès restreint aux tokens Sanctum actifs, 2FA obligatoire, hash anti-attaque temporelle, masquage des métadonnées sensibles et pagination strictement bornée.

- 🔒 Chiffrement au repos des secrets TOTP/2FA et des paramètres sensibles.
- 🔒 Authentification API stricte, avec expiration et capacités des clés.
- 🔒 Isolation de la confirmation du mot de passe entre les espaces client et administrateur.
- 🔒 Migration transparente des algorithmes de hachage des mots de passe.
- 🔒 Remplacement de l'exécution Blade libre dans les e-mails par une grammaire fermée.
- 🔒 Vérification SHA-256 et des signatures des archives d'extensions.
- 🔒 Suppression des jetons sensibles dans les URL envoyées à Sentry.
