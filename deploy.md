# Deployment Guide

## Quick Deploy to Vercel

### Method 1: GitHub + Vercel (Recommended)

1. **Push to GitHub:**
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: NexusAI website"
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/yourusername/nexusai-website.git
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
# Follow the prompts
```

### Method 3: Manual Upload

1. **Build the site:**
```bash
npm run build
```

2. **Upload the `out` folder** to any static hosting service

## Domain Setup

1. **Custom Domain:**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Update DNS records as instructed

2. **SSL Certificate:**
   - Automatically provided by Vercel
   - No additional setup required

## Environment Variables

If you add any environment variables later:

1. **Local development:**
   - Create `.env.local` file
   - Add your variables

2. **Production:**
   - Add in Vercel dashboard under "Settings" → "Environment Variables"

## Performance Optimization

The site is already optimized with:
- ✅ Static site generation
- ✅ Image optimization disabled (for static export)
- ✅ CSS optimization with Tailwind
- ✅ TypeScript for better development
- ✅ SEO meta tags
- ✅ Responsive design

## Post-Deployment Checklist

- [ ] Test all sections and navigation
- [ ] Verify mobile responsiveness  
- [ ] Check contact form (add backend if needed)
- [ ] Update contact information
- [ ] Set up Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console

## Support

If you need help with deployment, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Discord Community](https://discord.gg/vercel)