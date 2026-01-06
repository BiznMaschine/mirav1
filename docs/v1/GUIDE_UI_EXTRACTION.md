# UI Extraction Guide

**Document Version:** 1.0  
**Date:** 2025-12-29  
**Purpose:** Guide for UI designers to extract design tokens, component patterns, and visual design information from the prototype

---

## Document Notice

**AI-Augmented Engineering Process**

This document was auto-generated as part of an AI-augmented engineering process. This solution is intended **solely as a UX mock prototype** for user experience validation and demonstration purposes.

**Scope and Limitations:**

- **Purpose**: Fit-for-purpose UX validation only
- **Technical Verification**: The scope did not include verification or validation of technical correctness, DevSecOps practices, or comprehensive documentation standards
- **Not Production-Ready**: This prototype is not intended for production use and has not undergone full technical review
- **Documentation Status**: Documentation accuracy and completeness have not been independently verified

This prototype serves as a visual and interactive reference for user experience validation before production development begins.

---

## Overview

This guide helps UI designers extract design system information, component patterns, color palettes, typography, spacing, and visual design patterns from the MIRA UX Prototype. Use this guide to understand the design system and recreate it for production.

---

## 1. Design Tokens

### 1.1 Color Palette

**Location:** `tailwind.config.js` (lines 9-74)

The prototype uses a comprehensive color system:

