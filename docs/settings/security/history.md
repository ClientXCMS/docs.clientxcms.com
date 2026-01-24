---
translated: true
sidebar_position: 3
---
# History

In **CLIENTXCMS**, **history** and **log monitoring** constitute an essential pillar of your platform's security and diagnostics.
The objective is crucial: **trace all critical activities**, **detect anomalies quickly** and **facilitate problem diagnosis**. A robust logging system allows you to maintain security, optimize performance, and effectively resolve incidents.

This section centralizes all system log files, scheduled tasks, and errors for comprehensive monitoring.

You can view history from:

`Settings` > `Security` > `History`

:::tip Tip
Logs are your system's **black box**.
Check them regularly to anticipate problems before they impact your users.
:::

## Why monitor history?

Log monitoring is essential for:

* **Detecting intrusion attempts** and suspicious activities
* **Diagnosing failures** and system malfunctions
* **Optimizing performance** by identifying bottlenecks
* **Auditing actions** of administrators and users
* **Planning maintenance** by anticipating recurring problems

:::tip Tip
It's like having a video surveillance system for your platform 📹 — you see everything that happens, even when you're not there.
:::

## Types of Logs

### 📋 Scheduled Task Logs

Automatic tasks generate their own log files to trace their execution:

| Log File              | Associated Command          | Description                          |
| --------------------- | --------------------------- | ------------------------------------ |
| `services-delivery.log` | `services:delivery`        | Automatic service delivery           |
| `services-expire.log`   | `services:expire`          | Service expiration                   |
| `services-renewals.log` | `services:renewals`        | Automatic renewals                   |
| `helpdesk-close.log`    | `clientxcms:helpdesk-close`| Automatic ticket closure             |
| `notify-expiration.log` | `services:notify-expiration`| Expiration notifications            |
| `invoice-delete.log`    | `clientxcms:invoice-delete`| Automatic invoice deletion           |
| `purge-metadata.log`    | `clientxcms:purge-metadata`| Metadata cleanup                     |
| `purge-basket.log`      | `clientxcms:purge-basket`  | Abandoned cart cleanup               |

#### Task Log Content

Each file contains:
- **Precise timestamp** of execution
- **Task status** (success/failure)
- **Number of items processed** (services, invoices, etc.)
- **Errors encountered** and their details
- **Execution duration** of the task

### 🚨 System Error Logs

Application errors are recorded daily:

**File format**: `laravel-{year}-{month}-{day}.log`

Examples:
- `laravel-2024-08-15.log`
- `laravel-2024-08-16.log`

#### Log Retention

- **Retention period**: 15 days automatically
- **Daily rotation**: A new file each day
- **Automatic deletion**: Logs older than 15 days are deleted

#### Error Log Content

- **PHP errors**: Unhandled exceptions, fatal errors
- **SQL errors**: Database problems
- **Authentication errors**: Failed login attempts
- **Module errors**: Extension malfunctions
- **Configuration errors**: Invalid settings

## Log File Management

### Available Actions

For each log file, three actions are available:

**🔽 Download** | (gray button)
Download the log file to your computer for offline analysis.
Useful for archiving or analysis with external tools.

### Action Use Cases

#### Download

- **In-depth analysis** with external tools
- **Archiving** for audit or compliance
- **Sharing** with technical support
- **Long-term** trend monitoring

#### Clearing
- **Cleanup** of a file that has become too large
- **Reset** after resolving a recurring problem
- **Disk space** optimization

#### Deletion
- **Disk space** maintenance
- **Compliance** with retention policies
- **Cleanup** of irrelevant logs

## Monitoring Best Practices

### Regular Monitoring

1. **Daily check**: Review recent logs every day
2. **Critical alerts**: Monitor recurring errors
3. **Trends**: Analyze error evolution over time
4. **Correlations**: Link errors to system events

### Log Analysis

#### Scheduled Task Logs
```
[2024-08-15 02:00:01] INFO: services:delivery started
[2024-08-15 02:00:05] INFO: Processing 15 pending services
[2024-08-15 02:00:12] SUCCESS: 12 services delivered successfully
[2024-08-15 02:00:12] WARNING: 3 services failed delivery
[2024-08-15 02:00:12] INFO: services:delivery completed in 11.2s
```

#### System Error Logs
```
[2024-08-15 14:23:45] ERROR: PDOException: Connection refused
[2024-08-15 14:23:45] ERROR: Stack trace: /var/www/app/Database.php:42
[2024-08-15 14:24:01] INFO: Database connection restored
```

### Common Troubleshooting

### Logs Too Large

**Symptoms**: Files of several MB, interface slowdowns
**Solutions**:
1. Clear old logs
2. Identify the source of repetitive errors
3. Fix the root problems
4. Increase rotation frequency

### Missing Logs

**Symptoms**: No recent files, silent tasks
**Solutions**:
1. Check write permissions
2. Verify available disk space
3. Restart services if necessary
4. Check logging configuration

### Recurring Errors

**Symptoms**: Same errors repeated, instability
**Solutions**:
1. Analyze the error pattern
2. Identify the root cause
3. Apply a permanent fix
4. Monitor the resolution

## Compliance and Archiving

### Regulations

Depending on your industry:

- **GDPR**: Access logs for personal data
- **Accounting**: Financial operation logs
- **Security**: Authentication and access logs

### Retention Policy

Define a clear policy:
1. **Retention period** according to legal requirements
2. **Archiving format** (compression, encryption)
3. **Controlled access** to archived logs
4. **Secure destruction** at end of lifecycle

:::tip Remember
Logs are your allies for maintaining a stable and secure platform. Proactive monitoring saves you time and avoids crises. Make it a habit to check them regularly.
:::
