# Quick Reference: Where to Edit What

## 🎨 Want to change COLORS?
→ **Edit:** `tailwind.config.js` (lines 9-74)

## 📝 Want to change TEXT?
→ **Edit:**
- English: `src/i18n/locales/en.json`
- German: `src/i18n/locales/de.json`

## 🏠 Want to edit the HOMEPAGE/DASHBOARD?
→ **Edit:** `src/pages/customer/CustomerDashboardHome.tsx`

## 🛒 Want to edit the SHOP page?
→ **Edit:** `src/pages/customer/CustomerShop.tsx`

## 🔐 Want to edit LOGIN page?
→ **Edit:** `src/pages/auth/Login.tsx`

## 🧭 Want to change NAVIGATION menu?
→ **Edit:** `src/components/AppMenu.tsx` or `src/components/MobileNavDrawer.tsx`

## 🎯 Want to change BUTTONS globally?
→ **Edit:** `node_modules/@mira/ui/index.tsx` (Button component)

## 📱 Want to change HEADER?
→ **Edit:** `src/components/HeaderAppMenu.tsx`

## 🦶 Want to change FOOTER?
→ **Edit:** `src/components/Footer.tsx`

## ➕ Want to ADD A NEW PAGE?
1. Create: `src/pages/customer/YourNewPage.tsx`
2. Add route in: `src/App.tsx`
3. Add navigation link in: `src/components/AppMenu.tsx`

---

## File Structure Quick Map

```
mirav1/
├── src/
│   ├── pages/
│   │   ├── customer/          ← Customer-facing pages
│   │   ├── reseller/          ← Reseller pages
│   │   ├── admin/             ← Admin pages
│   │   ├── auth/              ← Login, register, etc.
│   │   └── shared/            ← Shared pages (settings, profile)
│   │
│   ├── components/            ← Reusable UI components
│   │   ├── AppMenu.tsx        ← Main navigation
│   │   ├── Header*.tsx        ← Header components
│   │   └── Footer.tsx         ← Footer
│   │
│   ├── i18n/locales/          ← Translations
│   │   ├── en.json            ← English text
│   │   └── de.json            ← German text
│   │
│   ├── data/
│   │   └── mockData.ts        ← Sample/demo data
│   │
│   ├── App.tsx                ← Main app & routing
│   └── index.css              ← Global styles
│
├── dist/                      ← Built files (deployed to web)
├── tailwind.config.js         ← Colors & design tokens
├── vite.config.js             ← Build configuration
└── vercel.json                ← Deployment config

```

---

## Most Common Edits

| What to Change | File to Edit | Line/Section |
|----------------|--------------|--------------|
| Primary color (green) | `tailwind.config.js` | Lines 11-23 |
| Accent color (yellow) | `tailwind.config.js` | Lines 25-36 |
| Any text in English | `src/i18n/locales/en.json` | Search for text |
| Any text in German | `src/i18n/locales/de.json` | Search for text |
| Homepage layout | `src/pages/customer/CustomerDashboardHome.tsx` | Whole file |
| Navigation items | `src/components/AppMenu.tsx` | Look for nav array |
| Logo/branding | `src/components/HeaderAppMenu.tsx` | Logo section |

---

## Testing Your Changes

1. **Save the file** you edited
2. **Open** http://21.0.0.162:5173/ in your browser
3. **See changes** instantly (auto-refresh)
4. **If changes don't appear:**
   - Hard refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`
   - Or restart dev server: `Ctrl+C` then `pnpm dev`

---

## Deploying Your Changes

```bash
# After you're happy with changes:
git add .
git commit -m "Describe what you changed"
git push

# Vercel auto-deploys in 2-5 minutes to:
# https://mirav1.kiarbeitskraft.de/
```

---

## Find Anything Fast

```bash
# Find where text appears:
grep -r "text to find" src/

# Find a file:
find src -name "*keyword*"

# Find a component:
find src -name "*Button*"
```

---

## Color Picker Helper

Current brand colors:
- **Primary (Forest Green):** `#059669`
- **Hover (Darker Green):** `#047857`
- **Accent (Amber):** `#F59E0B`
- **Background (Light Gray):** `#F8FAFC`
- **Text (Dark):** `#0F172A`

Use these in `tailwind.config.js` to change your color scheme!
