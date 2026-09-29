---
slug: nouvelle-version-2.17
title: New Version 2.17
authors: [martindev]
tags: [release, domains, e-invoicing, security, passkeys, v2.17]
translated: true
---
# v2.17

We are pleased to announce the release of version **2.17** of ClientXCMS!
![version 2.17](/img/blog/versions/v2.17.png)

<!-- truncate -->

Discover the major new features and screenshots in our [complete overview of ClientXCMS 2.17](/blog/clientxcms-v2-17-domaines-securite-facturation).

### Additions
- ➕ Added systematic logging and health monitoring for scheduled tasks (Cron Scheduler) with execution duration, error capture, and a dashboard indicator.
- ➕ Added real-time queue and worker monitoring (Worker Heartbeat) with alerts and a dedicated interface in the administration security settings.
- ➕ Added a modal component for rich, multilingual editing of product descriptions with live preview in the administration catalog.
- ➕ Added the ability to cancel pending service deliveries directly from the administration list.
- ➕ Added dynamic CSS variables for the theme's primary color, allowing instant brand palette modification from the admin panel.
- ➕ Added an automated i18n pipeline with French as the source of truth, DeepL/Azure synchronization, and reliable release builds.
- ➕ Added support for JPG/JPEG assets in Vite bundling rules.

- ➕ Officially launched **domain-name management** with progressive search, real-time availability checking, and cached results.
- ➕ Added the [**OpenProvider** registrar module](/extensions/modules/openprovider) with production and sandbox support, automatic TLD import, fixed or percentage-based bulk pricing, and reusable nameserver/DNS configuration.
- ➕ Added filtering and selection when importing registrar catalogs.
- ➕ Added default nameserver IP management for TLDs and improved DNS editing.
- ➕ Added **passwordless authentication with Passkeys / WebAuthn**.
- ➕ Added **Factur-X and e-reporting** with a local provider, external integrations for [Qonto](/extensions/addons/qonto-einvoicing) and [Pennylane](/extensions/addons/pennylane), and externalized **Chorus Pro** into a dedicated addon. Includes accounting invoice exports and standardized billing country selection.
- ➕ Added [**Business Lookup France**](/extensions/addons/business-lookup-fr) to auto-fill company information from a name, SIREN, or SIRET search.
- ➕ Added [**EU VAT Check**](/extensions/addons/vat-check-eu) to validate European VAT numbers through VIES with configurable caching.
- ➕ Added seller tax identity, VAT regime, tax timezone, activation date, active provider, and public-sector provider settings.
- ➕ Added an electronic-transmission history to follow documents and provider statuses.
- ➕ Added **invoice installment payments** with atomic customer-balance debit and precise VAT preservation on each installment.
- ➕ Added a **global configurable password policy**: centralized configuration for minimum length, casing, numbers, symbols, and compromised password detection (Pwned), enforced across the platform with a frontend strength indicator.
- ➕ Added a **closed-grammar email-template engine** replacing arbitrary Blade execution, with automatic migration of existing templates and strict content sanitization.
- ➕ Added **extension integrity verification**: SHA-256 checksum and signature validation on downloaded archives, with extraction confined to the extension's own directory.
- ➕ Added **layout toggle** for the administration panel: choice between vertical sidebar and horizontal navigation.
- ➕ Added mass-action components (header, modal, selection) and harmonized Bootstrap Icons on service cards.
- ➕ Added configurable **service lifecycle controls** (enable or disable automatic suspension, termination, and renewal per service).
- ➕ Added the [**Brevo newsletter addon**](/extensions/addons/brevo).

### Changes
- 🔄 Standardized console command exit codes (0 for success, 1 for failure).
- 🔄 Uniformized administration route names and view folders to strictly use kebab-case.
- 🔄 Enhanced the `ThemeManager` with improved theme metadata handling and reorganized the `ThemeSeeder`.
- 🔄 Enhanced the Extension Updater: automatic cleanup of obsolete files, exact local version resolution, and auto-registration of unlisted extensions.
- 🔄 Improved theme-section editing: repaired page sections accordion, added a sticky action bar, and ensured ARIA/contrast compliance.
- 🔄 Refactored Dark Mode toggle: moved the `dark` class to the `<html>` tag and fixed toggle-icon synchronization.

