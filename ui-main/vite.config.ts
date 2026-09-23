import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  // For GitHub Pages: VITE_BASE_URL=/devgrate/ (set via GitHub Secrets)
  // For Hostinger root domain: VITE_BASE_URL=/ (set in .env)
  base: process.env.VITE_BASE_URL || '/devgrate/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
