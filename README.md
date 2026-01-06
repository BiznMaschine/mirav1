# MIRA UX Prototype

A standalone UX prototype for validating user journeys before implementation. This prototype visualizes all MVP screens with high-level layouts and interactions, using the MIRA UI kit as foundation.

## Features

- **Password Protection**: Simple demo password protection to secure the prototype
- **Role Switching**: Switch between Reseller, Customer, and Admin views
- **Mock Data**: All data is hardcoded for easy testing
- **Static Output**: Builds to static HTML files that can be easily shared
- **No Backend Required**: Completely client-side
- **UI Kit Integration**: Uses `@mira/ui` components throughout

## Quick Start

```bash
# Install dependencies
pnpm install

# Set demo password (create .env file)
echo "VITE_DEMO_PASSWORD=your-password-here" > .env

# Start development server
pnpm dev

# Build for production (outputs to dist/)
pnpm build

# Preview production build
pnpm preview

# Run tests
pnpm test

# Run E2E tests
pnpm test:e2e
```

### Password Configuration

The prototype is protected by a demo password. Set it using the `VITE_DEMO_PASSWORD` environment variable:

1. **Development**: Create a `.env` file in the `ux-prototype` directory:
   ```
   VITE_DEMO_PASSWORD=your-demo-password-here
   ```

2. **Production/Deployment**: Set the environment variable in your deployment platform:
   - **Vercel**: Project Settings > Environment Variables
   - **Railway**: Variables tab
   - **Render**: Environment section

See `DEPLOYMENT.md` for detailed deployment instructions.

## Sharing the Prototype

### Easiest Option: File Sharing (Recommended)

Create a shareable ZIP file with all prototype files:

```bash
pnpm package
```

This will:
- Build the prototype
- Create a ZIP file (`mira-prototype-YYYYMMDD.zip`)
- Include a README with instructions

**Just share the ZIP file!** The recipient:
1. Extracts the ZIP
2. Opens `dist/index.html` in their browser
3. If that doesn't work, uses a local server (instructions included)

All files are self-contained - no deployment needed!

### Other Options

**Option 2: Network Server**
```bash
pnpm share
```
Starts a server accessible on your network at `http://YOUR_IP:3001`

**Option 3: Manual ZIP**
1. Build: `pnpm build`
2. Compress the `dist/` folder
3. Share the ZIP

**Option 4: Static Hosting**
Deploy `dist/` folder to Vercel, Netlify, or any static host.

See `FILE_SHARING.md` for detailed file sharing instructions.

### Option 2: Deploy to Vercel/Netlify

The prototype can be deployed to any static hosting service:

**Vercel:**
```bash
vercel --prod
```

**Netlify:**
```bash
netlify deploy --prod
```

### Option 3: Direct File (Limited)

You can open `dist/index.html` directly in a browser, but some features may not work due to CORS restrictions. Use a local server instead.

## User Journeys

### Reseller Journey

1. **Login** → Enter demo password → Select "Reseller" role
2. **Assessment Intro** → Read consent → Start Assessment
3. **Assessment Questions** → Answer 12 questions → Complete
4. **Assessment Result** → View segment assignment → Continue
5. **Onboarding Checklist** → Complete training → Review agreement
6. **Dashboard Home** → View earnings, network, impact, leaderboard
7. **Network Tree** → Explore team structure
8. **Earnings Overview** → View commissions and payouts
9. **Impact Overview** → See contribution to animal welfare

### Customer Journey

1. **Login** → Enter demo password → Select "Customer" role
2. **Product Catalogue** → Browse products → View details
3. **Product Detail** → Select size/frequency → Add to cart
4. **Shopping Cart** → Enter referral code → Checkout
5. **Checkout: Delivery** → Enter address → Continue
6. **Checkout: Payment** → Select payment method → Complete
7. **Order Confirmation** → View impact → Continue shopping
8. **My Subscriptions** → Manage subscriptions
9. **Order History** → View past orders

### Admin Journey

