# DO NOT - Anti-Patterns & Forbidden Practices

> This document lists everything you should NEVER do when building Driftawave components.

---

## Colors - DO NOT

### Never Use Tailwind Default Colors
```tsx
// WRONG
className="bg-orange-500"
className="text-gray-700"
className="border-amber-400"
className="bg-slate-100"

// CORRECT
className="bg-sunset-orange"
className="text-sunset-black/70"
className="border-sunset-sand"
className="bg-cream"
```

### Never Use Arbitrary Hex Values
```tsx
// WRONG
className="bg-[#FF6600]"
className="text-[#333333]"

// CORRECT
className="bg-sunset-orange"
className="text-sunset-black"
```

### Never Use Gray for Text
```tsx
// WRONG
className="text-gray-600"
className="text-neutral-500"

// CORRECT
className="text-sunset-black/60"
className="text-sunset-black/40"
```

### Never Use Non-Brand Accent Colors
```tsx
// WRONG
className="text-blue-500"
className="bg-green-400"
className="border-purple-300"

// CORRECT - Only use sunset palette
className="text-sunset-orange"
className="bg-sunset-gold"
```

---

## Typography - DO NOT

### Never Use font-display for Body Text
```tsx
// WRONG
<p className="font-display">Body text here</p>

// CORRECT
<p className="font-body">Body text here</p>
```

### Never Use font-body for Headings
```tsx
// WRONG
<h1 className="font-body text-4xl">Heading</h1>

// CORRECT
<h1 className="font-display text-4xl">Heading</h1>
```

### Never Use font-sans Directly
```tsx
// WRONG
<span className="font-sans">Text</span>

// CORRECT
<span className="font-body">Text</span>
```

### Never Skip tracking-tight on Large Headings
```tsx
// WRONG
<h1 className="font-display text-6xl">Title</h1>

// CORRECT
<h1 className="font-display text-6xl tracking-tight">Title</h1>
```

---

## Border Radius - DO NOT

### Never Use Generic Rounded Classes
```tsx
// WRONG
className="rounded-lg"
className="rounded-xl"
className="rounded-2xl"
className="rounded-full"  // except for circular elements

// CORRECT
className="rounded-brand"  // 32px
```

### Never Use Arbitrary Radius Values
```tsx
// WRONG
className="rounded-[20px]"
className="rounded-[16px]"

// CORRECT
className="rounded-brand"
```

---

## Spacing - DO NOT

### Never Use Small Section Padding
```tsx
// WRONG
<section className="py-8">
<section className="py-12">
<section className="py-4 md:py-8">

// CORRECT
<section className="py-24 md:py-32 lg:py-40">
```

### Never Skip Responsive Padding
```tsx
// WRONG
<section className="py-24">  // Missing responsive variants

// CORRECT
<section className="py-24 md:py-32 lg:py-40">
```

### Never Use Non-Standard Header Spacing
```tsx
// WRONG
<div className="text-center mb-8">
<div className="text-center mb-10">

// CORRECT
<div className="text-center mb-16 md:mb-20">
```

---

## Buttons - DO NOT

### Never Create Buttons Without Hover States
```tsx
// WRONG
<button className="bg-sunset-orange text-white px-8 py-4 rounded-brand">
  Click
</button>

// CORRECT
<button className={cn(
  "bg-sunset-orange hover:bg-sunset-rust",
  "shadow-lg hover:shadow-xl",
  "hover:-translate-y-0.5",
  "transition-all duration-300",
  "text-white px-8 py-4 rounded-brand"
)}>
  Click
</button>
```

### Never Use Different Padding
```tsx
// WRONG
className="px-4 py-2"
className="px-10 py-5"
className="p-3"

// CORRECT
className="px-8 py-4"      // Standard
className="px-6 py-2.5"    // Compact (header)
```

### Never Put Icon Before Text
```tsx
// WRONG
<button><ArrowRight /> Click</button>

// CORRECT
<button>Click <ArrowRight /></button>
```

