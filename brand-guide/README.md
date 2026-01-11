# Driftawave Brand Design Guide

> **"An Untamed Sunset"** - Warm Travel Editorial Design System

This guide contains the **mandatory rules** for designing and building components for the Driftawave website. Every developer and designer MUST follow these guidelines to maintain brand consistency.

---

## Quick Reference

| Element | Value |
|---------|-------|
| **Primary Color** | `#F06025` (Sunset Orange) |
| **Border Radius** | `32px` (brand standard) |
| **Display Font** | Mistica |
| **Body Font** | Helvetica Neue |
| **Section Padding** | `py-24 md:py-32 lg:py-40` |

---

## Guide Contents

1. **[Colors](./01-COLORS.md)** - Color palette, usage rules, and examples
2. **[Typography](./02-TYPOGRAPHY.md)** - Fonts, sizes, and text hierarchy
3. **[Spacing & Layout](./03-SPACING.md)** - Spacing scale, containers, grids
4. **[Buttons](./04-BUTTONS.md)** - Button styles and states
5. **[Cards](./05-CARDS.md)** - Card patterns and treatments
6. **[Sections](./06-SECTIONS.md)** - Section backgrounds and structure
7. **[Images](./07-IMAGES.md)** - Image treatments and overlays
8. **[Animations](./08-ANIMATIONS.md)** - Motion and transitions
9. **[DO NOT](./09-DO-NOT.md)** - Anti-patterns and forbidden practices

---

## The Golden Rules

### 1. Always Use Brand Border Radius
```tsx
// CORRECT
className="rounded-brand"  // 32px on desktop, 24px on mobile

// WRONG
className="rounded-lg"     // Generic radius
className="rounded-xl"     // Not brand standard
```

### 2. Always Use Brand Colors
```tsx
// CORRECT
className="bg-sunset-orange"
className="text-sunset-black"
className="border-sunset-sand"

// WRONG
className="bg-orange-500"  // Tailwind default
className="bg-[#FF6B00]"   // Random hex
```

### 3. Always Use Brand Fonts
```tsx
// CORRECT - Headings
className="font-display"   // Mistica

// CORRECT - Body text
className="font-body"      // Helvetica Neue

// WRONG
className="font-sans"      // Only as fallback
```

### 4. Always Use Consistent Section Spacing
```tsx
// CORRECT
className="py-24 md:py-32 lg:py-40"

// WRONG
className="py-10"          // Too small
className="py-8 md:py-12"  // Inconsistent
```

---

## File Organization

```
src/
├── app/
│   └── globals.css          # Brand tokens & utility classes
├── components/
│   ├── ui/                  # Base shadcn components
│   ├── shared/              # Header, Footer, PostcardCTA
│   └── homepage/            # Homepage sections
└── lib/
    └── utils.ts             # cn() helper
```

---

## Before You Code

1. Read the relevant section of this guide
2. Check existing components for patterns
3. Use the `cn()` utility for conditional classes
4. Test on mobile (border radius changes to 24px)

---

*Last updated: January 2026*
