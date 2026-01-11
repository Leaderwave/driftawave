# Cards

> Cards are container elements that group related content. They follow strict visual rules.

---

## Card Types

### 1. Brand Card (Standard)
White background with orange-tinted shadow. Use for content cards.

```tsx
<div className="card-brand p-5">
  {/* Content */}
</div>
```

CSS definition:
```css
.card-brand {
  position: relative;
  overflow: hidden;
  border-radius: 32px;  /* var(--radius-brand) */
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 20px -2px rgba(240, 96, 37, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-brand:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px -4px rgba(240, 96, 37, 0.2);
  border-color: rgba(240, 96, 37, 0.2);
}
```

### 2. Image Card (Clickable)
For retreat/experience cards with images.

```tsx
<Link
  href="/retreat"
  className="group relative block overflow-hidden rounded-brand aspect-[4/3] shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
>
  <Image
    src="/image.jpg"
    alt="Description"
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-105"
  />
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-sunset-black/70 via-sunset-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

  {/* Content overlay */}
  <div className="absolute inset-0 flex items-end p-5">
    <div>
      <span className="font-display text-lg text-white">{title}</span>
      <span className="font-body text-xs text-white/80 uppercase tracking-wider">
        {category}
      </span>
    </div>
  </div>
</Link>
```

### 3. CTA Card (PostcardCTA)
Large promotional card with accent corner.

```tsx
<div className={cn(
  "relative rounded-brand bg-white",
  "shadow-2xl ring-1 ring-sunset-black/5",
  "overflow-hidden p-10 md:p-16"
)}>
  {/* Orange accent corner */}
  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-sunset-orange/20 to-transparent rounded-br-full" />

  {/* Content */}
  <div className="relative z-10 max-w-2xl">
    <h2 className="font-display text-3xl md:text-5xl text-sunset-black tracking-tight mb-6">
      {headline}
    </h2>
    <p className="font-body font-light text-lg md:text-xl text-sunset-black/60 mb-10">
      {subheadline}
    </p>
    <Link href="/contact" className="btn-brand">
      {ctaText}
    </Link>
  </div>
</div>
```

---

## MANDATORY Rules

### Rule 1: Always Use rounded-brand
```tsx
// CORRECT
className="rounded-brand"  // 32px

// WRONG
className="rounded-lg"
className="rounded-xl"
className="rounded-2xl"
```

### Rule 2: Card Shadows Must Be Orange-Tinted
```tsx
// CORRECT
className="shadow-brand"
// or
style={{ boxShadow: '0 4px 20px -2px rgba(240, 96, 37, 0.15)' }}

// WRONG - Generic gray shadows
className="shadow-lg"  // Only acceptable if combined with orange
```

### Rule 3: Hover State Requirements
All interactive cards MUST have:
- Lift effect: `hover:-translate-y-0.5` or `hover:-translate-y-1`
- Shadow increase: `hover:shadow-xl`
- Transition: `transition-all duration-300`

### Rule 4: Image Cards Must Have Gradient Overlay
```tsx
// CORRECT - Always include gradient
<div className="absolute inset-0 bg-gradient-to-t from-sunset-black/70 via-sunset-black/20 to-transparent" />

// WRONG - No overlay
<Image src="/image.jpg" fill className="object-cover" />
```

---

## Card Padding Standards

| Card Type | Padding |
|-----------|---------|
| Standard content card | `p-5` |
| Medium card | `p-6 md:p-8` |
| Large CTA card | `p-10 md:p-16` |
| Compact card | `p-4` |

---

## Border Patterns

```tsx
// Subtle border (default)
className="border border-sunset-black/5"

// Sand border
className="border border-sunset-sand/30"

// Ring (for CTA cards)
className="ring-1 ring-sunset-black/5"

// Hover border change
className="hover:border-sunset-orange/20"
```

---

## Image Card Aspect Ratios

```tsx
// Standard (4:3)
className="aspect-[4/3]"

// Wide (16:9)
className="aspect-video"

// Square
className="aspect-square"
```

---

## Card with Corner Accent

```tsx
<div className="relative rounded-brand bg-white overflow-hidden">
  {/* Orange corner accent */}
  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-sunset-orange/20 to-transparent rounded-br-full" />

  <div className="relative z-10 p-8">
    {/* Content */}
  </div>
</div>
```

---

## Dropdown/Submenu Cards

```tsx
<div className="bg-white rounded-brand shadow-xl border border-sunset-sand/30 p-2 min-w-[220px]">
  {items.map(item => (
    <Link
      key={item}
      href={item.href}
      className={cn(
        "block px-4 py-2.5 rounded-lg",
        "font-body text-sm text-sunset-black/70",
        "hover:bg-sunset-sand/30 hover:text-sunset-orange",
        "transition-colors duration-200"
      )}
    >
      {item.name}
    </Link>
  ))}
</div>
```

---

## FORBIDDEN

- Cards without `rounded-brand`
- Gray shadows on white cards
- Image cards without gradient overlay
- Missing hover states on interactive cards
- Using arbitrary border radius values
- Cards without proper overflow handling
