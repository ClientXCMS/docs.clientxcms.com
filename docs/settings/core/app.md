---
sidebar_position: 1
translated: true
---

import ThemedImage from '@theme/ThemedImage';

# Application

The **application** configuration defines the identity and global behavior of your **CLIENTXCMS**. This is where you customize the appearance, set technical parameters, and adapt the interface to your brand image. <br/>
The goal is clear: **create a consistent and professional experience** that reflects your identity while optimizing technical performance.

Each application setting directly influences the user experience, from logo display to technical error handling.

:::tip Tip
A well-configured application inspires trust. Customize every detail so your clients immediately recognize your brand and enjoy a seamless experience.
:::

## Essential Settings

### Application Identity

**Client area name** | (text)<br />
The name that appears in the interface and communications. This name is visible in:
- Browser page titles
- Emails sent to clients
- Administration interface
- Invoices and documents

**Application URL** | (URL)<br />
The complete address of your ClientXCMS installation. Make sure to use:
- HTTPS in production (required for security)
- A stable and professional domain
- A URL without a trailing slash

**Client area logo** | (image)<br />
The main logo displayed in the interface. Recommendations:
- Format: PNG or SVG for transparency
- Dimensions: 200x200px minimum
- Size: Less than 500 KB
- Transparent background preferred

**Client area text logo** | (image)<br />
Horizontal version of the logo with text, used in:
- Main navigation bar
- Emails
- PDF documents

**Client area favicon** | (image)<br />
The icon displayed in the browser tab. Specifications:
- Format: ICO, PNG or SVG
- Dimensions: 32x32px or 64x64px
- Size: Less than 100 KB

### Technical Configuration

**Client area environment** | (dropdown menu)<br />
Determines the operating mode:

| Environment | Usage | Characteristics |
|-------------|-------|-----------------|
| **Production** | Real clients | Cache enabled, errors hidden, optimized performance |
| **Development** | Tests and debug | Cache disabled, detailed errors, debug tools |

**Debug mode** | (checkbox)<br />
Enables detailed error display. Use only in development:
- ✅ **Enabled**: Displays detailed technical errors
- ❌ **Disabled**: Displays generic error messages

**Timezone** | (dropdown menu)<br />
Sets the time reference for:
- Timestamps in logs
- Invoice generation
- Times displayed to clients
- Scheduled tasks (cron)

**Default language** | (dropdown menu)<br />
The language used when no preference is set. Impact:
- Interface for new visitors
- System emails
- Error messages
- Built-in documentation

## Differences Between Logos

### Standard Logo
The square or vertical logo, used as an icon:
- Login page
- Emails (header)
- Enlarged favicon
- Mobile applications

Recommended dimension examples:
- 512x512px for optimal quality
- 256x256px for standard usage
- 128x128px minimum accepted

### Text Logo
[<img src="https://clientxcms.com/assets/images/logo/LogoBlueText.png" width="300" height="100"/>](https://clientxcms.com/assets/images/logo/LogoBlueText.png)
