---
slug: nouvelle-version-2.14.0
title: New version v2.14.0
authors: [martindev]
tags: [version, release, clientxcms]
translated: true
---
# v2.14.0 - Improvements & Options Update**

We are pleased to announce the release of version **v2.14.0** of ClientXCMS, which brings numerous improvements and new features to enhance your user experience.
![version v2.14.0](/img/blog/versions/v2.14.0.png)

<!-- truncate -->

- ➕ Button to notify the client about a new invoice issuance.
- ➕ Ability to import a Plesk hosting or reseller accounts.
- ➕ Custom email template system.
- ➕ Bulk email sending / custom emails to a group of clients.
- ➕ Ability to send an email to a client.
- ➕ Soft delete of Laravel models.
- ➕ Ability to charge an invoice to a payment source added by the client.
- ➕ [SocialAuth] Sign-up/login button via providers on the checkout page.
- ➕ Custom options for services.
- ➕ Add an option to a specific service.
- ➕ Add a service location option when ordering.
- ➕ Service improvements.
- ➕ [DiscordLink] Choice of client detection type (active clients, clients, or simple synced accounts).
- ➕ "clientxcms:create-api-keys" command to generate API keys.
- ➕ Edit invoice due date and payment date via administration.
- ➕ Added "subject", "content", "priority", and "related_id" parameters in the URL to pre-fill ticket fields.
- ➕ Invoice PDF attachment when sending an invoice by email.
- ➕ New actionLogs: 2FA disable/enable, password reset, account verified.
- ➕ Added "coupon" parameter in the cart URL to automatically add a promo code.
- ➕ Added "allow_only_as_much_services" metadata replacing the "disabled_many_services" metadata.
- ➕ [Proxmox] IPAM supports a dedicated node for addresses.
- ➕ Added "billing" parameter in the URL to pre-select a billing cycle.
- ❌ Changed "service:delivery" command to "invoice:delete".
- 🔄 Simplified "clientxcms:update-admin" command.
- 🔄 PDF invoices download directly.
- 🔄 Modified 500 / 404 error pages with a custom page for administration.
- 🔄 Send webhook notification when support replies to a ticket.
- 🔄 [PayPal Express Checkout] Changed external IDs to transaction ID.
- 🔄 [Stripe] Changed external IDs to payment ID.
- 🔄 Modified extensions page.
- 🔄 Modified registration page (changed email and phone fields).
- 🔧 [SocialAuth] Check for existing client account with the same email before creation.
- 📦 Modified service page.
- 📦 Improved earnings page.
- 🔒 Added ability to disable 2FA (two-factor authentication) via administration on an account.
