import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './', // Relative paths for easy sharing
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure single-page app works when opened as file://
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    // Ensure all assets are included
    assetsInlineLimit: 0,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true, // Expose on network
    open: false, // Don't try to open browser
  },
});
