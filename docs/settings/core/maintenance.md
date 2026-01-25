---
sidebar_position: 4
translated: true
---

import ThemedImage from '@theme/ThemedImage';

# Maintenance
The maintenance system allows you to put your **ClientXCMS** in maintenance mode. This means your **CLIENTXCMS** will be inaccessible to users during the maintenance period.
It allows you to inform users of the reason for the maintenance and the estimated maintenance duration. To do this, go to the `Settings` menu, then to the `General Settings` section, and finally to `Maintenance`.
![Maintenance](/img/next_gen/settings/core/maintenance/maintenance.png)
- **Enable maintenance**: Enable or disable maintenance.
- **Maintenance message**: The maintenance message that will be displayed to users.
- **Maintenance URL**: The URL to bypass maintenance.
- **Maintenance button text**: The text of the button to bypass maintenance.
- **Maintenance image URL**: The URL of the maintenance image.
- **Maintenance icon**: The maintenance icon.

:::tip Tip
Maintenance mode is your **protective shield** during sensitive operations.
It allows you to work peacefully while keeping your clients informed of the situation.
:::

## Why Use Maintenance Mode?

Maintenance mode is essential for:

* **Protecting your data** during critical updates
* **Avoiding errors** caused by access during modifications
* **Communicating professionally** about service interruptions
* **Maintaining trust** by showing that maintenances are planned

:::tip Tip
It's like putting an "Closed for maintenance" sign on your shop 🚧 — your clients understand and appreciate the transparency.
:::

## Maintenance Mode Configuration

### Activation and Deactivation

**Enable maintenance** | (switch)<br />
Instantly enables or disables maintenance mode on your platform.
When enabled, only administrators can access the system.

:::warning Important
Once maintenance is enabled, all non-administrator users will be automatically logged out and redirected to the maintenance page.
:::

### Information Message

**Maintenance message** | (text area)<br />
The main message displayed on the maintenance page.
Briefly explain the reason for the interruption and the estimated duration.

Example of an effective message:
```
We are currently performing an important update to our systems.
Our platform will be available again in approximately 2 hours.
Thank you for your understanding.
```

### Visual Customization

**Maintenance image URL** | (URL)<br />
Add a custom image to illustrate the maintenance page.
Can be your logo or a themed illustration.

**Maintenance icon** | (text)<br />
Defines the icon displayed on the page (uses CSS icon classes).
For example: `fas fa-tools` for a tools icon.

### Bypass Options

**Maintenance URL** | (URL)<br />
External link to redirect users to during maintenance.
Useful for directing to a status page or temporary site.

**Maintenance button text** | (text)<br />
The text displayed on the redirect button.
For example: "View status" or "More information".

## System Behavior During Maintenance

### For Administrators

✅ **Full access maintained**: Administrators can still log in
✅ **Uninterrupted work**: All features remain accessible
✅ **Visual indicator**: A badge or notification reminds that maintenance is active

### For Users

🚫 **Access blocked**: Unable to log into the client area
🚫 **Sessions terminated**: Logged-in users are disconnected
✅ **Informative page**: Display of the customized maintenance page

## Advanced Customization

### Modify the Maintenance Template

For complete customization, you can modify the template file:

```
resources/themes/default/views/maintenance.blade.php
```

This allows you to:
- Fully adapt the design to your brand guidelines
- Add dynamic elements (countdown, etc.)
- Integrate additional information

### Customization Best Practices

1. **Keep it simple**: The page should load quickly
2. **Stay informative**: Clear message about duration and reason
3. **Keep your identity**: Use your colors and logo
4. **Think mobile**: The page must be responsive

## Usage Examples

### Planned Maintenance

For a scheduled update:
1. Enable maintenance **before** starting work
2. Set a precise message with the estimated return time
3. Make your modifications
4. Disable maintenance once finished

### Emergency Maintenance

In case of a critical problem:
1. Immediately enable maintenance
2. Use a generic message if necessary
3. Update the message with more details as soon as possible
4. Communicate on other channels (social media, email)

## Maintenance Page Preview

Here is what the maintenance page looks like as seen by your users:

<ThemedImage
  alt="Maintenance page preview"
  sources={{
    light: '/img/next_gen/settings/core/maintenance/maintenance_home.png',
    dark: '/img/next_gen/settings/core/maintenance/maintenance_home_dark.png'
  }}
/>

The page displays:
- Your custom message
- The configured image or icon
- The redirect button (if configured)
- A clean and professional design

## Tips and Recommendations

### Proactive Communication

- **Notify in advance**: Inform your clients of planned maintenances
- **Be precise**: Give clear schedules and respect them
- **Stay reachable**: Indicate a means of contact for emergencies

### Time Optimization

- **Off-peak hours**: Schedule maintenances during low activity hours
- **Minimal duration**: Prepare everything in advance to reduce downtime
- **Prior testing**: Test modifications in a test environment

### Post-Maintenance Follow-up

- **Check everything**: Make sure everything works after maintenance
- **Communicate the end**: Inform your clients that service is restored
- **Monitor**: Stay vigilant for potential post-maintenance issues

:::tip Remember
Maintenance mode is a powerful tool that, when used well, strengthens your clients' trust. Well-managed and communicated maintenance is perceived as a sign of professionalism and reliability.
:::
