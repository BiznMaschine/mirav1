# MIRA UX Prototype - User Journey Maps

**Document Version:** 1.0  
**Date:** 2025-12-29  
**Purpose:** Complete user journey maps to guide UX prototype screen flow and interactions

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

This document maps the complete user journeys for all three primary personas (Reseller, Customer, Admin). Each journey details the steps, touchpoints, emotional arcs, and pain points to guide the UX prototype implementation.

---

## Reseller Journeys

### Journey R1: Reseller Onboarding

**Persona:** Maria (Reseller)  
**Goal:** New reseller successfully registers, completes assessment, and reaches dashboard  
**Trigger:** Reseller clicks "Become a Reseller" CTA  
**Release:** MVP

#### Journey Flow

```
Landing Page → Register → Email Verification → Login → Assessment Intro → 
Assessment Questions → Assessment Result → Onboarding Checklist → 
Training Step → Agreement Step → Dashboard Entry
```

#### Detailed Steps

| Step | Action | Screen | Emotional State | Pain Points |
|------|--------|--------|-----------------|------------|
| R1.1 | Views landing page with mission | Landing (not in prototype) | Curious, Interested | — |
| R1.2 | Clicks "Become a Reseller" | Register Reseller | Committed | — |
| R1.3 | Enters email, password, name, phone | Register Reseller | Engaged | Form too long? |
| R1.4 | Submits registration | Register Reseller → Email Verification | Hopeful | Email delay? |
| R1.5 | Clicks email verification link | Email Verification | Relieved | Link not working? |
| R1.6 | Logs in | Login | Ready | Forgot password? |
| R1.7 | Reads consent notice, checks box | Assessment Intro | Informed | Legal text overwhelming? |
| R1.8 | Completes assessment (12 questions) | Assessment Questions | Engaged, Focused | Questions unclear? Progress lost? |
| R1.9 | Submits assessment | Assessment Result | Anxious | Score unclear? |
| R1.10 | Views segment assignment | Assessment Result | Satisfied/Disappointed | Segment explanation unclear? |
| R1.11 | Completes onboarding steps | Onboarding Checklist → Training → Agreement | Learning | Steps too many? |
| R1.12 | Enters dashboard | Dashboard Home | Excited, Motivated | Dashboard overwhelming? |

#### Touchpoints

- **Register Reseller:** Form with email, password, name, phone, referral code (optional)
- **Email Verification:** Confirmation screen with resend option
- **Login:** Email/password with role selector
- **Assessment Intro:** Welcome message, consent checkbox, start button
- **Assessment Questions:** Multi-step form with progress bar, next/previous navigation
- **Assessment Result:** Segment badge, explanation, next steps
- **Onboarding Checklist:** Progress tracker, step completion
- **Training Step:** Video/content with completion checkbox
- **Agreement Step:** Terms display, acceptance checkbox
- **Dashboard Home:** Hero Board, Rank Tracker, Stats, Quick Actions

#### Emotional Arc

```
Curious → Committed → Engaged → Focused → Anxious → Satisfied → Learning → Excited
```

#### Success Criteria

- Registration completion: 70%
- Assessment completion: 90%
- Onboarding completion: 85%
- Time to dashboard: < 15 minutes

#### Prototype Requirements

- **Critical screens:** Register, Login, Assessment (all steps), Onboarding (all steps), Dashboard
- **Key interactions:** Multi-step form navigation, progress indicators, segment visualization
- **Mock data:** Assessment questions, segment definitions, onboarding steps

---

### Journey R2: First Customer Acquisition

**Persona:** Maria (Reseller)  
**Goal:** Reseller acquires their first customer through referral code  
**Trigger:** Reseller shares referral code with potential customer  
**Release:** MVP

#### Journey Flow

```
Dashboard → Get Referral Code → Share Code → (Customer Converts) → 
Notification → Dashboard Update → Commission View
```

#### Detailed Steps

| Step | Action | Screen | Emotional State | Pain Points |
|------|--------|--------|-----------------|------------|
| R2.1 | Views dashboard, locates referral code | Dashboard Home | Hopeful | Code hard to find? |
| R2.2 | Copies referral code or shareable link | Dashboard Home | Ready | Copy button not working? |
| R2.3 | Shares code via personal channel | External | Vulnerable | Sharing feels awkward? |
| R2.4 | Waits for customer action | — | Anticipating | No feedback on sharing? |
| R2.5 | Receives notification: customer used code | Dashboard Home (notification) | Excited | Notification missed? |
| R2.6 | Views updated dashboard | Dashboard Home | Motivated | Earnings not clear? |
| R2.7 | Checks commission details | Earnings Overview → Commission History | Satisfied | Commission calculation unclear? |

#### Touchpoints

