import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/younus-younus.github.io/',
  plugins: [react()],
  optimizeDeps: {
    include: ['react-router-dom'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
    },
  },
});