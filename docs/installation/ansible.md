---
sidebar_position: 5
translated: true
---

# Ansible

**Ansible** enables fully automated deployment of ClientXCMS, from prerequisite installation to production deployment. This method is recommended for production environments and multi-server deployments.

## Prerequisites

### On the control machine (your computer)
- **Ansible 2.9+** installed
- **Git** to clone the playbook
- **SSH access** to target servers

### On the target servers
- **Ubuntu 22.04+**, **Debian 11+** or **Rocky/AlmaLinux 9+**
- **Root access** or user with sudo privileges
- **Internet connection** to download packages

## Playbook Installation

### 1. Clone the Ansible Repository

```bash
git clone https://github.com/ClientXCMS/ansible.git clientxcms-ansible
cd clientxcms-ansible
```

### 2. Inventory Configuration

Edit the inventory file according to your environment:

#### Production
```bash
# inventory/production.yml
[clientxcms]
server1.example.com ansible_host=192.168.1.100 ansible_user=root
server2.example.com ansible_host=192.168.1.101 ansible_user=root

[clientxcms:vars]
environment_name=production
```

#### Development
```bash
# inventory/development.yml
[clientxcms]
dev.local ansible_host=192.168.1.50 ansible_user=root

[clientxcms:vars]
environment_name=development
```

## Deployment

### New Production Deployment

For a first deployment on a production server:

```bash
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -e "webserver=nginx" \
  -e "clientxcms_domain=manager.example.com" \
  -e "clientxcms_admin_email=admin@example.com" \
  -e "clientxcms_oauth_client_id=VOTRE_CLIENT_ID" \
  -e "clientxcms_oauth_client_secret=VOTRE_CLIENT_SECRET"
```

### Development Deployment

For a development or test environment:

```bash
ansible-playbook -i inventory/development.yml playbooks/deploy-clientxcms.yml \
  -e "webserver=nginx"
```

### Web Server Choice

The playbook supports two web servers:

```bash
# Nginx (recommended for production)
-e "webserver=nginx"

# Apache (shared hosting compatible)
-e "webserver=apache"
```

## Configuration Variables

### Mandatory Variables (Production)

| Variable | Description | Example |
|----------|-------------|---------|
| `webserver` | Web server to install | `nginx` or `apache` |
| `clientxcms_domain` | Domain name | `manager.example.com` |
| `clientxcms_admin_email` | Administrator email | `admin@example.com` |
| `clientxcms_oauth_client_id` | ClientXCMS OAuth ID | `9707826860385` |
| `clientxcms_oauth_client_secret` | OAuth secret | `votre_secret` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `clientxcms_force_reinstall` | Force reinstallation | `false` |
| `clientxcms_ssl_enabled` | Enable SSL/Let's Encrypt | `true` (prod), `false` (dev) |
| `clientxcms_repo_branch` | Git branch to deploy | `master` |

### Obtaining OAuth Credentials

OAuth credentials are required in production and can be obtained from your ClientXCMS account:

