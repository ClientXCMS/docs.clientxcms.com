---
translated: true
sidebar_position: 1
---

# Security Settings

In **CLIENTXCMS**, **security settings** constitute the first line of defense for your platform. <br/>
The objective is vital: **configure fundamental protection mechanisms** to **secure authentication**, **filter malicious access** and **strengthen the robustness of your system**. Proper security configuration protects your data, prevents intrusions, and maintains user trust.

These settings control authentication, password encryption, anti-spam protections, and administration access.

You can manage security settings from:

`Settings` > `Security` > `Security Settings`

:::tip Tip
Security starts with good basic settings.
Each option you configure here **significantly strengthens** your platform's protection.
:::

## Why configure these settings?

Security settings are essential for:

* **Protecting user accounts** with robust encryption
* **Filtering malicious registrations** and spam
* **Securing administrator access** with custom URLs
* **Controlling authentication** according to your business needs

:::tip Tip
It's like adjusting the locks and alarms on your house 🏠 — the better it's configured, the better you sleep.
:::

## Password Encryption

### Hashing Algorithms

**Hashing Driver** | (dropdown menu)<br />
Choose the algorithm used to encrypt user passwords.

| Algorithm | Security | Performance | Recommendation |
|-----------|----------|-------------|----------------|
| **bcrypt** | ✅ High | ⚡ Fast | Default, recommended |
| **argon2** | ✅✅ Very high | 🐌 Slower | High security |
| **argon2id** | ✅✅✅ Maximum | 🐌🐌 Slowest | Critical security |

:::info Migration from v1
For users migrating from CLIENTXCMS v1, keep `argon` to maintain compatibility with existing passwords.
:::

:::warning Important - Algorithm Change
Changing the hashing algorithm will make **all existing passwords invalid**. Users will need to reset their password to log in again.
:::

## Administration Security

### Custom Administration URL

**Administration Prefix** | (text)<br />
Customize the URL for accessing your administration interface to hide the standard access path.

**Configuration Examples**:

| Prefix | Access URL | Security Level |
|--------|------------|----------------|
| `admin` | `/admin` | ⚠️ Standard (avoid) |
| `backoffice` | `/backoffice` | ✅ Better |
| `manage-2024` | `/manage-2024` | ✅✅ Recommended |
| `secure-xyz789` | `/secure-xyz789` | ✅✅✅ Optimal |

:::tip Best Practices
- Use a **unique and unpredictable** prefix
- Avoid obvious words like "admin", "panel", "dashboard"
- Include numbers or special characters
- Change periodically to enhance security
:::

## Multi-Factor Authentication (MFA)

The following settings make multi-factor authentication mandatory:

| Setting | Description |
|---------|-------------|
| `force_2fa_admin` | Requires administrators to configure and use MFA |
| `force_2fa_client` | Requires customers to configure and use MFA |

### Recovering Access When MFA Is Forced

If an MFA configuration problem prevents users from logging in, you can temporarily disable the requirement directly in the database:

```sql
UPDATE settings SET value = 'false' WHERE `key` IN ('force_2fa_admin', 'force_2fa_client');
```

Then clear the application cache from the root of the project:

```bash
php artisan cache:clear
```

:::warning Temporary recovery measure
This command disables forced MFA for both administrators and customers. Correct the MFA or SMS configuration, then enable the appropriate options again from the security settings.
:::

### MFA by SMS

In the MFA by SMS settings, select your SMS provider. The available providers are **OVH** and **Twilio**. Once a provider is selected, complete the fields displayed for that provider.

#### OVH

| Field | Expected value |
|-------|----------------|
| **Endpoint** | OVH API region: `ovh-eu`, `ovh-ca`, or `ovh-us` |
| **Application key** | OVH application key |
| **Application secret** | OVH application secret |
| **Consumer key** | OVH consumer key |
| **Service name** | Name of the OVH SMS service |
| **Sender** | Sender displayed for SMS messages |

#### Twilio

| Field | Expected value |
|-------|----------------|
| **Account SID** | Twilio Account SID |
| **Authentication token** | Twilio authentication token |
| **Sender number** | Twilio sender phone number |

:::warning Credentials
SMS provider secrets are sensitive. Do not publish or share them, and replace them immediately if they are exposed.
:::

## GDPR Settings

Additional privacy settings are available:

| Setting | Description |
|---------|-------------|
| `gdrp_cookies_privacy_link` | Link to the privacy policy displayed with the cookie information |
| `gdpr_purge_inactive_days` | Number of inactive days before eligible personal data is purged |

## Security Logs

Authentication, configuration, and system errors can be reviewed from `Settings` > `Security` > `History`. See [History and logs](./history.md) for the available log files, their retention, and diagnostic actions.

## CAPTCHA Protection

### CAPTCHA Service Configuration

**CAPTCHA Driver** | (dropdown menu)<br />
Choose the protection service against bots and automated spam.

| Service | Advantages | Disadvantages |
|---------|-----------|---------------|
| **none** | No friction | ❌ No protection |
| **reCAPTCHA** | Widely supported | 🔍 Google data collection |
| **hCaptcha** | Privacy-friendly | ⚡ Less known |
| **Cloudflare Turnstile** | Optimal performance | 🆕 More recent |

### Key Configuration

**Site Key** | (public key)<br />
The public key provided by your CAPTCHA service, visible on the client side.

**Secret Key** | (private key)<br />
The secret key to validate CAPTCHA responses on the server side.

:::warning Key Security
- **Never** share your secret key
- Renew keys if they are compromised
- Configure authorized domains in your CAPTCHA dashboard
:::

### Detailed Configuration

For advanced CAPTCHA configuration, see the [developer documentation](/developpers/software/captcha).

### Connection Problem with Misconfigured CAPTCHA
If you have a connection problem due to a misconfigured CAPTCHA, you can temporarily disable the CAPTCHA by connecting to your database and changing the `captcha_driver` value in the `settings` table to `none`. This will disable the CAPTCHA and allow you to log in to your client area to correct the CAPTCHA configuration.
SQL command to execute:
```sql
UPDATE settings SET value = 'none' WHERE `key` = 'captcha_driver';
```

You can then clear the application cache by running the following command in your terminal at the root of your project:
```bash
php artisan cache:clear
```
You should now be able to log in to your client area and correct the CAPTCHA configuration.
**Administrator** passwords are always encrypted with `bcrypt` to ensure fast and secure access to the administration interface, regardless of the algorithm chosen for users.
