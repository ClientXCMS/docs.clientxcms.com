---
slug: nouvelle-version-2.16
title: New Version 2.16
authors: [martindev]
tags: [release, security, privacy, billing, v2.16]
translated: true
---
# v2.16


![ClientXCMS version 2.16](/img/blog/versions/v2.16.png)

<!-- truncate -->

Discover the major new features and screenshots in our [complete overview of ClientXCMS 2.16](/blog/clientxcms-v2-16-security-privacy-billing).

### Additions

- ➕ Added invitations and delegated account access. Invited sub-users can access services and pay invoices according to the permissions granted to them.
- ➕ Added credit notes to record refunds and easily credit a customer's balance.
- ➕ Added profile avatars for clients, administrators, and staff members.
- ➕ Added SMS multi-factor authentication (MFA), with support for Twilio and OVH SMS providers.
- ➕ Added trusted-device management to avoid repeated verification on recognized devices.
- ➕ Added personal-data export and account deletion tools to meet GDPR requirements.
- ➕ Added automatic deletion of inactive accounts after a configurable retention period (three years by default).
- ➕ Added translatable security questions.
- ➕ Added an allowlist of countries displayed during registration, configurable from the language settings.
- ➕ Added date filters for invoices (payment and due dates), clients (registration date), services (creation date), tickets, and other lists.
- ➕ Added service-level agreements (SLA) for support departments, including ticket tracking and notifications for requests requiring attention.
- ➕ Added configurable cancellation behavior for each cancellation reason: immediate cancellation, cancellation at service expiry, or manual processing through a support ticket with a predefined message.
- ➕ Added automatic coupon application from the product configuration URL using the `coupon` query parameter.
- ➕ Added support for assigning products and groups to subdomains.
- ➕ Added product-group badges for clearer storefront navigation.
- ➕ Added service-status polling for deliveries and service changes.
- ➕ Added an extension sandbox loader so a faulty extension cannot crash the entire application.
- ➕ Developed the first version of domain management. It is not officially released yet, as we are looking for providers willing to help test integrations.

### Changes

- 🔄 Completely redesigned the client profile with a clearer tabbed interface.
- 🔄 Redesigned the product-group presentation and added visual badges.
- 🔄 Improved invoice creation, numbering sequence storage, renewals, refunds, and credit-note handling.
- 🔄 Redesigned the 403 and 500 error pages to provide clearer information to end users.
- 🔄 Improved accessibility across the interface, including navigation, readability, and interactions.
- 🔄 Improved the user experience across multiple client and administration screens.
- 🔄 ClientXCMS Cloud customers can now enable full Plesk access from **clientxcms.com > Services > Cloud > Enable Plesk** to manage hosting, files, and databases. Enabling Plesk prevents subsequent extension changes.
- 🔄 Replaced `ideas.clientxcms.com` with [clientxcms.com/ideas](https://clientxcms.com/ideas), powered by the new free [Idea addon available on the marketplace](https://clientxcms.com/resources/idea).

### Fixes

- 🔧 Fixed access-control and input-validation issues in several workflows.
- 🔧 Fixed edge cases affecting billing and service-management workflows.
- 🔧 Fixed several stability issues in the client and administration interfaces.
- 🔧 Prevented duplicate renewal invoices.

### Security

- 🔒 Added the option to enforce two-factor authentication by email for all users.
- 🔒 Added two-factor authentication by email or SMS.
- 🔒 Added trusted devices and controls for sensitive authentication, invitation, and public-endpoint workflows.
- 🔒 Made the same account-security features available to administrators and staff members.
