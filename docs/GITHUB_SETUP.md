# GitHub Pages Setup - Quick Guide

## Your Website is Ready! 🚀

All files for GitHub Pages deployment are in the `docs/` folder.

## Deploy in 3 Steps

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Add DTS Netherlands corporate website"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** (left sidebar)
3. Under **Source**:
   - Branch: `main`
   - Folder: `/docs`
4. Click **Save**

### 3. Visit Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## What's Included

✅ Fully responsive HTML/CSS/JS website
✅ Corporate design with industrial imagery
✅ Smooth scroll navigation
✅ Contact form
✅ Mobile-friendly
✅ No dependencies - pure HTML/CSS/JS

## Files

- `index.html` - Main webpage
- `style.css` - All styling (minified)
- `script.js` - Interactive features
- `README.md` - Documentation

## Customization

Edit `index.html` to update:
- Company name and info
- Contact details
- Project descriptions
- Images

## Need Help?

See `DEPLOYMENT.md` in the project root for detailed instructions.

## Preview Locally

Simply open `index.html` in your browser, or use:

```bash
python3 -m http.server 8000
# Visit: http://localhost:8000
```

---

© 2025 DTS Netherlands B.V.
