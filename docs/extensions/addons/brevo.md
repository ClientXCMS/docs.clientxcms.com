---
translated: true
---

# Brevo

The Brevo addon connects ClientXCMS to Brevo so visitors can subscribe to your newsletter from the site footer.

:::info Addon required
Enable the Brevo addon in ClientXCMS before configuring it.
:::

## Create a Brevo API key

1. Sign in to your Brevo account.
2. Open the account menu, then go to **Settings > SMTP & API > API Keys & MCP**.
3. Open the **API Keys** tab and click **Generate a new API key**.
4. Give it a recognizable name, such as `ClientXCMS`, and generate it.
5. Copy the key immediately and store it securely. Brevo only displays the full value once.

![Creating an API key in Brevo](/img/next_gen/extensions/addons/brevo/create_api_key.png)

:::warning Protect the key
The API key grants access to your Brevo account. Never publish it or include it in screenshots. If it is lost or exposed, delete it in Brevo and create a new one.
:::

## Authorize your server IP address

You must authorize the public outbound IP address of the server hosting ClientXCMS before using the API.

1. In Brevo, open **Settings > Security > Authorized IPs**.
2. Click **Authorize IP addresses**.
3. Add the public IP address used by your ClientXCMS server for outgoing requests.
4. Confirm the authorization.

If your infrastructure uses several outbound IP addresses, authorize all of them. Enabling the blocking of unknown IP addresses rejects every API request coming from an address that is not on this list.

## Configure ClientXCMS

1. In the ClientXCMS administration area, go to **Settings > Extension settings > Brevo**.
2. Paste the Brevo API key.
3. Select the Brevo contact list that should receive newsletter subscriptions.
4. Enable the integration and save the settings.

![Brevo settings in ClientXCMS](/img/next_gen/extensions/addons/brevo/config_ctx.png)

Once the connection is valid, ClientXCMS displays the configured integration and its selected list.

![Completed Brevo configuration](/img/next_gen/extensions/addons/brevo/config_ctx_done.png)

The newsletter form can then be displayed in the site footer. Submit a test address and confirm that the contact appears in the selected Brevo list.

![Newsletter subscription form in the footer](/img/next_gen/extensions/addons/brevo/embed_footer.png)
