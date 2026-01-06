# Engineering Extraction Guide

**Document Version:** 1.0  
**Date:** 2025-12-29  
**Purpose:** Guide for engineers to extract data models, architecture patterns, routing structure, and technical implementation details from the prototype

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

This guide helps engineers extract technical information from the MIRA UX Prototype to understand data structures, component architecture, routing patterns, state management, and the technical stack. Use this guide to plan production implementation.

---

## 1. Data Models and Types

### 1.1 Core Data Interfaces

**Location:** `src/data/mockData.ts` (lines 8-150+)

The prototype defines TypeScript interfaces for all data models:

**Core Entities:**
- `Reseller` - Reseller profile with earnings, network, impact
- `Customer` - Customer profile with orders, subscriptions, gamification
- `Product` - Product catalog with SKUs
- `Order` - Order with items, status, impact
- `Commission` - Commission records with levels and types
- `NetworkNode` - Network tree structure
- `LeaderboardEntry` - Leaderboard rankings

**VETO Integration:**
- `Shelter` - Animal shelter information
- `Campaign` - Campaign/challenge data
- `Verification` - Impact verification records

**How to Extract:**
```typescript
// Open src/data/mockData.ts
// All interfaces are defined at the top (lines 8-150+)
export interface Reseller {
  id: string;
  name: string;
  email: string;
  rank: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  segment: 'Novice' | 'Active' | 'Growth' | 'Ambassador';
  // ... extract all fields
}
```

**Extraction Steps:**
1. Copy all interface definitions
2. Document field types and constraints
3. Note relationships between entities
4. Identify required vs optional fields
5. Document enum values (ranks, statuses, etc.)

### 1.2 Mock Data Structure

**Location:** `src/data/mockData.ts` (after interface definitions)

The file contains:
- Mock data instances for testing
- Example data structures
- Relationships between entities

**How to Extract:**
1. Review mock data objects
2. Note data relationships
3. Document example values
4. Understand data dependencies

---

## 2. Component Architecture

### 2.1 Component Structure

**Location:** `src/components/` and `src/pages/`

**Component Organization:**
```
src/
├── components/        # Reusable prototype components
│   ├── AppMenu.tsx
│   ├── HeroBoard.tsx
│   ├── CustomerPawsWidget.tsx
│   └── ...
├── pages/            # Screen/page components
│   ├── auth/         # Authentication screens
│   ├── reseller/     # Reseller screens
│   ├── customer/     # Customer screens
│   ├── admin/        # Admin screens
│   └── shared/       # Shared screens (settings)
└── App.tsx          # Main app component
```

**How to Extract:**
1. Review component file structure
2. Note component organization patterns
3. Document component dependencies
4. Identify reusable vs page-specific components

### 2.2 Component Patterns

**Common Patterns:**
- **Functional Components**: All components use React functional components
- **TypeScript**: Strong typing with interfaces
- **Props Interfaces**: Each component defines its props interface
- **Hooks**: useState, useEffect, custom hooks

**Example Pattern:**
```typescript
// Component structure pattern
export interface ComponentProps {
  // Props definition
}

export default function Component({ prop1, prop2 }: ComponentProps) {
  // Component logic
  return (
    // JSX
  );
}
```

### 2.3 Custom Hooks

**Location:** `src/hooks/`

**Available Hooks:**
- `useNavigation.ts` - Navigation logic
- `useRole.ts` - Role management
- `useMobileBreakpoint.ts` - Responsive breakpoints

**How to Extract:**
1. Review hook implementations
2. Document hook APIs
3. Note hook dependencies
4. Understand hook usage patterns

---

## 3. Routing and Navigation

### 3.1 Routing Structure

**Location:** `src/App.tsx` (lines 197-259)

**Screen Mapping:**
The `screenMap` object maps screen IDs to:
- Role requirements
- View types (auth, onboarding, dashboard, settings)
- Navigation state

**How to Extract:**
```typescript
// Open src/App.tsx
// screenMap object (lines 197-259)
const screenMap: Record<string, {...}> = {
  'login': { role: null, auth: 'login' },
  'reseller-dashboard': { role: 'reseller', view: 'dashboard' },
  // ... extract all mappings
};
```

