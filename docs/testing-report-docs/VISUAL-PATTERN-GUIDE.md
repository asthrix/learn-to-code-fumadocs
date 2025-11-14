# 🎨 Visual Pattern Guide - Before & After Examples

## Purpose
This guide shows **real examples** from your codebase comparing current implementations with recommended patterns.

**🖤 Current Theme:** Black Theme - High contrast with vibrant purple accents for a professional, modern look.

---

## 🟢 Perfect Examples (Reference These!)

### Example 1: CourseModulesSection - Theme-Perfect Button

**What Makes It Great:**
```tsx
// From CourseModulesSection.tsx line 199-205
className={cn(
  "cursor-pointer select-none px-3 py-2 font-medium transition",
  isActive
    ? "bg-primary/15 text-primary dark:text-secondary 
       shadow-[0_18px_35px_-28px_hsl(var(--color-primary)/0.45)] 
       hover:text-primary dark:hover:text-secondary"
    : "text-muted-foreground hover:bg-muted/40 hover:text-secondary"
)}
```

**Why It's Perfect:**
- ✅ Uses semantic variables (`bg-primary/15`, `text-muted-foreground`)
- ✅ Proper dark mode ordering: `text-primary dark:text-secondary`
- ✅ Theme-aware shadow: `hsl(var(--color-primary)/0.45)`
- ✅ Hover states for both light and dark
- ✅ Consistent opacity patterns (15% for subtle backgrounds)

---

### Example 2: CourseDetailHeroSection - Perfect Gradient

**What Makes It Great:**
```tsx
// From CourseDetailHeroSection.tsx line 38-42
<span className='relative bg-gradient-to-l 
                from-primary from-0% 
                via-50% via-primary/70  
                to-secondary to-80% 
                bg-clip-text text-transparent 
                drop-shadow-[0_0_22px_hsl(var(--color-primary)/0.95)]'>
  {hero.title}
</span>
```

**Why It's Perfect:**
- ✅ Gradient uses semantic colors (`primary`, `secondary`)
- ✅ Opacity control with `/70` for middle color
- ✅ Text becomes transparent to show gradient
- ✅ Shadow uses CSS variable: `hsl(var(--color-primary)/0.95)`
- ✅ Works beautifully in both light and dark modes

---

### Example 3: HeroSection - Complex Background Pattern

**What Makes It Great:**
```tsx
// From HeroSection.tsx lines 8-14
<div className='absolute inset-0'
  style={{
    backgroundImage: `radial-gradient(
      circle at 20% 50%, 
      hsl(var(--color-foreground) / 0.1) 0%, 
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%, 
      hsl(var(--color-foreground) / 0.05) 0%, 
      transparent 50%
    )`
  }}
/>
```

**Why It's Perfect:**
- ✅ Complex radial gradients adapt to theme
- ✅ Uses `hsl(var(--color-foreground) / opacity)` pattern
- ✅ Different opacity levels for depth (0.1, 0.05)
- ✅ Creates atmospheric effect that works in both modes

---

### Example 4: ModernHeroSection - Perfect Stat Card

**What Makes It Great:**
```tsx
// From ModernHeroSection.tsx lines 71-82
<div className='rounded-2xl border border-border 
              bg-card/90 p-4 text-center 
              shadow-[0_8px_30px_hsl(var(--color-primary)/0.1)] 
              backdrop-blur 
              transition hover:-translate-y-2 
              hover:border-border/50'>
  <dt className='text-xs uppercase tracking-wide text-muted-foreground'>
    {stat.label}
  </dt>
  <dd className='mt-2 text-2xl font-semibold text-foreground'>
    {stat.value}
  </dd>
</div>
```

**Why It's Perfect:**
- ✅ All colors use semantic variables
- ✅ Semi-transparent card: `bg-card/90`
- ✅ Theme-aware shadow
- ✅ Smooth hover animation
- ✅ Proper text hierarchy with color variables

---

## 🔴 Examples That Need Fixing

### Fix #1: Banner Rainbow Colors

**❌ BEFORE (Current - Theme-Unaware):**
```tsx
// From banner.tsx lines 12-16
rainbowColors = [
   "rgba(0,149,255,0.56)",      // Hardcoded blue
   "rgba(231,77,255,0.77)",     // Hardcoded purple
   "rgba(255,0,0,0.73)",        // Hardcoded red
   "rgba(131,255,166,0.66)",    // Hardcoded green
]
```

