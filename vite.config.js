import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PortfolioGenerator', // Base path for GitHub Pages
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
});
