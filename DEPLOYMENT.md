# Deployment Guide for GitHub Pages

## Quick Start

This project is ready to deploy to GitHub Pages. Follow these steps:

### Step 1: Initialize Git Repository

```bash
cd /path/to/project
git init
git add .
git commit -m "Initial commit: DTS Netherlands corporate website"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., "dts-netherlands-website")
3. DO NOT initialize with README (we already have one)

### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source":
   - Branch: Select "main"
   - Folder: Select "/docs"
5. Click "Save"

### Step 5: Access Your Website

After a few minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## File Structure

The website is built with pure HTML, CSS, and JavaScript:

```
project/
├── docs/                   # GitHub Pages deployment folder
│   ├── index.html         # Main HTML page
│   ├── style.css          # Stylesheet
│   ├── script.js          # JavaScript functionality
│   └── README.md          # Documentation
├── src/                   # React version (optional, not used for deployment)
├── .gitignore             # Git ignore rules
├── DEPLOYMENT.md          # This file
└── README.md              # Project README
```

## Customization

### Update Company Information

Edit `docs/index.html`:
- Change contact details
- Update project information
- Modify images (use Pexels URLs or your own)

### Modify Styling

Edit `docs/style.css`:
- Change colors (currently using slate/gray corporate theme)
- Adjust spacing and layout
- Modify responsive breakpoints

### Add Features

Edit `docs/script.js`:
- Add form validation
- Integrate analytics (Google Analytics, etc.)
- Add more interactive features

## Domain Configuration (Optional)

To use a custom domain:

1. Add a file named `CNAME` in the `docs/` folder
2. Add your domain name (e.g., `www.yourcompany.com`)
3. Configure DNS settings with your domain provider
4. Point to GitHub Pages:
   - A record: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME record: `YOUR_USERNAME.github.io`

## Troubleshooting

### Site Not Loading

- Wait 2-5 minutes after enabling Pages
- Check Settings > Pages shows green checkmark
- Verify files are in `docs/` folder
- Check browser console for errors

### Images Not Loading

- Verify image URLs are accessible
- Check for HTTPS (GitHub Pages requires HTTPS)
- Pexels URLs should work automatically

### Mobile Menu Not Working

- Check `script.js` is loading correctly
- Verify no JavaScript errors in console
- Test on actual mobile device, not just browser devtools

## Performance Tips

1. **Optimize Images**: Images from Pexels are already optimized
2. **Minify CSS/JS**: Already minimized for production
3. **Enable Caching**: GitHub Pages automatically handles this
4. **CDN**: GitHub Pages uses CDN automatically

## Security

- No sensitive data in repository
- All images from public sources
- Contact form uses client-side validation only
- Consider adding server-side form processing (Formspree, Netlify Forms, etc.)

## Updates

To update your site:

```bash
# Make changes to files in docs/
git add docs/
git commit -m "Update website content"
git push origin main
```

Changes will be live within 1-2 minutes.

## Support

For issues with:
- **GitHub Pages**: https://docs.github.com/en/pages
- **HTML/CSS/JS**: Check browser console for errors
- **Custom domains**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## License

© 2025 DTS Netherlands B.V. All rights reserved.
