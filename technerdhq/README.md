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

## Workflow

This blog lives in the same repo as the main Mile High Tech Rescue site.

### Development:
```bash
# Edit in technerdhq/ directory
cd /home/dboehm/.openclaw/workspace-marketing/mile-high-tech-rescue

# Work on dev branch
git checkout dev

# Make changes
git add .
git commit -m "Update blog: new post"
git push origin dev
```

### Deployment:

**Option 1: Separate Cloudflare Pages Project (Recommended)**
1. Go to Cloudflare Dashboard → Pages
2. Create project pointing to this repo
3. Set build config:
   - Build command: `cd technerdhq && npm run build`
   - Output directory: `technerdhq/dist`
4. Add custom domain: `technerdhq.milehightechrescue.com`

**Option 2: Manual Deploy**
```bash
cd technerdhq
npm run build
# Upload dist/ folder to Cloudflare Pages
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

## SEO

Posts include:
- Proper meta descriptions
- Semantic HTML
- Sitemap generation
- RSS feed

## Links

- **Main Site:** https://milehightechrescue.com
- **Blog:** https://technerdhq.milehightechrescue.com
- **Contact:** https://milehightechrescue.com/contact