**Primary Colors:**
- **Forest** (Primary brand): 50-950 scale
  - Primary: `forest-600` (#059669)
  - Hover: `forest-700` (#047857)
  - Active: `forest-800` (#065F46)

**Accent Colors:**
- **Amber** (Accent/highlight): 50-900 scale
  - Primary: `amber-500` (#F59E0B)
  - Hover: `amber-600` (#D97706)

**Neutral Colors:**
- **Slate** (Text, backgrounds, borders): 50-950 scale
  - Background: `slate-50` (#F8FAFC)
  - Text: `slate-900` (#0F172A)
  - Borders: `slate-200` (#E2E8F0)

**Status Colors:**
- **Green** (Success): 50, 500, 600, 700
- **Red** (Error): 50, 500, 600, 700
- **Blue** (Info): 50, 500, 600, 700
- **Purple** (Special): 50, 500, 600

**How to Extract:**
```javascript
// Open tailwind.config.js
// Colors are defined in theme.extend.colors (lines 9-74)
colors: {
  forest: { 50: '#ECFDF5', 100: '#D1FAE5', ..., 600: '#059669', ... },
  amber: { 50: '#FFFBEB', ..., 500: '#F59E0B', ... },
  // ... extract all color values
}
```

**Extraction Steps:**
1. Copy color definitions from `tailwind.config.js`
2. Document hex values for each color scale
3. Note usage patterns (primary, accent, status)
4. Create color palette documentation

### 1.2 Typography

**Location:** `tailwind.config.js` (lines 76-79)

**Font Families:**
- **Headings**: `Plus Jakarta Sans` (font-heading)
- **Body**: `Inter` (font-body)
- **Monospace**: `JetBrains Mono` (font-mono)

**Font Loading:**
- Google Fonts are loaded in `index.html` (lines 8-10)

**How to Extract:**
```javascript
// Open tailwind.config.js
// Font families (lines 76-79):
fontFamily: {
  heading: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
  body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
}
```

**Extraction Steps:**
1. Note font family names and fallbacks
2. Check `index.html` for Google Fonts links
3. Document font usage patterns in components

### 1.3 Spacing Scale

**Location:** `tailwind.config.js` (lines 81-92)

**Custom Spacing Values:**
- Fractional: `0.5` (0.125rem), `1.5` (0.375rem), `2.5` (0.625rem), `3.5` (0.875rem)
- Extended: `7` (1.75rem), `9` (2.25rem), `11` (2.75rem), `14` (3.5rem), `28` (7rem), `32` (8rem)

**Standard Tailwind spacing** (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24) is also available.

**How to Extract:**
```javascript
// Open tailwind.config.js
// Spacing (lines 81-92):
spacing: {
  '0.5': '0.125rem',
  '1.5': '0.375rem',
  // ... extract all custom values
}
```

### 1.4 Border Radius

**Location:** `tailwind.config.js` (lines 93-100)

**Border Radius Values:**
- `sm`: 0.25rem (4px)
- `md`: 0.375rem (6px) - **Note: Not 8px!**
- `lg`: 0.5rem (8px)
- `xl`: 0.75rem (12px)
- `2xl`: 1rem (16px)
- `3xl`: 1.5rem (24px)

**Important:** The `md` value is 6px, not the standard 8px.

---

## 2. Component Library

### 2.1 Base UI Components

**Location:** `@mira/ui` package (referenced in components)

The prototype uses components from the `@mira/ui` package:

**Available Components:**
- `Button` - Various variants and sizes
- `Card` - Container with optional padding
- `Badge` - Status indicators
- `Input` - Form inputs
- `Label` - Form labels
- `ProgressRing` - Circular progress indicators

**Usage Example:**
```typescript
// From src/components/CustomerPawsWidget.tsx
import { Card, Badge, Button } from '@mira/ui';
import { ProgressRing } from '@mira/ui';
```

**How to Extract:**
1. Review component imports in `src/components/`
2. Note component props and usage patterns
3. Document component variants and states
4. Reference `@mira/ui` package for component specs

### 2.2 Custom Prototype Components

**Location:** `src/components/` directory

**Key Custom Components:**
- `AppMenu.tsx` - Side navigation menu
- `HeroBoard.tsx` - Leaderboard display
- `CustomerPawsWidget.tsx` - Gamification widget
- `ResellerGamificationWidget.tsx` - Reseller gamification display
- `CampaignBanner.tsx` - Campaign/promotion banner
- `ImpactJourneyCharts.tsx` - Impact visualization
- `VerificationGallery.tsx` - Image gallery component

**How to Extract:**
1. Review each component file in `src/components/`
2. Note component structure and layout
3. Document props and state management
4. Extract styling patterns (Tailwind classes)
5. Note responsive breakpoints

---

## 3. Visual Design Patterns

### 3.1 Layout Patterns

**Common Layout Structures:**

**Dashboard Layout:**
- Header with navigation
- Sidebar menu (AppMenu)
- Main content area with cards
- Footer (optional)

**Card-Based Layout:**
- Cards used for content grouping
- Grid layouts for multiple cards
- Responsive grid (1-3 columns based on screen size)

**How to Extract:**
1. Review page components in `src/pages/`
2. Note layout structure and grid systems
3. Document responsive breakpoints
4. Extract spacing between elements

### 3.2 Component Styling Patterns

**Common Patterns:**
- **Cards**: `bg-white rounded-lg shadow-lg p-4`
- **Buttons**: `bg-forest-600 text-white px-4 py-2 rounded-md`
- **Inputs**: `border border-slate-300 rounded-md px-3 py-2`
- **Badges**: `bg-amber-100 text-amber-800 px-2 py-1 rounded-full`

**How to Extract:**
1. Review component files for className patterns
2. Document common Tailwind class combinations
3. Note hover and active states
4. Extract color usage patterns

### 3.3 Responsive Design

**Breakpoints:**
- Mobile-first approach
- Tailwind default breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px

**How to Extract:**
1. Review responsive classes in components
2. Note breakpoint usage patterns
3. Document mobile vs desktop layouts
4. Check `useMobileBreakpoint.ts` hook for responsive logic

---

## 4. Design System Integration

### 4.1 Design Tokens CSS

**Location:** `src/index.css` (line 2)

The prototype imports design tokens from the UI package:
```css
@import '../../packages/ui/src/styles/design-tokens.css';
```

**Note:** The actual design tokens are in the `@mira/ui` package, not in the prototype itself.

### 4.2 Global Styles

**Location:** `src/index.css`

**Global Styles:**
- Body background: `bg-slate-50`
- Body text: `text-slate-900`
- Font smoothing: Antialiased
- Font family: `font-body` (Inter)

---

## 5. Icon System

### 5.1 Icon Library

**Location:** `lucide-react` package

The prototype uses **Lucide React** icons throughout.

**Common Icons:**
- Navigation: `Home`, `Users`, `TrendingUp`, `Heart`, `Award`
- Actions: `ShoppingBag`, `Package`, `Settings`, `LogOut`
- Status: `Check`, `X`, `AlertCircle`
- Gamification: `PawPrint`, `Flame`, `Gift`, `Trophy`

**How to Extract:**
1. Review icon imports in component files
2. Document icon usage patterns
3. Note icon sizes and styling
4. Create icon inventory

---

## 6. Gamification Visual Elements

### 6.1 Progress Indicators

**Components:**
- `ProgressRing` - Circular progress (from @mira/ui)
- Linear progress bars
- Level indicators

**Usage Example:**
```typescript
// From CustomerPawsWidget.tsx
<ProgressRing
  progress={currentProgress}
  max={maxProgress}
  size={64}
/>
```

### 6.2 Badge and Achievement Display

**Visual Patterns:**
- Badge collections in grid layouts
- Achievement cards with icons
- Progress indicators for levels
- Streak counters with flame icons

**How to Extract:**
1. Review gamification components
2. Document badge/achievement layouts
3. Note visual hierarchy
4. Extract animation patterns (if any)

---

## 7. Form Design Patterns

### 7.1 Input Styling

**Common Patterns:**
- Label above input
- Border styling: `border border-slate-300`
- Focus states: `focus:ring-2 focus:ring-forest-500`
- Error states: `border-red-500`

**How to Extract:**
1. Review form components in `src/pages/auth/`
2. Document input styling patterns
3. Note validation states
4. Extract form layout patterns

### 7.2 Button Variants

**Common Button Styles:**
- Primary: `bg-forest-600 text-white`
- Secondary: `bg-slate-200 text-slate-900`
- Outline: `border border-forest-600 text-forest-600`
- Disabled: `opacity-50 cursor-not-allowed`

---

## 8. Quick Reference

### Key Files for UI Extraction

| File | Purpose | Key Information |
|------|---------|----------------|
| `tailwind.config.js` | Design tokens | Colors, typography, spacing, border radius |
| `src/index.css` | Global styles | Base styles and design token import |
| `src/components/` | Component examples | Visual patterns and styling |
| `index.html` | Font loading | Google Fonts links |
| `@mira/ui` package | Base components | Component library reference |

### Extraction Checklist

- [ ] Extract color palette from tailwind.config.js
- [ ] Document typography system (fonts, sizes)
- [ ] Extract spacing scale
- [ ] Document border radius values
- [ ] Review component styling patterns
- [ ] Extract layout patterns
- [ ] Document responsive breakpoints
- [ ] Create icon inventory
- [ ] Document form design patterns
- [ ] Extract gamification visual elements

---

## 9. Design Token Export

### 9.1 Creating Design Token Documentation

**Recommended Format:**
```json
{
  "colors": {
    "forest": {
      "50": "#ECFDF5",
      "600": "#059669",
      // ... all values
    }
  },
  "typography": {
    "heading": "Plus Jakarta Sans",
    "body": "Inter"
  },
  "spacing": {
    "0.5": "0.125rem",
    // ... custom values
  }
}
```

### 9.2 Design System Spec Reference

For complete design system specifications, refer to:
- MIRA Design System Specification (Spec 5.1)
- UI Component Library (Spec 5.2)

---

## 10. Next Steps

After extracting UI information:

1. **Create Design Token Library**: Export tokens to design tool (Figma, etc.)
2. **Build Component Library**: Recreate components in design tool
3. **Document Visual Patterns**: Create style guide
4. **Validate with Prototype**: Compare extracted design with prototype
5. **Prepare for Production**: Hand off to engineering team

---

*This guide helps you extract UI patterns from the prototype. For user flows, see [GUIDE_UX_EXTRACTION.md](GUIDE_UX_EXTRACTION.md). For technical architecture, see [GUIDE_ENGINEERING_EXTRACTION.md](GUIDE_ENGINEERING_EXTRACTION.md).*
