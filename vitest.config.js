import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src/test/js",
  base: "/",
  publicDir: "/src/main/resources/static",
  test: {
    globals: true,
    environment: 'jsdom',
  },
  server: {
    port: 5173,
    strictPort: true
  },
  build: {
    assetsDir: "/src/main/resources/assets"
  }
})
