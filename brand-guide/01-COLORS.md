# Colors

> The Driftawave color palette is called **"An Untamed Sunset"** - warm, bold, and adventurous.

---

## Brand Colors

| Name | Hex | CSS Variable | Tailwind Class | Usage |
|------|-----|--------------|----------------|-------|
| **Sunset Orange** | `#F06025` | `--sunset-orange` | `sunset-orange` | Primary brand color, CTAs, accents |
| **Sunset Rust** | `#C24A2F` | `--sunset-rust` | `sunset-rust` | Hover states, secondary accent |
| **Sunset Gold** | `#FFB122` | `--sunset-gold` | `sunset-gold` | Highlights, decorative |
| **Sunset Sand** | `#FDCD82` | `--sunset-sand` | `sunset-sand` | Borders, backgrounds |
| **Sunset Cream** | `#FFF8F0` | `--sunset-cream` | `bg-cream` | Section backgrounds |
| **Sunset Black** | `#000000` | `--sunset-black` | `sunset-black` | Text, dark backgrounds |

---

## MANDATORY Rules

### Rule 1: Primary Actions = Sunset Orange
All primary buttons and CTAs MUST use `sunset-orange`.

```tsx
// CORRECT
<button className="bg-sunset-orange hover:bg-sunset-rust">
  Start Planning
</button>

// WRONG - Never use other oranges
<button className="bg-orange-500">Start Planning</button>
<button className="bg-amber-600">Start Planning</button>
```

### Rule 2: Text Hierarchy
```tsx
// Primary headings - Black
className="text-sunset-black"

// Body text - Muted black (60% opacity)
className="text-sunset-black/60"

// Secondary/Subtle text
className="text-sunset-black/40"

// Accent text (categories, labels)
className="text-sunset-orange"
```

### Rule 3: Background Progression
Sections should flow with warm backgrounds:

```tsx
// White section
className="bg-white"

// Warm gradient section (use for content sections)
className="section-warm"

// Sand/Cream section (use for CTAs, highlights)
className="section-sand"

// Cream solid
className="bg-cream"  // or bg-[#FFF8F0]
```

### Rule 4: Border Colors
```tsx
// Default borders
className="border-sunset-sand/30"

// Hover borders
className="hover:border-sunset-orange/20"

// Input borders
className="border-input"  // Uses --input variable
```

---

## Examples from Homepage

### Header Navigation Link
```tsx
<span className="font-body text-sm text-sunset-black/70 group-hover:text-sunset-orange transition-colors duration-200">
  {item.name}
</span>
```

### Section Label (Above Heading)
```tsx
<span className="font-display text-sm uppercase tracking-widest text-sunset-orange mb-4 block">
  Explore Our Programs
</span>
```

### Card Description Text
```tsx
<p className="font-body font-light text-sm text-sunset-black/60 leading-relaxed">
  {description}
</p>
```

### Footer Links
```tsx
<Link className="font-body font-light text-sm text-white/60 hover:text-sunset-orange transition-colors duration-200">
  About Us
</Link>
```

---

## Color Usage Map

| Context | Background | Text | Border | Hover |
|---------|------------|------|--------|-------|
| **Header** | `white` | `sunset-black/70` | - | `sunset-orange` |
| **Hero** | image overlay | `white` | - | - |
| **Content Section** | `section-warm` | `sunset-black` | `sunset-sand/50` | `sunset-orange` |
| **CTA Section** | `section-sand` | `sunset-black` | - | - |
| **Footer** | `sunset-black` | `white/60` | `white/10` | `sunset-orange` |
| **Cards** | `white` | `sunset-black/60` | `sunset-sand/30` | lift + shadow |

---

## Shadow Colors

Brand shadows have an orange tint:

```css
/* Standard brand shadow */
--shadow-brand: 0 4px 20px -2px rgba(240, 96, 37, 0.15);

/* Button shadow */
box-shadow: 0 4px 14px -2px rgba(240, 96, 37, 0.4);

/* Hover shadow */
box-shadow: 0 6px 20px -2px rgba(194, 74, 47, 0.5);
```

```tsx
// Tailwind usage
className="shadow-lg shadow-sunset-orange/20"
className="hover:shadow-xl shadow-sunset-orange/30"
```

---

## FORBIDDEN

- Using Tailwind default colors (`orange-500`, `amber-600`, etc.)
- Using arbitrary hex values not in the palette
- Using pure gray for text (use `sunset-black` with opacity)
- Using blue, green, or other non-brand colors for accents
