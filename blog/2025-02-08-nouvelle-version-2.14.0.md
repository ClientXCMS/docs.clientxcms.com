---
slug: nouvelle-version-2.14.0
title: Nouvelle version v2.14.0
authors: [martindev]
tags: [version, release, clientxcms]
---
# v2.14.0 - Amélioration & Options Update**

Nous sommes ravis de vous annoncer la sortie de la version **v2.14.0** de ClientXCMS, qui apporte de nombreuses améliorations et nouvelles fonctionnalités pour enrichir votre expérience utilisateur.
![version v2.14.0](/img/blog/versions/v2.14.0.png)

<!-- truncate -->

- ➕ Bouton pour informer le client de l'émission d'une nouvelle facture.
- ➕ Possibilité d'importer un hébergement ou des revendeurs Plesk.
- ➕ Système de modèles d'e-mails personnalisés.
- ➕ Envoi d'e-mails en masse / e-mails personnalisés à un groupe de clients.
- ➕ Possibilité d'envoyer un e-mail à un client.
- ➕ Suppression logicielle des modèles Laravel.
- ➕ Possibilité de débiter une facture sur une source ajoutée par le client.
- ➕ [SocialAuth] Bouton d'inscription/connexion via les fournisseurs sur la page de checkout.
- ➕ Options personnalisées pour les services.
- ➕ Ajout d'une option à un service spécifique.
- ➕ Ajout d'une option de localisation des services lors de la commande.
- ➕ Amélioration des services.
- ➕ [DiscordLink] Choix du type de détection des clients (clients actifs, clients, ou simples comptes synchronisés).
- ➕ Commande "clientxcms:create-api-keys" pour générer des clés d'API.
- ➕ Modification de la date d'échéance et de paiement d'une facture via l'administration.
- ➕ Ajout des paramètres "subject", "content", "priority", et "related_id" dans l'URL pour pré-remplir les champs du ticket.
- ➕ Ajout d'une pièce jointe de la facture au format PDF lors de l'envoi d'une facture par e-mail.
- ➕ Nouvelle actionLogs : désactivation/activation de la 2FA, réinitialisation du mot de passe, compte vérifié.
- ➕ Ajout du paramètre "coupon" dans l'URL du panier pour ajouter automatiquement un code promo.
- ➕ Ajout de la métadonnée "allow_only_as_much_services" en remplacement de la métadonnée "disabled_many_services".
- ➕ [Proxmox] IPAM prend en charge un nœud dédié pour les adresses.
- ➕ Ajout du paramètre "billing" dans l'URL pour pré-sélectionner un cycle de facturation.
- ❌ Modification de la commande "service:delivery" vers "invoice:delete".
- 🔄 Simplification de la commande "clientxcms:update-admin".
- 🔄 Les factures PDF se téléchargent directement.
- 🔄 Modification des pages d’erreurs 500 / 404 avec une page personnalisée pour l’administration.
- 🔄 Envoi d'une notification webhook lorsqu'un support répond à un ticket.
- 🔄 [PayPal Express Checkout] Changement des ID externes vers l'ID de la transaction.
- 🔄 [Stripe] Changement des ID externes vers l'ID du paiement.
- 🔄 Modification de la page des extensions.
- 🔄 Modification de la page d'inscription (changement des champs e-mail et téléphone).
- 🔧 [SocialAuth] Vérification de l'existence d'un compte client avec le même e-mail avant la création.
- 📦 Modification de la page d'un service.
- 📦 Amélioration de la page des gains.
- 🔒 Ajout de la possibilité de désactiver l'A2F (authentification à deux facteurs) via l'administration sur un compte.
