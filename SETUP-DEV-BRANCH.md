# Dev Branch Setup Guide

## Overview
- `main` branch → Production (milehightechrescue.com)
- `dev` branch → Staging (dev.milehightechrescue.com)

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

### 2. Add GitHub Secret for Dev Password

Go to: https://github.com/DavidBoehm/mile-high-tech-rescue-site/settings/secrets

Add:
- Name: `DEV_PASSWORD`
- Value: Your chosen password (different from production)

### 3. Create and Push Dev Branch

```bash
cd ~/.openclaw/workspace-marketing/mile-high-tech-rescue

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

### Merge to production:
```bash
git checkout main
git merge dev
git push origin main
# Live on https://milehightechrescue.com
```

## Quick Commands

```bash
# Start new feature
git checkout -b feature/my-feature dev

# Test on dev
git checkout dev
git merge feature/my-feature
git push origin dev

# Deploy to production
git checkout main
git merge dev
git push origin main
```

## URLs
- Production: https://milehightechrescue.com
- Dev/Staging: https://dev.milehightechrescue.com (password protected)
