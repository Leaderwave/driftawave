# Spacing & Layout

> Consistent spacing creates visual rhythm. Driftawave uses generous whitespace for a premium editorial feel.

---

## Container

Always use the centered container with padding:

```tsx
<div className="container mx-auto px-4">
  {/* Content */}
</div>
```

Max width is `1400px` (defined in tailwind.config.ts).

---

## MANDATORY Rules

### Rule 1: Section Padding
All major sections MUST use this vertical padding:

```tsx
// CORRECT - Standard section padding
className="py-24 md:py-32 lg:py-40"

// WRONG - Too tight
className="py-8 md:py-12"
className="py-16"
```

**Compact variant** (for smaller sections):
```tsx
className="py-12 md:py-16"
```

### Rule 2: Section Header Spacing
```tsx
// CORRECT - Space between header and content
<div className="text-center mb-16 md:mb-20">
  <h2>Section Title</h2>
</div>

// WRONG
<div className="text-center mb-8">
  <h2>Section Title</h2>
</div>
```

### Rule 3: CTA Spacing
CTAs at the bottom of sections:
```tsx
<div className="text-center mt-16 md:mt-20">
  <Link className="btn-brand">Explore All</Link>
</div>
```

---

## Spacing Scale

Use Tailwind's spacing scale. Key values for Driftawave:

| Size | Value | Common Usage |
|------|-------|--------------|
| `4` | 16px | Small gaps, padding |
| `5` | 20px | Card padding, gaps |
| `6` | 24px | Medium gaps |
| `8` | 32px | Section gaps |
| `10` | 40px | Large padding |
| `12` | 48px | Section margins |
| `16` | 64px | Major section breaks |
| `20` | 80px | Section padding (md) |
| `24` | 96px | Section padding (base) |
| `32` | 128px | Section padding (lg) |
| `40` | 160px | Section padding (xl) |

---

## Grid Patterns

### 3-Column Desktop Grid
```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
  {/* Columns */}
</div>
```

### 5-Column Footer Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
  {/* Columns */}
</div>
```

### Content + Image Layout
```tsx
<div className="flex flex-col md:flex-row gap-8 md:gap-12">
  {/* Content */}
  {/* Image */}
</div>
```

---

## Component Spacing Examples

### Card Internal Padding
```tsx
// Standard card
className="p-5"

// Large card
className="p-6 md:p-10"

// CTA card (PostcardCTA)
className="p-10 md:p-16"
```

### Button Padding
```tsx
// Standard button
className="px-8 py-4"

// Compact button (header)
className="px-6 py-2.5"
```

### List Spacing
```tsx
// Footer links
<ul className="space-y-3">
  {links.map(link => <li key={link}>{link}</li>)}
</ul>

// Card list
<div className="flex flex-col gap-5">
  {cards.map(card => <Card key={card} />)}
</div>
```

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1400px | Max container |

### Common Responsive Patterns
```tsx
// Padding increase
className="py-24 md:py-32 lg:py-40"

// Font size increase
className="text-4xl md:text-5xl lg:text-6xl"

// Grid column change
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Hide on mobile
className="hidden lg:flex"

// Show only on mobile
className="lg:hidden"
```

---

## Max Widths

| Content Type | Max Width | Example |
|--------------|-----------|---------|
| Hero headline | `max-w-5xl` | `max-w-5xl` |
| Subheadline | `max-w-2xl` | `max-w-2xl` |
| Body paragraph | `max-w-3xl` | `max-w-3xl` |
| Full section | container | - |

---

## Aspect Ratios

```tsx
// Image cards
className="aspect-[4/3]"

// Hero images
className="aspect-video"  // 16:9

// Square thumbnails
className="aspect-square"
```

---

## FORBIDDEN

- Using arbitrary spacing values like `py-7` or `mb-9`
- Sections with padding less than `py-16`
- Missing responsive variants for major layout properties
- Using `gap-2` or `gap-3` between major content blocks
- Breaking the container pattern mid-page
