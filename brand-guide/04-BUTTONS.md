# Buttons

> Buttons are the primary call-to-action elements. They MUST be consistent across the entire site.

---

## Button Types

### 1. Primary Button (Solid Orange)
The main CTA button. Use for primary actions.

```tsx
<Link
  href="/action"
  className={cn(
    "inline-flex items-center gap-2 px-8 py-4",
    "bg-sunset-orange hover:bg-sunset-rust",
    "text-white font-body font-bold text-lg",
    "rounded-brand",
    "shadow-lg shadow-sunset-orange/20",
    "hover:shadow-xl hover:-translate-y-0.5",
    "transition-all duration-300"
  )}
>
  Start Planning
  <ChevronRight className="w-5 h-5" />
</Link>
```

### 2. Secondary Button (Outline)
For secondary actions alongside primary buttons.

```tsx
<Link
  href="/action"
  className={cn(
    "inline-flex items-center justify-center px-8 py-4",
    "rounded-brand border-2 border-white/80",
    "text-white font-body font-bold text-lg",
    "backdrop-blur-sm bg-white/10",
    "hover:bg-white hover:text-sunset-black",
    "transition-all duration-300"
  )}
>
  Explore Retreats
</Link>
```

### 3. Header CTA (Compact)
Smaller button for the navigation bar.

```tsx
<Link
  href="/contact"
  className={cn(
    "inline-flex items-center px-6 py-2.5 rounded-brand",
    "bg-sunset-orange hover:bg-sunset-rust",
    "text-white font-body font-medium text-sm",
    "transition-all duration-300",
    "shadow-brand hover:shadow-xl hover:-translate-y-0.5"
  )}
>
  LET'S CONNECT
</Link>
```

---

## MANDATORY Rules

### Rule 1: Always Use rounded-brand
```tsx
// CORRECT
className="rounded-brand"  // 32px radius

// WRONG
className="rounded-lg"
className="rounded-xl"
className="rounded-full"
```

### Rule 2: Always Include Hover States
Every button MUST have:
- Background color change
- Shadow change
- Lift effect (-translate-y)

```tsx
// CORRECT
className={cn(
  "bg-sunset-orange hover:bg-sunset-rust",
  "shadow-lg hover:shadow-xl",
  "hover:-translate-y-0.5",
  "transition-all duration-300"
)}

// WRONG - Missing hover effects
className="bg-sunset-orange"
```

### Rule 3: Always Use font-body
```tsx
// CORRECT
className="font-body font-bold"

// WRONG
className="font-display"
className="font-sans"
```

### Rule 4: Standard Padding
```tsx
// Standard buttons
className="px-8 py-4"

// Compact buttons (header)
className="px-6 py-2.5"

// WRONG - Non-standard padding
className="px-4 py-2"
className="px-10 py-5"
```

---

## Button Sizes

| Size | Padding | Font | Usage |
|------|---------|------|-------|
| **Standard** | `px-8 py-4` | `text-lg font-bold` | Primary CTAs |
| **Compact** | `px-6 py-2.5` | `text-sm font-medium` | Header, inline |
| **Mobile Block** | `px-6 py-3` | `text-base font-medium` | Full-width mobile |

---

## Button with Icon

Icons go AFTER the text, aligned right:

```tsx
<button className="inline-flex items-center gap-2">
  Explore All Retreats
  <ChevronRight className="w-5 h-5" />
</button>

// Or with ArrowRight
<button className="inline-flex items-center gap-2">
  Get in Touch
  <ArrowRight className="w-5 h-5" />
</button>
```

---

## Shadow Patterns

```tsx
// Standard button shadow
className="shadow-lg shadow-sunset-orange/20"

// Hover shadow (more intense)
className="hover:shadow-xl"

// Or explicit hover shadow
className="hover:shadow-xl shadow-sunset-orange/30"
```

---

## Transition

All buttons MUST use:
```tsx
className="transition-all duration-300"
```

---

## Full Example: Section CTA

```tsx
<div className="text-center mt-16 md:mt-20">
  <Link
    href="/team-retreat"
    className={cn(
      "inline-flex items-center gap-2 px-8 py-4",
      "bg-sunset-orange text-white font-body font-bold text-lg",
      "rounded-brand shadow-lg shadow-sunset-orange/20",
      "hover:bg-sunset-rust hover:shadow-xl hover:-translate-y-0.5",
      "transition-all duration-300"
    )}
  >
    Explore All Retreats
    <ChevronRight className="w-5 h-5" />
  </Link>
</div>
```

---

## CSS Utility Classes

Pre-defined button classes in globals.css:

```tsx
// Use these when appropriate
className="btn-brand"          // Primary solid
className="btn-brand-outline"  // Outline variant
```

---

## FORBIDDEN

- Buttons without `rounded-brand`
- Buttons without hover states
- Using font-display on buttons
- Different padding values than specified
- Buttons without shadow
- Icons before text (always after)
- Using generic Tailwind colors