1. Log in to [clientxcms.com](https://clientxcms.com)
2. Go to **My Account** > **My Services** > **Manage Service** > **Service Tab**
3. **Authentication** section
4. Note the **OAuth Client ID** and **OAuth Secret**

## Installed Components

The Ansible playbook automatically installs and configures:

### System Infrastructure
- **PHP 8.3** with all required extensions
- **MariaDB 10.11+** (database)
- **Nginx** or **Apache** (web server)
- **PHP-FPM** (process manager)

### Security
- **SSL Certificates** (Let's Encrypt in production)
- **Firewall** configured (ports 22, 80, 443)
- Secure **permissions** and users
- **Hardened PHP configuration**

### ClientXCMS
- **Source code** from Git
- **Composer** and **NPM dependencies**
- Automatic `.env` **configuration**
- **Initialized database**
- **Cron tasks** and **Laravel queues**

## Update Management

### Updating a Specific Instance

```bash
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -e "clientxcms_update_mode=true" \
  -e "clientxcms_domain=manager.example.com"
```

### Updating All Instances

```bash
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -e "clientxcms_update_mode=true"
```

### Update Process

1. **Automatic backup** (files + database)
2. **Maintenance mode** (`php artisan down`)
3. **Git source code retrieval**
4. **Dependencies installation**
5. **Database migrations**
6. **Cache cleanup**
7. **Asset compilation**
8. **Exit maintenance mode** (`php artisan up`)

:::info Automatic Backups
Each update generates a complete backup in `/var/backups/clientxcms/[domain]/[timestamp]/`
:::

## Error Handling and Rollback

### In Case of Update Failure

If an update fails, the playbook displays the exact rollback command:

```bash
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -e "clientxcms_rollback_mode=true" \
  -e "clientxcms_domain=manager.example.com" \
  -e "clientxcms_rollback_timestamp=1709123456"
```

### Rollback Process

1. **Backup existence verification**
2. **Details display** (date, git commit)
3. **User confirmation**
4. **File restoration** (preserves `.env`)
5. **Database restoration**
6. **Cache cleanup**

## Advanced Options

### Dry-run Mode (Simulation)

Test the deployment without applying changes:

```bash
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  --check \
  -e "webserver=nginx"
```

### Verbose Mode (Debug)

Display more information during execution:

```bash
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -vvv \
  -e "webserver=nginx"
```

### Using Tags

Run only certain parts of the playbook:

```bash
# Prerequisites installation only
--tags prerequisites

# ClientXCMS deployment only
--tags clientxcms

# Update mode only
--tags update
```

## Backup File Structure

```
/var/backups/clientxcms/
├── manager.example.com/
│   ├── 1709123456/
│   │   ├── files.tar.gz          # Complete file archive
│   │   ├── database.sql          # MySQL/MariaDB dump
│   │   └── metadata.json         # Metadata (date, commit, etc.)
│   └── 1709234567/
│       └── ...
└── another-domain.com/
    └── ...
```

## Complete Examples

### Multi-domain Production Deployment

```bash
# First domain
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -e "webserver=nginx" \
  -e "clientxcms_domain=client1.example.com" \
  -e "clientxcms_admin_email=admin@client1.com" \
  -e "clientxcms_oauth_client_id=8387752805262" \
  -e "clientxcms_oauth_client_secret=SECRET1"

# Second domain on the same server
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -e "webserver=nginx" \
  -e "clientxcms_domain=client2.example.com" \
  -e "clientxcms_admin_email=admin@client2.com" \
  -e "clientxcms_oauth_client_id=9274638291847" \
  -e "clientxcms_oauth_client_secret=SECRET2"
```

### Scheduled Update with Custom Retention

```bash
# Keep 10 backups instead of 5 by default
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -e "clientxcms_update_mode=true" \
  -e "clientxcms_backup_retention=10"
```

### Deployment with Specific Branch

```bash
# Deploy the develop branch for testing
ansible-playbook -i inventory/staging.yml playbooks/deploy-clientxcms.yml \
  -e "webserver=nginx" \
  -e "clientxcms_domain=staging.example.com" \
  -e "clientxcms_repo_branch=develop"
```

## Automatic Instance Detection

The playbook automatically detects existing ClientXCMS instances via:

1. **Scan** of `/var/www/` for directories
2. **Verification** of the `storage/installed` marker file
3. **Validation** of the `artisan` file presence

If no specific domain is provided, all detected instances will be updated.

## Best Practices

### Security
- **Do not** commit OAuth secrets to Git, or consider using Vault for secrets and sensitive information to encrypt.
- Use a **dedicated user** for Ansible
- **Test** first on a staging environment
- **Verify** backups regularly

### Performance
- Use **Nginx + PHP-FPM** for production
- Enable **PHP OPcache** (done automatically)
- Configure **MariaDB** according to your load
- Monitor server **resources** with Grafana (planned in a future playbook update)

### Maintenance
- **Schedule** updates during low traffic periods
- **Keep** backups according to your retention policy
- **Test** rollbacks on a test environment
- **Document** your specific configurations

:::tip Recommendation
For a professional deployment, use Ansible with a dedicated control server and SSH keys rather than passwords.
:::

## Support and Troubleshooting

The **ClientXCMS** team does **not provide external support** regarding the use of Ansible and the provided playbooks.
We remain available on **community channels** however, but this assistance is **not part of the official support offering**.

### Available Logs

- **Ansible**: `/var/log/ansible.log`
- **ClientXCMS**: `storage/logs/laravel.log`
- **Nginx**: `/var/log/nginx/`
- **Apache**: `/var/log/apache2/` or `/var/log/httpd/`

### Common Problem Resolution

#### SSH Connection Error

```bash
# Check connectivity
ansible -i inventory/production.yml all -m ping
```

#### OAuth Authentication Error

* Check your credentials on [clientxcms.com](https://clientxcms.com)
* Make sure the OAuth application is active

#### SSL Deployment Failure

* Verify that the domain points correctly to the server
* Wait for DNS propagation (up to **48 hours**)
* **Do not enable Cloudflare proxy** during certificate generation

### Help Resources

For additional help, consult:

* **[ClientXCMS Documentation](/)**
* **[GitHub Issues](https://github.com/ClientXCMS/ansible/issues)**
* **[Community Discord](https://gg.clientxcms.com)**
