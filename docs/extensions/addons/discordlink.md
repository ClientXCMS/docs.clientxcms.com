import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Synchronisation Discord

Il est possible de synchroniser votre espace client avec votre serveur Discord grâce à un bot.

:::tip
La synchronisation fonctionne avec l'addon SocialAuth+ est requis avec la connexion avec discord pour utiliser cette fonctionnalité. Vous pouvez retrouver la documentation sur l'addon [ici](./socialauthplus.md).
:::

## Processus
1. Le client se connecte via Discord ou synchronise son compte à l'espace client
2. Le client peut rejoindre le serveur Discord via l'espace client
3. Si l'option "Compte synchronisé" le rôle discord est ajouté
4. Si l'option "Client synchronisé ayant un service actif" le rôle discord est ajouté si le client a un service actif
5. Si l'option "Client synchronisé ayant déjà eu un service actif" le rôle discord est ajouté si le client a déjà eu un service actif

## Configuration

Une fois l'extension activée, vous pouvez accéder à la configuration de l'addon dans `Espace d'administration ` > `Paramètres` > `Paramètre des extensions` > `DiscordLink`

![img](/img/next_gen/extensions/addons/discordlink/config.png)

Ici vous retrouverez sur cette page les clients détectés par le système. ainsi que les paramètres de l'addon.

**Lien d'invitation** : Lien d'invitation de votre serveur discord. (pour inviter les clients à le rejoindre sur l'espace client)

**ID du serveur** : ID de votre serveur discord.

**Type de détection** : Type de détection des clients. (Compte synchronisé, Client synchronisé ayant un service actif, Client synchronisé ayant déjà eu un service actif)

Vous pouvez également réinitialiser la clé si vous l'avez perdue.

:::warning
Si votre nom de domaine est protégé par un anti-DDoS ou un pare-feu, assurez-vous de désactiver ces protections sur les routes spécifiées dans l'API afin d'éviter toute interruption de service.
:::
### Installation du bot


<Tabs>

<TabItem value="community" label="Installation du bot communautaire">

Intervalle : 15 secondes
#### Étape 1  
Ajoutez le bot à votre serveur Discord en cliquant sur [ce lien d'invitation](https://clientxcms.com/ref/discordbot).  
Il permettra de faire la liaison entre votre serveur Discord et votre hébergeur.

#### Étape 2
Copiez la commande suivante dans votre serveur. **⚠ Attention, la clé sera affichée une seule fois !**  
En cas de perte, il faudra la réinitialiser.


#### Étape 3
Exécutez la commande suivante dans votre serveur Discord en y ajoutant le rôle client.  
Si l'opération réussit, le bot répondra avec un message de succès.

#### Étape 4
Assurez-vous que le bot dispose des permissions nécessaires pour ajouter le rôle.  
*(Le bot doit être au-dessus du rôle à ajouter dans la hiérarchie des rôles.)*

</TabItem>
<TabItem value="personnalise" label="Installation du bot personnalisé">

Intervalle : Personnalisable

#### Étape 1  
Téléchargez le bot personnalisé acheté au préalable en cliquant sur [ce lien](https://clientxcms.com/client/download).  
Il permettra de faire la liaison entre votre serveur Discord et votre hébergeur.


#### Étape 2
Copiez le jeton suivant en lieu sûr. **⚠ Attention, il ne sera affiché qu'une seule fois !**  
En cas de perte, il faudra le réinitialiser.


#### Étape 3
Décompressez le fichier téléchargé et suivez le fichier `README` pour installer et ajouter le bot à votre serveur.


#### Étape 4
Assurez-vous que le bot dispose des permissions nécessaires pour ajouter le rôle.  
*(Le bot doit être au-dessus du rôle à ajouter dans la hiérarchie des rôles.)*

</TabItem>

</Tabs>

## API DiscordLink

L'API **DiscordLink** permet d'interagir avec les comptes Discord liés aux clients, de vérifier l'authenticité des clés API et de récupérer des informations associées.

### Base URL

```
https://clientxcms.app/api
```

### Endpoints

#### Rechercher un client via son ID Discord

```http
GET /application/discordlink/search/{discord_id}
```

##### Description
Récupère les informations d'un client en fonction de son ID Discord.

##### Paramètres

| Nom          | Type     | Requis | Description                    |
|-------------|---------|--------|--------------------------------|
| `discord_id` | `integer` | ✅      | L'identifiant de l'utilisateur Discord |

##### Réponses

| Code  | Description                            |
|-------|----------------------------------------|
| `200` | Retourne les données du client Discord |
| `403` | Clé API invalide                       |
| `404` | Client non trouvé                      |



#### 📌 Récupérer la liste des clients devant avoir un rôle Discord

```http
GET /application/discordlink/getlinkedcustomers
```

##### Description
Renvoie la liste des clients qui devraient avoir un rôle sur le serveur Discord.

##### Réponses

| Code  | Description                        |
|-------|------------------------------------|
| `200` | Retourne la liste des clients liés |
| `403` | Clé API invalide                   |

---

#### ✅ Vérifier la validité de la clé API

```http
GET /application/discordlink/check
```

##### Description
Vérifie si la clé API est valide et si les clients doivent avoir un rôle Discord.

##### Réponses

| Code  | Description                        |
|-------|------------------------------------|
| `200` | Retourne `ok` si la clé est valide |
| `403` | Clé API invalide                   |

### Sécurité

L'API nécessite une authentification via un **token** API.  
Ajoutez l'en-tête suivant dans vos requêtes :

```http
Authorization: Bearer <votre_token>
```

### Exemples d'utilisation

#### 🔍 Rechercher un client par ID Discord avec `cURL`

```sh
curl -X GET "https://clientxcms.app/api/application/discordlink/search/123456789"
  -H "Authorization: Bearer VOTRE_CLE_API"
```

#### 📌 Récupérer la liste des clients liés avec `cURL`

```sh
curl -X GET "https://clientxcms.app/api/application/discordlink/getlinkedcustomers"
  -H "Authorization: Bearer VOTRE_CLE_API"
```

#### ✅ Vérifier la clé API avec `cURL`

```sh
curl -X GET "https://clientxcms.app/api/application/discordlink/check"
  -H "Authorization: Bearer VOTRE_CLE_API"
```