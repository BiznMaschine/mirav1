# MIRA UX Prototype - Specification and Scope

**Document Version:** 1.0  
**Date:** 2025-12-29  
**Purpose:** Prototype specification derived from personas and user journeys

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

This document defines the exact specification and scope for the MIRA UX prototype, derived from the persona profiles and user journey maps. It determines which screens are critical, what interactions are essential, what mock data is needed, and what can be simplified.

---

## Scope Definition

### High Priority Screens (Must Implement - 30 screens)

Based on persona needs and journey criticality:

#### Authentication (6 screens)
1. **Login** - With role selector (critical for all personas)
2. **Register Reseller** - Complete registration flow (R1 journey)
3. **Register Customer** - Complete registration flow (C1 journey)
4. **Forgot Password** - Self-service recovery (all personas)
5. **Reset Password** - Password reset completion (all personas)
6. **Email Verification** - Account verification (R1, C1 journeys)

#### Reseller Onboarding (6 screens)
7. **Assessment Intro** - Journey R1 step
8. **Assessment Questions** - Multi-step questionnaire (R1 journey)
9. **Assessment Result** - Segment assignment (R1 journey)
10. **Onboarding Checklist** - Progress tracker (R1 journey)
11. **Training Step** - Content delivery (R1 journey)
12. **Agreement Step** - Terms acceptance (R1 journey)

#### Reseller Dashboard (8 screens)
13. **Dashboard Home** - Hero Board, Rank Tracker, Stats (R3, R2 journeys)
14. **Earnings Overview** - Monthly summary (R2, R3 journeys)
15. **Commission History** - Transaction list (R2 journey)
16. **Network Tree** - Visual network (R4 journey)
17. **Team List** - Table view (R4 journey)
18. **Impact Overview** - Impact counters (R3 journey)
19. **Leaderboard** - Rankings (R3 journey)
20. **Badges & Achievements** - Gamification display (R3 journey)

#### Customer Shop (6 screens)
21. **Product Catalogue** - Product browsing (C1 journey)
22. **Product Detail** - Product information (C1 journey)
23. **Shopping Cart** - Cart review (C1 journey)
24. **Checkout: Delivery** - Address entry (C1 journey)
25. **Checkout: Payment** - Payment method (C1 journey)
26. **Order Confirmation** - Success screen (C1 journey)

#### Customer Account (3 screens)
27. **My Subscriptions** - Subscription list (C2 journey)
28. **Subscription Detail** - Management interface (C2 journey)
29. **Order History** - Past orders (C2 journey)

#### Admin Dashboard (6 screens)
30. **Admin Overview** - Platform metrics (A1 journey)
31. **Reseller List** - User management (A1 journey)
32. **Customer List** - User management (A1 journey)
33. **Order Management** - Order list (A1 journey)
34. **Commission Configuration** - Rule configuration (A2 journey)
35. **Audit Log** - Activity history (A1, A2 journeys)

#### Settings (7 screens)
36. **Profile Settings** - User profile (all personas)
37. **Security Settings** - Password, sessions (all personas)
38. **Notification Preferences** - Notification settings (all personas)
39. **Payout Settings** - Reseller payout config (Reseller)
40. **Address Book** - Shipping addresses (Customer)
41. **Payment Methods** - Payment cards (Customer)
42. **Privacy & Data** - Privacy settings (all personas)

### Medium Priority Screens (Should Implement - 3 screens)

43. **Impact Milestones** - Milestone achievements (Reseller)
44. **Commission Ledger** - Detailed ledger view (Admin)
45. **System Settings** - Platform configuration (Admin)

**Total: 45 screens** (matches MVP screen inventory excluding CRUD)

---

## Interaction Depth

### High Detail Interactions (Critical for Validation)

1. **Multi-step Forms**
   - Assessment questionnaire with progress indicator
   - Checkout flow with step navigation
   - Onboarding checklist with completion states

2. **Data Visualization**
   - Network tree with expand/collapse
   - Rank tracker with progress bars
   - Impact counters with animations
   - Leaderboard with rankings

3. **Navigation Flows**
   - Role switching in top nav
   - Tab navigation within dashboards
   - Breadcrumb navigation for deep screens

4. **Form Interactions**
   - Input validation (visual only)
   - Dropdown selections
   - Checkbox/radio selections
   - File upload UI (no actual upload)

### Medium Detail Interactions

5. **Data Tables**
   - Sortable columns (UI only)
   - Filter panels (UI only)
   - Pagination controls (UI only)

6. **Search and Filter**
   - Search input with results
   - Filter dropdowns
   - Clear filters button

### Low Detail (Can Simplify)

7. **Advanced Features**
   - Complex calculations (show results only)
   - Real-time updates (show static data)
   - Export functionality (show button, no actual export)

---

## Mock Data Requirements

### Reseller Data

```typescript
- Reseller profiles (10-15 mock resellers)
  - Name, email, rank, segment
  - Join date, referral code
  - Network size, team members
  - Earnings, commissions
  - Impact metrics
  - Badges, achievements
  - Streak data

- Network tree structure
  - 3-4 level hierarchy
  - 20-30 total nodes
  - Sponsor relationships
  - Rank distribution

- Commission transactions
  - 20-30 transactions
  - Various levels (L1-L4)
  - Different amounts
  - Date range: last 3 months

- Leaderboard data
  - Top 10 resellers
  - Rankings, earnings, team size
  - Position changes
```

