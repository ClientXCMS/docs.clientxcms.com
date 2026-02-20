---
sidebar_position: 1
translated: true
---
# Help Center Settings

In **CLIENTXCMS**, **help center settings** define the behavior and operational rules of your support system.
The goal is strategic: **optimize support efficiency**, **automate repetitive processes**, and **ensure a consistent experience** for your clients and team. Proper configuration improves productivity, reduces manual workload, and maintains a high level of service.

:::tip Tip
Well-configured settings transform your help center into a **well-oiled machine**.
Each automation saves you time to focus on complex cases.
:::

## Why Configure These Settings?

Help center configuration is essential for:

* **Automating management** of inactive tickets
* **Controlling interactions** with clients
* **Securing file** exchanges
* **Integrating with your external** tools
* **Maintaining service** quality

:::tip Tip
It's like adjusting the settings of an industrial machine ⚙️ — the more precise it is, the more efficient and reliable.
:::

## Automatic Ticket Management

### Automatic Closure

**Auto-close after inactivity** | (number of days)
Defines after how many days a ticket without activity will be automatically closed.

**Recommended values**:

- **7 days**: Standard for most cases
- **3 days**: High-responsiveness support
- **14 days**: Complex projects requiring more time
- **0**: Disables automatic closure

:::tip Benefits of automatic closure

- **Automatically cleans** abandoned tickets
- **Maintains accurate** statistics
- **Frees up workload** for teams
- **Encourages client** responsiveness
  :::

### Controlled Re-opening

**Re-opening authorization** | (number of days)
Allows clients to reopen their closed tickets for a limited period.

**Available options**:

- **7 days**: Recommended standard delay
- **0**: Disables re-opening
- **-1**: Unlimited re-opening time

**Use cases**:

- **7 days**: For standard technical problems
- **14 days**: For migrations or complex projects
- **0**: To force new tickets and avoid confusion
- **-1**: For premium support with long-term follow-up

:::warning Warning
Unlimited re-opening can create very old tickets that are difficult to manage. Prefer a reasonable delay.
:::

## Webhooks

**Webhook URL**: URL of your endpoint to receive ticket notifications (POST JSON). Use an HTTPS URL if possible.

