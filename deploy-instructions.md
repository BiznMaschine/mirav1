# Deployment Instructions

## Current Status
- ✅ Development server running at: http://21.0.0.162:5173/ (local network)
- ✅ Pre-built production files in `/dist` folder
- ✅ Vercel CLI installed

## Option 1: Deploy to Vercel with Custom Domain (Recommended)

### Step 1: Login to Vercel
```bash
vercel login
```

### Step 2: Deploy
```bash
cd /home/user/mirav1
vercel --prod
```

### Step 3: Add Custom Subdomain
1. Go to https://vercel.com/dashboard
2. Select your project
3. Navigate to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter your subdomain (e.g., `demo.yourdomain.com`)
6. Vercel will provide DNS configuration

### Step 4: Configure DNS
Add a CNAME record to your DNS provider:
- **Type**: CNAME
- **Name**: your-subdomain (e.g., `demo`)
- **Value**: `cname.vercel-dns.com`
- **TTL**: Automatic or 3600

DNS propagation typically takes 5-30 minutes.

## Option 2: Deploy to Netlify with Custom Domain

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login
```bash
netlify login
```

### Step 3: Deploy
```bash
cd /home/user/mirav1
netlify deploy --prod --dir=dist
```

### Step 4: Add Custom Domain
```bash
netlify domains:add your-subdomain.yourdomain.com
```

Then add the provided DNS records to your domain provider.

## Option 3: Quick Public URL (Temporary)

For a quick shareable URL without custom domain setup:

```bash
npx ngrok http 5173
```

This gives you a temporary public URL like `https://abc123.ngrok.io`

Note: This URL is temporary and will change when you restart ngrok.

## Currently Running
- Development server: http://21.0.0.162:5173/ (local network only)

## What subdomain do you want to use?
Once you tell me your subdomain, I can help you configure it!
