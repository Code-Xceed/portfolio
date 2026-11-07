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
    port: 5173,
    host: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        'how-i-started': fileURLToPath(new URL('./blogs/how-i-started/index.html', import.meta.url)),
        'first-client': fileURLToPath(new URL('./blogs/how-i-got-my-first-client/index.html', import.meta.url)),
        'interests-minecraft': fileURLToPath(new URL('./interests/minecraft/index.html', import.meta.url)),
        'interests-video-editing': fileURLToPath(new URL('./interests/video-editing/index.html', import.meta.url)),
      },
    },
  },
})