**Problem:**
- ❌ Fixed colors don't adapt to Ocean theme
- ❌ Won't look right in dark mode
- ❌ Doesn't match your color palette

**✅ AFTER (Recommended - Theme-Aware):**
```tsx
rainbowColors = [
   "hsl(var(--color-primary) / 0.56)",      // Ocean blue
   "hsl(var(--color-accent) / 0.77)",       // Ocean accent
   "hsl(var(--color-destructive) / 0.73)",  // Ocean red
   "hsl(var(--color-chart-2) / 0.66)",      // Ocean green
]
```

**Benefits:**
- ✅ Matches Black theme palette (purple focus)
- ✅ Adapts to light/dark mode
- ✅ Consistent with rest of site

**Visual Impact:**
```
Light Mode:
  Old: Generic bright blue/purple/red (doesn't match theme)
  New: Vibrant purple/dark purple/orange-red (cohesive Black theme)

Dark Mode:
  Old: Same bright colors (jarring against pure black)
  New: Bright purple/dark purple variations (harmonious)
```

**Color Mapping to Black Theme:**
```tsx
"hsl(var(--color-primary) / 0.56)"      // Vibrant purple (main accent)
"hsl(var(--color-accent) / 0.77)"       // Light/dark purple (secondary accent)
"hsl(var(--color-destructive) / 0.73)"  // Orange-red (alerts)
"hsl(var(--color-chart-2) / 0.66)"      // Teal green (data viz)
```

---

### Fix #2: Files Component Variables

**❌ BEFORE (Current - Mixed Naming):**
```tsx
// From files.tsx line 12
<div className='not-prose rounded-md border bg-fd-card p-2'>

// From files.tsx line 33
hover:bg-fd-accent hover:text-fd-accent-foreground
```

**Problem:**
- ❌ Uses Fumadocs-specific prefixes (`fd-`)
- ❌ Inconsistent with rest of codebase
- ❌ Makes theme changes harder

**✅ AFTER (Recommended - Consistent):**
```tsx
// Line 12
<div className='not-prose rounded-md border bg-card p-2'>

// Line 33
hover:bg-accent hover:text-accent-foreground
```

**Benefits:**
- ✅ Consistent with global CSS variables
- ✅ Easier to maintain
- ✅ Clear semantic meaning

---

### Fix #3: Accordion Component Variables

**❌ BEFORE (Current - Mixed Prefixes):**
```tsx
// Line 55-56
divide-fd-border bg-fd-card

// Line 65
text-fd-card-foreground

// Line 69
text-fd-muted-foreground

// Line 80
has-focus-visible:bg-fd-accent
```

**Problem:**
- ❌ Mixes Fumadocs and standard naming
- ❌ Harder to search/replace
- ❌ Not aligned with your theme system

**✅ AFTER (Recommended - Standardized):**
```tsx
// Line 55-56
divide-border bg-card

// Line 65
text-card-foreground

// Line 69
text-muted-foreground

// Line 80
has-focus-visible:bg-accent
```

**Benefits:**
- ✅ Matches your global.css variables
- ✅ Cleaner, more maintainable
- ✅ Future-proof for theme changes

---

## 🎨 Pattern Comparison Matrix

### Backgrounds

| Pattern | ❌ Avoid | ✅ Use Instead |
|---------|----------|---------------|
| **Solid** | `bg-white` | `bg-background` |
| **Card** | `bg-slate-50` | `bg-card` |
| **Subtle** | `bg-gray-100` | `bg-muted` |
| **Tinted** | `bg-blue-50` | `bg-primary/10` |
| **Semi-transparent** | `bg-white/80` | `bg-card/80` |

### Text Colors

| Pattern | ❌ Avoid | ✅ Use Instead |
|---------|----------|---------------|
| **Primary** | `text-gray-900` | `text-foreground` |
| **Secondary** | `text-gray-600` | `text-muted-foreground` |
| **Accent** | `text-blue-600` | `text-primary` |
| **On Cards** | `text-slate-900` | `text-card-foreground` |
| **Light/Dark** | `text-white` | `text-foreground dark:text-foreground` |

### Borders

| Pattern | ❌ Avoid | ✅ Use Instead |
|---------|----------|---------------|
| **Standard** | `border-gray-200` | `border-border` |
| **Tinted** | `border-blue-300` | `border-primary/30` |
| **Hover** | `hover:border-gray-300` | `hover:border-primary/40` |

