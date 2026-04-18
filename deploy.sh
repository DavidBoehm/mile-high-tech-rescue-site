#!/bin/bash

# Mile High Tech Rescue - Build & Deploy to GitHub
# Auto-pushes built dist/ to: https://github.com/DavidBoehm/mile-high-tech-rescue-site

set -e

REPO_URL="https://github.com/DavidBoehm/mile-high-tech-rescue-site"

echo "🏗️  Building Astro site..."
npm run build

echo ""
echo "📦 Pushing built files to GitHub..."

cd dist

# Ensure git is initialized and remote is set
if [ ! -d ".git" ]; then
    git init
    git branch -m main 2>/dev/null || true
fi

# Set remote if not already set
if ! git remote get-url origin > /dev/null 2>&1; then
    git remote add origin "$REPO_URL"
fi

# Pull any existing changes (in case of conflicts)
git pull origin main --rebase --autostash 2>/dev/null || true

# Get current timestamp for commit message
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

# Add all files
git add -A

# Commit (with fallback if nothing changed)
git commit -m "Deploy: $TIMESTAMP" || echo "📋 No changes to commit"

# Push to GitHub
echo "🚀 Pushing to $REPO_URL..."
git push origin main --force-with-lease

cd ..

echo ""
echo "✅ Done! Cloudflare will auto-deploy from GitHub within 1-2 minutes."
echo "🌐 Your site: https://mile-high-tech-rescue-site.thedavidboehm.workers.dev/"
