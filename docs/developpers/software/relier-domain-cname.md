---
translated: true
---
# Link Your Domain with a CNAME Record

## What is a CNAME record?
A CNAME (Canonical Name) record is a type of DNS record that allows a subdomain to point to another domain or subdomain. In this example, we will add a CNAME such as `ctx-03.clientxcms.com`. But it's possible to be on another server, in which case you will need to use the provided subdomain.

## OVH

1. Go to [OVH](https://www.ovh.com/) and log in to your account.
2. Click on **Web Cloud** in the main menu, then select **Domains**.
3. Select your domain from the list (for example, `mydomain.com`).
4. Go to the **DNS Zone** tab.
5. Click **Add an entry**.
6. Choose the **CNAME** record type.
7. Fill in the fields as follows:
   - **Subdomain**: Enter the subdomain you want to use, for example `client` or `manager`.
     - Example: for a client using `client.mydomain.com`, enter `client`.
   - **Target**: `ctx-03.clientxcms.com` (this is the URL the subdomain should point to).
8. Click **Next**, then validate.

The CNAME record will take effect after DNS propagation, which can take from a few minutes to 24 hours.

## LWS

1. Go to [LWS](https://www.lws.fr/) and log in to your client area.
2. In your dashboard, go to **DNS Management** under the **My Services** tab.
3. Select the relevant domain (for example, `mydomain.com`).
4. Click **Add a record**.
5. Select **CNAME** from the dropdown list.
6. Fill in the fields as follows:
   - **Name**: Enter your own subdomain, for example `client` or `manager`.
     - Example: for `client.mydomain.com`, enter `client`.
   - **Target**: `ctx-03.clientxcms.com` (this is the URL the subdomain should point to).
7. Click **Validate**.

Once the addition is confirmed, DNS propagation can take up to 24 hours to be fully effective.

## Cloudflare
1. Go to [Cloudflare](https://www.cloudflare.com/) and log in to your account.
2. Select the domain for which you want to add a CNAME in your dashboard.
3. Go to the **DNS** tab.
4. Click **Add a record**.
5. Select **CNAME** from the dropdown menu.
6. Fill in the fields as follows:
   - **Name**: Enter your subdomain, for example `client` or `manager`.
     - Example: for `client.mydomain.com`, enter `client`.
   - **Target**: `ctx-03.clientxcms.com` (this is the URL the subdomain should point to).
   - **Proxy status**: Enable or disable the proxy according to your needs (if enabled, traffic will go through Cloudflare).
7. Click **Save**.

The change will take effect after DNS propagation, which is often fast with Cloudflare but can take up to 24 hours.

## Conclusion
You are now connected to our servers. You can verify using the website [check-host.net](https://www.check-host.net/). Your instance installation will be done a few minutes later.
