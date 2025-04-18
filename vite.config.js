// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), remix()],
  build: {
    chunkSizeWarningLimit: 1500,
  },
  base: '/my-3D-portfolio/',
})
// cool
