#!/bin/bash
set -e

echo "Building TechNerdHQ blog..."

# Navigate to technerdhq directory
cd technerdhq

# Install dependencies
npm install

# Build the site
npm run build

echo "Build complete!"