### Shadows (Most Important!)

| Pattern | ❌ Avoid | ✅ Use Instead |
|---------|----------|---------------|
| **Card shadow** | `shadow-[0_10px_30px_rgba(0,0,0,0.1)]` | `shadow-[0_10px_30px_hsl(var(--color-foreground)/0.1)]` |
| **Primary glow** | `shadow-[0_0_20px_rgba(99,102,241,0.3)]` | `shadow-[0_0_20px_hsl(var(--color-primary)/0.3)]` |
| **Accent shadow** | `shadow-[0_20px_40px_rgba(56,189,248,0.4)]` | `shadow-[0_20px_40px_hsl(var(--color-accent)/0.4)]` |

---

## 📐 Layout Patterns

### Pattern 1: Card with Hover Effect

**✅ Perfect Example (from CoursePricingSection):**
```tsx
<div className='group relative flex h-full flex-col overflow-hidden 
              rounded-3xl border border-border 
              bg-card/95 p-6 
              shadow-[0_30px_70px_-35px_hsl(var(--color-primary)/0.34)] 
              transition-transform duration-500 
              hover:-translate-y-2 
              hover:shadow-[0_40px_85px_-42px_hsl(var(--color-primary)/0.45)]'>
  {/* Content */}
</div>
```

**What Makes It Great:**
- Semantic variables throughout
- Theme-aware shadows
- Smooth hover animation
- Group hover support
- Proper border/background combo

---

### Pattern 2: Button with Focus States

**✅ Perfect Example (from CourseDetailHeroSection):**
```tsx
<Link className='group inline-flex items-center gap-2 
                rounded-full 
                bg-primary px-6 py-3 
                text-sm font-semibold text-primary-foreground 
                shadow-[0_20px_45px_-22px_hsl(var(--color-primary)/0.65)] 
                transition duration-300 
                hover:-translate-y-1 hover:bg-primary/90 
                focus-visible:ring-2 focus-visible:ring-primary/60 
                focus-visible:ring-offset-2 focus-visible:ring-offset-background'>
  {label}
  <ArrowUpRight className='h-4 w-4 transition-transform duration-300 
                          group-hover:-translate-y-1 group-hover:translate-x-1' />
</Link>
```

**What Makes It Great:**
- Complete focus states for accessibility
- Hover states for both button and icon
- Theme-aware shadow
- Group animation for icon
- Proper semantic colors

---

### Pattern 3: Badge Component

**✅ Perfect Example (from badge.tsx):**
```tsx
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-muted text-muted-foreground",
        primary: "border-transparent bg-primary/10 text-primary",
        success: "border-transparent bg-primary/10 text-primary",
        danger: "border-transparent bg-destructive/10 text-destructive",
      },
    },
  }
);
```

**What Makes It Great:**
- All variants use semantic variables
- Consistent opacity (10%) for tinted backgrounds
- Proper foreground/background pairing
- Works in both themes

---

## 🔍 Common Patterns to Recognize

### ✅ Good Pattern: Semantic Variable Chain

```tsx
// Component uses semantic variables
<div className='bg-card border-border'>
  <h3 className='text-foreground'>Title</h3>
  <p className='text-muted-foreground'>Description</p>
</div>

// Result: Perfect theme adaptation
Light mode: Card is light, text is dark
Dark mode: Card is dark, text is light
```

### ❌ Bad Pattern: Hardcoded Color Chain

```tsx
// Component uses fixed Tailwind colors
<div className='bg-white border-gray-200'>
  <h3 className='text-gray-900'>Title</h3>
  <p className='text-gray-600'>Description</p>
</div>

// Result: Breaks in dark mode
Light mode: Looks good
Dark mode: White card on dark background (bad contrast)
```

---

## 🎯 Quick Decision Tree

**When styling a new component, ask:**

1. **Is it text?**
   - Primary → `text-foreground`
   - Secondary → `text-muted-foreground`
   - Accent → `text-primary` or `text-secondary`

2. **Is it a background?**
   - Page → `bg-background`
   - Card/Panel → `bg-card`
   - Subtle → `bg-muted`
   - Tinted → `bg-{color}/10-20`

3. **Is it a border?**
   - Standard → `border-border`
   - Tinted → `border-{color}/20-40`

4. **Is it a shadow?**
   - Always use: `shadow-[...hsl(var(--color-{name})/opacity)]`
   - Never use: `rgba()` colors

