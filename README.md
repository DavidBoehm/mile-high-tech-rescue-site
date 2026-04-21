# MileHighTechRescue

Tech rescue and IT services website built with Astro and deployed on Cloudflare.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Astro (Static Site Generator) |
| Styling | Tailwind CSS |
| Backend | Cloudflare Workers (Edge Functions) |
| Database | Cloudflare D1 (Serverless SQL) |
| Cache/Session | Cloudflare KV |
| Deployment | Cloudflare Pages |
| CDN | Cloudflare |

## Project Structure

```
.
├── src/                    # Source code
│   ├── pages/             # Astro pages
│   ├── components/        # Reusable components
│   ├── layouts/           # Page layouts
│   └── worker.ts          # Cloudflare Worker entry
├── dist/                  # Build output
├── public/                # Static assets
├── wrangler.toml          # Cloudflare Workers config
└── package.json
```

## Quick Start

```bash
# Clone and setup
cd /home/dboehm/.openclaw/workspace-marketing/mile-high-tech-rescue
npm install

# Development
npm run dev

# Build
npm run build

# Deploy Workers (requires wrangler auth)
wrangler deploy
```

## Development Workflow

1. **Always work on `dev` branch first**
   ```bash
   git checkout dev
   git pull origin dev
   ```

2. **Create feature branches from dev**
   ```bash
   git checkout -b feature/my-feature dev
   ```

3. **Push to dev for testing**
   ```bash
   git checkout dev
   git merge feature/my-feature
   git push origin dev
   # Test on https://dev.milehightechrescue.com
   ```

4. **Merge to main for production**
   ```bash
   git checkout main
   git merge dev
   git push origin main
   ```

## Environment Setup

### Local Development
```bash
# Create .env file
echo "PUBLIC_API_URL=http://localhost:8787" > .env

# Install wrangler globally for Workers development
npm install -g wrangler

# Login to Cloudflare
wrangler login
```

### Database (D1)
```bash
# Create local dev database
wrangler d1 create mhtr-local

# Run migrations
wrangler d1 migrations apply mhtr-local

# Execute SQL
wrangler d1 execute mhtr-local --command="SELECT * FROM jobs"
```

## Deployment

Deployments are automatic:
- `main` branch → https://milehightechrescue.com
- `dev` branch → https://dev.milehightechrescue.com (password protected)

### Manual Deploy
```bash
# Deploy Workers only
wrangler deploy --env production

# Deploy Pages (via Git push)
git push origin main
```

## API Endpoints

All API routes served via Cloudflare Workers:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/login` | POST | User login |
| `/api/auth/logout` | POST | User logout |
| `/api/jobs` | GET | List jobs |
| `/api/jobs` | POST | Create job |
| `/api/jobs/:id` | GET | Get job details |
| `/api/jobs/:id` | PATCH | Update job |
| `/api/customers` | GET | List customers |
| `/api/customers` | POST | Create customer |

## See Also

- [QUICKSTART.md](QUICKSTART.md) - Quick setup guide
- [SETUP-DEV-BRANCH.md](SETUP-DEV-BRANCH.md) - Dev branch workflow
- [Cloudflare Docs](https://developers.cloudflare.com/)
- [Astro Docs](https://docs.astro.build)

## License

MIT
