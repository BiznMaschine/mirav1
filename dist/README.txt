MIRA UX Prototype - File Sharing Version
==========================================

HOW TO USE:
-----------
1. Open index.html in your web browser
   - Double-click index.html, or
   - Right-click → Open With → Your Browser

2. If you see errors (CORS/module issues):
   - Use a local server (see below)
   - Modern browsers block file:// protocol for ES modules

LOCAL SERVER (Recommended):
---------------------------
Option 1 - Python:
  Open terminal in this folder and run:
  python3 -m http.server 8000
  Then open: http://localhost:8000
  Then navigate to folder where the ZIP was extracted and select Dist/Index.html
  e.g http://localhost:9000/Downloads/mira-prototype-20261229/dist/index.html

Option 2 - Node.js:
  npx serve . -p 8000

Option 3 - VS Code:
  Install "Live Server" extension
  Right-click index.html → "Open with Live Server"

SHARING:
--------
Share this entire folder as a ZIP file.
The recipient extracts and opens index.html.

All files are self-contained - no internet needed!
