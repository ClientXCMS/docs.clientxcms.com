---
translated: true
---
import ThemedImage from '@theme/ThemedImage';

# Settings

The ClientXCMS settings panel allows you to configure all aspects of your platform. Settings are organized into 9 main categories for optimal management of your client area.

## Detailed Configuration by Category

Access the different configuration sections directly:

<style>
{`
.settings-card {
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 8px;
  padding: 1rem;
  background: var(--ifm-card-background-color);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  color: inherit;
  display: block;
}

.settings-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-color: var(--ifm-color-primary);
  text-decoration: none;
  color: inherit;
}

.settings-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.settings-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--ifm-color-emphasis-700);
}
`}
</style>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '2rem'}}>

<a href="#general-settings" className="settings-card">
  <h3>🏢 General Settings</h3>
  <p>Basic configuration (name, logo, email, maintenance, languages, license)</p>
</a>

<a href="#provisioning" className="settings-card">
  <h3>⚙️ Provisioning</h3>
  <p>Service and server management</p>
</a>

<a href="#store-settings" className="settings-card">
  <h3>🛒 Store Settings</h3>
  <p>Products, payments, coupons, invoicing</p>
</a>

<a href="#extension-settings" className="settings-card">
  <h3>🧩 Extension Settings</h3>
  <p>Installed modules and addons</p>
</a>

<a href="#proxmox" className="settings-card">
  <h3>🖥️ Proxmox</h3>
  <p>IPAM, KVM templates, LXC systems</p>
</a>

<a href="#security" className="settings-card">
  <h3>🔒 Security</h3>
  <p>Staff, API, database, logs</p>
</a>

<a href="#billing" className="settings-card">
  <h3>💰 Billing</h3>
  <p>Subscriptions, invoices, transfers</p>
</a>

<a href="#help-center" className="settings-card">
  <h3>🎧 Help Center</h3>
  <p>Helpdesk and customer support</p>
</a>

<a href="#customization" className="settings-card">
  <h3>🎨 Customization</h3>
  <p>Interface, theme, SEO, menus</p>
</a>

</div>


## Category Overview

### General Settings
**General CLIENTXCMS settings (name, address, logo, favicon, email)**

<ThemedImage
  alt="General Settings"
  sources={{
    light: '/img/next_gen/settings/settings_0.png',
    dark: '/img/next_gen/settings/settings_0_dark.png'
  }}
/>

Basic configuration of your platform including visual identity, communication settings, language management, and license validation. These elements form the foundation of your client area.

**Available Configuration:**
* **[Global Settings](./core/app)**: Name, address, logo, favicon of the client area
* **[Email Settings](./core/mail)**: Email notifications and SMTP server
* **[Maintenance Mode](./core/maintenance)**: Temporary enable/disable of client access
* **[Languages](./core/locales)**: Management of available languages
* **[License](./core/license)**: Validation of your ClientXCMS license

**[→ Configure General Settings](./core)**

### Provisioning
**Manage service provisioning for clients**

<ThemedImage
  alt="Provisioning"
  sources={{
    light: '/img/next_gen/settings/settings_1.png',
    dark: '/img/next_gen/settings/settings_1_dark.png'
  }}
/>

Complete management of your service infrastructure. This section centralizes server configuration, service options, and automatic provisioning settings for your clients.

**Available Configuration:**
* **[Service Settings](./provisioning/services)**: Service options configuration
* **[Servers](./provisioning/servers)**: List and status of configured servers
* **Subdomains**: Management of authorized subdomains
* **[Configuration Options](./provisioning/provisioning.md)**: Service customization
* **[Configuration](./provisioning/provisioning.md)**: General provisioning options

**[→ Configure Provisioning](./provisioning)**

### Store Settings
**Store settings (PayPal, VAT, etc.)**

<ThemedImage
  alt="Store Settings"
  sources={{
    light: '/img/next_gen/settings/settings_2.png',
    dark: '/img/next_gen/settings/settings_2_dark.png'
  }}
/>

Complete configuration of your online store. Manage your products, payment methods, promotions, and all commercial aspects of your platform to provide an optimal shopping experience for your clients.

**Available Configuration:**
* **[Products](./store/products)**: Catalog and offer management
* **[Groups](./store/groupes)**: Product organization by categories
* **[Coupons](./store/coupon)**: Discount and promotion system
* **[PayPal Express Checkout](./store/payment_gateways/paypal_express_checkout)**: PayPal Express payment configuration
* **[PayPal](./store/payment_gateways/paypal)**: Standard PayPal configuration
* **[Balance](./store/payment_gateways/balance)**: Client wallet system
* **[Stripe](./store/payment_gateways/stripe)**: Stripe payment processor configuration
* **[Bank Transfer](./store/payment_gateways/bank_transfert)**: Bank transfer settings
* **[Stancer](./store/payment_gateways/stancer)**: Stancer processor configuration
* **[Fund Settings](../extensions/addons/fund.md)**: Fund transfer management

**[→ Configure Store](./store)**

