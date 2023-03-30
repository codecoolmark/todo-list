import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src/main/js",
  base: "/",
  publicDir: "/src/main/resources/static",
  build: {
    assetsDir: "/src/main/resources/assets"
  }
})
