---
sidebar_position: 10
---

# Mailcow

Le module Mailcow permet de vendre et de provisionner automatiquement des services de messagerie gérés depuis CLIENTXCMS. Chaque service peut contenir un ou plusieurs domaines, des boîtes mail, des alias, des quotas et des limites d'envoi.

:::info Module
Le module Mailcow doit être activé dans CLIENTXCMS avant de pouvoir créer un serveur ou un produit. [Découvrez comment activer un module](../).
:::

## Fonctionnalités prises en charge

- Création automatique du domaine et de son administrateur après une commande
- Limites de boîtes mail, d'alias, de stockage et d'envoi définies par le produit
- Gestion des domaines depuis l'espace client
- Export de la configuration DNS
- Accès direct à l'administration Mailcow et à SOGo
- Suspension et réactivation automatiques
- Expiration et résiliation automatiques
- Mise à niveau du produit avec application des nouvelles limites au service
- Options de serveur MX secondaire et de relais de tous les destinataires

## Prérequis

Avant de connecter Mailcow à CLIENTXCMS :

1. Installez Mailcow et vérifiez que son interface web et son API sont accessibles depuis le serveur CLIENTXCMS.
2. Configurez un nom d'hôte valide et un certificat TLS pour une utilisation en production.
3. Récupérez l'adresse IP publique utilisée pour les connexions sortantes du serveur CLIENTXCMS.
4. Créez une clé API Mailcow avec un accès en lecture/écriture et autorisez cette adresse IP.

Exécutez la commande suivante sur le serveur CLIENTXCMS pour récupérer son adresse IPv4 publique :

```bash
curl -4 https://ifconfig.me
```

Copiez l'adresse retournée : c'est celle que vous devez autoriser dans Mailcow.

:::warning Protocole obligatoire
Les champs **Nom d'hôte** et **Adresse IP** dans CLIENTXCMS doivent tous les deux contenir une URL complète commençant par `http://` ou `https://`. Ne saisissez pas uniquement `mail.example.com` ou `192.0.2.10`.
:::

En production, utilisez HTTPS dès que possible. Exemple :

```text
Nom d'hôte : https://mail.example.com/
Adresse IP : https://192.0.2.10/
Port : 443
```

Si Mailcow est volontairement exposé en HTTP sur un réseau privé de confiance, utilisez `http://` dans les deux champs et le port correspondant, généralement `80`.

## Récupérer la clé API Mailcow

Connectez-vous à Mailcow avec un compte administrateur, puis :

1. Accédez à `Système` > `Configuration` > `Accès` > `API`.
2. Activez l'**accès API en lecture/écriture**. L'accès en lecture seule ne suffit pas, car CLIENTXCMS doit créer, modifier, suspendre et supprimer les domaines et les comptes.
3. Copiez la clé API en lecture/écriture générée et conservez-la secrète.
4. Dans la liste des adresses IP autorisées à utiliser l'API, ajoutez l'**adresse IP publique sortante du serveur CLIENTXCMS**.
5. Enregistrez la configuration de l'API Mailcow.

Si CLIENTXCMS se trouve derrière un NAT ou un proxy, autorisez l'adresse IP publique réellement vue par Mailcow, et non l'adresse privée de la machine CLIENTXCMS. N'autorisez pas toutes les adresses avec une plage globale.

:::danger Sécurité de la clé API
La clé API en lecture/écriture donne accès à des opérations Mailcow sensibles. Ne la publiez jamais, ne l'envoyez pas par e-mail et ne l'ajoutez pas à la description d'un produit. Révoquez-la et remplacez-la immédiatement si elle est exposée.
:::

## Créer le serveur CLIENTXCMS

Accédez à `Espace d'administration` > `Paramètres` > `Approvisionnement` > `Serveurs` > `Nouveau`, puis sélectionnez **Mailcow** comme type de serveur.

![Configuration du serveur Mailcow](/img/next_gen/extensions/modules/mailcow/server.png)

Remplissez la fiche comme suit :

| Champ | Configuration |
|-------|---------------|
| **Nom** | Nom interne permettant d'identifier le serveur Mailcow |
| **Type de serveur** | `Mailcow` |
| **Nom d'hôte** | URL publique de Mailcow avec `http://` ou `https://`, par exemple `https://mail.example.com/` |
| **Adresse IP** | URL utilisée par CLIENTXCMS pour joindre Mailcow, également avec `http://` ou `https://` |
| **Statut** | `Actif` pour autoriser le provisionnement sur ce serveur |
| **Port** | `443` pour HTTPS ou le port exposé par votre installation Mailcow ; utilisez `80` uniquement pour HTTP |
| **Nom d'utilisateur** | Laissez vide sauf si votre installation l'exige |
| **Mot de passe** | Clé API Mailcow en lecture/écriture |

Enregistrez le serveur, puis testez sa connexion. Si le test échoue, vérifiez le protocole, la fin de l'URL, le port, le certificat, la clé API et la liste des IP autorisées dans Mailcow.

:::tip Nom d'hôte et adresse IP
Le nom d'hôte correspond à l'adresse Mailcow présentée aux clients. Le champ Adresse IP peut contenir une URL privée ou directe utilisée par CLIENTXCMS pour joindre l'API. Dans les deux cas, indiquez explicitement le protocole.
:::

## Créer un produit Mailcow

