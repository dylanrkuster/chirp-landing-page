# Chirp Landing Page

A beautiful, SEO-optimized landing page for Chirp - Listen to Bird Sounds mobile app.

## Features

- Clean, modern design with nature-inspired color palette
- Fully responsive (mobile, tablet, desktop)
- SEO-optimized with semantic HTML and meta tags
- Smooth scroll animations and fade-in effects
- Fast loading and lightweight
- Ready for static hosting

## Structure

```
landing-page/
├── index.html          # Main HTML file with SEO metadata
├── styles.css          # All styles with CSS variables for easy customization
├── script.js           # Interactive features and animations
└── README.md          # This file
```

## Setup Instructions

### 1. Add Your Screenshots

Replace the placeholder screenshot files with your actual app screenshots:

- `screenshot-1.png` - Bird list interface
- `screenshot-2.png` - Bird detail page
- `screenshot-3.png` - Playing interface with ambient sounds
- `screenshot-4.png` - Favorites and sleep timer

Place these files in the `landing-page/` folder, or update the `src` attributes in `index.html` (lines 139-161) with your preferred filenames.

### 2. Update App Store Link

Replace the placeholder App Store URL with your actual app link:

- Find all instances of `https://apps.apple.com/app/chirp` in `index.html`
- Replace with your real App Store URL

### 3. Update Social Media Links

In `index.html` (lines 217-238), replace the `#` placeholders with your actual social media URLs:

- Twitter/X
- Instagram
- Facebook

### 4. Customize Branding (Optional)

You can customize colors and spacing in `styles.css` by modifying CSS variables at the top of the file (lines 10-45):

```css
:root {
    --color-primary: #4A7C59;        /* Main brand color */
    --color-primary-dark: #3A5F47;
    --color-primary-light: #6B9E7A;
    /* ... etc */
}
```

## Deployment

This landing page is a static site that can be deployed to any hosting platform.

### Deploy to Netlify

1. Create a [Netlify](https://netlify.com) account
2. Drag and drop the `landing-page` folder onto Netlify's deploy interface
3. Your site will be live in seconds!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to the landing-page folder: `cd landing-page`
3. Run: `vercel`
4. Follow the prompts to deploy

### Deploy to GitHub Pages

1. Create a new GitHub repository
2. Push the `landing-page` folder contents to the repository
3. Go to Settings > Pages
4. Select the branch and root folder
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Deploy to Any Static Host

Simply upload the contents of the `landing-page` folder to any static hosting service:

- Cloudflare Pages
- AWS S3 + CloudFront
- Google Firebase Hosting
- Surge.sh
- Render

## SEO Optimization

The page includes:

- Semantic HTML5 structure
- Optimized meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card tags
- Mobile-responsive design
- Fast load times
- Descriptive alt text for images
- Proper heading hierarchy (H1, H2, H3)

### Target Keywords

The page is optimized for:

- bird sounds app
- listen to bird songs
- relaxing nature sounds
- Chirp app

## Customization Tips

### Changing Colors

Edit the CSS variables in `styles.css` (lines 10-45) to match your brand colors.

### Adding More Features

Add new feature cards in `index.html` within the `.features-grid` section (around line 102). Copy the existing `.feature-card` structure.

### Updating Content

All text content is in `index.html`. Simply search for the section you want to update and edit the text directly.

### Adding Analytics

Add your Google Analytics, Plausible, or other analytics tracking code in the `<head>` section of `index.html`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight: < 50KB total (HTML + CSS + JS)
- No external dependencies
- Optimized images (when you add your screenshots, use WebP format for best performance)
- Smooth 60fps animations

## License

Customize and use as you wish for your Chirp app marketing!

## Support

For questions or issues with the landing page, please refer to this README or modify the code as needed.

---

Made with care for the Chirp app 🕊️