# TechNerdHQ Blog

A tech blog for Mile High Tech Rescue, built with Astro and deployed on Cloudflare Pages.

**URL:** https://technerdhq.milehightechrescue.com

## Tech Stack

- **Framework:** Astro
- **Deployment:** Cloudflare Pages
- **Styling:** Custom CSS + Tailwind (via Astro)
- **Content:** Markdown/MDX blog posts

## Local Development

```bash
cd /home/dboehm/.openclaw/workspace-marketing/mile-high-tech-rescue/technerdhq

# Install dependencies
npm install

# Start dev server
npm run dev

# Build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
technerdhq/
├── src/
│   ├── content/blog/      # Blog posts (Markdown)
│   ├── components/        # Astro components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Site pages
│   └── consts.ts         # Site constants (title, description)
├── public/               # Static assets
├── astro.config.mjs      # Astro config
└── package.json
```

## Adding Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter:
   ```yaml
   ---
   title: "Your Post Title"
   description: "Brief description"
   pubDate: 'Apr 21 2026'
   heroImage: '/blog-placeholder.jpg'
   category: 'WiFi & Networking'
   ---
   ```
3. Write your content in Markdown
4. Commit and push

## Deployment (Cloudflare Pages)

This blog is deployed as a **separate Cloudflare Pages project** with:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/technerdhq`

### Setup Steps:

1. Go to Cloudflare Dashboard → Pages → Create a project
2. Connect to GitHub repo: `DavidBoehm/mile-high-tech-rescue-site`
3. Configure:
   - **Project name:** `technerdhq`
   - **Root directory:** `technerdhq`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add custom domain: `technerdhq.milehightechrescue.com`

## Workflow

```bash
# Navigate to blog directory
cd /home/dboehm/.openclaw/workspace-marketing/mile-high-tech-rescue/technerdhq

# Work on dev branch
git checkout dev

# Make changes, test locally
npm run dev

# Commit changes
git add .
git commit -m "Update blog: new post"
git push origin dev

# Merge to main for deployment
git checkout main
git merge dev
git push origin main
```

## Existing Posts

1. **Why Your WiFi Sucks Upstairs** - Mesh systems, dead zones, fixes
2. **Starlink vs Xfinity in Colorado** - Local internet comparison
3. **How to Fix a Printer That Won't Connect** - Troubleshooting guide

## Customization

- Edit `src/consts.ts` for site title/description
- Modify `src/components/Header.astro` for navigation
- Update `src/pages/index.astro` for homepage
- Add styles to `src/styles/` directory

## Links

- **Main Site:** https://milehightechrescue.com
- **Blog:** https://technerdhq.milehightechrescue.com
- **Contact:** https://milehightechrescue.com/contact
# Test deployment Wed Apr 22 15:03:38 MDT 2026
