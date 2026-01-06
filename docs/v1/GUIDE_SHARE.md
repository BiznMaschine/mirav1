# Sharing the MIRA UX Prototype

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

## Quick Share Options

### Option 1: Simple Local Server (Recommended)
After building, run:
```bash
pnpm share
```
This starts a local server at `http://localhost:3001` that you can access from any device on your network.

**To share with others:**
1. Find your local IP address:
   - Mac/Linux: `ifconfig | grep "inet "` or `ipconfig getifaddr en0`
   - Windows: `ipconfig`
2. Share the URL: `http://YOUR_IP:3001`
3. Others on the same network can access it

### Option 2: Vite Preview
```bash
pnpm preview
```
Starts a preview server at `http://localhost:4173`

### Option 3: Python Simple Server
If you have Python installed:
```bash
cd dist
python3 -m http.server 8000
```
Then access at `http://localhost:8000`

### Option 4: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `dist/index.html`
3. Select "Open with Live Server"

### Option 5: ZIP and Share
1. Compress the `dist/` folder
2. Share the ZIP file
3. Recipient extracts and opens `index.html` in a browser
   - **Note**: Some features may not work due to CORS restrictions when opening directly
   - **Better**: Recipient should use a local server (see Option 3)

### Option 6: Cloud Storage (Google Drive, Dropbox, etc.)
1. Upload the `dist/` folder to cloud storage
2. Share the link
3. Recipient downloads and uses a local server (see Option 3)

## Best Practice for File Sharing

**Recommended workflow:**
1. Build: `pnpm build`
2. Create a ZIP: `zip -r mira-prototype.zip dist/`
3. Include instructions: Share `SHARE.md` with the ZIP
4. Recipient: Extracts ZIP and runs `python3 -m http.server 8000` in the `dist/` folder

## Network Sharing

For sharing on the same network:
```bash
# Start server accessible on network
pnpm share
# or
npx serve dist -p 3001 -l
```

Then share: `http://YOUR_IP_ADDRESS:3001`

## Troubleshooting

**If files don't load when opened directly:**
- Use a local server (Options 1-4)
- This is due to browser security restrictions with `file://` protocol

**If styles don't load:**
- Ensure you're using a local server, not opening `file://` directly
- Check browser console for errors

**If network sharing doesn't work:**
- Check firewall settings
- Ensure devices are on the same network
- Try using `--host 0.0.0.0` flag
