---
slug: nouvelle-version-2.15
title: New Version 2.15
authors: [martindev]
translated: true
---
# v2.15

We are pleased to announce the release of version **2.15** of ClientXCMS!
![version 2.15](/img/blog/versions/v2.15.png)

<!-- truncate -->

### Additions
- ➕ Security questions for users
- ➕ Account deletion
- ➕ Ability to remove the entire store and redirect to another URL
- ➕ Customization of robots.txt
- ➕ Customer API update
- ➕ Application API update
- ➕ Addition of temporary notes
- ➕ Ability to export invoices for a specific customer
- ➕ Addition of the cancellation management page
- ➕ Addition of various payment methods (Binance, SumUp, Mollie)
- ➕ Added support for Open Graph, Twitter cards, and canonical URLs
- ➕ Added a button to regenerate a PDF
- ➕ Support for a new system for section configurations

### Changes
- 🔄 Improved extensions page with the ability to multi-download extensions

### Fixes
- 🔧 `gateways/**` and `source/gateway/**`: added to authorized URLs without being logged in with the forcing option
- 🔧 Fixed API key creation

### Security
- 🔒 Upgrade to Laravel 12
- 🔒 PHP 8.3 minimum required