5. **Does it need hover?**
   - Yes → Add `hover:` variants
   - Interactive → Add `focus-visible:` states

---

## 📊 Visual Diff Examples

### Example 1: Button Shadow

**Before:**
```tsx
shadow-[0_20px_40px_rgba(99,102,241,0.4)]
```
Light mode: Blue shadow ✓  
Dark mode: Blue shadow (too bright, doesn't match theme) ✗

**After:**
```tsx
shadow-[0_20px_40px_hsl(var(--color-primary)/0.4)]
```
Light mode: Ocean blue shadow ✓  
Dark mode: Muted ocean shadow ✓

---

### Example 2: Card Background

**Before:**
```tsx
bg-white dark:bg-slate-900
```
- Two separate colors to maintain
- Doesn't match Ocean theme
- Manual dark mode variant needed

**After:**
```tsx
bg-card
```
- Single source of truth
- Matches Ocean theme perfectly
- Automatic theme switching

---

## 🚀 Copy-Paste Ready Patterns

### Pattern: Metric/Stat Card
```tsx
<div className='rounded-2xl border border-border 
              bg-card/90 p-4 text-center 
              shadow-[0_20px_45px_-25px_hsl(var(--color-primary)/0.3)] 
              backdrop-blur 
              transition hover:-translate-y-2 
              hover:border-primary/35'>
  <dt className='text-xs uppercase tracking-wide text-muted-foreground'>
    {label}
  </dt>
  <dd className='mt-2 text-2xl font-semibold text-foreground'>
    {value}
  </dd>
</div>
```

### Pattern: Primary CTA Button
```tsx
<button className='group inline-flex items-center gap-2 
                  rounded-full 
                  bg-primary px-6 py-3 
                  text-sm font-semibold text-primary-foreground 
                  shadow-[0_18px_45px_-25px_hsl(var(--color-primary)/0.55)] 
                  transition 
                  hover:-translate-y-1 hover:bg-primary/90 
                  focus-visible:ring-2 focus-visible:ring-primary/60 
                  focus-visible:ring-offset-2'>
  {label}
  <Icon className='h-4 w-4 transition-transform 
                  group-hover:translate-x-1' />
</button>
```

### Pattern: Secondary Button
```tsx
<button className='group inline-flex items-center gap-2 
                  rounded-full 
                  border border-border 
                  bg-card px-6 py-3 
                  text-sm font-semibold text-foreground 
                  transition 
                  hover:-translate-y-1 
                  hover:border-primary/40 
                  hover:bg-primary/10 
                  hover:text-primary 
                  focus-visible:ring-2 focus-visible:ring-primary/40'>
  {label}
</button>
```

### Pattern: Feature Card
```tsx
<div className='group relative overflow-hidden 
              rounded-2xl border border-border 
              bg-card/90 p-6 
              transition 
              hover:-translate-y-2 
              hover:border-primary/35 
              hover:bg-primary/10'>
  <Icon className='h-5 w-5 text-primary' />
  <h3 className='mt-3 text-base font-semibold text-foreground'>
    {title}
  </h3>
  <p className='mt-2 text-sm text-muted-foreground'>
    {description}
  </p>
  <div className='absolute -right-10 -top-10 
                h-28 w-28 rounded-full 
                bg-primary/15 
                transition group-hover:scale-125' />
</div>
```

---

## 💡 Pro Tips

1. **Opacity Consistency**
   - Use 10% for subtle tints: `bg-primary/10`
   - Use 15% for active states: `bg-primary/15`
   - Use 80-90% for semi-transparent: `bg-card/90`

2. **Shadow Intensity**
   - Light shadows: 0.1-0.2 opacity
   - Medium shadows: 0.3-0.4 opacity
   - Strong glows: 0.5-0.7 opacity

3. **Hover Translations**
   - Subtle: `-translate-y-1` (1px up)
   - Normal: `-translate-y-2` (2px up)
   - Dramatic: `-translate-y-3` (3px up)

4. **Transition Timing**
   - Quick interactions: `duration-200`
   - Normal interactions: `duration-300`
   - Slow/dramatic: `duration-500`

---

---

## 🖤 Black Theme Specific Considerations

### Color Contrast Rules

With the Black theme's pure white/black backgrounds, contrast is **critical**:

**✅ High Contrast Pairs (Use These):**
```tsx
// Light mode:
bg-background (white) + text-foreground (deep navy) → WCAG AAA ✓
bg-card (near-white) + text-primary (purple) → WCAG AA ✓
bg-primary (purple) + text-primary-foreground (white) → WCAG AAA ✓

// Dark mode:
bg-background (black) + text-foreground (off-white) → WCAG AAA ✓
bg-card (dark navy) + text-primary (bright purple) → WCAG AA ✓
bg-primary (bright purple) + text-primary-foreground (white) → WCAG AAA ✓
```

**⚠️ Watch Out For:**
```tsx
// Be careful with these in Black theme:
text-muted-foreground on bg-background  // OK but check contrast
bg-accent + text-accent-foreground      // Very light purple - needs testing
border-border visibility                // Subtle borders may need adjustment
```

---

### Purple Primary Best Practices

The Black theme's vibrant purple is **powerful** - use strategically:

**✅ Perfect Uses:**
- Primary CTAs (buttons, links)
- Active states and selections
- Important badges and labels
- Focus indicators
- Progress indicators

**⚠️ Use Sparingly:**
- Large background areas (use bg-primary/10 instead)
- Body text (reserve for accents only)
- Decorative elements (can be overwhelming)

**Example - Balanced Purple Usage:**
```tsx
<button className='bg-primary text-primary-foreground'> {/* Full purple CTA */}
  <span className='bg-primary/10 text-primary'> {/* Subtle purple badge */}
    <div className='border-l-2 border-primary'> {/* Purple accent line */}
```

---

### Black Theme Typography Tips

**Light Mode (White Background):**
```tsx
// Strong hierarchy with deep navy
<h1 className='text-foreground font-bold'>        {/* Deep navy - bold */}
<p className='text-foreground'>                   {/* Deep navy - regular */}
<small className='text-muted-foreground'>         {/* Deep navy - same! */}
  
// Use size/weight for hierarchy, not just color
<h1 className='text-4xl font-bold text-foreground'>
<h2 className='text-2xl font-semibold text-foreground'>
<p className='text-base text-foreground'>
<span className='text-sm text-muted-foreground'>
```

**Dark Mode (Black Background):**
```tsx
// Use muted-foreground for actual hierarchy
<h1 className='text-foreground font-bold'>        {/* Off-white - bold */}
<p className='text-foreground'>                   {/* Off-white - regular */}
<small className='text-muted-foreground'>         {/* Gray - softer! */}
```

---

### Shadow Adjustments for Black Theme

The Black theme needs **different shadow strategies**:

**Light Mode (White BG):**
```tsx
// Use darker shadows for depth
shadow-[0_20px_40px_hsl(var(--color-foreground)/0.08)]  // Subtle dark shadow
shadow-[0_25px_60px_hsl(var(--color-primary)/0.15)]     // Purple glow (subtle)

// ✅ Good: Subtle shadows on white
// ❌ Avoid: Heavy shadows (too harsh)
```

**Dark Mode (Black BG):**
```tsx
// Use brighter glows and borders
shadow-[0_20px_40px_hsl(var(--color-primary)/0.25)]     // Purple glow (visible)
border border-border shadow-sm                           // Border + subtle shadow

// ✅ Good: Glows and borders for separation
// ❌ Avoid: Dark shadows (invisible on black!)
```

---

### Interactive States for Black Theme

**Hover Effects:**
```tsx
// Light mode - darken slightly
hover:bg-accent hover:text-accent-foreground  // Light purple wash
hover:bg-muted                                // Light gray

// Dark mode - brighten/glow
hover:bg-accent hover:text-accent-foreground  // Dark purple glow
hover:border-primary hover:shadow-primary     // Purple border + glow
```

**Active/Selected States:**
```tsx
// Use full purple for strong indication
className={isActive 
  ? 'bg-primary/15 text-primary border-primary'
  : 'text-muted-foreground hover:text-foreground'
}
```

---

### Accessibility Notes for Black Theme

**Excellent Built-in Contrast:**
- ✅ Pure white/black = maximum contrast
- ✅ Purple primary has good contrast on both backgrounds
- ✅ Off-white in dark mode prevents eye strain vs pure white

**Watch These Areas:**
- ⚠️ `text-muted-foreground` might be too similar to `text-foreground` in light mode
- ⚠️ `bg-accent` (very light purple) needs contrast checking for text
- ⚠️ Decorative purple elements should not convey critical information

---

**Reference this guide when implementing new components with the Black theme!** 🖤💜
