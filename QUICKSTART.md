# MileHighTechRescue - Quick Start

## Architecture

- **Frontend:** Astro static site (deployed to Cloudflare Pages)
- **Backend:** Cloudflare Workers
- **Database:** Cloudflare D1 (SQLite-compatible edge database)
- **Deployment:** GitHub → Cloudflare Pages (auto-deploy on push)

## Development

```bash
cd /home/dboehm/.openclaw/workspace-marketing/mile-high-tech-rescue

# Install dependencies
npm install

# Start dev server
npm run dev
```

## URLs

| Environment | URL |
|-------------|-----|
| Production | https://milehightechrescue.com |
| Dev/Staging | https://dev.milehightechrescue.com |

## Environment Variables

Create `.env` file:
```bash
# D1 Database binding (handled by wrangler)
# Workers KV binding
# Other secrets managed via Cloudflare dashboard or wrangler
```

## Deployment

Deployments are automatic via GitHub Actions:
- Push to `main` → Deploys to production
- Push to `dev` → Deploys to staging

## Database Access

Use `wrangler` CLI to interact with D1:
```bash
# List databases
wrangler d1 list

# Execute query
wrangler d1 execute DB_NAME --command="SELECT * FROM users"

# Run migrations
wrangler d1 migrations apply DB_NAME
```

## API Endpoints

Backend API is served via Cloudflare Workers:
- `POST /api/auth/login` - User authentication
- `GET /api/jobs` - List jobs
- `POST /api/jobs` - Create job
- `PATCH /api/jobs/:id` - Update job

## Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Backend:** Cloudflare Workers
- **Database:** Cloudflare D1
- **Auth:** JWT tokens (stored in KV)
- **Deployment:** GitHub + Cloudflare Pages
