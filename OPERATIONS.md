# Asset OS - Operations & Deployment Guide

## Table of Contents
1. [Manual Execution](#manual-execution)
2. [Daily Execution Summary](#daily-execution-summary)
3. [Cloud Deployment Configuration](#cloud-deployment-configuration)

---

## Manual Execution

### Prerequisites
- Server running on port 3000 (default)
- Environment variables configured in `.env`
- Database migrations applied

### 1. Bitget Manual Sync

Execute a manual sync for Bitget:

```bash
curl -X POST http://localhost:3000/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{
    "providers": ["BITGET"]
  }'
```

**Response:**
```json
{
  "snapshotId": "cm5abcd1234567890",
  "status": "started"
}
```

**Check sync status:**
```bash
curl http://localhost:3000/admin/sync/status/cm5abcd1234567890
```

**Required Environment Variables:**
- `BITGET_API_KEY` - Your Bitget API key
- `BITGET_SECRET_KEY` - Your Bitget secret key
- `BITGET_PASSPHRASE` - Your Bitget API passphrase

---

### 2. SimpleFX Manual Sync

Execute a manual sync for SimpleFX:

```bash
curl -X POST http://localhost:3000/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{
    "providers": ["SIMPLEFX"]
  }'
```

**Response:**
```json
{
  "snapshotId": "cm5abcd1234567890",
  "status": "started"
}
```

**Required Environment Variables:**
- `SIMPLEFX_API_KEY` - Your SimpleFX API key identifier (e.g., `6afcf24b2fee4083b51e45e5a3dbxxxx`)
- `SIMPLEFX_API_SECRET` - Your SimpleFX API secret key

**Notes:**
- SimpleFX uses OAuth-style authentication with Bearer tokens
- Tokens are cached for 50 minutes to minimize API calls
- Only LIVE accounts are synced (DEMO accounts are filtered out)

---

### 3. Nexo CSV Upload

Upload a Nexo CSV export to create a snapshot:

```bash
curl -X POST http://localhost:3000/admin/nexo/upload \
  -F "file=@/path/to/nexo-export.csv" \
  -F "snapshotDate=2024-01-15"
```

**Without specific snapshot date (uses today):**
```bash
curl -X POST http://localhost:3000/admin/nexo/upload \
  -F "file=@/path/to/nexo-export.csv"
```

**Response:**
```json
{
  "snapshotId": "cm5abcd1234567890",
  "status": "success",
  "assetsImported": 5
}
```

**CSV Format Expected:**
- Nexo transaction export CSV
- Columns: `Transaction`, `Type`, `Input Currency`, `Input Amount`, `Output Currency`, `Output Amount`, `USD Equivalent`, `Details`, `Date / Time`
- Balances are calculated from transaction history (outputs - inputs)

**Notes:**
- No API credentials needed for Nexo (CSV-based)
- CSV can be exported from Nexo web interface
- Only positive balances are imported

---

### 4. Multi-Provider Sync

Sync multiple providers at once:

```bash
curl -X POST http://localhost:3000/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{
    "providers": ["BITGET", "SIMPLEFX"]
  }'
```

**Sync all providers (default):**
```bash
curl -X POST http://localhost:3000/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{}'
```

**Sync for specific date:**
```bash
curl -X POST http://localhost:3000/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{
    "providers": ["BITGET", "SIMPLEFX"],
    "snapshotDate": "2024-01-15"
  }'
```

---

## Daily Execution Summary

### How It Works

The system is designed to create daily snapshots of your asset balances across all providers:

1. **Snapshot Creation**: A new snapshot is created for each day (one per date)
2. **Provider Sync**: Each provider is synced in parallel using `Promise.allSettled`
3. **Balance Calculation**: Asset balances are fetched and USD values calculated
4. **Status Tracking**: Each provider sync is tracked with status (OK, ERROR, PARTIAL)

### Default Providers

By default, the following providers are synced:
- **Bitget** (API-based)
- **SimpleFX** (API-based)
- **Nexo** (Manual CSV upload required)

### Snapshot States

- `CREATED` - Snapshot created, not yet synced
- `RUNNING` - Sync in progress
- `COMPLETE` - All providers synced successfully
- `PARTIAL` - Some providers succeeded, some failed
- `FAILED` - All providers failed

### Manual vs Automated

**Current Implementation:**
- Manual execution via API endpoints (as documented above)
- No automated cron job configured yet

**For Daily Automation:**

You can set up a cron job to trigger daily syncs:

```bash
# Add to crontab (crontab -e)
0 1 * * * curl -X POST http://localhost:3000/admin/sync/run -H "Content-Type: application/json" -d '{}'
```

This runs at 1:00 AM daily.

**Alternative: NestJS Scheduler**

Install the scheduler module:
```bash
npm install @nestjs/schedule
```

Then create a scheduled task in your codebase (not yet implemented).

---

## Cloud Deployment Configuration

### Environment Variables

Create a `.env` file with the following variables:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/asset_os?schema=public"

# Bitget API
BITGET_API_KEY="your_bitget_api_key"
BITGET_SECRET_KEY="your_bitget_secret_key"
BITGET_PASSPHRASE="your_bitget_passphrase"

# SimpleFX API
SIMPLEFX_API_KEY="your_simplefx_api_key_identifier"
SIMPLEFX_API_SECRET="your_simplefx_api_secret"

# Application
PORT=3000
NODE_ENV=production
```

### Database Setup (PostgreSQL)

**1. Install PostgreSQL:**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start service
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

**2. Create Database and User:**
```bash
sudo -u postgres psql

CREATE DATABASE asset_os;
CREATE USER asset_os_user WITH ENCRYPTED PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE asset_os TO asset_os_user;
\q
```

**3. Update DATABASE_URL in .env:**
```bash
DATABASE_URL="postgresql://asset_os_user:your_secure_password@localhost:5432/asset_os?schema=public"
```

**4. Run Migrations:**
```bash
npx prisma migrate deploy
npx prisma generate
```

### Application Deployment

**1. Install Dependencies:**
```bash
npm install
```

**2. Build Application:**
```bash
npm run build
```

**3. Start Application:**
```bash
npm run start:prod
```

### Process Management (PM2)

**Install PM2:**
```bash
npm install -g pm2
```

**Start with PM2:**
```bash
pm2 start dist/src/main.js --name asset-os
pm2 save
pm2 startup
```

**PM2 Commands:**
```bash
pm2 status          # Check status
pm2 logs asset-os   # View logs
pm2 restart asset-os # Restart
pm2 stop asset-os   # Stop
```

### Reverse Proxy (Nginx)

**1. Install Nginx:**
```bash
sudo apt install nginx
```

**2. Configure Nginx:**
```bash
sudo nano /etc/nginx/sites-available/asset-os
```

**Configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**3. Enable Site:**
```bash
sudo ln -s /etc/nginx/sites-available/asset-os /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### SSL/TLS Configuration (Let's Encrypt)

**1. Install Certbot:**
```bash
sudo apt install certbot python3-certbot-nginx
```

**2. Obtain Certificate:**
```bash
sudo certbot --nginx -d your-domain.com
```

**3. Auto-renewal:**
```bash
sudo certbot renew --dry-run
```

### Firewall Configuration

**Allow HTTP, HTTPS, and SSH:**
```bash
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### Docker Deployment (Optional)

**Dockerfile:**
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
```

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://asset_os_user:password@db:5432/asset_os
      - BITGET_API_KEY=${BITGET_API_KEY}
      - BITGET_SECRET_KEY=${BITGET_SECRET_KEY}
      - BITGET_PASSPHRASE=${BITGET_PASSPHRASE}
      - SIMPLEFX_API_KEY=${SIMPLEFX_API_KEY}
      - SIMPLEFX_API_SECRET=${SIMPLEFX_API_SECRET}
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=asset_os
      - POSTGRES_USER=asset_os_user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

**Start with Docker:**
```bash
docker-compose up -d
```

### Cloud Provider Specific Notes

#### AWS EC2
- Use t2.micro or t3.micro for small workloads
- Configure security groups to allow ports 22, 80, 443
- Use RDS for PostgreSQL database (recommended)
- Consider using Elastic IP for static IP address

#### DigitalOcean
- $6/month droplet (1GB RAM) is sufficient
- Use managed PostgreSQL database ($15/month)
- Enable automated backups

#### Google Cloud Platform
- Use e2-micro instance (free tier eligible)
- Use Cloud SQL for PostgreSQL
- Configure firewall rules in VPC

#### Heroku
- Use Heroku Postgres add-on
- Set environment variables in Heroku dashboard
- Use Procfile: `web: npm run start:prod`

### Monitoring & Logging

**PM2 Monitoring:**
```bash
pm2 logs asset-os --lines 100
pm2 monit
```

**Log Rotation:**
```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

### Backup Strategy

**Database Backups:**
```bash
# Daily backup cron job
0 2 * * * pg_dump -U asset_os_user asset_os > /backups/asset_os_$(date +\%Y\%m\%d).sql
```

**Automated cleanup (keep last 30 days):**
```bash
find /backups -name "asset_os_*.sql" -mtime +30 -delete
```

### Security Checklist

- [ ] Change default PostgreSQL password
- [ ] Use strong passwords for all credentials
- [ ] Enable firewall (ufw)
- [ ] Configure SSL/TLS certificates
- [ ] Restrict database access to localhost only
- [ ] Use environment variables for secrets (never commit .env)
- [ ] Enable automatic security updates
- [ ] Set up monitoring and alerting
- [ ] Regular backup verification
- [ ] API rate limiting (consider implementing)

### Troubleshooting

**Check Application Logs:**
```bash
pm2 logs asset-os
```

**Check Database Connection:**
```bash
npx prisma studio
```

**Test API Endpoints:**
```bash
curl http://localhost:3000/admin/sync/status/snapshot_id
```

**Restart Services:**
```bash
pm2 restart asset-os
sudo systemctl restart postgresql
sudo systemctl restart nginx
```

---

## Support

For issues or questions, check the application logs and ensure all environment variables are properly configured.
