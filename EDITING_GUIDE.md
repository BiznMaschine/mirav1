# Quick Editing Guide for MIRA Prototype

**Live Site:** https://mirav1.kiarbeitskraft.de/

This guide shows you how to make common changes when your client requests modifications.

---

## 🎨 1. Changing Colors

**File:** `tailwind.config.js`

### Change Primary Brand Color (Green/Forest)
```javascript
// Line 11-23 in tailwind.config.js
forest: {
  600: '#059669',  // Main brand color - change this hex value
  700: '#047857',  // Hover state
  // ... other shades
}
```

### Change Accent Color (Amber/Yellow)
```javascript
// Line 25-36 in tailwind.config.js
amber: {
  500: '#F59E0B',  // Main accent - change this hex value
  600: '#D97706',  // Darker version
}
```

**After changing colors:**
```bash
# The dev server will auto-reload
# Your changes appear immediately at http://21.0.0.162:5173/
```

---

## 📝 2. Changing Text & Translations

**Files:**
- `src/i18n/locales/en.json` (English text)
- `src/i18n/locales/de.json` (German text)

### Example: Change Homepage Welcome Text
```json
// src/i18n/locales/en.json
{
  "welcome": "Welcome back",  // Change this
  "dashboard": {
    "title": "Dashboard",     // Or this
    "subtitle": "Your overview"
  }
}
```

### Example: Change Button Text
```json
// Search for the button text in en.json and de.json
{
  "buttons": {
    "save": "Save",           // Change to "Submit" or whatever you need
    "cancel": "Cancel",
    "continue": "Continue"
  }
}
```

---

## 🧭 3. Changing Navigation

**File:** `src/components/AppMenu.tsx` or check specific layout files

### For Reseller Navigation
**File:** Look for navigation in `src/pages/reseller/` components

### For Customer Navigation
**File:** Look for navigation in `src/pages/customer/` components

### Example Navigation Change:
```tsx
// Find the navigation array and modify:
const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { label: 'Products', href: '/products', icon: ShoppingIcon },  // Change label
  // Add new item:
  { label: 'New Page', href: '/new-page', icon: NewIcon },
]
```

---

## 📄 4. Creating a New Page

### Step 1: Create the Page File
```bash
# Create new file in appropriate folder
# For customer page:
touch src/pages/customer/NewPage.tsx

# For reseller page:
touch src/pages/reseller/NewPage.tsx

# For admin page:
touch src/pages/admin/NewPage.tsx
```

### Step 2: Page Template
```tsx
// src/pages/customer/NewPage.tsx
import { useTranslation } from 'react-i18next';
import { Card, Button, PageHeader } from '@mira/ui';

export default function NewPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader
        title="My New Page"
        subtitle="Page description here"
      />

      <Card className="mt-6">
        <h2 className="text-xl font-bold mb-4">Content Section</h2>
        <p className="text-slate-600">
          Your content goes here...
        </p>

        <Button className="mt-4">
          Click Me
        </Button>
      </Card>
    </div>
  );
}
```

### Step 3: Add Route to App.tsx
```tsx
// src/App.tsx - add import
import NewPage from './pages/customer/NewPage';

// Then add route in the routing section
<Route path="/new-page" element={<NewPage />} />
```

### Step 4: Add to Navigation
Add the link to your navigation component (see section 3 above)

---

## 🎯 5. Modifying Existing Pages

### Find the Page You Want to Edit
```bash
# Search for text that appears on the page
grep -r "Welcome back" src/
# This will show you which file contains that text

# Or search by page path
# If URL is /dashboard, look for:
src/pages/*/Dashboard*.tsx
```

### Common Page Locations
- **Dashboard:** `src/pages/customer/CustomerDashboardHome.tsx`
- **Shop:** `src/pages/customer/CustomerShop.tsx`
- **Profile:** Check `src/pages/shared/` folder
- **Login:** `src/pages/auth/Login.tsx`

### Example: Change a Button
```tsx
// Find the button in the page file
<Button
  className="bg-forest-600"     // Change color class
  onClick={handleClick}
>
  Save Changes                   // Change button text
</Button>
```

### Example: Change Layout
```tsx
// Wrap content in different containers
<div className="grid grid-cols-2 gap-4">    // 2 columns
  <Card>Left content</Card>
  <Card>Right content</Card>
</div>

// Or single column
<div className="max-w-2xl mx-auto">         // Centered narrow layout
  <Card>Content</Card>
</div>
```

---

## 🖼️ 6. Changing Element Styles

### Common Tailwind Classes You Can Change