---

## Cards - DO NOT

### Never Create Cards Without rounded-brand
```tsx
// WRONG
<div className="bg-white shadow-lg rounded-xl p-6">

// CORRECT
<div className="bg-white shadow-lg rounded-brand p-6">
```

### Never Use Gray Shadows
```tsx
// WRONG
className="shadow-lg"  // alone

// CORRECT
className="shadow-lg shadow-sunset-orange/20"
// or
className="shadow-brand"
```

### Never Create Image Cards Without Overlay
```tsx
// WRONG
<div className="relative">
  <Image src="/img.jpg" fill />
  <span className="absolute bottom-4 text-white">Title</span>
</div>

// CORRECT
<div className="relative">
  <Image src="/img.jpg" fill />
  <div className="absolute inset-0 bg-gradient-to-t from-sunset-black/70 via-sunset-black/20 to-transparent" />
  <span className="absolute bottom-4 text-white">Title</span>
</div>
```

---

## Images - DO NOT

### Never Use <img> Tag
```tsx
// WRONG
<img src="/image.jpg" alt="Photo" />

// CORRECT
import Image from "next/image";
<Image src="/image.jpg" alt="Description" fill />
```

### Never Skip Alt Text
```tsx
// WRONG
<Image src="/img.jpg" alt="" fill />
<Image src="/img.jpg" alt="image" fill />

// CORRECT
<Image src="/img.jpg" alt="Team building activity at sunset beach retreat" fill />
```

### Never Use Sharp Corners
```tsx
// WRONG
<Image src="/img.jpg" className="rounded-lg" />

// CORRECT
<div className="overflow-hidden rounded-brand">
  <Image src="/img.jpg" />
</div>
```

---

## Animations - DO NOT

### Never Add Hover Without Transition
```tsx
// WRONG
className="hover:bg-sunset-rust"

// CORRECT
className="hover:bg-sunset-rust transition-all duration-300"
```

### Never Use Jarring Animations
```tsx
// WRONG
className="transition-all duration-100"  // Too fast
className="animate-bounce"               // Too aggressive
className="animate-ping"                 // Distracting

// CORRECT
className="transition-all duration-300"
className="hover:-translate-y-0.5"
```

---

## Layout - DO NOT

### Never Skip Container
```tsx
// WRONG
<section className="px-4">
  <h2>Content</h2>
</section>

// CORRECT
<section>
  <div className="container mx-auto px-4">
    <h2>Content</h2>
  </div>
</section>
```

### Never Use Inconsistent Backgrounds
```tsx
// WRONG - Using random grays
<section className="bg-gray-100">
<section className="bg-slate-50">

// CORRECT - Use brand backgrounds
<section className="section-warm">
<section className="section-sand">
<section className="bg-cream">
```

---

## General - DO NOT

### Never Copy Code Without Understanding
Always read the brand guide section relevant to what you're building.

### Never Ignore Mobile
Always include responsive variants for:
- Section padding
- Font sizes
- Grid layouts
- Spacing

### Never Create New Patterns
If you need something not in this guide, ask first. Don't invent new:
- Colors
- Border radiuses
- Font combinations
- Shadow styles

### Never Use Inline Styles
```tsx
// WRONG
<div style={{ borderRadius: '32px', backgroundColor: '#F06025' }}>

// CORRECT
<div className="rounded-brand bg-sunset-orange">
```

---

## Summary Checklist

Before submitting any component:

- [ ] Using only brand colors (sunset-*)
- [ ] Using font-display for headings
- [ ] Using font-body for body text
- [ ] Using rounded-brand for all rounded elements
- [ ] Section padding is py-24 md:py-32 lg:py-40
- [ ] All hover states have transitions
- [ ] Buttons have lift + shadow + color change
- [ ] Images use Next.js Image component
- [ ] Images have rounded-brand
- [ ] Text on images has gradient overlay
- [ ] Using container for page content
- [ ] Responsive variants included
