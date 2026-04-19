---
sidebar_position: 3
translated: true
---
# API
CLIENTXCMS provides a RESTful API that allows developers to create applications that interact with CLIENTXCMS data. This API is based on RESTful standards and uses HTTP status codes to indicate errors. Responses can be returned in JSON or XML format depending on the requested header.

![image](/img/next_gen/developpers/api.png)
## Authentication
To use the API, you must provide an API key in the header of each request.

### Create an API key via the interface
1. Go to **Settings > Security > API Keys**
2. Click **Create**
3. Fill in the following fields:
   - **Name**: A descriptive name to identify the key (e.g., "WHMCS Integration", "Discord Bot")
   - **Expiration** *(optional)*: Expiration date for the key. Leave empty for a key without expiration.
4. Select the permissions:
   - **Administrator**: Grants access to all resources and operations
   - **Custom permissions**: Select only the necessary permissions (Products, Customers, Tickets, Services, etc.)
5. Click **Create**

:::warning
The API key will only be displayed once during creation. Keep it safe!
:::

### Create an API key via command line
You can also create an API key with the following command:

```bash
php artisan clientxcms:create-api-key {name} {email} {--permissions=*}
```

The first argument is the API key name, the second is the administrator account associated with the API key, and the third is the list of permissions.


### Regenerating an API key

You can regenerate an API key in the **Settings > Security > API Keys** interface. Click **Regenerate**.

## Example

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
Feel free to use ?pricing=1 to get product prices in addition to the products.
:::

## Specifications

One resource is available to explore the API:

- **Swagger interface on your instance**: Test the API directly from your client area via the URL `/api/documentation` (example: `https://your-domain.com/api/documentation`).

:::tip
The Swagger interface on your instance allows you to test requests in real-time with your own API key. Don't forget to add "Bearer " before your API key in the "Authorization" field.
:::
