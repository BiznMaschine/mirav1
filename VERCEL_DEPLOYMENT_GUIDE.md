# Deploy to Vercel with Custom Domain: mirav1.kiarbeitskraft.de

## Quick Deployment Steps

### Option 1: Using Vercel CLI (Recommended)

#### Step 1: Login to Vercel
```bash
cd /home/user/mirav1
vercel login
```
This will open a browser or provide a link to authenticate.

#### Step 2: Deploy to Production
```bash
vercel --prod
```

The deployment will use the pre-built `dist/` folder and the configuration in `vercel.json`.

#### Step 3: Add Custom Domain
After deployment, you'll get a URL like `https://mirav1-xyz.vercel.app`

**Via CLI:**
```bash
vercel domains add mirav1.kiarbeitskraft.de
```

**Via Dashboard:**
1. Go to https://vercel.com/dashboard
2. Select your project (mirav1)
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter: `mirav1.kiarbeitskraft.de`
6. Click **Add**

### Option 2: Using Vercel Token (Automated)

If you want to automate deployment:

#### Step 1: Get Vercel Token
1. Go to https://vercel.com/account/tokens
2. Create a new token
3. Copy the token

#### Step 2: Set Token and Deploy
```bash
export VERCEL_TOKEN="your-token-here"
vercel --prod --token=$VERCEL_TOKEN --yes
```

### Option 3: GitHub Integration (Easiest for Continuous Deployment)

1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Connect your GitHub account
4. Select the `BiznMaschine/mirav1` repository
5. Configure:
   - **Framework Preset**: Other
   - **Build Command**: Leave empty (using pre-built dist)
   - **Output Directory**: `dist`
6. Click **Deploy**

Then add your custom domain in the Vercel dashboard.

## DNS Configuration for kiarbeitskraft.de

After adding the domain in Vercel, you'll need to configure DNS:

### Add CNAME Record
Go to your DNS provider for `kiarbeitskraft.de` and add:

```
Type:  CNAME
Name:  mirav1
Value: cname.vercel-dns.com
TTL:   Auto or 3600
```

**Alternative (if CNAME doesn't work at root):**
```
Type:  A
Name:  mirav1
Value: 76.76.21.21
```

### Verification
After adding the DNS record:
- DNS propagation takes 5-30 minutes
- Check status: `dig mirav1.kiarbeitskraft.de`
- Or visit: https://dnschecker.org/#CNAME/mirav1.kiarbeitskraft.de

## Current Setup
- ✅ Vercel CLI installed
- ✅ vercel.json configured
- ✅ Pre-built dist/ folder ready
- ✅ Development server running at http://21.0.0.162:5173/

## Next Steps
1. Run `vercel login` to authenticate
2. Run `vercel --prod` to deploy
3. Add domain `mirav1.kiarbeitskraft.de` in Vercel dashboard
4. Configure DNS CNAME record
5. Wait for DNS propagation
6. Access your site at https://mirav1.kiarbeitskraft.de

## Troubleshooting

### If deployment fails:
- Make sure you're in the `/home/user/mirav1` directory
- Check that `dist/` folder exists and has files
- Verify Vercel authentication: `vercel whoami`

### If custom domain doesn't work:
- Verify DNS configuration: `dig mirav1.kiarbeitskraft.de`
- Check Vercel dashboard for domain status
- Wait 30 minutes for DNS propagation
- Try clearing DNS cache: `sudo systemd-resolve --flush-caches`

## Support
- Vercel Documentation: https://vercel.com/docs
- DNS Help: https://vercel.com/docs/custom-domains
