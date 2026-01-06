# Deployment Guide

**Document Version:** 1.0  
**Date:** 2025-12-29

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

This guide explains how to deploy the MIRA UX Prototype with password protection to various hosting platforms.

## Overview

The prototype uses a simple password-based authentication system. The password is configured via the `VITE_DEMO_PASSWORD` environment variable, which is embedded into the build at build time.

## Environment Variable Setup

The demo password must be set as an environment variable before building:

```
VITE_DEMO_PASSWORD=your-demo-password-here
```

**Important**: 
- The password is embedded in the built JavaScript files
- Anyone with access to the built files can extract the password
- This is suitable for demo protection only, not for production security
- Share the password only with authorized demo users

## Deployment Platforms

### Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Set Environment Variable**:
   - Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
   - Navigate to **Settings** > **Environment Variables**
   - Add:
     - **Name**: `VITE_DEMO_PASSWORD`
     - **Value**: Your demo password
     - **Environment**: Production, Preview, Development (as needed)

3. **Deploy**:
   ```bash
   # From ux-prototype directory
   vercel --prod
   ```

   Or connect your Git repository for automatic deployments.

4. **Build Settings** (if using Git integration):
   - **Framework Preset**: Vite
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`

### Railway

1. **Create New Project**:
   - Go to [Railway](https://railway.app)
   - Click **New Project** > **Deploy from GitHub repo** (or upload code)

2. **Set Environment Variable**:
   - In your Railway project, go to **Variables** tab
   - Add:
     - **Key**: `VITE_DEMO_PASSWORD`
     - **Value**: Your demo password

3. **Configure Service**:
   - **Build Command**: `pnpm install && pnpm build`
   - **Start Command**: `npx serve dist -p $PORT`
   - Or use Railway's static site template

4. **Deploy**:
   - Railway will automatically deploy on push to your connected branch
   - Or trigger a manual deployment

### Render

1. **Create Static Site**:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click **New** > **Static Site**

2. **Connect Repository**:
   - Connect your Git repository
   - Select the branch to deploy

3. **Configure Build**:
   - **Build Command**: `cd ux-prototype && pnpm install && pnpm build`
   - **Publish Directory**: `ux-prototype/dist`

4. **Set Environment Variable**:
   - Go to **Environment** section
   - Add:
     - **Key**: `VITE_DEMO_PASSWORD`
     - **Value**: Your demo password

5. **Deploy**:
   - Click **Create Static Site**
   - Render will build and deploy automatically

### Netlify

1. **Install Netlify CLI** (optional):
   ```bash
   npm i -g netlify-cli
   ```

2. **Set Environment Variable**:
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Navigate to **Site settings** > **Environment variables**
   - Add:
     - **Key**: `VITE_DEMO_PASSWORD`
     - **Value**: Your demo password

3. **Deploy**:
   ```bash
   # From ux-prototype directory
   netlify deploy --prod --dir=dist
   ```

   Or connect your Git repository for automatic deployments.

4. **Build Settings** (if using Git integration):
   - **Base directory**: `ux-prototype`
   - **Build command**: `pnpm install && pnpm build`
   - **Publish directory**: `ux-prototype/dist`

## Local Development

For local development, create a `.env` file in the `ux-prototype` directory:

```bash
# .env
VITE_DEMO_PASSWORD=your-local-password
```

Then run:
```bash
pnpm dev
```

## Build Process

The build process embeds the environment variable into the JavaScript bundle:

1. Vite reads `VITE_DEMO_PASSWORD` from environment
2. Variable is replaced at build time using `import.meta.env.VITE_DEMO_PASSWORD`
3. Built files in `dist/` contain the password (obfuscated but extractable)

## Security Considerations

⚠️ **Important Security Notes**:

1. **Not Production Security**: This is a simple demo protection mechanism. It prevents casual access but is not secure against determined attackers.

2. **Password Visibility**: The password is embedded in the JavaScript bundle. Anyone with:
   - Access to the built files
   - Browser developer tools
   - Network inspection tools
   
   Can extract the password.

3. **Use Cases**: Suitable for:
   - ✅ Protecting demo prototypes from casual browsing
   - ✅ Preventing search engine indexing
   - ✅ Basic access control for stakeholder demos
   
   Not suitable for:
   - ❌ Production applications
   - ❌ Sensitive data protection
   - ❌ Real authentication systems

4. **Password Sharing**: Share the password securely with authorized users only (e.g., via secure communication channels, not in public repositories).

## Troubleshooting

### Password Not Working

- **Check Environment Variable**: Ensure `VITE_DEMO_PASSWORD` is set correctly
- **Rebuild**: The password is embedded at build time, so you must rebuild after changing it
- **Clear Cache**: Clear browser cache and hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

### Build Fails

- **Check Variable Name**: Must be exactly `VITE_DEMO_PASSWORD` (Vite requires `VITE_` prefix)
- **Check Build Logs**: Look for environment variable warnings in build output

### Deployment Issues

- **Platform-Specific**: Some platforms require environment variables to be set before the first build
- **Build Command**: Ensure build command includes `pnpm build` or `npm run build`
- **Output Directory**: Verify the platform is serving from `dist/` directory

## Example Deployment Scripts

### Vercel (vercel.json)
```json
{
  "buildCommand": "cd ux-prototype && pnpm install && pnpm build",
  "outputDirectory": "ux-prototype/dist",
  "framework": "vite"
}
```

### Railway (railway.json)
```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "cd ux-prototype && pnpm install && pnpm build"
  },
  "deploy": {
    "startCommand": "npx serve dist -p $PORT"
  }
}
```

---

For questions or issues, refer to the main [README.md](./README.md) or the platform-specific documentation.

