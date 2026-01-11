# Animations

> Animations in Driftawave are subtle, smooth, and purposeful. They enhance UX without being distracting.

---

## Transition Standards

### Standard Transition
Use for most interactive elements:
```tsx
className="transition-all duration-300"
```

### Color-Only Transition
For text hover effects:
```tsx
className="transition-colors duration-200"
```

### Transform Transition
For position/scale changes:
```tsx
className="transition-transform duration-500"
```

### Slow Transition
For large elements like image zooms:
```tsx
className="transition-all duration-500"
```

---

## Hover Effects

### 1. Lift Effect (Cards, Buttons)
```tsx
className="hover:-translate-y-0.5 transition-all duration-300"
// or for larger lift
className="hover:-translate-y-1 transition-all duration-300"
```

### 2. Color Change (Links, Text)
```tsx
className="text-sunset-black/70 hover:text-sunset-orange transition-colors duration-200"
```

### 3. Background Change
```tsx
className="bg-sunset-orange hover:bg-sunset-rust transition-all duration-300"
```

### 4. Shadow Increase
```tsx
className="shadow-lg hover:shadow-xl transition-all duration-300"
```

### 5. Image Zoom
```tsx
className="group"
// On image:
className="transition-transform duration-500 group-hover:scale-105"
```

### 6. Underline Reveal
```tsx
<span className="absolute bottom-0 left-4 right-4 h-0.5 bg-sunset-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
```

---

## Scroll Animations

### Fade Up (Enter Animation)
```tsx
className="animate-fade-up"
```

CSS:
```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.6s ease-out forwards;
  opacity: 0;
}
```

### Fade In
```tsx
className="animate-fade-in"
```

### Scale In
```tsx
className="animate-scale-in"
```

---

## Staggered Animations

Use delay classes for sequential animations:

```tsx
<div className="animate-fade-up delay-100">Item 1</div>
<div className="animate-fade-up delay-200">Item 2</div>
<div className="animate-fade-up delay-300">Item 3</div>
```

Available delays:
```tsx
className="delay-100"  // 100ms
className="delay-200"  // 200ms
className="delay-300"  // 300ms
className="delay-400"  // 400ms
className="delay-500"  // 500ms
className="delay-600"  // 600ms
```

---

## Infinite Animations

### Infinite Scroll (Carousels)
```tsx
className="animate-scroll-left"   // Left direction
className="animate-scroll-right"  // Right direction
```

Both pause on hover:
```css
.animate-scroll-left:hover,
.animate-scroll-right:hover {
  animation-play-state: paused;
}
```

### Float Effect
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

### Pulse Glow
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(240, 96, 37, 0.3); }
  50% { box-shadow: 0 0 40px rgba(240, 96, 37, 0.5); }
}
```

---

## Complete Hover Example

### Button
```tsx
<button className={cn(
  "bg-sunset-orange hover:bg-sunset-rust",
  "shadow-lg hover:shadow-xl",
  "hover:-translate-y-0.5",
  "transition-all duration-300"
)}>
  Click Me
</button>
```

### Image Card
```tsx
<div className="group relative overflow-hidden rounded-brand shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
  <Image
    src="/image.jpg"
    alt=""
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-sunset-black/70 via-sunset-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
</div>
```

### Navigation Link
```tsx
<Link className="relative group">
  <span className="text-sunset-black/70 group-hover:text-sunset-orange transition-colors duration-200">
    Link Text
  </span>
  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sunset-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
</Link>
```

---

## Timing Functions

| Easing | Usage |
|--------|-------|
| `ease-out` | Enter animations |
| `ease-in-out` | Toggle animations |
| `cubic-bezier(0.4, 0, 0.2, 1)` | Custom smooth (card hovers) |
| `linear` | Infinite animations |

---

## MANDATORY Rules

### Rule 1: Always Use Transitions on Interactive Elements
```tsx
// CORRECT
className="hover:bg-sunset-rust transition-all duration-300"

// WRONG - Missing transition
className="hover:bg-sunset-rust"
```

### Rule 2: Combine Hover Effects
Buttons and cards should always combine:
- Color change
- Shadow change
- Lift effect

### Rule 3: Use Group for Multi-Element Hovers
```tsx
<div className="group">
  <div className="group-hover:scale-105">Image</div>
  <div className="group-hover:opacity-80">Overlay</div>
</div>
```

---

## FORBIDDEN

- Hover effects without transitions
- Animation durations over 500ms (except scroll)
- Jarring or aggressive animations
- Animations that block user interaction
- Using `animation-delay` without stagger purpose
- Bounce or elastic easings
