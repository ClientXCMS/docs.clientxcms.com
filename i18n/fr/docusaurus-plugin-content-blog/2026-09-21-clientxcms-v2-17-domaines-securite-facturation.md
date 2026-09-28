---
slug: clientxcms-v2-17-domaines-securite-facturation
title: "ClientXCMS 2.17 : domaines, facturation électronique et Passkeys"
authors: [martindev]
tags: [release, domains, e-invoicing, security, passkeys, v2.17]
---
**ClientXCMS 2.17** marque le lancement officiel de la gestion des noms de domaine, introduit la facturation électronique et l'e-reporting, et ajoute l'authentification sans mot de passe avec les Passkeys. Cette version renforce également la sécurité de toute la plateforme.

![Recherche de domaines avec les extensions disponibles et leurs prix](/img/blog/v2.17/domains3.png)

<!-- truncate -->

## 🌐 Gestion des domaines avec OpenProvider

Après une première présentation dans la version 2.16, la gestion des domaines est désormais officiellement disponible. **OpenProvider** est le premier registrar pris en charge.

### Importation et tarification des extensions

Connectez un compte OpenProvider de production ou un compte sandbox séparé, puis importez les extensions que vous souhaitez vendre. ClientXCMS récupère les prix d'enregistrement, de renouvellement et de transfert. Vous pouvez appliquer un prix fixe ou une marge en pourcentage à plusieurs extensions sélectionnées.

![Importation des extensions et des prix OpenProvider](/img/blog/v2.17/domains_admin.png)

Les serveurs de noms et les enregistrements DNS par défaut peuvent être configurés sur une extension, puis copiés vers les autres. Consultez le [guide de configuration OpenProvider](/fr/extensions/modules/openprovider) pour configurer les identifiants, la sandbox, les prix et les DNS.

### Recherche progressive des domaines

Les résultats s'affichent progressivement pendant la vérification de chaque extension, avec leur disponibilité et leur prix. Un système de cache conserve une interface réactive même avec un catalogue important.

## 🧾 Facturation électronique et conformité française

La version 2.17 introduit la génération Factur-X, l'e-reporting et plusieurs addons complémentaires.

### Business Lookup France et EU VAT Check

Avec [Business Lookup France](/fr/extensions/addons/business-lookup-fr), le client recherche son entreprise par raison sociale, SIREN ou SIRET pendant la commande. La sélection du bon établissement remplit automatiquement les informations légales et fiscales disponibles.

L'addon [EU VAT Check](/fr/extensions/addons/vat-check-eu) complète cette recherche en vérifiant les numéros de TVA européens avec VIES. La durée de validité des contrôles positifs est configurable afin de limiter les requêtes répétées.

### Providers Factur-X et e-reporting

ClientXCMS peut générer les documents électroniques localement ou les transmettre avec un provider configuré :

- **Local** génère et conserve le document dans ClientXCMS sans transmission externe.
- [**Facturation électronique Qonto**](/fr/extensions/addons/qonto-einvoicing) transmet les factures externes déjà numérotées par l'API réglementaire Qonto, après validation de l'accès par Qonto.
- [**Pennylane**](/fr/extensions/addons/pennylane) importe les factures Factur-X avec un token API Entreprise et assure leur transmission par sa plateforme agréée.
- [**Chorus Pro**](/fr/extensions/addons/chorus-pro) est sélectionné séparément pour les factures destinées aux entités publiques françaises et se connecte par PISTE.

L'identité fiscale du vendeur, le SIREN/SIRET, le numéro de TVA, la nature des opérations, le régime de TVA, le fuseau fiscal, la date d'activation et les providers principal et public sont regroupés dans les paramètres de facturation.

![Configuration Factur-X et e-reporting avec les providers actifs](/img/blog/v2.17/e-invoicing-report.png)

### Paiements en plusieurs fois et TVA précise

Les factures peuvent désormais être réglées en plusieurs échéances. Chaque paiement partiel débite le solde client de façon atomique et conserve le montant exact de TVA correspondant.

## 🔐 Authentification sans mot de passe avec les Passkeys

ClientXCMS 2.17 ajoute WebAuthn et les Passkeys. Les clients peuvent enregistrer une clé depuis leur profil et se connecter avec leur empreinte, la reconnaissance faciale ou une clé de sécurité.

![Connexion avec une Passkey](/img/blog/v2.17/passkeys.png)

Cette protection s'ajoute à la détection des mots de passe compromis avec HaveIBeenPwned et à la migration transparente des algorithmes de hachage.

## 🖥️ Administration modernisée

### Disposition verticale ou horizontale

Les administrateurs peuvent choisir entre une barre latérale verticale et la navigation horizontale classique. Ce choix est proposé à la première connexion et reste modifiable depuis la barre supérieure ou le profil.

![Choix de la disposition de l'administration](/img/blog/v2.17/toggle_orientation.png)

![Nouvelle disposition de l'administration](/img/blog/v2.17/domains4.png)

## 🔒 Renforcement approfondi de la sécurité

Cette version comprend notamment :

- le chiffrement en base de données des secrets TOTP/2FA et des paramètres sensibles ;
- une authentification API stricte avec expiration et capacités des clés ;
- un moteur fermé et assaini pour les modèles d'e-mails ;
- la vérification SHA-256 et des signatures des archives d'extensions ;
- le filtrage des journaux d'audit et des jetons transmis à Sentry ;
- l'isolation de la confirmation du mot de passe entre clients et administrateurs ;
- des exports de données personnelles et une suppression de compte plus complets.

## Et bien plus encore

La version 2.17 apporte également des contrôles du cycle de vie des services, des actions groupées, une interface harmonisée, la compatibilité Vite 8 et le nouvel [addon de newsletter Brevo](/fr/extensions/addons/brevo). Brevo relie le formulaire du pied de page à une liste de contacts tout en sécurisant l'accès avec une clé API et l'autorisation de l'adresse IP du serveur.

Consultez le [journal complet de ClientXCMS 2.17](/fr/blog/nouvelle-version-2.17) pour découvrir tous les changements techniques.
