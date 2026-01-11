# Sections

> Sections are the building blocks of pages. They follow a strict structure and background progression.

---

## Section Structure

Every section follows this pattern:

```tsx
<section className="relative py-24 md:py-32 lg:py-40 [BACKGROUND_CLASS]">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-16 md:mb-20">
      <span className="font-display text-sm uppercase tracking-widest text-sunset-orange mb-4 block">
        Section Label
      </span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-black tracking-tight">
        Section Title
      </h2>
    </div>

    {/* Section Content */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Content */}
    </div>

    {/* Section CTA (optional) */}
    <div className="text-center mt-16 md:mt-20">
      <Link href="/action" className="btn-brand">
        Call to Action
      </Link>
    </div>
  </div>
</section>
```

---

## Background Classes

### 1. White (Default)
```tsx
className="bg-white"
// or no background class (inherits white)
```

### 2. Warm Gradient
Subtle gradient from white to cream. Use for main content sections.
```tsx
className="section-warm"
```

CSS:
```css
.section-warm {
  position: relative;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFF8F0 50%, #FFFBF5 100%);
}
```

### 3. Sand Gradient
Warmer background for CTA sections and highlights.
```tsx
className="section-sand"
```

CSS:
```css
.section-sand {
  position: relative;
  background: linear-gradient(180deg, #FFF8F0 0%, rgba(253, 205, 130, 0.15) 50%, #FFF8F0 100%);
}
```

### 4. Solid Cream
```tsx
className="bg-cream"  // or className="bg-[#FFF8F0]"
```

### 5. Dark (Footer)
```tsx
className="bg-sunset-black text-white"
```

---

## MANDATORY Rules

### Rule 1: Standard Section Padding
```tsx
// CORRECT
className="py-24 md:py-32 lg:py-40"

// WRONG
className="py-8"
className="py-12 md:py-16"
```

**Exception**: Compact sections can use `py-12 md:py-16`

### Rule 2: Always Use Container
```tsx
// CORRECT
<section className="...">
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</section>

// WRONG - No container
<section className="px-4">
  {/* Content */}
</section>
```

### Rule 3: Header Spacing
```tsx
// CORRECT - Section header
<div className="text-center mb-16 md:mb-20">
  {/* Label + Title */}
</div>

// WRONG
<div className="text-center mb-8">
```

### Rule 4: CTA Spacing
```tsx
// CORRECT - Section CTA
<div className="text-center mt-16 md:mt-20">
  <Link className="btn-brand">Action</Link>
</div>

// WRONG
<div className="mt-8">
```

---

## Section Header Pattern

### Standard (Centered)
```tsx
<div className="text-center mb-16 md:mb-20">
  <span className="font-display text-sm uppercase tracking-widest text-sunset-orange mb-4 block">
    Explore Our Programs
  </span>
  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-black tracking-tight">
    Team Retreats
  </h2>
</div>
```

### Left-Aligned (For asymmetric layouts)
```tsx
<div className="mb-12 md:mb-16">
  <span className="font-display text-sm uppercase tracking-widest text-sunset-orange mb-4 block">
    Section Label
  </span>
  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-sunset-black tracking-tight">
    Section Title
  </h2>
</div>
```

---

## Background Progression

Pages should flow with alternating backgrounds:

```
1. Hero Section      → Image with overlay
2. Content Section   → section-warm (white to cream)
3. Feature Section   → bg-white
4. CTA Section       → section-sand (warm highlight)
5. Another Content   → section-warm
6. Final CTA         → section-sand
7. Footer           → bg-sunset-black
```

---

## Hero Section Pattern

```tsx
<section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden -mt-24 md:-mt-28">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image src="/hero.jpg" alt="" fill className="object-cover" priority />
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-sunset-black/50 via-sunset-black/30 to-white/90" />
  </div>

  {/* Content */}
  <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-24 md:pt-28 pb-32">
    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-8 max-w-5xl leading-[1.1] drop-shadow-lg">
      Hero Headline
    </h1>
    {/* ... */}
  </div>

  {/* Bottom fade to white */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
</section>
```

---

## Section with Texture

Add subtle noise texture for depth:

```tsx
<section className="relative section-warm">
  {/* Texture overlay */}
  <div className="absolute inset-0 texture-noise pointer-events-none" />

  <div className="container mx-auto px-4 relative z-10">
    {/* Content */}
  </div>
</section>
```

---

## FORBIDDEN

- Sections without container
- Section padding smaller than `py-24` on base
- Skipping responsive padding variants
- Using gray backgrounds instead of warm/sand
- Header margins smaller than `mb-16`
- Random background colors not in the system