- 🔄 Redesigned the **mobile navigation** as a side panel with 44 px touch targets, focus-trap fix for Preline, `aria-expanded` attributes, and WCAG AA–compliant contrast.
- 🔄 Harmonized all buttons via `btn.css` with `@layer components`, corrected contrasts on both themes, and aligned the primary color with the theme palette.
- 🔄 Improved **GDPR compliance**: personal-data exports are now more complete, and account deletion performs a deeper cleanup of associated resources while preserving the audit trail.
- 🔄 Improved **audit-log filtering**: ignored attributes are now truly excluded, and sensitive tokens are stripped from URLs before transmission to Sentry.
- 🔄 Improved **email security**: server credentials and passwords are excluded from archived email history and exposed variables; custom-email archiving is more reliable.
- 🔄 Improved domain-product pricing validation and TLD association checks.
- 🔄 Improved coupon usage-limit calculation per customer, global counter integrity on rejection, and strict validation of configurable option values.
- 🔄 Translation downloads now use raw hosting to avoid GitHub API rate limits; French reference files are tracked with the code and `lang/` backups are secured.
- 🔄 Theme migrations now execute from their real directory; obsolete unreferenced methods have been removed.
- 🔄 Updated dependencies: Vite 8.2.2, Browserslist 4.28.9, Maatwebsite Excel 3.1.70, Tiptap Core & Starter-Kit.
- 🔄 Vite 8 now preserves symlinks when building theme and addon assets.

### Fixes
- 🔧 Fixed coupon abuse through concurrency protection: pending orders now temporarily reserve coupon quotas to prevent race conditions during simultaneous checkouts.
- 🔧 Fixed the additional pricing toggle (accordion) in the administration which could not be closed after opening.
- 🔧 Fixed the error handler to prevent form validation errors from being transformed into 500 error pages in production.
- 🔧 Fixed the reset of the delivery state when renewing services, and corrected the exact calculation of domain renewal prices.

- 🔧 Fixed the server connectivity test in provisioning and secured stored connection credentials from leaking in the interface.
- 🔧 Fixed the customer factory to generate valid phone numbers (stabilizing `SmsServiceTest`) and maintained `install.php` tracking in git.

### Security
- 🔒 **Secured server credentials**: Passwords are no longer exposed in the admin HTML DOM, and re-entry is required when modifying the host or IP.
- 🔒 **Secured payment webhooks & closed invoice immutability**: Strict validation of paid amount, currency, and status in Stripe/Mollie/PayPal IPN, and blocking the reopening of closed invoices.
- 🔒 **Hardened Client API**: Restricted access to active Sanctum client tokens, enforced 2FA, implemented anti-timing attack hashes, masked sensitive metadata, and bounded pagination.

- 🔒 **Encrypted sensitive data at rest**: TOTP / 2FA secrets and system settings marked as encrypted are now actually encrypted in the database.
- 🔒 **Strict API authentication**: the application API now rejects web sessions as proof; API-key abilities are filtered and expiration is enforced.
- 🔒 **Admin vs. Client guard isolation**: a customer password confirmation can no longer unlock administrative routes.
- 🔒 **Transparent password-hash migration**: passwords are verified against their existing hash algorithm; bcrypt is no longer forced; supported hash drivers are displayed dynamically based on the PHP environment.
- 🔒 **Secure email-template engine**: arbitrary Blade execution replaced by a closed grammar with automatic migration and strict sanitization.
- 🔒 **Extension updater hardening**: archive extraction is confined, downloads are verified with SHA-256 checksums, and external files are reported and excluded.
- 🔒 **Sentry token scrubbing**: sensitive tokens are automatically removed from URLs before error reporting.
