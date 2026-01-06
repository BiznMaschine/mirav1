# UX Extraction Guide

**Document Version:** 1.0  
**Date:** 2025-12-29  
**Purpose:** Guide for UX designers to extract user flows, journeys, and interaction patterns from the prototype

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

This guide helps UX designers extract valuable information from the MIRA UX Prototype to understand user flows, screen navigation, interaction patterns, and user journeys. Use this guide to reverse-engineer the UX design for production implementation.

---

## 1. User Flows and Journeys

### 1.1 Complete User Journey Documentation

**Location:** `docs/v1/DESIGN_JOURNEYS.md`

This document contains:
- **8 complete user journeys** mapped in detail
- Journey flows with step-by-step navigation
- Emotional arcs and pain points
- Touchpoints and decision points

**Key Journeys:**
- R1: Reseller Onboarding (12 steps)
- R2: First Sale (8 steps)
- R3: Rank Advancement (6 steps)
- R4: Network Building (7 steps)
- C1: Customer Purchase (9 steps)
- C2: Subscription Management (5 steps)
- A1: Admin Platform Management (10 steps)
- A2: Commission Configuration (6 steps)

**How to Use:**
1. Open `docs/v1/DESIGN_JOURNEYS.md`
2. Review each journey's flow diagram
3. Map each step to the corresponding screen in the prototype
4. Note interaction patterns and state transitions

### 1.2 User Personas

**Location:** `docs/v1/DESIGN_PERSONAS.md`

This document contains:
- **3 primary personas** with detailed profiles
- Demographics, motivations, goals
- Pain points and needs
- User scenarios

**Personas:**
- **Maria (Reseller)**: 32, stay-at-home parent, wants income + impact
- **Thomas (Customer)**: 45, animal lover, values convenience
- **Sarah (Admin)**: 28, platform manager, needs efficiency

**How to Use:**
1. Reference personas when designing flows
2. Ensure each journey addresses persona goals
3. Validate pain points are addressed in the prototype

---

## 2. Screen Inventory and Navigation

### 2.1 Complete Screen Map

**Location:** `src/components/PrototypeSiteMap.tsx` (lines 14-96)

This file contains the **complete site map** with:
- 61 screens organized by category
- Screen IDs and labels
- Navigation paths
- Role associations
- Category groupings

**Screen Categories:**
- Authentication (6 screens)
- Reseller Onboarding (6 screens)
- Reseller Dashboard (8 screens)
- Customer Shop (6 screens)
- Customer Account (4 screens)
- Customer Gamification (4 screens)
- Admin Dashboard (8 screens)
- Settings (7 screens)
- Gamification Concept (11 screens)

**How to Extract:**
```typescript
// Open src/components/PrototypeSiteMap.tsx
// The siteMap array (lines 14-96) contains all screens:
const siteMap: SiteMapScreen[] = [
  { id: 'login', label: 'Login', path: ['auth', 'login'], ... },
  { id: 'register-reseller', label: 'Register (Reseller)', ... },
  // ... 61 total screens
];
```

**Extraction Steps:**
1. Copy the `siteMap` array
2. Group by category for organization
3. Note the navigation path structure
4. Identify role-based access patterns

### 2.2 Routing and Navigation Logic

**Location:** `src/App.tsx` (lines 197-259)

This file contains:
- **Screen mapping** (`screenMap` object)
- Route-to-component mapping
- Role-based navigation logic
- View state management

**Key Information:**
- How screens are organized by role
- Navigation state transitions
- View switching logic (auth, onboarding, dashboard, settings)

**How to Extract:**
```typescript
// Open src/App.tsx
// The screenMap object (lines 197-259) shows routing:
const screenMap: Record<string, {...}> = {
  'login': { role: null, auth: 'login' },
  'reseller-dashboard': { role: 'reseller', view: 'dashboard' },
  // ... all screen mappings
};
```

**Extraction Steps:**
1. Review `screenMap` to understand route structure
2. Note role-based access patterns
3. Identify view categories (auth, onboarding, dashboard, settings)
4. Map navigation flow between screens

---

## 3. Interaction Patterns

### 3.1 Component Usage Patterns

**Location:** `src/components/` directory

The prototype uses reusable components that demonstrate interaction patterns:

