---
translated: true
sidebar_position: 5
---
# Link Your Domain with an A Record


When you own a domain name, it's essential to link it to a host to make your CLIENTXCMS accessible online. In this article, we will guide you through the process of linking a domain with an A record (IP address) using OVH, LWS, and Cloudflare services.

## 1. OVH

1. Log in to your OVH account and access the "Domains" section.
2. Select the domain you want to link and click on "DNS Zone".
3. Add a new "A" type record.
4. In the "Name" field, enter "@" to represent your main domain.
5. In the "Target" field, enter your OVH hosting IP address.
6. Save the changes and wait for DNS propagation, which can take up to 24 hours.

Once DNS propagation is complete, your domain will be linked to your OVH hosting.

## 2. LWS

1. Log in to your LWS account and access your control panel.
2. Look for the "Domain Management" or "Domains" option.
3. Select the domain you want to link.
4. Access the "DNS Management" or "DNS Zone" section.
5. Add a new "A" type record.
6. In the "Name" field, enter "@" or leave it empty to represent your main domain.
7. In the "IP Address" field, enter your LWS hosting IP address.
8. Save the changes and wait for DNS propagation.

After DNS propagation, your domain will be linked to your LWS hosting.

## 3. Cloudflare


1. Create an account on Cloudflare and add your domain to your dashboard.
2. Cloudflare will provide you with two name servers to use for your domain.
3. Access your domain registrar (OVH or LWS) and update the name servers for your domain with the name servers provided by Cloudflare.
4. Once the name servers are updated, return to your Cloudflare dashboard.
5. In the "DNS" section, add a new "A" type record.
6. In the "Name" field, enter "@" to represent your main domain.
7. In the "IP Address" field, enter your hosting IP address.
8. Save the changes.

After DNS propagation, your domain will be linked to Cloudflare, which will act as a proxy between your visitors
