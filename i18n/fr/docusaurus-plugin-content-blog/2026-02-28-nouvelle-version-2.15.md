---
slug: nouvelle-version-2.15
title: Nouvelle version 2.15
authors: [martindev]
---
# v2.15

Nous sommes heureux d'annoncer la sortie de la version **2.15** de ClientXCMS !
![version 2.15](/img/blog/versions/v2.15.png)

<!-- truncate -->

### Ajouts
- ➕ Questions de sécurité pour les utilisateurs
- ➕ Suppression du compte
- ➕ Possibilité de retirer toute la boutique et de rediriger vers une autre URL
- ➕ Personnalisation du robots.txt
- ➕ Mise à jour de l'API Client
- ➕ Mise à jour de l'API Application
- ➕ Ajout des notes temporaires
- ➕ Possibilité d'exporter des factures d'un client en particulier
- ➕ Ajout de la page de gestion des annulations
- ➕ Ajout de différents moyens de paiement (Binance, SumUp, Mollie)
- ➕ Ajout de la prise en charge d'Open Graph, des cartes Twitter et des URL canoniques
- ➕ Ajout d'un bouton pour regénérer un PDF
- ➕ Support d'un nouveau système pour les configurations des sections

### Modifications
- 🔄 Amélioration de la page extensions avec la possibilité de multi-télécharger des extensions

### Corrections
- 🔧 `gateways/**` et `source/gateway/**` : ajout dans les URL autorisées sans être connecté avec l'option de forçage
- 🔧 Correction de la création de clé d'API

### Sécurité
- 🔒 Passage à Laravel 12
- 🔒 Passage à PHP 8.3 minimum