**Colors:**
```tsx
bg-forest-600      // Background: forest green
bg-amber-500       // Background: amber/yellow
text-slate-900     // Text: dark gray
text-white         // Text: white
border-slate-200   // Border: light gray
```

**Spacing:**
```tsx
p-4     // Padding all sides (4 = 1rem = 16px)
px-6    // Padding left/right
py-3    // Padding top/bottom
m-4     // Margin
gap-4   // Gap between grid/flex items
```

**Sizes:**
```tsx
w-full      // Width 100%
w-1/2       // Width 50%
h-64        // Fixed height
max-w-4xl   // Maximum width
```

**Borders & Rounded Corners:**
```tsx
rounded-lg      // Medium rounded corners
rounded-full    // Fully rounded (pills/circles)
border          // Add border
border-2        // Thicker border
```

---

## ⚡ 7. Quick Edit Workflow

### For Small Changes (text, colors, etc.):

1. **Edit the file** in your code editor
2. **Save the file**
3. **Check the dev server** at http://21.0.0.162:5173/
4. **When happy, commit & push:**
   ```bash
   git add .
   git commit -m "Update button colors and text"
   git push
   ```
5. **Vercel auto-deploys** to https://mirav1.kiarbeitskraft.de/

### For Bigger Changes (new pages, major layout):

1. **Create a new branch:**
   ```bash
   git checkout -b feature/new-client-page
   ```

2. **Make your changes**

3. **Test locally** at http://21.0.0.162:5173/

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add new client dashboard page"
   git push -u origin feature/new-client-page
   ```

5. **Review on Vercel preview URL** (Vercel creates preview for each branch)

6. **Merge when approved**

---

## 🔄 8. Deployment Process

**Current Setup:**
- ✅ **Local dev server:** http://21.0.0.162:5173/ (instant preview)
- ✅ **Production site:** https://mirav1.kiarbeitskraft.de/
- ✅ **Auto-deployment:** Every push to `claude/setup-dev-environment-cf4Ny` deploys automatically

**Workflow:**
```
Edit File → Save → See changes locally → Commit → Push → Auto-deploy (2-5 min)
```

---

## 🛠️ 9. Common Client Requests & How to Handle

### "Change the logo"
- Replace image file in `public/` folder or update logo component

### "Make the buttons bigger"
- Add `text-lg` or `px-6 py-3` classes to Button components

### "Change the main color from green to blue"
- Edit `tailwind.config.js`, change forest color values
- Search and replace `forest` with `blue` in components if needed

### "Add a contact form"
- Create new page in `src/pages/shared/ContactForm.tsx`
- Use Input and Button components from `@mira/ui`
- Add route in `App.tsx`

### "Rearrange the dashboard widgets"
- Edit `src/pages/customer/CustomerDashboardHome.tsx`
- Rearrange the `<div>` containers

### "Change German translations"
- Edit `src/i18n/locales/de.json`
- Find and update the relevant text

---

## 📚 10. Useful Commands

```bash
# Start dev server
pnpm dev

# Find text in files
grep -r "Search text" src/

# Find a file by name
find src -name "*Dashboard*"

# Check what's changed
git status
git diff

# Commit changes
git add .
git commit -m "Your change description"
git push

# Create new branch for feature
git checkout -b feature/my-new-feature
```

---

## 🎓 11. Learning Resources

**Tailwind CSS (for styling):**
- https://tailwindcss.com/docs
- Search for any class like "bg-blue-500" to see all color options

**React (for components):**
- https://react.dev/

**Translation Keys:**
- Check `src/i18n/locales/en.json` for all available text keys

---

## 💡 Pro Tips

1. **Always test locally first** before pushing to production
2. **Use descriptive commit messages** so you can track changes
3. **Make small, focused changes** rather than big updates
4. **Keep a backup** of working versions
5. **Use the translation files** for all text (easier to change later)
6. **Reuse existing components** - look at similar pages for examples

---

## 🆘 Need Help?

**Common issues:**
- **Dev server not updating?** Restart it: `Ctrl+C` then `pnpm dev`
- **Vercel not deploying?** Check deployment logs in Vercel dashboard
- **Colors not changing?** Make sure you saved the file and restarted dev server
- **Page not found?** Check that you added the route in `App.tsx`

---

**Quick Reference:**
- 🎨 Colors: `tailwind.config.js`
- 📝 Text: `src/i18n/locales/`
- 📄 Pages: `src/pages/`
- 🧭 Navigation: `src/components/`
- 🌐 Live site: https://mirav1.kiarbeitskraft.de/
- 💻 Dev server: http://21.0.0.162:5173/