1. **Login** → Enter demo password → Select "Admin" role
2. **Admin Overview** → View platform metrics
3. **Reseller List** → Search and filter resellers
4. **Customer List** → Search and filter customers
5. **Order Management** → View and manage orders
6. **Commission Configuration** → Edit commission rates → Preview → Save
7. **Commission Ledger** → View detailed transactions
8. **Audit Log** → Review activity history

## Screen Inventory

The prototype includes **45 screens** covering all MVP functionality:

- **Authentication**: 6 screens (Login, Register x2, Password Reset x2, Email Verification)
- **Reseller Onboarding**: 6 screens (Assessment Intro, Questions, Result, Checklist, Training, Agreement)
- **Reseller Dashboard**: 11 screens (Home, Network, Team, Earnings, Commission History, Impact, Milestones, Badges, Leaderboard)
- **Customer Shop**: 6 screens (Catalogue, Detail, Cart, Checkout x2, Confirmation)
- **Customer Account**: 3 screens (Subscriptions, Subscription Detail, Order History)
- **Admin Dashboard**: 8 screens (Overview, Lists x3, Orders, Commission Config, Ledger, Audit, Settings)
- **Settings**: 7 screens (Profile, Security, Notifications, Payout, Address, Payment, Privacy)

## Role Switching

Use the role selector in the top navigation bar to switch between:
- **Reseller**: Full reseller dashboard and onboarding flow
- **Customer**: Shop and account management
- **Admin**: Platform administration and configuration

## Mock Data

All data is hardcoded in `src/data/mockData.ts`:
- 3 mock resellers with complete profiles
- 2 mock customers
- 3 mock products with SKUs
- 2 mock orders
- 2 mock commissions
- Network tree structure
- Leaderboard data
- Platform metrics

## Testing

### Unit Tests

```bash
pnpm test
```

Tests cover:
- Component rendering
- Navigation functions
- Role switching
- Mock data structure

### E2E Tests

```bash
pnpm test:e2e
```

E2E tests cover:
- Complete user journeys (reseller onboarding, customer purchase)
- Role switching
- Navigation between screens

## Project Structure

```
ux-prototype/
├── docs/                  # Documentation
│   ├── personas.md
│   ├── journeys.md
│   └── spec.md
├── src/
│   ├── pages/            # Screen components
│   │   ├── auth/
│   │   ├── reseller/
│   │   ├── customer/
│   │   ├── admin/
│   │   └── shared/
│   ├── components/       # Prototype-specific components
│   ├── data/            # Mock data
│   ├── hooks/           # Custom hooks
│   ├── test/            # Test setup
│   ├── App.tsx
│   └── main.tsx
├── e2e/                  # E2E tests
├── dist/                 # Build output (generated)
└── README.md
```

## Technology Stack

- **Framework**: Vite + React (TypeScript)
- **Styling**: Tailwind CSS (MIRA design tokens)
- **UI Components**: `@mira/ui` package
- **Testing**: Vitest (unit) + Playwright (E2E)
- **Build**: Static HTML/CSS/JS output

## Notes

- This is a **prototype only** - no real functionality
- All navigation is client-side state-based routing
- Mock data is defined in `src/data/mockData.ts`
- Design uses MIRA design tokens from `@mira/ui`
- All screens are high-level layouts (no deep CRUD operations)

## Troubleshooting

### Build Issues

If the build fails:
1. Ensure `@mira/ui` package is built: `cd packages/ui && pnpm build`
2. Check that all dependencies are installed: `pnpm install`

### UI Kit Import Issues

If components don't import:
1. Verify `@mira/ui` is in workspace: `pnpm-workspace.yaml`
2. Rebuild UI package: `cd packages/ui && pnpm build`

### Static File Issues

If files don't load when opened directly:
- Use a local server: `npx serve dist`
- Or deploy to static hosting

---

*This prototype is used to validate user experience and content before implementing the real MVP. It will be used to reverse engineer the actual screens for production.*