- If the provided URL is a Discord webhook (e.g., https://discord.com/api/webhooks/xxxxx), notifications will automatically appear as embeds (screenshot below).
  ![image](https://cdn.clientxcms.com/ressources/docs/ticket.png)
- If you use a custom webhook, CLIENTXCMS will send an HTTP POST request with a structured JSON payload. Example:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
	<TabItem value="ticket_create" label="Ticket creation">

```json
{
   "payload": {
        "action": "helpdesk_create",
        "_url": "https://example.com/admin/helpdesk/tickets/1",
        "ticketid": "1",
        "customer_url": "https://example.com/admin/customers/1",
        "department": "General",
        "priority": "Low",
        "subject": "Test ticket",
        "message": "Hello, here is the ticket content.",
        "customername": "Martin Dev",
        "customeremail": "test@clientxcms.com",
        "appname": "CLIENTXCMS",
        "appurl": "https://example.com/"
  }
}
```

    </TabItem>

    <TabItem value="ticket_close" label="Ticket closure">

```json
{
   "payload": {
        "action": "helpdesk_closed",
        "_url": "https://example.com/admin/helpdesk/tickets/1",
        "ticketid": "1",
        "customer_url": "https://example.com/admin/customers/1",
        "department": "General",
        "priority": "Low",
        "subject": "Test ticket",
        "customername": "Martin Dev",
        "customeremail": "test@clientxcms.com",
        "appname": "CLIENTXCMS",
        "appurl": "https://example.com/"
	}
}
```

    </TabItem>

    <TabItem value="ticket_answer_staff" label="Staff reply">

```json
{
    "payload": {
        "action": "helpdesk_answered_staff",
        "_url": "https://example.com/admin/helpdesk/tickets/1",
        "ticketid": "1",
        "customer_url": "https://example.com/admin/customers/1",
        "department": "General",
        "priority": "Low",
        "subject": "Test ticket",
        "message": "Hello, here is the staff reply content.",
        "customername": "Martin Dev",
        "customeremail": "test@clientxcms.com",
        "appname": "CLIENTXCMS",
        "appurl": "https://example.com/"
    }
}
```

    </TabItem>
    <TabItem value="ticket_answer_customer" label="Customer reply">

```json
{
    "payload": {
        "action": "helpdesk_answered_customer",
        "_url": "https://example.com/admin/helpdesk/tickets/1",
        "ticketid": "1",
        "customer_url": "https://example.com/admin/customers/1",
        "department": "General",
        "priority": "Low",
        "subject": "Test ticket",
        "message": "Hello, here is the customer reply content.",
        "customername": "Martin Dev",
        "customeremail": "test@clientxcms.com"
        "appname": "CLIENTXCMS",
        "appurl": "https://example.com/"
    }
}
```

    </TabItem>

</Tabs>

Useful notes:

- `action`: indicates the event (e.g., `helpdesk_create`, `helpdesk_answered_staff`, `helpdesk_answered_customer`).
- `_url`: internal link to ticket editing
- Values are in string format. Adapt your server-side processing according to your needs.

## Attachment Management

### File Activation

**Allow attachments** | (switch)
Enables or disables the ability for clients to attach files to their tickets.

**Attachment benefits**:

- **Screenshots** for visual problems
- **Error logs** for technical diagnosis
- **Documents** for administrative requests
- **Evidence** for complaints

### Security and Limitations

**Maximum size** | (MB)
Limits the size of files that clients can attach.

**Recommendations by usage type**:

| Support Type | Recommended Size | Justification |
| ------------ | ---------------- | ------------- |
| **General support** | 5 MB | Screenshots and light documents |
| **Technical support** | 10 MB | Logs and configuration files |
| **Developer support** | 25 MB | Code archives and dumps |
| **Limited server** | 2 MB | Disk space saving |

### Allowed File Types

**Accepted extensions** | (comma-separated list)
Defines which file types are accepted in tickets.

**Default configuration**: `jpg,jpeg,png,doc,docx,xls,xlsx`

**Recommended configurations**:

#### Standard Support

```
jpg,jpeg,png,gif,pdf,doc,docx,txt,log
```

#### Advanced Technical Support

```
jpg,jpeg,png,gif,pdf,doc,docx,txt,log,zip,rar,sql,json,xml
```

#### Secure Support (restrictive)

```
jpg,jpeg,png,pdf,txt
```

:::warning File Security
**Types to absolutely avoid**:

- `.exe, .bat, .cmd`: Executable files
- `.php, .js, .html`: Potentially malicious scripts
- `.scr, .pif`: Extensions often used by malware

**Best practices**:

- Limit to strictly necessary types
- Scan files with antivirus
- Regularly check suspicious uploads
  :::

### Established Business

```
Auto-close: 7 days
Re-opening: 14 days
Attachments: Enabled (10 MB)
Allowed types: jpg,png,pdf,doc,docx,txt,log
Webhook: CRM system
```

### Specialized Technical Support

```
Auto-close: 14 days
Re-opening: -1 (unlimited)
Attachments: Enabled (25 MB)
Allowed types: jpg,png,pdf,txt,log,zip,sql,json
Webhook: Slack + monitoring
```

### Secure Organization

```
Auto-close: 5 days
Re-opening: 0 (disabled)
Attachments: Enabled (2 MB)
Allowed types: jpg,png,pdf,txt
Webhook: Internal audit system
```

## Performance Optimization

### Metric Monitoring

Regularly analyze:
- **Re-opening rate**: Indicator of resolution quality
- **Closure time**: Automation efficiency
- **Attachment volume**: Impact on disk space
- **File types**: Adaptation to real needs

### Preventive Maintenance

1. **Periodic cleanup**: Delete old files
2. **Settings review**: Adjust according to evolution
3. **Webhook testing**: Check connectivity regularly
4. **Team training**: Ensure everyone masters the settings

:::tip Remember
Help center settings should evolve with your business. What works for a small team may not suit a larger organization. Regularly review and adjust according to your metrics and feedback.
:::


### Established Business

```
Auto-close: 7 days
Re-opening: 14 days
Attachments: Enabled (10 MB)
Allowed types: jpg,png,pdf,doc,docx,txt,log
Webhook: CRM system
```

### Specialized Technical Support

```
Auto-close: 14 days
Re-opening: -1 (unlimited)
Attachments: Enabled (25 MB)
Allowed types: jpg,png,pdf,txt,log,zip,sql,json
Webhook: Slack + monitoring
```

### Secure Organization

```
Auto-close: 5 days
Re-opening: 0 (disabled)
Attachments: Enabled (2 MB)
Allowed types: jpg,png,pdf,txt
Webhook: Internal audit system
```

## Performance Optimization

### Metric Monitoring

Regularly analyze:

- **Re-opening rate**: Indicator of resolution quality
- **Closure time**: Automation efficiency
- **Attachment volume**: Impact on disk space
- **File types**: Adaptation to real needs

### Preventive Maintenance

1. **Periodic cleanup**: Delete old files
2. **Settings review**: Adjust according to evolution
3. **Webhook testing**: Check connectivity regularly
4. **Team training**: Ensure everyone masters the settings

:::tip Remember
Help center settings should evolve with your business. What works for a small team may not suit a larger organization. Regularly review and adjust according to your metrics and feedback.
:::
