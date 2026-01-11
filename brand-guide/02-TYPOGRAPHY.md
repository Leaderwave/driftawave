# Typography

> Driftawave uses a two-font system: **Mistica** for display/headings and **Helvetica Neue** for body text.

---

## Font Families

| Font | CSS Variable | Tailwind Class | Usage |
|------|--------------|----------------|-------|
| **Mistica** | `--font-display` | `font-display` | Headings, hero text, section titles |
| **Helvetica Neue** | `--font-body` | `font-body` | Body text, buttons, navigation, descriptions |

---

## MANDATORY Rules

### Rule 1: Headings MUST Use Mistica
```tsx
// CORRECT
<h1 className="font-display text-4xl">Team Retreats</h1>
<h2 className="font-display text-3xl">Our Services</h2>

// WRONG
<h1 className="font-sans text-4xl">Team Retreats</h1>
<h1 className="font-body text-4xl">Team Retreats</h1>
```

### Rule 2: Body Text MUST Use Helvetica Neue
```tsx
// CORRECT
<p className="font-body font-light">Description text here</p>
<button className="font-body font-bold">Click Me</button>

// WRONG
<p className="font-display">Description text here</p>
```

### Rule 3: Always Add tracking-tight to Headings
```tsx
// CORRECT
<h1 className="font-display text-5xl tracking-tight">Title</h1>

// WRONG - Missing tracking
<h1 className="font-display text-5xl">Title</h1>
```

---

## Type Scale

### Heading Sizes (Responsive)

| Element | Mobile | Tablet | Desktop | Class |
|---------|--------|--------|---------|-------|
| **Hero H1** | 36px | 48px-60px | 72px-96px | `text-4xl md:text-6xl lg:text-7xl xl:text-8xl` |
| **Section H2** | 30px | 36px-48px | 60px | `text-3xl md:text-4xl lg:text-5xl xl:text-6xl` |
| **Card H3** | 20px | 24px | 24px | `text-xl xl:text-2xl` |
| **Small Heading** | 18px | 18px | 18px | `text-lg` |

### Body Text Sizes

| Element | Size | Class |
|---------|------|-------|
| **Large body** | 18px-20px | `text-lg md:text-xl` |
| **Regular body** | 16px | `text-base` |
| **Small body** | 14px | `text-sm` |
| **Caption** | 12px | `text-xs` |

---

## Heading Patterns

### Hero Headline
```tsx
<h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-8 max-w-5xl leading-[1.1] drop-shadow-lg">
  Team Retreats, Workations & EPIC Offsites
</h1>
```

### Section Headline
```tsx
<h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-sunset-black tracking-tight">
  Team Retreats
</h2>
```

### Section Label (Above Headline)
```tsx
<span className="font-display text-sm uppercase tracking-widest text-sunset-orange mb-4 block">
  Explore Our Programs
</span>
```

### Card Title
```tsx
<span className="font-display text-xl xl:text-2xl text-sunset-black group-hover:text-sunset-orange transition-colors duration-300">
  {retreat.name}
</span>
```

### Footer Section Title
```tsx
<h4 className="font-display text-lg text-white mb-6 relative inline-block">
  Company
  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-sunset-orange" />
</h4>
```

---

## Body Text Patterns

### Subheadline (Hero)
```tsx
<p className="font-body font-medium text-lg md:text-xl lg:text-2xl text-sunset-black max-w-2xl">
  Turnkey travel experiences for remote teams.
</p>
```

### Card Description
```tsx
<p className="font-body font-light text-sm text-sunset-black/60 leading-relaxed">
  {description}
</p>
```

### Navigation Link
```tsx
<span className="font-body text-sm text-sunset-black/70 group-hover:text-sunset-orange">
  Team Retreats
</span>
```

### Category Label
```tsx
<span className="font-display text-sm text-sunset-orange uppercase tracking-wider block mb-2">
  LEADERSHIP
</span>
```

---

## Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| **Light** | 300 | Body text, descriptions |
| **Regular** | 400 | Default body |
| **Medium** | 500 | Buttons, navigation |
| **Bold** | 700 | CTA buttons, emphasis |

```tsx
// Light body text
className="font-body font-light"

// Medium weight buttons
className="font-body font-medium"

// Bold CTA
className="font-body font-bold"
```

---

## Line Heights

| Context | Value | Class |
|---------|-------|-------|
| **Headings** | 1.0-1.1 | `leading-none` or `leading-[1.1]` |
| **Body text** | 1.6-1.7 | `leading-relaxed` |
| **Tight text** | 1.25 | `leading-tight` |

---

## FORBIDDEN

- Using `font-sans` for headings
- Using `font-display` for body/paragraph text
- Missing `tracking-tight` on large headings
- Using font sizes outside the defined scale
- Using font weights other than 300, 400, 500, 700
