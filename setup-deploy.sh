#!/bin/bash

# Setup script for GitHub auto-deployment
# Run this once to configure everything

set -e

echo "🚀 Setting up auto-deployment for dist/ folder"
echo ""

# Get GitHub repo URL from user
read -p "Enter your GitHub repo URL (e.g., https://github.com/username/mile-high-tech-rescue-site.git): " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ No URL provided. Exiting."
    exit 1
fi

echo ""
echo "🔧 Configuring dist/ as a git submodule/repo..."

# Initialize git repo in dist
cd dist
git init
git branch -m main 2>/dev/null || true
git remote add origin "$REPO_URL"

# Create initial commit
git add -A
git commit -m "Initial deployment" || echo "Nothing to commit"

echo ""
echo "⚠️  IMPORTANT: Make sure your GitHub repo exists!"
echo ""
echo "If you haven't created the repo yet:"
echo "1. Go to https://github.com/new"
echo "2. Name it: mile-high-tech-rescue-site"
echo "3. Make it Public"
echo "4. DON'T initialize with README"
echo ""
read -p "Press Enter when ready to push..."

echo ""
echo "🚀 Pushing to GitHub..."
git push -u origin main --force

cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "To deploy in the future, just run:"
echo "  ./deploy.sh"
echo ""
echo "Or manually:"
echo "  npm run build"
echo "  cd dist && git add -A && git commit -m 'update' && git push"
