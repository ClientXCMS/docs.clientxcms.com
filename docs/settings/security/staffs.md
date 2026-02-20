---
translated: true
sidebar_position: 4
---
# Staff Members

In **CLIENTXCMS**, managing **staff accounts** is the core of your platform's administrative security.
The objective is strategic: **precisely control who can access the administration**, **define appropriate authorization levels** and **trace all administrative activities**. Rigorous management of administrator accounts protects your system against unauthorized access and ensures clear accountability for actions.

This section allows you to create, manage, and monitor all accounts with access to the administration interface.

You can manage staff members from:

`Settings` > `Security` > `Staff Members`

![Staff accounts list](/img/next_gen/settings/security/staffs/staff_list.png)

:::tip Tip
Each administrator account is an **access key** to your system.
Treat them with the same care as your house keys — limit the number and monitor their usage.
:::

## Why manage staff accounts?

Administrator management is essential for:

* **Securing access** to the administration interface
* **Distributing responsibilities** according to roles and skills
* **Tracking actions** for audit and accountability
* **Limiting risks** related to compromised accounts
* **Facilitating collaboration** in teams with appropriate access

:::tip Tip
It's like managing access to a safe 🔐 — each person should have exactly the rights they need, no more, no less.
:::

## Creating a Staff Account

### Creation Process

To add a new member to your administrative team:

1. Click the **"Create"** button in the top right
2. Fill in the creation form
3. Define appropriate permissions
4. Validate the account creation

![Staff account creation form](/img/next_gen/settings/security/staffs/staff_create.png)

### Account Information

**Username** | (unique text)
Unique identifier for this administrator account.
Use a clear convention (firstname.lastname, initials, etc.).

**First Name** | (text)
Person's first name for identification and personalization.

**Last Name** | (text)
Last name for complete identification.

**Email Address** | (unique email)
Professional email address used for:

- System authentication
- Important notifications
- Password recovery

### Access Configuration

**Password** | (optional)
Set an initial password or leave blank to send an activation email.

- **Password defined**: User can log in immediately
- **Empty field**: An activation email will be sent

**Expiration Date** | (optional)
Sets a usage deadline for the account.

- **Empty**: Permanent account
- **Date set**: Access automatically revoked on this date

:::tip Best Practices

- Use **temporary accounts** for external contractors
- Set **expiration dates** for internships or short-term assignments
- **Regularly review** expiration dates
:::

### Customization

**Language** | (dropdown menu)
Display language for the administration interface for this user.

**Signature** | (text)
Custom signature used in:

- Support ticket responses
- Official communications
- Generated reports

**Role** | (dropdown menu)
Defines the user's permissions and access to different sections.

## Modifying an Account

### Modification Interface

Access an account's details to modify it:

![Account modification interface](/img/next_gen/settings/security/staffs/staff_show.png)

### Common Modifications

- **Role change**: Promotion or limitation of access
- **Information update**: Email change, name, etc.
- **Expiration extension**: Extending temporary access
- **Password reset**: In case of forgotten or compromised password

:::warning Security
Any modification to an administrator account is **tracked and timestamped**. These actions are visible in the action history.
:::

## Monitoring and Audit

### Login History

Each account has a detailed login history:

![Login history](/img/next_gen/settings/security/staffs/staff_log.png)

**Tracked information**:
- Login date and time
- Source IP address
- Browser and operating system
- Session duration
- Failed attempts

### Action History

Monitor all actions performed by each administrator:

![Action history](/img/next_gen/settings/security/staffs/staff_actionlog.png)

**Recorded actions**:
- Configuration changes
- Customer and service management
- Invoice actions
- Store modifications
- Access to sensitive data

### Behavior Analysis

Use this data to:
- **Detect suspicious activities**
- **Audit important changes**
- **Identify training needs**
- **Optimize team processes**

## Password Management

### Email Reset

**Recommended method** for recovery:

1. On the admin login page, click **"Forgot Password"**
2. Enter the account's email address
3. A reset link is sent by email
4. The user clicks the link and sets a new password

**Advantages**:
- Secure and automated process
- No manual intervention required
- Compliance with security policies

### Manual Reset (Emergency)

In case of problems with the email method:

:::warning Emergency Procedure Only
This method requires direct database access and should only be used in cases of absolute emergency.
:::

**Steps**:
1. Access PHPMyAdmin (see [Database](./database) section)
2. Generate a strong password at [motdepasse.xyz](https://www.motdepasse.xyz/)
3. Create the bcrypt hash at [bcrypt.fr](https://www.bcrypt.fr/)
4. Execute: `UPDATE admins SET password = 'generated_hash' WHERE email = 'email@admin.com'`
5. Inform the administrator of the new password

## Account Deletion

### Deletion Procedure

To permanently delete an account:

1. Click the red **"Delete"** button in the list
2. Confirm the action in the dialog box
3. The account is immediately deactivated

### Consequences of Deletion

- **Access revoked**: Cannot log in
- **Sessions closed**: Immediate disconnection if logged in
- **History preserved**: Past actions remain tracked
- **Irreversible**: The account cannot be restored

:::tip Alternative to Deletion
Rather than deleting, consider:

- **Temporary deactivation** with a past expiration date
- **Role change** to a level without permissions
- **Archiving** to preserve history
:::

:::tip Remember

Staff account management is a balance between security and practicality. The more rigorous you are in access management, the more secure your platform is. Monitor, audit, and regularly adapt according to your team's evolution.
:::
