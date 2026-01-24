---
sidebar_position: 5
translated: true
---

# Docker

You can install ClientXCMS via Docker by following the steps below.

## Prerequisites

Before you begin, make sure you have the following:
- A server with Docker and Docker Compose installed. You can follow the installation instructions for:
    - [Docker](https://docs.docker.com/get-docker/)
    - [Docker Compose](https://docs.docker.com/compose/install/)
- A domain name pointing to your server.

Run the following commands to install Docker and Docker Compose on an Ubuntu server:
```bash
docker compose build
```
```bash
docker compose up -d
```

## Installation

1. Create a directory for ClientXCMS and navigate to it:
```bash
mkdir /var/www
cd /var/www
```

2. Clone the ClientXCMS Git repository:
```bash
git clone https://github.com/ClientXCMS/clientxcms.git
cd clientxcms
```

3. Copy the example Docker Compose configuration file:
```bash
cp docker-compose.example.yml docker-compose.yml
```

4. Edit the environment file to configure the necessary variables, including the database connection and domain name:
```bash
cp .env.example .env
nano .env
```

You can modify variables such as the domain:
```env
APP_URL=https://your-domain.com
OAUTH_CLIENT_ID="XX"
OAUTH_CLIENT_SECRET="XX"
```
As well as your API keys, database connection, etc.

Docker will generate the SSL certificate via Let's Encrypt automatically by adding the email in the docker-compose.yml file:
```yaml
- LETSENCRYPT_EMAIL=your_email@example.com
```

5. Launch the Docker containers:
```bash
docker-compose up --build -d
```

6. Add an administrator account:
```bash
docker exec -it clientxcms_app-1 php artisan clientxcms:install-admin
```

7. Access your domain name in a web browser to complete the installation by confirming license access.