- **Dashboard Home:** Referral code section, share buttons, earnings tile
- **Earnings Overview:** Commission summary, available balance
- **Commission History:** Detailed breakdown by order, level, amount

#### Emotional Arc

```
Hopeful → Ready → Vulnerable → Anticipating → Excited → Motivated → Satisfied
```

#### Success Criteria

- First sale within 30 days: 40%
- Time to first sale: < 14 days
- Referral code usage: 60%

#### Prototype Requirements

- **Critical screens:** Dashboard Home, Earnings Overview, Commission History
- **Key interactions:** Copy referral code, share buttons, commission breakdown
- **Mock data:** Referral codes, commission transactions, earnings progression

---

### Journey R3: Daily Engagement

**Persona:** Maria (Reseller)  
**Goal:** Reseller maintains streak and checks progress  
**Trigger:** Daily habit or streak notification  
**Release:** MVP

#### Journey Flow

```
Login → Dashboard → Check Streak → Review Stats → Check Leaderboard → 
Check Rank Progress → Take Action → Logout
```

#### Detailed Steps

| Step | Action | Screen | Emotional State | Pain Points |
|------|--------|--------|-----------------|------------|
| R3.1 | Opens app/website | Login | Routine | Auto-login not working? |
| R3.2 | Authenticates (if needed) | Login | — | — |
| R3.3 | Views dashboard, sees streak | Dashboard Home | Satisfied | Streak lost? |
| R3.4 | Checks earnings tile | Dashboard Home | Informed | Earnings unclear? |
| R3.5 | Views Hero Board | Dashboard Home → Leaderboard | Competitive | Position dropped? |
| R3.6 | Checks Rank Tracker | Dashboard Home (Rank Tracker section) | Focused | Progress unclear? |
| R3.7 | Reviews impact counters | Dashboard Home → Impact Overview | Proud | Impact not visible? |
| R3.8 | Takes action (share, follow up) | Various | Engaged | — |

#### Touchpoints

- **Dashboard Home:** Streak indicator, earnings tile, Hero Board preview, Rank Tracker
- **Leaderboard:** Full leaderboard with position
- **Impact Overview:** Impact counters, recent donations

#### Emotional Arc

```
Routine → Satisfied → Informed → Competitive → Focused → Proud → Engaged
```

#### Success Criteria

- Daily active users: 40%
- 7-day streak retention: 50%
- Session duration: > 3 minutes

#### Prototype Requirements

- **Critical screens:** Dashboard Home, Leaderboard, Impact Overview
- **Key interactions:** Streak visualization, stat cards, progress indicators
- **Mock data:** Streak data, leaderboard rankings, impact metrics

---

### Journey R4: Team Building

**Persona:** Maria (Reseller)  
**Goal:** Reseller recruits their first team member  
**Trigger:** Reseller decides to build team for additional commission levels  
**Release:** MVP

#### Journey Flow

```
Dashboard → Network Tree → Understand Benefits → Get Recruitment Link → 
Share Opportunity → (Recruit Converts) → Notification → Updated Network Tree
```

#### Detailed Steps

| Step | Action | Screen | Emotional State | Pain Points |
|------|--------|--------|-----------------|------------|
| R4.1 | Views network tree, sees growth potential | Network Tree | Learning | Tree confusing? |
| R4.2 | Learns about multi-level commissions | Network Tree / Dashboard | Motivated | Benefits unclear? |
| R4.3 | Gets reseller recruitment link | Dashboard Home | Ready | Link hard to find? |
| R4.4 | Shares opportunity with contacts | External | Vulnerable | Sharing feels awkward? |
| R4.5 | (Recruit registers using link) | — | — | — |
| R4.6 | Receives notification of new recruit | Dashboard Home (notification) | Excited | Notification missed? |
| R4.7 | Views updated network tree | Network Tree | Proud | Tree not updated? |

#### Touchpoints

- **Network Tree:** Visual hierarchy, empty nodes, expand/collapse
- **Dashboard Home:** Recruitment link section
- **Team List:** Table view of team members

#### Emotional Arc

```
Learning → Motivated → Ready → Vulnerable → Excited → Proud
```

#### Success Criteria

- Resellers with 1+ recruit: 30%
- Time to first recruit: < 60 days
- Recruit activation rate: 50%

#### Prototype Requirements

- **Critical screens:** Network Tree, Team List, Dashboard Home
- **Key interactions:** Tree expand/collapse, node details, recruitment link
- **Mock data:** Network hierarchy, team member data, recruitment scenarios

---

## Customer Journeys

### Journey C1: Discovery and Purchase

**Persona:** Thomas (Customer)  
**Goal:** Customer discovers MIRA, learns about impact, and purchases subscription  
**Trigger:** Customer sees MIRA marketing or referral link  
**Release:** MVP

