---
sidebar_position: 9
translated: true
---

# Publishing a Theme

Complete the [common marketplace publication guide](../publish-resource) before following this page. If your theme has not been created yet, start with [Creating a Theme](./create-theme).

## Identifier and Marketplace Information

The marketplace UUID must match both the theme directory and the `uuid` value in `theme.json`:

```text
resources/themes/<uuid>/theme.json
```

Keep this identifier lowercase, URL-safe, and unchanged between releases. Complete the marketplace description with the theme's supported pages, customization options, supported modes, requirements, compatibility, documentation, and support conditions.

Use two complementary images:

- upload a clear marketplace **thumbnail** for the resource card;
- place `screenshot.png` at the root of `resources/themes/<uuid>` for the CLIENTXCMS theme preview.

The images must represent the version being distributed. The **Pricing** field sets the selling price shown for the theme. Paid pricing is available only to **certified developers**: request certification and confirm that you can issue invoices so CLIENTXCMS can pay out your earnings.

## Providing a Demo

A public demo helps customers verify the design, responsive behavior, navigation, store, client area, and available customization before purchasing.

Set a stable HTTPS URL in `theme.json`:

```json
{
  "uuid": "example",
  "name": "Example",
  "version": "1.0.0",
  "demo": "https://demo.example.com"
}
```

The demo should:

- run the submitted theme version on a compatible CLIENTXCMS installation;
- include representative products, pages, menus, and sections;
- work on desktop and mobile without broken links or missing assets;
- expose no administration access, credentials, customer data, or sensitive configuration;
- use test data that can be reset safely;
- remain available while the marketplace resource is active.

Mention any intentionally unavailable feature or restricted demo action in the marketplace description.

## Preparing the GitHub Repository

Use a public repository with the following recommended structure:

```text
theme-example/
├── resources/
│   └── themes/
│       └── example/
│           ├── assets/
│           ├── config/
│           ├── database/
│           ├── lang/
│           ├── views/
│           ├── menus.json
│           ├── screenshot.png
│           └── theme.json
├── screenshots/
├── README.md
├── LICENSE
└── .gitignore
```

The README should document the theme's features, supported CLIENTXCMS versions, requirements, installation, asset compilation, configuration, demo URL, screenshots, support, and license. Keep development screenshots outside the installable theme directory unless they are required at runtime.

:::warning Never publish secrets
Do not commit `.env`, credentials, API keys, customer data, logs, caches, `.git`, `node_modules`, generated development files, or configuration copied from a live installation.
:::

## Publishing a Theme Version

Marketplace versions are created directly from the CLIENTXCMS developer interface. Follow [Creating a Version](../publish-resource#creating-a-version) to select an existing GitHub release or create one dynamically from the changelog.

Before opening the version form:

1. Update the version in `theme.json` and align it with the version entered in CLIENTXCMS, such as `v1.2.0`.
2. Build the production assets and test the theme on a clean compatible installation.
3. Verify the public demo and update it to the submitted version.
4. Push the final source to GitHub and ensure the package preserves `resources/themes/<uuid>`.
5. Exclude `.git`, caches, source-only local dependencies, `.env`, secrets, and installation-specific files.
6. Open the existing theme resource in CLIENTXCMS, add the version, associate or dynamically create its GitHub release, complete the categorized changelog, and publish it.

Never modify an already published version with different files. New code requires a new version created and published from CLIENTXCMS.