### Extension Settings
**Manage installed extension settings**

<ThemedImage
  alt="Extension Settings"
  sources={{
    light: '/img/next_gen/settings/settings_3.png',
    dark: '/img/next_gen/settings/settings_3_dark.png'
  }}
/>

Configuration of modules and extensions installed on your platform. This section allows you to manage settings specific to each extension to extend ClientXCMS functionality.

**Available Configuration:**
* **[Extensions](../extensions/extensions.md)**: Marketplace extension management
* **[Discord Link](../extensions/addons/discordlink.md)**: Discord OAuth2 and automatic roles
* **[Discord Gift](../extensions/addons/discordgift.md)**: Automatic Discord gift card distribution
* **[Duplicate Accounts](../extensions/addons/antidoublecompte.md)**: Multiple account detection
* **Sentry**: Error monitoring service
* **Contacts**: Contact request management
* **Gift Card Settings**: Advanced gift card configuration

**[→ Manage Extensions](../extensions)**

:::info
See the [Extensions](../extensions) section for more information on module installation and configuration.
:::

### Proxmox
**Manage various Proxmox module options (IPAM, Templates, OSes)**

<ThemedImage
  alt="Proxmox"
  sources={{
    light: '/img/next_gen/settings/settings_4.png',
    dark: '/img/next_gen/settings/settings_4_dark.png'
  }}
/>

Proxmox-specific configuration for virtual machine and container management. This section allows you to configure templates, IP address management, and operation tracking.

**Available Configuration:**
* **IPAM**: IPv4 and IPv6 address manager
* **KVM Templates**: Virtual machine templates
* **LXC Operating Systems**: Container templates
* **History**: Virtual machine action tracking

**[→ Configure Proxmox](../extensions/modules/Proxmox.md)**

:::note
This section is only available if the Proxmox module is installed and activated.
:::

### Security
**Client area security settings**

<ThemedImage
  alt="Security"
  sources={{
    light: '/img/next_gen/settings/settings_5.png',
    dark: '/img/next_gen/settings/settings_5_dark.png'
  }}
/>

Complete security management of your platform. Configure administrator access, security policies, monitor activities, and manage permissions to maintain a secure environment.

**Available Configuration:**
* **[Staff](./security/staffs)**: Administrator access management
* **API Keys**: API access key management
* **[Database](./security/database)**: Database access and migration
* **[Security Settings](./security/security-setting)**: Global security policies
* **[History](./security/history)**: System logs and diagnostics
* **Action Logs**: Detailed activity tracking
* **Roles**: Custom permission management

**[→ Configure Security](./security)**

### Billing
**Subscription and payment management**

<ThemedImage
  alt="Billing"
  sources={{
    light: '/img/next_gen/settings/settings_6.png',
    dark: '/img/next_gen/settings/settings_6_dark.png'
  }}
/>

Advanced billing system to manage subscriptions, renewals, and transactions. Configure billing settings, taxes, and track your clients' payment history.

**Available Configuration:**
* **Subscriptions**: Automatic renewal management
* **[Billing](./billing/billing.md)**: Invoice and tax configuration
* **Service Upgrades**: Upgrades and downgrades
* **Fund Transfers**: Transaction history

**[→ Configure Billing](./billing)**

### Help Center
**Set up the help center and manage support tickets**

<ThemedImage
  alt="Help Center"
  sources={{
    light: '/img/next_gen/settings/settings_7.png',
    dark: '/img/next_gen/settings/settings_7_dark.png'
  }}
/>

Integrated customer support to manage assistance requests. Configure support departments, organize your teams, and set up the ticket system to provide efficient support.

**Available Configuration:**
* **[Help Center Settings](./helpdesk/helpdesk-settings)**: General helpdesk configuration
* **[Support Departments](./helpdesk/departments)**: Support team organization

**[→ Configure Help Center](./helpdesk)**

### Customization
**Customize client area menus and company social networks**

<ThemedImage
  alt="Customization"
  sources={{
    light: '/img/next_gen/settings/settings_8.png',
    dark: '/img/next_gen/settings/settings_8_dark.png'
  }}
/>

Complete customization of the interface and user experience. Customize the appearance, menus, pages, and optimize your client area according to your brand identity and specific needs.

**Available Configuration:**
* **Theme Settings**: Visual and aesthetic configuration
* **[Home Page](./personalization/home)**: Main page customization
* **[Social Networks](./personalization/socials)**: Social links and integrations
* **[Header Menu](./personalization/front_menu)**: Main navigation
* **[Footer Menu](./personalization/bottom_menu)**: Footer and quick links
* **Primary Colors**: Brand guidelines and theme
* **[SEO Settings](./personalization/seo)**: Search engine optimization
* **[Sections](./personalization/sections)**: Client section customization
* **Email Templates**: Notification templates
* **Social Auth+**: Third-party provider login
* **Pages**: Dynamic page management
* **Contact Page Preferences**: Contact form configuration

**[→ Customize Interface](./personalization)**

