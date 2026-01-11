# Images

> Images in Driftawave always have rounded corners and often include gradient overlays for text readability.

---

## Image Treatment Rules

### Rule 1: Always Use rounded-brand
```tsx
// CORRECT
<div className="overflow-hidden rounded-brand">
  <Image src="/image.jpg" alt="" fill className="object-cover" />
</div>

// WRONG
<Image src="/image.jpg" alt="" fill className="object-cover rounded-lg" />
```

### Rule 2: Use Next.js Image Component
```tsx
// CORRECT
import Image from "next/image";
<Image src="/image.jpg" alt="Description" fill className="object-cover" />

// WRONG
<img src="/image.jpg" alt="" />
```

### Rule 3: Always Include Meaningful Alt Text
```tsx
// CORRECT
alt="Remote team cultural exploration at historic gate"
alt="Executive facilitating strategic planning workshop"

// WRONG
alt="image"
alt=""
alt="photo"
```

---

## Image Containers

### Standard Image Card
```tsx
<div className="relative overflow-hidden rounded-brand aspect-[4/3]">
  <Image
    src="/image.jpg"
    alt="Description"
    fill
    className="object-cover"
  />
</div>
```

### Image with Hover Zoom
```tsx
<div className="group relative overflow-hidden rounded-brand aspect-[4/3]">
  <Image
    src="/image.jpg"
    alt="Description"
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>
```

### Image with Shadow
```tsx
<div className="relative overflow-hidden rounded-brand aspect-[4/3] shadow-lg hover:shadow-xl transition-all duration-500">
  <Image src="/image.jpg" alt="" fill className="object-cover" />
</div>
```

---

## Gradient Overlays

### Standard Gradient (For Text Overlay)
```tsx
<div className="absolute inset-0 bg-gradient-to-t from-sunset-black/70 via-sunset-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
```

### Hero Gradient (Fades to White)
```tsx
<div className="absolute inset-0 bg-gradient-to-b from-sunset-black/50 via-sunset-black/30 to-white/90" />
```

### Subtle Overlay
```tsx
<div className="absolute inset-0 bg-sunset-black/30" />
```

---

## Text on Images

When placing text over images, ALWAYS use gradient overlay:

```tsx
<div className="group relative block overflow-hidden rounded-brand aspect-[4/3]">
  <Image src="/image.jpg" alt="" fill className="object-cover" />

  {/* REQUIRED: Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-sunset-black/70 via-sunset-black/20 to-transparent" />

  {/* Text content */}
  <div className="absolute inset-0 flex items-end p-5">
    <div>
      <span className="font-display text-lg text-white drop-shadow-lg">
        {title}
      </span>
      <span className="font-body text-xs text-white/80 uppercase tracking-wider">
        {category}
      </span>
    </div>
  </div>
</div>
```

---

## Image Frame (Orange Border)

```tsx
<div className="img-brand-frame">
  <Image src="/image.jpg" alt="" width={400} height={300} className="rounded-brand" />
</div>
```

CSS:
```css
.img-brand-frame {
  position: relative;
  border-radius: 32px;
  padding: 4px;
  background: linear-gradient(135deg, #F06025 0%, #FFB122 100%);
}
.img-brand-frame > * {
  border-radius: calc(32px - 4px);
}
```

---

## Image Corner Accent

```tsx
<div className="img-corner-accent relative">
  <Image src="/image.jpg" alt="" width={400} height={300} className="rounded-brand" />
</div>
```

CSS:
```css
.img-corner-accent::before {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  width: 48px;
  height: 48px;
  border-left: 3px solid #F06025;
  border-top: 3px solid #F06025;
  border-radius: 8px 0 0 0;
}
.img-corner-accent::after {
  content: '';
  position: absolute;
  bottom: -8px;
  right: -8px;
  width: 48px;
  height: 48px;
  border-right: 3px solid #F06025;
  border-bottom: 3px solid #F06025;
  border-radius: 0 0 8px 0;
}
```

---

## Aspect Ratios

| Ratio | Class | Usage |
|-------|-------|-------|
| 4:3 | `aspect-[4/3]` | Standard cards |
| 16:9 | `aspect-video` | Hero, banners |
| 1:1 | `aspect-square` | Thumbnails, avatars |
| 3:4 | `aspect-[3/4]` | Portrait cards |

---

## Remote Images (Allowed Domains)

Configure in `next.config.ts`:
```ts
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'placehold.co' },
    { protocol: 'https', hostname: 'images.unsplash.com' },
  ],
},
```

---

## Watermark/Background Images

For decorative background images:

```tsx
<div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
  <Image
    src="/logos/driftawave-black.svg"
    alt=""
    width={1200}
    height={300}
    className="w-[150%] max-w-[1800px] opacity-[0.03] translate-y-1/3"
    aria-hidden="true"
  />
</div>
```

---

## FORBIDDEN

- Images without `rounded-brand`
- Using `<img>` instead of `<Image>`
- Text on images without gradient overlay
- Missing alt text
- Using `object-contain` for full-bleed images
- Sharp corners on any image
- Generic alt text like "image" or "photo"