#### Journey Flow

```
Landing Page → Product Catalogue → Product Detail → Shopping Cart → 
Checkout: Delivery → Checkout: Payment → Order Confirmation → Impact View
```

#### Detailed Steps

| Step | Action | Screen | Emotional State | Pain Points |
|------|--------|--------|-----------------|------------|
| C1.1 | Views landing page, learns about impact | Landing (not in prototype) | Curious | — |
| C1.2 | Browses product catalogue | Product Catalogue | Interested | Products unclear? |
| C1.3 | Views product details | Product Detail | Evaluating | Price/value unclear? |
| C1.4 | Adds product to cart | Product Detail → Cart | Committed | Cart issues? |
| C1.5 | Reviews cart, enters referral code | Shopping Cart | Ready | Referral code invalid? |
| C1.6 | Proceeds to checkout | Checkout: Delivery | Focused | Too many steps? |
| C1.7 | Enters delivery address | Checkout: Delivery | — | Address validation? |
| C1.8 | Selects payment method | Checkout: Payment | Anxious | Payment security concerns? |
| C1.9 | Completes payment | Checkout: Payment → Confirmation | Relieved | Payment failed? |
| C1.10 | Views order confirmation | Order Confirmation | Satisfied | Confirmation unclear? |
| C1.11 | Sees impact contribution | Order Confirmation / Impact View | Proud | Impact not visible? |

#### Touchpoints

- **Product Catalogue:** Product grid, filters, search
- **Product Detail:** Product info, images, pricing, impact preview, add to cart
- **Shopping Cart:** Items, quantities, referral code input, checkout button
- **Checkout: Delivery:** Address form, delivery options
- **Checkout: Payment:** Payment method selection, order summary
- **Order Confirmation:** Order number, delivery date, impact summary

#### Emotional Arc

```
Curious → Interested → Evaluating → Committed → Ready → Focused → 
Anxious → Relieved → Satisfied → Proud
```

#### Success Criteria

- Purchase conversion: 3%
- Cart abandonment: < 50%
- Referral code usage: 40%

#### Prototype Requirements

- **Critical screens:** Product Catalogue, Product Detail, Cart, Checkout (both steps), Confirmation
- **Key interactions:** Add to cart, referral code input, multi-step checkout, impact display
- **Mock data:** Products, pricing, impact metrics, delivery options

---

### Journey C2: Subscription Management

**Persona:** Thomas (Customer)  
**Goal:** Customer manages their subscription (view, modify, pause, cancel)  
**Trigger:** Customer wants to change subscription or check status  
**Release:** MVP

#### Journey Flow

```
Login → My Subscriptions → Subscription Detail → Modify/Pause/Cancel → Confirmation
```

#### Detailed Steps

| Step | Action | Screen | Emotional State | Pain Points |
|------|--------|--------|-----------------|------------|
| C2.1 | Logs in | Login | Routine | Login issues? |
| C2.2 | Views subscription list | My Subscriptions | Informed | Status unclear? |
| C2.3 | Opens subscription detail | Subscription Detail | Evaluating | Options unclear? |
| C2.4 | Modifies frequency or pauses | Subscription Detail | Deciding | Changes confusing? |
| C2.5 | Confirms change | Subscription Detail → Confirmation | Satisfied | Change not saved? |

#### Touchpoints

- **My Subscriptions:** List of active subscriptions with status
- **Subscription Detail:** Full details, modification options, pause/cancel buttons
- **Order History:** Past orders and deliveries

#### Emotional Arc

```
Routine → Informed → Evaluating → Deciding → Satisfied
```

#### Success Criteria

- Subscription retention: 80%
- Pause vs cancel ratio: 3:1
- Modification success: 95%

#### Prototype Requirements

- **Critical screens:** My Subscriptions, Subscription Detail, Order History
- **Key interactions:** Subscription status display, modification UI, pause/cancel flows
- **Mock data:** Subscription data, order history, modification scenarios

---

## Admin Journeys

### Journey A1: Daily Operations

**Persona:** Sarah (Admin)  
**Goal:** Admin monitors platform health and resolves issues  
**Trigger:** Daily routine or alert notification  
**Release:** MVP

#### Journey Flow

```
Login → Admin Overview → Review Alerts → User Management → 
Reseller Detail / Customer Detail → Take Action → Audit Log
```

#### Detailed Steps

