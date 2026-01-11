# Image Asset Guide

## Required Images for Driftawave Homepage

### 1. Hero Section
- **File:** `hero-background.jpg`
- **Size:** 1920x1080px
- **Format:** JPG (optimized < 200KB)
- **Content:** Ocean/team retreat scene

### 2. Team Retreats Section
**Directory:** `retreats/`
- `team-building-1.jpg` (800x1000px)
- `team-building-2.jpg` (800x1000px)
- `team-building-3.jpg` (800x1000px)
- `team-building-4.jpg` (800x1000px)

### 3. Offsite Energies Gallery
**Directory:** `energies/`
- `ocean-motion.jpg` (600x800px) - Ocean scene
- `mountain-air.jpg` (600x800px) - Mountain landscape
- `creative-pulse.jpg` (600x800px) - Creative workspace
- `wild-rooted.jpg` (600x800px) - Nature scene
- `edge-comfort.jpg` (600x800px) - Adventure activity

### 4. Partner Logos
**Directory:** `logos/`
- Format: SVG preferred (or PNG transparent)
- Height: Normalized to ~40-48px
- Files: `partner-1.svg`, `partner-2.svg`, etc.

### 5. Testimonial Logos
**Directory:** `testimonials/`
- `intel-logo.svg`
- `surepay-logo.svg`
- `travmagazine-logo.svg`
- `linkedin-logo.svg`

### 6. Press/Featured Images
**Directory:** `press/`
- `irk-magazine-1.jpg` (800x450px, 16:9)
- `irk-magazine-2.jpg`
- `realistic-happiness.jpg`
- `weardevs.jpg`
- `web-summit.jpg`
- `her-expat-life.jpg`
- `sprints-sneakers.jpg`
- (11 total press images)

### 7. Brand Assets
- `pegasus-logo.svg` - Flying Pegasus logo
- `driftawave-wordmark.svg` - DRIFTAWAVE text logo

### 8. Fonts (Optional)
**Directory:** `fonts/`
- `AROneSans-Regular.woff2`
- `AROneSans-Medium.woff2`
- `AROneSans-Bold.woff2`

## Image Optimization Tips

1. **Compress all images:**
   - Use https://squoosh.app or similar
   - Target: < 200KB per image
   - Quality: 80-85% for JPG

2. **Responsive images:**
   - Provide 1x and 2x versions for retina
   - Use Next.js Image component (already implemented)

3. **Alt text:**
   - Update in component files
   - Be descriptive for accessibility

## Quick Setup

```bash
# Create placeholder images (1x1px transparent)
touch public/hero-background.jpg
touch public/retreats/{1..4}.jpg
touch public/energies/{ocean,mountain,creative,wild,edge}.jpg
touch public/logos/{1..6}.svg
touch public/testimonials/{intel,surepay,trav,linkedin}.svg
touch public/press/{1..11}.jpg
touch public/pegasus-logo.svg
```

Then replace with actual images before launch.
