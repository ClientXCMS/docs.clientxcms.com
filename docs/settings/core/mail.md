---
sidebar_position: 2
translated: true
---
import ThemedImage from '@theme/ThemedImage';

# Email

In **CLIENTXCMS**, **email** configuration is essential for maintaining **seamless communication with your clients**.
The goal is simple: **properly configure email sending to ensure deliverability** and provide a **professional experience** for your users. Good configuration improves the reliability of your communications, builds trust, and ensures your important messages reach their destination.

Email is used for all automated communications: registrations, password resets, order notifications, invoices, etc.

You can manage email settings from:

`Settings` > `General Settings` > `Email Settings`

<ThemedImage
  alt="Email configuration interface"
  sources={{
    light: '/img/next_gen/settings/mailing_settings/mailing_settings.png',
    dark: '/img/next_gen/settings/mailing_settings/mailing_settings_dark.png'
  }}
/>

:::tip Tip
Correct SMTP configuration is **crucial** to prevent your emails from ending up in spam.
Take the time to properly set up these options and regularly test your configuration.
:::

## Why Configure Email?

Automated email is at the heart of the client experience in CLIENTXCMS. It allows you to:

* Confirm your clients' registrations and orders
* Send invoices and payment reminders
* Notify clients of changes to their services
* Securely manage password resets

:::tip Tip
It's like having a personal assistant who automatically sends all your important mail 📬 — reliable, fast, and professional.
:::

## Basic Configuration

### Identity Settings

These settings define how your emails will appear in your clients' inbox:

**Sender address** | (email address)
The email address that will appear as the sender of all your automated messages.
Use a professional address like `noreply@yourdomain.com` or `support@yourdomain.com`.

**Sender name** | (text)
The name that will appear next to the sender address in email clients.
Usually your company or service name.

**Client area domain** | (URL)
The complete URL of your CLIENTXCMS installation (e.g.: `https://demo.clientxcms.com`).
Used to generate links in emails.

### Message Customization

**Opening greeting** | (text)
The welcome message that will appear at the beginning of each email.
For example: "Hello" or "Dear customer".

**Closing greeting** | (text)
The signature that will appear at the end of each email.
For example: "Best regards, The ClientXCMS Team" or "Thank you for your trust".

### Advanced Options

**Disable emails** | (checkbox)
Prevents all emails from being sent from the system.
⚠️ Use only in development or maintenance.

## SMTP Configuration

SMTP (Simple Mail Transfer Protocol) is the standard protocol for sending emails. Correct SMTP configuration ensures the deliverability of your messages.

### CTXMailer - Professional Mail Service

CLIENTXCMS also offers **CTXMailer**, a fully integrated email hosting solution:

- **Included** in **Premium** and **Enterprise** plans (support + cloud hosting)
- **Features**: up to 20 mailboxes included, 15 GB storage, secure interface
- **Option**: available for other licenses at **€3 / month**

Learn more: https://clientxcms.com/ctxmailer

:::tip
If you use CTXMailer, SMTP settings are provided automatically and deliverability configuration (SPF/DKIM) is simplified from the client area.
:::

### Connection Settings

**SMTP Host** | (server address)
The address of your email provider's SMTP server.

**SMTP Port** | (number)
The port used for SMTP connection. Standard ports are:

- `587`: For TLS/STARTTLS (recommended)
- `465`: For SSL
- `25`: Standard port (often blocked by ISPs)

**SMTP Encryption** | (dropdown menu)
The type of connection security:

- **TLS**: Recommended, uses port 587
- **SSL**: Secure alternative, uses port 465
- **None**: Not recommended except in local environment

### Authentication

**SMTP Username** | (text)
Usually your full email address or an identifier provided by your host.

**SMTP Password** | (password)
The password associated with your SMTP account.
For some services (Gmail, Office 365), you will need to use a specific app password.

:::warning Important
For security reasons, always use a dedicated **app password** rather than your main email account password.
:::

## Testing and Validation

### Test Configuration

After configuring your SMTP settings, it is **essential** to test the connection:

1. Click the **"Test SMTP Connection"** button
2. A test email will be sent to the configured address
3. Check the reception and appearance of the message

<ThemedImage
  alt="Successful SMTP connection test"
  sources={{
    light: '/img/next_gen/settings/core/mail/mail_success.png',
    dark: '/img/next_gen/settings/core/mail/mail_success.png'
  }}
/>

### Success Indicators

- ✅ **Successful connection**: Confirmation message displayed
- ✅ **Email received**: Check your inbox
- ✅ **Good formatting**: Email displays correctly


## Troubleshooting

### Common Errors

**"scheme is not supported"**
The selected encryption protocol is not compatible with your server.
→ **Solution**: Try switching between TLS and SSL.

**"Authentication failed"**
The provided credentials are incorrect.
→ **Solution**: Check your username and password. For Gmail/Office 365, use an app password.

**"Connection timeout"**
The SMTP server is not responding.
→ **Solution**: Check the host and port. Make sure your firewall allows outgoing connections.

### Best Practices

To optimize your email deliverability:

1. **Use a verified domain**: The sender address must match your domain
2. **Configure SPF/DKIM/DMARC**: These protocols authenticate your emails
3. **Avoid spam words**: In your greetings and content
4. **Test regularly**: Configuration can change over time

## Configuration Examples

### Gmail Configuration

```
SMTP Host: smtp.gmail.com
Port: 587
Encryption: TLS
Username: your-email@gmail.com
Password: [App password]
```

### Office 365 Configuration

```
SMTP Host: smtp.office365.com
Port: 587
Encryption: TLS
Username: your-email@yourdomain.com
Password: [Account password]
```

### OVH Configuration

```
SMTP Host: ssl0.ovh.net
Port: 465
Encryption: SSL
Username: your-email@yourdomain.com
Password: [Email password]
```

:::tip Remember
A well-configured email system is the foundation of a professional client relationship. Take the time to test and optimize your settings to ensure every message reaches its destination.
:::
