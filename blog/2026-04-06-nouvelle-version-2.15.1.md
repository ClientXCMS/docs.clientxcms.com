---
slug: nouvelle-version-2.15.1
title: New Version 2.15.1
authors: [martindev]
translated: true
---
# v2.15.1

We are pleased to announce the release of version **2.15.1** of ClientXCMS!
![version 2.15.1](/img/blog/versions/v2.15.1.png)

<!-- truncate -->

### Additions
- ➕ New events recorded in the action history (new registration, ticket creation, ticket closed, ticket replied, cart completed) for future dashboard widget integration.
- ➕ Added "read_at" field to track email read dates.
- ➕ Added support for the "helpdesk_autoreply" extension for automated responses.
- ➕ Added a dedicated route for administrators to change their password from their profile.
- ➕ Implemented a dedicated page for helpdesk ticket statistics.
- ➕ Added a seeder for missing security questions.

### Changes
- 🔄 Implemented an extensible system for billing type management with a new interface.
- 🔄 Improved product configuration process for better clarity and flexibility.
- 🔄 Simplified proxy IP management via environment variables support.
- 🔄 Overhauled manual email template import: now downloadable from the extensions page with support for configurable dynamic parameters.

### Fixes
- 🔧 Fixed checkbox support in the "repeater" component.
- 🔧 Fixed billing date format (changed from 'd/d' to 'd/m').
- 🔧 Fixed notification sending related to draft status.
- 🔧 Fixed incorrect field in "PurgeBasketCommand".
- 🔧 Fixed error related to missing "attachedUsers".
- 🔧 Fixed incorrect language selection on the /admin/login page.
- 🔧 Fixed main color application on the client interface side.