**Key Components:**
- `AppMenu.tsx` - Side navigation menu with role-based items
- `HeaderAppMenu.tsx` - Dropdown navigation in header
- `RoleSwitcher.tsx` - Role switching functionality
- `PrototypeSiteMap.tsx` - Screen navigation map
- `PrototypeSiteMapSidebar.tsx` - Sidebar navigation

**How to Extract:**
1. Review component files in `src/components/`
2. Note interaction patterns (clicks, hovers, state changes)
3. Identify reusable UI patterns
4. Document component props and behaviors

### 3.2 State Transitions

**Location:** `src/App.tsx`

The main App component manages:
- User role state
- Current screen/view state
- Authentication state
- Onboarding progress state

**How to Extract:**
1. Review state management in `src/App.tsx`
2. Identify state transitions between screens
3. Note conditional rendering based on state
4. Document state dependencies

---

## 4. User Flow Diagrams

### 4.1 Creating Flow Diagrams

Use the following information to create flow diagrams:

**Data Sources:**
1. `docs/v1/DESIGN_JOURNEYS.md` - Journey flows
2. `src/components/PrototypeSiteMap.tsx` - Screen relationships
3. `src/App.tsx` - Navigation logic

**Flow Diagram Elements:**
- **Start/End Points**: Login, Dashboard, Confirmation screens
- **Decision Points**: Role selection, Assessment results
- **Parallel Paths**: Different flows for different roles
- **Loops**: Onboarding checklist, training steps

**Example Flow:**
```
Login → Role Selection → [Reseller Path] → Assessment → Dashboard
                      → [Customer Path] → Shop → Checkout
                      → [Admin Path] → Overview
```

---

## 5. Screen Relationships

### 5.1 Navigation Hierarchy

**Primary Navigation:**
- **Reseller**: Dashboard → Network → Earnings → Impact → Achievements
- **Customer**: Dashboard → Shop → Subscriptions → Order History
- **Admin**: Overview → Resellers → Customers → Orders → Configuration

**Secondary Navigation:**
- Settings (accessible from all roles)
- Gamification concept screens (accessible from all roles)

### 5.2 Breadcrumbs and Context

Review screen components to understand:
- How users navigate back
- Context preservation between screens
- Breadcrumb patterns (if any)

---

## 6. Prototype Exploration

### 6.1 Interactive Exploration

**Best Practice:**
1. Run the prototype locally: `pnpm dev`
2. Navigate through each journey manually
3. Take screenshots of each screen
4. Document interactions and transitions
5. Note any edge cases or error states

### 6.2 Screen-by-Screen Analysis

For each screen:
1. **Identify Purpose**: What user goal does it serve?
2. **Note Layout**: Component arrangement and hierarchy
3. **Document Interactions**: Buttons, forms, navigation
4. **Capture States**: Loading, error, success states
5. **Record Data**: What data is displayed?

---

## 7. Quick Reference

### Key Files for UX Extraction

| File | Purpose | Key Information |
|------|---------|----------------|
| `docs/v1/DESIGN_JOURNEYS.md` | User journeys | Complete journey flows |
| `docs/v1/DESIGN_PERSONAS.md` | User personas | Persona profiles and needs |
| `src/components/PrototypeSiteMap.tsx` | Screen inventory | All 61 screens with paths |
| `src/App.tsx` | Navigation logic | Routing and state management |
| `src/components/AppMenu.tsx` | Navigation patterns | Menu structure and interactions |

### Extraction Checklist

- [ ] Review all 8 user journeys in DESIGN_JOURNEYS.md
- [ ] Extract screen inventory from PrototypeSiteMap.tsx
- [ ] Map navigation flows from App.tsx
- [ ] Document interaction patterns from components
- [ ] Create flow diagrams for each journey
- [ ] Identify reusable interaction patterns
- [ ] Document state transitions
- [ ] Note role-based access patterns

---

## 8. Next Steps

After extracting UX information:

1. **Create Production Flow Diagrams**: Use extracted flows as basis
2. **Design Screen Wireframes**: Reference prototype screens
3. **Define Interaction Specs**: Document interactions from prototype
4. **Plan State Management**: Use prototype state patterns as reference
5. **Validate with Stakeholders**: Use prototype for validation

---

*This guide helps you extract UX patterns from the prototype. For UI design patterns, see [GUIDE_UI_EXTRACTION.md](GUIDE_UI_EXTRACTION.md). For technical architecture, see [GUIDE_ENGINEERING_EXTRACTION.md](GUIDE_ENGINEERING_EXTRACTION.md).*
