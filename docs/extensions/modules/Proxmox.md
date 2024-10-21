---
sidebar_position: 1
---

# Proxmox

Proxmox est une plateforme populaire permettant de gérer des serveurs virtuels et des conteneurs de manière rapide et intuitive. Ce module vous permet de créer et de gérer automatiquement des VPS pour vos clients, selon les ressources et les performances choisies. Vous pouvez ainsi vendre différents types de machines virtuelles ou de conteneurs, adaptés aux besoins de vos clients.

:::info Modules
Pour utiliser les fonctionnalités décrites ci-dessous, vous devez activer le module Proxmox dans **ClientXCMS**.
:::

## Authentification

ClientXCMS utilise le système d'API de PVE (Proxmox Virtual Environment) pour garantir une connexion sécurisée et fiable avec votre cluster Proxmox.

### Étapes de configuration

Pour connecter ClientXCMS à votre serveur Proxmox, suivez ces étapes :

#### 1. Activer le module Proxmox

Assurez-vous que le module Proxmox est activé dans **ClientXCMS**.

#### 2. Configurer un serveur Proxmox dans ClientXCMS

1. Connectez-vous à votre espace d'administration ClientXCMS.
2. Allez dans **Paramètres** > **Paramètres généraux** > **Serveurs**.
3. Cliquez sur **Créer**, puis sélectionnez **Proxmox** comme type de serveur.

Remplissez les informations suivantes :

- **Nom :** Le nom que vous souhaitez attribuer au serveur Proxmox.
- **Type de serveur :** Proxmox.
- **Nom d'hôte :** Le nom d'hôte du Proxmox VE.
- **Adresse IP :** L'adresse IP du Proxmox VE.
- **Port :** Le port par défaut est `8006`. Si vous avez configuré un proxy avec SSL, vous pouvez utiliser `443` ou `80`.
- **Token ID :** L'ID du jeton Proxmox pour l'API.
- **Secret :** Le secret associé au jeton Proxmox pour l'API.

![img](../../../static/img/next_gen/extensions/modules/proxmox/image_1.png)

#### 3. Générer un Token API dans Proxmox

1. Connectez-vous à votre interface Proxmox VE.
2. Accédez à **Datacenter (XXX)** > **Permissions** > **API Tokens**.
3. Cliquez sur **Add** pour créer un nouveau jeton API.

   Remplissez les informations suivantes :
   
   - **User :** `root@pam`
   - **Token ID :** Choisissez un nom pour votre jeton, par exemple `clientxcms`.
   - **Privilege Separation :** Désactivez cette option en la décochant.

![img](../../../static/img/next_gen/extensions/modules/proxmox/image_2.png)

4. Cliquez sur **Add** pour finaliser la création du jeton.

#### 4. Récupérer le Token ID et le Secret

Dans le **modal** qui s'ouvre, copiez les valeurs **Token ID** et **Secret**. Ces informations seront nécessaires lors de la création du serveur dans ClientXCMS (étape 2).

![img](../../../static/img/next_gen/extensions/modules/proxmox/image_3.png)

#### 5. Tester la connexion

Une fois les informations d'authentification saisies dans la page de création du serveur, cliquez sur **Vérifier** pour tester la connexion. Si le statut renvoyé est `200` et que le message ``Connection successful`` apparaît, vous pouvez cliquer sur **Créer** pour ajouter votre serveur Proxmox à ClientXCMS.
