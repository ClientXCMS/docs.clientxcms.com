---
sidebar_position: 3
---
# API
CLIENTXCMS met à disposition une API RESTful pour permettre aux développeurs de créer des applications qui interagissent avec les données de CLIENTXCMS. Cette API est basée sur les standards RESTful et utilise des codes d'état HTTP pour indiquer les erreurs. Les réponses peuvent être retournées en JSON ou en XML selon l'entête demandé.

L'API est auto-documentée via une interface Swagger (OpenAPI 3.0) générée, accessible sur `/api/documentation` de votre instance. Elle liste chaque endpoint groupé par tag - **Client API**, **Products**, **Groups**, **Core**, **Services**, **Customers**, plus un tag par extension installée qui expose des routes API (ex. **Discordlink**, **Purchase Alert**) - et un bouton **Authorize** pour attacher votre token Bearer et tester les requêtes directement depuis le navigateur.

## Authentification
Pour utiliser l'API, vous devez fournir une clé d'API dans l'en-tête de chaque requête.

### Créer une clé d'API via l'interface
1. Rendez-vous dans **Paramètres > Sécurité > API Keys**
2. Cliquez sur **Créer**
3. Renseignez les champs suivants :
   - **Nom** : Un nom descriptif pour identifier la clé (ex: "Integration WHMCS", "Bot Discord")
   - **Expiration** *(facultatif)* : Date d'expiration de la clé. Laissez vide pour une clé sans expiration.
4. Sélectionnez les permissions :
   - **Administrateur** : Donne accès à toutes les ressources et opérations
   - **Permissions personnalisées** : Sélectionnez uniquement les permissions nécessaires (Produits, Clients, Tickets, Services, etc.)
5. Cliquez sur **Créer**

:::warning
La clé d'API ne sera affichée qu'une seule fois lors de sa création. Conservez-la précieusement !
:::

### Créer une clé d'API via la ligne de commande
Vous pouvez également créer une clé d'API avec la commande suivante :

```bash
php artisan clientxcms:create-api-key {name} {email} {--permissions=*}
```

Le premier argument est le nom de la clé d'API, le second est le compte administrateur associé à la clé d'API, et le troisième est la liste des permissions.


### Régénération d'une clé d'API

Vous pouvez régénérer une clé d'API dans l'interface **Paramètres > Sécurité > API Keys**. Cliquez sur **Regénérer**.

## Appeler l'API

### PHP
```php
<?php
$client = new GuzzleHttp\Client();
$response = $client->request('GET', 'https://clientxcms.app/api/application/products', [
    'headers' => [
        'Authorization' => 'Bearer YOUR TOKEN HERE',
        'Accept' => 'application/json'
    ]
]);
$json = json_decode($response->getBody()->getContents());
```
### Node.js
```javascript
const axios = require('axios');
axios.get('https://clientxcms.app/api/application/products', {
    headers: {
        'Authorization': 'Bearer YOUR TOKEN HERE',
        'Accept': 'application/json'
    }
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(error);
});
```
:::info
N'hésitez pas à utiliser ?pricing=1 pour obtenir les prix des produits en plus des produits.
:::

## Spécifications

Une ressource est disponible pour explorer l'API :

- **Interface Swagger sur votre instance** : Testez l'API directement depuis votre espace client via l'URL `/api/documentation` (exemple : `https://votre-domaine.com/api/documentation`).

:::tip
L'interface Swagger sur votre instance vous permet de tester les requêtes en temps réel avec votre propre clé d'API. N'oubliez pas d'indiquer "Bearer " avant votre clé d'API dans le champ "Authorization".
:::