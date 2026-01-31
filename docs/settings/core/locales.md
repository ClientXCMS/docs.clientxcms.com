---
sidebar_position: 3
translated: true
---

# Languages

In **CLIENTXCMS**, **language** management allows you to **internationalize your platform** and **reach a global customer base**. <br/>
The goal is simple: **offer a native experience to each user** in their preferred language and **expand your potential market**. A multilingual platform improves accessibility, strengthens international client trust, and increases your business opportunities.

The language system supports the complete interface, automated emails, and even your custom content.

You can manage languages from:

`Settings` > `General Settings` > `Languages`

![Access to language configuration](/img/next_gen/settings/core/locales/image.png)

:::tip Tip
A platform available in your clients' native language **significantly increases** conversion rates.
It's a minimal investment for maximum commercial impact.
:::

## Why Offer Multiple Languages?

Multilingualism is essential for:

* **Expanding your market** internationally without language barriers
* **Improving customer experience** by offering a native interface
* **Increasing trust** among non-French-speaking users
* **Optimizing your SEO** in different countries

:::tip Tip
It's like having multiple storefronts in different countries 🌍 — each customer feels at home, regardless of their native language.
:::

## Available Languages

CLIENTXCMS currently offers the following languages:

| Language | Code | Status |
|----------|------|--------|
| 🇫🇷 **French** | `fr` | Default language |
| 🇬🇧 **English** | `en` | Available |
| 🇪🇸 **Spanish** | `es` | Available |
| 🇩🇪 **German** | `de` | Available |
| 🇮🇹 **Italian** | `it` | Available |

:::info Note
Additional languages can be added upon community request. Translations are regularly maintained and improved.
:::

## Language Management

### Download a Language

To add a new language to your platform:

1. Access the language management page
2. Locate the desired language in the list
3. Click the **"Download"** button
4. The language will be automatically installed and activated

:::tip Tip
Installation is instant and requires no restart. Your users can immediately change languages.
:::

### Update Translations

Language files are regularly improved to:
- Correct any translation errors
- Add translations for new features
- Improve linguistic quality

To update a language:

1. The **"Update"** button appears for each installed language
2. Click on it to download the latest version
3. Translations are updated instantly

:::info Important
The "Update" button always remains visible, even if you have the latest version. This allows you to **reinstall** the language in case of problems or accidental customization.
:::

## Default Language Configuration

### Set the Primary Language

The default language is displayed to:
- New visitors
- When the browser language is not available
- In system communications

To modify it:
1. Go to `Settings` > `General Settings`
2. Select the new default language
3. Save the changes

### Automatic Behavior

CLIENTXCMS automatically detects:
- The visitor's browser language
- The saved preference of the logged-in user
- The default language if no match

## Impact on Your Platform

### Translated Elements

When a language is activated, the following elements are translated:

- ✅ **User interface**: All menus, buttons, and messages
- ✅ **Automated emails**: Notifications, invoices, confirmations
- ✅ **System messages**: Errors, confirmations, alerts
- ✅ **Static content**: Legal pages, terms and conditions
- ✅ **Theme configuration**: Translatable fields defined by the theme (titles, descriptions, text content) — if the active theme supports [database settings](/developpers/themes/db-settings)

### Elements Requiring Manual Translation

Some content requires manual translation:

- 📝 **Product descriptions**: Via the product management interface
- 📝 **Custom pages**: Specifically created content
- 📝 **Announcements and news**: Marketing communications
- 📝 **SEO metadata**: Titles and descriptions for search engines

## Translation Customization

### Modify Existing Translations

If you want to adapt certain translations:

1. Language files are stored in `/resources/lang/`
2. Each language has its own folder (e.g., `fr/`, `en/`)
3. Modify PHP files with caution
4. Test your modifications in a development environment

:::warning Warning
Manual modifications will be **overwritten** during updates. Document your changes so you can reapply them.
:::

### Add Custom Translations

For your specific content:

```php
// In your views or controllers
__('custom.my_translation_key')

// In the language file
'my_translation_key' => 'My custom translation',
```

## Best Practices

### For User Experience

1. **Visible selector**: Place the language selector in the header
2. **Clear flags**: Use recognizable icons
3. **Memorization**: Preferences should be saved
4. **Consistency**: Translate EVERYTHING or nothing

### For SEO

1. **Localized URLs**: Use subdomains or directories
2. **Hreflang tags**: Indicate language alternatives
3. **Unique content**: Avoid poor-quality automatic translations
4. **Multilingual sitemap**: Include all versions

### For Maintenance

1. **Documentation**: Note your customizations
2. **Regular testing**: Check after each update
3. **User feedback**: Collect quality feedback
4. **Monitoring**: Watch for new available languages

## Advanced Use Cases

### Conditional Activation

You can activate languages according to your needs:

- **Testing phase**: Start with 2-3 main languages
- **Gradual expansion**: Add languages based on demand
- **Targeted markets**: Only activate relevant languages

### Integration with Modules

Some modules support multilingualism:
- Automatic product translation
- Multilingual invoice generation
- Customer support in multiple languages

:::tip Remember
Multilingualism is a **major competitive advantage**. Each language added opens your business to millions of new potential customers. The implementation effort is minimal compared to the growth potential.
:::
