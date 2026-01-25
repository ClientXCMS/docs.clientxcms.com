---
sidebar_position: 3
translated: true
---
# Cloud

This page will guide you through the installation of ClientXCMS Next Gen for cloud versions on CLIENTXCMS servers. Cloud offerings are automatically installed on CLIENTXCMS servers. This allows you to benefit from an optimized installation and automatic updates. This method is available for all Premium and Enterprise licenses.

## Domain

When ordering your license, you had to provide a domain name. This domain name will be used for the client area installation. If you haven't ordered a license yet, go to [this page](https://clientxcms.com/pricing) to order one.

If you want to install the client area on a subdomain, you can do so by entering the subdomain in the "Change Domain" section of your client area.

## Installation

The first step is to activate the cloud offering from your client area. To do this, go to the "My Services" page and click on the "Cloud" button in the navigation tabs.

![Cloud Activation](/img/next_gen/Installation/Cloud/activation.png)

After this, the system will indicate the server on which your client area will be installed. You simply need to link your domain to CLIENTXCMS servers. To do this, retrieve the CNAME record provided by the system and add it to your domain.

![CNAME Record](/img/next_gen/Installation/Cloud/cname.png)

For more information on adding the CNAME, a dedicated page is available [here](../developpers/software/relier-domain-cname.md).

To verify that your domain is properly linked to CLIENTXCMS servers, you can use the [CheckHost](https://check-host.net) website and enter your domain. It should indicate that the CNAME record is properly linked to the CLIENTXCMS server IP address.

![CheckHost Verification](/img/next_gen/Installation/Cloud/checkhost.png)

Our system will then install the client area on your domain. The process may take a few minutes. Once the installation is complete, you can access your admin area by going to your domain with the credentials sent by email.

![Email Credentials](/img/next_gen/Installation/Cloud/email.png)

Once on your domain, you will be automatically redirected to clientxcms.com to validate your license. You can then log in to your client area with the credentials sent by email.

### Cloudflare

Once you are logged into your Cloudflare account, you need to add a CNAME record for your subdomain.

![Adding a CNAME Record](/img/next_gen/Installation/Cloud/cloudflare.png)

1. Click the "Add a record" button and select "CNAME" from the dropdown menu.

2. Enter the subdomain you specified in the "Change Domain" section of your client area in the "Name" field and the CNAME record provided by the system in the "Target" field.

3. Click "Save" to add the record.

:::info Cloudflare
You must disable the proxy for the subdomain you specified.
:::

### OVH

To add a CNAME record to your OVH domain, follow these steps:

![Adding a CNAME Record](/img/next_gen/Installation/Cloud/ovh.png)

1. Log in to your OVH client area and click on "Domains" in the left menu.
2. Click on the domain you want to modify.
3. Click on the "DNS Zone" tab in the horizontal menu.
4. Click the "Add a record" button and select "CNAME" from the dropdown menu.
5. Enter the subdomain you specified in the "Change Domain" section of your client area in the "Name" field and the CNAME record provided by the system in the "Target" field.
6. Click "Next" to add the record.
7. Click "Confirm" to validate the changes.
8. Wait a few minutes for the changes to take effect.

## Domain Modification

You can change your client area domain at any time from your client area. To do this, go to the "Change Domain" page and enter the new domain you want to use. You will need to add a CNAME record for the new domain beforehand.

![Change Domain](/img/next_gen/Installation/Cloud/change_domain.png)

:::info TIP
Domain modification is possible every 60 days. For subdomain changes, this is not considered a domain change.
:::

## Instance Reinstallation

If you want to reinstall your client area, you can do so from your client area. To do this, go to the "Cloud" page and click on the "Reinstall" button. You will be asked to confirm the reinstallation. Once confirmed, the system will reinstall the client area on your domain.

![Instance Reinstallation Interface](/img/next_gen/Installation/Cloud/reinstall.png)

The login credentials will be sent to you by email once the installation is complete.

:::info TIP
In case of a reinstallation and domain change, you must change the domain before reinstalling the instance.
:::