| Step | Action | Screen | Emotional State | Pain Points |
|------|--------|--------|-----------------|------------|
| A1.1 | Logs in | Login | Routine | — |
| A1.2 | Views admin overview | Admin Overview | Informed | Metrics unclear? |
| A1.3 | Reviews alerts/notifications | Admin Overview | Focused | Too many alerts? |
| A1.4 | Searches for user | Reseller List / Customer List | Searching | Search not working? |
| A1.5 | Views user detail | Reseller Detail / Customer Detail | Analyzing | Data incomplete? |
| A1.6 | Takes action (activate, deactivate, etc.) | User Detail | Deciding | Action confirmation? |
| A1.7 | Logs activity | Audit Log | Compliant | Audit trail missing? |

#### Touchpoints

- **Admin Overview:** Platform metrics, alerts, quick actions
- **Reseller List / Customer List:** Search, filters, user table
- **User Detail:** Full profile, activity, actions
- **Audit Log:** Activity history, filters, export

#### Emotional Arc

```
Routine → Informed → Focused → Searching → Analyzing → Deciding → Compliant
```

#### Success Criteria

- Issue resolution time: < 2 hours
- User search success: 95%
- Audit trail completeness: 100%

#### Prototype Requirements

- **Critical screens:** Admin Overview, User Lists, User Detail, Audit Log
- **Key interactions:** Search, filters, user actions, audit trail
- **Mock data:** Platform metrics, user lists, audit events

---

### Journey A2: Commission Configuration

**Persona:** Sarah (Admin)  
**Goal:** Admin updates commission rules and deploys changes  
**Trigger:** Business decision to adjust commission rates  
**Release:** MVP

#### Journey Flow

```
Admin Overview → Commission Configuration → Review Current → 
Edit Rates → Preview Impact → Approve → Deploy → Audit Log
```

#### Detailed Steps

| Step | Action | Screen | Emotional State | Pain Points |
|------|--------|--------|-----------------|------------|
| A2.1 | Navigates to commission config | Commission Configuration | Focused | Navigation unclear? |
| A2.2 | Reviews current configuration | Commission Configuration | Informed | Current rates unclear? |
| A2.3 | Edits commission rates | Commission Configuration | Deciding | Validation errors? |
| A2.4 | Previews impact of changes | Commission Configuration | Analyzing | Preview not working? |
| A2.5 | Approves changes | Commission Configuration | Committed | Approval workflow? |
| A2.6 | Deploys configuration | Commission Configuration → Confirmation | Relieved | Deployment failed? |
| A2.7 | Verifies in audit log | Audit Log | Compliant | Audit entry missing? |

#### Touchpoints

- **Commission Configuration:** Rate inputs, current config display, preview, history
- **Audit Log:** Configuration changes, approval records

#### Emotional Arc

```
Focused → Informed → Deciding → Analyzing → Committed → Relieved → Compliant
```

#### Success Criteria

- Configuration change time: < 30 minutes
- Preview accuracy: 100%
- Audit trail completeness: 100%

#### Prototype Requirements

- **Critical screens:** Commission Configuration, Audit Log
- **Key interactions:** Rate inputs, preview, approval workflow, history
- **Mock data:** Current configuration, rate history, impact scenarios

---

## Journey Priority for Prototype

### High Priority (Must Implement)

1. **R1: Reseller Onboarding** - Complete flow from registration to dashboard
2. **C1: Discovery and Purchase** - Complete purchase flow
3. **R3: Daily Engagement** - Dashboard and key views
4. **A1: Daily Operations** - Admin overview and user management

### Medium Priority (Should Implement)

5. **R2: First Customer Acquisition** - Referral code and commission view
6. **C2: Subscription Management** - Subscription list and detail
7. **A2: Commission Configuration** - Configuration interface

### Low Priority (Can Simplify)

8. **R4: Team Building** - Network tree (simplified)
9. **R5: Rank Advancement** - Rank tracker (basic)
10. **R6: Payout Request** - Earnings view (basic)

---

## Prototype Screen Mapping

Based on journeys, these screens are critical:

### Reseller Screens (Priority Order)
1. Login
2. Register Reseller
3. Assessment Intro
4. Assessment Questions
5. Assessment Result
6. Onboarding Checklist
7. Training Step
8. Agreement Step
9. Dashboard Home
10. Earnings Overview
11. Commission History
12. Network Tree
13. Team List
14. Impact Overview
15. Leaderboard
16. Badges & Achievements

### Customer Screens (Priority Order)
1. Login
2. Register Customer
3. Product Catalogue
4. Product Detail
5. Shopping Cart
6. Checkout: Delivery
7. Checkout: Payment
8. Order Confirmation
9. My Subscriptions
10. Subscription Detail
11. Order History

### Admin Screens (Priority Order)
1. Login
2. Admin Overview
3. Reseller List
4. Customer List
5. Order Management
6. Commission Configuration
7. Commission Ledger
8. Audit Log
9. System Settings

---

*This document guides the UX prototype implementation, ensuring all critical user journeys are represented and testable.*
