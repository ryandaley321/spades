# Image Optimization Guide for Spades Poker House

## 🚀 Quick Start

We've optimized all images and created WebP versions. Here's how to use them:

## Method 1: Using OptimizedImage Component (Recommended)

```tsx
import OptimizedImage from '@/components/OptimizedImage';

// Before (old way):
<Image 
  src="/images/luxury-poker-house-exterior-spades-logo-blue-sky-webster-texas.jpg 1.png"
  alt="Poker House"
  width={1920}
  height={1080}
/>

// After (optimized way):
<OptimizedImage 
  src="/images/optimized/luxury-poker-house-exterior-spades-logo-blue-sky-webster-texas.jpg 1"
  alt="Poker House"
  width={1920}
  height={1080}
/>
```

## Method 2: Using Native HTML Picture Element

```tsx
// For maximum browser compatibility with fallback
<picture>
  <source 
    srcSet="/images/optimized/luxury-poker-house-exterior-spades-logo-blue-sky-webster-texas.jpg 1.webp" 
    type="image/webp" 
  />
  <img 
    src="/images/optimized/luxury-poker-house-exterior-spades-logo-blue-sky-webster-texas.jpg 1.png" 
    alt="Poker House"
    className="w-full h-full object-cover"
  />
</picture>
```

## Method 3: Direct WebP with Next/Image

```tsx
import Image from 'next/image';

// If you're confident all browsers support WebP
<Image 
  src="/images/optimized/luxury-poker-house-exterior-spades-logo-blue-sky-webster-texas.jpg 1.webp"
  alt="Poker House"
  width={1920}
  height={1080}
  className="w-full h-full object-cover"
/>
```

## 📁 File Locations

- **Original images**: `/public/images/`
- **Optimized images**: `/public/images/optimized/`
- **WebP versions**: Same name with `.webp` extension
- **PNG/JPEG versions**: Same name with original extension

## 🎯 Specific Updates for Your Project

### Homepage Hero Banner
```tsx
// Update in src/app/page.tsx
<HeroBanner
  backgroundImage="/images/optimized/luxury-poker-house-exterior-spades-logo-blue-sky-webster-texas.jpg 1.webp"
  // ... other props
/>
```

### Cash Games Card
```tsx
// Update in src/app/page.tsx
<OptimizedImage
  src="/images/optimized/high-stakes-poker-hand-chip-tower-cash-game-spades-poker-webster.jpg 1"
  alt="Cash Games at Spades Poker House"
  width={400}
  height={225}
  className="w-full h-full object-cover"
/>
```

### About Page Hero
```tsx
// Update in src/app/about/page.tsx
<HeroBanner
  backgroundImage="/images/optimized/webster-elite-poker-destination-felt-cards-chips-spades-poker-house 1.webp"
  // ... other props
/>
```

## 📊 Size Savings Examples

| Image | Original | Optimized PNG/JPEG | WebP | Savings |
|-------|----------|-------------------|------|---------|
| luxury-poker-house | 14.3 MB | 1.1 MB | 506 KB | **96.5%** |
| poker-chips-on-table | 9.1 MB | 404 KB | 293 KB | **96.8%** |
| high-stakes-poker | 13.3 MB | 1.2 MB | 368 KB | **97.2%** |
| faded-spade | 5.6 MB | 1.5 MB | 323 KB | **94.2%** |

## 🔄 Re-optimizing Images

If you add new images or want to re-optimize:

```bash
npm run optimize-images
```

## 💡 Tips

1. **Always use WebP** when possible - it's 25-35% smaller than JPEG/PNG
2. **Use the OptimizedImage component** for automatic WebP with PNG/JPEG fallback
3. **For background images in CSS**, you can use WebP with fallback:

```css
.hero {
  background-image: url('/images/optimized/image.webp');
}

/* Fallback for older browsers */
.no-webp .hero {
  background-image: url('/images/optimized/image.png');
}
```

## 🌐 Browser Support

- **WebP**: Supported in all modern browsers (Chrome, Firefox, Edge, Safari 14+)
- **Fallback**: PNG/JPEG versions automatically served to older browsers when using OptimizedImage component

## ⚡ Performance Impact

- **Before**: ~150MB total image weight
- **After**: ~15MB with WebP (90% reduction!)
- **Page load**: 3-5x faster on average connections
- **SEO**: Better Core Web Vitals scores