**Extraction Steps:**
1. Copy screenMap object
2. Document role-based routing
3. Note view categories
4. Map screen IDs to components

### 3.2 Navigation Logic

**Location:** `src/App.tsx` and `src/hooks/useNavigation.ts`

**Navigation Features:**
- Role-based access control
- State-based routing (no URL routing in prototype)
- View switching logic
- Screen navigation handlers

**How to Extract:**
1. Review navigation handlers in App.tsx
2. Understand state management for navigation
3. Document navigation flow
4. Note conditional rendering based on state

### 3.3 Site Map Structure

**Location:** `src/components/PrototypeSiteMap.tsx` (lines 14-96)

**Site Map Data:**
- Complete list of 61 screens
- Screen categories
- Navigation paths
- Role associations

**How to Extract:**
1. Copy siteMap array
2. Document screen hierarchy
3. Note category organization
4. Understand path structure

---

## 4. State Management

### 4.1 Application State

**Location:** `src/App.tsx`

**State Variables:**
- `userRole` - Current user role (reseller, customer, admin)
- `authView` - Authentication view state
- `onboardingView` - Onboarding step state
- `settingsView` - Settings view state
- `gamificationView` - Gamification view state
- `currentScreenId` - Current screen identifier

**How to Extract:**
1. Review useState declarations in App.tsx
2. Document state variables and types
3. Understand state transitions
4. Note state dependencies

### 4.2 Component State

**Location:** Individual component files

**Common State Patterns:**
- Local component state with useState
- Form state management
- UI state (expanded/collapsed, modals)
- Data loading states

**How to Extract:**
1. Review component state management
2. Document state patterns
3. Note state lifting needs
4. Identify shared state candidates

---

## 5. Technical Stack

### 5.1 Framework and Libraries

**Location:** `package.json`

**Core Dependencies:**
- **React** 18.3.1 - UI framework
- **TypeScript** 5.7.2 - Type safety
- **Vite** 5.4.0 - Build tool
- **Tailwind CSS** 3.4.10 - Styling
- **@mira/ui** - UI component library
- **i18next** 23.7.16 - Internationalization
- **lucide-react** 0.303.0 - Icons

**How to Extract:**
```json
// Open package.json
{
  "dependencies": {
    // Extract all dependencies
  },
  "devDependencies": {
    // Extract all dev dependencies
  }
}
```

### 5.2 Build Configuration

**Location:** `vite.config.js`

**Build Settings:**
- Output directory: `dist/`
- Assets directory: `assets/`
- Base path: `./` (relative paths)
- React plugin configuration

**How to Extract:**
1. Review vite.config.js
2. Document build settings
3. Note asset handling
4. Understand output structure

### 5.3 TypeScript Configuration

**Location:** `tsconfig.json` and `tsconfig.node.json`

**TypeScript Settings:**
- Compiler options
- Path aliases (`@/` for src/)
- Module resolution
- Type checking rules

**How to Extract:**
1. Review tsconfig files
2. Document compiler options
3. Note path aliases
4. Understand type checking configuration

---

## 6. Internationalization (i18n)

### 6.1 Translation Files

**Location:** `src/i18n/locales/`

**Translation Files:**
- `de.json` - German translations
- `en.json` - English translations

**How to Extract:**
1. Review translation files
2. Document translation keys
3. Note translation structure
4. Understand i18n configuration

### 6.2 i18n Configuration

**Location:** `src/i18n/config.ts`

**Configuration:**
- Language detection
- Fallback languages
- Translation loading

**How to Extract:**
1. Review i18n config
2. Document language setup
3. Note translation loading patterns

---

## 7. Styling Architecture

### 7.1 Tailwind Configuration

**Location:** `tailwind.config.js`

**Configuration:**
- Design tokens (colors, spacing, typography)
- Content paths
- Plugin configuration

**How to Extract:**
1. Review tailwind.config.js
2. Document design tokens
3. Note content paths
4. Understand Tailwind setup

