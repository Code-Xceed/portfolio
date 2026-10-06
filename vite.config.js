import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    cors: true,
  },
  build: {
    // The atlas artwork, the WebGL scenes and React all change on very different
    // schedules. Splitting them means a copy tweak or a component edit no longer
    // forces visitors to re-download the 600 kB Three.js runtime.
    rollupOptions: {
      output: {
        // Rolldown (Vite 8) only accepts the function form here.
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three';
          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react';
          return undefined;
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
