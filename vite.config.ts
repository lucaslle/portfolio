import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // le site est servi sous https://lucaslle.github.io/portfolio/ (GitHub Pages)
  base: '/portfolio/',
  plugins: [react()],
})
