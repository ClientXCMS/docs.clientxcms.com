---
translated: true
---

# SEO Settings

In **CLIENTXCMS**, **Search Engine Optimization (SEO)** is an essential lever to **maximize your platform's visibility** and **attract qualified traffic**. <br/>
The objective is strategic: **improve your ranking in search results**, **increase your organic traffic** and **strengthen your online presence**. Well-configured SEO can multiply your natural visibility by 5 and significantly reduce your customer acquisition costs.

This page allows you to configure all technical and structural elements to optimize your natural search ranking.

You can access SEO settings from:

`Settings` > `Personalization` > `SEO Settings`


## Basic Configuration

### Fundamental Metadata

**Site Title** | (title tag)<br />
The most important element for SEO, displayed in the browser tab and search results.

**Client Area Description** | (meta description)<br />
Summary displayed under the title in search results, crucial for click-through rate.

**Effective Examples**:
```
"Professional web hosting with 99.9% uptime. 24/7 support,
SSD servers and automatic backup. 30-day free trial."
```

```
"Digital agency specializing in website and e-commerce creation.
500+ completed projects, certified team. Free quote within 24 hours."
```

### Strategic Keywords

**Client Area Keywords** | (keywords)<br />
Main terms defining your activity and searched by your audience.

**Selection Strategy**:
- **Relevance**: Directly related to your services
- **Search Volume**: Sufficiently searched
- **Competition**: Accessible based on your authority
- **Intent**: Matching your objectives

**Types of Keywords**:
- **Generic**: "web hosting", "website creation"
- **Long-tail**: "affordable French web hosting"
- **Local**: "web agency Lyon", "hosting Paris"
- **Industry**: "dedicated server", "SSD VPS"

**Examples by Sector**:

#### Web Hosting Provider
```
web hosting, VPS server, dedicated server, domain name,
French hosting, cloud hosting, automatic backup
```

#### Digital Agency
```
website creation, web development, website redesign,
e-commerce, SEO, site maintenance, digital agency
```

#### B2B Service
```
SaaS solution, business software, digitalization, automation,
CRM, management tools, digital transformation
```

## Scripts and Integrations

### Header Scripts

**Header Scripts** | (head tags)<br />
Code inserted before the closing `</head>` tag, essential for initial configurations.

**Common Uses**:
- Additional **meta tags**
- **Site verification** (Google, Bing, Pinterest)
- **Custom fonts** (Google Fonts)
- **Critical scripts** loaded as priority

**Practical Examples**:

**Google Site Verification**:
```html
<meta name="google-site-verification" content="your-verification-code" />
```

**Facebook Open Graph**:
```html
<meta property="og:title" content="Your Title" />
<meta property="og:description" content="Your Description" />
<meta property="og:image" content="your-image-URL" />
```

**Schema.org Organization**:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png"
}
</script>
```

### Footer Scripts

**Footer Scripts** | (before body tag)<br />
Code inserted before the closing body tag, optimal for non-critical scripts.

**Recommended Uses**:
- **Google Analytics** and tracking
- **Hotjar** or heatmaps
- **Chatbots** and support
- Non-critical **third-party scripts**

**Integration Examples**:

**Google Analytics 4**:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Facebook Pixel**:
```html
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## Display Settings

### Primary Color

**Primary Color** | (brand color)<br />
Brand color used for social embeds and integrations.

### Indexing Control

**Disable Search Indexing** | (global noindex)<br />
Option to prevent complete indexing of your platform.

:::warning Warning
Disabling search indexing removes your Google visibility. Only use for non-public sites or sites under development.
:::
