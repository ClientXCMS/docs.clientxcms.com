---
translated: true
---

# Chorus Pro

The Chorus Pro addon sends invoices intended for French public-sector entities through the PISTE API. It is the public-sector provider used alongside the main Factur-X and e-reporting provider.

:::info Addon required
Enable the Chorus Pro addon before configuring the connector.
:::

## Obtain the PISTE credentials

Chorus Pro uses OAuth 2.0 through PISTE and a Chorus Pro technical account.

1. Create or sign in to your account on the [PISTE portal](https://piste.gouv.fr/).
2. Create an application and subscribe it to the Chorus Pro API, first in the sandbox if you want to test the integration.
3. In the application, generate an API key and copy the **Client ID** and **Client Secret**.
4. In Chorus Pro, declare a PISTE API connection for the relevant structure and application.
5. Create a Chorus Pro technical account attached to that structure. Keep its login and password available in the format requested by ClientXCMS.

Production and qualification are separate environments. Create and approve the appropriate PISTE application and Chorus Pro connection for each environment.

:::warning Secrets
Store the client secret and technical-account credentials securely. Never include them in screenshots, support messages, or version control.
:::

## Configure Chorus Pro

Go to **Settings > Billing > Chorus Pro electronic invoicing** and complete:

- **Environment**: qualification for tests or production for real invoices;
- **PISTE Client ID** and **PISTE Client Secret**;
- **Chorus Pro technical account**;
- **Chorus Pro API URL** and **PISTE OAuth URL**: keep the values matching the selected environment;
- **HTTP timeout**: maximum time allowed for an API request.

Enable Chorus Pro, save, then click **Test connection**.

![Chorus Pro connector settings](/img/next_gen/extensions/addons/chorus-pro/config_addon.png)

## Select the public-sector provider

Go to **Settings > Billing > Billing > Factur-X and e-reporting**:

1. Enable electronic invoicing for new documents when you are ready.
2. Select the main **Active provider** separately: `LOCAL`, `QONTO`, or `PENNYLANE`.
3. Under **Public-sector provider**, select `CHORUS-PRO`. Select `LOCAL` if ClientXCMS must not transmit public-sector invoices through Chorus Pro.
4. Save the billing settings.

![Selecting Chorus Pro as the public-sector provider](/img/next_gen/extensions/addons/chorus-pro/config_driver.png)

:::tip
Validate the complete workflow in qualification before enabling production: authentication, recipient identification, invoice submission, and returned status.
:::
