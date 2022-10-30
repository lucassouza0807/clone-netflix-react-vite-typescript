import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@layouts": path.resolve(__dirname, "./src/components/layouts"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@scripts": path.resolve(__dirname, "./src/scripts"),
      "@hooks": path.resolve(__dirname, "./src/hooks")
    }
  }, 
  plugins: [react()],
})
