import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // Local build (.env has VITE_BASE_URL=/): deploys to Hostinger root domain
    // CI build (GitHub Actions sets VITE_BASE_URL=/devgrate/): deploys to GitHub Pages
    base: env.VITE_BASE_URL || '/devgrate/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
