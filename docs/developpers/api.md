---
sidebar_position: 3
---
# API
CLIENTXCMS met à disposition une API RESTful pour permettre aux développeurs de créer des applications qui interagissent avec les données de CLIENTXCMS. Cette API est basée sur les standards RESTful et utilise des codes d'état HTTP pour indiquer les erreurs. Les réponses peuvent être retournées en JSON ou en XML selon l'entête demandé.

![image](/img/next_gen/developpers/api.png)
## Authentification
Pour utiliser l'API, vous devez fournir une clé d'API dans l'en-tête de chaque requête. Vous pouvez obtenir une clé d'API avec la commande suivante :

```bash
php artisan clientxcms:create-api-key {name} {email} {--permissions=*}
```

Le premier argument est le nom de la clé d'API, le second est le compte administrateur associé à la clé d'API, et le troisième est la liste des permissions de la clé d'API.


## Exemple

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
## Permissions
Les permissions suivantes sont disponibles pour les clés d'API :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

  <TabItem value="General" label="Général">
    - `*` : Toutes les permissions  
    - `health` : Vérifier l'état de santé de l'API  
    - `statitics` : Obtenir les statistiques de l'API  
    - `license` : Obtenir les informations de la licence  
  </TabItem>
  <TabItem value="Clients" label="Clients">
    - `customers:index` : Lire les clients  
    - `customers:create` : Créer un client  
    - `customers:update` : Mettre à jour un client  
    - `customers:delete` : Supprimer un client  
  </TabItem>
  <TabItem value="Products" label="Produits">
    - `products:index` : Lire les produits  
    - `products:create` : Créer un produit  
    - `products:update` : Mettre à jour un produit  
    - `products:delete` : Supprimer un produit  
  </TabItem>
  <TabItem value="ProductGroups" label="Groupes de Produits">
    - `groups:index` : Lire les groupes de produits  
    - `groups:create` : Créer un groupe de produits  
    - `groups:update` : Mettre à jour un groupe de produits  
    - `groups:delete` : Supprimer un groupe de produits  
  </TabItem>
  <TabItem value="Pricing" label="Prix">
    - `pricings:index` : Lire les prix  
    - `pricings:create` : Créer un prix  
    - `pricings:update` : Mettre à jour un prix  
    - `pricings:delete` : Supprimer un prix  
  </TabItem>
  <TabItem value="Services" label="Services">
    - `services:index` : Lire les services  
    - `services:update` : Mettre à jour un service  
    - `services:delete` : Supprimer un service  
    - `services:expire` : Expirer un service  
    - `services:unsuspend` : Renouveler un service  
    - `services:suspend` : Suspendre un service  
  </TabItem>
</Tabs>

Nous sommes en train de travailler sur de nouvelles permissions pour les clés d'API afin de rajouter plus de flexibilité et l'accès à plus de ressources. Une mise à jour est prévue pour améliorer l'API.

## Spécifications
Vous pouvez consulter la documentation de l'API pour obtenir des informations sur les différentes ressources et les opérations disponibles. Vous pouvez également tester l'API en utilisant l'interface Swagger fournie sur l'URL `/api/documentation` sur votre espace client.