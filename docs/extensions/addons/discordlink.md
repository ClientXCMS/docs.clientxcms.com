---
translated: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Discord Synchronization

You can synchronize your client area with your Discord server using a bot.

:::tip
Synchronization works with the SocialAuth+ addon which is required with Discord login to use this feature. You can find the addon documentation [here](./socialauthplus.md).
:::

## Process
1. The customer logs in via Discord or synchronizes their account with the client area
2. The customer can join the Discord server via the client area
3. If the "Synchronized account" option is enabled, the Discord role is added
4. If the "Synchronized customer with an active service" option is enabled, the Discord role is added if the customer has an active service
5. If the "Synchronized customer who has had an active service" option is enabled, the Discord role is added if the customer has ever had an active service

## Configuration

Once the extension is activated, you can access the addon configuration in `Admin Panel` > `Settings` > `Extension Settings` > `DiscordLink`

![img](/img/next_gen/extensions/addons/discordlink/config.png)

Here you will find on this page the customers detected by the system as well as the addon settings.

**Invitation link**: Invitation link to your Discord server. (to invite customers to join it from the client area)

**Server ID**: ID of your Discord server.

**Detection type**: Type of customer detection. (Synchronized account, Synchronized customer with an active service, Synchronized customer who has had an active service)

You can also reset the key if you have lost it.

:::warning
If your domain is protected by anti-DDoS or a firewall, make sure to disable these protections on the routes specified in the API to avoid any service interruption.
:::
### Bot Installation


<Tabs>

<TabItem value="community" label="Community Bot Installation">

Interval: 15 seconds
#### Step 1
Add the bot to your Discord server by clicking [this invitation link](https://clientxcms.com/ref/discordbot).
It will link your Discord server with your hosting service.

#### Step 2
Copy the following command to your server. **⚠ Warning, the key will only be displayed once!**
If lost, it will need to be reset.


#### Step 3
Execute the following command on your Discord server while adding the customer role.
If the operation succeeds, the bot will reply with a success message.

#### Step 4
Make sure the bot has the necessary permissions to add the role.
*(The bot must be above the role to add in the role hierarchy.)*

</TabItem>
<TabItem value="personnalise" label="Custom Bot Installation">

Interval: Customizable

#### Step 1
Download the custom bot purchased beforehand by clicking [this link](https://clientxcms.com/client/download).
It will link your Discord server with your hosting service.


#### Step 2
Copy the following token to a safe place. **⚠ Warning, it will only be displayed once!**
If lost, it will need to be reset.


#### Step 3
Extract the downloaded file and follow the `README` file to install and add the bot to your server.


#### Step 4
Make sure the bot has the necessary permissions to add the role.
*(The bot must be above the role to add in the role hierarchy.)*

</TabItem>

</Tabs>

## DiscordLink API

The **DiscordLink** API allows interacting with Discord accounts linked to customers, verifying API key authenticity, and retrieving associated information.

### Base URL

```
https://clientxcms.app/api
```

### Endpoints

#### Search for a customer via their Discord ID

```http
GET /application/discordlink/search/{discord_id}
```

##### Description
Retrieves customer information based on their Discord ID.

##### Parameters

| Name         | Type      | Required | Description                        |
|-------------|---------|--------|--------------------------------|
| `discord_id` | `integer` | ✅      | The Discord user identifier |

##### Responses

| Code  | Description                            |
|-------|----------------------------------------|
| `200` | Returns Discord customer data |
| `403` | Invalid API key                       |
| `404` | Customer not found                      |



#### 📌 Get the list of customers who should have a Discord role

```http
GET /application/discordlink/getlinkedcustomers
```

##### Description
Returns the list of customers who should have a role on the Discord server.

##### Responses

| Code  | Description                        |
|-------|------------------------------------|
| `200` | Returns the list of linked customers |
| `403` | Invalid API key                   |

---

#### ✅ Verify API key validity

```http
GET /application/discordlink/check
```

##### Description
Checks if the API key is valid and if customers should have a Discord role.

##### Responses

| Code  | Description                        |
|-------|------------------------------------|
| `200` | Returns `ok` if the key is valid |
| `403` | Invalid API key                   |

### Security

The API requires authentication via an API **token**.
Add the following header to your requests:

```http
Authorization: Bearer <your_token>
```

### Usage Examples

#### 🔍 Search for a customer by Discord ID with `cURL`

```sh
curl -X GET "https://clientxcms.app/api/application/discordlink/search/123456789"
  -H "Authorization: Bearer YOUR_API_KEY"
```

#### 📌 Get the list of linked customers with `cURL`

```sh
curl -X GET "https://clientxcms.app/api/application/discordlink/getlinkedcustomers"
  -H "Authorization: Bearer YOUR_API_KEY"
```

#### ✅ Verify API key with `cURL`

```sh
curl -X GET "https://clientxcms.app/api/application/discordlink/check"
  -H "Authorization: Bearer YOUR_API_KEY"
```
