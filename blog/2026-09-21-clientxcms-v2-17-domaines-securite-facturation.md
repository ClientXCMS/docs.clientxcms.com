---
slug: clientxcms-v2-17-domaines-securite-facturation
title: "ClientXCMS 2.17: Domains, E-Invoicing & Passkeys"
authors: [martindev]
tags: [release, domains, e-invoicing, security, passkeys, v2.17]
translated: true
---
**ClientXCMS 2.17** marks the official launch of domain-name management, introduces electronic-invoicing support for French regulations, and adds passwordless authentication with Passkeys. This release also brings major security hardening across the entire platform.

![Domain search interface showing available extensions and pricing](/img/blog/v2.17/domains3.png)

<!-- truncate -->

## 🌐 Domain Management: Officially Launched with OpenProvider

Domain management, previewed in version 2.16, is now **officially available**. The first supported registrar module is **OpenProvider**, with full automatic configuration.

### Automatic TLD Configuration

Connect an OpenProvider production account or a separate sandbox account, then import your domain catalog in a few clicks. ClientXCMS retrieves registration, renewal, and transfer prices for each TLD. You can apply a fixed selling price or a percentage margin to several selected extensions at once.

![Administration panel showing all imported TLD extensions with OpenProvider pricing and DNS status](/img/blog/v2.17/domains_admin.png)

You can filter and select exactly which extensions to import from a registrar catalog, so your storefront only shows the TLDs you want to sell. Default nameservers and DNS records can be configured once and copied to other extensions. The [OpenProvider configuration guide](/extensions/modules/openprovider) covers credentials, sandbox mode, TLD pricing, and reusable DNS settings.

### Progressive Domain Search

Customers enjoy a fast, progressive search experience. Results appear in real time as each extension is checked, with availability status and pricing displayed instantly. Search results are cached to keep the interface responsive.

### More Registrars Coming Soon

OpenProvider is the first officially supported module. Additional registrar integrations — including **Netim**, **Domain Reseller API**, and **Internet.bs** — are currently in development and will be available in upcoming releases.

## 🧾 Electronic Invoicing & French Compliance

Version 2.17 introduces **electronic-invoicing support** to help businesses comply with French e-invoicing regulations.

### Business Lookup France and EU VAT Check

The new [Business Lookup France addon](/extensions/addons/business-lookup-fr) lets customers search for a company by name, SIREN, or SIRET during checkout. Selecting the correct establishment automatically fills the available legal and tax information.

The [EU VAT Check addon](/extensions/addons/vat-check-eu) complements this lookup by validating European VAT numbers through VIES. Positive checks can be cached for a configurable duration to reduce repeated requests.

### Factur-X and E-reporting Providers

ClientXCMS now generates Factur-X documents and can route electronic invoices through a configurable provider:

- **Local** generates and retains the electronic document in ClientXCMS without external transmission.
- [**Qonto e-invoicing**](/extensions/addons/qonto-einvoicing) sends externally generated and already-numbered invoices through Qonto's regulatory API, once access has been approved by Qonto.
- [**Pennylane**](/extensions/addons/pennylane) imports Factur-X invoices with a Company API token and handles their transmission through Pennylane's approved platform.
- [**Chorus Pro**](/extensions/addons/chorus-pro) is selected separately for invoices intended for French public-sector entities and connects through PISTE.

Seller identity, SIREN/SIRET, VAT number, operation type, VAT regime, tax timezone, activation date, and the main and public-sector providers are managed from the central billing settings.

![Factur-X and e-reporting configuration with active providers](/img/blog/v2.17/e-invoicing-report.png)

### Installment Payments & Precise VAT

Invoices can now be paid in **multiple installments**. Each partial payment atomically debits the customer balance and preserves the exact VAT amount due on every installment, ensuring your accounting stays accurate.

## 🔐 Passwordless Authentication with Passkeys

ClientXCMS 2.17 introduces **WebAuthn / Passkeys** — a complete passwordless authentication system. Customers can register a passkey from their profile and sign in with a single tap using their fingerprint, face recognition, or security key.

![Login page with the ](/img/blog/v2.17/passkeys.png)

Combined with the new **compromised-password detection** (powered by HaveIBeenPwned) and **transparent password-hash migration** across algorithms, authentication in ClientXCMS has never been stronger.

## 🖥️ Redesigned Administration Experience

### Choose Your Layout

Administrators can now switch between a **vertical sidebar** and the classic **horizontal navigation**. The choice is presented on first login and can be changed at any time from the top bar or profile settings.

![Modal for choosing between vertical and horizontal navigation layout](/img/blog/v2.17/toggle_orientation.png)
![New administration layout](/img/blog/v2.17/domains3.png)


## 🔒 Deep Security Hardening

This release includes an extensive security overhaul:

- **Encryption at rest** — TOTP / 2FA secrets and sensitive system settings are now encrypted in the database.
- **Strict API authentication** — The application API now rejects web sessions as proof; API keys respect expiration dates and ability restrictions.
- **Secure email templates** — Blade execution in email templates has been replaced by a closed grammar with automatic migration of existing templates.
- **Extension integrity** — Downloaded extension archives are verified with SHA-256 checksums and signature validation; extraction is confined to the extension's own directory.
- **Dynamic Brand Colors** — The primary theme color can now be modified instantly from the admin panel using dynamic CSS variables, without needing to rebuild Vite.
- **Audit-log filtering** — Ignored attributes are now truly excluded from audit trails, and sensitive tokens are stripped from URLs before being sent to Sentry.
- **Admin vs. Client isolation** — A customer's password confirmation can no longer unlock administrative routes.
- **GDPR improvements** — Personal-data exports are now more complete, and account deletion performs a deeper cleanup of associated resources.

## And Much More

Version 2.17 also brings service lifecycle controls, mass-action components, UI harmonization, button and color-palette consistency, Vite 8 compatibility, and the new [Brevo newsletter addon](/extensions/addons/brevo). Brevo connects the footer subscription form to a selected contact list while supporting API-key and server-IP security.

Read the [complete ClientXCMS 2.17 changelog](/blog/nouvelle-version-2.17) for every technical detail.