### Customer Data

```typescript
- Product catalogue
  - 8-10 products
  - Multiple SKUs per product
  - Pricing, images, descriptions
  - Impact multipliers

- Orders
  - 5-10 past orders
  - Order status, dates
  - Products, quantities
  - Impact attribution

- Subscriptions
  - 2-3 active subscriptions
  - Frequency, next delivery
  - Status, modification history
```

### Admin Data

```typescript
- Platform metrics
  - Total resellers, customers
  - Total orders, revenue
  - Impact totals
  - Growth trends

- User lists
  - 20-30 resellers
  - 20-30 customers
  - Status, registration dates
  - Activity indicators

- Commission configuration
  - Current rates (L1-L4)
  - Configuration history
  - Effective dates

- Audit log
  - 30-40 audit events
  - Various actions
  - User, timestamp, details
```

### Impact Data

```typescript
- Impact metrics
  - Total kg food donated
  - Neuterings funded
  - Animals helped
  - Recent donations

- Milestones
  - Achievement milestones
  - Progress toward next
  - Celebration states
```

---

## Simplification Decisions

### What to Simplify

1. **No Real Validation**
   - Forms show validation UI but don't actually validate
   - Error states are visual only
   - Success states are immediate

2. **No Backend Calls**
   - All data is hardcoded mock data
   - No API integration
   - No real authentication

3. **No Data Persistence**
   - State resets on page refresh
   - No local storage
   - No database

4. **No Complex Calculations**
   - Commission calculations are pre-calculated
   - Rank progress is static
   - Impact metrics are fixed

5. **No Real-time Updates**
   - All data is static
   - No WebSocket connections
   - No live notifications

6. **No File Operations**
   - File upload UI only (no actual upload)
   - Export buttons don't generate files
   - Images are placeholder URLs

### What to Keep Detailed

1. **Screen Layouts**
   - Accurate representation of final design
   - Proper spacing and typography
   - Component structure

2. **Navigation Flows**
   - Complete user journeys navigable
   - Role switching works
   - Breadcrumbs accurate

3. **Visual Feedback**
   - Loading states (simulated)
   - Success/error messages
   - Progress indicators

4. **Data Display**
   - Realistic data presentation
   - Tables, cards, lists
   - Charts and graphs (static)

---

## Testing Priorities

### Critical Journeys (Must Test)

1. **R1: Reseller Onboarding** - Complete flow from registration to dashboard
2. **C1: Discovery and Purchase** - Complete purchase flow
3. **R3: Daily Engagement** - Dashboard navigation and key views
4. **A1: Daily Operations** - Admin overview and user management

### Important Journeys (Should Test)

5. **R2: First Customer Acquisition** - Referral code and commission view
6. **C2: Subscription Management** - Subscription list and detail
7. **A2: Commission Configuration** - Configuration interface

### Nice to Have (Can Skip)

8. **R4: Team Building** - Network tree (if time permits)
9. **R5: Rank Advancement** - Rank tracker (if time permits)

---

## Screen Implementation Order

Based on journey priority and dependencies:

### Phase 1: Foundation (Week 1)
1. Login (with role selector)
2. Register Reseller
3. Register Customer
4. Dashboard Home (Reseller)
5. Admin Overview

### Phase 2: Core Journeys (Week 2)
6. Assessment Intro
7. Assessment Questions
8. Assessment Result
9. Onboarding Checklist
10. Training Step
11. Agreement Step
12. Product Catalogue
13. Product Detail
14. Shopping Cart
15. Checkout: Delivery
16. Checkout: Payment
17. Order Confirmation

### Phase 3: Dashboard Views (Week 3)
18. Earnings Overview
19. Commission History
20. Network Tree
21. Team List
22. Impact Overview
23. Leaderboard
24. Badges & Achievements
25. My Subscriptions
26. Subscription Detail
27. Order History

### Phase 4: Admin & Settings (Week 4)
28. Reseller List
29. Customer List
30. Order Management
31. Commission Configuration
32. Audit Log
33. Profile Settings
34. Security Settings
35. Notification Preferences
36. Payout Settings
37. Address Book
38. Payment Methods
39. Privacy & Data

### Phase 5: Polish (Week 5)
40. Forgot Password
41. Reset Password
42. Email Verification
43. Impact Milestones
44. Commission Ledger
45. System Settings

---

## Success Criteria

The prototype is successful if:

1. ✅ All 45 screens implemented (high-level layouts)
2. ✅ All critical journeys navigable end-to-end
3. ✅ Role switching works seamlessly
4. ✅ UI kit components used throughout
5. ✅ Builds to static HTML successfully
6. ✅ Can be shared as zip file or deployed
7. ✅ All critical journeys tested (E2E)
8. ✅ Documentation complete

---

## Out of Scope

The following are explicitly **not** in scope for the prototype:

- Real form validation logic
- Backend API integration
- Real authentication
- Data persistence
- File upload/download
- Real-time updates
- Complex business logic
- Deep CRUD operations (create/edit forms)
- Export functionality (actual file generation)
- Email functionality
- Payment processing
- Advanced analytics
- Mobile-specific optimizations (desktop-first)

---

*This specification guides the UX prototype implementation, ensuring focus on validation of user experience rather than functional completeness.*
