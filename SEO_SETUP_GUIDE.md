# SEO & Google Search Console Setup Guide

## ✅ What's Been Implemented

### 1. Sitemap.xml
- Created at `/public/sitemap.xml`
- Contains all 6 main pages with proper priority and change frequency
- Referenced in `robots.txt`

### 2. SEO Meta Tags & Canonical Links
- Added `react-helmet-async` for dynamic meta tags
- Created `SEO` component with:
  - Page titles
  - Meta descriptions
  - Canonical URLs
  - Open Graph tags (Facebook/LinkedIn)
  - Twitter Card tags
- Applied to all pages:
  - Home (`/`)
  - About (`/about`)
  - Visitors/Rides (`/visitors`)
  - Residents/FMD (`/residents`)
  - Safe & Smart (`/safe-smart`)
  - Contact (`/contact`)

### 3. Robots.txt
- Updated with sitemap reference
- Allows all search engines

---

## 🚀 Google Search Console Setup

### Step 1: Verify Your Domain
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your domain: `velorouge.fr`
4. Choose verification method:
   - **DNS verification** (recommended)
   - Or HTML file upload to `/public/`

### Step 2: Submit Sitemap
1. Once verified, go to "Sitemaps" in the left menu
2. Enter: `https://velorouge.fr/sitemap.xml`
3. Click "Submit"

### Step 3: Request Indexing
1. Go to "URL Inspection" tool
2. Enter each page URL:
   - `https://velorouge.fr/`
   - `https://velorouge.fr/about`
   - `https://velorouge.fr/visitors`
   - `https://velorouge.fr/residents`
   - `https://velorouge.fr/safe-smart`
   - `https://velorouge.fr/contact`
3. Click "Request Indexing" for each

### Step 4: Monitor Performance
- Check "Coverage" report for indexing status
- Monitor "Performance" for search traffic
- Review "Enhancements" for any issues

---

## 📝 Important Notes

- **Indexing takes time**: Google typically indexes new pages within 1-7 days
- **Update sitemap**: When adding new pages, update `/public/sitemap.xml` and resubmit
- **Canonical URLs**: All pages now have proper canonical links to avoid duplicate content
- **Mobile-friendly**: Site is responsive and mobile-optimized
- **Page Speed**: Consider running Lighthouse audit for performance optimization

---

## 🔧 Maintenance

### When Adding New Pages:
1. Add SEO component to the new page
2. Update `/public/sitemap.xml` with new URL
3. Resubmit sitemap in Google Search Console
4. Request indexing for the new URL

### Updating Existing Pages:
- SEO meta tags are dynamic and update automatically
- No need to resubmit unless URL structure changes