### 7.2 CSS Architecture

**Location:** `src/index.css`

**CSS Structure:**
- Design token imports
- Tailwind directives
- Global base styles

**How to Extract:**
1. Review index.css
2. Document CSS structure
3. Note design token integration
4. Understand global styles

---

## 8. Project Structure

### 8.1 Directory Organization

```
ux-prototype/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Screen components
│   ├── data/          # Mock data and types
│   ├── hooks/         # Custom React hooks
│   ├── i18n/          # Internationalization
│   ├── lib/           # Utility functions
│   └── test/          # Test setup
├── e2e/               # E2E tests (excluded from ZIP)
├── docs/              # Documentation
├── dist/              # Build output
└── [config files]     # Configuration files
```

**How to Extract:**
1. Review directory structure
2. Document organization patterns
3. Note file naming conventions
4. Understand module boundaries

---

## 9. API Integration Points

### 9.1 Mock Data Usage

**Location:** `src/data/mockData.ts`

**Note:** The prototype uses hardcoded mock data. In production:
- Replace with API calls
- Implement data fetching
- Add loading/error states
- Implement caching

**How to Extract:**
1. Identify data usage points
2. Document required API endpoints
3. Note data transformation needs
4. Plan API integration strategy

### 9.2 Data Flow

**Current Flow:**
```
Component → Mock Data → Display
```

**Production Flow:**
```
Component → API Call → Backend → Database → Response → Display
```

**How to Extract:**
1. Map data dependencies
2. Identify API endpoint needs
3. Document data transformations
4. Plan state management for API data

---

## 10. Quick Reference

### Key Files for Engineering Extraction

| File | Purpose | Key Information |
|------|---------|----------------|
| `src/data/mockData.ts` | Data models | All TypeScript interfaces and types |
| `src/App.tsx` | Routing & state | Screen mapping, navigation, state management |
| `package.json` | Dependencies | Technical stack and versions |
| `vite.config.js` | Build config | Build settings and output |
| `tsconfig.json` | TypeScript | Type checking and compiler options |
| `tailwind.config.js` | Styling | Design tokens and Tailwind config |
| `src/components/` | Components | Component architecture |
| `src/hooks/` | Custom hooks | Reusable logic patterns |

### Extraction Checklist

- [ ] Extract all TypeScript interfaces from mockData.ts
- [ ] Document data model relationships
- [ ] Extract routing structure from App.tsx
- [ ] Document state management patterns
- [ ] Review component architecture
- [ ] Extract technical stack from package.json
- [ ] Document build configuration
- [ ] Review TypeScript configuration
- [ ] Document i18n setup
- [ ] Map API integration points
- [ ] Document project structure

---

## 11. Production Implementation Notes

### 11.1 Key Differences from Prototype

**Prototype:**
- Client-side only
- Mock data
- State-based routing
- No backend integration

**Production:**
- Backend API integration
- Real data persistence
- URL-based routing
- Authentication/authorization
- Error handling
- Loading states

### 11.2 Migration Strategy

1. **Data Models**: Use extracted interfaces as database schema reference
2. **Components**: Adapt prototype components for production
3. **Routing**: Implement URL-based routing (React Router)
4. **State**: Add API state management (TanStack Query, etc.)
5. **Authentication**: Implement real auth system
6. **Error Handling**: Add comprehensive error handling

---

## 12. Next Steps

After extracting engineering information:

1. **Design Database Schema**: Use data models as reference
2. **Plan API Endpoints**: Based on data usage patterns
3. **Set Up Project Structure**: Use prototype structure as template
4. **Implement Routing**: Adapt navigation patterns
5. **Build Components**: Migrate prototype components
6. **Integrate Backend**: Replace mock data with API calls

---

*This guide helps you extract technical patterns from the prototype. For user flows, see [GUIDE_UX_EXTRACTION.md](GUIDE_UX_EXTRACTION.md). For UI design patterns, see [GUIDE_UI_EXTRACTION.md](GUIDE_UI_EXTRACTION.md).*