Commencez par [créer un produit](../../settings/store/products.md#créer-un-nouveau-produit), puis sélectionnez **Mailcow** comme type.

![Produit Mailcow](/img/next_gen/extensions/modules/mailcow/product.png)

Configurez son nom, son groupe, son prix, son stock, sa description et sa visibilité comme pour tout autre produit CLIENTXCMS. Enregistrez-le, puis sélectionnez **Configurer l'offre**.

## Configurer l'offre

![Configuration d'une offre Mailcow](/img/next_gen/extensions/modules/mailcow/config.png)

| Champ | Description |
|-------|-------------|
| **Serveur Mailcow** | Serveur sur lequel les services de messagerie seront provisionnés |
| **Domaines maximum** | Nombre de domaines que le client peut ajouter au service |
| **Boîtes maximum par domaine** | Limite de boîtes mail appliquée à chaque domaine |
| **Alias maximum par domaine** | Limite d'alias appliquée à chaque domaine |
| **Quota par défaut d'une boîte (Mio)** | Stockage initialement attribué à une nouvelle boîte mail |
| **Quota maximal d'une boîte (Mio)** | Quota le plus élevé pouvant être attribué à une boîte mail |
| **Quota total du domaine (Mio)** | Stockage total partagé par toutes les boîtes d'un domaine |
| **Valeur de la limite d'envoi** | Nombre de messages autorisés pendant la période sélectionnée |
| **Période de la limite d'envoi** | Unité de temps utilisée pour limiter les envois |
| **Serveur MX secondaire** | Configure les domaines pour une utilisation comme MX secondaire |
| **Relayer tous les destinataires** | Relaie les messages de tous les destinataires ; activez cette option uniquement lorsque ce comportement est nécessaire |

Le quota par défaut d'une boîte ne doit pas dépasser son quota maximal. Le quota total du domaine doit être suffisant pour le nombre de boîtes proposé. Définissez des limites d'envoi prudentes afin de protéger la réputation du serveur Mailcow.

:::warning Configuration du relais
N'activez pas **Serveur MX secondaire** ou **Relayer tous les destinataires** pour une offre de messagerie hébergée classique. Ces options modifient le routage des e-mails et doivent être utilisées uniquement pour un produit de relais ou de MX de secours volontairement configuré.
:::

## Automatisation du service

Une fois le produit configuré, le module suit le cycle de vie standard des services CLIENTXCMS :

| Événement | Action automatisée |
|-----------|--------------------|
| **Création** | Crée le domaine Mailcow et son administrateur, génère les identifiants et applique les quotas et limites du produit |
| **Suspension** | Désactive l'accès au service tout en conservant sa configuration pour une réactivation |
| **Réactivation** | Rétablit l'accès au service Mailcow existant |
| **Mise à niveau** | Applique les limites de domaines, boîtes, alias, quotas et envois de la nouvelle offre |
| **Expiration/résiliation** | Supprime les ressources Mailcow selon le processus d'expiration configuré dans CLIENTXCMS |

:::danger Résiliation et perte des e-mails
La suppression d'un domaine Mailcow peut supprimer ses boîtes et ses messages. Configurez soigneusement les rappels de paiement et les délais de résiliation, puis conservez des sauvegardes indépendantes avant de supprimer un service.
:::

## Gestion depuis l'espace client

La vue d'ensemble du service récapitule le nombre de domaines, de boîtes, d'alias configurés ainsi que le stockage consommé par rapport aux limites du produit.

![Vue d'ensemble d'un service Mailcow](/img/next_gen/extensions/modules/mailcow/services.png)

### Domaines configurés

![Domaines Mailcow configurés](/img/next_gen/extensions/modules/mailcow/domain.png)

Pour chaque domaine, le client peut consulter l'utilisation des boîtes, des alias et du stockage. Selon l'état du service, l'interface fournit également :

- L'export de la configuration DNS
- L'accès à l'administration Mailcow
- L'accès au webmail SOGo
- Les identifiants générés pour l'administrateur du domaine
- La suppression du domaine lorsqu'elle est autorisée

### Ajouter un domaine

![Ajout d'un domaine Mailcow](/img/next_gen/extensions/modules/mailcow/add_domains.png)

Le client saisit le nom du domaine et CLIENTXCMS le crée dans Mailcow avec les limites définies par l'offre. Le nombre de domaines configurés ne peut pas dépasser la limite du produit.

Après la création, le propriétaire doit configurer les enregistrements DNS retournés par le service. Vérifiez au minimum l'adresse de l'hôte de messagerie, le MX, SPF, DKIM et DMARC avant d'utiliser le domaine en production.

## Résolution des problèmes

- **Le test de connexion échoue :** vérifiez que les deux URL contiennent `http://` ou `https://`, que le port correspond au protocole et que Mailcow est accessible depuis CLIENTXCMS.
- **L'API retourne une erreur d'autorisation :** utilisez la clé en lecture/écriture et ajoutez l'adresse IP publique sortante de CLIENTXCMS à la liste des IP autorisées par Mailcow.
- **La vérification TLS échoue :** utilisez le nom d'hôte couvert par le certificat Mailcow et renouvelez ou corrigez le certificat au lieu de désactiver sa vérification.
- **Un domaine ne peut pas être créé :** vérifiez les limites du produit, les domaines déjà présents dans Mailcow, la clé API en lecture/écriture et les logs Mailcow.
- **Les messages ne sont pas distribués :** vérifiez les enregistrements MX, SPF, DKIM, DMARC, le DNS inverse, les files d'attente Mailcow et la limite d'envoi.
- **Une mise à niveau ne s'applique pas :** vérifiez la cohérence des nouvelles limites et consultez les logs CLIENTXCMS dans `Paramètres` > `Sécurité` > `Historique`.
