# Dev Branch Setup Guide

## Overview
- `main` branch → Production (milehightechrescue.com)
- `dev` branch → Staging (dev.milehightechrescue.com)

## IMPORTANT: Build Platform

**Cloudflare Pages handles ALL builds.**
- **GitHub** = Source code hosting ONLY
- **Cloudflare Pages** = Build + deploy platform
- **NO GitHub Actions** - Cloudflare builds directly from git pushes

## Architecture

- **Frontend:** Astro static site (Cloudflare Pages)
- **Backend:** Cloudflare Workers (serverless at the edge)
- **Database:** Cloudflare D1 (distributed SQLite)
- **Storage:** Cloudflare KV (for sessions/cache)

## Setup Steps

### 1. Create Cloudflare Pages Dev Project

1. Go to https://dash.cloudflare.com/ → Pages
2. Click "Create a project"
3. Project name: `mile-high-tech-rescue-dev`
4. Connect to same GitHub repo
5. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Add custom domain: `dev.milehightechrescue.com`

### 2. Set up Cloudflare Workers

1. Go to Workers & Pages → Create application
2. Create Worker: `mhtr-api-dev`
3. Bind D1 database:
   ```bash
   wrangler d1 create mhtr-db-dev
   ```
4. Update `wrangler.toml` with bindings

### 3. Add GitHub Secrets

Go to: https://github.com/DavidBoehm/mile-high-tech-rescue-site/settings/secrets

Add:
- `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token
- `DEV_PASSWORD` - Password for dev site access

### 4. Create and Push Dev Branch

```bash
cd /home/dboehm/.openclaw/workspace-marketing/mile-high-tech-rescue

# Create dev branch from main
git checkout -b dev

# Push dev branch
git push -u origin dev

# Switch back to main for production work
git checkout main
```

## Daily Workflow

### Test changes on dev first:
```bash
git checkout dev
# make changes
git add .
git commit -m "Test feature"
git push origin dev
# Check https://dev.milehightechrescue.com
```

### Deploy Workers changes:
```bash
# Dev workers
wrangler deploy --env dev

# Production workers
wrangler deploy --env production
```

### Merge to production:
```bash
git checkout main
git merge dev
git push origin main
# Live on https://milehightechrescue.com
```

## D1 Database Management

```bash
# Run migrations on dev
wrangler d1 migrations apply mhtr-db-dev --env dev

# Run migrations on production
wrangler d1 migrations apply mhtr-db --env production

# Execute query
wrangler d1 execute mhtr-db-dev --command="SELECT * FROM jobs"
```

## Environment Config

### wrangler.toml structure:
```toml
name = "mhtr-api"
main = "src/worker.ts"
compatibility_date = "2024-04-01"

[[env.dev.d1_databases]]
binding = "DB"
database_name = "mhtr-db-dev"
database_id = "your-dev-db-id"

[[env.production.d1_databases]]
binding = "DB"
database_name = "mhtr-db"
database_id = "your-prod-db-id"
```

## Quick Commands

```bash
# Start new feature from dev
git checkout -b feature/my-feature dev

# Test on dev
git checkout dev
git merge feature/my-feature
git push origin dev

# Deploy to production
git checkout main
git merge dev
git push origin main

# Deploy Workers only
wrangler deploy
```

## URLs

| Environment | Site | API |
|-------------|------|-----|
| Production | https://milehightechrescue.com | workers deployed |
| Dev | https://dev.milehightechrescue.com | workers deployed (dev) |

## Troubleshooting

- **Build failures:** Check Cloudflare Pages build logs in Cloudflare dashboard
- **Workers not updating:** Check `wrangler.toml` environment bindings
- **D1 errors:** Verify database bindings in Cloudflare dashboard
